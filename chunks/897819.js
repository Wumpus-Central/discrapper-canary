var r = n(546299),
    i = n(585741);
function o() {
    if (!(this instanceof o)) return new o();
    i.call(this), (this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
}
r.inherits(o, i),
    (e.exports = o),
    (o.blockSize = 512),
    (o.outSize = 224),
    (o.hmacStrength = 192),
    (o.padLength = 64),
    (o.prototype._digest = function (e) {
        return 'hex' === e ? r.toHex32(this.h.slice(0, 7), 'big') : r.split32(this.h.slice(0, 7), 'big');
    });
