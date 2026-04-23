n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(990078),
    o = n(664929),
    c = n(527078);
let d = l.memo(function (e) {
    let { className: t, channel: n, section: l } = e,
        a = null != l ? (0, o.Rg)(l) : null,
        d =
            null != a
                ? (0, i.jsx)(r.m, {
                      __unsupportedReactNodeAsText: l?.name ?? "",
                      position: "top",
                      children: (0, i.jsx)(a, { channel: n, section: l, width: 24, height: 24 }),
                  })
                : null;
    return (0, i.jsx)("div", { className: s()(t, c.i), children: (0, i.jsx)("div", { className: c.K, children: d }) });
});
