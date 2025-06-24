n.d(t, { Z: () => p }), n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(550385),
    s = n(594174),
    a = n(74538),
    c = n(997945),
    u = n(630117),
    d = n(737604),
    h = n(441319);
function p() {
    let [e, t] = (0, i.Wu)([s.default, d.Z], () => [d.Z.getCurrentDesktopIcon(), a.ZP.isPremium(s.default.getCurrentUser())]),
        n = (0, o.oq)().activePanel === o.wh.APP_ICON,
        p = (0, h.aW)(e),
        f = e !== c.aH.DEFAULT && (t || n),
        g = (0, r.jsx)(l.gw7, {
            size: 'custom',
            color: 'currentColor',
            width: 24,
            height: 24
        });
    return null != p && f
        ? (0, r.jsx)(u.Z, {
              id: e,
              width: 48
          })
        : g;
}
