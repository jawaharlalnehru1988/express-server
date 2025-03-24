export interface Container<T>{
    value: T;
}

// const numberContainer:Container<number> = {value: 23};
// const stringContainer:Container<string> = {value: "bag"};

// implement a generic function that swaps two values of the same type

export function swap<T>(a:T, b:T): [T, T]{
    return [b, a];
}

export function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

export function createPair<A, B>(first: A, second: B): {first: A, second:B}{
    return {first, second};
}

export interface Processorss<T>{
    process: (data: T)=> void;
}

const numberProcessor: Processorss<number> = {
    process: (data: number) => {
        console.log(`Processing number: ${data}`);
    }
}; 

numberProcessor.process(42);


interface Watch<T>{
    data: T,
    brand: string,
    sell:(obj:T)=> void
}

const sellWatch:Watch<{id: number, product:string}> = {
    data: {id: 21, product: "titan"},
    brand: "fastrack",
    sell:(data)=>{
    console.log('data :', data);

    }
}

console.log(sellWatch.data);
console.log(sellWatch.brand);
console.log(sellWatch.sell({id: 21, product: "titan"}));



