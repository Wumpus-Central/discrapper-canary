n.d(t, { Z: () => l });
var r = n(255367),
    i = n(481060),
    o = n(26033),
    a = n(614716),
    s = n(388032);
function l(e) {
    let { display: t, entry: n, onAction: l, onClose: c } = e,
        u = (0, o.Mq)(n),
        d = (0, a.Z)({
            applicationId: u ? n.extra.application_id : void 0,
            onClose: c
        });
    return 'recent' === t && u
        ? (0, r.jsx)(i.sNh, {
              id: 'view-activity',
              label: s.intl.string(s.t.GDWYR0),
              action: () => {
                  null == l || l({ action: 'PRESS_VIEW_ACTIVITY_MENU_ITEM' }), d();
              }
          })
        : null;
}
