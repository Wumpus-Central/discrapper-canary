n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(726542),
    s = n(906732),
    o = n(231757),
    l = n(553795),
    u = n(475413),
    c = n(981631),
    d = n(388032);
function f(e) {
    let { platformType: t, icon: n, onAction: f } = e,
        { newestAnalyticsLocation: _ } = (0, s.ZP)();
    return (0, r.e7)([l.Z], () => null != l.Z.getAccount(null, t))
        ? null
        : (0, i.jsx)(u.tG, {
              icon: n,
              text: d.intl.formatToPlainString(d.t.XWSHTU, { platform: a.Z.get(t).name }),
              fullWidth: !0,
              onClick: (e) => {
                  e.stopPropagation();
                  let n = t === c.ABu.XBOX;
                  null == f || f({ action: n ? 'PRESS_CONNECT_XBOX_BUTTON' : 'PRESS_CONNECT_PLAYSTATION_BUTTON' }),
                      (0, o.Z)({
                          platformType: t,
                          location: _
                      });
              }
          });
}
