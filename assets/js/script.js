const array = [];

document.querySelector("#generate").addEventListener("click", function(event) {
    event.preventDefault();
    generateRND();
});

function generateRND(){

    const min = Math.ceil(-10);
    const max = Math.floor(10);

    for (i = 0; i < 10; i++)
    array [i] = Math.floor(Math.random() * (max - min)) + min;

    document.querySelector('#rnd').value = array;
    document.querySelector('#min').value = Math.min.apply(null,array);
    document.querySelector('#max').value = Math.max.apply(null,array);

    let sum = 0;
    let mpy = 1;

    for (i=0; i < 10; i++) {
        sum += array[i];
        mpy *= array[i];
    }

    document.querySelector('#avg').value = sum / array.length;
    document.querySelector('#sum').value = sum;
    document.querySelector('#mpy').value = mpy;
}

