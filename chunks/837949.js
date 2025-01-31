t.d(n, { Z: () => g });
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    r = t(430824),
    d = t(594174),
    s = t(724213),
    o = t(398758),
    u = t(981631),
    c = t(388032);
function g(e) {
    let n = (0, o.DM)(e),
        t = (0, l.e7)([r.Z], () => r.Z.getGuild(e)),
        g = (0, l.e7)([d.default], () => d.default.getCurrentUser());
    return null != g && null != t && (t.hasFeature(u.oNc.COMMUNITY) || g.isStaff())
        ? (0, i.jsx)(a.S89, {
              id: 'opt-in',
              label: c.intl.string(c.t.FB2ZZW),
              checked: !n,
              action: () => {
                  (0, s.kH)(e);
              }
          })
        : null;
}
