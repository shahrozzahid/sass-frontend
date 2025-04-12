$(document).ready(function () {


    function generateToken(byteLength = 40) {
        const array = new Uint8Array(byteLength);
        window.crypto.getRandomValues(array);

        return Array.from(array, byte => ('0' + byte.toString(16)).slice(-2)).join('');
    }

    $('#send-request').on('click', function (event) {

        SET_HEADER();
        $.ajax({
            url          : 'https://dummyjson.com/posts',
            method       : 'GET',
            // data         : JSON.stringify({title : "I am in love with someone."}),
            processData  : true,
            success      : (response) => {
                let getData = response;
                console.log('RESPONSE: ', getData);

                // const token = generateToken();
                // console.log('TOKEN: ', token);
            },
            error        : (error) => {
                console.error('ERROR: ',error);
            }
        });
    });

    // $('#myLink').on('click', (event) => {event.preventDefault();});


    const SET_HEADER = function () {
        $.ajaxSetup({
            headers : {
                'X-Requested-with' : 'XMLHTTPRequest',
                'content-Type'     : 'application/json',
            }
        })
    };
});