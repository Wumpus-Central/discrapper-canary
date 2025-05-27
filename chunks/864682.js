n.d(t, { Z: () => f }), n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(550385),
    s = n(540059),
    a = n(594174),
    c = n(74538),
    u = n(997945),
    d = n(630117),
    h = n(737604),
    p = n(441319);
function f() {
    let e = (0, s.Q3)('AppIconHome'),
        [t, n] = (0, i.Wu)([a.default, h.Z], () => [h.Z.getCurrentDesktopIcon(), c.ZP.isPremium(a.default.getCurrentUser())]),
        f = (0, o.oq)().activePanel === o.wh.APP_ICON,
        g = (0, p.aW)(t),
        m = t !== u.aH.DEFAULT && (n || f),
        b = e ? 24 : 30,
        y = (0, r.jsx)(l.gw7, {
            size: 'custom',
            color: 'currentColor',
            width: b,
            height: b
        });
    return null != g && m
        ? (0, r.jsx)(d.Z, {
              id: t,
              width: 48
          })
        : y;
}
