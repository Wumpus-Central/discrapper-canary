e.r(n),
    e.d(n, {
        default: function () {
            return s;
        }
    });
var r = e(200651);
e(192379);
var l = e(481060),
    i = e(239091),
    a = e(358085),
    u = e(905041),
    o = e(388032);
function s(t) {
    let { href: n, textContent: e, onSelect: s } = t,
        d = (0, u.Z)(n, e);
    return a.isPlatformEmbedded && null != d
        ? (0, r.jsx)(l.Menu, {
              navId: 'image-context',
              onClose: i.Zy,
              'aria-label': o.intl.string(o.t.Zow2V1),
              onSelect: s,
              children: (0, r.jsx)(l.MenuGroup, { children: d })
          })
        : null;
}
