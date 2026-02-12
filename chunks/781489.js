n.d(t, { e: () => a });
var i = n(311907),
    l = n(287809),
    s = n(616075);
function a(e) {
    let t = (0, i.bG)([l.default], () => l.default.getCurrentUser());
    return {
        isEnabled: (0, s.l)(e).favoritesEnabled,
        hasStaffPrivileges: null != t && (t.hasAnyStaffLevel() || t.isStaffPersonal()),
    };
}
