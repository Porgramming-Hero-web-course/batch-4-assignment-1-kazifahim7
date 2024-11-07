# The significance of union and intersection types in Typescript 

## union types in Typescript 

A union type describes a value that can be one of several types. We use the vertical bar `( | )` to separate each type, so number | string | boolean is the type of a value that can be a number , a string , or a boolean . For explain i write a code in below .

## Example 

```typescript
type Value = number | string | boolean

const printValue=(input:Value)=>{
    return input;
}

console.log(printValue("Kazi Fahim"))

```

## intersection  types in Typescript 

An intersection type combines two or more types to create a new type that has all properties of the existing types.The type order is not important when you combine types.The intersection symbol is `&`.For explain i write code in below 


## Example 

```typescript
type Animal1 ={
    name : string;
}
type Animal2={
    color : string
}

type Animal = Animal1 & Animal2 ;

const getAnimal=(input:Animal)=>{
    return `the animal is ${input.name} and is color is ${input.color}`
}

console.log(getAnimal({name : "cat",color : "white"}))
 

```

