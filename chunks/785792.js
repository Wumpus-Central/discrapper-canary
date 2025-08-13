r.d(t, { b: () => s });
var n = r(255367),
    o = r(73800),
    c = r(120356),
    i = r.n(c),
    l = r(481060),
    a = r(795827);
function s(e) {
    let { chunks: t, columns: r, className: c } = e,
        s = o.useMemo(() => ({ "--secure-frames-columns": r }), [r]);
    return null == t
        ? (0, n.jsx)("div", {
              className: a.loading,
              children: (0, n.jsx)(l.$jN, {}),
          })
        : (0, n.jsx)("div", {
              style: s,
              className: i()(a.code, c),
              children: t.map((e, t) =>
                  (0, n.jsx)(
                      "div",
                      {
                          className: i()(a.chunk, { [a.divider]: t > r - 1 }),
                          children: (0, n.jsx)(l.Text, {
                              className: a.codeText,
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
