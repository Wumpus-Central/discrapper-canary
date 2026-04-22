n.d(e, { default: () => d });
var i = n(627968);
n(64700);
var a = n(861672),
    l = n(477782),
    r = n(442433),
    s = n(723702),
    o = n(777933),
    c = n(985018);
function d(t) {
    let { href: e, textContent: n, onSelect: d } = t,
        u = (0, o.A)(e, n);
    return s.isPlatformEmbedded && null != u
        ? (0, i.jsx)(a.W, {
              "data-menu-migrated-auto": !0,
              navId: "image-context",
              onClose: r.Z_,
              "aria-label": c.intl.string(c.t.Zow2V5),
              onSelect: d,
              children: (0, i.jsx)(l.rX, { children: u }),
          })
        : null;
}
