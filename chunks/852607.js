n.d(t, { kO: () => q, r3: () => z, PL: () => Q });
var l = n(627968),
    i = n(64700),
    r = n(166532),
    a = n(891197),
    s = n(69494),
    o = n(482132),
    u = n(293035);
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
    E = n(375708),
    f = n(94204);
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
                        (0, l.jsx)(h.E, { variant: "text-md/normal", children: E.intl.string(E.t.BxPxhI) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsx)(h.E, { variant: "text-md/normal", children: E.intl.string(E.t.Y3fdOp) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsxs)(h.E, {
                            variant: "text-md/normal",
                            children: [
                                E.intl.string(E.t.Paa4v4),
                                "\xa0",
                                n
                                    ? E.intl.string(E.t.StGVvC)
                                    : (0, l.jsx)(C.Anchor, { onClick: i, children: E.intl.string(E.t.Ex7sk9) }),
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
var y = n(599961);
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
    x = n(682174),
    v = n(590180),
    N = n(951305),
    M = n(20742),
    R = n(430993),
    b = n(579151),
    j = n(599062);
function O() {
    let { refreshCategories: e } = (0, b.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(M.rQ, { title: E.intl.string(E.t["p8+qtU"]) }),
            (0, l.jsx)(R.c, { children: (0, l.jsx)(j.h, { onRetry: e, errorOrigin: j.A.GIFT_MODAL }) }),
        ],
    });
}
var L = n(534479),
    w = n(121005),
    k = n(800471),
    D = n(169801),
    U = n(469778),
    G = n(31823),
    F = n(426398),
    H = n(655857),
    B = n(427675),
    Y = n(316915),
    W = n(652215),
    V = n(202541);
function K(e) {
    let { handleStepChange: t } = e,
        n = (0, Y.t4)((e) => e.selectedSkuId),
        { paymentSources: a, hasFetchedPaymentSources: s } = (0, F.jm)(),
        { application: o } = (0, G.V)(),
        u = (0, g.Hp)(),
        c = (0, B.gU)(),
        d = (0, B.Hu)(),
        { isGift: p } = (0, N.Pv)(),
        [m, h] = i.useState(!0),
        [C, E] = (0, I.yK)([v.A], () => [v.A.isFetchingCategories, v.A.error]);
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
          ? (0, l.jsx)(x.oO, {})
          : null != E
            ? (0, l.jsx)(O, {})
            : null;
}
function Z(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: a, continueSessionToInitialStep: s } = e,
        { hasPaymentSources: o, hasFetchedPaymentSources: u } = (0, F.jm)({ shouldAllowFetchPaymentSources: !0 }),
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            activeSubscription: p,
            defaultPlanId: m,
        } = (0, Y.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        h = (0, g.Hp)(),
        C = (0, w.A)(),
        { hasFetchedRelatedSubscriptionPlans: E, subscriptionPriceOptionsLoading: f } = (0, H.Jn)(),
        { isGift: A } = (0, N.Pv)(),
        S = (0, D.A)({ isGift: A, skuId: c }),
        y = !C || !E || f || !u,
        P = (0, I.bG)([U.A], () => U.A.applicationIdsFetched.has(V.tv));
    (0, T.A)(
        "Payment Modal",
        y,
        5,
        {
            hasFetchedSubscriptions: C,
            hasFetchedSubscriptionPlans: E,
            subscriptionPriceOptionsLoading: f,
            hasFetchedPaymentSources: u,
        },
        { tags: { app_context: "billing" } },
    );
    let v = (0, Y.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: S }));
    return (i.useEffect(() => {
        P || (0, _.LM)(V.tv),
            y ||
                h ||
                (null != s
                    ? a(r.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: s })
                    : null != n
                      ? n !== V.gD.PREMIUM_GROUP_MONTH || o
                          ? a(r.pn.REVIEW)
                          : a(r.pn.ADD_PAYMENT_STEPS)
                      : v
                        ? (d((0, k.x)(c, p, m)), a(r.pn.REVIEW))
                        : null != t
                          ? a(r.pn.PLAN_SELECT)
                          : a(r.pn.SKU_SELECT));
    }, [s, p, h, P, n, y, a, t, c, d, S, m, A, v, o]),
    y)
        ? (0, l.jsx)(L.A, {})
        : h
          ? (0, l.jsx)(x.oO, {})
          : null;
}
let q = { key: null, renderStep: (e) => (0, l.jsx)(K, { ...e }), options: { modalSizeGetter: () => "md" } },
    z = { key: null, renderStep: (e) => (0, l.jsx)(Z, { ...e }) },
    Q = [
        { key: r.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(P, {}) },
        { key: r.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(c, {}), options: { renderHeader: !0 } },
    ];
