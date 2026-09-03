e.exports = function (e) {
    "number" != typeof e.which && (e.which = e.keyCode);
    var t,
        n = r(780594)(e);
    if (n) {
        if ("keyup" === e.type && this.ignoreNextKeyup === n) {
            this.ignoreNextKeyup = !1;
            return;
        }
        (t = r(767721)), this.handleKey(n, t(e), e);
    }
};
