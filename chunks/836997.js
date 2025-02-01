var i = n(957578).Buffer,
    r = n(257693);
function a(e, t, n) {
    var a = t.length,
        s = r(t, e._cache);
    return (e._cache = e._cache.slice(a)), (e._prev = i.concat([e._prev, n ? t : s])), s;
}
t.encrypt = function (e, t, n) {
    for (var r, s = i.allocUnsafe(0); t.length; )
        if ((0 === e._cache.length && ((e._cache = e._cipher.encryptBlock(e._prev)), (e._prev = i.allocUnsafe(0))), e._cache.length <= t.length)) (r = e._cache.length), (s = i.concat([s, a(e, t.slice(0, r), n)])), (t = t.slice(r));
        else {
            s = i.concat([s, a(e, t, n)]);
            break;
        }
    return s;
};
