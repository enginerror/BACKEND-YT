// writeFile
// appendFile
// rename
// copyFile
// unlink
// remdir

const { writeFile, appendFile, rmdir } = require('node:fs');
const fs = require('node:fs/promises');


// fs.writeFile("hey.txt", "Hey bro, What is your name : ", function(err) {
//   if(err) console.error(err);
//   else console.log("done");
// })


// fs.appendFile("hey.txt", " Ayaan", function(err) {
//   if(err) console.error(err);
//   else console.log("done");
// })


// fs.rename("hey.txt", "hello.txt", function(err) {
//   if(err) console.error(err)
//   else console.log("done");
// })


// fs.copyFile("hello.txt", "./file/hey.txt", function(err) {
//   if(err) console.error(err.message)
//   else console.log("done");
// })


// fs.unlink("hello.txt", function(err) {
//   if(err) console.error(err)
//   else console.log("removed");
// })


fs.rmdir("./file", function(err) {
  if(err) console.error(err)
  else console.log("removed");
})