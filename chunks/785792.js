n.d(t, { b: () => a });
var r = n(255367),
    o = n(73800),
    c = n(120356),
    i = n.n(c),
    l = n(481060),
    s = n(135169);
function a(e) {
    let { chunks: t, columns: n, className: c } = e,
        a = o.useMemo(() => ({ '--secure-frames-columns': n }), [n]);
    return null == t
        ? (0, r.jsx)('div', {
              className: s.loading,
              children: (0, r.jsx)(l.$jN, {})
          })
        : (0, r.jsx)('div', {
              style: a,
              className: i()(s.code, c),
              children: t.map((e, t) =>
                  (0, r.jsx)(
                      'div',
                      {
                          className: i()(s.chunk, { [s.divider]: t > n - 1 }),
                          children: (0, r.jsx)(l.Text, {
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
