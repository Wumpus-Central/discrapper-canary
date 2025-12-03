n.d(t, { V: () => u });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(686546),
    l = n(601964),
    c = n(519252);
function u(e) {
    let { guild: t, size: n } = e,
        i = (0, l.EB)(t, n, !1, !0),
        u = (0, l.gM)(t);
    return (0, r.jsx)(s.ZP, {
        className: c.iconContainer,
        mask: s.ZP.Masks.SQUIRCLE,
        width: n,
        height: n,
        children:
            null != i
                ? (0, r.jsx)("img", {
                      src: i,
                      alt: t.name,
                      height: n,
                      width: n,
                  })
                : (0, r.jsx)("div", {
                      className: c.textContainer,
                      children: (0, r.jsx)(o.Text, {
                          className: a()({ [c.smallText]: 20 === n }),
                          color: "text-subtle",
                          variant: "text-md/semibold",
                          children: u,
                      }),
                  }),
    });
}
