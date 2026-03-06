"use strict";
n.d(t, { u: () => g }), n(321073);
var r = n(118356),
    i = n(996308),
    s = n(92277),
    a = n(9302),
    o = n(996283),
    l = n(652215);
let u = new r.Vy("LegacyOverlayLogger"),
    c = null,
    d = !1,
    _ = null,
    f = {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
    },
    p = 0,
    h = 3;
async function m(e, t) {
    if (!__OVERLAY__) return void u.warn("sendLegacyOverlayLog called from main app context, logging locally instead");
    if (p > 10) return;
    let { level: n, message: r, context: o } = e,
        c = null;
    if (null != o)
        try {
            c = (0, s.g)(o);
        } catch (e) {
            try {
                c = { _error: "Failed to serialize context", _type: Object.prototype.toString.call(o) };
            } catch (e) {
                c = { _error: "Context not serializable" };
            }
        }
    let d = {
        type: l.kGV.LOG_MESSAGES,
        token: t,
        pid: (0, a.getPID)(),
        payload: { level: n, message: r, timestamp: Date.now(), context: c },
    };
    try {
        await i.tN(d), (p = 0);
    } catch (e) {
        ++p <= h &&
            (u.error(`Failed to send log to main app (failure ${p}):`, e),
            p === h && u.error("Too many RPC send failures, suppressing further error logs"));
    }
}
function E(e) {
    return {
        log: (t, n) => m({ level: "log", message: t, context: n }, e),
        info: (t, n) => m({ level: "info", message: t, context: n }, e),
        warn: (t, n) => m({ level: "warn", message: t, context: n }, e),
        error: (t, n) => m({ level: "error", message: t, context: n }, e),
        crash: (t, n) => m({ level: "crash", message: t, context: n }, e),
    };
}
function g(e) {
    if (__OVERLAY__) {
        if (d) return void f.warn("Overlay logger already set up, skipping duplicate setup");
        (c = E(e)),
            (d = !0),
            c.info("Overlay logger initialized"),
            (console.log = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((f.log(...t), null != c))
                    try {
                        let e = A(t)
                            .map((e) => I(e))
                            .join(" ");
                        c.log(e);
                    } catch (e) {
                        f.error("[Logger Error]", e);
                    }
            }),
            (console.info = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((f.info(...t), null != c))
                    try {
                        let e = A(t)
                            .map((e) => I(e))
                            .join(" ");
                        c.info(e);
                    } catch (e) {
                        f.error("[Logger Error]", e);
                    }
            }),
            (console.warn = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((f.warn(...t), null != c))
                    try {
                        let e = A(t)
                            .map((e) => I(e))
                            .join(" ");
                        c.warn(e);
                    } catch (e) {
                        f.error("[Logger Error]", e);
                    }
            }),
            (console.error = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((f.error(...t), null != c))
                    try {
                        let e = A(t)
                            .map((e) => I(e))
                            .join(" ");
                        c.error(e);
                    } catch (e) {}
            }),
            window.addEventListener(
                "error",
                (e) => {
                    if (null != c)
                        try {
                            if (null != e.target && e.target !== window) {
                                let t = e.target;
                                c.error(`Resource failed to load: ${t.src || t.href || "unknown"}`, {
                                    type: "resource_error",
                                    tagName: t.tagName,
                                    src: t.src,
                                    href: t.href,
                                });
                            } else
                                c.crash(`Uncaught error: ${e.message}`, {
                                    message: e.message,
                                    filename: e.filename,
                                    lineno: e.lineno,
                                    colno: e.colno,
                                    error: e.error
                                        ? { name: e.error.name, message: e.error.message, stack: e.error.stack }
                                        : null,
                                });
                        } catch (t) {
                            f.error("[Failed to log error]", t, e);
                        }
                },
                !0,
            ),
            window.addEventListener("unhandledrejection", (e) => {
                if (null != c)
                    try {
                        let t = "Unhandled promise rejection",
                            n = {};
                        e.reason instanceof Error
                            ? ((t = `Unhandled promise rejection: ${e.reason.message}`),
                              (n = { name: e.reason.name, message: e.reason.message, stack: e.reason.stack }))
                            : ("string" == typeof e.reason && (t = `Unhandled promise rejection: ${e.reason}`),
                              (n = { reason: e.reason })),
                            c.crash(t, n);
                    } catch (t) {
                        f.error("[Failed to log rejection]", t, e);
                    }
            }),
            window.addEventListener("securitypolicyviolation", (e) => {
                if (null != c)
                    try {
                        c.error("Security policy violation", {
                            violatedDirective: e.violatedDirective,
                            effectiveDirective: e.effectiveDirective,
                            blockedURI: e.blockedURI,
                            sourceFile: e.sourceFile,
                            lineNumber: e.lineNumber,
                            columnNumber: e.columnNumber,
                        });
                    } catch (t) {
                        f.error("[Failed to log security violation]", t, e);
                    }
            }),
            window.addEventListener("beforeunload", () => {
                null != c && c.info("Overlay unloading"), null != _ && clearInterval(_);
            }),
            (_ = window.setInterval(() => {
                if (null != c)
                    try {
                        c.log(o.VD, {
                            timestamp: Date.now(),
                            memory: performance.memory
                                ? {
                                      usedJSHeapSize: performance.memory.usedJSHeapSize,
                                      totalJSHeapSize: performance.memory.totalJSHeapSize,
                                  }
                                : void 0,
                        });
                    } catch (e) {
                        f.error("[Heartbeat Error]", e);
                    }
            }, o.sU)),
            f.log("Overlay error handlers and console interception set up");
    }
}
function A(e) {
    if (0 === e.length) return e;
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if ("string" == typeof r && r.includes("%c")) {
            let e = r.replace(/%c/g, "");
            "" !== e.trim() && t.push(e), (n += (r.match(/%c/g) ?? []).length);
            continue;
        }
        ("string" == typeof r && /^\s*(font-weight|color|background|padding|margin|border)/.test(r)) || t.push(r);
    }
    return t;
}
function I(e) {
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
