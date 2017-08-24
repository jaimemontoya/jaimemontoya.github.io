(function($jq1) {
    // This is the connector function.
    // It connects one item from the navigation carousel to one item from the
    // stage carousel.
    // The default behaviour is, to connect items with the same index from both
    // carousels. This might _not_ work with circular carousels!
    var connector = function(itemNavigation, carouselStage) {
        return carouselStage.jcarousel('items').eq(itemNavigation.index());
    };

    $jq1(function() {
        // Setup the carousels. Adjust the options for both carousels here.
        var carouselStage      = $jq1('.carousel-stage').jcarousel();
        var carouselNavigation = $jq1('.carousel-navigation').jcarousel();

        // We loop through the items of the navigation carousel and set it up
        // as a control for an item from the stage carousel.
        carouselNavigation.jcarousel('items').each(function() {
            var item = $jq1(this);

            // This is where we actually connect to items.
            var target = connector(item, carouselStage);

            item
                .on('jcarouselcontrol:active', function() {
                    carouselNavigation.jcarousel('scrollIntoView', this);
                    item.addClass('active');
                })
                .on('jcarouselcontrol:inactive', function() {
                    item.removeClass('active');
                })
                .jcarouselControl({
                    target: target,
                    carousel: carouselStage
                });
        });

        // Setup controls for the stage carousel
        $jq1('.prev-stage')
            .on('jcarouselcontrol:inactive', function() {
                $jq1(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $jq1(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $jq1('.next-stage')
            .on('jcarouselcontrol:inactive', function() {
                $jq1(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $jq1(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        // Setup controls for the navigation carousel
        $jq1('.prev-navigation')
            .on('jcarouselcontrol:inactive', function() {
                $jq1(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $jq1(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $jq1('.next-navigation')
            .on('jcarouselcontrol:inactive', function() {
                $jq1(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $jq1(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    });
})(jQuery);
