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
            that.loadSlides();
            that.hideSlides([2, 3]);
        });
    },

    changeNavBarColor: function() {
        $('#blueBarNAXAnchor').css("background", "black");
    },

    clickIntro: function() {
        $('#introModal').hide();
    },

    loadSlides: function() {
        $('#introModalContent1').css("background", "url(" + chrome.extension.getURL("img/Home_page.png") + ")");
        $('#introModalContent2').css("background", "url(" + chrome.extension.getURL("img/page_1.png") + ")");
        $('#introModalContent3').css("background", "url(" + chrome.extension.getURL("img/page_2.png") + ")");
    },

    showSlides: function(num) {
        num.forEach(function(nu) {
            $('#introModalContent' + nu).show();
        });
    },

    hideSlides: function(num) {
        num.forEach(function(nu) {
            $('#introModalContent' + nu).hide();
        });
    },

    eventHandler: function() {
        var that = this;
        $('#introModalBackground').click(function() {
            that.clickIntro();
        });
        $('#buttonSlide1').click(function() {
            that.hideSlides([1]);
            that.showSlides([2]);
        });
        $('#buttonSlide2').click(function() {
            that.hideSlides([2]);
            that.showSlides([3]);
        });
        $('#buttonSlide3').click(function() {
            that.hideSlides([3]);
        });
    }
};

$(document).ready(function() {
    likcode.init();
});