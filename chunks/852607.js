n.d(t, { kO: () => q, r3: () => z, PL: () => $ });
var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(891197),
    s = n(69494),
    o = n(482132),
    u = n(801302);
function c() {
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(s.A, {}), (0, l.jsx)(o.dZ, { children: (0, l.jsx)(a.N, { className: u.D }) })],
    });
}
var d = n(830382),
    p = n(297264),
    m = n(834730),
    C = n(28863),
    h = n(696208),
    f = n(660183),
    S = n(203949);
function E(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsxs)("div", {
            className: S.a,
            children: [
                (0, l.jsx)(p.D, { variant: "heading-xl/bold", children: f.intl.string(f.t.Q03WWV) }),
                (0, l.jsxs)("p", {
                    children: [
                        (0, l.jsx)(m.E, { variant: "text-md/normal", children: f.intl.string(f.t.BxPxhI) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsx)(m.E, { variant: "text-md/normal", children: f.intl.string(f.t.Y3fdOp) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsxs)(m.E, {
                            variant: "text-md/normal",
                            children: [
                                f.intl.string(f.t.Paa4v4),
                                "\xa0",
                                n
                                    ? f.intl.string(f.t.StGVvC)
                                    : (0, l.jsx)(C.Anchor, { onClick: i, children: f.intl.string(f.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function A() {
    let e = i.useMemo(() => [{ variant: "primary", text: f.intl.string(f.t.g8vPzy), disabled: !0 }], []);
    return (0, l.jsx)(h.H, { actions: e });
}
var y = n(636950);
function I() {
    let [e, t] = i.useState(!1);
    async function n() {
        (t(!0), await (0, d.lo)());
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.A, {}),
            (0, l.jsx)(o.dZ, { children: (0, l.jsx)(E, { className: y.r, isEmailResent: e, resendEmail: n }) }),
            (0, l.jsx)(o.UX, { children: (0, l.jsx)(A, {}) }),
        ],
    });
}
var g = n(702841),
    P = n(339048),
    v = n(428644),
    x = n(86379),
    _ = n(545075),
    T = n(590180),
    N = n(951305),
    b = n(20742),
    j = n(430993),
    R = n(579151),
    O = n(599062);
function M() {
    let { refreshCategories: e } = (0, R.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(b.rQ, { title: f.intl.string(f.t["p8+qtU"]) }),
            (0, l.jsx)(j.c, { children: (0, l.jsx)(O.h, { onRetry: e, errorOrigin: O.A.GIFT_MODAL }) }),
        ],
    });
}
var L = n(534479),
    k = n(121005),
    w = n(800471),
    D = n(169801),
    U = n(469778),
    G = n(202475),
    F = n(31823),
    B = n(655857),
    H = n(427675),
    W = n(504560),
    V = n(652215),
    Y = n(202541);
function K(e) {
    let { handleStepChange: t } = e,
        n = (0, W.t4)((e) => e.selectedSkuId),
        { paymentSources: a, hasFetchedPaymentSources: s } = (0, G.j)(),
        { application: o } = (0, F.V)(),
        u = (0, x.Hp)(),
        c = (0, H.gU)(),
        d = (0, H.Hu)(),
        { isGift: p } = (0, N.Pv)(),
        [m, C] = i.useState(!0),
        [h, f] = (0, g.yK)([T.A], () => [T.A.isFetchingCategories, T.A.error]);
    return (i.useEffect(() => {
        let e = null != o;
        d && s && e && C(h);
    }, [d, s, o, h]),
    i.useEffect(() => {
        if (m || u || null == n) return;
        let e = c[n];
        p &&
        (e?.productLine === V.EZt.COLLECTIBLES ||
            e?.productLine === V.EZt.APPLICATION ||
            e?.productLine === V.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(r.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(a).length
              ? t(r.pn.ADD_PAYMENT_STEPS)
              : t(r.pn.REVIEW);
    }, [m, u, t, a, p, c, n]),
    m)
        ? (0, l.jsx)(L.A, {})
        : u
          ? (0, l.jsx)(_.oO, {})
          : null != f
            ? (0, l.jsx)(M, {})
            : null;
}
function Z(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: a,
            continueSessionToInitialStep: s,
            startingStepOverride: o,
        } = e,
        { hasPaymentSources: u, hasFetchedPaymentSources: c } = (0, G.j)({ shouldAllowFetchPaymentSources: !0 }),
        {
            selectedSkuId: d,
            setSelectedPlanId: p,
            activeSubscription: m,
            availableDefaultPlanId: C,
            shouldUseStripeExpressCheckout: h,
        } = (0, W.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            availableDefaultPlanId: e.getAvailableDefaultPlanId(),
            shouldUseStripeExpressCheckout: e.getShouldUseStripeExpressCheckout(),
        })),
        f = (0, x.Hp)(),
        S = (0, k.A)(),
        { hasFetchedRelatedSubscriptionPlans: E, subscriptionPriceOptionsLoading: A } = (0, B.Jn)(),
        { isGift: y } = (0, N.Pv)(),
        I = (0, D.A)({ isGift: y, skuId: d }),
        T = !S || !E || A || !c,
        b = (0, g.bG)([U.A], () => U.A.applicationIdsFetched.has(Y.tv));
    (0, v.A)(
        "Payment Modal",
        T,
        5,
        {
            hasFetchedSubscriptions: S,
            hasFetchedSubscriptionPlans: E,
            subscriptionPriceOptionsLoading: A,
            hasFetchedPaymentSources: c,
        },
        { tags: { app_context: "billing" } },
    );
    let j = (0, W.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: I }));
    return (i.useEffect(() => {
        (b || (0, P.LM)(Y.tv),
            T ||
                f ||
                (null == s || h
                    ? null != o
                        ? a(o)
                        : null != n
                          ? n !== Y.gD.PREMIUM_GROUP_MONTH || u
                              ? a(r.pn.REVIEW)
                              : a(r.pn.ADD_PAYMENT_STEPS)
                          : j
                            ? (p((0, w.x)(d, m, C)), a(r.pn.REVIEW))
                            : null != t
                              ? a(r.pn.PLAN_SELECT)
                              : a(r.pn.SKU_SELECT)
                    : a(r.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: s })));
    }, [h, s, o, m, f, b, n, T, a, t, d, p, I, C, y, j, u]),
    T)
        ? (0, l.jsx)(L.A, {})
        : f
          ? (0, l.jsx)(_.oO, {})
          : null;
}
let q = { key: null, renderStep: (e) => (0, l.jsx)(K, { ...e }), options: { modalSizeGetter: () => "md" } },
    z = { key: null, renderStep: (e) => (0, l.jsx)(Z, { ...e }) },
    $ = [
        { key: r.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(I, {}) },
        { key: r.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(c, {}), options: { renderHeader: !0 } },
    ];
