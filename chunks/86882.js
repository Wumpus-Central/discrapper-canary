"use strict";
e.exports = function (e) {
    "number" != typeof e.which && (e.which = e.keyCode);
    var t,
        r = n(780594)(e);
    if (r) {
        if ("keyup" === e.type && this.ignoreNextKeyup === r) {
            this.ignoreNextKeyup = !1;
            return;
        }
        (t = n(767721)), this.handleKey(r, t(e), e);
    }
};
