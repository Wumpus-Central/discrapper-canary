var i = n(546299),
    r = n(585741);
function a() {
    if (!(this instanceof a)) return new a();
    r.call(this), (this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
}
i.inherits(a, r),
    (e.exports = a),
    (a.blockSize = 512),
    (a.outSize = 224),
    (a.hmacStrength = 192),
    (a.padLength = 64),
    (a.prototype._digest = function (e) {
        return 'hex' === e ? i.toHex32(this.h.slice(0, 7), 'big') : i.split32(this.h.slice(0, 7), 'big');
    });
