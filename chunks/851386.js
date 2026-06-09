n.d(t, { E: () => e3, default: () => e2, STEPS: () => e6 });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(73825),
    o = n(793574),
    d = n(688810),
    u = n(120700),
    c = n(197510),
    p = n(426398),
    S = n(558620),
    m = n(571878),
    E = n(960851),
    I = n(380619),
    x = n(607399),
    g = n(795791),
    h = n(788868),
    T = n(561794),
    f = n(97352),
    A = n(166403),
    P = n(937008),
    j = n(166532),
    _ = n(491057),
    b = n(566980),
    k = n(314671),
    v = n(735305),
    y = n(343834),
    C = n(926795),
    M = n(862241),
    N = n(615310),
    R = n(811656),
    O = n(394584),
    L = n(20742),
    w = n(430993),
    U = n(331322),
    G = n(71804),
    B = n(503698),
    F = n.n(B),
    H = n(575593),
    D = n(778712),
    W = n(187322),
    V = n(890856),
    z = n(947641),
    K = n(661531),
    Y = n(534514),
    q = n(834730),
    Z = n(713517),
    Q = n(674658),
    X = n(898461),
    $ = n(837015),
    J = n(929283),
    ee = n(761365),
    et = n(375708),
    en = n(267861);
let el = (e) => {
    let t,
        n,
        { skuId: r, user: s, claimed: a, onSelect: o, selectedSkuId: d } = e,
        [u, c] = i.useState(null),
        p = i.useCallback((e) => {
            c(e);
        }, []),
        S = i.useMemo(() => ({ current: u }), [u]),
        { isHoveringOrFocusing: m } = (0, Z.A)(S),
        E = !a && m,
        { product: I } = (0, Q.q)(r);
    if (null == I) return null;
    let x = I.items[0];
    return null == x
        ? null
        : ((0, X.T)(x)
              ? ((n = H.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(J.i, { item: x, user: s, isHighlighted: E, avatarSize: D._3.SIZE_96 })))
              : (0, $.F)(x) &&
                ((n = H.R.NAMEPLATE),
                (t = (0, l.jsx)(ee.A, { nameplate: x, user: s, isHighlighted: E, size: "small" }))),
          (0, l.jsx)(W.vN, {
              children: (0, l.jsxs)(V.s, {
                  ref: p,
                  "aria-label": I.name ?? "",
                  onClick: () => {
                      null == r || null == o || a || o(r);
                  },
                  className: F()(en._x, { [en.Vp]: !a, [en.mr]: E, [en.md]: d === r }),
                  children: [
                      (0, l.jsx)("div", {
                          className: F()(en.VH, { [en._Q]: n === H.R.AVATAR_DECORATION, [en.M4]: n === H.R.NAMEPLATE }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: F()(en.i1, { [en.Sf]: a }), children: t }),
                                            a &&
                                                (0, l.jsx)(z.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: K.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: en.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: en.tZ,
                          children: [
                              (0, l.jsx)(Y.D, { variant: "heading-md/extrabold", children: I.name }),
                              (0, l.jsx)(q.E, {
                                  variant: "text-sm/normal",
                                  children: a ? et.intl.string(et.t["6cfuDj"]) : et.intl.string(et.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var ei = n(374200),
    er = n(696208),
    es = n(683433),
    ea = n(344159);
function eo(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: r,
            onBackClick: s,
            showBackButton: a,
            planOptions: o,
            shouldRenderUpdatedPaymentModal: d = !1,
            isTrial: u,
            isNextDisabled: c = !1,
        } = e,
        { paymentSources: m } = (0, p.jm)(),
        E = (0, S.A)(),
        { isGift: I, claimableRewards: x } = (0, P.Pv)();
    r = r ?? m;
    let {
            variant: g,
            text: h,
            onClick: T,
            disabled: f,
        } = ed({
            onStepChange: t,
            selectedPlanId: (n = n ?? E?.id),
            isGift: I,
            claimableRewards: x,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: d,
            isTrial: u,
            isNextDisabled: c,
        }),
        A = i.useMemo(
            () =>
                null != n && o.includes(n)
                    ? [{ variant: g, text: h, onClick: T, disabled: f }]
                    : [{ variant: "primary", text: et.intl.string(et.t.XqMe3N), disabled: !0 }],
            [g, h, T, f, n, o],
        );
    return (0, l.jsx)(er.H, { leading: a && null != s ? (0, l.jsx)(es.A, { onClick: s }) : void 0, actions: A });
}
let ed = (e) => {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: l,
            claimableRewards: i,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: o,
            isNextDisabled: d = !1,
        } = e,
        u = (0, r.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
        c = (0, S.A)(),
        p = (0, N.bB)(),
        { hasEntitlements: m } = (0, ea.X)(n, l),
        E = (null != u && null != u.paymentSourceId) || Object.keys(s).length > 0 || (m && !o);
    var x = a ? et.intl.string(et.t.PDTjLN) : et.intl.string(et.t.XqMe3N),
        g = j.pn.ADD_PAYMENT_STEPS;
    return (
        E && (g = j.pn.REVIEW),
        (0, I.px)(c, l, i) && p !== j.pn.SELECT_FREE_SKU && (g = j.pn.SELECT_FREE_SKU),
        { variant: "primary", text: x, onClick: () => t(g), disabled: d }
    );
};
var eu = n(287809),
    ec = n(482132),
    ep = n(328232);
function eS(e) {
    let { handleStepChange: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        s = (0, S.A)(),
        a = (0, N.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: d, claimableRewards: u } = (0, P.Pv)(),
        c = (0, r.bG)([eu.default], () => eu.default.getCurrentUser()),
        p = (0, r.yK)([ei.A], () => ei.A.getGiftPromotionRewardSkuIds()),
        E = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(u, d),
        [I, x] = i.useState(E),
        [g, h] = i.useState(!1);
    i.useEffect(() => {
        g || null != d || null == E || (o(E), x(E));
    }, [E, g, d, o]);
    let T = { selectedPlan: s, selectedSkuId: n, step: a };
    if (null == s) throw new G.v({ message: "Expected plan to be selected", extraSentryInformation: T });
    if (null == n) throw new G.v({ message: "Expected selectedSkuId", extraSentryInformation: T });
    if (null == a) throw new G.v({ message: "Step should be set", extraSentryInformation: T });
    let f = i.useMemo(() => null != I && (u ?? []).includes(I), [I, u]),
        A = i.useMemo(() => 0 === p.length || null == I || !f, [p, I, f]);
    i.useEffect(() => {
        if (0 === p.length) {
            x(void 0), o(void 0);
            return;
        }
        (null != I && f && p.includes(I)) || null == I || (x(void 0), o(void 0));
    }, [p, f, I, o]);
    let _ = (e) => {
            o(e), x(e), h(!0);
        },
        b = p.map((e) =>
            (0, l.jsx)(
                el,
                { skuId: e, claimed: null != u && !u.includes(e), user: c, onSelect: _, selectedSkuId: I },
                e,
            ),
        ),
        k = (0, l.jsx)(ec.UX, {
            children: (0, l.jsx)(eo, {
                onStepChange: t,
                onBackClick: () => t(j.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [s.id],
                selectedPlanId: s.id,
                isNextDisabled: A,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: et.intl.string(et.t.OEtqpm),
                subtitle: et.intl.string(et.t.h2nMp0),
            }),
            (0, l.jsx)(w.c, {
                children: (0, l.jsx)(U.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: ep.Dq, children: b }),
                }),
            }),
            k,
        ],
    });
}
var em = n(800471),
    eE = n(284009),
    eI = n.n(eE),
    ex = n(877624),
    eg = n(702841),
    eh = n(683071),
    eT = n(428644),
    ef = n(717925),
    eA = n(742810),
    eP = n(463376),
    ej = n(699595),
    e_ = n(543767),
    eb = n(67948),
    ek = n(807098),
    ev = n(298305),
    ey = n(387745);
function eC() {
    let e = (0, r.bG)([ei.A], () => {
            let e = ei.A.getMarketingComponentByType(ex.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, P.Pv)(),
        n = (0, ek.T)(e?.asset),
        i = (0, ek.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, I.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, I.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let d = (0, I.x)(o, a),
        u = e?.assetVariant === eb.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: ey.qD,
              style: d,
              children: [
                  (0, l.jsx)("div", {
                      className: F()([ey.my], { [ey.R_]: u }),
                      children: (0, l.jsx)(ev.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: u ? D._3.SIZE_72 : D._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(q.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: et.intl.string(et.t.Abiuci),
                  }),
              ],
          });
}
var eM = n(410516),
    eN = n(361597),
    eR = n(45938),
    eO = n(975571),
    eL = n(428262),
    ew = n(69494),
    eU = n(534479),
    eG = n(340034),
    eB = n(50956),
    eF = n(921925),
    eH = n(71867),
    eD = n(652215),
    eW = n(249872);
function eV(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: r, subscriptionTier: s, trialId: a, handleClose: o } = e,
        {
            selectedSkuId: d,
            priceOptions: u,
            referralTrialOfferId: c,
            activeSubscription: p,
            defaultPlanId: E,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: x, isEligibleForTrial: g, isEligibleForDiscount: h, discountOffer: T } = (0, eP.i)(),
        A = (0, eM.YJ)(T),
        _ = (0, S.A)(),
        b = (0, N.bB)(),
        { isGift: k, giftRecipient: v, giftMessage: y, claimableRewards: C } = (0, P.Pv)(),
        M = (0, I.Mq)(_),
        R = (0, eg.bG)([ei.A], () => {
            let e = ei.A.getMarketingComponentByType(ex.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        O = k && M && null != C && C.length > 0 && R,
        L = (g || h) ?? !1,
        w = i.useMemo(() => (0, eL.Tm)({ skuId: d, isPremium: x, defaultPlanId: E }), [d, x, E]),
        U = h && null != A && w.includes(A) ? A : w[0],
        G = (0, eg.bG)([f.A], () => f.A.get(U)),
        B = [{ planId: G?.id, quantity: 1 }],
        [H, D] = i.useState(L),
        [W, V] = (0, e_.YV)({
            items: B,
            renewal: !1,
            preventFetch: !L,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
        });
    i.useEffect(() => {
        L && D(W?.subscriptionPeriodEnd == null);
    }, [W, L]),
        (0, eT.A)(
            "Payment Modal Plan Select Step",
            H,
            5,
            { proratedInvoicePreview: W, proratedInvoiceError: V, isEligibleForOffer: L },
            { tags: { app_context: "billing" } },
        );
    let z = V?.message ?? et.intl.string(et.t.R0RpRX),
        K = L && null == V,
        Y = L && null != V,
        Z = K && null == p && W?.subscriptionPeriodEnd == null,
        Q = (0, eA.D7)({ location: "premium_payment_plan_select_step" });
    (0, ej.W)({ priceOptions: u, trialId: a, discountInvoicePreview: W });
    let X = i.useMemo(
        () => ({
            planOptions: w,
            selectedPlanId: _?.id,
            planGroup: r,
            subscriptionPeriodEnd: W?.subscriptionPeriodEnd,
            useCompactGiftComponents: O,
            handleClose: o,
        }),
        [w, _?.id, r, W?.subscriptionPeriodEnd, O, o],
    );
    if (Z) return Q ? (0, l.jsx)(ef.E, { className: eW.QW }) : (0, l.jsx)(eU.A, {});
    eI()(null != b, "Step should be set"), eI()(w.length > 0, "Premium plan options should be set");
    let $ =
        Q && !k
            ? (0, l.jsx)(eG.XH, { ...X, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(eN.$p, { ...X });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eB.Z, { giftMessage: y }),
            !(k && (0, eR.Ik)(v)) && (0, l.jsx)(ew.A, { isEligibleForTrial: g }),
            (0, l.jsxs)(ec.dZ, {
                children: [
                    !Q && K && (0, l.jsx)("hr", { className: eW.T4 }),
                    (0, l.jsx)(eH.P, { className: eW.ZB, planSkuId: G?.skuId, referralTrialOfferId: c }),
                    (0, l.jsx)(eF.A, {}),
                    Y ? (0, l.jsx)(eh.w, { type: "critical", children: z }) : $,
                    K &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: F()(eW.IM, { [eW.Go]: Q }) }),
                                (0, l.jsx)(q.E, {
                                    variant: "text-xs/normal",
                                    children: et.intl.format(et.t.BHtnqA, {
                                        link: eO.A.getArticleURL(eD.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(ec.UX, {
                children: [
                    O && (0, l.jsx)(eC, {}),
                    (0, l.jsx)(eo, {
                        onStepChange: t,
                        onBackClick: () => t(j.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: w,
                        shouldRenderUpdatedPaymentModal: K,
                        isTrial: g,
                    }),
                ],
            }),
        ],
    });
}
var ez = n(234419),
    eK = n(862990),
    eY = n(672525),
    eq = n(169801),
    eZ = n(634378);
function eQ(e) {
    let { handleStepChange: t, referralTrialOfferId: n } = e,
        {
            setSelectedSkuId: i,
            setSelectedPlanId: r,
            priceOptions: s,
            activeSubscription: a,
            defaultPlanId: o,
            startedPaymentFlowWithPaymentSources: d,
        } = (0, m.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { hasPaymentSources: u } = (0, p.jm)(),
        { isGift: c, claimableRewards: S } = (0, P.Pv)(),
        E = c && null != S && S.length > 0,
        I = (0, ez.V)(n);
    return (0, l.jsx)(eX, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: l,
                    handleStepChange: i,
                    isGift: r,
                    userTrialOffer: s,
                    setSelectedPlanId: a,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: d,
                } = e;
                l(n);
                let u = j.pn.PLAN_SELECT,
                    c = (0, eL.aZ)(t);
                (c !== h.pe.TIER_1 && c !== h.pe.TIER_2) || n !== h.pe.TIER_0 || r || (u = j.pn.WHAT_YOU_LOSE);
                let p = (0, eq.t)({ userTrialOffer: s, isGift: r, skuId: n }),
                    S = (0, em.vT)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                u !== j.pn.WHAT_YOU_LOSE && S && ((u = j.pn.REVIEW), a((0, em.xT)(n, t, d))),
                    i(u, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: t,
                isGift: c,
                userTrialOffer: I,
                startedPaymentFlowWithPaymentSources: d,
                setSelectedPlanId: r,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, eL.mH)(h.pe.TIER_2)),
                    t(h.gD.PREMIUM_GROUP_MONTH),
                    n(l ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: h.pe.TIER_2 } });
            })({ setSelectedPlanId: r, handleStepChange: t, hasPaymentSources: u, setSelectedSkuId: i }),
        isGift: c,
        priceOptions: s,
        showPromotionalGiftBanner: E,
    });
}
function eX(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: s } = e,
        a = (0, eK.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.rQ, { titleTextVariant: "heading-lg/semibold", title: et.intl.string(et.t["r+SebU"]) }),
            a
                ? (0, l.jsx)(w.c, {
                      children: (0, l.jsx)("div", {
                          className: eZ.eE,
                          children: (0, l.jsx)(eY.yS, {
                              onSelectSku: (e) => t((0, eL.mH)(e)),
                              onSelectPremiumGroup: s,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(w.c, {
                      children: (0, l.jsx)("div", {
                          className: eZ.a2,
                          children: (0, l.jsx)(eY.Ay, {
                              onSelectSku: (e) => t((0, eL.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  }),
        ],
    });
}
var e$ = n(825484),
    eJ = n(821609),
    e0 = n(137728);
function e1(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: r,
            activeSubscription: s,
            startedPaymentFlowWithPaymentSources: a,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: o } = (0, P.Pv)(),
        d = null != s ? (0, eL.EL)(s) : null,
        u = null != d ? (0, eL.RH)(d.planId) : null,
        c = null != d ? (0, eL.m6)(d.planId) : null,
        p = (0, em.vT)({ isTrial: !1, isGift: o, selectedSkuId: i, startedPaymentFlowWithPaymentSources: a });
    return (
        eI()(null != c, "Expected premium type"),
        (0, l.jsx)(e0.A, {
            premiumType: c,
            titleText: et.intl.string(et.t["7VcWW0"]),
            subtitleText: et.intl.format(et.t.Qk34Ik, { subscriptionName: u }),
            footer: (0, l.jsxs)(e$.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(eJ.$, {
                        variant: "primary",
                        text: et.intl.string(et.t["3PatSz"]),
                        onClick: () => {
                            p ? (r((0, em.xT)(i, s)), t(j.pn.REVIEW)) : t(j.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(eJ.$, { variant: "secondary", onClick: n, text: et.intl.string(et.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
let e7 = [j.pn.PLAN_SELECT, j.pn.ADD_PAYMENT_STEPS, j.pn.REVIEW, j.pn.CONFIRM];
function e8(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            onComplete: o,
            transitionState: u,
            initialPlanId: c,
            subscriptionTier: p,
            onClose: S,
            trialId: E,
            trialFooterMessageOverride: I,
            reviewWarningMessage: T,
            openInvoiceId: A,
            onSubscriptionConfirmation: _,
            renderPurchaseConfirmation: v,
            postSuccessGuild: y,
            followupSKUInfo: C,
            renderHeader: M,
            applicationId: O,
            guildId: L,
            referralTrialOfferId: w,
            skuId: U,
            returnRef: G,
            skipConfirm: B = !1,
            continueSessionToInitialStep: F,
        } = e,
        { analyticsLocations: H } = (0, d.Ay)();
    i.useEffect(() => {
        f.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { selectedSkuId: D, purchaseState: W } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        V = (0, N.bB)(),
        {
            isGift: z,
            giftMessage: K,
            selectedGiftingPromotionReward: Y,
            openGiftingBadgePostPurchaseModal: q,
        } = (0, P.Pv)(),
        Z = i.useCallback(
            (e, t) => {
                S(e, t), e && z && null == Y && q();
            },
            [S, z, Y, q],
        ),
        Q = !z && D === h.pe.TIER_2 && !x.Ct && !x.KY && null == (0, g.uM)(),
        X = W === b.h.PURCHASING;
    return (0, l.jsx)(R.A, {
        isConfirmationStep: V === j.pn.CONFIRM && null == F && null == v,
        isEligibleForWowMoment: Q,
        shouldPrefetchWowMoment: X,
        children: (0, l.jsx)(k.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: eD.rzx.PREMIUM,
            onComplete: o,
            transitionState: u,
            initialPlanId: c,
            giftMessage: K,
            subscriptionTier: p,
            onClose: Z,
            trialId: E,
            isGift: z,
            trialFooterMessageOverride: I,
            reviewWarningMessage: T,
            planGroup: h.LE,
            openInvoiceId: A,
            onSubscriptionConfirmation: _,
            renderPurchaseConfirmation: v,
            postSuccessGuild: y,
            followupSKUInfo: C,
            renderHeader: M,
            applicationId: O,
            guildId: L,
            referralTrialOfferId: w,
            skuId: U,
            shakeWhilePurchasing: !0,
            returnRef: G,
            skipConfirm: B,
            continueSessionToInitialStep: F,
        }),
    });
}
function e4(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        r = (0, m.t4)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, p.jm)(),
        a = (0, S.A)(),
        { isGift: o, claimableRewards: d } = (0, P.Pv)(),
        u = (0, eq.A)({ isGift: o, skuId: r, referralTrialOfferId: i }),
        c = (0, em.lp)(u),
        E = (0, I.px)(a, o, d);
    return (0, l.jsx)(v.x, {
        ...e,
        breadcrumbSteps: e7,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? j.pn.PLAN_SELECT : j.pn.REVIEW;
            c && (l = j.pn.REVIEW),
                E && e.length < 1 && (l = j.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: j.pn.PAYMENT_TYPE });
        },
    });
}
let e3 = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(k.I, { ...e }) },
            {
                key: j.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(eQ, { ...e }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    modalSizeGetter: (t) => {
                        let { canCurrentlyPurchasePremiumGroup: n } = t;
                        return e || n ? "xl" : "md";
                    },
                },
            },
            {
                key: j.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(e1, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: j.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(eV, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, em.lp)(e) ? null : et.intl.string(et.t["r+SebU"])),
                    sectionHeaderText: () => et.intl.string(et.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: j.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(e4, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, em.lp)(e) ? null : et.intl.string(et.t.Sb6wI1)),
                },
            },
            { key: j.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(C.A, {}) },
            { key: j.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(y.A, {}) },
            {
                key: j.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(M._M, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) =>
                        (0, em.lp)(e) ? et.intl.string(et.t.UKbp1N) : et.intl.string(et.t.QBnNHq),
                },
            },
            {
                key: j.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(O._, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: j.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(eS, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    e6 = e3();
function e2(e) {
    let t = (0, r.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
        n = (0, E.cg)() ? h.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, d.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: p,
            giftingOrigin: S,
            giftMessage: m,
            giftRecipient: I,
            giftStyle: x,
            isGift: g,
            loadId: f,
            referralCode: j,
            subscriptionTier: b,
            referralTrialOfferId: k,
        } = e;
    if (null != b && !Object.values(h.pe).includes(b)) throw Error("subscriptionTier must be a premium subscription");
    let v = (0, T.tA)({ giftRecipient: I, isGift: g ?? !1 }),
        y = i.useMemo(() => e3(v), [v]);
    return (0, l.jsx)(d.f5, {
        value: s,
        children: (0, l.jsx)(c.CheckoutRootProvider, {
            loadId: f,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: y,
            skuIDs: [...h.oz],
            isGift: g,
            defaultPlanId: n ?? p,
            referralCode: j,
            referralTrialOfferId: k,
            unifiedCheckoutFlow: u.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(_.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(P.dX, {
                    isGift: g,
                    giftRecipient: null == I ? void 0 : I,
                    giftMessage: m,
                    giftStyle: x,
                    giftingOrigin: S,
                    children: (0, l.jsx)(e8, { ...e }),
                }),
            }),
        }),
    });
}
