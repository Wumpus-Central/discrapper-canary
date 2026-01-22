n.d(t, {
    T: () => l,
});
var r = n(317374),
    i = n(681456),
    a = n(492597),
    s = n(441870),
    o = n(988440);

function l() {
    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.x3;
    var e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
        case r.l6:
            break;
        case i.Yd:
        case i.SO:
        case i.v4:
        case i.n_:
            return s.x3;
        case r.Vw:
        case r.BS:
        case r.dU:
        case r.q2:
        default:
            return s.y2;
    }
    var t = e.payload,
        n = t.targetIds,
        l = void 0 === n ? [] : n,
        c = t.prevTargetIds,
        u = void 0 === c ? [] : c,
        d = (0, o.I8)(l, u);
    if (!(d.length > 0 || !(0, a.BI)(l, u))) return s.x3;
    var f = u[u.length - 1],
        p = l[l.length - 1];
    return f !== p && (f && d.push(f), p && d.push(p)), d;
}
