var browserSync = require('browser-sync'),
    gulp        = require('gulp'),
    LiveServer  = require('gulp-live-server'),
    source      = require('vinyl-source-stream'),
    babelify    = require('babelify'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    exec        = require('child_process').exec,
    lint        = require('gulp-eslint'),
    concat      = require('gulp-concat'),
    config      = {
        paths : {
            dist     : './dist',
            js       : './app/**/*.js*',
            mainJs   : './app/main.jsx',
            serverJs : './server/**/*.js*',
            css      : [
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                'node_modules/toastr/toastr.css'
            ]
        }
    };

function runCommand(command) {
    return function() {
        exec(command, function(err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
        });
    }
};

gulp.task('live-server', function() {
    new LiveServer('server/main.js').start();
});

gulp.task('bundle', function() {
    return browserify({
            entries : config.paths.mainJs,
            debug   : true
        })
        .transform(babelify)
        .transform(reactify)
        .transform(babelify.configure({
            stage      : 0,
            sourceMaps : true
        }))
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', function() {
    return gulp.src([
            config.paths.js,
            config.paths.serverJs
        ])
        .pipe(lint({
            config : 'eslint.config.json'
        }))
        .pipe(lint.format());
});

gulp.task('temp', function() {
    gulp
        .src([
            'bower_components/**'
        ])
        .pipe(gulp.dest(config.paths.dist + '/bower_components'));
});

gulp.task('bundle-n-reload', ['bundle'], browserSync.reload);

gulp.task('observe-all', function() {
    gulp.watch('app/**/*.*',        ['bundle-n-reload']);
    gulp.watch('app/*.*',           ['temp']);
    gulp.watch('./server/**/*.js*', ['live-server']);
});

gulp.task(
    'serve',
    [
        //'start-mongo',
        'live-server',
        'bundle',
        'css',
        'lint',
        'temp',
        'observe-all'
    ],
    function() {
        browserSync.init(null, {
            proxy : 'http://localhost:7777',
            port  : 9001
        });
    }
);

gulp.task('default', ['serve']);
