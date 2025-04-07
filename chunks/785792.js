n.d(t, { b: () => c });
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(135169);
function c(e) {
    let { chunks: t, columns: n, className: i } = e,
        c = l.useMemo(() => ({ '--secure-frames-columns': n }), [n]);
    return null == t
        ? (0, r.jsx)('div', {
              className: s.loading,
              children: (0, r.jsx)(a.$jN, {})
          })
        : (0, r.jsx)('div', {
              style: c,
              className: o()(s.code, i),
              children: t.map((e, t) =>
                  (0, r.jsx)(
                      'div',
                      {
                          className: o()(s.chunk, { [s.divider]: t > n - 1 }),
                          children: (0, r.jsx)(a.Text, {
                              className: s.codeText,
                              variant: 'code',
                              color: 'text-normal',
                              children: e
                          })
                      },
                      ''.concat(e, '-').concat(t)
                  )
              )
          });
}
