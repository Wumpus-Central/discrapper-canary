e = n.nmd(e);
var r = n(325237),
    i = t && !t.nodeType && t,
    o = i && e && !e.nodeType && e,
    a = o && o.exports === i ? r.Buffer : void 0,
    s = a ? a.allocUnsafe : void 0;
function l(e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = s ? s(n) : new e.constructor(n);
    return e.copy(r), r;
}
e.exports = l;
