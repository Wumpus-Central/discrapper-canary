n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    o = n(430824),
    a = n(594174),
    c = n(724213),
    u = n(398758),
    s = n(981631),
    b = n(388032);
function p(e) {
    let t = (0, u.DM)(e),
        n = (0, i.e7)([o.Z], () => o.Z.getGuild(e)),
        p = (0, i.e7)([a.default], () => a.default.getCurrentUser());
    return null != p && null != n && (n.features.has(s.GuildFeatures.COMMUNITY) || p.isStaff())
        ? (0, r.jsx)(l.S89, {
              id: "opt-in",
              label: b.intl.string(b.t.FB2ZZV),
              checked: !t,
              action: () => {
                  (0, c.kH)(e);
              },
          })
        : null;
}
