n.d(t, { A: () => o });
var i = n(64700),
    s = n(989349),
    l = n.n(s),
    a = n(405269);
let r = l().duration(30, "days");
function o(e, t) {
    return i.useMemo(
        () =>
            (0, a.i$)(
                t
                    ? null != e.outboundRedemptionEndDate
                        ? l()(e.outboundRedemptionEndDate)
                        : l()(e.endDate).add(r)
                    : l()(e.endDate),
                "LL",
            ),
        [e, t],
    );
}
