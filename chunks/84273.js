n.d(t, { Az: () => v, aG: () => f, ik: () => E, it: () => A, y8: () => g });
var i = n(73153),
    l = n(952818),
    a = n(360906),
    r = n(731854);
let s = !1,
    o = 0,
    u = null;
function d(e) {
    return null == e ? void 0 : Math.min(Math.max(Math.floor(e), 0), 7680);
}
function c() {
    let e = l.Ay.getVisibleGame();
    return e?.windowHandle == null
        ? null
        : { id: `window:${e.windowHandle}`, processId: e.pid, useVideoHook: !1, useGraphicsCapture: (0, a.hp)() };
}
function h(e) {
    i.h.dispatch({ type: "CONJURE_SNAPSHOT_CAPTURE_SET", app: e });
}
async function m() {
    let e = performance.now(),
        t = await v();
    s && e > o && t?.encodeFailed === !0 && E();
}
function p() {
    a.Ay.getMediaEngine().setSnapshotSource(c());
}
function f() {
    return null != c();
}
function g() {
    return a.Ay.getMediaEngine().supports(r.O5.CONJURE_SNAPSHOT);
}
function A(e, t, n) {
    for (let t of ["appId", "appName"]) {
        let n = e?.[t];
        if ("string" != typeof n || "" === n.trim())
            throw Error(`startConjureSnapshots: app.${t} must be a non-empty string`);
    }
    return (
        !!g() &&
        (a.Ay.getMediaEngine().startSnapshotCapture(
            (function (e) {
                let { width: t, height: n, intervalMs: i } = e;
                return { width: d(t), height: d(n), intervalMs: Math.max(Math.floor(i), 250) };
            })(t),
            n,
        ),
        s || ((s = !0), (o = performance.now()), l.Ay.addChangeListener(p), p(), (u = setInterval(m, 2e3))),
        h(e),
        !0)
    );
}
function v() {
    return a.Ay.getMediaEngine()
        .getSnapshotStats()
        .catch(() => null);
}
function E() {
    if (!s) return;
    ((s = !1), null != u && clearInterval(u), (u = null), l.Ay.removeChangeListener(p));
    let e = a.Ay.getMediaEngine();
    (e.setSnapshotSource(null), e.stopSnapshotCapture(), h(null));
}
