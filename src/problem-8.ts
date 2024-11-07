{


    //Question is : Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
    


    const validateKeys=<T extends Record<string,unknown> >(obj: T, keys: (keyof T)[]) : boolean =>{
        for(let key of keys){
            if(!(key in obj)){
                return false
            }
        }
       return true
    }


    // test

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));


















}