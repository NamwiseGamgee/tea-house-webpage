document.getElementById('rating-btn').addEventListener('click', function () {
    const button = document.getElementById('rating-btn');
    if (button.style.backgroundColor === 'white') {
        button.style.backgroundColor = 'aqua';
    }
    else {
        button.style.backgroundColor = 'white';
    }

});


const items = document.getElementsByClassName('featured-products');
for (const item of items) {
    item.addEventListener('click', function (event) {
        const bgColor = window.getComputedStyle(item).getPropertyValue('background-color');
        if (bgColor === 'rgb(244, 244, 244)') {
            item.style.backgroundColor = 'aqua';
        }
        // else if(item.style.backgroundColor !== 'rgb(244, 244, 244)'){
        //     item.style.backgroundColor = 'red';
        // }
        else {
            item.style.backgroundColor = 'rgb(244, 244, 244)';
        }

    });

}

document.getElementById('input-field').addEventListener('keyup',function(event){
    const txt = event.target.value;
    const btn = document.getElementById('arrow');
    if(txt === 'email'){
        btn.classList.add('bg-orange-600');
        btn.removeAttribute('disabled');
    }
    else{
        btn.setAttribute('disabled',true);
        btn.classList.remove('bg-orange-600');
    }
});