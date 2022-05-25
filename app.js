document.querySelector('#input').oninput = function(){
    let val = this.value.trim();
    let inputItems = document.querySelectorAll('.auditories li');
    if (val != ''){
        inputItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide')
            }
        })
    }
    else {
        inputItems.forEach(function(elem) {
            elem.classList.add('hide');
        });
    }
}