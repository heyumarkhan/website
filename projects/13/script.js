const accordins = document.querySelectorAll('a');
const accordinContents = document.querySelectorAll('p');

accordins.forEach((e, index) => {
    if(index !=0)
    accordinContents[index].classList.add('hide');
    accordinContents[index].classList.remove('show');    

    e.addEventListener('click', function () {
        accordinContents.forEach((conent) => {
            conent.classList.remove('show');
            conent.classList.add('hide');
        });
        accordinContents[index].classList.remove('hide');
        accordinContents[index].classList.add('show');
    });
}
);