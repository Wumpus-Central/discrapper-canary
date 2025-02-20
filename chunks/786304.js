var r = n(21841),
    i = n(689118),
    o = n(449348),
    a = n(922689);
function s(e, t) {
    r.equal(t.length, 24, 'Invalid key length');
    var n = t.slice(0, 8),
        i = t.slice(8, 16),
        o = t.slice(16, 24);
    'encrypt' === e
        ? (this.ciphers = [
              a.create({
                  type: 'encrypt',
                  key: n
              }),
              a.create({
                  type: 'decrypt',
                  key: i
              }),
              a.create({
                  type: 'encrypt',
                  key: o
              })
          ])
        : (this.ciphers = [
              a.create({
                  type: 'decrypt',
                  key: o
              }),
              a.create({
                  type: 'encrypt',
                  key: i
              }),
              a.create({
                  type: 'decrypt',
                  key: n
              })
          ]);
}
function l(e) {
    o.call(this, e);
    var t = new s(this.type, this.options.key);
    this._edeState = t;
}
i(l, o),
    (e.exports = l),
    (l.create = function (e) {
        return new l(e);
    }),
    (l.prototype._update = function (e, t, n, r) {
        var i = this._edeState;
        i.ciphers[0]._update(e, t, n, r), i.ciphers[1]._update(n, r, n, r), i.ciphers[2]._update(n, r, n, r);
    }),
    (l.prototype._pad = a.prototype._pad),
    (l.prototype._unpad = a.prototype._unpad);
