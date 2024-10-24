import gulp from 'gulp';
import zip from 'gulp-zip';
import { readFileSync } from 'fs';

const manifest = JSON.parse(readFileSync('./src/manifest.json'));
const name = manifest.short_name;
const version = manifest.version;

export function buildZip() {
  const zipFileName = `${name}-${version}.zip`;
  return gulp.src('src/**/*')
    .pipe(zip(zipFileName, { compress: false }))
    .pipe(gulp.dest('.'));
}

gulp.task('build-zip', buildZip);
