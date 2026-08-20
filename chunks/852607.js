n.d(t, { kO: () => Z, r3: () => z, PL: () => Q });
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
    p = n(696208),
    m = n(297264),
    h = n(834730),
    C = n(349288),
    f = n(375708),
    E = n(203949);
function S(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsxs)("div", {
            className: E.a,
            children: [
                (0, l.jsx)(m.D, { variant: "heading-xl/bold", children: f.intl.string(f.t.Q03WWV) }),
                (0, l.jsxs)("p", {
                    children: [
                        (0, l.jsx)(h.E, { variant: "text-md/normal", children: f.intl.string(f.t.BxPxhI) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsx)(h.E, { variant: "text-md/normal", children: f.intl.string(f.t.Y3fdOp) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsxs)(h.E, {
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
function y() {
    let e = i.useMemo(() => [{ variant: "primary", text: f.intl.string(f.t.g8vPzy), disabled: !0 }], []);
    return (0, l.jsx)(p.H, { actions: e });
}
var A = n(636950);
function P() {
    let [e, t] = i.useState(!1);
    async function n() {
        t(!0), await (0, d.lo)();
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.A, {}),
            (0, l.jsx)(o.dZ, { children: (0, l.jsx)(S, { className: A.r, isEmailResent: e, resendEmail: n }) }),
            (0, l.jsx)(o.UX, { children: (0, l.jsx)(y, {}) }),
        ],
    });
}
var I = n(702841),
    g = n(339048),
    v = n(428644),
    _ = n(86379),
    T = n(545075),
    x = n(590180),
    N = n(951305),
    b = n(20742),
    R = n(430993),
    j = n(315949),
    M = n(599062);
function O() {
    let { refreshCategories: e } = (0, j.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(b.rQ, { title: f.intl.string(f.t["p8+qtU"]) }),
            (0, l.jsx)(R.c, { children: (0, l.jsx)(M.h, { onRetry: e, errorOrigin: M.A.GIFT_MODAL }) }),
        ],
    });
}
var L = n(534479),
    k = n(121005),
    w = n(800471),
    U = n(169801),
    D = n(469778),
    G = n(202475),
    F = n(31823),
    B = n(655857),
    H = n(427675),
    Y = n(87725),
    W = n(652215),
    V = n(202541);
function K(e) {
    let { handleStepChange: t } = e,
        n = (0, Y.t4)((e) => e.selectedSkuId),
        { paymentSources: a, hasFetchedPaymentSources: s } = (0, G.j)(),
        { application: o } = (0, F.V)(),
        u = (0, _.Hp)(),
        c = (0, H.gU)(),
        d = (0, H.Hu)(),
        { isGift: p } = (0, N.Pv)(),
        [m, h] = i.useState(!0),
        [C, f] = (0, I.yK)([x.A], () => [x.A.isFetchingCategories, x.A.error]);
    return (i.useEffect(() => {
        let e = null != o;
        d && s && e && h(C);
    }, [d, s, o, C]),
    i.useEffect(() => {
        if (m || u || null == n) return;
        let e = c[n];
        p &&
        (e?.productLine === W.EZt.COLLECTIBLES ||
            e?.productLine === W.EZt.APPLICATION ||
            e?.productLine === W.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(r.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(a).length
              ? t(r.pn.ADD_PAYMENT_STEPS)
              : t(r.pn.REVIEW);
    }, [m, u, t, a, p, c, n]),
    m)
        ? (0, l.jsx)(L.A, {})
        : u
          ? (0, l.jsx)(T.oO, {})
          : null != f
            ? (0, l.jsx)(O, {})
            : null;
}
function q(e) {
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
            defaultPlanId: h,
            shouldUseStripeExpressCheckout: C,
        } = (0, Y.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            shouldUseStripeExpressCheckout: e.getShouldUseStripeExpressCheckout(),
        })),
        f = (0, _.Hp)(),
        E = (0, k.A)(),
        { hasFetchedRelatedSubscriptionPlans: S, subscriptionPriceOptionsLoading: y } = (0, B.Jn)(),
        { isGift: A } = (0, N.Pv)(),
        P = (0, U.A)({ isGift: A, skuId: d }),
        x = !E || !S || y || !c,
        b = (0, I.bG)([D.A], () => D.A.applicationIdsFetched.has(V.tv));
    (0, v.A)(
        "Payment Modal",
        x,
        5,
        {
            hasFetchedSubscriptions: E,
            hasFetchedSubscriptionPlans: S,
            subscriptionPriceOptionsLoading: y,
            hasFetchedPaymentSources: c,
        },
        { tags: { app_context: "billing" } },
    );
    let R = (0, Y.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: P }));
    return (i.useEffect(() => {
        b || (0, g.LM)(V.tv),
            x ||
                f ||
                (null == s || C
                    ? null != o
                        ? a(o)
                        : null != n
                          ? n !== V.gD.PREMIUM_GROUP_MONTH || u
                              ? a(r.pn.REVIEW)
                              : a(r.pn.ADD_PAYMENT_STEPS)
                          : R
                            ? (p((0, w.x)(d, m, h)), a(r.pn.REVIEW))
                            : null != t
                              ? a(r.pn.PLAN_SELECT)
                              : a(r.pn.SKU_SELECT)
                    : a(r.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: s }));
    }, [C, s, o, m, f, b, n, x, a, t, d, p, P, h, A, R, u]),
    x)
        ? (0, l.jsx)(L.A, {})
        : f
          ? (0, l.jsx)(T.oO, {})
          : null;
}
let Z = { key: null, renderStep: (e) => (0, l.jsx)(K, { ...e }), options: { modalSizeGetter: () => "md" } },
    z = { key: null, renderStep: (e) => (0, l.jsx)(q, { ...e }) },
    Q = [
        { key: r.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(P, {}) },
        { key: r.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(c, {}), options: { renderHeader: !0 } },
    ];
