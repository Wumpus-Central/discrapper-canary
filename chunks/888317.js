r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(481060),
    o = r(499254),
    s = r(827498),
    l = r(541716),
    u = r(26033),
    c = r(388032);
function d(e) {
    let { display: n, entry: r, onAction: d, onClose: f } = e;
    return 'live' !== n && (0, u.Mq)(r)
        ? (0, i.jsx)(a.MenuItem, {
              id: 'view-activity',
              label: c.intl.string(c.t.GDWYR0),
              action: () => {
                  null == d || d({ action: 'PRESS_VIEW_ACTIVITY_MENU_ITEM' }), null == f || f(), (0, o.__)(s._b.TEXT, l.Ie.NORMAL, { applicationId: r.extra.application_id });
              }
          })
        : null;
}
