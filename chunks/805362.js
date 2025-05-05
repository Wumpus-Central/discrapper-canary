e.d(n, { default: () => c });
var l = e(255367);
e(73800);
var i = e(481060),
    r = e(239091),
    a = e(358085),
    o = e(905041),
    u = e(388032);
function c(t) {
    let { href: n, textContent: e, onSelect: c } = t,
        s = (0, o.Z)(n, e);
    return a.isPlatformEmbedded && null != s
        ? (0, l.jsx)(i.v2r, {
              navId: 'image-context',
              onClose: r.Zy,
              'aria-label': u.intl.string(u.t.Zow2V1),
              onSelect: c,
              children: (0, l.jsx)(i.kSQ, { children: s })
          })
        : null;
}
