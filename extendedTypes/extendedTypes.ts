type TypeIsNumber<T> = T extends number ? 'Да' : 'Нет'

type TypeOne = TypeIsNumber<string>
type TypeTwo = TypeIsNumber<number>
type TypeThree = TypeIsNumber<boolean>
//простая проверка generic на тип








type TypeBrand = 'MB' | 'BMW' | 'Geely'
type TypePrice = 10000 | 20000| 45000
type TypeMoney = '$' | '₽'

type TypeCar = `${TypeBrand} ${TypePrice}${TypeMoney}`

const car1: TypeCar = "BMW 10000$"
const car2: TypeCar = "BMW 45000₽"
const car3: TypeCar = "MB 45000$"
//IS выдает список возможных вариантов для переменной





