$('form input[name="email"]').blur(function () {
    var email = $(this).val();
var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
if (re.test(email)) {
    $('.msg').hide();
    $('.error').hide();
} 
if (!re.test(email)) {
    $('.msg').show();
    $('.error').show();
} 
});