"use strict";
r.d(t, { t: () => W });
var n,
    s,
    a,
    o = [],
    i = "ResizeObserver loop completed with undelivered notifications.",
    u = function () {
        var e;
        "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: i }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = i)),
            window.dispatchEvent(e);
    };
((n = s || (s = {})).BORDER_BOX = "border-box"),
    (n.CONTENT_BOX = "content-box"),
    (n.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
var c = (function () {
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
    l = function (e) {
        return e instanceof SVGElement && "getBBox" in e;
    },
    d = function (e) {
        if (l(e)) {
            var t = e.getBBox(),
                r = t.width,
                n = t.height;
            return !r && !n;
        }
        var s = e.offsetWidth,
            a = e.offsetHeight;
        return !(s || a || e.getClientRects().length);
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
    v = /auto|scroll/,
    g = /^tb|vertical/,
    y = /msie|trident/i.test(h.navigator && h.navigator.userAgent),
    b = function (e) {
        return parseFloat(e || "0");
    },
    _ = function (e, t, r) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            Object.freeze({ inlineSize: (r ? t : e) || 0, blockSize: (r ? e : t) || 0 })
        );
    },
    x = Object.freeze({
        devicePixelContentBoxSize: _(),
        borderBoxSize: _(),
        contentBoxSize: _(),
        contentRect: new c(0, 0, 0, 0),
    }),
    w = function (e, t) {
        if ((void 0 === t && (t = !1), m.has(e) && !t)) return m.get(e);
        if (d(e)) return m.set(e, x), x;
        var r = getComputedStyle(e),
            n = l(e) && e.ownerSVGElement && e.getBBox(),
            s = !y && "border-box" === r.boxSizing,
            a = g.test(r.writingMode || ""),
            o = !n && v.test(r.overflowY || ""),
            i = !n && v.test(r.overflowX || ""),
            u = n ? 0 : b(r.paddingTop),
            f = n ? 0 : b(r.paddingRight),
            p = n ? 0 : b(r.paddingBottom),
            h = n ? 0 : b(r.paddingLeft),
            w = n ? 0 : b(r.borderTopWidth),
            k = n ? 0 : b(r.borderRightWidth),
            M = n ? 0 : b(r.borderBottomWidth),
            S = n ? 0 : b(r.borderLeftWidth),
            L = h + f,
            T = u + p,
            E = S + k,
            D = w + M,
            C = i ? e.offsetHeight - D - e.clientHeight : 0,
            O = o ? e.offsetWidth - E - e.clientWidth : 0,
            P = n ? n.width : b(r.width) - (s ? L + E : 0) - O,
            A = n ? n.height : b(r.height) - (s ? T + D : 0) - C,
            j = P + L + O + E,
            R = A + T + C + D,
            I = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(P * devicePixelRatio), Math.round(A * devicePixelRatio), a),
                borderBoxSize: _(j, R, a),
                contentBoxSize: _(P, A, a),
                contentRect: new c(h, u, P, A),
            });
        return m.set(e, I), I;
    },
    k = function (e, t, r) {
        var n = w(e, r),
            a = n.borderBoxSize,
            o = n.contentBoxSize,
            i = n.devicePixelContentBoxSize;
        switch (t) {
            case s.DEVICE_PIXEL_CONTENT_BOX:
                return i;
            case s.BORDER_BOX:
                return a;
            default:
                return o;
        }
    },
    M = function (e) {
        var t = w(e);
        (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = [t.borderBoxSize]),
            (this.contentBoxSize = [t.contentBoxSize]),
            (this.devicePixelContentBoxSize = [t.devicePixelContentBoxSize]);
    },
    S = function (e) {
        if (d(e)) return 1 / 0;
        for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
        return t;
    },
    L = function () {
        var e = 1 / 0,
            t = [];
        o.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
                var n = [];
                r.activeTargets.forEach(function (t) {
                    var r = new M(t.target),
                        s = S(t.target);
                    n.push(r), (t.lastReportedSize = k(t.target, t.observedBox)), s < e && (e = s);
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
    T = function (e) {
        o.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (r) {
                    r.isActive() && (S(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r));
                });
        });
    },
    E = function () {
        var e = 0;
        for (
            T(0);
            o.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            T((e = L()));
        return (
            o.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && u(),
            e > 0
        );
    },
    D = [],
    C = function (e) {
        if (!a) {
            var t = 0,
                r = document.createTextNode("");
            new MutationObserver(function () {
                return D.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(r, { characterData: !0 }),
                (a = function () {
                    r.textContent = "" + (t ? t-- : t++);
                });
        }
        D.push(e), a();
    },
    O = function (e) {
        C(function () {
            requestAnimationFrame(e);
        });
    },
    P = 0,
    A = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    j = [
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
    R = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    I = !1,
    Y = new ((function () {
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
                if ((void 0 === e && (e = 250), !I)) {
                    I = !0;
                    var r = R(e);
                    O(function () {
                        var n = !1;
                        try {
                            n = E();
                        } finally {
                            if (((I = !1), (e = r - R()), !P)) return;
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
                        return e.observer && e.observer.observe(document.body, A);
                    };
                document.body ? t() : h.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    j.forEach(function (t) {
                        return h.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    j.forEach(function (t) {
                        return h.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    N = function (e) {
        !P && e > 0 && Y.start(), (P += e) || Y.stop();
    },
    F = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || s.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = k(this.target, this.observedBox, !0);
                return (
                    l((e = this.target)) ||
                        p(e) ||
                        "inline" !== getComputedStyle(e).display ||
                        (this.lastReportedSize = t),
                    this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                );
            }),
            e
        );
    })(),
    H = function (e, t) {
        (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
    },
    z = new WeakMap(),
    B = function (e, t) {
        for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
        return -1;
    },
    U = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var r = new H(e, t);
                z.set(e, r);
            }),
            (e.observe = function (e, t, r) {
                var n = z.get(e),
                    s = 0 === n.observationTargets.length;
                0 > B(n.observationTargets, t) &&
                    (s && o.push(n), n.observationTargets.push(new F(t, r && r.box)), N(1), Y.schedule());
            }),
            (e.unobserve = function (e, t) {
                var r = z.get(e),
                    n = B(r.observationTargets, t),
                    s = 1 === r.observationTargets.length;
                n >= 0 && (s && o.splice(o.indexOf(r), 1), r.observationTargets.splice(n, 1), N(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    r = z.get(e);
                r.observationTargets.slice().forEach(function (r) {
                    return t.unobserve(e, r.target);
                }),
                    r.activeTargets.splice(0, r.activeTargets.length);
            }),
            e
        );
    })(),
    W = (function () {
        function e(e) {
            if (0 == arguments.length)
                throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if ("function" != typeof e)
                throw TypeError(
                    "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
                );
            U.connect(this, e);
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
                U.observe(this, e, t);
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
                U.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
                U.disconnect(this);
            }),
            (e.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
            }),
            e
        );
    })();
