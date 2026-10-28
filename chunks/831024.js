t.d(r, { u: () => c });
var n = t(582128),
    l = t(240248),
    u = t(936785),
    a = t(879043),
    o = t(556766),
    s = t(206285),
    i = t(105292);
function c(e) {
    let { surface: r, applicationId: t } = e,
        c = (0, o.m)(t),
        d = n.useMemo(() => (null == c ? null : (Object.values(c)[0] ?? null)), [c]),
        m = (0, a.j)(d, "storefront.headerText"),
        f = (0, a.j)(d, "vcStream.tooltip");
    return (
        (0, a.P)(t, r),
        n.useMemo(() => {
            if (null == d) return null;
            let e = (0, u.RD)(d.endsAt);
            switch (r) {
                case "storefront_banner":
                    if ((0, l.uJ)(m)) return null;
                    return {
                        Icon: (0, u.LZ)(d.pdp?.icon ?? null),
                        text: m,
                        tooltip: null,
                        endsAt: e,
                        flavor: d.flavor,
                        rewardRequirements: d.rewardRequirements,
                        rewardStatus: d.rewardStatus,
                    };
                case "storefront_badge":
                    return {
                        Icon: (0, u.LZ)("TAG"),
                        text: i.intl.string(s.default.hriMCc),
                        tooltip: (0, l.uJ)(f) ? null : f,
                        endsAt: e,
                        flavor: d.flavor,
                        rewardRequirements: d.rewardRequirements,
                    };
                case "vc_purchase_recommendations":
                case "vc_gift_recommendations": {
                    let r = d.vcStream?.label;
                    if ((0, l.uJ)(r)) return null;
                    return {
                        Icon: (0, u.LZ)(d.vcStream?.icon ?? null),
                        text: r,
                        tooltip: f,
                        endsAt: e,
                        flavor: d.flavor,
                        rewardRequirements: d.rewardRequirements,
                    };
                }
            }
        }, [r, d, m, f])
    );
}
