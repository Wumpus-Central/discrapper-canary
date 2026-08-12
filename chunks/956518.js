"use strict";
n.d(t, { Ay: () => a, sF: () => s }), n(323874), n(14289), n(35956);
var i = n(147964),
    r = n(10716);
function a(e) {
    return s()
        ? r.A.getState().activityUrlOverride
        : i.A.inTestModeForEmbeddedApplication(e)
          ? i.A.testModeOriginURL
          : (function (e) {
                let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
                if (null == t) return null;
                if (t.startsWith("//")) {
                    let n = new URL(t, window.location.href);
                    return (n.hostname = `${e}.${n.hostname}`), n.origin;
                }
                return `https://${e}.${t}`;
            })(e);
}
function s() {
    let e = r.A.getState();
    return e.useActivityUrlOverride && null != e.activityUrlOverride && "" !== e.activityUrlOverride;
}
