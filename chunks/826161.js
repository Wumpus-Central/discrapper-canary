n.d(t, { A: () => ex, i: () => ef });
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
if (29845 == n.j) var p = n(834730);
if (29845 == n.j) var C = n(97808);
if (29845 == n.j) var _ = n(778712);
if (29845 == n.j) var h = n(534514);
if (29845 == n.j) var A = n(192308);
if (29845 == n.j) var N = n(568602);
var T = n(830215),
    I = n(869038),
    f = n(891197),
    S = n(444927),
    y = n(736653),
    g = n(688810),
    R = n(277984),
    P = n(86379),
    O = n(531260),
    x = n(160946),
    M = n(606267),
    j = n(682174),
    v = n(120700),
    L = n(71804),
    U = n(319668),
    b = n(426398),
    w = n(655857),
    k = n(666646),
    F = n(818824),
    D = n(584160),
    G = n(169797),
    B = n(944355),
    H = n(650170),
    Y = n(357669),
    K = n(543767),
    V = n(264779),
    W = n(852218),
    z = n(251913),
    q = n(632638),
    Z = n(458785),
    J = n(237412),
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
    ep = n(927305),
    eC = n(652215),
    e_ = n(202541),
    eh = n(818348),
    eA = n(375708),
    eN = n(636745),
    eT = n(554632);
let eI = [eu.pn.ADD_PAYMENT_STEPS, eu.pn.REVIEW, eu.pn.CONFIRM];
function ef(e, t) {
    return eA.intl.format(eA.t.A1MiZN, { months: e.intervalCount, planName: (0, ei.RH)(t.id) });
}
function eS(e) {
    let {
            paymentSources: t,
            plan: n,
            setPaymentSourceId: i,
            paymentSourceId: a,
            handlePaymentSourceAdd: o,
            trial: s,
        } = e,
        u = (0, eE.g)(t, a),
        c = (0, O.A)(),
        d = c.isFractionalPremiumActive,
        { immediateDelivery: m } = (0, F.U)(),
        p = (0, k.sw)(),
        C = r.useMemo(
            () => ({
                prependOption: 0 === Object.keys(t).length ? { label: eA.intl.string(eA.t.iA5vA1), value: null } : null,
                isTrial: !0,
            }),
            [t],
        );
    if (null == p) return (0, l.jsx)(E.y, {});
    let _ = (0, l.jsx)(U.N, {
            setPaymentSourceId: i,
            paymentSourceId: a,
            location: "InboundPromotionReview",
            label: eA.intl.string(eA.t["mmDvV+"]),
            additionalPaymentSourceDropdownProps: C,
            onPaymentSourceAdd: o,
            hideCurrencySelect: !0,
        }),
        { renewalPrice: h } = (0, em.Go)(p, n, null),
        A = eA.intl.formatToPlainString(eA.t.BQPav6, { planPremiumType: ei.Ay.getDisplayName(n.id) }),
        N = (0, l.jsx)(B._P, {
            variant: {
                type: B.I0.SubscriptionTrial,
                purchaseButtonText: A,
                totalDue: 0,
                renewalPrice: h,
                currency: p.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
                startDate: (0, Z.de)({ renewalInvoice: p, isSubscriptionUpdate: !1 }),
            },
            paymentSourceType: u,
            immediateDelivery: m,
        });
    return (0, l.jsx)(ep.K, {
        plan: n,
        renewalInvoicePreview: p,
        subscriptionTrial: s,
        shouldShowFractionalPremiumBanner: d,
        fractionalPremiumInfo: c,
        paymentMethodContent: _,
        legalContent: N,
    });
}
function ey(e) {
    let { user: t, code: n, className: r } = e;
    return (0, l.jsx)(p.E, {
        className: a()(r, eN.iZ),
        variant: "text-md/normal",
        children: eA.intl.format(eA.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, l.jsx)(
                    C.eu,
                    {
                        className: eN.FL,
                        size: _._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": es.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: es.Ay.getUserTag(t),
            logoutHook: () => {
                T.A.logout("inbound_promotion_redemption_modal_old", eC.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function eg(e) {
    let { promotion: t, code: n, isDirectFulfillment: r } = e,
        i = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = (0, y.Ay)(),
        o = (0, V.WD)(t.id, a);
    return (0, l.jsxs)("div", {
        className: eN.rN,
        children: [
            (0, l.jsxs)("div", {
                className: eN.u5,
                children: [
                    (0, l.jsx)("img", { alt: "", src: o, className: eN.hb }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(h.D, {
                                variant: "heading-xl/bold",
                                className: eN.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, l.jsx)(p.E, {
                                variant: "text-sm/normal",
                                className: eN.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            r || null == i ? null : (0, l.jsx)(ey, { className: eN.KZ, user: i, code: n }),
        ],
    });
}
function eR(e) {
    let { title: t, bodyText: n, helpCenterLink: i, showUser: a = !1, user: o, code: s, handleClose: u } = e,
        c = r.useMemo(() => ({ text: eA.intl.string(eA.t.BddRzS), onClick: u }), [u]),
        d = (0, l.jsx)(G.lo, { primaryButtonProps: c });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: eN.t4,
                children: [
                    (0, l.jsx)("img", { alt: "", src: eT, className: eN.M6 }),
                    (0, l.jsx)(h.D, { variant: "heading-lg/semibold", className: eN.DD, children: t }),
                    (0, l.jsx)(p.E, { variant: "text-md/normal", className: eN.G3, children: n }),
                    null != i
                        ? (0, l.jsx)(p.E, {
                              variant: "text-md/normal",
                              className: eN.G3,
                              children: eA.intl.format(eA.t["4uSp2y"], { helpCenterLink: i }),
                          })
                        : null,
                    a && null != o ? (0, l.jsx)(ey, { className: eN.EF, user: o, code: s }) : null,
                ],
            }),
            d,
        ],
    });
}
let eP = new Set([...D.MU]);
function eO(e) {
    let {
            plan: t,
            handleClose: n,
            code: i,
            setPurchaseState: a,
            step: o,
            setStep: C,
            steps: _,
            purchaseState: h,
            promotion: N,
            trial: T,
            isDirectFulfillment: y,
        } = e,
        R = (0, X._V)(),
        {
            paymentSources: P,
            paymentSourceId: O,
            paymentAuthenticationState: j,
            purchaseError: U,
            setPurchaseError: F,
            setIsSubmittingCurrentStep: D,
            paymentError: B,
            purchaseErrorBlockRef: V,
            setPaymentSourceId: W,
            isSubmittingCurrentStep: Z,
        } = R,
        J = (0, eE.W)(P, O),
        $ = (0, b.kc)(),
        ee = (0, M.iB)({
            checkoutPaymentSources: $,
            paymentSourceId: O,
            location: "InboundPromotionRedemptionModalBody",
        });
    r.useEffect(() => {
        en.default.track(eC.HAw.OPEN_MODAL, { type: "Promotion Redemption", promotion_id: N.id });
    }, [N]),
        r.useEffect(() => {
            (0, eo.c_)(O);
        }, [O]);
    let el = (0, m.bG)([et.A], () => et.A.getPremiumTypeSubscription()),
        { analyticsLocations: es } = (0, g.Ay)(),
        { displayCurrency: em } = (0, w.Jn)(),
        ep = (0, H.t4)((e) => e.hasAcceptedTerms),
        [eT, eI] = (0, K.YV)({
            items: [{ planId: t.id, quantity: 1 }],
            renewal: !0,
            paymentSourceId: O,
            code: i,
            subscriptionId: el?.id,
            analyticsLocations: es,
            analyticsLocation: eC.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
        });
    (0, k.F0)(eT, eI);
    let ef = (0, eo._w)(t, O, !1),
        ey = eT?.currency ?? em ?? ef[0],
        eR = r.useMemo(() => (null != O ? { paymentSourceId: O, currency: ey } : { currency: ey }), [O, ey]),
        [eP] = (0, S.A)(() => [(0, u.A)(), Date.now()]),
        eO = r.useMemo(
            () => ({
                load_id: eP,
                location: eC.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: eC.rzx.PREMIUM,
                payment_type: eh.fr[eh.VV.SUBSCRIPTION],
                subscription_plan_id: t.id,
                sku_id: t.skuId,
                checkout_flow: v.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [eP, t.id, t.skuId],
        );
    r.useEffect(() => {
        o === eu.pn.PROMOTION_INFO && (0, Y.b)(eO);
    }, [eO, o]);
    let [ex, eM] = r.useState(!1);
    (0, eu.zT)(o, h, a), (0, z.QR)(j);
    let ej = r.useCallback(
            (e) => {
                en.default.track(eC.HAw.PAYMENT_FLOW_STEP, { ...eO, from_step: o, to_step: e }),
                    C(e),
                    null != U && F(null);
            },
            [eO, o, C, U, F],
        ),
        ev = r.useCallback(
            (e, t) => {
                a(e), F(t);
            },
            [a, F],
        ),
        eL = r.useCallback(async () => {
            s()(null != J, "Cannot purchase without a payment source"), D(!0), a(ec.h.PURCHASING);
            try {
                await I.A.redeemGiftCode({ code: i, options: { paymentSource: J } }),
                    a(ec.h.COMPLETED),
                    ej(eu.pn.CONFIRM),
                    en.default.track(eC.HAw.PAYMENT_FLOW_COMPLETED, { ...eO });
            } catch (e) {
                ev(ec.h.FAIL, e),
                    en.default.track(eC.HAw.PAYMENT_FLOW_FAILED, {
                        ...eO,
                        payment_error_code: e?.code,
                        payment_source_id: J.id,
                    });
            } finally {
                D(!1);
            }
        }, [eO, i, ev, ej, J, D, a]),
        eU = r.useCallback(async () => {
            null == el || ex
                ? await eL()
                : (0, A.openModal)((e) => {
                      let n;
                      if (null == eT) n = (0, l.jsx)(E.y, { className: eN.wG });
                      else {
                          let e = (0, ei.y8)(t.id, !1, !1, eR);
                          n = (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(p.E, {
                                      className: eN.ex,
                                      variant: "text-md/normal",
                                      children: eA.intl.format(eA.t.DLsu0k, {
                                          lineItemsHook: function (e, t) {
                                              return (0, l.jsx)(
                                                  "ul",
                                                  {
                                                      children: el.items.map((e) => {
                                                          let t = e_.hd[e.planId],
                                                              n = eA.intl.formatToPlainString(eA.t.G0EnAP, {
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
                                  (0, l.jsx)(p.E, {
                                      className: eN.ex,
                                      variant: "text-sm/normal",
                                      children: eA.intl.format(eA.t.KHvyu5, {
                                          newPlanName: e_.hd[t.id].name,
                                          trialMonths: T.intervalCount,
                                          helpCenterLink: N.inboundHelpCenterLink ?? er.A.getArticleURL(eC.MVz.BILLING),
                                          planPrice: (0, ea.$g)(e.amount, eT.currency),
                                      }),
                                  }),
                              ],
                          });
                      }
                      return (0, l.jsx)(c.ConfirmModal, {
                          onConfirm: async () => {
                              eM(!0), await eL();
                          },
                          title: eA.intl.string(eA.t.MaZ28z),
                          cancelText: eA.intl.string(eA.t["ETE/oC"]),
                          confirmText: eA.intl.string(eA.t["wfx/Hp"]),
                          ...e,
                          variant: "primary",
                          children: n,
                      });
                  });
        }, [el, ex, eM, eL, eT, t, N.inboundHelpCenterLink, T.intervalCount, eR]);
    function eb(e) {
        let { body: t, footer: n } = e;
        return (0, l.jsx)(q.A, {
            steps: _,
            currentStep: o,
            paymentError: U ?? B ?? eI,
            body: t,
            footer: n,
            purchaseErrorBlockRef: V,
            hideBreadcrumbs: !0,
            shouldUseManaModal: !0,
        });
    }
    (0, z.b)(o, j, C, a, !0, eL);
    let ew = (0, X.Y)({
        paymentModalArgs: R,
        initialStep: eu.pn.PAYMENT_TYPE,
        prependSteps: [eu.pn.PROMOTION_INFO],
        appendSteps: [eu.pn.REVIEW, eu.pn.CONFIRM],
        breadcrumpSteps: _,
        currentBreadcrumpStep: o,
        hideBreadcrumbs: !0,
        onReturn: () => C(eu.pn.REVIEW),
        onComplete: () => C(eu.pn.REVIEW),
        onStepChange: () => {},
        shouldUseManaModal: !0,
    });
    if (!(0, x.Y)()) return (0, l.jsx)(E.y, { className: eN.wG });
    switch (o) {
        case eu.pn.PROMOTION_INFO:
            return eb({
                body: (0, l.jsx)(eg, { promotion: N, code: i, isDirectFulfillment: y }),
                footer: (0, l.jsx)(ed.Ay, {
                    primaryCTA: ed.Ay.CTAType.CONTINUE,
                    primaryText: eA.intl.string(eA.t.PDTjLN),
                    onPrimary: () => ej(eu.pn.REVIEW),
                    primaryDisabled: null != eI,
                }),
            });
        case eu.pn.ADD_PAYMENT_STEPS:
            return ew;
        case eu.pn.AWAITING_AUTHENTICATION:
            return (0, l.jsx)(f.p, { steps: _, currentStep: o, paymentError: R.paymentError });
        case eu.pn.REVIEW: {
            let e = (0, eE.W)(P, O),
                n = null;
            null == e ? (n = eA.intl.string(eA.t.L7jbQV)) : ep || (n = eA.intl.string(eA.t.XdvBLS));
            let r = {
                primaryCTA: ed.Ay.CTAType.PURCHASE,
                primaryType: "submit",
                primaryText: eA.intl.formatToPlainString(eA.t.BQPav6, { planPremiumType: ei.Ay.getDisplayName(t.id) }),
                primarySubmitting: Z,
                primaryTooltip: n,
                primaryDisabled: null == e || !e.canRedeemTrial() || ee || !ep,
                onPrimary: function () {
                    if (null != e && ep) return eU();
                },
                onBack: () => ej(eu.pn.PROMOTION_INFO),
            };
            return eb({
                body: (0, l.jsx)(eS, {
                    paymentSources: P,
                    plan: t,
                    paymentSourceId: O,
                    setPaymentSourceId: W,
                    handlePaymentSourceAdd: () => ej(eu.pn.ADD_PAYMENT_STEPS),
                    trial: T,
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
            let ek = (0, eE.g)(P, O);
            return eb({
                body: (0, l.jsx)(Q.Ay, { hideClose: !0, planId: t.id, onClose: n, paymentSourceType: ek }),
                footer: y
                    ? (0, l.jsx)(d.H, {
                          actions: [{ text: eA.intl.string(eA.t.UQvCf7), variant: "primary", onClick: n, size: "md" }],
                      })
                    : null,
            });
        default:
            throw new L.v({ message: `Unexpected step: ${o}`, extraSentryInformation: { step: o } });
    }
}
function ex(e) {
    let { code: t, onClose: n, transitionState: i } = e,
        a = (0, P.Hp)(),
        o = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        u = (0, m.bG)([et.A], () => et.A.getMostRecentPremiumTypeSubscription()),
        c = (0, m.bG)([et.A], () => et.A.hasFetchedMostRecentPremiumTypeSubscription()),
        [d, p] = r.useState(!1),
        [C, _] = r.useState(null),
        [h, A] = r.useState(null),
        [T, I] = r.useState(!1);
    r.useEffect(() => {
        d ||
            (0, el.GM)(t, !1, !0)
                .then((e) => {
                    let t = $.A.createFromServer(e);
                    _(t), p(!0), I(t.promotion?.promotionType === W.pt.THIRD_PARTY_DIRECT_FULFILLMENT);
                })
                .catch((e) => {
                    A(e), p(!0);
                }),
            c || (0, R.I8)();
    }, [t, c, d]);
    let f = C?.subscriptionPlan,
        S = C?.promotion,
        y = C?.subscriptionTrial,
        g = (() => {
            if (null != o && !o.verified)
                return {
                    title: eA.intl.string(eA.t.ARIsMA),
                    body: eA.intl.string(eA.t.oDWkjN),
                    showUser: !0,
                    errorCode: e_.JR.USER_NOT_VERIFIED,
                };
            if (null != h && h.code === eC.t02.INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED)
                return {
                    title: eA.intl.string(eA.t.BHxy59),
                    body: eA.intl.string(eA.t["1wokFq"]),
                    errorCode: e_.JR.PREVIOUS_SUBSCRIBER,
                };
            if (null == C)
                return {
                    title: eA.intl.string(eA.t.ARIsMA),
                    body:
                        null != h && h.code === eC.t02.INVALID_GIFT_REDEMPTION_INCORRECT_USER
                            ? eA.intl.string(eA.t.S8TNKh)
                            : eA.intl.string(eA.t["1AceQR"]),
                    errorCode: e_.JR.NO_CODE_BODY,
                };
            if (null != h || null == S || null == y || null == f)
                return {
                    title: eA.intl.string(eA.t.ARIsMA),
                    body: eA.intl.string(eA.t["3u+6q7"]),
                    errorCode: e_.JR.NO_PROMOTION,
                };
            if (C.isClaimed)
                return {
                    title: eA.intl.string(eA.t.ARIsMA),
                    body: eA.intl.string(eA.t.u9IQuM),
                    errorCode: e_.JR.CODE_CLAIMED,
                };
            if (null == u) return null;
            let e = (0, ei.EL)(u)?.planId;
            return null != e && u.status === eC.Dmq.ACTIVE && ei.Ay.getPremiumType(e) === e_.PremiumTypes.TIER_2
                ? {
                      title: eA.intl.string(eA.t.BHxy59),
                      body: eA.intl.formatToPlainString(eA.t.wpwuoV, {
                          months: y.intervalCount,
                          planName: (0, ei.RH)(f.id),
                      }),
                      errorCode: e_.JR.EXISTING_SUBSCRIBER,
                  }
                : null;
        })();
    r.useEffect(() => {
        c &&
            d &&
            en.default.track(eC.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == g && !a,
                error_code: null != g ? g.errorCode : a ? e_.JR.BLOCKED_PAYMENT : null,
                promotion_id: C?.promotion?.id,
            });
    }, [c, d, g, a, C]);
    let [O, x] = r.useState(ec.h.WAITING),
        [M, v] = r.useState(eu.pn.PROMOTION_INFO),
        L = r.useCallback(() => {
            null != n && n(O === ec.h.COMPLETED);
        }, [n, O]),
        U = (() => {
            if (!d || !c) return (0, l.jsx)(E.y, { className: eN.wG });
            if (null != g)
                return (0, l.jsx)(eR, {
                    title: g.title,
                    bodyText: g.body,
                    helpCenterLink: S?.inboundHelpCenterLink ?? "",
                    showUser: g.showUser,
                    handleClose: L,
                    user: o,
                    code: t,
                });
            if ((s()(null != f && null != C && null != y && null != S, "Missing required objects"), a))
                return (0, l.jsx)(j.oO, {});
            let e = (0, D.uO)({ skuId: f.skuId, headerBadgePreset: M === eu.pn.REVIEW ? "trial" : void 0, step: M }),
                n = eP.has(M)
                    ? (0, l.jsx)(G.s3, { ...e })
                    : (0, l.jsx)(J.A, {
                          enablePremiumBrandRefresh: !0,
                          forceBrandRefreshHeader: !0,
                          premiumType: f.premiumSubscriptionType ?? e_.PremiumTypes.TIER_2,
                          className: eN.X9,
                          currentStep: M,
                          purchaseState: O,
                          hideCloseButton: !0,
                          onClose: L,
                      });
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    n,
                    (0, l.jsx)("form", {
                        className: eN.FG,
                        onSubmit: (e) => e.preventDefault(),
                        children: (0, l.jsx)(eO, {
                            plan: f,
                            handleClose: L,
                            code: C.code,
                            step: M,
                            setStep: v,
                            steps: eI,
                            purchaseState: O,
                            setPurchaseState: x,
                            trial: y,
                            promotion: S,
                            isDirectFulfillment: T,
                        }),
                    }),
                ],
            });
        })(),
        b = r.useCallback(async () => {
            await L();
        }, [L]);
    return (0, l.jsx)(N.b, {
        className: eN.Xn,
        isShaking: O === ec.h.PURCHASING,
        intensity: 2,
        children: (0, l.jsx)(G.Jg, { transitionState: i, size: "md", onClose: b, children: U }),
    });
}
