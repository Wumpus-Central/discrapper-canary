n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(726542),
    o = n(906732),
    s = n(231757),
    l = n(553795),
    c = n(652853),
    u = n(475413),
    d = n(981631),
    f = n(671955),
    p = n(388032);
function _(e) {
    let { platformType: t, icon: n, onAction: _ } = e,
        { newestAnalyticsLocation: m } = (0, o.ZP)(),
        { themeType: h } = (0, c.z)(),
        g = h === f.l.MODAL_V2;
    if ((0, i.e7)([l.Z], () => null != l.Z.getAccount(null, t))) return null;
    let E = (e) => {
        e.stopPropagation();
        let n = t === d.ABu.XBOX;
        null == _ || _({ action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
            (0, s.Z)({
                platformType: t,
                location: m,
            });
    };
    return (0, r.jsx)(u.i6, {
        icon: n,
        text: p.intl.formatToPlainString(p.t.XWSHTb, { platform: a.Z.get(t).name }),
        fullWidth: !g,
        onClick: E,
    });
}
