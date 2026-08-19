var n = r(744784);
function o(e) {
    (this.data = e), (this.left = null), (this.right = null), (this.red = !0);
}
function i(e) {
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
(o.prototype.get_child = function (e) {
    return e ? this.right : this.left;
}),
    (o.prototype.set_child = function (e, t) {
        e ? (this.right = t) : (this.left = t);
    }),
    (i.prototype = new n()),
    (i.prototype.insert = function (e) {
        var t = !1;
        if (null === this._root) (this._root = new o(e)), (t = !0), this.size++;
        else {
            var r = new o(void 0),
                n = 0,
                i = 0,
                u = null,
                c = r,
                f = null,
                p = this._root;
            for (c.right = this._root; ; ) {
                if (
                    (null === p
                        ? ((p = new o(e)), f.set_child(n, p), (t = !0), this.size++)
                        : a(p.left) && a(p.right) && ((p.red = !0), (p.left.red = !1), (p.right.red = !1)),
                    a(p) && a(f))
                ) {
                    var d = c.right === u;
                    p === f.get_child(i) ? c.set_child(d, s(u, !i)) : c.set_child(d, l(u, !i));
                }
                var h = this._comparator(p.data, e);
                if (0 === h) break;
                (i = n), (n = h < 0), null !== u && (c = u), (u = f), (f = p), (p = p.get_child(n));
            }
            this._root = r.right;
        }
        return (this._root.red = !1), t;
    }),
    (i.prototype.remove = function (e) {
        if (null === this._root) return !1;
        var t = new o(void 0),
            r = t;
        r.right = this._root;
        for (var n = null, i = null, u = null, c = 1; null !== r.get_child(c); ) {
            var f = c;
            (i = n), (n = r), (r = r.get_child(c));
            var p = this._comparator(e, r.data);
            if (((c = p > 0), 0 === p && (u = r), !a(r) && !a(r.get_child(c)))) {
                if (a(r.get_child(!c))) {
                    var d = s(r, c);
                    n.set_child(f, d), (n = d);
                } else if (!a(r.get_child(!c))) {
                    var h = n.get_child(!f);
                    if (null !== h)
                        if (a(h.get_child(!f)) || a(h.get_child(f))) {
                            var m = i.right === n;
                            a(h.get_child(f)) ? i.set_child(m, l(n, f)) : a(h.get_child(!f)) && i.set_child(m, s(n, f));
                            var v = i.get_child(m);
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
    (e.exports = i);
