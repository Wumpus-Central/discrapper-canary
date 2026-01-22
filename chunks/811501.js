n.d(t, { A: () => u });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(664929),
    c = n(453313);
let u = l.memo(function (e) {
    var t;
    let { className: n, channel: l, section: i } = e,
        u = null != i ? (0, o.Rg)(i) : null,
        d =
            null != u
                ? (0, r.jsx)(s.m, {
                      __unsupportedReactNodeAsText: null != (t = null == i ? void 0 : i.name) ? t : "",
                      position: "top",
                      children: (0, r.jsx)(u, {
                          channel: l,
                          section: i,
                          width: 24,
                          height: 24,
                      }),
                  })
                : null;
    return (0, r.jsx)("div", {
        className: a()(n, c.i),
        children: (0, r.jsx)("div", {
            className: c.K,
            children: d,
        }),
    });
});
