var a = l(582128),
    c = l(688810),
    n = l(129230),
    u = l(448645),
    d = l(652215),
    i = l(682901);
l.d(
    e,
    {},
    {
        r: function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                { analyticsLocations: l, newestAnalyticsLocation: r } = (0, c.Ay)(null != e ? [e] : []);
            return a.useMemo(
                () => ({
                    analyticsLocations: l,
                    trackViewed() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        n.default.track(d.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: t,
                            source: e,
                            sku_id: (0, u.mH)(i.pe.TIER_2),
                            location_stack: l,
                        });
                    },
                    trackInteracted(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        n.default.track(d.HAw.PREMIUM_UPSELL_INTERACTED, { cta_type: t, target: e, location: r });
                    },
                }),
                [t, l, r],
            );
        },
    },
);
