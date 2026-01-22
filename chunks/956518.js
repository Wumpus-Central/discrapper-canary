n.d(t, {
    Ay: () => a,
    sF: () => o,
});
var r = n(147964),
    i = n(10716);

function a(e) {
    return o()
        ? i.A.getState().activityUrlOverride
        : r.A.inTestModeForEmbeddedApplication(e)
          ? r.A.testModeOriginURL
          : s(e);
}

function s(e) {
    let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
    return null == t ? null : "https://".concat(e, ".").concat(t);
}

function o() {
    let e = i.A.getState();
    return e.useActivityUrlOverride && null != e.activityUrlOverride && "" !== e.activityUrlOverride;
}
