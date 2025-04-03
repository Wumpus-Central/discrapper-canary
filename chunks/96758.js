var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = n(512722),
    o = n(706057),
    a = n(622865),
    s = n(295145),
    l = n(827603),
    c = n(689111),
    u = n(719375),
    d = n(6327),
    f = n(716099),
    _ = n(344550);
n(73041);
var p = n(853897),
    h = n(371597),
    m = n(159966),
    g = function (e, t, n) {
        if (e instanceof s) {
            var i = r({}, t),
                o = r({}, t);
            for (var a in t) {
                var l = t[a],
                    c = l.x,
                    u = l.y;
                void 0 !== c && void 0 !== u && ((i[a] = c), (o[a] = u));
            }
            return y([n(e.x, i), n(e.y, o)], { stopTogether: !1 });
        }
        return null;
    },
    E = function e(t, n) {
        return (
            g(t, n, e) || {
                start: function (e) {
                    var r = t,
                        i = n;
                    r.stopTracking(), n.toValue instanceof o ? r.track(new f(r, n.toValue, p, i, e)) : r.animate(new p(i), e);
                },
                stop: function () {
                    t.stopAnimation();
                }
            }
        );
    },
    b = function (e) {
        var t = 0;
        return {
            start: function (n) {
                var r = function r(i) {
                    if (!i.finished || ++t === e.length) {
                        n && n(i);
                        return;
                    }
                    e[t].start(r);
                };
                0 === e.length ? n && n({ finished: !0 }) : e[t].start(r);
            },
            stop: function () {
                t < e.length && e[t].stop();
            }
        };
    },
    y = function (e, t) {
        var n = 0,
            r = {},
            i = !(t && !1 === t.stopTogether),
            o = {
                start: function (t) {
                    if (n === e.length) {
                        t && t({ finished: !0 });
                        return;
                    }
                    e.forEach(function (a, s) {
                        var l = function (a) {
                            if (((r[s] = !0), ++n === e.length)) {
                                (n = 0), t && t(a);
                                return;
                            }
                            !a.finished && i && o.stop();
                        };
                        a ? a.start(l) : l({ finished: !0 });
                    });
                },
                stop: function () {
                    e.forEach(function (e, t) {
                        r[t] || e.stop(), (r[t] = !0);
                    });
                }
            };
        return o;
    },
    v = function (e) {
        return E(new a(0), {
            toValue: 0,
            delay: e,
            duration: 0
        });
    },
    O = function (e, t) {
        return y(
            t.map(function (t, n) {
                return b([v(e * n), t]);
            })
        );
    },
    I = function (e, t) {
        return function () {
            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            var s = function e(t, n, r) {
                if ('number' == typeof n) {
                    i(t instanceof a, 'Bad mapping of type ' + typeof t + ' for key ' + r + ', event value must map to AnimatedValue'), t.setValue(n);
                    return;
                }
                for (var r in (i('object' == typeof t, 'Bad mapping of type ' + typeof t + ' for key ' + r), i('object' == typeof n, 'Bad event of type ' + typeof n + ' for key ' + r), t)) e(t[r], n[r], r);
            };
            e.forEach(function (e, t) {
                s(e, r[t], 'arg' + t);
            }),
                t && t.listener && t.listener.apply(null, r);
        };
    };
e.exports = {
    Value: a,
    ValueXY: s,
    decay: function e(t, n) {
        return (
            g(t, n, e) || {
                start: function (e) {
                    var r = t,
                        i = n;
                    r.stopTracking(), r.animate(new h(i), e);
                },
                stop: function () {
                    t.stopAnimation();
                }
            }
        );
    },
    timing: E,
    spring: function e(t, n) {
        return (
            g(t, n, e) || {
                start: function (e) {
                    var r = t,
                        i = n;
                    r.stopTracking(), n.toValue instanceof o ? r.track(new f(r, n.toValue, m, i, e)) : r.animate(new m(i), e);
                },
                stop: function () {
                    t.stopAnimation();
                }
            }
        );
    },
    add: function (e, t) {
        return new l(e, t);
    },
    multiply: function (e, t) {
        return new c(e, t);
    },
    modulo: function (e, t) {
        return new u(e, t);
    },
    template: function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new d(e, n);
    },
    delay: v,
    sequence: b,
    parallel: y,
    stagger: O,
    event: I,
    isAnimated: _,
    createAnimatedComponent: n(136877),
    inject: {
        ApplyAnimatedValues: n(879643).inject,
        InteractionManager: n(622690).inject,
        FlattenStyle: n(27065).inject,
        RequestAnimationFrame: n(753073).inject,
        CancelAnimationFrame: n(847028).inject
    },
    __PropsOnlyForTests: n(758772)
};
