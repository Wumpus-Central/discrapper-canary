n.r(e), n.d(e, { createSession: () => tV, default: () => tF });
let i = class t {
    constructor() {
        this.t = !1;
    }
    static get instance() {
        return t.i || (t.i = new t()), t.i;
    }
    get DEBUG() {
        return this.t;
    }
    set DEBUG(t) {
        this.t = t;
    }
    warn(t, e, ...n) {
        this.t && this.o("warn", t, e, ...n);
    }
    error(t, e, ...n) {
        this.t && this.o("error", t, e, ...n);
    }
    info(t, e, ...n) {
        this.t && this.o("info", t, e, ...n);
    }
    fatal(t, e, n, ...i) {
        this.o(t, e, n, ...i);
    }
    o(t, e, n, ...i) {
        let r = e ? `[${e}]` : "",
            o = console?.[t];
        o && o(`[IncodeTRI]${r} ${n}`, ...i);
    }
}.instance;
function r(t, e, n) {
    let i = t,
        r = e;
    if ("devicepixelratiochange" === e) {
        let t = window.devicePixelRatio;
        (i = window.matchMedia(`(resolution: ${t}dppx)`)), (r = "change");
    }
    i.addEventListener(r, n, { capture: !0, passive: !0 });
}
function o(t, e, n) {
    let i = t,
        r = e;
    if ("devicepixelratiochange" === e) {
        let t = window.devicePixelRatio;
        (i = window.matchMedia(`(resolution: ${t}dppx)`)), (r = "change");
    }
    i.removeEventListener(r, n, { capture: !0 });
}
let a = globalThis.setTimeout.bind(globalThis),
    s = globalThis.clearTimeout.bind(globalThis);
function l(t, e) {
    try {
        return t();
    } catch (t) {
        i.warn("utils", "safeSync swallowed error:", t);
    }
}
async function u(t) {
    try {
        return await t();
    } catch (t) {
        i.warn("utils", "safeAsync swallowed error:", t);
    }
}
function c(t) {
    return (e) => l(() => t(e));
}
function h(t) {
    return (...e) => {
        try {
            t(...e);
        } catch (t) {
            i.warn("utils", "safeTimer swallowed error:", t);
        }
    };
}
function d(t, e) {
    return a(h(t), e);
}
function p(t) {
    if (null !== t)
        try {
            s(t);
        } catch (t) {
            i.warn("utils", "safeClearTimeout swallowed error:", t);
        }
}
let f = new Set([
        "xmlhttprequest",
        "fetch",
        "beacon",
        "navigation",
        "script",
        "link",
        "css",
        "img",
        "iframe",
        "video",
        "audio",
    ]),
    m = new Set(["xmlhttprequest", "fetch", "beacon"]);
function w() {}
function y(t) {
    return !!t && t.nodeType === Node.TEXT_NODE;
}
function g(t, e) {
    return t.tagName?.toLowerCase() === e.toLowerCase();
}
function v(t) {
    return !!t && t.hasAttribute("data-tri-ignore");
}
function b(t) {
    return !!t && t.hasAttribute("data-tri-redact");
}
function k(t, e) {
    return e?.includes(t.toLowerCase()) ?? !1;
}
function T(t, e) {
    return !t || (t[e]?.enabled ?? !1);
}
function I() {
    let t = document.activeElement;
    if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) {
        let e = t.selectionStart,
            n = t.selectionEnd;
        return null == e || null == n || e === n ? null : t.value.substring(e, n);
    }
    let e = window.getSelection();
    return !e || e.isCollapsed ? null : e.toString() || null;
}
function S(t, e) {
    return "off" !== e && !v(t) && !b(t);
}
function E(t) {
    var e;
    let n = document.activeElement;
    if (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) return n;
    let i = window.getSelection();
    return (e = ("start" === t ? i?.anchorNode : i?.focusNode) ?? null)
        ? y(e)
            ? e.parentElement
            : e instanceof Element
              ? e
              : null
        : null;
}
function x() {
    var t;
    let e,
        n = window,
        i = "__fpjs_p_l_b",
        r = n[i];
    if (
        ((
            null == (e = null == (t = Object.getOwnPropertyDescriptor) ? void 0 : t.call(Object, n, i))
                ? void 0
                : e.configurable
        )
            ? delete n[i]
            : (e && !e.writable) || (n[i] = void 0),
        "function" != typeof (null == r ? void 0 : r.load))
    )
        throw Error(D);
    return r;
}
let A = "Blocked by CSP",
    M = "The endpoint parameter is not a valid URL";
function L(t) {
    var e;
    let n, i, r, o, a;
    return ((e = () =>
        new Promise((e, n) => {
            if (
                (function (t) {
                    if (URL.prototype)
                        try {
                            return new URL(t, location.href), !1;
                        } catch (t) {
                            if (t instanceof Error && "TypeError" === t.name) return !0;
                            throw t;
                        }
                })(t)
            )
                throw Error(M);
            let i = document.createElement("script"),
                r = () => {
                    var t;
                    return null == (t = i.parentNode) ? void 0 : t.removeChild(i);
                },
                o = document.head || document.getElementsByTagName("head")[0];
            (i.onload = () => {
                r(), e();
            }),
                (i.onerror = () => {
                    r(), n(Error(C));
                }),
                (i.async = !0),
                (i.src = t),
                o.appendChild(i);
        })),
    (i = document),
    (r = "securitypolicyviolation"),
    (o = (e) => {
        let i = new URL(t, location.href),
            { blockedURI: r } = e;
        (r !== i.href && r !== i.protocol.slice(0, -1) && r !== i.origin) || ((n = e), a());
    }),
    i.addEventListener(r, o),
    (a = () => i.removeEventListener(r, o)),
    Promise.resolve()
        .then(e)
        .then(
            (t) => (a(), t),
            (t) =>
                new Promise((t) => {
                    let e = new MessageChannel();
                    (e.port1.onmessage = () => t()), e.port2.postMessage(null);
                }).then(() => {
                    if ((a(), n)) throw Error(A);
                    throw t;
                }),
        )).then(x);
}
let C = "Failed to load the JS script of the agent",
    D = "9319";
function z(t) {
    function e() {
        return globalThis.window && globalThis.window[t] && void 0 !== globalThis.window[t];
    }
    return {
        get: function (n) {
            if (!e()) return null;
            try {
                let e = window[t].getItem(n) ?? "null";
                return "null" === e ? null : JSON.parse(e);
            } catch {
                return null;
            }
        },
        set: function (n, i) {
            e() && l(() => window[t].setItem(n, JSON.stringify(i)));
        },
        remove: function (n) {
            e() && l(() => window[t].removeItem(n));
        },
        key: function (n) {
            return e() ? window[t].key(n) : null;
        },
        get length() {
            return e() ? window[t].length : 0;
        },
    };
}
let P = z("localStorage"),
    _ = z("sessionStorage"),
    $ = "__tri_fingerprint",
    R = null,
    U = null;
async function O(t) {
    try {
        var e, n;
        let i,
            r = await (
                await (R ||
                    (R = (function (t) {
                        var e, n, i, r, o;
                        let a,
                            s,
                            l,
                            { picked: u, rest: c } = (function (t, e) {
                                let n = {},
                                    i = {};
                                for (let [r, o] of Object.entries(t)) e.includes(r) ? (n[r] = o) : (i[r] = o);
                                return { picked: n, rest: i };
                            })(t, ["scriptUrlPattern", "token", "apiKey"]),
                            h = null != (e = u.apiKey) ? e : u.token,
                            d =
                                null !==
                                    ((i = "scriptUrlPattern"),
                                    (n = Object.prototype.hasOwnProperty.call(t, i) ? t[i] : void 0)) && void 0 !== n
                                    ? n
                                    : "https://fpnpmcdn.net/v<version>/<apiKey>/loader_v<loaderVersion>.js",
                            [p, f] =
                                ((a = []),
                                (s = () => {
                                    a.push({ time: new Date(), state: document.visibilityState });
                                }),
                                (l =
                                    ((r = document).addEventListener("visibilitychange", s, o),
                                    () => r.removeEventListener("visibilitychange", s, o))),
                                s(),
                                [a, l]);
                        return Promise.resolve()
                            .then(() => {
                                if (!h || "string" != typeof h) throw Error("API key required");
                                return (function (t, e) {
                                    let n,
                                        i,
                                        r,
                                        o,
                                        a,
                                        s,
                                        l = [],
                                        [u, c] =
                                            ((i = [...t]),
                                            (o = {
                                                current: () => i[0],
                                                postpone() {
                                                    let t = i.shift();
                                                    void 0 !== t && i.push(t);
                                                },
                                                exclude() {
                                                    i.shift();
                                                },
                                            }),
                                            (r = 0),
                                            (a = () => Math.random() * Math.min(3e3, 100 * Math.pow(2, r++))),
                                            (s = new Set()),
                                            [
                                                o.current(),
                                                (t, e) => {
                                                    let n,
                                                        i = e instanceof Error ? e.message : "";
                                                    if (i === A || i === M) o.exclude(), (n = 0);
                                                    else if (i === D) o.exclude();
                                                    else if (i === C) {
                                                        let e = Date.now() - t.getTime() < 50,
                                                            i = o.current();
                                                        i && e && !s.has(i) && (s.add(i), (n = 0)), o.postpone();
                                                    } else o.postpone();
                                                    let r = o.current();
                                                    return void 0 === r
                                                        ? void 0
                                                        : [r, null != n ? n : t.getTime() + a() - Date.now()];
                                                },
                                            ]);
                                    if (void 0 === u)
                                        return Promise.reject(TypeError("The list of script URL patterns is empty"));
                                    let h = (t) => {
                                        let i = new Date(),
                                            r = (e) =>
                                                l.push({ url: t, startedAt: i, finishedAt: new Date(), error: e }),
                                            o = e(t);
                                        return (
                                            o.then(() => r(), r),
                                            o.catch((t) => {
                                                if (((n ??= t), l.length >= 5)) throw n;
                                                let e = c(i, t);
                                                if (!e) throw n;
                                                let [r, o] = e;
                                                return new Promise((t) => setTimeout(t, o)).then(() => h(r));
                                            })
                                        );
                                    };
                                    return h(u).then((t) => [t, l]);
                                })(
                                    (Array.isArray(d) ? d : [d]).map((t) => {
                                        var e;
                                        let n;
                                        return (
                                            (e = String(t)),
                                            (n = encodeURIComponent),
                                            e.replace(/<[^<>]+>/g, (t) =>
                                                "<version>" === t
                                                    ? "3"
                                                    : "<apiKey>" === t
                                                      ? n(h)
                                                      : "<loaderVersion>" === t
                                                        ? n("3.12.9")
                                                        : t,
                                            )
                                        );
                                    }),
                                    L,
                                );
                            })
                            .catch((t) => {
                                throw (f(), t instanceof Error && t.message === D ? Error(C) : t);
                            })
                            .then(([t, e]) => (f(), t.load({ ...c, ldi: { attempts: e, visibilityStates: p } })));
                    })({
                        apiKey: t.apiKey,
                        region: t.region,
                        endpoint: t.endpoint,
                        scriptUrlPattern: t.scriptUrlPattern,
                    }).catch((t) => {
                        throw ((R = null), t);
                    })))
            ).get({ timeout: t.timeoutMs, extendedResult: !0 });
        if (!r.visitorId) return null;
        let o = t.cacheTtlMs ?? 2592e6;
        return (
            o > 0 &&
                ((e = r.visitorId),
                (n = r.requestId),
                (i = { visitorId: e, requestId: n, expiresAt: Date.now() + o }),
                P.set($, i)),
            { visitorId: r.visitorId, requestId: r.requestId }
        );
    } catch {
        return null;
    }
}
let N = {
        apiKey: "5uYRiI0XM6p8k4124ELX",
        endpoint: "https://fingerprint.incodesmile.com",
        scriptUrlPattern: "https://fingerprint.incodesmile.com/web/v<version>/<apiKey>/loader_v<loaderVersion>.js",
    },
    q = { focusin: "in", focusout: "out" };
function B(t) {
    return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement;
}
let H = new Set([
        "Shift",
        "Control",
        "Alt",
        "Meta",
        "Backspace",
        "Delete",
        "Enter",
        "Tab",
        "CapsLock",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
    ]),
    X = { mouse: "mouse", touch: "touch", pen: "pen" },
    j = { pointerdown: "down", pointerup: "up", click: "click", dblclick: "dblclick", contextmenu: "contextmenu" };
function Y(t, e, n, i, r) {
    return {
        name: "navigation",
        timestamp: Date.now(),
        phase: t,
        type: e,
        from: n.from,
        to: n.to,
        timeOrigin: i,
        timing: r,
    };
}
let K = {
        fingerprint: {
            create: function (t) {
                let e = !1;
                return (
                    u(async () => {
                        let n = await (async function (t) {
                            let e,
                                n = (e = P.get($))
                                    ? "string" != typeof e.visitorId ||
                                      "number" != typeof e.expiresAt ||
                                      e.expiresAt <= Date.now()
                                        ? (P.remove($), null)
                                        : {
                                              visitorId: e.visitorId,
                                              requestId: "string" == typeof e.requestId ? e.requestId : "",
                                          }
                                    : null;
                            return n
                                ? { visitorId: n.visitorId, requestId: n.requestId || null }
                                : U ||
                                      (U = O(t).finally(() => {
                                          U = null;
                                      }));
                        })(N);
                        !e &&
                            n &&
                            t.push({
                                name: "fingerprint",
                                deviceId: n.visitorId,
                                requestId: n.requestId,
                                timestamp: Date.now(),
                            });
                    }),
                    () => {
                        e = !0;
                    }
                );
            },
            layer: "device-fingerprinting",
        },
        pointer: {
            create: function (t, e, n) {
                let i = c((e) => {
                    let n,
                        i =
                            ((n = (function (t) {
                                if ("mouse" === t.pointerType) return { button: t.button, buttons: t.buttons };
                                let e = { force: t.pressure, contact: Math.min(t.width, t.height) };
                                return (
                                    "pen" === t.pointerType &&
                                        ((e.tiltX = t.tiltX), (e.tiltY = t.tiltY), (e.twist = t.twist)),
                                    e
                                );
                            })(e)),
                            {
                                id: e.pointerId,
                                name: "pointer",
                                timestamp: Date.now(),
                                type: X[e.pointerType] ?? "unknown",
                                phase: j[e.type],
                                isTrusted: e.isTrusted,
                                element: t.resolveElement(e.target),
                                isPrimary: e.isPrimary,
                                modifiers: { shift: e.shiftKey, ctrl: e.ctrlKey, alt: e.altKey, meta: e.metaKey },
                                coordinates: { x: e.clientX, y: e.clientY },
                                ...n,
                            });
                    t.push(i);
                });
                return (
                    T(n, "pointer") && (r(document, "pointerdown", i), r(document, "pointerup", i)),
                    T(n, "click") && r(document, "click", i),
                    T(n, "dblclick") && r(document, "dblclick", i),
                    T(n, "contextmenu") && r(document, "contextmenu", i),
                    () => {
                        o(document, "pointerdown", i),
                            o(document, "pointerup", i),
                            o(document, "click", i),
                            o(document, "dblclick", i),
                            o(document, "contextmenu", i);
                    }
                );
            },
            layer: "behavioral",
            events: ["pointer", "click", "dblclick", "contextmenu"],
        },
        pointermove: {
            create: function (t) {
                let e = null,
                    n = null,
                    i = c((i) => {
                        e && e.id !== i.pointerId && (t.push(e), (e = null)),
                            e
                                ? e.samples.ts.length >= 50
                                    ? (t.push(e), (e = a(i)))
                                    : (e.samples.x.push(i.clientX),
                                      e.samples.y.push(i.clientY),
                                      e.samples.ts.push(i.timeStamp),
                                      "pen" === i.pointerType &&
                                          (e.samples.tiltX?.push(i.tiltX), e.samples.tiltY?.push(i.tiltY)),
                                      "mouse" !== i.pointerType &&
                                          (e.samples.force?.push(i.pressure),
                                          e.samples.radius?.push(Math.max(i.width, i.height))))
                                : (e = a(i)),
                            (function (t) {
                                n && clearTimeout(n),
                                    (n = setTimeout(() => {
                                        e && (t.push(e), (e = null)), (n = null);
                                    }, 2e3));
                            })(t);
                    });
                function a(t) {
                    let e = (function (t) {
                        if ("mouse" === t.pointerType) return null;
                        let e = { force: [t.pressure], radius: [Math.max(t.width, t.height)] };
                        return "pen" === t.pointerType && ((e.tiltX = [t.tiltX]), (e.tiltY = [t.tiltY])), e;
                    })(t);
                    return {
                        name: "pointer",
                        timestamp: Date.now(),
                        id: t.pointerId,
                        type: t.pointerType,
                        phase: "move",
                        isTrusted: t.isTrusted,
                        isPrimary: t.isPrimary,
                        samples: { x: [t.clientX], y: [t.clientY], ts: [t.timeStamp], ...(e ?? {}) },
                    };
                }
                return (
                    r(document, "pointermove", i),
                    () => {
                        o(document, "pointermove", i), n && (clearTimeout(n), (n = null)), e && (t.push(e), (e = null));
                    }
                );
            },
            layer: "behavioral",
        },
        focus: {
            create: function (t) {
                let e = c((e) => {
                    let n = {
                        name: "focus",
                        type: q[e.type] ?? "unknown",
                        timestamp: Date.now(),
                        isTrusted: e.isTrusted,
                        element: t.resolveElement(e.target),
                        relatedTarget: t.resolveElement(e.relatedTarget),
                    };
                    t.push(n);
                });
                return (
                    r(document, "focusin", e),
                    r(document, "focusout", e),
                    () => {
                        o(document, "focusin", e), o(document, "focusout", e);
                    }
                );
            },
            layer: "behavioral",
        },
        input: {
            create: function (t) {
                let e = c((e) => {
                    var n;
                    let i, r;
                    t.push({
                        name: "keystroke",
                        type: "input",
                        timestamp: Date.now(),
                        isTrusted: e.isTrusted,
                        element: t.resolveElement(e.target),
                        inputType: e.inputType ?? "",
                        isComposing: e.isComposing ?? !1,
                        length:
                            (n = e.target) instanceof HTMLInputElement ||
                            n instanceof HTMLTextAreaElement ||
                            n instanceof HTMLSelectElement
                                ? n.value.length
                                : 0,
                    }),
                        (function (t) {
                            if ("insertReplacementText" === t.inputType) return !0;
                            let e = t.target;
                            return (
                                !!B(e) &&
                                (function (t) {
                                    try {
                                        return t.matches(":-webkit-autofill");
                                    } catch {
                                        return !1;
                                    }
                                })(e)
                            );
                        })(e) &&
                            t.push(
                                ((i = e.target),
                                (r = 0),
                                B(i) && (r = i.value.length),
                                { name: "autofill", timestamp: Date.now(), element: t.resolveElement(i), length: r }),
                            );
                });
                return (
                    r(document, "input", e),
                    function () {
                        o(document, "input", e);
                    }
                );
            },
            layer: "behavioral",
        },
        keystroke: {
            create: function (t) {
                let e,
                    n,
                    { resolve: i, reset: a } =
                        ((e = 0),
                        (n = new Map()),
                        {
                            resolve: function (t, i) {
                                if ("keydown" === i) {
                                    let i = n.get(t);
                                    if (void 0 !== i) return i;
                                    let r = ++e;
                                    if (n.size >= 32) {
                                        let t = n.keys().next().value;
                                        void 0 !== t && n.delete(t);
                                    }
                                    return n.set(t, r), r;
                                }
                                let r = n.get(t);
                                return void 0 !== r ? (n.delete(t), r) : ++e;
                            },
                            reset: function () {
                                n.clear();
                            },
                        }),
                    s = c((e) => {
                        let n,
                            r = {
                                name: "keystroke",
                                type: (n = e.type),
                                id: i(e.code, n),
                                timestamp: Date.now(),
                                isTrusted: e.isTrusted,
                                keys: H.has(e.key) ? [e.key] : [],
                            };
                        t.push(r);
                    }),
                    l = c(() => {
                        a();
                    });
                return (
                    r(document, "keydown", s),
                    r(document, "keyup", s),
                    r(window, "blur", l),
                    () => {
                        o(document, "keydown", s), o(document, "keyup", s), o(window, "blur", l);
                    }
                );
            },
            layer: "behavioral",
        },
        clipboard: {
            create: function (t, e = "on", n) {
                let i = c((n) => {
                    let i,
                        r,
                        o,
                        a =
                            ((i = n.type),
                            (r = ("paste" === n.type ? n.clipboardData?.getData("text/plain") : I()) ?? null),
                            (o = S(n.target, e)),
                            {
                                name: "clipboard",
                                type: i,
                                timestamp: Date.now(),
                                isTrusted: n.isTrusted,
                                element: t.resolveElement(n.target),
                                length: r?.length ?? 0,
                                ...(o && r ? { content: r } : {}),
                            });
                    t.push(a);
                });
                return (
                    T(n, "paste") && r(document, "paste", i),
                    T(n, "cut") && r(document, "cut", i),
                    T(n, "copy") && r(document, "copy", i),
                    () => {
                        o(document, "paste", i), o(document, "cut", i), o(document, "copy", i);
                    }
                );
            },
            layer: "behavioral",
            events: ["paste", "cut", "copy"],
        },
        form: {
            create: function (t, e, n) {
                let i = c((e) => {
                    let n = {
                        name: "form",
                        type: e.type,
                        timestamp: Date.now(),
                        isTrusted: e.isTrusted,
                        element: t.resolveElement(e.target),
                    };
                    t.push(n);
                });
                return (
                    T(n, "submit") && r(document, "submit", i),
                    T(n, "invalid") && r(document, "invalid", i),
                    () => {
                        o(document, "submit", i), o(document, "invalid", i);
                    }
                );
            },
            layer: "behavioral",
            events: ["submit", "invalid"],
        },
        change: {
            create: function (t) {
                let e = c((e) => {
                    let n = {
                        name: "change",
                        timestamp: Date.now(),
                        isTrusted: e.isTrusted,
                        element: t.resolveElement(e.target),
                    };
                    t.push(n);
                });
                return (
                    r(document, "change", e),
                    () => {
                        o(document, "change", e);
                    }
                );
            },
            layer: "behavioral",
        },
        selection: {
            create: function (t, e) {
                let n = !1,
                    i = 0,
                    a = null,
                    s = !1,
                    l = !1;
                function u() {
                    a && (clearTimeout(a), (a = null));
                }
                function h() {
                    u(),
                        s ||
                            l ||
                            (a = setTimeout(() => {
                                (a = null), n && d("timeout");
                            }, 250));
                }
                function d(i) {
                    let r, o, a;
                    n &&
                        ((n = !1),
                        u(),
                        (o = (r = E("end")) && S(r, e)),
                        (a = I()),
                        t.push({
                            name: "selection",
                            phase: "end",
                            timestamp: Date.now(),
                            trigger: i,
                            isTrusted: !0,
                            element: t.resolveElement(r),
                            length: a?.length ?? 0,
                            ...(o && a ? { content: a } : {}),
                        }));
                }
                let p = c(() => {
                        let e,
                            r = !(e = document.getSelection()) || e.isCollapsed || 0 === e.rangeCount;
                        n || r
                            ? n && r
                                ? d("collapse")
                                : n && h()
                            : ((n = !0),
                              (i = Date.now()),
                              t.push({
                                  name: "selection",
                                  phase: "start",
                                  timestamp: i,
                                  element: t.resolveElement(E("start")),
                              }),
                              h());
                    }),
                    f = c((t) => {
                        0 === t.button && ((s = !0), u());
                    }),
                    m = c((t) => {
                        0 === t.button && ((s = !1), n && d("pointer"));
                    }),
                    w = c((t) => {
                        "Shift" === t.key && ((l = !0), u());
                    }),
                    y = c((t) => {
                        "Shift" === t.key && ((l = !1), n && d("keyboard"));
                    }),
                    g = c(() => {
                        s = !1;
                    }),
                    v = c(() => {
                        "hidden" === document.visibilityState && ((s = !1), (l = !1), n && d("timeout"));
                    }),
                    b = c(() => {
                        (s = !1), n && d("pointer");
                    });
                return (
                    r(document, "selectionchange", p),
                    r(document, "pointerdown", f),
                    r(document, "pointerup", m),
                    r(document, "keydown", w),
                    r(document, "keyup", y),
                    r(document, "contextmenu", g),
                    r(document, "visibilitychange", v),
                    r(document, "dragend", b),
                    () => {
                        u(),
                            o(document, "selectionchange", p),
                            o(document, "pointerdown", f),
                            o(document, "pointerup", m),
                            o(document, "keydown", w),
                            o(document, "keyup", y),
                            o(document, "contextmenu", g),
                            o(document, "visibilitychange", v),
                            o(document, "dragend", b);
                    }
                );
            },
            layer: "behavioral",
        },
        tab: { create: () => () => {}, layer: "session", events: ["state", "count"] },
        visibility: {
            create: function (t) {
                let e = c((e) => {
                    let n = document.visibilityState;
                    if ("visible" !== n && "hidden" !== n) return;
                    let i = { name: "visibility", type: n, timestamp: Date.now(), isTrusted: e.isTrusted };
                    t.push(i);
                });
                return (
                    r(document, "visibilitychange", e),
                    () => {
                        o(document, "visibilitychange", e);
                    }
                );
            },
            layer: "session",
        },
        navigation: {
            create: function (t) {
                let e = t.sanitizeUrl(document.referrer || "");
                function n(n) {
                    t.push(n), (e = n.to ?? "");
                }
                let i = c(() => {
                        let [e] = performance.getEntriesByType("navigation");
                        n(
                            Y(
                                "load",
                                e?.type ?? "navigate",
                                {
                                    from: document.referrer ? t.sanitizeUrl(document.referrer) : null,
                                    to: t.sanitizeUrl(location.href),
                                },
                                performance.timeOrigin,
                                e
                                    ? {
                                          fetchStart: e.fetchStart,
                                          domainLookupStart: e.domainLookupStart,
                                          domainLookupEnd: e.domainLookupEnd,
                                          connectStart: e.connectStart,
                                          connectEnd: e.connectEnd,
                                          requestStart: e.requestStart,
                                          responseStart: e.responseStart,
                                          responseEnd: e.responseEnd,
                                          domInteractive: e.domInteractive,
                                          domContentLoadedEventStart: e.domContentLoadedEventStart,
                                          domContentLoadedEventEnd: e.domContentLoadedEventEnd,
                                          domComplete: e.domComplete,
                                          loadEventStart: e.loadEventStart,
                                          loadEventEnd: e.loadEventEnd,
                                          redirectCount: e.redirectCount,
                                          transferSize: e.transferSize,
                                          encodedBodySize: e.encodedBodySize,
                                          decodedBodySize: e.decodedBodySize,
                                      }
                                    : void 0,
                            ),
                        );
                    }),
                    a = c((i) => {
                        if (null === i.navigationType) return;
                        let r = t.sanitizeUrl(location.href);
                        r !== e && n(Y("change", i.navigationType, { from: e, to: r }, performance.timeOrigin));
                    }),
                    s = c(() => h("traverse")),
                    u = c(() => h("hashchange"));
                function h(i) {
                    let r = t.sanitizeUrl(location.href);
                    ("hashchange" === i && r === e) || n(Y("change", i, { from: e, to: r }, performance.timeOrigin));
                }
                let d = history.pushState,
                    p = history.replaceState,
                    f = function (...t) {
                        let e = d.apply(this, t);
                        return l(() => h("push")), e;
                    },
                    m = function (...t) {
                        let e = p.apply(this, t);
                        return l(() => h("replace")), e;
                    };
                return (
                    window.navigation
                        ? r(window.navigation, "currententrychange", a)
                        : ((history.pushState = f),
                          (history.replaceState = m),
                          r(window, "popstate", s),
                          r(window, "hashchange", u)),
                    "complete" === document.readyState ? i(new Event("load")) : r(window, "load", i),
                    () => {
                        window.navigation
                            ? o(window.navigation, "currententrychange", a)
                            : (history.pushState === f && (history.pushState = d),
                              history.replaceState === m && (history.replaceState = p),
                              o(window, "popstate", s),
                              o(window, "hashchange", u)),
                            o(window, "load", i);
                    }
                );
            },
            layer: "session",
        },
        networkconnection: {
            create: function (t) {
                let e = c(() => {
                    let e = {
                        name: "network",
                        type: "connection",
                        state: navigator.onLine ? "online" : "offline",
                        timestamp: Date.now(),
                    };
                    t.push(e);
                });
                return (
                    r(window, "online", e),
                    r(window, "offline", e),
                    () => {
                        o(window, "online", e), o(window, "offline", e);
                    }
                );
            },
            layer: "session",
        },
        scroll: {
            create: function (t) {
                let e = null,
                    n = null,
                    i = c(
                        (i) => (
                            e
                                ? e.samples.ts.length >= 50
                                    ? (t.push(e), (e = a(i)))
                                    : (e.samples.x.push(window.scrollX),
                                      e.samples.y.push(window.scrollY),
                                      e.samples.ts.push(i.timeStamp))
                                : (e = a(i)),
                            void (function (t) {
                                n && clearTimeout(n),
                                    (n = setTimeout(() => {
                                        e && (t.push(e), (e = null)), (n = null);
                                    }, 2e3));
                            })(t)
                        ),
                    );
                function a(t) {
                    return {
                        name: "scroll",
                        timestamp: Date.now(),
                        samples: { x: [window.scrollX], y: [window.scrollY], ts: [t.timeStamp] },
                        height: window.innerHeight,
                        width: window.innerWidth,
                        scrollX: window.scrollX,
                        scrollY: window.scrollY,
                        pageX: window.pageXOffset,
                        pageY: window.pageYOffset,
                    };
                }
                return (
                    r(window, "scroll", i),
                    () => {
                        o(window, "scroll", i), n && (clearTimeout(n), (n = null)), e && (t.push(e), (e = null));
                    }
                );
            },
            layer: "behavioral",
        },
        viewportresize: {
            create: function (t) {
                let e = null,
                    n = null,
                    i = c(
                        (i) => (
                            e
                                ? e.samples.ts.length >= 50
                                    ? (t.push(e), (e = a(i)))
                                    : (e.samples.height.push(window.innerHeight),
                                      e.samples.width.push(window.innerWidth),
                                      e.samples.ts.push(i.timeStamp),
                                      e.samples.scrollX.push(window.scrollX),
                                      e.samples.scrollY.push(window.scrollY),
                                      e.samples.dpr.push(window.devicePixelRatio))
                                : (e = a(i)),
                            void (function (t) {
                                n && clearTimeout(n),
                                    (n = setTimeout(() => {
                                        e && (t.push(e), (e = null)), (n = null);
                                    }, 2e3));
                            })(t)
                        ),
                    );
                function a(t) {
                    return {
                        name: "viewport",
                        type: "resize",
                        timestamp: Date.now(),
                        samples: {
                            height: [window.innerHeight],
                            width: [window.innerWidth],
                            ts: [t.timeStamp],
                            scrollX: [window.scrollX],
                            scrollY: [window.scrollY],
                            dpr: [window.devicePixelRatio],
                        },
                    };
                }
                return (
                    r(window, "resize", i),
                    () => {
                        o(window, "resize", i), n && (clearTimeout(n), (n = null)), e && (t.push(e), (e = null));
                    }
                );
            },
            layer: "behavioral",
        },
        viewport: {
            create: function (t, e, n) {
                let i = c((e) => {
                        let n = s(e, "orientation");
                        t.push(n);
                    }),
                    a = c((e) => {
                        let n = s(e, "ratiochange");
                        t.push(n);
                    });
                function s(t, e) {
                    return {
                        name: "viewport",
                        type: e,
                        timestamp: Date.now(),
                        isTrusted: t.isTrusted,
                        height: window.innerHeight,
                        width: window.innerWidth,
                        scrollX: window.scrollX,
                        scrollY: window.scrollY,
                        dpr: window.devicePixelRatio,
                    };
                }
                return (
                    T(n, "orientationchange") && r(window, "orientationchange", i),
                    T(n, "devicepixelratiochange") && r(window, "devicepixelratiochange", a),
                    () => {
                        o(window, "orientationchange", i), o(window, "devicepixelratiochange", a);
                    }
                );
            },
            layer: "behavioral",
            events: ["orientationchange", "devicepixelratiochange"],
        },
        sensors: {
            create: function (t, e, n) {
                let i = null,
                    a = null,
                    s = null,
                    l = null,
                    u = !1;
                function d() {
                    l && p(l),
                        (l = setTimeout(
                            h(() => {
                                f(), (l = null);
                            }),
                            2e3,
                        ));
                }
                function f() {
                    i && (t.push(i), (i = null)), a && (t.push(a), (a = null)), s && (t.push(s), (s = null));
                }
                let m = c((e) => {
                        let n = e.timeStamp,
                            r = e.acceleration,
                            o = e.accelerationIncludingGravity,
                            a = e.rotationRate;
                        if (
                            (!r && !o && !a) ||
                            (null === r?.x &&
                                null === r?.y &&
                                null === r?.z &&
                                null === o?.x &&
                                null === o?.y &&
                                null === o?.z &&
                                null === a?.alpha &&
                                null === a?.beta &&
                                null === a?.gamma)
                        )
                            return;
                        if (!i)
                            return (
                                (i = {
                                    name: "sensors",
                                    type: "motion",
                                    timestamp: Date.now(),
                                    interval: e.interval ?? null,
                                    samples: {
                                        ax: [r?.x ?? 0],
                                        ay: [r?.y ?? 0],
                                        az: [r?.z ?? 0],
                                        agx: [o?.x ?? 0],
                                        agy: [o?.y ?? 0],
                                        agz: [o?.z ?? 0],
                                        rrAlpha: [a?.alpha ?? 0],
                                        rrBeta: [a?.beta ?? 0],
                                        rrGamma: [a?.gamma ?? 0],
                                        ts: [n],
                                    },
                                }),
                                void d()
                            );
                        if (i.samples.ts.length >= 50)
                            return (
                                t.push(i),
                                (i = {
                                    name: "sensors",
                                    type: "motion",
                                    timestamp: Date.now(),
                                    interval: e.interval ?? null,
                                    samples: {
                                        ax: [r?.x ?? 0],
                                        ay: [r?.y ?? 0],
                                        az: [r?.z ?? 0],
                                        agx: [o?.x ?? 0],
                                        agy: [o?.y ?? 0],
                                        agz: [o?.z ?? 0],
                                        rrAlpha: [a?.alpha ?? 0],
                                        rrBeta: [a?.beta ?? 0],
                                        rrGamma: [a?.gamma ?? 0],
                                        ts: [n],
                                    },
                                }),
                                void d()
                            );
                        let s = i.samples;
                        s.ax.push(r?.x ?? 0),
                            s.ay.push(r?.y ?? 0),
                            s.az.push(r?.z ?? 0),
                            s.agx.push(o?.x ?? 0),
                            s.agy.push(o?.y ?? 0),
                            s.agz.push(o?.z ?? 0),
                            s.rrAlpha.push(a?.alpha ?? 0),
                            s.rrBeta.push(a?.beta ?? 0),
                            s.rrGamma.push(a?.gamma ?? 0),
                            s.ts.push(n),
                            d();
                    }),
                    w = c((e) => {
                        if (null == e.alpha && null == e.beta && null == e.gamma) return;
                        let n = e.timeStamp,
                            i = e.webkitCompassHeading ?? 0;
                        if (!a)
                            return (
                                (a = {
                                    name: "sensors",
                                    type: "orientation",
                                    timestamp: Date.now(),
                                    absolute: u || e.absolute,
                                    samples: {
                                        alpha: [e.alpha ?? 0],
                                        beta: [e.beta ?? 0],
                                        gamma: [e.gamma ?? 0],
                                        compassHeading: [i],
                                        ts: [n],
                                    },
                                }),
                                void d()
                            );
                        if (a.samples.ts.length >= 50)
                            return (
                                t.push(a),
                                (a = {
                                    name: "sensors",
                                    type: "orientation",
                                    timestamp: Date.now(),
                                    absolute: u || e.absolute,
                                    samples: {
                                        alpha: [e.alpha ?? 0],
                                        beta: [e.beta ?? 0],
                                        gamma: [e.gamma ?? 0],
                                        compassHeading: [i],
                                        ts: [n],
                                    },
                                }),
                                void d()
                            );
                        let r = a.samples;
                        r.alpha.push(e.alpha ?? 0),
                            r.beta.push(e.beta ?? 0),
                            r.gamma.push(e.gamma ?? 0),
                            r.compassHeading.push(i),
                            r.ts.push(n),
                            d();
                    }),
                    y = c((e) => {
                        let n = e.value;
                        if (null == n) return;
                        let i = e.timeStamp;
                        s
                            ? s.samples.ts.length >= 50
                                ? (t.push(s),
                                  (s = {
                                      name: "sensors",
                                      type: "light",
                                      timestamp: Date.now(),
                                      samples: { lux: [n], ts: [i] },
                                  }))
                                : (s.samples.lux.push(n), s.samples.ts.push(i))
                            : (s = {
                                  name: "sensors",
                                  type: "light",
                                  timestamp: Date.now(),
                                  samples: { lux: [n], ts: [i] },
                              }),
                            d();
                    });
                return (
                    T(n, "motion") && r(window, "devicemotion", m),
                    T(n, "orientation") &&
                        ("ondeviceorientationabsolute" in window
                            ? ((u = !0), r(window, "deviceorientationabsolute", w))
                            : r(window, "deviceorientation", w)),
                    T(n, "light") && r(window, "devicelight", y),
                    function () {
                        o(window, "devicemotion", m),
                            o(window, u ? "deviceorientationabsolute" : "deviceorientation", w),
                            o(window, "devicelight", y),
                            l && (p(l), (l = null)),
                            f();
                    }
                );
            },
            layer: "behavioral",
            events: ["motion", "orientation", "light"],
        },
        "network-request": {
            create: function (t) {
                var e;
                let n = (function (t, e, n, r = m) {
                    if ("u" < typeof PerformanceObserver) return w;
                    let o = null;
                    try {
                        (o = new PerformanceObserver((i) => {
                            for (let o of i.getEntries())
                                r.has(o.initiatorType) &&
                                    (e(o.name) ||
                                        t(
                                            (function (t, e) {
                                                var n, i, r, o, a, s;
                                                let l = t.responseStart > 0,
                                                    u = ((i = t.domainLookupEnd - t.domainLookupStart), l ? i : null),
                                                    c = ((r = t.connectEnd - t.connectStart), l ? r : null),
                                                    h =
                                                        ((o =
                                                            t.connectEnd > 0 && t.secureConnectionStart > 0
                                                                ? t.connectEnd - t.secureConnectionStart
                                                                : 0),
                                                        l ? o : null),
                                                    d = ((a = t.responseStart - t.requestStart), l ? a : null),
                                                    p = ((s = t.responseEnd - t.responseStart), l ? s : null),
                                                    m = l ? t.transferSize : null,
                                                    w = l ? t.encodedBodySize : null,
                                                    y = l ? t.decodedBodySize : null,
                                                    g = (l && t.nextHopProtocol) || null,
                                                    v = l && void 0 !== t.deliveryType ? t.deliveryType : null,
                                                    b = t.responseStatus;
                                                return {
                                                    name: "network_request",
                                                    timestamp: Date.now(),
                                                    performanceTime: t.startTime + t.duration,
                                                    url: e(t.name),
                                                    initiatorType: ((n = t.initiatorType), f.has(n) ? n : "other"),
                                                    startTime: t.startTime,
                                                    durationMs: t.duration,
                                                    dnsLookupMs: u,
                                                    tcpConnectMs: c,
                                                    tlsHandshakeMs: h,
                                                    ttfbMs: d,
                                                    responseDownloadMs: p,
                                                    transferSize: m,
                                                    encodedBodySize: w,
                                                    decodedBodySize: y,
                                                    nextHopProtocol: g,
                                                    deliveryType: v,
                                                    responseStatus: void 0 !== b && 0 !== b ? b : null,
                                                };
                                            })(o, n),
                                        ));
                        })).observe({ type: "resource", buffered: !0 });
                    } catch {
                        return i.warn("network-request", "PerformanceObserver failed to start"), w;
                    }
                    return function () {
                        o?.disconnect(), (o = null);
                    };
                })(
                    function (e) {
                        l(() => t.push(e));
                    },
                    ((e = t.ignoredOrigins),
                    function (t) {
                        try {
                            return e.has(new URL(t).origin);
                        } catch {
                            return !1;
                        }
                    }),
                    t.sanitizeUrl,
                );
                return function () {
                    n();
                };
            },
            layer: "session",
        },
        screen: {
            create: function (t) {
                let e = l(() => {
                    let t;
                    return (
                        (t = window.screen),
                        {
                            name: "screen",
                            timestamp: Date.now(),
                            availWidth: t.availWidth,
                            availHeight: t.availHeight,
                            width: t.width,
                            height: t.height,
                            colorDepth: t.colorDepth,
                            pixelDepth: t.pixelDepth,
                            availLeft: t.availLeft ?? 0,
                            availTop: t.availTop ?? 0,
                            orientation: t.orientation
                                ? { type: t.orientation.type, angle: t.orientation.angle }
                                : null,
                            isExtended: t.isExtended ?? !1,
                            viewport: {
                                height: window.innerHeight,
                                width: window.innerWidth,
                                scrollX: window.scrollX,
                                scrollY: window.scrollY,
                                dpr: window.devicePixelRatio,
                            },
                        }
                    );
                });
                return e && t.push(e), () => {};
            },
            layer: "session",
        },
    },
    V = Object.keys(K),
    F = [
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
        /^0b[01]+$/i,
        /^0o[0-7]+$/i,
        /^0x[0-9a-f]+$/i,
        /^[a-z][a-z0-9]{1,12}:[A-Za-z0-9+/=_-]{6,}$/i,
        /^[a-z]{2,8}_(?=.*\d)[A-Za-z0-9]{3,}$/,
        /^\d{4,}$/,
        /@/,
        /^[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{10,}$/,
        /^[A-Za-z0-9_-]{20,}={0,2}$/,
        /^[0-9a-f]{7,}$/i,
    ];
function G(t) {
    try {
        let e = new URL(t, location.href);
        (e.username = ""), (e.password = ""), (e.hash = "");
        let n = [...e.searchParams.keys()],
            i = n.length > 0 ? "?" + n.map((t) => `${encodeURIComponent(t)}=<redacted>`).join("&") : "";
        (e.search = ""),
            (e.pathname = e.pathname
                .split("/")
                .map((t) =>
                    "" !== t &&
                    (function (t) {
                        for (let e of F) if (e.test(t)) return !0;
                        return !1;
                    })(t)
                        ? ":param"
                        : t,
                )
                .join("/"));
        let r = e.origin + e.pathname + i;
        return r.length > 2048 ? r.slice(0, 2048) : r;
    } catch {
        return "";
    }
}
let W = "idle",
    J = "ready",
    Z = "started",
    Q = "collection-disabled",
    tt = "init-failed",
    te = { flush: { intervalMs: 2e3, maxIntervalMs: 3e4, size: 50, backoffFailureThreshold: 2 }, queue: { size: 100 } };
function tn(t, e, n) {
    let i = K[t]?.events ?? [];
    if (0 === i.length) return { enabled: n };
    let r = e?.events,
        o = {};
    for (let t of i) o[t] = { enabled: r?.[t] ?? !0 };
    return { enabled: n, events: o };
}
let ti = function (t, e = 30) {
    if (!t) return !0;
    let n = t ? JSON.parse(atob(t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))) : null;
    return !n || "number" != typeof n.exp || 1e3 * n.exp <= Date.now() + 1e3 * e;
};
async function tr(t, e) {
    return globalThis.navigator &&
        "locks" in globalThis.navigator &&
        "request" in globalThis.navigator.locks &&
        "query" in globalThis.navigator.locks
        ? navigator.locks.request(t, { mode: "exclusive" }, async () => u(e))
        : u(e);
}
let to = "__tri",
    ta = `${to}_activity_token`,
    ts = `${to}_activity_id`,
    tl = `${to}_activity_status`,
    tu = "__tri_activity_lock";
var tc = class {
    constructor(t) {
        (this.context = t), (this.l = null), (this.u = null), (this.h = null), (this.p = null), (this.m = !1);
    }
    getToken() {
        return this.l;
    }
    getActivityId() {
        return this.u ?? "";
    }
    isActive() {
        return "ACTIVE" === this.h && null !== this.l;
    }
    async start() {
        return (this.m = !0), this.p || (this.p = this.v()), this.p;
    }
    async stop() {
        (this.m = !1), this.k(null), (this.p = null), this.l && (await this.context.stopActivity()), this.T(null);
    }
    async refresh() {
        if (!this.m) return;
        let t = this.l;
        await tr(tu, async () => {
            if (this.l && this.l !== t && !ti(this.l) && "ACTIVE" === this.h) return;
            let e = this._();
            e && e.token !== t && !ti(e.token) && "ACTIVE" === e.activityStatus
                ? this.T(e)
                : (this.I(), await this.S());
        });
    }
    async v() {
        try {
            if (this.l && !ti(this.l)) return;
            await tr(tu, async () => {
                await this.S();
            });
        } finally {
            this.p = null;
        }
    }
    async S() {
        let t = this._();
        if (t && !ti(t.token) && "ACTIVE" === t.activityStatus) return void this.T(t);
        t && this.I();
        let e = await this.context.startActivity();
        if (!e.ok || !e.data.token) return;
        let n = e.data;
        this.T(n), this.A(n);
    }
    _() {
        let [t, e, n] = [P.get(ta), P.get(ts), P.get(tl)];
        return t && e && n ? { token: t, activityId: e, activityStatus: n } : ((t || e || n) && this.I(), null);
    }
    A(t) {
        P.set(ta, t.token), P.set(ts, t.activityId), P.set(tl, t.activityStatus);
    }
    I() {
        this.k(null), this.T(null);
    }
    k(t) {
        t
            ? (P.set(ta, t.token), P.set(ts, t.activityId), P.set(tl, t.activityStatus))
            : (P.remove(ta), P.remove(ts), P.remove(tl));
    }
    T(t) {
        t
            ? ((this.l = t.token), (this.u = t.activityId), (this.h = t.activityStatus))
            : ((this.l = null), (this.u = null), (this.h = null));
    }
};
let th = [401, 403, 409],
    td = Object.freeze({
        tab: 80,
        navigation: 80,
        visibility: 80,
        network: 80,
        screen: 80,
        fingerprint: 80,
        pointer: 60,
        keystroke: 60,
        autofill: 60,
        change: 60,
        form: 60,
        clipboard: 60,
        selection: 60,
        focus: 60,
        viewport: 60,
        network_request: 60,
        scroll: 40,
        sensors: 40,
    });
function tp(t) {
    return ("pointer" === t.name && "move" === t.phase) || ("viewport" === t.name && "resize" === t.type)
        ? 40
        : td[t.name];
}
let tf = Array(256);
for (let t = 0; t < 256; t++) tf[t] = (t + 256).toString(16).slice(1);
let tm = new Uint8Array(16);
function tw(t) {
    return (
        tf[t[0]] +
        tf[t[1]] +
        tf[t[2]] +
        tf[t[3]] +
        "-" +
        tf[t[4]] +
        tf[t[5]] +
        "-" +
        tf[t[6]] +
        tf[t[7]] +
        "-" +
        tf[t[8]] +
        tf[t[9]] +
        "-" +
        tf[t[10]] +
        tf[t[11]] +
        tf[t[12]] +
        tf[t[13]] +
        tf[t[14]] +
        tf[t[15]]
    );
}
function ty() {
    return crypto.randomUUID();
}
function tg() {
    return crypto.getRandomValues(tm), (tm[6] = (15 & tm[6]) | 64), (tm[8] = (63 & tm[8]) | 128), tw(tm);
}
function tv() {
    for (let t = 0; t < 16; t++) tm[t] = (256 * Math.random()) | 0;
    return (tm[6] = (15 & tm[6]) | 64), (tm[8] = (63 & tm[8]) | 128), tw(tm);
}
let tb = (function () {
    if ("u" > typeof crypto) {
        if ("function" == typeof crypto.randomUUID) return ty;
        if ("function" == typeof crypto.getRandomValues) return tg;
    }
    return tv;
})();
var tk = class {
    constructor(t, e) {
        (this.M = t),
            (this.D = e),
            (this.C = []),
            (this.P = null),
            (this.L = []),
            (this.R = null),
            (this.m = !1),
            (this.$ = !0),
            (this.U = 0),
            (this.B = 0),
            (this.O = t.flush.intervalMs);
    }
    push(t) {
        if (this.m) {
            if ((this.C.length < this.q() ? this.C.push(t) : this.j(t), this.$))
                return this.C.length >= this.M.flush.size
                    ? (p(this.P), (this.P = null), void this.flush("capacity"))
                    : void this.H();
        } else i.warn("Transport", "push() called before start() \u2014 event dropped");
    }
    flush(t) {
        if (this.m && this.D.isActivityActive())
            try {
                if ("lifecycle" === t) return void this.N();
                if (0 === this.C.length) return;
                let e = this.F(t);
                this.D.ingest(e, !1)
                    .then((t) => this.X(t, e))
                    .catch(() => {
                        i.warn("Transport", "ingest threw unexpectedly \u2014 batch dropped");
                    }),
                    this.C.length > 0 && this.H();
            } catch (t) {
                i.warn("Transport", "flush() threw unexpectedly:", t);
            }
    }
    start() {
        this.m || ((this.m = !0), (this.$ = "u" < typeof navigator || navigator.onLine));
    }
    stop() {
        if (!this.m) return Promise.resolve();
        p(this.P), (this.P = null), p(this.R), (this.R = null);
        let t = this.N();
        return (this.m = !1), t;
    }
    onConnectionChange() {
        let t = "u" < typeof navigator || navigator.onLine;
        if (t !== this.$) {
            if (((this.$ = t), !this.$)) return p(this.P), (this.P = null), p(this.R), void (this.R = null);
            this.C.length > 0 && this.H(), this.L.length > 0 && this.K();
        }
    }
    H() {
        this.m &&
            this.$ &&
            null === this.P &&
            (this.P = d(() => {
                (this.P = null), this.flush("interval");
            }, this.O));
    }
    K() {
        this.m &&
            this.$ &&
            null === this.R &&
            (this.R = d(() => {
                (this.R = null), this.V();
            }, this.O));
    }
    V() {
        if (!this.m || !this.$ || 0 === this.L.length || !this.D.isActivityActive()) return;
        let t = this.L.shift();
        this.D.ingest(t.batch, !1)
            .then((e) => this.Y(e, t))
            .catch(() => {
                i.warn("Transport", "retry drain ingest threw unexpectedly \u2014 batch dropped"),
                    this.L.length > 0 && this.K();
            });
    }
    J(t, e) {
        this.L.length >= 5 && (this.L.shift(), i.warn("Transport", "retry queue full \u2014 oldest batch evicted")),
            this.L.push({ batch: t, attempts: e }),
            this.K();
    }
    X(t, e) {
        t.ok ? this.G() : this.Z(t) && this.J(e, 1);
    }
    Y(t, e) {
        if (t.ok) return this.G(), void (this.L.length > 0 && this.K());
        if (this.Z(t)) {
            if (e.attempts >= 3)
                return (
                    this.W(),
                    i.warn("Transport", "batch dropped after MAX_RETRY_ATTEMPTS", e.batch.batchId),
                    void (this.L.length > 0 && this.K())
                );
            this.W(), this.J(e.batch, e.attempts + 1);
        } else this.L.length > 0 && this.K();
    }
    W() {
        this.U++,
            this.U % this.M.flush.backoffFailureThreshold == 0 &&
                (this.O = Math.min(2 * this.O, this.M.flush.maxIntervalMs));
    }
    G() {
        (this.U = 0), (this.O = this.M.flush.intervalMs);
    }
    q() {
        return this.M.queue.size * (this.$ ? 1 : 2);
    }
    async N() {
        if (!this.D.isActivityActive()) return Promise.resolve();
        let t = [];
        for (let e of this.L)
            t.push(
                this.D.ingest(e.batch, !0).catch(() => {
                    i.warn("Transport", "lifecycle retry ingest threw \u2014 batch dropped");
                }),
            );
        if (((this.L = []), this.C.length > 0)) {
            let e = this.F("lifecycle");
            t.push(
                this.D.ingest(e, !0).catch(() => {
                    i.warn("Transport", "lifecycle ingest threw \u2014 batch dropped");
                }),
            );
        }
        return Promise.allSettled(t).then(() => {});
    }
    j(t) {
        let e = tp(t);
        for (let n = 0; n < this.C.length; n++)
            if (tp(this.C[n]) < e) {
                for (let t = n; t < this.C.length - 1; t++) this.C[t] = this.C[t + 1];
                (this.C.length -= 1), this.C.push(t);
                return;
            }
    }
    F(t) {
        let e = "lifecycle" === t ? this.C.splice(-this.M.flush.size) : this.C.splice(0, this.M.flush.size);
        return {
            activityId: "",
            batchId: tb(),
            batchSequence: this.B++,
            clientTimestamp: Date.now(),
            schemaVersion: "0.1.0",
            sdkVersion: "0.5.1",
            sdkPlatform: "web",
            tabId: this.D.getTabId(),
            events: e,
        };
    }
    Z(t) {
        if (t.ok) return !1;
        switch (t.kind) {
            case "timeout":
            case "server":
            case "rate_limited":
                return !0;
            default:
                return !1;
        }
    }
};
let tT = "tri:bcast:",
    tI =
        "function" == typeof BroadcastChannel
            ? BroadcastChannel
            : !(function () {
                    if ("u" < typeof Storage || "u" < typeof window) return !1;
                    try {
                        let t = "__tri_bcast_probe__";
                        localStorage.setItem(t, "1");
                        let e = "1" === localStorage.getItem(t);
                        return localStorage.removeItem(t), e;
                    } catch {
                        return !1;
                    }
                })()
              ? class {
                    constructor(t) {
                        i.warn(
                            "BroadcastChannel",
                            "BroadcastChannel is unavailable and localStorage is not writable in this context. Cross-tab discovery is disabled; tab count will always be reported as 1.",
                        );
                    }
                    postMessage(t) {}
                    addEventListener(t, e) {}
                    removeEventListener(t, e) {}
                    close() {}
                }
              : class {
                    constructor(t) {
                        (this.seq = 0),
                            (this.closed = !1),
                            (this.listeners = new Set()),
                            (this.onStorageEvent = (t) => {
                                let e;
                                if (
                                    this.closed ||
                                    !t.key ||
                                    !t.key.startsWith(`${tT}${this.channelName}:`) ||
                                    null === t.newValue
                                )
                                    return;
                                l(() => P.remove(t.key));
                                try {
                                    e = JSON.parse(t.newValue);
                                } catch {
                                    return;
                                }
                                let n = { data: e };
                                for (let t of this.listeners) l(() => t(n));
                            }),
                            (this.channelName = t),
                            (this.senderId = tb()),
                            window.addEventListener("storage", this.onStorageEvent);
                    }
                    postMessage(t) {
                        if (this.closed) return;
                        let e = `${tT}${this.channelName}:${this.senderId}:${this.seq++}`;
                        l(() => {
                            P.set(e, t), P.remove(e);
                        });
                    }
                    addEventListener(t, e) {
                        this.listeners.add(e);
                    }
                    removeEventListener(t, e) {
                        this.listeners.delete(e);
                    }
                    close() {
                        this.closed ||
                            ((this.closed = !0),
                            window.removeEventListener("storage", this.onStorageEvent),
                            this.listeners.clear());
                    }
                },
    tS = "__tri_tabId";
var tE = class {
    constructor(t) {
        (this.context = t),
            (this.tt = ""),
            (this.m = !1),
            (this.nt = null),
            (this.et = null),
            (this.it = null),
            (this.ot = new Map()),
            (this.rt = -1),
            (this.st = null);
    }
    async start() {
        this.m ||
            ((this.m = !0),
            (this.tt = this.ct()),
            this.lt(),
            this.ut({ type: "hello", tabId: this.tt, ts: Date.now() }),
            this.dt(),
            this.ht("active"),
            this.ft());
    }
    stop() {
        this.m &&
            ((this.m = !1),
            this.ht("inactive"),
            this.ut({ type: "bye", tabId: this.tt, ts: Date.now() }),
            this.wt(this.yt()),
            this.vt(),
            this.bt(),
            this.gt());
    }
    getTabId() {
        return this.tt;
    }
    queryTabsNumber() {
        return this.ot.size + 1;
    }
    lt() {
        try {
            (this.nt = new tI("__tri_tab_channel")),
                (this.st = this.kt.bind(this)),
                this.nt.addEventListener("message", this.st);
        } catch (t) {
            i.warn("TabManager", "failed to open broadcast channel:", t);
        }
    }
    gt() {
        try {
            if (!this.nt) return;
            this.st && this.nt.removeEventListener("message", this.st), this.nt.close();
        } catch {
        } finally {
            (this.nt = null), (this.st = null);
        }
    }
    dt() {
        this.et = setInterval(() => {
            let t = Date.now();
            this.ut({ type: "heartbeat", tabId: this.tt, ts: t });
        }, 1e3);
    }
    vt() {
        null != this.et && (clearInterval(this.et), (this.et = null));
    }
    ft() {
        null != this.it && clearTimeout(this.it),
            (this.it = setTimeout(() => {
                this.it = null;
                let t = this.yt() + 1;
                t !== this.rt && ((this.rt = t), this.wt(t));
            }, 1e3));
    }
    bt() {
        null != this.it && (clearTimeout(this.it), (this.it = null));
    }
    ut(t) {
        try {
            if (!this.nt) return;
            this.nt.postMessage(t);
        } catch {
            i.warn("TabManager", "failed to broadcast message:", t);
        }
    }
    kt(t) {
        let { type: e, tabId: n } = t.data;
        if (n === this.tt) return;
        let i = Date.now();
        "hello" === e
            ? (this.ut({ type: "ack", tabId: this.tt, ts: i, to: n }), this.ot.set(n, i))
            : "heartbeat" === e || "ack" === e
              ? this.ot.set(n, i)
              : "bye" === e && this.ot.delete(n);
    }
    wt(t) {
        this.context.events.count &&
            this.context.push({ name: "tab", type: "count", tabId: this.tt, timestamp: Date.now(), value: t });
    }
    ht(t) {
        this.context.events.state &&
            this.context.push({ name: "tab", type: "state", tabId: this.tt, timestamp: Date.now(), value: t });
    }
    ct() {
        let t = _.get(tS);
        if (t) return t;
        let e = tb();
        return _.set(tS, e), e;
    }
    yt(t = Date.now()) {
        let e = 0;
        for (let [n, i] of this.ot.entries()) t - i >= 3e3 ? this.ot.delete(n) : e++;
        return e;
    }
};
let tx = globalThis.CompressionStream,
    tA = globalThis.Response,
    tM = globalThis.Blob,
    tL = new TextEncoder(),
    tC = null;
async function tD(t) {
    let e = await (async function (t) {
        if ("function" != typeof tx) return null;
        try {
            return await new tA(new tM([tL.encode(t)]).stream().pipeThrough(new tx("gzip"))).arrayBuffer();
        } catch (t) {
            return i.warn("compression", "Native gzip failed:", t), null;
        }
    })(t);
    return null !== e
        ? e
        : (async function (t) {
              try {
                  let e = await (function () {
                      if (null === tC) {
                          let t = (function (t, e = 1e4) {
                              let n = null,
                                  r = new Promise((t) => {
                                      n = d(() => {
                                          i.warn("import", `Import timed out after ${e}ms`), t(null);
                                      }, e);
                                  }),
                                  o = Promise.resolve()
                                      .then(t)
                                      .catch((t) => (i.warn("import", "Import failed:", t), null));
                              return Promise.race([o, r]).finally(() => {
                                  p(n);
                              });
                          })(() => n.e("92162").then(n.bind(n, 404729)), 1e4);
                          (tC = t),
                              t.then((e) => {
                                  null === e &&
                                      d(() => {
                                          tC === t && (tC = null);
                                      }, 1e4);
                              });
                      }
                      return tC;
                  })();
                  if (null === e) return null;
                  let { gzipSync: r } = e,
                      o = r(tL.encode(t));
                  return o.buffer.slice(o.byteOffset, o.byteOffset + o.byteLength);
              } catch (t) {
                  return i.warn("compression", "fflate gzip failed:", t), null;
              }
          })(t);
}
let tz = "function" == typeof globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0;
var tP = class {
    constructor(t) {
        this.context = t;
    }
    stop() {}
    async report(t, e) {
        let n = { name: t, metadata: e, timestamp: Date.now(), activityId: this.context.getActivityId() ?? "" };
        try {
            let r = await this.context.reportEvent(n);
            if (r.ok) return r;
            i.warn("EventReport", "Failed to report event:", t, e, "with result:", r);
        } catch (n) {
            i.warn("EventReport", "Failed to report event:", t, e, "with error:", n);
        }
    }
};
let t_ = new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "SUMMARY", "DETAILS", "LABEL", "OPTION", "FIELDSET"]),
    t$ = new Set([
        "button",
        "link",
        "tab",
        "menuitem",
        "menuitemcheckbox",
        "menuitemradio",
        "checkbox",
        "radio",
        "switch",
        "slider",
        "spinbutton",
        "combobox",
        "listbox",
        "option",
        "searchbox",
        "textbox",
        "treeitem",
    ]);
function tR(t, e, n, i = G) {
    let r,
        o,
        a,
        s,
        l,
        u,
        c,
        h,
        d,
        p,
        f,
        m,
        w,
        y,
        v,
        b,
        T,
        I = t.tagName.toLowerCase(),
        S = (function (t) {
            let e = t.parentElement?.children ?? [],
                n = Math.min(e.length, 1e3),
                i = 0,
                r = 0;
            for (let o = 0; o < n; o++) {
                r++;
                let n = e[o];
                if ((g(n, t.tagName) && i++, n === t)) break;
            }
            return { siblings: n - 1, ofType: i, child: r };
        })(t),
        E =
            ((r = (function (t) {
                if (!t) return null;
                let e = t.getAttribute("data-tri-redact-attrs");
                return e ? e.split(",").map((t) => t.trim().toLowerCase()) : null;
            })(t)),
            (o = {}),
            (a = t.id) && !k("id", r) && (o.id = a),
            (s = t.getAttribute("autocomplete")) && !k("autocomplete", r) && (o.autocomplete = s),
            (l = t.getAttribute("aria-invalid")) && !k("aria-invalid", r) && (o.ariaInvalid = l),
            (u = t.getAttribute("tabindex")) && !k("tabindex", r) && (o.tabIndex = parseInt(u, 10)),
            (c = t.getAttribute("data-testid") ?? t.getAttribute("data-cy") ?? null) &&
                !k("data-testid", r) &&
                (o.testId = c),
            (h = t.hasAttribute("readonly")) && !k("readonly", r) && (o.readOnly = h),
            (d = t.hasAttribute("required")) && !k("required", r) && (o.required = d),
            (p = t.getAttribute("contenteditable")) &&
                !k("contenteditable", r) &&
                (o.contentEditable = "true" === p || "" === p),
            (f = t.getAttribute("href")) &&
                !k("href", r) &&
                (o.href = {
                    ...(e ? {} : { url: i(f) }),
                    external: (function (t) {
                        try {
                            return new URL(t).origin !== window.location.origin;
                        } catch {
                            return !1;
                        }
                    })(f),
                }),
            (m = t.getAttribute("role")) && !k("role", r) && (o.role = m),
            (w = t.getAttribute("type")) && !k("type", r) && (o.type = w),
            (y = t.getAttribute("name")) && !k("name", r) && (o.name = y),
            !(v = t.getAttribute("placeholder")) || e || k("placeholder", r) || (o.placeholder = v),
            (b = Array.from(t.classList).slice(0, 5)).length > 0 && !k("class", r) && (o.classes = b),
            !(T = t.getAttribute("alt")) || e || k("alt", r) || (o.alt = T),
            Object.keys(o).length ? o : null);
    return { tagName: I, frame: n, ...(E ? { attributes: E } : {}), ...(S ? { nth: S } : {}) };
}
function tU(t, e) {
    let n,
        i = 0,
        r = [];
    return (
        t_.has(t.tagName) && ((i += 40), r.push("native")),
        t.hasAttribute("data-tri-interactive") && ((i += 40), r.push("tri-interactive")),
        g(t, "a") && t.hasAttribute("href") && ((i += 15), r.push("has-href")),
        null !== (n = t.getAttribute("role")) && t$.has(n) && ((i += 30), r.push("role")),
        (t.hasAttribute("onclick") ||
            t.hasAttribute("ng-click") ||
            t.hasAttribute("data-action") ||
            t.hasAttribute("@click")) &&
            ((i += 20), r.push("click-handler")),
        (function (t) {
            let e = t.getAttribute("tabindex");
            if (null === e) return !1;
            let n = parseInt(e, 10);
            return null !== n && n >= 0;
        })(t) && ((i += 10), r.push("tabindex")),
        (t.id || t.getAttribute("data-testid")) && ((i += 5), r.push("has-id")),
        e > 0 && ((i += Math.round(15 / e)), r.push("depth")),
        { score: i, reasons: r }
    );
}
function tO(t, e = !1) {
    let n;
    if (e) return null;
    let i = tq(t, "labelledby");
    if (i) return { text: tH(i), resolutionMethod: "aria-labelledby", confidence: "high" };
    let r = tB(t);
    if (r) return { text: tH(r), resolutionMethod: "aria-label", confidence: "high" };
    let o = (function (t) {
        if (!t.id) return null;
        let e = document.querySelector(`label[for="${CSS.escape(t.id)}"]`);
        return e ? tN(e) : null;
    })(t);
    if (o) return { text: tH(o), resolutionMethod: "html-for", confidence: "high" };
    let a = (n = t.closest("label")) ? tN(n) : null;
    if (a) return { text: tH(a), resolutionMethod: "wrapping-label", confidence: "high" };
    let s = t.getAttribute("placeholder")?.trim() ?? null;
    if (s) return { text: tH(s), resolutionMethod: "placeholder", confidence: "low" };
    let l = t.getAttribute("title")?.trim() ?? null;
    if (l) return { text: tH(l), resolutionMethod: "title", confidence: "low" };
    let u = tq(t, "describedby");
    if (u) return { text: tH(u), resolutionMethod: "aria-describedby", confidence: "low" };
    let c = tN(t);
    return c ? { text: c, resolutionMethod: "text-content", confidence: "low" } : null;
}
function tN(t, e = 0) {
    if (e > 8) return "";
    if (y(t)) {
        var n;
        return (
            ((n = t.textContent)
                ? n
                      .trim()
                      .split(/(\s+)/)
                      .join("")
                      .replace(/[\r\n]/g, " ")
                      .replace(/[ ]+/g, " ")
                      .substring(0, 255)
                : null) ?? ""
        );
    }
    if (!t.childNodes?.length) return "";
    let i = "";
    for (let n of t.childNodes) {
        let t = tN(n, e + 1);
        if (t && (i = i ? `${i} ${t}` : t).length >= 255) break;
    }
    return tH(i);
}
function tq(t, e) {
    let n = t?.getAttribute("labelledby" === e ? "aria-labelledby" : "aria-describedby");
    if (!n) return null;
    let i = n.split(/\s+/),
        r = [];
    for (let t of i) {
        let e = document.getElementById(t);
        if (!e) continue;
        let n = tB(e) ?? tN(e);
        n.length && r.push(n);
    }
    return r.length ? r.join(" ") : null;
}
function tB(t) {
    return t?.getAttribute("aria-label")?.trim() ?? null;
}
function tH(t) {
    return t.length > 255 ? t.slice(0, 255) + "..." : t;
}
function tX(t) {
    let e = t.getBoundingClientRect();
    return { x: e.x, y: e.y, width: e.width, height: e.height };
}
var tj = class {
    constructor(t) {
        (this.capacity = t), (this.cache = new Map());
    }
    get(t) {
        return this.cache.get(t);
    }
    set(t, e) {
        if (this.cache.has(t)) this.cache.delete(t);
        else if (this.cache.size >= this.capacity) {
            let t = this.cache.keys().next().value;
            t && this.cache.delete(t);
        }
        this.cache.set(t, e);
    }
    delete(t) {
        this.cache.delete(t);
    }
    clear() {
        this.cache.clear();
    }
    size() {
        return this.cache.size;
    }
};
async function tY(t, e) {
    let { collectors: n, sdk: a } = t,
        s = null,
        l = null,
        u = null,
        h = null;
    try {
        var f;
        let t, m, w;
        (f = {
            api: { version: a.api.version, url: a.api.url },
            getSdkToken: () => a.token,
            getProfileId: () => e.getProfileId(),
            getToken: () => l?.getToken() ?? null,
            refresh: async () => l?.refresh() ?? Promise.resolve(),
            getActivityId: () => l?.getActivityId() ?? "",
        }),
            ("u" > typeof document && "function" == typeof globalThis.fetch) ||
                i.warn(
                    "FalconService",
                    "createFalconServiceManager called in a non-browser environment \u2014 all requests will resolve with { ok: false, kind: 'network' }.",
                ),
            (t = (function (t) {
                let e = t?.timeout,
                    n = t?.baseUrl ?? "",
                    i = t?.api;
                async function r(t, r, o) {
                    var a, s;
                    if (void 0 === tz) return { ok: !1, kind: "network" };
                    let l = n ? `${n}${r}` : r,
                        u = new AbortController(),
                        c = null,
                        h = !1;
                    c = d(() => {
                        (h = !0), u.abort();
                    }, e);
                    let f = o?.signal,
                        m,
                        w = () => {};
                    if (f)
                        if (f.aborted) u.abort();
                        else {
                            let t = () => u.abort();
                            f.addEventListener("abort", t, { once: !0 }), (w = () => f.removeEventListener("abort", t));
                        }
                    if (null != o && "body" in o && null != o.body) {
                        let t = (function (t) {
                            if (null == t) return { ok: !0, body: void 0 };
                            if (
                                "string" == typeof t ||
                                t instanceof ArrayBuffer ||
                                ArrayBuffer.isView(t) ||
                                t instanceof Blob ||
                                t instanceof FormData ||
                                t instanceof URLSearchParams ||
                                t instanceof ReadableStream
                            )
                                return { ok: !0, body: t };
                            try {
                                return { ok: !0, body: JSON.stringify(t) };
                            } catch {
                                return { ok: !1 };
                            }
                        })(o.body);
                        if (!t.ok) return p(c), w(), { ok: !1, kind: "serialize" };
                        m = t.body;
                    }
                    try {
                        let e,
                            n = await tz(l, {
                                method: t,
                                headers:
                                    ((s = {
                                        token: o?.token,
                                        profileId: o?.profileId,
                                        contentType: o?.contentType,
                                        contentEncoding: o?.contentEncoding,
                                        api: i,
                                        hasBody: void 0 !== m,
                                        customHeaders: o?.customHeaders,
                                    }),
                                    (e = { Accept: "application/json" }),
                                    s?.hasBody &&
                                        ("json" === s.contentType
                                            ? (e["Content-Type"] = "application/json")
                                            : "ndjson" === s.contentType &&
                                              (e["Content-Type"] = "application/x-ndjson"),
                                        "gzip" === s.contentEncoding && (e["Content-Encoding"] = "gzip")),
                                    s?.token && (e.Authorization = `Bearer ${s.token}`),
                                    s?.profileId && (e["x-profile-id"] = s.profileId),
                                    s?.api?.version && (e["x-api-version"] = s.api.version),
                                    s?.customHeaders &&
                                        Object.entries(s.customHeaders).forEach(([t, n]) => {
                                            e[t] = n;
                                        }),
                                    e),
                                body: m,
                                signal: u.signal,
                                keepalive: o?.keepalive,
                            });
                        if (!n.ok)
                            return 429 === (a = n.status)
                                ? { ok: !1, kind: "rate_limited", status: a }
                                : a >= 400 && a < 500
                                  ? { ok: !1, kind: "client", status: a }
                                  : { ok: !1, kind: "server", status: a };
                        if (204 === n.status) return { ok: !0, data: void 0, status: 204 };
                        try {
                            return { ok: !0, data: await n.json(), status: n.status };
                        } catch {
                            return u.signal.aborted
                                ? h
                                    ? { ok: !1, kind: "timeout" }
                                    : { ok: !1, kind: "abort" }
                                : { ok: !1, kind: "parse", status: n.status };
                        }
                    } catch {
                        return h
                            ? { ok: !1, kind: "timeout" }
                            : u.signal.aborted
                              ? { ok: !1, kind: "abort" }
                              : { ok: !1, kind: "network" };
                    } finally {
                        p(c), w();
                    }
                }
                return {
                    post: async function (t, e) {
                        return r("POST", t, e);
                    },
                    get: async function (t, e) {
                        return r("GET", t, e);
                    },
                };
            })({ baseUrl: `${f.api.url}/api/v1`, timeout: 1e4, api: { version: f.api.version } })),
            (m = (function (t) {
                let { getToken: e, refresh: n } = t,
                    r = null;
                return {
                    withAuth: async function (t, o) {
                        if (r) {
                            let e = await r;
                            if (e) return t(e);
                        }
                        let a = e() ?? "",
                            s = await t(a);
                        if (s.ok || "client" !== s.kind || !th.includes(s.status) || !1 === o?.refreshable) return s;
                        let l = await (r ||
                            (r = (async function () {
                                try {
                                    return await n(), e();
                                } catch (t) {
                                    return i.warn("AuthMiddleware", "auth refresh failed", t), null;
                                }
                            })().finally(() => {
                                r = null;
                            })));
                        return l && l !== a ? t(l) : s;
                    },
                };
            })(f)),
            (w = () => ({ profileId: f.getProfileId() ?? void 0 })),
            (s = {
                api: {
                    ingest: async function (e, n) {
                        return m.withAuth(
                            async (i) => {
                                let r,
                                    { events: o, ...a } = e,
                                    s = { ...a, activityId: f.getActivityId() };
                                try {
                                    r = await (async function (t, e) {
                                        let n = (function (t, e) {
                                                let n = [JSON.stringify(t)];
                                                for (let t = 0; t < e.length; t++)
                                                    try {
                                                        n.push(JSON.stringify(e[t]));
                                                    } catch {}
                                                return n.join("\n");
                                            })(t, e),
                                            i = await tD(n);
                                        return i ? { type: "gzip", body: i } : { type: "ndjson", body: n };
                                    })(s, o);
                                } catch {
                                    return { ok: !1, kind: "serialize" };
                                }
                                return t.post("/events/capture", {
                                    body: r.body,
                                    token: i,
                                    keepalive: n,
                                    contentType: "ndjson",
                                    contentEncoding: "gzip" === r.type ? "gzip" : void 0,
                                    ...w(),
                                });
                            },
                            { refreshable: !n },
                        );
                    },
                    reportEvent: async function (e) {
                        return m.withAuth((n) =>
                            t.post("/events/report-event", { body: e, token: n, contentType: "json", ...w() }),
                        );
                    },
                    startActivity: async function () {
                        return t.post("/events/start-activity", { token: f.getSdkToken(), ...w() });
                    },
                    stopActivity: async function () {
                        return m.withAuth((e) => t.post("/events/end-activity", { token: e, keepalive: !0, ...w() }), {
                            refreshable: !1,
                        });
                    },
                    collectionStatus: async function () {
                        return t.get("/sdk/collection-status", { token: f.getSdkToken(), ...w() });
                    },
                    linkInterview: async function (e) {
                        return m.withAuth((n) =>
                            t.post("/events/link-interview", {
                                token: n,
                                contentType: "json",
                                ...w(),
                                customHeaders: { "X-Incode-Hardware-Id": e },
                            }),
                        );
                    },
                },
            });
        let y = await s.api.collectionStatus();
        if (!y.ok || !0 !== y.data.eventsCollectionEnabled) return { status: "collection-disabled" };
        (l = new tc({ startActivity: () => s.api.startActivity(), stopActivity: () => s.api.stopActivity() })),
            (u = new tk(te, {
                ingest: (t, e) => s.api.ingest(t, e),
                getTabId: () => h?.getTabId() ?? "unknown",
                isActivityActive: () => l?.isActive() ?? !1,
            }));
        let k = n.tab;
        h = new tE({
            push: (t) => u?.push(t),
            events: { state: k.enabled && k.events.state.enabled, count: k.enabled && k.events.count.enabled },
        });
        let T = (function (t) {
                function e(e) {
                    "hidden" === document.visibilityState && t.flush();
                }
                function n(e) {
                    t.flush(), t.stopTab(), t.getShouldSkipStopActivity() || t.stopActivity();
                }
                let i = c(() => t.onConnectionChange());
                return {
                    start: function () {
                        r(document, "visibilitychange", e),
                            r(window, "pagehide", n),
                            r(window, "online", i),
                            r(window, "offline", i);
                    },
                    stop: function () {
                        o(document, "visibilitychange", e),
                            o(window, "pagehide", n),
                            o(window, "online", i),
                            o(window, "offline", i);
                    },
                };
            })({
                flush: () => u?.flush("lifecycle"),
                stopActivity: async () => l?.stop(),
                stopTab: () => h?.stop(),
                getShouldSkipStopActivity: () => (h?.queryTabsNumber() ?? 0) > 1,
                onConnectionChange: () => u?.onConnectionChange(),
            }),
            I = (function (t = {}) {
                let { elementLevel: e, sanitizeUrl: n = G } = t,
                    i = e || "redact",
                    r = new tj(6),
                    o = new tj(6);
                return {
                    resolve: function (t) {
                        var e, a;
                        let s, l, u, c, h, d;
                        if (!t || v(t) || "off" === i) return null;
                        let p = r.get(t);
                        if (
                            (p ||
                                ((p = (function (t) {
                                    if (!t || v(t)) return { chain: [], redaction: { level: "ignore", index: -1 } };
                                    let e = [],
                                        n = t,
                                        i = -1;
                                    for (; n; ) {
                                        if (v(n)) return { chain: [], redaction: { level: "ignore", index: -1 } };
                                        b(n) && (i = e.length), e.push(n);
                                        let t = n.parentNode;
                                        if (!t || g(n, "body")) break;
                                        if (t && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE) n = t.host;
                                        else {
                                            if (t.nodeType !== Node.ELEMENT_NODE) break;
                                            n = t;
                                        }
                                    }
                                    return { chain: e, redaction: { level: -1 === i ? "full" : "redact", index: i } };
                                })(t.parentElement)),
                                r.set(t, p)),
                            "ignore" === p.redaction.level)
                        )
                            return null;
                        let f = "redact" === p.redaction.level || "redact" === i || b(t),
                            m = o.get(t);
                        return (
                            m ||
                                ((e = p.chain),
                                (a = p.redaction.index),
                                (s = getComputedStyle(t)),
                                (l = tX(t)),
                                (u = (function (t, e, n = !1, i = G) {
                                    let r = [],
                                        o = [];
                                    for (let a = t.length - 1; a >= 0; a--) {
                                        let s = t[a],
                                            l = n || a <= e,
                                            u = a + 1,
                                            c = tR(s, l, tX(s), i),
                                            { score: h, reasons: d } = tU(s, u);
                                        if ((r.push(c), !(h >= 20))) continue;
                                        let p = tO(s, l);
                                        o.push({ ...c, ...(p ? { label: p } : {}), depth: u, score: h, reasons: d });
                                    }
                                    return { ancestors: r, interactiveCandidates: o.reverse() };
                                })(e, a, f, n)),
                                (c = tR(t, f, l, n)),
                                (h = (function (t, e, n) {
                                    let { score: i, reasons: r } = tU(t, 0);
                                    return {
                                        interactive: i >= 20,
                                        ...(r.length > 0 ? { reasons: r } : {}),
                                        disabled: !0 === t.disabled || "true" === t.getAttribute("aria-disabled"),
                                        rendered: "none" !== e?.display,
                                        visible: "hidden" !== e?.visibility,
                                        inViewport:
                                            null !== n &&
                                            n.width > 0 &&
                                            n.height > 0 &&
                                            n.y < window.innerHeight &&
                                            n.y + n.height > 0 &&
                                            n.x < window.innerWidth &&
                                            n.x + n.width > 0,
                                        acceptsPointer: "none" !== e?.pointerEvents,
                                        opacity: parseFloat(e?.opacity || "1"),
                                    };
                                })(t, s, l)),
                                (d = null),
                                f || (d = h.interactive ? tO(t) : null),
                                (m = {
                                    tagName: c.tagName,
                                    frame: c.frame,
                                    viewport: {
                                        height: window.innerHeight,
                                        width: window.innerWidth,
                                        scrollX: window.scrollX,
                                        scrollY: window.scrollY,
                                        dpr: window.devicePixelRatio,
                                    },
                                    attributes: c.attributes,
                                    nth: c.nth,
                                    ...(d ? { label: d } : {}),
                                    ancestors: u.ancestors,
                                    interactiveCandidates: u.interactiveCandidates,
                                    interactivity: h,
                                }),
                                o.set(t, m)),
                            m
                        );
                    },
                };
            })({ elementLevel: a.capture?.element, sanitizeUrl: a.sanitizeUrl }),
            S = new Set();
        try {
            S.add(new URL(a.api.url).origin);
        } catch {}
        let E = (function (t, e, n = "on") {
                let i = new Map();
                function r(r) {
                    if (i.has(r)) return;
                    let o = K[r];
                    if (!o || !e[r]?.enabled) return;
                    let a = e[r],
                        s = o.create(t, n, a && "events" in a ? a.events : void 0);
                    i.set(r, s);
                }
                return {
                    start: r,
                    stopCollector: function (t) {
                        let e = i.get(t);
                        e && (e(), i.delete(t));
                    },
                    stop: function () {
                        for (let [, t] of i) t();
                        i.clear();
                    },
                    isRunning: function (t) {
                        return i.has(t);
                    },
                    autocapture: function () {
                        for (let t of V) r(t);
                    },
                };
            })(
                {
                    push: (t) => u?.push(t),
                    resolveElement: (t) => I.resolve(t),
                    sanitizeUrl: a.sanitizeUrl,
                    ignoredOrigins: S,
                },
                n,
                a.capture?.content,
            ),
            x = new tP({ getActivityId: () => l?.getActivityId() ?? "", reportEvent: (t) => s.api.reportEvent(t) });
        return {
            status: "ready",
            managers: {
                falconServiceManager: s,
                activityManager: l,
                transportManager: u,
                tabManager: h,
                lifecycleManager: T,
                collectorManager: E,
                eventReportManager: x,
            },
        };
    } catch (t) {
        return i.warn("IncodeTRI", "setup() failed during construction:", t), { status: "init-failed" };
    }
}
let tK = class t {
    constructor() {
        (this.Tt = 0), (this._t = null), (this.It = W);
    }
    static get instance() {
        return t.i || (t.i = new t()), t.i;
    }
    async setup(t) {
        if (this.It !== W)
            return (
                i.fatal(
                    "error",
                    "setup()",
                    `cannot set up from state '${this.It}' \u{2014} call reset() (or reload) first. Ignoring.`,
                ),
                tt
            );
        try {
            let e = (function (t) {
                var e;
                if ("u" < typeof document)
                    return i.fatal("error", "IncodeTRI", "TRI is not available in a non-browser environment."), null;
                if (!t?.token) return i.fatal("error", "SDK", "token is required."), null;
                if (!t.apiURL)
                    return i.fatal("error", "SDK", "Couldn't initialise SDK \u2014 apiURL isn't provided."), null;
                let { element: n, content: r } = t.capture ?? {},
                    o = {
                        token: t.token,
                        capture: { element: n ?? "redact", content: r ?? "off" },
                        api: { version: t.apiVersion ?? "1.0", url: t.apiURL },
                        sanitizeUrl: (e = t.sanitizeUrl)
                            ? function (t) {
                                  return l(() => e(t, G)) ?? G(t);
                              }
                            : G,
                        DEBUG: t.DEBUG ?? !1,
                    };
                return void 0 === t.collectors && void 0 === t.layers
                    ? {
                          sdk: o,
                          collectors: (function () {
                              let t = {};
                              for (let e of V) t[e] = tn(e, void 0, !0);
                              return t;
                          })(),
                      }
                    : void 0 !== t.collectors
                      ? {
                            sdk: o,
                            collectors: (function (t) {
                                let e = {};
                                for (let n of V) {
                                    let i = t[n];
                                    e[n] = tn(n, i, i?.enabled ?? !1);
                                }
                                return e;
                            })(t.collectors),
                        }
                      : {
                            sdk: o,
                            collectors: (function (t) {
                                let e = {};
                                for (let n of V) e[n] = tn(n, void 0, t[K[n].layer] ?? !1);
                                return e;
                            })(t.layers),
                        };
            })(t);
            if (!e) return (this.It = tt), tt;
            i.DEBUG = e.sdk.DEBUG;
            let n = await tY(e, { getProfileId: () => null });
            return "collection-disabled" === n.status
                ? (i.fatal("warn", "setup()", "Collection is disabled for the provided API Key."), (this.It = Q), Q)
                : "init-failed" === n.status
                  ? ((this.It = tt), tt)
                  : ((this._t = n.managers), (this.It = J), !1 !== t.autostart ? this.start() : J);
        } catch (t) {
            return i.warn("setup()", "failed:", t), (this.It = tt), tt;
        }
    }
    async start() {
        if (this.It === W)
            return i.warn("start()", "start() requires a prior successful setup() \u2014 ignoring."), this.It;
        if (this.It !== J)
            return i.fatal("warn", "start()", "TRI is either already started or isn't ready \u2014 ignoring."), this.It;
        this.It = "starting";
        let t = ++this.Tt;
        return await this.v(t), this.It;
    }
    async stop() {
        i.warn("stop()", "called");
        let t = this._t;
        return t
            ? (++this.Tt,
              t.lifecycleManager.stop(),
              t.collectorManager.stop(),
              t.tabManager.stop(),
              t.eventReportManager.stop(),
              (this.It = J),
              this.xt(t))
            : Promise.resolve(this.It);
    }
    async reset() {
        let t = this.stop();
        return (this.It = W), (this._t = null), t.then(() => this.It);
    }
    async xt(t) {
        var e;
        let n, i;
        return (
            await ((e = Promise.resolve(t.transportManager.stop())),
            (n = null),
            (i = new Promise((t) => {
                n = d(t, 2e3);
            })),
            Promise.race([e.finally(() => p(n)), i])),
            await t.activityManager.stop(),
            this.It
        );
    }
    async v(t) {
        let e = this._t;
        if (e) {
            try {
                if (
                    (await e.activityManager.start(),
                    t !== this.Tt || (e.transportManager.start(), await e.tabManager.start(), t !== this.Tt))
                )
                    return;
                e.lifecycleManager.start(), e.collectorManager.autocapture();
            } catch (e) {
                i.warn("start()", "failed during monitoring start:", e), t === this.Tt && (this.It = J);
                return;
            }
            t === this.Tt && (this.It = Z);
        }
    }
    async linkInterview(t) {
        if (this.It !== Z || !this._t)
            return i.warn("linkInterview()", "linkInterview() called before start() completed \u2014 ignoring."), !1;
        if (!t) return i.warn("linkInterview()", "linkInterview() called without sessionToken \u2014 ignoring."), !1;
        try {
            return (await this._t.falconServiceManager.api.linkInterview(t)).ok;
        } catch (t) {
            return i.warn("linkInterview()", "failed:", t), !1;
        }
    }
};
async function tV(t, e) {
    let n = e?.apiURL ?? "https://falcon-ingest-k8s.stage.incodetest.com",
        i = e?.timeout ?? 1e4,
        r = new AbortController(),
        o = null,
        a = !1,
        s = () => {};
    i &&
        (o = d(() => {
            (a = !0), r.abort();
        }, i));
    let l = e?.signal;
    if (l)
        if (l.aborted) r.abort();
        else {
            let t = () => r.abort();
            l.addEventListener("abort", t, { once: !0 }), (s = () => l.removeEventListener("abort", t));
        }
    try {
        let e = await fetch(`${n}/api/v1/sdk/init`, {
            method: "POST",
            headers: { "content-type": "application/json", "x-api-key": t, "x-api-version": "1.0" },
            signal: r.signal,
        });
        if (!e.ok) {
            let t = e.statusText;
            try {
                let n = await e.json();
                n.errorMessage && (t = n.errorMessage);
            } catch {}
            return {
                token: null,
                expiresAt: null,
                tokenType: null,
                eventsCollectionEnabled: !1,
                error: { status: e.status, message: t },
            };
        }
        let i = await e.json();
        return {
            token: i.token,
            expiresAt: i.expiresAt,
            tokenType: i.tokenType,
            eventsCollectionEnabled: !0,
            error: null,
        };
    } catch (t) {
        throw Error((a ? "[TRI] createSession timed out" : "[TRI] Failed to create session:") + " " + t.message);
    } finally {
        p(o), s();
    }
}
tK.i = null;
let tF = tK.instance;
