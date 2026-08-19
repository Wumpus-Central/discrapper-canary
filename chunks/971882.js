function t(e) {
    var r = this;
    if (
        (r instanceof t || (r = new t()),
        (r.tail = null),
        (r.head = null),
        (r.length = 0),
        e && "function" == typeof e.forEach)
    )
        e.forEach(function (e) {
            r.push(e);
        });
    else if (arguments.length > 0) for (var n = 0, o = arguments.length; n < o; n++) r.push(arguments[n]);
    return r;
}
function r(e, t, n, o) {
    if (!(this instanceof r)) return new r(e, t, n, o);
    (this.list = o),
        (this.value = e),
        t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
        n ? ((n.prev = this), (this.next = n)) : (this.next = null);
}
(e.exports = t),
    (t.Node = r),
    (t.create = t),
    (t.prototype.removeNode = function (e) {
        if (e.list !== this) throw Error("removing node which does not belong to this list");
        var t = e.next,
            r = e.prev;
        t && (t.prev = r),
            r && (r.next = t),
            e === this.head && (this.head = t),
            e === this.tail && (this.tail = r),
            e.list.length--,
            (e.next = null),
            (e.prev = null),
            (e.list = null);
    }),
    (t.prototype.unshiftNode = function (e) {
        if (e !== this.head) {
            e.list && e.list.removeNode(e);
            var t = this.head;
            (e.list = this),
                (e.next = t),
                t && (t.prev = e),
                (this.head = e),
                this.tail || (this.tail = e),
                this.length++;
        }
    }),
    (t.prototype.pushNode = function (e) {
        if (e !== this.tail) {
            e.list && e.list.removeNode(e);
            var t = this.tail;
            (e.list = this),
                (e.prev = t),
                t && (t.next = e),
                (this.tail = e),
                this.head || (this.head = e),
                this.length++;
        }
    }),
    (t.prototype.push = function () {
        for (var e, t, n = 0, o = arguments.length; n < o; n++) {
            (e = this),
                (t = arguments[n]),
                (e.tail = new r(t, e.tail, null, e)),
                e.head || (e.head = e.tail),
                e.length++;
        }
        return this.length;
    }),
    (t.prototype.unshift = function () {
        for (var e, t, n = 0, o = arguments.length; n < o; n++) {
            (e = this),
                (t = arguments[n]),
                (e.head = new r(t, null, e.head, e)),
                e.tail || (e.tail = e.head),
                e.length++;
        }
        return this.length;
    }),
    (t.prototype.pop = function () {
        if (this.tail) {
            var e = this.tail.value;
            return (
                (this.tail = this.tail.prev), this.tail ? (this.tail.next = null) : (this.head = null), this.length--, e
            );
        }
    }),
    (t.prototype.shift = function () {
        if (this.head) {
            var e = this.head.value;
            return (
                (this.head = this.head.next), this.head ? (this.head.prev = null) : (this.tail = null), this.length--, e
            );
        }
    }),
    (t.prototype.forEach = function (e, t) {
        t = t || this;
        for (var r = this.head, n = 0; null !== r; n++) e.call(t, r.value, n, this), (r = r.next);
    }),
    (t.prototype.forEachReverse = function (e, t) {
        t = t || this;
        for (var r = this.tail, n = this.length - 1; null !== r; n--) e.call(t, r.value, n, this), (r = r.prev);
    }),
    (t.prototype.get = function (e) {
        for (var t = 0, r = this.head; null !== r && t < e; t++) r = r.next;
        if (t === e && null !== r) return r.value;
    }),
    (t.prototype.getReverse = function (e) {
        for (var t = 0, r = this.tail; null !== r && t < e; t++) r = r.prev;
        if (t === e && null !== r) return r.value;
    }),
    (t.prototype.map = function (e, r) {
        r = r || this;
        for (var n = new t(), o = this.head; null !== o; ) n.push(e.call(r, o.value, this)), (o = o.next);
        return n;
    }),
    (t.prototype.mapReverse = function (e, r) {
        r = r || this;
        for (var n = new t(), o = this.tail; null !== o; ) n.push(e.call(r, o.value, this)), (o = o.prev);
        return n;
    }),
    (t.prototype.reduce = function (e, t) {
        var r,
            n = this.head;
        if (arguments.length > 1) r = t;
        else if (this.head) (n = this.head.next), (r = this.head.value);
        else throw TypeError("Reduce of empty list with no initial value");
        for (var o = 0; null !== n; o++) (r = e(r, n.value, o)), (n = n.next);
        return r;
    }),
    (t.prototype.reduceReverse = function (e, t) {
        var r,
            n = this.tail;
        if (arguments.length > 1) r = t;
        else if (this.tail) (n = this.tail.prev), (r = this.tail.value);
        else throw TypeError("Reduce of empty list with no initial value");
        for (var o = this.length - 1; null !== n; o--) (r = e(r, n.value, o)), (n = n.prev);
        return r;
    }),
    (t.prototype.toArray = function () {
        for (var e = Array(this.length), t = 0, r = this.head; null !== r; t++) (e[t] = r.value), (r = r.next);
        return e;
    }),
    (t.prototype.toArrayReverse = function () {
        for (var e = Array(this.length), t = 0, r = this.tail; null !== r; t++) (e[t] = r.value), (r = r.prev);
        return e;
    }),
    (t.prototype.slice = function (e, r) {
        (r = r || this.length) < 0 && (r += this.length), (e = e || 0) < 0 && (e += this.length);
        var n = new t();
        if (r < e || r < 0) return n;
        e < 0 && (e = 0), r > this.length && (r = this.length);
        for (var o = 0, i = this.head; null !== i && o < e; o++) i = i.next;
        for (; null !== i && o < r; o++, i = i.next) n.push(i.value);
        return n;
    }),
    (t.prototype.sliceReverse = function (e, r) {
        (r = r || this.length) < 0 && (r += this.length), (e = e || 0) < 0 && (e += this.length);
        var n = new t();
        if (r < e || r < 0) return n;
        e < 0 && (e = 0), r > this.length && (r = this.length);
        for (var o = this.length, i = this.tail; null !== i && o > r; o--) i = i.prev;
        for (; null !== i && o > e; o--, i = i.prev) n.push(i.value);
        return n;
    }),
    (t.prototype.reverse = function () {
        for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
            var n = r.prev;
            (r.prev = r.next), (r.next = n);
        }
        return (this.head = t), (this.tail = e), this;
    });
