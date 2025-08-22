r.d(t, { b: () => a });
var n = r(951288),
    o = r(647438),
    c = r(120356),
    l = r.n(c),
    i = r(481060),
    s = r(840937);
function a(e) {
    let { chunks: t, columns: r, className: c } = e,
        a = o.useMemo(() => ({ "--secure-frames-columns": r }), [r]);
    return null == t
        ? (0, n.jsx)("div", {
              className: s.loading,
              children: (0, n.jsx)(i.$jN, {}),
          })
        : (0, n.jsx)("div", {
              style: a,
              className: l()(s.code, c),
              children: t.map((e, t) =>
                  (0, n.jsx)(
                      "div",
                      {
                          className: l()(s.chunk, { [s.divider]: t > r - 1 }),
                          children: (0, n.jsx)(i.Text, {
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
