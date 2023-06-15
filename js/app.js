function validation(form){

    function removeError(input){
        const parent = input.parentNode;

        if(parent.classList.contains('error')){
            parent.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }
    }

    function createError(input, text){
        const parent = input.parentNode;
        
        const errorLable = document.createElement('label');
        errorLable.classList.add('error-label');
        errorLable.textContent = text;
        
        parent.classList.add('error');
        parent.append(errorLable);
        console.log(parent);
    }


    let result = true;

    const allInputs = form.querySelectorAll('input');
    
    for(let input of allInputs){
        removeError(input);

        if(input.dataset.required == 'true'){
            if(input.value == ''){
                console.log('error');
                createError(input, 'Поле не заполнено');
                result = false;
            }
        }   
    }
    return result;
}

document.getElementById('add-form').addEventListener('submit', function(event){
    event.preventDefault();
    if(validation(this) === true){
        alert('all okay');
        console.log('все норм'); // сюда написать куда отправлять 
    };
});

let phoneInput = document.querySelector('.input-form');

phoneInput.addEventListener('input', () =>{
    let phoneNumber = phoneInput.value;
    phoneNumber = phoneNumber.replace(/\D/g,'');
    phoneNumber = phoneNumber.slice(0, 11);

    let formattedPhoneNumber = '+7(';
    if(phoneNumber.length > 1){
        formattedPhoneNumber += phoneNumber.substring(1, 4);
    }
    if(phoneNumber.length > 4){
        formattedPhoneNumber += ') ' + phoneNumber.substring(4, 7);
    }
    if(phoneNumber.length > 7){
        formattedPhoneNumber += '-' + phoneNumber.substring(7, 9);
    }
    if(phoneNumber.length > 9){
        formattedPhoneNumber += '-' + phoneNumber.substring(9);
    }

    phoneInput.value = formattedPhoneNumber;
});

phoneInput.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
      event.preventDefault();
      
      let phoneNumber = phoneInput.value.replace(/\D/g, '');
      phoneNumber = phoneNumber.slice(0, -1);
      
      let formattedPhoneNumber = '+7(';
      if (phoneNumber.length > 1) {
        formattedPhoneNumber += phoneNumber.substring(1, 4);
      }
      if (phoneNumber.length > 4) {
        formattedPhoneNumber += ') ' + phoneNumber.substring(4, 7);
      }
      if (phoneNumber.length > 7) {
        formattedPhoneNumber += '-' + phoneNumber.substring(7, 9);
      }
      if (phoneNumber.length > 9) {
        formattedPhoneNumber += '-' + phoneNumber.substring(9);
      }
      
      phoneInput.value = formattedPhoneNumber;
    }
  });