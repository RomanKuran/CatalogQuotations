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
function createQuote(source, quote){
    $.ajax({
        type: "POST",
        url: route_create_quote,
        dataType: 'json',
        data: {
            source: source,
            quote: quote,
            _token: $('meta[name="csrf-token"]').attr('content')
        },
        success: function (result) {
            
        },
        error: function (result) {
            
        }
    });
}
// ----