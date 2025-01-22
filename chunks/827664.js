var i = r(444675),
    a =
        Object.keys ||
        function (e) {
            var n = [];
            for (var r in e) n.push(r);
            return n;
        };
e.exports = d;
var o = r(555170),
    s = r(833327);
r(689118)(d, o);
for (var l = a(s.prototype), u = 0; u < l.length; u++) {
    var c = l[u];
    !d.prototype[c] && (d.prototype[c] = s.prototype[c]);
}
function d(e) {
    if (!(this instanceof d)) return new d(e);
    o.call(this, e), s.call(this, e), (this.allowHalfOpen = !0), e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && ((this.allowHalfOpen = !1), this.once('end', f)));
}
function f() {
    !this._writableState.ended && i.nextTick(p, this);
}
function p(e) {
    e.end();
}
Object.defineProperty(d.prototype, 'writableHighWaterMark', {
    enumerable: !1,
    get: function () {
        return this._writableState.highWaterMark;
    }
}),
    Object.defineProperty(d.prototype, 'writableBuffer', {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer();
        }
    }),
    Object.defineProperty(d.prototype, 'writableLength', {
        enumerable: !1,
        get: function () {
            return this._writableState.length;
        }
    }),
    Object.defineProperty(d.prototype, 'destroyed', {
        enumerable: !1,
        get: function () {
            return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function (e) {
            if (void 0 !== this._readableState && void 0 !== this._writableState) (this._readableState.destroyed = e), (this._writableState.destroyed = e);
        }
    });
