c.d(e, { n: () => o });
var d = c(913527),
    a = c.n(d),
    s = c(70956),
    n = c(388032);
let o = (t) => {
    let e = Math.max(0, a()(t).diff(a()(), 's'));
    if (e < 2 * s.Z.Seconds.HOUR) {
        let t = Math.round(e / s.Z.Seconds.MINUTE);
        return n.intl.formatToPlainString(n.t['2JbxRE'], { count: t });
    }
    if (e < s.Z.Seconds.DAY) {
        let t = Math.round(e / s.Z.Seconds.HOUR);
        return n.intl.formatToPlainString(n.t.V9Ebys, { count: t });
    }
    {
        let t = Math.round(e / s.Z.Seconds.DAY);
        return n.intl.formatToPlainString(n.t.OQFxHh, { count: t });
    }
};
