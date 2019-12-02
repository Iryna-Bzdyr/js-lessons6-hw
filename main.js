let itemsList = document.forms['itemsList']
let registrationForm = document.forms['registrationForm']
let warningBoxForRegistForm = document.querySelectorAll('.registrationBox .warning__box')

let checkItems = /^\d{2}$/;
let checkName = /^[a-zA-Z\s]{1,20}$/;
let checkPhone = /^\+38\(\d{3}\)\s\d{3}-\d{4}/;
let checkEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.(ua|com|com\.ua[a-z])$/;
let checkHeight = /^\d{3}$/;

$("button").click(function () {
    $(".warning__box").css("display", "block");
    $(".warning__box").html('null');
});

const forms = document.querySelectorAll('form');
const form = forms[0];

[...form.elements].forEach(function (input, index, array) {

    input.addEventListener('change', function () {
        if (checkItems.test(array[index].value) == true) {
            document.getElementsByClassName("warning__box")[index].style.display = 'none'
        }

        else if (
            document.getElementsByClassName("warning__box")[index].innerHTML = 'Invalid Input'
        )
            if (checkItems.test(array[index].value) !== true) {
                array[index].value = ""
            }
    })
});


registrationForm.customerName.addEventListener('change', function () {
    if (checkName.test(registrationForm.customerName.value) == true) {
        warningBoxForRegistForm[0].style.display = 'none'
    }
    else {
        warningBoxForRegistForm[0].innerHTML = 'Invalid Input'
        registrationForm.customerName.value = ''
    }
})

registrationForm.customerEmail.addEventListener('change', function () {
    if (checkEmail.test(registrationForm.customerEmail.value) == true) {
        warningBoxForRegistForm[2].style.display = 'none'
    }
    else {
        warningBoxForRegistForm[2].innerHTML = 'Invalid Input'
        registrationForm.customerEmail.value = ''
    }
})

registrationForm.customerHeight.addEventListener('change', function () {
    if (checkHeight.test(registrationForm.customerHeight.value) == true) {
        warningBoxForRegistForm[3].style.display = 'none'
    }
    else {
        warningBoxForRegistForm[3].innerHTML = 'Invalid Input'
        registrationForm.customerHeight.value = ''
    }
})

if ( registrationForm.customerName.value!== ''){
    console.log('hello')
}



//Slider

$(document).ready(function () {



    $('.next').click(function () {

        let currentImg = $('.slides.current');
        let currentDot = $('.dot.active');
        let currentImgIndex = $('.slides.current').index();
        let nextImgIndex = currentImgIndex + 1;
        let nextImg = $('.slides').eq(nextImgIndex);
        let nextDot = $('.dot').eq(nextImgIndex);

        currentImg.removeClass('current');
        nextImg.addClass('current')
        currentDot.removeClass('active');
        nextDot.addClass('active')
        if (nextImgIndex > ($('.slides:last').index())) {

            $('.slides').eq(0).addClass('current')
            $('.dot').eq(0).addClass('active')
        }
        else {
            nextImg.addClass('current');
            nextDot.addClass('active')
        }
    })


    $('.prev').click(function () {

        let currentImg = $('.slides.current');
        let currentDot = $('.dot.active');
        let currentImgIndex = $('.slides.current').index();
        let prevImgIndex = currentImgIndex - 1;
        let prevImg = $('.slides').eq(prevImgIndex);
        let prevDot = $('.dot').eq(prevImgIndex);
        currentImg.removeClass('current');
        prevImg.addClass('current')

        currentDot.removeClass('active');
        prevDot.addClass('active')

    })
});


setInterval(function startShow() {
    let currentImg = $('.slides.current');
    let currentDot = $('.dot.active');
    let currentImgIndex = $('.slides.current').index();
    let nextImgIndex = currentImgIndex + 1;
    let nextImg = $('.slides').eq(nextImgIndex);
    let nextDot = $('.dot').eq(nextImgIndex);

    currentImg.removeClass('current');
    nextImg.addClass('current')
    currentDot.removeClass('active');
    nextDot.addClass('active')
    if (nextImgIndex > ($('.slides:last').index())) {

        $('.slides').eq(0).addClass('current')
        $('.dot').eq(0).addClass('active')
    }
    else {
        nextImg.addClass('current');
        nextDot.addClass('active')
    }
}, 2000)


