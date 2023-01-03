$(document).ready(function() {
    const $callback = $('.callback');
    const $popup = $('.popup');
    const $btnClose = $('.popup .btn-close');
    $callback.on('click', function() {
        $popup.addClass('open-popup');
    })

    $btnClose.on('click', function() {
        $popup.removeClass('open-popup');
    })
});