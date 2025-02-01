var i = n(21841),
    r = n(689118),
    a = {};
function s(e) {
    i.equal(e.length, 8, 'Invalid IV length'), (this.iv = Array(8));
    for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t];
}
function o(e) {
    function t(t) {
        e.call(this, t), this._cbcInit();
    }
    r(t, e);
    for (var n = Object.keys(a), i = 0; i < n.length; i++) {
        var s = n[i];
        t.prototype[s] = a[s];
    }
    return (
        (t.create = function (e) {
            return new t(e);
        }),
        t
    );
}
(t.instantiate = o),
    (a._cbcInit = function () {
        var e = new s(this.options.iv);
        this._cbcState = e;
    }),
    (a._update = function (e, t, n, i) {
        var r = this._cbcState,
            a = this.constructor.super_.prototype,
            s = r.iv;
        if ('encrypt' === this.type) {
            for (var o = 0; o < this.blockSize; o++) s[o] ^= e[t + o];
            a._update.call(this, s, 0, n, i);
            for (var o = 0; o < this.blockSize; o++) s[o] = n[i + o];
        } else {
            a._update.call(this, e, t, n, i);
            for (var o = 0; o < this.blockSize; o++) n[i + o] ^= s[o];
            for (var o = 0; o < this.blockSize; o++) s[o] = e[t + o];
        }
    });
