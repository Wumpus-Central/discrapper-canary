e.d(n, { default: () => c });
var l = e(627968);
e(64700);
var i = e(397927),
    a = e(442433),
    r = e(723702),
    o = e(777933),
    s = e(985018);
function c(t) {
    let { href: n, textContent: e, onSelect: c } = t,
        d = (0, o.A)(n, e);
    return r.isPlatformEmbedded && null != d
        ? (0, l.jsx)(i.W1t, {
              "data-menu-migrated-auto": !0,
              navId: "image-context",
              onClose: a.Z_,
              "aria-label": s.intl.string(s.t.Zow2V5),
              onSelect: c,
              children: (0, l.jsx)(i.rXV, { children: d }),
          })
        : null;
}
