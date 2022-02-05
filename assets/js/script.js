let array = [];

function generateRND(min, max){

    min = Math.ceil(-10);
    max = Math.floor(10);

    for (i = 0; i < 10; i++)
    array [i] = Math.floor(Math.random() * (max - min)) + min;

    document.getElementById('rnd').innerHTML = array;
    document.getElementById('min').innerHTML = Math.min.apply(null,array);
    document.getElementById('max').innerHTML = Math.max.apply(null,array);

    let sum = 0;
    let mpy = 1;

    for (i=0; i < 10; i++) {
        sum += array[i];
        mpy *= array[i];
    }

    document.getElementById('avg').innerHTML = sum / array.length;
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('mpy').innerHTML = mpy;
}
