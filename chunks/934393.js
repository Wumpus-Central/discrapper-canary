n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(726542),
    o = n(906732),
    s = n(231757),
    l = n(553795),
    c = n(652853),
    u = n(732380),
    d = n(981631),
    f = n(671955),
    _ = n(388032);
function p(e) {
    let { platformType: t, icon: n, onAction: p } = e,
        { newestAnalyticsLocation: h } = (0, o.ZP)(),
        { themeType: m } = (0, c.z)(),
        g = m === f.l.MODAL_V2;
    if ((0, i.e7)([l.Z], () => null != l.Z.getAccount(null, t))) return null;
    let E = (e) => {
        e.stopPropagation();
        let n = t === d.ABu.XBOX;
        null == p || p({ action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
            (0, s.Z)({
                platformType: t,
                location: h,
            });
    };
    return (0, r.jsx)(u.O1, {
        icon: n,
        text: _.intl.formatToPlainString(_.t.XWSHTb, { platform: a.Z.get(t).name }),
        fullWidth: !g,
        onClick: E,
    });
}
