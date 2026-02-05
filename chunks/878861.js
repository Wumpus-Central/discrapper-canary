var r = n(744784);
function i(e) {
    (this.data = e), (this.left = null), (this.right = null), (this.red = !0);
}
function a(e) {
    (this._root = null), (this._comparator = e), (this.size = 0);
}
function s(e) {
    return null !== e && e.red;
}
function o(e, t) {
    var n = e.get_child(!t);
    return e.set_child(!t, n.get_child(t)), n.set_child(t, e), (e.red = !0), (n.red = !1), n;
}
function l(e, t) {
    return e.set_child(!t, o(e.get_child(!t), !t)), o(e, t);
}
(i.prototype.get_child = function (e) {
    return e ? this.right : this.left;
}),
    (i.prototype.set_child = function (e, t) {
        e ? (this.right = t) : (this.left = t);
    }),
    (a.prototype = new r()),
    (a.prototype.insert = function (e) {
        var t = !1;
        if (null === this._root) (this._root = new i(e)), (t = !0), this.size++;
        else {
            var n = new i(void 0),
                r = 0,
                a = 0,
                u = null,
                c = n,
                d = null,
                _ = this._root;
            for (c.right = this._root; ; ) {
                if (
                    (null === _
                        ? ((_ = new i(e)), d.set_child(r, _), (t = !0), this.size++)
                        : s(_.left) && s(_.right) && ((_.red = !0), (_.left.red = !1), (_.right.red = !1)),
                    s(_) && s(d))
                ) {
                    var f = c.right === u;
                    _ === d.get_child(a) ? c.set_child(f, o(u, !a)) : c.set_child(f, l(u, !a));
                }
                var p = this._comparator(_.data, e);
                if (0 === p) break;
                (a = r), (r = p < 0), null !== u && (c = u), (u = d), (d = _), (_ = _.get_child(r));
            }
            this._root = n.right;
        }
        return (this._root.red = !1), t;
    }),
    (a.prototype.remove = function (e) {
        if (null === this._root) return !1;
        var t = new i(void 0),
            n = t;
        n.right = this._root;
        for (var r = null, a = null, u = null, c = 1; null !== n.get_child(c); ) {
            var d = c;
            (a = r), (r = n), (n = n.get_child(c));
            var _ = this._comparator(e, n.data);
            if (((c = _ > 0), 0 === _ && (u = n), !s(n) && !s(n.get_child(c)))) {
                if (s(n.get_child(!c))) {
                    var f = o(n, c);
                    r.set_child(d, f), (r = f);
                } else if (!s(n.get_child(!c))) {
                    var p = r.get_child(!d);
                    if (null !== p)
                        if (s(p.get_child(!d)) || s(p.get_child(d))) {
                            var h = a.right === r;
                            s(p.get_child(d)) ? a.set_child(h, l(r, d)) : s(p.get_child(!d)) && a.set_child(h, o(r, d));
                            var m = a.get_child(h);
                            (m.red = !0), (n.red = !0), (m.left.red = !1), (m.right.red = !1);
                        } else (r.red = !1), (p.red = !0), (n.red = !0);
                }
            }
        }
        return (
            null !== u && ((u.data = n.data), r.set_child(r.right === n, n.get_child(null === n.left)), this.size--),
            (this._root = t.right),
            null !== this._root && (this._root.red = !1),
            null !== u
        );
    }),
    (e.exports = a);
