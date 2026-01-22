var r = n(677796),
    i = n(262802),
    a = n(359373),
    s = n(1121),
    o = n(422857);

function l(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}
(l.prototype.clear = r),
    (l.prototype.delete = i),
    (l.prototype.get = a),
    (l.prototype.has = s),
    (l.prototype.set = o),
    (e.exports = l);
