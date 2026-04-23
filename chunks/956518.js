n.d(t, { Ay: () => a, sF: () => s });
var i = n(147964),
    r = n(10716);
function a(e) {
    var t;
    let n;
    return s()
        ? r.A.getState().activityUrlOverride
        : i.A.inTestModeForEmbeddedApplication(e)
          ? i.A.testModeOriginURL
          : ((t = e), null == (n = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST) ? null : `https://${t}.${n}`);
}
function s() {
    let e = r.A.getState();
    return e.useActivityUrlOverride && null != e.activityUrlOverride && "" !== e.activityUrlOverride;
}
