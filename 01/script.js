// MongoDB does'nt creates ID

/*
TOPICS COVER
1. Fundamental of Javascript
2. Arrays and Objects
3. Functions Return
4. Async js coding
*/

// var arr = [1, 2, 3, 4, "hey", {}, true, function(){}, []];

var arr = [1, 2, 3, 4];

// foreach, map, filter, find, indexof

// foreach

arr.forEach(function(val) {
  console.log(val + " hello");
})

// map

var newarr = arr.map(function(val) {
  return val*3;
})
console.log(newarr);

// filter

var ans = arr.filter(function(val) {
  if(val >= 3) {
    return true;
  }
  else return false;
})
console.log(ans);

// find

var ans = arr.find(function(val) {
  if(val === 2) {
    return val;
  }
})
console.log(ans);

// async js coding

// line by line code chale isey khate hain sychronous
// jo bhi code async nature ka ho usey side stack mein bhej do and agle code ko chalao jo bhi sync nacture ka ho , jab bhi sara syn code chal jaaye, tab check karo ki async code complete hua ya nahi and agar wo complete hua to usey main stack mein laao and chalao