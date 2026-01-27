e.d(n, {
    default: () => s,
});
var l = e(627968);
e(64700);
var i = e(397927),
    r = e(442433),
    a = e(723702),
    o = e(777933),
    c = e(985018);

function s(t) {
    let { href: n, textContent: e, onSelect: s } = t,
        u = (0, o.A)(n, e);
    return a.isPlatformEmbedded && null != u
        ? (0, l.jsx)(i.W1t, {
              "data-menu-migrated-auto": !0,
              navId: "image-context",
              onClose: r.Z_,
              "aria-label": c.intl.string(c.t.Zow2V5),
              onSelect: s,
              children: (0, l.jsx)(i.rXV, {
                  children: u,
              }),
          })
        : null;
}
