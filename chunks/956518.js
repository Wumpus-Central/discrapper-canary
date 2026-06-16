"use strict";
n.d(t, { Ay: () => s, sF: () => a });
var i = n(147964),
    r = n(10716);
function s(e) {
    var t;
    let n;
    return a()
        ? r.A.getState().activityUrlOverride
        : i.A.inTestModeForEmbeddedApplication(e)
          ? i.A.testModeOriginURL
          : ((t = e), null == (n = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST) ? null : `https://${t}.${n}`);
}
function a() {
    let e = r.A.getState();
    return e.useActivityUrlOverride && null != e.activityUrlOverride && "" !== e.activityUrlOverride;
}
