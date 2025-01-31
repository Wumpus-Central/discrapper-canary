n.d(t, { u: () => l });
var i = n(964742),
    r = n(40284),
    a = n(304832),
    s = n(603565),
    o = n(144459);
function l() {
    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.Hn;
    var e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
        case i.$T:
            break;
        case r.fu:
        case r.Rd:
        case r.IS:
        case r.SG:
            return s.Hn;
        case i.qu:
        case i.js:
        case i.Bs:
        case i.rp:
        default:
            return s.QN;
    }
    var t = e.payload,
        n = t.targetIds,
        l = void 0 === n ? [] : n,
        u = t.prevTargetIds,
        c = void 0 === u ? [] : u,
        d = (0, o.dl)(l, c);
    if (!(d.length > 0 || !(0, a.Hj)(l, c))) return s.Hn;
    var f = c[c.length - 1],
        _ = l[l.length - 1];
    return f !== _ && (f && d.push(f), _ && d.push(_)), d;
}
