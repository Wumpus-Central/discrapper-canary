n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(854987),
    c = n(960849);

function u(e) {
    let { children: t, useTopRightClipPath: n = !1, innerClassName: a } = e,
        u = i.useContext(l.P),
        d = (0, o.rdh)(u.primaryColor).hex();
    return (0, r.jsxs)("div", {
        className: s()(n ? c.hp : c.kL),
        children: [
            (0, r.jsx)("div", {
                className: c.an,
                style: {
                    borderColor: d,
                },
            }),
            (0, r.jsx)("div", {
                className: c.Gn,
                style: {
                    backgroundColor: d,
                },
            }),
            (0, r.jsx)("div", {
                className: c.Z5,
                style: {
                    backgroundColor: d,
                },
            }),
            (0, r.jsx)("div", {
                className: c.qE,
                style: {
                    backgroundColor: d,
                },
            }),
            (0, r.jsx)("div", {
                className: s()(c.T5, a),
                style: {
                    borderColor: d,
                },
                children: t,
            }),
        ],
    });
}
