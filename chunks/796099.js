"use strict";
n.d(t, { A: () => c });
var s = n(627968);
n(64700);
var r = n(226377),
    i = n(652215),
    o = n(985018),
    a = n(698395),
    l = n(169764);
function c(e) {
    let {
            isWaitingForConnection: t,
            onWaitingForConnection: n,
            expectedCallbackState: c,
            onAuthToken: d,
            onError: p,
            onClose: u,
        } = e,
        _ = t
            ? (0, s.jsx)("img", { src: l.A, width: "231", height: "172", alt: "" })
            : (0, s.jsx)("img", { src: a.A, width: "231", height: "160", alt: "" }),
        h = t ? o.intl.string(o.t.EuwcxO) : o.intl.string(o.t["e/z3na"]),
        C = t ? o.intl.string(o.t["1GjS/W"]) : o.intl.string(o.t["7tXu0i"]);
    return (0, s.jsx)(r.b, {
        platformType: i.fg2.XBOX,
        isWaitingForConnection: t,
        onWaitingForConnection: n,
        expectedCallbackState: c,
        onAuthToken: d,
        onError: p,
        onClose: u,
        img: _,
        title: h,
        body: C,
    });
}
