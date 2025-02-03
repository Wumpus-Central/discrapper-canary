var i,
    r,
    a = n(444675);
function s(e) {
    var t = this;
    (this.next = null),
        (this.entry = null),
        (this.finish = function () {
            H(t, e);
        });
}
(e.exports = C), (C.WritableState = N);
var o = { deprecate: n(220342) },
    l = n(138772),
    u = n(413135).Buffer,
    c = (void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {};
function d(e) {
    return u.from(e);
}
function f(e) {
    return u.isBuffer(e) || e instanceof c;
}
var _ = n(887866),
    p = n(97703).getHighWaterMark,
    h = n(531478).codes,
    m = h.ERR_INVALID_ARG_TYPE,
    g = h.ERR_METHOD_NOT_IMPLEMENTED,
    E = h.ERR_MULTIPLE_CALLBACK,
    v = h.ERR_STREAM_CANNOT_PIPE,
    y = h.ERR_STREAM_DESTROYED,
    I = h.ERR_STREAM_NULL_VALUES,
    b = h.ERR_STREAM_WRITE_AFTER_END,
    T = h.ERR_UNKNOWN_ENCODING,
    S = _.errorOrDestroy;
function A() {}
function N(e, t, r) {
    (i = i || n(827664)), (e = e || {}), 'boolean' != typeof r && (r = t instanceof i), (this.objectMode = !!e.objectMode), r && (this.objectMode = this.objectMode || !!e.writableObjectMode), (this.highWaterMark = p(this, e, 'writableHighWaterMark', r)), (this.finalCalled = !1), (this.needDrain = !1), (this.ending = !1), (this.ended = !1), (this.finished = !1), (this.destroyed = !1);
    var a = !1 === e.decodeStrings;
    (this.decodeStrings = !a),
        (this.defaultEncoding = e.defaultEncoding || 'utf8'),
        (this.length = 0),
        (this.writing = !1),
        (this.corked = 0),
        (this.sync = !0),
        (this.bufferProcessing = !1),
        (this.onwrite = function (e) {
            M(t, e);
        }),
        (this.writecb = null),
        (this.writelen = 0),
        (this.bufferedRequest = null),
        (this.lastBufferedRequest = null),
        (this.pendingcb = 0),
        (this.prefinished = !1),
        (this.errorEmitted = !1),
        (this.emitClose = !1 !== e.emitClose),
        (this.autoDestroy = !!e.autoDestroy),
        (this.bufferedRequestCount = 0),
        (this.corkedRequestsFree = new s(this));
}
function C(e) {
    var t = this instanceof (i = i || n(827664));
    if (!t && !r.call(C, this)) return new C(e);
    (this._writableState = new N(e, this, t)), (this.writable = !0), e && ('function' == typeof e.write && (this._write = e.write), 'function' == typeof e.writev && (this._writev = e.writev), 'function' == typeof e.destroy && (this._destroy = e.destroy), 'function' == typeof e.final && (this._final = e.final)), l.call(this);
}
function R(e, t) {
    var n = new b();
    S(e, n), a.nextTick(t, n);
}
function O(e, t, n, i) {
    var r;
    return null === n ? (r = new I()) : 'string' == typeof n || t.objectMode || (r = new m('chunk', ['string', 'Buffer'], n)), !r || (S(e, r), a.nextTick(i, r), !1);
}
function D(e, t, n) {
    return e.objectMode || !1 === e.decodeStrings || 'string' != typeof t || (t = u.from(t, n)), t;
}
function x(e, t, n, i, r, a) {
    if (!n) {
        var s = D(t, i, r);
        i !== s && ((n = !0), (r = 'buffer'), (i = s));
    }
    var o = t.objectMode ? 1 : i.length;
    t.length += o;
    var l = t.length < t.highWaterMark;
    if ((l || (t.needDrain = !0), t.writing || t.corked)) {
        var u = t.lastBufferedRequest;
        (t.lastBufferedRequest = {
            chunk: i,
            encoding: r,
            isBuf: n,
            callback: a,
            next: null
        }),
            u ? (u.next = t.lastBufferedRequest) : (t.bufferedRequest = t.lastBufferedRequest),
            (t.bufferedRequestCount += 1);
    } else L(e, t, !1, o, i, r, a);
    return l;
}
function L(e, t, n, i, r, a, s) {
    (t.writelen = i), (t.writecb = s), (t.writing = !0), (t.sync = !0), t.destroyed ? t.onwrite(new y('write')) : n ? e._writev(r, t.onwrite) : e._write(r, a, t.onwrite), (t.sync = !1);
}
function P(e, t, n, i, r) {
    --t.pendingcb, n ? (a.nextTick(r, i), a.nextTick(V, e, t), (e._writableState.errorEmitted = !0), S(e, i)) : (r(i), (e._writableState.errorEmitted = !0), S(e, i), V(e, t));
}
function w(e) {
    (e.writing = !1), (e.writecb = null), (e.length -= e.writelen), (e.writelen = 0);
}
function M(e, t) {
    var n = e._writableState,
        i = n.sync,
        r = n.writecb;
    if ('function' != typeof r) throw new E();
    if ((w(n), t)) P(e, n, i, t, r);
    else {
        var s = B(n) || e.destroyed;
        s || n.corked || n.bufferProcessing || !n.bufferedRequest || G(e, n), i ? a.nextTick(k, e, n, s, r) : k(e, n, s, r);
    }
}
function k(e, t, n, i) {
    n || U(e, t), t.pendingcb--, i(), V(e, t);
}
function U(e, t) {
    0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit('drain'));
}
function G(e, t) {
    t.bufferProcessing = !0;
    var n = t.bufferedRequest;
    if (e._writev && n && n.next) {
        var i = Array(t.bufferedRequestCount),
            r = t.corkedRequestsFree;
        r.entry = n;
        for (var a = 0, o = !0; n; ) (i[a] = n), n.isBuf || (o = !1), (n = n.next), (a += 1);
        (i.allBuffers = o), L(e, t, !0, t.length, i, '', r.finish), t.pendingcb++, (t.lastBufferedRequest = null), r.next ? ((t.corkedRequestsFree = r.next), (r.next = null)) : (t.corkedRequestsFree = new s(t)), (t.bufferedRequestCount = 0);
    } else {
        for (; n; ) {
            var l = n.chunk,
                u = n.encoding,
                c = n.callback,
                d = t.objectMode ? 1 : l.length;
            if ((L(e, t, !1, d, l, u, c), (n = n.next), t.bufferedRequestCount--, t.writing)) break;
        }
        null === n && (t.lastBufferedRequest = null);
    }
    (t.bufferedRequest = n), (t.bufferProcessing = !1);
}
function B(e) {
    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
}
function Z(e, t) {
    e._final(function (n) {
        t.pendingcb--, n && S(e, n), (t.prefinished = !0), e.emit('prefinish'), V(e, t);
    });
}
function F(e, t) {
    t.prefinished || t.finalCalled || ('function' != typeof e._final || t.destroyed ? ((t.prefinished = !0), e.emit('prefinish')) : (t.pendingcb++, (t.finalCalled = !0), a.nextTick(Z, e, t)));
}
function V(e, t) {
    var n = B(t);
    if (n && (F(e, t), 0 === t.pendingcb && ((t.finished = !0), e.emit('finish'), t.autoDestroy))) {
        var i = e._readableState;
        (!i || (i.autoDestroy && i.endEmitted)) && e.destroy();
    }
    return n;
}
function j(e, t, n) {
    (t.ending = !0), V(e, t), n && (t.finished ? a.nextTick(n) : e.once('finish', n)), (t.ended = !0), (e.writable = !1);
}
function H(e, t, n) {
    var i = e.entry;
    for (e.entry = null; i; ) {
        var r = i.callback;
        t.pendingcb--, r(n), (i = i.next);
    }
    t.corkedRequestsFree.next = e;
}
n(689118)(C, l),
    (N.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next);
        return t;
    }),
    (function () {
        try {
            Object.defineProperty(N.prototype, 'buffer', {
                get: o.deprecate(
                    function () {
                        return this.getBuffer();
                    },
                    '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                    'DEP0003'
                )
            });
        } catch (e) {}
    })(),
    'function' == typeof Symbol && Symbol.hasInstance && 'function' == typeof Function.prototype[Symbol.hasInstance]
        ? ((r = Function.prototype[Symbol.hasInstance]),
          Object.defineProperty(C, Symbol.hasInstance, {
              value: function (e) {
                  return !!r.call(this, e) || (this === C && e && e._writableState instanceof N);
              }
          }))
        : (r = function (e) {
              return e instanceof this;
          }),
    (C.prototype.pipe = function () {
        S(this, new v());
    }),
    (C.prototype.write = function (e, t, n) {
        var i = this._writableState,
            r = !1,
            a = !i.objectMode && f(e);
        return a && !u.isBuffer(e) && (e = d(e)), 'function' == typeof t && ((n = t), (t = null)), a ? (t = 'buffer') : t || (t = i.defaultEncoding), 'function' != typeof n && (n = A), i.ending ? R(this, n) : (a || O(this, i, e, n)) && (i.pendingcb++, (r = x(this, i, a, e, t, n))), r;
    }),
    (C.prototype.cork = function () {
        this._writableState.corked++;
    }),
    (C.prototype.uncork = function () {
        var e = this._writableState;
        !e.corked || (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || G(this, e));
    }),
    (C.prototype.setDefaultEncoding = function (e) {
        if (('string' == typeof e && (e = e.toLowerCase()), !(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((e + '').toLowerCase()) > -1))) throw new T(e);
        return (this._writableState.defaultEncoding = e), this;
    }),
    Object.defineProperty(C.prototype, 'writableBuffer', {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer();
        }
    }),
    Object.defineProperty(C.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._writableState.highWaterMark;
        }
    }),
    (C.prototype._write = function (e, t, n) {
        n(new g('_write()'));
    }),
    (C.prototype._writev = null),
    (C.prototype.end = function (e, t, n) {
        var i = this._writableState;
        return 'function' == typeof e ? ((n = e), (e = null), (t = null)) : 'function' == typeof t && ((n = t), (t = null)), null != e && this.write(e, t), i.corked && ((i.corked = 1), this.uncork()), i.ending || j(this, i, n), this;
    }),
    Object.defineProperty(C.prototype, 'writableLength', {
        enumerable: !1,
        get: function () {
            return this._writableState.length;
        }
    }),
    Object.defineProperty(C.prototype, 'destroyed', {
        enumerable: !1,
        get: function () {
            return void 0 !== this._writableState && this._writableState.destroyed;
        },
        set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
        }
    }),
    (C.prototype.destroy = _.destroy),
    (C.prototype._undestroy = _.undestroy),
    (C.prototype._destroy = function (e, t) {
        t(e);
    });
