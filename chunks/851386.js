n.d(t, { E: () => e4, default: () => e6, STEPS: () => e3 });
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
    L = n(284009),
    U = n.n(L),
    G = n(20742),
    w = n(430993),
    B = n(331322),
    F = n(503698),
    H = n.n(F),
    D = n(575593),
    W = n(778712),
    V = n(187322),
    z = n(890856),
    K = n(947641),
    Y = n(661531),
    q = n(534514),
    Z = n(834730),
    Q = n(713517),
    X = n(674658),
    $ = n(898461),
    J = n(837015),
    ee = n(929283),
    et = n(761365),
    en = n(375708),
    el = n(267861);
let ei = (e) => {
    let t,
        n,
        { skuId: r, user: s, claimed: a, onSelect: o, selectedSkuId: d } = e,
        [u, c] = i.useState(null),
        p = i.useCallback((e) => {
            c(e);
        }, []),
        S = i.useMemo(() => ({ current: u }), [u]),
        { isHoveringOrFocusing: m } = (0, Q.A)(S),
        E = !a && m,
        { product: I } = (0, X.q)(r);
    if (null == I) return null;
    let x = I.items[0];
    return null == x
        ? null
        : ((0, $.T)(x)
              ? ((n = D.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(ee.i, { item: x, user: s, isHighlighted: E, avatarSize: W._3.SIZE_96 })))
              : (0, J.F)(x) &&
                ((n = D.R.NAMEPLATE),
                (t = (0, l.jsx)(et.A, { nameplate: x, user: s, isHighlighted: E, size: "small" }))),
          (0, l.jsx)(V.vN, {
              children: (0, l.jsxs)(z.s, {
                  ref: p,
                  "aria-label": I.name ?? "",
                  onClick: () => {
                      null == r || null == o || a || o(r);
                  },
                  className: H()(el._x, { [el.Vp]: !a, [el.mr]: E, [el.md]: d === r }),
                  children: [
                      (0, l.jsx)("div", {
                          className: H()(el.VH, { [el._Q]: n === D.R.AVATAR_DECORATION, [el.M4]: n === D.R.NAMEPLATE }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: H()(el.i1, { [el.Sf]: a }), children: t }),
                                            a &&
                                                (0, l.jsx)(K.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: Y.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: el.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: el.tZ,
                          children: [
                              (0, l.jsx)(q.D, { variant: "heading-md/extrabold", children: I.name }),
                              (0, l.jsx)(Z.E, {
                                  variant: "text-sm/normal",
                                  children: a ? en.intl.string(en.t["6cfuDj"]) : en.intl.string(en.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var er = n(374200),
    es = n(696208),
    ea = n(683433),
    eo = n(344159);
function ed(e) {
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
        } = eu({
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
                    : [{ variant: "primary", text: en.intl.string(en.t.XqMe3N), disabled: !0 }],
            [g, h, T, f, n, o],
        );
    return (0, l.jsx)(es.H, { leading: a && null != s ? (0, l.jsx)(ea.A, { onClick: s }) : void 0, actions: A });
}
let eu = (e) => {
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
        { hasEntitlements: m } = (0, eo.X)(n, l),
        E = (null != u && null != u.paymentSourceId) || Object.keys(s).length > 0 || (m && !o);
    var x = a ? en.intl.string(en.t.PDTjLN) : en.intl.string(en.t.XqMe3N),
        g = j.pn.ADD_PAYMENT_STEPS;
    return (
        E && (g = j.pn.REVIEW),
        (0, I.px)(c, l, i) && p !== j.pn.SELECT_FREE_SKU && (g = j.pn.SELECT_FREE_SKU),
        { variant: "primary", text: x, onClick: () => t(g), disabled: d }
    );
};
var ec = n(287809),
    ep = n(482132),
    eS = n(328232);
function em(e) {
    let { handleStepChange: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        s = (0, S.A)(),
        a = (0, N.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: d, claimableRewards: u } = (0, P.Pv)(),
        c = (0, r.bG)([ec.default], () => ec.default.getCurrentUser()),
        p = (0, r.yK)([er.A], () => er.A.getGiftPromotionRewardSkuIds()),
        E = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(u, d),
        [I, x] = i.useState(E),
        [g, h] = i.useState(!1);
    i.useEffect(() => {
        g || null != d || null == E || (o(E), x(E));
    }, [E, g, d, o]),
        U()(null != s, "Expected plan to selected"),
        U()(null != n, "Expected selectedSkuId"),
        U()(null != a, "Step should be set");
    let T = i.useMemo(() => null != I && (u ?? []).includes(I), [I, u]),
        f = i.useMemo(() => 0 === p.length || null == I || !T, [p, I, T]);
    i.useEffect(() => {
        if (0 === p.length) {
            x(void 0), o(void 0);
            return;
        }
        (null != I && T && p.includes(I)) || null == I || (x(void 0), o(void 0));
    }, [p, T, I, o]);
    let A = (e) => {
            o(e), x(e), h(!0);
        },
        _ = p.map((e) =>
            (0, l.jsx)(
                ei,
                { skuId: e, claimed: null != u && !u.includes(e), user: c, onSelect: A, selectedSkuId: I },
                e,
            ),
        ),
        b = (0, l.jsx)(ep.UX, {
            children: (0, l.jsx)(ed, {
                onStepChange: t,
                onBackClick: () => t(j.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [s.id],
                selectedPlanId: s.id,
                isNextDisabled: f,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(G.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: en.intl.string(en.t.OEtqpm),
                subtitle: en.intl.string(en.t.h2nMp0),
            }),
            (0, l.jsx)(w.c, {
                children: (0, l.jsx)(B.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: eS.Dq, children: _ }),
                }),
            }),
            b,
        ],
    });
}
var eE = n(800471),
    eI = n(877624),
    ex = n(702841),
    eg = n(683071),
    eh = n(428644),
    eT = n(717925),
    ef = n(742810),
    eA = n(463376),
    eP = n(699595),
    ej = n(543767),
    e_ = n(67948),
    eb = n(807098),
    ek = n(298305),
    ev = n(387745);
function ey() {
    let e = (0, r.bG)([er.A], () => {
            let e = er.A.getMarketingComponentByType(eI.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, P.Pv)(),
        n = (0, eb.T)(e?.asset),
        i = (0, eb.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, I.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, I.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let d = (0, I.x)(o, a),
        u = e?.assetVariant === e_.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: ev.qD,
              style: d,
              children: [
                  (0, l.jsx)("div", {
                      className: H()([ev.my], { [ev.R_]: u }),
                      children: (0, l.jsx)(ek.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: u ? W._3.SIZE_72 : W._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(Z.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: en.intl.string(en.t.Abiuci),
                  }),
              ],
          });
}
var eC = n(410516),
    eM = n(361597),
    eN = n(45938),
    eR = n(975571),
    eO = n(428262),
    eL = n(69494),
    eU = n(534479),
    eG = n(340034),
    ew = n(50956),
    eB = n(921925),
    eF = n(71867),
    eH = n(652215),
    eD = n(249872);
function eW(e) {
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
        { isPremium: x, isEligibleForTrial: g, isEligibleForDiscount: h, discountOffer: T } = (0, eA.i)(),
        A = (0, eC.YJ)(T),
        _ = (0, S.A)(),
        b = (0, N.bB)(),
        { isGift: k, giftRecipient: v, giftMessage: y, claimableRewards: C } = (0, P.Pv)(),
        M = (0, I.Mq)(_),
        R = (0, ex.bG)([er.A], () => {
            let e = er.A.getMarketingComponentByType(eI.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        O = k && M && null != C && C.length > 0 && R,
        L = (g || h) ?? !1,
        G = i.useMemo(() => (0, eO.Tm)({ skuId: d, isPremium: x, defaultPlanId: E }), [d, x, E]),
        w = h && null != A && G.includes(A) ? A : G[0],
        B = (0, ex.bG)([f.A], () => f.A.get(w)),
        F = [{ planId: B?.id, quantity: 1 }],
        [D, W] = i.useState(L),
        [V, z] = (0, ej.YV)({
            items: F,
            renewal: !1,
            preventFetch: !L,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
        });
    i.useEffect(() => {
        L && W(V?.subscriptionPeriodEnd == null);
    }, [V, L]),
        (0, eh.A)(
            "Payment Modal Plan Select Step",
            D,
            5,
            { proratedInvoicePreview: V, proratedInvoiceError: z, isEligibleForOffer: L },
            { tags: { app_context: "billing" } },
        );
    let K = z?.message ?? en.intl.string(en.t.R0RpRX),
        Y = L && null == z,
        q = L && null != z,
        Q = Y && null == p && V?.subscriptionPeriodEnd == null,
        X = (0, ef.D7)({ location: "premium_payment_plan_select_step" });
    (0, eP.W)({ priceOptions: u, trialId: a, discountInvoicePreview: V });
    let $ = i.useMemo(
        () => ({
            planOptions: G,
            selectedPlanId: _?.id,
            planGroup: r,
            subscriptionPeriodEnd: V?.subscriptionPeriodEnd,
            useCompactGiftComponents: O,
            handleClose: o,
        }),
        [G, _?.id, r, V?.subscriptionPeriodEnd, O, o],
    );
    if (Q) return X ? (0, l.jsx)(eT.E, { className: eD.QW }) : (0, l.jsx)(eU.A, {});
    U()(null != b, "Step should be set"), U()(G.length > 0, "Premium plan options should be set");
    let J =
        X && !k
            ? (0, l.jsx)(eG.XH, { ...$, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(eM.$p, { ...$ });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ew.Z, { giftMessage: y }),
            !(k && (0, eN.Ik)(v)) && (0, l.jsx)(eL.A, { isEligibleForTrial: g }),
            (0, l.jsxs)(ep.dZ, {
                children: [
                    !X && Y && (0, l.jsx)("hr", { className: eD.T4 }),
                    (0, l.jsx)(eF.P, { className: eD.ZB, planSkuId: B?.skuId, referralTrialOfferId: c }),
                    (0, l.jsx)(eB.A, {}),
                    q ? (0, l.jsx)(eg.w, { type: "critical", children: K }) : J,
                    Y &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: H()(eD.IM, { [eD.Go]: X }) }),
                                (0, l.jsx)(Z.E, {
                                    variant: "text-xs/normal",
                                    children: en.intl.format(en.t.BHtnqA, {
                                        link: eR.A.getArticleURL(eH.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(ep.UX, {
                children: [
                    O && (0, l.jsx)(ey, {}),
                    (0, l.jsx)(ed, {
                        onStepChange: t,
                        onBackClick: () => t(j.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: G,
                        shouldRenderUpdatedPaymentModal: Y,
                        isTrial: g,
                    }),
                ],
            }),
        ],
    });
}
var eV = n(234419),
    ez = n(862990),
    eK = n(672525),
    eY = n(169801),
    eq = n(634378);
function eZ(e) {
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
        I = (0, eV.V)(n);
    return (0, l.jsx)(eQ, {
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
                    c = (0, eO.aZ)(t);
                (c !== h.pe.TIER_1 && c !== h.pe.TIER_2) || n !== h.pe.TIER_0 || r || (u = j.pn.WHAT_YOU_LOSE);
                let p = (0, eY.t)({ userTrialOffer: s, isGift: r, skuId: n }),
                    S = (0, eE.vT)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                u !== j.pn.WHAT_YOU_LOSE && S && ((u = j.pn.REVIEW), a((0, eE.xT)(n, t, d))),
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
                i((0, eO.mH)(h.pe.TIER_2)),
                    t(h.gD.PREMIUM_GROUP_MONTH),
                    n(l ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: h.pe.TIER_2 } });
            })({ setSelectedPlanId: r, handleStepChange: t, hasPaymentSources: u, setSelectedSkuId: i }),
        isGift: c,
        priceOptions: s,
        showPromotionalGiftBanner: E,
    });
}
function eQ(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: s } = e,
        a = (0, ez.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(G.rQ, { titleTextVariant: "heading-lg/semibold", title: en.intl.string(en.t["r+SebU"]) }),
            a
                ? (0, l.jsx)(w.c, {
                      children: (0, l.jsx)("div", {
                          className: eq.eE,
                          children: (0, l.jsx)(eK.yS, {
                              onSelectSku: (e) => t((0, eO.mH)(e)),
                              onSelectPremiumGroup: s,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(w.c, {
                      children: (0, l.jsx)("div", {
                          className: eq.a2,
                          children: (0, l.jsx)(eK.Ay, {
                              onSelectSku: (e) => t((0, eO.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  }),
        ],
    });
}
var eX = n(825484),
    e$ = n(821609),
    eJ = n(137728);
function e0(e) {
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
        d = null != s ? (0, eO.EL)(s) : null,
        u = null != d ? (0, eO.RH)(d.planId) : null,
        c = null != d ? (0, eO.m6)(d.planId) : null,
        p = (0, eE.vT)({ isTrial: !1, isGift: o, selectedSkuId: i, startedPaymentFlowWithPaymentSources: a });
    return (
        U()(null != c, "Expected premium type"),
        (0, l.jsx)(eJ.A, {
            premiumType: c,
            titleText: en.intl.string(en.t["7VcWW0"]),
            subtitleText: en.intl.format(en.t.Qk34Ik, { subscriptionName: u }),
            footer: (0, l.jsxs)(eX.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(e$.$, {
                        variant: "primary",
                        text: en.intl.string(en.t["3PatSz"]),
                        onClick: () => {
                            p ? (r((0, eE.xT)(i, s)), t(j.pn.REVIEW)) : t(j.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(e$.$, { variant: "secondary", onClick: n, text: en.intl.string(en.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
let e1 = [j.pn.PLAN_SELECT, j.pn.ADD_PAYMENT_STEPS, j.pn.REVIEW, j.pn.CONFIRM];
function e7(e) {
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
            referralTrialOfferId: U,
            skuId: G,
            returnRef: w,
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
            analyticsSubscriptionType: eH.rzx.PREMIUM,
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
            referralTrialOfferId: U,
            skuId: G,
            shakeWhilePurchasing: !0,
            returnRef: w,
            skipConfirm: B,
            continueSessionToInitialStep: F,
        }),
    });
}
function e8(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        r = (0, m.t4)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, p.jm)(),
        a = (0, S.A)(),
        { isGift: o, claimableRewards: d } = (0, P.Pv)(),
        u = (0, eY.A)({ isGift: o, skuId: r, referralTrialOfferId: i }),
        c = (0, eE.lp)(u),
        E = (0, I.px)(a, o, d);
    return (0, l.jsx)(v.x, {
        ...e,
        breadcrumbSteps: e1,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? j.pn.PLAN_SELECT : j.pn.REVIEW;
            c && (l = j.pn.REVIEW),
                E && e.length < 1 && (l = j.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: j.pn.PAYMENT_TYPE });
        },
    });
}
let e4 = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(k.I, { ...e }) },
            {
                key: j.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(eZ, { ...e }),
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
                renderStep: (e) => (0, l.jsx)(e0, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: j.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(eW, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eE.lp)(e) ? null : en.intl.string(en.t["r+SebU"])),
                    sectionHeaderText: () => en.intl.string(en.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: j.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(e8, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eE.lp)(e) ? null : en.intl.string(en.t.Sb6wI1)),
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
                        (0, eE.lp)(e) ? en.intl.string(en.t.UKbp1N) : en.intl.string(en.t.QBnNHq),
                },
            },
            {
                key: j.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(O._, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: j.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(em, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    e3 = e4();
function e6(e) {
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
        y = i.useMemo(() => e4(v), [v]);
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
                    children: (0, l.jsx)(e7, { ...e }),
                }),
            }),
        }),
    });
}
