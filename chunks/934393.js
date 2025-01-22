r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(726542),
    s = r(906732),
    l = r(231757),
    u = r(553795),
    c = r(475413),
    d = r(981631),
    f = r(388032);
function p(e) {
    let { platformType: n, icon: r, onAction: p } = e,
        { newestAnalyticsLocation: h } = (0, s.ZP)();
    return (0, a.e7)([u.Z], () => null != u.Z.getAccount(null, n))
        ? null
        : (0, i.jsx)(c.tG, {
              icon: r,
              text: f.intl.formatToPlainString(f.t.XWSHTU, { platform: o.Z.get(n).name }),
              fullWidth: !0,
              onClick: (e) => {
                  e.stopPropagation();
                  let r = n === d.ABu.XBOX;
                  null == p || p({ action: r ? 'PRESS_CONNECT_XBOX_BUTTON' : 'PRESS_CONNECT_PLAYSTATION_BUTTON' }),
                      (0, l.Z)({
                          platformType: n,
                          location: h
                      });
              }
          });
}
