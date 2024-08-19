document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.profile-icon');
    const div = document.querySelector('.psw-s-1');
    
    button.addEventListener('click', function() {
        // Изменяем класс у элемента div
        div.className = 'profile-dropdown psw-c-bg-1 psw-r-3 psw-s-1 psw-l-w-5/24 psw-l-w-1/4@tablet-s psw-l-w-1/4@tablet-l psw-l-anchor-bottom-center psw-l-top-center psw-m-t-3 psw-p-y-5'; // Замените 'new-class' на нужный вам класс
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const redem = document.querySelector('#redeemcodelink');
    redem.addEventListener('click', function() {
        window.location = "./redeem.html";
    });

})


document.addEventListener('DOMContentLoaded', function() {
    const closeRedem = document.querySelector('.ps-icon--close');
    closeRedem.addEventListener('click', function() {
        window.location = "./index.html";
    });
})

