"use strict";
n.d(t, { tb: () => K });
var i,
    r,
    s,
    a = [],
    o = "ResizeObserver loop completed with undelivered notifications.",
    l = function () {
        var e;
        "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: o }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = o)),
            window.dispatchEvent(e);
    };
((i = r || (r = {})).BORDER_BOX = "border-box"),
    (i.CONTENT_BOX = "content-box"),
    (i.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
var u = function (e) {
        return Object.freeze(e);
    },
    d = function (e, t) {
        (this.inlineSize = e), (this.blockSize = t), u(this);
    },
    c = (function () {
        function e(e, t, n, i) {
            return (
                (this.x = e),
                (this.y = t),
                (this.width = n),
                (this.height = i),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                u(this)
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
    _ = function (e) {
        return e instanceof SVGElement && "getBBox" in e;
    },
    h = function (e) {
        if (_(e)) {
            var t = e.getBBox(),
                n = t.width,
                i = t.height;
            return !n && !i;
        }
        var r = e.offsetWidth,
            s = e.offsetHeight;
        return !(r || s || e.getClientRects().length);
    },
    f = function (e) {
        if (e instanceof Element) return !0;
        var t,
            n = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView;
        return !!(n && e instanceof n.Element);
    },
    E = function (e) {
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
    p = "u" > typeof window ? window : {},
    m = new WeakMap(),
    g = /auto|scroll/,
    A = /^tb|vertical/,
    I = /msie|trident/i.test(p.navigator && p.navigator.userAgent),
    T = function (e) {
        return parseFloat(e || "0");
    },
    S = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new d((n ? t : e) || 0, (n ? e : t) || 0)
        );
    },
    N = u({ devicePixelContentBoxSize: S(), borderBoxSize: S(), contentBoxSize: S(), contentRect: new c(0, 0, 0, 0) }),
    C = function (e, t) {
        if ((void 0 === t && (t = !1), m.has(e) && !t)) return m.get(e);
        if (h(e)) return m.set(e, N), N;
        var n = getComputedStyle(e),
            i = _(e) && e.ownerSVGElement && e.getBBox(),
            r = !I && "border-box" === n.boxSizing,
            s = A.test(n.writingMode || ""),
            a = !i && g.test(n.overflowY || ""),
            o = !i && g.test(n.overflowX || ""),
            l = i ? 0 : T(n.paddingTop),
            d = i ? 0 : T(n.paddingRight),
            f = i ? 0 : T(n.paddingBottom),
            E = i ? 0 : T(n.paddingLeft),
            p = i ? 0 : T(n.borderTopWidth),
            C = i ? 0 : T(n.borderRightWidth),
            y = i ? 0 : T(n.borderBottomWidth),
            v = i ? 0 : T(n.borderLeftWidth),
            R = E + d,
            O = l + f,
            b = v + C,
            L = p + y,
            D = o ? e.offsetHeight - L - e.clientHeight : 0,
            P = a ? e.offsetWidth - b - e.clientWidth : 0,
            w = i ? i.width : T(n.width) - (r ? R + b : 0) - P,
            M = i ? i.height : T(n.height) - (r ? O + L : 0) - D,
            x = w + R + P + b,
            U = M + O + D + L,
            k = u({
                devicePixelContentBoxSize: S(Math.round(w * devicePixelRatio), Math.round(M * devicePixelRatio), s),
                borderBoxSize: S(x, U, s),
                contentBoxSize: S(w, M, s),
                contentRect: new c(E, l, w, M),
            });
        return m.set(e, k), k;
    },
    y = function (e, t, n) {
        var i = C(e, n),
            s = i.borderBoxSize,
            a = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
        switch (t) {
            case r.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case r.BORDER_BOX:
                return s;
            default:
                return a;
        }
    },
    v = function (e) {
        var t = C(e);
        (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = u([t.borderBoxSize])),
            (this.contentBoxSize = u([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = u([t.devicePixelContentBoxSize]));
    },
    R = function (e) {
        if (h(e)) return 1 / 0;
        for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
        return t;
    },
    O = function () {
        var e = 1 / 0,
            t = [];
        a.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var i = [];
                n.activeTargets.forEach(function (t) {
                    var n = new v(t.target),
                        r = R(t.target);
                    i.push(n), (t.lastReportedSize = y(t.target, t.observedBox)), r < e && (e = r);
                }),
                    t.push(function () {
                        n.callback.call(n.observer, i, n.observer);
                    }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }
        });
        for (var n = 0; n < t.length; n++) (0, t[n])();
        return e;
    },
    b = function (e) {
        a.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (n) {
                    n.isActive() && (R(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
                });
        });
    },
    L = function () {
        var e = 0;
        for (
            b(0);
            a.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            b((e = O()));
        return (
            a.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && l(),
            e > 0
        );
    },
    D = [],
    P = function (e) {
        if (!s) {
            var t = 0,
                n = document.createTextNode("");
            new MutationObserver(function () {
                return D.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(n, { characterData: !0 }),
                (s = function () {
                    n.textContent = "".concat(t ? t-- : t++);
                });
        }
        D.push(e), s();
    },
    w = function (e) {
        P(function () {
            requestAnimationFrame(e);
        });
    },
    M = 0,
    x = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    U = [
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
    k = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    G = !1,
    V = new ((function () {
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
                if ((void 0 === e && (e = 250), !G)) {
                    G = !0;
                    var n = k(e);
                    w(function () {
                        var i = !1;
                        try {
                            i = L();
                        } finally {
                            if (((G = !1), (e = n - k()), !M)) return;
                            i ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
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
                        return e.observer && e.observer.observe(document.body, x);
                    };
                document.body ? t() : p.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    U.forEach(function (t) {
                        return p.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    U.forEach(function (t) {
                        return p.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    F = function (e) {
        !M && e > 0 && V.start(), (M += e) || V.stop();
    },
    B = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || r.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = y(this.target, this.observedBox, !0);
                return (
                    _((e = this.target)) ||
                        E(e) ||
                        "inline" !== getComputedStyle(e).display ||
                        (this.lastReportedSize = t),
                    this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                );
            }),
            e
        );
    })(),
    j = function (e, t) {
        (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
    },
    H = new WeakMap(),
    W = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    Y = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new j(e, t);
                H.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                var i = H.get(e),
                    r = 0 === i.observationTargets.length;
                0 > W(i.observationTargets, t) &&
                    (r && a.push(i), i.observationTargets.push(new B(t, n && n.box)), F(1), V.schedule());
            }),
            (e.unobserve = function (e, t) {
                var n = H.get(e),
                    i = W(n.observationTargets, t),
                    r = 1 === n.observationTargets.length;
                i >= 0 && (r && a.splice(a.indexOf(n), 1), n.observationTargets.splice(i, 1), F(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    n = H.get(e);
                n.observationTargets.slice().forEach(function (n) {
                    return t.unobserve(e, n.target);
                }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
        );
    })(),
    K = (function () {
        function e(e) {
            if (0 == arguments.length)
                throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if ("function" != typeof e)
                throw TypeError(
                    "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
                );
            Y.connect(this, e);
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
                Y.observe(this, e, t);
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
                Y.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
                Y.disconnect(this);
            }),
            (e.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
            }),
            e
        );
    })();
