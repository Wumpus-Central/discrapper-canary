n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    i = n(397927),
    s = n(1305);
function c(e) {
    let { loading: t, children: n } = e;
    return (0, l.jsxs)("div", {
        className: s.kL,
        children: [
            t
                ? (0, l.jsx)("div", {
                      className: s.dc,
                      children: (0, l.jsx)(i.y$y, {
                          className: s.u1,
                          type: i.y$y.Type.SPINNING_CIRCLE,
                      }),
                  })
                : null,
            (0, l.jsx)("div", {
                className: r()({ [s.Lq]: t }),
                children: n,
            }),
        ],
    });
}
