n.d(t, { O: () => c });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(991607);
function c(e) {
    let { chunks: t, columns: n, className: s } = e,
        c = l.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
        ? (0, i.jsx)("div", { className: o.Lq, children: (0, i.jsx)(r.y$y, {}) })
        : (0, i.jsx)("div", {
              style: c,
              className: a()(o.aY, s),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: a()(o.iv, { [o.yF]: t > n - 1 }),
                          children: (0, i.jsx)(r.Text, {
                              className: o.ph,
                              variant: "code",
                              color: "text-default",
                              children: e,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
