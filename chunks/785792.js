n.d(t, { b: () => o });
var r = n(200651),
    l = n(192379),
    i = n(120356),
    u = n.n(i),
    s = n(481060),
    a = n(135169);
function o(e) {
    let { chunks: t, columns: n, className: i } = e,
        o = l.useMemo(() => ({ '--secure-frames-columns': n }), [n]);
    return null == t
        ? (0, r.jsx)('div', {
              className: a.loading,
              children: (0, r.jsx)(s.$jN, {})
          })
        : (0, r.jsx)('div', {
              style: o,
              className: u()(a.code, i),
              children: t.map((e, t) =>
                  (0, r.jsx)(
                      'div',
                      {
                          className: u()(a.chunk, { [a.divider]: t > n - 1 }),
                          children: (0, r.jsx)(s.Text, {
                              className: a.codeText,
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
