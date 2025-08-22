n.d(t, { b: () => c });
var r = n(951288),
    l = n(647438),
    s = n(120356),
    i = n.n(s),
    a = n(481060),
    o = n(840937);
function c(e) {
    let { chunks: t, columns: n, className: s } = e,
        c = l.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
        ? (0, r.jsx)("div", {
              className: o.loading,
              children: (0, r.jsx)(a.$jN, {}),
          })
        : (0, r.jsx)("div", {
              style: c,
              className: i()(o.code, s),
              children: t.map((e, t) =>
                  (0, r.jsx)(
                      "div",
                      {
                          className: i()(o.chunk, { [o.divider]: t > n - 1 }),
                          children: (0, r.jsx)(a.Text, {
                              className: o.codeText,
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
