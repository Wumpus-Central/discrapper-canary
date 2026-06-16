"use strict";
n.d(t, { H: () => s });
var i = n(492313),
    r = n(64700);
function s(e = {}) {
    var t;
    let { isReadOnly: n } = e,
        [a, o] = (0, i.P)(e.isSelected, e.defaultSelected || !1, e.onChange),
        [l] = (0, r.useState)(a);
    return {
        isSelected: a,
        defaultSelected: null != (t = e.defaultSelected) ? t : l,
        setSelected: function (e) {
            n || o(e);
        },
        toggle: function () {
            n || o(!a);
        },
    };
}
