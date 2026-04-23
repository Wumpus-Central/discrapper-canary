"use strict";
r.d(t, { t: () => G });
var n,
    a,
    s,
    i = [],
    o = "ResizeObserver loop completed with undelivered notifications.",
    l = function () {
        var e;
        "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: o }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = o)),
            window.dispatchEvent(e);
    };
((n = a || (a = {})).BORDER_BOX = "border-box"),
    (n.CONTENT_BOX = "content-box"),
    (n.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
var u = (function () {
        function e(e, t, r, n) {
            return (
                (this.x = e),
                (this.y = t),
                (this.width = r),
                (this.height = n),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                Object.freeze(this)
            );
        }
        return (
            (e.prototype.toJSON = function () {
                return {
                    x: this.x,
                    y: this.y,
                    top: this.top,
                    right: this.right,
                    bottom: this.bottom,
                    left: this.left,
                    width: this.width,
                    height: this.height,
                };
            }),
            (e.fromRect = function (t) {
                return new e(t.x, t.y, t.width, t.height);
            }),
            e
        );
    })(),
    c = function (e) {
        return e instanceof SVGElement && "getBBox" in e;
    },
    d = function (e) {
        if (c(e)) {
            var t = e.getBBox(),
                r = t.width,
                n = t.height;
            return !r && !n;
        }
        var a = e.offsetWidth,
            s = e.offsetHeight;
        return !(a || s || e.getClientRects().length);
    },
    f = function (e) {
        var t,
            r = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView;
        return !!(r && e instanceof r.Element);
    },
    p = function (e) {
        switch (e.tagName) {
            case "INPUT":
                if ("image" !== e.type) break;
            case "VIDEO":
            case "AUDIO":
            case "EMBED":
            case "OBJECT":
            case "CANVAS":
            case "IFRAME":
            case "IMG":
                return !0;
        }
        return !1;
    },
    h = "u" > typeof window ? window : {},
    m = new WeakMap(),
    _ = /auto|scroll/,
    g = /^tb|vertical/,
    v = /msie|trident/i.test(h.navigator && h.navigator.userAgent),
    b = function (e) {
        return parseFloat(e || "0");
    },
    y = function (e, t, r) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            Object.freeze({ inlineSize: (r ? t : e) || 0, blockSize: (r ? e : t) || 0 })
        );
    },
    E = Object.freeze({
        devicePixelContentBoxSize: y(),
        borderBoxSize: y(),
        contentBoxSize: y(),
        contentRect: new u(0, 0, 0, 0),
    }),
    S = function (e, t) {
        if ((void 0 === t && (t = !1), m.has(e) && !t)) return m.get(e);
        if (d(e)) return m.set(e, E), E;
        var r = getComputedStyle(e),
            n = c(e) && e.ownerSVGElement && e.getBBox(),
            a = !v && "border-box" === r.boxSizing,
            s = g.test(r.writingMode || ""),
            i = !n && _.test(r.overflowY || ""),
            o = !n && _.test(r.overflowX || ""),
            l = n ? 0 : b(r.paddingTop),
            f = n ? 0 : b(r.paddingRight),
            p = n ? 0 : b(r.paddingBottom),
            h = n ? 0 : b(r.paddingLeft),
            S = n ? 0 : b(r.borderTopWidth),
            T = n ? 0 : b(r.borderRightWidth),
            x = n ? 0 : b(r.borderBottomWidth),
            w = n ? 0 : b(r.borderLeftWidth),
            C = h + f,
            D = l + p,
            O = w + T,
            A = S + x,
            M = o ? e.offsetHeight - A - e.clientHeight : 0,
            R = i ? e.offsetWidth - O - e.clientWidth : 0,
            k = n ? n.width : b(r.width) - (a ? C + O : 0) - R,
            N = n ? n.height : b(r.height) - (a ? D + A : 0) - M,
            L = k + C + R + O,
            I = N + D + M + A,
            P = Object.freeze({
                devicePixelContentBoxSize: y(Math.round(k * devicePixelRatio), Math.round(N * devicePixelRatio), s),
                borderBoxSize: y(L, I, s),
                contentBoxSize: y(k, N, s),
                contentRect: new u(h, l, k, N),
            });
        return m.set(e, P), P;
    },
    T = function (e, t, r) {
        var n = S(e, r),
            s = n.borderBoxSize,
            i = n.contentBoxSize,
            o = n.devicePixelContentBoxSize;
        switch (t) {
            case a.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case a.BORDER_BOX:
                return s;
            default:
                return i;
        }
    },
    x = function (e) {
        var t = S(e);
        (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = [t.borderBoxSize]),
            (this.contentBoxSize = [t.contentBoxSize]),
            (this.devicePixelContentBoxSize = [t.devicePixelContentBoxSize]);
    },
    w = function (e) {
        if (d(e)) return 1 / 0;
        for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
        return t;
    },
    C = function () {
        var e = 1 / 0,
            t = [];
        i.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
                var n = [];
                r.activeTargets.forEach(function (t) {
                    var r = new x(t.target),
                        a = w(t.target);
                    n.push(r), (t.lastReportedSize = T(t.target, t.observedBox)), a < e && (e = a);
                }),
                    t.push(function () {
                        r.callback.call(r.observer, n, r.observer);
                    }),
                    r.activeTargets.splice(0, r.activeTargets.length);
            }
        });
        for (var r = 0; r < t.length; r++) (0, t[r])();
        return e;
    },
    D = function (e) {
        i.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (r) {
                    r.isActive() && (w(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r));
                });
        });
    },
    O = function () {
        var e = 0;
        for (
            D(0);
            i.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            D((e = C()));
        return (
            i.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && l(),
            e > 0
        );
    },
    A = [],
    M = function (e) {
        if (!s) {
            var t = 0,
                r = document.createTextNode("");
            new MutationObserver(function () {
                return A.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(r, { characterData: !0 }),
                (s = function () {
                    r.textContent = "" + (t ? t-- : t++);
                });
        }
        A.push(e), s();
    },
    R = function (e) {
        M(function () {
            requestAnimationFrame(e);
        });
    },
    k = 0,
    N = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    L = [
        "resize",
        "load",
        "transitionend",
        "animationend",
        "animationstart",
        "animationiteration",
        "keyup",
        "keydown",
        "mouseup",
        "mousedown",
        "mouseover",
        "mouseout",
        "blur",
        "focus",
    ],
    I = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    P = !1,
    F = new ((function () {
        function e() {
            var e = this;
            (this.stopped = !0),
                (this.listener = function () {
                    return e.schedule();
                });
        }
        return (
            (e.prototype.run = function (e) {
                var t = this;
                if ((void 0 === e && (e = 250), !P)) {
                    P = !0;
                    var r = I(e);
                    R(function () {
                        var n = !1;
                        try {
                            n = O();
                        } finally {
                            if (((P = !1), (e = r - I()), !k)) return;
                            n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                        }
                    });
                }
            }),
            (e.prototype.schedule = function () {
                this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
                var e = this,
                    t = function () {
                        return e.observer && e.observer.observe(document.body, N);
                    };
                document.body ? t() : h.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    L.forEach(function (t) {
                        return h.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    L.forEach(function (t) {
                        return h.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    B = function (e) {
        !k && e > 0 && F.start(), (k += e) || F.stop();
    },
    Y = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || a.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = T(this.target, this.observedBox, !0);
                return (
                    c((e = this.target)) ||
                        p(e) ||
                        "inline" !== getComputedStyle(e).display ||
                        (this.lastReportedSize = t),
                    this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                );
            }),
            e
        );
    })(),
    U = function (e, t) {
        (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
    },
    j = new WeakMap(),
    V = function (e, t) {
        for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
        return -1;
    },
    H = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var r = new U(e, t);
                j.set(e, r);
            }),
            (e.observe = function (e, t, r) {
                var n = j.get(e),
                    a = 0 === n.observationTargets.length;
                0 > V(n.observationTargets, t) &&
                    (a && i.push(n), n.observationTargets.push(new Y(t, r && r.box)), B(1), F.schedule());
            }),
            (e.unobserve = function (e, t) {
                var r = j.get(e),
                    n = V(r.observationTargets, t),
                    a = 1 === r.observationTargets.length;
                n >= 0 && (a && i.splice(i.indexOf(r), 1), r.observationTargets.splice(n, 1), B(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    r = j.get(e);
                r.observationTargets.slice().forEach(function (r) {
                    return t.unobserve(e, r.target);
                }),
                    r.activeTargets.splice(0, r.activeTargets.length);
            }),
            e
        );
    })(),
    G = (function () {
        function e(e) {
            if (0 == arguments.length)
                throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if ("function" != typeof e)
                throw TypeError(
                    "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
                );
            H.connect(this, e);
        }
        return (
            (e.prototype.observe = function (e, t) {
                if (0 == arguments.length)
                    throw TypeError(
                        "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
                    );
                if (!f(e))
                    throw TypeError(
                        "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
                    );
                H.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
                if (0 == arguments.length)
                    throw TypeError(
                        "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
                    );
                if (!f(e))
                    throw TypeError(
                        "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
                    );
                H.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
                H.disconnect(this);
            }),
            (e.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
            }),
            e
        );
    })();
