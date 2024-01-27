class Car{
   brand:string
   price: number

/**
 *
 */

    constructor(brand: string, price: number) {
        this.brand = brand
        this.price = price
    }
    getInfo(): string{
        return `${this.brand} - ${this.price}`
    }
}


let e: string = new Car('BMW', 20000).getInfo();
console.log(e);