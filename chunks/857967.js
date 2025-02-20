function r(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(t, '__esModule', { value: !0 });
var i = n(698091),
    o = r(n(21217)),
    a = r(n(719427)),
    s = r(n(271491)),
    l = n(239189),
    c = n(192379),
    u = n(985445),
    d = Symbol.for('Animated:node'),
    f = function (e) {
        return !!e && e[d] === e;
    },
    p = function (e) {
        return e && e[d];
    },
    _ = function (e, t) {
        return i.defineHidden(e, d, t);
    },
    h = function (e) {
        return e && e[d] && e[d].getPayload();
    },
    m = (function () {
        function e() {
            (this.payload = void 0), _(this, this);
        }
        return (
            (e.prototype.getPayload = function () {
                return this.payload || [];
            }),
            e
        );
    })(),
    g = (function (e) {
        function t(t) {
            var n;
            return ((n = e.call(this) || this)._value = t), (n.done = !0), (n.elapsedTime = void 0), (n.lastPosition = void 0), (n.lastVelocity = void 0), (n.v0 = void 0), i.is.num(n._value) && (n.lastPosition = n._value), n;
        }
        o(t, e),
            (t.create = function (e, n) {
                return new t(e);
            });
        var n = t.prototype;
        return (
            (n.getPayload = function () {
                return [this];
            }),
            (n.getValue = function () {
                return this._value;
            }),
            (n.setValue = function (e, t) {
                return i.is.num(e) && ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))), this._value !== e && ((this._value = e), !0);
            }),
            (n.reset = function () {
                var e = this.done;
                (this.done = !1), i.is.num(this._value) && ((this.elapsedTime = 0), (this.lastPosition = this._value), e && (this.lastVelocity = null), (this.v0 = null));
            }),
            t
        );
    })(m),
    E = (function (e) {
        function t(t, n) {
            var r;
            return (
                ((r = e.call(this, 0) || this)._value = void 0),
                (r._string = null),
                (r._toString = void 0),
                (r._toString = i.createInterpolator({
                    output: [t, n]
                })),
                r
            );
        }
        o(t, e),
            (t.create = function (e, n) {
                if ((void 0 === n && (n = e), i.is.str(e) && i.is.str(n))) return new t(e, n);
                throw TypeError('Expected "from" and "to" to be strings');
            });
        var n = t.prototype;
        return (
            (n.getValue = function () {
                var e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }),
            (n.setValue = function (t) {
                if (i.is.num(t)) {
                    if (!e.prototype.setValue.call(this, t)) return !1;
                    this._string = null;
                } else (this._string = t), (this._value = 1);
                return !0;
            }),
            (n.reset = function (t) {
                t &&
                    (this._toString = i.createInterpolator({
                        output: [this.getValue(), t]
                    })),
                    (this._value = 0),
                    e.prototype.reset.call(this);
            }),
            t
        );
    })(g),
    v = { current: null },
    b = (function (e) {
        function t(t) {
            var n;
            return void 0 === t && (t = null), ((n = e.call(this) || this).source = void 0), n.setValue(t), n;
        }
        o(t, e);
        var n = t.prototype;
        return (
            (n.getValue = function (e) {
                if (!this.source) return null;
                var t = {};
                return (
                    i.each(this.source, function (n, r) {
                        if (f(n)) t[r] = n.getValue(e);
                        else {
                            var o = i.getFluidConfig(n);
                            o ? (t[r] = o.get()) : e || (t[r] = n);
                        }
                    }),
                    t
                );
            }),
            (n.setValue = function (e) {
                (this.source = e), (this.payload = this._makePayload(e));
            }),
            (n.reset = function () {
                this.payload &&
                    i.each(this.payload, function (e) {
                        return e.reset();
                    });
            }),
            (n._makePayload = function (e) {
                if (e) {
                    var t = new Set();
                    return i.each(e, this._addToPayload, t), Array.from(t);
                }
            }),
            (n._addToPayload = function (e) {
                var t = this;
                i.getFluidConfig(e) && v.current && v.current.dependencies.add(e);
                var n = h(e);
                n &&
                    i.each(n, function (e) {
                        return t.add(e);
                    });
            }),
            t
        );
    })(m),
    y = (function (e) {
        function t(t, n) {
            var r;
            return ((r = e.call(this, null) || this).source = void 0), e.prototype.setValue.call(a(r), r._makeAnimated(t, n)), r;
        }
        o(t, e),
            (t.create = function (e, n) {
                return new t(e, n);
            });
        var n = t.prototype;
        return (
            (n.getValue = function () {
                return this.source.map(function (e) {
                    return e.getValue();
                });
            }),
            (n.setValue = function (e) {
                var t = this.getPayload();
                e && e.length == t.length
                    ? i.each(t, function (t, n) {
                          return t.setValue(e[n]);
                      })
                    : ((this.source = this._makeAnimated(e)), (this.payload = this._makePayload(this.source)));
            }),
            (n._makeAnimated = function (e, t) {
                return (
                    void 0 === t && (t = e),
                    e
                        ? e.map(function (e, n) {
                              return (i.isAnimatedString(e) ? E : g).create(e, t[n]);
                          })
                        : []
                );
            }),
            t
        );
    })(b),
    O = (function (e) {
        function t(t) {
            var n;
            return ((n = e.call(this, null) || this).update = t), (n.dirty = !1), n;
        }
        o(t, e);
        var n = t.prototype;
        return (
            (n.setValue = function (t, n) {
                if (t) {
                    if (n && ((v.current = n), t.style)) {
                        var r = n.host.createAnimatedStyle;
                        t = s(s({}, t), {}, { style: r(t.style) });
                    }
                    e.prototype.setValue.call(this, t), (v.current = null);
                }
            }),
            (n.onParentChange = function (e) {
                var t = this,
                    n = e.type;
                this.dirty ||
                    'change' !== n ||
                    ((this.dirty = !0),
                    l.frameLoop.onFrame(function () {
                        (t.dirty = !1), t.update();
                    }));
            }),
            t
        );
    })(b),
    S = function (e, t) {
        return c.forwardRef(function (n, r) {
            var o = c.useRef(null),
                a = !i.is.fun(e) || (e.prototype && e.prototype.isReactComponent),
                l = i.useForceUpdate(),
                d = new O(function () {
                    var e = o.current;
                    (!a || e) && !1 === (!!e && t.applyAnimatedValues(e, d.getValue(!0))) && l();
                }),
                f = new Set();
            return (
                d.setValue(n, {
                    dependencies: f,
                    host: t
                }),
                u.useLayoutEffect(function () {
                    return (
                        i.each(f, function (e) {
                            return e.addChild(d);
                        }),
                        function () {
                            return i.each(f, function (e) {
                                return e.removeChild(d);
                            });
                        }
                    );
                }),
                c.createElement(
                    e,
                    s({}, t.getComponentProps(d.getValue()), {
                        ref:
                            a &&
                            function (e) {
                                o.current = I(r, e);
                            }
                    })
                )
            );
        });
    };
function I(e, t) {
    return e && (i.is.fun(e) ? e(t) : (e.current = t)), t;
}
var T = Symbol.for('AnimatedComponent'),
    N = function (e, t) {
        var n = void 0 === t ? {} : t,
            r = n.applyAnimatedValues,
            o =
                void 0 === r
                    ? function () {
                          return !1;
                      }
                    : r,
            a = n.createAnimatedStyle,
            s =
                void 0 === a
                    ? function (e) {
                          return new b(e);
                      }
                    : a,
            l = n.getComponentProps,
            c = {
                applyAnimatedValues: o,
                createAnimatedStyle: s,
                getComponentProps:
                    void 0 === l
                        ? function (e) {
                              return e;
                          }
                        : l
            },
            u = function (e) {
                var t = A(e) || 'Anonymous';
                return ((e = i.is.str(e) ? S(e, c) : e[T] || (e[T] = S(e, c))).displayName = 'Animated(' + t + ')'), e;
            };
        return (
            i.each(e, function (e, t) {
                i.is.str(t) || (t = A(e)), (u[t] = u(e));
            }),
            { animated: u }
        );
    },
    A = function (e) {
        return i.is.str(e) ? e : e && i.is.str(e.displayName) ? e.displayName : (i.is.fun(e) && e.name) || null;
    };
(t.Animated = m), (t.AnimatedArray = y), (t.AnimatedObject = b), (t.AnimatedProps = O), (t.AnimatedString = E), (t.AnimatedValue = g), (t.createHost = N), (t.getAnimated = p), (t.getPayload = h), (t.isAnimated = f), (t.setAnimated = _);
