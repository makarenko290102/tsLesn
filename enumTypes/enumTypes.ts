enum EnumRoles{
    ADMIN = 0, GUEST = 1 , USER = 2
}

const enum EnumColors{
    black, pink, green
}

interface IEmployee {
    name: string,
    role: EnumRoles
    color: EnumColors
}


const user: IEmployee = {
    name: 'Bob',
    role: EnumRoles.ADMIN,
    color: EnumColors.black
} 

//console.log(EnumRoles[EnumRoles.ADMIN])