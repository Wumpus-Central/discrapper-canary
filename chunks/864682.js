n.d(t, { Z: () => h }), n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(550385),
    o = n(594174),
    s = n(74538),
    c = n(997945),
    u = n(630117),
    d = n(737604),
    f = n(441319);
function h() {
    let [e, t] = (0, i.Wu)([o.default, d.Z], () => [
            d.Z.getCurrentDesktopIcon(),
            s.ZP.isPremium(o.default.getCurrentUser()),
        ]),
        n = (0, a.oq)().activePanel === a.wh.APP_ICON,
        h = (0, f.aW)(e),
        p = h.id !== c.aH.DEFAULT && (t || n),
        g = (0, r.jsx)(l.gw7, {
            size: "custom",
            color: "currentColor",
            width: 24,
            height: 24,
        });
    return null != h && p
        ? (0, r.jsx)(u.Z, {
              id: h.id,
              width: 48,
          })
        : g;
}
