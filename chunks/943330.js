n.d(t, { L: () => r });
var i = n(927813),
    s = n(985018);
function r(e) {
    if (e >= i.A.Seconds.HOUR) {
        let t = Math.floor(e / i.A.Seconds.HOUR),
            n = Math.floor((e - t * i.A.Seconds.HOUR) / i.A.Seconds.MINUTE),
            r = e - t * i.A.Seconds.HOUR - n * i.A.Seconds.MINUTE;
        return s.intl.formatToPlainString(s.t["3hz51F"], {
            hours: t,
            minutes: n,
            seconds: r,
        });
    }
    if (!(e >= 60)) return s.intl.formatToPlainString(s.t.IWntYg, { seconds: e });
    {
        let t = Math.floor(e / 60);
        return s.intl.formatToPlainString(s.t.sY3wlG, {
            minutes: t,
            seconds: e - 60 * t,
        });
    }
}
