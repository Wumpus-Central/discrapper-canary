n.d(e, {
    default: () => c,
});
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(442433),
    a = n(723702),
    o = n(777933),
    s = n(985018);

function c(t) {
    let { href: e, textContent: n, onSelect: c } = t,
        u = (0, o.A)(e, n);
    return a.isPlatformEmbedded && null != u
        ? (0, l.jsx)(i.W1t, {
              navId: "image-context",
              onClose: r.Z_,
              "aria-label": s.intl.string(s.t.Zow2V5),
              onSelect: c,
              children: (0, l.jsx)(i.rXV, {
                  children: u,
              }),
          })
        : null;
}
