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
        p = n || u || d || f,
        _ = p ? r(e.length, String) : [],
        m = _.length;
    for (var h in e)
        (t || c.call(e, h)) &&
            !(
                p &&
                ("length" == h ||
                    (d && ("offset" == h || "parent" == h)) ||
                    (f && ("buffer" == h || "byteLength" == h || "byteOffset" == h)) ||
                    s(h, m))
            ) &&
            _.push(h);
    return _;
};
