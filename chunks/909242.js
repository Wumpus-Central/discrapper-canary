var r = n(21841),
    i = n(689118),
    o = {};
function a(e) {
    r.equal(e.length, 8, 'Invalid IV length'), (this.iv = Array(8));
    for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t];
}
function s(e) {
    function t(t) {
        e.call(this, t), this._cbcInit();
    }
    i(t, e);
    for (var n = Object.keys(o), r = 0; r < n.length; r++) {
        var a = n[r];
        t.prototype[a] = o[a];
    }
    return (
        (t.create = function (e) {
            return new t(e);
        }),
        t
    );
}
(t.instantiate = s),
    (o._cbcInit = function () {
        var e = new a(this.options.iv);
        this._cbcState = e;
    }),
    (o._update = function (e, t, n, r) {
        var i = this._cbcState,
            o = this.constructor.super_.prototype,
            a = i.iv;
        if ('encrypt' === this.type) {
            for (var s = 0; s < this.blockSize; s++) a[s] ^= e[t + s];
            o._update.call(this, a, 0, n, r);
            for (var s = 0; s < this.blockSize; s++) a[s] = n[r + s];
        } else {
            o._update.call(this, e, t, n, r);
            for (var s = 0; s < this.blockSize; s++) n[r + s] ^= a[s];
            for (var s = 0; s < this.blockSize; s++) a[s] = e[t + s];
        }
    });
