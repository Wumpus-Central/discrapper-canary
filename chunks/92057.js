e.exports = d;
var i = r(531478).codes,
    a = i.ERR_METHOD_NOT_IMPLEMENTED,
    o = i.ERR_MULTIPLE_CALLBACK,
    s = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    l = i.ERR_TRANSFORM_WITH_LENGTH_0,
    u = r(827664);
function c(e, n) {
    var r = this._transformState;
    r.transforming = !1;
    var i = r.writecb;
    if (null === i) return this.emit('error', new o());
    (r.writechunk = null), (r.writecb = null), null != n && this.push(n), i(e);
    var a = this._readableState;
    (a.reading = !1), (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
}
function d(e) {
    if (!(this instanceof d)) return new d(e);
    u.call(this, e),
        (this._transformState = {
            afterTransform: c.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e && ('function' == typeof e.transform && (this._transform = e.transform), 'function' == typeof e.flush && (this._flush = e.flush)),
        this.on('prefinish', f);
}
function f() {
    var e = this;
    'function' != typeof this._flush || this._readableState.destroyed
        ? p(this, null, null)
        : this._flush(function (n, r) {
              p(e, n, r);
          });
}
function p(e, n, r) {
    if (n) return e.emit('error', n);
    if ((null != r && e.push(r), e._writableState.length)) throw new l();
    if (e._transformState.transforming) throw new s();
    return e.push(null);
}
r(689118)(d, u),
    (d.prototype.push = function (e, n) {
        return (this._transformState.needTransform = !1), u.prototype.push.call(this, e, n);
    }),
    (d.prototype._transform = function (e, n, r) {
        r(new a('_transform()'));
    }),
    (d.prototype._write = function (e, n, r) {
        var i = this._transformState;
        if (((i.writecb = r), (i.writechunk = e), (i.writeencoding = n), !i.transforming)) {
            var a = this._readableState;
            (i.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
        }
    }),
    (d.prototype._read = function (e) {
        var n = this._transformState;
        null === n.writechunk || n.transforming ? (n.needTransform = !0) : ((n.transforming = !0), this._transform(n.writechunk, n.writeencoding, n.afterTransform));
    }),
    (d.prototype._destroy = function (e, n) {
        u.prototype._destroy.call(this, e, function (e) {
            n(e);
        });
    });
