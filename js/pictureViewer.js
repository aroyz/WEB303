$.fn.photoViewer = function () {
    let $current;
    let cache = {};
    let $frame = $(".photo-frame");
    let $thumbs = $(".thumb");

    function crossfade ($img) {
        if ($current) {
            $current.stop().fadeOut('slow').hide();
        }
        $img.stop().fadeTo('slow', 1);
        $current = $img;
    }

    function onClickHandler (currThumb) {
        let $img;
        let $thumb = $(currThumb);
        let src = currThumb.href;
        let request = src;

        $thumbs.removeClass('active');
        $thumb.addClass('active');

        if (cache.hasOwnProperty(src)) {
            if (cache[src].isLoading === false) {
                $frame.attr("href", src);
                crossfade(cache[src].$img);
                return;
            }
        }
        else {
            $frame.addClass('is-loading');
            $img = $(`<img src="${src}" alt="${$thumb.title || ''}"/>`);
            cache[src] = {
                $img: $img,
                isLoading: true
            };
        }

        $img.on('load', function () {
            $frame.removeClass('is-loading').attr("href", src).append($img).children().hide();
            crossfade($img);
            cache[src].isLoading = false;
        });
    }

    $(document).on('click', '.thumb', function (event) {
        event.preventDefault();
        onClickHandler(this);
    });

    $frame.html(`<img src="${$thumbs[0].href}" alt="${$thumbs[0].title || ''}" />`).attr("href", $thumbs[0].href);

    return this;
};