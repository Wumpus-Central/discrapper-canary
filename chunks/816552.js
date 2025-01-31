function i(e, t) {
    var n = t && t.cache ? t.cache : _,
        i = t && t.serializer ? t.serializer : d;
    return (t && t.strategy ? t.strategy : l)(e, {
        cache: n,
        serializer: i
    });
}
function r(e) {
    return null == e || 'number' == typeof e || 'boolean' == typeof e;
}
function a(e, t, n, i) {
    var a = r(i) ? i : n(i),
        s = t.get(a);
    return void 0 === s && ((s = e.call(this, i)), t.set(a, s)), s;
}
function s(e, t, n) {
    var i = Array.prototype.slice.call(arguments, 3),
        r = n(i),
        a = t.get(r);
    return void 0 === a && ((a = e.apply(this, i)), t.set(r, a)), a;
}
function o(e, t, n, i, r) {
    return n.bind(t, e, i, r);
}
function l(e, t) {
    var n = 1 === e.length ? a : s;
    return o(e, this, n, t.cache.create(), t.serializer);
}
function u(e, t) {
    return o(e, this, s, t.cache.create(), t.serializer);
}
function c(e, t) {
    return o(e, this, a, t.cache.create(), t.serializer);
}
n.d(t, {
    A: () => p,
    H: () => i
});
var d = function () {
    return JSON.stringify(arguments);
};
function f() {
    this.cache = Object.create(null);
}
(f.prototype.get = function (e) {
    return this.cache[e];
}),
    (f.prototype.set = function (e, t) {
        this.cache[e] = t;
    });
var _ = {
        create: function () {
            return new f();
        }
    },
    p = {
        variadic: u,
        monadic: c
    };
