n.d(t, { A: () => x, M: () => A });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(477782),
    a = n(793574),
    s = n(865116),
    o = n(928658),
    c = n(447872),
    u = n(961350),
    d = n(287809),
    m = n(652215),
    f = n(985018);
function x(e) {
    let { user: t, guildId: n, color: s, onAction: d, location: x = a.A.CONTEXT_MENU, appContext: A } = e,
        g = (0, c.So)(x),
        E = (0, i.bG)([u.default], () => u.default.getId() === t.id);
    return !g || E || t.isNonUserBot()
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "report-user",
              color: s,
              label: f.intl.string(f.t.A1MM3D),
              action: () => (0, o.NW)(t, n === m.ME ? void 0 : n, d, A),
          });
}
function A(e) {
    let { user: t, guildId: n, color: a, onAction: c, appContext: u } = e,
        f = (0, i.bG)([s.Ay], () => s.Ay.get("iar_testing")),
        x = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return null != x && (t.id === x.id || t.isNonUserBot() || !x.isStaff() || !f)
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "staff-test-report-user",
              color: a,
              label: "[STAFF] Test Profile Report",
              action: () => (0, o.RR)(t, n === m.ME ? void 0 : n, c, u),
          });
}
