var n = r(744784);
function i(e) {
    (this.data = e), (this.left = null), (this.right = null), (this.red = !0);
}
function o(e) {
    (this._root = null), (this._comparator = e), (this.size = 0);
}
function a(e) {
    return null !== e && e.red;
}
function s(e, t) {
    var r = e.get_child(!t);
    return e.set_child(!t, r.get_child(t)), r.set_child(t, e), (e.red = !0), (r.red = !1), r;
}
function l(e, t) {
    return e.set_child(!t, s(e.get_child(!t), !t)), s(e, t);
}
(i.prototype.get_child = function (e) {
    return e ? this.right : this.left;
}),
    (i.prototype.set_child = function (e, t) {
        e ? (this.right = t) : (this.left = t);
    }),
    (o.prototype = new n()),
    (o.prototype.insert = function (e) {
        var t = !1;
        if (null === this._root) (this._root = new i(e)), (t = !0), this.size++;
        else {
            var r = new i(void 0),
                n = 0,
                o = 0,
                u = null,
                c = r,
                f = null,
                d = this._root;
            for (c.right = this._root; ; ) {
                if (
                    (null === d
                        ? ((d = new i(e)), f.set_child(n, d), (t = !0), this.size++)
                        : a(d.left) && a(d.right) && ((d.red = !0), (d.left.red = !1), (d.right.red = !1)),
                    a(d) && a(f))
                ) {
                    var p = c.right === u;
                    d === f.get_child(o) ? c.set_child(p, s(u, !o)) : c.set_child(p, l(u, !o));
                }
                var h = this._comparator(d.data, e);
                if (0 === h) break;
                (o = n), (n = h < 0), null !== u && (c = u), (u = f), (f = d), (d = d.get_child(n));
            }
            this._root = r.right;
        }
        return (this._root.red = !1), t;
    }),
    (o.prototype.remove = function (e) {
        if (null === this._root) return !1;
        var t = new i(void 0),
            r = t;
        r.right = this._root;
        for (var n = null, o = null, u = null, c = 1; null !== r.get_child(c); ) {
            var f = c;
            (o = n), (n = r), (r = r.get_child(c));
            var d = this._comparator(e, r.data);
            if (((c = d > 0), 0 === d && (u = r), !a(r) && !a(r.get_child(c)))) {
                if (a(r.get_child(!c))) {
                    var p = s(r, c);
                    n.set_child(f, p), (n = p);
                } else if (!a(r.get_child(!c))) {
                    var h = n.get_child(!f);
                    if (null !== h)
                        if (a(h.get_child(!f)) || a(h.get_child(f))) {
                            var m = o.right === n;
                            a(h.get_child(f)) ? o.set_child(m, l(n, f)) : a(h.get_child(!f)) && o.set_child(m, s(n, f));
                            var v = o.get_child(m);
                            (v.red = !0), (r.red = !0), (v.left.red = !1), (v.right.red = !1);
                        } else (n.red = !1), (h.red = !0), (r.red = !0);
                }
            }
        }
        return (
            null !== u && ((u.data = r.data), n.set_child(n.right === r, r.get_child(null === r.left)), this.size--),
            (this._root = t.right),
            null !== this._root && (this._root.red = !1),
            null !== u
        );
    }),
    (e.exports = o);
