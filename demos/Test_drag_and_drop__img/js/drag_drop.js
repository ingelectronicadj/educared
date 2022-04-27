/*************Test 1************ */
function drop(ev) {
    //evita que el navegador maneje los datos de manera predeterminada
    ev.preventDefault();
    // se obtiene el dato arrastrado, especificamente el id
    var data = ev.dataTransfer.getData("text");
    console.log("elemento arrastrado", data);

    if (ev.target.id == 'drop0') {
        document.getElementById('drop0').innerText = "";

    } else if (ev.target.id == 'drop1') {
        document.getElementById('drop1').innerText = "";
    }
    document.getElementById(data).style.border = 'none';
    //aqui es donde se agrega el elemento arrastrado
    ev.target.appendChild(document.getElementById(data));

}
// esta funcion especifica que datos se van arrastrar
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    //evita que el navegador maneje los datos de manera predeterminada
    ev.preventDefault();
}


// https://stackoverflow.com/questions/47438548/dragged-item-disappears-on-drop

/***********Test 2************************** */

function drop2(ev) {
    ev.preventDefault();
    // se obtiene el dato arrastrado, especificamente el id
    var data = ev.dataTransfer.getData("text");
    console.log("elemento arrastrado", data);

    if (data === 'drag2') {
        document.getElementById(data).style.border = 'none';
        //aqui es donde se agrega el elemento arrastrado
        ev.target.appendChild(document.getElementById(data));

    } else {
        Swal.fire({
            title: 'Error',
            text: 'No es la imagen',
            icon: 'error',
            width: '30%',
            padding: '1rem',
            backdrop: true,
            timer: 5000,
            timerProgressBar: true,

        });
    }



}

function drop3(ev) {

    ev.preventDefault();
    // se obtiene el dato arrastrado, especificamente el id
    var data = ev.dataTransfer.getData("text");
    console.log("elemento arrastrado", data);

    if (data === 'drag3') {
        document.getElementById(data).style.border = 'none';
        //aqui es donde se agrega el elemento arrastrado
        ev.target.appendChild(document.getElementById(data));

    } else {
        Swal.fire({
            title: 'Error',
            text: 'No es la imagen',
            icon: 'error',
            width: '30%',
            padding: '1rem',
            backdrop: true,
            timer: 5000,
            timerProgressBar: true,

        });
    }

}

/***********Test 3************************** */
const img3 = document.querySelector('#drag4');
const img4 = document.querySelector('#drag5');

function drop4(ev) {
    ev.preventDefault();
    // se obtiene el dato arrastrado, especificamente el id
    var data = ev.dataTransfer.getData("text");
    console.log("elemento arrastrado", data);

    if (data === 'drag4') {
        document.getElementById(data).style.border = 'none';
        //aqui es donde se agrega el elemento arrastrado
        ev.target.appendChild(document.getElementById(data));
        document.getElementById('text1').innerText = "Imagen numero 3";
        img3.classList.add('choosed');

    } else if (data === 'drag5') {
        document.getElementById(data).style.border = 'none';
        //aqui es donde se agrega el elemento arrastrado
        ev.target.appendChild(document.getElementById(data));
        document.getElementById('text2').innerText = "Imagen numero 4";
        img4.classList.add('choosed');

    } else {
        Swal.fire({
            title: 'Error',
            text: 'No es la imagen',
            icon: 'error',
            width: '30%',
            padding: '1rem',
            backdrop: true,
            timer: 5000,
            timerProgressBar: true,

        });
    }



}

function drop5(ev) {

    ev.preventDefault();
    // se obtiene el dato arrastrado, especificamente el id
    var data = ev.dataTransfer.getData("text");
    console.log("elemento arrastrado", data);

    if (data === 'drag6') {
        document.getElementById(data).style.border = 'none';
        //aqui es donde se agrega el elemento arrastrado
        ev.target.appendChild(document.getElementById(data));
        document.getElementById('box2').innerText = "Imagen numero 5";

    } else {
        Swal.fire({
            title: 'Error',
            text: 'No es la imagen',
            icon: 'error',
            width: '30%',
            padding: '1rem',
            backdrop: true,
            timer: 5000,
            timerProgressBar: true,

        });
    }

}