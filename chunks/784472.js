"use strict";
function r(e, t) {
    let n,
        r = t.limit ?? 1 / 0,
        l = i(e, t.filterPredicates ?? []);
    return o(
        (n =
            null != t.bucketPredicates && t.bucketPredicates.length > 0
                ? r >= l.length
                    ? s(l, t.bucketPredicates ?? [])
                    : a(l, t.bucketPredicates ?? [], r)
                : [l]),
        t.sortComparers ?? [],
        r,
    ).slice(0, r);
}
function i(e, t) {
    return e.filter((e) => t.every((t) => t(e)));
}
function a(e, t, n) {
    let r = [],
        i = e;
    for (let e of t) {
        let t = [],
            a = [];
        for (let n of i) e(n) ? a.push(n) : t.push(n);
        if ((r.push(a), (i = t), r.reduce((e, t) => t.length + e, 0) >= n)) break;
    }
    return r;
}
function s(e, t) {
    let n = Array(t.length)
        .fill(null)
        .map(() => []);
    for (let r of e)
        for (let e = 0; e < t.length; e++)
            if (t[e](r)) {
                n[e].push(r);
                break;
            }
    return n;
}
function o(e, t, n) {
    let r = [];
    for (let i of e) {
        let e = l(i, t);
        if ((r.push(...e), r.length >= n)) break;
    }
    return r;
}
function l(e, t) {
    return e.sort((e, n) => {
        for (let r of t) {
            let t = r(e, n);
            if (0 !== t) return t;
        }
        return 0;
    });
}
n.d(t, { V: () => r }), n(321073);
