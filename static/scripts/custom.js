$(document).ready(function() {

    //    _____                 _                                               _           _
    //   / ____|               | |                                             (_)         | |
    //  | |       _   _   ___  | |_    ___    _ __ ___      ___    ___   _ __   _   _ __   | |_   ___
    //  | |      | | | | / __| | __|  / _ \  | '_ ` _ \    / __|  / __| | '__| | | | '_ \  | __| / __|
    //  | |____  | |_| | \__ \ | |_  | (_) | | | | | | |   \__ \ | (__  | |    | | | |_) | | |_  \__ \
    //   \_____|  \__,_| |___/  \__|  \___/  |_| |_| |_|   |___/  \___| |_|    |_| | .__/   \__| |___/
    //                                                                             | |
    //                                                                             |_|

    var mastheadAlt = $('#masthead-logo img').attr('alt');
    var newsroomName = mastheadAlt.split(" | ");

    $('#trailer-btn').click(function () {
        $('#hc-hero').fadeOut(600);
        $('.embed-container').delay(800).fadeIn(600);
    });

    $('#hc-nav-head a').text(newsroomName[0]);
    $('#hc-nav-head a').attr('href', mast_options.publicationUrl)

    $('#div-gpt-ad-4, .ad, #leaderboard-ad').remove();
});
