
interface IUserAge{
    age: number
}

interface IUser extends IUserAge{
    name: string
    email: string
}


type TypePerson = {
    age: number
}

type TypeUser = {
    name: string, 
    email: string
   // age: 23
} //& TypePerson

const user: IUser = {
    email: '2312dfdsfs@mail',
    name: 'Sam',
    age: 30
}



