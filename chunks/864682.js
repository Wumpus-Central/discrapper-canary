n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(540059),
    o = n(594174),
    s = n(74538),
    c = n(327943),
    u = n(997945),
    d = n(630117),
    h = n(441319);
function p() {
    let e = (0, a.Q3)('AppIconHome'),
        [t, n, p] = (0, l.Wu)([o.default, c.Z], () => [c.Z.getCurrentDesktopIcon(), c.Z.isEditorOpen, s.ZP.isPremium(o.default.getCurrentUser())]),
        m = (0, h.aW)(t),
        f = t !== u.aH.DEFAULT && (p || n),
        g = e ? 24 : 30,
        v = (0, i.jsx)(r.ClydeIcon, {
            size: 'custom',
            color: 'currentColor',
            width: g,
            height: g
        });
    return null != m && f
        ? (0, i.jsx)(d.Z, {
              id: t,
              width: 48
          })
        : v;
}
