n.d(t, {
    F0: () => m,
    bk: () => p,
}),
    n(539854);
var r,
    i = n(442837),
    a = n(579092),
    o = n(570140),
    s = n(188274),
    l = n(837268),
    c = n(338949);
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
let d = new a.Yd("LegacyOverlayClient"),
    f = 1000,
    p = 10000,
    _ = 20000,
    m = "Heartbeat",
    h = new s.Z(f),
    g = null,
    E = null;
function b(e) {
    let { level: t, message: n, timestamp: r, context: i } = e;
    if (!c.Z.hasRenderDebugMode(l.GO.LegacyOverlayLogging) || __OVERLAY__) return !1;
    if (
        (h.push({
            level: t,
            message: n,
            timestamp: r,
            context: i,
        }),
        n === m && (g = Date.now()),
        n !== m)
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
                    (d.warn("No heartbeat for ".concat(Math.round(e / 1000), "s - overlay may be unresponsive")),
                    (g = null));
            }
        }, p));
}
function O() {
    null != E && (clearInterval(E), (E = null));
}
function v(e) {
    let { enabled: t, mode: n } = e;
    return n === l.GO.LegacyOverlayLogging && (t ? y() : O()), !1;
}
function S(e) {
    let { logs: t } = e;
    return t.forEach((e) => b(e)), !0;
}
class I extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), c.Z.hasRenderDebugMode(l.GO.LegacyOverlayLogging) && y();
    }
    getAllLogs() {
        return h;
    }
    getLogsByLevel(e) {
        return h.filter((t) => t.level === e);
    }
    getErrorLogs() {
        return h.filter((e) => "error" === e.level || "crash" === e.level);
    }
}
u(I, "displayName", "OverlayRPCLogStore"),
    new I(o.Z, {
        OVERLAY_RENDER_DEBUG_MODE: v,
        OVERLAY_ADD_LOGS_BATCH: S,
    });
