n.d(t, { b: () => a });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    c = n(385314);
function a(e) {
    let { chunks: t, columns: n, className: l } = e,
        a = r.useMemo(() => ({ '--secure-frames-columns': n }), [n]);
    return null == t
        ? (0, i.jsx)('div', {
              className: c.loading,
              children: (0, i.jsx)(o.$jN, {})
          })
        : (0, i.jsx)('div', {
              style: a,
              className: s()(c.code, l),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      'div',
                      {
                          className: s()(c.chunk, { [c.divider]: t > n - 1 }),
                          children: (0, i.jsx)(o.Text, {
                              className: c.codeText,
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
