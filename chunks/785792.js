r.d(t, { b: () => a });
var n = r(200651),
    o = r(192379),
    c = r(120356),
    i = r.n(c),
    s = r(481060),
    l = r(135169);
function a(e) {
    let { chunks: t, columns: r, className: c } = e,
        a = o.useMemo(() => ({ '--secure-frames-columns': r }), [r]);
    return null == t
        ? (0, n.jsx)('div', {
              className: l.loading,
              children: (0, n.jsx)(s.$jN, {})
          })
        : (0, n.jsx)('div', {
              style: a,
              className: i()(l.code, c),
              children: t.map((e, t) =>
                  (0, n.jsx)(
                      'div',
                      {
                          className: i()(l.chunk, { [l.divider]: t > r - 1 }),
                          children: (0, n.jsx)(s.Text, {
                              className: l.codeText,
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
