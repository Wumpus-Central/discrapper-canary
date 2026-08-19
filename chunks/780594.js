"use strict";
e.exports = function (e) {
    var t, n;
    if (((t = r(883134)), (n = r(391986)), "keypress" === e.type)) {
        var o = String.fromCharCode(e.which);
        return e.shiftKey || (o = o.toLowerCase()), o;
    }
    return t[e.which] ? t[e.which] : n[e.which] ? n[e.which] : String.fromCharCode(e.which).toLowerCase();
};
