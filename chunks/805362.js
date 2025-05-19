e.d(n, { default: () => u });
var l = e(255367);
e(73800);
var i = e(481060),
    r = e(239091),
    a = e(358085),
    o = e(905041),
    s = e(388032);
function u(t) {
    let { href: n, textContent: e, onSelect: u } = t,
        c = (0, o.Z)(n, e);
    return a.isPlatformEmbedded && null != c
        ? (0, l.jsx)(i.v2r, {
              navId: 'image-context',
              onClose: r.Zy,
              'aria-label': s.intl.string(s.t.Zow2V1),
              onSelect: u,
              children: (0, l.jsx)(i.kSQ, { children: c })
          })
        : null;
}
