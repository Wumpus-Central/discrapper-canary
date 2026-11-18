var i = n(809701);
function r(e, t) {
    if (e.promotionPriority !== t.promotionPriority) return e.promotionPriority - t.promotionPriority;
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
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0,
                a = (0, i.A)(e, t, n);
            return 0 === a.length ? null : ([...a].sort(r)[0] ?? null);
        },
    },
);
