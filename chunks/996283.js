"use strict";
n.d(t, { VD: () => f, sU: () => d }), n(321073);
var r = n(311907),
    i = n(118356),
    a = n(73153),
    s = n(635731),
    o = n(41984),
    l = n(127242);
let u = new i.Vy("LegacyOverlayClient"),
    c = 1e3,
    d = 1e4,
    _ = 2e4,
    f = "Heartbeat",
    p = new s.A(c),
    h = null,
    m = null;
function g(e) {
    let { level: t, message: n, timestamp: r, context: i } = e;
    if (!l.A.hasRenderDebugMode(o.x7.LegacyOverlayLogging) || __OVERLAY__) return !1;
    if ((p.push({ level: t, message: n, timestamp: r, context: i }), n === f && (h = Date.now()), n !== f))
        switch (t) {
            case "error":
            case "crash":
                u.error(n);
                break;
            case "warn":
                u.warn(n);
                break;
            case "info":
                u.info(n);
                break;
            default:
                u.log(n);
        }
    return !0;
}
function E() {
    null == m &&
        (m = setInterval(() => {
            if (null != h) {
                let e = Date.now() - h;
                e > _ && (u.warn(`No heartbeat for ${Math.round(e / 1e3)}s - overlay may be unresponsive`), (h = null));
            }
        }, d));
}
function A() {
    null != m && (clearInterval(m), (m = null));
}
function I(e) {
    let { enabled: t, mode: n } = e;
    return n === o.x7.LegacyOverlayLogging && (t ? E() : A()), !1;
}
function T(e) {
    let { logs: t } = e;
    return t.forEach((e) => g(e)), !0;
}
class y extends r.Ay.Store {
    static displayName = "OverlayRPCLogStore";
    initialize() {
        this.waitFor(l.A), l.A.hasRenderDebugMode(o.x7.LegacyOverlayLogging) && E();
    }
    getAllLogs() {
        return p;
    }
    getLogsByLevel(e) {
        return p.filter((t) => t.level === e);
    }
    getErrorLogs() {
        return p.filter((e) => "error" === e.level || "crash" === e.level);
    }
}
new y(a.h, { OVERLAY_RENDER_DEBUG_MODE: I, OVERLAY_ADD_LOGS_BATCH: T });
