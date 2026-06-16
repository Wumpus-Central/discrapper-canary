a.d(t, { default: () => c });
var n = a(627968);
a(64700);
var d = a(980707),
    i = a(477782),
    l = a(442433),
    r = a(723702),
    s = a(777933),
    u = a(375708);
function c(e) {
    let { href: t, textContent: a, onSelect: c } = e,
        o = (0, s.A)(t, a);
    return r.isPlatformEmbedded && null != o
        ? (0, n.jsx)(d.W, {
              "data-menu-migrated-auto": !0,
              navId: "image-context",
              onClose: l.Z_,
              "aria-label": u.intl.string(u.t.Zow2V5),
              onSelect: c,
              children: (0, n.jsx)(i.rX, { children: o }),
          })
        : null;
}
