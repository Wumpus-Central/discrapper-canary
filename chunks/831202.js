"use strict";
n.d(t, { od: () => aZ }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(835245),
    o = n(192308),
    l = n(231723),
    u = n(166532),
    d = n(925847),
    c = n(310829),
    _ = n(174459),
    h = n(75304),
    f = n(145659),
    E = n(624210),
    p = n(26279);
async function m(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === p.Re.DRAFT)
        try {
            await (0, E.Nl)(n.id);
        } catch (e) {}
}
var g = n(17928),
    A = n(444927),
    I = n(964486),
    T = n(793574),
    S = n(120700),
    N = n(171835),
    C = n(211083),
    y = n(558620),
    v = n(584160),
    R = n(480642),
    O = n(650170),
    b = n(832286),
    L = n(958340),
    D = n(566980),
    P = n(615310),
    w = n(489254),
    M = n(251913),
    x = n(71393),
    U = n(178368),
    k = n(166403),
    G = n(473145),
    V = n(802790),
    F = n(636441),
    B = n(587491),
    j = n(285753),
    H = n(430993),
    W = n(86379),
    Y = n(545075),
    K = n(655857),
    $ = n(534479),
    z = n(277984);
function q() {
    let e = (0, g.bG)([k.A], () => k.A.hasFetchedSubscriptions());
    return (
        s.useEffect(() => {
            e || (0, z.hP)();
        }, [e]),
        e
    );
}
var Z = n(61299),
    X = n(295405),
    Q = n(786300);
let [J, ee, et] = (0, Q.A)();
function en(e) {
    let {
            initialNumGuildBoostsToPurchase: t,
            disablePremiumUpsell: n = !1,
            closeGuildPerksModal: i,
            children: a,
            guildId: o,
            analyticsLocation: l,
            analyticsSourceLocation: u,
            applicationId: d,
            intent: c,
            onSubscribeComplete: _,
        } = e,
        [h, f] = s.useState(t),
        [E, p] = s.useState(!0),
        m = (0, A.A)(() => Date.now()),
        I = (0, A.A)(() => (0, G.D$)(U.A.boostSlots).length),
        T = (0, O.t4)((e) => e.activeSubscription),
        S = (0, g.bG)([k.A], () => k.A.hasFetchedSubscriptions()),
        N = (0, g.bG)([X.A], () => X.A.defaultPaymentSourceId),
        C = null != T ? T.paymentSourceId : null,
        y = (0, Z._V)(null != C ? C : S ? N : null);
    return (0, r.jsx)(J.Provider, {
        value: {
            numGuildBoostsToPurchase: h,
            setNumGuildBoostsToPurchase: f,
            disablePremiumUpsell: n,
            closeGuildPerksModal: i,
            guildId: o,
            paymentModalArgs: y,
            premiumSubscriptionPaymentSourceId: C,
            analyticsLocation: l,
            analyticsSourceLocation: u,
            forceDisableSubmitButton: E,
            setForceDisableSubmitButton: p,
            applicationId: d,
            intent: c,
            onSubscribeComplete: _,
            flowStartTime: m,
            existingAvailableSlotCount: I,
        },
        children: a,
    });
}
var ei = n(160946),
    er = n(253390),
    es = n(97352),
    ea = n(615396),
    eo = n(202541);
function el() {
    let e = (0, O.t4)((e) => e.activeSubscription),
        { numGuildBoostsToPurchase: t } = ee(),
        n = (0, g.bG)([es.A], () => null == e || null != es.A.get(e.planId)),
        i = (0, ei.Y)(),
        r = (0, g.bG)([es.A], () => (null != e ? (0, ea.c9)(e.planId) : null)),
        a = s.useMemo(
            () => (null != e && n && i ? (0, er.v)(e, t) : [{ planId: eo.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, i, t],
        ),
        o = s.useMemo(
            () =>
                a.find((e) => {
                    let { planId: t } = e;
                    return eo.pW.has(t);
                })?.planId ?? eo.gD.PREMIUM_MONTH_GUILD,
            [a],
        ),
        l = null == e || (n && i);
    return {
        newAdditionalPlans: a,
        currentPremiumSubscriptionPlan: r,
        hasFetchedPremiumSubscriptionPlan: n,
        hasFetchedAdditionalPlans: l,
        premiumGuildSubscriptionPlanId: o,
    };
}
var eu = n(652215),
    ed = n(375708),
    ec = n(898640);
function e_(e) {
    let { message: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(R.s3, { title: ed.intl.string(ed.t.q9EGps) }),
            (0, r.jsx)(H.c, { children: (0, r.jsx)("p", { className: ec.C, children: t }) }),
        ],
    });
}
function eh(e) {
    let { handleStepChange: t } = e,
        n = (0, O.t4)((e) => e.activeSubscription),
        { guildId: i, analyticsLocation: a } = ee(),
        o = (0, W.Hp)(),
        l = q(),
        { hasFetchedRelatedSubscriptionPlans: d, displayCurrency: c } = (0, K.Jn)(),
        { hasFetchedPremiumSubscriptionPlan: h } = el(),
        f = null != n && null != n.renewalMutations,
        E = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
        p = !l || !d || !h || null == c || "" === c;
    return ((0, I.Ay)(() => {
        f && _.default.track(eu.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: a, guild_id: i });
    }),
    s.useEffect(() => {
        p || o || E || f || t(u.pn.PLAN_SELECT);
    }, [p, o, E, f, t]),
    E)
        ? (0, r.jsx)(e_, { message: ed.intl.string(ed.t.mOWsF1) })
        : f
          ? (0, r.jsx)(e_, { message: ed.intl.string(ed.t.npfhh0) })
          : p
            ? (0, r.jsx)($.A, {})
            : o
              ? (0, r.jsx)(Y.oO, {})
              : null;
}
var ef = n(482132),
    eE = n(216641),
    ep = n(879100);
function em(e) {
    let { handleClose: t } = e,
        { guildId: n, numGuildBoostsToPurchase: i, paymentModalArgs: s, existingAvailableSlotCount: a } = ee(),
        {
            activeSubscription: o,
            startingFractionalPremiumEndsAt: l,
            customCheckoutFlow: u,
            paymentSourceId: d,
        } = (0, O.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
        })),
        c = (0, g.bG)([L.A], () => (null != n ? L.A.getGuild(n) : void 0), [n]),
        _ = null != n ? x.A.getGuild(n) : null,
        h = (0, A.A)(() => (0, ea.b2)(l)),
        f = (0, g.bG)([es.A], () => (null != o ? (0, ea.c9)(o.planId) : null)),
        { paymentSources: E } = s,
        p = (0, eE.g)(E, d),
        m = null != _ ? _.name : null != c ? c.name : void 0,
        I = h && null != f && !eo.YV.has(f.id);
    return (0, r.jsx)(ef.dZ, {
        children: (0, r.jsx)(ep.W, {
            guild: _,
            guildBoostQuantity: i + a,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: p,
            fallbackGuildName: m,
            didPurchaseOnFractionalPremium: I,
            customCheckoutFlow: u,
        }),
    });
}
var eg = n(284009),
    eA = n.n(eg),
    eI = n(683071),
    eT = n(512950),
    eS = n(821609),
    eN = n(123292),
    eC = n(529427),
    ey = n(87719);
let ev = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eR = n(503698),
    eO = n.n(eR),
    eb = n(661531),
    eL = n(990078),
    eD = n(408278),
    eP = n(834040),
    ew = n(499373),
    eM = n(834730),
    ex = n(403581),
    eU = n(663803),
    ek = n(320448),
    eG = n(534514),
    eV = n(104510),
    eF = n(695366),
    eB = n(289873),
    ej = n(726656),
    eH = n(688810),
    eW = n(531260),
    eY = n(666646),
    eK = n(404374),
    e$ = n(543767),
    ez = n(881489),
    eq = n(477421),
    eZ = n(234419),
    eX = n(363476),
    eQ = n(531506),
    eJ = n(51465);
function e0() {
    return (0, r.jsxs)("div", {
        className: eO()(eJ.dt, eJ.dE),
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eJ.qq,
            }),
            (0, r.jsx)(eM.E, {
                variant: "text-sm/medium",
                className: eJ.tD,
                children: ed.intl.format(ed.t.f5VHKm, {}),
            }),
        ],
    });
}
function e1(e) {
    let { text: t, color: n } = e;
    return (0, r.jsxs)("div", {
        className: eJ.dt,
        children: [(0, r.jsx)(ex.t, { size: "md", className: eJ.YW, color: n }), (0, r.jsx)("div", { children: t })],
    });
}
var e2 = n(773669),
    e3 = n(287809),
    e6 = n(975571),
    e4 = n(252424),
    e5 = n(428262),
    e7 = n(580630),
    e8 = n(155718),
    e9 = n(606267),
    te = n(319668),
    tt = n(38785),
    tn = n(818824),
    ti = n(596034),
    tr = n(848584),
    ts = n(241989),
    ta = n(888751),
    to = n(874638),
    tl = n(458785),
    tu = n(818348),
    td = n(327105),
    tc = n(7921);
function t_(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: i,
            totalDue: s,
            currency: a,
            startDate: o,
        } = e,
        { immediateDelivery: l } = (0, tn.U)();
    return (0, r.jsx)(ti._, {
        variant: {
            type: ti.I.Subscription,
            purchaseButtonText: ed.intl.string(ed.t.eUEeCt),
            totalDue: s,
            renewalPrice: i,
            currency: a,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: o,
        },
        paymentSourceType: t,
        immediateDelivery: l,
    });
}
function th(e) {
    return ed.intl.format(ed.t.IeaYqg, { endDate: e });
}
function tf(e) {
    let { text: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)("div", { className: tc.bU }),
            (0, r.jsx)(eM.E, { variant: "text-sm/normal", className: tc.b7, children: t }),
            (0, r.jsx)("div", { className: tc.bU }),
        ],
    });
}
function tE(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: i,
            guildBoostingAdjustment: s,
            checkoutInvoicePreview: a,
        } = e,
        o = (function (e) {
            let {
                addedQuantity: t,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: i,
                formattedGuildBoostPrice: r,
                formattedGuildBoostRate: s,
                subscriptionDiscount: a,
                entitlementDiscount: o,
                originalAmount: l,
                checkoutInvoicePreview: u,
            } = e;
            return {
                label: ed.intl.formatToPlainString(ed.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, e5.Mn)(n.id, !1, i),
                }),
                value: i ? r : s,
                subscriptionDiscount: a,
                entitlementDiscount: o,
                originalAmount: l,
                currency: u.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
            };
        })(e),
        l = [];
    0 !== n &&
        l.push({
            id: "base-plan-adjustment",
            label: ed.intl.formatToPlainString(ed.t.ZSVged, { planName: (0, e5.RH)(i[0].subscriptionPlanId) }),
            tooltip: ed.intl.string(ed.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            l.push({
                id: "guild-boosting-adjustment",
                label: ed.intl.string(ed.t["+as5ZZ"]),
                tooltip: ed.intl.string(ed.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== a.tax && l.push({ id: "tax", label: ed.intl.string(ed.t.jiRvC7), amount: a.tax, lineItemType: "tax" });
    let { lineItems: u, currency: d } = (0, ta.EA)({ id: "main-line-item", amount: t, ...o }),
        c = [...u, ...l];
    return (0, r.jsx)(tr.Vm, {
        defaultExpanded: !0,
        label: ed.intl.string(td.default.eoXh7B),
        lineItems: c,
        currency: d,
    });
}
function tp(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: i, renewalInvoicePreview: s } = e;
    return null != n
        ? (0, r.jsx)(tl.m0, { proratedInvoice: i, renewalInvoice: s, isUpdate: t })
        : (0, r.jsx)(tl.m0, { renewalInvoice: s });
}
function tm(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: i,
            currentPremiumSubscription: s,
            premiumSubscriptionPaymentSourceId: a,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: l,
            paymentSourceId: u,
            setPaymentSourceId: d,
            onPaymentSourceAdd: c,
        } = e,
        _ = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: r,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: a,
                } = e,
                o = (0, g.bG)([x.A, L.A], () => {
                    let e = x.A.getGuild(n);
                    return null != e ? e : L.A.isGuildFetching(n) ? null : L.A.getGuild(n);
                }, [n]),
                l = s.interval,
                u = s.intervalCount,
                d = (0, g.bG)([es.A], () => es.A.getForSkuAndInterval((0, e5.mH)(eo.pe.GUILD), l, u));
            eA()(null != d, "Missing guildBoostingSubscriptionPlan");
            let c = (0, e5.J$)(i.paymentSourceId),
                _ = (0, ez.ds)();
            t = null != r ? (0, e5.Om)(r, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: h } = (0, eH.Ay)(),
                [f, E] = (0, e$.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: T.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [p, m] = (0, e$.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: T.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, eY.OQ)({
                    checkoutInvoicePreview: f,
                    checkoutInvoiceError: E,
                    renewalInvoicePreview: p,
                    renewalInvoiceError: m,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: d,
                    isPrepaid: c,
                    isReverseTrial: _,
                    checkoutInvoicePreview: f,
                    renewalInvoicePreview: p,
                    isSubscriptionUpdate: null != r,
                }
            );
        })({
            guildId: t,
            priceOptions: i,
            currentPremiumSubscription: s,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: l,
        }),
        {
            isSubscriptionUpdate: h,
            guild: f,
            isPrepaid: E,
            isReverseTrial: p,
            checkoutInvoicePreview: m,
            renewalInvoicePreview: A,
        } = _,
        I = (0, e9.A)({ location: "GuildBoostReview", message: ed.intl.string(td.default["tK8A/8"]) });
    if (null == m || null == A || null == f) return (0, r.jsx)(tt.E, {});
    let S = (0, r.jsx)(tp, {
            isSubscriptionUpdate: h,
            premiumSubscription: s,
            checkoutInvoicePreview: m,
            renewalInvoicePreview: A,
        }),
        N = (0, r.jsx)(te.n, {
            setPaymentSourceId: d,
            paymentSourceId: u,
            location: "GuildBoostReview",
            label: ed.intl.string(ed.t["u+Cw58"]),
            onPaymentSourceAdd: c,
            premiumSubscriptionPaymentSourceId: a,
            hideCurrencySelect: !0,
        }),
        C = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: i,
                checkoutInvoicePreview: r,
                paymentSources: s,
                paymentSourceId: a,
            } = e;
            return {
                paymentSourceType: (0, eE.g)(s, a),
                premiumSubscriptionPlan: n,
                renewalPrice: i.subtotal,
                totalDue: r.total,
                currency: r.currency,
                startDate: (0, tl.de)({ isSubscriptionUpdate: t, currentInvoice: r, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: h,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: A,
            checkoutInvoicePreview: m,
            paymentSources: n,
            paymentSourceId: u,
        }),
        y = (0, r.jsx)(t_, { ...C }),
        v = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    checkoutInvoicePreview: i,
                    renewalInvoicePreview: r,
                    priceOptions: s,
                    reviewState: a,
                } = e,
                { guildBoostingSubscriptionPlan: o, isPrepaid: l, isReverseTrial: u } = a,
                d = n.interval,
                c = n.intervalCount;
            function _(e) {
                return (0, to.Z)(i.invoiceItems).find((t) => eo.pW.has(t.subscriptionPlanId) && e(t));
            }
            let h = _((e) => e.amount >= 0);
            eA()(null != h, "Missing guild boosting invoice item");
            let f = _((e) => e.amount < 0),
                E = null != f ? h.quantity - f.quantity : h.quantity,
                p = i.invoiceItems.filter((e) => (0, e5.xq)(e.subscriptionPlanId)),
                m = p.reduce((e, t) => e + t.amount, 0),
                g = (0, e$.sL)(h) * E,
                A = (0, e7.$g)(g, i.currency),
                I = (0, e7.CE)(A, d, c),
                T = (0, e7.$g)(i.total, i.currency) + (i.currency !== tu.Yr.USD ? "*" : ""),
                S = i.subtotal - g - m,
                N = h.discounts.map((e) => {
                    let t = e.amount / h.quantity;
                    return { ...e, amount: t * E };
                }),
                C = N.find((e) => e.type === e8.iS.SUBSCRIPTION_PLAN),
                y = N.find((e) => e.type === e8.iS.ENTITLEMENT),
                v = h.subscriptionPlanPrice * E;
            return {
                addedQuantity: E,
                guildBoostingSubscriptionPlan: o,
                isPrepaid: l,
                isReverseTrial: u,
                formattedGuildBoostPrice: A,
                formattedGuildBoostRate: I,
                formattedOriginalAmountGuildBoostRate: (0, e7.CE)((0, e7.$g)(v, i.currency), d, c),
                formattedTotal: T,
                basePlanAdjustment: m,
                basePlanInvoiceItems: p,
                guildBoostingAdjustment: S,
                subscriptionDiscount: C,
                entitlementDiscount: y,
                originalAmount: v,
                premiumSubscription: t,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: r,
                priceOptions: s,
            };
        })({
            premiumSubscription: s,
            premiumSubscriptionPlan: o,
            checkoutInvoicePreview: m,
            renewalInvoicePreview: A,
            priceOptions: i,
            reviewState: _,
        }),
        R = (0, r.jsx)(tE, { ...v }),
        O = (function (e, t, n) {
            let {
                    addedQuantity: i,
                    guildBoostingSubscriptionPlan: s,
                    isPrepaid: a,
                    formattedGuildBoostRate: o,
                    formattedOriginalAmountGuildBoostRate: l,
                    subscriptionDiscount: u,
                } = t,
                d = null != u;
            return {
                label: ed.intl.formatToPlainString(ed.t.a3cAOg, {
                    numGuildSubscriptions: i,
                    planName: (0, e5.Mn)(s.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, r.jsx)(ts.a6, {}),
                price: o,
                PriceIcon: d ? ex.t : void 0,
                priceTooltip: d ? ed.intl.string(td.default.YUNJJa) : void 0,
                priceSubText: d ? l : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            f,
            v,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: i } = e;
                return !t && n && null != i ? { type: "reverseTrial", text: th(i.currentPeriodEnd) } : null;
            })({ isPrepaid: E, isReverseTrial: p, premiumSubscription: s }),
        ),
        b = (0, r.jsx)(ts.f7, { ...O });
    return (0, r.jsx)(tt.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: I,
        purchaseItemContent: b,
        subscriptionDetailsContent: S,
        paymentMethodContent: N,
        invoiceSummaryContent: R,
        legalContent: y,
        invoiceTotalDueValue: v.formattedTotal,
        invoiceTotalDueLabel: ed.intl.string(td.default.R0cZsM),
    });
}
var tg = n(406263);
function tA(e) {
    return "" === e || "-" === e;
}
function tI(e) {
    let { value: t, onChange: n, minValue: i = 1, maxValue: a = 30, ariaLabel: o } = e,
        [l, u] = s.useState(t);
    s.useEffect(() => {
        u(t);
    }, [t]);
    let d = "number" == typeof l;
    function c(e) {
        u(e), tA(e) || n(e);
    }
    return (0, r.jsxs)("div", {
        className: tg.U$,
        children: [
            (0, r.jsx)(eD.K, {
                variant: "secondary",
                size: "md",
                icon: eP.Q,
                onClick: () => {
                    d && !(l <= i) && c(l - 1);
                },
                "aria-label": ed.intl.string(ed.t["k+ohJm"]),
                disabled: !d || l <= i,
            }),
            (0, r.jsx)("div", {
                className: tg.WJ,
                children: (0, r.jsx)("input", {
                    className: tg.Zh,
                    "aria-label": o,
                    inputMode: "numeric",
                    value: `${l}`,
                    onChange: (e) =>
                        (function (e) {
                            if (tA(e)) return void c(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= i) return void c(i);
                                if (t >= a) return void c(a);
                                c(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: function () {
                        tA(l) && u(t);
                    },
                }),
            }),
            (0, r.jsx)(eD.K, {
                variant: "secondary",
                size: "md",
                icon: ew.T,
                onClick: () => {
                    d && !(l >= a) && c(l + 1);
                },
                "aria-label": ed.intl.string(ed.t.w8Sc4B),
                disabled: !d || l >= a,
            }),
        ],
    });
}
function tT(e) {
    let { message: t } = e;
    return (0, r.jsx)(eM.E, { variant: "text-xs/normal", color: "text-muted", className: tg.jH, children: t });
}
function tS(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: tg.Vk,
        children: [
            (0, r.jsx)("div", {
                className: tg.D0,
                children: (0, r.jsx)(ex.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: tg.ue,
                    color: eK.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, r.jsx)("div", { className: tg.yP, children: t }),
        ],
    });
}
function tN(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        planLabel: a,
        planPriceContent: o,
        subtotalContent: l,
        refreshSubtotalContent: u,
        legacyDescriptionContent: d,
        refreshDescriptionContent: c,
        fractionalBanner: _,
        existingSlotNotice: h,
        discountCallout: f,
        refreshDiscountCallout: E,
        legacyPricingNotes: p,
        refreshPricingNotes: m,
    } = e;
    return (0, r.jsxs)("div", {
        children: [
            _,
            d,
            h,
            (0, r.jsxs)("div", {
                className: tc.mP,
                children: [
                    (0, r.jsxs)("div", {
                        className: tc.E6,
                        children: [
                            (0, r.jsx)(eU.l, {
                                value: n,
                                onChange: (e) => i(e),
                                className: tc.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)("div", { className: tc.$0, children: a }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eO()(tc.QK, { [tc.S]: t }), children: o }),
                ],
            }),
            (0, r.jsx)("div", { className: tc.J3 }),
            (0, r.jsxs)("div", {
                className: tc.mP,
                children: [
                    (0, r.jsx)(eM.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: ed.intl.string(ed.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", {
                        className: eO()(tc.__invalid_planSelectorSubtotalPrice, { [tc.S]: t }),
                        children: l,
                    }),
                ],
            }),
            p.map((e, t) => (0, r.jsx)(s.Fragment, { children: e }, t)),
            f,
        ],
    });
}
function tC(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        refreshNextStepLabel: a,
        planLabel: o,
        planPriceContent: l,
        subtotalContent: u,
        refreshSubtotalContent: d,
        legacyDescriptionContent: c,
        refreshDescriptionContent: _,
        fractionalBanner: h,
        existingSlotNotice: f,
        discountCallout: E,
        refreshDiscountCallout: p,
        legacyPricingNotes: m,
        refreshPricingNotes: g,
    } = e;
    return (0, r.jsxs)("div", {
        className: tg.xY,
        children: [
            h,
            (0, r.jsxs)("div", {
                className: tg.K3,
                children: [
                    (0, r.jsx)(eM.E, {
                        variant: "text-md/medium",
                        className: tg.bk,
                        children: ed.intl.string(ed.t["r+SebU"]),
                    }),
                    (0, r.jsx)(ek._, { className: tg.bN, color: "currentColor", size: "xs" }),
                    (0, r.jsx)(eM.E, { variant: "text-md/medium", className: tg.kX, children: a }),
                ],
            }),
            _,
            f,
            (0, r.jsxs)("div", {
                className: tg.fh,
                children: [
                    (0, r.jsxs)("div", {
                        className: tg.fX,
                        children: [
                            (0, r.jsx)(tI, {
                                value: n,
                                onChange: (e) => i(e),
                                ariaLabel: o,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)(eM.E, { variant: "text-md/medium", className: tg.ny, children: o }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eO()(tg.El, { [tc.S]: t }), children: l }),
                ],
            }),
            p,
            (0, r.jsxs)("div", {
                className: tg.fh,
                children: [
                    (0, r.jsx)(eG.D, {
                        variant: "heading-lg/semibold",
                        className: tg.O3,
                        children: ed.intl.string(ed.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", { className: eO()(tg.BU, { [tc.S]: t }), children: d }),
                ],
            }),
            g.map((e, t) => (0, r.jsx)(s.Fragment, { children: e }, t)),
        ],
    });
}
function ty(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: i } = e;
    return (0, r.jsxs)("div", {
        className: tc.Mv,
        children: [
            (0, r.jsx)(eV._, { className: tc.T5, color: eb.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, r.jsxs)("div", {
                children: [
                    ed.intl.format(ed.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != i
                        ? (0, r.jsx)(eL.m, {
                              text: ed.intl.formatToPlainString(ed.t.SFpsCH, {
                                  canceledCount: n,
                                  date: i.currentPeriodEnd,
                              }),
                              children: (0, r.jsx)(eF.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: tc.Y5,
                                  color: eb.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function tv(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: i,
            setForceDisableSubmitButton: a,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: l,
            existingAvailableSlots: u = [],
            priceOptions: d,
            isRefreshEnabled: c = !1,
            showRefreshSubtotalRate: _ = !1,
            refreshNextStepLabel: h = ed.intl.string(ed.t.QBnNHq),
        } = e,
        f = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: i,
                    numGuildBoosts: a,
                    setForceDisableSubmitButton: o,
                    premiumSubscription: l,
                    onClickPremiumSubscriptionLink: u,
                    existingAvailableSlots: d,
                    priceOptions: c,
                    showRefreshSubtotalRate: _,
                } = e,
                h =
                    ((t = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription())),
                    (0, g.bG)([X.A], () =>
                        t?.paymentSourceId != null ? X.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                f = i.interval,
                E = i.intervalCount,
                p = (0, g.bG)([es.A], () => es.A.getForSkuAndInterval((0, e5.mH)(eo.pe.GUILD), f, E)),
                m = (0, g.bG)([e3.default], () => e3.default.getCurrentUser()),
                A = (0, eW.A)({ forceFetch: !1 });
            eA()(null != p, "Missing guildBoostingSubscriptionPlan");
            let I = [{ planId: p.id, quantity: 1 }],
                S = l?.items.find(
                    (e) => e.planId === eo.gD.PREMIUM_MONTH_TIER_2 || e.planId === eo.gD.PREMIUM_YEAR_TIER_2,
                );
            null != S && I.push(S);
            let N = l?.items.find(
                    (e) => e.planId === eo.gD.PREMIUM_MONTH_GUILD || e.planId === eo.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == h || !eo.uJ.has(h) || null == N,
                { analyticsLocations: y } = (0, eH.Ay)(),
                [v, R] = (0, e$.YV)({
                    subscriptionId: l?.id,
                    items: I,
                    renewal: !0,
                    paymentSourceId: l?.paymentSourceId,
                    currency: c.currency,
                    preventFetch: C,
                    analyticsLocations: y,
                    analyticsLocation: T.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, eY.Tr)(v, R);
            let O = !C && null == v && null == R;
            s.useLayoutEffect(() => {
                o(O);
            }, [O, o]);
            let b = (0, eZ.V)()?.subscription_trial?.sku_id === eo.pe.TIER_2,
                L = e5.Ay.hasBoostDiscount(m),
                D = L && null != l && e5.Ay.isPremiumAtLeast(e5.Ay.getPremiumType(l.planId), eo.PremiumTypes.TIER_1),
                P = v?.findInvoiceItemByPlanId(p.id),
                w =
                    null != P
                        ? { amount: P.amount, tax: 0, taxInclusive: !0, currency: v.currency }
                        : e5.Ay.getPrice(p.id, L, !1, c),
                M = a * w.amount,
                x = (0, ez.ds)() && L && null != l,
                U = (function (e) {
                    let t,
                        {
                            existingAvailableSlotsCount: n,
                            fractionalPremiumState: i,
                            isReverseTrial: r,
                            hasDiscountUpsell: s,
                            withTrialOfferCopyVariant: a,
                        } = e;
                    return (
                        (t = r ? "reverse_trial" : s ? "discount" : a ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: n > 0,
                            showFractionalPremiumBanner: i === eo.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: d.length,
                    fractionalPremiumState: A.fractionalState,
                    isReverseTrial: x,
                    hasDiscountUpsell: D,
                    withTrialOfferCopyVariant: b,
                });
            "discount" === U.upsellVariant
                ? (eA()(null != l, "Missing premiumSubscription for discount upsell variant"),
                  (n = ed.intl.format(ed.t.hf6YOY, { planName: e5.Ay.getTierDisplayNameByPlanId(l.planId) })))
                : (n = ed.intl.format("upsell_trial" === U.upsellVariant ? ed.t.ba1L74 : ed.t.fkffDT, {
                      onPremiumSubscriptionClick: u,
                      discountPercentage: (0, e4.l9)(e2.default.locale, eo.oX / 100),
                      freeSubscriptionCount: eo.M4,
                  }));
            let V = d.filter((e) => (0, G.I5)(e)).length,
                F = (0, e5.J$)(c.paymentSourceId),
                { ipCountryCode: B } = (0, eq.A)(),
                j = "HR" === B && w.currency === tu.Yr.EUR,
                H =
                    x && null != l
                        ? (0, r.jsx)(tf, { text: th(l.currentPeriodEnd) })
                        : (0, r.jsx)("div", { className: eO()(tc.hA, tc.G3), children: ed.intl.string(ed.t.jNY1FO) }),
                W =
                    x && null != l
                        ? (0, r.jsx)(tf, { text: th(l.currentPeriodEnd), className: tc.jk })
                        : (0, r.jsx)(eM.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: tg._X,
                              children: ed.intl.string(ed.t.jNY1FO),
                          }),
                Y = U.showExistingSlotNotice
                    ? (0, r.jsx)(ty, { existingAvailableSlots: d, canceledCount: V, premiumSubscription: l })
                    : null,
                K = U.showFractionalPremiumBanner ? (0, r.jsx)(eQ.vi, { fractionalPremiumInfo: A }) : null,
                $ = F
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === eo.WT.YEAR
                              ? ed.intl.string(ed.t.YDpAzZ)
                              : t === eo.WT.MONTH && 1 === n
                                ? ed.intl.string(ed.t["6ZR3By"])
                                : null;
                      })({ intervalType: f, intervalCount: E }) ?? ed.intl.string(ed.t.K9Bmze))
                    : ed.intl.string(ed.t.K9Bmze),
                z = O
                    ? (0, r.jsx)(eB.y, {})
                    : F
                      ? (0, e7.$g)(w.amount, w.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: i, intervalCount: r = 1 } = e,
                                s = (0, e7.$g)(t, n);
                            return i === eo.WT.YEAR
                                ? ed.intl.formatToPlainString(ed.t["8M04YJ"], { price: s })
                                : i === eo.WT.MONTH && 1 === r
                                  ? ed.intl.formatToPlainString(ed.t.VStWCR, { price: s })
                                  : i === eo.WT.MONTH && r > 1
                                    ? ed.intl.formatToPlainString(ed.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: f, intervalCount: E, amount: w.amount, currency: w.currency }),
                q = O
                    ? (0, r.jsx)(eB.y, {})
                    : (0, r.jsx)(eX.A, {
                          price: M,
                          currency: w.currency,
                          intervalType: f,
                          intervalCount: E,
                          isPrepaidPaymentSource: F,
                      }),
                Z = O
                    ? (0, r.jsx)(eB.y, {})
                    : _ && !F
                      ? (0, e7.CE)((0, e7.$g)(M, w.currency), f, E)
                      : (0, e7.$g)(M, w.currency),
                Q = [],
                J = [];
            if (j) {
                let e = (0, r.jsx)(
                    ej.A,
                    {
                        message: ed.intl.formatToPlainString(ed.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, e7.$g)(7.5345 * M, tu.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                Q.push(e), J.push(e);
            }
            let ee = ed.intl.format(ed.t.Om31w8, { documentationLink: e6.A.getArticleURL(eu.MVz.LOCALIZED_PRICING) });
            return (
                Q.push((0, r.jsx)(ej.A, { message: ee }, "localized-pricing")),
                J.push((0, r.jsx)(tT, { message: ee }, "localized-pricing")),
                {
                    isLoading: O,
                    planLabel: $,
                    planPriceContent: z,
                    subtotalContent: q,
                    refreshSubtotalContent: Z,
                    legacyDescriptionContent: H,
                    refreshDescriptionContent: W,
                    existingSlotNotice: Y,
                    fractionalBanner: K,
                    legacyPricingNotes: Q,
                    refreshPricingNotes: J,
                    discountCallout:
                        "reverse_trial" === U.upsellVariant
                            ? (0, r.jsx)(e0, {})
                            : (0, r.jsx)(e1, { text: n, color: eK.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === U.upsellVariant ? (0, r.jsx)(e0, {}) : (0, r.jsx)(tS, { text: n }),
                }
            );
        })({
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setForceDisableSubmitButton: a,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: l,
            existingAvailableSlots: u,
            priceOptions: d,
            showRefreshSubtotalRate: _,
        });
    return (0, r.jsx)(c ? tC : tN, {
        isLoading: f.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        planLabel: f.planLabel,
        planPriceContent: f.planPriceContent,
        subtotalContent: f.subtotalContent,
        refreshSubtotalContent: f.refreshSubtotalContent,
        legacyDescriptionContent: f.legacyDescriptionContent,
        refreshDescriptionContent: f.refreshDescriptionContent,
        fractionalBanner: f.fractionalBanner,
        existingSlotNotice: f.existingSlotNotice,
        discountCallout: f.discountCallout,
        refreshDiscountCallout: f.refreshDiscountCallout,
        legacyPricingNotes: f.legacyPricingNotes,
        refreshPricingNotes: f.refreshPricingNotes,
        refreshNextStepLabel: h,
    });
}
let tR = eo.gD.NONE_MONTH,
    tO = [eo.pe.GUILD];
function tb(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            numGuildBoostsToPurchase: i,
            setNumGuildBoostsToPurchase: s,
            guildId: a,
            closeGuildPerksModal: o,
            disablePremiumUpsell: l,
            setForceDisableSubmitButton: d,
            forceDisableSubmitButton: c,
            paymentModalArgs: _,
            premiumSubscriptionPaymentSourceId: h,
        } = ee(),
        { paymentSourceId: f, activeSubscription: E } = (0, O.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: p } = (0, K.Jn)(),
        m = null != h || Object.keys(_.paymentSources).length > 0,
        I = (0, u.Ir)(m ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS),
        T = (0, A.A)(() => (0, G.D$)(U.A.boostSlots)),
        S = (0, w.n)("GuildBoostPurchaseModal"),
        N = ev.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        C = S && N,
        y = (0, g.bG)([L.A], () => (null != a ? L.A.getGuild(a) : void 0), [a]),
        v = null != a ? x.A.getGuild(a) : null,
        R = null == y && null == v,
        b = null != E && E.isPurchasedExternally,
        D = Object.keys(_.paymentSources).length > 0,
        P = (0, g.bG)([es.A], () => (null != E ? (0, ea.c9)(E.planId) : null)),
        M = (0, g.bG)([es.A], () => (null == P ? es.A.get(tR) : P));
    if (null == a) throw new eC.vd({ message: "Missing guildId" });
    eA()(null != M, "Missing nextPremiumSubscriptionPlan");
    let k = (0, r.jsx)(tv, {
        premiumSubscriptionPlan: M,
        numGuildBoosts: i,
        setNumGuildBoosts: s,
        setForceDisableSubmitButton: d,
        premiumSubscription: E,
        existingAvailableSlots: T,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != o && o(), (0, ey.e)();
        },
        priceOptions:
            null != f ? { paymentSourceId: f, currency: null != p ? p : void 0 } : { currency: null != p ? p : void 0 },
        isRefreshEnabled: S,
        showRefreshSubtotalRate: C,
        refreshNextStepLabel: I,
    });
    return (
        b && null != E && null != E.paymentGateway
            ? (k = (0, r.jsxs)("div", {
                  className: ec.xK,
                  children: [
                      (0, r.jsx)(eI.w, {
                          type: "critical",
                          children: ed.intl.format(ed.t["/m3Y3s"], { paymentGatewayName: tu.qm[E.paymentGateway] }),
                      }),
                      k,
                  ],
              }))
            : null != a &&
              !L.A.isGuildFetching(a) &&
              R &&
              (k = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(eT.p, {
                          messageType: eT.Y.ERROR,
                          className: ec.MR,
                          children: ed.intl.string(ed.t.eAn6z2),
                      }),
                      k,
                  ],
              })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ef.dZ, { children: k }),
                (0, r.jsx)(ef.UX, {
                    children: (0, r.jsx)(ep._, {
                        currentStep: u.pn.PLAN_SELECT,
                        isRefreshEnabled: S,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: S
                            ? (0, r.jsx)(eS.$, {
                                  variant: "secondary",
                                  text: ed.intl.string(ed.t["ETE/oC"]),
                                  onClick: t,
                              })
                            : (0, r.jsx)(eN.Q, { text: ed.intl.string(ed.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, r.jsx)(eS.$, {
                            variant: "primary",
                            text: ed.intl.string(ed.t["3PatSz"]),
                            type: "submit",
                            disabled: (function (e) {
                                let {
                                    forceDisableSubmitButton: t,
                                    numGuildBoostsToPurchase: n,
                                    isDisabledBecauseExternalSubscription: i,
                                    isMissingGuildInformation: r,
                                } = e;
                                return t || 0 === n || i || r;
                            })({
                                forceDisableSubmitButton: c,
                                numGuildBoostsToPurchase: i,
                                isDisabledBecauseExternalSubscription: b,
                                isMissingGuildInformation: R,
                            }),
                            onClick: () => {
                                l || (null != P && P.premiumSubscriptionType === eo.PremiumTypes.TIER_2)
                                    ? n(null != h || D ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS)
                                    : n(u.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
var tL = n(364840),
    tD = n(460905),
    tP = n(183623),
    tw = n(95635),
    tM = n(935462),
    tx = n(331322),
    tU = n(532794),
    tk = n(811611),
    tG = n(901017),
    tV = n(403052);
function tF(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, g.bG)([e2.default], () => e2.default.locale);
    return (0, r.jsxs)("div", {
        className: tV.mH,
        children: [
            (0, r.jsx)(tG.A, {
                icon: eV._,
                iconClassName: tV.pl,
                description: ed.intl.formatToPlainString(ed.t.sQBgs2, { numFreeGuildSubscriptions: eo.M4 }),
                color: eb.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, r.jsx)(tG.A, {
                icon: eV._,
                iconClassName: tV.pl,
                description: ed.intl.formatToPlainString(ed.t["1A6vXi"], { percent: (0, e4.l9)(n, eo.oX / 100) }),
                color: eb.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, r.jsx)(tG.A, { icon: tD.n, iconClassName: tV.zO, description: ed.intl.string(ed.t.Z9b2x2) }) : null,
            (0, r.jsx)(tG.A, { icon: tP.F, iconClassName: tV.Kg, description: ed.intl.string(ed.t["8dqG5E"]) }),
            (0, r.jsx)(tG.A, { icon: tw.J, iconClassName: tV.$z, description: ed.intl.string(ed.t.cBorIy) }),
        ],
    });
}
function tB(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: i,
            onSkip: a,
            onSubscriptionConfirmation: o,
            analyticsLocation: l,
            analyticsSourceLocation: u,
            priceOptions: d,
        } = e,
        { analyticsLocations: c, sourceAnalyticsLocations: h } = (0, eH.Ay)(T.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        f = null == t || null == t.premiumSubscriptionType,
        E = e5.Ay.getPrice(eo.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        p = (0, e7.$g)(E.amount, E.currency),
        m = (0, eZ.V)(),
        g = m?.trial_id,
        A = m?.subscription_trial?.sku_id === eo.pe.TIER_2;
    return (
        s.useEffect(() => {
            _.default.track(eu.HAw.PREMIUM_UPSELL_VIEWED, { type: eo.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tM.s_, { "data-migration-pending": !0, onClick: n, className: tV.b }),
                (0, r.jsxs)(H.c, {
                    children: [
                        A && (0, r.jsx)(tk.Vq, { className: tV.Fg }),
                        (0, r.jsx)("div", { className: eO()(tV.Tn, { [tV.NH]: A }) }),
                        (0, r.jsx)(eM.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children:
                                null != g
                                    ? ed.intl.string(ed.t.AoSzEr)
                                    : ed.intl.format(ed.t["7vePZb"], { monthlyPrice: p }),
                        }),
                        (0, r.jsx)(tF, { shouldUpsellFromNoneTier: f }),
                    ],
                }),
                (0, r.jsx)(tL.j, {
                    children: (0, r.jsxs)(tx.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(eN.Q, {
                                text: ed.intl.string(ed.t["13/7kX"]),
                                onClick: i,
                                variant: "secondary",
                            }),
                            (0, r.jsxs)(tx.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, r.jsx)(eN.Q, {
                                        text: ed.intl.string(ed.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, r.jsx)(eS.$, {
                                        variant: "active",
                                        text: null != g ? ed.intl.string(ed.t["Gd/XHF"]) : ed.intl.string(ed.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, tU.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eo.pe.TIER_2,
                                                    analyticsLocations: c,
                                                    analyticsObject: {
                                                        ...l,
                                                        section: eu.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: u,
                                                    onSubscriptionConfirmation: o,
                                                    trialId: g,
                                                });
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function tj(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: i } = e,
        { paymentModalArgs: a, analyticsLocation: o, analyticsSourceLocation: l } = ee(),
        { paymentSourceId: d, activeSubscription: c } = (0, O.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: _ } = (0, K.Jn)(),
        h = (0, g.bG)([es.A], () => (null != c ? (0, ea.c9)(c.planId) : null)),
        f = (0, g.bG)([es.A], () => (null == h ? es.A.get(tR) : h));
    eA()(null != f, "Missing nextPremiumSubscriptionPlan"), eA()(null != _ && "" !== _, "Currency not defined");
    let { paymentSources: E } = a,
        p = null != c ? c.paymentSourceId : null,
        m = Object.keys(E).length > 0,
        A = s.useCallback(() => n(u.pn.PLAN_SELECT), [n]),
        I = s.useCallback(() => n(null != p || m ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS), [n, p, m]);
    return (0, r.jsx)(tB, {
        premiumSubscriptionPlan: f,
        analyticsLocation: o,
        analyticsSourceLocation: l,
        onClose: t,
        onBack: A,
        onSkip: I,
        onSubscriptionConfirmation: i,
        priceOptions: null != d ? { paymentSourceId: d, currency: _ } : { currency: _ },
    });
}
var tH = n(364995),
    tW = n(820739);
async function tY(e, t) {
    await (0, tW.CD)();
    let n = (0, G.D$)(U.A.boostSlots);
    return (0, tW.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
let tK = [u.pn.PLAN_SELECT];
function t$() {
    let { guildId: e, intent: t, onSubscribeComplete: n, paymentModalArgs: i } = ee(),
        { setIsSubmittingCurrentStep: r } = i,
        { paymentAuthenticationState: a } = (0, C.o)(),
        { setPurchaseState: o, setPurchaseError: l } = (0, O.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
        })),
        u = s.useRef(!1);
    return (
        s.useEffect(() => {
            if (a === M.oc.PENDING) {
                u.current = !0;
                return;
            }
            u.current &&
                ((u.current = !1),
                r(!1),
                a !== M.oc.NONE ||
                    null == e ||
                    (async () => {
                        try {
                            await tY(e, null != t), n?.();
                        } catch (e) {
                            o(D.h.FAIL), l(e);
                        }
                    })());
        }, [a, e, t, n, r, o, l]),
        null
    );
}
let tz = [
        { key: u.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(tb, { ...e }), options: { renderHeader: !0 } },
        {
            key: u.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(tj, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    tq = {
        CHECKOUT_FLOW: S.C.GUILD_BOOST_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eh, { ...e }) },
        STEPS_BEFORE_CHECKOUT: tz,
        CHECKOUT_STEPS: {
            [u.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                    { guildId: a, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: l } = ee(),
                    {
                        activeSubscription: d,
                        paymentSourceId: c,
                        setPaymentSourceId: h,
                    } = (0, O.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: f } = (0, K.Jn)();
                if (null == a) throw new eC.vd({ message: "Missing guildId" });
                eA()(null != f && "" !== f, "Currency not defined");
                let { paymentSources: E } = o,
                    { newAdditionalPlans: p, currentPremiumSubscriptionPlan: m } = el(),
                    A = (0, g.bG)([es.A], () => (null == m ? es.A.get(tR) : m));
                eA()(null != A, "Missing nextPremiumSubscriptionPlan");
                let I = null != c ? { paymentSourceId: c, currency: f } : { currency: f },
                    T = (function (e) {
                        let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                            {
                                guildId: r,
                                paymentModalArgs: a,
                                premiumSubscriptionPaymentSourceId: o,
                                numGuildBoostsToPurchase: l,
                                analyticsLocation: d,
                                analyticsSourceLocation: c,
                                flowStartTime: h,
                                applicationId: f,
                                intent: E,
                                onSubscribeComplete: p,
                            } = ee(),
                            { displayCurrency: m } = (0, K.Jn)(),
                            { paymentSources: g, setIsSubmittingCurrentStep: A, isSubmittingCurrentStep: I } = a,
                            {
                                activeSubscription: T,
                                paymentSourceId: S,
                                setPurchaseError: N,
                                hasAcceptedTerms: C,
                                setPurchaseState: y,
                            } = (0, O.t4)((e) => ({
                                activeSubscription: e.activeSubscription,
                                paymentSourceId: e.paymentSourceId,
                                setPurchaseError: e.setPurchaseError,
                                hasAcceptedTerms: e.hasAcceptedTerms,
                                setPurchaseState: e.setPurchaseState,
                            })),
                            v = (0, eY.sw)(),
                            {
                                newAdditionalPlans: R,
                                currentPremiumSubscriptionPlan: b,
                                premiumGuildSubscriptionPlanId: L,
                            } = el(),
                            P = (0, e9.A)({
                                location: "GuildBoostPurchaseModal",
                                message: ed.intl.string(td.default["tK8A/8"]),
                            }),
                            { checkoutPaymentSources: w } = (0, tH.t)(),
                            M = (0, e9.iB)({
                                checkoutPaymentSources: w,
                                paymentSourceId: S,
                                location: "GuildBoostPurchaseModal",
                            }),
                            x = s.useMemo(
                                () => ({
                                    ...i,
                                    location: d,
                                    source: c,
                                    subscription_plan_id: L,
                                    sku_id: (0, e5.mH)(eo.pe.GUILD),
                                    quantity: l,
                                }),
                                [i, d, c, l, L],
                            ),
                            U = s.useMemo(() => {
                                let { guild_id: e, ...t } = x;
                                return t;
                            }, [x]),
                            k = null != S ? { paymentSourceId: S, currency: m ?? void 0 } : { currency: m ?? void 0 },
                            G = async () => {
                                eA()(null != R, "Missing newAdditionalPlans");
                                let e = (0, eE.W)(g, S);
                                N(null);
                                let s = !1;
                                try {
                                    y(D.h.PURCHASING),
                                        A(!0),
                                        eA()(null != S, "Missing paymentSourceId"),
                                        eA()(null != v, "Missing invoicePreview");
                                    let a = { amount: v.total, currency: v.currency },
                                        l = k.currency ?? v.currency,
                                        d = (0, e5.U8)(T, R, l.toLowerCase(), k.paymentSourceId);
                                    if (
                                        (_.default.track(eu.HAw.PAYMENT_FLOW_COMPLETED, {
                                            ...x,
                                            duration_ms: Date.now() - h,
                                            guild_id: r ?? void 0,
                                            application_id: f,
                                        }),
                                        null == T || null == b)
                                    ) {
                                        eA()(null != e, "Missing paymentSource");
                                        let t = await (0, z.Ky)({
                                            items: R,
                                            paymentSource: e,
                                            currency: l,
                                            expectedInvoicePrice: a,
                                            expectedRenewalPrice: d,
                                        });
                                        if (t.redirectConfirmation) {
                                            s = !0;
                                            return;
                                        }
                                        if (t.pendingCustomerAction) return;
                                    } else {
                                        let t = { items: (0, e5.aE)(T, R) };
                                        (t.currency = T.currency ?? l),
                                            (t.paymentSource = null != o ? g[o] : void 0),
                                            null == t.paymentSource &&
                                                (eA()(null != e, "Missing paymentSource"),
                                                (t.paymentSource = e),
                                                (t.currency = l));
                                        let n = await (0, z.nV)(T, t, a, d, i.location_stack);
                                        if (n.redirectConfirmation) {
                                            s = !0;
                                            return;
                                        }
                                        if (n.pendingCustomerAction) return;
                                    }
                                    null == E && t(u.pn.CONFIRM),
                                        y(D.h.COMPLETED),
                                        null != r && (await tY(r, null != E)),
                                        null != E && n(),
                                        p?.();
                                } catch (t) {
                                    y(D.h.FAIL),
                                        N(t),
                                        _.default.track(eu.HAw.PAYMENT_FLOW_FAILED, {
                                            ...U,
                                            payment_error_code: t?.code,
                                            payment_gateway:
                                                null != e
                                                    ? e.type === eu.hes.CARD
                                                        ? eu.kM_.STRIPE
                                                        : eu.kM_.BRAINTREE
                                                    : null,
                                            payment_source_id: S,
                                            duration_ms: Date.now() - h,
                                        });
                                } finally {
                                    s || A(!1);
                                }
                            };
                        return {
                            text: ed.intl.string(ed.t.eUEeCt),
                            loading: I,
                            disabled: null == S || !C || null != P || M,
                            onClick: G,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: i }),
                    S = s.useCallback(() => {
                        t(u.pn.ADD_PAYMENT_STEPS), h(null);
                    }, [t, h]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ef.dZ, {
                            children: (0, r.jsx)(tm, {
                                guildId: a,
                                paymentSources: E,
                                priceOptions: I,
                                currentPremiumSubscription: d,
                                premiumSubscriptionPaymentSourceId: l,
                                premiumSubscriptionPlan: A,
                                newAdditionalPlans: p,
                                paymentSourceId: c,
                                setPaymentSourceId: h,
                                onPaymentSourceAdd: S,
                            }),
                        }),
                        (0, r.jsx)(ef.UX, {
                            children: (0, r.jsx)(R.lo, {
                                onBackClick: () => t(u.pn.PLAN_SELECT),
                                primaryButtonProps: T,
                            }),
                        }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            guildId: t,
                            totalNumberOfSlotsToAssign: n = 1,
                            intent: i,
                            disablePremiumUpsell: s,
                            onSubscribeComplete: a,
                            closeGuildPerksModal: o,
                            analyticsLocation: l,
                        },
                        applicationId: u,
                        analyticsSourceLocation: d,
                        stepConfigs: c,
                        loadId: _,
                        children: h,
                    } = e,
                    f = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
                    E = (0, A.A)(() => n - (0, G.D$)(U.A.boostSlots).length);
                return (
                    (0, I.Ay)(() => {
                        null != L.A.getGuild(t) || L.A.isGuildFetching(t) || (0, b.y)(t);
                    }),
                    (0, r.jsx)(N.M, {
                        activeSubscription: f,
                        stepConfigs: c,
                        skuIDs: tO,
                        loadId: _,
                        unifiedCheckoutFlow: S.C.GUILD_BOOST_CHECKOUT,
                        children: (0, r.jsxs)(en, {
                            initialNumGuildBoostsToPurchase: E,
                            disablePremiumUpsell: s,
                            closeGuildPerksModal: o,
                            guildId: t,
                            analyticsLocation: l,
                            analyticsSourceLocation: d,
                            applicationId: u,
                            intent: i,
                            onSubscribeComplete: a,
                            children: [(0, r.jsx)(t$, {}), h],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { numGuildBoostsToPurchase: i, guildId: a, existingAvailableSlotCount: o } = ee(),
                    l = (0, P.bB)(),
                    d = (0, O.t4)((e) => e.purchaseState),
                    c = (0, w.n)("GuildBoostUnifiedCheckout"),
                    _ = c && (l === u.pn.REVIEW || l === u.pn.CONFIRM),
                    h = (0, j.A)(_),
                    f = s.useMemo(() => ({ quantity: i }), [i]);
                return c && l === u.pn.CONFIRM
                    ? (0, r.jsx)(B.A, {
                          mediaUrls: h.mediaUrls,
                          isSuccess: h.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(d === D.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, r.jsx)(F.A, {
                                  transitionState: t.transitionState,
                                  guild: x.A.getGuild(a),
                                  guildBoostQuantity: i + o,
                                  isTransfer: !1,
                                  graphic: e,
                                  onClose: n,
                              }),
                      })
                    : n({
                          ...t,
                          analyticsDataOverride: f,
                          skipUnifiedHeaderForSteps: tK,
                          disableUnsupportedExternalSubscriptionHandler: !0,
                          isMediumModal: !0,
                      });
            },
            tenantAnalyticsLocation: T.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                i = (0, w.n)("GuildBoostUnifiedCheckout"),
                s = (0, O.t4)((e) => e.purchaseState),
                a = (0, y.A)();
            if (n === u.pn.PREMIUM_UPSELL) return null;
            if (n === u.pn.REVIEW) {
                let e = null != a ? a.skuId : null;
                return (0, r.jsx)(R.s3, { ...(0, v.uO)({ skuId: e, step: n }) });
            }
            return i
                ? (0, r.jsx)(R.s3, { title: (0, v.uO)({ skuId: null, step: n }).title })
                : (0, r.jsx)(V.A, { onClose: () => t(s === D.h.COMPLETED), currentStep: n, purchaseState: s });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(em, { ...e }), options: { renderHeader: !0 } },
    };
var tZ = n(630303),
    tX = n(871109);
let tQ = s.createContext(void 0);
function tJ() {
    let e = s.useContext(tQ);
    return eA()(null != e, "GuildProductPurchaseContext not found"), e;
}
function t0(e) {
    let { children: t, skuId: n, ...i } = e,
        s = (0, g.bG)([tX.A], () => tX.A.getGuildProduct(n));
    return (
        eA()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(tQ.Provider, { value: { guildProductListing: s, ...i }, children: t })
    );
}
function t1(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: s } = tJ(),
        a = (0, eY.sw)();
    return (
        (0, I.Ay)(() => {
            var e;
            eA()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: s, guildProductListingId: i.id, invoicePreview: a }),
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("57034"),
                        n.e("67837"),
                        n.e("34691"),
                        n.e("35778"),
                        n.e("47812"),
                        n.e("13583"),
                        n.e("28090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, r.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
var t2 = n(939249),
    t3 = n(789645),
    t6 = n(303612),
    t4 = n(916261),
    t5 = n(575650);
function t7(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(t2.D, {
        className: eO()(t4.cG, t),
        onClick: n,
        children: (0, r.jsx)(t3.P, { size: "xs", color: "currentColor", className: t4.yP }),
    });
}
function t8(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, r.jsxs)(tM.rQ, {
        className: eO()(t4.wx, t5.G, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(t6.A, { className: t4.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(t7, { className: t4.b, onClose: n }),
        ],
    });
}
var t9 = n(196617);
let ne = {
    CHECKOUT_FLOW: eC.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [u.pn.REVIEW]: tZ.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, r.jsx)(t0, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = tJ();
        return n === u.pn.CONFIRM
            ? null
            : (0, r.jsx)(t8, { guildProductListing: i, className: t9.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(t1, { ...e }) },
};
var nt = n(20742),
    nn = n(848149),
    ni = n(937008),
    nr = n(106778),
    ns = n(228366),
    na = n(213530),
    no = n(966971),
    nl = n(758836),
    nu = n(483764);
let nd = { sliderBodyClassName: nu.Bz };
function nc(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nr.Fk, { ref: n, className: nu.Lb, environment: t.current }),
            (0, r.jsx)(na.K, { options: i, className: eO()(nu.Oh, { [nu.R]: !s }) }),
        ],
    });
}
var n_ = n(702841),
    nh = n(775602),
    nf = n(31823),
    nE = n(427675),
    np = n(590180),
    nm = n(953150),
    ng = n(524246),
    nA = n(14368),
    nI = n(61750),
    nT = n(972607),
    nS = n(901930);
function nN(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: i,
            purchaseError: a,
            purchasePreviewError: o,
            appliedUserDiscounts: l,
        } = (0, O.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: u } = (0, C.o)(),
        { application: d } = (0, nf.V)(),
        c = (0, nE.gU)(),
        _ = (0, n_.bG)([np.A], () => np.A.getProduct(i)),
        h = s.useRef(!1);
    eA()(null != i, "Expected selectedSkuId"), eA()(null != d, "Expected application");
    let f = c[i];
    eA()(null != f, "Expected sku");
    let E = null != u || null != a || null != o,
        p =
            l.length > 0
                ? ed.intl.formatToPlainString(ed.t.VuV3Td, { discountOfferAmount: l[0].discount.amount })
                : void 0;
    return (s.useEffect(() => {
        null == _ ||
            E ||
            h.current ||
            ((h.current = !0),
            (0, nI.A)({
                product: _,
                overrideTitle: p,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: nl.gs.FIAT,
            }));
    }, [_, n, t, E, p]),
    E)
        ? (0, r.jsx)(ef.dZ, { children: (0, r.jsx)(nS.A, {}) })
        : null;
}
function nC(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: a,
            giftRecipient: o,
            giftMessageError: l,
            isSendingMessage: u,
            giftingOrigin: d,
        } = (0, ni.Pv)(),
        c = (0, n_.bG)([nh.Ay], () => nh.Ay.useReducedMotion),
        _ = s.useRef(null),
        h = (0, O.t4)((e) => e.selectedSkuId),
        f = (0, n_.bG)([np.A], () => np.A.getProduct(h)),
        { confettiColors: E } = (0, nm.A)(f?.styles);
    return (
        s.useEffect(() => {
            t &&
                null != o &&
                null != h &&
                (d === eo.vQ.USER_PROFILE_WISHLIST || d === eo.vQ.DM_CHANNEL_WISHLIST) &&
                ns.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: h, recipientId: o.id });
        }, [t, o, h, d]),
        t
            ? (0, r.jsxs)("div", {
                  ref: _,
                  children: [
                      (0, r.jsx)(nT.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: i,
                          hasSentMessage: a,
                          giftRecipient: o,
                          giftMessageError: l,
                          isSendingMessage: u,
                      }),
                      !e.hideConfetti &&
                          !c &&
                          (0, r.jsx)(ng.A, {
                              confettiTarget: _.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, nA.rA)(f?.categorySkuId),
                              colors: E?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(nN, { ...e })
    );
}
var ny = n(662388),
    nv = n(993408),
    nR = n(575593),
    nO = n(452027),
    nb = n(922016),
    nL = n(778712),
    nD = n(986687),
    nP = n(999291),
    nw = n(903209),
    nM = n(674658),
    nx = n(898461),
    nU = n(203632),
    nk = n(892118),
    nG = n(536572),
    nV = n(456839),
    nF = n(219103),
    nB = n(525723),
    nj = n(780651);
function nH(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: i,
            className: a,
            previewHeaderClassName: o,
            hideProfilePreview: l,
        } = e,
        { giftRecipient: u, giftRecipientError: d } = (0, ni.Pv)(),
        c = (0, g.bG)([e3.default], () => e3.default.getCurrentUser()),
        _ = e5.Ay.canUseShopDiscounts(c),
        h = (0, nP.Ay)(u?.id),
        f = s.useRef(null),
        [E, p] = s.useState(!1),
        { product: m } = (0, nM.q)(t, !0),
        A = s.useMemo(() => (0, nv.fT)(m, _), [m, _]),
        I = (0, nB.V_)(m);
    if (null == m || 0 === m.items.length) return null;
    let [T] = m.items,
        S = (0, nG.VG)(m),
        N = null != u && u.id !== c?.id && m.type !== nR.R.BUNDLE && T.type !== nR.R.NAMEPLATE && !l;
    return (0, r.jsxs)("div", {
        className: a,
        children: [
            (0, r.jsx)("div", {
                className: eO()(nj.QU, o),
                children: (0, r.jsx)(nO.D, {
                    label: ed.intl.string(ed.t.PpoJzt),
                    children:
                        N &&
                        (0, r.jsx)(
                            nb.Y,
                            {
                                targetElementRef: f,
                                align: "center",
                                shouldShow: E,
                                onRequestClose: () => p(!1),
                                preload: () => (0, nw.A)(u.id, u.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(nD.A, {
                                        ...e,
                                        user: u,
                                        pendingAvatar: u.getAvatarURL(null, (0, nL.FT)(nL._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, nx.T)(T) ? T : null,
                                        pendingProfileEffect: (0, nU.C3)(T) ? T : null,
                                        pendingProfileFrame: (0, nk.s)(T) ? T : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, r.jsx)(t2.D, {
                                        ...i,
                                        className: nj.Nx,
                                        innerRef: f,
                                        onClick: (e) => {
                                            p((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            E ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(eM.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ed.intl.string(ed.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            h?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: eO()(nj.i1, null != d ? nj.cN : nj.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: nj.Ug,
                        children: [
                            (0, r.jsx)(nV.O, { product: m }),
                            (0, r.jsxs)("div", {
                                className: nj.JZ,
                                children: [
                                    (0, r.jsx)(eM.E, { variant: "text-md/semibold", children: S }),
                                    (0, r.jsx)(eG.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            m?.type === nR.R.BUNDLE
                                                ? null
                                                : T.type === nR.R.AVATAR_DECORATION
                                                  ? ed.intl.string(ed.t["7v0T9P"])
                                                  : T.type === nR.R.NAMEPLATE
                                                    ? ed.intl.string(ed.t.x5CoXR)
                                                    : T.type === nR.R.PROFILE_EFFECT
                                                      ? ed.intl.string(ed.t.wR5wOo)
                                                      : T.type === nR.R.PROFILE_FRAME
                                                        ? ed.intl.string(ed.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(nF.x, {
                                priceAmount: n,
                                priceCurrency: i,
                                discount: A,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != d &&
                        (0, r.jsx)("div", {
                            className: nj.Wh,
                            children: (0, r.jsx)(eM.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: d,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var nW = n(783878),
    nY = n(966327),
    nK = n(427262);
let n$ = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: s } = e,
        { giftRecipient: a, setGiftRecipient: o } = (0, ni.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: i,
              children: (0, r.jsx)(nW.Z, {
                  selectionMode: "single",
                  label: ed.intl.string(ed.t.xFn72s),
                  placeholder: ed.intl.string(ed.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: (e) => {
                      let i = s.find((t) => t.id === e);
                      null != i && (n(i, t), o(i));
                  },
                  options: s.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${nK.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(nY.A, { user: e, size: nL._3.SIZE_20 }),
                  })),
              }),
          });
};
var nz = n(735438),
    nq = n.n(nz),
    nZ = n(427358),
    nX = n(570287),
    nQ = n(994500);
function nJ() {
    let e = (0, g.yK)([nQ.A], () => nQ.A.getFriendIDs()),
        t = (0, g.yK)([nZ.A], () =>
            nZ.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: i, otherUserId: r } = e,
                        s = (0, nX.q)(r);
                    return !t && (n >= 0.1 || i >= 0.1) && s;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = s.useMemo(() => nq().uniq([...e, ...t]), [e, t]);
    return (0, g.yK)(
        [e3.default],
        () =>
            n.reduce((e, t) => {
                let n = e3.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var n0 = n(871181),
    n1 = n(318007),
    n2 = n(285719),
    n3 = n(976860),
    n6 = n(353791);
function n4(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, eH.Ay)(T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(eN.Q, {
        text: ed.intl.string(ed.t.J82mpK),
        onClick: function () {
            t(),
                (0, o.closeAllModals)(),
                null == n
                    ? (0, ny.Cz)({ analyticsLocations: i, analyticsSource: T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, n3.pX)(`${eu.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
let n5 = (0, s.createContext)({
    setCustomConfettiVisible: () => {},
    confettiCanvas: null,
    hideConfirmStepConfetti: !1,
    skuIDs: [],
});
function n7() {
    return (0, s.useContext)(n5);
}
function n8(e) {
    let { hideConfirmStepConfetti: t, confettiCanvas: n } = n7(),
        { analyticsLocations: i } = (0, eH.Ay)();
    return (0, r.jsx)(nC, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
}
let n9 = {
    [u.pn.GIFT_CUSTOMIZATION]: () => ed.intl.string(ed.t["JCFN/y"]),
    [u.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => ed.intl.string(ed.t.lDbi6H),
    [u.pn.CONFIRM]: () => "",
};
function ie(e) {
    let { step: t } = e,
        n = n9[t];
    return null == n ? null : (0, r.jsx)(nt.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
}
let it = {
    CHECKOUT_FLOW: eC.CL.COLLECTIBLES_CHECKOUT,
    CHECKOUT_STEPS: {
        [u.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                {
                    renderLeftColumn: i,
                    renderRightColumn: a,
                    ctaDisabled: o,
                    loading: l,
                } = (function (e) {
                    let { handleStepChange: t, handleClose: n } = e,
                        {
                            customGiftMessage: i = "",
                            setCustomGiftMessage: s,
                            giftRecipientError: a,
                            setGiftRecipientError: o,
                            validatingGiftRecipient: l,
                            giftRecipient: u,
                            giftingOrigin: d,
                            setValidatingGiftRecipient: c,
                        } = (0, ni.Pv)(),
                        { selectedSkuId: h, checkoutInvoicePreview: f } = (0, O.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        E = (0, nE.gU)(),
                        p = (0, g.bG)([e3.default], () => e3.default.getCurrentUser()),
                        m = nJ();
                    async function A(e, t) {
                        c(!0),
                            null != a && o(),
                            (await (0, ny.JJ)(e.id, t)) || o(ed.intl.string(ed.t["4kgVqQ"])),
                            c(!1);
                    }
                    function T() {
                        return (0, r.jsx)(n0.A, {
                            onTextChange: (e) => s?.(e),
                            pendingText: i,
                            currentText: i,
                            disableThemedBackground: !0,
                            className: n6.iX,
                            innerClassName: n6.pt,
                        });
                    }
                    return (
                        (0, I.Ay)(() => {
                            null != h &&
                                null != u &&
                                (d !== eo.vQ.DM_CHANNEL_WISHLIST &&
                                    _.default.track(eu.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: h }),
                                A(u, h));
                        }),
                        {
                            renderLeftColumn: function () {
                                return (0, r.jsx)("div", {
                                    className: n6.qL,
                                    children: (0, r.jsx)(n1.t, { isShopGift: !0 }),
                                });
                            },
                            renderRightColumn: () => {
                                let e = (0, nv.pA)({ invoicePreview: f, selectedSkuId: h, skusById: E });
                                return d === eo.vQ.USER_PROFILE_WISHLIST || d === eo.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(n2.Z, { giftRecipient: u }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(nH, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: n6.uW,
                                                      previewHeaderClassName: n6.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: n6.fi,
                                                  children: (0, r.jsx)(n4, { handleClose: n, selectedSkuId: h }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(n$, {
                                                  selectedSkuId: h,
                                                  recipients: m,
                                                  className: n6.uh,
                                                  validateSelectedGift: A,
                                              }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(nH, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: n6.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != a || null == u || u.id === p?.id || i.length > eo.Jo,
                            loading: l,
                        }
                    );
                })({ handleStepChange: t, handleClose: n }),
                u = s.useMemo(() => ({ loading: l, disabled: o }), [l, o]);
            return (0, r.jsx)(eC.Mw, {
                paymentModalStepProps: e,
                layout: eC.XZ.TWO_COLUMN,
                renderLeftColumn: i,
                renderRightColumn: a,
                primaryCTAButtonProps: u,
            });
        },
        [u.pn.REVIEW]: tZ.p,
    },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { skuId: t, children: n, ...i } = e,
                {
                    environment: a,
                    confettiCanvas: o,
                    setConfettiCanvas: l,
                    customConfettiVisible: u,
                    setCustomConfettiVisible: d,
                    customConfettiDisplayOptions: c,
                    hideConfirmStepConfetti: _,
                } = (function (e) {
                    let { skuId: t } = e,
                        n = s.useRef(new nr.OH()),
                        [i, r] = s.useState(null),
                        [a, o] = s.useState(!1),
                        l = s.useMemo(() => (0, no.AB)({ purchaseType: nl.gs.FIAT, skuId: t }), [t]);
                    return {
                        environment: n,
                        confettiCanvas: i,
                        setConfettiCanvas: r,
                        customConfettiVisible: a,
                        setCustomConfettiVisible: o,
                        customConfettiDisplayOptions: l,
                        hideConfirmStepConfetti: null != l,
                    };
                })({ skuId: t }),
                h = (function (e) {
                    let { skuId: t } = e;
                    return null != t ? [t] : [];
                })({ skuId: t }),
                f = (0, s.useMemo)(
                    () => ({ skuIDs: h, setCustomConfettiVisible: d, hideConfirmStepConfetti: _, confettiCanvas: o }),
                    [h, d, _, o],
                );
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(nc, {
                        environment: a,
                        setConfettiCanvas: l,
                        customConfettiDisplayOptions: c,
                        customConfettiVisible: u,
                    }),
                    (0, r.jsx)(N.M, {
                        ...i,
                        skuIDs: h,
                        stepConfigs: i.stepConfigs,
                        activeSubscription: null,
                        purchaseType: tu.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(n5.Provider, { value: f, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: i, setCustomConfettiVisible: r } = n7(),
                { isGift: a } = (0, ni.Pv)(),
                o = (0, nn.J)(),
                {
                    paymentModalSkuId: l,
                    paymentModalOnClose: u,
                    paymentModalOnComplete: d,
                } = (function (e) {
                    let { skuIDs: t, onClose: n, onComplete: i, setCustomConfettiVisible: r } = e,
                        a = t[0] ?? null,
                        o = s.useCallback(() => {
                            r(!0), i?.();
                        }, [i, r]);
                    return {
                        paymentModalSkuId: a,
                        paymentModalOnClose: s.useCallback(
                            (e) => {
                                r(!1), n(e), ns.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, r],
                        ),
                        paymentModalOnComplete: o,
                    };
                })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: i, setCustomConfettiVisible: r }),
                c = s.useCallback(
                    (e) => {
                        u(e), e && a && o();
                    },
                    [u, a, o],
                );
            return n({ ...t, skuId: l, onClose: c, onComplete: d, applicationId: eu.FYj });
        },
        tenantAnalyticsLocation: T.A.COLLECTIBLES_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            { isGift: n } = (0, ni.Pv)();
        return n ? (0, r.jsx)(ie, { step: t }) : null;
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(n8, { ...e }), options: nd },
};
var ii = n(263050),
    ir = n(491057),
    is = n(496142),
    ia = n(877624),
    io = n(554146),
    il = n(71804),
    iu = n(426398),
    id = n(841702),
    ic = n(367727),
    i_ = n(380619),
    ih = n(709870),
    iE = n(374200),
    ip = n(771566),
    im = n(625494),
    ig = n(45938),
    iA = n(97808),
    iI = n(912140),
    iT = n(780898),
    iS = n(344346),
    iN = n(837015),
    iC = n(258915);
function iy(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: i } = e,
        a = (0, g.bG)([e3.default], () => e3.default.getCurrentUser()),
        o = (0, g.bG)([nh.Ay], () => nh.Ay.useReducedMotion),
        { analyticsLocations: l } = (0, eH.Ay)(),
        u = nL._3.SIZE_32,
        { product: d, isFetching: c } = (0, nM.q)(t),
        [_, h] = s.useState(!1),
        f = d?.items[0],
        {
            isNameplateReward: E,
            nameplateData: p,
            rewardAvatarDecorationSrc: m,
        } = s.useMemo(
            () =>
                null == f
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, iN.F)(f)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: f.skuId,
                                src: f.asset,
                                palette: (0, iT.H6)(f.palette ?? "sky"),
                                imgAlt: f.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, nx.T)(f)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, iI.A)({
                                  legacyAssetId: f.asset,
                                  skuId: f.skuId,
                                  size: u,
                                  canAnimate: !o,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [f, u, o],
        );
    return (0, r.jsx)(ef.UX, {
        children: (0, r.jsx)(tL.j, {
            children: (0, r.jsxs)("div", {
                className: iC.W,
                children: [
                    E && null != p
                        ? (0, r.jsx)("div", {
                              className: iC.D,
                              onMouseEnter: () => h(!0),
                              onMouseLeave: () => h(!1),
                              children: (0, r.jsx)(iS.a, {
                                  user: a,
                                  nameplate: null,
                                  nameplateData: p,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: _,
                              }),
                          })
                        : (0, r.jsx)(iA.Js, {
                              "aria-label": a?.username,
                              size: u,
                              src: a?.getAvatarURL(void 0, (0, nL.FT)(u), !o),
                              avatarDecoration: m,
                          }),
                    (0, r.jsx)(eS.$, {
                        variant: "primary",
                        text: ed.intl.string(ed.t.kMYVwv),
                        loading: c,
                        onClick: () => {
                            null != d &&
                                (n(),
                                (0, nI.A)({
                                    product: d,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: l,
                                    purchaseType: nl.gs.PROMOTIONAL,
                                    onCloseCallback: i,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var iv = n(49999);
function iR(e) {
    let t,
        {
            handleClose: i,
            planGroup: a,
            onSubscriptionConfirmation: l,
            renderPurchaseConfirmation: u,
            postSuccessGuild: d,
            followupSKUInfo: c,
            continueSessionToInitialStep: h,
        } = e,
        { paymentSources: f } = (0, iu.jm)(),
        {
            activeSubscription: E,
            selectedSkuId: p,
            updatedSubscription: m,
            paymentSourceId: A,
            isPremiumGroupPurchase: T,
            startingPremiumSubscriptionPlanId: S,
            startingFractionalPremiumEndsAt: N,
            checkoutInvoicePreview: C,
        } = (0, O.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
        })),
        v = (0, y.A)(),
        R = (0, P.bB)(),
        {
            isGift: b,
            giftRecipient: L,
            giftCode: D,
            hasSentMessage: w,
            isSendingMessage: M,
            sendGiftMessage: x,
            claimableRewards: U,
            selectedGiftingPromotionReward: k,
            openGiftingBadgePostPurchaseModal: G,
        } = (0, ni.Pv)(),
        { confirmationFooter: V } = (0, ir.cG)(),
        F = (0, i_.px)(v, b, U),
        B = (0, i_.Mq)(v),
        j = (0, id.Mv)(k, !1),
        H = (0, g.bG)([iE.A], () => iE.A.getGiftPromotion()?.id),
        W = (0, g.bG)([iE.A], () => {
            let e = iE.A.getMarketingComponentByType(ia.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        Y = (0, eE.g)(f, A),
        K = b && null != k && null != j && B,
        $ = { selectedPlan: v, selectedSkuId: p, step: R };
    if (null == v) throw new il.v({ message: "Expected plan to be selected", extraSentryInformation: $ });
    if (null == p) throw new il.v({ message: "Expected selectedSkuId", extraSentryInformation: $ });
    if (null == R) throw new il.v({ message: "Step should be set", extraSentryInformation: $ });
    let z = s.useCallback(() => {
        i(), l?.();
    }, [i, l]);
    (0, I.Ay)(() => {
        T &&
            _.default.track(eu.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != m,
                has_any_premium_group: m?.hasAnyPremiumGroup ?? !1,
                subscription_id: m?.id,
            });
    });
    let q = null != C ? C.orbsReward : null;
    s.useEffect(() => {
        function e() {
            if (T)
                if (null != m && m.hasAnyPremiumGroup) {
                    _.default.track(eu.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: m.id });
                    let e = (0, nz.uniqueId)("premium-group-purchase-flow-modal");
                    (0, o.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("17494"),
                                n.e("44616"),
                                n.e("96680"),
                                n.e("85579"),
                            ]).then(n.bind(n, 785606));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    ...t,
                                    subscription: m,
                                    isFromPurchaseFlow: !0,
                                    onClose: async () => {
                                        im._.dispatch(eu.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await t.onClose();
                                    },
                                });
                        },
                        {
                            onCloseRequest: () => {
                                im._.dispatch(eu.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, o.closeModal)(e);
                            },
                            modalKey: e,
                        },
                    );
                } else
                    _.default.track(eu.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                        has_updated_subscription: null != m,
                        has_any_premium_group: m?.hasAnyPremiumGroup ?? !1,
                    }),
                        im._.dispatch(eu.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            else null != q && q > 0 && (0, ih.$)({ orbsAmount: q });
        }
        return (
            im._.subscribe(eu.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                im._.unsubscribe(eu.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [T, m, q]),
        s.useEffect(() => {
            !b || null == L || null == D || w || M || (0, ig.Ik)(L) || x({ onSubscriptionConfirmation: l });
        }, [x, b, L, D, w, M, l]),
        s.useEffect(() => {
            F &&
                null != W &&
                null != H &&
                (0, ic.qr)(io.M.GIFTING_PROMOTION_REMINDER, H, { dismissAction: iv.i.INDIRECT_ACTION });
        }, [W, H, F]);
    let Z = null != h ? ip.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != u) t = u(v, z, m);
    else if (b) t = (0, r.jsx)(ip.fw, { planId: v.id, onClose: z });
    else {
        let e =
            S === v.id
                ? { postSuccessGuild: d }
                : {
                      followupSKUInfo: c,
                      startingPremiumSubscriptionPlanId: S,
                      isDowngrade: null != E && (0, ea.vT)(E, v.id, a),
                  };
        t = (0, r.jsx)(ip.Ay, {
            planId: v.id,
            onClose: z,
            paymentSourceType: Y,
            hideClose: null != V,
            startingFractionalPremiumEndsAt: N,
            customCTAType: Z,
            ...e,
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(ef.dZ, { children: [(0, r.jsx)(nS.A, {}), t] }),
            null != V && V,
            K && null != k && (0, r.jsx)(iy, { rewardSkuId: k, onClose: z, onRewardModalClose: G }),
        ],
    });
}
let [iO, ib] = (0, Q.A)(),
    iL = {
        CHECKOUT_FLOW: eC.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [u.pn.REVIEW]: is.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: i,
                    } = e,
                    a = s.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(iO.Provider, { value: a, children: (0, r.jsx)(ir.Qt, { children: i }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: s } = ib();
            return (0, r.jsx)(ii.Y, { onClose: t, listing: s, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(iR, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var iD = n(73825),
    iP = n(960851),
    iw = n(607399),
    iM = n(795791),
    ix = n(344159),
    iU = n(561794),
    ik = n(811656),
    iG = n(187322),
    iV = n(890856),
    iF = n(947641),
    iB = n(713517),
    ij = n(929283),
    iH = n(761365),
    iW = n(267861);
function iY(e) {
    let t,
        n,
        { skuId: i, user: a, claimed: o, onSelect: l, selectedSkuId: u } = e,
        [d, c] = s.useState(null),
        _ = s.useCallback((e) => {
            c(e);
        }, []),
        h = s.useMemo(() => ({ current: d }), [d]),
        { isHoveringOrFocusing: f } = (0, iB.A)(h),
        E = !o && f,
        { product: p } = (0, nM.q)(i);
    if (null == p) return null;
    let m = p.items[0];
    return null == m
        ? null
        : ((0, nx.T)(m)
              ? ((n = nR.R.AVATAR_DECORATION),
                (t = (0, r.jsx)(ij.i, { item: m, user: a, isHighlighted: E, avatarSize: nL._3.SIZE_96 })))
              : (0, iN.F)(m) &&
                ((n = nR.R.NAMEPLATE),
                (t = (0, r.jsx)(iH.A, { nameplate: m, user: a, isHighlighted: E, size: "small" }))),
          (0, r.jsx)(iG.vN, {
              children: (0, r.jsxs)(iV.s, {
                  ref: _,
                  "aria-label": p.name ?? "",
                  onClick: function () {
                      null == i || null == l || o || l(i);
                  },
                  className: eO()(iW._x, { [iW.Vp]: !o, [iW.mr]: E, [iW.md]: u === i }),
                  children: [
                      (0, r.jsx)("div", {
                          className: eO()(iW.VH, {
                              [iW._Q]: n === nR.R.AVATAR_DECORATION,
                              [iW.M4]: n === nR.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: eO()(iW.i1, { [iW.Sf]: o }), children: t }),
                                            o &&
                                                (0, r.jsx)(iF.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: eb.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: iW.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, r.jsxs)("div", {
                          className: iW.tZ,
                          children: [
                              (0, r.jsx)(eG.D, { variant: "heading-md/extrabold", children: p.name }),
                              (0, r.jsx)(eM.E, {
                                  variant: "text-sm/normal",
                                  children: o ? ed.intl.string(ed.t["6cfuDj"]) : ed.intl.string(ed.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
}
var iK = n(696208),
    i$ = n(683433);
function iz(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: a,
            showBackButton: o,
            planOptions: l,
            shouldRenderUpdatedPaymentModal: d = !1,
            isTrial: c,
            isNextDisabled: _ = !1,
        } = e,
        { paymentSources: h } = (0, iu.jm)(),
        f = (0, y.A)(),
        { isGift: E, claimableRewards: p } = (0, ni.Pv)();
    i = i ?? h;
    let {
            variant: m,
            text: A,
            onClick: I,
            disabled: T,
        } = (function (e) {
            let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: i,
                    claimableRewards: r,
                    paymentSources: s,
                    shouldRenderUpdatedPaymentModal: a,
                    isTrial: o,
                    isNextDisabled: l = !1,
                } = e,
                d = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
                c = (0, y.A)(),
                _ = (0, P.bB)(),
                { hasEntitlements: h } = (0, ix.X)(n, i),
                f = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (h && !o);
            var E = a ? ed.intl.string(ed.t.PDTjLN) : ed.intl.string(ed.t.XqMe3N),
                p = u.pn.ADD_PAYMENT_STEPS;
            return (
                f && (p = u.pn.REVIEW),
                (0, i_.px)(c, i, r) && _ !== u.pn.SELECT_FREE_SKU && (p = u.pn.SELECT_FREE_SKU),
                { variant: "primary", text: E, onClick: () => t(p), disabled: l }
            );
        })({
            onStepChange: t,
            selectedPlanId: (n = n ?? f?.id),
            isGift: E,
            claimableRewards: p,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: d,
            isTrial: c,
            isNextDisabled: _,
        }),
        S = s.useMemo(
            () =>
                null != n && l.includes(n)
                    ? [{ variant: m, text: A, onClick: I, disabled: T }]
                    : [{ variant: "primary", text: ed.intl.string(ed.t.XqMe3N), disabled: !0 }],
            [m, A, I, T, n, l],
        );
    return (0, r.jsx)(iK.H, { leading: o && null != a ? (0, r.jsx)(i$.A, { onClick: a }) : void 0, actions: S });
}
var iq = n(328232);
function iZ(e) {
    let { handleStepChange: t } = e,
        n = (0, O.t4)((e) => e.selectedSkuId),
        i = (0, y.A)(),
        a = (0, P.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: l, claimableRewards: d } = (0, ni.Pv)(),
        c = (0, g.bG)([e3.default], () => e3.default.getCurrentUser()),
        _ = (0, g.yK)([iE.A], () => iE.A.getGiftPromotionRewardSkuIds()),
        h = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(d, l),
        [f, E] = s.useState(h),
        [p, m] = s.useState(!1);
    s.useEffect(() => {
        p || null != l || null == h || (o(h), E(h));
    }, [h, p, l, o]);
    let A = { selectedPlan: i, selectedSkuId: n, step: a };
    if (null == i) throw new il.v({ message: "Expected plan to be selected", extraSentryInformation: A });
    if (null == n) throw new il.v({ message: "Expected selectedSkuId", extraSentryInformation: A });
    if (null == a) throw new il.v({ message: "Step should be set", extraSentryInformation: A });
    let I = s.useMemo(() => null != f && (d ?? []).includes(f), [f, d]),
        T = s.useMemo(() => 0 === _.length || null == f || !I, [_, f, I]);
    function S(e) {
        o(e), E(e), m(!0);
    }
    s.useEffect(() => {
        if (0 === _.length) {
            E(void 0), o(void 0);
            return;
        }
        (null != f && I && _.includes(f)) || null == f || (E(void 0), o(void 0));
    }, [_, I, f, o]);
    let N = _.map((e) =>
            (0, r.jsx)(
                iY,
                { skuId: e, claimed: null != d && !d.includes(e), user: c, onSelect: S, selectedSkuId: f },
                e,
            ),
        ),
        C = (0, r.jsx)(ef.UX, {
            children: (0, r.jsx)(iz, {
                onStepChange: t,
                onBackClick: () => t(u.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [i.id],
                selectedPlanId: i.id,
                isNextDisabled: T,
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nt.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: ed.intl.string(ed.t.OEtqpm),
                subtitle: ed.intl.string(ed.t.h2nMp0),
            }),
            (0, r.jsx)(H.c, {
                children: (0, r.jsx)(tx.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, r.jsx)("div", { className: iq.Dq, children: N }),
                }),
            }),
            C,
        ],
    });
}
var iX = n(800471),
    iQ = n(38405);
let iJ = function (e, t, n, i, r) {
    let a = (0, s.useRef)(!1),
        o = { componentName: e, sentryErrorOptions: r, stateToCapture: i },
        l = (0, s.useRef)(o);
    (0, s.useEffect)(() => {
        l.current = o;
    }),
        (0, s.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: i, stateToCapture: r } = l.current;
            if (t && !a.current) {
                a.current = !0;
                let t = setTimeout(() => {
                    let t = Error(`${e} is taking too long to load.`);
                    iQ.A.setExtra({ loadingState: r, loadingTimeSeconds: n }),
                        iQ.A.captureException(t, { ...i, tags: { ...i?.tags } });
                }, 1e3 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
var i0 = n(396533),
    i1 = n(463376),
    i2 = n(699595),
    i3 = n(442123),
    i6 = n(67948),
    i4 = n(807098),
    i5 = n(298305),
    i7 = n(387745);
function i8() {
    let e = (0, g.bG)([iE.A], () => {
            let e = iE.A.getMarketingComponentByType(ia.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, ni.Pv)(),
        n = (0, i4.T)(e?.asset),
        i = (0, i4.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, i_.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, i_.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let l = (0, i_.x)(o, a),
        u = e?.assetVariant === i6.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, r.jsxs)("div", {
              className: i7.qD,
              style: l,
              children: [
                  (0, r.jsx)("div", {
                      className: eO()([i7.my], { [i7.R_]: u }),
                      children: (0, r.jsx)(i5.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: u ? nL._3.SIZE_72 : nL._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, r.jsx)(eM.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: ed.intl.string(ed.t.Abiuci),
                  }),
              ],
          });
}
var i9 = n(35587),
    re = n(410516),
    rt = n(462887),
    rn = n(736653),
    ri = n(854627),
    rr = n(236834);
let rs = (e) => {
        let { className: t, width: n = 83, height: i = 45 } = e;
        return (0, r.jsxs)("svg", {
            width: n,
            height: i,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, r.jsxs)("g", {
                    opacity: "0.6",
                    children: [
                        (0, r.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1558_55666)",
                        }),
                        (0, r.jsxs)("g", {
                            clipPath: "url(#clip0_1558_55666)",
                            children: [
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1558_55666)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1558_55666)",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1558_55666)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1558_55666)",
                            fillOpacity: "0.9",
                        }),
                        (0, r.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1558_55666)",
                        }),
                    ],
                }),
                (0, r.jsxs)("defs", {
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "paint0_linear_1558_55666",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint1_linear_1558_55666",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint2_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint3_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint4_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint5_linear_1558_55666",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint6_linear_1558_55666",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint7_linear_1558_55666",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint8_linear_1558_55666",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint9_linear_1558_55666",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint10_linear_1558_55666",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint11_linear_1558_55666",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint12_linear_1558_55666",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsx)("clipPath", {
                            id: "clip0_1558_55666",
                            children: (0, r.jsx)("rect", {
                                width: "16.3534",
                                height: "16.3534",
                                fill: "white",
                                transform: "translate(39.6143 14.9869)",
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    ra = (e) => {
        let { className: t, width: n = 83, height: i = 45 } = e;
        return (0, r.jsxs)("svg", {
            width: n,
            height: i,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, r.jsxs)("g", {
                    opacity: "0.4",
                    children: [
                        (0, r.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1521_51082)",
                        }),
                        (0, r.jsxs)("g", {
                            clipPath: "url(#clip0_1521_51082)",
                            children: [
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1521_51082)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1521_51082)",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1521_51082)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1521_51082)",
                            fillOpacity: "0.9",
                        }),
                        (0, r.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1521_51082)",
                        }),
                    ],
                }),
                (0, r.jsxs)("defs", {
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "paint0_linear_1521_51082",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint1_linear_1521_51082",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint2_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint3_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint4_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint5_linear_1521_51082",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint6_linear_1521_51082",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint7_linear_1521_51082",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint8_linear_1521_51082",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint9_linear_1521_51082",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint10_linear_1521_51082",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint11_linear_1521_51082",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint12_linear_1521_51082",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsx)("clipPath", {
                            id: "clip0_1521_51082",
                            children: (0, r.jsx)("rect", {
                                width: "16.3534",
                                height: "16.3534",
                                fill: "white",
                                transform: "translate(39.6143 14.9869)",
                            }),
                        }),
                    ],
                }),
            ],
        });
    };
var ro = n(577454);
let rl = function (e) {
    let { className: t } = e,
        n = (0, rr.A)(),
        { avatarSrc: i, eventHandlers: s } = (0, ri.A)({ userId: n?.id, size: nL._3.SIZE_32, animateOnHover: !0 }),
        a = (0, rn.DP)(),
        o = (0, rt.q)(a),
        l = nK.Ay.getName(n);
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: eO()(ro.$6, t),
              children: [
                  (0, r.jsx)("div", {
                      className: ro.H,
                      children: (0, r.jsx)(iA.eu, { src: i, "aria-label": n.username, size: nL._3.SIZE_32, ...s }),
                  }),
                  (0, r.jsx)(eM.E, {
                      variant: "text-xs/bold",
                      className: ro.U_,
                      children: ed.intl.format(ed.t.oxhCOl, { userName: l }),
                  }),
                  (0, r.jsx)(o ? rs : ra, { className: ro.q3 }),
              ],
          });
};
var ru = n(361597),
    rd = n(69494),
    rc = n(622631),
    r_ = n(597770),
    rh = n(102741),
    rf = n(296589);
function rE(e) {
    let { giftMessage: t = ed.intl.string(ed.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, ni.Pv)();
    return !n || (0, ig.Ik)(i)
        ? null
        : (0, r.jsx)(rh.A, {
              className: rf.z,
              iconSize: rh.A.Sizes.SMALL,
              icon: r_.o,
              color: null == t ? rh.A.Colors.PRIMARY : rh.A.Colors.SECONDARY,
              children: t,
          });
}
var rp = n(577381),
    rm = n(249872);
function rg(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: a, trialId: o, handleClose: l } = e,
        {
            selectedSkuId: d,
            priceOptions: c,
            activeSubscription: _,
            defaultPlanId: h,
        } = (0, O.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        {
            isPremium: f,
            isEligibleForTrial: E,
            isEligibleForDiscount: p,
            discountOffer: m,
            userTrialOffer: g,
        } = (0, i1.i)(),
        I = (0, re.YJ)(m),
        T = (0, y.A)(),
        S = (0, P.bB)(),
        { isGift: N, giftRecipient: C, giftMessage: v, claimableRewards: R } = (0, ni.Pv)(),
        b = (0, i_.Mq)(T),
        L = (0, n_.bG)([iE.A], () => {
            let e = iE.A.getMarketingComponentByType(ia.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        D = N && b && null != R && R.length > 0 && L,
        w = (E || p) ?? !1,
        M = (0, i9.Wi)(eo.ZC),
        x = w || M,
        { monthlyDefaultSelected: U } = i3.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${N ? "" : " - DO NOT USE"}`,
        }),
        k = (0, A.A)(U),
        G = s.useMemo(() => {
            let e = h;
            return N && k && null != d && (e = eo.En[d]), (0, e5.Tm)({ skuId: d, isPremium: f, defaultPlanId: e });
        }, [d, f, h, N, k]),
        V = p && null != I && G.includes(I) ? I : G[0],
        F = (0, n_.bG)([es.A], () => es.A.get(V)),
        B = [{ planId: F?.id, quantity: 1 }],
        [j, H] = s.useState(w),
        [W, Y] = (0, e$.YV)({
            items: B,
            renewal: !1,
            preventFetch: !x,
            applyEntitlements: !0,
            trialId: o,
            paymentSourceId: c.paymentSourceId,
            currency: c.currency,
        });
    s.useEffect(() => {
        w && H(W?.subscriptionPeriodEnd == null);
    }, [W, w]),
        iJ(
            "Payment Modal Plan Select Step",
            j,
            5,
            { proratedInvoicePreview: W, proratedInvoiceError: Y, isEligibleForOffer: w },
            { tags: { app_context: "billing" } },
        );
    let K = Y?.message ?? ed.intl.string(ed.t.R0RpRX),
        $ = w && null == Y,
        z = w && null != Y,
        q = $ && null == _ && W?.subscriptionPeriodEnd == null;
    (0, i2.W)({ priceOptions: c, trialId: o, discountInvoicePreview: W });
    let Z = (0, rp.i)({ planSkuId: F?.skuId, invoice: W }),
        { ref: X, onTransitionEnd: Q } = (0, i0.A)({ isExpanded: null != Z, minHeightOverride: 0 }),
        J = s.useMemo(
            () =>
                N || F?.skuId !== eo.pe.TIER_2 || g?.referrer_id == null
                    ? (0, r.jsx)("div", { ref: X, onTransitionEnd: Q, style: { overflow: "hidden" }, children: Z })
                    : (0, r.jsx)(rl, { className: rm.ZB }),
            [Z, N, F?.skuId, g?.referrer_id, X, Q],
        ),
        ee = s.useMemo(
            () => ({
                planOptions: G,
                selectedPlanId: T?.id,
                planGroup: i,
                subscriptionPeriodEnd: W?.subscriptionPeriodEnd,
                useCompactGiftComponents: D,
                handleClose: l,
            }),
            [G, T?.id, i, W?.subscriptionPeriodEnd, D, l],
        );
    if (q) return (0, r.jsx)(tt.E, { className: rm.QW });
    eA()(null != S, "Step should be set"), eA()(G.length > 0, "Premium plan options should be set");
    let et = N
        ? (0, r.jsx)(ru.$p, { ...ee })
        : (0, r.jsx)(rc.X, { ...ee, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(rE, { giftMessage: v }),
            !(N && (0, ig.Ik)(C)) && (0, r.jsx)(rd.A, { isEligibleForTrial: E }),
            (0, r.jsxs)(ef.dZ, {
                children: [
                    J,
                    (0, r.jsx)(nS.A, { className: rm.tg }),
                    z ? (0, r.jsx)(eI.w, { type: "critical", children: K }) : et,
                    $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: eO()(rm.IM, rm.Go) }),
                                (0, r.jsx)(eM.E, {
                                    variant: "text-xs/normal",
                                    children: ed.intl.format(ed.t.BHtnqA, {
                                        link: e6.A.getArticleURL(eu.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(ef.UX, {
                children: [
                    D && (0, r.jsx)(i8, {}),
                    (0, r.jsx)(iz, {
                        onStepChange: t,
                        onBackClick: () => t(u.pn.SKU_SELECT),
                        showBackButton: null == n && null == a,
                        planOptions: G,
                        shouldRenderUpdatedPaymentModal: $,
                        isTrial: E,
                    }),
                ],
            }),
        ],
    });
}
var rA = n(862990),
    rI = n(672525);
function rT(e) {
    let { isGift: t, skuId: n } = e,
        i = (0, O.t4)((e) => e.referralTrialOfferId ?? void 0),
        r = (0, eZ.V)(i);
    return !t && null != r && null != n && eo.TP[r.trial_id].skus.includes(n);
}
var rS = n(634378);
function rN(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: i,
            priceOptions: s,
            activeSubscription: a,
            defaultPlanId: o,
            startedPaymentFlowWithPaymentSources: l,
            referralTrialOfferId: d,
        } = (0, O.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { hasPaymentSources: c } = (0, iu.jm)(),
        { isGift: _, claimableRewards: h } = (0, ni.Pv)(),
        f = _ && null != h && h.length > 0,
        E = (0, eZ.V)(d);
    return (0, r.jsx)(rC, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: i,
                    handleStepChange: r,
                    isGift: s,
                    userTrialOffer: a,
                    setSelectedPlanId: o,
                    startedPaymentFlowWithPaymentSources: l,
                    defaultPlanId: d,
                } = e;
                i(n);
                let c = u.pn.PLAN_SELECT,
                    _ = (0, e5.aZ)(t);
                (_ !== eo.pe.TIER_1 && _ !== eo.pe.TIER_2) || n !== eo.pe.TIER_0 || s || (c = u.pn.WHAT_YOU_LOSE);
                let h = (function (e) {
                        let { userTrialOffer: t, isGift: n, skuId: i } = e;
                        return !n && null != t && null != i && eo.TP[t.trial_id].skus.includes(i);
                    })({ userTrialOffer: a, isGift: s, skuId: n }),
                    f = (0, iX.vT)({
                        isTrial: h,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: l,
                    });
                c !== u.pn.WHAT_YOU_LOSE && f && ((c = u.pn.REVIEW), o((0, iX.xT)(n, t, d))),
                    r(c, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: _,
                userTrialOffer: E,
                startedPaymentFlowWithPaymentSources: l,
                setSelectedPlanId: i,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: i, setSelectedSkuId: r } = e;
                r((0, e5.mH)(eo.pe.TIER_2)),
                    t(eo.gD.PREMIUM_GROUP_MONTH),
                    n(i ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: eo.pe.TIER_2 } });
            })({ setSelectedPlanId: i, handleStepChange: t, hasPaymentSources: c, setSelectedSkuId: n }),
        isGift: _,
        priceOptions: s,
        showPromotionalGiftBanner: f,
    });
}
function rC(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: s, onSelectPremiumGroup: a } = e,
        o = (0, rA.FY)({ isGift: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nt.rQ, { titleTextVariant: "heading-lg/semibold", title: ed.intl.string(ed.t["r+SebU"]) }),
            o
                ? (0, r.jsx)(H.c, {
                      children: (0, r.jsx)("div", {
                          className: rS.eE,
                          children: (0, r.jsx)(rI.yS, {
                              onSelectSku: (e) => t((0, e5.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  })
                : (0, r.jsx)(H.c, {
                      children: (0, r.jsx)("div", {
                          className: rS.a2,
                          children: (0, r.jsx)(rI.Ay, {
                              onSelectSku: (e) => t((0, e5.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  }),
        ],
    });
}
var ry = n(825484),
    rv = n(137728);
function rR(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: s,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSources: o,
        } = (0, O.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: l } = (0, ni.Pv)(),
        d = null != a ? (0, e5.EL)(a) : null,
        c = null != d ? (0, e5.RH)(d.planId) : null,
        _ = null != d ? (0, e5.m6)(d.planId) : null,
        h = (0, iX.vT)({ isTrial: !1, isGift: l, selectedSkuId: i, startedPaymentFlowWithPaymentSources: o });
    return (
        eA()(null != _, "Expected premium type"),
        (0, r.jsx)(rv.A, {
            premiumType: _,
            titleText: ed.intl.string(ed.t["7VcWW0"]),
            subtitleText: ed.intl.format(ed.t.Qk34Ik, { subscriptionName: c }),
            footer: (0, r.jsxs)(ry.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(eS.$, {
                        variant: "primary",
                        text: ed.intl.string(ed.t["3PatSz"]),
                        onClick: () => {
                            h ? (s((0, iX.xT)(i, a)), t(u.pn.REVIEW)) : t(u.pn.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(eS.$, { variant: "secondary", onClick: n, text: ed.intl.string(ed.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
var rO = n(242874),
    rb = n(573359),
    rL = n(165191),
    rD = n(237412),
    rP = n(865543);
let rw = [
        {
            key: u.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(rN, { ...e }),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                modalSizeGetter: (e) => {
                    let { canCurrentlyPurchasePremiumGroup: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: u.pn.WHAT_YOU_LOSE,
            renderStep: (e) => (0, r.jsx)(rR, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: u.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(rg, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, iX.lp)(e) ? null : ed.intl.string(ed.t["r+SebU"])),
                sectionHeaderText: () => ed.intl.string(ed.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: u.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(iZ, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    rM = {
        CustomHeaderComponent: function (e) {
            let { onClose: t } = e,
                { selectedSkuId: n, purchaseState: i } = (0, O.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                a = (0, g.bG)([rb.A], () => rb.A.isDisplayingWowMomentConfirmation),
                {
                    isPremium: o,
                    isPremiumGroupPurchase: l,
                    isEligibleForTrial: d,
                    isEligibleForDiscount: c,
                } = (0, i1.i)(),
                _ = (0, nE.S3)(),
                h = (0, P.bB)(),
                { isGift: f, selectedGiftStyle: E, giftRecipient: p } = (0, ni.Pv)(),
                m = _?.productLine === eu.EZt.COLLECTIBLES,
                A = _?.productLine === eu.EZt.SOCIAL_LAYER_GAME_ITEM,
                I = f && (0, ig.Ik)(p) && h === u.pn.CONFIRM && null != E && !m && !A,
                T = [u.pn.SKU_SELECT, u.pn.SELECT_FREE_SKU],
                S = null != h && !T.includes(h) && null != n,
                N = s.useCallback(() => t(!1), [t]);
            return s.useMemo(() => {
                if (null == h) return;
                let e = null;
                return (
                    I
                        ? (e = (0, r.jsxs)("div", {
                              className: rP.kL,
                              children: [
                                  (0, r.jsx)("div", {
                                      "aria-hidden": !0,
                                      style: { display: "contents" },
                                      children: (0, r.jsx)(rL.A, {
                                          defaultAnimationState: rO.oA.LOOP,
                                          giftStyle: E,
                                          className: rP.qq,
                                      }),
                                  }),
                                  (0, r.jsx)(tM.s_, { onClick: N, className: rP.b, "data-migration-pending": !0 }),
                              ],
                          }))
                        : S &&
                          (eA()(n in eo.WN, `invalid sku id: ${n}`),
                          (e = (0, r.jsx)(rD.A, {
                              currentStep: h ?? void 0,
                              purchaseState: i,
                              premiumType: eo.WN[n],
                              onClose: N,
                              showTrialBadge: d,
                              showDiscountBadge: c,
                              isGift: f,
                              giftRecipient: p,
                              isEligibleForTrial: d,
                              enablePremiumBrandRefresh: o,
                              isDisplayingWowMomentConfirmation: a,
                              isPremiumGroupPurchase: l,
                          }))),
                    e
                );
            }, [E, N, i, n, h, d, c, I, S, f, p, o, a, l]);
        },
        CHECKOUT_FLOW: S.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: rw,
        CHECKOUT_STEPS: { [u.pn.REVIEW]: is.E },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            confirmationFooter: t,
                            defaultPlanId: n,
                            referralCode: i,
                            referralTrialOfferId: a,
                            subscriptionTier: o,
                            subscription: l,
                        },
                        stepConfigs: d,
                        loadId: c,
                        giftContextProps: _ = { isGift: !1, giftRecipient: null },
                        renderModalProps: h,
                        children: f,
                    } = e,
                    E = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
                    p = (0, iP.cg)() ? eo.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: m, giftRecipient: A } = _;
                if (null != o && !Object.values(eo.pe).includes(o))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, iU.tA)({ giftRecipient: A, isGift: m ?? !1 }),
                    T = s.useMemo(
                        () =>
                            I
                                ? d.map((e) =>
                                      e.key === u.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : d,
                        [d, I],
                    ),
                    C = null != l ? l : E,
                    y = !m && null != C && C.isPurchasedExternally && null != C.paymentGateway;
                (0, ix.s)(C, () => h.onClose(), m ?? !1);
                let v = s.useMemo(() => [...eo.oz], []);
                return y
                    ? null
                    : (0, r.jsx)(N.M, {
                          loadId: c,
                          activeSubscription: C,
                          stepConfigs: T,
                          skuIDs: v,
                          isGift: m,
                          defaultPlanId: p ?? n,
                          referralCode: i,
                          referralTrialOfferId: a,
                          unifiedCheckoutFlow: S.C.PREMIUM_CHECKOUT,
                          children: (0, r.jsx)(ir.Qt, { confirmationFooter: t, children: f }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { subscriptionTier: i },
                    } = e,
                    { onClose: a, renderPurchaseConfirmation: o, continueSessionToInitialStep: l } = t;
                s.useEffect(() => {
                    es.A.isLoadedForPremiumSKUs() || ns.h.wait(() => (0, iD.zS)());
                }, []);
                let { selectedSkuId: d, purchaseState: c } = (0, O.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    _ = (0, P.bB)(),
                    {
                        isGift: h,
                        selectedGiftingPromotionReward: f,
                        openGiftingBadgePostPurchaseModal: E,
                    } = (0, ni.Pv)(),
                    p = s.useMemo(() => (h ? [u.pn.PLAN_SELECT] : []), [h]),
                    m = s.useCallback(
                        (e, t) => {
                            a(e, t), e && h && null == f && E();
                        },
                        [a, h, f, E],
                    ),
                    g = !h && d === eo.pe.TIER_2 && !iw.Ct && !iw.KY && null == (0, iM.uM)(),
                    A = c === D.h.PURCHASING;
                return (0, r.jsx)(ik.A, {
                    isConfirmationStep: _ === u.pn.CONFIRM && null == l && null == o,
                    isEligibleForWowMoment: g,
                    shouldPrefetchWowMoment: A,
                    children: n({
                        ...t,
                        onClose: m,
                        analyticsSubscriptionType: eu.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: eo.LE,
                        subscriptionTier: i,
                        skipUnifiedHeaderForSteps: p,
                    }),
                });
            },
            tenantAnalyticsLocation: T.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(iR, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var rx = n(143582),
    rU = n(241524),
    rk = n(19311),
    rG = n(4126);
let rV = "(max-width: 485px)";
var rF = n(702361),
    rB = n(938430);
function rj(e) {
    let { step: t, onClose: n } = e,
        i = (0, rU.A)("(max-height: 450px)");
    return t === u.pn.CONFIRM || t === u.pn.BENEFITS
        ? (0, r.jsx)("div", {})
        : (0, r.jsxs)("div", {
              className: eO()(rF.N1, t5.G),
              children: [
                  !i &&
                      (0, r.jsx)("div", {
                          className: rF.oZ,
                          "aria-hidden": "true",
                          children: (0, r.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: rF.F0,
                          }),
                      }),
                  (0, r.jsx)(t2.D, {
                      className: rF.G3,
                      onClick: () => n(),
                      "aria-label": ed.intl.string(ed.t.cpT0Cq),
                      children: (0, r.jsx)(t3.P, { size: "md", color: "currentColor", className: rF.ut }),
                  }),
              ],
          });
}
function rH(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: i, application: s, title: a, subtitle: o, description: l } = e;
    return null == s
        ? null
        : (0, r.jsx)("div", {
              className: rF.RP,
              children: (0, r.jsxs)(rG.$K, {
                  children: [
                      (0, r.jsx)(rG.KF, { application: s, asset: t }),
                      (0, r.jsx)(rG.kj, { children: a }),
                      (0, r.jsx)(rG.ri, {}),
                      (0, r.jsx)(rG.Mx, { title: o, description: l }),
                      (0, r.jsx)(rG.iH, { applicationId: s.id, storeListingBenefits: n, skuBenefits: i }),
                  ],
              }),
          });
}
function rW(e) {
    let { tierName: t, onConfirm: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: rF.NV,
        children: [
            (0, r.jsx)("img", { src: rB, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(eG.D, {
                className: rF.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: ed.intl.format(ed.t.wLFT6z, { tier: t }),
            }),
            (0, r.jsx)(eM.E, {
                className: rF.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: ed.intl.format(ed.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsx)(ef.UX, {
                children: (0, r.jsx)(rk.Ay, {
                    onPrimary: n,
                    primaryCTA: rk.ti.CONTINUE,
                    primaryText: ed.intl.string(ed.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var rY = n(967198);
let [rK, r$] = (0, Q.A)();
function rz(e) {
    let { guildId: t, showBenefitsFirst: n, children: i } = e,
        [a, o] = s.useState(null),
        l = s.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: a,
                setSubscriptionMetadataRequest: o,
            }),
            [t, n, a],
        );
    return (0, r.jsx)(rK.Provider, { value: l, children: i });
}
n(938796);
var rq = n(266060),
    rZ = n(163437),
    rX = n(701273),
    rQ = n(425013);
function rJ(e) {
    let { onConfirm: t, onCancel: n, title: i, subtitle: s, confirmCta: a, showOpenDiscord: o = !0 } = e;
    return (0, r.jsxs)("div", {
        className: rQ.RP,
        children: [
            (0, r.jsx)(eG.D, { className: rQ.RS, variant: "heading-lg/extrabold", children: i }),
            null != s
                ? (0, r.jsx)(eM.E, { className: rQ.sT, variant: "text-sm/normal", color: "text-default", children: s })
                : null,
            (0, r.jsxs)("div", {
                className: rQ.UD,
                children: [
                    o &&
                        (0, r.jsx)(eS.$, {
                            variant: "primary",
                            text: ed.intl.string(ed.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, rX.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(eS.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, r.jsx)(eS.$, {
                            variant: "secondary",
                            text: ed.intl.string(ed.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
}
function r0(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: rQ.RP,
        children: [
            (0, r.jsx)(eG.D, {
                className: rQ.RS,
                variant: "heading-lg/extrabold",
                children: ed.intl.format(ed.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(eM.E, {
                className: rQ.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: ed.intl.format(ed.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: rQ.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: rQ.__invalid_openDiscordButton,
                        children: (0, r.jsx)(eS.$, {
                            variant: "primary",
                            text: ed.intl.string(ed.t["8L5bZG"]),
                            onClick: () => (0, rX.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(eS.$, { variant: "secondary", text: ed.intl.string(ed.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function r1(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, rq.K)(),
        { subscriptionMetadataRequest: a } = r$(),
        { application: o } = (0, nf.V)(),
        l = (0, nE.S3)(),
        d = (0, rU.A)(rV),
        c = (0, g.bG)([x.A], () => x.A.getGuild(a?.guild_id)),
        _ = s.useCallback(() => t(u.pn.REVIEW), [t]);
    if (null == l) return null;
    let h = (0, rZ.bg)(l.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ef.dZ, {
                children: d
                    ? (0, r.jsx)(rJ, {
                          confirmCta: ed.intl.string(ed.t.PBHFSq),
                          onConfirm: _,
                          onCancel: n,
                          title: ed.intl.format(ed.t["6n6oXA"], { tier: l.name }),
                          subtitle: h
                              ? ed.intl.string(ed.t.lzAoKB)
                              : ed.intl.formatToPlainString(ed.t["GqaY/j"], { guildName: c?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(rH, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: o ?? void 0,
                          title: ed.intl.format(ed.t.haiCxc, { tier: l.name }),
                          subtitle: h ? ed.intl.string(ed.t.RvtbP5) : ed.intl.string(ed.t.zY39Zu),
                          description: h
                              ? ed.intl.formatToPlainString(ed.t.QCe4rY, { applicationName: o?.name })
                              : ed.intl.string(ed.t.n1Pu8C),
                      }),
            }),
            !d &&
                (0, r.jsx)(ef.UX, {
                    children: (0, r.jsx)(rk.Ay, {
                        onBack: n,
                        backText: ed.intl.string(ed.t.TQBY1J),
                        onPrimary: _,
                        primaryCTA: rk.ti.CONTINUE,
                        primaryText: ed.intl.string(ed.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var r2 = n(21161);
function r3(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: a } = e,
        o = (0, rq.K)(),
        { application: l } = (0, nf.V)(),
        { readySlideId: d, updatedSubscription: c } = (0, O.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        _ = (0, nE.S3)(),
        h = (0, rU.A)(rV),
        { createMultipleConfettiAt: f } = s.useContext(r2.x),
        E = _?.name ?? "";
    function p() {
        i(), a?.();
    }
    let m = d === u.pn.CONFIRM,
        g = (0, rZ.bg)(_?.flags ?? 0),
        A =
            null != o && o.benefits.length > 0
                ? ed.intl.formatToPlainString(ed.t["+IQQVM"], { benefitCount: o.benefits.length })
                : null,
        { showBenefitsFirst: I } = r$();
    return (
        I
            ? (t = h
                  ? (0, r.jsx)(r0, { tierName: E, onConfirm: p, subscription: c })
                  : (0, r.jsx)(rW, { tierName: E, onConfirm: p, subscription: c }))
            : h
              ? (t = (0, r.jsx)(rJ, {
                    title: ed.intl.format(ed.t.ea6tZr, { tierName: E }),
                    subtitle:
                        null != o && o.benefits.length > 0
                            ? ed.intl.formatToPlainString(ed.t.HNepft, { benefits: A })
                            : null,
                    onConfirm: p,
                    confirmCta: ed.intl.string(ed.t.nlkywz),
                }))
              : ((t =
                    null != o && null != l
                        ? (0, r.jsx)(rH, {
                              icon: o.thumbnail,
                              storeListingBenefits: o.benefits,
                              application: l,
                              title: ed.intl.format(ed.t["Q+qktS"], { tier: E }),
                              subtitle: ed.intl.string(ed.t.ECKxXU),
                              description: g
                                  ? ed.intl.format(ed.t["MAtQk/"], { applicationName: l?.name })
                                  : ed.intl.format(ed.t.vHkMF4, { tier: E }),
                          })
                        : (0, r.jsx)($.A, {})),
                (n = (0, r.jsx)(rk.Ay, {
                    onPrimary: p,
                    primaryCTA: rk.ti.CONTINUE,
                    primaryText: ed.intl.string(ed.t["JtWl+a"]),
                }))),
        s.useEffect(() => {
            nh.Ay.useReducedMotion && m && f(window.innerWidth / 2, window.innerHeight / 2);
        }, [f, m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(ef.dZ, { children: [(0, r.jsx)(nS.A, {}), t] }),
                null != n && (0, r.jsx)(ef.UX, { children: n }),
            ],
        })
    );
}
function r6(e) {
    let { initialPlanId: t, setAnalyticsData: n } = e,
        {
            selectedSkuId: i,
            setSelectedSkuId: a,
            setSelectedPlanId: o,
            priceOptions: l,
        } = (0, O.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { hasFetchedRelatedSubscriptionPlans: d, subscriptionPriceOptionsLoading: c, displayCurrency: _ } = (0, K.Jn)(),
        { setSubscriptionMetadataRequest: h, guildId: f, showBenefitsFirst: E } = r$(),
        p = (0, W.Hp)(),
        m = q(),
        g = (0, P.l)(),
        { isGift: A } = (0, ni.Pv)(),
        I = E ? u.pn.BENEFITS : u.pn.REVIEW,
        [T, S] = s.useState(!m || !d || c);
    return (s.useEffect(() => {
        S(!m || !d || c);
    }, [c, d, m]),
    s.useEffect(() => {
        null != f && h({ guild_id: f });
    }, [f, h]),
    s.useEffect(() => {
        o(t);
        let e = null != t ? es.A.get(t) : null;
        T ||
            p ||
            (n((t) => {
                let n = null != e ? (0, e5.y8)(e.id, !1, A, { paymentSourceId: l.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: _ };
            }),
            null != e && (a(e?.skuId), g(I)));
    }, [p, t, A, T, l, _, i, n, o, a, g, I]),
    T)
        ? (0, r.jsx)($.A, {})
        : p
          ? (0, r.jsx)(Y.oO, {})
          : null;
}
var r4 = n(304072),
    r5 = n(427858),
    r7 = n(295413),
    r8 = n(424517);
let r9 = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: i } = e;
        return {
            variant: "active",
            text: ed.intl.string(ed.t.YScQSF),
            dataTestId: "purchase",
            onClick: t,
            loading: n,
            disabled: i,
        };
    },
    se = {
        CHECKOUT_FLOW: S.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(r6, { ...e }) },
        CustomHeaderComponent: function (e) {
            let { step: t, onClose: n } = e,
                i = s.useCallback(() => n(!1), [n]);
            return (0, r.jsx)(rj, { step: t, onClose: i });
        },
        STEPS_BEFORE_CHECKOUT: [
            {
                key: u.pn.BENEFITS,
                renderStep: (e) => (0, r.jsx)(r1, { ...e }),
                options: { useBreadcrumbLabel: () => ed.intl.string(ed.t["5LD2+B"]) },
            },
        ],
        CHECKOUT_STEPS: {
            [u.pn.REVIEW]: function (e) {
                let { handleStepChange: t, planGroup: n, openInvoiceId: i, analyticsData: a, analyticsLocation: o } = e,
                    {
                        purchaseState: l,
                        contextMetadata: d,
                        purchaseError: c,
                        activeSubscription: _,
                    } = (0, O.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        contextMetadata: e.contextMetadata,
                        purchaseError: e.purchaseError,
                        activeSubscription: e.activeSubscription,
                    })),
                    { subscriptionMetadataRequest: h, showBenefitsFirst: f } = r$(),
                    E = f ? u.pn.BENEFITS : void 0,
                    p = (0, y.A)(),
                    m = (0, nE.S3)();
                if (null == p)
                    throw new il.v({
                        message: "Expected plan to be selected",
                        extraSentryInformation: { selectedPlan: p },
                    });
                let g = s.useRef(null),
                    [A, I] = (0, r4.A)(!1, 500),
                    T = (0, rZ.bg)(m?.flags ?? 0);
                s.useEffect(() => {
                    null != c && null != g.current && g.current.scrollIntoView({ behavior: "smooth" });
                }, [c]);
                let S = s.useRef(null),
                    N = s.useCallback(() => {
                        t(u.pn.ADD_PAYMENT_STEPS);
                    }, [t]);
                return l === D.h.PURCHASING
                    ? (0, r.jsx)($.A, {})
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(ef.dZ, {
                                  children:
                                      null == _
                                          ? (0, r.jsx)(r8._, {
                                                selectedPlan: p,
                                                verifiedPlanId: p.id,
                                                planGroup: n,
                                                handlePaymentSourceAdd: N,
                                                metadata: T ? void 0 : h,
                                            })
                                          : (0, r.jsx)(r5.A, {
                                                selectedPlan: p,
                                                verifiedPlanId: p.id,
                                                premiumSubscription: _,
                                                handlePaymentSourceAdd: N,
                                                planGroup: n,
                                                hasOpenInvoice: null != i,
                                                purchaseState: l,
                                            }),
                              }),
                              (0, r.jsx)(ef.UX, {
                                  children: (0, r.jsx)(r7.U, {
                                      resolveTenantReviewButtonProps: r9,
                                      premiumSubscription: _ ?? null,
                                      onBack: () => null != E && t(E),
                                      handleStepChange: t,
                                      postPurchaseStep: u.pn.CONFIRM,
                                      legalTermsNodeRef: S,
                                      flashLegalTerms: () => I(!0),
                                      analyticsLocation: o,
                                      baseAnalyticsData: a,
                                      flowStartTime: d.startTime,
                                      planGroup: n,
                                      openInvoiceId: i,
                                      metadata: T ? void 0 : h,
                                      backButtonEligible: !!f || void 0,
                                      disablePurchase: h?.guild_id == null && !T,
                                      onPaymentSourceAdd: N,
                                  }),
                              }),
                          ],
                      });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { tenantParams: t, children: n } = e,
                    { guildId: i, showBenefitsFirst: s } = t;
                return (0, r.jsx)(rz, {
                    guildId: i,
                    showBenefitsFirst: s,
                    children: (0, r.jsx)(ir.Qt, { children: n }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { forcesTransitionToGuild: i, guildId: r },
                    } = e,
                    a = t.onClose,
                    o = t.onComplete,
                    l = s.useCallback(
                        (e) => {
                            a(e),
                                e &&
                                    null != r &&
                                    (z.hP(),
                                    (0, rx.f5)(r),
                                    null != o && o(),
                                    null != r && (i || rY.A.getGuildId() !== r) && (0, n3.pX)(eu.BVt.CHANNEL(r)));
                        },
                        [a, o, i, r],
                    );
                return n({ ...t, onClose: l, forceNewPaymentModal: !0 });
            },
            tenantAnalyticsLocation: T.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(r3, { ...e }) },
    };
var st = n(869038),
    sn = n(852218),
    si = n(7133),
    sr = n(83617);
let [ss, sa] = (0, Q.A)();
function so(e) {
    let { code: t, onClose: n, children: i } = e,
        o = (0, g.bG)([k.A], () => k.A.getMostRecentPremiumTypeSubscription()),
        l = (0, g.bG)([k.A], () => k.A.hasFetchedMostRecentPremiumTypeSubscription()),
        d = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        [c, h] = s.useState(!1),
        [f, E] = s.useState(null),
        [p, m] = s.useState(null),
        [I, T] = s.useState(!1),
        [N, C] = s.useState(!1);
    s.useEffect(() => {
        c ||
            (0, ig.GM)(t, !1, !0)
                .then((e) => {
                    let t = si.A.createFromServer(e);
                    E(t), h(!0), T(t.promotion?.promotionType === sn.pt.THIRD_PARTY_DIRECT_FULFILLMENT);
                })
                .catch((e) => {
                    m(e), h(!0);
                }),
            l || (0, z.I8)();
    }, [t, l, c]);
    let y = (0, Z._V)(),
        { paymentSources: v, paymentSourceId: R, paymentAuthenticationState: b, setIsSubmittingCurrentStep: L } = y,
        w = (0, P.l)(),
        x = (0, P.bB)(),
        U = (0, O.t4)((e) => e.setPurchaseState),
        G = (0, O.t4)((e) => e.setPurchaseError),
        V = (0, O.t4)((e) => e.purchaseState),
        { displayCurrency: F } = (0, K.Jn)(),
        B = (0, eY.sw)(),
        j = f?.subscriptionPlan,
        H = f?.promotion,
        W = f?.subscriptionTrial,
        Y = null != j ? (0, sr._w)(j, R, !1) : [],
        $ = B?.currency ?? F ?? Y[0],
        q = s.useMemo(() => (null != R ? { paymentSourceId: R, currency: $ } : { currency: $ }), [R, $]),
        [X] = (0, A.A)(() => [(0, a.A)()]),
        Q = s.useMemo(
            () => ({
                load_id: X,
                location: eu.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: eu.rzx.PREMIUM,
                payment_type: tu.fr[tu.VV.SUBSCRIPTION],
                subscription_plan_id: j?.id,
                sku_id: j?.skuId,
                checkout_flow: S.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [X, j?.id, j?.skuId],
        ),
        J = s.useCallback(() => {
            n?.(V === D.h.COMPLETED);
        }, [n, V]),
        ee = s.useCallback(async () => {
            let e = (0, eE.W)(v, R);
            if (null == e) return !1;
            L(!0), G(null), U(D.h.PURCHASING);
            try {
                return (
                    await st.A.redeemGiftCode({ code: t, options: { paymentSource: e } }),
                    U(D.h.COMPLETED),
                    _.default.track(eu.HAw.PAYMENT_FLOW_COMPLETED, { ...Q }),
                    !0
                );
            } catch (t) {
                return (
                    U(D.h.FAIL),
                    G(t),
                    _.default.track(eu.HAw.PAYMENT_FLOW_FAILED, {
                        ...Q,
                        payment_error_code: t?.code,
                        payment_source_id: e.id,
                    }),
                    !1
                );
            } finally {
                L(!1);
            }
        }, [Q, t, R, v, L, G, U]),
        et = s.useRef(!1),
        en = s.useCallback(() => {
            et.current ||
                ((et.current = !0),
                ee()
                    .then((e) => {
                        w(e ? u.pn.CONFIRM : u.pn.REVIEW);
                    })
                    .finally(() => {
                        et.current = !1;
                    }));
        }, [ee, w]);
    return (
        (0, M.QR)(b),
        (0, M.b)(x, b, w, U, !0, en),
        (0, r.jsx)(ss.Provider, {
            value: {
                code: t,
                giftCode: f,
                plan: j,
                promotion: H,
                trial: W,
                isDirectFulfillment: I,
                hasResolvedGiftCode: c,
                giftCodeResolveError: p,
                hasFetchedMostRecentPremiumTypeSubscription: l,
                recentSubscription: o,
                premiumSubscription: d,
                paymentModalArgs: y,
                priceOptions: q,
                analyticsData: Q,
                handleClose: J,
                redeemPromotion: ee,
                confirmedUpgrade: N,
                setConfirmedUpgrade: C,
            },
            children: i,
        })
    );
}
var sl = n(830215),
    su = n(264779),
    sd = n(859126),
    sc = n(554632);
function s_(e) {
    let { user: t, code: n, className: i } = e;
    return (0, r.jsx)(eM.E, {
        className: eO()(i, sd.iZ),
        variant: "text-md/normal",
        children: ed.intl.format(ed.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, r.jsx)(
                    iA.eu,
                    {
                        className: sd.FL,
                        size: nL._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": nK.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: nK.Ay.getUserTag(t),
            logoutHook: () => {
                sl.A.logout("inbound_promotion_redemption_modal", eu.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function sh(e) {
    let { promotion: t, code: n, isDirectFulfillment: i } = e,
        s = (0, g.bG)([e3.default], () => e3.default.getCurrentUser()),
        a = (0, rn.Ay)(),
        o = (0, su.WD)(t.id, a);
    return (0, r.jsxs)("div", {
        className: sd.rN,
        children: [
            (0, r.jsxs)("div", {
                className: sd.u5,
                children: [
                    (0, r.jsx)("img", { alt: "", src: o, className: sd.hb }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(eG.D, {
                                variant: "heading-xl/bold",
                                className: sd.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, r.jsx)(eM.E, {
                                variant: "text-sm/normal",
                                className: sd.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            i || null == s ? null : (0, r.jsx)(s_, { className: sd.KZ, user: s, code: n }),
        ],
    });
}
function sf(e) {
    let { title: t, bodyText: n, helpCenterLink: i, showUser: a = !1, user: o, code: l, handleClose: u } = e,
        d = s.useMemo(() => ({ text: ed.intl.string(ed.t.BddRzS), onClick: u }), [u]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: sd.t4,
                children: [
                    (0, r.jsx)("img", { alt: "", src: sc, className: sd.M6 }),
                    (0, r.jsx)(eG.D, { variant: "heading-lg/semibold", className: sd.DD, children: t }),
                    (0, r.jsx)(eM.E, { variant: "text-md/normal", className: sd.G3, children: n }),
                    null != i
                        ? (0, r.jsx)(eM.E, {
                              variant: "text-md/normal",
                              className: sd.G3,
                              children: ed.intl.format(ed.t["4uSp2y"], { helpCenterLink: i }),
                          })
                        : null,
                    a && null != o ? (0, r.jsx)(s_, { className: sd.EF, user: o, code: l }) : null,
                ],
            }),
            (0, r.jsx)(R.lo, { primaryButtonProps: d }),
        ],
    });
}
function sE(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            code: i,
            giftCode: a,
            plan: o,
            promotion: l,
            trial: d,
            hasResolvedGiftCode: c,
            giftCodeResolveError: h,
            hasFetchedMostRecentPremiumTypeSubscription: f,
            recentSubscription: E,
        } = sa(),
        p = (0, g.bG)([e3.default], () => e3.default.getCurrentUser()),
        m = (0, W.Hp)(),
        A = !c || !f,
        I = (function (e) {
            let {
                user: t,
                giftCode: n,
                giftCodeResolveError: i,
                recentSubscription: r,
                plan: s,
                promotion: a,
                trial: o,
            } = e;
            if (null != t && !t.verified)
                return {
                    title: ed.intl.string(ed.t.ARIsMA),
                    body: ed.intl.string(ed.t.oDWkjN),
                    showUser: !0,
                    errorCode: eo.JR.USER_NOT_VERIFIED,
                };
            if (null != i && i.code === eu.t02.INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED)
                return {
                    title: ed.intl.string(ed.t.BHxy59),
                    body: ed.intl.string(ed.t["1wokFq"]),
                    errorCode: eo.JR.PREVIOUS_SUBSCRIBER,
                };
            if (null == n)
                return {
                    title: ed.intl.string(ed.t.ARIsMA),
                    body:
                        null != i && i.code === eu.t02.INVALID_GIFT_REDEMPTION_INCORRECT_USER
                            ? ed.intl.string(ed.t.S8TNKh)
                            : ed.intl.string(ed.t["1AceQR"]),
                    errorCode: eo.JR.NO_CODE_BODY,
                };
            if (null != i || null == a || null == o || null == s)
                return {
                    title: ed.intl.string(ed.t.ARIsMA),
                    body: ed.intl.string(ed.t["3u+6q7"]),
                    errorCode: eo.JR.NO_PROMOTION,
                };
            if (n.isClaimed)
                return {
                    title: ed.intl.string(ed.t.ARIsMA),
                    body: ed.intl.string(ed.t.u9IQuM),
                    errorCode: eo.JR.CODE_CLAIMED,
                };
            if (null == r) return null;
            let l = (0, e5.EL)(r)?.planId;
            return null != l && r.status === eu.Dmq.ACTIVE && e5.Ay.getPremiumType(l) === eo.PremiumTypes.TIER_2
                ? {
                      title: ed.intl.string(ed.t.BHxy59),
                      body: ed.intl.formatToPlainString(ed.t.wpwuoV, {
                          months: o.intervalCount,
                          planName: (0, e5.RH)(s.id),
                      }),
                      errorCode: eo.JR.EXISTING_SUBSCRIBER,
                  }
                : null;
        })({ user: p, giftCode: a, giftCodeResolveError: h, recentSubscription: E, plan: o, promotion: l, trial: d });
    return (s.useEffect(() => {
        A ||
            _.default.track(eu.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == I && !m,
                error_code: null != I ? I.errorCode : m ? eo.JR.BLOCKED_PAYMENT : null,
                promotion_id: a?.promotion?.id,
            });
    }, [A, I, m, a]),
    s.useEffect(() => {
        A || null != I || m || t(u.pn.PROMOTION_INFO);
    }, [A, I, m, t]),
    A)
        ? (0, r.jsx)($.A, {})
        : null != I
          ? (0, r.jsx)(sf, {
                title: I.title,
                bodyText: I.body,
                helpCenterLink: l?.inboundHelpCenterLink ?? "",
                showUser: I.showUser,
                handleClose: n,
                user: p ?? void 0,
                code: i,
            })
          : m
            ? (0, r.jsx)(Y.oO, {})
            : null;
}
function sp(e) {
    let { plan: t, isDirectFulfillment: n, paymentModalArgs: i, handleClose: s } = sa();
    eA()(null != t, "Missing plan");
    let { paymentSources: a, paymentSourceId: o } = i,
        l = (0, eE.g)(a, o);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ef.dZ, {
                children: (0, r.jsx)(ip.Ay, { hideClose: !0, planId: t.id, onClose: s, paymentSourceType: l }),
            }),
            n
                ? (0, r.jsx)(ef.UX, {
                      children: (0, r.jsx)(iK.H, {
                          actions: [{ text: ed.intl.string(ed.t.UQvCf7), variant: "primary", onClick: s, size: "md" }],
                      }),
                  })
                : null,
        ],
    });
}
function sm(e) {
    let { handleStepChange: t } = e,
        { promotion: n, code: i, isDirectFulfillment: s } = sa();
    return (
        eA()(null != n, "Missing promotion"),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ef.dZ, { children: (0, r.jsx)(sh, { promotion: n, code: i, isDirectFulfillment: s }) }),
                (0, r.jsx)(ef.UX, {
                    children: (0, r.jsx)(R.lo, {
                        primaryButtonProps: { text: ed.intl.string(ed.t.PDTjLN), onClick: () => t(u.pn.REVIEW) },
                    }),
                }),
            ],
        })
    );
}
var sg = n(732159),
    sA = n(872452),
    sI = n(927305);
let sT = [...eo.oz],
    sS = new Set([...v.MU]),
    sN = [
        {
            key: u.pn.PROMOTION_INFO,
            renderStep: (e) => (0, r.jsx)(sm, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    ],
    sC = {
        CHECKOUT_FLOW: S.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(sE, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
        STEPS_BEFORE_CHECKOUT: sN,
        CHECKOUT_STEPS: {
            [u.pn.REVIEW]: function (e) {
                let { handleStepChange: t } = e,
                    {
                        code: n,
                        plan: i,
                        trial: a,
                        promotion: l,
                        priceOptions: d,
                        paymentModalArgs: c,
                        redeemPromotion: _,
                        confirmedUpgrade: h,
                        setConfirmedUpgrade: f,
                        handleClose: E,
                    } = sa();
                eA()(null != i && null != a, "Missing plan or trial");
                let { paymentSources: p, paymentSourceId: m, setPaymentSourceId: A, isSubmittingCurrentStep: I } = c,
                    T = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
                    { analyticsLocations: S } = (0, eH.Ay)(),
                    N = (0, O.t4)((e) => e.hasAcceptedTerms),
                    C = (0, eW.A)(),
                    { immediateDelivery: y } = (0, tn.U)(),
                    [v, b] = (0, e$.YV)({
                        items: [{ planId: i.id, quantity: 1 }],
                        renewal: !0,
                        paymentSourceId: m,
                        code: n,
                        subscriptionId: T?.id,
                        analyticsLocations: S,
                        analyticsLocation: eu.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                    });
                (0, eY.F0)(v, b);
                let L = (0, eY.sw)(),
                    D = s.useCallback(async () => {
                        null == T || h || null == a || null == l
                            ? (await _()) && t(u.pn.CONFIRM)
                            : (0, o.openModal)((e) => {
                                  let n;
                                  if (null == L) n = (0, r.jsx)(eB.y, { className: sd.wG });
                                  else {
                                      let e = (0, e5.y8)(i.id, !1, !1, d);
                                      n = (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(eM.E, {
                                                  className: sd.ex,
                                                  variant: "text-md/normal",
                                                  children: ed.intl.format(ed.t.DLsu0k, {
                                                      lineItemsHook: function (e, t) {
                                                          return (0, r.jsx)(
                                                              "ul",
                                                              {
                                                                  children: T.items.map((e) => {
                                                                      let t = eo.hd[e.planId],
                                                                          n = ed.intl.formatToPlainString(ed.t.G0EnAP, {
                                                                              quantity: e.quantity,
                                                                              lineItem: t.name,
                                                                          });
                                                                      return (0, r.jsx)(
                                                                          "li",
                                                                          { children: n },
                                                                          `${T.id}-${e.planId}`,
                                                                      );
                                                                  }),
                                                              },
                                                              t,
                                                          );
                                                      },
                                                      newPlanName: eo.hd[i.id].name,
                                                  }),
                                              }),
                                              (0, r.jsx)(eM.E, {
                                                  className: sd.ex,
                                                  variant: "text-sm/normal",
                                                  children: ed.intl.format(ed.t.KHvyu5, {
                                                      newPlanName: eo.hd[i.id].name,
                                                      trialMonths: a.intervalCount,
                                                      helpCenterLink:
                                                          l.inboundHelpCenterLink ?? e6.A.getArticleURL(eu.MVz.BILLING),
                                                      planPrice: (0, e7.$g)(e.amount, L.currency),
                                                  }),
                                              }),
                                          ],
                                      });
                                  }
                                  return (0, r.jsx)(sg.ConfirmModal, {
                                      onConfirm: async () => {
                                          f(!0), (await _()) && t(u.pn.CONFIRM);
                                      },
                                      title: ed.intl.string(ed.t.MaZ28z),
                                      cancelText: ed.intl.string(ed.t["ETE/oC"]),
                                      confirmText: ed.intl.string(ed.t["wfx/Hp"]),
                                      ...e,
                                      variant: "primary",
                                      children: n,
                                  });
                              });
                    }, [t, T, h, a, l, i, d, L, _, f]),
                    P = (0, iu.kc)(),
                    w = (0, e9.iB)({
                        checkoutPaymentSources: P,
                        paymentSourceId: m,
                        location: "InboundPromotionReviewStep",
                    }),
                    M = (0, ei.Y)(),
                    x = (0, eE.W)(p, m),
                    U = s.useMemo(
                        () => ({
                            prependOption:
                                0 === Object.keys(p).length
                                    ? { label: ed.intl.string(ed.t.iA5vA1), value: null }
                                    : null,
                            isTrial: !0,
                        }),
                        [p],
                    );
                if (null != b && null == L)
                    return (0, r.jsx)(sf, {
                        title: ed.intl.string(ed.t.ARIsMA),
                        bodyText: ed.intl.string(ed.t["3u+6q7"]),
                        helpCenterLink: l?.inboundHelpCenterLink ?? "",
                        handleClose: E,
                        user: void 0,
                        code: n,
                    });
                if (!M || null == L) return (0, r.jsx)(eB.y, {});
                let G = (0, r.jsx)(te.N, {
                        setPaymentSourceId: A,
                        paymentSourceId: m,
                        location: "InboundPromotionReview",
                        label: ed.intl.string(ed.t["mmDvV+"]),
                        additionalPaymentSourceDropdownProps: U,
                        onPaymentSourceAdd: () => t(u.pn.ADD_PAYMENT_STEPS),
                        hideCurrencySelect: !0,
                    }),
                    { renewalPrice: V } = (0, ta.Go)(L, i, null),
                    F = ed.intl.formatToPlainString(ed.t.BQPav6, { planPremiumType: e5.Ay.getDisplayName(i.id) }),
                    B = (0, r.jsx)(sA._P, {
                        variant: {
                            type: sA.I0.SubscriptionTrial,
                            purchaseButtonText: F,
                            totalDue: 0,
                            renewalPrice: V,
                            currency: L.currency,
                            interval: i.interval,
                            intervalCount: i.intervalCount,
                            startDate: (0, tl.de)({ renewalInvoice: L, isSubscriptionUpdate: !1 }),
                        },
                        paymentSourceType: (0, eE.W)(p, m)?.type ?? null,
                        immediateDelivery: y,
                    }),
                    j = null;
                return (
                    null == x ? (j = ed.intl.string(ed.t.L7jbQV)) : N || (j = ed.intl.string(ed.t.XdvBLS)),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(ef.dZ, {
                                children: [
                                    (0, r.jsx)(nS.A, {}),
                                    (0, r.jsx)(sI.K, {
                                        plan: i,
                                        renewalInvoicePreview: L,
                                        subscriptionTrial: a,
                                        shouldShowFractionalPremiumBanner: C.isFractionalPremiumActive,
                                        fractionalPremiumInfo: C,
                                        paymentMethodContent: G,
                                        legalContent: B,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(ef.UX, {
                                children: (0, r.jsx)(R.lo, {
                                    onBackClick: () => t(u.pn.PROMOTION_INFO),
                                    primaryButtonProps: {
                                        text: F,
                                        tooltipText: j ?? void 0,
                                        disabled: null == x || !x.canRedeemTrial() || w || !N,
                                        loading: I,
                                        onClick: () => {
                                            if (null != x && N) return D();
                                        },
                                        variant: (0, rk.CY)(rk.ti.PURCHASE),
                                    },
                                }),
                            }),
                        ],
                    })
                );
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { code: t },
                        stepConfigs: n,
                        loadId: i,
                        onClose: s,
                        children: a,
                    } = e,
                    o = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription());
                return (0, r.jsx)(N.M, {
                    activeSubscription: o,
                    stepConfigs: n,
                    skuIDs: sT,
                    loadId: i,
                    unifiedCheckoutFlow: S.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
                    children: (0, r.jsx)(ir.Qt, { children: (0, r.jsx)(so, { code: t, onClose: s, children: a }) }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
                return n({ ...t, shakeWhilePurchasing: !0, tenantManagesPaymentAuth: !0 });
            },
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e,
                { plan: n, handleClose: i } = sa(),
                s = (0, O.t4)((e) => e.purchaseState),
                a = null != n ? n.skuId : null;
            return sS.has(t)
                ? (0, r.jsx)(R.s3, {
                      ...(0, v.uO)({ skuId: a, step: t, headerBadgePreset: t === u.pn.REVIEW ? "trial" : void 0 }),
                  })
                : (0, r.jsx)(rD.A, {
                      enablePremiumBrandRefresh: !0,
                      forceBrandRefreshHeader: !0,
                      premiumType: n?.premiumSubscriptionType ?? eo.PremiumTypes.TIER_2,
                      className: sd.X9,
                      currentStep: t,
                      purchaseState: s,
                      hideCloseButton: !0,
                      onClose: i,
                  });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(sp, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    };
var sy = n(989553);
function sv(e) {
    let { handleClose: t } = e,
        n = (0, O.t4)((e) => e.selectedSkuId),
        { application: i } = (0, nf.V)(),
        s = (0, nE.gU)(),
        { isGift: a, giftRecipient: o } = (0, ni.Pv)();
    eA()(null != n, "Expected selectedSkuId"), eA()(null != i, "Expected application");
    let l = s[n];
    eA()(null != l, "Expected sku");
    let u = a
        ? ed.intl.formatToPlainString(ed.t["2VjPTw"], {
              itemName: l.name,
              giftRecipient: o?.username ?? "your recipient",
          })
        : ed.intl.formatToPlainString(ed.t.wK0IbP, { applicationName: i.name, itemName: l.name });
    return (0, r.jsxs)(ef.dZ, {
        children: [
            (0, r.jsx)(nS.A, {}),
            (0, r.jsxs)("div", {
                className: sy.EL,
                children: [
                    (0, r.jsx)(eG.D, { variant: "heading-xxl/bold", className: sy.RS, children: "Success!" }),
                    (0, r.jsx)(eM.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: sy.yF }),
                    (0, r.jsx)(eS.$, { onClick: t, text: ed.intl.string(ed.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var sR = n(67480),
    sO = n(328968),
    sb = n(371794),
    sL = n(565756);
u.pn.GIFT_CUSTOMIZATION;
let sD = {
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            i = s.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(rj, { step: t, onClose: i });
    },
    CHECKOUT_FLOW: eC.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [u.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, ni.Pv)(),
                a = (0, O.t4)((e) => e.selectedSkuId),
                o = (0, g.bG)([e3.default], () => e3.default.getCurrentUser()),
                l = (0, g.bG)([sR.A], () => (null != a ? sR.A.get(a) : null), [a]),
                u = nJ(),
                d = (0, g.bG)([sO.A], () => (null != a ? sO.A.getForSKU(a) : null), [a]),
                c =
                    d?.headerBackground != null && l?.applicationId != null
                        ? (0, sb.YE)(l.applicationId, d.headerBackground, 256)
                        : void 0;
            async function _(e, t) {}
            let h = null == i || i.id === o?.id || t.length > eo.Jo,
                f = s.useMemo(() => ({ disabled: h }), [h]);
            return (0, r.jsx)(eC.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: eC.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: sL.P6,
                        children: [
                            l?.name != null &&
                                (0, r.jsx)(eG.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: l.name,
                                }),
                            null != c && (0, r.jsx)("img", { src: c, alt: l?.name ?? "", className: sL.LC }),
                        ],
                    }),
                renderRightColumn: function () {
                    return (0, r.jsxs)("div", {
                        className: sL.P6,
                        children: [
                            (0, r.jsx)(n$, { recipients: u, selectedSkuId: a, validateSelectedGift: _ }),
                            (0, r.jsx)(n0.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: sL.iX,
                                innerClassName: sL.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: f,
            });
        },
        [u.pn.REVIEW]: tZ.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(sv, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var sP = n(429913),
    sw = n(733391),
    sM = n(871123),
    sx = n(26594),
    sU = n(510022),
    sk = n(317560),
    sG = n(275256),
    sV = n(910200),
    sF = n(208733);
function sB(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, eH.Ay)(),
        { selectedSkuId: i, entitlementsGranted: a } = (0, O.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: o } = (0, nf.V)(),
        l = (0, nE.gU)(),
        { isGift: u, giftRecipient: d } = (0, ni.Pv)();
    eA()(null != i, "Expected selectedSkuId"), eA()(null != o, "Expected application");
    let c = l[i];
    eA()(null != c, "Expected sku");
    let _ = a.find((e) => e.sku_id === i),
        h = (0, sx.G)(_, { isGift: u });
    return (s.useEffect(() => {
        u || ((0, sk.j)(), t(), (0, sU.n)({ sku: c, application: o, analyticsLocations: n, entitlement: _ }));
    }, [u, c, o, t, n, _]),
    u)
        ? (0, r.jsxs)(ef.dZ, {
              children: [
                  (0, r.jsx)(nS.A, {}),
                  (0, r.jsxs)("div", {
                      className: sF.EL,
                      children: [
                          (0, r.jsx)("div", {
                              className: sF.KD,
                              children: (0, r.jsx)(sG.default, {
                                  imageUrl: (0, sM.fq)(c) ?? void 0,
                                  backgroundImageUrl: (0, sM.xf)(c),
                                  altText: c.name,
                                  rewardGraphic: h?.graphic,
                              }),
                          }),
                          (0, r.jsx)(eG.D, {
                              variant: "heading-xl/semibold",
                              className: sF.RS,
                              children: ed.intl.string(ed.t["5glWta"]),
                          }),
                          (0, r.jsx)(eM.E, {
                              variant: "text-md/normal",
                              children: ed.intl.formatToPlainString(ed.t["2VjPTw"], {
                                  itemName: c.name,
                                  giftRecipient: d?.username ?? "your recipient",
                              }),
                          }),
                          null != h &&
                              (0, r.jsx)("div", {
                                  className: sF.Is,
                                  children: (0, r.jsx)(sV.O0, { Icon: h.Icon, text: h.text }),
                              }),
                          (0, r.jsx)("div", {
                              className: sF.UD,
                              children: (0, r.jsx)(eS.$, {
                                  onClick: t,
                                  text: ed.intl.string(ed.t.cpT0Cq),
                                  fullWidth: !0,
                              }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
n(801541);
var sj = n(889137),
    sH = n(742158),
    sW = n(313961),
    sY = n(238017),
    sK = n(650588),
    s$ = n(117218),
    sz = n(763827),
    sq = n(403362),
    sZ = n(832163),
    sX = n(31969),
    sQ = n(44724),
    sJ = n(980094),
    s0 = n(366523),
    s1 = n(806931),
    s2 = n(107610);
function s3(e) {
    let { handleClose: t, sku: n, application: i } = e,
        a = s.useCallback(() => {
            (0, sQ.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        l = s.useCallback(() => {
            t();
            let e = sZ.A.getStorefrontState(n.applicationId)?.activePage;
            (0, sM.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, o.closeAllModals)(),
                (0, sQ.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, r.jsx)("div", {
        className: s2.$O,
        children: (0, r.jsx)(eN.Q, {
            text: ed.intl.string(ed.t.ImioFL),
            onMouseDown: a,
            onClick: l,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let s6 = {
    CHECKOUT_FLOW: eC.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [u.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: i, disabled: a } = (function (e) {
                    var t;
                    let n,
                        i,
                        a,
                        { handleStepChange: o, handleClose: l } = e,
                        {
                            customGiftMessage: u = "",
                            setCustomGiftMessage: d,
                            giftRecipient: c,
                            emojiConfetti: _,
                            soundEffect: h,
                            setEmojiConfetti: f,
                            setSoundEffect: E,
                            giftingOrigin: p,
                            additionalUserIds: m,
                        } = (0, ni.Pv)(),
                        A = (0, O.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, nf.V)(),
                        T = (0, g.bG)([e3.default], () => e3.default.getCurrentUser()),
                        S =
                            ((t = T?.id),
                            (n = nJ()),
                            (i = (function (e) {
                                let t = (0, g.bG)([sz.A], () => (sz.A.isConnected() ? sz.A.getChannelId() : null)),
                                    [n, i] = s.useState([]);
                                return (
                                    s.useEffect(() => {
                                        let n = null != t ? sW.A.getParticipants(t) : [],
                                            r = [],
                                            s = new Set();
                                        for (let t of n)
                                            (!(0, s1.Xw)(t) && !(0, s1.Ay)(t)) ||
                                                t.user.id === e ||
                                                s.has(t.user.id) ||
                                                (s.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, s1.Ay)(e) && !(0, s1.Ay)(t)
                                                ? -1
                                                : (0, s1.Ay)(t) && !(0, s1.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            i(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (a = (0, g.yK)([e3.default], () => m?.map(e3.default.getUser).filter(sq.Vq) ?? [], [m])),
                            s.useMemo(
                                () =>
                                    nq().uniqWith(
                                        [...(null != c ? [c] : []), ...a, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, a, i, n],
                            )),
                        N = (0, g.bG)([sR.A], () => (null != A ? sR.A.get(A) : null), [A]),
                        { userPrice: C } = (0, s$.CD)({ sku: N, priceSetAssignmentPurchaseType: eu.lid.GIFT }),
                        y = (0, sX.F)("gift_customization", { applicationId: I?.id, skuId: N?.id }),
                        v = (0, sM.fq)(N),
                        R = (0, sM.xf)(N);
                    async function b(e, t) {}
                    let L = (e) => {
                            null != E && E(null == e ? void 0 : e);
                        },
                        D = () =>
                            (0, r.jsxs)("div", {
                                className: s2.mT,
                                children: [
                                    null != v &&
                                        (0, r.jsx)(s0.A, {
                                            containerClassName: s2.T3,
                                            cardImage: v,
                                            cardBackgroundImage: R,
                                            altText: N?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: s2._T,
                                        children: [
                                            (0, r.jsx)(sK.A, { sound: h, onSelect: L }),
                                            (0, r.jsx)(sY.A, {
                                                setEmojiConfetti: f,
                                                emojiConfetti: null == _ ? void 0 : _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        P = () =>
                            (0, r.jsxs)("div", {
                                className: s2.Tc,
                                children: [
                                    null != c && (p === eo.vQ.USER_PROFILE_WISHLIST || p === eo.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(n2.Z, { giftRecipient: c })
                                        : (0, r.jsx)(n$, { selectedSkuId: A, validateSelectedGift: b, recipients: S }),
                                    (0, r.jsx)(n0.A, {
                                        onTextChange: (e) => d?.(e),
                                        pendingText: u,
                                        currentText: u,
                                        disableThemedBackground: !0,
                                        className: s2.iX,
                                        innerClassName: s2.pt,
                                    }),
                                    null == N
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: s2.AN,
                                              children: [
                                                  (0, r.jsx)(sH.z, {
                                                      className: s2.jr,
                                                      children: ed.intl.string(ed.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: s2.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: s2.Xb,
                                                              children:
                                                                  null != N &&
                                                                  null != v &&
                                                                  (0, r.jsx)(s0.A, {
                                                                      containerClassName: s2.Iy,
                                                                      cardImage: v,
                                                                      cardBackgroundImage: R,
                                                                      altText: N.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: s2.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(sJ.Q, { application: I }),
                                                                  (0, r.jsx)(eM.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: N.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(eM.E, {
                                                              variant: "text-md/semibold",
                                                              children: C,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != N &&
                                        (0, sM.Ri)(N) &&
                                        (0, r.jsx)(eI.w, { type: "info", children: ed.intl.string(ed.t.lORYb6) }),
                                    null != y &&
                                        (0, r.jsx)(sV.O0, {
                                            Icon: y.Icon,
                                            text: y.text,
                                            endDatetime: y.endsAt,
                                            tooltip: y.tooltip,
                                        }),
                                    null != N && (0, r.jsx)(s3, { handleClose: l, sku: N, application: I }),
                                ],
                            });
                    return {
                        renderStepBody: function () {
                            return (0, r.jsxs)("div", { className: s2.Du, children: [D(), P()] });
                        },
                        getLeftColumnComponent: D,
                        getRightColumnComponent: P,
                        onStepChange: o,
                        onBackClick: l,
                        disabled: null == c || c.id === T?.id || u.length > eo.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                o = s.useMemo(() => ({ disabled: a }), [a]);
            return (0, r.jsx)(eC.Mw, {
                paymentModalStepProps: e,
                layout: eC.XZ.CUSTOM_STEP_BODY,
                renderStepBody: i,
                primaryCTAButtonProps: o,
            });
        },
        [u.pn.REVIEW]: tZ.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(sB, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: a, isGift: o, skuId: l, ...u } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        i = (0, sP.h)(t);
                    s.useEffect(() => {
                        null == i ||
                            null == n ||
                            sO.A.isFetchingForSKU(n) ||
                            null != sR.A.get(n) ||
                            (0, sw.Pp)(i.id, n);
                    }, [i, n]);
                })({ applicationId: a, skuId: l }),
                (0, r.jsx)(N.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: a,
                    skuIDs: [l],
                    purchaseType: tu.VV.ONE_TIME,
                    isGift: o,
                    ...u,
                    activeSubscription: null,
                    children: t,
                })
            );
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
            return n({ ...t, analyticsObject: t.analyticsSourceLocation });
        },
        tenantAnalyticsLocation: T.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, sj.YW)(t)
                .with(u.pn.GIFT_CUSTOMIZATION, () => ed.intl.string(ed.t["JCFN/y"]))
                .with(u.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => ed.intl.string(ed.t.lDbi6H))
                .with(u.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(nt.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var s4 = n(206828),
    s5 = n(587895),
    s7 = n(977445),
    s8 = n(211287),
    s9 = n(623373),
    ae = n(739508),
    at = n(715054);
(0, a.A)();
var an = n(136857),
    ai = n(158317),
    ar = n(855104);
n(322076);
var as =
        (((i = {})[(i.INSUFFICIENT_ORB_BALANCE = 1e3)] = "INSUFFICIENT_ORB_BALANCE"),
        (i[(i.MISSING_DEPENDENT_SKU_ENTITLEMENT = 1001)] = "MISSING_DEPENDENT_SKU_ENTITLEMENT"),
        (i[(i.SKU_PRODUCT_LINE_NOT_PURCHASABLE = 1002)] = "SKU_PRODUCT_LINE_NOT_PURCHASABLE"),
        (i[(i.SKU_ALREADY_OWNED = 1003)] = "SKU_ALREADY_OWNED"),
        (i[(i.FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION = 1004)] = "FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION"),
        (i[(i.SKU_NOT_AVAILABLE_FOR_DISTRIBUTION = 1005)] = "SKU_NOT_AVAILABLE_FOR_DISTRIBUTION"),
        (i[(i.SKU_MISSING_ORB_PRICE = 1006)] = "SKU_MISSING_ORB_PRICE"),
        (i[(i.SKU_IS_THIRD_PARTY = 1007)] = "SKU_IS_THIRD_PARTY"),
        (i[(i.SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED = 1008)] = "SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED"),
        (i[(i.FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER = 1009)] = "FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER"),
        (i[(i.BUNDLE_PARTIALLY_OWNED = 1010)] = "BUNDLE_PARTIALLY_OWNED"),
        (i[(i.SOCIAL_LAYER_NOT_PURCHASABLE = 1011)] = "SOCIAL_LAYER_NOT_PURCHASABLE"),
        (i[(i.FRAMES_FIAT_EXCLUSIVE = 1012)] = "FRAMES_FIAT_EXCLUSIVE"),
        (i[(i.FIRST_PARTY_NO_ORBS = 1013)] = "FIRST_PARTY_NO_ORBS"),
        i),
    aa = n(318254),
    ao = n(576052),
    al = n(120992),
    au = n(999968),
    ad = n(319820),
    ac = n(200766);
function a_(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: i, isSocialLayerGameItem: s } = (0, ad.AO)({ sku: t }),
        a = (0, au.oO)(i);
    s ? (a = ed.intl.string(td.default.qwSlCO)) : (0, s9.Ab)(i) && (a = ed.intl.string(ed.t["0TmQRG"]));
    let o = (0, au.dL)(t),
        l = (0, nl.EZ)(t.id) ? ao.m[t.id].render({ className: ac.$ }) : (0, r.jsx)(ts.WH, { sku: t, product: i });
    return (0, r.jsx)(ts.f7, { label: o, description: a, graphic: l, price: null != n ? `${n}` : "", PriceIcon: aa.C });
}
function ah(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, al.c)({ applicationId: (0, c.P)(t), skuIDs: [t] });
    let i = (0, n_.bG)([sR.A], () => sR.A.get(t), [t]);
    return null == i
        ? (0, r.jsx)(eB.y, { type: eB.y.Type.PULSING_ELLIPSIS })
        : (0, r.jsx)(a_, { sku: i, orbPriceAmount: n });
}
function af(e) {
    let { orbBalance: t } = e;
    return (0, r.jsx)(sA.vW, { label: ed.intl.string(ed.t.y0WGqP), value: null != t ? `${t}` : "", Icon: aa.C });
}
function aE() {
    return ed.intl.string(ed.t.wmcDyu);
}
function ap(e) {
    let { skuId: t } = e,
        { immediateDelivery: n } = (0, tn.U)(),
        i = (function (e) {
            let { skuId: t } = e,
                n = aE(),
                i = (0, g.bG)([sR.A], () => sR.A.get(t), [t]),
                r = i?.productLine,
                s = i?.applicationId,
                a = (0, g.bG)([s5.A], () => (r === eu.EZt.SOCIAL_LAYER_GAME_ITEM ? s5.A.getApplication(s) : null), [
                    s,
                    r,
                ]),
                { fetched: o, hasAlreadyLinked: l } = (0, s4.RD)(a);
            return r !== eu.EZt.SOCIAL_LAYER_GAME_ITEM
                ? { type: sA.I0.OrbsRedemption, purchaseButtonText: n }
                : {
                      type: sA.I0.OrbsGameShop,
                      purchaseButtonText: n,
                      applicationName: a?.name,
                      applicationId: s,
                      shouldAppendDisclaimer: o && !l,
                  };
        })({ skuId: t });
    return (0, r.jsx)(sA._P, { variant: i, paymentSourceType: null, immediateDelivery: n });
}
let am = (0, s.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    analyticsSourceLocation: void 0,
});
function ag() {
    return (0, s.useContext)(am);
}
let aA = { payment_gateway: tu.kM.VIRTUAL_CURRENCY, currency: eu.Yri.DISCORD_ORB },
    aI = {
        CHECKOUT_FLOW: eC.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [u.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: a,
                        onRedeemVirtualCurrency: o,
                        skuId: l,
                        analyticsSourceLocation: d,
                    } = ag(),
                    { primaryButtonProps: h, ...E } = (function (e) {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                isRedeeming: a,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: l,
                                handleStepChange: d,
                            } = e,
                            { enabled: h } = s8.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: E, orderOrbPriceAmount: p } = (0, O.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: m,
                                orbPriceAmount: A,
                                orbBalanceToDisplay: I,
                                onClickCheckout: T,
                                showCollectiblesDiscountWarning: N,
                                errorMessage: C,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: i,
                                        orbProductContext: r,
                                        analyticsSourceLocation: a,
                                        handleStepChange: o,
                                    } = e,
                                    { analyticsLocations: l } = (0, eH.Ay)(),
                                    {
                                        selectedSkuId: d,
                                        setPurchaseState: h,
                                        firstConstraintReasonCode: E,
                                    } = (0, O.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    p = (0, ar.gN)(),
                                    m = (0, s.useRef)(p),
                                    { emitOrbCheckoutPaymentFlowEvent: g } = (function (e) {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: i,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: a } = (0, nf.V)(),
                                            { hasPaymentSources: o } = (0, iu.jm)(),
                                            {
                                                loadId: l,
                                                startTime: d,
                                                discoverySessionId: h,
                                            } = (0, O.t4)((e) => e.contextMetadata),
                                            E = (0, s.useMemo)(
                                                () => ({
                                                    load_id: l,
                                                    discovery_session_id: h,
                                                    application_id: (0, c.P)(t),
                                                    location: i,
                                                    location_stack: i,
                                                    sku_id: t,
                                                    activity_session_id: a,
                                                    payment_gateway: tu.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: eu.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: eu.frM[eu.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: f.r.UNIFIED,
                                                        checkout_flow: S.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [l, h, a, t, i, r, n],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, s.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - d;
                                                    e === eu.HAw.PAYMENT_FLOW_STARTED
                                                        ? _.default.track(eu.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...E,
                                                              has_saved_payment_source: o,
                                                              payment_gateway: tu.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === eu.HAw.PAYMENT_FLOW_LOADED
                                                          ? _.default.track(eu.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...E,
                                                                has_saved_payment_source: o,
                                                                initial_step: u.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === eu.HAw.PAYMENT_FLOW_CANCELED
                                                            ? _.default.track(eu.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...E,
                                                                  duration_ms: n,
                                                              })
                                                            : e === eu.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? _.default.track(eu.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...E,
                                                                    duration_ms: n,
                                                                })
                                                              : e === eu.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? _.default.track(eu.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...E,
                                                                      duration_ms: n,
                                                                  })
                                                                : _.default.track(eu.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...E,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [d, E, o],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: r,
                                        analyticsLocations: l,
                                        analyticsSourceLocation: a,
                                    });
                                (0, s.useEffect)(() => {
                                    null != i &&
                                        null !== m.current &&
                                        (g(eu.HAw.PAYMENT_FLOW_FAILED, i), (m.current = null));
                                }, [i, g]);
                                let A = (0, s.useCallback)(() => {
                                        (m.current = p),
                                            g(eu.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                h(D.h.COMPLETED), o(u.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, h, p, g, o]),
                                    I = m.current ?? p,
                                    T = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, nB.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, s.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof ai.FY && null != t)
                                                    switch (t) {
                                                        case as.INSUFFICIENT_ORB_BALANCE:
                                                            return ed.intl.string(ed.t.keFvXM);
                                                        case as.SKU_ALREADY_OWNED:
                                                            return ed.intl.string(ed.t.m371Mx);
                                                        case as.BUNDLE_PARTIALLY_OWNED:
                                                            return ed.intl.string(ed.t.v9oC0p);
                                                        default:
                                                            return ed.intl.string(ed.t.fqJZ11);
                                                    }
                                                return e instanceof ai.j2
                                                    ? ed.intl.string(ed.t["2BmwgV"])
                                                    : e.code === an.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? ed.intl.string(ed.t.keFvXM)
                                                      : e.code === an.tG.ALREADY_PURCHASED
                                                        ? ed.intl.string(ed.t.m371Mx)
                                                        : e.code === an.tG.BILLING_ORDER_NOT_SIGNABLE
                                                          ? ed.intl.string(ed.t.ZHgEG7)
                                                          : ed.intl.string(ed.t.fqJZ11);
                                            })(i, E),
                                        [i, E],
                                    ),
                                    orbPriceAmount: T,
                                    orbBalanceToDisplay: I,
                                    onClickCheckout: A,
                                    selectedSkuId: d,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: l,
                                handleStepChange: d,
                            }),
                            y = (0, g.bG)([sR.A], () => sR.A.get(t), [t]),
                            v = (0, s7.uS)(y?.applicationId),
                            {
                                disabled: R,
                                tooltipText: b,
                                text: L,
                            } = (function (e) {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: i = !1 } = e,
                                    { disabled: r, tooltipText: a } = (0, s.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: ed.intl.string(ed.t["c/rcUu"]) }
                                                : !i && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: ed.intl.string(ed.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, i],
                                    );
                                return { disabled: r, tooltipText: a, text: aE() };
                            })({ orbBalance: I, orbPriceAmount: h ? E : A, isInTestMode: v }),
                            P = (0, s.useMemo)(
                                () => ({ onClick: T, loading: a, text: L, disabled: R, tooltipText: b }),
                                [T, a, L, R, b],
                            ),
                            w = N ? ed.intl.format(ed.t.fsOXXO, {}) : null,
                            M = v ? ed.intl.string(ed.t.OvMyMd) : null;
                        return {
                            isStepLoading: m,
                            upperInlineNoticeProps: (0, s.useMemo)(() => {
                                if (null != M || null != w || null != C) {
                                    let e = [];
                                    return (
                                        null != M &&
                                            e.push({ type: "warning", message: M, key: "test-mode-warning-notice" }),
                                        null != w &&
                                            e.push({ type: "warning", message: w, key: "orb-checkout-warning-notice" }),
                                        null != C &&
                                            e.push({ type: "critical", message: C, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [M, w, C]),
                            purchaseItemContent: (0, r.jsx)(ah, { skuId: t, orbPriceAmount: h ? p : A }),
                            paymentMethodContent: (0, r.jsx)(af, { orbBalance: I }),
                            legalContent: (0, r.jsx)(ap, { skuId: t }),
                            primaryButtonProps: P,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: l,
                        analyticsSourceLocation: d,
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: a,
                        onRedeemVirtualCurrency: o,
                        handleStepChange: t,
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ef.dZ, { children: (0, r.jsx)(tt.T, { ...E }) }),
                        (0, r.jsx)(ef.UX, { children: (0, r.jsx)(R.lo, { primaryButtonProps: h }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: i, children: a } = e,
                    { order: o, setOrder: l } = (0, O.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: u,
                        isRedeeming: d,
                        orbRedemptionError: c,
                        onRedeemVirtualCurrency: _,
                    } = (function (e) {
                        let { skuId: t, loadId: n, onCheckoutSuccess: i, onSignFailure: r, order: a } = e,
                            o = (0, g.bG)([e3.default], () => e5.Ay.canUseShopDiscounts(e3.default.getCurrentUser())),
                            l = (0, g.bG)([sR.A], () => sR.A.get(t), [t]),
                            u = (0, s$.JL)({ sku: l }),
                            { product: d } = (0, nM.q)(t),
                            c = (0, s.useMemo)(() => {
                                if (null != u) return { orbPriceAmount: u.amount };
                                if (null != d) {
                                    let e = (0, s9.CW)({ product: d, hasShopDiscount: o });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [u, d, o]);
                        c?.orbPriceAmount == null &&
                            (0, ae.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: _,
                                isSubmitting: h,
                                error: f,
                            } = (0, at.Q)({ skuId: t, loadId: n, order: a, onSignFailure: r }),
                            E = (0, s.useCallback)(
                                (e) => {
                                    _(t, n, (n) => {
                                        i?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, _, i],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            orbProductContext: c,
                            onRedeemVirtualCurrency: E,
                            isRedeeming: h,
                            orbRedemptionError: f,
                        };
                    })({ skuId: t, loadId: n, order: o, onSignFailure: l }),
                    h = (0, s.useMemo)(
                        () => ({
                            orbProductContext: u,
                            isRedeeming: d,
                            orbRedemptionError: c,
                            onRedeemVirtualCurrency: _,
                            skuId: t,
                            analyticsSourceLocation: i,
                        }),
                        [u, d, c, _, t, i],
                    );
                return (0, r.jsx)(am.Provider, { value: h, children: a });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: i } = ag(),
                    r = (function (e) {
                        let { orbProductContext: t, overrideAnalyticParams: n } = e;
                        return {
                            analyticsDataOverride: (0, s.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...n,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, n]),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: i, overrideAnalyticParams: aA });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: aA,
        },
    },
    aT = {
        [h.C.ORB_CHECKOUT]: {
            flowType: h.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: aI,
        },
        [h.C.COLLECTIBLES_CHECKOUT]: {
            flowType: h.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: it,
        },
        [h.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: s6,
        },
        [h.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_CHECKOUT,
            purchaseType: eu.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: rM,
        },
        [h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            purchaseType: eu.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: sC,
        },
        [h.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: sD,
        },
        [h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: eu.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: se,
        },
        [h.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ne,
            flowType: h.C.GUILD_PRODUCT_CHECKOUT,
        },
        [h.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: iL,
            purchaseType: eu.VVm.SUBSCRIPTION,
        },
        [h.C.GUILD_BOOST_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.GUILD_BOOST_CHECKOUT,
            purchaseType: eu.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: tq,
        },
    };
var aS = n(735305);
function aN(e) {
    let { returnStep: t = u.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: i } = e,
        { purchaseType: a } = (0, O.t4)((e) => ({ purchaseType: e.purchaseType })),
        o = s.useCallback(
            () =>
                (function (e) {
                    let {
                        paymentModalStepProps: t,
                        returnStep: n = u.pn.REVIEW,
                        returnStepIfNoPaymentSources: i,
                        purchaseType: r,
                    } = e;
                    if (0 === Object.keys(X.A.paymentSources).length) {
                        if (null != i) return void t.handleStepChange(i);
                        r === tu.VV.SUBSCRIPTION
                            ? t.handleStepChange(n, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS })
                            : t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: i, purchaseType: a }),
            [t, n, i, a],
        );
    return (0, r.jsx)(aS.x, { ...i, onReturn: o });
}
function aC(e) {
    let { initialPlanId: t } = e,
        n = (0, O.t4)((e) => e.selectedSkuId),
        i = (0, y.A)(),
        { isGift: a, claimableRewards: o } = (0, ni.Pv)(),
        l = rT({ isGift: a, skuId: n }),
        d = (0, iX.lp)(l),
        c = (0, i_.px)(i, a, o),
        _ = s.useMemo(() => {
            let e = null == t ? u.pn.PLAN_SELECT : u.pn.REVIEW;
            return d && (e = u.pn.REVIEW), c && (e = u.pn.SELECT_FREE_SKU), e;
        }, [d, c, t]);
    return (0, r.jsx)(aN, { paymentModalStepProps: e, returnStep: u.pn.REVIEW, returnStepIfNoPaymentSources: _ });
}
function ay(e) {
    let { checkoutFlow: t, returnStep: n = u.pn.REVIEW, returnStepIfNoPaymentSources: i, paymentModalStepProps: s } = e;
    return t === h.C.PREMIUM_CHECKOUT
        ? (0, r.jsx)(aC, { ...s })
        : (0, r.jsx)(aN, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: i });
}
var av = n(339048),
    aR = n(469778),
    aO = n(579151),
    ab = n(599062);
function aL() {
    let { refreshCategories: e } = (0, aO.A)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nt.rQ, { title: ed.intl.string(ed.t["p8+qtU"]) }),
            (0, r.jsx)(H.c, { children: (0, r.jsx)(ab.h, { onRetry: e, errorOrigin: ab.A.GIFT_MODAL }) }),
        ],
    });
}
function aD(e) {
    let { handleStepChange: t } = e,
        n = (0, O.t4)((e) => e.selectedSkuId),
        { paymentSources: i, hasFetchedPaymentSources: a } = (0, iu.jm)(),
        { application: o } = (0, nf.V)(),
        l = (0, W.Hp)(),
        d = (0, nE.gU)(),
        c = (0, nE.Hu)(),
        { isGift: _ } = (0, ni.Pv)(),
        [h, f] = s.useState(!0),
        [E, p] = (0, n_.yK)([np.A], () => [np.A.isFetchingCategories, np.A.error]);
    return (s.useEffect(() => {
        let e = null != o;
        c && a && e && f(E);
    }, [c, a, o, E]),
    s.useEffect(() => {
        if (h || l || null == n) return;
        let e = d[n];
        _ &&
        (e?.productLine === eu.EZt.COLLECTIBLES ||
            e?.productLine === eu.EZt.APPLICATION ||
            e?.productLine === eu.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(u.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(i).length
              ? t(u.pn.ADD_PAYMENT_STEPS)
              : t(u.pn.REVIEW);
    }, [h, l, t, i, _, d, n]),
    h)
        ? (0, r.jsx)($.A, {})
        : l
          ? (0, r.jsx)(Y.oO, {})
          : null != p
            ? (0, r.jsx)(aL, {})
            : null;
}
function aP(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: i, continueSessionToInitialStep: a } = e,
        { hasPaymentSources: o } = (0, iu.jm)(),
        {
            selectedSkuId: l,
            setSelectedPlanId: d,
            activeSubscription: c,
            defaultPlanId: _,
            startedPaymentFlowWithPaymentSources: h,
        } = (0, O.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        f = (0, W.Hp)(),
        E = q(),
        { hasFetchedRelatedSubscriptionPlans: p, subscriptionPriceOptionsLoading: m } = (0, K.Jn)(),
        { isGift: g } = (0, ni.Pv)(),
        A = rT({ isGift: g, skuId: l }),
        I = !E || !p || m,
        T = (0, n_.bG)([aR.A], () => aR.A.applicationIdsFetched.has(eo.tv));
    return (iJ(
        "Payment Modal",
        I,
        5,
        { hasFetchedSubscriptions: E, hasFetchedSubscriptionPlans: p, subscriptionPriceOptionsLoading: m },
        { tags: { app_context: "billing" } },
    ),
    s.useEffect(() => {
        if ((T || (0, av.LM)(eo.tv), I || f)) return;
        let e = (0, iX.vT)({ isTrial: A, isGift: g, selectedSkuId: l, startedPaymentFlowWithPaymentSources: h });
        null != a
            ? i(u.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: a })
            : null != n
              ? n !== eo.gD.PREMIUM_GROUP_MONTH || o
                  ? i(u.pn.REVIEW)
                  : i(u.pn.ADD_PAYMENT_STEPS)
              : e
                ? (d((0, iX.xT)(l, c, _)), i(u.pn.REVIEW))
                : null != t
                  ? i(u.pn.PLAN_SELECT)
                  : i(u.pn.SKU_SELECT);
    }, [a, c, f, T, n, I, i, t, l, d, A, _, g, h, o]),
    I)
        ? (0, r.jsx)($.A, {})
        : f
          ? (0, r.jsx)(Y.oO, {})
          : null;
}
var aw = n(891197),
    aM = n(293035);
function ax() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(rd.A, {}), (0, r.jsx)(ef.dZ, { children: (0, r.jsx)(aw.N, { className: aM.D }) })],
    });
}
var aU = n(830382),
    ak = n(349288),
    aG = n(94204);
function aV(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsxs)("div", {
            className: aG.a,
            children: [
                (0, r.jsx)(eG.D, { variant: "heading-xl/bold", children: ed.intl.string(ed.t.Q03WWV) }),
                (0, r.jsxs)("p", {
                    children: [
                        (0, r.jsx)(eM.E, { variant: "text-md/normal", children: ed.intl.string(ed.t.BxPxhI) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)(eM.E, { variant: "text-md/normal", children: ed.intl.string(ed.t.Y3fdOp) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsxs)(eM.E, {
                            variant: "text-md/normal",
                            children: [
                                ed.intl.string(ed.t.Paa4v4),
                                "\xa0",
                                n
                                    ? ed.intl.string(ed.t.StGVvC)
                                    : (0, r.jsx)(ak.Anchor, { onClick: i, children: ed.intl.string(ed.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function aF() {
    let e = s.useMemo(() => [{ variant: "primary", text: ed.intl.string(ed.t.g8vPzy), disabled: !0 }], []);
    return (0, r.jsx)(iK.H, { actions: e });
}
var aB = n(599961);
function aj() {
    let [e, t] = s.useState(!1);
    async function n() {
        t(!0), await (0, aU.lo)();
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(rd.A, {}),
            (0, r.jsx)(ef.dZ, { children: (0, r.jsx)(aV, { className: aB.r, isEmailResent: e, resendEmail: n }) }),
            (0, r.jsx)(ef.UX, { children: (0, r.jsx)(aF, {}) }),
        ],
    });
}
let aH = { key: null, renderStep: (e) => (0, r.jsx)(aD, { ...e }), options: { modalSizeGetter: () => "md" } },
    aW = { key: null, renderStep: (e) => (0, r.jsx)(aP, { ...e }) },
    aY = [
        { key: u.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(aj, {}) },
        { key: u.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(ax, {}), options: { renderHeader: !0 } },
    ];
function aK(e) {
    let { paymentModalStepProps: t, defaultStep: n } = e,
        i = (0, s.useRef)(!1),
        a = (0, W.Hp)(),
        { handleStepChange: o } = t;
    return ((0, s.useEffect)(() => {
        a || i.current || (o(n), (i.current = !0));
    }, [a, o, n]),
    a)
        ? (0, r.jsx)(Y.oO, {})
        : null;
}
let a$ = {
        [h.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [h.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [h.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    },
    az = (0, s.lazy)(() =>
        Promise.all([n.e("11005"), n.e("93438"), n.e("54791"), n.e("25246"), n.e("33319"), n.e("8430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    ),
    aq = (e) => (0, r.jsx)(az, { ...e });
class aZ {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = aT[e];
        if (
            !(function (e, t) {
                return null != t && t.implemented && t.flowType === e;
            })(e, t)
        )
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = a$[e]),
            (this.override_analytic_params =
                this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams);
    }
    getCheckoutStep(e) {
        return this.tenantCheckoutFlowConfig.CHECKOUT_STEPS[e];
    }
    generateRenderHeader() {
        let { CustomHeaderComponent: e } = this.tenantCheckoutFlowConfig;
        if (null != e)
            return (t) => {
                let { handleClose: n, step: i } = t;
                return (0, r.jsx)(e, { onClose: n, step: i });
            };
    }
    getPredicateStepConfig() {
        let { CUSTOM_PREDICATE_STEP_CONFIG: e } = this.tenantCheckoutFlowConfig,
            { predicateStepType: t } = this.internalCheckoutFlowControls;
        return null != e
            ? { key: null, renderStep: e.renderStep, options: e.options }
            : "one_time_payment" === t
              ? aH
              : "subscription" === t
                ? aW
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(aK, { paymentModalStepProps: e, defaultStep: u.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== h.C.ORB_CHECKOUT)
            return {
                key: u.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(ay, {
                        checkoutFlow: this.checkoutFlow,
                        paymentModalStepProps: e,
                        returnStep: u.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? u.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
            i = this.getCheckoutStep(u.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != i)
            return {
                key: u.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, r.jsx)(i, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => ed.intl.string(ed.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(u.pn.REVIEW);
        return {
            key: u.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => ed.intl.string(ed.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n, STEPS_BEFORE_CHECKOUT: i = [] } = this.tenantCheckoutFlowConfig,
            { excludePaymentAuthSteps: r } = this.internalCheckoutFlowControls,
            s = this.getPredicateStepConfig(),
            a = this.getGiftCustomizationStepConfig({ isGift: t }),
            o = this.getAddPaymentStepConfig({ isGift: t }),
            l = this.getReviewStepConfig(),
            d = this.createDefinedStepConfigsArray([s, ...(null != a ? [a] : []), ...i, o, ...(r ? [] : aY), l]);
        return null != n && d.push({ key: u.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), d;
    }
    getApplicationId(e) {
        return this.checkoutFlow === h.C.ORB_CHECKOUT && null != e
            ? (0, c.P)(e)
            : this.checkoutFlow === h.C.COLLECTIBLES_CHECKOUT
              ? eu.FYj
              : this.checkoutFlow === h.C.PREMIUM_CHECKOUT
                ? eo.tv
                : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: n,
            skuProductLine: i,
            applicationId: r,
            discoverySessionId: s,
            analyticsLocation: a,
            analyticsLocations: o,
            analyticsObject: l,
            analyticsSourceLocation: u,
            isGift: d,
            eligibleForTrial: c,
        } = e;
        _.default.track(eu.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: s,
            payment_type: eu.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: d,
            sku_id: n,
            sku_product_line: i,
            application_id: r,
            location: a ?? l,
            location_stack: o,
            source: u,
            eligible_for_trial: c,
            payment_modal_version: "v2",
            checkout_design: f.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === h.C.PREMIUM_CHECKOUT ? { subscription_type: eu.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    getStandaloneLoadId() {
        return (0, d.A)() ?? (0, a.A)();
    }
    renderCheckoutInstance(e) {
        let {
                giftContextProps: t,
                checkoutHandlers: { onComplete: i, onClose: u } = {},
                checkoutConfiguration: {
                    skuId: d,
                    skuProductLine: c,
                    discoverySessionId: _,
                    applicationId: h,
                    activeSubscription: f,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: E, analyticsSourceLocation: p },
                forwardedPaymentModalProps: { analyticsObject: g, ...A } = {},
                tenantParams: I,
            } = e,
            T = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            S = arguments.length > 2 ? arguments[2] : void 0,
            N = arguments.length > 3 ? arguments[3] : void 0,
            C = { current: N ?? (0, a.A)() },
            y = { current: null },
            { modalKey: v } = S,
            O = this.generateRenderHeader(),
            b = h ?? this.getApplicationId(d),
            L = !!(null != t && t.isGift),
            D = !1,
            P = {
                ...A,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: L }),
                onComplete: (e) => {
                    null != i && i(e), (D = !0);
                },
                onClose: u,
                renderHeader: O,
                skuId: d ?? null,
                tenantParams: I ?? {},
                loadId: C.current,
                onOrderCreated: function (e) {
                    (C.current = e.id), (y.current = e);
                },
                discoverySessionId: _,
                activeSubscription: f ?? null,
                applicationId: b,
                analyticsLocations: E,
                analyticsObject: g,
                analyticsSourceLocation: p,
                giftContextProps: t,
            };
        if ("modal" === T)
            return (0, o.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        n.e("11005"),
                        n.e("93438"),
                        n.e("54791"),
                        n.e("25246"),
                        n.e("33319"),
                        n.e("8430"),
                    ]).then(n.bind(n, 427325));
                    return (t) => (0, r.jsx)(e, { ...P, renderModalProps: t });
                },
                {
                    ...S,
                    onCloseRequest: () => {
                        null != S.onCloseRequest && S.onCloseRequest(D, C.current),
                            S.skipCloseModalOnCloseRequest || (0, o.closeModal)(v);
                    },
                    onCloseCallback: () => {
                        D ||
                            (m({ checkoutSucceeded: D, order: y.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: C.current,
                                skuId: d,
                                skuProductLine: c,
                                applicationId: b,
                                discoverySessionId: _,
                                analyticsLocation: A.analyticsLocation,
                                analyticsLocations: E,
                                analyticsObject: g,
                                analyticsSourceLocation: p,
                                isGift: L,
                                eligibleForTrial: null != A.trialId,
                            })),
                            null != S.onCloseCallback && S.onCloseCallback(D),
                            null != u && u(D, d);
                    },
                    modalKey: v,
                },
            );
        {
            let e = A.paymentModalOnClose ?? u,
                t = { transitionState: l.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, r.jsx)(s.Suspense, {
                fallback: (0, r.jsx)(R.Jg, {
                    transitionState: l.ip.ENTERED,
                    onClose: eu.tEg,
                    size: "md",
                    isModalContentLoading: !0,
                }),
                children: (0, r.jsx)(aq, { ...P, paymentModalOnClose: e, renderModalProps: t }),
            });
        }
    }
    openCheckoutModal(e) {
        let { modalAPIOptions: t } = e;
        return this.renderCheckoutInstance(e, "modal", t);
    }
    renderStandaloneCheckout(e, t) {
        return this.renderCheckoutInstance(e, "standalone", { modalKey: "standalone-checkout" }, t);
    }
}
