var i = r(21841),
    a = r(689118),
    o = r(449348),
    s = r(922689);
function l(e, n) {
    i.equal(n.length, 24, 'Invalid key length');
    var r = n.slice(0, 8),
        a = n.slice(8, 16),
        o = n.slice(16, 24);
    'encrypt' === e
        ? (this.ciphers = [
              s.create({
                  type: 'encrypt',
                  key: r
              }),
              s.create({
                  type: 'decrypt',
                  key: a
              }),
              s.create({
                  type: 'encrypt',
                  key: o
              })
          ])
        : (this.ciphers = [
              s.create({
                  type: 'decrypt',
                  key: o
              }),
              s.create({
                  type: 'encrypt',
                  key: a
              }),
              s.create({
                  type: 'decrypt',
                  key: r
              })
          ]);
}
function u(e) {
    o.call(this, e);
    var n = new l(this.type, this.options.key);
    this._edeState = n;
}
a(u, o),
    (e.exports = u),
    (u.create = function (e) {
        return new u(e);
    }),
    (u.prototype._update = function (e, n, r, i) {
        var a = this._edeState;
        a.ciphers[0]._update(e, n, r, i), a.ciphers[1]._update(r, i, r, i), a.ciphers[2]._update(r, i, r, i);
    }),
    (u.prototype._pad = s.prototype._pad),
    (u.prototype._unpad = s.prototype._unpad);
