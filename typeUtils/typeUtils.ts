interface ICar{
    id: number
    name: string
    price: number
    yearBuild: number
}


interface ICarCreate extends Omit<ICar, 'id'>{

}       //буквально пропускаем айдишник утилитой Omit.

interface ICarId extends Pick<ICar, 'id'>{

}       //пиком вытаскиваем(выбираем) только id

interface IOptionalCar extends Partial<ICar>{

}       //утилитой делаем все поля интерфейса необязательными, т.е частичными
        
interface IReadonlyCar extends Readonly<ICar>{

}       //все поля доступны только для чтения


type TypeCarRecord = Record<'name' | 'price', string | number>
        //поля указываются в ' '. Т.е созданный тип может быть и string и number

interface IRequiredCar extends Required<ICar>{

}       //просто делает поля обязательными, если они были необязательными, вообщем обратка к Partial

type TypeGetName = () => string
type Return = ReturnType<TypeGetName> //просто возвращает тип, который использовался

type DublPerson = Extract<'Bob' | 'Andrey', 'Misha' | 'Bob'>
        //возвращает(извлекает) дубль(совпадения) между 

type Exc = Exclude<'Max' | 'Andrey', 'Andrey' | 'Misha'>
        //исключает по первому аргументу(параметру)

type NotNullUndef = NonNullable<string | number | null | undefined | boolean>
        //возвращает только типы, не относящиеся к null и undefined


const car: ICarCreate = {
    name: 'BMW',
    price: 50000,
    yearBuild: 1967
}

const carTwo: ICarId = {
    id: 1
}


const carOptional: IOptionalCar = {
    name: 'MB',
    yearBuild: 1976
}

/*const CarReadonly: IReadonlyCar = {
    name: 'dsf'
}*/

const carThree: TypeCarRecord ={
    //price: '21', - верно
    //name: 231 - верно
    name: 'MB',
    price: '30000' // тоже верно
}

/*const carFour: IRequiredCar = {

}*/