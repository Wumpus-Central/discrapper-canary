n.extend = i;
var r = Object.prototype.hasOwnProperty;
function i(e) {
    var n,
        i,
        a,
        o,
        s = Array.prototype.slice.call(arguments, 1);
    for (n = 0, i = s.length; n < i; n += 1) {
        if (!!(a = s[n])) for (o in a) r.call(a, o) && (e[o] = a[o]);
    }
    return e;
}
n.hop = r;
