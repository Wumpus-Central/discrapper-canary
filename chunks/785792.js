t.d(n, {
    b: function () {
        return a;
    }
});
var o = t(200651),
    i = t(192379),
    r = t(120356),
    c = t.n(r),
    l = t(481060),
    s = t(797448);
function a(e) {
    let { chunks: n, columns: t, className: r } = e,
        a = i.useMemo(() => ({ '--secure-frames-columns': t }), [t]);
    return null == n
        ? (0, o.jsx)('div', {
              className: s.loading,
              children: (0, o.jsx)(l.Spinner, {})
          })
        : (0, o.jsx)('div', {
              style: a,
              className: c()(s.code, r),
              children: n.map((e, n) =>
                  (0, o.jsx)(
                      'div',
                      {
                          className: c()(s.chunk, { [s.divider]: n > t - 1 }),
                          children: (0, o.jsx)(l.Text, {
                              className: s.codeText,
                              variant: 'code',
                              color: 'text-normal',
                              children: e
                          })
                      },
                      ''.concat(e, '-').concat(n)
                  )
              )
          });
}
