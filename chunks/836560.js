var t,
    n = 'object' == typeof Reflect ? Reflect : null,
    r =
        n && 'function' == typeof n.apply
            ? n.apply
            : function (e, t, n) {
                  return Function.prototype.apply.call(e, t, n);
              };
function i(e) {
    console && console.warn && console.warn(e);
}
t =
    n && 'function' == typeof n.ownKeys
        ? n.ownKeys
        : Object.getOwnPropertySymbols
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : function (e) {
                return Object.getOwnPropertyNames(e);
            };
var o =
    Number.isNaN ||
    function (e) {
        return e != e;
    };
function a() {
    a.init.call(this);
}
(e.exports = a), (e.exports.once = E), (a.EventEmitter = a), (a.prototype._events = void 0), (a.prototype._eventsCount = 0), (a.prototype._maxListeners = void 0);
var s = 10;
function l(e) {
    if ('function' != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function c(e) {
    return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners;
}
function u(e, t, n, r) {
    if ((l(n), void 0 === (a = e._events) ? ((a = e._events = Object.create(null)), (e._eventsCount = 0)) : (void 0 !== a.newListener && (e.emit('newListener', t, n.listener ? n.listener : n), (a = e._events)), (s = a[t])), void 0 === s)) (s = a[t] = n), ++e._eventsCount;
    else if (('function' == typeof s ? (s = a[t] = r ? [n, s] : [s, n]) : r ? s.unshift(n) : s.push(n), (o = c(e)) > 0 && s.length > o && !s.warned)) {
        s.warned = !0;
        var o,
            a,
            s,
            u = Error('Possible EventEmitter memory leak detected. ' + s.length + ' ' + String(t) + ' listeners added. Use emitter.setMaxListeners() to increase limit');
        (u.name = 'MaxListenersExceededWarning'), (u.emitter = e), (u.type = t), (u.count = s.length), i(u);
    }
    return e;
}
function d() {
    if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function f(e, t, n) {
    var r = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: n
        },
        i = d.bind(r);
    return (i.listener = n), (r.wrapFn = i), i;
}
function _(e, t, n) {
    var r = e._events;
    if (void 0 === r) return [];
    var i = r[t];
    return void 0 === i ? [] : 'function' == typeof i ? (n ? [i.listener || i] : [i]) : n ? g(i) : h(i, i.length);
}
function p(e) {
    var t = this._events;
    if (void 0 !== t) {
        var n = t[e];
        if ('function' == typeof n) return 1;
        if (void 0 !== n) return n.length;
    }
    return 0;
}
function h(e, t) {
    for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r];
    return n;
}
function m(e, t) {
    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
    e.pop();
}
function g(e) {
    for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
    return t;
}
function E(e, t) {
    return new Promise(function (n, r) {
        function i(n) {
            e.removeListener(t, o), r(n);
        }
        function o() {
            'function' == typeof e.removeListener && e.removeListener('error', i), n([].slice.call(arguments));
        }
        y(e, t, o, { once: !0 }), 'error' !== t && b(e, i, { once: !0 });
    });
}
function b(e, t, n) {
    'function' == typeof e.on && y(e, 'error', t, n);
}
function y(e, t, n, r) {
    if ('function' == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
    else if ('function' == typeof e.addEventListener)
        e.addEventListener(t, function i(o) {
            r.once && e.removeEventListener(t, i), n(o);
        });
    else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
Object.defineProperty(a, 'defaultMaxListeners', {
    enumerable: !0,
    get: function () {
        return s;
    },
    set: function (e) {
        if ('number' != typeof e || e < 0 || o(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + '.');
        s = e;
    }
}),
    (a.init = function () {
        (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
    }),
    (a.prototype.setMaxListeners = function (e) {
        if ('number' != typeof e || e < 0 || o(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + '.');
        return (this._maxListeners = e), this;
    }),
    (a.prototype.getMaxListeners = function () {
        return c(this);
    }),
    (a.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var i = 'error' === e,
            o = this._events;
        if (void 0 !== o) i = i && void 0 === o.error;
        else if (!i) return !1;
        if (i) {
            if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
            var a,
                s = Error('Unhandled error.' + (a ? ' (' + a.message + ')' : ''));
            throw ((s.context = a), s);
        }
        var l = o[e];
        if (void 0 === l) return !1;
        if ('function' == typeof l) r(l, this, t);
        else for (var c = l.length, u = h(l, c), n = 0; n < c; ++n) r(u[n], this, t);
        return !0;
    }),
    (a.prototype.addListener = function (e, t) {
        return u(this, e, t, !1);
    }),
    (a.prototype.on = a.prototype.addListener),
    (a.prototype.prependListener = function (e, t) {
        return u(this, e, t, !0);
    }),
    (a.prototype.once = function (e, t) {
        return l(t), this.on(e, f(this, e, t)), this;
    }),
    (a.prototype.prependOnceListener = function (e, t) {
        return l(t), this.prependListener(e, f(this, e, t)), this;
    }),
    (a.prototype.removeListener = function (e, t) {
        var n, r, i, o, a;
        if ((l(t), void 0 === (r = this._events) || void 0 === (n = r[e]))) return this;
        if (n === t || n.listener === t) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete r[e], r.removeListener && this.emit('removeListener', e, n.listener || t));
        else if ('function' != typeof n) {
            for (i = -1, o = n.length - 1; o >= 0; o--)
                if (n[o] === t || n[o].listener === t) {
                    (a = n[o].listener), (i = o);
                    break;
                }
            if (i < 0) return this;
            0 === i ? n.shift() : m(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit('removeListener', e, a || t);
        }
        return this;
    }),
    (a.prototype.off = a.prototype.removeListener),
    (a.prototype.removeAllListeners = function (e) {
        var t, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener) return 0 == arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== n[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[e]), this;
        if (0 == arguments.length) {
            var i,
                o = Object.keys(n);
            for (r = 0; r < o.length; ++r) 'removeListener' !== (i = o[r]) && this.removeAllListeners(i);
            return this.removeAllListeners('removeListener'), (this._events = Object.create(null)), (this._eventsCount = 0), this;
        }
        if ('function' == typeof (t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
        return this;
    }),
    (a.prototype.listeners = function (e) {
        return _(this, e, !0);
    }),
    (a.prototype.rawListeners = function (e) {
        return _(this, e, !1);
    }),
    (a.listenerCount = function (e, t) {
        return 'function' == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t);
    }),
    (a.prototype.listenerCount = p),
    (a.prototype.eventNames = function () {
        return this._eventsCount > 0 ? t(this._events) : [];
    });
