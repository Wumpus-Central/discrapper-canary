var r = n(108381),
    i = n(957578).Buffer;
function o(e) {
    var t = i.allocUnsafe(4);
    return t.writeUInt32BE(e, 0), t;
}
e.exports = function (e, t) {
    for (var n, a = i.alloc(0), s = 0; a.length < t; ) (n = o(s++)), (a = i.concat([a, r('sha1').update(e).update(n).digest()]));
    return a.slice(0, t);
};
