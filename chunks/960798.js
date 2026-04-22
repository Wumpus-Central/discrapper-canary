e = n.nmd(e);
var r = n(642273),
    i = t && !t.nodeType && t,
    s = i && e && !e.nodeType && e,
    a = s && s.exports === i ? r.Buffer : void 0,
    o = a ? a.allocUnsafe : void 0;
e.exports = function (e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = o ? o(n) : new e.constructor(n);
    return e.copy(r), r;
};
