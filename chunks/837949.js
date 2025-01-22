t.d(e, {
    Z: function () {
        return g;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    r = t(430824),
    o = t(594174),
    d = t(724213),
    u = t(398758),
    c = t(981631),
    s = t(388032);
function g(n) {
    let e = (0, u.DM)(n),
        t = (0, l.e7)([r.Z], () => r.Z.getGuild(n)),
        g = (0, l.e7)([o.default], () => o.default.getCurrentUser());
    return null != g && null != t && (t.hasFeature(c.oNc.COMMUNITY) || g.isStaff())
        ? (0, i.jsx)(a.MenuCheckboxItem, {
              id: 'opt-in',
              label: s.intl.string(s.t.FB2ZZW),
              checked: !e,
              action: () => {
                  (0, d.kH)(n);
              }
          })
        : null;
}
