$(document).ready(function () {
    $('.form-btn').click(function() {

        // get name & email & phone number input value
        var nameVal = $(this).parent().children().find('#name').val();
        var emailVal = $(this).parent().children().find('#email').val();
        var numberVal =  $(this).parent().children().find('#phone').val();

        // print validation error
        var validNameTxt = $(this).parent().find('#name-block').find('.validation-error');
        var validEmailTxt = $(this).parent().find('#email-block').find('.validation-error');
        var validNumberTxt = $(this).parent().find('#phone-number-block').find('.validation-error');

        // call the validation checking functions
        checkIsValidName();
        checkIsValidMail();
        checkIsValidNumber();

        // validation checking
        function validateName(nameVal) {
            var witoutSpaces = nameVal.trim();
            if(witoutSpaces.length == 0) {
                return 0;
            }else {
                var nameTemplate = /^[A-Za-z.!@?#"$%&:;() *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]*$/.test(witoutSpaces);
                return nameTemplate;
            }
        };

        function checkIsValidName() {
            var valid = validateName(nameVal);
            if(valid) {
                validNameTxt.html('');
            }else if(valid === 0) {
                validNameTxt.html(`укажите полное имя`)
            }else{
                validNameTxt.html(`неверно указано имя`);
            }
        }

        function validateEmail(emailVal) {
            var emailTemplate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailTemplate.test(String(emailVal).toLowerCase());
        };
        function  checkIsValidMail() {
            var valid = validateEmail(emailVal);// return:-> true or false
            if(valid){
                //valid->true
                validEmailTxt.html("");
            }else{
                if(emailVal == "") {
                    validEmailTxt.html(`укажите адрес эл. почты`)
                }else {
                    //valid->false
                    validEmailTxt.html(`неверный адрес эл. почты`);
                }
            }
        };

        //+7(916)9985670, 8-912-268-5440, 8905148-3339, 8(913)448-51-90, 903-345-34-34, 903-34-334-34, 903-34-33434
        function validateNumber(numberVal) {
            var phoneTemplate = /^((8|\+7)-?)?\(?\d{3}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}/.test(numberVal);
            return phoneTemplate;
        }

        function checkIsValidNumber() {
            var valid = validateNumber(numberVal);
            if(valid){
                validNumberTxt.html('');
            }else {
                if(numberVal=="") {
                    validNumberTxt.html(`укажите номер телефона`);
                }else {
                    validNumberTxt.html(`неверный номер телефона`);
                }
            }
        }

    });

});






