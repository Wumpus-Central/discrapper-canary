n.d(t, { p: () => o });
var i = n(54381);
n(473749);
var r = n(442837),
    s = n(481060),
    l = n(432877),
    a = n(726521),
    c = n(594174);
function o(e) {
    let t = (0, r.e7)([l.ZP], () => l.ZP.get("iar_testing")),
        n = (0, r.e7)([c.default], () => c.default.getCurrentUser());
    return null != n && n.isStaff() && t
        ? (0, i.jsx)(s.sNh, {
              id: "staff-test-guild-report",
              label: "[STAFF] Test Guild Report",
              action: () => (0, a.DG)(e, "web_guild_context_menu"),
              icon: s.U65,
              color: "danger",
          })
        : null;
}
