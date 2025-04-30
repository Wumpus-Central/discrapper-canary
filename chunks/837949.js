t.d(n, { Z: () => h });
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(430824),
    s = t(594174),
    u = t(724213),
    d = t(398758),
    o = t(981631),
    c = t(388032);
function h(e) {
    let n = (0, d.DM)(e),
        t = (0, l.e7)([a.Z], () => a.Z.getGuild(e)),
        h = (0, l.e7)([s.default], () => s.default.getCurrentUser());
    return null != h && null != t && (t.hasFeature(o.oNc.COMMUNITY) || h.isStaff())
        ? (0, i.jsx)(r.S89, {
              id: 'opt-in',
              label: c.intl.string(c.t.FB2ZZW),
              checked: !n,
              action: () => {
                  (0, u.kH)(e);
              }
          })
        : null;
}
