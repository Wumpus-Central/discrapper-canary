n.d(t, { Z: () => l });
var i = n(195168),
    r = 'object' == typeof exports && exports && !exports.nodeType && exports,
    a = r && 'object' == typeof module && module && !module.nodeType && module,
    s = a && a.exports === r ? i.Z.Buffer : void 0,
    o = s ? s.allocUnsafe : void 0;
let l = function (e, t) {
    if (t) return e.slice();
    var n = e.length,
        i = o ? o(n) : new e.constructor(n);
    return e.copy(i), i;
};
