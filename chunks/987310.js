var i = r(195168),
    a = 'object' == typeof exports && exports && !exports.nodeType && exports,
    o = a && 'object' == typeof module && module && !module.nodeType && module,
    s = o && o.exports === a ? i.Z.Buffer : void 0,
    l = s ? s.allocUnsafe : void 0;
function u(e, n) {
    if (n) return e.slice();
    var r = e.length,
        i = l ? l(r) : new e.constructor(r);
    return e.copy(i), i;
}
n.Z = u;
