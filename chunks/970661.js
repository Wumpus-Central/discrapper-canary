t.extend = i;
var n = Object.prototype.hasOwnProperty;
function i(e) {
    var t,
        i,
        r,
        a,
        s = Array.prototype.slice.call(arguments, 1);
    for (t = 0, i = s.length; t < i; t += 1) if ((r = s[t])) for (a in r) n.call(r, a) && (e[a] = r[a]);
    return e;
}
t.hop = n;
