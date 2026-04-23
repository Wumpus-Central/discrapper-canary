"use strict";
n.d(t, { u: () => y }), n(321073);
var i = n(118356),
    r = n(996308),
    s = n(92277),
    a = n(9302),
    o = n(17928),
    l = n(228366),
    d = n(635731),
    _ = n(41984),
    u = n(127242);
let c = new i.Vy("LegacyOverlayClient"),
    E = "Heartbeat",
    h = new d.A(1e3),
    m = null,
    f = null;
function g() {
    null == f &&
        (f = setInterval(() => {
            if (null != m) {
                let e = Date.now() - m;
                e > 2e4 &&
                    (c.warn(`No heartbeat for ${Math.round(e / 1e3)}s - overlay may be unresponsive`), (m = null));
            }
        }, 1e4));
}
class p extends o.Ay.Store {
    static displayName = "OverlayRPCLogStore";
    initialize() {
        this.waitFor(u.A), u.A.hasRenderDebugMode(_.x7.LegacyOverlayLogging) && g();
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
new p(l.h, {
    OVERLAY_RENDER_DEBUG_MODE: function (e) {
        let { enabled: t, mode: n } = e;
        return n === _.x7.LegacyOverlayLogging && (t ? g() : null != f && (clearInterval(f), (f = null))), !1;
    },
    OVERLAY_ADD_LOGS_BATCH: function (e) {
        let { logs: t } = e;
        return (
            t.forEach((e) =>
                (function (e) {
                    let { level: t, message: n, timestamp: i, context: r } = e;
                    if (!u.A.hasRenderDebugMode(_.x7.LegacyOverlayLogging) || __OVERLAY__) return !1;
                    if (
                        (h.push({ level: t, message: n, timestamp: i, context: r }),
                        n === E && (m = Date.now()),
                        n !== E)
                    )
                        switch (t) {
                            case "error":
                            case "crash":
                                c.error(n);
                                break;
                            case "warn":
                                c.warn(n);
                                break;
                            case "info":
                                c.info(n);
                                break;
                            default:
                                c.log(n);
                        }
                    return !0;
                })(e),
            ),
            !0
        );
    },
});
var A = n(652215);
let I = new i.Vy("LegacyOverlayLogger"),
    T = null,
    S = !1,
    N = null,
    C = {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
    },
    R = 0;
async function O(e, t) {
    if (!__OVERLAY__) return void I.warn("sendLegacyOverlayLog called from main app context, logging locally instead");
    if (R > 10) return;
    let { level: n, message: i, context: o } = e,
        l = null;
    if (null != o)
        try {
            l = (0, s.g)(o);
        } catch (e) {
            try {
                l = { _error: "Failed to serialize context", _type: Object.prototype.toString.call(o) };
            } catch (e) {
                l = { _error: "Context not serializable" };
            }
        }
    let d = {
        type: A.kGV.LOG_MESSAGES,
        token: t,
        pid: (0, a.getPID)(),
        payload: { level: n, message: i, timestamp: Date.now(), context: l },
    };
    try {
        await r.tN(d), (R = 0);
    } catch (e) {
        ++R <= 3 &&
            (I.error(`Failed to send log to main app (failure ${R}):`, e),
            3 === R && I.error("Too many RPC send failures, suppressing further error logs"));
    }
}
function y(e) {
    if (__OVERLAY__) {
        if (S) return void C.warn("Overlay logger already set up, skipping duplicate setup");
        (S = !0),
            (T = {
                log: (t, n) => O({ level: "log", message: t, context: n }, e),
                info: (t, n) => O({ level: "info", message: t, context: n }, e),
                warn: (t, n) => O({ level: "warn", message: t, context: n }, e),
                error: (t, n) => O({ level: "error", message: t, context: n }, e),
                crash: (t, n) => O({ level: "crash", message: t, context: n }, e),
            }).info("Overlay logger initialized"),
            (console.log = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((C.log(...t), null != T))
                    try {
                        let e = v(t)
                            .map((e) => D(e))
                            .join(" ");
                        T.log(e);
                    } catch (e) {
                        C.error("[Logger Error]", e);
                    }
            }),
            (console.info = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((C.info(...t), null != T))
                    try {
                        let e = v(t)
                            .map((e) => D(e))
                            .join(" ");
                        T.info(e);
                    } catch (e) {
                        C.error("[Logger Error]", e);
                    }
            }),
            (console.warn = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((C.warn(...t), null != T))
                    try {
                        let e = v(t)
                            .map((e) => D(e))
                            .join(" ");
                        T.warn(e);
                    } catch (e) {
                        C.error("[Logger Error]", e);
                    }
            }),
            (console.error = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((C.error(...t), null != T))
                    try {
                        let e = v(t)
                            .map((e) => D(e))
                            .join(" ");
                        T.error(e);
                    } catch (e) {}
            }),
            window.addEventListener(
                "error",
                (e) => {
                    if (null != T)
                        try {
                            if (null != e.target && e.target !== window) {
                                let t = e.target;
                                T.error(`Resource failed to load: ${t.src || t.href || "unknown"}`, {
                                    type: "resource_error",
                                    tagName: t.tagName,
                                    src: t.src,
                                    href: t.href,
                                });
                            } else
                                T.crash(`Uncaught error: ${e.message}`, {
                                    message: e.message,
                                    filename: e.filename,
                                    lineno: e.lineno,
                                    colno: e.colno,
                                    error: e.error
                                        ? { name: e.error.name, message: e.error.message, stack: e.error.stack }
                                        : null,
                                });
                        } catch (t) {
                            C.error("[Failed to log error]", t, e);
                        }
                },
                !0,
            ),
            window.addEventListener("unhandledrejection", (e) => {
                if (null != T)
                    try {
                        let t = "Unhandled promise rejection",
                            n = {};
                        e.reason instanceof Error
                            ? ((t = `Unhandled promise rejection: ${e.reason.message}`),
                              (n = { name: e.reason.name, message: e.reason.message, stack: e.reason.stack }))
                            : ("string" == typeof e.reason && (t = `Unhandled promise rejection: ${e.reason}`),
                              (n = { reason: e.reason })),
                            T.crash(t, n);
                    } catch (t) {
                        C.error("[Failed to log rejection]", t, e);
                    }
            }),
            window.addEventListener("securitypolicyviolation", (e) => {
                if (null != T)
                    try {
                        T.error("Security policy violation", {
                            violatedDirective: e.violatedDirective,
                            effectiveDirective: e.effectiveDirective,
                            blockedURI: e.blockedURI,
                            sourceFile: e.sourceFile,
                            lineNumber: e.lineNumber,
                            columnNumber: e.columnNumber,
                        });
                    } catch (t) {
                        C.error("[Failed to log security violation]", t, e);
                    }
            }),
            window.addEventListener("beforeunload", () => {
                null != T && T.info("Overlay unloading"), null != N && clearInterval(N);
            }),
            (N = window.setInterval(() => {
                if (null != T)
                    try {
                        T.log(E, {
                            timestamp: Date.now(),
                            memory: performance.memory
                                ? {
                                      usedJSHeapSize: performance.memory.usedJSHeapSize,
                                      totalJSHeapSize: performance.memory.totalJSHeapSize,
                                  }
                                : void 0,
                        });
                    } catch (e) {
                        C.error("[Heartbeat Error]", e);
                    }
            }, 1e4)),
            C.log("Overlay error handlers and console interception set up");
    }
}
function v(e) {
    if (0 === e.length) return e;
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        if ("string" == typeof i && i.includes("%c")) {
            let e = i.replace(/%c/g, "");
            "" !== e.trim() && t.push(e), (n += (i.match(/%c/g) ?? []).length);
            continue;
        }
        ("string" == typeof i && /^\s*(font-weight|color|background|padding|margin|border)/.test(i)) || t.push(i);
    }
    return t;
}
function D(e) {
    if (null === e) return "null";
    if (void 0 === e) return "undefined";
    if ("string" == typeof e) return e;
    if ("number" == typeof e || "boolean" == typeof e) return String(e);
    if ("function" == typeof e) return `[Function: ${e.name || "anonymous"}]`;
    if (e instanceof Error) return `${e.name}: ${e.message}`;
    try {
        let t = new WeakSet();
        return JSON.stringify(e, (e, n) => {
            if ("object" == typeof n && null !== n) {
                if (t.has(n)) return "[Circular]";
                t.add(n);
            }
            return "function" == typeof n
                ? `[Function: ${n.name || "anonymous"}]`
                : "symbol" == typeof n
                  ? `[Symbol: ${n.toString()}]`
                  : n;
        });
    } catch (t) {
        try {
            return `[${Object.prototype.toString.call(e)}]`;
        } catch (e) {
            return "[Unserializable]";
        }
    }
}
