var pkg = require('./package.json');
var path = require('path');
var Builder = require('systemjs-builder');
var name = pkg.name;

var builder = new Builder();
var config = {
        baseURL: '.',
        transpiler: 'typescript',
        typescriptOptions: {
            module: 'cjs'
        },
        map: {
            typescript: './node_modules/typescript/lib/typescript.js',
            '@angular': './node_modules/@angular',
            rxjs: './node_modules/rxjs',
            brace: './node_modules/brace/index.js'
        },
        paths: {
            '*': '*.js'
        }
        ,
        meta: {
            './node_modules/@angular/*': {
                build: false
            }
            ,
            './node_modules/rxjs/*': {
                build: false
            }
            ,
            './node_modules/brace/*': {
                build: false
            }
        }
    }
    ;

builder.config(config);

builder
    .bundle(name, path.resolve(__dirname, 'bundles/', name + '.js'))
    .then(function () {
        console.log('Build complete.');
    })
    .catch(function (err) {
        console.log('Error', err);
    });
