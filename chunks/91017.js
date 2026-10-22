(n.d(t, { k: () => N, s: () => m }), n(321073));
var i = n(941426),
    r = n(91242),
    a = n(515718),
    s = n(998979),
    l = n(395771),
    o = n(84273);
let d = new i.Vy("ConjureFrameScreenCapture"),
    c = null,
    u = null,
    _ = !1,
    E = [],
    A = null;
function h(e) {
    let t = E;
    for (let n of ((E = []), t)) n(e);
}
async function f(e) {
    let t,
        n = c;
    if (null == n) return;
    try {
        t = await (0, a.We)(new Blob([e.image], { type: e.mimeType }));
    } catch (e) {
        c === n &&
            h({ status: "capture_failed", reason: `read failed: ${e instanceof Error ? e.message : String(e)}` });
        return;
    }
    if (c !== n) return;
    let i = Date.now();
    n.hasFrame ||
        ((n.hasFrame = !0),
        d.info(`first frame after ${i - n.startedAt}ms`, {
            applicationId: n.applicationId,
            width: e.width,
            height: e.height,
        }));
    let r = { image: t, width: e.width, height: e.height, capturedAt: i };
    (_ || (u = r), h(r));
}
function I(e) {
    var t;
    let n;
    if (null == r.A.getFrame(e.frameId)) return { status: "capture_failed", reason: "frame closed" };
    let i =
        ((t = e.applicationId),
        null == (n = s.A.getDecision(t, "screen_capture"))
            ? { status: "permission_required", reason: "not granted" }
            : "denied" === n
              ? { status: "permission_denied", reason: "denied" }
              : null);
    return null != i
        ? { ...i, reason: "permission revoked" }
        : l.A.isCapturing()
          ? null
          : { status: "capture_failed", reason: "snapshots stopped" };
}
function p() {
    let e = null != c ? I(c) : null;
    null != e && T(e);
}
function T(e) {
    null != c &&
        (d.info(`capture stopped: ${e.reason}`, { applicationId: c.applicationId }),
        (c = null),
        (u = null),
        null != A && clearTimeout(A),
        (A = null),
        r.A.removeChangeListener(p),
        s.A.removeChangeListener(p),
        l.A.removeChangeListener(p),
        (0, o.ik)(),
        h(e));
}
function m() {
    null != c && T(I(c) ?? { status: "capture_failed", reason: "stopped" });
}
function g(e) {
    return null != e && Number.isFinite(e) ? Math.min(Math.max(Math.floor(e), 1), 1920) : 1280;
}
function S(e, t) {
    let { status: n, reason: i } = t,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    return (
        ("timeout" === n || "capture_failed" === n ? d.warn : d.info)(`capture ${n}: ${i}`, {
            applicationId: e,
            waitedMs: r,
        }),
        { status: n }
    );
}
async function N(e) {
    let { applicationId: t } = e;
    if (!(0, o.y8)()) return S(t, { status: "unsupported", reason: "media engine" });
    if (!(0, o.aG)()) return S(t, { status: "no_game", reason: "no visible game" });
    if (!1 === e.gameFocused)
        return ((_ = !0), (u = null), S(t, { status: "game_not_focused", reason: "game window not focused" }));
    _ = !1;
    let n = g(e.maxWidth),
        i = g(e.maxHeight);
    if (null == c || c.frameId !== e.frameId || c.maxWidth !== n || c.maxHeight !== i) {
        let a = null != c;
        if (
            ((c = {
                frameId: e.frameId,
                applicationId: t,
                maxWidth: n,
                maxHeight: i,
                startedAt: Date.now(),
                hasFrame: !1,
            }),
            (u = null),
            h({ status: "busy", reason: "another request took over the capture" }),
            !(0, o.it)({ appId: t, appName: e.appName }, { width: n, height: i, intervalMs: 2e3 }, f))
        )
            return (
                T({ status: "unsupported", reason: "snapshots did not start" }),
                S(t, { status: "unsupported", reason: "snapshots did not start" })
            );
        a || (r.A.addChangeListener(p), s.A.addChangeListener(p), l.A.addChangeListener(p));
    }
    (null != A && clearTimeout(A), (A = setTimeout(() => T({ status: "capture_failed", reason: "idle" }), 3e4)));
    let a = Date.now(),
        d =
            null != u && a - u.capturedAt <= 4e3
                ? u
                : await new Promise((e) => {
                      let t = setTimeout(() => {
                          ((E = E.filter((e) => e !== n)),
                              e(
                                  (0, o.aG)()
                                      ? { status: "timeout", reason: "no frame within 5000ms" }
                                      : { status: "no_game", reason: "game left while waiting" },
                              ));
                      }, 5e3);
                      function n(n) {
                          (clearTimeout(t), e(n));
                      }
                      E.push(n);
                  });
    return "status" in d ? S(t, d, Date.now() - a) : { status: "ok", image: d.image, width: d.width, height: d.height };
}
