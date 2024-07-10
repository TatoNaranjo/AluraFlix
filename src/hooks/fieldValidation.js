import { errorTypes,messages } from "../pages/NewVideo/validationData";
const formField = document.querySelectorAll("[required]");

formField.forEach((field)=>{
    field.addEventListener("blur",()=>checkField(field));

})
export default function checkField (field){
    let message="";
    errorTypes.forEach(error =>{
        if(field.validity[error]){
            message = messages[field.name][error];
        }
    })
    const validityInputCheck = field.checkValidity();
    if(!validityInputCheck){
        field.setAttribute("placeholder",message);
        field.classList.add("error");
    }
    else {
        field.classList.remove("error");
    }
}