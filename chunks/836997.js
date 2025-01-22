var i = r(957578).Buffer,
    a = r(257693);
function o(e, n, r) {
    var o = n.length,
        s = a(n, e._cache);
    return (e._cache = e._cache.slice(o)), (e._prev = i.concat([e._prev, r ? n : s])), s;
}
n.encrypt = function (e, n, r) {
    for (var a, s = i.allocUnsafe(0); n.length; )
        if ((0 === e._cache.length && ((e._cache = e._cipher.encryptBlock(e._prev)), (e._prev = i.allocUnsafe(0))), e._cache.length <= n.length)) (a = e._cache.length), (s = i.concat([s, o(e, n.slice(0, a), r)])), (n = n.slice(a));
        else {
            s = i.concat([s, o(e, n, r)]);
            break;
        }
    return s;
};
