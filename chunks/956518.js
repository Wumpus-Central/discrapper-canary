(n(323874), n(14289), n(35956));
var i = n(147964),
    r = n(998218),
    a = n(10716);
function s(e) {
    let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
    if (null == t) return null;
    if (t.startsWith("//")) {
        let n = new URL(t, `${window.location.protocol}//${window.location.host}`);
        return ((n.hostname = `${e}.${n.hostname}`), n.origin);
    }
    return `https://${e}.${t}`;
}
function l() {
    let e = a.A.getState();
    return e.useActivityUrlOverride && null != e.activityUrlOverride && "" !== e.activityUrlOverride;
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            return l()
                ? a.A.getState().activityUrlOverride
                : i.A.inTestModeForEmbeddedApplication(e)
                  ? i.A.testModeOriginURL
                  : s(e);
        },
        S: function (e) {
            let t = r.A.toURLSafe(e);
            if (null == t) return null;
            let [n] = t.hostname.split(".", 1),
                [i] = n.split("--", 1),
                a = s(i);
            return null != a && r.A.toURLSafe(a)?.origin === t.origin ? t.origin : null;
        },
        sF: l,
    },
);
