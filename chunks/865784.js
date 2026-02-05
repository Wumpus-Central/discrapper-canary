"use strict";
n.d(t, { A: () => p, M: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(793574),
    o = n(865116),
    l = n(928658),
    u = n(447872),
    c = n(961350),
    d = n(287809),
    _ = n(652215),
    f = n(985018);
function p(e) {
    let { user: t, guildId: n, color: o, onAction: d, location: p = s.A.CONTEXT_MENU, appContext: h } = e,
        m = (0, u.So)(p),
        g = (0, i.bG)([c.default], () => c.default.getId() === t.id);
    return !m || g || t.isNonUserBot()
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "report-user",
              color: o,
              label: f.intl.string(f.t.A1MM3D),
              action: () => (0, l.NW)(t, n === _.ME ? void 0 : n, d, h),
          });
}
function h(e) {
    let { user: t, guildId: n, color: s, onAction: u, appContext: c } = e,
        f = (0, i.bG)([o.Ay], () => o.Ay.get("iar_testing")),
        p = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return null != p && (t.id === p.id || t.isNonUserBot() || !p.isStaff() || !f)
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "staff-test-report-user",
              color: s,
              label: "[STAFF] Test Profile Report",
              action: () => (0, l.RR)(t, n === _.ME ? void 0 : n, u, c),
          });
}
