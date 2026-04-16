r.d(t, { A: () => v });
var i = r(627968);
r(64700);
var n = r(503698),
    a = r.n(n),
    s = r(989349),
    l = r.n(s),
    o = r(311907),
    c = r(397927),
    d = r(287809),
    u = r(166403),
    m = r(927578),
    x = r(526292),
    g = r(422936),
    T = r(234419),
    p = r(511484),
    I = r(156601),
    h = r(788868),
    f = r(985018),
    j = r(62521);
function A(e) {
    let { defaultPriceString: t, subscriptionPlan: r, discountOffer: n } = e,
        a = (0, p.N1)(r);
    return (0, i.jsx)(i.Fragment, {
        children: f.intl.format(f.t.sJTwHQ, {
            numMonths: n.discount.user_usage_limit ?? h.OJ,
            discountedPrice: a,
            regularPrice: t,
        }),
    });
}
function v(e) {
    let {
            isGift: t,
            premiumTier: r,
            offerTierMatchesCard: n,
            offerType: s,
            showYearlyPrice: p,
            priceOptions: v,
            textVariant: R,
            className: _,
            isApplicationHome: P,
            enablePremiumBrandRefresh: N,
            headerClassName: E,
            headingVariant: y = "heading-md/normal",
            headingColor: C,
        } = e,
        M = (0, o.bG)([u.A], () => u.A.getPremiumTypeSubscription()),
        b = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        S = (0, x.k5)(),
        U = (0, x.nf)(),
        w = r === h.PremiumTypes.TIER_0 ? h.pe.TIER_0 : h.pe.TIER_2,
        L = M?.hasActiveTrial ? b?.premiumType : S ? h.PremiumTypes.TIER_2 : null,
        O = (0, T.V)(),
        G = (0, g.O)(),
        H = O?.subscription_trial;
    if (!P && !t && null != L && r === L && null != M && null != M.planIdFromItems) {
        let e = null != M.trialEndsAt ? l()(M?.trialEndsAt).diff(l()(), "d") : 0,
            t = h.hd[M.planIdFromItems],
            r = m.Ay.formatPriceString(m.Ay.getDefaultPrice(t.id), t.interval);
        return (0, i.jsx)(c.Heading, {
            variant: y,
            color: C,
            className: a()(j.K, E),
            children:
                s === h.Vk.PREMIUM_TRIAL
                    ? f.intl.format(f.t["2CGBri"], { remainingTime: e, price: r })
                    : M.planIdFromItems === h.gD.PREMIUM_YEAR_TIER_2
                      ? f.intl.format(f.t["+qqh6g"], { percent: U?.percentage ?? h.Cq, regularPrice: r })
                      : f.intl.formatToPlainString(f.t["3ZiutU"], {
                            percent: U?.percentage ?? h._$,
                            regularPrice: r,
                            numMonths: U?.duration ?? h.OJ,
                        }),
        });
    }
    if (!P && !t && n) {
        let e = m.Ay.formatPriceString(
            m.Ay.getDefaultPrice(r === h.PremiumTypes.TIER_0 ? h.gD.PREMIUM_MONTH_TIER_0 : h.gD.PREMIUM_MONTH_TIER_2),
            h.WT.MONTH,
        );
        if (s === h.Vk.PREMIUM_TRIAL)
            return (0, i.jsx)(c.Heading, {
                variant: y,
                color: C,
                className: a()(j.K, E),
                children: f.intl.format(f.t["9vyovu"], {
                    planName: (0, m.RH)(h.En[H?.sku_id ?? h.pe.NONE] ?? h.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, m.re)({
                        intervalType: H?.interval ?? h.WT.DAY,
                        intervalCount: H?.interval_count ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != G)
            return (0, i.jsx)(c.Heading, {
                variant: y,
                color: C,
                className: a()(j.K, E),
                children: (0, i.jsx)(A, {
                    defaultPriceString: e,
                    subscriptionPlan: h.gD.PREMIUM_MONTH_TIER_2,
                    discountOffer: G,
                }),
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(I.A, {
                subscriptionTier: w,
                isGift: t,
                className: null != _ ? _ : j.q,
                priceOptions: v,
                variant: R,
                isApplicationHome: P,
                enablePremiumBrandRefresh: N,
            }),
            p &&
                (0, i.jsx)(I.A, {
                    subscriptionTier: w,
                    interval: h.WT.YEAR,
                    className: null != _ ? _ : j.q,
                    isGift: t,
                    priceOptions: v,
                    variant: R,
                    isApplicationHome: P,
                    enablePremiumBrandRefresh: N,
                }),
        ],
    });
}
