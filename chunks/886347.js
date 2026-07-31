function i(l) {
    let t = l || ("u" > typeof navigator ? navigator.userAgent : ""),
        d = "u" > typeof navigator && navigator.maxTouchPoints > 0;
    return /iPad|iPhone|iPod/.test(t) || (/Mac OS/.test(t) && d) || /iPadOS/.test(t);
}
function e(l) {
    let t = l || ("u" > typeof navigator ? navigator.userAgent : "");
    return /Android/i.test(t);
}
function c(l) {
    let t = l || ("u" > typeof navigator ? navigator.userAgent : ""),
        d = "u" > typeof navigator && navigator.maxTouchPoints > 0;
    return /iPad/.test(t) || (/Mac OS/.test(t) && d && !/iPhone|iPod/.test(t));
}
function a(l) {
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
}
function s(l) {
    let t = l || ("u" > typeof navigator ? navigator.userAgent : "");
    return /Safari/i.test(t) && !/Chrome|Chromium|Edge/i.test(t);
}
d.d(t, { a: () => Z, i: () => c, n: () => a, o: () => s, r: () => i, t: () => e });
let n = [
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
function Z() {
    if ("u" < typeof window) return !1;
    let { outerHeight: l, outerWidth: t, innerHeight: d, innerWidth: i } = window;
    return n.some((e) => (e.outerHeight === l && e.outerWidth === t) || (e.innerHeight === d && e.innerWidth === i));
}
