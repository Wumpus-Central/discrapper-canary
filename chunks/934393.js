n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    o = n(726542),
    s = n(906732),
    l = n(231757),
    c = n(553795),
    u = n(652853),
    d = n(475413),
    f = n(228168),
    _ = n(981631),
    p = n(388032);
function h(e) {
    let { platformType: t, icon: n, onAction: h } = e,
        { newestAnalyticsLocation: m } = (0, s.ZP)(),
        { themeType: g } = (0, u.z)();
    if ((0, i.e7)([c.Z], () => null != c.Z.getAccount(null, t))) return null;
    let E = (e) => {
        e.stopPropagation();
        let n = t === _.ABu.XBOX;
        null == h || h({ action: n ? 'PRESS_CONNECT_XBOX_BUTTON' : 'PRESS_CONNECT_PLAYSTATION_BUTTON' }),
            (0, l.Z)({
                platformType: t,
                location: m
            });
    };
    return g === f.lY.MODAL_V2
        ? (0, r.jsx)(d.tG, {
              icon: n,
              text: p.intl.formatToPlainString(p.t.XWSHTU, { platform: o.Z.get(t).name }),
              size: a.PhG.TINY,
              themeColor: 'secondary',
              onClick: E
          })
        : (0, r.jsx)(d.tG, {
              icon: n,
              text: p.intl.formatToPlainString(p.t.XWSHTU, { platform: o.Z.get(t).name }),
              fullWidth: !0,
              onClick: E
          });
}
