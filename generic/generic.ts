function entity<T>(args: T): T{
    return args
}

enum EnumCol {
    id = 1
 }

entity(2);
entity('name')
entity(true)
entity(EnumCol.id)
entity<string>('1')



class Car<T>{
    private name: T
    /**
     *
     */
    constructor(name: T) {
        this.name = name 
    }

    getName(): T{
        return this.name 
    }
}

new Car<string>('Geely')
new Car<number>(1)




interface IPair<K, V>{
    key: K
    value: V
}

const pairOne: IPair<string, number> ={
    key: '1',
    value: 1
}

const pairTwo: IPair<string, string> ={
    key: '2',
    value: '2'
}

type TypeLength = {
    length: number
}

function getNameLEnght<T extends TypeLength>(entity: T): number {
    return entity.length
}

//getNameLEnght('nbvc')
