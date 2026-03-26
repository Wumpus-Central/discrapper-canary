"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(235986),
    s = n(200749),
    a = n(765589);
function o(e) {
    let { mainText: t, supportingText: n, errorCodeText: o, children: l, size: u } = e;
    return (0, r.jsxs)(i.A, {
        className: a.z,
        justify: i.A.Justify.CENTER,
        align: i.A.Align.CENTER,
        direction: i.A.Direction.VERTICAL,
        children: [(0, r.jsx)(s.A, { header: t, description: n, errorCodeMessage: o, size: u }), l],
    });
}
