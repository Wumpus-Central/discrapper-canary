n.d(t, { L: () => a });
var i = n(927813),
    l = n(985018);
function a(e) {
    if (e >= i.A.Seconds.HOUR) {
        let t = Math.floor(e / i.A.Seconds.HOUR),
            n = Math.floor((e - t * i.A.Seconds.HOUR) / i.A.Seconds.MINUTE),
            a = e - t * i.A.Seconds.HOUR - n * i.A.Seconds.MINUTE;
        return l.intl.formatToPlainString(l.t["3hz51F"], { hours: t, minutes: n, seconds: a });
    }
    if (!(e >= 60)) return l.intl.formatToPlainString(l.t.IWntYg, { seconds: e });
    {
        let t = Math.floor(e / 60);
        return l.intl.formatToPlainString(l.t.sY3wlG, { minutes: t, seconds: e - 60 * t });
    }
}
