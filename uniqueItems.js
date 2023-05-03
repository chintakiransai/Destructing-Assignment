
let removedulip = (...args) =>
{
  console.log(new Set(args));
}

removedulip(1,2,2,2,3,3,4,5);

//output: Set(5) { 1, 2, 3, 4, 5 }