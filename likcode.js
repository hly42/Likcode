var likcode = {
    init: function() {
        this.appendCss();
        this.prependHtml();
        this.changeNavBarColor();
    },

    appendCss: function() {
        $('head').append('<link href="' + chrome.extension.getURL("introModal.css") + '" rel="stylesheet" type="text/css">');
    },

    prependHtml: function() {
        var that = this;
        $('div:first').prepend('<div id="likcodeWrapper"></div>');
        $('#likcodeWrapper').load(chrome.extension.getURL("introModal.html"), function() {
            that.eventHandler();
            $('#introModalSlide').css("background", "url(" + chrome.extension.getURL("42c.png") + ")");
        });
    },

    changeNavBarColor: function() {
        $('#blueBarNAXAnchor').css("background", "black");
    },

    clickIntro: function() {
        $('#introModal').hide();
    },

    eventHandler: function() {
        var that = this;
        $('#introModalBackground').click(function() {
            that.clickIntro();
        });
    }
};

$(document).ready(function() {
    likcode.init();
    var imgURL = chrome.extension.getURL("42c.png");
    //console.log(imgURL);
});