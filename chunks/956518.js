"use strict";
n.d(t, { Ay: () => s, sF: () => a });
var r = n(147964),
    i = n(10716);
function s(e) {
    var t;
    let n;
    return a()
        ? i.A.getState().activityUrlOverride
        : r.A.inTestModeForEmbeddedApplication(e)
          ? r.A.testModeOriginURL
          : ((t = e), null == (n = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST) ? null : `https://${t}.${n}`);
}
function a() {
    let e = i.A.getState();
    return e.useActivityUrlOverride && null != e.activityUrlOverride && "" !== e.activityUrlOverride;
}
