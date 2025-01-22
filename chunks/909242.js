var i = r(21841),
    a = r(689118),
    o = {};
function s(e) {
    i.equal(e.length, 8, 'Invalid IV length'), (this.iv = Array(8));
    for (var n = 0; n < this.iv.length; n++) this.iv[n] = e[n];
}
function l(e) {
    function n(n) {
        e.call(this, n), this._cbcInit();
    }
    a(n, e);
    for (var r = Object.keys(o), i = 0; i < r.length; i++) {
        var s = r[i];
        n.prototype[s] = o[s];
    }
    return (
        (n.create = function (e) {
            return new n(e);
        }),
        n
    );
}
(n.instantiate = l),
    (o._cbcInit = function () {
        var e = new s(this.options.iv);
        this._cbcState = e;
    }),
    (o._update = function (e, n, r, i) {
        var a = this._cbcState,
            o = this.constructor.super_.prototype,
            s = a.iv;
        if ('encrypt' === this.type) {
            for (var l = 0; l < this.blockSize; l++) s[l] ^= e[n + l];
            o._update.call(this, s, 0, r, i);
            for (var l = 0; l < this.blockSize; l++) s[l] = r[i + l];
        } else {
            o._update.call(this, e, n, r, i);
            for (var l = 0; l < this.blockSize; l++) r[i + l] ^= s[l];
            for (var l = 0; l < this.blockSize; l++) s[l] = e[n + l];
        }
    });
