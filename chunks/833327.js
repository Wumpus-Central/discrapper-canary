var r,
    i,
    o = n(444675);
function a(e) {
    var t = this;
    (this.next = null),
        (this.entry = null),
        (this.finish = function () {
            H(t, e);
        });
}
(e.exports = A), (A.WritableState = N);
var s = { deprecate: n(220342) },
    l = n(138772),
    c = n(413135).Buffer,
    u = (void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {};
function d(e) {
    return c.from(e);
}
function f(e) {
    return c.isBuffer(e) || e instanceof u;
}
var p = n(887866),
    _ = n(97703).getHighWaterMark,
    h = n(531478).codes,
    m = h.ERR_INVALID_ARG_TYPE,
    g = h.ERR_METHOD_NOT_IMPLEMENTED,
    E = h.ERR_MULTIPLE_CALLBACK,
    v = h.ERR_STREAM_CANNOT_PIPE,
    b = h.ERR_STREAM_DESTROYED,
    y = h.ERR_STREAM_NULL_VALUES,
    O = h.ERR_STREAM_WRITE_AFTER_END,
    S = h.ERR_UNKNOWN_ENCODING,
    I = p.errorOrDestroy;
function T() {}
function N(e, t, i) {
    (r = r || n(827664)), (e = e || {}), 'boolean' != typeof i && (i = t instanceof r), (this.objectMode = !!e.objectMode), i && (this.objectMode = this.objectMode || !!e.writableObjectMode), (this.highWaterMark = _(this, e, 'writableHighWaterMark', i)), (this.finalCalled = !1), (this.needDrain = !1), (this.ending = !1), (this.ended = !1), (this.finished = !1), (this.destroyed = !1);
    var o = !1 === e.decodeStrings;
    (this.decodeStrings = !o),
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
        (this.corkedRequestsFree = new a(this));
}
function A(e) {
    var t = this instanceof (r = r || n(827664));
    if (!t && !i.call(A, this)) return new A(e);
    (this._writableState = new N(e, this, t)), (this.writable = !0), e && ('function' == typeof e.write && (this._write = e.write), 'function' == typeof e.writev && (this._writev = e.writev), 'function' == typeof e.destroy && (this._destroy = e.destroy), 'function' == typeof e.final && (this._final = e.final)), l.call(this);
}
function C(e, t) {
    var n = new O();
    I(e, n), o.nextTick(t, n);
}
function R(e, t, n, r) {
    var i;
    return null === n ? (i = new y()) : 'string' == typeof n || t.objectMode || (i = new m('chunk', ['string', 'Buffer'], n)), !i || (I(e, i), o.nextTick(r, i), !1);
}
function P(e, t, n) {
    return e.objectMode || !1 === e.decodeStrings || 'string' != typeof t || (t = c.from(t, n)), t;
}
function w(e, t, n, r, i, o) {
    if (!n) {
        var a = P(t, r, i);
        r !== a && ((n = !0), (i = 'buffer'), (r = a));
    }
    var s = t.objectMode ? 1 : r.length;
    t.length += s;
    var l = t.length < t.highWaterMark;
    if ((l || (t.needDrain = !0), t.writing || t.corked)) {
        var c = t.lastBufferedRequest;
        (t.lastBufferedRequest = {
            chunk: r,
            encoding: i,
            isBuf: n,
            callback: o,
            next: null
        }),
            c ? (c.next = t.lastBufferedRequest) : (t.bufferedRequest = t.lastBufferedRequest),
            (t.bufferedRequestCount += 1);
    } else D(e, t, !1, s, r, i, o);
    return l;
}
function D(e, t, n, r, i, o, a) {
    (t.writelen = r), (t.writecb = a), (t.writing = !0), (t.sync = !0), t.destroyed ? t.onwrite(new b('write')) : n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), (t.sync = !1);
}
function x(e, t, n, r, i) {
    --t.pendingcb, n ? (o.nextTick(i, r), o.nextTick(F, e, t), (e._writableState.errorEmitted = !0), I(e, r)) : (i(r), (e._writableState.errorEmitted = !0), I(e, r), F(e, t));
}
function L(e) {
    (e.writing = !1), (e.writecb = null), (e.length -= e.writelen), (e.writelen = 0);
}
function M(e, t) {
    var n = e._writableState,
        r = n.sync,
        i = n.writecb;
    if ('function' != typeof i) throw new E();
    if ((L(n), t)) x(e, n, r, t, i);
    else {
        var a = G(n) || e.destroyed;
        a || n.corked || n.bufferProcessing || !n.bufferedRequest || U(e, n), r ? o.nextTick(k, e, n, a, i) : k(e, n, a, i);
    }
}
function k(e, t, n, r) {
    n || j(e, t), t.pendingcb--, r(), F(e, t);
}
function j(e, t) {
    0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit('drain'));
}
function U(e, t) {
    t.bufferProcessing = !0;
    var n = t.bufferedRequest;
    if (e._writev && n && n.next) {
        var r = Array(t.bufferedRequestCount),
            i = t.corkedRequestsFree;
        i.entry = n;
        for (var o = 0, s = !0; n; ) (r[o] = n), n.isBuf || (s = !1), (n = n.next), (o += 1);
        (r.allBuffers = s), D(e, t, !0, t.length, r, '', i.finish), t.pendingcb++, (t.lastBufferedRequest = null), i.next ? ((t.corkedRequestsFree = i.next), (i.next = null)) : (t.corkedRequestsFree = new a(t)), (t.bufferedRequestCount = 0);
    } else {
        for (; n; ) {
            var l = n.chunk,
                c = n.encoding,
                u = n.callback,
                d = t.objectMode ? 1 : l.length;
            if ((D(e, t, !1, d, l, c, u), (n = n.next), t.bufferedRequestCount--, t.writing)) break;
        }
        null === n && (t.lastBufferedRequest = null);
    }
    (t.bufferedRequest = n), (t.bufferProcessing = !1);
}
function G(e) {
    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
}
function B(e, t) {
    e._final(function (n) {
        t.pendingcb--, n && I(e, n), (t.prefinished = !0), e.emit('prefinish'), F(e, t);
    });
}
function Z(e, t) {
    t.prefinished || t.finalCalled || ('function' != typeof e._final || t.destroyed ? ((t.prefinished = !0), e.emit('prefinish')) : (t.pendingcb++, (t.finalCalled = !0), o.nextTick(B, e, t)));
}
function F(e, t) {
    var n = G(t);
    if (n && (Z(e, t), 0 === t.pendingcb && ((t.finished = !0), e.emit('finish'), t.autoDestroy))) {
        var r = e._readableState;
        (!r || (r.autoDestroy && r.endEmitted)) && e.destroy();
    }
    return n;
}
function V(e, t, n) {
    (t.ending = !0), F(e, t), n && (t.finished ? o.nextTick(n) : e.once('finish', n)), (t.ended = !0), (e.writable = !1);
}
function H(e, t, n) {
    var r = e.entry;
    for (e.entry = null; r; ) {
        var i = r.callback;
        t.pendingcb--, i(n), (r = r.next);
    }
    t.corkedRequestsFree.next = e;
}
n(689118)(A, l),
    (N.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next);
        return t;
    }),
    (function () {
        try {
            Object.defineProperty(N.prototype, 'buffer', {
                get: s.deprecate(
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
        ? ((i = Function.prototype[Symbol.hasInstance]),
          Object.defineProperty(A, Symbol.hasInstance, {
              value: function (e) {
                  return !!i.call(this, e) || (this === A && e && e._writableState instanceof N);
              }
          }))
        : (i = function (e) {
              return e instanceof this;
          }),
    (A.prototype.pipe = function () {
        I(this, new v());
    }),
    (A.prototype.write = function (e, t, n) {
        var r = this._writableState,
            i = !1,
            o = !r.objectMode && f(e);
        return o && !c.isBuffer(e) && (e = d(e)), 'function' == typeof t && ((n = t), (t = null)), o ? (t = 'buffer') : t || (t = r.defaultEncoding), 'function' != typeof n && (n = T), r.ending ? C(this, n) : (o || R(this, r, e, n)) && (r.pendingcb++, (i = w(this, r, o, e, t, n))), i;
    }),
    (A.prototype.cork = function () {
        this._writableState.corked++;
    }),
    (A.prototype.uncork = function () {
        var e = this._writableState;
        !e.corked || (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || U(this, e));
    }),
    (A.prototype.setDefaultEncoding = function (e) {
        if (('string' == typeof e && (e = e.toLowerCase()), !(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((e + '').toLowerCase()) > -1))) throw new S(e);
        return (this._writableState.defaultEncoding = e), this;
    }),
    Object.defineProperty(A.prototype, 'writableBuffer', {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer();
        }
    }),
    Object.defineProperty(A.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._writableState.highWaterMark;
        }
    }),
    (A.prototype._write = function (e, t, n) {
        n(new g('_write()'));
    }),
    (A.prototype._writev = null),
    (A.prototype.end = function (e, t, n) {
        var r = this._writableState;
        return 'function' == typeof e ? ((n = e), (e = null), (t = null)) : 'function' == typeof t && ((n = t), (t = null)), null != e && this.write(e, t), r.corked && ((r.corked = 1), this.uncork()), r.ending || V(this, r, n), this;
    }),
    Object.defineProperty(A.prototype, 'writableLength', {
        enumerable: !1,
        get: function () {
            return this._writableState.length;
        }
    }),
    Object.defineProperty(A.prototype, 'destroyed', {
        enumerable: !1,
        get: function () {
            return void 0 !== this._writableState && this._writableState.destroyed;
        },
        set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
        }
    }),
    (A.prototype.destroy = p.destroy),
    (A.prototype._undestroy = p.undestroy),
    (A.prototype._destroy = function (e, t) {
        t(e);
    });
