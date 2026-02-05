"use strict";
n.d(t, { y: () => s });
var r = n(587895),
    i = n(625180),
    a = n(207371);
function s(e) {
    let { applicationId: t } = e,
        n = r.A.getApplication(t);
    return !!(null != n && (0, a.x)(n)) && (i.A.launchFrame({ applicationId: t }), !0);
}
