n.d(t, { b: () => c });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    o = n(135169);
function c(e) {
    let { chunks: t, columns: n, className: i } = e,
        c = l.useMemo(() => ({ '--secure-frames-columns': n }), [n]);
    return null == t
        ? (0, r.jsx)('div', {
              className: o.loading,
              children: (0, r.jsx)(a.$jN, {})
          })
        : (0, r.jsx)('div', {
              style: c,
              className: s()(o.code, i),
              children: t.map((e, t) =>
                  (0, r.jsx)(
                      'div',
                      {
                          className: s()(o.chunk, { [o.divider]: t > n - 1 }),
                          children: (0, r.jsx)(a.Text, {
                              className: o.codeText,
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
