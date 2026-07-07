n.d(t, { A: () => eO, i: () => eS });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(284009),
    s = n.n(o);
if (29845 == n.j) var u = n(835245);
if (29845 == n.j) var c = n(732159);
if (29845 == n.j) var d = n(696208);
var m = n(17928);
if (29845 == n.j) var E = n(289873);
if (29845 == n.j) var C = n(834730);
if (29845 == n.j) var p = n(97808);
if (29845 == n.j) var _ = n(778712);
if (29845 == n.j) var h = n(534514);
if (29845 == n.j) var N = n(192308);
if (29845 == n.j) var I = n(568602);
var f = n(830215),
    A = n(869038),
    S = n(891197),
    T = n(444927),
    g = n(736653),
    y = n(688810),
    R = n(277984),
    x = n(86379),
    P = n(531260),
    O = n(160946),
    j = n(606267),
    v = n(682174),
    M = n(120700),
    L = n(71804),
    U = n(319668),
    D = n(426398),
    b = n(655857),
    w = n(666646),
    F = n(818824),
    k = n(584160),
    G = n(169797),
    B = n(944355),
    H = n(6938),
    Y = n(357669),
    V = n(543767),
    K = n(264779),
    W = n(852218),
    z = n(251913),
    q = n(632638),
    J = n(458785),
    Z = n(237412),
    Q = n(771566),
    X = n(61299),
    $ = n(7133),
    ee = n(287809),
    et = n(166403),
    en = n(174459),
    el = n(45938),
    er = n(975571),
    ei = n(428262),
    ea = n(580630),
    eo = n(83617),
    es = n(427262),
    eu = n(166532),
    ec = n(566980),
    ed = n(19311),
    em = n(888751),
    eE = n(216641),
    eC = n(927305),
    ep = n(652215),
    e_ = n(202541),
    eh = n(818348),
    eN = n(375708),
    eI = n(636745),
    ef = n(554632);
let eA = [eu.pn.ADD_PAYMENT_STEPS, eu.pn.REVIEW, eu.pn.CONFIRM];
function eS(e, t) {
    return eN.intl.format(eN.t.A1MiZN, { months: e.intervalCount, planName: (0, ei.RH)(t.id) });
}
function eT(e) {
    let {
            paymentSources: t,
            plan: n,
            setPaymentSourceId: i,
            paymentSourceId: a,
            handlePaymentSourceAdd: o,
            trial: s,
        } = e,
        u = (0, eE.g)(t, a),
        c = (0, P.A)(),
        d = c.isFractionalPremiumActive,
        { immediateDelivery: m } = (0, F.U)(),
        C = (0, w.sw)(),
        p = r.useMemo(
            () => ({
                prependOption: 0 === Object.keys(t).length ? { label: eN.intl.string(eN.t.iA5vA1), value: null } : null,
                isTrial: !0,
            }),
            [t],
        );
    if (null == C) return (0, l.jsx)(E.y, {});
    let _ = (0, l.jsx)(U.N, {
            setPaymentSourceId: i,
            paymentSourceId: a,
            location: "InboundPromotionReview",
            label: eN.intl.string(eN.t["mmDvV+"]),
            additionalPaymentSourceDropdownProps: p,
            onPaymentSourceAdd: o,
            hideCurrencySelect: !0,
        }),
        { renewalPrice: h } = (0, em.Go)(C, n, null),
        N = eN.intl.formatToPlainString(eN.t.BQPav6, { planPremiumType: ei.Ay.getDisplayName(n.id) }),
        I = (0, l.jsx)(B._P, {
            variant: {
                type: B.I0.SubscriptionTrial,
                purchaseButtonText: N,
                totalDue: 0,
                renewalPrice: h,
                currency: C.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
                startDate: (0, J.de)({ renewalInvoice: C, isSubscriptionUpdate: !1 }),
            },
            paymentSourceType: u,
            immediateDelivery: m,
        });
    return (0, l.jsx)(eC.K, {
        plan: n,
        renewalInvoicePreview: C,
        subscriptionTrial: s,
        shouldShowFractionalPremiumBanner: d,
        fractionalPremiumInfo: c,
        paymentMethodContent: _,
        legalContent: I,
    });
}
function eg(e) {
    let { user: t, code: n, className: r } = e;
    return (0, l.jsx)(C.E, {
        className: a()(r, eI.iZ),
        variant: "text-md/normal",
        children: eN.intl.format(eN.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, l.jsx)(
                    p.eu,
                    {
                        className: eI.FL,
                        size: _._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": es.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: es.Ay.getUserTag(t),
            logoutHook: () => {
                f.A.logout("inbound_promotion_redemption_modal_old", ep.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function ey(e) {
    let { promotion: t, code: n, isDirectFulfillment: r } = e,
        i = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = (0, g.Ay)(),
        o = (0, K.WD)(t.id, a);
    return (0, l.jsxs)("div", {
        className: eI.rN,
        children: [
            (0, l.jsxs)("div", {
                className: eI.u5,
                children: [
                    (0, l.jsx)("img", { alt: "", src: o, className: eI.hb }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(h.D, {
                                variant: "heading-xl/bold",
                                className: eI.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, l.jsx)(C.E, {
                                variant: "text-sm/normal",
                                className: eI.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            r || null == i ? null : (0, l.jsx)(eg, { className: eI.KZ, user: i, code: n }),
        ],
    });
}
function eR(e) {
    let { title: t, bodyText: n, helpCenterLink: i, showUser: a = !1, user: o, code: s, handleClose: u } = e,
        c = r.useMemo(() => ({ text: eN.intl.string(eN.t.BddRzS), onClick: u }), [u]),
        d = (0, l.jsx)(G.lo, { primaryButtonProps: c });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: eI.t4,
                children: [
                    (0, l.jsx)("img", { alt: "", src: ef, className: eI.M6 }),
                    (0, l.jsx)(h.D, { variant: "heading-lg/semibold", className: eI.DD, children: t }),
                    (0, l.jsx)(C.E, { variant: "text-md/normal", className: eI.G3, children: n }),
                    null != i
                        ? (0, l.jsx)(C.E, {
                              variant: "text-md/normal",
                              className: eI.G3,
                              children: eN.intl.format(eN.t["4uSp2y"], { helpCenterLink: i }),
                          })
                        : null,
                    a && null != o ? (0, l.jsx)(eg, { className: eI.EF, user: o, code: s }) : null,
                ],
            }),
            d,
        ],
    });
}
let ex = new Set([...k.MU]);
function eP(e) {
    let {
            plan: t,
            handleClose: n,
            code: i,
            setPurchaseState: a,
            step: o,
            setStep: p,
            steps: _,
            purchaseState: h,
            promotion: I,
            trial: f,
            isDirectFulfillment: g,
        } = e,
        R = (0, X._V)(),
        {
            paymentSources: x,
            paymentSourceId: P,
            paymentAuthenticationState: v,
            purchaseError: U,
            setPurchaseError: F,
            setIsSubmittingCurrentStep: k,
            paymentError: B,
            purchaseErrorBlockRef: K,
            setPaymentSourceId: W,
            isSubmittingCurrentStep: J,
        } = R,
        Z = (0, eE.W)(x, P),
        $ = (0, D.kc)(),
        ee = (0, j.iB)({
            checkoutPaymentSources: $,
            paymentSourceId: P,
            location: "InboundPromotionRedemptionModalBody",
        });
    r.useEffect(() => {
        en.default.track(ep.HAw.OPEN_MODAL, { type: "Promotion Redemption", promotion_id: I.id });
    }, [I]),
        r.useEffect(() => {
            (0, eo.c_)(P);
        }, [P]);
    let el = (0, m.bG)([et.A], () => et.A.getPremiumTypeSubscription()),
        { analyticsLocations: es } = (0, y.Ay)(),
        { displayCurrency: em } = (0, b.Jn)(),
        eC = (0, H.t4)((e) => e.hasAcceptedTerms),
        [ef, eA] = (0, V.YV)({
            items: [{ planId: t.id, quantity: 1 }],
            renewal: !0,
            paymentSourceId: P,
            code: i,
            subscriptionId: el?.id,
            analyticsLocations: es,
            analyticsLocation: ep.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
        });
    (0, w.F0)(ef, eA);
    let eS = (0, eo._w)(t, P, !1),
        eg = ef?.currency ?? em ?? eS[0],
        eR = r.useMemo(() => (null != P ? { paymentSourceId: P, currency: eg } : { currency: eg }), [P, eg]),
        [ex] = (0, T.A)(() => [(0, u.A)(), Date.now()]),
        eP = r.useMemo(
            () => ({
                load_id: ex,
                location: ep.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: ep.rzx.PREMIUM,
                payment_type: eh.fr[eh.VV.SUBSCRIPTION],
                subscription_plan_id: t.id,
                sku_id: t.skuId,
                checkout_flow: M.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [ex, t.id, t.skuId],
        );
    r.useEffect(() => {
        o === eu.pn.PROMOTION_INFO && (0, Y.b)(eP);
    }, [eP, o]);
    let [eO, ej] = r.useState(!1);
    (0, eu.zT)(o, h, a), (0, z.QR)(v);
    let ev = r.useCallback(
            (e) => {
                en.default.track(ep.HAw.PAYMENT_FLOW_STEP, { ...eP, from_step: o, to_step: e }),
                    p(e),
                    null != U && F(null);
            },
            [eP, o, p, U, F],
        ),
        eM = r.useCallback(
            (e, t) => {
                a(e), F(t);
            },
            [a, F],
        ),
        eL = r.useCallback(async () => {
            s()(null != Z, "Cannot purchase without a payment source"), k(!0), a(ec.h.PURCHASING);
            try {
                await A.A.redeemGiftCode({ code: i, options: { paymentSource: Z } }),
                    a(ec.h.COMPLETED),
                    ev(eu.pn.CONFIRM),
                    en.default.track(ep.HAw.PAYMENT_FLOW_COMPLETED, { ...eP });
            } catch (e) {
                eM(ec.h.FAIL, e),
                    en.default.track(ep.HAw.PAYMENT_FLOW_FAILED, {
                        ...eP,
                        payment_error_code: e?.code,
                        payment_source_id: Z.id,
                    });
            } finally {
                k(!1);
            }
        }, [eP, i, eM, ev, Z, k, a]),
        eU = r.useCallback(async () => {
            null == el || eO
                ? await eL()
                : (0, N.openModal)((e) => {
                      let n;
                      if (null == ef) n = (0, l.jsx)(E.y, { className: eI.wG });
                      else {
                          let e = (0, ei.y8)(t.id, !1, !1, eR);
                          n = (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(C.E, {
                                      className: eI.ex,
                                      variant: "text-md/normal",
                                      children: eN.intl.format(eN.t.DLsu0k, {
                                          lineItemsHook: function (e, t) {
                                              return (0, l.jsx)(
                                                  "ul",
                                                  {
                                                      children: el.items.map((e) => {
                                                          let t = e_.hd[e.planId],
                                                              n = eN.intl.formatToPlainString(eN.t.G0EnAP, {
                                                                  quantity: e.quantity,
                                                                  lineItem: t.name,
                                                              });
                                                          return (0, l.jsx)(
                                                              "li",
                                                              { children: n },
                                                              `${el.id}-${e.planId}`,
                                                          );
                                                      }),
                                                  },
                                                  t,
                                              );
                                          },
                                          newPlanName: e_.hd[t.id].name,
                                      }),
                                  }),
                                  (0, l.jsx)(C.E, {
                                      className: eI.ex,
                                      variant: "text-sm/normal",
                                      children: eN.intl.format(eN.t.KHvyu5, {
                                          newPlanName: e_.hd[t.id].name,
                                          trialMonths: f.intervalCount,
                                          helpCenterLink: I.inboundHelpCenterLink ?? er.A.getArticleURL(ep.MVz.BILLING),
                                          planPrice: (0, ea.$g)(e.amount, ef.currency),
                                      }),
                                  }),
                              ],
                          });
                      }
                      return (0, l.jsx)(c.ConfirmModal, {
                          onConfirm: async () => {
                              ej(!0), await eL();
                          },
                          title: eN.intl.string(eN.t.MaZ28z),
                          cancelText: eN.intl.string(eN.t["ETE/oC"]),
                          confirmText: eN.intl.string(eN.t["wfx/Hp"]),
                          ...e,
                          variant: "primary",
                          children: n,
                      });
                  });
        }, [el, eO, ej, eL, ef, t, I.inboundHelpCenterLink, f.intervalCount, eR]);
    function eD(e) {
        let { body: t, footer: n } = e;
        return (0, l.jsx)(q.A, {
            steps: _,
            currentStep: o,
            paymentError: U ?? B ?? eA,
            body: t,
            footer: n,
            purchaseErrorBlockRef: K,
            hideBreadcrumbs: !0,
            shouldUseManaModal: !0,
        });
    }
    (0, z.b)(o, v, p, a, !0, eL);
    let eb = (0, X.Y)({
        paymentModalArgs: R,
        initialStep: eu.pn.PAYMENT_TYPE,
        prependSteps: [eu.pn.PROMOTION_INFO],
        appendSteps: [eu.pn.REVIEW, eu.pn.CONFIRM],
        breadcrumpSteps: _,
        currentBreadcrumpStep: o,
        hideBreadcrumbs: !0,
        onReturn: () => p(eu.pn.REVIEW),
        onComplete: () => p(eu.pn.REVIEW),
        onStepChange: () => {},
        shouldUseManaModal: !0,
    });
    if (!(0, O.Y)()) return (0, l.jsx)(E.y, { className: eI.wG });
    switch (o) {
        case eu.pn.PROMOTION_INFO:
            return eD({
                body: (0, l.jsx)(ey, { promotion: I, code: i, isDirectFulfillment: g }),
                footer: (0, l.jsx)(ed.Ay, {
                    primaryCTA: ed.Ay.CTAType.CONTINUE,
                    primaryText: eN.intl.string(eN.t.PDTjLN),
                    onPrimary: () => ev(eu.pn.REVIEW),
                    primaryDisabled: null != eA,
                }),
            });
        case eu.pn.ADD_PAYMENT_STEPS:
            return eb;
        case eu.pn.AWAITING_AUTHENTICATION:
            return (0, l.jsx)(S.p, { steps: _, currentStep: o, paymentError: R.paymentError });
        case eu.pn.REVIEW: {
            let e = (0, eE.W)(x, P),
                n = null;
            null == e ? (n = eN.intl.string(eN.t.L7jbQV)) : eC || (n = eN.intl.string(eN.t.XdvBLS));
            let r = {
                primaryCTA: ed.Ay.CTAType.PURCHASE,
                primaryType: "submit",
                primaryText: eN.intl.formatToPlainString(eN.t.BQPav6, { planPremiumType: ei.Ay.getDisplayName(t.id) }),
                primarySubmitting: J,
                primaryTooltip: n,
                primaryDisabled: null == e || !e.canRedeemTrial() || ee || !eC,
                onPrimary: function () {
                    if (null != e && eC) return eU();
                },
                onBack: () => ev(eu.pn.PROMOTION_INFO),
            };
            return eD({
                body: (0, l.jsx)(eT, {
                    paymentSources: x,
                    plan: t,
                    paymentSourceId: P,
                    setPaymentSourceId: W,
                    handlePaymentSourceAdd: () => ev(eu.pn.ADD_PAYMENT_STEPS),
                    trial: f,
                }),
                footer: (0, l.jsx)(G.lo, {
                    onBackClick: r.onBack,
                    primaryButtonProps: {
                        text: r.primaryText,
                        tooltipText: r.primaryTooltip,
                        disabled: r.primaryDisabled,
                        loading: r.primarySubmitting,
                        onClick: r.onPrimary,
                        variant: (0, ed.CY)(r.primaryCTA),
                    },
                }),
            });
        }
        case eu.pn.CONFIRM:
            let ew = (0, eE.g)(x, P);
            return eD({
                body: (0, l.jsx)(Q.Ay, { hideClose: !0, planId: t.id, onClose: n, paymentSourceType: ew }),
                footer: g
                    ? (0, l.jsx)(d.H, {
                          actions: [{ text: eN.intl.string(eN.t.UQvCf7), variant: "primary", onClick: n, size: "md" }],
                      })
                    : null,
            });
        default:
            throw new L.v({ message: `Unexpected step: ${o}`, extraSentryInformation: { step: o } });
    }
}
function eO(e) {
    let { code: t, onClose: n, transitionState: i } = e,
        a = (0, x.Hp)(),
        o = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        u = (0, m.bG)([et.A], () => et.A.getMostRecentPremiumTypeSubscription()),
        c = (0, m.bG)([et.A], () => et.A.hasFetchedMostRecentPremiumTypeSubscription()),
        [d, C] = r.useState(!1),
        [p, _] = r.useState(null),
        [h, N] = r.useState(null),
        [f, A] = r.useState(!1);
    r.useEffect(() => {
        d ||
            (0, el.GM)(t, !1, !0)
                .then((e) => {
                    let t = $.A.createFromServer(e);
                    _(t), C(!0), A(t.promotion?.promotionType === W.pt.THIRD_PARTY_DIRECT_FULFILLMENT);
                })
                .catch((e) => {
                    N(e), C(!0);
                }),
            c || (0, R.I8)();
    }, [t, c, d]);
    let S = p?.subscriptionPlan,
        T = p?.promotion,
        g = p?.subscriptionTrial,
        y = (() => {
            if (null != o && !o.verified)
                return {
                    title: eN.intl.string(eN.t.ARIsMA),
                    body: eN.intl.string(eN.t.oDWkjN),
                    showUser: !0,
                    errorCode: e_.JR.USER_NOT_VERIFIED,
                };
            if (null != h && h.code === ep.t02.INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED)
                return {
                    title: eN.intl.string(eN.t.BHxy59),
                    body: eN.intl.string(eN.t["1wokFq"]),
                    errorCode: e_.JR.PREVIOUS_SUBSCRIBER,
                };
            if (null == p)
                return {
                    title: eN.intl.string(eN.t.ARIsMA),
                    body:
                        null != h && h.code === ep.t02.INVALID_GIFT_REDEMPTION_INCORRECT_USER
                            ? eN.intl.string(eN.t.S8TNKh)
                            : eN.intl.string(eN.t["1AceQR"]),
                    errorCode: e_.JR.NO_CODE_BODY,
                };
            if (null != h || null == T || null == g || null == S)
                return {
                    title: eN.intl.string(eN.t.ARIsMA),
                    body: eN.intl.string(eN.t["3u+6q7"]),
                    errorCode: e_.JR.NO_PROMOTION,
                };
            if (p.isClaimed)
                return {
                    title: eN.intl.string(eN.t.ARIsMA),
                    body: eN.intl.string(eN.t.u9IQuM),
                    errorCode: e_.JR.CODE_CLAIMED,
                };
            if (null == u) return null;
            let e = (0, ei.EL)(u)?.planId;
            return null != e && u.status === ep.Dmq.ACTIVE && ei.Ay.getPremiumType(e) === e_.PremiumTypes.TIER_2
                ? {
                      title: eN.intl.string(eN.t.BHxy59),
                      body: eN.intl.formatToPlainString(eN.t.wpwuoV, {
                          months: g.intervalCount,
                          planName: (0, ei.RH)(S.id),
                      }),
                      errorCode: e_.JR.EXISTING_SUBSCRIBER,
                  }
                : null;
        })();
    r.useEffect(() => {
        c &&
            d &&
            en.default.track(ep.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == y && !a,
                error_code: null != y ? y.errorCode : a ? e_.JR.BLOCKED_PAYMENT : null,
                promotion_id: p?.promotion?.id,
            });
    }, [c, d, y, a, p]);
    let [P, O] = r.useState(ec.h.WAITING),
        [j, M] = r.useState(eu.pn.PROMOTION_INFO),
        L = r.useCallback(() => {
            null != n && n(P === ec.h.COMPLETED);
        }, [n, P]),
        U = (() => {
            if (!d || !c) return (0, l.jsx)(E.y, { className: eI.wG });
            if (null != y)
                return (0, l.jsx)(eR, {
                    title: y.title,
                    bodyText: y.body,
                    helpCenterLink: T?.inboundHelpCenterLink ?? "",
                    showUser: y.showUser,
                    handleClose: L,
                    user: o,
                    code: t,
                });
            if ((s()(null != S && null != p && null != g && null != T, "Missing required objects"), a))
                return (0, l.jsx)(v.oO, {});
            let e = (0, k.uO)({ skuId: S.skuId, headerBadgePreset: j === eu.pn.REVIEW ? "trial" : void 0, step: j }),
                n = ex.has(j)
                    ? (0, l.jsx)(G.s3, { ...e })
                    : (0, l.jsx)(Z.A, {
                          enablePremiumBrandRefresh: !0,
                          forceBrandRefreshHeader: !0,
                          premiumType: S.premiumSubscriptionType ?? e_.PremiumTypes.TIER_2,
                          className: eI.X9,
                          currentStep: j,
                          purchaseState: P,
                          hideCloseButton: !0,
                          onClose: L,
                      });
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    n,
                    (0, l.jsx)("form", {
                        className: eI.FG,
                        onSubmit: (e) => e.preventDefault(),
                        children: (0, l.jsx)(eP, {
                            plan: S,
                            handleClose: L,
                            code: p.code,
                            step: j,
                            setStep: M,
                            steps: eA,
                            purchaseState: P,
                            setPurchaseState: O,
                            trial: g,
                            promotion: T,
                            isDirectFulfillment: f,
                        }),
                    }),
                ],
            });
        })(),
        D = r.useCallback(async () => {
            await L();
        }, [L]);
    return (0, l.jsx)(I.b, {
        className: eI.Xn,
        isShaking: P === ec.h.PURCHASING,
        intensity: 2,
        children: (0, l.jsx)(G.Jg, { transitionState: i, size: "md", onClose: D, children: U }),
    });
}
