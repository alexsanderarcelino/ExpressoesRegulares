
const Mask ={
    cpfCnpj(input) {
        let value = input.value;
        value = value.replace(/\D/, "");
        if (value.length > 14) {
            value = value.slice(0, -1);
        }

        value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        input.value = value;
    },
    cep(input){       
        let value = input.value;        
        value = value.replace(/\D/, "");        
        if(value.length > 8){
            value = value.slice(0, -1);
        }       
        value = value.replace(/(\d{5})(\d{3})/, "$1-$2");
        input.value = value;
    },
}

const Validate = {
    isCPF_CNPJ(input) {
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const cleanValues = value.replace(/\D/g, '');
        if (cleanValues.length < 14 && cleanValues.length != 14) {
            error = "CPNJ incorreto";
            Validate.displayError(input, error);
        } else if (cleanValues.length < 12 && cleanValues.length != 11) {
            error = "CPF incorreto";
        }
        input.value = value;
    },
    isCEP(input){        
        Validate.clearErrors(input);        
        let value = input.value;       
        let error = null;        
        const cleanValues = value.replace(/\D/g, '');        
        if(cleanValues.length != 8){
            error = "CEP incorreto";           
            Validate.displayError(input, error);
        }        
        input.value = value;
    },
    
    clearErrors(input){         
        const errorDiv = input.parentNode.querySelector('.error');        
        if(errorDiv){
            errorDiv.remove()
        }
    },
    
    displayError(input, error){
        const div = document.createElement('div');
        div.classList.add('error');
        div.innerHTML = error;
        input.parentNode.appendChild(div);
        input.focus();
    },
}
