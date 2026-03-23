a.d(t, { A: () => o });
var n = a(627968);
a(64700);
var i = a(503698),
    l = a.n(i),
    s = a(397927),
    r = a(1305);
function o(e) {
    let { loading: t, children: a } = e;
    return (0, n.jsxs)("div", {
        className: r.kL,
        children: [
            t
                ? (0, n.jsx)("div", {
                      className: r.dc,
                      children: (0, n.jsx)(s.y$y, { className: r.u1, type: s.y$y.Type.SPINNING_CIRCLE }),
                  })
                : null,
            (0, n.jsx)("div", { className: l()({ [r.Lq]: t }), children: a }),
        ],
    });
}
