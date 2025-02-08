n.d(t, { Z: () => p }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(540059),
    o = n(594174),
    s = n(74538),
    c = n(327943),
    d = n(997945),
    u = n(630117),
    h = n(441319);
function p() {
    let e = (0, a.Q3)('AppIconHome'),
        [t, n, p] = (0, l.Wu)([o.default, c.Z], () => [c.Z.getCurrentDesktopIcon(), c.Z.isEditorOpen, s.ZP.isPremium(o.default.getCurrentUser())]),
        g = (0, h.aW)(t),
        m = t !== d.aH.DEFAULT && (p || n),
        f = e ? 24 : 30,
        _ = (0, i.jsx)(r.gw7, {
            size: 'custom',
            color: 'currentColor',
            width: f,
            height: f
        });
    return null != g && m
        ? (0, i.jsx)(u.Z, {
              id: t,
              width: 48
          })
        : _;
}
