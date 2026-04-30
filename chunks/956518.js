n.d(t, { Ay: () => r, sF: () => s });
var i = n(147964),
    a = n(10716);
function r(e) {
    var t;
    let n;
    return s()
        ? a.A.getState().activityUrlOverride
        : i.A.inTestModeForEmbeddedApplication(e)
          ? i.A.testModeOriginURL
          : ((t = e), null == (n = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST) ? null : `https://${t}.${n}`);
}
function s() {
    let e = a.A.getState();
    return e.useActivityUrlOverride && null != e.activityUrlOverride && "" !== e.activityUrlOverride;
}
