function square(){
    const container = document.querySelector("#div-container");
    container.setAttribute('draggable',false);
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}

for(var y = 0; y<16; y++){
    for(var x = 0; x<16; x++){
        square();
    }
}

const box = document.querySelectorAll('#div-container');

function hide() {

    const div = document.querySelectorAll('.square');
    div.textContent = "hi";
   
    
  }

box[0].addEventListener("click", hide);
