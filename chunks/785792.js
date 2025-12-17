n.d(t, { b: () => u });
var l = n(54381),
    i = n(473749),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(764092);
function u(e) {
    let { chunks: t, columns: n, className: r } = e,
        u = i.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
        ? (0, l.jsx)("div", {
              className: s.loading,
              children: (0, l.jsx)(o.$jN, {}),
          })
        : (0, l.jsx)("div", {
              style: u,
              className: a()(s.code, r),
              children: t.map((e, t) =>
                  (0, l.jsx)(
                      "div",
                      {
                          className: a()(s.chunk, { [s.divider]: t > n - 1 }),
                          children: (0, l.jsx)(o.Text, {
                              className: s.codeText,
                              variant: "code",
                              color: "text-default",
                              children: e,
                          }),
                      },
                      "".concat(e, "-").concat(t),
                  ),
              ),
          });
}
