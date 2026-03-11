"use strict";
n.d(t, { A: () => l });
var s = n(627968);
n(64700);
var r = n(226377),
    o = n(652215),
    i = n(985018),
    a = n(698395),
    c = n(169764);
function l(e) {
    let {
            isWaitingForConnection: t,
            onWaitingForConnection: n,
            expectedCallbackState: l,
            onAuthToken: d,
            onError: p,
            onClose: u,
        } = e,
        _ = t
            ? (0, s.jsx)("img", { src: c.A, width: "231", height: "172", alt: "" })
            : (0, s.jsx)("img", { src: a.A, width: "231", height: "160", alt: "" }),
        b = t ? i.intl.string(i.t.EuwcxO) : i.intl.string(i.t["e/z3na"]),
        f = t ? i.intl.string(i.t["1GjS/W"]) : i.intl.string(i.t["7tXu0i"]);
    return (0, s.jsx)(r.b, {
        platformType: o.fg2.XBOX,
        isWaitingForConnection: t,
        onWaitingForConnection: n,
        expectedCallbackState: l,
        onAuthToken: d,
        onError: p,
        onClose: u,
        img: _,
        title: b,
        body: f,
    });
}
