(l.r(t),
    l.d(t, {
        nitroCollection: () => aC,
        virtualCurrencyCollection: () => aj,
        playgroundConfig: () => aA,
        identityCollection: () => aT,
        RevenuePlaygroundCollectionId: () => ag,
        paymentsCollection: () => aS,
    }));
var a,
    n = l(700623),
    i = l(318254),
    r = l(403581),
    o = l(950305),
    s = l(477900),
    u = l(582128),
    d = l(132500),
    c = l(793574),
    p = l(688810),
    m = l(166532),
    b = l(735305),
    h = l(635358),
    x = l(702841),
    y = l(834730),
    f = l(28863),
    v = l(231723),
    g = l(830382),
    E = l(73825),
    S = l(574532),
    j = l(951305),
    C = l(491057),
    T = l(602880),
    A = l(97352),
    I = l(67480),
    _ = l(26279);
let P = (e) => {
    let { skuId: t, isGift: l, applicationId: a } = e,
        { analyticsLocations: n } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
        i = u.useRef(null),
        r = u.useRef(null),
        [o, s] = u.useState(() => (0, d.A)());
    u.useEffect(() => {
        (i.current !== t || r.current !== l) && (s((0, d.A)()), (i.current = t), (r.current = l));
    }, [t, l]);
    let [m, b] = (0, x.yK)([I.A], () => [I.A.isFetching(t), I.A.get(t)]);
    return (
        u.useEffect(() => {
            null != b || m || (0, g.EX)(a, t, h.g.VARIANTS_GROUP).catch((e) => {});
        }, [a, t, b, m]),
        {
            loadId: o,
            analyticsLocations: n,
            handleClose: u.useCallback((e) => {}, []),
            handleComplete: u.useCallback(() => {}, []),
            isFetching: m,
            sku: b,
            skuId: t,
            isGift: l,
        }
    );
};
function k(e) {
    return (0, s.jsxs)("div", {
        style: { padding: 20 },
        children: [
            (0, s.jsx)(y.E, { variant: "body-md/normal", children: e.text }),
            (0, s.jsx)("div", {
                style: { marginTop: 16 },
                children: (0, s.jsx)(f.Anchor, {
                    onClick: () => e.handleStepChange(e.originStep),
                    children: "\u2190 Go Back",
                }),
            }),
        ],
    });
}
function R(e) {
    let {
            analyticsLocations: t,
            applicationId: l,
            skuId: a,
            isGift: n,
            onClose: i,
            onComplete: r,
            initialPlanId: o,
            purchaseType: u,
            stepConfigs: d,
            loadId: c,
            excludeSubscriptionPlansBySKU: p,
            renderHeader: m,
            disablePurchases: b,
        } = e,
        h = `${a}-${n}-${c}`;
    return (0, s.jsx)(
        S.M,
        {
            stepConfigs: d,
            applicationId: l,
            skuIDs: null != a ? [a] : [],
            isGift: n,
            activeSubscription: null,
            purchaseType: u,
            excludeSubscriptionPlansBySKU: p,
            overrideCustomCheckoutFlow: b ? _.uH.DEV_STORYBOOK_CHECKOUT : void 0,
            children: (0, s.jsx)(C.Qt, {
                children: (0, s.jsx)(j.dX, {
                    isGift: n,
                    children: (0, s.jsx)(
                        T.q,
                        {
                            transitionState: v.ip.ENTERED,
                            onClose: i,
                            onComplete: r,
                            applicationId: l,
                            skuId: a,
                            initialPlanId: o,
                            analyticsLocations: t,
                            renderHeader: m,
                        },
                        h,
                    ),
                }),
            }),
        },
        h,
    );
}
var M = l(652215);
let N = [
    {
        key: m.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, s.jsx)(b.x, { ...e, onReturn: () => {} }),
        options: { renderHeader: !0 },
    },
    {
        key: m.pn.REVIEW,
        renderStep: (e) => (0, s.jsx)(k, { ...e, originStep: m.pn.ADD_PAYMENT_STEPS, text: "Review Step Placeholder" }),
        options: {},
    },
];
var D = l(503698),
    L = l.n(D),
    O = l(821609),
    V = l(303136),
    B = l(975571),
    U = l(318346),
    w = l(105292),
    G = l(492931),
    H = l(503928),
    $ = l(268920),
    W = l(633217);
function F() {
    return (0, s.jsx)("div", {
        className: G.s,
        children: (0, s.jsx)(V.A, { src: W.A, fallbackImage: $.A, className: G.Cb }),
    });
}
function Y(e) {
    let {
            ctaText: t,
            ctaOnClick: l,
            analyticsPage: a,
            linkPreText: n = w.intl.string(w.t["5qZv9E"]),
            linkText: i = w.intl.string(w.t.XRdyjz),
        } = e,
        r = u.useCallback(() => {
            null != a &&
                (0, U.Y)({ pageType: a, sectionType: M.JJy.ORBS_BALANCE_MENU, ctaObject: M.ZSU.ORBS_LEARN_MORE_LINK });
        }, [a]);
    return (0, s.jsxs)("div", {
        className: L()(G.kL, H.O),
        children: [
            (0, s.jsx)(F, {}),
            (0, s.jsx)(O.$, { text: t, variant: "primary", size: "sm", onClick: l, fullWidth: !0 }),
            (0, s.jsxs)("div", {
                className: G.kx,
                children: [
                    void 0 !== n &&
                        (0, s.jsxs)(y.E, { variant: "body-xs/normal", className: G.D5, children: [n, "\xa0"] }),
                    (0, s.jsx)(f.Anchor, {
                        target: "_blank",
                        rel: "author",
                        href: B.A.getArticleURL(M.MVz.ORBS_FAQ),
                        className: G.CU,
                        onClick: r,
                        children: i,
                    }),
                ],
            }),
        ],
    });
}
var z = l(70926),
    K = l(240248),
    q = l(161528);
let J = {
    name: "Balance Widget Menu",
    id: "balance-widget-menu",
    component: function (e) {
        let { ctaText: t, linkText: l, showNotificationBadge: a, cardAlignment: n } = e;
        return (0, s.jsx)("div", {
            className: q.tH,
            children: (0, s.jsx)(z.SS, {
                className: q.oz,
                ctaText: (0, K.uJ)(t) ? w.intl.string(w.t["J+vlIR"]) : t,
                ctaOnClick: M.tEg,
                showNotificationBadge: a,
                cardAlignment: n,
                linkText: (0, K.uJ)(l) ? w.intl.string(w.t.XRdyjz) : l,
            }),
        });
    },
    controls: {
        ctaText: { label: "CTA Text", type: "text", defaultValue: "" },
        showNotificationBadge: { label: "Show Notification Badge", type: "boolean", defaultValue: !1 },
        cardAlignment: {
            label: "Card Alignment",
            type: "select",
            options: [
                { label: "Start", value: z.cP.START },
                { label: "End", value: z.cP.END },
            ],
            defaultValue: z.cP.START,
        },
        linkText: { label: "Link Text", type: "text", defaultValue: "" },
    },
};
var X = l(37402);
let Z = {
        balance: { label: "Balance", type: "number", defaultValue: 150 },
        balanceWidgetMode: {
            label: "Balance Widget Mode",
            type: "select",
            options: [
                { label: "Default", value: X.k7.DEFAULT },
                { label: "Selected", value: X.k7.SELECTED },
            ],
            defaultValue: X.k7.DEFAULT,
        },
        variant: {
            label: "Variant",
            type: "select",
            options: [
                { label: "Default", value: "default" },
                { label: "Overlay Secondary", value: "overlay-secondary" },
            ],
            defaultValue: "default",
        },
        showNotificationBadge: { label: "Show Notification Badge", type: "boolean", defaultValue: !1 },
        shouldUseTabularNums: { label: "Use Tabular Nums Font Variant", type: "boolean", defaultValue: !1 },
        disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
    },
    Q = {
        name: "Balance Widget Pill",
        id: "balance-widget-pill",
        component: (e) => {
            let { loading: t, shouldUseTabularNums: l, ...a } = e,
                [n, i] = (0, u.useState)(a.balance);
            return (
                (0, u.useEffect)(() => {
                    null == n && null != a.balance && i(a.balance);
                }, [a.balance, n]),
                (0, s.jsxs)("div", {
                    className: q.YG,
                    children: [
                        (0, s.jsx)(X.Gy, { ...a, balance: t ? null : n, className: l ? q.jG : void 0 }),
                        (0, s.jsx)(O.$, { onClick: () => i(a.balance), text: "Update Balance" }),
                    ],
                })
            );
        },
        controls: { loading: { label: "Loading", type: "boolean", defaultValue: !1 }, ...Z },
    },
    ee = {
        name: "Balance Widget Pill Loading State",
        id: "balance-widget-pill-loading",
        component: (e) => {
            let { loadingDuration: t, shouldUseTabularNums: l, ...a } = e,
                [n, i] = (0, u.useState)(a.balance);
            return (
                (0, u.useEffect)(() => {
                    i(a.balance);
                }, [a.balance]),
                (0, s.jsxs)("div", {
                    className: q.YG,
                    children: [
                        (0, s.jsx)(X.Gy, { ...a, balance: n, className: l ? q.jG : void 0 }),
                        (0, s.jsx)(O.$, {
                            onClick: () => {
                                (i(null),
                                    setTimeout(() => {
                                        i(a.balance);
                                    }, t));
                            },
                            text: "Simulate Loading State",
                        }),
                    ],
                })
            );
        },
        controls: { loadingDuration: { label: "Loading Duration (ms)", type: "number", defaultValue: 500 }, ...Z },
    };
var et = l(97808),
    el = l(778712),
    ea = l(714719),
    en = l(859161),
    ei = l(842291);
let er = {
    name: "Profile Banner",
    id: "profile-banner",
    component: function (e) {
        let {
                bannerSrc: t,
                backgroundColor: l,
                width: a,
                height: n,
                cutoutAlign: i,
                avatarSize: r,
                showGifTag: o,
                showAvatar: u,
            } = e,
            d = (0, en.A)(r);
        return (0, s.jsxs)("div", {
            className: ei.GI,
            children: [
                (0, s.jsx)(ea.A, {
                    className: ei.k5,
                    bannerSrc: "" === t ? null : t,
                    backgroundColor: l,
                    showGifTag: o,
                    width: a,
                    height: n,
                    cutout:
                        "center" === i
                            ? { align: "center", insetBottom: 0, radius: d }
                            : { align: "start", insetStart: 16, insetBottom: 0, radius: d },
                }),
                u &&
                    (0, s.jsx)("div", {
                        className: ei.oz,
                        style: { top: n, left: "center" === i ? a / 2 : 16 + d },
                        children: (0, s.jsx)(et.Js, {
                            src: null,
                            size: r,
                            status: M.clD.ONLINE,
                            "aria-label": "Preview avatar",
                        }),
                    }),
            ],
        });
    },
    controls: {
        width: { label: "Banner Width", type: "slider", defaultValue: 500, minValue: 200, maxValue: 1500 },
        height: { label: "Banner Height", type: "slider", defaultValue: 120, minValue: 50, maxValue: 500 },
        cutoutAlign: {
            label: "Cutout",
            type: "select",
            defaultValue: "center",
            options: [
                { label: "Center", value: "center" },
                { label: "Start", value: "start" },
            ],
        },
        avatarSize: {
            label: "Avatar size",
            type: "select",
            defaultValue: el._3.SIZE_96,
            options: [
                { label: "80", value: el._3.SIZE_80 },
                { label: "96", value: el._3.SIZE_96 },
                { label: "120", value: el._3.SIZE_120 },
            ],
        },
        backgroundColor: { label: "Background color", type: "color", defaultValue: "#5865f2" },
        bannerSrc: { label: "Banner image URL", type: "text", defaultValue: "" },
        showGifTag: { label: "Show GIF tag", type: "boolean", defaultValue: !1 },
        showAvatar: { label: "Overlay avatar", type: "boolean", defaultValue: !0 },
    },
};
var eo = l(488428),
    es = l(17928),
    eu = l(862482),
    ed = l(364522),
    ec = l(331322),
    ep = l(691885),
    em = l(404778),
    eb = l(95477),
    eh = l(866665),
    ex = l(270003),
    ey = l(289873),
    ef = l(20742),
    ev = l(192308),
    eg = l(534514),
    eE = l(277984),
    eS = l(589078),
    ej = l(669874),
    eC = l(883645),
    eT = l(541689),
    eA = l(944304),
    eI = l(300233),
    e_ = l(599941),
    eP = l(162093),
    ek = l(4630),
    eR = l(482132),
    eM = l(75678),
    eN = l(216678),
    eD = l(194509),
    eL = l(511484),
    eO = l(794400),
    eV = l(211287),
    eB = l(478996),
    eU = l(71393),
    ew = l(166403),
    eG = l(202541),
    eH = l(920887);
function e$(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, e_.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, s.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, s.jsx)(eP.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let eW = "checkout-error-boundary-test-modal";
function eF() {
    let { setStep: e } = (0, eC.Ay)();
    return (0, s.jsx)(eR.dZ, {
        children: (0, s.jsxs)(ec.B, {
            direction: "vertical",
            gap: 8,
            fullWidth: !1,
            children: [
                (0, s.jsx)(y.E, {
                    variant: "body-sm/normal",
                    children:
                        "PaymentModal Step within CheckoutRootProvider loaded. Click below to navigate to a mock error step that will throw \u2014 the CheckoutErrorBoundary baked into CheckoutRootProvider will catch it.",
                }),
                (0, s.jsx)(O.$, { variant: "primary", text: "Navigate to Error Step", onClick: () => e(m.pn.REVIEW) }),
            ],
        }),
    });
}
function eY(e) {
    let { errorType: t = "mock-error", errorHandlingBehavior: l } = e;
    switch (t) {
        case "mock-error":
            throw Error("Simulated error thrown inside a payment step");
        case "checkout-error":
            throw new ej.v({
                message: "Simulated CheckoutError thrown inside a payment step",
                errorHandlingBehavior: l,
                extraSentryInformation: { simulatedFrom: "revenue playground" },
            });
        case "revenue-error":
            throw new eO.v({
                message: "Simulated RevenueError thrown inside a payment step",
                errorHandlingBehavior: l,
                extraSentryInformation: { simulatedFrom: "revenue playground" },
            });
        case "translation-key-error":
            return (0, s.jsx)("div", {
                children: w.intl.format(eH.default.cRB332, {
                    avatar: (0, s.jsx)("div", { children: "Sample Avatar" }),
                    nickname: (0, s.jsx)("div", { children: "Sample Nickname" }),
                    username: (0, s.jsx)("div", { children: "Sample Username" }),
                }),
            });
        default:
            return (0, s.jsx)("div", { children: "Unknown error type" });
    }
}
let ez = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: function () {
                let [e, t] = u.useState(eG.pe.TIER_2),
                    [l, a] = u.useState(null),
                    n = (0, es.yK)([eU.A], () => eU.A.getGuildsArray()),
                    [i] = (0, es.yK)([ew.A], () => [ew.A.getPremiumSubscription()]),
                    r = n.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [o, m] = u.useState(r.length > 0 ? r[0].value : null),
                    [b, h] = u.useState(""),
                    [x, v] = u.useState({ plan_id: eG.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    g = "true" !== x.gift && null != i,
                    [S, j] = u.useState(r.length > 0 ? r[0].value : null),
                    { analyticsLocations: C } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
                    [T, A] = u.useState(""),
                    [I, _] = u.useState(M.dJq),
                    { balance: P, isFetching: k, error: R } = (0, eB.W0)(),
                    { enabled: N } = eV.A.useConfig({ location: "orb_checkout_modal" }),
                    { isSubmitting: D, responseMessage: L, redeemVirtualCurrency: V } = (0, eB.Qr)({ useOrdersAPI: N }),
                    [B, U] = u.useState(M.dJq),
                    [w, G] = u.useState(""),
                    [H, $] = u.useState(M.dJq);
                return (0, s.jsx)(p.f5, {
                    value: C,
                    children: (0, s.jsx)(ed.Ip, {
                        className: q.XG,
                        children: (0, s.jsxs)(ec.B, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, s.jsxs)(ec.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, s.jsx)(ep.l, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                { id: "tier_2", value: eG.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eG.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eG.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(eD.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: eu.XD.PRIMARY,
                                            look: eu.pR.FILLED,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(em.c, {}),
                                (0, s.jsxs)(ec.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, s.jsx)(ep.l, {
                                            label: "Premium Select Plan",
                                            value: l,
                                            options: [
                                                { id: "tier_2", value: eG.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eG.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eG.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => a(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(O.$, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, eM.A)({ subscriptionTier: l, analyticsLocations: C }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(em.c, {}),
                                (0, s.jsxs)(ec.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsx)(ep.l, {
                                            label: "Boost",
                                            value: o,
                                            options: r,
                                            onSelectionChange: m,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != o
                                            ? (0, s.jsx)(eA.A, { guild: o, analyticsLocation: {} })
                                            : (0, s.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, s.jsx)(em.c, {}),
                                (0, s.jsxs)(ec.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsx)(f.Anchor, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, s.jsxs)(ec.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(eb.k, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: b,
                                                    onChange: (e) => h(e),
                                                }),
                                                (0, s.jsx)(eh.m, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: b.length < 1,
                                                    children: (0, s.jsx)(O.$, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: b.length < 1,
                                                        onClick: () => {
                                                            window.open(M.BVt.BILLING_PROMOTION_REDEMPTION(b));
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(em.c, {}),
                                (0, s.jsxs)(ex.n, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, s.jsx)(ep.l, {
                                            label: "Plan",
                                            value: x.plan_id,
                                            options: [
                                                { id: "tier_2", value: eG.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: eG.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: eG.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                v((t) => ({ ...t, plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(ep.l, {
                                            label: "Type",
                                            value: x.gift,
                                            options: [
                                                { id: "gift", value: "true", label: "Gift" },
                                                { id: "not_gift", value: "false", label: "Not Gift" },
                                            ],
                                            onSelectionChange: (e) => {
                                                v((t) => ({ ...t, gift: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(eh.m, {
                                    text: "Already subscribed",
                                    shouldShow: g,
                                    children: (0, s.jsx)(O.$, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: g,
                                        onClick: () => {
                                            window.open(M.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + eo.stringify({ ...x }));
                                        },
                                    }),
                                }),
                                (0, s.jsx)(em.c, {}),
                                (0, s.jsxs)(ex.n, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, s.jsxs)(ec.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(y.E, {
                                                    variant: "body-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                k
                                                    ? (0, s.jsx)("div", {
                                                          className: q.wG,
                                                          children: (0, s.jsx)(ey.y, { type: ey.t.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, s.jsxs)("div", {
                                                          className: q.dB,
                                                          children: [
                                                              null !== R &&
                                                                  (0, s.jsxs)(y.E, {
                                                                      variant: "body-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          R.message,
                                                                      ],
                                                                  }),
                                                              (0, s.jsx)(X.Gy, {
                                                                  balance: P ?? 0,
                                                                  balanceWidgetMode: X.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, s.jsx)(eb.k, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: B,
                                            onChange: (e) => U(e),
                                        }),
                                        (0, s.jsx)(O.$, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: D,
                                            onClick: () => V(B, (0, d.A)()),
                                        }),
                                        null != L && (0, s.jsx)(y.E, { variant: "body-sm/normal", children: L }),
                                    ],
                                }),
                                (0, s.jsx)(em.c, {}),
                                (0, s.jsxs)(ex.n, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, s.jsx)(ep.l, {
                                            label: "Premium Server Subscription For",
                                            value: S,
                                            options: r,
                                            onSelectionChange: j,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(y.E, {
                                            variant: "body-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, s.jsx)(eI.H, {
                                            guildId: S?.id,
                                            children: (0, s.jsx)(e$, { selectedGuildForGuildSub: S }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(em.c, {}),
                                (0, s.jsxs)(ec.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsxs)(ex.n, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, s.jsx)(eb.k, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: T,
                                                    onChange: A,
                                                }),
                                                (0, s.jsx)(eb.k, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: I,
                                                    onChange: (e) => _(e),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(O.$, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, ek.openIAPPurchaseModal)({
                                                    applicationId: T,
                                                    skuId: I,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: M.liQ.IN_APP },
                                                    context: M.BRT.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(em.c, {}),
                                (0, s.jsx)(ec.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, s.jsx)(ex.n, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, s.jsxs)(ec.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(eb.k, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: w,
                                                    onChange: G,
                                                }),
                                                (0, s.jsx)(eb.k, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: H,
                                                    onChange: (e) => $(e),
                                                }),
                                                (0, s.jsx)(O.$, {
                                                    variant: "primary",
                                                    text: "Open Premium Apps Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, eN.q)({
                                                            applicationId: w,
                                                            skuId: H,
                                                            analyticsLocations: C,
                                                            checkoutFlow: eS.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, s.jsx)(em.c, {}),
                                (0, s.jsx)(ex.n, {
                                    label: "Helpers",
                                    children: (0, s.jsxs)(ec.B, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, s.jsx)(O.$, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, E.YG)(),
                                            }),
                                            (0, s.jsx)(O.$, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, eE.uZ)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, s.jsx)(em.c, {}),
                                (0, s.jsx)(ex.n, {
                                    label: "Dismissible Content Framework",
                                    children: (0, s.jsx)(O.$, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, eT.Ab)(),
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            },
            controls: {},
        },
        {
            name: "Checkout Error Simulators",
            id: "checkout-error-boundary",
            component: (e) => {
                let { errorHandlingBehavior: t, errorType: l } = e,
                    { analyticsLocations: a } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE);
                return (0, s.jsxs)(p.f5, {
                    value: a,
                    children: [
                        (0, s.jsxs)(ec.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, s.jsx)(eg.D, {
                                    variant: "heading-lg/semibold",
                                    children: "Checkout Error Boundary",
                                }),
                                (0, s.jsxs)(y.E, {
                                    variant: "body-md/normal",
                                    children: [
                                        "Opens a ",
                                        "<PaymentModal>",
                                        " with a step that throws to verify ",
                                        "<CheckoutErrorBoundary>",
                                        " catches it and logs to Sentry with checkout context. For a plain Error, the Variant control (close-and-alert vs. rethrow) drives the boundary. For a CheckoutError/RevenueError, the error carries its own behavior \u2014 so Variant is baked into the thrown error and the boundary honors it over its prop.",
                                    ],
                                }),
                                (0, s.jsx)(O.$, {
                                    variant: "primary",
                                    text: "Open Error Boundary Test Modal",
                                    onClick: () =>
                                        (function (e, t) {
                                            let { errorHandlingBehavior: l, errorType: a } = t,
                                                n = [
                                                    {
                                                        key: m.pn.PLAN_SELECT,
                                                        renderStep: () => (0, s.jsx)(eF, {}),
                                                        renderHeader: () =>
                                                            (0, s.jsx)(ef.rQ, {
                                                                title: "Checkout Error Boundary Test",
                                                            }),
                                                    },
                                                    {
                                                        key: m.pn.REVIEW,
                                                        renderStep: () =>
                                                            (0, s.jsx)(eR.dZ, {
                                                                children: (0, s.jsx)(eY, {
                                                                    errorType: a,
                                                                    errorHandlingBehavior: l,
                                                                }),
                                                            }),
                                                    },
                                                ];
                                            function i() {
                                                return (0, ev.closeModal)(eW);
                                            }
                                            return (0, ev.openModalLazy)(
                                                async () => {
                                                    let t = (e, t, l) => {
                                                        console.log("onErrorReported called: ", {
                                                            error: e,
                                                            info: t,
                                                            sentryErrorOptions: l,
                                                        });
                                                    };
                                                    return await Promise.resolve((a) => {
                                                        let { onClose: i, transitionState: r } = a;
                                                        return (0, s.jsx)(S.M, {
                                                            activeSubscription: null,
                                                            stepConfigs: n,
                                                            skuIDs: [],
                                                            errorHandlingBehavior: l,
                                                            onErrorReported: t,
                                                            children: (0, s.jsx)(j.dX, {
                                                                isGift: !1,
                                                                children: (0, s.jsx)(T.q, {
                                                                    transitionState: r,
                                                                    onClose: i,
                                                                    initialPlanId: null,
                                                                    analyticsLocations: e,
                                                                }),
                                                            }),
                                                        });
                                                    });
                                                },
                                                { onCloseRequest: i, onCloseCallback: i, modalKey: eW },
                                            );
                                        })(a, { errorHandlingBehavior: t, errorType: l }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)(ec.B, {
                            direction: "vertical",
                            gap: 8,
                            padding: { top: 16 },
                            children: [
                                (0, s.jsx)(eg.D, { variant: "heading-lg/semibold", children: "Other Checkout Errors" }),
                                (0, s.jsx)(y.E, {
                                    variant: "body-md/normal",
                                    children: "Simulate known checkout error from discountOfferHasTierError():",
                                }),
                                (0, s.jsx)(O.$, {
                                    variant: "critical-primary",
                                    text: "Simulate Error",
                                    onClick: () =>
                                        void (console.log("Simulating error in discountOfferHasTier()"),
                                        (0, eL.U9)({ discount: null }, eG.pe.TIER_2)),
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                errorHandlingBehavior: {
                    label: "Variant",
                    type: "select",
                    options: [
                        { label: "Close Modal & Show Alert", value: "close-and-alert" },
                        { label: "Crash Client (old default behavior)", value: "rethrow" },
                    ],
                    defaultValue: "close-and-alert",
                },
                errorType: {
                    label: "Error Type",
                    type: "select",
                    options: [
                        { label: "Mock Error (plain Error \u2192 uses prop behavior)", value: "mock-error" },
                        { label: "CheckoutError (\u2192 uses error behavior)", value: "checkout-error" },
                        { label: "RevenueError (\u2192 uses error behavior)", value: "revenue-error" },
                        { label: "Translation Key Error", value: "translation-key-error" },
                    ],
                    defaultValue: "mock-error",
                },
            },
        },
    ],
};
var eK = l(773882),
    eq = l(809029),
    eJ = l(24482),
    eX = l(492518),
    eZ = l(758836);
function eQ() {
    return {
        options: [
            { value: eZ.ck["0"], label: `${eZ.ck["0"]} (Cat Ears)` },
            { value: eZ.ck["1"], label: `${eZ.ck["1"]} (Angry)` },
            { value: eZ.ck["2"], label: `${eZ.ck["2"]} (Aurora Bundle)` },
            { value: eZ.ck["3"], label: `${eZ.ck["3"]} (Heartbloom)` },
            { value: eZ.ck["4"], label: `${eZ.ck["4"]} (Aurora Dreams)` },
            { value: eZ.ck["5"], label: `${eZ.ck["5"]} (Sakura Ink)` },
            { value: eZ.ck["6"], label: `${eZ.ck["6"]} (Of Ink and Steel)` },
            { value: eZ.ck["7"], label: `${eZ.ck["7"]} (Twilight)` },
            { value: eZ.ck["8"], label: `${eZ.ck["8"]} (Red Dragon)` },
            { value: eZ.ck["9"], label: `${eZ.ck["9"]} (Aurora)` },
        ],
        defaultValue: eZ.ck["0"],
    };
}
let e0 = [
        {
            key: m.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, s.jsx)(k, { ...e, originStep: m.pn.REVIEW, text: "Add Payment Steps Placeholder" }),
            options: { useBreadcrumbLabel: () => w.intl.string(w.t.QBnNHq) },
        },
        {
            key: m.pn.CONFIRM,
            renderStep: (e) => (0, s.jsx)(k, { ...e, originStep: m.pn.REVIEW, text: "Confirm Step Placeholder" }),
            options: { useBreadcrumbLabel: () => w.intl.string(w.t.QBnNHq) },
        },
        {
            key: m.pn.PLAN_SELECT,
            renderStep: (e) => (0, s.jsx)(k, { ...e, originStep: m.pn.REVIEW, text: "Plan Select Step Placeholder" }),
            options: {
                useBreadcrumbLabel: () => w.intl.string(w.t.QBnNHq),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
    ],
    e1 = [{ key: m.pn.REVIEW, renderStep: (e) => (0, s.jsx)(eK.p, { ...e }) }, ...e0],
    e2 = [{ key: m.pn.REVIEW, renderStep: (e) => (0, s.jsx)(eq.E, { ...e }) }, ...e0];
function e3() {
    return (0, s.jsx)(y.E, { variant: "body-sm/normal", children: "Purchase button is disabled for this story" });
}
let e8 = { isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 } },
    e6 = eQ(),
    e4 = {
        name: "Collectibles Review Step",
        id: "collectibles-checkout-review-step",
        component: function (e) {
            let { skuId: t, isGift: l } = e,
                {
                    analyticsLocations: a,
                    loadId: n,
                    handleClose: i,
                    handleComplete: r,
                    isFetching: o,
                    sku: u,
                } = P({ skuId: t, isGift: l, applicationId: M.FYj }),
                d = eJ.Ay.isPremiumSku(t);
            return o || null == u || d
                ? (0, s.jsx)(eX.k, {})
                : (0, s.jsxs)("div", {
                      className: q.Cd,
                      children: [
                          (0, s.jsx)(R, {
                              stepConfigs: e1,
                              analyticsLocations: a,
                              applicationId: M.FYj,
                              initialPlanId: void 0,
                              skuId: t,
                              isGift: l,
                              loadId: n,
                              purchaseType: M.VVm.ONE_TIME,
                              disablePurchases: !0,
                              excludeSubscriptionPlansBySKU: !0,
                              onClose: i,
                              onComplete: r,
                          }),
                          (0, s.jsx)(e3, {}),
                      ],
                  });
        },
        controls: {
            skuId: { label: "SKU ID", type: "select", options: e6.options, defaultValue: e6.defaultValue },
            ...e8,
        },
    },
    e9 = {
        name: "Premium Review Step",
        id: "premium-checkout-review-step",
        component: (e) => {
            let { skuId: t, isGift: l } = e,
                {
                    analyticsLocations: a,
                    loadId: n,
                    handleClose: i,
                    handleComplete: r,
                    isFetching: o,
                    sku: d,
                } = P({ skuId: t, isGift: l, applicationId: eG.tv }),
                c = eJ.Ay.isPremiumSku(t),
                p = c ? eG.zE[t] : void 0,
                [m, b] = u.useState(p),
                h = u.useRef(!1);
            u.useEffect(() => {
                h.current || null == p || ((h.current = !0), b(p));
            }, [p, m]);
            let { isLoadedForPremiumSKUs: y, selectedPlan: f } = (function (e) {
                let { subscriptionPlanId: t } = e;
                u.useEffect(() => {
                    A.A.isLoadedForPremiumSKUs() || (0, E.zS)();
                }, []);
                let l = (0, x.bG)([A.A], () => (null != t ? A.A.get(t) : null));
                return {
                    isLoadedForPremiumSKUs: (0, x.bG)([A.A], () => A.A.isLoadedForPremiumSKUs()),
                    selectedPlan: l,
                };
            })({ subscriptionPlanId: m });
            return !o && null != d && y && c && null != f
                ? (0, s.jsxs)("div", {
                      className: q.Cd,
                      children: [
                          (0, s.jsx)(R, {
                              stepConfigs: e2,
                              analyticsLocations: a,
                              applicationId: eG.tv,
                              initialPlanId: p,
                              skuId: t,
                              isGift: l,
                              loadId: n,
                              purchaseType: M.VVm.SUBSCRIPTION,
                              disablePurchases: !0,
                              onClose: i,
                              onComplete: r,
                          }),
                          (0, s.jsx)(e3, {}),
                      ],
                  })
                : (0, s.jsx)(eX.k, {});
        },
        controls: {
            skuId: {
                label: "SKU ID",
                type: "select",
                options: [
                    { value: eG.pe.TIER_0, label: `${eG.pe.TIER_0} (Nitro Basic)` },
                    { value: eG.pe.TIER_2, label: `${eG.pe.TIER_2} (Nitro Standard)` },
                ],
                defaultValue: eG.pe.TIER_0,
            },
            ...e8,
        },
    };
var e7 = l(993077),
    e5 = l(939249),
    te = l(658675),
    tt = l(478531),
    tl = l(944597),
    ta = l(994500),
    tn = l(287809),
    ti = l(403362),
    tr = l(784018),
    to = l(668025);
let ts = {
    name: "Clip Embed Overlay",
    id: "clip-embed-overlay",
    component: function (e) {
        let { videoUrl: t, orientation: l, title: a, autoplay: n } = e,
            i = (0, es.yK)([ta.A, tn.default], () =>
                ta.A.getFriendIDs()
                    .map((e) => tn.default.getUser(e))
                    .filter(ti.Vq),
            ),
            [r, o] = u.useState(new Set()),
            d = u.useCallback((e, t) => {
                o((l) => {
                    let a = new Set(l);
                    return (t ? a.add(e) : a.delete(e), a);
                });
            }, []),
            c = u.useMemo(() => Array.from(r), [r]),
            p = u.useCallback(() => (0, s.jsx)(tt.A, { title: a, participantIds: c }), [a, c]),
            m = "landscape" === l ? 640 : 360;
        return (0, s.jsxs)("div", {
            className: to.iE,
            children: [
                (0, s.jsx)("div", {
                    className: to.j,
                    style: { width: m, height: "landscape" === l ? 360 : 640 },
                    children: (0, s.jsx)(tl.default, {
                        src: t,
                        initialActive: !1,
                        autoplay: n,
                        orientation: l,
                        renderOverlay: p,
                        parentTransitionState: v.ip.ENTERED,
                    }),
                }),
                (0, s.jsxs)(e7.Z, {
                    className: to.nd,
                    type: e7.s.PRIMARY,
                    style: { width: m },
                    children: [
                        (0, s.jsxs)("div", {
                            className: to.Iv,
                            children: [
                                (0, s.jsx)(y.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-default",
                                    children: "Participants",
                                }),
                                (0, s.jsxs)(y.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: [r.size, " selected"],
                                }),
                            ],
                        }),
                        (0, s.jsx)(em.c, {}),
                        0 === i.length
                            ? (0, s.jsx)("div", {
                                  className: to.p$,
                                  children: (0, s.jsx)(y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: "No friends found in local store.",
                                  }),
                              })
                            : (0, s.jsx)("div", {
                                  className: to.p_,
                                  onScroll: (e) => e.stopPropagation(),
                                  children: i.map((e) => {
                                      let t = r.has(e.id);
                                      return (0, s.jsxs)(
                                          e5.D,
                                          {
                                              className: to.nM,
                                              role: "checkbox",
                                              "aria-checked": t,
                                              onClick: () => d(e.id, !t),
                                              children: [
                                                  (0, s.jsx)(te.P, { checked: t }),
                                                  (0, s.jsx)(et.eu, {
                                                      src: e.getAvatarURL(void 0, 24),
                                                      size: el._3.SIZE_24,
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, s.jsx)(y.E, {
                                                      variant: "body-sm/normal",
                                                      color: "interactive-text-default",
                                                      children: e.username,
                                                  }),
                                              ],
                                          },
                                          e.id,
                                      );
                                  }),
                              }),
                    ],
                }),
            ],
        });
    },
    controls: {
        videoUrl: { label: "Video URL", type: "text", defaultValue: tr.kz },
        orientation: {
            label: "Orientation",
            type: "select",
            options: [
                { label: "Landscape", value: "landscape" },
                { label: "Portrait", value: "portrait" },
            ],
            defaultValue: "landscape",
        },
        title: { label: "Title", type: "text", defaultValue: "Epic Gaming Moment" },
        autoplay: { label: "Autoplay", type: "boolean", defaultValue: !1 },
    },
};
var tu = l(930349);
function td() {
    return (0, s.jsx)("div", { style: { width: "100%", height: "100%", borderRadius: "8px", background: "red" } });
}
function tc() {
    return (0, s.jsx)("div", { style: { width: "60%", height: "60%", borderRadius: "50%", background: "red" } });
}
let tp = {
        label: "Variant",
        type: "select",
        defaultValue: "square",
        options: [
            { label: "Square", value: "square" },
            { label: "Bar", value: "bar" },
        ],
    },
    tm = {
        title: "Editable Tile Button",
        stories: [
            {
                name: "Add Button",
                component: function (e) {
                    let { variant: t, fieldA11yLabel: l, editButtonA11yLabel: a, currentValueA11yLabel: n } = e;
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(tu.A, {
                                affordance: "add",
                                variant: t,
                                onClick: () => {},
                                fieldA11yLabel: l,
                                editButtonA11yLabel: a,
                                currentValueA11yLabel: n,
                                renderPreview: () => (0, s.jsx)(td, {}),
                            }),
                            (0, s.jsx)(tu.A, {
                                affordance: "add",
                                variant: t,
                                onClick: () => {},
                                fieldA11yLabel: l,
                                editButtonA11yLabel: a,
                                currentValueA11yLabel: n,
                                renderPreview: () => (0, s.jsx)(tc, {}),
                            }),
                        ],
                    });
                },
                id: "add-tile-button",
                controls: {
                    variant: tp,
                    fieldA11yLabel: { label: "Field Label", type: "text", defaultValue: "Avatar" },
                    editButtonA11yLabel: { label: "Edit Button Label", type: "text", defaultValue: "Change avatar" },
                    currentValueA11yLabel: { label: "Current Value Label", type: "text", defaultValue: "Not set" },
                },
            },
            {
                name: "Edit Button",
                component: function (e) {
                    let {
                        variant: t,
                        showOverlayOnHover: l,
                        fieldA11yLabel: a,
                        editButtonA11yLabel: n,
                        currentValueA11yLabel: i,
                    } = e;
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(tu.A, {
                                variant: t,
                                onClick: () => {},
                                fieldA11yLabel: a,
                                editButtonA11yLabel: n,
                                currentValueA11yLabel: i,
                                showOverlayOnHover: l,
                                renderPreview: () => (0, s.jsx)(td, {}),
                            }),
                            (0, s.jsx)(tu.A, {
                                variant: t,
                                onClick: () => {},
                                fieldA11yLabel: a,
                                editButtonA11yLabel: n,
                                currentValueA11yLabel: i,
                                showOverlayOnHover: l,
                                renderPreview: () => (0, s.jsx)(tc, {}),
                            }),
                        ],
                    });
                },
                id: "edit-tile-button",
                controls: {
                    variant: tp,
                    showOverlayOnHover: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                    fieldA11yLabel: { label: "Field Label", type: "text", defaultValue: "Avatar" },
                    editButtonA11yLabel: { label: "Edit Button Label", type: "text", defaultValue: "Change avatar" },
                    currentValueA11yLabel: { label: "Current Value Label", type: "text", defaultValue: "me.png" },
                },
            },
            {
                name: "Edit Button - Deletable",
                component: function (e) {
                    let {
                            variant: t,
                            showOverlayOnHover: l,
                            fieldA11yLabel: a,
                            editButtonA11yLabel: n,
                            currentValueA11yLabel: i,
                            deleteType: r,
                            deleteAccessibleLabel: o,
                        } = e,
                        u = { type: r, accessibleLabel: o, onClick: () => {} };
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(tu.A, {
                                variant: t,
                                onClick: () => {},
                                fieldA11yLabel: a,
                                editButtonA11yLabel: n,
                                currentValueA11yLabel: i,
                                showOverlayOnHover: l,
                                affordance: u,
                                renderPreview: () => (0, s.jsx)(td, {}),
                            }),
                            (0, s.jsx)(tu.A, {
                                variant: t,
                                onClick: () => {},
                                fieldA11yLabel: a,
                                editButtonA11yLabel: n,
                                currentValueA11yLabel: i,
                                showOverlayOnHover: l,
                                affordance: u,
                                renderPreview: () => (0, s.jsx)(tc, {}),
                            }),
                        ],
                    });
                },
                id: "deletable-edit-tile-button",
                controls: {
                    variant: tp,
                    showOverlayOnHover: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                    fieldA11yLabel: { label: "Field Label", type: "text", defaultValue: "Avatar decoration" },
                    editButtonA11yLabel: {
                        label: "Edit Button Label",
                        type: "text",
                        defaultValue: "Change avatar decoration",
                    },
                    currentValueA11yLabel: { label: "Current Value Label", type: "text", defaultValue: "Ghost Moth" },
                    deleteType: {
                        label: "Delete Button Type",
                        type: "select",
                        defaultValue: "remove",
                        options: [
                            { label: "Remove", value: "remove" },
                            { label: "Reset", value: "reset" },
                        ],
                    },
                    deleteAccessibleLabel: {
                        label: "Delete Aria Label",
                        type: "text",
                        defaultValue: "Remove decoration",
                    },
                },
            },
        ],
    };
var tb = l(687021),
    th = l(487233),
    tx = l(120386),
    ty = l(374654);
let tf = { value: "", label: "No Guild (main profile)" };
var tv = l(99696),
    tg = l(599147),
    tE = l(808411),
    tS = l(435558),
    tj = l(197935),
    tC = l(349738),
    tT = l(410681);
let tA = [
        { id: "xxs", label: "xxs", value: "xxs" },
        { id: "xs", label: "xs", value: "xs" },
        { id: "sm", label: "sm", value: "sm" },
        { id: "md", label: "md", value: "md" },
        { id: "lg", label: "lg", value: "lg" },
        { id: "xl", label: "xl", value: "xl" },
        { id: "xxl", label: "xxl", value: "xxl" },
        { id: "none", label: "0px", value: 0 },
        { id: "4px", label: "4px", value: 4 },
        { id: "6px", label: "6px", value: 6 },
        { id: "8px", label: "8px", value: 8 },
        { id: "12px", label: "12px", value: 12 },
        { id: "16px", label: "16px", value: 16 },
        { id: "20px", label: "20px", value: 20 },
        { id: "24px", label: "24px", value: 24 },
        { id: "32px", label: "32px", value: 32 },
        { id: "40px", label: "40px", value: 40 },
    ],
    tI = [
        { id: "page", label: "page", value: "page" },
        { id: "item", label: "item", value: "item" },
    ];
function t_(e) {
    return String(e);
}
var tP = l(461536),
    tk = l(425713),
    tR = l(277135);
let tM = {
    bronze: eG.Ac.PREMIUM_TENURE_1_MONTH,
    silver: eG.Ac.PREMIUM_TENURE_3_MONTH,
    gold: eG.Ac.PREMIUM_TENURE_6_MONTH,
    platinum: eG.Ac.PREMIUM_TENURE_12_MONTH,
    diamond: eG.Ac.PREMIUM_TENURE_24_MONTH,
    emerald: eG.Ac.PREMIUM_TENURE_36_MONTH,
    ruby: eG.Ac.PREMIUM_TENURE_60_MONTH,
    opal: eG.Ac.PREMIUM_TENURE_72_MONTH,
};
var tN = l(661531),
    tD = l(116833),
    tL = l(720879);
let tO = {
    bronze: {
        type: "custom",
        start: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
        end: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END,
    },
    silver: {
        type: "custom",
        start: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
        end: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END,
    },
    gold: {
        type: "custom",
        start: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
        end: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END,
    },
    platinum: {
        type: "custom",
        start: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
        end: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END,
    },
    diamond: {
        type: "custom",
        start: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
        end: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
    },
    emerald: {
        type: "custom",
        start: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
        end: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END,
    },
    ruby: {
        type: "custom",
        start: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
        end: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END,
    },
    opal: {
        type: "custom",
        start: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
        end: tN.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END,
    },
};
var tV = l(624716),
    tB = l(872725);
let tU = { name: "Expressive Progress", component: tE.A, id: "expressive-progress", controls: {} },
    tw = { name: "Tab Tooltip", component: tV.A, id: "tab-tooltip", controls: {} },
    tG = {
        title: "Nitro Components",
        stories: [
            {
                name: "AnimatedBorderCard",
                component: function (e) {
                    return (0, s.jsx)("div", {
                        style: { maxWidth: 400 },
                        children: (0, s.jsx)(
                            tB.A,
                            {
                                fit: e.fit,
                                glowAmount: e.glowAmount,
                                blurAmount: e.blurAmount,
                                hueRotate: e.hueRotate,
                                cardType: e7.s.PRIMARY,
                                glowing: !0,
                                children: (0, s.jsxs)("div", {
                                    style: { padding: 16, display: "flex", flexDirection: "column", gap: 8 },
                                    children: [
                                        (0, s.jsx)(eg.D, { variant: "heading-lg/semibold", children: "Card Title" }),
                                        (0, s.jsx)(y.E, {
                                            variant: "body-sm/normal",
                                            color: "text-default",
                                            children: "This is sample card content using design system tokens.",
                                        }),
                                        (0, s.jsx)(y.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: "This is more sample content.",
                                        }),
                                    ],
                                }),
                            },
                            e.fit,
                        ),
                    });
                },
                id: "animated-border-card",
                controls: {
                    fit: {
                        label: "Fit",
                        type: "select",
                        defaultValue: "layout",
                        options: [
                            { label: "Contain", value: "contain" },
                            { label: "Cover", value: "cover" },
                            { label: "Fill", value: "fill" },
                            { label: "Fit Width", value: "fit-width" },
                            { label: "Fit Height", value: "fit-height" },
                            { label: "None", value: "none" },
                            { label: "Scale Down", value: "scale-down" },
                            { label: "Layout", value: "layout" },
                        ],
                    },
                    glowAmount: {
                        label: "Glow Amount (px)",
                        type: "slider",
                        defaultValue: 8,
                        minValue: 0,
                        maxValue: 50,
                    },
                    blurAmount: {
                        label: "Blur Amount (px)",
                        type: "slider",
                        defaultValue: 30,
                        minValue: 0,
                        maxValue: 100,
                    },
                    hueRotate: {
                        label: "Hue Rotate (deg)",
                        type: "slider",
                        defaultValue: 0,
                        minValue: 0,
                        maxValue: 360,
                    },
                },
            },
            {
                name: "Cancellation Flow",
                component: function () {
                    return (0, s.jsx)(tg.o, {});
                },
                id: "cancellation-flow",
                controls: {},
            },
            tU,
            {
                name: "Horizontal Scroll List",
                component: function () {
                    let [e, t] = u.useState(15),
                        [l, a] = u.useState(8),
                        [n, i] = u.useState("xl"),
                        [r, o] = u.useState("page"),
                        d = u.useMemo(() => [...Array(e)].map((e, t) => t), [e]);
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(
                                tj.A,
                                {
                                    gap: l,
                                    edgeFade: n,
                                    scrollStep: r,
                                    items: d,
                                    getItemKey: t_,
                                    renderItem: (e, t) =>
                                        (0, s.jsx)(e5.D, {
                                            className: tT.j,
                                            onClick: () => console.log(e),
                                            ...t,
                                            role: "button",
                                            children: (0, s.jsxs)(ec.B, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                children: [
                                                    (0, s.jsx)("div", { children: e }),
                                                    e % 3 == 0 &&
                                                        (0, s.jsx)(O.$, {
                                                            onClick: () => console.log(`clicked button ${e}`),
                                                            tabIndex: t.tabIndex,
                                                            text: "Click Me",
                                                        }),
                                                ],
                                            }),
                                        }),
                                },
                                r,
                            ),
                            (0, s.jsx)(tC.nB, {}),
                            (0, s.jsx)(tC.MG, {
                                children: (0, s.jsx)(eb.k, {
                                    type: "number",
                                    min: 0,
                                    value: e.toString(),
                                    onChange: (e) => {
                                        t((0, tS.clamp)(+e, 0, 100));
                                    },
                                    label: "Children Count",
                                }),
                            }),
                            (0, s.jsx)(tC.MG, {
                                children: (0, s.jsx)(ep.l, {
                                    value: l,
                                    options: tA,
                                    onSelectionChange: a,
                                    label: "Children Gap",
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            }),
                            (0, s.jsx)(tC.MG, {
                                children: (0, s.jsx)(ep.l, {
                                    value: n,
                                    options: tA,
                                    onSelectionChange: i,
                                    label: "Edge Fade Space",
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            }),
                            (0, s.jsx)(tC.MG, {
                                children: (0, s.jsx)(ep.l, {
                                    value: r,
                                    options: tI,
                                    onSelectionChange: o,
                                    label: "Scroll Step",
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    });
                },
                id: "horizontal-scroll-list",
                controls: {},
            },
            {
                name: "Mini Premium Tooltip",
                component: function (e) {
                    let { badgeId: t, earnedOnText: l, variant: a } = e,
                        n = u.useRef(null),
                        i = u.useRef(null),
                        r = tM[t],
                        o = (0, tk.I)(r).standard,
                        d = eG.VD[r].rarity,
                        c = (
                            w.intl.string(w.t.lG6a5x) +
                            " " +
                            w.intl.string(eG.VD[r].nameUnformatted)
                        ).toLocaleUpperCase();
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(y.E, {
                                variant: "body-md/normal",
                                color: "text-muted",
                                children:
                                    'Hover or focus a badge to see the mini tooltip. Renders as `role="tooltip"` \u2014 title and body are announced via `aria-describedby` injected on the trigger by MiniPremiumTooltip.',
                            }),
                            (0, s.jsxs)("div", {
                                className: tR.k3,
                                children: [
                                    (0, s.jsx)("span", {
                                        className: tR.yU,
                                        children: (0, s.jsx)(tP.K, {
                                            targetElementRef: n,
                                            title: c,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: c,
                                            rarity: d,
                                            variant: a,
                                            children: (0, s.jsx)(f.Anchor, {
                                                href: "#",
                                                ref: n,
                                                "aria-label": w.intl.string(w.t["JEiq/c"]),
                                                children: (0, s.jsx)("img", {
                                                    alt: " ",
                                                    "aria-hidden": !0,
                                                    src: o,
                                                    className: tR.Jv,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)("span", {
                                        className: tR.yU,
                                        children: (0, s.jsx)(tP.K, {
                                            targetElementRef: i,
                                            title: c,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: c,
                                            rarity: d,
                                            variant: a,
                                            children: (0, s.jsx)(f.Anchor, {
                                                href: "#",
                                                ref: i,
                                                "aria-label": w.intl.string(w.t["JEiq/c"]),
                                                children: (0, s.jsx)("img", {
                                                    alt: " ",
                                                    "aria-hidden": !0,
                                                    src: o,
                                                    className: tR.Jv,
                                                }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                id: "mini-premium-tooltip",
                controls: {
                    badgeId: {
                        label: "Badge",
                        type: "select",
                        defaultValue: "diamond",
                        options: [
                            { label: "Bronze (1 Month)", value: "bronze" },
                            { label: "Silver (3 Month)", value: "silver" },
                            { label: "Gold (6 Month)", value: "gold" },
                            { label: "Platinum (12 Month)", value: "platinum" },
                            { label: "Diamond (24 Month)", value: "diamond" },
                            { label: "Emerald (36 Month)", value: "emerald" },
                            { label: "Ruby (60 Month)", value: "ruby" },
                            { label: "Opal (72 Month)", value: "opal" },
                        ],
                    },
                    earnedOnText: { label: "Earned-on text", type: "text", defaultValue: "Earned on 4/20/24" },
                    variant: {
                        label: "Variant",
                        type: "select",
                        defaultValue: "nitro",
                        options: [
                            { label: "Default", value: "default" },
                            { label: "Nitro (italic uppercase)", value: "nitro" },
                        ],
                    },
                },
            },
            {
                name: "Premium Tooltip",
                component: function (e) {
                    let {
                            title: t,
                            body: l,
                            showGraphic: a,
                            showActions: n,
                            badgeId: i,
                            showProgress: r,
                            progressCircleText: o,
                            progressCirclePercent: d,
                            progressCircleUrgency: c,
                            delay: p,
                            size: m,
                            gradientColor: b,
                            estimatedTooltipHeight: h,
                        } = e,
                        x = u.useRef(null),
                        f = u.useRef(null),
                        v = u.useMemo(
                            () =>
                                ({
                                    bronze: eG.Ac.PREMIUM_TENURE_1_MONTH,
                                    silver: eG.Ac.PREMIUM_TENURE_3_MONTH,
                                    gold: eG.Ac.PREMIUM_TENURE_6_MONTH,
                                    platinum: eG.Ac.PREMIUM_TENURE_12_MONTH,
                                    diamond: eG.Ac.PREMIUM_TENURE_24_MONTH,
                                    emerald: eG.Ac.PREMIUM_TENURE_36_MONTH,
                                    ruby: eG.Ac.PREMIUM_TENURE_60_MONTH,
                                    opal: eG.Ac.PREMIUM_TENURE_72_MONTH,
                                })[i],
                            [i],
                        ),
                        g = null != v ? (0, tk.I)(v).standard : null,
                        E = u.useMemo(() => {
                            if (null == v) return "";
                            let e = eG.VD[v];
                            return (
                                w.intl.string(w.t.lG6a5x) +
                                " " +
                                w.intl.string(e.nameUnformatted)
                            ).toLocaleUpperCase();
                        }, [v]),
                        S = u.useMemo(() => {
                            if (!a || null == g) return;
                            let e = r
                                ? { progressCircleText: o, progressCirclePercent: d, progressCircleUrgency: c }
                                : {};
                            return {
                                type: "dynamic",
                                component: tD.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                                aspectRatio: "6/4",
                                props: { src: g, alt: E, ...e },
                            };
                        }, [a, g, E, r, o, d, c]),
                        j = {
                            title: t,
                            body: l,
                            graphic: S,
                            actions: u.useMemo(() => {
                                if (n) return [{ text: "Got it", variant: "primary" }];
                            }, [n]),
                            delay: p,
                            size: m,
                            gradientColor: u.useMemo(() => ("string" == typeof b && b in tO ? tO[b] : b), [b]),
                            estimatedTooltipHeight: h,
                        };
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(y.E, {
                                variant: "body-md/normal",
                                color: "text-muted",
                                children: "Hover or focus these buttons.",
                            }),
                            (0, s.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: "16px",
                                    width: "100%",
                                    marginTop: "200px",
                                },
                                children: [
                                    (0, s.jsx)(tL.L, {
                                        targetElementRef: x,
                                        ...j,
                                        children: (0, s.jsx)(O.$, { buttonRef: x, variant: "primary", text: "Left" }),
                                    }),
                                    (0, s.jsx)(tL.L, {
                                        targetElementRef: f,
                                        ...j,
                                        children: (0, s.jsx)(O.$, { buttonRef: f, variant: "primary", text: "Right" }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                id: "premium-tooltip",
                controls: {
                    title: { label: "Title", type: "text", defaultValue: w.intl.string(w.t.lG6a5x).toUpperCase() },
                    body: {
                        label: "Body",
                        type: "text",
                        defaultValue: "This is an example of a premium tooltip (poptip?) with customizable content.",
                    },
                    showGraphic: { label: "Show Graphic", type: "boolean", defaultValue: !0 },
                    showActions: { label: "Show Actions", type: "boolean", defaultValue: !1 },
                    badgeId: {
                        label: "Badge",
                        type: "select",
                        defaultValue: "gold",
                        options: [
                            { label: "Bronze (1 Month)", value: "bronze" },
                            { label: "Silver (3 Month)", value: "silver" },
                            { label: "Gold (6 Month)", value: "gold" },
                            { label: "Platinum (12 Month)", value: "platinum" },
                            { label: "Diamond (24 Month)", value: "diamond" },
                            { label: "Emerald (36 Month)", value: "emerald" },
                            { label: "Ruby (60 Month)", value: "ruby" },
                            { label: "Opal (72 Month)", value: "opal" },
                        ],
                    },
                    gradientColor: {
                        label: "Gradient Color",
                        type: "select",
                        defaultValue: "gold",
                        options: [
                            { label: "Nitro Pink", value: "nitro-pink" },
                            { label: "Nitro Green", value: "nitro-green" },
                            { label: "Green", value: "green" },
                            { label: "Purple", value: "purple" },
                            { label: "Bronze (1 Month)", value: "bronze" },
                            { label: "Silver (3 Month)", value: "silver" },
                            { label: "Gold (6 Month)", value: "gold" },
                            { label: "Platinum (12 Month)", value: "platinum" },
                            { label: "Diamond (24 Month)", value: "diamond" },
                            { label: "Emerald (36 Month)", value: "emerald" },
                            { label: "Ruby (60 Month)", value: "ruby" },
                            { label: "Opal (72 Month)", value: "opal" },
                        ],
                    },
                    size: {
                        label: "Size",
                        type: "select",
                        defaultValue: "lg",
                        options: [
                            { label: "Small", value: "sm" },
                            { label: "Medium", value: "md" },
                            { label: "Large", value: "lg" },
                            { label: "Video", value: "video" },
                        ],
                    },
                    showProgress: { label: "Show Progress", type: "boolean", defaultValue: !0 },
                    progressCircleText: { label: "Progress Text", type: "text", defaultValue: "15" },
                    progressCirclePercent: { label: "Progress Percent", type: "number", defaultValue: 50 },
                    progressCircleUrgency: {
                        label: "Progress Urgency",
                        type: "select",
                        defaultValue: "warning",
                        options: [
                            { label: "Warning", value: "warning" },
                            { label: "Critical", value: "critical" },
                        ],
                    },
                    delay: { label: "Delay (ms)", type: "number", defaultValue: 300 },
                    estimatedTooltipHeight: {
                        label: "Estimated Tooltip Height (px)",
                        type: "number",
                        defaultValue: 300,
                    },
                },
            },
            tw,
        ],
    };
var tH = l(858899),
    t$ = l(750338),
    tW = l(713271),
    tF = l(610557),
    tY = l(576765),
    tz = l(88433);
let tK = { none: void 0, nitroWheel: r.t },
    tq = {
        name: "Bento Box",
        component: function (e) {
            let {
                title: t,
                description: l,
                ctaMode: a,
                descriptionCtaText: n,
                action1Text: i,
                action1Variant: r,
                action2Text: o,
                action2Variant: u,
                icon: d,
                iconPosition: c,
                index: p,
                size: m,
                badgeText: b,
                badgeVariant: h,
                isReducedMotion: x,
                previewImageStyle: y,
            } = e;
            function f() {
                return (0, tH.P0)({ text: "CTA clicked!", variant: "success" });
            }
            let v = tK[d],
                g =
                    "descriptionCta" === a
                        ? { descriptionCta: n, onClick: f }
                        : "actions" === a
                          ? {
                                actions: [
                                    {
                                        text: i,
                                        variant: r,
                                        onClick: f,
                                        ...(null != v ? { icon: v, iconPosition: c } : {}),
                                    },
                                    ...(o.length > 0 ? [{ text: o, variant: u, onClick: f }] : []),
                                ],
                            }
                          : {};
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(t$.A, {
                    name: tW.N.EMOJIS,
                    title: t,
                    description: l,
                    previewImage: tY.A,
                    videoUrl: tz.A,
                    shouldLoadVideo: !0,
                    index: p,
                    size: m,
                    badgeText: b.length > 0 ? b : void 0,
                    badgeVariant: h,
                    isReducedMotion: x,
                    previewImageStyle: y,
                    ...g,
                }),
            });
        },
        id: "bento-box",
        controls: {
            title: { label: "Title", type: "text", defaultValue: "Express yourself with emoji" },
            description: {
                label: "Description",
                type: "text",
                defaultValue: "Use any emoji anywhere \u2014 even in servers that don't have them unlocked.",
            },
            ctaMode: {
                label: "CTA Mode",
                type: "select",
                defaultValue: "descriptionCta",
                options: [
                    { label: "descriptionCta + onClick", value: "descriptionCta" },
                    { label: "actions", value: "actions" },
                    { label: "None", value: "none" },
                ],
            },
            descriptionCtaText: { label: "descriptionCta Text", type: "text", defaultValue: "Take me there" },
            action1Text: { label: "Action 1 Text", type: "text", defaultValue: "Primary action" },
            action1Variant: {
                label: "Action 1 Variant",
                type: "select",
                defaultValue: "primary",
                options: [
                    { label: "Primary", value: "primary" },
                    { label: "Secondary", value: "secondary" },
                ],
            },
            action2Text: {
                label: "Action 2 Text (leave empty to hide)",
                type: "text",
                defaultValue: "Secondary action",
            },
            action2Variant: {
                label: "Action 2 Variant",
                type: "select",
                defaultValue: "secondary",
                options: [
                    { label: "Primary", value: "primary" },
                    { label: "Secondary", value: "secondary" },
                ],
            },
            icon: {
                label: "Action 1 Icon (actions mode only)",
                type: "select",
                defaultValue: "none",
                options: [
                    { label: "None", value: "none" },
                    { label: "Nitro Wheel", value: "nitroWheel" },
                ],
            },
            iconPosition: {
                label: "Action 1 Icon Position (actions mode only)",
                type: "select",
                defaultValue: "start",
                options: [
                    { label: "Start", value: "start" },
                    { label: "End", value: "end" },
                ],
            },
            index: { label: "Index", type: "number", defaultValue: 0 },
            size: {
                label: "Size",
                type: "select",
                defaultValue: tF.A0.LARGE,
                options: [
                    { label: "Small", value: tF.A0.SMALL },
                    { label: "Medium", value: tF.A0.MEDIUM },
                    { label: "Large", value: tF.A0.LARGE },
                ],
            },
            badgeText: { label: "Badge Text", type: "text", defaultValue: "" },
            badgeVariant: {
                label: "Badge Variant",
                type: "select",
                defaultValue: "gradient",
                options: [
                    { label: "Gradient", value: "gradient" },
                    { label: "Expressive", value: "expressive" },
                ],
            },
            isReducedMotion: { label: "Reduced Motion", type: "boolean", defaultValue: !1 },
            previewImageStyle: {
                label: "Preview Image Style",
                type: "select",
                defaultValue: tF.Tb.CONTAINED,
                options: [
                    { label: "Contained", value: tF.Tb.CONTAINED },
                    { label: "Overlay", value: tF.Tb.OVERLAY },
                ],
            },
        },
    };
var tJ = l(398590),
    tX = l(920050),
    tZ = l(254202),
    tQ = l(976860);
let t0 = {
    title: "Perks",
    stories: [
        {
            name: "Perk Card",
            component: function (e) {
                let { ...t } = e;
                return (0, s.jsxs)("div", {
                    style: { maxWidth: "100%", width: t.featured ? 752 : 364 },
                    children: [
                        (0, s.jsx)(tZ.S, {
                            ...t,
                            id: "test-id",
                            progress: null != t.progress && t.progress > 0 ? t.progress : void 0,
                            onCtaClick: () => (0, tH.P0)({ text: "CTA Clicked!", variant: "success" }),
                        }),
                        (0, s.jsx)(t1, {}),
                    ],
                });
            },
            id: "perk-card",
            controls: {
                title: { label: "Title", type: "text", defaultValue: "Perk Title" },
                description: {
                    label: "Description",
                    type: "text",
                    defaultValue: "This is the perk description. When hovered or focused, it will be revealed in full.",
                },
                caption: { label: "Caption", type: "text", defaultValue: "" },
                pillText: { label: "Pill Text", type: "text", defaultValue: "" },
                primaryAsset: { label: "Primary Asset", type: "text", defaultValue: "https://i.imgur.com/xJL1c3t.png" },
                backgroundAssetUrl: { label: "Background Asset", type: "text", defaultValue: "" },
                ctaText: { label: "CTA Text", type: "text", defaultValue: "Learn More" },
                progress: { label: "Progress (0 - 1.0)", type: "slider", defaultValue: 0, minValue: 0, maxValue: 1 },
                featured: { label: "Featured", type: "boolean", defaultValue: !1 },
                glowing: { label: "Glowing", type: "boolean", defaultValue: !1 },
                blurTint: { label: "Blur Tint", type: "color", defaultValue: void 0 },
            },
        },
    ],
};
function t1() {
    let [e, t] = (0, u.useState)("customSounds"),
        l = `${M.BVt.NITRO_HOME}?perk=${e}`;
    return (0, s.jsxs)("div", {
        style: { marginTop: 64, display: "flex", flexDirection: "column", gap: 10 },
        children: [
            (0, s.jsx)(eb.k, { label: "Deep Linking", value: e, onChange: (e) => t(e), placeholder: "Perk ID" }),
            (0, s.jsx)(O.$, {
                text: "Test Deep Link",
                variant: "primary",
                size: "sm",
                onClick: () => {
                    ((0, tJ.jH)(), (0, tQ.pX)(M.BVt.ME), setTimeout(() => (0, tQ.pX)(l), 200));
                },
            }),
            (0, s.jsxs)(y.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                style: { userSelect: "text" },
                children: [
                    "IDs from PerkCardIds.tsx:",
                    (0, s.jsx)("ul", {
                        style: { margin: "4px 0 0", paddingLeft: 24, listStyleType: "disc", columns: 3, columnGap: 24 },
                        children: Object.values(tX).map((e) => (0, s.jsx)("li", { children: e }, e)),
                    }),
                ],
            }),
        ],
    });
}
var t2 = l(339984);
let t3 = [
        { id: "avatar_decoration", label: "Avatar Decoration", value: eG.e.AVATAR_DECORATION_MODAL_UPSELL },
        { id: "profile_effect", label: "Profile Effect", value: eG.e.PROFILE_EFFECT_MODAL_UPSELL },
        { id: "nameplate", label: "Nameplate", value: eG.e.NAMEPLATE_MODAL_UPSELL },
    ],
    t8 = {
        [eG.e.AVATAR_DECORATION_MODAL_UPSELL]: {
            title: "Express Yourself with Avatar Decorations",
            body: "Stand out with unique avatar decorations exclusive to Nitro subscribers.",
        },
        [eG.e.PROFILE_EFFECT_MODAL_UPSELL]: {
            title: "Animate Your Profile with Profile Effects",
            body: "Add dynamic effects to your profile with Nitro.",
        },
        [eG.e.NAMEPLATE_MODAL_UPSELL]: {
            title: "Personalize with a Nameplate",
            body: "Show off your style with a custom nameplate, available with Nitro.",
        },
    },
    t6 = [
        { id: "near_limit", label: "Near Limit (99 guilds)", value: 99 },
        { id: "at_limit", label: "At Limit (100 guilds)", value: M.qlD },
    ],
    t4 = [
        { id: "avatar", label: "Avatar", value: t2.HL.AVATAR },
        { id: "banner", label: "Banner", value: t2.HL.BANNER },
    ];
var t9 = l(652165);
let t7 = "1271174907081789524",
    t5 = {
        name: "Orb Checkout Modals",
        id: "orb-checkout-modal",
        component: function (e) {
            let { skuId: t } = e;
            return (0, s.jsx)("div", {
                className: q.YG,
                children: (0, s.jsx)(O.$, {
                    onClick: () => {
                        (0, t9.B4)({
                            skuId: t,
                            onComplete: (e) => {
                                console.log(
                                    `Orb Checkout Success for SKU: ${t}. Entitlement(s): `,
                                    e?.entitlements,
                                    Date.now(),
                                );
                            },
                            onCloseCallback: () => {
                                console.log("Orb Checkout Closed");
                            },
                        });
                    },
                    text: `Open Orb Checkout for Custom SKU: ${t}`,
                }),
            });
        },
        controls: {
            skuId: {
                label: "SKU ID",
                type: "select",
                options: [
                    { skuId: "1342211853484429445", skuName: "Orb Profile Badge" },
                    { skuId: "1427463138634109026", skuName: "Magic Mists (Deco)" },
                    { skuId: "1332505467980873728", skuName: "Pondering Portal (Deco)" },
                    { skuId: t7, skuName: "Oni's Curse (Deco)" },
                ].map((e) => {
                    let { skuId: t, skuName: l } = e;
                    return { label: l, value: t };
                }),
                defaultValue: t7,
            },
        },
    };
var le = l(324861),
    lt = l(646731),
    ll = l(129158);
let la = {
    title: "Orb Wallet",
    stories: [
        {
            name: "Example Orb Wallet",
            id: "orb-wallet-stateless",
            component: function (e) {
                return (0, s.jsxs)("div", {
                    className: ll.B,
                    children: [(0, s.jsx)(lt.FT, { ...e }), (0, s.jsx)(lt.Yc, { ...e }), ";"],
                });
            },
            controls: {
                userHasPremium: { label: "User Has Nitro", type: "boolean", defaultValue: !0 },
                orbBalance: { label: "Balance", type: "number", defaultValue: 4240 },
                hasErrorMessage: { label: "Has Error Message", type: "boolean", defaultValue: !1 },
                isLoading: { label: "Is Loading", type: "boolean", defaultValue: !1 },
                totalOrbsRedeemed: { label: "Total Orbs Redeemed", type: "number", defaultValue: 15600 },
            },
        },
        { name: "User (Stateful) Orb Wallet", id: "orb-wallet-stateful", component: () => (0, s.jsx)(lt.vG, {}) },
    ],
};
var ln = l(877062);
let li = {
    name: "Deep Link Test",
    id: "deep-link-test",
    component: function (e) {
        let { deepLinkUrl: t } = e;
        return (0, s.jsx)(S.M, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, s.jsxs)(tC.wn, {
                children: [
                    (0, s.jsx)(eg.D, { variant: "heading-xl/semibold", children: "Deep Link Test" }),
                    (0, s.jsx)(tC.Hq, {
                        label: "Test Deeplinking with a Custom Path",
                        direction: "vertical",
                        children: (0, s.jsx)(O.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Test Deeplink",
                            onClick: function () {
                                (console.log("Opening deep link... ", t),
                                    ln.A.launch(t, (e) => {
                                        console.log("onDone response: ", e);
                                    }));
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    controls: {
        deepLinkUrl: {
            label: "Deep Link URL",
            type: "text",
            defaultValue: `discord://${location.host}/feature/apple-payment-link`,
        },
    },
};
var lr = l(636537);
let lo = {
    [M.hes.CARD]: () => w.intl.string(w.t["ei5/p8"]),
    [M.hes.PAYPAL]: () => w.intl.string(w.t["2dgEq+"]),
    [M.hes.SOFORT]: () => w.intl.string(w.t["edKX/1"]),
    [M.hes.GIROPAY]: () => w.intl.string(w.t["y+0MQZ"]),
    [M.hes.PRZELEWY24]: () => w.intl.string(w.t.u25uL0),
    [M.hes.PAYSAFE_CARD]: () => w.intl.string(w.t.boznHN),
    [M.hes.GCASH]: () => w.intl.string(w.t.PjehcF),
    [M.hes.GRABPAY_MY]: () => w.intl.string(w.t.T5davE),
    [M.hes.MOMO_WALLET]: () => w.intl.string(w.t.J0A1Vk),
    [M.hes.VENMO]: () => w.intl.string(w.t.jYOezc),
    [M.hes.KAKAOPAY]: () => w.intl.string(w.t.CSVexi),
    [M.hes.GOPAY_WALLET]: () => w.intl.string(w.t["43J8JK"]),
    [M.hes.BANCONTACT]: () => w.intl.string(w.t["1ITkfq"]),
    [M.hes.EPS]: () => w.intl.string(w.t["5BSDU6"]),
    [M.hes.IDEAL]: () => w.intl.string(w.t.nSbwqC),
    [M.hes.CASH_APP]: () => w.intl.string(w.t["+rbTmL"]),
    [M.hes.APPLE]: () => w.intl.string(w.t.RFi12i),
    [M.hes.PIX]: () => w.intl.string(w.t.JG3WQU),
    [M.hes.PIX_AUTOMATICO]: () => w.intl.string(w.t.JkKNss),
};
var ls = l(295405),
    lu = l(71532),
    ld = l(818348),
    lc = l(336899);
let lp = eQ();
async function lm(e) {
    return (await lr.Bo.post({ url: M.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function lb(e) {
    return (await lr.Bo.get({ url: M.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function lh(e, t) {
    await lr.Bo.patch({
        url: M.Rsh.ORDER_UPDATE(e),
        body: { billing_facet: { payment_source_id: t } },
        rejectWithError: !0,
    });
}
function lx() {
    let [e, t] = u.useState(!1),
        [l, a] = u.useState(!1),
        [n, i] = u.useState(null),
        [r, o] = u.useState(null),
        [d, c] = u.useState(lp.defaultValue),
        [p, m] = u.useState(null),
        b = (0, es.bG)([ls.A], () => ls.A.paymentSources),
        h = (0, es.bG)([ls.A], () => ls.A.hasFetchedPaymentSources),
        x = (0, es.bG)([ls.A], () => ls.A.defaultPaymentSourceId);
    (u.useEffect(() => {
        h || (0, eE.$o)();
    }, [h]),
        u.useEffect(() => {
            null != x && null == p && m(x);
        }, [x, p]));
    let f = u.useRef(null);
    u.useEffect(() => {
        if (null == r || "" === r) {
            f.current = p;
            return;
        }
        if (p !== f.current) {
            if (null == p || "" === p) {
                f.current = p;
                return;
            }
            (lh(r, p)
                .then(() => {
                    i(`Order updated successfully!
Order ID: ${r}
Payment source changed.`);
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    i(`Failed to update order: ${t}`);
                }),
                (f.current = p));
        }
    }, [r, p]);
    let v = u.useMemo(
        () =>
            Object.values(b).map((e) => {
                var t;
                let l,
                    a = null != (l = lo[(t = e.type)]) ? l() : String(t);
                if (e.type === ld.he.CARD && "last4" in e) {
                    let t = e.last4 ?? "",
                        l = e.brand ?? "Unknown";
                    a += ` - ****${t} (${l})`;
                } else null != e.brand && "" !== e.brand && (a += ` - ${e.brand}`);
                return { id: e.id, value: e.id, label: a };
            }),
        [b],
    );
    async function E() {
        if (null == p || "" === p) return void i("Please select a payment source first.");
        if (null == d || "" === d || d === M.dJq) return void i("Please select a SKU ID.");
        (t(!0), i(null), o(null));
        try {
            let e = await (0, g.Aj)(d, p, "US", !1, {
                gift_style: null,
                recipient_id: void 0,
                custom_message: void 0,
                emoji_id: void 0,
                emoji_name: void 0,
                sound_id: void 0,
                reward_sku_ids: void 0,
            });
            (o(e), i(`Order created successfully! Order ID: ${e}`));
        } catch (t) {
            let e = t instanceof Error ? t.message : String(t);
            i(`Failed to create order: ${e}`);
        } finally {
            t(!1);
        }
    }
    async function S() {
        if (null == r || "" === r) return void i("No order ID available. Please create an order first.");
        a(!0);
        try {
            let e = await lm(r);
            if (null == e.error) {
                (i(`Order signed successfully! Order ID: ${r}`), o(null));
                return;
            }
            let t = e.error.code;
            if (1e3 === t)
                (i(`Order signing in progress!
Order ID: ${r}
This order requires additional authentication (3DS).`),
                    (async () => {
                        try {
                            let t = e.billing_facet;
                            if (null == t) throw Error("Order does not have billing facet information");
                            let l = t.order_signing_deferral_context;
                            if (null == l) throw Error("Order does not have payment redirect context");
                            let a = l.stripe_3ds_context;
                            if (null == a) throw Error("Order does not have 3DS context information");
                            let n = await (0, lu.Cv)();
                            if (null == n) throw Error("Stripe not loaded");
                            let s = a.client_secret;
                            if (null == s || "" === s) throw Error("No client secret found in 3DS context");
                            let { error: u, paymentIntent: d } = await n.confirmCardPayment(s, {
                                payment_method: a.payment_method_id,
                            });
                            if (null != u) throw Error(`3DS authentication failed: ${u.message}`);
                            if (null == d) throw Error("No payment intent returned from 3DS authentication");
                            let c = e.id ?? r ?? "Unknown";
                            (o(null),
                                i(`3DS authentication completed successfully!
Order ID: ${c}`));
                        } catch (a) {
                            let t = a instanceof Error ? a.message : String(a),
                                l = e.id ?? r ?? "Unknown";
                            i(`Failed to complete 3DS!
Order ID: ${l}
Error: ${t}`);
                        }
                    })());
            else
                1001 === t
                    ? (i(`Order signing in progress!
Order ID: ${r}
This order requires redirection to complete the payment.
Polling order status...`),
                      (function (e, t, l, a) {
                          let n = e.billing_facet,
                              i = n?.order_signing_deferral_context?.payment_redirect_context,
                              r = i?.redirect_url;
                          null != r && window.open(r);
                          let o = Date.now(),
                              s = null;
                          function u() {
                              let e = Date.now() - o,
                                  a = Math.min(3e3, 3e4 - e);
                              a > 0 &&
                                  (s = setTimeout(() => {
                                      c().catch((e) => {
                                          let a = e instanceof Error ? e.message : String(e);
                                          l(`Failed to poll order status!
Order ID: ${t}
Error: ${a}`);
                                      });
                                  }, a));
                          }
                          function d() {
                              null != s && clearTimeout(s);
                          }
                          async function c() {
                              let e = Date.now() - o;
                              if (e >= 3e4) {
                                  try {
                                      var n;
                                      ((n = (await lb(t)).status),
                                          l(`Order signing timed out.
Order ID: ${t}
Status: ${n ?? "unknown"}
Please check the order status manually.`),
                                          d());
                                  } catch (a) {
                                      let e = a instanceof Error ? a.message : String(a);
                                      (l(`Order signing timed out.
Order ID: ${t}
Error: ${e}`),
                                          d());
                                  }
                                  return;
                              }
                              try {
                                  let e = (await lb(t)).status;
                                  if (2 === e) {
                                      (l(`Order signed successfully!
Order ID: ${t}
Payment redirect completed.`),
                                          a(null),
                                          d());
                                      return;
                                  }
                                  if (1 === e) {
                                      (l(`Order signed unsuccessfully
Order ID: ${t}`),
                                          d());
                                      return;
                                  }
                                  u();
                              } catch (n) {
                                  let a = n instanceof Error ? n.message : String(n);
                                  e < 3e4
                                      ? u()
                                      : (l(`Order signing timed out.
Order ID: ${t}
Error: ${a}`),
                                        d());
                              }
                          }
                          c().catch((e) => {
                              let a = e instanceof Error ? e.message : String(e);
                              l(`Failed to start polling order status!
Order ID: ${t}
Error: ${a}`);
                          });
                      })(e, r, i, o))
                    : i(`Order signing failed
Order ID: ${r}
Error: ${t}`);
        } catch (t) {
            let e = t instanceof Error ? t.message : String(t);
            i(`Failed to sign order: ${e}`);
        } finally {
            a(!1);
        }
    }
    return (0, s.jsxs)(tC.wn, {
        children: [
            (0, s.jsx)(eg.D, { variant: "heading-xl/semibold", children: "Order SKU Test" }),
            (0, s.jsxs)(tC.Hq, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, s.jsx)(y.E, {
                        variant: "body-md/normal",
                        className: lc.cW,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs.",
                    }),
                    (0, s.jsxs)(ex.n, {
                        label: "Configuration",
                        children: [
                            (0, s.jsx)("div", {
                                style: { marginBottom: "16px" },
                                children: (0, s.jsx)(ep.l, {
                                    selectionMode: "single",
                                    value: d,
                                    onSelectionChange: c,
                                    options: lp.options,
                                    formatOption: (e) => {
                                        let { value: t, label: l } = e;
                                        return { id: t, value: t, label: l };
                                    },
                                    placeholder: "Select a SKU...",
                                    label: "SKU ID",
                                    clearable: !0,
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                style: { marginBottom: "16px" },
                                children: [
                                    (0, s.jsx)(ep.l, {
                                        selectionMode: "single",
                                        value: p,
                                        onSelectionChange: m,
                                        options: v,
                                        placeholder: "Select a payment source...",
                                        disabled: !h,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !h &&
                                        (0, s.jsx)(y.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            className: lc.cW,
                                            children: "Loading payment sources...",
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" },
                        children: [
                            (0, s.jsx)(O.$, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: E,
                                disabled: e || null == p || "" === p || null == d || "" === d || d === M.dJq,
                            }),
                            (0, s.jsx)(O.$, {
                                variant: "secondary",
                                size: "sm",
                                text: l ? "Signing Order..." : "Sign Order",
                                onClick: S,
                                disabled: l || null == r || "" === r,
                            }),
                        ],
                    }),
                    null != n &&
                        (0, s.jsx)("div", {
                            className: lc.cW,
                            children: n
                                .split("\n")
                                .map((e, t) =>
                                    (0, s.jsx)(
                                        y.E,
                                        {
                                            variant: "body-md/normal",
                                            style: {
                                                display: "block",
                                                marginBottom: t < n.split("\n").length - 1 ? "4px" : "0",
                                            },
                                            children: e,
                                        },
                                        t,
                                    ),
                                ),
                        }),
                ],
            }),
        ],
    });
}
var ly = l(150934),
    lf = l(36167);
let lv = [
        { id: "tier_2", value: eG.gD.PREMIUM_MONTH_TIER_2, label: "Nitro (Monthly)" },
        { id: "tier_1", value: eG.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic (Monthly)" },
        { id: "tier_0", value: eG.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic (Monthly)" },
    ],
    lg = [
        { id: "meta_quest", value: _.uH.META_QUEST_WEB_REDIRECT_CHECKOUT, label: "Meta Quest Web Redirect Checkout" },
    ];
function lE() {
    let [e, t] = u.useState(null);
    return {
        error: e,
        handleSuccess: u.useCallback((e, l) => {
            l.searchParams.append("handoff_token", e.body.handoff_token);
            let a = l.href;
            (t(null), window.open(a, "_blank"));
        }, []),
        handleFailure: u.useCallback((e, l) => {
            t(`Failed to generate handoff for ${l}`);
        }, []),
    };
}
function lS(e) {
    let { flowType: t } = e,
        [l, a] = u.useState(eG.gD.PREMIUM_MONTH_TIER_2),
        [n, i] = u.useState(!1),
        { error: r, handleSuccess: o, handleFailure: c } = lE(),
        p = u.useCallback(() => {
            let e = (0, d.A)();
            (0, lf.OD)({ planId: l, isGift: n, loadId: e, flowType: t }, o, c);
        }, [l, n, t, o, c]);
    return (0, s.jsxs)(tC.Hq, {
        label: "Nitro Checkout",
        direction: "vertical",
        children: [
            (0, s.jsxs)(ec.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, s.jsx)(ep.l, {
                        label: "Plan",
                        value: l,
                        options: lv,
                        onSelectionChange: a,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, s.jsx)(ep.l, {
                        label: "Gift",
                        value: n ? "true" : "false",
                        options: [
                            { id: "no", value: "false", label: "No" },
                            { id: "yes", value: "true", label: "Yes" },
                        ],
                        onSelectionChange: (e) => i("true" === e),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, s.jsx)(O.$, { variant: "primary", size: "sm", text: "Open Nitro Checkout", onClick: p }),
            null != r && (0, s.jsx)(y.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: r }),
        ],
    });
}
function lj(e) {
    let { flowType: t } = e,
        { error: l, handleSuccess: a, handleFailure: n } = lE(),
        i = u.useCallback(() => {
            if (null == t) return;
            let e = (0, d.A)(),
                l = M.BVt.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(t, e);
            (0, lf.xq)(l, a, n);
        }, [t, a, n]);
    return (0, s.jsxs)(tC.Hq, {
        label: "Manage Subscription",
        direction: "vertical",
        children: [
            (0, s.jsx)(O.$, {
                variant: "primary",
                size: "sm",
                text: "Open Manage Subscription",
                onClick: i,
                disabled: null == t,
            }),
            null != l && (0, s.jsx)(y.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function lC(e) {
    let { flowType: t } = e,
        [l, a] = u.useState(""),
        { error: n, handleSuccess: i, handleFailure: r } = lE(),
        o = u.useCallback(() => {
            if (0 === l.length || null == t) return;
            let e = (0, d.A)(),
                a = M.BVt.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(l, void 0, e, t);
            (0, lf.xq)(a, i, r);
        }, [l, i, r, t]);
    return (0, s.jsxs)(tC.Hq, {
        label: "Guild Boosts",
        direction: "vertical",
        children: [
            (0, s.jsx)(eb.k, { label: "Guild ID", placeholder: "Guild ID", value: l, onChange: a }),
            (0, s.jsx)(O.$, {
                variant: "primary",
                size: "sm",
                text: "Open Guild Boost Checkout",
                disabled: 0 === l.length || null == t,
                onClick: o,
            }),
            null != n && (0, s.jsx)(y.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var lT = l(643909),
    lA = l(103557),
    lI = l(558179);
let l_ = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    lP = {
        GPAY_FILTERED: { wallets: { googlePay: "always", applePay: "never" } },
        APPLE_PAY_FILTERED: { wallets: { googlePay: "never", applePay: "always" } },
        APPLE_AND_GPAY_DISABLED: { wallets: { googlePay: "never", applePay: "never" } },
    },
    lk = { appearance: { theme: "flat", variables: { spacingUnit: "12px", borderRadius: "36px" } } },
    lR = {
        buttonType: { googlePay: "pay", applePay: "book" },
        buttonTheme: { applePay: "black", googlePay: "white" },
        buttonHeight: 40,
    };
function lM(e) {
    return void 0 !== e ? JSON.stringify(e, null, 2) : "undefined";
}
function lN() {
    let [e, t] = u.useState(lM(lk)),
        [l, a] = u.useState(lk),
        [n, i] = u.useState(lM(lR)),
        [r, o] = u.useState(lR),
        [d, c] = u.useState(null),
        [p, m] = u.useState(
            (0, s.jsx)(tC.a8, {
                errorLabel: l_.CONFIGURABLE,
                elementOptions: lk,
                children: (0, s.jsx)(lT.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: lR,
                }),
            }),
        );
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsxs)(y.E, {
                variant: "body-md/normal",
                className: lc.cW,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, s.jsxs)(y.E, {
                variant: "body-md/normal",
                className: lc.cW,
                children: [
                    (0, s.jsx)("b", { children: "elements.options:" }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tC.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: lc.PC,
                children: (0, s.jsx)(lA.f, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, s.jsxs)(y.E, {
                variant: "body-md/normal",
                className: lc.cW,
                children: [
                    (0, s.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tC.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tC.Tu, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: lc.PC,
                children: (0, s.jsx)(lA.f, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: n,
                    onChange: i,
                    rows: 7,
                }),
            }),
            null != d && (0, s.jsx)(y.E, { variant: "body-md/normal", color: "text-feedback-critical", children: d }),
            (0, s.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lc.Ut,
                children: (0, s.jsx)(O.$, {
                    variant: "primary",
                    size: "sm",
                    text: "Apply Changes",
                    onClick: function () {
                        try {
                            let t = JSON.parse(e),
                                l = JSON.parse(n);
                            (m(null),
                                m(
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsxs)(y.E, {
                                                variant: "body-md/normal",
                                                className: lc.cW,
                                                children: ["Element updated at: ", new Date().toString()],
                                            }),
                                            (0, s.jsx)(tC.a8, {
                                                errorLabel: l_.CONFIGURABLE,
                                                elementOptions: t,
                                                children: (0, s.jsx)(lT.ExpressCheckoutElement, {
                                                    onConfirm: (e) => {
                                                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                    },
                                                    options: l,
                                                }),
                                            }),
                                        ],
                                    }),
                                ),
                                a(t),
                                o(l),
                                c(null));
                        } catch (e) {
                            (console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", e),
                                c("Error parsing JSON. Check console for more information."));
                        }
                    },
                }),
            }),
            (0, s.jsx)(y.E, { variant: "body-md/normal", className: lc.cW, children: "Current Element Options:" }),
            (0, s.jsx)(y.E, {
                variant: "body-md/normal",
                children: (0, s.jsx)(lI.A, { className: lc.wD, children: `\`\` ${lM(l)} \`\`` }),
            }),
            (0, s.jsx)(y.E, {
                variant: "body-md/normal",
                className: lc.cW,
                children: "Current Express Checkout Element Options:",
            }),
            (0, s.jsx)(y.E, {
                variant: "body-md/normal",
                children: (0, s.jsx)(lI.A, { className: lc.wD, children: `\`\` ${lM(r)} \`\`` }),
            }),
            p,
        ],
    });
}
var lD = l(683071),
    lL = l(942340),
    lO = l(211528),
    lV = l(298208),
    lB = l(783327),
    lU = l(626584),
    lw = l(276858),
    lG = l(624479),
    lH = l(408278),
    l$ = l(957565),
    lW = l(247329);
function lF(e) {
    let { label: t, value: l } = e;
    return (0, s.jsxs)("div", {
        className: lW.I,
        children: [
            (0, s.jsxs)(y.E, { variant: "body-sm/medium", children: [t, ":"] }),
            (0, s.jsx)(y.E, { variant: "body-sm/normal", children: l }),
            (0, s.jsx)(lH.K, {
                size: "sm",
                "aria-label": "Copy Link",
                variant: "icon-only",
                icon: lG.CopyIcon,
                onClick: () => (0, l$.C)(l),
            }),
        ],
    });
}
function lY(e) {
    let { children: t, stepConfigs: l, bodyClassName: a } = e;
    return (0, s.jsx)(S.M, {
        stepConfigs: l,
        skuIDs: [],
        activeSubscription: null,
        children: (0, s.jsx)("div", { className: a, children: t }),
    });
}
var lz = l(887072);
let lK = new lU.A("PaymentElement.web.stories"),
    lq = {
        key: m.pn.ADD_PAYMENT_STEPS,
        renderStep: () => (0, s.jsx)("div", {}),
        options: { renderHeader: !1, hideDefaultModalBody: !0 },
    };
function lJ() {
    let { elementsAppearanceOptions: e } = (0, lL.E)();
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(eg.D, {
                variant: "heading-lg/semibold",
                className: q.tm,
                children: "Defaults for Current Theme",
            }),
            (0, s.jsx)("div", {
                children: Object.entries(e).map((e) => {
                    let [t, l] = e;
                    return (0, s.jsx)(lF, { label: t, value: l }, t);
                }),
            }),
        ],
    });
}
function lX(e) {
    let [t, l] = u.useState(0);
    return (0, s.jsx)(S.M, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, u.createElement)(lZ, { ...e, key: t, forceRemount: () => l(t + 1) }),
    });
}
function lZ(e) {
    let {
            linkEnabled: t,
            theme: l,
            colorText: a,
            colorBackground: n,
            inputBackgroundColor: i,
            tabBackgroundColor: r,
            tabSelectedBackgroundColor: o,
            storyType: d,
            forceRemount: c,
        } = e,
        p = (0, lB.S)(),
        { setLinkWalletEnabled: b, linkWalletEnabled: h } = (0, lV.t4)((e) => ({
            setLinkWalletEnabled: e.setLinkWalletEnabled,
            linkWalletEnabled: e.linkWalletEnabled,
        }));
    u.useEffect(() => {
        h !== t && (b(t), c());
    }, [t, h, b, c]);
    let { stripePaymentElementProps: x, stripeAddressElementProps: y } = (0, lw.wD)({
            step: m.pn.PAYMENT_ELEMENT,
            handleStepChange: M.tEg,
            onBillingAddressChange: M.tEg,
            logger: lK,
            shouldLogOnChangeEvents: !0,
            continueSessionToInitialStep: void 0,
        }),
        {
            elementsOptions: f,
            isLoading: v,
            setupError: g,
            customPaymentMethodIdsToSourceTypes: E,
        } = (0, lL.p)({
            onSetupError: (e) => {
                lK.info("Stripe Payment Element options setup error: ", e);
            },
            elementsAppearanceOptions: {
                theme: l,
                colorText: a,
                colorBackground: n,
                inputBackgroundColor: i,
                tabBackgroundColor: r,
                tabSelectedBackgroundColor: o,
            },
        });
    return v || null != g || null == p
        ? (0, s.jsx)(lw.eR, {})
        : (0, s.jsxs)("div", {
              children: [
                  (0, s.jsx)("div", {
                      style: { marginBottom: 16 },
                      children: (0, s.jsx)(lD.w, {
                          type: "info",
                          message:
                              "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access.",
                          role: "none",
                      }),
                  }),
                  (0, s.jsxs)("div", {
                      className: lz.ny,
                      children: [
                          (0, s.jsx)(lJ, {}),
                          (0, s.jsx)(lY, {
                              stepConfigs: [lq],
                              children: (0, s.jsx)("div", {
                                  className: L()(lz.o6, "joined-payment-address-elements" === d ? lz.fF : lz.u1),
                                  children: (0, s.jsxs)(lT.Elements, {
                                      stripe: p,
                                      options: f,
                                      children: [
                                          "stripe-address-element" === d
                                              ? (0, s.jsx)("div", {
                                                    className: q.R,
                                                    children: (0, s.jsx)(lO.Wf, {
                                                        ...x,
                                                        customPaymentMethodIdsToSourceTypes: E,
                                                        step: m.pn.PAYMENT_ELEMENT,
                                                    }),
                                                })
                                              : (0, s.jsx)(lO.Wf, {
                                                    ...x,
                                                    customPaymentMethodIdsToSourceTypes: E,
                                                    step: m.pn.PAYMENT_ELEMENT,
                                                }),
                                          ("joined-payment-address-elements" === d || "stripe-address-element" === d) &&
                                              (0, s.jsx)(lO.KS, {
                                                  ...y,
                                                  billingAddressInfo: {
                                                      email: "",
                                                      name: "",
                                                      country: "",
                                                      line1: "",
                                                      line2: "",
                                                      city: "",
                                                      postalCode: "",
                                                      state: "",
                                                  },
                                              }),
                                      ],
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
let lQ = {
        linkEnabled: { label: "Stripe Link enabled", type: "boolean", defaultValue: !0 },
        theme: {
            label: "Theme",
            type: "select",
            options: ["flat", "stripe", "night"].map((e) => ({ label: e.toLocaleUpperCase(), value: e })),
            defaultValue: "flat",
        },
        colorText: { label: "Color Text", type: "text", defaultValue: "#2f3035" },
        colorBackground: { label: "Color Background", type: "text", defaultValue: "#ffffff" },
        inputBackgroundColor: { label: "Input Background Color", type: "text", defaultValue: "#00000014" },
        tabBackgroundColor: { label: "Tab Background Color", type: "text", defaultValue: "#00000014" },
        tabSelectedBackgroundColor: { label: "Tab Selected Background Color", type: "text", defaultValue: "#5865f2" },
    },
    l0 = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: function (e) {
            return (0, s.jsx)(lX, { ...e, storyType: "joined-payment-address-elements" });
        },
        controls: { ...lQ },
    },
    l1 = {
        name: "Stripe Payment Element",
        id: "stripe-payment-element",
        component: function (e) {
            return (0, s.jsx)(lX, { ...e, storyType: "stripe-payment-element" });
        },
        controls: { ...lQ },
    },
    l2 = {
        name: "Stripe Address Element",
        id: "stripe-address-element",
        component: function (e) {
            return (0, s.jsx)(lX, { ...e, storyType: "stripe-address-element" });
        },
        controls: { ...lQ },
    };
var l3 = l(786826);
let l8 = {
    title: "RichTextArea",
    stories: [
        {
            name: "RichTextArea",
            id: "rich-text-area",
            component: function (e) {
                let {
                        label: t,
                        placeholder: l,
                        minLength: a,
                        maxLength: n,
                        required: i,
                        disabled: r,
                        error: o,
                        description: d,
                        helperText: c,
                    } = e,
                    [p, m] = u.useState("");
                return (0, s.jsx)("div", {
                    style: { maxWidth: 480, padding: 24 },
                    children: (0, s.jsx)(l3.f, {
                        label: t,
                        placeholder: l,
                        minLength: a,
                        maxLength: n,
                        required: i,
                        disabled: r,
                        error: o,
                        description: d,
                        helperText: c,
                        value: p,
                        onChange: m,
                    }),
                });
            },
            controls: {
                label: { label: "Label", type: "text", defaultValue: "About Me" },
                placeholder: { label: "Placeholder", type: "text", defaultValue: "Tell us about yourself..." },
                minLength: { label: "Min Length", type: "number", defaultValue: void 0 },
                maxLength: { label: "Max Length", type: "number", defaultValue: 200 },
                required: { label: "Required", type: "boolean", defaultValue: !1 },
                disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                error: { label: "Error Message", type: "text", defaultValue: void 0 },
                description: { label: "Description", type: "text", defaultValue: void 0 },
                helperText: { label: "Helper Text", type: "text", defaultValue: void 0 },
            },
        },
    ],
};
l(321073);
var l6 = l(96337),
    l4 = l(997101),
    l9 = l(597770),
    l7 = l(278416),
    l5 = l(169797),
    ae = l(25149),
    at = l(812745);
let al = {
        name: "Primitive: Nitro Plan Select",
        id: "unified-checkout-nitro-plan-select",
        component: function (e) {
            let {
                    variant: t,
                    leftTitleDescriber: l,
                    leftPrimaryText: a,
                    leftSubtext: n,
                    leftShowSubtext: i,
                    leftSubtextStrikethrough: r,
                    rightTitleDescriber: o,
                    rightPrimaryText: d,
                    rightSubtext: c,
                    rightShowSubtext: p,
                    rightSubtextStrikethrough: m,
                } = e,
                [b, h] = u.useState(0);
            return (0, s.jsxs)("div", {
                className: q.Cd,
                children: [
                    (0, s.jsx)(ae.q7, {
                        selection: b,
                        onChange: h,
                        planOptions: [
                            {
                                id: 0,
                                title: (0, s.jsx)(ae.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: l,
                                primaryText: a,
                                subtext: i ? (0, s.jsx)(ae.Lo, { strikethrough: r, price: n }) : void 0,
                            },
                            {
                                id: 1,
                                title: (0, s.jsx)(ae.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: o,
                                primaryText: d,
                                subtext: p ? (0, s.jsx)(ae.Lo, { strikethrough: m, price: c }) : void 0,
                            },
                        ],
                    }),
                    (0, s.jsxs)(y.E, { variant: "body-sm/normal", children: ["Selected plan index: ", b] }),
                ],
            });
        },
        controls: {
            variant: {
                label: "Nitro Variant",
                type: "select",
                defaultValue: eG.PremiumTypes.TIER_2,
                options: [
                    { label: "Nitro", value: eG.PremiumTypes.TIER_2 },
                    { label: "Nitro Basic", value: eG.PremiumTypes.TIER_0 },
                ],
            },
            leftTitleDescriber: { label: "Left Card - Title Describer", type: "text", defaultValue: "yearly" },
            leftPrimaryText: { label: "Left Card - Primary Text", type: "text", defaultValue: "$99.99" },
            leftSubtext: { label: "Left Card - Subtext", type: "text", defaultValue: "$119.99" },
            leftShowSubtext: { label: "Left Card - Show Subtext", type: "boolean", defaultValue: !0 },
            leftSubtextStrikethrough: { label: "Left Card - Subtext Strikethrough", type: "boolean", defaultValue: !0 },
            rightTitleDescriber: { label: "Right Card - Title Describer", type: "text", defaultValue: "monthly" },
            rightPrimaryText: { label: "Right Card - Primary Text", type: "text", defaultValue: "$9.99" },
            rightSubtext: { label: "Right Card - Subtext", type: "text", defaultValue: "$11.99" },
            rightShowSubtext: { label: "Right Card - Show Subtext", type: "boolean", defaultValue: !1 },
            rightSubtextStrikethrough: {
                label: "Right Card - Subtext Strikethrough",
                type: "boolean",
                defaultValue: !1,
            },
        },
    },
    aa = {
        name: "Primitive: Subscription Details Accordion",
        id: "unified-checkout-subscription-details",
        component: function (e) {
            let {
                    label: t,
                    totalLineItemLabel: l,
                    totalLineItemLabelSubText: a,
                    totalLineItemValueSubText: n,
                    showTotalWhenCollapsed: i,
                    defaultExpanded: o,
                    intervalType: u,
                    intervalCount: d,
                    currency: c,
                    hasLineItems: p,
                    item1Label: m,
                    item1Amount: b,
                    item1Tooltip: h,
                    item1LabelSubText: x,
                    item1SubText: y,
                    item1SubTextHasStrikethrough: f,
                    item2Label: v,
                    item2Amount: g,
                    item2FormatWithoutRate: E,
                    hasDiscount: S,
                    discountLabel: j,
                    discountAmount: C,
                } = e,
                T = p
                    ? [
                          {
                              id: 1,
                              label: m,
                              amount: b,
                              tooltip: "" !== h ? h : void 0,
                              labelSubText: "" !== x ? x : void 0,
                              subText: "" !== y ? y : void 0,
                              subTextHasStrikethrough: f,
                          },
                          ...("" !== v
                              ? [
                                    {
                                        id: 2,
                                        label: v,
                                        amount: g,
                                        icon: (0, s.jsx)(r.t, { size: "xs" }),
                                        formatWithoutRate: E,
                                    },
                                ]
                              : []),
                          ...(S ? [{ id: 3, label: j, amount: C }] : []),
                      ]
                    : [];
            return (0, s.jsx)("div", {
                className: q.SG,
                children: (0, s.jsx)(ae._D, {
                    label: t,
                    totalLineItemLabel: "" !== l ? l : void 0,
                    totalLineItemLabelSubText: "" !== a ? a : void 0,
                    totalLineItemValueSubText: "" !== n ? n : void 0,
                    showTotalWhenCollapsed: i,
                    defaultExpanded: o,
                    lineItems: T,
                    intervalType: u,
                    intervalCount: d,
                    currency: c,
                }),
            });
        },
        controls: {
            label: { label: "Label", type: "text", defaultValue: "Subscription Details" },
            totalLineItemLabel: { label: "Total Line Item Label", type: "text", defaultValue: "" },
            totalLineItemLabelSubText: { label: "Total Line Item Label Subtext", type: "text", defaultValue: "" },
            totalLineItemValueSubText: { label: "Total Line Item Value Subtext", type: "text", defaultValue: "" },
            showTotalWhenCollapsed: { label: "Show Total When Collapsed", type: "boolean", defaultValue: !1 },
            defaultExpanded: { label: "Default Expanded", type: "boolean", defaultValue: !1 },
            intervalType: {
                label: "Interval Type",
                type: "select",
                defaultValue: eG.WT.MONTH,
                options: [
                    { label: "Month", value: eG.WT.MONTH },
                    { label: "Year", value: eG.WT.YEAR },
                    { label: "Day", value: eG.WT.DAY },
                ],
            },
            intervalCount: { label: "Interval Count", type: "number", defaultValue: 1 },
            currency: {
                label: "Currency",
                type: "select",
                defaultValue: M.Yri.USD,
                options: [
                    { label: "USD", value: M.Yri.USD },
                    { label: "EUR", value: M.Yri.EUR },
                    { label: "GBP", value: M.Yri.GBP },
                    { label: "CAD", value: M.Yri.CAD },
                ],
            },
            hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
            item1Label: { label: "Item 1 - Label", type: "text", defaultValue: "Nitro Basic" },
            item1Amount: { label: "Item 1 - Amount (minor units)", type: "number", defaultValue: 299 },
            item1Tooltip: {
                label: "Item 1 - Tooltip",
                type: "text",
                defaultValue: "You are purchasing a plan change. Your server boosts are being updated accordingly.",
            },
            item1LabelSubText: { label: "Item 1 - Label Subtext", type: "text", defaultValue: "" },
            item1SubText: { label: "Item 1 - Subtext", type: "text", defaultValue: "" },
            item1SubTextHasStrikethrough: {
                label: "Item 1 - Subtext Has Strikethrough",
                type: "boolean",
                defaultValue: !1,
            },
            item2Label: { label: "Item 2 - Label", type: "text", defaultValue: "Server Boost" },
            item2Amount: { label: "Item 2 - Amount (minor units)", type: "number", defaultValue: 499 },
            item2FormatWithoutRate: { label: "Item 2 - Format Without Rate", type: "boolean", defaultValue: !1 },
            hasDiscount: { label: "Has Discount Item", type: "boolean", defaultValue: !1 },
            discountLabel: { label: "Discount - Label", type: "text", defaultValue: "Discount" },
            discountAmount: { label: "Discount - Amount (minor units)", type: "number", defaultValue: -100 },
        },
    },
    an = { "nitro-wheel": r.t, gift: l9.GiftIcon, orbs: i.C },
    ai = l6.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })),
    ar = {
        name: "Modal: Unified Checkout Stateless Modal",
        id: "unified-checkout-stateless-modal",
        component: function (e) {
            let { primaryButtonText: t, primaryButtonIcon: l, headerBadgeHasIcon: a, ...n } = e,
                i = a ? l7.TagIcon : void 0;
            return (0, s.jsxs)(ec.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, s.jsx)(y.E, {
                        variant: "body-md/normal",
                        children: "Click the button below to open the Unified Checkout modal",
                    }),
                    (0, s.jsx)(O.$, {
                        variant: "primary",
                        text: "Open Unified Checkout Modal",
                        onClick: () =>
                            (0, ev.openModal)(
                                (e) =>
                                    (0, s.jsx)(l5.oH, {
                                        ...e,
                                        ...n,
                                        title: n.title,
                                        headerBadgeIcon: i,
                                        primaryButtonProps: {
                                            onClick: e.onClose,
                                            text: t,
                                            icon: "none" !== l ? an[l] : void 0,
                                        },
                                        onBackClick: e.onClose,
                                        children: (0, s.jsx)(ec.B, {
                                            gap: 16,
                                            children: (0, s.jsx)("div", {
                                                style: { border: "1px solid blue", height: 500 },
                                                children: "The Unified Checkout step content will go here.",
                                            }),
                                        }),
                                    }),
                                { dismissable: n.dismissable },
                            ),
                    }),
                ],
            });
        },
        controls: {
            title: { label: "Title", type: "text", defaultValue: "Checkout" },
            primaryButtonText: { label: "Primary Button Text", type: "text", defaultValue: "Get Nitro Yearly" },
            primaryButtonIcon: {
                label: "Primary Button Icon",
                type: "select",
                defaultValue: "nitro-wheel",
                options: [
                    { label: "Nitro Wheel", value: "nitro-wheel" },
                    { label: "Gift", value: "gift" },
                    { label: "Orbs", value: "orbs" },
                    { label: "None", value: "none" },
                ],
            },
            countryCode: { label: "Country Code", type: "select", defaultValue: l4.d.US, options: ai },
            headerBadgeText: { label: "Header Pill Text", type: "text", defaultValue: "PROMO" },
            headerBadgeHasIcon: { label: "Header Badge Has Icon", type: "boolean", defaultValue: !1 },
            gradientColor: {
                label: "Gradient Color",
                type: "select",
                defaultValue: "nitro-pink",
                options: [
                    { label: "Nitro Pink", value: "nitro-pink" },
                    { label: "Nitro Green", value: "nitro-green" },
                    { label: "Purple", value: "purple" },
                    { label: "Blue", value: "blue" },
                ],
            },
            dismissable: { label: "Dismissable", type: "boolean", defaultValue: !0 },
        },
    },
    ao = {
        purchaseButtonText: "Subscribe",
        totalDue: 999,
        renewalPrice: 1099,
        currency: M.Yri.USD,
        interval: eG.WT.MONTH,
        intervalCount: 1,
        startDate: new Date(),
    },
    as = {
        [ae.I0.Subscription]: { type: ae.I0.Subscription, ...ao },
        [ae.I0.SubscriptionApplication]: { type: ae.I0.SubscriptionApplication, ...ao },
        [ae.I0.GuildProductOneTimePurchase]: { type: ae.I0.GuildProductOneTimePurchase, ...ao },
        [ae.I0.PremiumAppsOneTimePurchase]: { type: ae.I0.PremiumAppsOneTimePurchase, ...ao },
        [ae.I0.SubscriptionTrial]: { type: ae.I0.SubscriptionTrial, ...ao },
        [ae.I0.OrbsRedemption]: { type: ae.I0.OrbsRedemption, purchaseButtonText: "Redeem" },
        [ae.I0.Shop]: { type: ae.I0.Shop, purchaseButtonText: "Purchase" },
        [ae.I0.GiftNitro]: { type: ae.I0.GiftNitro, purchaseButtonText: "Buy Gift" },
        [ae.I0.GiftShop]: { type: ae.I0.GiftShop, purchaseButtonText: "Buy Gift" },
        [ae.I0.GiftGameShop]: {
            type: ae.I0.GiftGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
            shouldAppendDisclaimer: !1,
        },
        [ae.I0.OrbsGameShop]: {
            type: ae.I0.OrbsGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
            shouldAppendDisclaimer: !1,
        },
    },
    au = {
        title: "Unified Checkout",
        stories: [
            ar,
            {
                name: "Primitive: Order Summary Accordion",
                id: "unified-checkout-order-summary",
                component: function (e) {
                    let { label: t, hasDiscount: l, hasLineItems: a } = e,
                        n = a
                            ? [
                                  { id: 1, label: "Nitro Basic (Monthly)", amount: 299 },
                                  { id: 2, label: "Server Boost", amount: 499 },
                              ]
                            : [];
                    return (
                        l && a && n.push({ id: 3, label: "Discount Applied", amount: -100 }),
                        (0, s.jsx)("div", {
                            className: q.SG,
                            children: (0, s.jsx)(ae.Vm, { label: t, lineItems: n, currency: M.Yri.USD }),
                        })
                    );
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Order Summary" },
                    hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !0 },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            al,
            aa,
            {
                name: "Primitive: Purchase Item",
                id: "unified-checkout-purchase-item",
                component: function (e) {
                    let {
                        header: t,
                        showHeader: l,
                        label: a,
                        description: n,
                        price: i,
                        hasPriceIcon: o,
                        hasStrikethroughPrice: u,
                        strikethroughPrice: d,
                        targetType: c,
                    } = e;
                    function p(e, p) {
                        let m = tn.default.getCurrentUser(),
                            b = eU.A.getGuildsArray()[0];
                        return (0, s.jsx)(ae.f7, {
                            header: l ? t : void 0,
                            headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
                            label: `${a} ${p}`,
                            description: n,
                            price: i,
                            PriceIcon: o ? r.t : void 0,
                            priceSubText: u ? d : void 0,
                            priceSubTextHasStrikethrough: u,
                            graphic: (0, s.jsx)(e, {}),
                            target:
                                "gift" === c
                                    ? { type: "gift", user: m }
                                    : "guildSubscription" === c
                                      ? { type: "guildSubscription", guild: b }
                                      : void 0,
                        });
                    }
                    return (0, s.jsxs)("div", {
                        className: q.SG,
                        children: [
                            p(ae.JW, "Nitro"),
                            p(ae.DH, "Nitro Basic"),
                            p(ae.a6, "Boost"),
                            p(ae.jw, "App"),
                            p(ae.oo, "Nitro Credit"),
                        ],
                    });
                },
                controls: {
                    header: { label: "Header", type: "text", defaultValue: "Marvel Rivals" },
                    showHeader: { label: "Show Header", type: "boolean", defaultValue: !1 },
                    label: { label: "Label", type: "text", defaultValue: "1 Month of" },
                    description: { label: "Description", type: "text", defaultValue: "This is describing the item" },
                    price: { label: "Price", type: "text", defaultValue: "$9.99" },
                    hasPriceIcon: { label: "Has Price Icon", type: "boolean", defaultValue: !1 },
                    hasStrikethroughPrice: { label: "Has Strikethrough Price", type: "boolean", defaultValue: !1 },
                    strikethroughPrice: { label: "Strikethrough Price", type: "text", defaultValue: "$12.99" },
                    targetType: {
                        label: "Target Type",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Gift", value: "gift" },
                            { label: "Guild Subscription", value: "guildSubscription" },
                        ],
                    },
                },
            },
            {
                name: "Primitive: Payment Select",
                id: "unified-checkout-payment-select",
                component: function (e) {
                    let { disabled: t, error: l, errorMessage: a } = e,
                        n = [
                            { id: "visa-1234", label: "Visa ending in 1234", icon: at.Be.VISA },
                            { id: "mastercard-5678", label: "Mastercard ending in 5678", icon: at.Be.MASTERCARD },
                            { id: "paypal", label: "user@example.com", icon: at.Be.PAYPAL },
                            { id: "amex-9012", label: "Amex ending in 9012", icon: at.Be.AMEX },
                        ],
                        [i, r] = u.useState(n[0].id);
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(ae.v7, {
                                value: i,
                                options: n,
                                onChange: r,
                                onNew: tS.noop,
                                disabled: t,
                                error: l ? a : void 0,
                            }),
                            (0, s.jsxs)(y.E, {
                                variant: "body-sm/normal",
                                children: ["Selected payment: ", i ?? "None"],
                            }),
                        ],
                    });
                },
                controls: {
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    error: { label: "Show Error", type: "boolean", defaultValue: !1 },
                    errorMessage: {
                        label: "Error Message",
                        type: "text",
                        defaultValue: "Please select a valid payment method",
                    },
                },
            },
            {
                name: "Primitive: Legal Copy",
                id: "unified-checkout-legal-copy",
                component: function (e) {
                    let { type: t, immediateDelivery: l, paysafecard: a } = e,
                        [n, i] = u.useState(!1);
                    return (0, s.jsx)(ae._P, {
                        variant: as[t],
                        immediateDelivery: l ? { value: n, onChange: i } : void 0,
                        paymentSourceType: a ? M.hes.PAYSAFE_CARD : M.hes.CARD,
                    });
                },
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: ae.I0.Subscription,
                        options: [
                            { label: "Subscription", value: ae.I0.Subscription },
                            { label: "Subscription Trial", value: ae.I0.SubscriptionTrial },
                            { label: "Orbs Redemption", value: ae.I0.OrbsRedemption },
                            { label: "Shop", value: ae.I0.Shop },
                            { label: "Nitro Gift", value: ae.I0.GiftNitro },
                            { label: "Shop Gift", value: ae.I0.GiftShop },
                            { label: "Game Shop Gift", value: ae.I0.GiftGameShop },
                            { label: "Orbs Game Shop Gift", value: ae.I0.OrbsGameShop },
                        ],
                    },
                    immediateDelivery: { label: "Immediate Delivery", type: "boolean", defaultValue: !1 },
                    paysafecard: { label: "Paysafecard", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "Primitive: Gift Redemption Link",
                id: "unified-checkout-gift-redemption-link",
                component: function () {
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(y.E, { variant: "body-sm/normal", children: "Stateless Component:" }),
                            (0, s.jsx)(ae.y, { onClick: M.tEg }),
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)(y.E, { variant: "body-sm/normal", children: "Link with Modal:" }),
                            (0, s.jsx)(ae.Z4, { onComplete: M.tEg }),
                        ],
                    });
                },
            },
            {
                name: "Primitive: Plan Radio Group",
                id: "unified-checkout-plan-radio-group",
                component: function () {
                    let [e, t] = u.useState("yearly");
                    return (0, s.jsx)("div", {
                        children: (0, s.jsx)(ae.me, {
                            headingComponent: (0, s.jsx)(ae.ec, {
                                size: "sm",
                                color: "text-strong",
                                premiumType: eG.PremiumTypes.TIER_2,
                            }),
                            planRadioOptions: [
                                { primaryText: "Yearly", subText: "$99.99", badgeText: "SAVE 16%", value: "yearly" },
                                { primaryText: "Monthly", subText: "$99.99", value: "monthly" },
                            ],
                            value: e,
                            onChange: (e) => t(e.value),
                        }),
                    });
                },
            },
            {
                name: "Primitive: Store Country Row",
                id: "checkout-store-country-row",
                component: function (e) {
                    let { storeCountry: t } = e;
                    return (0, s.jsx)(ae.s7, { storeCountry: t });
                },
                controls: {
                    storeCountry: { label: "Store Country", type: "select", defaultValue: l4.d.US, options: ai },
                },
            },
            {
                name: "Primitive: Store Relocation Notice",
                id: "checkout-store-relocation-notice",
                component: function (e) {
                    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: a } = e;
                    return (0, s.jsx)(ae.ch, {
                        relocationCountry: t,
                        relocationCurrencyCode: l,
                        willForfeitGiftCardBalance: a,
                        role: "status",
                    });
                },
                controls: {
                    relocationCountry: {
                        label: "Relocation Country",
                        type: "select",
                        defaultValue: l4.d.US,
                        options: ai,
                    },
                    relocationCurrencyCode: { label: "Relocation Currency Code", type: "text", defaultValue: "USD" },
                    willForfeitGiftCardBalance: {
                        label: "Will Forfeit Gift Card Balance",
                        type: "boolean",
                        defaultValue: !0,
                    },
                },
            },
        ],
    };
var ad = l(903209),
    ac = l(273147),
    ap = l(734057),
    am = l(890497),
    ab = l(711014),
    ah = l(427262),
    ax = l(198498);
function ay(e) {
    let { label: t, options: l, value: a, onChange: n } = e;
    return (0, s.jsx)(am.Z, {
        label: t,
        selectionMode: "single",
        options: l,
        value: a,
        onSelectionChange: n,
        placeholder: 0 === l.length ? "Waiting for client to connect\u2026" : void 0,
    });
}
function af(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: ax.t, children: t });
}
let av = "default";
var ag =
    (((a = {}).PAYMENTS = "payments"),
    (a.VIRTUAL_CURRENCY = "virtual-currency"),
    (a.NITRO = "nitro"),
    (a.IDENTITY = "identity"),
    a);
let aE = ["Revenue Storybook", "Revenue Playground"],
    aS = {
        id: "payments",
        name: "Payments",
        groups: [
            ez,
            au,
            {
                title: "Gift Card",
                stories: [
                    {
                        name: "Redemption Modal",
                        id: "gift-card-redemption-modal",
                        component: function () {
                            return (0, s.jsxs)(ec.B, {
                                gap: 8,
                                children: [
                                    (0, s.jsx)(y.E, {
                                        variant: "body-sm/normal",
                                        children:
                                            "Click the button below to open the gift card redemption modal (enter code form). On success it will open the success modal.",
                                    }),
                                    (0, s.jsx)(O.$, {
                                        variant: "primary",
                                        text: "Open Redemption Modal",
                                        onClick: () =>
                                            (0, tv.HF)({
                                                withRedemptionSuccessModal: !0,
                                                onComplete: () => {},
                                                onClose: () => {},
                                            }),
                                    }),
                                ],
                            });
                        },
                    },
                    {
                        name: "Success Modal",
                        id: "gift-card-redemption-success-modal",
                        component: function () {
                            return (0, s.jsxs)(ec.B, {
                                gap: 8,
                                children: [
                                    (0, s.jsx)(y.E, {
                                        variant: "body-sm/normal",
                                        children:
                                            "Click the button below to open the gift card redemption success modal (post-redemption).",
                                    }),
                                    (0, s.jsx)(O.$, {
                                        variant: "primary",
                                        text: "Open Success Modal",
                                        onClick: () =>
                                            (0, tv.cV)({
                                                amountRedeemed: 5e3,
                                                currencyCode: M.Yri.USD,
                                                onClose: () => {},
                                            }),
                                    }),
                                ],
                            });
                        },
                    },
                ],
            },
            { title: "Payment Elements", stories: [l1, l2, l0] },
            {
                title: "Add Payment (Legacy Checkout)",
                stories: [
                    {
                        name: "Add Payment Step",
                        id: "add-payment-step",
                        component: function () {
                            let { analyticsLocations: e } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
                                t = u.useMemo(() => (0, d.A)(), []),
                                l = u.useCallback(() => {}, []);
                            return (0, s.jsx)(
                                R,
                                {
                                    stepConfigs: N,
                                    analyticsLocations: e,
                                    applicationId: M.FYj,
                                    initialPlanId: void 0,
                                    skuId: null,
                                    isGift: !1,
                                    loadId: t,
                                    purchaseType: M.VVm.ONE_TIME,
                                    disablePurchases: !0,
                                    excludeSubscriptionPlansBySKU: !0,
                                    renderHeader: () => null,
                                    onClose: l,
                                    onComplete: () => {},
                                },
                                `${t}`,
                            );
                        },
                        controls: {},
                    },
                ],
            },
            { title: "Checkout Review Step", stories: [e4, e9] },
            {
                title: "Miscellaneous",
                stories: [
                    li,
                    {
                        name: "Redirect To Standalone",
                        id: "standalone-redirect",
                        component: function () {
                            let [e, t] = u.useState(!1),
                                [l, a] = u.useState(_.uH.META_QUEST_WEB_REDIRECT_CHECKOUT),
                                n = u.useCallback((e) => {
                                    t(e);
                                }, []),
                                i = e ? l : void 0;
                            return (0, s.jsxs)(tC.wn, {
                                children: [
                                    (0, s.jsx)(eg.D, {
                                        variant: "heading-xl/semibold",
                                        children: "Redirect To Standalone",
                                    }),
                                    (0, s.jsx)(tC.nB, {}),
                                    (0, s.jsxs)(ec.B, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, s.jsx)(ly.S, { label: "Enable Flow Type", checked: e, onChange: n }),
                                            (0, s.jsx)(ep.l, {
                                                label: "Flow Type",
                                                value: l,
                                                options: lg,
                                                onSelectionChange: a,
                                                selectionMode: "single",
                                                disabled: !e,
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(y.E, {
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        children: "Some link outs require enabling the flow type to work.",
                                    }),
                                    (0, s.jsx)(lS, { flowType: i }),
                                    (0, s.jsx)(lj, { flowType: i }),
                                    (0, s.jsx)(lC, { flowType: i }),
                                ],
                            });
                        },
                    },
                    {
                        name: "Order SKU",
                        component: function () {
                            return (0, s.jsx)(S.M, {
                                stepConfigs: [],
                                skuIDs: [],
                                activeSubscription: null,
                                children: (0, s.jsx)(lx, {}),
                            });
                        },
                        id: "order-sku-test",
                        controls: {},
                    },
                    {
                        name: "Stripe Components",
                        id: "stripe-components",
                        component: function () {
                            return (0, s.jsx)(S.M, {
                                stepConfigs: [],
                                skuIDs: [],
                                activeSubscription: null,
                                children: (0, s.jsxs)(tC.wn, {
                                    children: [
                                        (0, s.jsx)(eg.D, {
                                            variant: "heading-xl/semibold",
                                            children: "Stripe Express Checkout Buttons",
                                        }),
                                        (0, s.jsx)(tC.Hq, {
                                            label: l_.DEFAULT,
                                            children: (0, s.jsx)("div", {
                                                children: (0, s.jsx)(tC.a8, {
                                                    errorLabel: l_.DEFAULT,
                                                    children: (0, s.jsx)(lT.ExpressCheckoutElement, {
                                                        onConfirm: (e) => {
                                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                        },
                                                        options: {},
                                                    }),
                                                }),
                                            }),
                                        }),
                                        ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map((e) => {
                                            let t = l_[e];
                                            return (0, s.jsx)(
                                                tC.Hq,
                                                {
                                                    label: t,
                                                    children: (0, s.jsxs)("div", {
                                                        children: [
                                                            (0, s.jsx)(y.E, {
                                                                variant: "body-md/normal",
                                                                className: lc.cW,
                                                                children: "expressCheckoutElement.options:",
                                                            }),
                                                            (0, s.jsx)(y.E, {
                                                                variant: "body-md/normal",
                                                                children: (0, s.jsx)(lI.A, {
                                                                    className: lc.wD,
                                                                    children: `\`\`${lM(lP[e])} \`\``,
                                                                }),
                                                            }),
                                                            (0, s.jsx)(tC.a8, {
                                                                errorLabel: t,
                                                                children: (0, s.jsx)(lT.ExpressCheckoutElement, {
                                                                    onConfirm: (e) => {
                                                                        console.log(
                                                                            "ExpressCheckoutElement onConfirm event: ",
                                                                            e,
                                                                        );
                                                                    },
                                                                    options: lP[e],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                e,
                                            );
                                        }),
                                        (0, s.jsx)(tC.Hq, { label: l_.CONFIGURABLE, children: (0, s.jsx)(lN, {}) }),
                                    ],
                                }),
                            });
                        },
                    },
                ],
            },
        ],
        tags: aE,
        IconComponent: n.d,
    },
    aj = {
        id: "virtual-currency",
        name: "Virtual Currency",
        groups: [
            { title: "Balance Widget Pill", stories: [Q, ee] },
            {
                title: "Balance Widget",
                stories: [
                    {
                        name: "Balance Widget Card",
                        id: "balance-widget-card",
                        component: function (e) {
                            let { ctaText: t, linkText: l, linkPreText: a } = e;
                            return (0, s.jsx)(Y, {
                                ctaText: (0, K.uJ)(t) ? w.intl.string(w.t.H57f41) : t,
                                linkText: (0, K.uJ)(l) ? w.intl.string(w.t["7f4H7D"]) : l,
                                linkPreText: (0, K.uJ)(a) ? void 0 : a,
                                ctaOnClick: M.tEg,
                            });
                        },
                        controls: {
                            ctaText: { label: "CTA Text", type: "text", defaultValue: "" },
                            linkText: { label: "Link Text", type: "text", defaultValue: "" },
                            linkPreText: { label: "Link Pre Text", type: "text", defaultValue: "" },
                        },
                    },
                    J,
                ],
            },
            la,
            { title: "Orb Checkout", stories: [t5] },
            {
                title: "Orb Onboarding",
                stories: [
                    {
                        name: "Orb Onboarding Reset",
                        id: "orb-onboarding-reset",
                        component: function () {
                            let { resetOnboardingExperience: e } = (0, le.A)();
                            return (0, s.jsxs)("div", {
                                className: q.YG,
                                children: [
                                    (0, s.jsx)(y.E, {
                                        variant: "body-md/normal",
                                        color: "text-feedback-info",
                                        style: { marginBottom: "8px" },
                                        children: "Use this to reset your user's DCF Orb Onboarding state.",
                                    }),
                                    (0, s.jsx)(O.$, { onClick: () => e(), text: "Reset Announcement Modal State" }),
                                ],
                            });
                        },
                        controls: {},
                    },
                ],
            },
        ],
        tags: aE,
        IconComponent: i.C,
    },
    aC = {
        id: "nitro",
        name: "Nitro",
        groups: [
            tG,
            { title: "Marketing Home", stories: [tq] },
            t0,
            {
                title: "Nitro Upsells",
                stories: [
                    {
                        name: "Burst Reactions Upsell",
                        component: function () {
                            let e = u.useCallback(() => {
                                (0, ev.openModalLazy)(async () => {
                                    let { default: e } = await Promise.resolve().then(l.bind(l, 32605));
                                    return (t) => (0, s.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tC.LB, {
                                children: (0, s.jsx)(O.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Burst Reactions Upsell",
                                }),
                            });
                        },
                        id: "burst-reactions-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Profile Upsell",
                        component: function () {
                            let e = u.useCallback(() => {
                                (0, ev.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("935205"),
                                        l.e("766901"),
                                        l.e("641704"),
                                    ]).then(l.bind(l, 562011));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tC.LB, {
                                children: (0, s.jsx)(O.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Premium Profile Upsell",
                                }),
                            });
                        },
                        id: "premium-profile-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Message Length Upsell",
                        component: function () {
                            let e = u.useCallback(() => {
                                (0, ev.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([l.e("235257"), l.e("66920")]).then(
                                        l.bind(l, 220763),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tC.LB, {
                                children: (0, s.jsx)(O.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Premium Message Length Upsell",
                                }),
                            });
                        },
                        id: "premium-message-length-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Message Length Roadblock Upsell",
                        component: function () {
                            let [e] = u.useState("This is a sample long message that exceeds the character limit."),
                                t = u.useCallback(() => {
                                    (0, ev.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([l.e("235257"), l.e("276725")]).then(
                                            l.bind(l, 798612),
                                        );
                                        return (l) => (0, s.jsx)(t, { channel: null, content: e, ...l });
                                    });
                                }, [e]);
                            return (0, s.jsx)(tC.LB, {
                                children: (0, s.jsx)(O.$, {
                                    onClick: t,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Premium Message Length Roadblock Upsell",
                                }),
                            });
                        },
                        id: "premium-message-length-roadblock-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Profile Decoration Upsell",
                        component: function () {
                            let [e, t] = u.useState(eG.e.AVATAR_DECORATION_MODAL_UPSELL),
                                a = u.useCallback(() => {
                                    let { title: t, body: a } = t8[e];
                                    (0, ev.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([l.e("93513"), l.e("764864")]).then(
                                            l.bind(l, 393027),
                                        );
                                        return (l) =>
                                            (0, s.jsx)(n, {
                                                premiumUpsellType: e,
                                                title: t,
                                                body: a,
                                                onSecondaryClick: () => l.onClose(),
                                                ...l,
                                            });
                                    });
                                }, [e]);
                            return (0, s.jsxs)(tC.LB, {
                                children: [
                                    (0, s.jsx)(tC.MG, {
                                        children: (0, s.jsx)(ep.l, {
                                            label: "Upsell Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: t3,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, s.jsx)(O.$, {
                                        onClick: a,
                                        variant: "primary",
                                        size: "md",
                                        text: "Open Profile Decoration Upsell",
                                    }),
                                ],
                            });
                        },
                        id: "premium-profile-decoration-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Guild Cap Upsell",
                        component: function () {
                            let [e, t] = u.useState(100),
                                a = u.useCallback(() => {
                                    (0, ev.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            l.e("935205"),
                                            l.e("677668"),
                                            l.e("766901"),
                                            l.e("256430"),
                                        ]).then(l.bind(l, 39613));
                                        return (l) =>
                                            (0, s.jsx)(t, {
                                                guildCount: e,
                                                analyticsSource: {},
                                                analyticsLocation: {},
                                                analyticsLocations: [],
                                                ...l,
                                            });
                                    });
                                }, [e]);
                            return (0, s.jsxs)(tC.LB, {
                                children: [
                                    (0, s.jsx)(tC.MG, {
                                        children: (0, s.jsx)(ep.l, {
                                            label: "Guild Count State",
                                            placeholder: "Select state",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: t6,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, s.jsx)(O.$, {
                                        onClick: a,
                                        variant: "primary",
                                        size: "md",
                                        text: "Open Guild Cap Upsell",
                                    }),
                                ],
                            });
                        },
                        id: "premium-guild-cap-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Animated Profile Upsell",
                        component: function () {
                            let [e, t] = u.useState(t2.HL.AVATAR),
                                a = (0, es.bG)([tn.default], () => tn.default.getCurrentUser()),
                                n = u.useCallback(() => {
                                    null != a &&
                                        (0, ev.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([l.e("93513"), l.e("779149")]).then(
                                                l.bind(l, 688796),
                                            );
                                            return (l) => (0, s.jsx)(t, { uploadType: e, ...l });
                                        });
                                }, [a, e]);
                            return (0, s.jsxs)(tC.LB, {
                                children: [
                                    (0, s.jsx)(tC.MG, {
                                        children: (0, s.jsx)(ep.l, {
                                            label: "Upload Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: t4,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, s.jsx)(O.$, {
                                        onClick: n,
                                        variant: "primary",
                                        size: "md",
                                        text: "Open Animated Profile Upsell",
                                    }),
                                ],
                            });
                        },
                        id: "premium-animated-profile-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Try It Out Profile Upsell",
                        component: function () {
                            let e = (0, es.bG)([tn.default], () => tn.default.getCurrentUser()),
                                t = u.useCallback(() => {
                                    null != e &&
                                        (0, ev.openModalLazy)(async () => {
                                            let { default: e } = await l.e("435476").then(l.bind(l, 835071));
                                            return (t) => (0, s.jsx)(e, { ...t });
                                        });
                                }, [e]);
                            return (0, s.jsx)(tC.LB, {
                                children: (0, s.jsx)(O.$, {
                                    onClick: t,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Try It Out Profile Upsell",
                                }),
                            });
                        },
                        id: "premium-try-it-out-profile-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Video Backgrounds Upsell",
                        component: function () {
                            let e = u.useCallback(() => {
                                (0, ev.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("935205"),
                                        l.e("766901"),
                                        l.e("840716"),
                                    ]).then(l.bind(l, 629959));
                                    return (t) => (0, s.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tC.LB, {
                                children: (0, s.jsx)(O.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Video Backgrounds Upsell",
                                }),
                            });
                        },
                        id: "premium-video-backgrounds-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Guild Member Profile Upsell",
                        component: function () {
                            let e = u.useCallback(() => {
                                (0, ev.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("935205"),
                                        l.e("766901"),
                                        l.e("661129"),
                                    ]).then(l.bind(l, 475312));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tC.LB, {
                                children: (0, s.jsx)(O.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Guild Member Profile Upsell",
                                }),
                            });
                        },
                        id: "premium-guild-member-profile-upsell",
                        controls: {},
                    },
                    {
                        name: "HD Streaming Roadblock",
                        component: function () {
                            let e = u.useCallback(() => {
                                (0, ev.openModalLazy)(async () => {
                                    let { default: e } = await l.e("493475").then(l.bind(l, 366638));
                                    return (t) => (0, s.jsx)(e, { handleLearnMore: () => {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tC.LB, {
                                children: (0, s.jsx)(O.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open HD Streaming Roadblock",
                                }),
                            });
                        },
                        id: "hd-streaming-roadblock",
                        controls: {},
                    },
                    {
                        name: "Emoji Picker Premium Upsell",
                        component: function () {
                            let e = u.useCallback(() => {
                                (0, ev.openModalLazy)(async () => {
                                    let [{ default: e }, { EmojiIntention: t }] = await Promise.all([
                                        Promise.resolve().then(l.bind(l, 148361)),
                                        Promise.resolve().then(l.bind(l, 307731)),
                                    ]);
                                    return (l) =>
                                        (0, s.jsx)(e, {
                                            onUpsellClicked: () => {},
                                            onClose: l.onClose,
                                            channel: null,
                                            emojiDescriptor: void 0,
                                            pickerIntention: t.CHAT,
                                            analyticsLocation: {},
                                        });
                                });
                            }, []);
                            return (0, s.jsx)(tC.LB, {
                                children: (0, s.jsx)(O.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Emoji Picker Premium Upsell",
                                }),
                            });
                        },
                        id: "emoji-picker-premium-upsell",
                        controls: {},
                    },
                ],
            },
            { title: "Clips", stories: [ts] },
        ],
        tags: aE,
        IconComponent: r.t,
    },
    aT = {
        id: "identity",
        name: "Identity",
        groups: [
            tm,
            {
                title: "Editable Tile Button Examples",
                stories: [
                    {
                        name: "Avatar Button",
                        component: function (e) {
                            let [t, l] = u.useState(""),
                                a = (0, es.bG)([tn.default], () => tn.default.getCurrentUser());
                            return null == a
                                ? null
                                : (0, s.jsxs)("div", {
                                      style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 16,
                                          alignItems: "flex-start",
                                      },
                                      children: [
                                          (0, s.jsx)(tb.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: tf,
                                          }),
                                          (0, s.jsx)(th.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-button",
                    },
                    {
                        name: "Avatar Decoration Button",
                        component: function (e) {
                            let [t, l] = u.useState(""),
                                a = (0, es.bG)([tn.default], () => tn.default.getCurrentUser());
                            return null == a
                                ? null
                                : (0, s.jsxs)("div", {
                                      style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 16,
                                          alignItems: "flex-start",
                                      },
                                      children: [
                                          (0, s.jsx)(tb.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: tf,
                                          }),
                                          (0, s.jsx)(tx.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-decoration-button",
                    },
                    {
                        name: "Nameplate Button",
                        component: function (e) {
                            let [t, l] = u.useState(""),
                                a = (0, es.bG)([tn.default], () => tn.default.getCurrentUser());
                            return null == a
                                ? null
                                : (0, s.jsxs)("div", {
                                      style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 16,
                                          alignItems: "flex-start",
                                      },
                                      children: [
                                          (0, s.jsx)(tb.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: tf,
                                          }),
                                          (0, s.jsx)(ty.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "nameplate-button",
                    },
                ],
            },
            { title: "Profile Banner", stories: [er] },
            l8,
            {
                title: "User Profile Embeds",
                stories: [
                    {
                        name: "User Profile",
                        component: function () {
                            let e,
                                t,
                                l,
                                a =
                                    ((e = (0, es.yK)([ta.A], () => ta.A.getFriendIDs())),
                                    (t = (0, es.bG)([tn.default], () => tn.default.getCurrentUser())),
                                    u.useMemo(() => {
                                        let l = e
                                            .map((e) => {
                                                let t = tn.default.getUser(e);
                                                return null == t ? null : { id: e, label: ah.Ay.getName(t), value: e };
                                            })
                                            .filter((e) => null != e)
                                            .sort((e, t) => e.label.localeCompare(t.label));
                                        return null == t
                                            ? l
                                            : [
                                                  { id: t.id, label: `${ah.Ay.getName(t)} (You)`, value: t.id },
                                                  ...l.filter((e) => e.value !== t.id),
                                              ];
                                    }, [e, t])),
                                n =
                                    ((l = (0, es.yK)([ab.Ay], () => ab.Ay.getFlattenedGuildIds())),
                                    u.useMemo(
                                        () =>
                                            l.reduce((e, t) => {
                                                let l = eU.A.getGuild(t);
                                                return (
                                                    null != l && e.push({ id: l.id, label: l.name, value: l.id }), e
                                                );
                                            }, []),
                                        [l],
                                    )),
                                [i, r] = u.useState(),
                                [o, d] = u.useState(av),
                                c = i ?? a[0]?.value,
                                p = u.useMemo(
                                    () => [
                                        { id: "dm", label: "DM", value: "dm" },
                                        { id: av, label: "Default (main profile)", value: av },
                                        ...n,
                                    ],
                                    [n],
                                ),
                                m = (0, es.bG)(
                                    [ap.A],
                                    () =>
                                        null == c
                                            ? void 0
                                            : (ap.A.getDMFromUserId(c) ?? ap.A.getSortedPrivateChannels()[0]?.id),
                                    [c],
                                ),
                                b = o === av || "dm" === o ? void 0 : o,
                                h = "dm" === o ? m : void 0;
                            return (
                                u.useEffect(() => {
                                    null != c && (0, ad.A)(c, void 0, { guildId: b });
                                }, [c, b]),
                                (0, s.jsxs)(ec.B, {
                                    direction: "vertical",
                                    gap: 16,
                                    children: [
                                        (0, s.jsxs)(ec.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            children: [
                                                (0, s.jsx)(ay, { label: "User", options: a, value: c, onChange: r }),
                                                (0, s.jsx)(ay, { label: "Context", options: p, value: o, onChange: d }),
                                            ],
                                        }),
                                        (0, s.jsx)(af, {
                                            children:
                                                null != c && (0, s.jsx)(ac.G, { userId: c, guildId: b, channelId: h }),
                                        }),
                                    ],
                                })
                            );
                        },
                        id: "user-profile-embed",
                    },
                ],
            },
        ],
        tags: aE,
        IconComponent: o.UserIcon,
    },
    aA = { playgroundBaseUrl: "revenue", collections: [aS, aj, aC, aT] };
