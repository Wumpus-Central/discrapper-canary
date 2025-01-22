r.d(n, {
    n: function () {
        return l;
    }
});
var i = r(913527),
    a = r.n(i),
    o = r(70956),
    s = r(388032);
let l = (e) => {
    let n = Math.max(0, a()(e).diff(a()(), 's'));
    if (n < 2 * o.Z.Seconds.HOUR) {
        let e = Math.round(n / o.Z.Seconds.MINUTE);
        return s.intl.formatToPlainString(s.t['2JbxRE'], { count: e });
    }
    if (n < o.Z.Seconds.DAY) {
        let e = Math.round(n / o.Z.Seconds.HOUR);
        return s.intl.formatToPlainString(s.t.V9Ebys, { count: e });
    }
    {
        let e = Math.round(n / o.Z.Seconds.DAY);
        return s.intl.formatToPlainString(s.t.OQFxHh, { count: e });
    }
};
