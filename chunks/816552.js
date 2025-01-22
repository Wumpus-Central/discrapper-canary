function i(e, n) {
    var r = n && n.cache ? n.cache : h,
        i = n && n.serializer ? n.serializer : f;
    return (n && n.strategy ? n.strategy : u)(e, {
        cache: r,
        serializer: i
    });
}
function a(e) {
    return null == e || 'number' == typeof e || 'boolean' == typeof e;
}
function o(e, n, r, i) {
    var o = a(i) ? i : r(i),
        s = n.get(o);
    return void 0 === s && ((s = e.call(this, i)), n.set(o, s)), s;
}
function s(e, n, r) {
    var i = Array.prototype.slice.call(arguments, 3),
        a = r(i),
        o = n.get(a);
    return void 0 === o && ((o = e.apply(this, i)), n.set(a, o)), o;
}
function l(e, n, r, i, a) {
    return r.bind(n, e, i, a);
}
function u(e, n) {
    var r = 1 === e.length ? o : s;
    return l(e, this, r, n.cache.create(), n.serializer);
}
function c(e, n) {
    return l(e, this, s, n.cache.create(), n.serializer);
}
function d(e, n) {
    return l(e, this, o, n.cache.create(), n.serializer);
}
r.d(n, {
    A: function () {
        return _;
    },
    H: function () {
        return i;
    }
});
var f = function () {
    return JSON.stringify(arguments);
};
function p() {
    this.cache = Object.create(null);
}
(p.prototype.get = function (e) {
    return this.cache[e];
}),
    (p.prototype.set = function (e, n) {
        this.cache[e] = n;
    });
var h = {
        create: function () {
            return new p();
        }
    },
    _ = {
        variadic: c,
        monadic: d
    };
