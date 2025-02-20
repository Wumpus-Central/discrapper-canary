n.d(t, { Z: () => u });
var r = n(200651),
    i = n(481060),
    o = n(499254),
    a = n(827498),
    s = n(541716),
    l = n(26033),
    c = n(388032);
function u(e) {
    let { display: t, entry: n, onAction: u, onClose: d } = e;
    return 'recent' === t && (0, l.Mq)(n)
        ? (0, r.jsx)(i.sNh, {
              id: 'view-activity',
              label: c.NW.string(c.t.GDWYR0),
              action: () => {
                  null == u || u({ action: 'PRESS_VIEW_ACTIVITY_MENU_ITEM' }), null == d || d(), (0, o.__)(a._b.TEXT, s.Ie.NORMAL, { applicationId: n.extra.application_id });
              }
          })
        : null;
}
