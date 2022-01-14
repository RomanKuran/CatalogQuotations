// $( document ).ready(function() {
//     // event create quote
//     $('body').on('click', '.js-create-quote', function(){
//         console.log(123);
//         let source = $('.js-source-add-field').val();
//         let quote = $('.js-quote-add-field').val();
//         console.log(source, quote);
//         createQuote(source, quote);
//     });
//     // ----
// });


// function create quote
// function createQuote(source, quote){
//     $.ajax({
//         type: "POST",
//         url: route_create_quote,
//         dataType: 'json',
//         data: {
//             source: source,
//             quote: quote,
//             _token: $('meta[name="csrf-token"]').attr('content')
//         },
//         success: function (result) {

//         },
//         error: function (result) {

//         }
//     });
// }
// ----

$(document).ready(function () {
    let validations_service = null;

    // event open modal select service
    $('body').on('click', '.js-open-modal-service', function () {
        let placeholder = $(this).attr('data-placeholder');
        let service_name = $(this).attr('data-service-name');
        $('.js-contacs').attr('placeholder', placeholder);
        $('#modalListServices').modal('hide');
        $('#modalSendQuote').modal('show');
        getRegularContact(service_name);
    });
    // ----

    // function get regular contact
    function getRegularContact(service) {
        $.ajax({
            type: "get",
            url: get_regular_validation,
            dataType: 'json',
            data: {
                service: service,
                _token: $('meta[name="csrf-token"]').attr('content')
            },
            success: function (result) {
                validations_service = result.validation;
            }
        });
    }

    // event send quote
    $('body').on('click', '.js-send-quote', function () {
        let contact = $('.js-contacs').val();
        // var myRe = /d(b+)d/g;
        // var myArray = myRe.exec("cdbbdbsbz")
        // console.log(myArray);
        // let validation_arrea = Object.keys(validations_service).map((key) =>
        //     validatinoContact(validations_service[key], contact)
        // );
        // console.log(validation_arrea)
        // validation_arrea.forEach(element => console.log(element));
    });
    // ----

    // function validation contact
    function validatinoContact(regular, contact) {
        // console.log(contact.match(
        //     regular
        //   ));
        // regular = new RegExp(regular);
        // console.log(regular);
        // // let result = regular.exec(contact);
        // let result = contact.exec(regular);
        // console.log(result);
    }
});
