const button_1 = document.querySelector('.buttonImage1');
const button_2 = document.querySelector('.buttonImage2');
const button_3 = document.querySelector('.buttonImage3');


function myFunction(value) {
    console.log("Hola seleccionaste", value);
    if (value === 1) {
        button_1.classList.add('selected');
        button_2.classList.add('notSelected');
        button_3.classList.add('notSelected');

        button_1.classList.remove('notSelected');
        button_2.classList.remove('selected');
        button_3.classList.remove('selected');

    } else if (value === 2) {
        button_2.classList.add('selected');
        button_1.classList.add('notSelected');
        button_3.classList.add('notSelected');


        button_2.classList.remove('notSelected');
        button_1.classList.remove('selected');
        button_3.classList.remove('selected');

    } else if (value === 3) {
        button_3.classList.add('selected');
        button_1.classList.add('notSelected');
        button_2.classList.add('notSelected');

        button_3.classList.remove('notSelected');
        button_1.classList.remove('selected');
        button_2.classList.remove('selected');
    }

}


myFunction();