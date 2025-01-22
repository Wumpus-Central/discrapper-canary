e.r(t),
    e.d(t, {
        default: function () {
            return d;
        }
    });
var l = e(200651);
e(192379);
var i = e(481060),
    r = e(239091),
    u = e(358085),
    a = e(905041),
    o = e(388032);
function d(n) {
    let { href: t, textContent: e, onSelect: d } = n,
        c = (0, a.Z)(t, e);
    return u.isPlatformEmbedded && null != c
        ? (0, l.jsx)(i.Menu, {
              navId: 'image-context',
              onClose: r.Zy,
              'aria-label': o.intl.string(o.t.Zow2V1),
              onSelect: d,
              children: (0, l.jsx)(i.MenuGroup, { children: c })
          })
        : null;
}
