"use strict";
n.d(t, { e: () => a });
var i = n(311907),
    s = n(287809),
    l = n(616075),
    r = n(996568);
function a(e) {
    let t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        n = l.w.useConfig({ location: e }),
        a = (0, r.l)(e);
    return {
        isEnabled: n.enabled || a.favoritesEnabled,
        hasStaffPrivileges: null != t && (t.hasAnyStaffLevel() || t.isStaffPersonal()),
    };
}
