var r = n(484155),
    i = n(841566),
    o = n(290677),
    a = n(551023),
    s = n(682653),
    l = n(454745),
    c = Object.prototype.hasOwnProperty;
function u(e, t) {
    var n = o(e),
        u = !n && i(e),
        d = !n && !u && a(e),
        f = !n && !u && !d && l(e),
        p = n || u || d || f,
        _ = p ? r(e.length, String) : [],
        h = _.length;
    for (var m in e) (t || c.call(e, m)) && !(p && ('length' == m || (d && ('offset' == m || 'parent' == m)) || (f && ('buffer' == m || 'byteLength' == m || 'byteOffset' == m)) || s(m, h))) && _.push(m);
    return _;
}
e.exports = u;
