"use strict";
r.d(t, { t: () => z });
var n,
    i,
    o,
    a = [],
    s = "ResizeObserver loop completed with undelivered notifications.",
    l = function () {
        var e;
        "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: s }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = s)),
            window.dispatchEvent(e);
    };
((n = i || (i = {})).BORDER_BOX = "border-box"),
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
    f = function (e) {
        if (c(e)) {
            var t = e.getBBox(),
                r = t.width,
                n = t.height;
            return !r && !n;
        }
        var i = e.offsetWidth,
            o = e.offsetHeight;
        return !(i || o || e.getClientRects().length);
    },
    d = function (e) {
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
    y = /^tb|vertical/,
    g = /msie|trident/i.test(h.navigator && h.navigator.userAgent),
    b = function (e) {
        return parseFloat(e || "0");
    },
    w = function (e, t, r) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            Object.freeze({ inlineSize: (r ? t : e) || 0, blockSize: (r ? e : t) || 0 })
        );
    },
    _ = Object.freeze({
        devicePixelContentBoxSize: w(),
        borderBoxSize: w(),
        contentBoxSize: w(),
        contentRect: new u(0, 0, 0, 0),
    }),
    S = function (e, t) {
        if ((void 0 === t && (t = !1), m.has(e) && !t)) return m.get(e);
        if (f(e)) return m.set(e, _), _;
        var r = getComputedStyle(e),
            n = c(e) && e.ownerSVGElement && e.getBBox(),
            i = !g && "border-box" === r.boxSizing,
            o = y.test(r.writingMode || ""),
            a = !n && v.test(r.overflowY || ""),
            s = !n && v.test(r.overflowX || ""),
            l = n ? 0 : b(r.paddingTop),
            d = n ? 0 : b(r.paddingRight),
            p = n ? 0 : b(r.paddingBottom),
            h = n ? 0 : b(r.paddingLeft),
            S = n ? 0 : b(r.borderTopWidth),
            x = n ? 0 : b(r.borderRightWidth),
            E = n ? 0 : b(r.borderBottomWidth),
            k = n ? 0 : b(r.borderLeftWidth),
            C = h + d,
            T = l + p,
            M = k + x,
            P = S + E,
            A = s ? e.offsetHeight - P - e.clientHeight : 0,
            I = a ? e.offsetWidth - M - e.clientWidth : 0,
            O = n ? n.width : b(r.width) - (i ? C + M : 0) - I,
            D = n ? n.height : b(r.height) - (i ? T + P : 0) - A,
            R = O + C + I + M,
            L = D + T + A + P,
            F = Object.freeze({
                devicePixelContentBoxSize: w(Math.round(O * devicePixelRatio), Math.round(D * devicePixelRatio), o),
                borderBoxSize: w(R, L, o),
                contentBoxSize: w(O, D, o),
                contentRect: new u(h, l, O, D),
            });
        return m.set(e, F), F;
    },
    x = function (e, t, r) {
        var n = S(e, r),
            o = n.borderBoxSize,
            a = n.contentBoxSize,
            s = n.devicePixelContentBoxSize;
        switch (t) {
            case i.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case i.BORDER_BOX:
                return o;
            default:
                return a;
        }
    },
    E = function (e) {
        var t = S(e);
        (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = [t.borderBoxSize]),
            (this.contentBoxSize = [t.contentBoxSize]),
            (this.devicePixelContentBoxSize = [t.devicePixelContentBoxSize]);
    },
    k = function (e) {
        if (f(e)) return 1 / 0;
        for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
        return t;
    },
    C = function () {
        var e = 1 / 0,
            t = [];
        a.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
                var n = [];
                r.activeTargets.forEach(function (t) {
                    var r = new E(t.target),
                        i = k(t.target);
                    n.push(r), (t.lastReportedSize = x(t.target, t.observedBox)), i < e && (e = i);
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
        a.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (r) {
                    r.isActive() && (k(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r));
                });
        });
    },
    M = function () {
        var e = 0;
        for (
            T(0);
            a.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            T((e = C()));
        return (
            a.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && l(),
            e > 0
        );
    },
    P = [],
    A = function (e) {
        if (!o) {
            var t = 0,
                r = document.createTextNode("");
            new MutationObserver(function () {
                return P.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(r, { characterData: !0 }),
                (o = function () {
                    r.textContent = "" + (t ? t-- : t++);
                });
        }
        P.push(e), o();
    },
    I = function (e) {
        A(function () {
            requestAnimationFrame(e);
        });
    },
    O = 0,
    D = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    R = [
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
    L = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    F = !1,
    N = new ((function () {
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
                if ((void 0 === e && (e = 250), !F)) {
                    F = !0;
                    var r = L(e);
                    I(function () {
                        var n = !1;
                        try {
                            n = M();
                        } finally {
                            if (((F = !1), (e = r - L()), !O)) return;
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
                        return e.observer && e.observer.observe(document.body, D);
                    };
                document.body ? t() : h.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    R.forEach(function (t) {
                        return h.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    R.forEach(function (t) {
                        return h.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    j = function (e) {
        !O && e > 0 && N.start(), (O += e) || N.stop();
    },
    B = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || i.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = x(this.target, this.observedBox, !0);
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
    K = function (e, t) {
        (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
    },
    $ = new WeakMap(),
    V = function (e, t) {
        for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
        return -1;
    },
    U = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var r = new K(e, t);
                $.set(e, r);
            }),
            (e.observe = function (e, t, r) {
                var n = $.get(e),
                    i = 0 === n.observationTargets.length;
                0 > V(n.observationTargets, t) &&
                    (i && a.push(n), n.observationTargets.push(new B(t, r && r.box)), j(1), N.schedule());
            }),
            (e.unobserve = function (e, t) {
                var r = $.get(e),
                    n = V(r.observationTargets, t),
                    i = 1 === r.observationTargets.length;
                n >= 0 && (i && a.splice(a.indexOf(r), 1), r.observationTargets.splice(n, 1), j(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    r = $.get(e);
                r.observationTargets.slice().forEach(function (r) {
                    return t.unobserve(e, r.target);
                }),
                    r.activeTargets.splice(0, r.activeTargets.length);
            }),
            e
        );
    })(),
    z = (function () {
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
                if (!d(e))
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
                if (!d(e))
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
