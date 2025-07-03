n.d(t, { V: () => d });
var i = n(255367),
    r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(686546),
    o = n(601964),
    c = n(587015);
function d(e) {
    let { guild: t, size: n } = e,
        r = (0, o.EB)(t, n, !1, !0),
        d = (0, o.gM)(t);
    return (0, i.jsx)(a.ZP, {
        className: c.iconContainer,
        mask: a.ZP.Masks.SQUIRCLE,
        width: n,
        height: n,
        children:
            null != r
                ? (0, i.jsx)('img', {
                      src: r,
                      alt: t.name,
                      height: n,
                      width: n
                  })
                : (0, i.jsx)('div', {
                      className: c.textContainer,
                      children: (0, i.jsx)(l.Text, {
                          className: s()({ [c.smallText]: 20 === n }),
                          color: 'text-secondary',
                          variant: 'text-md/semibold',
                          children: d
                      })
                  })
    });
}
