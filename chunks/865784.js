n.d(t, {
    A: () => _,
    M: () => h,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(793574),
    o = n(865116),
    l = n(928658),
    c = n(447872),
    u = n(961350),
    d = n(287809),
    f = n(652215),
    p = n(985018);
function _(e) {
    let { user: t, guildId: n, color: o, onAction: d, location: _ = s.A.CONTEXT_MENU, appContext: h } = e,
        m = (0, c.So)(_),
        g = (0, i.bG)([u.default], () => u.default.getId() === t.id);
    return !m || g || t.isNonUserBot()
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "report-user",
              color: o,
              label: p.intl.string(p.t.A1MM3D),
              action: () => (0, l.NW)(t, n === f.ME ? void 0 : n, d, h),
          });
}
function h(e) {
    let { user: t, guildId: n, color: s, onAction: c, appContext: u } = e,
        p = (0, i.bG)([o.Ay], () => o.Ay.get("iar_testing")),
        _ = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return null != _ && (t.id === _.id || t.isNonUserBot() || !_.isStaff() || !p)
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "staff-test-report-user",
              color: s,
              label: "[STAFF] Test Profile Report",
              action: () => (0, l.RR)(t, n === f.ME ? void 0 : n, c, u),
          });
}
