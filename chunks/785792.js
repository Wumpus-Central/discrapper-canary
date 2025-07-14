n.d(t, { b: () => c });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    s = n(481060),
    a = n(135169);
function c(e) {
    let { chunks: t, columns: n, className: i } = e,
        c = l.useMemo(() => ({ '--secure-frames-columns': n }), [n]);
    return null == t
        ? (0, r.jsx)('div', {
              className: a.loading,
              children: (0, r.jsx)(s.$jN, {})
          })
        : (0, r.jsx)('div', {
              style: c,
              className: o()(a.code, i),
              children: t.map((e, t) =>
                  (0, r.jsx)(
                      'div',
                      {
                          className: o()(a.chunk, { [a.divider]: t > n - 1 }),
                          children: (0, r.jsx)(s.Text, {
                              className: a.codeText,
                              variant: 'code',
                              color: 'text-default',
                              children: e
                          })
                      },
                      ''.concat(e, '-').concat(t)
                  )
              )
          });
}
