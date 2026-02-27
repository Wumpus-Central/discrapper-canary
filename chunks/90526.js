i.d(t, { A: () => A });
var r = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(989349),
    l = i.n(a),
    o = i(311907),
    c = i(397927),
    d = i(287809),
    m = i(166403),
    u = i(927578),
    x = i(526292),
    C = i(422936),
    g = i(234419),
    p = i(511484),
    T = i(156601),
    h = i(788868),
    I = i(985018),
    f = i(26212);
function j(e) {
    let { defaultPriceString: t, subscriptionPlan: i, discountOffer: n } = e,
        s = (0, p.N1)(i);
    return (0, r.jsx)(r.Fragment, {
        children: I.intl.format(I.t.sJTwHQ, {
            numMonths: n.discount.user_usage_limit ?? h.OJ,
            discountedPrice: s,
            regularPrice: t,
        }),
    });
}
function A(e) {
    let {
            isGift: t,
            premiumTier: i,
            offerTierMatchesCard: n,
            offerType: a,
            showYearlyPrice: p,
            priceOptions: A,
            textVariant: v,
            className: _,
            isApplicationHome: R,
            enablePremiumBrandRefresh: N,
            headerClassName: P,
            headingVariant: E = "heading-md/normal",
            headingColor: M,
        } = e,
        y = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        L = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        b = (0, x.k5)(),
        w = (0, x.nf)(),
        S = i === h.PremiumTypes.TIER_0 ? h.pe.TIER_0 : h.pe.TIER_2,
        H = y?.hasActiveTrial ? L?.premiumType : b ? h.PremiumTypes.TIER_2 : null,
        U = (0, g.V)(),
        O = (0, C.O)(),
        G = U?.subscription_trial;
    if (!R && !t && null != H && i === H && null != y && null != y.planIdFromItems) {
        let e = null != y.trialEndsAt ? l()(y?.trialEndsAt).diff(l()(), "d") : 0,
            t = h.hd[y.planIdFromItems],
            i = u.Ay.formatPriceString(u.Ay.getDefaultPrice(t.id), t.interval);
        return (0, r.jsx)(c.Heading, {
            variant: E,
            color: M,
            className: s()(f.K, P),
            children:
                a === h.Vk.PREMIUM_TRIAL
                    ? I.intl.format(I.t["2CGBri"], { remainingTime: e, price: i })
                    : y.planIdFromItems === h.gD.PREMIUM_YEAR_TIER_2
                      ? I.intl.format(I.t["+qqh6g"], { percent: w?.percentage ?? h.Cq, regularPrice: i })
                      : I.intl.formatToPlainString(I.t["3ZiutU"], {
                            percent: w?.percentage ?? h._$,
                            regularPrice: i,
                            numMonths: w?.duration ?? h.OJ,
                        }),
        });
    }
    if (!R && !t && n) {
        let e = u.Ay.formatPriceString(
            u.Ay.getDefaultPrice(i === h.PremiumTypes.TIER_0 ? h.gD.PREMIUM_MONTH_TIER_0 : h.gD.PREMIUM_MONTH_TIER_2),
            h.WT.MONTH,
        );
        if (a === h.Vk.PREMIUM_TRIAL)
            return (0, r.jsx)(c.Heading, {
                variant: E,
                color: M,
                className: s()(f.K, P),
                children: I.intl.format(I.t["9vyovu"], {
                    planName: (0, u.RH)(h.En[G?.sku_id ?? h.pe.NONE] ?? h.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, u.re)({
                        intervalType: G?.interval ?? h.WT.DAY,
                        intervalCount: G?.interval_count ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != O)
            return (0, r.jsx)(c.Heading, {
                variant: E,
                color: M,
                className: s()(f.K, P),
                children: (0, r.jsx)(j, {
                    defaultPriceString: e,
                    subscriptionPlan: h.gD.PREMIUM_MONTH_TIER_2,
                    discountOffer: O,
                }),
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(T.A, {
                subscriptionTier: S,
                isGift: t,
                className: null != _ ? _ : f.q,
                priceOptions: A,
                variant: v,
                isApplicationHome: R,
                enablePremiumBrandRefresh: N,
            }),
            p &&
                (0, r.jsx)(T.A, {
                    subscriptionTier: S,
                    interval: h.WT.YEAR,
                    className: null != _ ? _ : f.q,
                    isGift: t,
                    priceOptions: A,
                    variant: v,
                    isApplicationHome: R,
                    enablePremiumBrandRefresh: N,
                }),
        ],
    });
}
