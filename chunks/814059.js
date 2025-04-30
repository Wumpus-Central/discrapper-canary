n.d(t, { n: () => s });
var r = n(913527),
    i = n.n(r),
    a = n(70956),
    o = n(388032);
let s = (e) => {
    let t = Math.max(0, i()(e).diff(i()(), 's'));
    if (t < 2 * a.Z.Seconds.HOUR) {
        let e = Math.round(t / a.Z.Seconds.MINUTE);
        return o.intl.formatToPlainString(o.t['2JbxRE'], { count: e });
    }
    if (t < a.Z.Seconds.DAY) {
        let e = Math.round(t / a.Z.Seconds.HOUR);
        return o.intl.formatToPlainString(o.t.V9Ebys, { count: e });
    }
    {
        let e = Math.round(t / a.Z.Seconds.DAY);
        return o.intl.formatToPlainString(o.t.OQFxHh, { count: e });
    }
};
