var likcode = {
    init: function() {
        this.appendCss();
        this.appendHtml();
        this.eventHandler();
        this.changeNavBarColor();
    },

    appendCss: function() {
        $('head').append('<style>.modalDialog { position: fixed;font-family: Arial, Helvetica, sans-serif;top: 0;right: 0;bottom: 0;left: 0;background: rgba(0, 0, 0, 0.8);z-index: 1000;-webkit-transition: opacity 400ms ease-in;-moz-transition: opacity 400ms ease-in;transition: opacity 400ms ease-in;}' +
        '.modalDialog:target {opacity:1;pointer-events: auto;}' +
        '#introModalContent {width: 400px;min-height:500px;position: fixed;top: 20%;left: 50%;margin-left: -200px;padding: 5px 20px 13px 20px;border-radius: 10px;background: #fff;background: -moz-linear-gradient(#fff, #999);background: -webkit-linear-gradient(#fff, #999);background: -o-linear-gradient(#fff, #999);z-index:4242}</style>');
    },

    appendHtml: function() {
        $('div:first').prepend(
            '<div id="introModal">' +
                '<div id="introModalBackground" class="modalDialog"></div>' +
                '<div id="introModalContent">' +
                    '<h2>Modal</h2>' +
                    '<p>Test de modal</p>' +
                    '<div style="width: 214px;background-image: url("chrome.extension.getURL("/favicons/example.png");")">' +
                    '<button id="introButton"> OK </button>' +
                '</div>' +
            '</div>');
    },

    changeNavBarColor: function() {
        $('#blueBarNAXAnchor').css("background", "black");
    },

    clickIntro: function() {
        $('#introModal').hide();
    },

    eventHandler: function() {
        var that = this;
        $('#introModalBackground, #introButton').click(function() {
            that.clickIntro();
        });
    }
};

$(document).ready(function() {
    likcode.init();
});