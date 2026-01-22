e.d(n, {
    o: () => r,
});
var o = e(627968);
e(64700);
var i = e(55187),
    a = e(985018),
    s = e(370655),
    d = e(474264);

function r(t) {
    let {
            platformType: n,
            isWaitingForConnection: e,
            onWaitingForConnection: r,
            expectedCallbackState: c,
            onAuthToken: l,
            onError: b,
            onClose: p,
        } = t,
        f = e
            ? (0, o.jsx)("img", {
                  src: d.A,
                  width: "231",
                  height: "172",
                  alt: "",
              })
            : (0, o.jsx)("img", {
                  src: s.A,
                  width: "231",
                  height: "160",
                  alt: "",
              }),
        A = e ? a.intl.string(a.t.TTIocg) : a.intl.string(a.t["6n+UPR"]),
        T = e ? a.intl.string(a.t.MNmoKH) : a.intl.string(a.t.JaaqIf);
    return (0, o.jsx)(i.b, {
        platformType: n,
        isWaitingForConnection: e,
        onWaitingForConnection: r,
        expectedCallbackState: c,
        onAuthToken: l,
        onError: b,
        onClose: p,
        img: f,
        title: A,
        body: T,
    });
}
