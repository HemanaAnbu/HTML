// import { readFile } from 'node:fs';

// readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const fs = require("fs");


 const path = require("path");
// console.log(path.join(__dirname,"data","sample.txt"));


// readfile("./data/sample.txt",
//     (err,content) =>{
//         if (err)throw err
//         console.log(content);
//     }
// )


fs.readFile("./data/sample.txt","utf-8",(err,content) =>{
    if (err) throw err;
    console.log(content);
});
const text = " this is story of the life\n this is the code world\n makeinffj"
// console.log(__dirname);
// console.log(__filename);
fs.writeFile(path.join(__dirname,"data","test.txt"),text,
 (err) =>{
    if (err)throw err
    console.log("file as been success");
 }
);
fs.appendFile(path.join(__dirname,"data","test.txt"),"\n this the ffj",
(err) => {
    if(err) throw err;
    console.log("content has beeen added");
}
);
console.log("thankyiu");

