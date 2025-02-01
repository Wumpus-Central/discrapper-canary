var i = n(444675),
    r =
        Object.keys ||
        function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return t;
        };
e.exports = c;
var a = n(555170),
    s = n(833327);
n(689118)(c, a);
for (var o = r(s.prototype), l = 0; l < o.length; l++) {
    var u = o[l];
    c.prototype[u] || (c.prototype[u] = s.prototype[u]);
}
function c(e) {
    if (!(this instanceof c)) return new c(e);
    a.call(this, e), s.call(this, e), (this.allowHalfOpen = !0), e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && ((this.allowHalfOpen = !1), this.once('end', d)));
}
function d() {
    this._writableState.ended || i.nextTick(f, this);
}
function f(e) {
    e.end();
}
Object.defineProperty(c.prototype, 'writableHighWaterMark', {
    enumerable: !1,
    get: function () {
        return this._writableState.highWaterMark;
    }
}),
    Object.defineProperty(c.prototype, 'writableBuffer', {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer();
        }
    }),
    Object.defineProperty(c.prototype, 'writableLength', {
        enumerable: !1,
        get: function () {
            return this._writableState.length;
        }
    }),
    Object.defineProperty(c.prototype, 'destroyed', {
        enumerable: !1,
        get: function () {
            return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function (e) {
            void 0 !== this._readableState && void 0 !== this._writableState && ((this._readableState.destroyed = e), (this._writableState.destroyed = e));
        }
    });
