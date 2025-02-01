var i = n(108381),
    r = n(957578).Buffer;
function a(e) {
    var t = r.allocUnsafe(4);
    return t.writeUInt32BE(e, 0), t;
}
e.exports = function (e, t) {
    for (var n, s = r.alloc(0), o = 0; s.length < t; ) (n = a(o++)), (s = r.concat([s, i('sha1').update(e).update(n).digest()]));
    return s.slice(0, t);
};
