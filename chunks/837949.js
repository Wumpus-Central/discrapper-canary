r.d(t, { Z: () => O });
var n = r(54381);
r(473749);
var i = r(442837),
    l = r(481060),
    o = r(430824),
    c = r(594174),
    a = r(724213),
    u = r(398758),
    s = r(981631),
    b = r(388032);
function O(e) {
    let t = (0, u.DM)(e),
        r = (0, i.e7)([o.Z], () => o.Z.getGuild(e)),
        O = (0, i.e7)([c.default], () => c.default.getCurrentUser());
    return null != O && null != r && (r.features.has(s.GuildFeatures.COMMUNITY) || O.isStaff())
        ? (0, n.jsx)(l.S89, {
              id: "opt-in",
              label: b.intl.string(b.t.FB2ZZV),
              checked: !t,
              action: () => {
                  (0, a.kH)(e);
              },
          })
        : null;
}
