$(function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        modal: true,
        width: 503,
        buttons: {
            "Create an account": function() {
                dialog.dialog( "close" );
            },
            Cancel: function() {
                dialog.dialog( "close" );
            }
        },
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $( "#opener" ).click(function() {
        $( "#dialog" ).dialog( "open" );
    });
});