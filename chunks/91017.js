(n.d(t, { k: () => I, s: () => h }), n(321073));
var i = n(91242),
    r = n(515718),
    a = n(998979),
    s = n(395771),
    l = n(84273);
let o = null,
    d = null,
    c = [],
    u = null;
function _(e) {
    let t = c;
    for (let n of ((c = []), t)) n(e);
}
async function E(e) {
    let t = o;
    if (null == t) return;
    let n = await (0, r.We)(new Blob([e.image], { type: e.mimeType }));
    o === t && _((d = { image: n, width: e.width, height: e.height, capturedAt: Date.now() }));
}
function A() {
    null == o ||
        (s.A.isCapturing() &&
            null != i.A.getFrame(o.frameId) &&
            "granted" === a.A.getDecision(o.applicationId, "screen_capture")) ||
        h();
}
function h() {
    null != o &&
        ((o = null),
        (d = null),
        null != u && clearTimeout(u),
        (u = null),
        i.A.removeChangeListener(A),
        a.A.removeChangeListener(A),
        s.A.removeChangeListener(A),
        (0, l.ik)(),
        _(null));
}
function f(e) {
    return null != e && Number.isFinite(e) ? Math.min(Math.max(Math.floor(e), 1), 1920) : 1280;
}
async function I(e) {
    if (!(0, l.y8)()) return { status: "unsupported" };
    if (!(0, l.aG)()) return { status: "no_game" };
    let t = f(e.maxWidth),
        n = f(e.maxHeight);
    if (null == o || o.frameId !== e.frameId || o.maxWidth !== t || o.maxHeight !== n) {
        let r = null != o;
        if (
            ((o = { frameId: e.frameId, applicationId: e.applicationId, maxWidth: t, maxHeight: n }),
            (d = null),
            _(null),
            !(0, l.it)({ appId: e.applicationId, appName: e.appName }, { width: t, height: n, intervalMs: 2e3 }, E))
        )
            return (h(), { status: "unsupported" });
        r || (i.A.addChangeListener(A), a.A.addChangeListener(A), s.A.addChangeListener(A));
    }
    (null != u && clearTimeout(u), (u = setTimeout(() => h(), 15e3)));
    let r =
        (null != d && Date.now() - d.capturedAt <= 2e3 ? d : null) ??
        (await new Promise((e) => {
            let t = setTimeout(() => {
                ((c = c.filter((e) => e !== n)), e(null));
            }, 5e3);
            function n(n) {
                (clearTimeout(t), e(n));
            }
            c.push(n);
        }));
    return null == r ? { status: "no_game" } : { status: "ok", image: r.image, width: r.width, height: r.height };
}
