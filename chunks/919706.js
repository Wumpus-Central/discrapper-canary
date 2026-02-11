"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(235986),
    a = n(200749),
    s = n(877026);
function o(e) {
    let { mainText: t, supportingText: n, errorCodeText: o, children: l, size: u } = e;
    return (0, r.jsxs)(i.A, {
        className: s.z,
        justify: i.A.Justify.CENTER,
        align: i.A.Align.CENTER,
        direction: i.A.Direction.VERTICAL,
        children: [(0, r.jsx)(a.A, { header: t, description: n, errorCodeMessage: o, size: u }), l],
    });
}
