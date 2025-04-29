n.d(t, { p: () => c });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    s = n(432877),
    o = n(726521),
    a = n(594174);
function c(e) {
    let t = (0, r.e7)([s.ZP], () => s.ZP.get('iar_testing')),
        n = (0, r.e7)([a.default], () => a.default.getCurrentUser());
    return null != n && n.isStaff() && t
        ? (0, i.jsx)(l.sNh, {
              id: 'staff-test-guild-report',
              label: '[STAFF] Test Guild Report',
              action: () => (0, o.DG)(e, 'web_guild_context_menu'),
              icon: l.U65,
              color: 'danger'
          })
        : null;
}
