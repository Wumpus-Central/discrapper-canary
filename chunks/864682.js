n.d(t, { Z: () => f }), n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    o = n(550385),
    a = n(594174),
    s = n(74538),
    c = n(997945),
    u = n(630117),
    d = n(737604),
    p = n(441319);
function f() {
    let [e, t] = (0, i.Wu)([a.default, d.Z], () => [
            d.Z.getCurrentDesktopIcon(),
            s.ZP.isPremium(a.default.getCurrentUser()),
        ]),
        n = (0, o.oq)().activePanel === o.wh.APP_ICON,
        f = (0, p.aW)(e),
        h = e !== c.aH.DEFAULT && (t || n),
        g = (0, r.jsx)(l.gw7, {
            size: "custom",
            color: "currentColor",
            width: 24,
            height: 24,
        });
    return null != f && h
        ? (0, r.jsx)(u.Z, {
              id: e,
              width: 48,
          })
        : g;
}
