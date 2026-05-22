n.d(t, { E: () => tE, default: () => tI, STEPS: () => tS });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(73825),
    u = n(793574),
    o = n(688810),
    d = n(120700),
    c = n(426398),
    p = n(558620),
    m = n(671744),
    E = n(960851),
    S = n(380619),
    I = n(607399),
    _ = n(795791),
    A = n(788868),
    P = n(561794),
    h = n(97352),
    x = n(166403),
    g = n(937008),
    T = n(834252),
    j = n(166532),
    f = n(491057),
    M = n(566980),
    R = n(546042),
    C = n(735305),
    b = n(343834),
    N = n(926795),
    k = n(862241),
    y = n(615310),
    O = n(811656),
    v = n(284009),
    U = n.n(v),
    D = n(735438),
    L = n(877624),
    w = n(554146),
    G = n(192308),
    F = n(964486),
    H = n(841702),
    B = n(367727),
    W = n(374200),
    z = n(771566),
    V = n(174459),
    K = n(625494),
    q = n(45938),
    Y = n(615396),
    Z = n(482132),
    X = n(364840),
    Q = n(821609),
    $ = n(778712),
    J = n(97808),
    ee = n(775602),
    et = n(912140),
    en = n(674658),
    el = n(780898),
    ei = n(344346),
    er = n(898461),
    es = n(837015),
    ea = n(61750),
    eu = n(287809),
    eo = n(758836),
    ed = n(375708),
    ec = n(258915);
function ep(e) {
    let { rewardSkuId: t, onClose: n } = e,
        s = (0, r.bG)([eu.default], () => eu.default.getCurrentUser()),
        a = (0, r.bG)([ee.A], () => ee.A.useReducedMotion),
        { analyticsLocations: u } = (0, o.Ay)(),
        d = $._3.SIZE_32,
        { product: c, isFetching: p } = (0, en.q)(t),
        [m, E] = i.useState(!1),
        S = c?.items[0],
        {
            isNameplateReward: I,
            nameplateData: _,
            rewardAvatarDecorationSrc: A,
        } = i.useMemo(
            () =>
                null == S
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, es.F)(S)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: S.skuId,
                                src: S.asset,
                                palette: (0, el.H6)(S.palette ?? "sky"),
                                imgAlt: S.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, er.T)(S)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, et.A)({
                                  legacyAssetId: S.asset,
                                  skuId: S.skuId,
                                  size: d,
                                  canAnimate: !a,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [S, d, a],
        );
    return (0, l.jsx)(Z.UX, {
        children: (0, l.jsx)(X.j, {
            children: (0, l.jsxs)("div", {
                className: ec.W,
                children: [
                    I && null != _
                        ? (0, l.jsx)("div", {
                              className: ec.D,
                              onMouseEnter: () => E(!0),
                              onMouseLeave: () => E(!1),
                              children: (0, l.jsx)(ei.a, {
                                  user: s,
                                  nameplate: null,
                                  nameplateData: _,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: m,
                              }),
                          })
                        : (0, l.jsx)(J.Js, {
                              "aria-label": s?.username,
                              size: d,
                              src: s?.getAvatarURL(void 0, (0, $.FT)(d), !a),
                              avatarDecoration: A,
                          }),
                    (0, l.jsx)(Q.$, {
                        variant: "primary",
                        text: ed.intl.string(ed.t.kMYVwv),
                        loading: p,
                        onClick: () => {
                            null != c &&
                                (n(),
                                (0, ea.A)({
                                    product: c,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: u,
                                    purchaseType: eo.gs.PROMOTIONAL,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var em = n(216641),
    eE = n(921925),
    eS = n(652215),
    eI = n(49999);
function e_(e) {
    let t,
        {
            handleClose: s,
            planGroup: a,
            onSubscriptionConfirmation: u,
            renderPurchaseConfirmation: o,
            postSuccessGuild: d,
            followupSKUInfo: E,
            continueSessionToInitialStep: I,
        } = e,
        { paymentSources: _ } = (0, c.jm)(),
        {
            selectedSkuId: A,
            updatedSubscription: P,
            paymentSourceId: h,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
        })),
        {
            activeSubscription: x,
            startingPremiumSubscriptionPlanIdRef: j,
            startingFractionalPremiumEndsAtRef: M,
            isPremiumGroupPurchase: R,
        } = (0, T.P5)(),
        C = (0, p.A)(),
        b = (0, y.bB)(),
        {
            isGift: N,
            giftRecipient: k,
            giftCode: O,
            hasSentMessage: v,
            isSendingMessage: X,
            sendGiftMessage: Q,
            claimableRewards: $,
            selectedGiftingPromotionReward: J,
        } = (0, g.Pv)(),
        { confirmationFooter: ee } = (0, f.cG)(),
        et = (0, S.px)(C, N, $),
        en = (0, S.Mq)(C),
        el = (0, H.Mv)(J, !1),
        ei = (0, r.bG)([W.A], () => W.A.getGiftPromotion()?.id),
        er = (0, r.bG)([W.A], () => {
            let e = W.A.getMarketingComponentByType(L.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        es = (0, em.g)(_, h),
        ea = N && null != J && null != el && en;
    U()(null != C, "Expected plan to selected"),
        U()(null != A, "Expected selectedSkuId"),
        U()(null != b, "Step should be set");
    let eu = i.useCallback(() => {
        s(), u?.();
    }, [s, u]);
    (0, F.Ay)(() => {
        R &&
            V.default.track(eS.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != P,
                has_any_premium_group: P?.hasAnyPremiumGroup ?? !1,
                subscription_id: P?.id,
            });
    }),
        i.useEffect(() => {
            function e() {
                if (R)
                    if (null != P && P.hasAnyPremiumGroup) {
                        V.default.track(eS.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                            subscription_id: P.id,
                        });
                        let e = (0, D.uniqueId)("premium-group-purchase-flow-modal");
                        (0, G.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("50671"),
                                    n.e("44616"),
                                    n.e("96680"),
                                    n.e("85579"),
                                ]).then(n.bind(n, 785606));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        ...t,
                                        subscription: P,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            K._.dispatch(eS.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    K._.dispatch(eS.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, G.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        V.default.track(eS.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != P,
                            has_any_premium_group: P?.hasAnyPremiumGroup ?? !1,
                        }),
                            K._.dispatch(eS.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                K._.subscribe(eS.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    K._.unsubscribe(eS.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [R, P]),
        i.useEffect(() => {
            !N || null == k || null == O || v || X || (0, q.Ik)(k) || Q({ onSubscriptionConfirmation: u });
        }, [Q, N, k, O, v, X, u]),
        i.useEffect(() => {
            et &&
                null != er &&
                null != ei &&
                (0, B.qr)(w.M.GIFTING_PROMOTION_REMINDER, ei, { dismissAction: eI.i.INDIRECT_ACTION });
        }, [er, ei, et]);
    let eo = null != I ? z.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != o) t = o(C, eu, P);
    else if (N) t = (0, l.jsx)(z.fw, { planId: C.id, onClose: eu });
    else {
        let e =
            j.current === C.id
                ? { postSuccessGuild: d }
                : {
                      followupSKUInfo: E,
                      startingPremiumSubscriptionPlanId: j.current,
                      isDowngrade: null != x && (0, Y.vT)(x, C.id, a),
                  };
        t = (0, l.jsx)(z.Ay, {
            planId: C.id,
            onClose: eu,
            paymentSourceType: es,
            hideClose: null != ee,
            startingFractionalPremiumEndsAt: M.current,
            customCTAType: eo,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(Z.dZ, { children: [(0, l.jsx)(eE.A, {}), t] }),
            null != ee && ee,
            ea && null != J && (0, l.jsx)(ep, { rewardSkuId: J, onClose: eu }),
        ],
    });
}
var eA = n(20742),
    eP = n(430993),
    eh = n(331322),
    ex = n(503698),
    eg = n.n(ex),
    eT = n(575593),
    ej = n(187322),
    ef = n(890856),
    eM = n(947641),
    eR = n(661531),
    eC = n(534514),
    eb = n(834730),
    eN = n(713517),
    ek = n(929283),
    ey = n(761365),
    eO = n(267861);
let ev = (e) => {
    let t,
        n,
        { skuId: r, user: s, claimed: a, onSelect: u, selectedSkuId: o } = e,
        [d, c] = i.useState(null),
        p = i.useCallback((e) => {
            c(e);
        }, []),
        m = i.useMemo(() => ({ current: d }), [d]),
        { isHoveringOrFocusing: E } = (0, eN.A)(m),
        S = !a && E,
        { product: I } = (0, en.q)(r);
    if (null == I) return null;
    let _ = I.items[0];
    return null == _
        ? null
        : ((0, er.T)(_)
              ? ((n = eT.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(ek.i, { item: _, user: s, isHighlighted: S, avatarSize: $._3.SIZE_96 })))
              : (0, es.F)(_) &&
                ((n = eT.R.NAMEPLATE),
                (t = (0, l.jsx)(ey.A, { nameplate: _, user: s, isHighlighted: S, size: "small" }))),
          (0, l.jsx)(ej.vN, {
              children: (0, l.jsxs)(ef.s, {
                  ref: p,
                  "aria-label": I.name ?? "",
                  onClick: () => {
                      null == r || null == u || a || u(r);
                  },
                  className: eg()(eO._x, { [eO.Vp]: !a, [eO.mr]: S, [eO.md]: o === r }),
                  children: [
                      (0, l.jsx)("div", {
                          className: eg()(eO.VH, {
                              [eO._Q]: n === eT.R.AVATAR_DECORATION,
                              [eO.M4]: n === eT.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: eg()(eO.i1, { [eO.Sf]: a }), children: t }),
                                            a &&
                                                (0, l.jsx)(eM.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: eR.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: eO.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: eO.tZ,
                          children: [
                              (0, l.jsx)(eC.D, { variant: "heading-md/extrabold", children: I.name }),
                              (0, l.jsx)(eb.E, {
                                  variant: "text-sm/normal",
                                  children: a ? ed.intl.string(ed.t["6cfuDj"]) : ed.intl.string(ed.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var eU = n(696208),
    eD = n(683433),
    eL = n(344159);
function ew(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: r,
            onBackClick: s,
            showBackButton: a,
            planOptions: u,
            shouldRenderUpdatedPaymentModal: o = !1,
            isTrial: d,
            isNextDisabled: m = !1,
        } = e,
        { paymentSources: E } = (0, c.jm)(),
        S = (0, p.A)(),
        { isGift: I, claimableRewards: _ } = (0, g.Pv)();
    r = r ?? E;
    let {
            variant: A,
            text: P,
            onClick: h,
            disabled: x,
        } = eG({
            onStepChange: t,
            selectedPlanId: (n = n ?? S?.id),
            isGift: I,
            claimableRewards: _,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: o,
            isTrial: d,
            isNextDisabled: m,
        }),
        T = i.useMemo(
            () =>
                null != n && u.includes(n)
                    ? [{ variant: A, text: P, onClick: h, disabled: x }]
                    : [{ variant: "primary", text: ed.intl.string(ed.t.XqMe3N), disabled: !0 }],
            [A, P, h, x, n, u],
        );
    return (0, l.jsx)(eU.H, { leading: a && null != s ? (0, l.jsx)(eD.A, { onClick: s }) : void 0, actions: T });
}
let eG = (e) => {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: l,
            claimableRewards: i,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: u,
            isNextDisabled: o = !1,
        } = e,
        d = (0, r.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        c = (0, p.A)(),
        m = (0, y.bB)(),
        { hasEntitlements: E } = (0, eL.X)(n, l),
        I = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (E && !u);
    var _ = a ? ed.intl.string(ed.t.PDTjLN) : ed.intl.string(ed.t.XqMe3N),
        A = j.pn.ADD_PAYMENT_STEPS;
    return (
        I && (A = j.pn.REVIEW),
        (0, S.px)(c, l, i) && m !== j.pn.SELECT_FREE_SKU && (A = j.pn.SELECT_FREE_SKU),
        { variant: "primary", text: _, onClick: () => t(A), disabled: o }
    );
};
var eF = n(328232);
function eH(e) {
    let { handleStepChange: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        s = (0, p.A)(),
        a = (0, y.bB)(),
        { setSelectedGiftingPromotionReward: u, selectedGiftingPromotionReward: o, claimableRewards: d } = (0, g.Pv)(),
        c = (0, r.bG)([eu.default], () => eu.default.getCurrentUser()),
        E = (0, r.yK)([W.A], () => W.A.getGiftPromotionRewardSkuIds()),
        S = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(d, o),
        [I, _] = i.useState(S),
        [A, P] = i.useState(!1);
    i.useEffect(() => {
        A || null != o || null == S || (u(S), _(S));
    }, [S, A, o, u]),
        U()(null != s, "Expected plan to selected"),
        U()(null != n, "Expected selectedSkuId"),
        U()(null != a, "Step should be set");
    let h = i.useMemo(() => null != I && (d ?? []).includes(I), [I, d]),
        x = i.useMemo(() => 0 === E.length || null == I || !h, [E, I, h]);
    i.useEffect(() => {
        if (0 === E.length) {
            _(void 0), u(void 0);
            return;
        }
        (null != I && h && E.includes(I)) || null == I || (_(void 0), u(void 0));
    }, [E, h, I, u]);
    let T = (e) => {
            u(e), _(e), P(!0);
        },
        f = E.map((e) =>
            (0, l.jsx)(
                ev,
                { skuId: e, claimed: null != d && !d.includes(e), user: c, onSelect: T, selectedSkuId: I },
                e,
            ),
        ),
        M = (0, l.jsx)(Z.UX, {
            children: (0, l.jsx)(ew, {
                onStepChange: t,
                onBackClick: () => t(j.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [s.id],
                selectedPlanId: s.id,
                isNextDisabled: x,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eA.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: ed.intl.string(ed.t.OEtqpm),
                subtitle: ed.intl.string(ed.t.h2nMp0),
            }),
            (0, l.jsx)(eP.c, {
                children: (0, l.jsx)(eh.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: eF.Dq, children: f }),
                }),
            }),
            M,
        ],
    });
}
var eB = n(800471),
    eW = n(702841),
    ez = n(683071),
    eV = n(428644),
    eK = n(717925),
    eq = n(742810),
    eY = n(699595),
    eZ = n(543767),
    eX = n(807098),
    eQ = n(298305),
    e$ = n(387745);
function eJ() {
    let e = (0, r.bG)([W.A], () => {
            let e = W.A.getMarketingComponentByType(L.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, g.Pv)(),
        n = (0, eX.T)(e?.asset),
        i = (0, eX.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, S.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        u = (0, S.gc)(i);
    null != u && ((u.backgroundSize = "cover, auto"), (u.backgroundPosition = "right center, 0% 0%"));
    let o = (0, S.x)(u, a);
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: e$.qD,
              style: o,
              children: [
                  (0, l.jsx)("div", {
                      className: e$.my,
                      children: (0, l.jsx)(eQ.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: $._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(eb.E, {
                      variant: "text-md/medium",
                      className: e$._M,
                      color: "always-white",
                      children: ed.intl.string(ed.t.Abiuci),
                  }),
              ],
          });
}
var e0 = n(410516),
    e1 = n(361597),
    e4 = n(975571),
    e6 = n(428262),
    e7 = n(69494),
    e8 = n(534479),
    e2 = n(340034),
    e5 = n(50956),
    e3 = n(71867),
    e9 = n(249872);
function te(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: r, subscriptionTier: s, trialId: a, handleClose: u } = e,
        o = (0, m.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: d,
            defaultPlanId: c,
            priceOptions: E,
            isPremium: I,
            isEligibleForTrial: _,
            isEligibleForDiscount: A,
            referralTrialOfferId: P,
            discountOffer: x,
        } = (0, T.P5)(),
        f = (0, e0.YJ)(x),
        M = (0, p.A)(),
        R = (0, y.bB)(),
        { isGift: C, giftRecipient: b, giftMessage: N, claimableRewards: k } = (0, g.Pv)(),
        O = (0, S.Mq)(M),
        v = (0, eW.bG)([W.A], () => {
            let e = W.A.getMarketingComponentByType(L.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        D = C && O && null != k && k.length > 0 && v,
        w = (_ || A) ?? !1,
        G = i.useMemo(() => (0, e6.Tm)({ skuId: o, isPremium: I, defaultPlanId: c }), [o, I, c]),
        F = A && null != f && G.includes(f) ? f : G[0],
        H = (0, eW.bG)([h.A], () => h.A.get(F)),
        B = [{ planId: H?.id, quantity: 1 }],
        [z, V] = i.useState(w),
        [K, Y] = (0, eZ.YV)({
            items: B,
            renewal: !1,
            preventFetch: !w,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: E.paymentSourceId,
            currency: E.currency,
        });
    i.useEffect(() => {
        w && V(K?.subscriptionPeriodEnd == null);
    }, [K, w]),
        (0, eV.A)(
            "Payment Modal Plan Select Step",
            z,
            5,
            { proratedInvoicePreview: K, proratedInvoiceError: Y, isEligibleForOffer: w },
            { tags: { app_context: "billing" } },
        );
    let X = Y?.message ?? ed.intl.string(ed.t.R0RpRX),
        Q = w && null == Y,
        $ = w && null != Y,
        J = Q && null == d && K?.subscriptionPeriodEnd == null,
        ee = (0, eq.D7)({ location: "premium_payment_plan_select_step" });
    (0, eY.c)(K, A);
    let et = i.useMemo(
        () => ({
            planOptions: G,
            selectedPlanId: M?.id,
            planGroup: r,
            subscriptionPeriodEnd: K?.subscriptionPeriodEnd,
            useCompactGiftComponents: D,
            handleClose: u,
        }),
        [G, M?.id, r, K?.subscriptionPeriodEnd, D, u],
    );
    if (J) return ee ? (0, l.jsx)(eK.E, { className: e9.QW }) : (0, l.jsx)(e8.A, {});
    U()(null != R, "Step should be set"), U()(G.length > 0, "Premium plan options should be set");
    let en =
        ee && !C
            ? (0, l.jsx)(e2.XH, { ...et, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(e1.$p, { ...et });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e5.Z, { giftMessage: N }),
            !(C && (0, q.Ik)(b)) && (0, l.jsx)(e7.A, { isEligibleForTrial: _ }),
            (0, l.jsxs)(Z.dZ, {
                children: [
                    !ee && Q && (0, l.jsx)("hr", { className: e9.T4 }),
                    (0, l.jsx)(e3.P, { className: e9.ZB, planSkuId: H?.skuId, referralTrialOfferId: P }),
                    (0, l.jsx)(eE.A, {}),
                    $ ? (0, l.jsx)(ez.w, { type: "critical", children: X }) : en,
                    Q &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: eg()(e9.IM, { [e9.Go]: ee }) }),
                                (0, l.jsx)(eb.E, {
                                    variant: "text-xs/normal",
                                    children: ed.intl.format(ed.t.BHtnqA, {
                                        link: e4.A.getArticleURL(eS.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(Z.UX, {
                children: [
                    D && (0, l.jsx)(eJ, {}),
                    (0, l.jsx)(ew, {
                        onStepChange: t,
                        onBackClick: () => t(j.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: G,
                        shouldRenderUpdatedPaymentModal: Q,
                        isTrial: _,
                    }),
                ],
            }),
        ],
    });
}
var tt = n(234419),
    tn = n(39423),
    tl = n(672525),
    ti = n(169801),
    tr = n(634378);
function ts(e) {
    let { handleStepChange: t, referralTrialOfferId: n } = e,
        { setSelectedSkuId: i, setSelectedPlanId: r } = (0, m.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: s,
            startedPaymentFlowWithPaymentSourcesRef: a,
            priceOptions: u,
            defaultPlanId: o,
        } = (0, T.P5)(),
        { hasPaymentSources: d } = (0, c.jm)(),
        { isGift: p, claimableRewards: E } = (0, g.Pv)(),
        S = p && null != E && E.length > 0,
        I = (0, tt.V)(n);
    return (0, l.jsx)(ta, {
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
                    startedPaymentFlowWithPaymentSources: u,
                    defaultPlanId: o,
                } = e;
                l(n);
                let d = j.pn.PLAN_SELECT,
                    c = (0, e6.aZ)(t);
                (c !== A.pe.TIER_1 && c !== A.pe.TIER_2) || n !== A.pe.TIER_0 || r || (d = j.pn.WHAT_YOU_LOSE);
                let p = (0, ti.t)({ userTrialOffer: s, isGift: r, skuId: n }),
                    m = (0, eB.vT)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: u,
                    });
                d !== j.pn.WHAT_YOU_LOSE && m && ((d = j.pn.REVIEW), a((0, eB.xT)(n, t, o))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: t,
                isGift: p,
                userTrialOffer: I,
                startedPaymentFlowWithPaymentSources: a.current,
                setSelectedPlanId: r,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, e6.mH)(A.pe.TIER_2)),
                    t(A.gD.PREMIUM_GROUP_MONTH),
                    n(l ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: A.pe.TIER_2 } });
            })({ setSelectedPlanId: r, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: i }),
        isGift: p,
        priceOptions: u,
        showPromotionalGiftBanner: S,
    });
}
function ta(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: s } = e,
        a = (0, tn.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eA.rQ, { titleTextVariant: "heading-lg/semibold", title: ed.intl.string(ed.t["r+SebU"]) }),
            a
                ? (0, l.jsx)(eP.c, {
                      children: (0, l.jsx)("div", {
                          className: tr.eE,
                          children: (0, l.jsx)(tl.yS, {
                              onSelectSku: (e) => t((0, e6.mH)(e)),
                              onSelectPremiumGroup: s,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(eP.c, {
                      children: (0, l.jsx)("div", {
                          className: tr.a2,
                          children: (0, l.jsx)(tl.Ay, {
                              onSelectSku: (e) => t((0, e6.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  }),
        ],
    });
}
var tu = n(825484),
    to = n(137728);
function td(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedSkuId: i, setSelectedPlanId: r } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        { activeSubscription: s, startedPaymentFlowWithPaymentSourcesRef: a } = (0, T.P5)(),
        { isGift: u } = (0, g.Pv)(),
        o = null != s ? (0, e6.EL)(s) : null,
        d = null != o ? (0, e6.RH)(o.planId) : null,
        c = null != o ? (0, e6.m6)(o.planId) : null,
        p = (0, eB.vT)({ isTrial: !1, isGift: u, selectedSkuId: i, startedPaymentFlowWithPaymentSources: a.current });
    return (
        U()(null != c, "Expected premium type"),
        (0, l.jsx)(to.A, {
            premiumType: c,
            titleText: ed.intl.string(ed.t["7VcWW0"]),
            subtitleText: ed.intl.format(ed.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, l.jsxs)(tu.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(Q.$, {
                        variant: "primary",
                        text: ed.intl.string(ed.t["3PatSz"]),
                        onClick: () => {
                            p ? (r((0, eB.xT)(i, s)), t(j.pn.REVIEW)) : t(j.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(Q.$, { variant: "secondary", onClick: n, text: ed.intl.string(ed.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
let tc = [j.pn.PLAN_SELECT, j.pn.ADD_PAYMENT_STEPS, j.pn.REVIEW, j.pn.CONFIRM];
function tp(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            onComplete: u,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: p,
            onClose: E,
            trialId: S,
            trialFooterMessageOverride: P,
            reviewWarningMessage: x,
            openInvoiceId: T,
            onSubscriptionConfirmation: f,
            renderPurchaseConfirmation: C,
            postSuccessGuild: b,
            followupSKUInfo: N,
            renderHeader: k,
            applicationId: v,
            guildId: U,
            referralTrialOfferId: D,
            skuId: L,
            returnRef: w,
            skipConfirm: G = !1,
            continueSessionToInitialStep: F,
        } = e,
        { analyticsLocations: H } = (0, o.Ay)();
    i.useEffect(() => {
        h.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { selectedSkuId: B, purchaseState: W } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        z = (0, y.bB)(),
        { isGift: V, giftMessage: K } = (0, g.Pv)(),
        q = !V && B === A.pe.TIER_2 && !I.Ct && !I.KY && null == (0, _.uM)(),
        Y = W === M.h.PURCHASING;
    return (0, l.jsx)(O.A, {
        isConfirmationStep: z === j.pn.CONFIRM && null == F && null == C,
        isEligibleForWowMoment: q,
        shouldPrefetchWowMoment: Y,
        children: (0, l.jsx)(R.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: eS.rzx.PREMIUM,
            onComplete: u,
            transitionState: d,
            initialPlanId: c,
            giftMessage: K,
            subscriptionTier: p,
            onClose: E,
            trialId: S,
            isGift: V,
            trialFooterMessageOverride: P,
            reviewWarningMessage: x,
            planGroup: A.LE,
            openInvoiceId: T,
            onSubscriptionConfirmation: f,
            renderPurchaseConfirmation: C,
            postSuccessGuild: b,
            followupSKUInfo: N,
            renderHeader: k,
            applicationId: v,
            guildId: U,
            referralTrialOfferId: D,
            skuId: L,
            shakeWhilePurchasing: !0,
            returnRef: w,
            skipConfirm: G,
            continueSessionToInitialStep: F,
        }),
    });
}
function tm(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        r = (0, m.t4)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, c.jm)(),
        a = (0, p.A)(),
        { isGift: u, claimableRewards: o } = (0, g.Pv)(),
        d = (0, ti.A)({ isGift: u, skuId: r, referralTrialOfferId: i }),
        E = (0, eB.lp)(d),
        I = (0, S.px)(a, u, o);
    return (0, l.jsx)(C.x, {
        ...e,
        breadcrumbSteps: tc,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? j.pn.PLAN_SELECT : j.pn.REVIEW;
            E && (l = j.pn.REVIEW),
                I && e.length < 1 && (l = j.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: j.pn.PAYMENT_TYPE });
        },
    });
}
let tE = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(R.I, { ...e }) },
            {
                key: j.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(ts, { ...e }),
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
                renderStep: (e) => (0, l.jsx)(td, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: j.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(te, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eB.lp)(e) ? null : ed.intl.string(ed.t["r+SebU"])),
                    sectionHeaderText: () => ed.intl.string(ed.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: j.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(tm, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eB.lp)(e) ? null : ed.intl.string(ed.t.Sb6wI1)),
                },
            },
            { key: j.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(N.A, {}) },
            { key: j.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(b.A, {}) },
            {
                key: j.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(k._M, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) =>
                        (0, eB.lp)(e) ? ed.intl.string(ed.t.UKbp1N) : ed.intl.string(ed.t.QBnNHq),
                },
            },
            {
                key: j.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(e_, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: j.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(eH, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    tS = tE();
function tI(e) {
    let t = (0, r.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        n = (0, E.cg)() ? A.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, o.Ay)(e.analyticsLocations, u.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: c,
            giftingOrigin: p,
            giftMessage: m,
            giftRecipient: S,
            giftStyle: I,
            isGift: _,
            loadId: h,
            referralCode: j,
            subscriptionTier: M,
            referralTrialOfferId: R,
        } = e;
    if (null != M && !Object.values(A.pe).includes(M)) throw Error("subscriptionTier must be a premium subscription");
    let C = (0, P.tA)({ giftRecipient: S, isGift: _ ?? !1 }),
        b = i.useMemo(() => tE(C), [C]);
    return (0, l.jsx)(o.f5, {
        value: s,
        children: (0, l.jsx)(T.PaymentContextProvider, {
            loadId: h,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: b,
            skuIDs: [...A.oz],
            isGift: _,
            defaultPlanId: n ?? c,
            referralCode: j,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: R,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(f.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(g.dX, {
                    isGift: _,
                    giftRecipient: null == S ? void 0 : S,
                    giftMessage: m,
                    giftStyle: I,
                    giftingOrigin: p,
                    children: (0, l.jsx)(tp, { ...e }),
                }),
            }),
        }),
    });
}
