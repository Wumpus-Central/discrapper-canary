"use strict";
n.d(t, { e: () => r });
var i = n(311907),
    s = n(287809),
    l = n(616075);
function r(e) {
    let t = (0, i.bG)([s.default], () => s.default.getCurrentUser());
    return {
        isEnabled: l.w.useConfig({ location: e }).enabled,
        hasStaffPrivileges: null != t && (t.hasAnyStaffLevel() || t.isStaffPersonal()),
    };
}
