n.d(t, { kO: () => q, r3: () => z, PL: () => Q });
var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(891197),
    s = n(69494),
    o = n(482132),
    u = n(647091);
function c() {
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(s.A, {}), (0, l.jsx)(o.dZ, { children: (0, l.jsx)(a.N, { className: u.D }) })],
    });
}
var d = n(830382),
    p = n(696208),
    m = n(297264),
    C = n(834730),
    h = n(349288),
    E = n(375708),
    f = n(811252);
function A(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsxs)("div", {
            className: f.a,
            children: [
                (0, l.jsx)(m.D, { variant: "heading-xl/bold", children: E.intl.string(E.t.Q03WWV) }),
                (0, l.jsxs)("p", {
                    children: [
                        (0, l.jsx)(C.E, { variant: "text-md/normal", children: E.intl.string(E.t.BxPxhI) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsx)(C.E, { variant: "text-md/normal", children: E.intl.string(E.t.Y3fdOp) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsxs)(C.E, {
                            variant: "text-md/normal",
                            children: [
                                E.intl.string(E.t.Paa4v4),
                                "\xa0",
                                n
                                    ? E.intl.string(E.t.StGVvC)
                                    : (0, l.jsx)(h.Anchor, { onClick: i, children: E.intl.string(E.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function S() {
    let e = i.useMemo(() => [{ variant: "primary", text: E.intl.string(E.t.g8vPzy), disabled: !0 }], []);
    return (0, l.jsx)(p.H, { actions: e });
}
var y = n(781409);
function P() {
    let [e, t] = i.useState(!1);
    async function n() {
        t(!0), await (0, d.lo)();
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.A, {}),
            (0, l.jsx)(o.dZ, { children: (0, l.jsx)(A, { className: y.r, isEmailResent: e, resendEmail: n }) }),
            (0, l.jsx)(o.UX, { children: (0, l.jsx)(S, {}) }),
        ],
    });
}
var I = n(702841),
    _ = n(339048),
    T = n(428644),
    g = n(86379),
    v = n(545075),
    x = n(590180),
    N = n(951305),
    R = n(20742),
    b = n(430993),
    M = n(579151),
    j = n(599062);
function O() {
    let { refreshCategories: e } = (0, M.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.rQ, { title: E.intl.string(E.t["p8+qtU"]) }),
            (0, l.jsx)(b.c, { children: (0, l.jsx)(j.h, { onRetry: e, errorOrigin: j.A.GIFT_MODAL }) }),
        ],
    });
}
var L = n(534479),
    w = n(121005),
    k = n(800471),
    U = n(169801),
    D = n(469778),
    G = n(202475),
    F = n(31823),
    H = n(655857),
    B = n(427675),
    Y = n(316915),
    W = n(652215),
    V = n(202541);
function K(e) {
    let { handleStepChange: t } = e,
        n = (0, Y.t4)((e) => e.selectedSkuId),
        { paymentSources: a, hasFetchedPaymentSources: s } = (0, G.jm)(),
        { application: o } = (0, F.V)(),
        u = (0, g.Hp)(),
        c = (0, B.gU)(),
        d = (0, B.Hu)(),
        { isGift: p } = (0, N.Pv)(),
        [m, C] = i.useState(!0),
        [h, E] = (0, I.yK)([x.A], () => [x.A.isFetchingCategories, x.A.error]);
    return (i.useEffect(() => {
        let e = null != o;
        d && s && e && C(h);
    }, [d, s, o, h]),
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
          ? (0, l.jsx)(v.oO, {})
          : null != E
            ? (0, l.jsx)(O, {})
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
        { hasPaymentSources: u, hasFetchedPaymentSources: c } = (0, G.jm)({ shouldAllowFetchPaymentSources: !0 }),
        {
            selectedSkuId: d,
            setSelectedPlanId: p,
            activeSubscription: m,
            defaultPlanId: C,
        } = (0, Y.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        h = (0, g.Hp)(),
        E = (0, w.A)(),
        { hasFetchedRelatedSubscriptionPlans: f, subscriptionPriceOptionsLoading: A } = (0, H.Jn)(),
        { isGift: S } = (0, N.Pv)(),
        y = (0, U.A)({ isGift: S, skuId: d }),
        P = !E || !f || A || !c,
        x = (0, I.bG)([D.A], () => D.A.applicationIdsFetched.has(V.tv));
    (0, T.A)(
        "Payment Modal",
        P,
        5,
        {
            hasFetchedSubscriptions: E,
            hasFetchedSubscriptionPlans: f,
            subscriptionPriceOptionsLoading: A,
            hasFetchedPaymentSources: c,
        },
        { tags: { app_context: "billing" } },
    );
    let R = (0, Y.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: y }));
    return (i.useEffect(() => {
        x || (0, _.LM)(V.tv),
            P ||
                h ||
                (null != s
                    ? a(r.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: s })
                    : null != o
                      ? a(o)
                      : null != n
                        ? n !== V.gD.PREMIUM_GROUP_MONTH || u
                            ? a(r.pn.REVIEW)
                            : a(r.pn.ADD_PAYMENT_STEPS)
                        : R
                          ? (p((0, k.x)(d, m, C)), a(r.pn.REVIEW))
                          : null != t
                            ? a(r.pn.PLAN_SELECT)
                            : a(r.pn.SKU_SELECT));
    }, [s, o, m, h, x, n, P, a, t, d, p, y, C, S, R, u]),
    P)
        ? (0, l.jsx)(L.A, {})
        : h
          ? (0, l.jsx)(v.oO, {})
          : null;
}
let q = { key: null, renderStep: (e) => (0, l.jsx)(K, { ...e }), options: { modalSizeGetter: () => "md" } },
    z = { key: null, renderStep: (e) => (0, l.jsx)(Z, { ...e }) },
    Q = [
        { key: r.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(P, {}) },
        { key: r.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(c, {}), options: { renderHeader: !0 } },
    ];
