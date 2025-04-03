a.d(e, { n: () => f });
var c = a(913527),
    d = a.n(c),
    s = a(70956),
    n = a(388032);
let f = (t) => {
    let e = Math.max(0, d()(t).diff(d()(), 's'));
    if (e < 2 * s.Z.Seconds.HOUR) {
        let t = Math.round(e / s.Z.Seconds.MINUTE);
        return n.NW.formatToPlainString(n.t['2JbxRE'], { count: t });
    }
    if (e < s.Z.Seconds.DAY) {
        let t = Math.round(e / s.Z.Seconds.HOUR);
        return n.NW.formatToPlainString(n.t.V9Ebys, { count: t });
    }
    {
        let t = Math.round(e / s.Z.Seconds.DAY);
        return n.NW.formatToPlainString(n.t.OQFxHh, { count: t });
    }
};
