/*
 * slush-bootstrap
 * https://github.com/arvindr21/slush-bootstrap
 *
 * Copyright (c) 2014, Arvind
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path'),
    gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer');


gulp.task('default', function (done) {
    var prompts = [{
        type: 'input',
        name: 'appName',
        message: 'What is the name of your application?',
        default: path.basename(process.cwd())
    }, {
        type: 'input',
        name: 'appDescription',
        message: 'How would you describe your application?',
        default: 'An awesome Bootstrap app'
    }, {
        type: 'list',
        name: 'stylesheetEngine',
        message: 'Select a stylesheet engine?',
        choices: [{
            name: "CSS",
            value: "css"
          }, {
            name: "SASS",
            value: "sass"
          }, {
            name: "LESS",
            value: "less"
          },
            {
            name: "Stylus",
            value: "stylus"
          }

        ],
        default: 'css'
      }];

    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers) {
                return done();
            }
            answers.appNameSlug = _.slugify(answers.appName);

            if(answers.stylesheetEngine == 'css')
            {
                gulp.src([__dirname + '/templates/fonts/**' ])
                    .pipe(conflict('./dev/assets/fonts/'))
                    .pipe(gulp.dest('./dev/assets/fonts/'));


                gulp.src([__dirname + '/templates/css/**'])
                    .pipe(template(answers))
                    .pipe(rename(function (file) {
                        if (file.basename[0] === '_') {
                            file.basename = '.' + file.basename.slice(1);
                        }
                    }))
                    .pipe(conflict('./'))
                    .pipe(gulp.dest('./'))
                    .pipe(install())
                    .on('end', function () {
                        done();
                    });    
            }

            if(answers.stylesheetEngine == 'sass')
            {
                gulp.src([__dirname + '/templates/fonts/**' ])
                    .pipe(conflict('./dev/assets/fonts/'))
                    .pipe(gulp.dest('./dev/assets/fonts/'));


                gulp.src([__dirname + '/templates/sass/**'])
                    .pipe(template(answers))
                    .pipe(rename(function (file) {
                        if (file.basename[0] === '_') {
                            file.basename = '.' + file.basename.slice(1);
                        }
                    }))
                    .pipe(conflict('./'))
                    .pipe(gulp.dest('./'))
                    .pipe(install())
                    .on('end', function () {
                        done();
                    });    
            }
        });
});
