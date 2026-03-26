r.d(t, { A: () => N });
var n = r(627968);
r(64700);
var i = r(503698),
    a = r.n(i),
    s = r(989349),
    l = r.n(s),
    o = r(311907),
    c = r(397927),
    d = r(287809),
    m = r(166403),
    u = r(927578),
    T = r(526292),
    g = r(422936),
    I = r(234419),
    x = r(511484),
    p = r(156601),
    _ = r(788868),
    f = r(985018),
    A = r(721929);
function h(e) {
    let { defaultPriceString: t, subscriptionPlan: r, discountOffer: i } = e,
        a = (0, x.N1)(r);
    return (0, n.jsx)(n.Fragment, {
        children: f.intl.format(f.t.sJTwHQ, {
            numMonths: i.discount.user_usage_limit ?? _.OJ,
            discountedPrice: a,
            regularPrice: t,
        }),
    });
}
function N(e) {
    let {
            isGift: t,
            premiumTier: r,
            offerTierMatchesCard: i,
            offerType: s,
            showYearlyPrice: x,
            priceOptions: N,
            textVariant: E,
            className: R,
            isApplicationHome: j,
            enablePremiumBrandRefresh: v,
            headerClassName: P,
            headingVariant: S = "heading-md/normal",
            headingColor: b,
        } = e,
        y = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        M = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        U = (0, T.k5)(),
        L = (0, T.nf)(),
        G = r === _.PremiumTypes.TIER_0 ? _.pe.TIER_0 : _.pe.TIER_2,
        C = y?.hasActiveTrial ? M?.premiumType : U ? _.PremiumTypes.TIER_2 : null,
        O = (0, I.V)(),
        D = (0, g.O)(),
        w = O?.subscription_trial;
    if (!j && !t && null != C && r === C && null != y && null != y.planIdFromItems) {
        let e = null != y.trialEndsAt ? l()(y?.trialEndsAt).diff(l()(), "d") : 0,
            t = _.hd[y.planIdFromItems],
            r = u.Ay.formatPriceString(u.Ay.getDefaultPrice(t.id), t.interval);
        return (0, n.jsx)(c.Heading, {
            variant: S,
            color: b,
            className: a()(A.K, P),
            children:
                s === _.Vk.PREMIUM_TRIAL
                    ? f.intl.format(f.t["2CGBri"], { remainingTime: e, price: r })
                    : y.planIdFromItems === _.gD.PREMIUM_YEAR_TIER_2
                      ? f.intl.format(f.t["+qqh6g"], { percent: L?.percentage ?? _.Cq, regularPrice: r })
                      : f.intl.formatToPlainString(f.t["3ZiutU"], {
                            percent: L?.percentage ?? _._$,
                            regularPrice: r,
                            numMonths: L?.duration ?? _.OJ,
                        }),
        });
    }
    if (!j && !t && i) {
        let e = u.Ay.formatPriceString(
            u.Ay.getDefaultPrice(r === _.PremiumTypes.TIER_0 ? _.gD.PREMIUM_MONTH_TIER_0 : _.gD.PREMIUM_MONTH_TIER_2),
            _.WT.MONTH,
        );
        if (s === _.Vk.PREMIUM_TRIAL)
            return (0, n.jsx)(c.Heading, {
                variant: S,
                color: b,
                className: a()(A.K, P),
                children: f.intl.format(f.t["9vyovu"], {
                    planName: (0, u.RH)(_.En[w?.sku_id ?? _.pe.NONE] ?? _.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, u.re)({
                        intervalType: w?.interval ?? _.WT.DAY,
                        intervalCount: w?.interval_count ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != D)
            return (0, n.jsx)(c.Heading, {
                variant: S,
                color: b,
                className: a()(A.K, P),
                children: (0, n.jsx)(h, {
                    defaultPriceString: e,
                    subscriptionPlan: _.gD.PREMIUM_MONTH_TIER_2,
                    discountOffer: D,
                }),
            });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(p.A, {
                subscriptionTier: G,
                isGift: t,
                className: null != R ? R : A.q,
                priceOptions: N,
                variant: E,
                isApplicationHome: j,
                enablePremiumBrandRefresh: v,
            }),
            x &&
                (0, n.jsx)(p.A, {
                    subscriptionTier: G,
                    interval: _.WT.YEAR,
                    className: null != R ? R : A.q,
                    isGift: t,
                    priceOptions: N,
                    variant: E,
                    isApplicationHome: j,
                    enablePremiumBrandRefresh: v,
                }),
        ],
    });
}
