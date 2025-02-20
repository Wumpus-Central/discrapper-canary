var r = n(444675),
    i =
        Object.keys ||
        function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return t;
        };
e.exports = u;
var o = n(555170),
    a = n(833327);
n(689118)(u, o);
for (var s = i(a.prototype), l = 0; l < s.length; l++) {
    var c = s[l];
    u.prototype[c] || (u.prototype[c] = a.prototype[c]);
}
function u(e) {
    if (!(this instanceof u)) return new u(e);
    o.call(this, e), a.call(this, e), (this.allowHalfOpen = !0), e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && ((this.allowHalfOpen = !1), this.once('end', d)));
}
function d() {
    this._writableState.ended || r.nextTick(f, this);
}
function f(e) {
    e.end();
}
Object.defineProperty(u.prototype, 'writableHighWaterMark', {
    enumerable: !1,
    get: function () {
        return this._writableState.highWaterMark;
    }
}),
    Object.defineProperty(u.prototype, 'writableBuffer', {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer();
        }
    }),
    Object.defineProperty(u.prototype, 'writableLength', {
        enumerable: !1,
        get: function () {
            return this._writableState.length;
        }
    }),
    Object.defineProperty(u.prototype, 'destroyed', {
        enumerable: !1,
        get: function () {
            return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function (e) {
            void 0 !== this._readableState && void 0 !== this._writableState && ((this._readableState.destroyed = e), (this._writableState.destroyed = e));
        }
    });
