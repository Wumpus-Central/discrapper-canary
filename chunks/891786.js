"use strict";
function i(e, t) {
    let n = e.effectiveStartDate?.getTime() ?? -1 / 0,
        i = t.effectiveStartDate?.getTime() ?? -1 / 0;
    if (n !== i) return i - n;
    let r = e.effectiveEndDate?.getTime() ?? 1 / 0,
        a = t.effectiveEndDate?.getTime() ?? 1 / 0;
    if (r !== a) return a - r;
    let s = BigInt(e.id),
        l = BigInt(t.id);
    return s === l ? 0 : l > s ? 1 : -1;
}
function r(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0,
        r = e.filter((e) => {
            var i, r;
            return (
                (i = e.effectiveStartDate),
                (r = e.effectiveEndDate),
                !((null != i && t.getTime() < i.getTime()) || (null != r && t.getTime() > r.getTime())) &&
                    (!e.isTimed || n(e))
            );
        });
    return 0 === r.length ? null : ([...r].sort(i)[0] ?? null);
}
n.d(t, { A: () => r });
