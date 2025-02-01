var i = n(903799),
    r = n(847651),
    a = n(21841);
function s(e) {
    if (!(this instanceof s)) return new s(e);
    (this.hash = e.hash), (this.predResist = !!e.predResist), (this.outLen = this.hash.outSize), (this.minEntropy = e.minEntropy || this.hash.hmacStrength), (this._reseed = null), (this.reseedInterval = null), (this.K = null), (this.V = null);
    var t = r.toArray(e.entropy, e.entropyEnc || 'hex'),
        n = r.toArray(e.nonce, e.nonceEnc || 'hex'),
        i = r.toArray(e.pers, e.persEnc || 'hex');
    a(t.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'), this._init(t, n, i);
}
(e.exports = s),
    (s.prototype._init = function (e, t, n) {
        var i = e.concat(t).concat(n);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var r = 0; r < this.V.length; r++) (this.K[r] = 0), (this.V[r] = 1);
        this._update(i), (this._reseed = 1), (this.reseedInterval = 281474976710656);
    }),
    (s.prototype._hmac = function () {
        return new i.hmac(this.hash, this.K);
    }),
    (s.prototype._update = function (e) {
        var t = this._hmac().update(this.V).update([0]);
        e && (t = t.update(e)), (this.K = t.digest()), (this.V = this._hmac().update(this.V).digest()), e && ((this.K = this._hmac().update(this.V).update([1]).update(e).digest()), (this.V = this._hmac().update(this.V).digest()));
    }),
    (s.prototype.reseed = function (e, t, n, i) {
        'string' != typeof t && ((i = n), (n = t), (t = null)), (e = r.toArray(e, t)), (n = r.toArray(n, i)), a(e.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'), this._update(e.concat(n || [])), (this._reseed = 1);
    }),
    (s.prototype.generate = function (e, t, n, i) {
        if (this._reseed > this.reseedInterval) throw Error('Reseed is required');
        'string' != typeof t && ((i = n), (n = t), (t = null)), n && ((n = r.toArray(n, i || 'hex')), this._update(n));
        for (var a = []; a.length < e; ) (this.V = this._hmac().update(this.V).digest()), (a = a.concat(this.V));
        var s = a.slice(0, e);
        return this._update(n), this._reseed++, r.encode(s, t);
    });
