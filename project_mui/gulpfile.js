var gulp = require('gulp');

var sass = require('gulp-sass');

var server = require('gulp-webserver');

gulp.task('server',function(){
	return gulp.src('src')
	.pipe(server({
		port: 9999,
		livereload: true,
		open: true,
		proxies: [
			{
				source: '/api/get/train_tickets', target: 'http://169.254.85.129:3000/api/get/train_tickets'
			}
		]
	}))
})

gulp.task('scss',function(){
	return gulp.src('./src/scss/*scss')
	.pipe(sass())
	.pipe(gulp.dest('./src/css'))
})

gulp.task('watch',function(){
	return gulp.watch('./src/scss/*.scss',gulp.series('scss'))
})

gulp.task('dev', gulp.series('scss','server','watch'))