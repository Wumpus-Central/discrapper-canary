n.d(t, { V: () => d });
var i = n(255367),
    r = n(120356),
    s = n.n(r),
    l = n(468194),
    a = n(481060),
    o = n(686546),
    c = n(587015);
function d(e) {
    let { guild: t, size: n } = e,
        r = t.getIconURL(n, !1, !0),
        d = (0, l.Zg)(t.name);
    return (0, i.jsx)(o.ZP, {
        className: c.iconContainer,
        mask: o.ZP.Masks.SQUIRCLE,
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
                      children: (0, i.jsx)(a.Text, {
                          className: s()({ [c.smallText]: 20 === n }),
                          color: 'text-secondary',
                          variant: 'text-md/semibold',
                          children: d
                      })
                  })
    });
}
