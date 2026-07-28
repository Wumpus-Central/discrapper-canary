"use strict";
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = n(284009),
    a = n(562210),
    o = n(498121),
    s = n(460250),
    l = n(71038),
    u = n(762116),
    c = n(779288),
    d = n(841532),
    f = n(872511),
    p = n(933786);
n(150433);
var h = n(452767),
    m = n(527851),
    g = n(222574),
    v = function (e, t, n) {
        if (e instanceof s) {
            var i = r({}, t),
                a = r({}, t);
            for (var o in t) {
                var l = t[o],
                    u = l.x,
                    c = l.y;
                void 0 !== u && void 0 !== c && ((i[o] = u), (a[o] = c));
            }
            return _([n(e.x, i), n(e.y, a)], { stopTogether: !1 });
        }
        return null;
    },
    y = function e(t, n) {
        return (
            v(t, n, e) || {
                start: function (e) {
                    t.stopTracking(),
                        n.toValue instanceof a ? t.track(new f(t, n.toValue, h, n, e)) : t.animate(new h(n), e);
                },
                stop: function () {
                    t.stopAnimation();
                },
            }
        );
    },
    b = function (e) {
        var t = 0;
        return {
            start: function (n) {
                0 === e.length
                    ? n && n({ finished: !0 })
                    : e[t].start(function r(i) {
                          if (!i.finished || ++t === e.length) {
                              n && n(i);
                              return;
                          }
                          e[t].start(r);
                      });
            },
            stop: function () {
                t < e.length && e[t].stop();
            },
        };
    },
    _ = function (e, t) {
        var n = 0,
            r = {},
            i = !(t && !1 === t.stopTogether),
            a = {
                start: function (t) {
                    if (n === e.length) {
                        t && t({ finished: !0 });
                        return;
                    }
                    e.forEach(function (o, s) {
                        var l = function (o) {
                            if (((r[s] = !0), ++n === e.length)) {
                                (n = 0), t && t(o);
                                return;
                            }
                            !o.finished && i && a.stop();
                        };
                        o ? o.start(l) : l({ finished: !0 });
                    });
                },
                stop: function () {
                    e.forEach(function (e, t) {
                        r[t] || e.stop(), (r[t] = !0);
                    });
                },
            };
        return a;
    },
    w = function (e) {
        return y(new o(0), { toValue: 0, delay: e, duration: 0 });
    };
e.exports = {
    Value: o,
    ValueXY: s,
    decay: function e(t, n) {
        return (
            v(t, n, e) || {
                start: function (e) {
                    t.stopTracking(), t.animate(new m(n), e);
                },
                stop: function () {
                    t.stopAnimation();
                },
            }
        );
    },
    timing: y,
    spring: function e(t, n) {
        return (
            v(t, n, e) || {
                start: function (e) {
                    t.stopTracking(),
                        n.toValue instanceof a ? t.track(new f(t, n.toValue, g, n, e)) : t.animate(new g(n), e);
                },
                stop: function () {
                    t.stopAnimation();
                },
            }
        );
    },
    add: function (e, t) {
        return new l(e, t);
    },
    multiply: function (e, t) {
        return new u(e, t);
    },
    modulo: function (e, t) {
        return new c(e, t);
    },
    template: function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new d(e, n);
    },
    delay: w,
    sequence: b,
    parallel: _,
    stagger: function (e, t) {
        return _(
            t.map(function (t, n) {
                return b([w(e * n), t]);
            }),
        );
    },
    event: function (e, t) {
        return function () {
            for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            var s = function e(t, n, r) {
                if ("number" == typeof n) {
                    i(
                        t instanceof o,
                        "Bad mapping of type " + typeof t + " for key " + r + ", event value must map to AnimatedValue",
                    ),
                        t.setValue(n);
                    return;
                }
                for (var r in (i("object" == typeof t, "Bad mapping of type " + typeof t + " for key " + r),
                i("object" == typeof n, "Bad event of type " + typeof n + " for key " + r),
                t))
                    e(t[r], n[r], r);
            };
            e.forEach(function (e, t) {
                s(e, r[t], "arg" + t);
            }),
                t && t.listener && t.listener.apply(null, r);
        };
    },
    isAnimated: p,
    createAnimatedComponent: n(626919),
    inject: {
        ApplyAnimatedValues: n(848822).inject,
        InteractionManager: n(667794).inject,
        FlattenStyle: n(764138).inject,
        RequestAnimationFrame: n(151979).inject,
        CancelAnimationFrame: n(934580).inject,
    },
    __PropsOnlyForTests: n(518118),
};
