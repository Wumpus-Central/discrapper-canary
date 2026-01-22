n.d(t, { H: () => a });
var r = n(492313),
    i = n(64700);
function a(e = {}) {
    var t;
    let { isReadOnly: n } = e,
        [s, o] = (0, r.P)(e.isSelected, e.defaultSelected || !1, e.onChange),
        [l] = (0, i.useState)(s);
    function c(e) {
        n || o(e);
    }
    function u() {
        n || o(!s);
    }
    return {
        isSelected: s,
        defaultSelected: null != (t = e.defaultSelected) ? t : l,
        setSelected: c,
        toggle: u,
    };
}
