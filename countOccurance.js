let k="count string occurrence in a string"

let words=k.split(' ');
let count = new Map();
for(let i=0;i<words.length;i++)
{
    let word=words[i];
     if(count.has(word))
     {
        count.set(word,(count.get(word))+1);
     }
     else{
        count.set(word,1);
     }
}

console.log(count);

// Output: Map(5) {
//     'count' => 1,
//     'string' => 2,
//     'occurrence' => 1,
//     'in' => 1,
//     'a' => 1
//   }