var likcode = {
    init: function() {
        this.appendCss();
        this.prependHtml();
    },

    appendCss: function() {
        $('head').append('<link href="' + chrome.extension.getURL("introModal.css") + '" rel="stylesheet" type="text/css">')
            .append('<link href="' + chrome.extension.getURL("exoLevel.css") + '" rel="stylesheet" type="text/css">')
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
                that.eventHandler();
            });
            $(this).append('<div id="exoLevelWrapper"></div>');
            $('#exoLevelWrapper').load(chrome.extension.getURL("exoLevel.html"), function() {
                $("#imgTips").attr("src", chrome.extension.getURL("./img/icone_texte_marc.png")).click(function() {
                    $(this).hide();
                    that.showExoFrame();
                    that.hideOverlay();
                });
                $("#imglevel").attr("src", chrome.extension.getURL("./img/Mark_exclamation.png")).click(function() {
                    $(this).hide();
                    $("#imgTips").show();
                });
            });
            that.loadSlides();
            that.hideAvatarSelection();
            that.hideSlides([2, 3]);
            that.hideExoFrame();
            that.hideExoLevel();
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
        $('#introModalContent2').css("background", "url(" + chrome.extension.getURL("img/page_sans_mentor.png") + ")");
        $('#introModalContent3').css("background", "url(" + chrome.extension.getURL("img/page_2.png") + ")");
        $('#avatarMark').css("background", "url(" + chrome.extension.getURL("img/mark_seul.png") + ")");
        $('#avatarVador').css("background", "url(" + chrome.extension.getURL("img/Dark_seul.png") + ")");
        $('#avatarMario').css("background", "url(" + chrome.extension.getURL("img/mario_seul.png") + ")");
        $('#avatarElsa').css("background", "url(" + chrome.extension.getURL("img/elsa_seul.png") + ")");
        $('#avatarLisa').css("background", "url(" + chrome.extension.getURL("img/lisa_seul.png") + ")");
        $('.avatarSelection').css("background", "url(" + chrome.extension.getURL("img/cercle_seul.png") + ")");
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

    hideAvatarSelection: function() {
        $('.avatarSelection').hide();
    },

    showExoFrame: function() {
        $('#bababa').show();
    },

    hideExoFrame: function() {
        $('#bababa').hide();
    },

    showExoLevel: function() {
        $('#exoLevelWrapper').show();
    },

    hideExoLevel: function() {
        $('#exoLevelWrapper').hide();
    },

    showOverlay: function() {
        $('#introModalBackground').show();
    },

    hideOverlay: function() {
        $('#introModalBackground').hide();
    },

    moveOverLay: function() {
        $('#introModalBackground').css("top", "42px");
    },

    showCongrats: function() {
        $('#congrats').show();
    },

    eventHandler: function() {
        var that = this;
        //$('#introModalBackground').click(function() {
        //    that.clickIntro();
        //    that.showExoFrame();
        //    that.hideExoLevel();
        //});
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
            //that.hideOverlay();
            that.showExoLevel();
            $('#imgTips').hide();
            that.moveOverLay();
            //that.showOverlay();
            //that.showExoFrame();
        });
        $('.avatarPhoto').click(function() {
            $('.avatarSelection').hide();
            $("#" + this.id + " .avatarSelection").show();
        });
        $('#exoMentor').click(function() {
            that.hideExoFrame();
            that.showCongrats();
            that.saveChanges();
        });
    },

    changecode: function() {
        $('#codebox').bind('keyup', function(){
            $('#blueBarNAXAnchor')[0].style.cssText = $('#codebox')[0].value;
        });
    },

    saveChanges: function() {
        chrome.storage.local.set($('#blueBarNAXAnchor')[0].style, function() {
            console.log(chrome.storage.local.get(null, function() {
            }));
        });
    }
};

$(document).ready(function() {
    likcode.init();
});