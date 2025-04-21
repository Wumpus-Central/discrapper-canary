r.d(t, { Z: () => p });
var n = r(200651);
r(192379);
var i = r(442837),
    l = r(481060),
    o = r(430824),
    c = r(594174),
    a = r(724213),
    u = r(398758),
    s = r(981631),
    b = r(388032);
function p(e) {
    let t = (0, u.DM)(e),
        r = (0, i.e7)([o.Z], () => o.Z.getGuild(e)),
        p = (0, i.e7)([c.default], () => c.default.getCurrentUser());
    return null != p && null != r && (r.hasFeature(s.oNc.COMMUNITY) || p.isStaff())
        ? (0, n.jsx)(l.S89, {
              id: 'opt-in',
              label: b.intl.string(b.t.FB2ZZW),
              checked: !t,
              action: () => {
                  (0, a.kH)(e);
              }
          })
        : null;
}
