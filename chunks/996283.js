n.d(t, {
    VD: () => h,
    sU: () => p,
}),
    n(321073);
var r,
    i = n(311907),
    a = n(118356),
    s = n(73153),
    o = n(635731),
    l = n(41984),
    c = n(127242);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = new a.Vy("LegacyOverlayClient"),
    f = 1e3,
    p = 1e4,
    _ = 2e4,
    h = "Heartbeat",
    m = new o.A(f),
    g = null,
    E = null;

function b(e) {
    let { level: t, message: n, timestamp: r, context: i } = e;
    if (!c.A.hasRenderDebugMode(l.x7.LegacyOverlayLogging) || __OVERLAY__) return !1;
    if (
        (m.push({
            level: t,
            message: n,
            timestamp: r,
            context: i,
        }),
        n === h && (g = Date.now()),
        n !== h)
    )
        switch (t) {
            case "error":
            case "crash":
                d.error(n);
                break;
            case "warn":
                d.warn(n);
                break;
            case "info":
                d.info(n);
                break;
            default:
                d.log(n);
        }
    return !0;
}

function y() {
    null == E &&
        (E = setInterval(() => {
            if (null != g) {
                let e = Date.now() - g;
                e > _ &&
                    (d.warn("No heartbeat for ".concat(Math.round(e / 1e3), "s - overlay may be unresponsive")),
                    (g = null));
            }
        }, p));
}

function O() {
    null != E && (clearInterval(E), (E = null));
}

function A(e) {
    let { enabled: t, mode: n } = e;
    return n === l.x7.LegacyOverlayLogging && (t ? y() : O()), !1;
}

function v(e) {
    let { logs: t } = e;
    return t.forEach((e) => b(e)), !0;
}
class S extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.A), c.A.hasRenderDebugMode(l.x7.LegacyOverlayLogging) && y();
    }
    getAllLogs() {
        return m;
    }
    getLogsByLevel(e) {
        return m.filter((t) => t.level === e);
    }
    getErrorLogs() {
        return m.filter((e) => "error" === e.level || "crash" === e.level);
    }
}
u(S, "displayName", "OverlayRPCLogStore"),
    new S(s.h, {
        OVERLAY_RENDER_DEBUG_MODE: A,
        OVERLAY_ADD_LOGS_BATCH: v,
    });
