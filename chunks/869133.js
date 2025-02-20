var r = n(257693),
    i = n(957578).Buffer,
    o = n(875115);
function a(e) {
    var t = e._cipher.encryptBlockRaw(e._prev);
    return o(e._prev), t;
}
var s = 16;
t.encrypt = function (e, t) {
    var n = Math.ceil(t.length / s),
        o = e._cache.length;
    e._cache = i.concat([e._cache, i.allocUnsafe(n * s)]);
    for (var l = 0; l < n; l++) {
        var c = a(e),
            u = o + l * s;
        e._cache.writeUInt32BE(c[0], u + 0), e._cache.writeUInt32BE(c[1], u + 4), e._cache.writeUInt32BE(c[2], u + 8), e._cache.writeUInt32BE(c[3], u + 12);
    }
    var d = e._cache.slice(0, t.length);
    return (e._cache = e._cache.slice(t.length)), r(t, d);
};
