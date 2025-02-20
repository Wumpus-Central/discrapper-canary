var r = n(957578).Buffer,
    i = n(257693);
function o(e, t, n) {
    var o = t.length,
        a = i(t, e._cache);
    return (e._cache = e._cache.slice(o)), (e._prev = r.concat([e._prev, n ? t : a])), a;
}
t.encrypt = function (e, t, n) {
    for (var i, a = r.allocUnsafe(0); t.length; )
        if ((0 === e._cache.length && ((e._cache = e._cipher.encryptBlock(e._prev)), (e._prev = r.allocUnsafe(0))), e._cache.length <= t.length)) (i = e._cache.length), (a = r.concat([a, o(e, t.slice(0, i), n)])), (t = t.slice(i));
        else {
            a = r.concat([a, o(e, t, n)]);
            break;
        }
    return a;
};
