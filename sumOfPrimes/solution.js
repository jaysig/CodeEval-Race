var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var count = 0;
  for (var i=3; i<1000;i++){
    add = true;
    for(var x=2;x<i;x++){
      if(i % x === 0){
        add = false;
      }
    }
    count+=i;
  }
  return count;
}
