n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(755721),
    o = n(726542),
    s = n(906732),
    l = n(231757),
    c = n(553795),
    u = n(652853),
    d = n(475413),
    _ = n(228168),
    f = n(981631),
    p = n(388032);
function h(e) {
    let { platformType: t, icon: n, onAction: h } = e,
        { newestAnalyticsLocation: m } = (0, s.ZP)(),
        { themeType: g } = (0, u.z)();
    if ((0, i.e7)([c.Z], () => null != c.Z.getAccount(null, t))) return null;
    let E = (e) => {
        e.stopPropagation();
        let n = t === f.ABu.XBOX;
        (null == h || h({ action: n ? 'PRESS_CONNECT_XBOX_BUTTON' : 'PRESS_CONNECT_PLAYSTATION_BUTTON' }),
            (0, l.Z)({
                platformType: t,
                location: m
            }));
    };
    return g === _.lY.MODAL_V2
        ? (0, r.jsx)(d.tG, {
              icon: n,
              text: p.intl.formatToPlainString(p.t.XWSHTU, { platform: o.Z.get(t).name }),
              size: a.Ph.TINY,
              themeColor: 'secondary',
              onClick: E
          })
        : (0, r.jsx)(d.tG, {
              icon: n,
              text: p.intl.formatToPlainString(p.t.XWSHTU, { platform: o.Z.get(t).name }),
              size: a.Ph.SMALL,
              themeColor: 'secondary',
              fullWidth: !0,
              onClick: E
          });
}
