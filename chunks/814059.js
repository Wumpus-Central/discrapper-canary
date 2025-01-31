n.d(t, { n: () => o });
var i = n(913527),
    r = n.n(i),
    a = n(70956),
    s = n(388032);
let o = (e) => {
    let t = Math.max(0, r()(e).diff(r()(), 's'));
    if (t < 2 * a.Z.Seconds.HOUR) {
        let e = Math.round(t / a.Z.Seconds.MINUTE);
        return s.intl.formatToPlainString(s.t['2JbxRE'], { count: e });
    }
    if (t < a.Z.Seconds.DAY) {
        let e = Math.round(t / a.Z.Seconds.HOUR);
        return s.intl.formatToPlainString(s.t.V9Ebys, { count: e });
    }
    {
        let e = Math.round(t / a.Z.Seconds.DAY);
        return s.intl.formatToPlainString(s.t.OQFxHh, { count: e });
    }
};
