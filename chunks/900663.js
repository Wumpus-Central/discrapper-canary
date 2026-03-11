n.d(t, { o: () => c });
var o = n(627968);
n(64700);
var i = n(226377),
    r = n(985018),
    s = n(370655),
    a = n(474264);
function c(e) {
    let {
            platformType: t,
            isWaitingForConnection: n,
            onWaitingForConnection: c,
            expectedCallbackState: l,
            onAuthToken: d,
            onError: _,
            onClose: p,
        } = e,
        b = n
            ? (0, o.jsx)("img", { src: a.A, width: "231", height: "172", alt: "" })
            : (0, o.jsx)("img", { src: s.A, width: "231", height: "160", alt: "" }),
        C = n ? r.intl.string(r.t.TTIocg) : r.intl.string(r.t["6n+UPR"]),
        A = n ? r.intl.string(r.t.MNmoKH) : r.intl.string(r.t.JaaqIf);
    return (0, o.jsx)(i.b, {
        platformType: t,
        isWaitingForConnection: n,
        onWaitingForConnection: c,
        expectedCallbackState: l,
        onAuthToken: d,
        onError: _,
        onClose: p,
        img: b,
        title: C,
        body: A,
    });
}
