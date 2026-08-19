"use strict";
n.d(t, { y: () => l });
var i = n(587895),
    r = n(625180),
    a = n(207371),
    s = n(165610);
function l(e) {
    let { applicationId: t } = e,
        n = i.A.getApplication(t);
    return !!(null != n && (0, a.x)(n)) && (r.A.launchFrame({ applicationId: t, surface: s.sd }), !0);
}
