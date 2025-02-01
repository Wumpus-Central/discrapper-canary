function i(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(t, '__esModule', { value: !0 });
var r = n(698091),
    a = i(n(21217)),
    s = i(n(719427)),
    o = i(n(271491)),
    l = n(239189),
    u = n(192379),
    c = n(985445),
    d = Symbol.for('Animated:node'),
    f = function (e) {
        return !!e && e[d] === e;
    },
    _ = function (e) {
        return e && e[d];
    },
    p = function (e, t) {
        return r.defineHidden(e, d, t);
    },
    h = function (e) {
        return e && e[d] && e[d].getPayload();
    },
    m = (function () {
        function e() {
            (this.payload = void 0), p(this, this);
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
            return ((n = e.call(this) || this)._value = t), (n.done = !0), (n.elapsedTime = void 0), (n.lastPosition = void 0), (n.lastVelocity = void 0), (n.v0 = void 0), r.is.num(n._value) && (n.lastPosition = n._value), n;
        }
        a(t, e),
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
                return r.is.num(e) && ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))), this._value !== e && ((this._value = e), !0);
            }),
            (n.reset = function () {
                var e = this.done;
                (this.done = !1), r.is.num(this._value) && ((this.elapsedTime = 0), (this.lastPosition = this._value), e && (this.lastVelocity = null), (this.v0 = null));
            }),
            t
        );
    })(m),
    E = (function (e) {
        function t(t, n) {
            var i;
            return (
                ((i = e.call(this, 0) || this)._value = void 0),
                (i._string = null),
                (i._toString = void 0),
                (i._toString = r.createInterpolator({
                    output: [t, n]
                })),
                i
            );
        }
        a(t, e),
            (t.create = function (e, n) {
                if ((void 0 === n && (n = e), r.is.str(e) && r.is.str(n))) return new t(e, n);
                throw TypeError('Expected "from" and "to" to be strings');
            });
        var n = t.prototype;
        return (
            (n.getValue = function () {
                var e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }),
            (n.setValue = function (t) {
                if (r.is.num(t)) {
                    if (!e.prototype.setValue.call(this, t)) return !1;
                    this._string = null;
                } else (this._string = t), (this._value = 1);
                return !0;
            }),
            (n.reset = function (t) {
                t &&
                    (this._toString = r.createInterpolator({
                        output: [this.getValue(), t]
                    })),
                    (this._value = 0),
                    e.prototype.reset.call(this);
            }),
            t
        );
    })(g),
    v = { current: null },
    y = (function (e) {
        function t(t) {
            var n;
            return void 0 === t && (t = null), ((n = e.call(this) || this).source = void 0), n.setValue(t), n;
        }
        a(t, e);
        var n = t.prototype;
        return (
            (n.getValue = function (e) {
                if (!this.source) return null;
                var t = {};
                return (
                    r.each(this.source, function (n, i) {
                        if (f(n)) t[i] = n.getValue(e);
                        else {
                            var a = r.getFluidConfig(n);
                            a ? (t[i] = a.get()) : e || (t[i] = n);
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
                    r.each(this.payload, function (e) {
                        return e.reset();
                    });
            }),
            (n._makePayload = function (e) {
                if (e) {
                    var t = new Set();
                    return r.each(e, this._addToPayload, t), Array.from(t);
                }
            }),
            (n._addToPayload = function (e) {
                var t = this;
                r.getFluidConfig(e) && v.current && v.current.dependencies.add(e);
                var n = h(e);
                n &&
                    r.each(n, function (e) {
                        return t.add(e);
                    });
            }),
            t
        );
    })(m),
    I = (function (e) {
        function t(t, n) {
            var i;
            return ((i = e.call(this, null) || this).source = void 0), e.prototype.setValue.call(s(i), i._makeAnimated(t, n)), i;
        }
        a(t, e),
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
                    ? r.each(t, function (t, n) {
                          return t.setValue(e[n]);
                      })
                    : ((this.source = this._makeAnimated(e)), (this.payload = this._makePayload(this.source)));
            }),
            (n._makeAnimated = function (e, t) {
                return (
                    void 0 === t && (t = e),
                    e
                        ? e.map(function (e, n) {
                              return (r.isAnimatedString(e) ? E : g).create(e, t[n]);
                          })
                        : []
                );
            }),
            t
        );
    })(y),
    T = (function (e) {
        function t(t) {
            var n;
            return ((n = e.call(this, null) || this).update = t), (n.dirty = !1), n;
        }
        a(t, e);
        var n = t.prototype;
        return (
            (n.setValue = function (t, n) {
                if (t) {
                    if (n && ((v.current = n), t.style)) {
                        var i = n.host.createAnimatedStyle;
                        t = o(o({}, t), {}, { style: i(t.style) });
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
    })(y),
    b = function (e, t) {
        return u.forwardRef(function (n, i) {
            var a = u.useRef(null),
                s = !r.is.fun(e) || (e.prototype && e.prototype.isReactComponent),
                l = r.useForceUpdate(),
                d = new T(function () {
                    var e = a.current;
                    (!s || e) && !1 === (!!e && t.applyAnimatedValues(e, d.getValue(!0))) && l();
                }),
                f = new Set();
            return (
                d.setValue(n, {
                    dependencies: f,
                    host: t
                }),
                c.useLayoutEffect(function () {
                    return (
                        r.each(f, function (e) {
                            return e.addChild(d);
                        }),
                        function () {
                            return r.each(f, function (e) {
                                return e.removeChild(d);
                            });
                        }
                    );
                }),
                u.createElement(
                    e,
                    o({}, t.getComponentProps(d.getValue()), {
                        ref:
                            s &&
                            function (e) {
                                a.current = S(i, e);
                            }
                    })
                )
            );
        });
    };
function S(e, t) {
    return e && (r.is.fun(e) ? e(t) : (e.current = t)), t;
}
var A = Symbol.for('AnimatedComponent'),
    N = function (e, t) {
        var n = void 0 === t ? {} : t,
            i = n.applyAnimatedValues,
            a =
                void 0 === i
                    ? function () {
                          return !1;
                      }
                    : i,
            s = n.createAnimatedStyle,
            o =
                void 0 === s
                    ? function (e) {
                          return new y(e);
                      }
                    : s,
            l = n.getComponentProps,
            u = {
                applyAnimatedValues: a,
                createAnimatedStyle: o,
                getComponentProps:
                    void 0 === l
                        ? function (e) {
                              return e;
                          }
                        : l
            },
            c = function (e) {
                var t = C(e) || 'Anonymous';
                return ((e = r.is.str(e) ? b(e, u) : e[A] || (e[A] = b(e, u))).displayName = 'Animated(' + t + ')'), e;
            };
        return (
            r.each(e, function (e, t) {
                r.is.str(t) || (t = C(e)), (c[t] = c(e));
            }),
            { animated: c }
        );
    },
    C = function (e) {
        return r.is.str(e) ? e : e && r.is.str(e.displayName) ? e.displayName : (r.is.fun(e) && e.name) || null;
    };
(t.Animated = m), (t.AnimatedArray = I), (t.AnimatedObject = y), (t.AnimatedProps = T), (t.AnimatedString = E), (t.AnimatedValue = g), (t.createHost = N), (t.getAnimated = _), (t.getPayload = h), (t.isAnimated = f), (t.setAnimated = p);
