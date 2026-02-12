n.d(t, { e: () => r });
var i = n(311907),
    l = n(287809),
    s = n(616075),
    a = n(996568);
function r(e) {
    let t = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        n = s.w.useConfig({ location: e }),
        r = (0, a.l)(e);
    return {
        isEnabled: n.enabled || r.favoritesEnabled,
        hasStaffPrivileges: null != t && (t.hasAnyStaffLevel() || t.isStaffPersonal()),
    };
}
