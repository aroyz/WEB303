$(function () {
    $('#photo-viewer').photoViewer().show().on('click', '.photo-frame', function (e) {
        e.preventDefault();
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        let modal = new Modal();
        modal.open({
            content: $content,
            width: 1200,
            height: 697
        });
    });;
});
