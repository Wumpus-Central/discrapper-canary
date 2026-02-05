n.d(t, { A: () => o });
var i = n(64700),
    s = n(989349),
    r = n.n(s),
    a = n(405269);
let l = r().duration(30, "days");
function o(e, t) {
    return i.useMemo(
        () =>
            (0, a.i$)(
                t
                    ? null != e.outboundRedemptionEndDate
                        ? r()(e.outboundRedemptionEndDate)
                        : r()(e.endDate).add(l)
                    : r()(e.endDate),
                "LL",
            ),
        [e, t],
    );
}
