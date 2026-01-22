n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    l = n(311907),
    c = n(397927),
    u = n(287809),
    d = n(166403),
    f = n(927578),
    p = n(526292),
    _ = n(422936),
    h = n(234419),
    m = n(511484),
    g = n(156601),
    E = n(788868),
    b = n(985018),
    y = n(26212);
function O(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: i, discountOffer: a } = e,
        s = (0, m.N1)(i);
    return (0, r.jsx)(r.Fragment, {
        children: b.intl.format(b.t.sJTwHQ, {
            numMonths: null != (t = a.discount.user_usage_limit) ? t : E.OJ,
            discountedPrice: s,
            regularPrice: n,
        }),
    });
}
function A(e) {
    let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: i,
            offerType: s,
            showYearlyPrice: m,
            priceOptions: A,
            textVariant: v,
            className: S,
            isApplicationHome: I,
            enablePremiumBrandRefresh: T,
            headerClassName: C,
            headingVariant: N = "heading-md/normal",
            headingColor: R,
        } = e,
        w = (0, l.bG)([d.A], () => d.A.getPremiumTypeSubscription()),
        P = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        D = (0, p.k5)(),
        x = (0, p.nf)(),
        L = n === E.PremiumTypes.TIER_0 ? E.pe.TIER_0 : E.pe.TIER_2,
        j = (null == w ? void 0 : w.hasActiveTrial)
            ? null == P
                ? void 0
                : P.premiumType
            : D
              ? E.PremiumTypes.TIER_2
              : null,
        M = (0, h.V)(),
        k = (0, _.O)(),
        U = null == M ? void 0 : M.subscription_trial;
    if (!I && !t && null != j && n === j && null != w && null != w.planIdFromItems) {
        let e = null != w.trialEndsAt ? o()(null == w ? void 0 : w.trialEndsAt).diff(o()(), "d") : 0,
            t = E.hd[w.planIdFromItems],
            n = f.Ay.formatPriceString(f.Ay.getDefaultPrice(t.id), t.interval),
            i = () => {
                var t, r, i;
                return s === E.Vk.PREMIUM_TRIAL
                    ? b.intl.format(b.t["2CGBri"], {
                          remainingTime: e,
                          price: n,
                      })
                    : w.planIdFromItems === E.gD.PREMIUM_YEAR_TIER_2
                      ? b.intl.format(b.t["+qqh6g"], {
                            percent: null != (t = null == x ? void 0 : x.percentage) ? t : E.Cq,
                            regularPrice: n,
                        })
                      : b.intl.formatToPlainString(b.t["3ZiutU"], {
                            percent: null != (r = null == x ? void 0 : x.percentage) ? r : E._$,
                            regularPrice: n,
                            numMonths: null != (i = null == x ? void 0 : x.duration) ? i : E.OJ,
                        });
            };
        return (0, r.jsx)(c.Heading, {
            variant: N,
            color: R,
            className: a()(y.K, C),
            children: i(),
        });
    }
    if (!I && !t && i) {
        let e = f.Ay.formatPriceString(
            f.Ay.getDefaultPrice(n === E.PremiumTypes.TIER_0 ? E.gD.PREMIUM_MONTH_TIER_0 : E.gD.PREMIUM_MONTH_TIER_2),
            E.WT.MONTH,
        );
        if (s === E.Vk.PREMIUM_TRIAL) {
            var G, V, F, B;
            return (0, r.jsx)(c.Heading, {
                variant: N,
                color: R,
                className: a()(y.K, C),
                children: b.intl.format(b.t["9vyovu"], {
                    planName: (0, f.RH)(
                        null != (G = E.En[null != (V = null == U ? void 0 : U.sku_id) ? V : E.pe.NONE])
                            ? G
                            : E.gD.PREMIUM_MONTH_TIER_2,
                    ),
                    duration: (0, f.re)({
                        intervalType: null != (F = null == U ? void 0 : U.interval) ? F : E.WT.DAY,
                        intervalCount: null != (B = null == U ? void 0 : U.interval_count) ? B : 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        }
        if (null != k)
            return (0, r.jsx)(c.Heading, {
                variant: N,
                color: R,
                className: a()(y.K, C),
                children: (0, r.jsx)(O, {
                    defaultPriceString: e,
                    subscriptionPlan: E.gD.PREMIUM_MONTH_TIER_2,
                    discountOffer: k,
                }),
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.A, {
                subscriptionTier: L,
                isGift: t,
                className: null != S ? S : y.q,
                priceOptions: A,
                variant: v,
                isApplicationHome: I,
                enablePremiumBrandRefresh: T,
            }),
            m &&
                (0, r.jsx)(g.A, {
                    subscriptionTier: L,
                    interval: E.WT.YEAR,
                    className: null != S ? S : y.q,
                    isGift: t,
                    priceOptions: A,
                    variant: v,
                    isApplicationHome: I,
                    enablePremiumBrandRefresh: T,
                }),
        ],
    });
}
