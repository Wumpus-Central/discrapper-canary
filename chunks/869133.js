var i = n(257693),
    r = n(957578).Buffer,
    a = n(875115);
function s(e) {
    var t = e._cipher.encryptBlockRaw(e._prev);
    return a(e._prev), t;
}
var o = 16;
t.encrypt = function (e, t) {
    var n = Math.ceil(t.length / o),
        a = e._cache.length;
    e._cache = r.concat([e._cache, r.allocUnsafe(n * o)]);
    for (var l = 0; l < n; l++) {
        var u = s(e),
            c = a + l * o;
        e._cache.writeUInt32BE(u[0], c + 0), e._cache.writeUInt32BE(u[1], c + 4), e._cache.writeUInt32BE(u[2], c + 8), e._cache.writeUInt32BE(u[3], c + 12);
    }
    var d = e._cache.slice(0, t.length);
    return (e._cache = e._cache.slice(t.length)), i(t, d);
};
