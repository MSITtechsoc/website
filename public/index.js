
var $form = $('form#test-form'),
    url = "https://script.google.com/macros/s/AKfycbz0ULj2AYPJJnMBkI6KqUOFfL_KyBZVGUBdVL9f9sGuZMMzBzGc/exec";


$('#submit-form').on('click', function (e) {
    e.preventDefault();
    console.log($form.serializeObject());
    var jqxhr = $.ajax({
        url: url,
        type: "GET",
        crossDomain: true,
        dataType: "json",
        data: $form.serializeObject()
    });
});
