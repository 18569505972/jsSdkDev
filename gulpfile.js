const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const del = require('del')
const config = require('./config/index')

// 清空文件夹
gulp.task('clean', async() => {
    await del([`${config.outputPath}/**`])
})

// 转码、压缩js文件
gulp.task('jsMin', () => {
    return gulp.src(config.entryPath)
        .pipe(babel())
        .pipe(rename({
            dirname: "",
            basename: config.version,
            prefix: config.filename,
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(gulp.dest("lib"))
        .pipe(uglify())
        .pipe(gulp.dest('lib'))
})
// 顺序执行
gulp.task('default', gulp.series('clean', 'jsMin', (done) => done()));