e.exports = c;
var i = n(531478).codes,
    r = i.ERR_METHOD_NOT_IMPLEMENTED,
    a = i.ERR_MULTIPLE_CALLBACK,
    s = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    o = i.ERR_TRANSFORM_WITH_LENGTH_0,
    l = n(827664);
function u(e, t) {
    var n = this._transformState;
    n.transforming = !1;
    var i = n.writecb;
    if (null === i) return this.emit('error', new a());
    (n.writechunk = null), (n.writecb = null), null != t && this.push(t), i(e);
    var r = this._readableState;
    (r.reading = !1), (r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark);
}
function c(e) {
    if (!(this instanceof c)) return new c(e);
    l.call(this, e),
        (this._transformState = {
            afterTransform: u.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e && ('function' == typeof e.transform && (this._transform = e.transform), 'function' == typeof e.flush && (this._flush = e.flush)),
        this.on('prefinish', d);
}
function d() {
    var e = this;
    'function' != typeof this._flush || this._readableState.destroyed
        ? f(this, null, null)
        : this._flush(function (t, n) {
              f(e, t, n);
          });
}
function f(e, t, n) {
    if (t) return e.emit('error', t);
    if ((null != n && e.push(n), e._writableState.length)) throw new o();
    if (e._transformState.transforming) throw new s();
    return e.push(null);
}
n(689118)(c, l),
    (c.prototype.push = function (e, t) {
        return (this._transformState.needTransform = !1), l.prototype.push.call(this, e, t);
    }),
    (c.prototype._transform = function (e, t, n) {
        n(new r('_transform()'));
    }),
    (c.prototype._write = function (e, t, n) {
        var i = this._transformState;
        if (((i.writecb = n), (i.writechunk = e), (i.writeencoding = t), !i.transforming)) {
            var r = this._readableState;
            (i.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark);
        }
    }),
    (c.prototype._read = function (e) {
        var t = this._transformState;
        null === t.writechunk || t.transforming ? (t.needTransform = !0) : ((t.transforming = !0), this._transform(t.writechunk, t.writeencoding, t.afterTransform));
    }),
    (c.prototype._destroy = function (e, t) {
        l.prototype._destroy.call(this, e, function (e) {
            t(e);
        });
    });
