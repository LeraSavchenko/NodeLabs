'use strict'
var asyncFunctions = require('./asyncEmulation');

var readConfig = asyncFunctions.readConfig;
var selectFromDb = asyncFunctions.selectFromDb;
var getHttpPage = asyncFunctions.getHttpPage;
var readFile = asyncFunctions.readFile;

// Array of functions
let fns = [readConfig, selectFromDb, getHttpPage, readFile];
let names = ['myConfig', 'select * from cities', 
             'http://kpi.ua', 'README.md'];

// Call example
parallelAsync(fns, () => { console.log('Done'); });

// Implementation
function parallelAsync(fns, done) {
    var counter = 0;
    
    fns.forEach((item, i, fns) => {
        item(names[i], () => {
            if (++counter === fns.length) {
                done();
            }
        });
    });  
};


// Call example
sequentialAsync(fns, () => { console.log('Done'); });

// Implementation
function sequentialAsync(fns, done) {
    var counter = 0;
    call(fns, counter, () => {done();});
};

function call(arr, it, callback) {
    arr[it](names[it], () => {    
        if (++it < arr.length) {
            call(arr, it, callback);
        }
        else {
            callback();
        }
    }); 
};

