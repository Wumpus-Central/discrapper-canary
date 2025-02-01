e.exports = function (e) {
    var t,
        i = this;
    'number' != typeof e.which && (e.which = e.keyCode);
    var r = n(619820)(e);
    if (r) {
        if ('keyup' === e.type && i.ignoreNextKeyup === r) {
            i.ignoreNextKeyup = !1;
            return;
        }
        (t = n(287901)), i.handleKey(r, t(e), e);
    }
};
