let result = '';

let numbers = new Array(20);

numbers[0] = 'CE';
numbers[1] = 'C';
numbers[2] = '<i class="icon-cancel-alt"></i>';
numbers[3] = '/';
numbers[4] = 9;
numbers[5] = 8;
numbers[6] = 7;
numbers[7] = 'x';
numbers[8] = 4;
numbers[9] = 5;
numbers[10] = 6;
numbers[11] = '-';
numbers[12] = 1;
numbers[13] = 2;
numbers[14] = 3;
numbers[15] = '+';
numbers[16] = '+/-';
numbers[17] = 0;
numbers[18] = '.';
numbers[19] = '=';

window.onload = start;

function start(){
    
    let div_content = '';

    for(i=0; i< 20; i++){

        let el = 'num' +i;
        div_content += '<div class="button" onclick="show('+i+')" id="'+el+'">' + numbers[i] + '</div>'; 

        if((i+1) % 4 == 0) div_content += '<div style="clear: both;"></div>';
    }
    document.getElementById('buttons').innerHTML = div_content;

}

function show(num){

    let sign = '';

    for(i=0; i<20; i++) {
        if (num === i) sign = numbers[i]
    }
    document.getElementById('screen').innerHTML = sign;
    
};

