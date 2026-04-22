"use strict";
n.d(t, { u: () => p }), n(321073);
var r = n(118356),
    i = n(996308),
    s = n(92277),
    a = n(9302),
    o = n(996283),
    l = n(652215);
let u = new r.Vy("LegacyOverlayLogger"),
    d = null,
    c = !1,
    _ = null,
    f = {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
    },
    E = 0;
async function h(e, t) {
    if (!__OVERLAY__) return void u.warn("sendLegacyOverlayLog called from main app context, logging locally instead");
    if (E > 10) return;
    let { level: n, message: r, context: o } = e,
        d = null;
    if (null != o)
        try {
            d = (0, s.g)(o);
        } catch (e) {
            try {
                d = { _error: "Failed to serialize context", _type: Object.prototype.toString.call(o) };
            } catch (e) {
                d = { _error: "Context not serializable" };
            }
        }
    let c = {
        type: l.kGV.LOG_MESSAGES,
        token: t,
        pid: (0, a.getPID)(),
        payload: { level: n, message: r, timestamp: Date.now(), context: d },
    };
    try {
        await i.tN(c), (E = 0);
    } catch (e) {
        ++E <= 3 &&
            (u.error(`Failed to send log to main app (failure ${E}):`, e),
            3 === E && u.error("Too many RPC send failures, suppressing further error logs"));
    }
}
function p(e) {
    if (__OVERLAY__) {
        if (c) return void f.warn("Overlay logger already set up, skipping duplicate setup");
        (c = !0),
            (d = {
                log: (t, n) => h({ level: "log", message: t, context: n }, e),
                info: (t, n) => h({ level: "info", message: t, context: n }, e),
                warn: (t, n) => h({ level: "warn", message: t, context: n }, e),
                error: (t, n) => h({ level: "error", message: t, context: n }, e),
                crash: (t, n) => h({ level: "crash", message: t, context: n }, e),
            }).info("Overlay logger initialized"),
            (console.log = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((f.log(...t), null != d))
                    try {
                        let e = m(t)
                            .map((e) => g(e))
                            .join(" ");
                        d.log(e);
                    } catch (e) {
                        f.error("[Logger Error]", e);
                    }
            }),
            (console.info = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((f.info(...t), null != d))
                    try {
                        let e = m(t)
                            .map((e) => g(e))
                            .join(" ");
                        d.info(e);
                    } catch (e) {
                        f.error("[Logger Error]", e);
                    }
            }),
            (console.warn = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((f.warn(...t), null != d))
                    try {
                        let e = m(t)
                            .map((e) => g(e))
                            .join(" ");
                        d.warn(e);
                    } catch (e) {
                        f.error("[Logger Error]", e);
                    }
            }),
            (console.error = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((f.error(...t), null != d))
                    try {
                        let e = m(t)
                            .map((e) => g(e))
                            .join(" ");
                        d.error(e);
                    } catch (e) {}
            }),
            window.addEventListener(
                "error",
                (e) => {
                    if (null != d)
                        try {
                            if (null != e.target && e.target !== window) {
                                let t = e.target;
                                d.error(`Resource failed to load: ${t.src || t.href || "unknown"}`, {
                                    type: "resource_error",
                                    tagName: t.tagName,
                                    src: t.src,
                                    href: t.href,
                                });
                            } else
                                d.crash(`Uncaught error: ${e.message}`, {
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
                if (null != d)
                    try {
                        let t = "Unhandled promise rejection",
                            n = {};
                        e.reason instanceof Error
                            ? ((t = `Unhandled promise rejection: ${e.reason.message}`),
                              (n = { name: e.reason.name, message: e.reason.message, stack: e.reason.stack }))
                            : ("string" == typeof e.reason && (t = `Unhandled promise rejection: ${e.reason}`),
                              (n = { reason: e.reason })),
                            d.crash(t, n);
                    } catch (t) {
                        f.error("[Failed to log rejection]", t, e);
                    }
            }),
            window.addEventListener("securitypolicyviolation", (e) => {
                if (null != d)
                    try {
                        d.error("Security policy violation", {
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
                null != d && d.info("Overlay unloading"), null != _ && clearInterval(_);
            }),
            (_ = window.setInterval(() => {
                if (null != d)
                    try {
                        d.log(o.VD, {
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
function m(e) {
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
function g(e) {
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
