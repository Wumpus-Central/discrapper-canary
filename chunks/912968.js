var r = n(484155),
    i = n(841566),
    a = n(290677),
    o = n(551023),
    s = n(682653),
    l = n(454745),
    c = Object.prototype.hasOwnProperty;
e.exports = function (e, t) {
    var n = a(e),
        u = !n && i(e),
        d = !n && !u && o(e),
        f = !n && !u && !d && l(e),
        _ = n || u || d || f,
        p = _ ? r(e.length, String) : [],
        h = p.length;
    for (var m in e) (t || c.call(e, m)) && !(_ && ('length' == m || (d && ('offset' == m || 'parent' == m)) || (f && ('buffer' == m || 'byteLength' == m || 'byteOffset' == m)) || s(m, h))) && p.push(m);
    return p;
};
