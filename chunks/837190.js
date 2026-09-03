r.d(t, { H: () => o });
var n = r(526739),
    i = r(582128);
function o(e = {}) {
    let { isReadOnly: t } = e,
        [r, a] = (0, n.P)(e.isSelected, e.defaultSelected || !1, e.onChange),
        [s] = (0, i.useState)(r);
    return {
        isSelected: r,
        defaultSelected: e.defaultSelected ?? s,
        setSelected: function (e) {
            t || a(e);
        },
        toggle: function () {
            t || a(!r);
        },
    };
}
