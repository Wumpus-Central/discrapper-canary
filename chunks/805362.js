t.d(e, { default: () => c });
var l = t(200651);
t(192379);
var r = t(481060),
    i = t(239091),
    o = t(358085),
    a = t(905041),
    u = t(388032);
function c(n) {
    let { href: e, textContent: t, onSelect: c } = n,
        d = (0, a.Z)(e, t);
    return o.isPlatformEmbedded && null != d
        ? (0, l.jsx)(r.v2r, {
              navId: 'image-context',
              onClose: i.Zy,
              'aria-label': u.NW.string(u.t.Zow2V1),
              onSelect: c,
              children: (0, l.jsx)(r.kSQ, { children: d })
          })
        : null;
}
