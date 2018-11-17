$(function() {
    // alert('msg');

    $.ajax({
        url: 'http://localhost:3000/bookings',
        type: 'GET',
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        console.log(data);
        var source = document.getElementById("booking-template").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);
        $('#products').html(html);
    });

});

$(document).ready(function () {
    $('#btn-register').on('click', function (e) {
        e.preventDefault();
        var fullName = $('#form-register #full_name').val();
        var password = $('#form-register #password').val();
        var phoneNumber = $('#form-register #phone_number').val();
        $.ajax({
            url: 'http://localhost:3000/api/users',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data : JSON.stringify({
                'full_name': fullName,
                'password': password,
                'phone_number': phoneNumber,
                'role': 1 //Normal user
            }),
            timeout: 10000
        }).done(function(data) {
            location.href = "/index.php?page=login";
        });
    });
});
