t.d(r, { u: () => i });
var n = t(582128),
    l = t(240248),
    u = t(936785),
    a = t(556766),
    o = t(206285),
    s = t(105292);
function i(e) {
    let { surface: r, applicationId: t } = e,
        i = (0, a.m)(t),
        c = n.useMemo(() => (null == i ? null : (Object.values(i)[0] ?? null)), [i]);
    return n.useMemo(() => {
        if (null == c) return null;
        let e = (0, u.RD)(c.endsAt);
        switch (r) {
            case "storefront_banner": {
                let r = c.storefront?.headerText;
                if ((0, l.uJ)(r)) return null;
                return {
                    Icon: (0, u.LZ)(c.pdp?.icon ?? null),
                    text: r,
                    tooltip: null,
                    endsAt: e,
                    flavor: c.flavor,
                    rewardRequirements: c.rewardRequirements,
                    rewardStatus: c.rewardStatus,
                };
            }
            case "storefront_badge": {
                let r = c.vcStream?.tooltip;
                return {
                    Icon: (0, u.LZ)("TAG"),
                    text: s.intl.string(o.default.hriMCc),
                    tooltip: (0, l.uJ)(r) ? null : r,
                    endsAt: e,
                    flavor: c.flavor,
                    rewardRequirements: c.rewardRequirements,
                };
            }
            case "vc_purchase_recommendations":
            case "vc_gift_recommendations": {
                let r = c.vcStream?.label;
                if ((0, l.uJ)(r)) return null;
                return {
                    Icon: (0, u.LZ)(c.vcStream?.icon ?? null),
                    text: r,
                    tooltip: c.vcStream?.tooltip ?? null,
                    endsAt: e,
                    flavor: c.flavor,
                    rewardRequirements: c.rewardRequirements,
                };
            }
        }
    }, [r, c]);
}
