const bryly = document.getElementsByClassName('bryla');

for (let i = 0; i < bryly.length; i++) {
    bryly[i].addEventListener("click", function() {
        bryly[i].classList.add('hidden');
    });
}