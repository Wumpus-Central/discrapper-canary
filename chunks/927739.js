"use strict";
var n =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    o = r(284009),
    i = r(562210),
    a = r(498121),
    s = r(460250),
    l = r(71038),
    u = r(762116),
    c = r(779288),
    f = r(841532),
    p = r(872511),
    d = r(933786);
r(150433);
var h = r(452767),
    m = r(527851),
    v = r(222574),
    y = function (e, t, r) {
        if (e instanceof s) {
            var o = n({}, t),
                i = n({}, t);
            for (var a in t) {
                var l = t[a],
                    u = l.x,
                    c = l.y;
                void 0 !== u && void 0 !== c && ((o[a] = u), (i[a] = c));
            }
            return w([r(e.x, o), r(e.y, i)], { stopTogether: !1 });
        }
        return null;
    },
    g = function e(t, r) {
        return (
            y(t, r, e) || {
                start: function (e) {
                    t.stopTracking(),
                        r.toValue instanceof i ? t.track(new p(t, r.toValue, h, r, e)) : t.animate(new h(r), e);
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
            start: function (r) {
                0 === e.length
                    ? r && r({ finished: !0 })
                    : e[t].start(function n(o) {
                          if (!o.finished || ++t === e.length) {
                              r && r(o);
                              return;
                          }
                          e[t].start(n);
                      });
            },
            stop: function () {
                t < e.length && e[t].stop();
            },
        };
    },
    w = function (e, t) {
        var r = 0,
            n = {},
            o = !(t && !1 === t.stopTogether),
            i = {
                start: function (t) {
                    if (r === e.length) {
                        t && t({ finished: !0 });
                        return;
                    }
                    e.forEach(function (a, s) {
                        var l = function (a) {
                            if (((n[s] = !0), ++r === e.length)) {
                                (r = 0), t && t(a);
                                return;
                            }
                            !a.finished && o && i.stop();
                        };
                        a ? a.start(l) : l({ finished: !0 });
                    });
                },
                stop: function () {
                    e.forEach(function (e, t) {
                        n[t] || e.stop(), (n[t] = !0);
                    });
                },
            };
        return i;
    },
    _ = function (e) {
        return g(new a(0), { toValue: 0, delay: e, duration: 0 });
    };
e.exports = {
    Value: a,
    ValueXY: s,
    decay: function e(t, r) {
        return (
            y(t, r, e) || {
                start: function (e) {
                    t.stopTracking(), t.animate(new m(r), e);
                },
                stop: function () {
                    t.stopAnimation();
                },
            }
        );
    },
    timing: g,
    spring: function e(t, r) {
        return (
            y(t, r, e) || {
                start: function (e) {
                    t.stopTracking(),
                        r.toValue instanceof i ? t.track(new p(t, r.toValue, v, r, e)) : t.animate(new v(r), e);
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
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return new f(e, r);
    },
    delay: _,
    sequence: b,
    parallel: w,
    stagger: function (e, t) {
        return w(
            t.map(function (t, r) {
                return b([_(e * r), t]);
            }),
        );
    },
    event: function (e, t) {
        return function () {
            for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
            var s = function e(t, r, n) {
                if ("number" == typeof r) {
                    o(
                        t instanceof a,
                        "Bad mapping of type " + typeof t + " for key " + n + ", event value must map to AnimatedValue",
                    ),
                        t.setValue(r);
                    return;
                }
                for (var n in (o("object" == typeof t, "Bad mapping of type " + typeof t + " for key " + n),
                o("object" == typeof r, "Bad event of type " + typeof r + " for key " + n),
                t))
                    e(t[n], r[n], n);
            };
            e.forEach(function (e, t) {
                s(e, n[t], "arg" + t);
            }),
                t && t.listener && t.listener.apply(null, n);
        };
    },
    isAnimated: d,
    createAnimatedComponent: r(626919),
    inject: {
        ApplyAnimatedValues: r(848822).inject,
        InteractionManager: r(667794).inject,
        FlattenStyle: r(764138).inject,
        RequestAnimationFrame: r(151979).inject,
        CancelAnimationFrame: r(934580).inject,
    },
    __PropsOnlyForTests: r(518118),
};
