"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(235986),
    a = n(200749),
    s = n(550282);
function l(e) {
    let { mainText: t, supportingText: n, errorCodeText: l, children: o, size: d } = e;
    return (0, i.jsxs)(r.A, {
        className: s.z,
        justify: r.A.Justify.CENTER,
        align: r.A.Align.CENTER,
        direction: r.A.Direction.VERTICAL,
        children: [(0, i.jsx)(a.A, { header: t, description: n, errorCodeMessage: l, size: d }), o],
    });
}
