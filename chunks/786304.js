var i = n(21841),
    r = n(689118),
    a = n(449348),
    s = n(922689);
function o(e, t) {
    i.equal(t.length, 24, 'Invalid key length');
    var n = t.slice(0, 8),
        r = t.slice(8, 16),
        a = t.slice(16, 24);
    'encrypt' === e
        ? (this.ciphers = [
              s.create({
                  type: 'encrypt',
                  key: n
              }),
              s.create({
                  type: 'decrypt',
                  key: r
              }),
              s.create({
                  type: 'encrypt',
                  key: a
              })
          ])
        : (this.ciphers = [
              s.create({
                  type: 'decrypt',
                  key: a
              }),
              s.create({
                  type: 'encrypt',
                  key: r
              }),
              s.create({
                  type: 'decrypt',
                  key: n
              })
          ]);
}
function l(e) {
    a.call(this, e);
    var t = new o(this.type, this.options.key);
    this._edeState = t;
}
r(l, a),
    (e.exports = l),
    (l.create = function (e) {
        return new l(e);
    }),
    (l.prototype._update = function (e, t, n, i) {
        var r = this._edeState;
        r.ciphers[0]._update(e, t, n, i), r.ciphers[1]._update(n, i, n, i), r.ciphers[2]._update(n, i, n, i);
    }),
    (l.prototype._pad = s.prototype._pad),
    (l.prototype._unpad = s.prototype._unpad);
