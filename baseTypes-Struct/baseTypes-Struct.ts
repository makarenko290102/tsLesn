type TypeUser = {
    name: string
    age: number
    //adress: string
}

type TypeAdress = {
    city: string
    country: string
} 



const user: TypeUser = {
    age: 25,
    name: 'Bob'
}

const address: TypeAdress = {
    city: 'MSC',
    country: 'RUS'
}


//const common = {
/*...adress, ...user*/
//...user, ...adress
//}

let common: TypeAdress & TypeUser

common = {
    ...user, 
    ...address,
}
console.log(common);
