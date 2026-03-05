i.d(t, { A: () => A });
var r = i(627968);
i(64700);
var n = i(503698),
    a = i.n(n),
    s = i(989349),
    l = i.n(s),
    o = i(311907),
    c = i(397927),
    d = i(287809),
    m = i(166403),
    u = i(927578),
    C = i(526292),
    x = i(422936),
    T = i(234419),
    p = i(511484),
    g = i(156601),
    I = i(788868),
    _ = i(985018),
    h = i(371214);
function f(e) {
    let { defaultPriceString: t, subscriptionPlan: i, discountOffer: n } = e,
        a = (0, p.N1)(i);
    return (0, r.jsx)(r.Fragment, {
        children: _.intl.format(_.t.sJTwHQ, {
            numMonths: n.discount.user_usage_limit ?? I.OJ,
            discountedPrice: a,
            regularPrice: t,
        }),
    });
}
function A(e) {
    let {
            isGift: t,
            premiumTier: i,
            offerTierMatchesCard: n,
            offerType: s,
            showYearlyPrice: p,
            priceOptions: A,
            textVariant: N,
            className: j,
            isApplicationHome: E,
            enablePremiumBrandRefresh: R,
            headerClassName: v,
            headingVariant: P = "heading-md/normal",
            headingColor: L,
        } = e,
        M = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        S = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        b = (0, C.k5)(),
        y = (0, C.nf)(),
        U = i === I.PremiumTypes.TIER_0 ? I.pe.TIER_0 : I.pe.TIER_2,
        G = M?.hasActiveTrial ? S?.premiumType : b ? I.PremiumTypes.TIER_2 : null,
        H = (0, T.V)(),
        O = (0, x.O)(),
        D = H?.subscription_trial;
    if (!E && !t && null != G && i === G && null != M && null != M.planIdFromItems) {
        let e = null != M.trialEndsAt ? l()(M?.trialEndsAt).diff(l()(), "d") : 0,
            t = I.hd[M.planIdFromItems],
            i = u.Ay.formatPriceString(u.Ay.getDefaultPrice(t.id), t.interval);
        return (0, r.jsx)(c.Heading, {
            variant: P,
            color: L,
            className: a()(h.K, v),
            children:
                s === I.Vk.PREMIUM_TRIAL
                    ? _.intl.format(_.t["2CGBri"], { remainingTime: e, price: i })
                    : M.planIdFromItems === I.gD.PREMIUM_YEAR_TIER_2
                      ? _.intl.format(_.t["+qqh6g"], { percent: y?.percentage ?? I.Cq, regularPrice: i })
                      : _.intl.formatToPlainString(_.t["3ZiutU"], {
                            percent: y?.percentage ?? I._$,
                            regularPrice: i,
                            numMonths: y?.duration ?? I.OJ,
                        }),
        });
    }
    if (!E && !t && n) {
        let e = u.Ay.formatPriceString(
            u.Ay.getDefaultPrice(i === I.PremiumTypes.TIER_0 ? I.gD.PREMIUM_MONTH_TIER_0 : I.gD.PREMIUM_MONTH_TIER_2),
            I.WT.MONTH,
        );
        if (s === I.Vk.PREMIUM_TRIAL)
            return (0, r.jsx)(c.Heading, {
                variant: P,
                color: L,
                className: a()(h.K, v),
                children: _.intl.format(_.t["9vyovu"], {
                    planName: (0, u.RH)(I.En[D?.sku_id ?? I.pe.NONE] ?? I.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, u.re)({
                        intervalType: D?.interval ?? I.WT.DAY,
                        intervalCount: D?.interval_count ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != O)
            return (0, r.jsx)(c.Heading, {
                variant: P,
                color: L,
                className: a()(h.K, v),
                children: (0, r.jsx)(f, {
                    defaultPriceString: e,
                    subscriptionPlan: I.gD.PREMIUM_MONTH_TIER_2,
                    discountOffer: O,
                }),
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.A, {
                subscriptionTier: U,
                isGift: t,
                className: null != j ? j : h.q,
                priceOptions: A,
                variant: N,
                isApplicationHome: E,
                enablePremiumBrandRefresh: R,
            }),
            p &&
                (0, r.jsx)(g.A, {
                    subscriptionTier: U,
                    interval: I.WT.YEAR,
                    className: null != j ? j : h.q,
                    isGift: t,
                    priceOptions: A,
                    variant: N,
                    isApplicationHome: E,
                    enablePremiumBrandRefresh: R,
                }),
        ],
    });
}
