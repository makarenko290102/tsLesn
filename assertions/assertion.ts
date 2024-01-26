

const inputElement  = document.querySelector('input')
//const valueOne = inputElement?.value 

const valueOne = (inputElement as HTMLInputElement). value //более уточнённо. элемент является html элементом 
const ValueOne = (<HTMLInputElement>inputElement). value //идентично


//not null assrt-s

const getLength = (text: string | null) =>{
    return text!.length
}

//getLength(null) // - 
//getLength('fdsfa') // -

// ! - не unknown | undefined