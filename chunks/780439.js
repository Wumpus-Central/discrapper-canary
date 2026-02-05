"use strict";
n.d(t, { T: () => l });
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
        u = t.prevTargetIds,
        c = void 0 === u ? [] : u,
        d = (0, o.I8)(l, c);
    if (!(d.length > 0 || !(0, a.BI)(l, c))) return s.x3;
    var _ = c[c.length - 1],
        f = l[l.length - 1];
    return _ !== f && (_ && d.push(_), f && d.push(f)), d;
}
