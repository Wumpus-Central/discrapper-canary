function r(e) {
    let t = e || ("u" > typeof navigator ? navigator.userAgent : ""),
        i = "u" > typeof navigator && navigator.maxTouchPoints > 0;
    return /iPad|iPhone|iPod/.test(t) || (/Mac OS/.test(t) && i) || /iPadOS/.test(t);
}
function n(e) {
    let t = e || ("u" > typeof navigator ? navigator.userAgent : "");
    return /Android/i.test(t);
}
function o(e) {
    let t = e || ("u" > typeof navigator ? navigator.userAgent : ""),
        i = "u" > typeof navigator && navigator.maxTouchPoints > 0;
    return /iPad/.test(t) || (/Mac OS/.test(t) && i && !/iPhone|iPod/.test(t));
}
function a(e) {
    let t,
        i,
        n = e || ("u" > typeof navigator ? navigator.userAgent : "");
    return !(
        /Mobile|Android/i.test(n) ||
        ((t = /Linux/i.test(n)),
        (i = /Chrome/i.test(n) && !/Edge/i.test(n)),
        !/Mobile|Android/i.test(n) &&
            t &&
            i &&
            (("u" > typeof navigator && navigator.maxTouchPoints > 0) ||
                "ontouchstart" in ("u" > typeof document ? document.documentElement : {}))) ||
        r(n)
    );
}
function s(e) {
    let t = e || ("u" > typeof navigator ? navigator.userAgent : "");
    return /Safari/i.test(t) && !/Chrome|Chromium|Edge/i.test(t);
}
i.d(t, { a: () => c, i: () => o, n: () => a, o: () => s, r: () => r, t: () => n });
let l = [
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
function c() {
    if ("u" < typeof window) return !1;
    let { outerHeight: e, outerWidth: t, innerHeight: i, innerWidth: r } = window;
    return l.some((n) => (n.outerHeight === e && n.outerWidth === t) || (n.innerHeight === i && n.innerWidth === r));
}
