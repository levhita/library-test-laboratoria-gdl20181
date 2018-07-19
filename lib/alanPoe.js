"use strict";

(function () {

    var alanPoe = function alanPoe(number) {
        var crow = "";
        for (var i = 0; i < number; i++) {
            crow += "nunca más ";
        }
        return crow;
    };

    if (typeof window == 'undefined') {
        console.log('consola');
        module.exports = alanPoe;
    } else {
        console.log('navegador');
        window.alanPoe = alanPoe;
    }
})();