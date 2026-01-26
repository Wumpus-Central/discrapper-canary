n.d(e, {
    default: () => s,
});
var l = n(627968);
n(64700);
var i = n(397927),
    a = n(442433),
    r = n(723702),
    o = n(777933),
    c = n(985018);

function s(t) {
    let { href: e, textContent: n, onSelect: s } = t,
        u = (0, o.A)(e, n);
    return r.isPlatformEmbedded && null != u
        ? (0, l.jsx)(i.W1t, {
              "data-menu-mixed-auto": !0,
              navId: "image-context",
              onClose: a.Z_,
              "aria-label": c.intl.string(c.t.Zow2V5),
              onSelect: s,
              children: (0, l.jsx)(i.rXV, {
                  children: u,
              }),
          })
        : null;
}
