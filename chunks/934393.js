n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(726542),
    a = n(906732),
    s = n(231757),
    l = n(553795),
    c = n(475413),
    u = n(981631),
    d = n(388032);
function f(e) {
    let { platformType: t, icon: n, onAction: f } = e,
        { newestAnalyticsLocation: _ } = (0, a.ZP)();
    return (0, i.e7)([l.Z], () => null != l.Z.getAccount(null, t))
        ? null
        : (0, r.jsx)(c.tG, {
              icon: n,
              text: d.NW.formatToPlainString(d.t.XWSHTU, { platform: o.Z.get(t).name }),
              fullWidth: !0,
              onClick: (e) => {
                  e.stopPropagation();
                  let n = t === u.ABu.XBOX;
                  null == f || f({ action: n ? 'PRESS_CONNECT_XBOX_BUTTON' : 'PRESS_CONNECT_PLAYSTATION_BUTTON' }),
                      (0, s.Z)({
                          platformType: t,
                          location: _
                      });
              }
          });
}
