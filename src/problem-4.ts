{
    // Question is  : Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type

    type Circle ={
        shape: 'circle';
        radius: number;
    }
    type Rectangle ={
        shape: "rectangle",
        width: number;
        height:number;
    }

    type CircleAndRectangle = Circle | Rectangle

    const calculateShapeArea =(obj:CircleAndRectangle): number |undefined =>{
     if(obj.shape==='circle'){
         const result = Math.PI * obj.radius * obj.radius
         return parseFloat(result.toFixed(2))
     }
     else if(obj.shape==='rectangle'){
         const result = obj.width * obj.height
         return parseFloat(result.toFixed(2))
     }
    }

  // test -1
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea)


    // test-2
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea)




}