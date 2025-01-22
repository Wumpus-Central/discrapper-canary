function n() {}
function r(e) {
    (this._tree = e), (this._ancestors = []), (this._cursor = null);
}
(n.prototype.clear = function () {
    (this._root = null), (this.size = 0);
}),
    (n.prototype.find = function (e) {
        for (var n = this._root; null !== n; ) {
            var r = this._comparator(e, n.data);
            if (0 === r) return n.data;
            n = n.get_child(r > 0);
        }
        return null;
    }),
    (n.prototype.findIter = function (e) {
        for (var n = this._root, r = this.iterator(); null !== n; ) {
            var i = this._comparator(e, n.data);
            if (0 === i) return (r._cursor = n), r;
            r._ancestors.push(n), (n = n.get_child(i > 0));
        }
        return null;
    }),
    (n.prototype.lowerBound = function (e) {
        for (var n = this._root, r = this.iterator(), i = this._comparator; null !== n; ) {
            var a = i(e, n.data);
            if (0 === a) return (r._cursor = n), r;
            r._ancestors.push(n), (n = n.get_child(a > 0));
        }
        for (var o = r._ancestors.length - 1; o >= 0; --o) if (0 > i(e, (n = r._ancestors[o]).data)) return (r._cursor = n), (r._ancestors.length = o), r;
        return (r._ancestors.length = 0), r;
    }),
    (n.prototype.upperBound = function (e) {
        for (var n = this.lowerBound(e), r = this._comparator; null !== n.data() && 0 === r(n.data(), e); ) n.next();
        return n;
    }),
    (n.prototype.min = function () {
        var e = this._root;
        if (null === e) return null;
        for (; null !== e.left; ) e = e.left;
        return e.data;
    }),
    (n.prototype.max = function () {
        var e = this._root;
        if (null === e) return null;
        for (; null !== e.right; ) e = e.right;
        return e.data;
    }),
    (n.prototype.iterator = function () {
        return new r(this);
    }),
    (n.prototype.each = function (e) {
        for (var n, r = this.iterator(); null !== (n = r.next()); ) e(n);
    }),
    (n.prototype.reach = function (e) {
        for (var n, r = this.iterator(); null !== (n = r.prev()); ) e(n);
    }),
    (r.prototype.data = function () {
        return null !== this._cursor ? this._cursor.data : null;
    }),
    (r.prototype.next = function () {
        if (null === this._cursor) {
            var e,
                n = this._tree._root;
            null !== n && this._minNode(n);
        } else if (null === this._cursor.right)
            do
                if (((e = this._cursor), this._ancestors.length)) this._cursor = this._ancestors.pop();
                else {
                    this._cursor = null;
                    break;
                }
            while (this._cursor.right === e);
        else this._ancestors.push(this._cursor), this._minNode(this._cursor.right);
        return null !== this._cursor ? this._cursor.data : null;
    }),
    (r.prototype.prev = function () {
        if (null === this._cursor) {
            var e,
                n = this._tree._root;
            null !== n && this._maxNode(n);
        } else if (null === this._cursor.left)
            do
                if (((e = this._cursor), this._ancestors.length)) this._cursor = this._ancestors.pop();
                else {
                    this._cursor = null;
                    break;
                }
            while (this._cursor.left === e);
        else this._ancestors.push(this._cursor), this._maxNode(this._cursor.left);
        return null !== this._cursor ? this._cursor.data : null;
    }),
    (r.prototype._minNode = function (e) {
        for (; null !== e.left; ) this._ancestors.push(e), (e = e.left);
        this._cursor = e;
    }),
    (r.prototype._maxNode = function (e) {
        for (; null !== e.right; ) this._ancestors.push(e), (e = e.right);
        this._cursor = e;
    }),
    (e.exports = n);
