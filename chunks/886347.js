function i(l) {
    let t = l || ("u" > typeof navigator ? navigator.userAgent : ""),
        d = "u" > typeof navigator && navigator.maxTouchPoints > 0;
    return /iPad|iPhone|iPod/.test(t) || (/Mac OS/.test(t) && d) || /iPadOS/.test(t);
}
let e = [
    { outerHeight: 852, outerWidth: 393 },
    { outerHeight: 932, outerWidth: 430 },
    { innerHeight: 631, innerWidth: 375 },
    { innerHeight: 920, innerWidth: 402 },
    { outerHeight: 874, outerWidth: 402 },
    { innerHeight: 874, innerWidth: 402 },
    { outerHeight: 912, outerWidth: 420 },
    { outerHeight: 873, outerWidth: 402 },
    { outerHeight: 956, outerWidth: 440 },
];
d.d(
    t,
    {},
    {
        a: function () {
            if ("u" < typeof window) return !1;
            let { outerHeight: l, outerWidth: t, innerHeight: d, innerWidth: i } = window;
            return e.some(
                (e) => (e.outerHeight === l && e.outerWidth === t) || (e.innerHeight === d && e.innerWidth === i),
            );
        },
        i: function (l) {
            let t = l || ("u" > typeof navigator ? navigator.userAgent : ""),
                d = "u" > typeof navigator && navigator.maxTouchPoints > 0;
            return /iPad/.test(t) || (/Mac OS/.test(t) && d && !/iPhone|iPod/.test(t));
        },
        n: function (l) {
            let t,
                d,
                e = l || ("u" > typeof navigator ? navigator.userAgent : "");
            return !(
                /Mobile|Android/i.test(e) ||
                ((t = /Linux/i.test(e)),
                (d = /Chrome/i.test(e) && !/Edge/i.test(e)),
                !/Mobile|Android/i.test(e) &&
                    t &&
                    d &&
                    (("u" > typeof navigator && navigator.maxTouchPoints > 0) ||
                        "ontouchstart" in ("u" > typeof document ? document.documentElement : {}))) ||
                i(e)
            );
        },
        o: function (l) {
            let t = l || ("u" > typeof navigator ? navigator.userAgent : "");
            return /Safari/i.test(t) && !/Chrome|Chromium|Edge/i.test(t);
        },
        r: i,
        t: function (l) {
            let t = l || ("u" > typeof navigator ? navigator.userAgent : "");
            return /Android/i.test(t);
        },
    },
);
