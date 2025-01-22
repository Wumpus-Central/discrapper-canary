var n,
    r = 'object' == typeof Reflect ? Reflect : null,
    i =
        r && 'function' == typeof r.apply
            ? r.apply
            : function (e, n, r) {
                  return Function.prototype.apply.call(e, n, r);
              };
function a(e) {
    console && console.warn && console.warn(e);
}
n =
    r && 'function' == typeof r.ownKeys
        ? r.ownKeys
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
function s() {
    s.init.call(this);
}
(e.exports = s), (e.exports.once = v), (s.EventEmitter = s), (s.prototype._events = void 0), (s.prototype._eventsCount = 0), (s.prototype._maxListeners = void 0);
var l = 10;
function u(e) {
    if ('function' != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function c(e) {
    return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
}
function d(e, n, r, i) {
    if ((u(r), void 0 === (s = e._events) ? ((s = e._events = Object.create(null)), (e._eventsCount = 0)) : (void 0 !== s.newListener && (e.emit('newListener', n, r.listener ? r.listener : r), (s = e._events)), (l = s[n])), void 0 === l)) (l = s[n] = r), ++e._eventsCount;
    else if (('function' == typeof l ? (l = s[n] = i ? [r, l] : [l, r]) : i ? l.unshift(r) : l.push(r), (o = c(e)) > 0 && l.length > o && !l.warned)) {
        l.warned = !0;
        var o,
            s,
            l,
            d = Error('Possible EventEmitter memory leak detected. ' + l.length + ' ' + String(n) + ' listeners added. Use emitter.setMaxListeners() to increase limit');
        (d.name = 'MaxListenersExceededWarning'), (d.emitter = e), (d.type = n), (d.count = l.length), a(d);
    }
    return e;
}
function f() {
    if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function p(e, n, r) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: n,
            listener: r
        },
        a = f.bind(i);
    return (a.listener = r), (i.wrapFn = a), a;
}
function h(e, n, r) {
    var i = e._events;
    if (void 0 === i) return [];
    var a = i[n];
    return void 0 === a ? [] : 'function' == typeof a ? (r ? [a.listener || a] : [a]) : r ? E(a) : m(a, a.length);
}
function _(e) {
    var n = this._events;
    if (void 0 !== n) {
        var r = n[e];
        if ('function' == typeof r) return 1;
        if (void 0 !== r) return r.length;
    }
    return 0;
}
function m(e, n) {
    for (var r = Array(n), i = 0; i < n; ++i) r[i] = e[i];
    return r;
}
function g(e, n) {
    for (; n + 1 < e.length; n++) e[n] = e[n + 1];
    e.pop();
}
function E(e) {
    for (var n = Array(e.length), r = 0; r < n.length; ++r) n[r] = e[r].listener || e[r];
    return n;
}
function v(e, n) {
    return new Promise(function (r, i) {
        function a(r) {
            e.removeListener(n, o), i(r);
        }
        function o() {
            'function' == typeof e.removeListener && e.removeListener('error', a), r([].slice.call(arguments));
        }
        b(e, n, o, { once: !0 }), 'error' !== n && y(e, a, { once: !0 });
    });
}
function y(e, n, r) {
    'function' == typeof e.on && b(e, 'error', n, r);
}
function b(e, n, r, i) {
    if ('function' == typeof e.on) i.once ? e.once(n, r) : e.on(n, r);
    else if ('function' == typeof e.addEventListener)
        e.addEventListener(n, function a(o) {
            i.once && e.removeEventListener(n, a), r(o);
        });
    else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
Object.defineProperty(s, 'defaultMaxListeners', {
    enumerable: !0,
    get: function () {
        return l;
    },
    set: function (e) {
        if ('number' != typeof e || e < 0 || o(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + '.');
        l = e;
    }
}),
    (s.init = function () {
        (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
    }),
    (s.prototype.setMaxListeners = function (e) {
        if ('number' != typeof e || e < 0 || o(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + '.');
        return (this._maxListeners = e), this;
    }),
    (s.prototype.getMaxListeners = function () {
        return c(this);
    }),
    (s.prototype.emit = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
        var a = 'error' === e,
            o = this._events;
        if (void 0 !== o) a = a && void 0 === o.error;
        else if (!a) return !1;
        if (a) {
            if ((n.length > 0 && (s = n[0]), s instanceof Error)) throw s;
            var s,
                l = Error('Unhandled error.' + (s ? ' (' + s.message + ')' : ''));
            throw ((l.context = s), l);
        }
        var u = o[e];
        if (void 0 === u) return !1;
        if ('function' == typeof u) i(u, this, n);
        else {
            for (var c = u.length, d = m(u, c), r = 0; r < c; ++r) i(d[r], this, n);
        }
        return !0;
    }),
    (s.prototype.addListener = function (e, n) {
        return d(this, e, n, !1);
    }),
    (s.prototype.on = s.prototype.addListener),
    (s.prototype.prependListener = function (e, n) {
        return d(this, e, n, !0);
    }),
    (s.prototype.once = function (e, n) {
        return u(n), this.on(e, p(this, e, n)), this;
    }),
    (s.prototype.prependOnceListener = function (e, n) {
        return u(n), this.prependListener(e, p(this, e, n)), this;
    }),
    (s.prototype.removeListener = function (e, n) {
        var r, i, a, o, s;
        if ((u(n), void 0 === (i = this._events) || void 0 === (r = i[e]))) return this;
        if (r === n || r.listener === n) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete i[e], i.removeListener && this.emit('removeListener', e, r.listener || n));
        else if ('function' != typeof r) {
            for (a = -1, o = r.length - 1; o >= 0; o--)
                if (r[o] === n || r[o].listener === n) {
                    (s = r[o].listener), (a = o);
                    break;
                }
            if (a < 0) return this;
            0 === a ? r.shift() : g(r, a), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit('removeListener', e, s || n);
        }
        return this;
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.removeAllListeners = function (e) {
        var n, r, i;
        if (void 0 === (r = this._events)) return this;
        if (void 0 === r.removeListener) return 0 == arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== r[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete r[e]), this;
        if (0 == arguments.length) {
            var a,
                o = Object.keys(r);
            for (i = 0; i < o.length; ++i) 'removeListener' !== (a = o[i]) && this.removeAllListeners(a);
            return this.removeAllListeners('removeListener'), (this._events = Object.create(null)), (this._eventsCount = 0), this;
        }
        if ('function' == typeof (n = r[e])) this.removeListener(e, n);
        else if (void 0 !== n) for (i = n.length - 1; i >= 0; i--) this.removeListener(e, n[i]);
        return this;
    }),
    (s.prototype.listeners = function (e) {
        return h(this, e, !0);
    }),
    (s.prototype.rawListeners = function (e) {
        return h(this, e, !1);
    }),
    (s.listenerCount = function (e, n) {
        return 'function' == typeof e.listenerCount ? e.listenerCount(n) : _.call(e, n);
    }),
    (s.prototype.listenerCount = _),
    (s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? n(this._events) : [];
    });
