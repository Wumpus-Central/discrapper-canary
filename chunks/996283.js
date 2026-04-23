"use strict";
n.d(t, { VD: () => d, sU: () => c }), n(321073);
var r = n(311907),
    i = n(118356),
    s = n(73153),
    a = n(635731),
    o = n(41984),
    l = n(127242);
let u = new i.Vy("LegacyOverlayClient"),
    c = 1e4,
    d = "Heartbeat",
    _ = new a.A(1e3),
    f = null,
    p = null;
function h() {
    null == p &&
        (p = setInterval(() => {
            if (null != f) {
                let e = Date.now() - f;
                e > 2e4 &&
                    (u.warn(`No heartbeat for ${Math.round(e / 1e3)}s - overlay may be unresponsive`), (f = null));
            }
        }, c));
}
class E extends r.Ay.Store {
    static displayName = "OverlayRPCLogStore";
    initialize() {
        this.waitFor(l.A), l.A.hasRenderDebugMode(o.x7.LegacyOverlayLogging) && h();
    }
    getAllLogs() {
        return _;
    }
    getLogsByLevel(e) {
        return _.filter((t) => t.level === e);
    }
    getErrorLogs() {
        return _.filter((e) => "error" === e.level || "crash" === e.level);
    }
}
new E(s.h, {
    OVERLAY_RENDER_DEBUG_MODE: function (e) {
        let { enabled: t, mode: n } = e;
        return n === o.x7.LegacyOverlayLogging && (t ? h() : null != p && (clearInterval(p), (p = null))), !1;
    },
    OVERLAY_ADD_LOGS_BATCH: function (e) {
        let { logs: t } = e;
        return (
            t.forEach((e) =>
                (function (e) {
                    let { level: t, message: n, timestamp: r, context: i } = e;
                    if (!l.A.hasRenderDebugMode(o.x7.LegacyOverlayLogging) || __OVERLAY__) return !1;
                    if (
                        (_.push({ level: t, message: n, timestamp: r, context: i }),
                        n === d && (f = Date.now()),
                        n !== d)
                    )
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
                })(e),
            ),
            !0
        );
    },
});
