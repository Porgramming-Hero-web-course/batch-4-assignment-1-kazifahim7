{

    //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

    class  Car {
        make :string;
        model:string;
        year : number
        constructor(make:string,model:string,year:number) {
            this.make=make;
            this.model=model;
            this.year= year ;
            
        }
        getCarAge(){
            const result= new Date().getFullYear() - this.year
            if(result>0){
                return `${result} (assuming current year is ${new Date().getFullYear()}) `
            }
            else{
                return `impossible`
            }
        }



    }

    // Test

    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge())







}