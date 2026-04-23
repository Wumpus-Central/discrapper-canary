n.d(t, { o: () => l });
var o = n(627968);
n(64700);
var i = n(226377),
    r = n(985018),
    s = n(370655),
    a = n(474264);
function l(e) {
    let {
            platformType: t,
            isWaitingForConnection: n,
            onWaitingForConnection: l,
            expectedCallbackState: c,
            onAuthToken: d,
            onError: _,
            onClose: A,
        } = e,
        T = n
            ? (0, o.jsx)("img", { src: a.A, width: "231", height: "172", alt: "" })
            : (0, o.jsx)("img", { src: s.A, width: "231", height: "160", alt: "" }),
        p = n ? r.intl.string(r.t.TTIocg) : r.intl.string(r.t["6n+UPR"]),
        b = n ? r.intl.string(r.t.MNmoKH) : r.intl.string(r.t.JaaqIf);
    return (0, o.jsx)(i.b, {
        platformType: t,
        isWaitingForConnection: n,
        onWaitingForConnection: l,
        expectedCallbackState: c,
        onAuthToken: d,
        onError: _,
        onClose: A,
        img: T,
        title: p,
        body: b,
    });
}
