"use strict";
n.d(t, { y: () => a });
var i = n(587895),
    r = n(113854),
    s = n(375802);
function a(e) {
    let { applicationId: t } = e,
        n = i.A.getApplication(t);
    return !!(null != n && (0, s.x)(n)) && (r.A.launchFrame({ applicationId: t }), !0);
}
