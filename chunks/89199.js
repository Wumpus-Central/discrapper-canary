n.d(t, {
    WK: () => i,
    de: () => a,
    df: () => r,
});
let r = {
    day: 0,
    second: 0,
    millisecond: 0,
};
function i(e, t) {
    let n = new Date(e);
    if (
        (t.y && ((t.year = t.y), delete t.y),
        t.mo && ((t.month = t.mo), delete t.mo),
        t.M && ((t.month = t.M), delete t.M),
        t.w && ((t.week = t.w), delete t.w),
        t.d && ((t.day = t.d), delete t.d),
        t.h && ((t.hour = t.h), delete t.h),
        t.m && ((t.minute = t.m), delete t.m),
        t.s && ((t.second = t.s), delete t.s),
        t.ms && ((t.millisecond = t.ms), delete t.ms),
        "year" in t)
    ) {
        let e = Math.floor(t.year);
        n.setFullYear(n.getFullYear() + e);
        let r = t.year - e;
        r > 0 && ((t.month = t?.month ?? 0), (t.month += 12 * r));
    }
    if ("quarter" in t) {
        let e = Math.floor(t.quarter);
        n.setMonth(n.getMonth() + 3 * e);
    }
    if ("month" in t) {
        let e = Math.floor(t.month);
        n.setMonth(n.getMonth() + e);
        let r = t.month - e;
        r > 0 && ((t.week = t?.week ?? 0), (t.week += 4 * r));
    }
    if ("week" in t) {
        let e = Math.floor(t.week);
        n.setDate(n.getDate() + 7 * e);
        let r = t.week - e;
        r > 0 && ((t.day = t?.day ?? 0), (t.day += Math.round(7 * r)));
    }
    if ("day" in t) {
        let e = Math.floor(t.day);
        n.setDate(n.getDate() + e);
        let r = t.day - e;
        r > 0 && ((t.hour = t?.hour ?? 0), (t.hour += Math.round(24 * r)));
    }
    if ("hour" in t) {
        let e = Math.floor(t.hour);
        n.setHours(n.getHours() + e);
        let r = t.hour - e;
        r > 0 && ((t.minute = t?.minute ?? 0), (t.minute += Math.round(60 * r)));
    }
    if ("minute" in t) {
        let e = Math.floor(t.minute);
        n.setMinutes(n.getMinutes() + e);
        let r = t.minute - e;
        r > 0 && ((t.second = t?.second ?? 0), (t.second += Math.round(60 * r)));
    }
    if ("second" in t) {
        let e = Math.floor(t.second);
        n.setSeconds(n.getSeconds() + e);
        let r = t.second - e;
        r > 0 && ((t.millisecond = t?.millisecond ?? 0), (t.millisecond += Math.round(1000 * r)));
    }
    if ("millisecond" in t) {
        let e = Math.floor(t.millisecond);
        n.setMilliseconds(n.getMilliseconds() + e);
    }
    return n;
}
function a(e) {
    let t = {};
    for (let n in e) t[n] = -e[n];
    return t;
}
