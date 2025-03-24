export interface Raghav {
    id: number;
    name: string;
}

export interface User{
    name: string;
    age: number;
    job: string;
    street: string;
    city: string;
}

export interface Teacher{
    fname: string;
    lname: string;
    class: string;
    salary?: number;
}

export interface Person{
    initialName: string;
    age: number;
    occupation: string;
}


export interface Responsibility{
    role: string;
    description: string;

}

export interface Position{
    name: string;
    age: number;
    email: string;
}


export interface Employee{
    id: number;
    dept: string;
    cabin: string;
    tableNo: number;
    email: string;
}


export interface Documents{
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    role:string;
}