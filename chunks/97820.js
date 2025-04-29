n.d(t, { u: () => l });
var r = n(964742),
    i = n(40284),
    o = n(304832),
    a = n(603565),
    s = n(144459);
function l() {
    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Hn;
    var e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
        case r.$T:
            break;
        case i.fu:
        case i.Rd:
        case i.IS:
        case i.SG:
            return a.Hn;
        case r.qu:
        case r.js:
        case r.Bs:
        case r.rp:
        default:
            return a.QN;
    }
    var t = e.payload,
        n = t.targetIds,
        l = void 0 === n ? [] : n,
        c = t.prevTargetIds,
        u = void 0 === c ? [] : c,
        d = (0, s.dl)(l, u);
    if (!(d.length > 0 || !(0, o.Hj)(l, u))) return a.Hn;
    var f = u[u.length - 1],
        _ = l[l.length - 1];
    return f !== _ && (f && d.push(f), _ && d.push(_)), d;
}
