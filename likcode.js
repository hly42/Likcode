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
            $(this).append('<div id="bababa"></div>');
            $('#bababa').load(chrome.extension.getURL("exoFrame.html"), function() {
                $(this).src = chrome.extension.getURL("./img/bouton.png");
                console.log("bababba");
            });
            that.eventHandler();
            $('#introModalSlide').css("background", "url(" + chrome.extension.getURL("42c.png") + ")");
            that.changecode();
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
        console.log('toto');
        $('#codebox').change(function(){
            $('#blueBarNAXAnchor')[0].style.cssText = $('#codebox')[0].value;
        });

    }

};

$(document).ready(function() {
    likcode.init();
    var imgURL = chrome.extension.getURL("42c.png");
    //console.log(imgURL);
});