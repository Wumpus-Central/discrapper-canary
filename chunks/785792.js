n.d(t, { b: () => u });
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(135169);
function u(e) {
    let { chunks: t, columns: n, className: i } = e,
        u = r.useMemo(() => ({ '--secure-frames-columns': n }), [n]);
    return null == t
        ? (0, l.jsx)('div', {
              className: s.loading,
              children: (0, l.jsx)(o.$jN, {})
          })
        : (0, l.jsx)('div', {
              style: u,
              className: a()(s.code, i),
              children: t.map((e, t) =>
                  (0, l.jsx)(
                      'div',
                      {
                          className: a()(s.chunk, { [s.divider]: t > n - 1 }),
                          children: (0, l.jsx)(o.Text, {
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
