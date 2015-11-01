var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    // console.log(solution(line));
  }
  // console.log(line + "hello");
  // console.log(filename + " filename");
});

function solution(line){
  console.log(line + " Meh");
  // for(var i=1; i<100;i++){
  //   if(i % 2 !== 0){
  //     line = console.log(i);
  //   }
  // }
  return line;
}
