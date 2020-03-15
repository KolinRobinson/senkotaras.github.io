'use strick';

let modalShow = document.querySelectorAll('.modal-show'),
modalClose = document.querySelectorAll('.modal-close'),
modalWrap = document.querySelectorAll('.modal-wrap');

modalShow.forEach(function(element){
    element.onclick = showModal;
});

modalClose.forEach(function(element){
    element.onclick = closeModal;
});

modalWrap.forEach(function(element){
    
    element.onclick = closeModalWrap;
});

function showModal(){
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function(event){
        if(event.keyCode == 27){
            closeModal();
        }
    };
}

function closeModal(){
    modalWrap.forEach(function(e){
        e.classList.add('hide'); 
    });
}

function closeModalWrap(e){
    if( e.target !== this){
        return false;
    }
    this.classList.add('hide');    
}