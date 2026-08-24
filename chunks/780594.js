"use strict";
e.exports = function (e) {
    var t, n;
    if (((t = r(883134)), (n = r(391986)), "keypress" === e.type)) {
        var i = String.fromCharCode(e.which);
        return e.shiftKey || (i = i.toLowerCase()), i;
    }
    return t[e.which] ? t[e.which] : n[e.which] ? n[e.which] : String.fromCharCode(e.which).toLowerCase();
};
