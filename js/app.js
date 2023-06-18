const phoneInput = document.querySelector('.input-form');
const btnNext = Array.from(document.getElementsByClassName('next-btn'));
const backBtn = Array.from(document.getElementsByClassName('back-btn'));
const tabContent = Array.from(document.getElementsByClassName('none'));
const tab1 = document.getElementsByClassName('tabs1')
const main = document.querySelector('main');
const nickName = document.getElementById('field-nickname');
const namem = document.getElementById('field-name');
const surname = document.getElementById('field-surname');
const addInput = document.getElementById('button-add');
const inputContainer = document.getElementById('inputContainer');
const remove1 = document.getElementById('button-remove-1');
const remove2 = document.getElementById('button-remove-2');
const remove3 = document.getElementById('button-remove-3');






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

let form = document.getElementById('add-form').addEventListener('submit', function(event){
    event.preventDefault();
    if(validation(this) === true){
        tab1[0].classList.add('active');
        main.classList.add('none');
        let formData = new FormData(form);
        // let request = new XMLHttpRequest();
        // // request.open("POST", "https://api.sbercloud.ru/content/v1/bootcamp/frontend", true)
        // request.onreadystatechange = function() {
        //     if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        //       console.log(request.responseText);
        //     } else {
        //       console.log("Произошла ошибка при отправке формы.");
        //     }
        //   };
        // request.send(formData);
    };
});




document.getElementById('button-send').addEventListener('click', function(event){
    event.preventDefault();
    if(validation(this) === true){
        document.getElementById("my-modal").classList.add("open")
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
        const filteredValue = value.replace(/[^a-zA-Zа-яА-Я]/g, '').substring(0, maxLength);
        input.value = filteredValue;
    });
};
inputName(nickName, 30);
inputName(namem, 50);
inputName(surname, 50);




function removeBtn(btn){
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
    });
}
removeBtn(remove1);
removeBtn(remove2)
removeBtn(remove3)

addInput.addEventListener('click', (e) => {
    const inputBox = document.createElement('div');
    inputBox.classList.add('input-box2');
    e.preventDefault();
    const inputFields = document.querySelectorAll('.tabs2__input');
    const lastInput = inputFields[inputFields.length - 1];
    const lastId = parseInt(lastInput.id.split('-')[1]);
    const newId = `field-advantages-${lastId + 1}`;

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.classList.add('tabs2__input');
    newInput.placeholder = 'placeholder';
    newInput.id = newId;
    newInput.required = true;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('bscet');
    // removeBtn.textContent = 'del';
    removeBtn.addEventListener('click', () => {
        e.preventDefault();
        inputContainer.removeChild(inputBox);
      });

    const createImg = document.createElement('img');
    createImg.src = 'img/bascet.svg';

    inputBox.appendChild(newInput);
    inputBox.appendChild(removeBtn);
    removeBtn.append(createImg);
    inputContainer.appendChild(inputBox);
    console.log('hey');
});




document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open");

})

document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});