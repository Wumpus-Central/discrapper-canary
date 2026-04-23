"use strict";
n.d(t, { y: () => a });
var r = n(587895),
    i = n(625180),
    s = n(207371);
function a(e) {
    let { applicationId: t } = e,
        n = r.A.getApplication(t);
    return !!(null != n && (0, s.x)(n)) && (i.A.launchFrame({ applicationId: t }), !0);
}
