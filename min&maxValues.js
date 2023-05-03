let minandmax = (args) =>
{
    let minval=Math.min(...args)
    let maxval=Math.max(...args)
    console.log(`{max:${maxval},min:${minval}}`);
}


minandmax([5, 2, 7, 1, 9])