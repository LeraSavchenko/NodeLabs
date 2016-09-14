function wrapAsync(callback) {
  setTimeout(callback, Math.floor((Math.random() * 1000)));
}

exports.readConfig = (name, callback) => {
  wrapAsync(() => {
    console.log('(1) Config loaded');
    callback({ name });
  });
}

exports.selectFromDb = (query, callback) => {
  wrapAsync(() => {
    console.log('(2) SQL query executed');
    callback([ { name: 'Kiev' } , { name: 'Roma' } ]);  
  });
}

exports.getHttpPage = (url, callback) => {
  wrapAsync(() => {
    console.log('(3) Page retrieved');
    callback('<html>Some archaic web here</html>'); 
  });
    
}

exports.readFile = (path, callback) => {
  wrapAsync(() => {
    console.log('(4) Readme file loaded');
    callback('file content'); 
  });
}