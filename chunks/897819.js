var i = r(546299),
    a = r(585741);
function o() {
    if (!(this instanceof o)) return new o();
    a.call(this), (this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
}
i.inherits(o, a),
    (e.exports = o),
    (o.blockSize = 512),
    (o.outSize = 224),
    (o.hmacStrength = 192),
    (o.padLength = 64),
    (o.prototype._digest = function (e) {
        return 'hex' === e ? i.toHex32(this.h.slice(0, 7), 'big') : i.split32(this.h.slice(0, 7), 'big');
    });
