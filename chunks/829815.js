e = n.nmd(e);
var i = n(325237),
    r = t && !t.nodeType && t,
    a = r && e && !e.nodeType && e,
    s = a && a.exports === r ? i.Buffer : void 0,
    o = s ? s.allocUnsafe : void 0;
function l(e, t) {
    if (t) return e.slice();
    var n = e.length,
        i = o ? o(n) : new e.constructor(n);
    return e.copy(i), i;
}
e.exports = l;
