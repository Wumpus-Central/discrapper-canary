n.d(t, { b: () => u });
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(66210);
function u(e) {
    let { chunks: t, columns: n, className: i } = e,
        u = l.useMemo(() => ({ '--secure-frames-columns': n }), [n]);
    return null == t
        ? (0, r.jsx)('div', {
              className: s.loading,
              children: (0, r.jsx)(a.$jN, {})
          })
        : (0, r.jsx)('div', {
              style: u,
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
