import { Documents } from "./InterfaceUtils"


export const clearData = (documents: Documents[]) =>{
   return documents.map((document)=>{
        return {
            id: document.id,
            username: document.username,
            password: document.password,
            email: document.email,
            phone: document.phone,
            role: document.role,
        }
    })
}