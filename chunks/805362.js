e.d(n, { default: () => c });
var l = e(200651);
e(192379);
var r = e(481060),
    i = e(239091),
    a = e(358085),
    o = e(905041),
    u = e(388032);
function c(t) {
    let { href: n, textContent: e, onSelect: c } = t,
        s = (0, o.Z)(n, e);
    return a.isPlatformEmbedded && null != s
        ? (0, l.jsx)(r.v2r, {
              navId: 'image-context',
              onClose: i.Zy,
              'aria-label': u.NW.string(u.t.Zow2V1),
              onSelect: c,
              children: (0, l.jsx)(r.kSQ, { children: s })
          })
        : null;
}
