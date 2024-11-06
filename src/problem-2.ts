{

    const removeDuplicates=(arr : number[]):number[] =>{
    
        let newArray: number[] = []
        arr.forEach((num : number)=>{
            
            const finding=newArray.find((num1:number)=> num==num1)
            if(!finding){  
                newArray.push(num)      
            }
        })
        return newArray
       
    }

  const result1 :number[] =  removeDuplicates([1, 2, 2, 3, 4, 4, 5,8,6,7,])
  console.log(result1)





}