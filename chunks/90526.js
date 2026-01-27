r.d(t, {
    A: () => I,
});
var n = r(627968);
r(64700);
var i = r(503698),
    l = r.n(i),
    a = r(989349),
    s = r.n(a),
    o = r(311907),
    c = r(397927),
    u = r(287809),
    d = r(166403),
    m = r(927578),
    p = r(526292),
    g = r(422936),
    x = r(234419),
    C = r(511484),
    f = r(156601),
    T = r(788868),
    h = r(985018),
    v = r(26212);

function j(e) {
    var t;
    let { defaultPriceString: r, subscriptionPlan: i, discountOffer: l } = e,
        a = (0, C.N1)(i);
    return (0, n.jsx)(n.Fragment, {
        children: h.intl.format(h.t.sJTwHQ, {
            numMonths: null != (t = l.discount.user_usage_limit) ? t : T.OJ,
            discountedPrice: a,
            regularPrice: r,
        }),
    });
}

function I(e) {
    var t, r, i, a, C, I, y;
    let {
            isGift: b,
            premiumTier: P,
            offerTierMatchesCard: A,
            offerType: _,
            showYearlyPrice: R,
            priceOptions: O,
            textVariant: N,
            className: E,
            isApplicationHome: M,
            enablePremiumBrandRefresh: w,
            headerClassName: L,
            headingVariant: S = "heading-md/normal",
            headingColor: H,
        } = e,
        U = (0, o.bG)([d.A], () => d.A.getPremiumTypeSubscription()),
        D = (0, o.bG)([u.default], () => u.default.getCurrentUser()),
        G = (0, p.k5)(),
        k = (0, p.nf)(),
        V = P === T.PremiumTypes.TIER_0 ? T.pe.TIER_0 : T.pe.TIER_2,
        B = (null == U ? void 0 : U.hasActiveTrial)
            ? null == D
                ? void 0
                : D.premiumType
            : G
              ? T.PremiumTypes.TIER_2
              : null,
        Z = (0, x.V)(),
        F = (0, g.O)(),
        J = null == Z ? void 0 : Z.subscription_trial;
    if (!M && !b && null != B && P === B && null != U && null != U.planIdFromItems) {
        let e = null != U.trialEndsAt ? s()(null == U ? void 0 : U.trialEndsAt).diff(s()(), "d") : 0,
            a = T.hd[U.planIdFromItems],
            o = m.Ay.formatPriceString(m.Ay.getDefaultPrice(a.id), a.interval);
        return (0, n.jsx)(c.Heading, {
            variant: S,
            color: H,
            className: l()(v.K, L),
            children:
                _ === T.Vk.PREMIUM_TRIAL
                    ? h.intl.format(h.t["2CGBri"], {
                          remainingTime: e,
                          price: o,
                      })
                    : U.planIdFromItems === T.gD.PREMIUM_YEAR_TIER_2
                      ? h.intl.format(h.t["+qqh6g"], {
                            percent: null != (t = null == k ? void 0 : k.percentage) ? t : T.Cq,
                            regularPrice: o,
                        })
                      : h.intl.formatToPlainString(h.t["3ZiutU"], {
                            percent: null != (r = null == k ? void 0 : k.percentage) ? r : T._$,
                            regularPrice: o,
                            numMonths: null != (i = null == k ? void 0 : k.duration) ? i : T.OJ,
                        }),
        });
    }
    if (!M && !b && A) {
        let e = m.Ay.formatPriceString(
            m.Ay.getDefaultPrice(P === T.PremiumTypes.TIER_0 ? T.gD.PREMIUM_MONTH_TIER_0 : T.gD.PREMIUM_MONTH_TIER_2),
            T.WT.MONTH,
        );
        if (_ === T.Vk.PREMIUM_TRIAL)
            return (0, n.jsx)(c.Heading, {
                variant: S,
                color: H,
                className: l()(v.K, L),
                children: h.intl.format(h.t["9vyovu"], {
                    planName: (0, m.RH)(
                        null != (a = T.En[null != (C = null == J ? void 0 : J.sku_id) ? C : T.pe.NONE])
                            ? a
                            : T.gD.PREMIUM_MONTH_TIER_2,
                    ),
                    duration: (0, m.re)({
                        intervalType: null != (I = null == J ? void 0 : J.interval) ? I : T.WT.DAY,
                        intervalCount: null != (y = null == J ? void 0 : J.interval_count) ? y : 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != F)
            return (0, n.jsx)(c.Heading, {
                variant: S,
                color: H,
                className: l()(v.K, L),
                children: (0, n.jsx)(j, {
                    defaultPriceString: e,
                    subscriptionPlan: T.gD.PREMIUM_MONTH_TIER_2,
                    discountOffer: F,
                }),
            });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(f.A, {
                subscriptionTier: V,
                isGift: b,
                className: null != E ? E : v.q,
                priceOptions: O,
                variant: N,
                isApplicationHome: M,
                enablePremiumBrandRefresh: w,
            }),
            R &&
                (0, n.jsx)(f.A, {
                    subscriptionTier: V,
                    interval: T.WT.YEAR,
                    className: null != E ? E : v.q,
                    isGift: b,
                    priceOptions: O,
                    variant: N,
                    isApplicationHome: M,
                    enablePremiumBrandRefresh: w,
                }),
        ],
    });
}
