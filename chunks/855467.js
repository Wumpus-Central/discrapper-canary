var i = r(108381),
    a = r(957578).Buffer;
function o(e) {
    var n = a.allocUnsafe(4);
    return n.writeUInt32BE(e, 0), n;
}
e.exports = function (e, n) {
    for (var r, s = a.alloc(0), l = 0; s.length < n; ) (r = o(l++)), (s = a.concat([s, i('sha1').update(e).update(r).digest()]));
    return s.slice(0, n);
};
