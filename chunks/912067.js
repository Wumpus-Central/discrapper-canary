"use strict";
n.d(t, { o: () => ai }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(835245),
    o = n(192308),
    l = n(231723),
    u = n(166532),
    c = n(925847),
    d = n(310829),
    _ = n(174459),
    h = n(75304),
    f = n(145659),
    p = n(624210),
    E = n(26279);
async function m(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === E.Re.DRAFT)
        try {
            await (0, p.Nl)(n.id);
        } catch (e) {}
}
var g = n(17928),
    A = n(444927),
    I = n(964486),
    T = n(793574),
    S = n(120700),
    y = n(171835),
    C = n(584160),
    N = n(169797),
    v = n(211159),
    R = n(832286),
    O = n(958340),
    b = n(566980),
    D = n(615310),
    L = n(489254),
    w = n(71393),
    M = n(178368),
    P = n(166403),
    x = n(473145),
    k = n(802790),
    U = n(636441),
    G = n(587491),
    F = n(285753),
    V = n(430993),
    B = n(86379),
    j = n(545075),
    H = n(655857),
    Y = n(534479),
    W = n(753390);
function K() {
    let e = (0, g.bG)([P.A], () => P.A.hasFetchedSubscriptions());
    return (
        s.useEffect(() => {
            e || (0, W.hP)();
        }, [e]),
        e
    );
}
var $ = n(769160),
    z = n(295405),
    q = n(786300);
let [Z, X, Q] = (0, q.A)();
function J(e) {
    let {
            initialNumGuildBoostsToPurchase: t,
            disablePremiumUpsell: n = !1,
            closeGuildPerksModal: i,
            children: a,
            guildId: o,
            analyticsLocation: l,
            analyticsSourceLocation: u,
            applicationId: c,
            intent: d,
            onSubscribeComplete: _,
        } = e,
        [h, f] = s.useState(t),
        [p, E] = s.useState(!0),
        m = (0, A.A)(() => Date.now()),
        I = (0, A.A)(() => (0, x.D$)(M.A.boostSlots).length),
        T = (0, v.t4)((e) => e.activeSubscription),
        S = (0, g.bG)([P.A], () => P.A.hasFetchedSubscriptions()),
        y = (0, g.bG)([z.A], () => z.A.defaultPaymentSourceId),
        C = null != T ? T.paymentSourceId : null,
        N = (0, $._V)(null != C ? C : S ? y : null);
    return (0, r.jsx)(Z.Provider, {
        value: {
            numGuildBoostsToPurchase: h,
            setNumGuildBoostsToPurchase: f,
            disablePremiumUpsell: n,
            closeGuildPerksModal: i,
            guildId: o,
            paymentModalArgs: N,
            premiumSubscriptionPaymentSourceId: C,
            analyticsLocation: l,
            analyticsSourceLocation: u,
            forceDisableSubmitButton: p,
            setForceDisableSubmitButton: E,
            applicationId: c,
            intent: d,
            onSubscribeComplete: _,
            flowStartTime: m,
            existingAvailableSlotCount: I,
        },
        children: a,
    });
}
var ee = n(160946),
    et = n(253390),
    en = n(97352),
    ei = n(615396),
    er = n(788868);
function es() {
    let e = (0, v.t4)((e) => e.activeSubscription),
        { numGuildBoostsToPurchase: t } = X(),
        n = (0, g.bG)([en.A], () => null == e || null != en.A.get(e.planId)),
        i = (0, ee.Y)(),
        r = (0, g.bG)([en.A], () => (null != e ? (0, ei.c9)(e.planId) : null)),
        a = s.useMemo(
            () => (null != e && n && i ? (0, et.v)(e, t) : [{ planId: er.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, i, t],
        ),
        o = s.useMemo(
            () =>
                a.find((e) => {
                    let { planId: t } = e;
                    return er.pW.has(t);
                })?.planId ?? er.gD.PREMIUM_MONTH_GUILD,
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
var ea = n(652215),
    eo = n(375708),
    el = n(898640);
function eu(e) {
    let { message: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.s3, { title: eo.intl.string(eo.t.q9EGps) }),
            (0, r.jsx)(V.c, { children: (0, r.jsx)("p", { className: el.C, children: t }) }),
        ],
    });
}
var ec = n(482132),
    ed = n(216641),
    e_ = n(879100);
function eh(e) {
    let { handleClose: t } = e,
        { guildId: n, numGuildBoostsToPurchase: i, paymentModalArgs: s, existingAvailableSlotCount: a } = X(),
        {
            activeSubscription: o,
            startingFractionalPremiumEndsAt: l,
            customCheckoutFlow: u,
            paymentSourceId: c,
        } = (0, v.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
        })),
        d = (0, g.bG)([O.A], () => (null != n ? O.A.getGuild(n) : void 0), [n]),
        _ = null != n ? w.A.getGuild(n) : null,
        h = (0, A.A)(() => (0, ei.b2)(l)),
        f = (0, g.bG)([en.A], () => (null != o ? (0, ei.c9)(o.planId) : null)),
        { paymentSources: p } = s,
        E = (0, ed.g)(p, c),
        m = null != _ ? _.name : null != d ? d.name : void 0,
        I = h && null != f && !er.YV.has(f.id);
    return (0, r.jsx)(ec.dZ, {
        children: (0, r.jsx)(e_.W, {
            guild: _,
            guildBoostQuantity: i + a,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: E,
            fallbackGuildName: m,
            didPurchaseOnFractionalPremium: I,
            customCheckoutFlow: u,
        }),
    });
}
var ef = n(284009),
    ep = n.n(ef),
    eE = n(683071),
    em = n(512950),
    eg = n(821609),
    eA = n(123292),
    eI = n(529427),
    eT = n(87719);
let eS = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ey = n(503698),
    eC = n.n(ey),
    eN = n(661531),
    ev = n(990078),
    eR = n(408278),
    eO = n(834040),
    eb = n(499373),
    eD = n(834730),
    eL = n(403581),
    ew = n(663803),
    eM = n(320448),
    eP = n(534514),
    ex = n(104510),
    ek = n(695366),
    eU = n(289873),
    eG = n(726656),
    eF = n(688810),
    eV = n(531260),
    eB = n(666646),
    ej = n(404374),
    eH = n(543767),
    eY = n(881489),
    eW = n(477421),
    eK = n(234419),
    e$ = n(363476),
    ez = n(531506),
    eq = n(51465);
function eZ() {
    return (0, r.jsxs)("div", {
        className: eC()(eq.dt, eq.dE),
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eq.qq,
            }),
            (0, r.jsx)(eD.E, {
                variant: "text-sm/medium",
                className: eq.tD,
                children: eo.intl.format(eo.t.f5VHKm, {}),
            }),
        ],
    });
}
function eX(e) {
    let { text: t, color: n } = e;
    return (0, r.jsxs)("div", {
        className: eq.dt,
        children: [(0, r.jsx)(eL.t, { size: "md", className: eq.YW, color: n }), (0, r.jsx)("div", { children: t })],
    });
}
var eQ = n(773669),
    eJ = n(287809),
    e0 = n(975571),
    e1 = n(252424),
    e2 = n(428262),
    e3 = n(580630),
    e6 = n(155718),
    e4 = n(606267),
    e5 = n(376843),
    e7 = n(38785),
    e8 = n(818824),
    e9 = n(596034),
    te = n(270537),
    tt = n(241989),
    tn = n(888751),
    ti = n(874638),
    tr = n(458785),
    ts = n(818348),
    ta = n(327105),
    to = n(7921);
function tl(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: i,
            totalDue: s,
            currency: a,
            startDate: o,
        } = e,
        { immediateDelivery: l } = (0, e8.U)();
    return (0, r.jsx)(e9._, {
        variant: {
            type: e9.I.Subscription,
            purchaseButtonText: eo.intl.string(eo.t.eUEeCt),
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
function tu(e) {
    return eo.intl.format(eo.t.IeaYqg, { endDate: e });
}
function tc(e) {
    let { text: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)("div", { className: to.bU }),
            (0, r.jsx)(eD.E, { variant: "text-sm/normal", className: to.b7, children: t }),
            (0, r.jsx)("div", { className: to.bU }),
        ],
    });
}
function td(e) {
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
                label: eo.intl.formatToPlainString(eo.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, e2.Mn)(n.id, !1, i),
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
            label: eo.intl.formatToPlainString(eo.t.ZSVged, { planName: (0, e2.RH)(i[0].subscriptionPlanId) }),
            tooltip: eo.intl.string(eo.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            l.push({
                id: "guild-boosting-adjustment",
                label: eo.intl.string(eo.t["+as5ZZ"]),
                tooltip: eo.intl.string(eo.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== a.tax && l.push({ id: "tax", label: eo.intl.string(eo.t.jiRvC7), amount: a.tax, lineItemType: "tax" });
    let { lineItems: u, currency: c } = (0, tn.EA)({ id: "main-line-item", amount: t, ...o }),
        d = [...u, ...l];
    return (0, r.jsx)(te.Vm, {
        defaultExpanded: !0,
        label: eo.intl.string(ta.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function t_(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: i, renewalInvoicePreview: s } = e;
    return null != n
        ? (0, r.jsx)(tr.m0, { proratedInvoice: i, renewalInvoice: s, isUpdate: t })
        : (0, r.jsx)(tr.m0, { renewalInvoice: s });
}
function th(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: i,
            currentPremiumSubscription: s,
            premiumSubscriptionPaymentSourceId: a,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: l,
            paymentSourceId: u,
            setPaymentSourceId: c,
            onPaymentSourceAdd: d,
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
                o = (0, g.bG)([w.A, O.A], () => {
                    let e = w.A.getGuild(n);
                    return null != e ? e : O.A.isGuildFetching(n) ? null : O.A.getGuild(n);
                }, [n]),
                l = s.interval,
                u = s.intervalCount,
                c = (0, g.bG)([en.A], () => en.A.getForSkuAndInterval((0, e2.mH)(er.pe.GUILD), l, u));
            ep()(null != c, "Missing guildBoostingSubscriptionPlan");
            let d = (0, e2.J$)(i.paymentSourceId),
                _ = (0, eY.ds)();
            t = null != r ? (0, e2.Om)(r, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: h } = (0, eF.Ay)(),
                [f, p] = (0, eH.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: T.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [E, m] = (0, eH.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: T.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, eB.OQ)({
                    checkoutInvoicePreview: f,
                    checkoutInvoiceError: p,
                    renewalInvoicePreview: E,
                    renewalInvoiceError: m,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: c,
                    isPrepaid: d,
                    isReverseTrial: _,
                    checkoutInvoicePreview: f,
                    renewalInvoicePreview: E,
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
            isPrepaid: p,
            isReverseTrial: E,
            checkoutInvoicePreview: m,
            renewalInvoicePreview: A,
        } = _,
        I = (0, e4.A)({ location: "GuildBoostReview", message: eo.intl.string(ta.default["tK8A/8"]) });
    if (null == m || null == A || null == f) return (0, r.jsx)(e7.E, {});
    let S = (0, r.jsx)(t_, {
            isSubscriptionUpdate: h,
            premiumSubscription: s,
            checkoutInvoicePreview: m,
            renewalInvoicePreview: A,
        }),
        y = (0, r.jsx)(e5.n, {
            setPaymentSourceId: c,
            paymentSourceId: u,
            location: "GuildBoostReview",
            label: eo.intl.string(eo.t["u+Cw58"]),
            onPaymentSourceAdd: d,
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
                paymentSourceType: (0, ed.g)(s, a),
                premiumSubscriptionPlan: n,
                renewalPrice: i.subtotal,
                totalDue: r.total,
                currency: r.currency,
                startDate: (0, tr.de)({ isSubscriptionUpdate: t, currentInvoice: r, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: h,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: A,
            checkoutInvoicePreview: m,
            paymentSources: n,
            paymentSourceId: u,
        }),
        N = (0, r.jsx)(tl, { ...C }),
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
                c = n.interval,
                d = n.intervalCount;
            function _(e) {
                return (0, ti.Z)(i.invoiceItems).find((t) => er.pW.has(t.subscriptionPlanId) && e(t));
            }
            let h = _((e) => e.amount >= 0);
            ep()(null != h, "Missing guild boosting invoice item");
            let f = _((e) => e.amount < 0),
                p = null != f ? h.quantity - f.quantity : h.quantity,
                E = i.invoiceItems.filter((e) => (0, e2.xq)(e.subscriptionPlanId)),
                m = E.reduce((e, t) => e + t.amount, 0),
                g = (0, eH.sL)(h) * p,
                A = (0, e3.$g)(g, i.currency),
                I = (0, e3.CE)(A, c, d),
                T = (0, e3.$g)(i.total, i.currency) + (i.currency !== ts.Yr.USD ? "*" : ""),
                S = i.subtotal - g - m,
                y = h.discounts.map((e) => {
                    let t = e.amount / h.quantity;
                    return { ...e, amount: t * p };
                }),
                C = y.find((e) => e.type === e6.iS.SUBSCRIPTION_PLAN),
                N = y.find((e) => e.type === e6.iS.ENTITLEMENT),
                v = h.subscriptionPlanPrice * p;
            return {
                addedQuantity: p,
                guildBoostingSubscriptionPlan: o,
                isPrepaid: l,
                isReverseTrial: u,
                formattedGuildBoostPrice: A,
                formattedGuildBoostRate: I,
                formattedOriginalAmountGuildBoostRate: (0, e3.CE)((0, e3.$g)(v, i.currency), c, d),
                formattedTotal: T,
                basePlanAdjustment: m,
                basePlanInvoiceItems: E,
                guildBoostingAdjustment: S,
                subscriptionDiscount: C,
                entitlementDiscount: N,
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
        R = (0, r.jsx)(td, { ...v }),
        b = (function (e, t, n) {
            let {
                    addedQuantity: i,
                    guildBoostingSubscriptionPlan: s,
                    isPrepaid: a,
                    formattedGuildBoostRate: o,
                    formattedOriginalAmountGuildBoostRate: l,
                    subscriptionDiscount: u,
                } = t,
                c = null != u;
            return {
                label: eo.intl.formatToPlainString(eo.t.a3cAOg, {
                    numGuildSubscriptions: i,
                    planName: (0, e2.Mn)(s.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, r.jsx)(tt.a6, {}),
                price: o,
                PriceIcon: c ? eL.t : void 0,
                priceTooltip: c ? eo.intl.string(ta.default.YUNJJa) : void 0,
                priceSubText: c ? l : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            f,
            v,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: i } = e;
                return !t && n && null != i ? { type: "reverseTrial", text: tu(i.currentPeriodEnd) } : null;
            })({ isPrepaid: p, isReverseTrial: E, premiumSubscription: s }),
        ),
        D = (0, r.jsx)(tt.f7, { ...b });
    return (0, r.jsx)(e7.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: I,
        purchaseItemContent: D,
        subscriptionDetailsContent: S,
        paymentMethodContent: y,
        invoiceSummaryContent: R,
        legalContent: N,
        invoiceTotalDueValue: v.formattedTotal,
        invoiceTotalDueLabel: eo.intl.string(ta.default.R0cZsM),
    });
}
var tf = n(406263);
function tp(e) {
    return "" === e || "-" === e;
}
function tE(e) {
    let { value: t, onChange: n, minValue: i = 1, maxValue: a = 30, ariaLabel: o } = e,
        [l, u] = s.useState(t);
    s.useEffect(() => {
        u(t);
    }, [t]);
    let c = "number" == typeof l;
    function d(e) {
        u(e), tp(e) || n(e);
    }
    return (0, r.jsxs)("div", {
        className: tf.U$,
        children: [
            (0, r.jsx)(eR.K, {
                variant: "secondary",
                size: "md",
                icon: eO.Q,
                onClick: () => {
                    c && !(l <= i) && d(l - 1);
                },
                "aria-label": eo.intl.string(eo.t["k+ohJm"]),
                disabled: !c || l <= i,
            }),
            (0, r.jsx)("div", {
                className: tf.WJ,
                children: (0, r.jsx)("input", {
                    className: tf.Zh,
                    "aria-label": o,
                    inputMode: "numeric",
                    value: `${l}`,
                    onChange: (e) =>
                        (function (e) {
                            if (tp(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= i) return void d(i);
                                if (t >= a) return void d(a);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: function () {
                        tp(l) && u(t);
                    },
                }),
            }),
            (0, r.jsx)(eR.K, {
                variant: "secondary",
                size: "md",
                icon: eb.T,
                onClick: () => {
                    c && !(l >= a) && d(l + 1);
                },
                "aria-label": eo.intl.string(eo.t.w8Sc4B),
                disabled: !c || l >= a,
            }),
        ],
    });
}
function tm(e) {
    let { message: t } = e;
    return (0, r.jsx)(eD.E, { variant: "text-xs/normal", color: "text-muted", className: tf.jH, children: t });
}
function tg(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: tf.Vk,
        children: [
            (0, r.jsx)("div", {
                className: tf.D0,
                children: (0, r.jsx)(eL.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: tf.ue,
                    color: ej.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, r.jsx)("div", { className: tf.yP, children: t }),
        ],
    });
}
function tA(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        planLabel: a,
        planPriceContent: o,
        subtotalContent: l,
        refreshSubtotalContent: u,
        legacyDescriptionContent: c,
        refreshDescriptionContent: d,
        fractionalBanner: _,
        existingSlotNotice: h,
        discountCallout: f,
        refreshDiscountCallout: p,
        legacyPricingNotes: E,
        refreshPricingNotes: m,
    } = e;
    return (0, r.jsxs)("div", {
        children: [
            _,
            c,
            h,
            (0, r.jsxs)("div", {
                className: to.mP,
                children: [
                    (0, r.jsxs)("div", {
                        className: to.E6,
                        children: [
                            (0, r.jsx)(ew.l, {
                                value: n,
                                onChange: (e) => i(e),
                                className: to.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)("div", { className: to.$0, children: a }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eC()(to.QK, { [to.S]: t }), children: o }),
                ],
            }),
            (0, r.jsx)("div", { className: to.J3 }),
            (0, r.jsxs)("div", {
                className: to.mP,
                children: [
                    (0, r.jsx)("div", { className: to.xp, children: eo.intl.string(eo.t.RtA7nR) }),
                    (0, r.jsx)("div", {
                        className: eC()(to.__invalid_planSelectorSubtotalPrice, { [to.S]: t }),
                        children: l,
                    }),
                ],
            }),
            E.map((e, t) => (0, r.jsx)(s.Fragment, { children: e }, t)),
            f,
        ],
    });
}
function tI(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        refreshNextStepLabel: a,
        planLabel: o,
        planPriceContent: l,
        subtotalContent: u,
        refreshSubtotalContent: c,
        legacyDescriptionContent: d,
        refreshDescriptionContent: _,
        fractionalBanner: h,
        existingSlotNotice: f,
        discountCallout: p,
        refreshDiscountCallout: E,
        legacyPricingNotes: m,
        refreshPricingNotes: g,
    } = e;
    return (0, r.jsxs)("div", {
        className: tf.xY,
        children: [
            h,
            (0, r.jsxs)("div", {
                className: tf.K3,
                children: [
                    (0, r.jsx)(eD.E, {
                        variant: "text-md/medium",
                        className: tf.bk,
                        children: eo.intl.string(eo.t["r+SebU"]),
                    }),
                    (0, r.jsx)(eM._, { className: tf.bN, color: "currentColor", size: "xs" }),
                    (0, r.jsx)(eD.E, { variant: "text-md/medium", className: tf.kX, children: a }),
                ],
            }),
            _,
            f,
            (0, r.jsxs)("div", {
                className: tf.fh,
                children: [
                    (0, r.jsxs)("div", {
                        className: tf.fX,
                        children: [
                            (0, r.jsx)(tE, {
                                value: n,
                                onChange: (e) => i(e),
                                ariaLabel: o,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)(eD.E, { variant: "text-md/medium", className: tf.ny, children: o }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eC()(tf.El, { [to.S]: t }), children: l }),
                ],
            }),
            E,
            (0, r.jsxs)("div", {
                className: tf.fh,
                children: [
                    (0, r.jsx)(eP.D, {
                        variant: "heading-lg/semibold",
                        className: tf.O3,
                        children: eo.intl.string(eo.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", { className: eC()(tf.BU, { [to.S]: t }), children: c }),
                ],
            }),
            g.map((e, t) => (0, r.jsx)(s.Fragment, { children: e }, t)),
        ],
    });
}
function tT(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: i } = e;
    return (0, r.jsxs)("div", {
        className: to.Mv,
        children: [
            (0, r.jsx)(ex._, { className: to.T5, color: eN.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, r.jsxs)("div", {
                children: [
                    eo.intl.format(eo.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != i
                        ? (0, r.jsx)(ev.m, {
                              text: eo.intl.formatToPlainString(eo.t.SFpsCH, {
                                  canceledCount: n,
                                  date: i.currentPeriodEnd,
                              }),
                              children: (0, r.jsx)(ek.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: to.Y5,
                                  color: eN.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function tS(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: i,
            setForceDisableSubmitButton: a,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: l,
            existingAvailableSlots: u = [],
            priceOptions: c,
            isRefreshEnabled: d = !1,
            showRefreshSubtotalRate: _ = !1,
            refreshNextStepLabel: h = eo.intl.string(eo.t.QBnNHq),
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
                    existingAvailableSlots: c,
                    priceOptions: d,
                    showRefreshSubtotalRate: _,
                } = e,
                h =
                    ((t = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription())),
                    (0, g.bG)([z.A], () =>
                        t?.paymentSourceId != null ? z.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                f = i.interval,
                p = i.intervalCount,
                E = (0, g.bG)([en.A], () => en.A.getForSkuAndInterval((0, e2.mH)(er.pe.GUILD), f, p)),
                m = (0, g.bG)([eJ.default], () => eJ.default.getCurrentUser()),
                A = (0, eV.A)({ forceFetch: !1 });
            ep()(null != E, "Missing guildBoostingSubscriptionPlan");
            let I = [{ planId: E.id, quantity: 1 }],
                S = l?.items.find(
                    (e) => e.planId === er.gD.PREMIUM_MONTH_TIER_2 || e.planId === er.gD.PREMIUM_YEAR_TIER_2,
                );
            null != S && I.push(S);
            let y = l?.items.find(
                    (e) => e.planId === er.gD.PREMIUM_MONTH_GUILD || e.planId === er.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == h || !er.uJ.has(h) || null == y,
                { analyticsLocations: N } = (0, eF.Ay)(),
                [v, R] = (0, eH.YV)({
                    subscriptionId: l?.id,
                    items: I,
                    renewal: !0,
                    paymentSourceId: l?.paymentSourceId,
                    currency: d.currency,
                    preventFetch: C,
                    analyticsLocations: N,
                    analyticsLocation: T.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, eB.Tr)(v, R);
            let O = !C && null == v && null == R;
            s.useLayoutEffect(() => {
                o(O);
            }, [O, o]);
            let b = (0, eK.V)()?.subscription_trial?.sku_id === er.pe.TIER_2,
                D = e2.Ay.hasBoostDiscount(m),
                L = D && null != l && e2.Ay.isPremiumAtLeast(e2.Ay.getPremiumType(l.planId), er.PremiumTypes.TIER_1),
                w = v?.findInvoiceItemByPlanId(E.id),
                M =
                    null != w
                        ? { amount: w.amount, tax: 0, taxInclusive: !0, currency: v.currency }
                        : e2.Ay.getPrice(E.id, D, !1, d),
                k = a * M.amount,
                U = (0, eY.ds)() && D && null != l,
                G = (function (e) {
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
                            showFractionalPremiumBanner: i === er.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: c.length,
                    fractionalPremiumState: A.fractionalState,
                    isReverseTrial: U,
                    hasDiscountUpsell: L,
                    withTrialOfferCopyVariant: b,
                });
            "discount" === G.upsellVariant
                ? (ep()(null != l, "Missing premiumSubscription for discount upsell variant"),
                  (n = eo.intl.format(eo.t.hf6YOY, { planName: e2.Ay.getTierDisplayNameByPlanId(l.planId) })))
                : (n = eo.intl.format("upsell_trial" === G.upsellVariant ? eo.t.ba1L74 : eo.t.fkffDT, {
                      onPremiumSubscriptionClick: u,
                      discountPercentage: (0, e1.l9)(eQ.default.locale, er.oX / 100),
                      freeSubscriptionCount: er.M4,
                  }));
            let F = c.filter((e) => (0, x.I5)(e)).length,
                V = (0, e2.J$)(d.paymentSourceId),
                { ipCountryCode: B } = (0, eW.A)(),
                j = "HR" === B && M.currency === ts.Yr.EUR,
                H =
                    U && null != l
                        ? (0, r.jsx)(tc, { text: tu(l.currentPeriodEnd) })
                        : (0, r.jsx)("div", { className: eC()(to.hA, to.G3), children: eo.intl.string(eo.t.jNY1FO) }),
                Y =
                    U && null != l
                        ? (0, r.jsx)(tc, { text: tu(l.currentPeriodEnd), className: to.jk })
                        : (0, r.jsx)("div", { className: tf._X, children: eo.intl.string(eo.t.jNY1FO) }),
                W = G.showExistingSlotNotice
                    ? (0, r.jsx)(tT, { existingAvailableSlots: c, canceledCount: F, premiumSubscription: l })
                    : null,
                K = G.showFractionalPremiumBanner ? (0, r.jsx)(ez.vi, { fractionalPremiumInfo: A }) : null,
                $ = V
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === er.WT.YEAR
                              ? eo.intl.string(eo.t.YDpAzZ)
                              : t === er.WT.MONTH && 1 === n
                                ? eo.intl.string(eo.t["6ZR3By"])
                                : null;
                      })({ intervalType: f, intervalCount: p }) ?? eo.intl.string(eo.t.K9Bmze))
                    : eo.intl.string(eo.t.K9Bmze),
                q = O
                    ? (0, r.jsx)(eU.y, {})
                    : V
                      ? (0, e3.$g)(M.amount, M.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: i, intervalCount: r = 1 } = e,
                                s = (0, e3.$g)(t, n);
                            return i === er.WT.YEAR
                                ? eo.intl.formatToPlainString(eo.t["8M04YJ"], { price: s })
                                : i === er.WT.MONTH && 1 === r
                                  ? eo.intl.formatToPlainString(eo.t.VStWCR, { price: s })
                                  : i === er.WT.MONTH && r > 1
                                    ? eo.intl.formatToPlainString(eo.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: f, intervalCount: p, amount: M.amount, currency: M.currency }),
                Z = O
                    ? (0, r.jsx)(eU.y, {})
                    : (0, r.jsx)(e$.A, {
                          price: k,
                          currency: M.currency,
                          intervalType: f,
                          intervalCount: p,
                          isPrepaidPaymentSource: V,
                      }),
                X = O
                    ? (0, r.jsx)(eU.y, {})
                    : _ && !V
                      ? (0, e3.CE)((0, e3.$g)(k, M.currency), f, p)
                      : (0, e3.$g)(k, M.currency),
                Q = [],
                J = [];
            if (j) {
                let e = (0, r.jsx)(
                    eG.A,
                    {
                        message: eo.intl.formatToPlainString(eo.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, e3.$g)(7.5345 * k, ts.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                Q.push(e), J.push(e);
            }
            let ee = eo.intl.format(eo.t.Om31w8, { documentationLink: e0.A.getArticleURL(ea.MVz.LOCALIZED_PRICING) });
            return (
                Q.push((0, r.jsx)(eG.A, { message: ee }, "localized-pricing")),
                J.push((0, r.jsx)(tm, { message: ee }, "localized-pricing")),
                {
                    isLoading: O,
                    planLabel: $,
                    planPriceContent: q,
                    subtotalContent: Z,
                    refreshSubtotalContent: X,
                    legacyDescriptionContent: H,
                    refreshDescriptionContent: Y,
                    existingSlotNotice: W,
                    fractionalBanner: K,
                    legacyPricingNotes: Q,
                    refreshPricingNotes: J,
                    discountCallout:
                        "reverse_trial" === G.upsellVariant
                            ? (0, r.jsx)(eZ, {})
                            : (0, r.jsx)(eX, { text: n, color: ej.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === G.upsellVariant ? (0, r.jsx)(eZ, {}) : (0, r.jsx)(tg, { text: n }),
                }
            );
        })({
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setForceDisableSubmitButton: a,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: l,
            existingAvailableSlots: u,
            priceOptions: c,
            showRefreshSubtotalRate: _,
        });
    return (0, r.jsx)(d ? tI : tA, {
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
let ty = er.gD.NONE_MONTH,
    tC = [er.pe.GUILD];
function tN(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            numGuildBoostsToPurchase: i,
            setNumGuildBoostsToPurchase: s,
            guildId: a,
            closeGuildPerksModal: o,
            disablePremiumUpsell: l,
            setForceDisableSubmitButton: c,
            forceDisableSubmitButton: d,
            paymentModalArgs: _,
            premiumSubscriptionPaymentSourceId: h,
        } = X(),
        { paymentSourceId: f, activeSubscription: p } = (0, v.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: E } = (0, H.Jn)(),
        m = null != h || Object.keys(_.paymentSources).length > 0,
        I = (0, u.Ir)(m ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS),
        T = (0, A.A)(() => (0, x.D$)(M.A.boostSlots)),
        S = (0, L.n)("GuildBoostPurchaseModal"),
        y = eS.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        C = S && y,
        N = (0, g.bG)([O.A], () => (null != a ? O.A.getGuild(a) : void 0), [a]),
        R = null != a ? w.A.getGuild(a) : null,
        b = null == N && null == R,
        D = null != p && p.isPurchasedExternally,
        P = Object.keys(_.paymentSources).length > 0,
        k = (0, g.bG)([en.A], () => (null != p ? (0, ei.c9)(p.planId) : null)),
        U = (0, g.bG)([en.A], () => (null == k ? en.A.get(ty) : k));
    if (null == a) throw new eI.vd({ message: "Missing guildId" });
    ep()(null != U, "Missing nextPremiumSubscriptionPlan");
    let G = (0, r.jsx)(tS, {
        premiumSubscriptionPlan: U,
        numGuildBoosts: i,
        setNumGuildBoosts: s,
        setForceDisableSubmitButton: c,
        premiumSubscription: p,
        existingAvailableSlots: T,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != o && o(), (0, eT.e)();
        },
        priceOptions:
            null != f ? { paymentSourceId: f, currency: null != E ? E : void 0 } : { currency: null != E ? E : void 0 },
        isRefreshEnabled: S,
        showRefreshSubtotalRate: C,
        refreshNextStepLabel: I,
    });
    return (
        D && null != p && null != p.paymentGateway
            ? (G = (0, r.jsxs)("div", {
                  className: el.xK,
                  children: [
                      (0, r.jsx)(eE.w, {
                          type: "critical",
                          children: eo.intl.format(eo.t["/m3Y3s"], { paymentGatewayName: ts.qm[p.paymentGateway] }),
                      }),
                      G,
                  ],
              }))
            : null != a &&
              !O.A.isGuildFetching(a) &&
              b &&
              (G = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(em.p, {
                          messageType: em.Y.ERROR,
                          className: el.MR,
                          children: eo.intl.string(eo.t.eAn6z2),
                      }),
                      G,
                  ],
              })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ec.dZ, { children: G }),
                (0, r.jsx)(ec.UX, {
                    children: (0, r.jsx)(e_._, {
                        currentStep: u.pn.PLAN_SELECT,
                        isRefreshEnabled: S,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: S
                            ? (0, r.jsx)(eg.$, {
                                  variant: "secondary",
                                  text: eo.intl.string(eo.t["ETE/oC"]),
                                  onClick: t,
                              })
                            : (0, r.jsx)(eA.Q, { text: eo.intl.string(eo.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, r.jsx)(eg.$, {
                            variant: "primary",
                            text: eo.intl.string(eo.t["3PatSz"]),
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
                                forceDisableSubmitButton: d,
                                numGuildBoostsToPurchase: i,
                                isDisabledBecauseExternalSubscription: D,
                                isMissingGuildInformation: b,
                            }),
                            onClick: () => {
                                l || (null != k && k.premiumSubscriptionType === er.PremiumTypes.TIER_2)
                                    ? n(null != h || P ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS)
                                    : n(u.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
var tv = n(364840),
    tR = n(460905),
    tO = n(183623),
    tb = n(95635),
    tD = n(935462),
    tL = n(331322),
    tw = n(532794),
    tM = n(811611),
    tP = n(901017),
    tx = n(403052);
function tk(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, g.bG)([eQ.default], () => eQ.default.locale);
    return (0, r.jsxs)("div", {
        className: tx.mH,
        children: [
            (0, r.jsx)(tP.A, {
                icon: ex._,
                iconClassName: tx.pl,
                description: eo.intl.formatToPlainString(eo.t.sQBgs2, { numFreeGuildSubscriptions: er.M4 }),
                color: eN.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, r.jsx)(tP.A, {
                icon: ex._,
                iconClassName: tx.pl,
                description: eo.intl.formatToPlainString(eo.t["1A6vXi"], { percent: (0, e1.l9)(n, er.oX / 100) }),
                color: eN.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, r.jsx)(tP.A, { icon: tR.n, iconClassName: tx.zO, description: eo.intl.string(eo.t.Z9b2x2) }) : null,
            (0, r.jsx)(tP.A, { icon: tO.F, iconClassName: tx.Kg, description: eo.intl.string(eo.t["8dqG5E"]) }),
            (0, r.jsx)(tP.A, { icon: tb.J, iconClassName: tx.$z, description: eo.intl.string(eo.t.cBorIy) }),
        ],
    });
}
function tU(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: i,
            onSkip: a,
            onSubscriptionConfirmation: o,
            analyticsLocation: l,
            analyticsSourceLocation: u,
            priceOptions: c,
        } = e,
        { analyticsLocations: d, sourceAnalyticsLocations: h } = (0, eF.Ay)(T.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        f = null == t || null == t.premiumSubscriptionType,
        p = e2.Ay.getPrice(er.gD.PREMIUM_MONTH_TIER_2, !1, !1, c),
        E = (0, e3.$g)(p.amount, p.currency),
        m = (0, eK.V)(),
        g = m?.trial_id,
        A = m?.subscription_trial?.sku_id === er.pe.TIER_2;
    return (
        s.useEffect(() => {
            _.default.track(ea.HAw.PREMIUM_UPSELL_VIEWED, { type: er.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tD.s_, { "data-migration-pending": !0, onClick: n, className: tx.b }),
                (0, r.jsxs)(V.c, {
                    children: [
                        A && (0, r.jsx)(tM.Vq, { className: tx.Fg }),
                        (0, r.jsx)("div", { className: eC()(tx.Tn, { [tx.NH]: A }) }),
                        (0, r.jsx)("div", {
                            className: tx.G3,
                            children:
                                null != g
                                    ? eo.intl.string(eo.t.AoSzEr)
                                    : eo.intl.format(eo.t["7vePZb"], { monthlyPrice: E }),
                        }),
                        (0, r.jsx)(tk, { shouldUpsellFromNoneTier: f }),
                    ],
                }),
                (0, r.jsx)(tv.j, {
                    children: (0, r.jsxs)(tL.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(eA.Q, {
                                text: eo.intl.string(eo.t["13/7kX"]),
                                onClick: i,
                                variant: "secondary",
                            }),
                            (0, r.jsxs)(tL.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, r.jsx)(eA.Q, {
                                        text: eo.intl.string(eo.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, r.jsx)(eg.$, {
                                        variant: "active",
                                        text: null != g ? eo.intl.string(eo.t["Gd/XHF"]) : eo.intl.string(eo.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, tw.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: er.pe.TIER_2,
                                                    analyticsLocations: d,
                                                    analyticsObject: {
                                                        ...l,
                                                        section: ea.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
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
function tG(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: i } = e,
        { paymentModalArgs: a, analyticsLocation: o, analyticsSourceLocation: l } = X(),
        { paymentSourceId: c, activeSubscription: d } = (0, v.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: _ } = (0, H.Jn)(),
        h = (0, g.bG)([en.A], () => (null != d ? (0, ei.c9)(d.planId) : null)),
        f = (0, g.bG)([en.A], () => (null == h ? en.A.get(ty) : h));
    ep()(null != f, "Missing nextPremiumSubscriptionPlan"), ep()(null != _ && "" !== _, "Currency not defined");
    let { paymentSources: p } = a,
        E = null != d ? d.paymentSourceId : null,
        m = Object.keys(p).length > 0,
        A = s.useCallback(() => n(u.pn.PLAN_SELECT), [n]),
        I = s.useCallback(() => n(null != E || m ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS), [n, E, m]);
    return (0, r.jsx)(tU, {
        premiumSubscriptionPlan: f,
        analyticsLocation: o,
        analyticsSourceLocation: l,
        onClose: t,
        onBack: A,
        onSkip: I,
        onSubscriptionConfirmation: i,
        priceOptions: null != c ? { paymentSourceId: c, currency: _ } : { currency: _ },
    });
}
var tF = n(364995),
    tV = n(820739);
async function tB(e, t) {
    await (0, tV.CD)();
    let n = (0, x.D$)(M.A.boostSlots);
    return (0, tV.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
var tj = n(825755);
function tH(e) {
    let { onComplete: t } = e,
        {
            guildId: n,
            intent: i,
            onSubscribeComplete: r,
            flowStartTime: a,
            numGuildBoostsToPurchase: o,
            analyticsLocation: l,
            analyticsSourceLocation: c,
            paymentModalArgs: d,
        } = X(),
        { setIsSubmittingCurrentStep: h, paymentSources: f } = d,
        { premiumGuildSubscriptionPlanId: p } = es(),
        {
            paymentSourceId: E,
            setPurchaseState: m,
            setPurchaseError: A,
            loadId: I,
            startTime: T,
        } = (0, v.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            loadId: e.contextMetadata.loadId,
            startTime: e.contextMetadata.startTime,
        })),
        y = (0, D.l)(),
        C = (0, eF.Db)(),
        N = (0, g.bG)([tj.A], () => tj.A.popupCallbackCalled),
        R = {
            baseAnalyticsData: s.useMemo(
                () => ({
                    load_id: I,
                    payment_type: ts.fr[ts.VV.SUBSCRIPTION],
                    subscription_type: ea.rzx.PREMIUM,
                    subscription_plan_id: p,
                    sku_id: (0, e2.mH)(er.pe.GUILD),
                    quantity: o,
                    location: l,
                    source: c,
                    location_stack: C,
                    checkout_flow: S.C.GUILD_BOOST_CHECKOUT,
                    is_gift: !1,
                    eligible_for_trial: !1,
                    guild_id: n ?? void 0,
                }),
                [I, p, o, l, c, C, n],
            ),
            flowStartTime: a,
            startTime: T,
            guildId: n,
            onComplete: t,
            onSubscribeComplete: r,
            paymentSourceId: E,
            paymentSources: f,
            setIsSubmittingCurrentStep: h,
            setPurchaseError: A,
            setPurchaseState: m,
            setStep: y,
        },
        O = s.useRef(R);
    return (
        s.useEffect(() => {
            O.current = R;
        }),
        s.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: t,
                startTime: n,
                guildId: r,
                onComplete: s,
                onSubscribeComplete: a,
                paymentSourceId: o,
                paymentSources: l,
                setIsSubmittingCurrentStep: c,
                setPurchaseError: d,
                setPurchaseState: h,
                setStep: f,
            } = O.current;
            (async () => {
                if (!0 === N)
                    try {
                        if (null == tj.A.redirectedPaymentId) return;
                        await (0, W.tn)(tj.A.redirectedPaymentId),
                            _.default.track(ea.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                ...e,
                                duration_ms: Date.now() - n,
                                payment_source_type: (0, ed.g)(l, o) ?? void 0,
                            }),
                            d(null),
                            f(u.pn.CONFIRM),
                            h(b.h.COMPLETED),
                            null != r && (await tB(r, null != i)),
                            a?.(),
                            null != s && s();
                    } catch (r) {
                        h(b.h.FAIL), d(r);
                        let { guild_id: n, ...i } = e;
                        _.default.track(ea.HAw.PAYMENT_FLOW_FAILED, {
                            ...i,
                            payment_error_code: r?.code,
                            payment_gateway: ea.kM_.STRIPE,
                            payment_source_id: o,
                            duration_ms: Date.now() - t,
                        });
                    } finally {
                        c(!1), (0, W.bl)();
                    }
            })();
        }, [N, i]),
        null
    );
}
let tY = [u.pn.PLAN_SELECT],
    tW = [
        { key: u.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(tN, { ...e }), options: { renderHeader: !0 } },
        {
            key: u.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(tG, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    tK = {
        CHECKOUT_FLOW: S.C.GUILD_BOOST_CHECKOUT,
        CustomCheckoutPredicateStep: function (e) {
            let { handleStepChange: t } = e,
                n = (0, v.t4)((e) => e.activeSubscription),
                { guildId: i, analyticsLocation: a } = X(),
                o = (0, B.Hp)(),
                l = K(),
                { hasFetchedRelatedSubscriptionPlans: c, displayCurrency: d } = (0, H.Jn)(),
                { hasFetchedPremiumSubscriptionPlan: h } = es(),
                f = null != n && null != n.renewalMutations,
                p = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
                E = !l || !c || !h || null == d || "" === d;
            return ((0, I.Ay)(() => {
                f && _.default.track(ea.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: a, guild_id: i });
            }),
            s.useEffect(() => {
                E || o || p || f || t(u.pn.PLAN_SELECT);
            }, [E, o, p, f, t]),
            p)
                ? (0, r.jsx)(eu, { message: eo.intl.string(eo.t.mOWsF1) })
                : f
                  ? (0, r.jsx)(eu, { message: eo.intl.string(eo.t.npfhh0) })
                  : E
                    ? (0, r.jsx)(Y.A, {})
                    : o
                      ? (0, r.jsx)(j.oO, {})
                      : null;
        },
        STEPS_BEFORE_CHECKOUT: tW,
        CHECKOUT_STEPS: {
            [u.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                    { guildId: a, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: l } = X(),
                    {
                        activeSubscription: c,
                        paymentSourceId: d,
                        setPaymentSourceId: h,
                    } = (0, v.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: f } = (0, H.Jn)();
                if (null == a) throw new eI.vd({ message: "Missing guildId" });
                ep()(null != f && "" !== f, "Currency not defined");
                let { paymentSources: p } = o,
                    { newAdditionalPlans: E, currentPremiumSubscriptionPlan: m } = es(),
                    A = (0, g.bG)([en.A], () => (null == m ? en.A.get(ty) : m));
                ep()(null != A, "Missing nextPremiumSubscriptionPlan");
                let I = null != d ? { paymentSourceId: d, currency: f } : { currency: f },
                    T = (function (e) {
                        let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                            {
                                guildId: r,
                                paymentModalArgs: a,
                                premiumSubscriptionPaymentSourceId: o,
                                numGuildBoostsToPurchase: l,
                                analyticsLocation: c,
                                analyticsSourceLocation: d,
                                flowStartTime: h,
                                applicationId: f,
                                intent: p,
                                onSubscribeComplete: E,
                            } = X(),
                            { displayCurrency: m } = (0, H.Jn)(),
                            { paymentSources: g, setIsSubmittingCurrentStep: A, isSubmittingCurrentStep: I } = a,
                            {
                                activeSubscription: T,
                                paymentSourceId: S,
                                setPurchaseError: y,
                                hasAcceptedTerms: C,
                                setPurchaseState: N,
                            } = (0, v.t4)((e) => ({
                                activeSubscription: e.activeSubscription,
                                paymentSourceId: e.paymentSourceId,
                                setPurchaseError: e.setPurchaseError,
                                hasAcceptedTerms: e.hasAcceptedTerms,
                                setPurchaseState: e.setPurchaseState,
                            })),
                            R = (0, eB.sw)(),
                            {
                                newAdditionalPlans: O,
                                currentPremiumSubscriptionPlan: D,
                                premiumGuildSubscriptionPlanId: L,
                            } = es(),
                            w = (0, e4.A)({
                                location: "GuildBoostPurchaseModal",
                                message: eo.intl.string(ta.default["tK8A/8"]),
                            }),
                            { checkoutPaymentSources: M } = (0, tF.t)(),
                            P = (0, e4.iB)({
                                checkoutPaymentSources: M,
                                paymentSourceId: S,
                                location: "GuildBoostPurchaseModal",
                            }),
                            x = s.useMemo(
                                () => ({
                                    ...i,
                                    location: c,
                                    source: d,
                                    subscription_plan_id: L,
                                    sku_id: (0, e2.mH)(er.pe.GUILD),
                                    quantity: l,
                                }),
                                [i, c, d, l, L],
                            ),
                            k = s.useMemo(() => {
                                let { guild_id: e, ...t } = x;
                                return t;
                            }, [x]),
                            [U, G] = s.useState(!1),
                            F = null != S ? { paymentSourceId: S, currency: m ?? void 0 } : { currency: m ?? void 0 },
                            V = async () => {
                                ep()(null != O, "Missing newAdditionalPlans");
                                let e = (0, ed.W)(g, S);
                                y(null);
                                try {
                                    N(b.h.PURCHASING),
                                        A(!0),
                                        ep()(null != S, "Missing paymentSourceId"),
                                        ep()(null != R, "Missing invoicePreview");
                                    let s = { amount: R.total, currency: R.currency },
                                        a = F.currency ?? R.currency,
                                        l = (0, e2.U8)(T, O, a.toLowerCase(), F.paymentSourceId);
                                    if (
                                        (_.default.track(ea.HAw.PAYMENT_FLOW_COMPLETED, {
                                            ...x,
                                            duration_ms: Date.now() - h,
                                            guild_id: r ?? void 0,
                                            application_id: f,
                                        }),
                                        U)
                                    )
                                        return;
                                    if (null == T || null == D) {
                                        ep()(null != e, "Missing paymentSource");
                                        let t = await (0, W.Ky)({
                                            items: O,
                                            paymentSource: e,
                                            currency: a,
                                            expectedInvoicePrice: s,
                                            expectedRenewalPrice: l,
                                        });
                                        if (t.redirectConfirmation) return void G(null != t.redirectURL);
                                    } else {
                                        let t = { items: (0, e2.aE)(T, O) };
                                        (t.currency = T.currency ?? a),
                                            (t.paymentSource = null != o ? g[o] : void 0),
                                            null == t.paymentSource &&
                                                (ep()(null != e, "Missing paymentSource"),
                                                (t.paymentSource = e),
                                                (t.currency = a));
                                        let n = await (0, W.nV)(T, t, s, l, i.location_stack);
                                        if (n.redirectConfirmation) return void G(null != n.redirectURL);
                                    }
                                    null == p && t(u.pn.CONFIRM),
                                        N(b.h.COMPLETED),
                                        null != r && (await tB(r, null != p)),
                                        null != p && n(),
                                        E?.();
                                } catch (t) {
                                    N(b.h.FAIL),
                                        y(t),
                                        _.default.track(ea.HAw.PAYMENT_FLOW_FAILED, {
                                            ...k,
                                            payment_error_code: t?.code,
                                            payment_gateway:
                                                null != e
                                                    ? e.type === ea.hes.CARD
                                                        ? ea.kM_.STRIPE
                                                        : ea.kM_.BRAINTREE
                                                    : null,
                                            payment_source_id: S,
                                            duration_ms: Date.now() - h,
                                        });
                                } finally {
                                    U || A(!1);
                                }
                            };
                        return {
                            text: eo.intl.string(eo.t.eUEeCt),
                            loading: I,
                            disabled: null == S || !C || null != w || P,
                            onClick: V,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: i }),
                    S = s.useCallback(() => {
                        t(u.pn.ADD_PAYMENT_STEPS), h(null);
                    }, [t, h]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ec.dZ, {
                            children: (0, r.jsx)(th, {
                                guildId: a,
                                paymentSources: p,
                                priceOptions: I,
                                currentPremiumSubscription: c,
                                premiumSubscriptionPaymentSourceId: l,
                                premiumSubscriptionPlan: A,
                                newAdditionalPlans: E,
                                paymentSourceId: d,
                                setPaymentSourceId: h,
                                onPaymentSourceAdd: S,
                            }),
                        }),
                        (0, r.jsx)(ec.UX, {
                            children: (0, r.jsx)(N.lo, {
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
                        analyticsSourceLocation: c,
                        stepConfigs: d,
                        loadId: _,
                        onComplete: h,
                        children: f,
                    } = e,
                    p = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
                    E = (0, A.A)(() => n - (0, x.D$)(M.A.boostSlots).length);
                return (
                    (0, I.Ay)(() => {
                        null != O.A.getGuild(t) || O.A.isGuildFetching(t) || (0, R.y)(t);
                    }),
                    (0, r.jsx)(y.M, {
                        activeSubscription: p,
                        stepConfigs: d,
                        skuIDs: tC,
                        loadId: _,
                        unifiedCheckoutFlow: S.C.GUILD_BOOST_CHECKOUT,
                        children: (0, r.jsxs)(J, {
                            initialNumGuildBoostsToPurchase: E,
                            disablePremiumUpsell: s,
                            closeGuildPerksModal: o,
                            guildId: t,
                            analyticsLocation: l,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: i,
                            onSubscribeComplete: a,
                            children: [(0, r.jsx)(tH, { onComplete: h }), f],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { numGuildBoostsToPurchase: i, guildId: a, existingAvailableSlotCount: o } = X(),
                    l = (0, D.bB)(),
                    c = (0, v.t4)((e) => e.purchaseState),
                    d = (0, L.n)("GuildBoostUnifiedCheckout"),
                    _ = d && (l === u.pn.REVIEW || l === u.pn.CONFIRM),
                    h = (0, F.A)(_),
                    f = s.useMemo(() => ({ quantity: i }), [i]);
                return d && l === u.pn.CONFIRM
                    ? (0, r.jsx)(G.A, {
                          mediaUrls: h.mediaUrls,
                          isSuccess: h.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(c === b.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, r.jsx)(U.A, {
                                  transitionState: t.transitionState,
                                  guild: w.A.getGuild(a),
                                  guildBoostQuantity: i + o,
                                  isTransfer: !1,
                                  graphic: e,
                                  onClose: n,
                              }),
                      })
                    : n({
                          ...t,
                          analyticsDataOverride: f,
                          skipUnifiedHeaderForSteps: tY,
                          disableUnsupportedExternalSubscriptionHandler: !0,
                          isMediumModal: !0,
                      });
            },
            tenantAnalyticsLocation: T.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: function (e) {
            let { plan: t, onClose: n, step: i } = e,
                s = (0, L.n)("GuildBoostUnifiedCheckout"),
                a = (0, v.t4)((e) => e.purchaseState);
            return i === u.pn.PREMIUM_UPSELL
                ? null
                : i === u.pn.REVIEW
                  ? (0, r.jsx)(N.s3, { ...(0, C.u)({ skuId: t?.skuId ?? null, step: i }) })
                  : s
                    ? (0, r.jsx)(N.s3, { title: (0, C.u)({ skuId: null, step: i }).title })
                    : (0, r.jsx)(k.A, { onClose: () => n(a === b.h.COMPLETED), currentStep: i, purchaseState: a });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eh, { ...e }), options: { renderHeader: !0 } },
    };
var t$ = n(630303),
    tz = n(871109);
let tq = s.createContext(void 0);
function tZ() {
    let e = s.useContext(tq);
    return ep()(null != e, "GuildProductPurchaseContext not found"), e;
}
function tX(e) {
    let { children: t, skuId: n, ...i } = e,
        s = (0, g.bG)([tz.A], () => tz.A.getGuildProduct(n));
    return (
        ep()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(tq.Provider, { value: { guildProductListing: s, ...i }, children: t })
    );
}
function tQ(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: s } = tZ(),
        a = (0, eB.sw)();
    return (
        (0, I.Ay)(() => {
            var e;
            ep()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: s, guildProductListingId: i.id, invoicePreview: a }),
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("57034"),
                        n.e("67837"),
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
var tJ = n(939249),
    t0 = n(789645),
    t1 = n(303612),
    t2 = n(916261),
    t3 = n(575650);
function t6(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(tJ.D, {
        className: eC()(t2.cG, t),
        onClick: n,
        children: (0, r.jsx)(t0.P, { size: "xs", color: "currentColor", className: t2.yP }),
    });
}
function t4(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, r.jsxs)(tD.rQ, {
        className: eC()(t2.wx, t3.GI, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(t1.A, { className: t2.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(t6, { className: t2.b, onClose: n }),
        ],
    });
}
var t5 = n(196617);
let t7 = {
    CHECKOUT_FLOW: eI.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [u.pn.REVIEW]: t$.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, r.jsx)(tX, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = tZ();
        return n === u.pn.CONFIRM
            ? null
            : (0, r.jsx)(t4, { guildProductListing: i, className: t5.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(tQ, { ...e }) },
};
var t8 = n(20742),
    t9 = n(848149),
    ne = n(937008),
    nt = n(106778),
    nn = n(228366),
    ni = n(213530),
    nr = n(966971),
    ns = n(758836),
    na = n(483764);
let no = { sliderBodyClassName: na.Bz },
    nl = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(nt.Fk, { ref: n, className: na.Lb, environment: t.current }),
                (0, r.jsx)(ni.K, { options: i, className: eC()(na.Oh, { [na.R]: !s }) }),
            ],
        });
    };
var nu = n(702841),
    nc = n(775602),
    nd = n(31823),
    n_ = n(211083),
    nh = n(427675),
    nf = n(590180),
    np = n(953150),
    nE = n(524246),
    nm = n(14368),
    ng = n(61750),
    nA = n(972607),
    nI = n(901930);
function nT(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: i,
            purchaseError: a,
            purchasePreviewError: o,
            appliedUserDiscounts: l,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: u } = (0, n_.o)(),
        { application: c } = (0, nd.V)(),
        d = (0, nh.gU)(),
        _ = (0, nu.bG)([nf.A], () => nf.A.getProduct(i)),
        h = s.useRef(!1);
    ep()(null != i, "Expected selectedSkuId"), ep()(null != c, "Expected application");
    let f = d[i];
    ep()(null != f, "Expected sku");
    let p = null != u || null != a || null != o,
        E =
            l.length > 0
                ? eo.intl.formatToPlainString(eo.t.VuV3Td, { discountOfferAmount: l[0].discount.amount })
                : void 0;
    return (s.useEffect(() => {
        null == _ ||
            p ||
            h.current ||
            ((h.current = !0),
            (0, ng.A)({
                product: _,
                overrideTitle: E,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: ns.gs.FIAT,
            }));
    }, [_, n, t, p, E]),
    p)
        ? (0, r.jsx)(ec.dZ, { children: (0, r.jsx)(nI.A, {}) })
        : null;
}
function nS(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: a,
            giftRecipient: o,
            giftMessageError: l,
            isSendingMessage: u,
            giftingOrigin: c,
        } = (0, ne.Pv)(),
        d = (0, nu.bG)([nc.Ay], () => nc.Ay.useReducedMotion),
        _ = s.useRef(null),
        h = (0, v.t4)((e) => e.selectedSkuId),
        f = (0, nu.bG)([nf.A], () => nf.A.getProduct(h)),
        { confettiColors: p } = (0, np.A)(f?.styles);
    return (
        s.useEffect(() => {
            t &&
                null != o &&
                null != h &&
                (c === er.vQ.USER_PROFILE_WISHLIST || c === er.vQ.DM_CHANNEL_WISHLIST) &&
                nn.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: h, recipientId: o.id });
        }, [t, o, h, c]),
        t
            ? (0, r.jsxs)("div", {
                  ref: _,
                  children: [
                      (0, r.jsx)(nA.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: i,
                          hasSentMessage: a,
                          giftRecipient: o,
                          giftMessageError: l,
                          isSendingMessage: u,
                      }),
                      !e.hideConfetti &&
                          !d &&
                          (0, r.jsx)(nE.A, {
                              confettiTarget: _.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, nm.rA)(f?.categorySkuId),
                              colors: p?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(nT, { ...e })
    );
}
var ny = n(564064),
    nC = n(993408),
    nN = n(575593),
    nv = n(452027),
    nR = n(922016),
    nO = n(778712),
    nb = n(986687),
    nD = n(999291),
    nL = n(903209),
    nw = n(674658),
    nM = n(898461),
    nP = n(203632),
    nx = n(892118),
    nk = n(536572),
    nU = n(456839),
    nG = n(219103),
    nF = n(525723),
    nV = n(780651);
function nB(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: i,
            className: a,
            previewHeaderClassName: o,
            hideProfilePreview: l,
        } = e,
        { giftRecipient: u, giftRecipientError: c } = (0, ne.Pv)(),
        d = (0, g.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        _ = e2.Ay.canUseShopDiscounts(d),
        h = (0, nD.Ay)(u?.id),
        f = s.useRef(null),
        [p, E] = s.useState(!1),
        { product: m } = (0, nw.q)(t, !0),
        A = s.useMemo(() => (0, nC.fT)(m, _), [m, _]),
        I = (0, nF.V_)(m);
    if (null == m || 0 === m.items.length) return null;
    let [T] = m.items,
        S = (0, nk.VG)(m),
        y = null != u && u.id !== d?.id && m.type !== nN.R.BUNDLE && T.type !== nN.R.NAMEPLATE && !l;
    return (0, r.jsxs)("div", {
        className: a,
        children: [
            (0, r.jsx)("div", {
                className: eC()(nV.QU, o),
                children: (0, r.jsx)(nv.D, {
                    label: eo.intl.string(eo.t.PpoJzt),
                    children:
                        y &&
                        (0, r.jsx)(
                            nR.Y,
                            {
                                targetElementRef: f,
                                align: "center",
                                shouldShow: p,
                                onRequestClose: () => E(!1),
                                preload: () => (0, nL.A)(u.id, u.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(nb.A, {
                                        ...e,
                                        user: u,
                                        pendingAvatar: u.getAvatarURL(null, (0, nO.FT)(nO._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, nM.T)(T) ? T : null,
                                        pendingProfileEffect: (0, nP.C3)(T) ? T : null,
                                        pendingProfileFrame: (0, nx.s)(T) ? T : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, r.jsx)(tJ.D, {
                                        ...i,
                                        className: nV.Nx,
                                        innerRef: f,
                                        onClick: (e) => {
                                            E((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            p ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(eD.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eo.intl.string(eo.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            h?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: eC()(nV.i1, null != c ? nV.cN : nV.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: nV.Ug,
                        children: [
                            (0, r.jsx)(nU.O, { product: m }),
                            (0, r.jsxs)("div", {
                                className: nV.JZ,
                                children: [
                                    (0, r.jsx)(eD.E, { variant: "text-md/semibold", children: S }),
                                    (0, r.jsx)(eP.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            m?.type === nN.R.BUNDLE
                                                ? null
                                                : T.type === nN.R.AVATAR_DECORATION
                                                  ? eo.intl.string(eo.t["7v0T9P"])
                                                  : T.type === nN.R.NAMEPLATE
                                                    ? eo.intl.string(eo.t.x5CoXR)
                                                    : T.type === nN.R.PROFILE_EFFECT
                                                      ? eo.intl.string(eo.t.wR5wOo)
                                                      : T.type === nN.R.PROFILE_FRAME
                                                        ? eo.intl.string(eo.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(nG.x, {
                                priceAmount: n,
                                priceCurrency: i,
                                discount: A,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != c &&
                        (0, r.jsx)("div", {
                            className: nV.Wh,
                            children: (0, r.jsx)(eD.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: c,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var nj = n(783878),
    nH = n(966327),
    nY = n(427262);
let nW = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: s } = e,
        { giftRecipient: a, setGiftRecipient: o } = (0, ne.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: i,
              children: (0, r.jsx)(nj.Z, {
                  selectionMode: "single",
                  label: eo.intl.string(eo.t.xFn72s),
                  placeholder: eo.intl.string(eo.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: (e) => {
                      let i = s.find((t) => t.id === e);
                      null != i && (n(i, t), o(i));
                  },
                  options: s.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${nY.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(nH.A, { user: e, size: nO._3.SIZE_20 }),
                  })),
              }),
          });
};
var nK = n(735438),
    n$ = n.n(nK),
    nz = n(427358),
    nq = n(570287),
    nZ = n(994500);
function nX() {
    let e = (0, g.yK)([nZ.A], () => nZ.A.getFriendIDs()),
        t = (0, g.yK)([nz.A], () =>
            nz.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: i, otherUserId: r } = e,
                        s = (0, nq.q)(r);
                    return !t && (n >= 0.1 || i >= 0.1) && s;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = s.useMemo(() => n$().uniq([...e, ...t]), [e, t]);
    return (0, g.yK)(
        [eJ.default],
        () =>
            n.reduce((e, t) => {
                let n = eJ.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var nQ = n(871181),
    nJ = n(318007),
    n0 = n(285719),
    n1 = n(976860),
    n2 = n(353791);
function n3(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, eF.Ay)(T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(eA.Q, {
        text: eo.intl.string(eo.t.J82mpK),
        onClick: function () {
            t(),
                (0, o.closeAllModals)(),
                null == n
                    ? (0, ny.Cz)({ analyticsLocations: i, analyticsSource: T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, n1.pX)(`${ea.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
let n6 = (0, s.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
    }),
    n4 = () => (0, s.useContext)(n6),
    n5 = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = n4(),
            { analyticsLocations: i } = (0, eF.Ay)();
        return (0, r.jsx)(nS, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
    },
    n7 = {
        [u.pn.GIFT_CUSTOMIZATION]: () => eo.intl.string(eo.t["JCFN/y"]),
        [u.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => eo.intl.string(eo.t.lDbi6H),
        [u.pn.CONFIRM]: () => "",
    },
    n8 = (e) => {
        let { step: t } = e,
            n = n7[t];
        return null == n ? null : (0, r.jsx)(t8.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    n9 = {
        CHECKOUT_FLOW: eI.CL.COLLECTIBLES_CHECKOUT,
        CHECKOUT_STEPS: {
            [u.pn.GIFT_CUSTOMIZATION]: (e) => {
                let { handleStepChange: t, handleClose: n } = e,
                    {
                        renderLeftColumn: i,
                        renderRightColumn: a,
                        ctaDisabled: o,
                        loading: l,
                    } = ((e) => {
                        let { handleStepChange: t, handleClose: n } = e,
                            {
                                customGiftMessage: i = "",
                                setCustomGiftMessage: s,
                                giftRecipientError: a,
                                setGiftRecipientError: o,
                                validatingGiftRecipient: l,
                                giftRecipient: u,
                                giftingOrigin: c,
                                setValidatingGiftRecipient: d,
                            } = (0, ne.Pv)(),
                            { selectedSkuId: h, checkoutInvoicePreview: f } = (0, v.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            p = (0, nh.gU)(),
                            E = (0, g.bG)([eJ.default], () => eJ.default.getCurrentUser()),
                            m = nX(),
                            A = async (e, t) => {
                                d(!0),
                                    null != a && o(),
                                    (await (0, ny.JJ)(e.id, t)) || o(eo.intl.string(eo.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, I.Ay)(() => {
                            null != h &&
                                null != u &&
                                (c !== er.vQ.DM_CHANNEL_WISHLIST &&
                                    _.default.track(ea.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: h }),
                                A(u, h));
                        });
                        let T = () =>
                            (0, r.jsx)(nQ.A, {
                                onTextChange: (e) => s?.(e),
                                pendingText: i,
                                currentText: i,
                                disableThemedBackground: !0,
                                className: n2.iX,
                                innerClassName: n2.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, r.jsx)("div", { className: n2.qL, children: (0, r.jsx)(nJ.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, nC.pA)({ invoicePreview: f, selectedSkuId: h, skusById: p });
                                return c === er.vQ.USER_PROFILE_WISHLIST || c === er.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(n0.Z, { giftRecipient: u }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(nB, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: n2.uW,
                                                      previewHeaderClassName: n2.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: n2.fi,
                                                  children: (0, r.jsx)(n3, { handleClose: n, selectedSkuId: h }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(nW, {
                                                  selectedSkuId: h,
                                                  recipients: m,
                                                  className: n2.uh,
                                                  validateSelectedGift: A,
                                              }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(nB, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: n2.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != a || null == u || u.id === E?.id || i.length > er.Jo,
                            loading: l,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = s.useMemo(() => ({ loading: l, disabled: o }), [l, o]);
                return (0, r.jsx)(eI.Mw, {
                    paymentModalStepProps: e,
                    layout: eI.XZ.TWO_COLUMN,
                    renderLeftColumn: i,
                    renderRightColumn: a,
                    primaryCTAButtonProps: u,
                });
            },
            [u.pn.REVIEW]: t$.p,
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
                        setCustomConfettiVisible: c,
                        customConfettiDisplayOptions: d,
                        hideConfirmStepConfetti: _,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = s.useRef(new nt.OH()),
                            [i, r] = s.useState(null),
                            [a, o] = s.useState(!1),
                            l = s.useMemo(() => (0, nr.AB)({ purchaseType: ns.gs.FIAT, skuId: t }), [t]);
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
                    h = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    f = (0, s.useMemo)(
                        () => ({
                            skuIDs: h,
                            setCustomConfettiVisible: c,
                            hideConfirmStepConfetti: _,
                            confettiCanvas: o,
                        }),
                        [h, c, _, o],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(nl, {
                            environment: a,
                            setConfettiCanvas: l,
                            customConfettiDisplayOptions: d,
                            customConfettiVisible: u,
                        }),
                        (0, r.jsx)(y.M, {
                            ...i,
                            skuIDs: h,
                            stepConfigs: i.stepConfigs,
                            activeSubscription: null,
                            purchaseType: ts.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, r.jsx)(n6.Provider, { value: f, children: n }),
                        }),
                    ],
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { skuIDs: i, setCustomConfettiVisible: r } = n4(),
                    { isGift: a } = (0, ne.Pv)(),
                    o = (0, t9.J)(),
                    {
                        paymentModalSkuId: l,
                        paymentModalOnClose: u,
                        paymentModalOnComplete: c,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: i, setCustomConfettiVisible: r } = e,
                            a = t[0] ?? null,
                            o = s.useCallback(() => {
                                r(!0), i?.();
                            }, [i, r]);
                        return {
                            paymentModalSkuId: a,
                            paymentModalOnClose: s.useCallback(
                                (e) => {
                                    r(!1), n(e), nn.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
                            ),
                            paymentModalOnComplete: o,
                        };
                    })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: i, setCustomConfettiVisible: r }),
                    d = s.useCallback(
                        (e) => {
                            u(e), e && a && o();
                        },
                        [u, a, o],
                    );
                return n({ ...t, skuId: l, onClose: d, onComplete: c, applicationId: ea.FYj });
            },
            tenantAnalyticsLocation: T.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, ne.Pv)();
            return n ? (0, r.jsx)(n8, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(n5, { ...e }), options: no },
    };
var ie = n(354033),
    it = n(491057),
    ii = n(496142),
    ir = n(877624),
    is = n(554146),
    ia = n(71804),
    io = n(426398),
    il = n(558620),
    iu = n(841702),
    ic = n(367727),
    id = n(380619),
    i_ = n(374200),
    ih = n(771566),
    ip = n(625494),
    iE = n(45938),
    im = n(97808),
    ig = n(912140),
    iA = n(780898),
    iI = n(344346),
    iT = n(837015),
    iS = n(258915);
function iy(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: i } = e,
        a = (0, g.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        o = (0, g.bG)([nc.Ay], () => nc.Ay.useReducedMotion),
        { analyticsLocations: l } = (0, eF.Ay)(),
        u = nO._3.SIZE_32,
        { product: c, isFetching: d } = (0, nw.q)(t),
        [_, h] = s.useState(!1),
        f = c?.items[0],
        {
            isNameplateReward: p,
            nameplateData: E,
            rewardAvatarDecorationSrc: m,
        } = s.useMemo(
            () =>
                null == f
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, iT.F)(f)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: f.skuId,
                                src: f.asset,
                                palette: (0, iA.H6)(f.palette ?? "sky"),
                                imgAlt: f.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, nM.T)(f)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, ig.A)({
                                  legacyAssetId: f.asset,
                                  skuId: f.skuId,
                                  size: u,
                                  canAnimate: !o,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [f, u, o],
        );
    return (0, r.jsx)(ec.UX, {
        children: (0, r.jsx)(tv.j, {
            children: (0, r.jsxs)("div", {
                className: iS.W,
                children: [
                    p && null != E
                        ? (0, r.jsx)("div", {
                              className: iS.D,
                              onMouseEnter: () => h(!0),
                              onMouseLeave: () => h(!1),
                              children: (0, r.jsx)(iI.a, {
                                  user: a,
                                  nameplate: null,
                                  nameplateData: E,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: _,
                              }),
                          })
                        : (0, r.jsx)(im.Js, {
                              "aria-label": a?.username,
                              size: u,
                              src: a?.getAvatarURL(void 0, (0, nO.FT)(u), !o),
                              avatarDecoration: m,
                          }),
                    (0, r.jsx)(eg.$, {
                        variant: "primary",
                        text: eo.intl.string(eo.t.kMYVwv),
                        loading: d,
                        onClick: () => {
                            null != c &&
                                (n(),
                                (0, ng.A)({
                                    product: c,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: l,
                                    purchaseType: ns.gs.PROMOTIONAL,
                                    onCloseCallback: i,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var iC = n(49999);
function iN(e) {
    let t,
        {
            handleClose: i,
            planGroup: a,
            onSubscriptionConfirmation: l,
            renderPurchaseConfirmation: u,
            postSuccessGuild: c,
            followupSKUInfo: d,
            continueSessionToInitialStep: h,
        } = e,
        { paymentSources: f } = (0, io.jm)(),
        {
            activeSubscription: p,
            selectedSkuId: E,
            updatedSubscription: m,
            paymentSourceId: A,
            isPremiumGroupPurchase: T,
            startingPremiumSubscriptionPlanId: S,
            startingFractionalPremiumEndsAt: y,
        } = (0, v.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
        })),
        C = (0, il.A)(),
        N = (0, D.bB)(),
        {
            isGift: R,
            giftRecipient: O,
            giftCode: b,
            hasSentMessage: L,
            isSendingMessage: w,
            sendGiftMessage: M,
            claimableRewards: P,
            selectedGiftingPromotionReward: x,
            openGiftingBadgePostPurchaseModal: k,
        } = (0, ne.Pv)(),
        { confirmationFooter: U } = (0, it.cG)(),
        G = (0, id.px)(C, R, P),
        F = (0, id.Mq)(C),
        V = (0, iu.Mv)(x, !1),
        B = (0, g.bG)([i_.A], () => i_.A.getGiftPromotion()?.id),
        j = (0, g.bG)([i_.A], () => {
            let e = i_.A.getMarketingComponentByType(ir.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        H = (0, ed.g)(f, A),
        Y = R && null != x && null != V && F,
        W = { selectedPlan: C, selectedSkuId: E, step: N };
    if (null == C) throw new ia.v({ message: "Expected plan to be selected", extraSentryInformation: W });
    if (null == E) throw new ia.v({ message: "Expected selectedSkuId", extraSentryInformation: W });
    if (null == N) throw new ia.v({ message: "Step should be set", extraSentryInformation: W });
    let K = s.useCallback(() => {
        i(), l?.();
    }, [i, l]);
    (0, I.Ay)(() => {
        T &&
            _.default.track(ea.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != m,
                has_any_premium_group: m?.hasAnyPremiumGroup ?? !1,
                subscription_id: m?.id,
            });
    }),
        s.useEffect(() => {
            function e() {
                if (T)
                    if (null != m && m.hasAnyPremiumGroup) {
                        _.default.track(ea.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                            subscription_id: m.id,
                        });
                        let e = (0, nK.uniqueId)("premium-group-purchase-flow-modal");
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
                                            ip._.dispatch(ea.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    ip._.dispatch(ea.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, o.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        _.default.track(ea.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != m,
                            has_any_premium_group: m?.hasAnyPremiumGroup ?? !1,
                        }),
                            ip._.dispatch(ea.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                ip._.subscribe(ea.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    ip._.unsubscribe(ea.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [T, m]),
        s.useEffect(() => {
            !R || null == O || null == b || L || w || (0, iE.Ik)(O) || M({ onSubscriptionConfirmation: l });
        }, [M, R, O, b, L, w, l]),
        s.useEffect(() => {
            G &&
                null != j &&
                null != B &&
                (0, ic.qr)(is.M.GIFTING_PROMOTION_REMINDER, B, { dismissAction: iC.i.INDIRECT_ACTION });
        }, [j, B, G]);
    let $ = null != h ? ih.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != u) t = u(C, K, m);
    else if (R) t = (0, r.jsx)(ih.fw, { planId: C.id, onClose: K });
    else {
        let e =
            S === C.id
                ? { postSuccessGuild: c }
                : {
                      followupSKUInfo: d,
                      startingPremiumSubscriptionPlanId: S,
                      isDowngrade: null != p && (0, ei.vT)(p, C.id, a),
                  };
        t = (0, r.jsx)(ih.Ay, {
            planId: C.id,
            onClose: K,
            paymentSourceType: H,
            hideClose: null != U,
            startingFractionalPremiumEndsAt: y,
            customCTAType: $,
            ...e,
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(ec.dZ, { children: [(0, r.jsx)(nI.A, {}), t] }),
            null != U && U,
            Y && null != x && (0, r.jsx)(iy, { rewardSkuId: x, onClose: K, onRewardModalClose: k }),
        ],
    });
}
let [iv, iR] = (0, q.A)(),
    iO = {
        CHECKOUT_FLOW: eI.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [u.pn.REVIEW]: ii.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: i,
                    } = e,
                    a = s.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(iv.Provider, { value: a, children: (0, r.jsx)(it.Qt, { children: i }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: (e) => {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: s } = iR();
            return (0, r.jsx)(ie.Y, { onClose: t, listing: s, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(iN, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var ib = n(73825),
    iD = n(960851),
    iL = n(607399),
    iw = n(795791),
    iM = n(344159),
    iP = n(561794),
    ix = n(811656),
    ik = n(187322),
    iU = n(890856),
    iG = n(947641),
    iF = n(713517),
    iV = n(929283),
    iB = n(761365),
    ij = n(267861);
function iH(e) {
    let t,
        n,
        { skuId: i, user: a, claimed: o, onSelect: l, selectedSkuId: u } = e,
        [c, d] = s.useState(null),
        _ = s.useCallback((e) => {
            d(e);
        }, []),
        h = s.useMemo(() => ({ current: c }), [c]),
        { isHoveringOrFocusing: f } = (0, iF.A)(h),
        p = !o && f,
        { product: E } = (0, nw.q)(i);
    if (null == E) return null;
    let m = E.items[0];
    return null == m
        ? null
        : ((0, nM.T)(m)
              ? ((n = nN.R.AVATAR_DECORATION),
                (t = (0, r.jsx)(iV.i, { item: m, user: a, isHighlighted: p, avatarSize: nO._3.SIZE_96 })))
              : (0, iT.F)(m) &&
                ((n = nN.R.NAMEPLATE),
                (t = (0, r.jsx)(iB.A, { nameplate: m, user: a, isHighlighted: p, size: "small" }))),
          (0, r.jsx)(ik.vN, {
              children: (0, r.jsxs)(iU.s, {
                  ref: _,
                  "aria-label": E.name ?? "",
                  onClick: function () {
                      null == i || null == l || o || l(i);
                  },
                  className: eC()(ij._x, { [ij.Vp]: !o, [ij.mr]: p, [ij.md]: u === i }),
                  children: [
                      (0, r.jsx)("div", {
                          className: eC()(ij.VH, {
                              [ij._Q]: n === nN.R.AVATAR_DECORATION,
                              [ij.M4]: n === nN.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: eC()(ij.i1, { [ij.Sf]: o }), children: t }),
                                            o &&
                                                (0, r.jsx)(iG.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: eN.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: ij.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, r.jsxs)("div", {
                          className: ij.tZ,
                          children: [
                              (0, r.jsx)(eP.D, { variant: "heading-md/extrabold", children: E.name }),
                              (0, r.jsx)(eD.E, {
                                  variant: "text-sm/normal",
                                  children: o ? eo.intl.string(eo.t["6cfuDj"]) : eo.intl.string(eo.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
}
var iY = n(696208),
    iW = n(683433);
function iK(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: a,
            showBackButton: o,
            planOptions: l,
            shouldRenderUpdatedPaymentModal: u = !1,
            isTrial: c,
            isNextDisabled: d = !1,
        } = e,
        { paymentSources: _ } = (0, io.jm)(),
        h = (0, il.A)(),
        { isGift: f, claimableRewards: p } = (0, ne.Pv)();
    i = i ?? _;
    let {
            variant: E,
            text: m,
            onClick: g,
            disabled: A,
        } = i$({
            onStepChange: t,
            selectedPlanId: (n = n ?? h?.id),
            isGift: f,
            claimableRewards: p,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: u,
            isTrial: c,
            isNextDisabled: d,
        }),
        I = s.useMemo(
            () =>
                null != n && l.includes(n)
                    ? [{ variant: E, text: m, onClick: g, disabled: A }]
                    : [{ variant: "primary", text: eo.intl.string(eo.t.XqMe3N), disabled: !0 }],
            [E, m, g, A, n, l],
        );
    return (0, r.jsx)(iY.H, { leading: o && null != a ? (0, r.jsx)(iW.A, { onClick: a }) : void 0, actions: I });
}
let i$ = (e) => {
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
        c = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        d = (0, il.A)(),
        _ = (0, D.bB)(),
        { hasEntitlements: h } = (0, iM.X)(n, i),
        f = (null != c && null != c.paymentSourceId) || Object.keys(s).length > 0 || (h && !o);
    var p = a ? eo.intl.string(eo.t.PDTjLN) : eo.intl.string(eo.t.XqMe3N),
        E = u.pn.ADD_PAYMENT_STEPS;
    return (
        f && (E = u.pn.REVIEW),
        (0, id.px)(d, i, r) && _ !== u.pn.SELECT_FREE_SKU && (E = u.pn.SELECT_FREE_SKU),
        { variant: "primary", text: p, onClick: () => t(E), disabled: l }
    );
};
var iz = n(328232);
function iq(e) {
    let { handleStepChange: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        i = (0, il.A)(),
        a = (0, D.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: l, claimableRewards: c } = (0, ne.Pv)(),
        d = (0, g.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        _ = (0, g.yK)([i_.A], () => i_.A.getGiftPromotionRewardSkuIds()),
        h = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(c, l),
        [f, p] = s.useState(h),
        [E, m] = s.useState(!1);
    s.useEffect(() => {
        E || null != l || null == h || (o(h), p(h));
    }, [h, E, l, o]);
    let A = { selectedPlan: i, selectedSkuId: n, step: a };
    if (null == i) throw new ia.v({ message: "Expected plan to be selected", extraSentryInformation: A });
    if (null == n) throw new ia.v({ message: "Expected selectedSkuId", extraSentryInformation: A });
    if (null == a) throw new ia.v({ message: "Step should be set", extraSentryInformation: A });
    let I = s.useMemo(() => null != f && (c ?? []).includes(f), [f, c]),
        T = s.useMemo(() => 0 === _.length || null == f || !I, [_, f, I]);
    s.useEffect(() => {
        if (0 === _.length) {
            p(void 0), o(void 0);
            return;
        }
        (null != f && I && _.includes(f)) || null == f || (p(void 0), o(void 0));
    }, [_, I, f, o]);
    let S = (e) => {
            o(e), p(e), m(!0);
        },
        y = _.map((e) =>
            (0, r.jsx)(
                iH,
                { skuId: e, claimed: null != c && !c.includes(e), user: d, onSelect: S, selectedSkuId: f },
                e,
            ),
        ),
        C = (0, r.jsx)(ec.UX, {
            children: (0, r.jsx)(iK, {
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
            (0, r.jsx)(t8.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: eo.intl.string(eo.t.OEtqpm),
                subtitle: eo.intl.string(eo.t.h2nMp0),
            }),
            (0, r.jsx)(V.c, {
                children: (0, r.jsx)(tL.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, r.jsx)("div", { className: iz.Dq, children: y }),
                }),
            }),
            C,
        ],
    });
}
var iZ = n(800471),
    iX = n(38405);
let iQ = function (e, t, n, i, r) {
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
                    iX.A.setExtra({ loadingState: r, loadingTimeSeconds: n }),
                        iX.A.captureException(t, { ...i, tags: { ...i?.tags } });
                }, 1e3 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
var iJ = n(463376),
    i0 = n(699595),
    i1 = n(442123),
    i2 = n(67948),
    i3 = n(807098),
    i6 = n(298305),
    i4 = n(387745);
function i5() {
    let e = (0, g.bG)([i_.A], () => {
            let e = i_.A.getMarketingComponentByType(ir.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, ne.Pv)(),
        n = (0, i3.T)(e?.asset),
        i = (0, i3.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, id.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, id.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let l = (0, id.x)(o, a),
        u = e?.assetVariant === i2.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, r.jsxs)("div", {
              className: i4.qD,
              style: l,
              children: [
                  (0, r.jsx)("div", {
                      className: eC()([i4.my], { [i4.R_]: u }),
                      children: (0, r.jsx)(i6.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: u ? nO._3.SIZE_72 : nO._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, r.jsx)(eD.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: eo.intl.string(eo.t.Abiuci),
                  }),
              ],
          });
}
var i7 = n(410516),
    i8 = n(361597),
    i9 = n(69494),
    re = n(622631),
    rt = n(597770),
    rn = n(102741),
    ri = n(296589);
function rr(e) {
    let { giftMessage: t = eo.intl.string(eo.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, ne.Pv)();
    return !n || (0, iE.Ik)(i)
        ? null
        : (0, r.jsx)(rn.A, {
              className: ri.z,
              iconSize: rn.A.Sizes.SMALL,
              icon: rt.o,
              color: null == t ? rn.A.Colors.PRIMARY : rn.A.Colors.SECONDARY,
              children: t,
          });
}
var rs = n(71867),
    ra = n(249872);
function ro(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: a, trialId: o, handleClose: l } = e,
        {
            selectedSkuId: c,
            priceOptions: d,
            activeSubscription: _,
            defaultPlanId: h,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: f, isEligibleForTrial: p, isEligibleForDiscount: E, discountOffer: m } = (0, iJ.i)(),
        g = (0, i7.YJ)(m),
        I = (0, il.A)(),
        T = (0, D.bB)(),
        { isGift: S, giftRecipient: y, giftMessage: C, claimableRewards: N } = (0, ne.Pv)(),
        R = (0, id.Mq)(I),
        O = (0, nu.bG)([i_.A], () => {
            let e = i_.A.getMarketingComponentByType(ir.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        b = S && R && null != N && N.length > 0 && O,
        L = (p || E) ?? !1,
        { monthlyDefaultSelected: w } = i1.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${S ? "" : " - DO NOT USE"}`,
        }),
        M = (0, A.A)(w),
        P = s.useMemo(() => {
            let e = h;
            return S && M && null != c && (e = er.En[c]), (0, e2.Tm)({ skuId: c, isPremium: f, defaultPlanId: e });
        }, [c, f, h, S, M]),
        x = E && null != g && P.includes(g) ? g : P[0],
        k = (0, nu.bG)([en.A], () => en.A.get(x)),
        U = [{ planId: k?.id, quantity: 1 }],
        [G, F] = s.useState(L),
        [V, B] = (0, eH.YV)({
            items: U,
            renewal: !1,
            preventFetch: !L,
            applyEntitlements: !0,
            trialId: o,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
        });
    s.useEffect(() => {
        L && F(V?.subscriptionPeriodEnd == null);
    }, [V, L]),
        iQ(
            "Payment Modal Plan Select Step",
            G,
            5,
            { proratedInvoicePreview: V, proratedInvoiceError: B, isEligibleForOffer: L },
            { tags: { app_context: "billing" } },
        );
    let j = B?.message ?? eo.intl.string(eo.t.R0RpRX),
        H = L && null == B,
        Y = L && null != B,
        W = H && null == _ && V?.subscriptionPeriodEnd == null;
    (0, i0.W)({ priceOptions: d, trialId: o, discountInvoicePreview: V });
    let K = s.useMemo(
        () => ({
            planOptions: P,
            selectedPlanId: I?.id,
            planGroup: i,
            subscriptionPeriodEnd: V?.subscriptionPeriodEnd,
            useCompactGiftComponents: b,
            handleClose: l,
        }),
        [P, I?.id, i, V?.subscriptionPeriodEnd, b, l],
    );
    if (W) return (0, r.jsx)(e7.E, { className: ra.QW });
    ep()(null != T, "Step should be set"), ep()(P.length > 0, "Premium plan options should be set");
    let $ = S
        ? (0, r.jsx)(i8.$p, { ...K })
        : (0, r.jsx)(re.X, { ...K, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(rr, { giftMessage: C }),
            !(S && (0, iE.Ik)(y)) && (0, r.jsx)(i9.A, { isEligibleForTrial: p }),
            (0, r.jsxs)(ec.dZ, {
                children: [
                    (0, r.jsx)(rs.P, { className: ra.ZB, planSkuId: k?.skuId }),
                    (0, r.jsx)(nI.A, {}),
                    Y ? (0, r.jsx)(eE.w, { type: "critical", children: j }) : $,
                    H &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: eC()(ra.IM, ra.Go) }),
                                (0, r.jsx)(eD.E, {
                                    variant: "text-xs/normal",
                                    children: eo.intl.format(eo.t.BHtnqA, {
                                        link: e0.A.getArticleURL(ea.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(ec.UX, {
                children: [
                    b && (0, r.jsx)(i5, {}),
                    (0, r.jsx)(iK, {
                        onStepChange: t,
                        onBackClick: () => t(u.pn.SKU_SELECT),
                        showBackButton: null == n && null == a,
                        planOptions: P,
                        shouldRenderUpdatedPaymentModal: H,
                        isTrial: p,
                    }),
                ],
            }),
        ],
    });
}
var rl = n(862990),
    ru = n(672525);
function rc(e) {
    let { isGift: t, skuId: n } = e,
        i = (0, v.t4)((e) => e.referralTrialOfferId ?? void 0),
        r = (0, eK.V)(i);
    return !t && null != r && null != n && er.TP[r.trial_id].skus.includes(n);
}
var rd = n(634378);
function r_(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: i,
            priceOptions: s,
            activeSubscription: a,
            defaultPlanId: o,
            startedPaymentFlowWithPaymentSources: l,
            referralTrialOfferId: c,
        } = (0, v.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { hasPaymentSources: d } = (0, io.jm)(),
        { isGift: _, claimableRewards: h } = (0, ne.Pv)(),
        f = _ && null != h && h.length > 0,
        p = (0, eK.V)(c);
    return (0, r.jsx)(rh, {
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
                    defaultPlanId: c,
                } = e;
                i(n);
                let d = u.pn.PLAN_SELECT,
                    _ = (0, e2.aZ)(t);
                (_ !== er.pe.TIER_1 && _ !== er.pe.TIER_2) || n !== er.pe.TIER_0 || s || (d = u.pn.WHAT_YOU_LOSE);
                let h = (function (e) {
                        let { userTrialOffer: t, isGift: n, skuId: i } = e;
                        return !n && null != t && null != i && er.TP[t.trial_id].skus.includes(i);
                    })({ userTrialOffer: a, isGift: s, skuId: n }),
                    f = (0, iZ.vT)({
                        isTrial: h,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: l,
                    });
                d !== u.pn.WHAT_YOU_LOSE && f && ((d = u.pn.REVIEW), o((0, iZ.xT)(n, t, c))),
                    r(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: _,
                userTrialOffer: p,
                startedPaymentFlowWithPaymentSources: l,
                setSelectedPlanId: i,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: i, setSelectedSkuId: r } = e;
                r((0, e2.mH)(er.pe.TIER_2)),
                    t(er.gD.PREMIUM_GROUP_MONTH),
                    n(i ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: er.pe.TIER_2 } });
            })({ setSelectedPlanId: i, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: n }),
        isGift: _,
        priceOptions: s,
        showPromotionalGiftBanner: f,
    });
}
function rh(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: s, onSelectPremiumGroup: a } = e,
        o = (0, rl.FY)({ isGift: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(t8.rQ, { titleTextVariant: "heading-lg/semibold", title: eo.intl.string(eo.t["r+SebU"]) }),
            o
                ? (0, r.jsx)(V.c, {
                      children: (0, r.jsx)("div", {
                          className: rd.eE,
                          children: (0, r.jsx)(ru.yS, {
                              onSelectSku: (e) => t((0, e2.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  })
                : (0, r.jsx)(V.c, {
                      children: (0, r.jsx)("div", {
                          className: rd.a2,
                          children: (0, r.jsx)(ru.Ay, {
                              onSelectSku: (e) => t((0, e2.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  }),
        ],
    });
}
var rf = n(825484),
    rp = n(137728);
function rE(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: s,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSources: o,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: l } = (0, ne.Pv)(),
        c = null != a ? (0, e2.EL)(a) : null,
        d = null != c ? (0, e2.RH)(c.planId) : null,
        _ = null != c ? (0, e2.m6)(c.planId) : null,
        h = (0, iZ.vT)({ isTrial: !1, isGift: l, selectedSkuId: i, startedPaymentFlowWithPaymentSources: o });
    return (
        ep()(null != _, "Expected premium type"),
        (0, r.jsx)(rp.A, {
            premiumType: _,
            titleText: eo.intl.string(eo.t["7VcWW0"]),
            subtitleText: eo.intl.format(eo.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, r.jsxs)(rf.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(eg.$, {
                        variant: "primary",
                        text: eo.intl.string(eo.t["3PatSz"]),
                        onClick: () => {
                            h ? (s((0, iZ.xT)(i, a)), t(u.pn.REVIEW)) : t(u.pn.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(eg.$, { variant: "secondary", onClick: n, text: eo.intl.string(eo.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
let rm = [
        {
            key: u.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(r_, { ...e }),
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
            renderStep: (e) => (0, r.jsx)(rE, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: u.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(ro, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, iZ.lp)(e) ? null : eo.intl.string(eo.t["r+SebU"])),
                sectionHeaderText: () => eo.intl.string(eo.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: u.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(iq, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    rg = {
        CHECKOUT_FLOW: S.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: rm,
        CHECKOUT_STEPS: { [u.pn.REVIEW]: ii.E },
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
                        stepConfigs: c,
                        loadId: d,
                        giftContextProps: _ = { isGift: !1, giftRecipient: null },
                        renderModalProps: h,
                        children: f,
                    } = e,
                    p = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
                    E = (0, iD.cg)() ? er.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: m, giftRecipient: A } = _;
                if (null != o && !Object.values(er.pe).includes(o))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, iP.tA)({ giftRecipient: A, isGift: m ?? !1 }),
                    T = s.useMemo(
                        () =>
                            I
                                ? c.map((e) =>
                                      e.key === u.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : c,
                        [c, I],
                    ),
                    C = null != l ? l : p,
                    N = !m && null != C && C.isPurchasedExternally && null != C.paymentGateway;
                (0, iM.s)(C, () => h.onClose(), m ?? !1);
                let v = s.useMemo(() => [...er.oz], []);
                return N
                    ? null
                    : (0, r.jsx)(y.M, {
                          loadId: d,
                          activeSubscription: C,
                          stepConfigs: T,
                          skuIDs: v,
                          isGift: m,
                          defaultPlanId: E ?? n,
                          referralCode: i,
                          referralTrialOfferId: a,
                          unifiedCheckoutFlow: S.C.PREMIUM_CHECKOUT,
                          children: (0, r.jsx)(it.Qt, { confirmationFooter: t, children: f }),
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
                    en.A.isLoadedForPremiumSKUs() || nn.h.wait(() => (0, ib.zS)());
                }, []);
                let { selectedSkuId: c, purchaseState: d } = (0, v.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    _ = (0, D.bB)(),
                    {
                        isGift: h,
                        selectedGiftingPromotionReward: f,
                        openGiftingBadgePostPurchaseModal: p,
                    } = (0, ne.Pv)(),
                    E = s.useCallback(
                        (e, t) => {
                            a(e, t), e && h && null == f && p();
                        },
                        [a, h, f, p],
                    ),
                    m = !h && c === er.pe.TIER_2 && !iL.Ct && !iL.KY && null == (0, iw.uM)(),
                    g = d === b.h.PURCHASING;
                return (0, r.jsx)(ix.A, {
                    isConfirmationStep: _ === u.pn.CONFIRM && null == l && null == o,
                    isEligibleForWowMoment: m,
                    shouldPrefetchWowMoment: g,
                    children: n({
                        ...t,
                        onClose: E,
                        analyticsSubscriptionType: ea.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: er.LE,
                        subscriptionTier: i,
                    }),
                });
            },
            tenantAnalyticsLocation: T.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(iN, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var rA = n(143582),
    rI = n(897904),
    rT = n(967198);
let [rS, ry] = (0, q.A)();
function rC(e) {
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
    return (0, r.jsx)(rS.Provider, { value: l, children: i });
}
n(938796);
var rN = n(241524),
    rv = n(266060),
    rR = n(163437),
    rO = n(701273),
    rb = n(425013);
function rD(e) {
    let { onConfirm: t, onCancel: n, title: i, subtitle: s, confirmCta: a, showOpenDiscord: o = !0 } = e;
    return (0, r.jsxs)("div", {
        className: rb.RP,
        children: [
            (0, r.jsx)(eP.D, { className: rb.RS, variant: "heading-lg/extrabold", children: i }),
            null != s
                ? (0, r.jsx)(eD.E, { className: rb.sT, variant: "text-sm/normal", color: "text-default", children: s })
                : null,
            (0, r.jsxs)("div", {
                className: rb.UD,
                children: [
                    o &&
                        (0, r.jsx)(eg.$, {
                            variant: "primary",
                            text: eo.intl.string(eo.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, rO.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(eg.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, r.jsx)(eg.$, {
                            variant: "secondary",
                            text: eo.intl.string(eo.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
}
function rL(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: rb.RP,
        children: [
            (0, r.jsx)(eP.D, {
                className: rb.RS,
                variant: "heading-lg/extrabold",
                children: eo.intl.format(eo.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(eD.E, {
                className: rb.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: eo.intl.format(eo.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: rb.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: rb.__invalid_openDiscordButton,
                        children: (0, r.jsx)(eg.$, {
                            variant: "primary",
                            text: eo.intl.string(eo.t["8L5bZG"]),
                            onClick: () => (0, rO.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(eg.$, { variant: "secondary", text: eo.intl.string(eo.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
var rw = n(19311),
    rM = n(376747);
function rP(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, rv.K)(),
        { subscriptionMetadataRequest: a } = ry(),
        { application: o } = (0, nd.V)(),
        l = (0, nh.S3)(),
        c = (0, rN.A)(rM.Y),
        d = (0, g.bG)([w.A], () => w.A.getGuild(a?.guild_id)),
        _ = s.useCallback(() => t(u.pn.REVIEW), [t]);
    if (null == l) return null;
    let h = (0, rR.bg)(l.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ec.dZ, {
                children: c
                    ? (0, r.jsx)(rD, {
                          confirmCta: eo.intl.string(eo.t.PBHFSq),
                          onConfirm: _,
                          onCancel: n,
                          title: eo.intl.format(eo.t["6n6oXA"], { tier: l.name }),
                          subtitle: h
                              ? eo.intl.string(eo.t.lzAoKB)
                              : eo.intl.formatToPlainString(eo.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(rI.Uf, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: o ?? void 0,
                          title: eo.intl.format(eo.t.haiCxc, { tier: l.name }),
                          subtitle: h ? eo.intl.string(eo.t.RvtbP5) : eo.intl.string(eo.t.zY39Zu),
                          description: h
                              ? eo.intl.formatToPlainString(eo.t.QCe4rY, { applicationName: o?.name })
                              : eo.intl.string(eo.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, r.jsx)(ec.UX, {
                    children: (0, r.jsx)(rw.Ay, {
                        onBack: n,
                        backText: eo.intl.string(eo.t.TQBY1J),
                        onPrimary: _,
                        primaryCTA: rw.ti.CONTINUE,
                        primaryText: eo.intl.string(eo.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var rx = n(21161);
function rk(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: a } = e,
        o = (0, rv.K)(),
        { application: l } = (0, nd.V)(),
        { readySlideId: c, updatedSubscription: d } = (0, v.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        _ = (0, nh.S3)(),
        h = (0, rN.A)(rM.Y),
        { createMultipleConfettiAt: f } = s.useContext(rx.x),
        p = _?.name ?? "",
        E = () => {
            i(), a?.();
        },
        m = c === u.pn.CONFIRM,
        g = (0, rR.bg)(_?.flags ?? 0),
        A =
            null != o && o.benefits.length > 0
                ? eo.intl.formatToPlainString(eo.t["+IQQVM"], { benefitCount: o.benefits.length })
                : null,
        { showBenefitsFirst: I } = ry();
    return (
        I
            ? (t = h
                  ? (0, r.jsx)(rL, { tierName: p, onConfirm: E, subscription: d })
                  : (0, r.jsx)(rI.XG, { tierName: p, onConfirm: E, subscription: d }))
            : h
              ? (t = (0, r.jsx)(rD, {
                    title: eo.intl.format(eo.t.ea6tZr, { tierName: p }),
                    subtitle:
                        null != o && o.benefits.length > 0
                            ? eo.intl.formatToPlainString(eo.t.HNepft, { benefits: A })
                            : null,
                    onConfirm: E,
                    confirmCta: eo.intl.string(eo.t.nlkywz),
                }))
              : ((t =
                    null != o && null != l
                        ? (0, r.jsx)(rI.Uf, {
                              icon: o.thumbnail,
                              storeListingBenefits: o.benefits,
                              application: l,
                              title: eo.intl.format(eo.t["Q+qktS"], { tier: p }),
                              subtitle: eo.intl.string(eo.t.ECKxXU),
                              description: g
                                  ? eo.intl.format(eo.t["MAtQk/"], { applicationName: l?.name })
                                  : eo.intl.format(eo.t.vHkMF4, { tier: p }),
                          })
                        : (0, r.jsx)(Y.A, {})),
                (n = (0, r.jsx)(rw.Ay, {
                    onPrimary: E,
                    primaryCTA: rw.ti.CONTINUE,
                    primaryText: eo.intl.string(eo.t["JtWl+a"]),
                }))),
        s.useEffect(() => {
            nc.Ay.useReducedMotion && m && f(window.innerWidth / 2, window.innerHeight / 2);
        }, [f, m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(ec.dZ, { children: [(0, r.jsx)(nI.A, {}), t] }),
                null != n && (0, r.jsx)(ec.UX, { children: n }),
            ],
        })
    );
}
var rU = n(304072),
    rG = n(427858),
    rF = n(166926),
    rV = n(953761);
let rB = {
    CHECKOUT_FLOW: S.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    CustomCheckoutPredicateStep: function (e) {
        let { initialPlanId: t, setAnalyticsData: n } = e,
            {
                selectedSkuId: i,
                setSelectedSkuId: a,
                setSelectedPlanId: o,
                priceOptions: l,
            } = (0, v.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                priceOptions: e.checkoutPriceOptions,
            })),
            {
                hasFetchedRelatedSubscriptionPlans: c,
                subscriptionPriceOptionsLoading: d,
                displayCurrency: _,
            } = (0, H.Jn)(),
            { setSubscriptionMetadataRequest: h, guildId: f, showBenefitsFirst: p } = ry(),
            E = (0, B.Hp)(),
            m = K(),
            g = (0, D.l)(),
            { isGift: A } = (0, ne.Pv)(),
            I = p ? u.pn.BENEFITS : u.pn.REVIEW,
            [T, S] = s.useState(!m || !c || d);
        return (s.useEffect(() => {
            S(!m || !c || d);
        }, [d, c, m]),
        s.useEffect(() => {
            null != f && h({ guild_id: f });
        }, [f, h]),
        s.useEffect(() => {
            o(t);
            let e = null != t ? en.A.get(t) : null;
            T ||
                E ||
                (n((t) => {
                    let n = null != e ? (0, e2.y8)(e.id, !1, A, { paymentSourceId: l.paymentSourceId }) : void 0;
                    return {
                        ...t,
                        subscription_plan_id: e?.id,
                        price: n?.amount,
                        regular_price: e?.price,
                        currency: _,
                    };
                }),
                null != e && (a(e?.skuId), g(I)));
        }, [E, t, A, T, l, _, i, n, o, a, g, I]),
        T)
            ? (0, r.jsx)(Y.A, {})
            : E
              ? (0, r.jsx)(j.oO, {})
              : null;
    },
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            i = s.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(rI.fs, { step: t, onClose: i });
    },
    STEPS_BEFORE_CHECKOUT: [
        {
            key: u.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(rP, { ...e }),
            options: { useBreadcrumbLabel: () => eo.intl.string(eo.t["5LD2+B"]) },
        },
    ],
    CHECKOUT_STEPS: {
        [u.pn.REVIEW]: function (e) {
            let { handleStepChange: t, planGroup: n, openInvoiceId: i, analyticsData: a, analyticsLocation: o } = e,
                {
                    purchaseState: l,
                    contextMetadata: c,
                    purchaseError: d,
                    setCurrency: _,
                    activeSubscription: h,
                } = (0, v.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    contextMetadata: e.contextMetadata,
                    purchaseError: e.purchaseError,
                    setCurrency: e.setCheckoutCurrency,
                    activeSubscription: e.activeSubscription,
                })),
                { paymentSources: f } = (0, io.jm)(),
                { dropdownCurrencies: p } = (0, H.Jn)(),
                { subscriptionMetadataRequest: E, showBenefitsFirst: m } = ry(),
                g = m ? u.pn.BENEFITS : void 0,
                A = (0, il.A)(),
                I = (0, nh.S3)();
            if (null == A)
                throw new ia.v({
                    message: "Expected plan to be selected",
                    extraSentryInformation: { selectedPlan: A },
                });
            let T = s.useRef(null),
                [S, y] = (0, rU.A)(!1, 500),
                C = (0, eB.mx)(),
                N = (0, rR.bg)(I?.flags ?? 0);
            s.useEffect(() => {
                null != d && null != T.current && T.current.scrollIntoView({ behavior: "smooth" });
            }, [d]);
            let R = s.useRef(null),
                O = s.useCallback(() => {
                    t(u.pn.ADD_PAYMENT_STEPS);
                }, [t]);
            return l === b.h.PURCHASING
                ? (0, r.jsx)(Y.A, {})
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(ec.dZ, {
                              children:
                                  null == h
                                      ? (0, r.jsx)(rV._, {
                                            selectedPlanId: A.id,
                                            planGroup: n,
                                            paymentSources: f,
                                            handlePaymentSourceAdd: O,
                                            metadata: N ? void 0 : E,
                                        })
                                      : (0, r.jsx)(rG.A, {
                                            premiumSubscription: h,
                                            paymentSources: f,
                                            handlePaymentSourceAdd: O,
                                            planId: A.id,
                                            planGroup: n,
                                            currencies: p,
                                            onCurrencyChange: (e) => _(e),
                                            hasOpenInvoice: null != i,
                                            purchaseState: l,
                                        }),
                          }),
                          (0, r.jsx)(ec.UX, {
                              children: (0, r.jsx)(rF.U, {
                                  premiumSubscription: h ?? null,
                                  onBack: () => null != g && t(g),
                                  handleStepChange: t,
                                  postPurchaseStep: u.pn.CONFIRM,
                                  legalTermsNodeRef: R,
                                  flashLegalTerms: () => y(!0),
                                  analyticsLocation: o,
                                  baseAnalyticsData: a,
                                  flowStartTime: c.startTime,
                                  planGroup: n,
                                  openInvoiceId: i,
                                  metadata: N ? void 0 : E,
                                  backButtonEligible: !!m || void 0,
                                  invoiceError: C,
                                  disablePurchase: E?.guild_id == null && !N,
                                  onPaymentSourceAdd: O,
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
                    loadId: t,
                    applicationId: n,
                    activeSubscription: i,
                    stepConfigs: s,
                    skuId: a,
                    tenantParams: o,
                    children: l,
                } = e,
                { guildId: u, showBenefitsFirst: c } = o;
            return (0, r.jsx)(y.M, {
                loadId: t,
                applicationId: n,
                activeSubscription: i,
                stepConfigs: s,
                skuIDs: [a],
                unifiedCheckoutFlow: S.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                children: (0, r.jsx)(rC, {
                    guildId: u,
                    showBenefitsFirst: c,
                    children: (0, r.jsx)(it.Qt, { children: l }),
                }),
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
                                (W.hP(),
                                (0, rA.f5)(r),
                                null != o && o(),
                                null != r && (i || rT.A.getGuildId() !== r) && (0, n1.pX)(ea.BVt.CHANNEL(r)));
                    },
                    [a, o, i, r],
                );
            return n({ ...t, onClose: l, forceNewPaymentModal: !0 });
        },
        tenantAnalyticsLocation: T.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rk, { ...e }) },
};
var rj = n(989553);
function rH(e) {
    let { handleClose: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        { application: i } = (0, nd.V)(),
        s = (0, nh.gU)(),
        { isGift: a, giftRecipient: o } = (0, ne.Pv)();
    ep()(null != n, "Expected selectedSkuId"), ep()(null != i, "Expected application");
    let l = s[n];
    ep()(null != l, "Expected sku");
    let u = a
        ? eo.intl.formatToPlainString(eo.t["2VjPTw"], {
              itemName: l.name,
              giftRecipient: o?.username ?? "your recipient",
          })
        : eo.intl.formatToPlainString(eo.t.wK0IbP, { applicationName: i.name, itemName: l.name });
    return (0, r.jsxs)(ec.dZ, {
        children: [
            (0, r.jsx)(nI.A, {}),
            (0, r.jsxs)("div", {
                className: rj.EL,
                children: [
                    (0, r.jsx)(eP.D, { variant: "heading-xxl/bold", className: rj.RS, children: "Success!" }),
                    (0, r.jsx)(eD.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: rj.yF }),
                    (0, r.jsx)(eg.$, { onClick: t, text: eo.intl.string(eo.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var rY = n(67480),
    rW = n(328968),
    rK = n(371794),
    r$ = n(565756);
u.pn.GIFT_CUSTOMIZATION;
let rz = {
    CHECKOUT_FLOW: eI.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [u.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, ne.Pv)(),
                a = (0, v.t4)((e) => e.selectedSkuId),
                o = (0, g.bG)([eJ.default], () => eJ.default.getCurrentUser()),
                l = (0, g.bG)([rY.A], () => (null != a ? rY.A.get(a) : null), [a]),
                u = nX(),
                c = (0, g.bG)([rW.A], () => (null != a ? rW.A.getForSKU(a) : null), [a]),
                d =
                    c?.headerBackground != null && l?.applicationId != null
                        ? (0, rK.YE)(l.applicationId, c.headerBackground, 256)
                        : void 0,
                _ = async (e, t) => {},
                h = null == i || i.id === o?.id || t.length > er.Jo,
                f = s.useMemo(() => ({ disabled: h }), [h]);
            return (0, r.jsx)(eI.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: eI.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: r$.P6,
                        children: [
                            l?.name != null &&
                                (0, r.jsx)(eP.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: l.name,
                                }),
                            null != d && (0, r.jsx)("img", { src: d, alt: l?.name ?? "", className: r$.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, r.jsxs)("div", {
                        className: r$.P6,
                        children: [
                            (0, r.jsx)(nW, { recipients: u, selectedSkuId: a, validateSelectedGift: _ }),
                            (0, r.jsx)(nQ.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: r$.iX,
                                innerClassName: r$.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: f,
            });
        },
        [u.pn.REVIEW]: t$.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rH, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var rq = n(429913),
    rZ = n(733391),
    rX = n(26594),
    rQ = n(510022),
    rJ = n(317560),
    r0 = n(366523),
    r1 = n(910200),
    r2 = n(208733);
function r3(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, eF.Ay)(),
        { selectedSkuId: i, entitlementsGranted: a } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: o } = (0, nd.V)(),
        l = (0, nh.gU)(),
        { isGift: u, giftRecipient: c } = (0, ne.Pv)();
    ep()(null != i, "Expected selectedSkuId"), ep()(null != o, "Expected application");
    let d = l[i];
    ep()(null != d, "Expected sku");
    let _ = a.find((e) => e.sku_id === i),
        h = (0, rX.G)(_, { isGift: u });
    return (s.useEffect(() => {
        u || ((0, rJ.j)(), t(), (0, rQ.n)({ sku: d, application: o, analyticsLocations: n, entitlement: _ }));
    }, [u, d, o, t, n, _]),
    u)
        ? (0, r.jsxs)(ec.dZ, {
              children: [
                  (0, r.jsx)(nI.A, {}),
                  (0, r.jsxs)("div", {
                      className: r2.EL,
                      children: [
                          (0, r.jsx)(r0.e, { sku: d, shape: "square", containerClassName: r2.LC }),
                          (0, r.jsx)(eP.D, {
                              variant: "heading-xl/semibold",
                              className: r2.RS,
                              children: eo.intl.string(eo.t["5glWta"]),
                          }),
                          (0, r.jsx)(eD.E, {
                              variant: "text-md/normal",
                              children: eo.intl.formatToPlainString(eo.t["2VjPTw"], {
                                  itemName: d.name,
                                  giftRecipient: c?.username ?? "your recipient",
                              }),
                          }),
                          null != h &&
                              (0, r.jsx)("div", {
                                  className: r2.Is,
                                  children: (0, r.jsx)(r1.O, { Icon: h.Icon, text: h.text }),
                              }),
                          (0, r.jsx)("div", {
                              className: r2.UD,
                              children: (0, r.jsx)(eg.$, {
                                  onClick: t,
                                  text: eo.intl.string(eo.t.cpT0Cq),
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
var r6 = n(889137),
    r4 = n(742158),
    r5 = n(313961),
    r7 = n(238017),
    r8 = n(650588),
    r9 = n(117218),
    se = n(763827),
    st = n(403362),
    sn = n(871123),
    si = n(832163),
    sr = n(31969),
    ss = n(44724),
    sa = n(980094),
    so = n(806931),
    sl = n(107610);
function su(e) {
    let { handleClose: t, sku: n, application: i } = e,
        a = s.useCallback(() => {
            (0, ss.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        l = s.useCallback(() => {
            t();
            let e = si.A.getStorefrontState(n.applicationId)?.activePage;
            (0, sn.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, o.closeAllModals)(),
                (0, ss.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, r.jsx)("div", {
        className: sl.$O,
        children: (0, r.jsx)(eA.Q, {
            text: eo.intl.string(eo.t.ImioFL),
            onMouseDown: a,
            onClick: l,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let sc = {
    CHECKOUT_FLOW: eI.CL.SLAYER_STOREFRONT_CHECKOUT,
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
                            setCustomGiftMessage: c,
                            giftRecipient: d,
                            emojiConfetti: _,
                            soundEffect: h,
                            setEmojiConfetti: f,
                            setSoundEffect: p,
                            giftingOrigin: E,
                            additionalUserIds: m,
                        } = (0, ne.Pv)(),
                        A = (0, v.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, nd.V)(),
                        T = (0, g.bG)([eJ.default], () => eJ.default.getCurrentUser()),
                        S =
                            ((t = T?.id),
                            (n = nX()),
                            (i = (function (e) {
                                let t = (0, g.bG)([se.A], () => (se.A.isConnected() ? se.A.getChannelId() : null)),
                                    [n, i] = s.useState([]);
                                return (
                                    s.useEffect(() => {
                                        let n = null != t ? r5.A.getParticipants(t) : [],
                                            r = [],
                                            s = new Set();
                                        for (let t of n)
                                            (!(0, so.Xw)(t) && !(0, so.Ay)(t)) ||
                                                t.user.id === e ||
                                                s.has(t.user.id) ||
                                                (s.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, so.Ay)(e) && !(0, so.Ay)(t)
                                                ? -1
                                                : (0, so.Ay)(t) && !(0, so.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            i(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (a = (0, g.yK)([eJ.default], () => m?.map(eJ.default.getUser).filter(st.Vq) ?? [], [m])),
                            s.useMemo(
                                () =>
                                    n$().uniqWith(
                                        [...(null != d ? [d] : []), ...a, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, a, i, n],
                            )),
                        y = (0, g.bG)([rY.A], () => (null != A ? rY.A.get(A) : null), [A]),
                        { userPrice: C } = (0, r9.CD)({ sku: y, priceSetAssignmentPurchaseType: ea.lid.GIFT }),
                        N = (0, sr.F)("gift_customization", { applicationId: I?.id, skuId: y?.id }),
                        R = (0, sn.fq)(y),
                        O = (0, sn.xf)(y);
                    async function b(e, t) {}
                    let D = (e) => {
                            null != p && p(null == e ? void 0 : e);
                        },
                        L = () =>
                            (0, r.jsxs)("div", {
                                className: sl.mT,
                                children: [
                                    null != R &&
                                        (0, r.jsx)(r0.A, {
                                            containerClassName: sl.T3,
                                            cardImage: R,
                                            cardBackgroundImage: O,
                                            altText: y?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: sl._T,
                                        children: [
                                            (0, r.jsx)(r8.A, { sound: h, onSelect: D }),
                                            (0, r.jsx)(r7.A, {
                                                setEmojiConfetti: f,
                                                emojiConfetti: null == _ ? void 0 : _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        w = () =>
                            (0, r.jsxs)("div", {
                                className: sl.Tc,
                                children: [
                                    null != d && (E === er.vQ.USER_PROFILE_WISHLIST || E === er.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(n0.Z, { giftRecipient: d })
                                        : (0, r.jsx)(nW, { selectedSkuId: A, validateSelectedGift: b, recipients: S }),
                                    (0, r.jsx)(nQ.A, {
                                        onTextChange: (e) => c?.(e),
                                        pendingText: u,
                                        currentText: u,
                                        disableThemedBackground: !0,
                                        className: sl.iX,
                                        innerClassName: sl.pt,
                                    }),
                                    null == y
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: sl.AN,
                                              children: [
                                                  (0, r.jsx)(r4.z, {
                                                      className: sl.jr,
                                                      children: eo.intl.string(eo.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: sl.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: sl.Xb,
                                                              children:
                                                                  null != y &&
                                                                  null != R &&
                                                                  (0, r.jsx)(r0.A, {
                                                                      containerClassName: sl.Iy,
                                                                      cardImage: R,
                                                                      cardBackgroundImage: O,
                                                                      altText: y.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: sl.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(sa.Q, { application: I }),
                                                                  (0, r.jsx)(eD.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: y.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(eD.E, {
                                                              variant: "text-md/semibold",
                                                              children: C,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != y &&
                                        (0, sn.Ri)(y) &&
                                        (0, r.jsx)(eE.w, { type: "info", children: eo.intl.string(eo.t.lORYb6) }),
                                    null != N &&
                                        (0, r.jsx)(r1.O, {
                                            Icon: N.Icon,
                                            text: N.text,
                                            endDatetime: N.endsAt,
                                            tooltip: N.tooltip,
                                        }),
                                    null != y && (0, r.jsx)(su, { handleClose: l, sku: y, application: I }),
                                ],
                            });
                    return {
                        renderStepBody: function () {
                            return (0, r.jsxs)("div", { className: sl.Du, children: [L(), w()] });
                        },
                        getLeftColumnComponent: L,
                        getRightColumnComponent: w,
                        onStepChange: o,
                        onBackClick: l,
                        disabled: null == d || d.id === T?.id || u.length > er.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                o = s.useMemo(() => ({ disabled: a }), [a]);
            return (0, r.jsx)(eI.Mw, {
                paymentModalStepProps: e,
                layout: eI.XZ.CUSTOM_STEP_BODY,
                renderStepBody: i,
                primaryCTAButtonProps: o,
            });
        },
        [u.pn.REVIEW]: t$.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(r3, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: a, isGift: o, skuId: l, ...u } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        i = (0, rq.h)(t);
                    s.useEffect(() => {
                        null == i ||
                            null == n ||
                            rW.A.isFetchingForSKU(n) ||
                            null != rY.A.get(n) ||
                            (0, rZ.Pp)(i.id, n);
                    }, [i, n]);
                })({ applicationId: a, skuId: l }),
                (0, r.jsx)(y.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: a,
                    skuIDs: [l],
                    purchaseType: ts.VV.ONE_TIME,
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
            n = (0, r6.YW)(t)
                .with(u.pn.GIFT_CUSTOMIZATION, () => eo.intl.string(eo.t["JCFN/y"]))
                .with(u.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => eo.intl.string(eo.t.lDbi6H))
                .with(u.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(t8.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var sd = n(46225),
    s_ = n(587895),
    sh = n(944355),
    sf = n(977445),
    sp = n(211287),
    sE = n(623373),
    sm = n(739508),
    sg = n(715054);
(0, a.A)();
var sA = n(136857),
    sI = n(158317),
    sT = n(855104);
n(322076);
var sS =
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
    sy = n(318254),
    sC = n(576052),
    sN = n(120992),
    sv = n(194256),
    sR = n(319820),
    sO = n(200766);
let sb = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: i, isSocialLayerGameItem: s } = (0, sR.AO)({ sku: t }),
            a = (0, sv.oO)(i);
        s ? (a = eo.intl.string(ta.default.qwSlCO)) : (0, sE.Ab)(i) && (a = eo.intl.string(eo.t["0TmQRG"]));
        let o = (0, sv.dL)(t),
            l = (0, ns.EZ)(t.id) ? sC.m[t.id].render({ className: sO.$ }) : (0, r.jsx)(tt.WH, { sku: t, product: i });
        return (0, r.jsx)(tt.f7, {
            label: o,
            description: a,
            graphic: l,
            price: null != n ? `${n}` : "",
            PriceIcon: sy.C,
        });
    },
    sD = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, sN.c)({ applicationId: (0, d.P)(t), skuIDs: [t] });
        let i = (0, nu.bG)([rY.A], () => rY.A.get(t), [t]);
        return null == i
            ? (0, r.jsx)(eU.y, { type: eU.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(sb, { sku: i, orbPriceAmount: n });
    },
    sL = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(sh.vW, { label: eo.intl.string(eo.t.y0WGqP), value: null != t ? `${t}` : "", Icon: sy.C });
    },
    sw = () => eo.intl.string(eo.t.wmcDyu);
function sM(e) {
    let { skuId: t } = e,
        { immediateDelivery: n } = (0, e8.U)(),
        i = (function (e) {
            let { skuId: t } = e,
                n = sw(),
                i = (0, g.bG)([rY.A], () => rY.A.get(t), [t]),
                r = i?.productLine,
                s = i?.applicationId,
                a = (0, g.bG)([s_.A], () => (r === ea.EZt.SOCIAL_LAYER_GAME_ITEM ? s_.A.getApplication(s) : null), [
                    s,
                    r,
                ]),
                { fetched: o, hasAlreadyLinked: l } = (0, sd.RD)(a);
            return r !== ea.EZt.SOCIAL_LAYER_GAME_ITEM
                ? { type: sh.I0.OrbsRedemption, purchaseButtonText: n }
                : {
                      type: sh.I0.GiftGameShop,
                      purchaseButtonText: n,
                      applicationName: a?.name,
                      applicationId: s,
                      shouldAppendDisclaimer: o && !l,
                  };
        })({ skuId: t });
    return (0, r.jsx)(sh._P, { variant: i, paymentSourceType: null, immediateDelivery: n });
}
let sP = (0, s.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    sx = () => (0, s.useContext)(sP),
    sk = { payment_gateway: ts.kM.VIRTUAL_CURRENCY, currency: ea.Yri.DISCORD_ORB },
    sU = {
        CHECKOUT_FLOW: eI.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [u.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: a,
                        onRedeemVirtualCurrency: o,
                        skuId: l,
                        analyticsSourceLocation: c,
                    } = sx(),
                    { primaryButtonProps: h, ...p } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                isRedeeming: a,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: l,
                                handleStepChange: c,
                            } = e,
                            { enabled: h } = sp.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: p, orderOrbPriceAmount: E } = (0, v.t4)((e) => {
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
                                showCollectiblesDiscountWarning: y,
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
                                    { analyticsLocations: l } = (0, eF.Ay)(),
                                    {
                                        selectedSkuId: c,
                                        setPurchaseState: h,
                                        firstConstraintReasonCode: p,
                                    } = (0, v.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    E = (0, sT.gN)(),
                                    m = (0, s.useRef)(E),
                                    { emitOrbCheckoutPaymentFlowEvent: g } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: i,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: a } = (0, nd.V)(),
                                            { hasPaymentSources: o } = (0, io.jm)(),
                                            {
                                                loadId: l,
                                                startTime: c,
                                                discoverySessionId: h,
                                            } = (0, v.t4)((e) => e.contextMetadata),
                                            p = (0, s.useMemo)(
                                                () => ({
                                                    load_id: l,
                                                    discovery_session_id: h,
                                                    application_id: (0, d.P)(t),
                                                    location: i,
                                                    location_stack: i,
                                                    sku_id: t,
                                                    activity_session_id: a,
                                                    payment_gateway: ts.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: ea.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: ea.frM[ea.VVm.ONE_TIME],
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
                                                    let n = Date.now() - c;
                                                    e === ea.HAw.PAYMENT_FLOW_STARTED
                                                        ? _.default.track(ea.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...p,
                                                              has_saved_payment_source: o,
                                                              payment_gateway: ts.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === ea.HAw.PAYMENT_FLOW_LOADED
                                                          ? _.default.track(ea.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...p,
                                                                has_saved_payment_source: o,
                                                                initial_step: u.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === ea.HAw.PAYMENT_FLOW_CANCELED
                                                            ? _.default.track(ea.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...p,
                                                                  duration_ms: n,
                                                              })
                                                            : e === ea.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? _.default.track(ea.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...p,
                                                                    duration_ms: n,
                                                                })
                                                              : e === ea.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? _.default.track(ea.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...p,
                                                                      duration_ms: n,
                                                                  })
                                                                : _.default.track(ea.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...p,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [c, p, o],
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
                                        (g(ea.HAw.PAYMENT_FLOW_FAILED, i), (m.current = null));
                                }, [i, g]);
                                let A = (0, s.useCallback)(() => {
                                        (m.current = E),
                                            g(ea.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                h(b.h.COMPLETED), o(u.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, h, E, g, o]),
                                    I = m.current ?? E,
                                    T = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, nF.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, s.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof sI.FY && null != t)
                                                    switch (t) {
                                                        case sS.INSUFFICIENT_ORB_BALANCE:
                                                            return eo.intl.string(eo.t.keFvXM);
                                                        case sS.SKU_ALREADY_OWNED:
                                                            return eo.intl.string(eo.t.m371Mx);
                                                        case sS.BUNDLE_PARTIALLY_OWNED:
                                                            return eo.intl.string(eo.t.v9oC0p);
                                                        default:
                                                            return eo.intl.string(eo.t.fqJZ11);
                                                    }
                                                return e instanceof sI.j2
                                                    ? eo.intl.string(eo.t["2BmwgV"])
                                                    : e.code === sA.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? eo.intl.string(eo.t.keFvXM)
                                                      : e.code === sA.tG.ALREADY_PURCHASED
                                                        ? eo.intl.string(eo.t.m371Mx)
                                                        : e.code === sA.tG.BILLING_ORDER_NOT_SIGNABLE
                                                          ? eo.intl.string(eo.t.ZHgEG7)
                                                          : eo.intl.string(eo.t.fqJZ11);
                                            })(i, p),
                                        [i, p],
                                    ),
                                    orbPriceAmount: T,
                                    orbBalanceToDisplay: I,
                                    onClickCheckout: A,
                                    selectedSkuId: c,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: l,
                                handleStepChange: c,
                            }),
                            N = (0, g.bG)([rY.A], () => rY.A.get(t), [t]),
                            R = (0, sf.uS)(N?.applicationId),
                            {
                                disabled: O,
                                tooltipText: D,
                                text: L,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: i = !1 } = e,
                                    { disabled: r, tooltipText: a } = (0, s.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: eo.intl.string(eo.t["c/rcUu"]) }
                                                : !i && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: eo.intl.string(eo.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, i],
                                    );
                                return { disabled: r, tooltipText: a, text: sw() };
                            })({ orbBalance: I, orbPriceAmount: h ? p : A, isInTestMode: R }),
                            w = (0, s.useMemo)(
                                () => ({ onClick: T, loading: a, text: L, disabled: O, tooltipText: D }),
                                [T, a, L, O, D],
                            ),
                            M = y ? eo.intl.format(eo.t.fsOXXO, {}) : null,
                            P = R ? eo.intl.string(eo.t.OvMyMd) : null;
                        return {
                            isStepLoading: m,
                            upperInlineNoticeProps: (0, s.useMemo)(() => {
                                if (null != P || null != M || null != C) {
                                    let e = [];
                                    return (
                                        null != P &&
                                            e.push({ type: "warning", message: P, key: "test-mode-warning-notice" }),
                                        null != M &&
                                            e.push({ type: "warning", message: M, key: "orb-checkout-warning-notice" }),
                                        null != C &&
                                            e.push({ type: "critical", message: C, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [P, M, C]),
                            purchaseItemContent: (0, r.jsx)(sD, { skuId: t, orbPriceAmount: h ? E : A }),
                            paymentMethodContent: (0, r.jsx)(sL, { orbBalance: I }),
                            legalContent: (0, r.jsx)(sM, { skuId: t }),
                            primaryButtonProps: w,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: l,
                        analyticsSourceLocation: c,
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: a,
                        onRedeemVirtualCurrency: o,
                        handleStepChange: t,
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ec.dZ, { children: (0, r.jsx)(e7.T, { ...p }) }),
                        (0, r.jsx)(ec.UX, { children: (0, r.jsx)(N.lo, { primaryButtonProps: h }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: i, children: a } = e,
                    { order: o, setOrder: l } = (0, v.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: u,
                        isRedeeming: c,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: _,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: i, onSignFailure: r, order: a } = e,
                            o = (0, g.bG)([eJ.default], () => e2.Ay.canUseShopDiscounts(eJ.default.getCurrentUser())),
                            l = (0, g.bG)([rY.A], () => rY.A.get(t), [t]),
                            u = (0, r9.JL)({ sku: l }),
                            { product: c } = (0, nw.q)(t),
                            d = (0, s.useMemo)(() => {
                                if (null != u) return { orbPriceAmount: u.amount };
                                if (null != c) {
                                    let e = (0, sE.CW)({ product: c, hasShopDiscount: o });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [u, c, o]);
                        d?.orbPriceAmount == null &&
                            (0, sm.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: _,
                                isSubmitting: h,
                                error: f,
                            } = (0, sg.Q)({ skuId: t, loadId: n, order: a, onSignFailure: r }),
                            p = (0, s.useCallback)(
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
                            orbProductContext: d,
                            onRedeemVirtualCurrency: p,
                            isRedeeming: h,
                            orbRedemptionError: f,
                        };
                    })({ skuId: t, loadId: n, order: o, onSignFailure: l }),
                    h = (0, s.useMemo)(
                        () => ({
                            orbProductContext: u,
                            isRedeeming: c,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: _,
                            skuId: t,
                            analyticsSourceLocation: i,
                        }),
                        [u, c, d, _, t, i],
                    );
                return (0, r.jsx)(sP.Provider, { value: h, children: a });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: i } = sx(),
                    r = ((e) => {
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
                    })({ orbProductContext: i, overrideAnalyticParams: sk });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: sk,
        },
    },
    sG = {
        [h.C.ORB_CHECKOUT]: {
            flowType: h.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: ea.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: sU,
        },
        [h.C.COLLECTIBLES_CHECKOUT]: {
            flowType: h.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: ea.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: n9,
        },
        [h.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: ea.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: sc,
        },
        [h.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_CHECKOUT,
            purchaseType: ea.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: rg,
        },
        [h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [h.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: ea.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: rz,
        },
        [h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: ea.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: rB,
        },
        [h.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: ea.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: t7,
            flowType: h.C.GUILD_PRODUCT_CHECKOUT,
        },
        [h.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: iO,
            purchaseType: ea.VVm.SUBSCRIPTION,
        },
        [h.C.GUILD_BOOST_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.GUILD_BOOST_CHECKOUT,
            purchaseType: ea.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: tK,
        },
    };
var sF = n(735305);
let sV = (e) => {
        let { returnStep: t = u.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: i } = e,
            { purchaseType: a } = (0, v.t4)((e) => ({ purchaseType: e.purchaseType })),
            o = s.useCallback(
                () =>
                    ((e) => {
                        let {
                            paymentModalStepProps: t,
                            returnStep: n = u.pn.REVIEW,
                            returnStepIfNoPaymentSources: i,
                            purchaseType: r,
                        } = e;
                        if (0 === Object.keys(z.A.paymentSources).length) {
                            if (null != i) return void t.handleStepChange(i);
                            r === ts.VV.SUBSCRIPTION
                                ? t.handleStepChange(n, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS })
                                : t.handleClose();
                        } else t.handleStepChange(n, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS });
                    })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: i, purchaseType: a }),
                [t, n, i, a],
            );
        return (0, r.jsx)(sF.x, { ...i, onReturn: o });
    },
    sB = (e) => {
        let { initialPlanId: t } = e,
            n = (0, v.t4)((e) => e.selectedSkuId),
            i = (0, il.A)(),
            { isGift: a, claimableRewards: o } = (0, ne.Pv)(),
            l = rc({ isGift: a, skuId: n }),
            c = (0, iZ.lp)(l),
            d = (0, id.px)(i, a, o),
            _ = s.useMemo(() => {
                let e = null == t ? u.pn.PLAN_SELECT : u.pn.REVIEW;
                return c && (e = u.pn.REVIEW), d && (e = u.pn.SELECT_FREE_SKU), e;
            }, [c, d, t]);
        return (0, r.jsx)(sV, { paymentModalStepProps: e, returnStep: u.pn.REVIEW, returnStepIfNoPaymentSources: _ });
    },
    sj = (e) => {
        let {
            checkoutFlow: t,
            returnStep: n = u.pn.REVIEW,
            returnStepIfNoPaymentSources: i,
            paymentModalStepProps: s,
        } = e;
        return t === h.C.PREMIUM_CHECKOUT
            ? (0, r.jsx)(sB, { ...s })
            : (0, r.jsx)(sV, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: i });
    };
var sH = n(339048),
    sY = n(469778),
    sW = n(315949),
    sK = n(599062);
function s$() {
    let { refreshCategories: e } = (0, sW.A)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(t8.rQ, { title: eo.intl.string(eo.t["p8+qtU"]) }),
            (0, r.jsx)(V.c, { children: (0, r.jsx)(sK.h, { onRetry: e, errorOrigin: sK.A.GIFT_MODAL }) }),
        ],
    });
}
function sz(e) {
    let { handleStepChange: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        { paymentSources: i, hasFetchedPaymentSources: a } = (0, io.jm)(),
        { application: o } = (0, nd.V)(),
        l = (0, B.Hp)(),
        c = (0, nh.gU)(),
        d = (0, nh.Hu)(),
        { isGift: _ } = (0, ne.Pv)(),
        [h, f] = s.useState(!0),
        [p, E] = (0, nu.yK)([nf.A], () => [nf.A.isFetchingCategories, nf.A.error]);
    return (s.useEffect(() => {
        let e = null != o;
        d && a && e && f(p);
    }, [d, a, o, p]),
    s.useEffect(() => {
        if (h || l || null == n) return;
        let e = c[n];
        _ &&
        (e?.productLine === ea.EZt.COLLECTIBLES ||
            e?.productLine === ea.EZt.APPLICATION ||
            e?.productLine === ea.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(u.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(i).length
              ? t(u.pn.ADD_PAYMENT_STEPS)
              : t(u.pn.REVIEW);
    }, [h, l, t, i, _, c, n]),
    h)
        ? (0, r.jsx)(Y.A, {})
        : l
          ? (0, r.jsx)(j.oO, {})
          : null != E
            ? (0, r.jsx)(s$, {})
            : null;
}
function sq(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: i, continueSessionToInitialStep: a } = e,
        { hasPaymentSources: o } = (0, io.jm)(),
        {
            selectedSkuId: l,
            setSelectedPlanId: c,
            activeSubscription: d,
            defaultPlanId: _,
            startedPaymentFlowWithPaymentSources: h,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        f = (0, B.Hp)(),
        p = K(),
        { hasFetchedRelatedSubscriptionPlans: E, subscriptionPriceOptionsLoading: m } = (0, H.Jn)(),
        { isGift: g } = (0, ne.Pv)(),
        A = rc({ isGift: g, skuId: l }),
        I = !p || !E || m,
        T = (0, nu.bG)([sY.A], () => sY.A.applicationIdsFetched.has(er.tv));
    return (iQ(
        "Payment Modal",
        I,
        5,
        { hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: E, subscriptionPriceOptionsLoading: m },
        { tags: { app_context: "billing" } },
    ),
    s.useEffect(() => {
        if ((T || (0, sH.LM)(er.tv), I || f)) return;
        let e = (0, iZ.vT)({ isTrial: A, isGift: g, selectedSkuId: l, startedPaymentFlowWithPaymentSources: h });
        null != a
            ? i(u.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: a })
            : null != n
              ? n !== er.gD.PREMIUM_GROUP_MONTH || o
                  ? i(u.pn.REVIEW)
                  : i(u.pn.ADD_PAYMENT_STEPS)
              : e
                ? (c((0, iZ.xT)(l, d, _)), i(u.pn.REVIEW))
                : null != t
                  ? i(u.pn.PLAN_SELECT)
                  : i(u.pn.SKU_SELECT);
    }, [a, d, f, T, n, I, i, t, l, c, A, _, g, h, o]),
    I)
        ? (0, r.jsx)(Y.A, {})
        : f
          ? (0, r.jsx)(j.oO, {})
          : null;
}
var sZ = n(891197),
    sX = n(293035);
function sQ() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i9.A, {}), (0, r.jsx)(ec.dZ, { children: (0, r.jsx)(sZ.N, { className: sX.D }) })],
    });
}
var sJ = n(830382),
    s0 = n(349288),
    s1 = n(94204);
function s2(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsxs)("div", {
            className: s1.a,
            children: [
                (0, r.jsx)(eP.D, { variant: "heading-xl/bold", children: eo.intl.string(eo.t.Q03WWV) }),
                (0, r.jsxs)("p", {
                    children: [
                        (0, r.jsx)(eD.E, { variant: "text-md/normal", children: eo.intl.string(eo.t.BxPxhI) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)(eD.E, { variant: "text-md/normal", children: eo.intl.string(eo.t.Y3fdOp) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsxs)(eD.E, {
                            variant: "text-md/normal",
                            children: [
                                eo.intl.string(eo.t.Paa4v4),
                                "\xa0",
                                n
                                    ? eo.intl.string(eo.t.StGVvC)
                                    : (0, r.jsx)(s0.Anchor, { onClick: i, children: eo.intl.string(eo.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function s3() {
    let e = s.useMemo(() => [{ variant: "primary", text: eo.intl.string(eo.t.g8vPzy), disabled: !0 }], []);
    return (0, r.jsx)(iY.H, { actions: e });
}
var s6 = n(599961);
function s4() {
    let [e, t] = s.useState(!1),
        n = async () => {
            t(!0), await (0, sJ.lo)();
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i9.A, {}),
            (0, r.jsx)(ec.dZ, { children: (0, r.jsx)(s2, { className: s6.r, isEmailResent: e, resendEmail: n }) }),
            (0, r.jsx)(ec.UX, { children: (0, r.jsx)(s3, {}) }),
        ],
    });
}
let s5 = { key: null, renderStep: (e) => (0, r.jsx)(sz, { ...e }), options: { modalSizeGetter: () => "md" } },
    s7 = { key: null, renderStep: (e) => (0, r.jsx)(sq, { ...e }) },
    s8 = [
        { key: u.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(s4, {}) },
        { key: u.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(sQ, {}), options: { renderHeader: !0 } },
    ],
    s9 = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            i = (0, s.useRef)(!1),
            a = (0, B.Hp)(),
            { handleStepChange: o } = t;
        return ((0, s.useEffect)(() => {
            a || i.current || (o(n), (i.current = !0));
        }, [a, o, n]),
        a)
            ? (0, r.jsx)(j.oO, {})
            : null;
    },
    ae = {
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
    at = (0, s.lazy)(() =>
        Promise.all([n.e("11005"), n.e("54791"), n.e("25246"), n.e("33319"), n.e("8430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    ),
    an = (e) => (0, r.jsx)(at, { ...e });
class ai {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = sG[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = ae[e]),
            (this.override_analytic_params =
                this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams);
    }
    getCheckoutStep(e) {
        return this.tenantCheckoutFlowConfig.CHECKOUT_STEPS[e];
    }
    generateRenderHeader() {
        let { CustomHeaderComponent: e } = this.tenantCheckoutFlowConfig;
        if (null != e) return (t, n, i) => (0, r.jsx)(e, { plan: t, onClose: n, step: i });
    }
    getPredicateStepConfig() {
        let { CustomCheckoutPredicateStep: e } = this.tenantCheckoutFlowConfig,
            { predicateStepType: t } = this.internalCheckoutFlowControls;
        return null != e
            ? { key: null, renderStep: (t) => (0, r.jsx)(e, { ...t }) }
            : "one_time_payment" === t
              ? s5
              : "subscription" === t
                ? s7
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(s9, { paymentModalStepProps: e, defaultStep: u.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== h.C.ORB_CHECKOUT)
            return {
                key: u.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(sj, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => eo.intl.string(eo.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(u.pn.REVIEW);
        return {
            key: u.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => eo.intl.string(eo.t.QBnNHq) },
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
            c = this.createDefinedStepConfigsArray([s, ...(null != a ? [a] : []), ...i, o, ...(r ? [] : s8), l]);
        return null != n && c.push({ key: u.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === h.C.ORB_CHECKOUT && null != e
            ? (0, d.P)(e)
            : this.checkoutFlow === h.C.COLLECTIBLES_CHECKOUT
              ? ea.FYj
              : this.checkoutFlow === h.C.PREMIUM_CHECKOUT
                ? er.tv
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
            isGift: c,
            eligibleForTrial: d,
        } = e;
        _.default.track(ea.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: s,
            payment_type: ea.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: i,
            application_id: r,
            location: a ?? l,
            location_stack: o,
            source: u,
            eligible_for_trial: d,
            payment_modal_version: "v2",
            checkout_design: f.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === h.C.PREMIUM_CHECKOUT ? { subscription_type: ea.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    renderCheckoutInstance(e) {
        let {
                giftContextProps: t,
                checkoutHandlers: { onComplete: i, onClose: u } = {},
                checkoutConfiguration: {
                    skuId: d,
                    skuProductLine: _,
                    discoverySessionId: f,
                    applicationId: p,
                    activeSubscription: E,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: g, analyticsSourceLocation: A },
                forwardedPaymentModalProps: { analyticsObject: I, ...T } = {},
                tenantParams: S,
            } = e,
            y = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            C = arguments.length > 2 ? arguments[2] : void 0,
            v = { current: (this.checkoutFlow === h.C.PREMIUM_CHECKOUT ? (0, c.A)() : null) ?? (0, a.A)() },
            R = { current: null },
            { modalKey: O } = C,
            b = this.generateRenderHeader(),
            D = p ?? this.getApplicationId(d),
            L = !!(null != t && t.isGift),
            w = !1,
            M = {
                ...T,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: L }),
                onComplete: (e) => {
                    null != i && i(e), (w = !0);
                },
                onClose: u,
                renderHeader: b,
                skuId: d ?? null,
                tenantParams: S ?? {},
                loadId: v.current,
                onOrderCreated: (e) => {
                    (v.current = e.id), (R.current = e);
                },
                discoverySessionId: f,
                activeSubscription: E ?? null,
                applicationId: D,
                analyticsLocations: g,
                analyticsObject: I,
                analyticsSourceLocation: A,
                giftContextProps: t,
            };
        if ("modal" === y)
            return (0, o.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        n.e("11005"),
                        n.e("54791"),
                        n.e("25246"),
                        n.e("33319"),
                        n.e("8430"),
                    ]).then(n.bind(n, 427325));
                    return (t) => (0, r.jsx)(e, { ...M, renderModalProps: t });
                },
                {
                    ...C,
                    onCloseRequest: () => {
                        null != C.onCloseRequest && C.onCloseRequest(w, v.current),
                            C.skipCloseModalOnCloseRequest || (0, o.closeModal)(O);
                    },
                    onCloseCallback: () => {
                        w ||
                            (m({ checkoutSucceeded: w, order: R.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: v.current,
                                skuId: d,
                                skuProductLine: _,
                                applicationId: D,
                                discoverySessionId: f,
                                analyticsLocation: T.analyticsLocation,
                                analyticsLocations: g,
                                analyticsObject: I,
                                analyticsSourceLocation: A,
                                isGift: L,
                                eligibleForTrial: null != T.trialId,
                            })),
                            null != C.onCloseCallback && C.onCloseCallback(w),
                            null != u && u(w, d);
                    },
                    modalKey: O,
                },
            );
        {
            let e = T.paymentModalOnClose ?? u,
                t = { transitionState: l.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, r.jsx)(s.Suspense, {
                fallback: (0, r.jsx)(N.Jg, {
                    transitionState: l.ip.ENTERED,
                    onClose: ea.tEg,
                    size: "md",
                    isModalContentLoading: !0,
                }),
                children: (0, r.jsx)(an, { ...M, paymentModalOnClose: e, renderModalProps: t }),
            });
        }
    }
    openCheckoutModal(e) {
        let { modalAPIOptions: t } = e;
        return this.renderCheckoutInstance(e, "modal", t);
    }
    renderStandaloneCheckout(e) {
        return this.renderCheckoutInstance(e, "standalone", { modalKey: "standalone-checkout" });
    }
}
