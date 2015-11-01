// var fs  = require("fs");
// var filename = process.argv[2] || 'test.txt';
//
// fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
//   if (line != "") {
//     console.log(solution(line));
//   }
// });

function solution(line){
  for(var i=1; i<100;i++){
    if(i % 2 !== 0){
      line = console.log(i);
    }
  }
  return line;
}
var array = [1,2,3,4,5,6,7,8,9,10,11,12]
