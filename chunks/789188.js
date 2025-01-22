var i = r(903799),
    a = r(847651),
    o = r(21841);
function s(e) {
    if (!(this instanceof s)) return new s(e);
    (this.hash = e.hash), (this.predResist = !!e.predResist), (this.outLen = this.hash.outSize), (this.minEntropy = e.minEntropy || this.hash.hmacStrength), (this._reseed = null), (this.reseedInterval = null), (this.K = null), (this.V = null);
    var n = a.toArray(e.entropy, e.entropyEnc || 'hex'),
        r = a.toArray(e.nonce, e.nonceEnc || 'hex'),
        i = a.toArray(e.pers, e.persEnc || 'hex');
    o(n.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'), this._init(n, r, i);
}
(e.exports = s),
    (s.prototype._init = function (e, n, r) {
        var i = e.concat(n).concat(r);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var a = 0; a < this.V.length; a++) (this.K[a] = 0), (this.V[a] = 1);
        this._update(i), (this._reseed = 1), (this.reseedInterval = 281474976710656);
    }),
    (s.prototype._hmac = function () {
        return new i.hmac(this.hash, this.K);
    }),
    (s.prototype._update = function (e) {
        var n = this._hmac().update(this.V).update([0]);
        e && (n = n.update(e)), (this.K = n.digest()), (this.V = this._hmac().update(this.V).digest()), e && ((this.K = this._hmac().update(this.V).update([1]).update(e).digest()), (this.V = this._hmac().update(this.V).digest()));
    }),
    (s.prototype.reseed = function (e, n, r, i) {
        'string' != typeof n && ((i = r), (r = n), (n = null)), (e = a.toArray(e, n)), (r = a.toArray(r, i)), o(e.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'), this._update(e.concat(r || [])), (this._reseed = 1);
    }),
    (s.prototype.generate = function (e, n, r, i) {
        if (this._reseed > this.reseedInterval) throw Error('Reseed is required');
        'string' != typeof n && ((i = r), (r = n), (n = null)), r && ((r = a.toArray(r, i || 'hex')), this._update(r));
        for (var o = []; o.length < e; ) (this.V = this._hmac().update(this.V).digest()), (o = o.concat(this.V));
        var s = o.slice(0, e);
        return this._update(r), this._reseed++, a.encode(s, n);
    });
