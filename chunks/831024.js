t.d(r, { u: () => s });
var n = t(582128),
    l = t(240248),
    u = t(936785),
    o = t(556766),
    a = t(621547),
    i = t(375708);
function s(e) {
    let { surface: r, applicationId: t } = e,
        s = (0, o.m)(t),
        c = n.useMemo(() => (null == s ? null : (Object.values(s)[0] ?? null)), [s]);
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
                };
            }
            case "storefront_badge": {
                let r = c.vcStream?.tooltip;
                return {
                    Icon: (0, u.LZ)("TAG"),
                    text: i.intl.string(a.default.hriMCc),
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
