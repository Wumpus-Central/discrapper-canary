l.d(t, { default: () => d });
var e = l(200651);
l(192379);
var i = l(481060),
    a = l(239091),
    r = l(358085),
    o = l(905041),
    u = l(388032);
function d(n) {
    let { href: t, textContent: l, onSelect: d } = n,
        s = (0, o.Z)(t, l);
    return r.isPlatformEmbedded && null != s
        ? (0, e.jsx)(i.v2r, {
              navId: 'image-context',
              onClose: a.Zy,
              'aria-label': u.intl.string(u.t.Zow2V1),
              onSelect: d,
              children: (0, e.jsx)(i.kSQ, { children: s })
          })
        : null;
}
