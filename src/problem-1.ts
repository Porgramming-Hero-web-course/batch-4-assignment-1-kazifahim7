{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    const sumArray=(arr:number[]):number=>{
        return arr.reduce((before,after)=>before +after,0)
    }


    //test
    const arr: Array<number> = [1, 2, 3, 4, 5]
    const result : number = sumArray(arr)
    console.log(result)










}