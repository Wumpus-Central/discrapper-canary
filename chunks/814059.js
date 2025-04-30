n.d(t, { n: () => s });
var r = n(913527),
    i = n.n(r),
    o = n(70956),
    a = n(388032);
let s = (e) => {
    let t = Math.max(0, i()(e).diff(i()(), 's'));
    if (t < 2 * o.Z.Seconds.HOUR) {
        let e = Math.round(t / o.Z.Seconds.MINUTE);
        return a.intl.formatToPlainString(a.t['2JbxRE'], { count: e });
    }
    if (t < o.Z.Seconds.DAY) {
        let e = Math.round(t / o.Z.Seconds.HOUR);
        return a.intl.formatToPlainString(a.t.V9Ebys, { count: e });
    }
    {
        let e = Math.round(t / o.Z.Seconds.DAY);
        return a.intl.formatToPlainString(a.t.OQFxHh, { count: e });
    }
};
