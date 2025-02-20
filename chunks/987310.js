n.d(t, { Z: () => l });
var r = n(195168),
    i = 'object' == typeof exports && exports && !exports.nodeType && exports,
    o = i && 'object' == typeof module && module && !module.nodeType && module,
    a = o && o.exports === i ? r.Z.Buffer : void 0,
    s = a ? a.allocUnsafe : void 0;
let l = function (e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = s ? s(n) : new e.constructor(n);
    return e.copy(r), r;
};
