let phoneInput = document.querySelector('.input-form');
let btnNext = Array.from(document.getElementsByClassName('next-btn'));
let backBtn = Array.from(document.getElementsByClassName('back-btn'));
let tabContent = Array.from(document.getElementsByClassName('none'));
let tab1 = document.getElementsByClassName('tabs1')
let main = document.querySelector('main');
let nickName = document.getElementById('field-nickname');
let namem = document.getElementById('field-name');
let surname = document.getElementById('field-surname');


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
    }


    let result = true;

    const allInputs = form.querySelectorAll('input');
    
    for(let input of allInputs){
        removeError(input);

        if(input.dataset.required == 'true'){
            if(input.value == ''){
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
        tab1[0].classList.add('active');
        main.classList.add('none');
        console.log('все норм'); // сюда написать куда отправлять 
    };
});

document.getElementById('button-send').addEventListener('click', function(event){
    event.preventDefault();
    if(validation(this) === true){
        alert('отправлена')
        console.log('все норм'); // сюда написать куда отправлять 
    };
});

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

btnNext.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        showTabs(index + 1);
    });
});

backBtn.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if(index === 0 ){
            main.classList.remove('none');
        }
        showTabs(index - 1);
    })
});

function showTabs(index){
    tabContent.forEach((tab) => {
        tab.classList.remove('active');
    });
    tabContent[index].classList.add('active');
}


function inputName(name, length){
    name.addEventListener('input', (e) => {
        const maxLength = length;
        const input = e.target;
        const value = input.value;
        const filteredValue = value.replace(/[^a-zA-Z0-9]/g, '').substring(0, maxLength);
        input.value = filteredValue;
    });
};
inputName(nickName, 30);
inputName(namem, 50);
inputName(surname, 50);


// let addInput = document.getElementById('button-add');
// let inputContainer = document.getElementsByClassName('input-box2');

// addInput.addEventListener('click', (e) => {
//     e.preventDefault();
//     const inputBox = document.createElement('div');
//     inputBox.classList.add('input-box2');
    
//     const inputFields = document.querySelectorAll('.tabs2__input');
//     const lastInput = inputFields[inputFields.length - 1];
//     const lastId = parseInt(lastInput.id.split('-')[1]);
//     const newId = `field-advantages-${lastId + 1}`;

//     const newInput = document.createElement('input');
//     newInput.type = 'text';
//     newInput.classList.add('tabs2__input');
//     newInput.id = newId;
//     newInput.required = true;

//     const removeBtn = document.createElement('button');
//     removeBtn.classList.add('.bscet');
//     removeBtn.textContent = 'del';
//     removeBtn.addEventListener('click', () => {
//         inputContainer.removeChild(inputBox); // Удаление строки с полем ввода
//       });
//     inputBox.appendChild(newInput);
//     inputBox.appendChild(removeBtn);
//     console.log('hey');
// });