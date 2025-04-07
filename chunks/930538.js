n.d(t, { p: () => c });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(432877),
    o = n(726521),
    a = n(594174);
function c(e) {
    let t = (0, r.e7)([l.ZP], () => l.ZP.get('iar_testing')),
        n = (0, r.e7)([a.default], () => a.default.getCurrentUser());
    return null != n && n.isStaff() && t
        ? (0, i.jsx)(s.sNh, {
              id: 'staff-test-guild-report',
              label: '[STAFF] Test Guild Report',
              action: () => (0, o.DG)(e, 'web_guild_context_menu'),
              icon: s.U65,
              color: 'danger'
          })
        : null;
}
