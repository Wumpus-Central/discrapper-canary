n.d(t, {
    A: () => l,
});
var r = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(405269);
let o = a().duration(30, "days");

function l(e, t) {
    return r.useMemo(
        () =>
            (0, s.i$)(
                t
                    ? null != e.outboundRedemptionEndDate
                        ? a()(e.outboundRedemptionEndDate)
                        : a()(e.endDate).add(o)
                    : a()(e.endDate),
                "LL",
            ),
        [e, t],
    );
}
