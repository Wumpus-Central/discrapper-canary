n.d(t, { Z: () => c });
var i = n(200651),
    r = n(481060),
    a = n(499254),
    s = n(827498),
    o = n(541716),
    l = n(26033),
    u = n(388032);
function c(e) {
    let { display: t, entry: n, onAction: c, onClose: d } = e;
    return 'recent' === t && (0, l.Mq)(n)
        ? (0, i.jsx)(r.sNh, {
              id: 'view-activity',
              label: u.intl.string(u.t.GDWYR0),
              action: () => {
                  null == c || c({ action: 'PRESS_VIEW_ACTIVITY_MENU_ITEM' }), null == d || d(), (0, a.__)(s._b.TEXT, o.Ie.NORMAL, { applicationId: n.extra.application_id });
              }
          })
        : null;
}
