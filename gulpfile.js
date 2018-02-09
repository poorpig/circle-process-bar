const gulp=require('gulp');
const postcss=require('gulp-postcss');
const sass=require('gulp-sass');
const path=require('path');
const compressJs=require('gulp-uglify');
const compressCss=require('gulp-clean-css');
const babel=require('gulp-babel');
const rename=require('gulp-rename');


/**
 * css路径
 */
const css_path_source=path.resolve(__dirname,'src/css/*.scss');
const css_path_target=path.resolve(__dirname,'dist/css/');

/**
 * js路径
 */
const js_path_source=path.resolve(__dirname,'src/js/*.js');
const js_path_target=path.resolve(__dirname,'dist/js/');

gulp.task('compile-css',()=>{
  return gulp.src(css_path_source)
        .pipe(sass())
        .pipe(postcss())
        .pipe(rename({extname:'.css'}))        
        .pipe(gulp.dest(css_path_target))
        .pipe(compressCss())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(css_path_target));        
});

gulp.task('compile-js',()=>{
  return gulp.src(js_path_source)
        .pipe(babel())
        .pipe(gulp.dest(js_path_target))
        .pipe(compressJs())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(js_path_target));
});

gulp.task('watch',()=>{
  gulp.watch(css_path_source,['compile-css']);
  gulp.watch(js_path_source,['compile-js']);
});

gulp.task('default',['compile-css','compile-js']);