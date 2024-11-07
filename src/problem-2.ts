{

    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    const removeDuplicates = (arr: number[]): number[] => {

        let newArray: number[] = []
        arr.forEach((num: number) => {
            const finding = newArray.find((num1: number) => num == num1)
            if (!finding) {
                newArray.push(num)
            }
        })
        return newArray
        
    }

    // test 
    const arr: number[] = [1, 2, 2, 3, 4, 4, 5]

    const result1: number[] = removeDuplicates(arr)
    console.log(result1)





}