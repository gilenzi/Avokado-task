const {src, dest} = require('gulp');

const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer-core');

gulp.task('serve',['css'],function(){
    gulp.watch("./css/*.css",['css']);
});

gulp.task('css',function(){
    const plugin =[
        autoprefixer()
    ];
    return gulp.src('./css/*.css')
    .pipe(postcss(plugin))
    .pipe(gulp.dest('./dest'));
});

gulp.task('default',['serve']);