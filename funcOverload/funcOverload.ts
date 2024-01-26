function getCar(brand: string): string
function getCar(brand: string, price: number) : string

function getCar(brand: string, price?: number) : string{
    return  price? `Название: ${brand}. Цена: ${price}.` : `Название: ${brand}`
}



const carOne = getCar('bmw')
const carTwo = getCar('bms', 10000)
//const carThree = getCar('bmw', 20000, 1000)