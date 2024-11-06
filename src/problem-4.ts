{

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


    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea)

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea)




}