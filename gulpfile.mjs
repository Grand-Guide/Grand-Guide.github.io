import gulp from 'gulp';
import shell from 'gulp-shell';
import filter from 'gulp-filter-each';
import fileInclude from 'gulp-file-include';
import through from 'through2';
import prettyHtml from 'gulp-pretty-html';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import yargs from 'yargs';

const sass = gulpSass(dartSass);
const port = 3001;

// Configuração de yargs para aceitar argumentos
const argv = yargs(process.argv.slice(2)).argv;
const relativePath = argv.relativePath || false;

gulp.task('build-template', async function () {
  return new Promise((resolve) => {
    gulp
      .src('src/template/*.html')
      .pipe(filter((content) => content.match(/<html>/gi)))
      .pipe(
        fileInclude({
          prefix: '@@',
          basepath: '@file',
        })
      )
      .pipe(
        through.obj(async function (file, enc, cb) {
          let html = file.contents.toString();

          // merge css link and scripts to head
          const links = [];
          const cssRegx = /<link .*\/>\n/g;
          html = html.replace(cssRegx, (match) => {
            if (links.indexOf(match) === -1) {
              links.push(match);
            }
            return '';
          });

          const scriptRegx = /<script .*><\/script>\n/g;
          html = html.replace(scriptRegx, (match) => {
            if (links.indexOf(match) === -1) {
              links.push(match);
            }
            return '';
          });

          html = html.replace(
            '<!-- Please DO NOT remove this line, all link and script tags will be merged to here -->\n',
            links.join('')
          );

          // remove comment
          html = html.replace(/<!-- prettier-ignore -->/g, '');

          // change path from absolute to relative
          if (relativePath) {
            html = html.replace(/href="\/css\//g, 'href="./css/');
            html = html.replace(
              /--src:url\(\/assets\//g,
              '--src:url(../assets/'
            );
            html = html.replace(/src="\/assets\//g, 'src="./assets/');
          }

          file.contents = Buffer.from(html);
          this.push(file);
          cb();
        })
      )
      .pipe(prettyHtml())
      .pipe(gulp.dest('./web'))
      .on('end', resolve);
  });
});

gulp.task('build-scss', async function () {
  return new Promise((resolve) => {
    gulp
      .src('src/scss/*.scss')
      .pipe(sass().on('error', sass.logError)) // Corrigindo a chamada do método
      .pipe(autoprefixer({ cascade: false }))
      .pipe(gulp.dest('./web/css'))
      .on('end', resolve);
  });
});

gulp.task('copy-css', async function () {
  return new Promise((resolve) => {
    gulp
      .src('src/css/*.css')
      .pipe(autoprefixer({ cascade: false }))
      .pipe(gulp.dest('./web/css'))
      .on('end', resolve);
  });
});

gulp.task('copy-js', async function () {
  return new Promise((resolve) => {
    gulp.src('src/js/**/*.*').pipe(gulp.dest('./web/js')).on('end', resolve);
  });
});

gulp.task('copy-assets', async function () {
  return new Promise((resolve) => {
    gulp
      .src('src/assets/**/*.*')  // Verifique se o caminho está correto
      .pipe(gulp.dest('./web/assets'))
      .on('end', resolve);
  });
});

gulp.task('copy-fonts', async function () {
  return new Promise((resolve) => {
    gulp.src('src/fonts/*.*').pipe(gulp.dest('./web/fonts')).on('end', resolve);
  });
});

gulp.task(
  'build',
  gulp.series(
    'build-template',
    'build-scss',
    'copy-css',
    'copy-js',
    'copy-assets',
    'copy-fonts'
  )
);

gulp.task('watch', function (resolve) {
  const watchSrcFolders = [
    'src/template/**',
    'src/scss/**',
    'src/css/**',
    'src/js/**',
  ];
  gulp
    .watch(watchSrcFolders, gulp.series('build'))
    .on('change', browserSync.reload);
  resolve();
});

gulp.task('server', function () {
  browserSync.init({
    ui: false,
    server: {
      port,
      baseDir: './',
      directory: true,
    },
    startPath: '/index.html', // Configura a página inicial
  });
});

// dev server
gulp.task('dev', gulp.series('build', 'watch', 'server'));

gulp.task('deploy-init', gulp.series(shell.task(['firebase init'])));

gulp.task('deploy', gulp.series('build', shell.task(['firebase deploy'])));
