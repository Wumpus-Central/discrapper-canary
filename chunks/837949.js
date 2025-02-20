r.d(t, { Z: () => O });
var n = r(200651);
r(192379);
var i = r(442837),
    o = r(481060),
    l = r(430824),
    c = r(594174),
    a = r(724213),
    u = r(398758),
    s = r(981631),
    b = r(388032);
function O(e) {
    let t = (0, u.DM)(e),
        r = (0, i.e7)([l.Z], () => l.Z.getGuild(e)),
        O = (0, i.e7)([c.default], () => c.default.getCurrentUser());
    return null != O && null != r && (r.hasFeature(s.oNc.COMMUNITY) || O.isStaff())
        ? (0, n.jsx)(o.S89, {
              id: 'opt-in',
              label: b.NW.string(b.t.FB2ZZW),
              checked: !t,
              action: () => {
                  (0, a.kH)(e);
              }
          })
        : null;
}
