n.d(t, { Z: () => h }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(540059),
    a = n(594174),
    s = n(74538),
    c = n(327943),
    u = n(997945),
    d = n(630117),
    p = n(441319);
function h() {
    let e = (0, o.Q3)('AppIconHome'),
        [t, n, h] = (0, i.Wu)([a.default, c.Z], () => [c.Z.getCurrentDesktopIcon(), c.Z.isEditorOpen, s.ZP.isPremium(a.default.getCurrentUser())]),
        f = (0, p.aW)(t),
        g = t !== u.aH.DEFAULT && (h || n),
        m = e ? 24 : 30,
        b = (0, r.jsx)(l.gw7, {
            size: 'custom',
            color: 'currentColor',
            width: m,
            height: m
        });
    return null != f && g
        ? (0, r.jsx)(d.Z, {
              id: t,
              width: 48
          })
        : b;
}
