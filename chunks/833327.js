var i,
    a,
    s = r(444675);
e.exports = R;
function o(e) {
    var n = this;
    (this.next = null),
        (this.entry = null),
        (this.finish = function () {
            Y(n, e);
        });
}
R.WritableState = C;
var l = { deprecate: r(220342) },
    u = r(138772),
    c = r(413135).Buffer,
    d = (void 0 !== r.g ? r.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {};
function f(e) {
    return c.from(e);
}
function _(e) {
    return c.isBuffer(e) || e instanceof d;
}
var h = r(887866),
    p = r(97703).getHighWaterMark,
    m = r(531478).codes,
    g = m.ERR_INVALID_ARG_TYPE,
    E = m.ERR_METHOD_NOT_IMPLEMENTED,
    v = m.ERR_MULTIPLE_CALLBACK,
    I = m.ERR_STREAM_CANNOT_PIPE,
    T = m.ERR_STREAM_DESTROYED,
    b = m.ERR_STREAM_NULL_VALUES,
    y = m.ERR_STREAM_WRITE_AFTER_END,
    S = m.ERR_UNKNOWN_ENCODING,
    A = h.errorOrDestroy;
function N() {}
function C(e, n, a) {
    (i = i || r(827664)), (e = e || {}), 'boolean' != typeof a && (a = n instanceof i), (this.objectMode = !!e.objectMode), a && (this.objectMode = this.objectMode || !!e.writableObjectMode), (this.highWaterMark = p(this, e, 'writableHighWaterMark', a)), (this.finalCalled = !1), (this.needDrain = !1), (this.ending = !1), (this.ended = !1), (this.finished = !1), (this.destroyed = !1);
    var s = !1 === e.decodeStrings;
    (this.decodeStrings = !s),
        (this.defaultEncoding = e.defaultEncoding || 'utf8'),
        (this.length = 0),
        (this.writing = !1),
        (this.corked = 0),
        (this.sync = !0),
        (this.bufferProcessing = !1),
        (this.onwrite = function (e) {
            k(n, e);
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
        (this.corkedRequestsFree = new o(this));
}
function R(e) {
    var n = this instanceof (i = i || r(827664));
    if (!n && !a.call(R, this)) return new R(e);
    (this._writableState = new C(e, this, n)), (this.writable = !0), e && ('function' == typeof e.write && (this._write = e.write), 'function' == typeof e.writev && (this._writev = e.writev), 'function' == typeof e.destroy && (this._destroy = e.destroy), 'function' == typeof e.final && (this._final = e.final)), u.call(this);
}
function O(e, n) {
    var r = new y();
    A(e, r), s.nextTick(n, r);
}
function D(e, n, r, i) {
    var a;
    return null === r ? (a = new b()) : 'string' != typeof r && !n.objectMode && (a = new g('chunk', ['string', 'Buffer'], r)), !a || (A(e, a), s.nextTick(i, a), !1);
}
function L(e, n, r) {
    return !e.objectMode && !1 !== e.decodeStrings && 'string' == typeof n && (n = c.from(n, r)), n;
}
function x(e, n, r, i, a, s) {
    if (!r) {
        var o = L(n, i, a);
        i !== o && ((r = !0), (a = 'buffer'), (i = o));
    }
    var l = n.objectMode ? 1 : i.length;
    n.length += l;
    var u = n.length < n.highWaterMark;
    if ((!u && (n.needDrain = !0), n.writing || n.corked)) {
        var c = n.lastBufferedRequest;
        (n.lastBufferedRequest = {
            chunk: i,
            encoding: a,
            isBuf: r,
            callback: s,
            next: null
        }),
            c ? (c.next = n.lastBufferedRequest) : (n.bufferedRequest = n.lastBufferedRequest),
            (n.bufferedRequestCount += 1);
    } else w(e, n, !1, l, i, a, s);
    return u;
}
function w(e, n, r, i, a, s, o) {
    (n.writelen = i), (n.writecb = o), (n.writing = !0), (n.sync = !0), n.destroyed ? n.onwrite(new T('write')) : r ? e._writev(a, n.onwrite) : e._write(a, s, n.onwrite), (n.sync = !1);
}
function P(e, n, r, i, a) {
    --n.pendingcb, r ? (s.nextTick(a, i), s.nextTick(j, e, n), (e._writableState.errorEmitted = !0), A(e, i)) : (a(i), (e._writableState.errorEmitted = !0), A(e, i), j(e, n));
}
function M(e) {
    (e.writing = !1), (e.writecb = null), (e.length -= e.writelen), (e.writelen = 0);
}
function k(e, n) {
    var r = e._writableState,
        i = r.sync,
        a = r.writecb;
    if ('function' != typeof a) throw new v();
    if ((M(r), n)) P(e, r, i, n, a);
    else {
        var o = Z(r) || e.destroyed;
        !o && !r.corked && !r.bufferProcessing && r.bufferedRequest && G(e, r), i ? s.nextTick(U, e, r, o, a) : U(e, r, o, a);
    }
}
function U(e, n, r, i) {
    !r && B(e, n), n.pendingcb--, i(), j(e, n);
}
function B(e, n) {
    0 === n.length && n.needDrain && ((n.needDrain = !1), e.emit('drain'));
}
function G(e, n) {
    n.bufferProcessing = !0;
    var r = n.bufferedRequest;
    if (e._writev && r && r.next) {
        var i = Array(n.bufferedRequestCount),
            a = n.corkedRequestsFree;
        a.entry = r;
        for (var s = 0, l = !0; r; ) (i[s] = r), !r.isBuf && (l = !1), (r = r.next), (s += 1);
        (i.allBuffers = l), w(e, n, !0, n.length, i, '', a.finish), n.pendingcb++, (n.lastBufferedRequest = null), a.next ? ((n.corkedRequestsFree = a.next), (a.next = null)) : (n.corkedRequestsFree = new o(n)), (n.bufferedRequestCount = 0);
    } else {
        for (; r; ) {
            var u = r.chunk,
                c = r.encoding,
                d = r.callback,
                f = n.objectMode ? 1 : u.length;
            if ((w(e, n, !1, f, u, c, d), (r = r.next), n.bufferedRequestCount--, n.writing)) break;
        }
        null === r && (n.lastBufferedRequest = null);
    }
    (n.bufferedRequest = r), (n.bufferProcessing = !1);
}
function Z(e) {
    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
}
function F(e, n) {
    e._final(function (r) {
        n.pendingcb--, r && A(e, r), (n.prefinished = !0), e.emit('prefinish'), j(e, n);
    });
}
function V(e, n) {
    !n.prefinished && !n.finalCalled && ('function' != typeof e._final || n.destroyed ? ((n.prefinished = !0), e.emit('prefinish')) : (n.pendingcb++, (n.finalCalled = !0), s.nextTick(F, e, n)));
}
function j(e, n) {
    var r = Z(n);
    if (r && (V(e, n), 0 === n.pendingcb && ((n.finished = !0), e.emit('finish'), n.autoDestroy))) {
        var i = e._readableState;
        (!i || (i.autoDestroy && i.endEmitted)) && e.destroy();
    }
    return r;
}
function H(e, n, r) {
    (n.ending = !0), j(e, n), r && (n.finished ? s.nextTick(r) : e.once('finish', r)), (n.ended = !0), (e.writable = !1);
}
function Y(e, n, r) {
    var i = e.entry;
    for (e.entry = null; i; ) {
        var a = i.callback;
        n.pendingcb--, a(r), (i = i.next);
    }
    n.corkedRequestsFree.next = e;
}
r(689118)(R, u),
    (C.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, n = []; e; ) n.push(e), (e = e.next);
        return n;
    }),
    !(function () {
        try {
            Object.defineProperty(C.prototype, 'buffer', {
                get: l.deprecate(
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
        ? ((a = Function.prototype[Symbol.hasInstance]),
          Object.defineProperty(R, Symbol.hasInstance, {
              value: function (e) {
                  return !!a.call(this, e) || (this === R && e && e._writableState instanceof C);
              }
          }))
        : (a = function (e) {
              return e instanceof this;
          }),
    (R.prototype.pipe = function () {
        A(this, new I());
    }),
    (R.prototype.write = function (e, n, r) {
        var i = this._writableState,
            a = !1,
            s = !i.objectMode && _(e);
        return s && !c.isBuffer(e) && (e = f(e)), 'function' == typeof n && ((r = n), (n = null)), s ? (n = 'buffer') : !n && (n = i.defaultEncoding), 'function' != typeof r && (r = N), i.ending ? O(this, r) : (s || D(this, i, e, r)) && (i.pendingcb++, (a = x(this, i, s, e, n, r))), a;
    }),
    (R.prototype.cork = function () {
        this._writableState.corked++;
    }),
    (R.prototype.uncork = function () {
        var e = this._writableState;
        e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && G(this, e));
    }),
    (R.prototype.setDefaultEncoding = function (e) {
        if (('string' == typeof e && (e = e.toLowerCase()), !(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((e + '').toLowerCase()) > -1))) throw new S(e);
        return (this._writableState.defaultEncoding = e), this;
    }),
    Object.defineProperty(R.prototype, 'writableBuffer', {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer();
        }
    }),
    Object.defineProperty(R.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._writableState.highWaterMark;
        }
    }),
    (R.prototype._write = function (e, n, r) {
        r(new E('_write()'));
    }),
    (R.prototype._writev = null),
    (R.prototype.end = function (e, n, r) {
        var i = this._writableState;
        return 'function' == typeof e ? ((r = e), (e = null), (n = null)) : 'function' == typeof n && ((r = n), (n = null)), null != e && this.write(e, n), i.corked && ((i.corked = 1), this.uncork()), !i.ending && H(this, i, r), this;
    }),
    Object.defineProperty(R.prototype, 'writableLength', {
        enumerable: !1,
        get: function () {
            return this._writableState.length;
        }
    }),
    Object.defineProperty(R.prototype, 'destroyed', {
        enumerable: !1,
        get: function () {
            return void 0 !== this._writableState && this._writableState.destroyed;
        },
        set: function (e) {
            if (!!this._writableState) this._writableState.destroyed = e;
        }
    }),
    (R.prototype.destroy = h.destroy),
    (R.prototype._undestroy = h.undestroy),
    (R.prototype._destroy = function (e, n) {
        n(e);
    });
