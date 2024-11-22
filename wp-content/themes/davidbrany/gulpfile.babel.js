import { src, dest, watch, series, parallel } from 'gulp';
// in order to use the flag gulp <task> --prod:
import yargs from 'yargs';
// in order to use webpack in gulp:
import webpack from 'webpack-stream';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import del from 'del';
const PRODUCTION = yargs.argv.prod;
const DIST = 'theme/dist';

export const styles = () => {
    return src('src/scss/main.scss')
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
        .pipe(gulpif(PRODUCTION, cleanCss({ compatibility: 'ie11' })))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(dest(DIST + '/css'));
};

export const images = () => {
    return (
        src('src/images/**/*.{jpg,jpeg,png,svg,gif,webp}', {encoding: false})
            .pipe(dest(DIST + '/images'))
    );
};

export const copy = () => {
    return src(['src/**/*', '!src/{js,scss}', '!src/{js,scss}/**/*'], {encoding: false}).pipe(dest(DIST));
};

// clean the dist folder to not keep deleted files from src in dist
export const cleanDist = () => {
    return del([DIST]);
};

export const scripts = () => {
    return src('src/js/main.js')
        .pipe(
            webpack({
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: [],
                                },
                            },
                        },
                    ],
                },
                mode: PRODUCTION ? 'production' : 'development',
                devtool: !PRODUCTION ? 'inline-source-map' : false,
                output: {
                    filename: 'main.js',
                },
            })
        )
        .pipe(dest(DIST + '/js'));
};

export const watchForChanges = () => {
    watch('src/scss/**/*.scss', styles);
    watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', images);
    watch(['src/**/*', '!src/{images,js,scss}', '!src/{images,js,scss}/**/*'], copy);
    watch('src/js/**/*.js', scripts);
};

export const dev = series(
    cleanDist,
    parallel(styles, images, copy, scripts),
    watchForChanges
);
export const build = series(cleanDist, parallel(styles, images, copy, scripts));
export default dev;
