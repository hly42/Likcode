var likcode = {
    init: function() {
        this.appendCss();
        this.prependHtml();
    },

    appendCss: function() {
        $('head').append('<link href="' + chrome.extension.getURL("introModal.css") + '" rel="stylesheet" type="text/css">')
            .append('<link href="' + chrome.extension.getURL("exoFrame.css") + '" rel="stylesheet" type="text/css">');
    },

    prependHtml: function() {
        var that = this;
        $('div:first').prepend('<div id="likcodeWrapper"></div>');
        $('#likcodeWrapper').load(chrome.extension.getURL("introModal.html"), function() {
            $(this).append('<div id="bababa"></div>');
            $('#bababa').load(chrome.extension.getURL("exoFrame.html"), function() {
                $("#" + this.id + " img").attr("src", chrome.extension.getURL("./img/bouton.png"));
                that.changecode();
            });
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
    },
    changecode: function() {
        $('#codebox').bind('keyup', function(){
            $('#blueBarNAXAnchor')[0].style.cssText = $('#codebox')[0].value;
        });
    }
};

$(document).ready(function() {
    likcode.init();
    var imgURL = chrome.extension.getURL("42c.png");
    //console.log(imgURL);
});