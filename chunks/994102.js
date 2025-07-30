n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(481060),
    o = n(206074),
    s = n(652853),
    l = n(475413),
    c = n(228168),
    u = n(388032);
function d(e) {
    let { application: t, onAction: n, onClose: d } = e,
        { themeType: f } = (0, s.z)(),
        _ = (0, o.Z)({
            application: t,
            location: 'User Profile Activity'
        });
    return null == _
        ? null
        : (0, r.jsx)(l.tG, {
              icon: a.v3n,
              text: u.intl.string(u.t['jaYS/v']),
              size: f === c.lY.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
              fullWidth: f !== c.lY.MODAL_V2,
              themeColor: 'secondary',
              onClick: (e) => {
                  (e.stopPropagation(), null == n || n({ action: 'PRESS_CLOUD_PLAY_BUTTON' }), _(), null == d || d());
              }
          });
}
