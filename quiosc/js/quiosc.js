window.onload = function() {
    clickAbout();
};


function clickAbout() {
    $('#modalAbout').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
}

