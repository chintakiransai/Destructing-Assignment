let randomnum = (...args) => {
    let len=args.length-1;
    let res=[args[0],args[1],args[len]]
  console.log(res);
}


randomnum(1,2,3,4,5);

// Output: [ 1, 2, 5 ]