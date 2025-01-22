function i(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(n, '__esModule', { value: !0 });
var a = r(698091),
    o = i(r(21217)),
    s = i(r(719427)),
    l = i(r(271491)),
    u = r(239189),
    c = r(192379),
    d = r(985445),
    f = Symbol.for('Animated:node'),
    p = function (e) {
        return !!e && e[f] === e;
    },
    h = function (e) {
        return e && e[f];
    },
    _ = function (e, n) {
        return a.defineHidden(e, f, n);
    },
    m = function (e) {
        return e && e[f] && e[f].getPayload();
    },
    g = (function () {
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
    E = (function (e) {
        function n(n) {
            var r;
            return ((r = e.call(this) || this)._value = n), (r.done = !0), (r.elapsedTime = void 0), (r.lastPosition = void 0), (r.lastVelocity = void 0), (r.v0 = void 0), a.is.num(r._value) && (r.lastPosition = r._value), r;
        }
        o(n, e),
            (n.create = function (e, r) {
                return new n(e);
            });
        var r = n.prototype;
        return (
            (r.getPayload = function () {
                return [this];
            }),
            (r.getValue = function () {
                return this._value;
            }),
            (r.setValue = function (e, n) {
                return a.is.num(e) && ((this.lastPosition = e), n && ((e = Math.round(e / n) * n), this.done && (this.lastPosition = e))), this._value !== e && ((this._value = e), !0);
            }),
            (r.reset = function () {
                var e = this.done;
                (this.done = !1), a.is.num(this._value) && ((this.elapsedTime = 0), (this.lastPosition = this._value), e && (this.lastVelocity = null), (this.v0 = null));
            }),
            n
        );
    })(g),
    v = (function (e) {
        function n(n, r) {
            var i;
            return (
                ((i = e.call(this, 0) || this)._value = void 0),
                (i._string = null),
                (i._toString = void 0),
                (i._toString = a.createInterpolator({
                    output: [n, r]
                })),
                i
            );
        }
        o(n, e),
            (n.create = function (e, r) {
                if ((void 0 === r && (r = e), a.is.str(e) && a.is.str(r))) return new n(e, r);
                throw TypeError('Expected "from" and "to" to be strings');
            });
        var r = n.prototype;
        return (
            (r.getValue = function () {
                var e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }),
            (r.setValue = function (n) {
                if (a.is.num(n)) {
                    if (!e.prototype.setValue.call(this, n)) return !1;
                    else this._string = null;
                } else (this._string = n), (this._value = 1);
                return !0;
            }),
            (r.reset = function (n) {
                n &&
                    (this._toString = a.createInterpolator({
                        output: [this.getValue(), n]
                    })),
                    (this._value = 0),
                    e.prototype.reset.call(this);
            }),
            n
        );
    })(E),
    y = { current: null },
    b = (function (e) {
        function n(n) {
            var r;
            return void 0 === n && (n = null), ((r = e.call(this) || this).source = void 0), r.setValue(n), r;
        }
        o(n, e);
        var r = n.prototype;
        return (
            (r.getValue = function (e) {
                if (!this.source) return null;
                var n = {};
                return (
                    a.each(this.source, function (r, i) {
                        if (p(r)) n[i] = r.getValue(e);
                        else {
                            var o = a.getFluidConfig(r);
                            o ? (n[i] = o.get()) : !e && (n[i] = r);
                        }
                    }),
                    n
                );
            }),
            (r.setValue = function (e) {
                (this.source = e), (this.payload = this._makePayload(e));
            }),
            (r.reset = function () {
                this.payload &&
                    a.each(this.payload, function (e) {
                        return e.reset();
                    });
            }),
            (r._makePayload = function (e) {
                if (e) {
                    var n = new Set();
                    return a.each(e, this._addToPayload, n), Array.from(n);
                }
            }),
            (r._addToPayload = function (e) {
                var n = this;
                a.getFluidConfig(e) && y.current && y.current.dependencies.add(e);
                var r = m(e);
                r &&
                    a.each(r, function (e) {
                        return n.add(e);
                    });
            }),
            n
        );
    })(g),
    I = (function (e) {
        function n(n, r) {
            var i;
            return ((i = e.call(this, null) || this).source = void 0), e.prototype.setValue.call(s(i), i._makeAnimated(n, r)), i;
        }
        o(n, e),
            (n.create = function (e, r) {
                return new n(e, r);
            });
        var r = n.prototype;
        return (
            (r.getValue = function () {
                return this.source.map(function (e) {
                    return e.getValue();
                });
            }),
            (r.setValue = function (e) {
                var n = this.getPayload();
                e && e.length == n.length
                    ? a.each(n, function (n, r) {
                          return n.setValue(e[r]);
                      })
                    : ((this.source = this._makeAnimated(e)), (this.payload = this._makePayload(this.source)));
            }),
            (r._makeAnimated = function (e, n) {
                return (
                    void 0 === n && (n = e),
                    e
                        ? e.map(function (e, r) {
                              return (a.isAnimatedString(e) ? v : E).create(e, n[r]);
                          })
                        : []
                );
            }),
            n
        );
    })(b),
    T = (function (e) {
        function n(n) {
            var r;
            return ((r = e.call(this, null) || this).update = n), (r.dirty = !1), r;
        }
        o(n, e);
        var r = n.prototype;
        return (
            (r.setValue = function (n, r) {
                if (n) {
                    if (r && ((y.current = r), n.style)) {
                        var i = r.host.createAnimatedStyle;
                        n = l(l({}, n), {}, { style: i(n.style) });
                    }
                    e.prototype.setValue.call(this, n), (y.current = null);
                }
            }),
            (r.onParentChange = function (e) {
                var n = this,
                    r = e.type;
                !this.dirty &&
                    'change' === r &&
                    ((this.dirty = !0),
                    u.frameLoop.onFrame(function () {
                        (n.dirty = !1), n.update();
                    }));
            }),
            n
        );
    })(b),
    S = function (e, n) {
        return c.forwardRef(function (r, i) {
            var o = c.useRef(null),
                s = !a.is.fun(e) || (e.prototype && e.prototype.isReactComponent),
                u = a.useForceUpdate(),
                f = new T(function () {
                    var e = o.current;
                    if (!s || !!e) !1 === (!!e && n.applyAnimatedValues(e, f.getValue(!0))) && u();
                }),
                p = new Set();
            return (
                f.setValue(r, {
                    dependencies: p,
                    host: n
                }),
                d.useLayoutEffect(function () {
                    return (
                        a.each(p, function (e) {
                            return e.addChild(f);
                        }),
                        function () {
                            return a.each(p, function (e) {
                                return e.removeChild(f);
                            });
                        }
                    );
                }),
                c.createElement(
                    e,
                    l({}, n.getComponentProps(f.getValue()), {
                        ref:
                            s &&
                            function (e) {
                                o.current = A(i, e);
                            }
                    })
                )
            );
        });
    };
function A(e, n) {
    return e && (a.is.fun(e) ? e(n) : (e.current = n)), n;
}
var C = Symbol.for('AnimatedComponent'),
    N = function (e, n) {
        var r = void 0 === n ? {} : n,
            i = r.applyAnimatedValues,
            o =
                void 0 === i
                    ? function () {
                          return !1;
                      }
                    : i,
            s = r.createAnimatedStyle,
            l =
                void 0 === s
                    ? function (e) {
                          return new b(e);
                      }
                    : s,
            u = r.getComponentProps,
            c = {
                applyAnimatedValues: o,
                createAnimatedStyle: l,
                getComponentProps:
                    void 0 === u
                        ? function (e) {
                              return e;
                          }
                        : u
            },
            d = function (e) {
                var n = R(e) || 'Anonymous';
                return ((e = a.is.str(e) ? S(e, c) : e[C] || (e[C] = S(e, c))).displayName = 'Animated(' + n + ')'), e;
            };
        return (
            a.each(e, function (e, n) {
                !a.is.str(n) && (n = R(e)), (d[n] = d(e));
            }),
            { animated: d }
        );
    },
    R = function (e) {
        return a.is.str(e) ? e : e && a.is.str(e.displayName) ? e.displayName : (a.is.fun(e) && e.name) || null;
    };
(n.Animated = g), (n.AnimatedArray = I), (n.AnimatedObject = b), (n.AnimatedProps = T), (n.AnimatedString = v), (n.AnimatedValue = E), (n.createHost = N), (n.getAnimated = h), (n.getPayload = m), (n.isAnimated = p), (n.setAnimated = _);
