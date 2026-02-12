a.d(t, { A: () => o });
var n = a(627968);
a(64700);
var i = a(503698),
    s = a.n(i),
    l = a(397927),
    r = a(1305);
function o(e) {
    let { loading: t, children: a } = e;
    return (0, n.jsxs)("div", {
        className: r.kL,
        children: [
            t
                ? (0, n.jsx)("div", {
                      className: r.dc,
                      children: (0, n.jsx)(l.y$y, { className: r.u1, type: l.y$y.Type.SPINNING_CIRCLE }),
                  })
                : null,
            (0, n.jsx)("div", { className: s()({ [r.Lq]: t }), children: a }),
        ],
    });
}
