n.d(t, { A: () => eO, i: () => eA });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(284009),
    s = n.n(o);
if (29845 == n.j) var u = n(132500);
if (29845 == n.j) var c = n(732159);
if (29845 == n.j) var d = n(696208);
var m = n(17928);
if (29845 == n.j) var E = n(289873);
if (29845 == n.j) var C = n(834730);
if (29845 == n.j) var p = n(97808);
if (29845 == n.j) var h = n(778712);
if (29845 == n.j) var _ = n(534514);
if (29845 == n.j) var S = n(192308);
if (29845 == n.j) var I = n(568602);
var f = n(830215),
    N = n(869038),
    A = n(891197),
    y = n(444927),
    T = n(736653),
    g = n(688810),
    P = n(277984),
    R = n(86379),
    x = n(531260),
    O = n(160946),
    v = n(606267),
    j = n(682174),
    L = n(120700),
    M = n(71804),
    U = n(319668),
    b = n(426398),
    D = n(655857),
    w = n(666646),
    k = n(818824),
    F = n(584160),
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
    eh = n(202541),
    e_ = n(818348),
    eS = n(375708),
    eI = n(636745),
    ef = n(554632);
let eN = [eu.pn.ADD_PAYMENT_STEPS, eu.pn.REVIEW, eu.pn.CONFIRM];
function eA(e, t) {
    return eS.intl.format(eS.t.A1MiZN, { months: e.intervalCount, planName: (0, ei.RH)(t.id) });
}
function ey(e) {
    let {
            paymentSources: t,
            plan: n,
            setPaymentSourceId: i,
            paymentSourceId: a,
            handlePaymentSourceAdd: o,
            trial: s,
        } = e,
        u = (0, eE.g)(t, a),
        c = (0, x.A)(),
        d = c.isFractionalPremiumActive,
        { immediateDelivery: m } = (0, k.U)(),
        C = (0, w.sw)(),
        p = r.useMemo(
            () => ({
                prependOption: 0 === Object.keys(t).length ? { label: eS.intl.string(eS.t.iA5vA1), value: null } : null,
                isTrial: !0,
            }),
            [t],
        );
    if (null == C) return (0, l.jsx)(E.y, {});
    let h = (0, l.jsx)(U.N, {
            setPaymentSourceId: i,
            paymentSourceId: a,
            location: "InboundPromotionReview",
            label: eS.intl.string(eS.t["mmDvV+"]),
            additionalPaymentSourceDropdownProps: p,
            onPaymentSourceAdd: o,
            hideCurrencySelect: !0,
        }),
        { renewalPrice: _ } = (0, em.Go)(C, n, null),
        S = eS.intl.formatToPlainString(eS.t.BQPav6, { planPremiumType: ei.Ay.getDisplayName(n.id) }),
        I = (0, l.jsx)(B._P, {
            variant: {
                type: B.I0.SubscriptionTrial,
                purchaseButtonText: S,
                totalDue: 0,
                renewalPrice: _,
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
        paymentMethodContent: h,
        legalContent: I,
    });
}
function eT(e) {
    let { user: t, code: n, className: r } = e;
    return (0, l.jsx)(C.E, {
        className: a()(r, eI.iZ),
        variant: "text-md/normal",
        children: eS.intl.format(eS.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, l.jsx)(
                    p.eu,
                    {
                        className: eI.FL,
                        size: h._3.SIZE_24,
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
function eg(e) {
    let { promotion: t, code: n, isDirectFulfillment: r } = e,
        i = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = (0, T.Ay)(),
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
                            (0, l.jsx)(_.D, {
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
            r || null == i ? null : (0, l.jsx)(eT, { className: eI.KZ, user: i, code: n }),
        ],
    });
}
function eP(e) {
    let { title: t, bodyText: n, helpCenterLink: i, showUser: a = !1, user: o, code: s, handleClose: u } = e,
        c = r.useMemo(() => ({ text: eS.intl.string(eS.t.BddRzS), onClick: u }), [u]),
        d = (0, l.jsx)(G.lo, { primaryButtonProps: c });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: eI.t4,
                children: [
                    (0, l.jsx)("img", { alt: "", src: ef, className: eI.M6 }),
                    (0, l.jsx)(_.D, { variant: "heading-lg/semibold", className: eI.DD, children: t }),
                    (0, l.jsx)(C.E, { variant: "text-md/normal", className: eI.G3, children: n }),
                    null != i
                        ? (0, l.jsx)(C.E, {
                              variant: "text-md/normal",
                              className: eI.G3,
                              children: eS.intl.format(eS.t["4uSp2y"], { helpCenterLink: i }),
                          })
                        : null,
                    a && null != o ? (0, l.jsx)(eT, { className: eI.EF, user: o, code: s }) : null,
                ],
            }),
            d,
        ],
    });
}
let eR = new Set([...F.MU]);
function ex(e) {
    let {
            plan: t,
            handleClose: n,
            code: i,
            setPurchaseState: a,
            step: o,
            setStep: p,
            steps: h,
            purchaseState: _,
            promotion: I,
            trial: f,
            isDirectFulfillment: T,
        } = e,
        P = (0, X._V)(),
        {
            paymentSources: R,
            paymentSourceId: x,
            paymentAuthenticationState: j,
            purchaseError: U,
            setPurchaseError: k,
            setIsSubmittingCurrentStep: F,
            paymentError: B,
            purchaseErrorBlockRef: K,
            setPaymentSourceId: W,
            isSubmittingCurrentStep: J,
        } = P,
        Z = (0, eE.W)(R, x),
        $ = (0, b.kc)(),
        ee = (0, v.iB)({
            checkoutPaymentSources: $,
            paymentSourceId: x,
            location: "InboundPromotionRedemptionModalBody",
        });
    r.useEffect(() => {
        en.default.track(ep.HAw.OPEN_MODAL, { type: "Promotion Redemption", promotion_id: I.id });
    }, [I]),
        r.useEffect(() => {
            (0, eo.c_)(x);
        }, [x]);
    let el = (0, m.bG)([et.A], () => et.A.getPremiumTypeSubscription()),
        { analyticsLocations: es } = (0, g.Ay)(),
        { displayCurrency: em } = (0, D.Jn)(),
        eC = (0, H.t4)((e) => e.hasAcceptedTerms),
        [ef, eN] = (0, V.YV)({
            items: [{ planId: t.id, quantity: 1 }],
            renewal: !0,
            paymentSourceId: x,
            code: i,
            subscriptionId: el?.id,
            analyticsLocations: es,
            analyticsLocation: ep.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
        });
    (0, w.F0)(ef, eN);
    let eA = (0, eo._w)(t, x, !1),
        eT = ef?.currency ?? em ?? eA[0],
        eP = r.useMemo(() => (null != x ? { paymentSourceId: x, currency: eT } : { currency: eT }), [x, eT]),
        [eR] = (0, y.A)(() => [(0, u.A)(), Date.now()]),
        ex = r.useMemo(
            () => ({
                load_id: eR,
                location: ep.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: ep.rzx.PREMIUM,
                payment_type: e_.fr[e_.VV.SUBSCRIPTION],
                subscription_plan_id: t.id,
                sku_id: t.skuId,
                checkout_flow: L.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [eR, t.id, t.skuId],
        );
    r.useEffect(() => {
        o === eu.pn.PROMOTION_INFO && (0, Y.b)(ex);
    }, [ex, o]);
    let [eO, ev] = r.useState(!1);
    (0, eu.zT)(o, _, a), (0, z.QR)(j);
    let ej = r.useCallback(
            (e) => {
                en.default.track(ep.HAw.PAYMENT_FLOW_STEP, { ...ex, from_step: o, to_step: e }),
                    p(e),
                    null != U && k(null);
            },
            [ex, o, p, U, k],
        ),
        eL = r.useCallback(
            (e, t) => {
                a(e), k(t);
            },
            [a, k],
        ),
        eM = r.useCallback(async () => {
            s()(null != Z, "Cannot purchase without a payment source"), F(!0), a(ec.h.PURCHASING);
            try {
                await N.A.redeemGiftCode({ code: i, options: { paymentSource: Z } }),
                    a(ec.h.COMPLETED),
                    ej(eu.pn.CONFIRM),
                    en.default.track(ep.HAw.PAYMENT_FLOW_COMPLETED, { ...ex });
            } catch (e) {
                eL(ec.h.FAIL, e),
                    en.default.track(ep.HAw.PAYMENT_FLOW_FAILED, {
                        ...ex,
                        payment_error_code: e?.code,
                        payment_source_id: Z.id,
                    });
            } finally {
                F(!1);
            }
        }, [ex, i, eL, ej, Z, F, a]),
        eU = r.useCallback(async () => {
            null == el || eO
                ? await eM()
                : (0, S.openModal)((e) => {
                      let n;
                      if (null == ef) n = (0, l.jsx)(E.y, { className: eI.wG });
                      else {
                          let e = (0, ei.y8)(t.id, !1, !1, eP);
                          n = (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(C.E, {
                                      className: eI.ex,
                                      variant: "text-md/normal",
                                      children: eS.intl.format(eS.t.DLsu0k, {
                                          lineItemsHook: function (e, t) {
                                              return (0, l.jsx)(
                                                  "ul",
                                                  {
                                                      children: el.items.map((e) => {
                                                          let t = eh.hd[e.planId],
                                                              n = eS.intl.formatToPlainString(eS.t.G0EnAP, {
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
                                          newPlanName: eh.hd[t.id].name,
                                      }),
                                  }),
                                  (0, l.jsx)(C.E, {
                                      className: eI.ex,
                                      variant: "text-sm/normal",
                                      children: eS.intl.format(eS.t.KHvyu5, {
                                          newPlanName: eh.hd[t.id].name,
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
                              ev(!0), await eM();
                          },
                          title: eS.intl.string(eS.t.MaZ28z),
                          cancelText: eS.intl.string(eS.t["ETE/oC"]),
                          confirmText: eS.intl.string(eS.t["wfx/Hp"]),
                          ...e,
                          variant: "primary",
                          children: n,
                      });
                  });
        }, [el, eO, ev, eM, ef, t, I.inboundHelpCenterLink, f.intervalCount, eP]);
    function eb(e) {
        let { body: t, footer: n } = e;
        return (0, l.jsx)(q.A, {
            steps: h,
            currentStep: o,
            paymentError: U ?? B ?? eN,
            body: t,
            footer: n,
            purchaseErrorBlockRef: K,
            hideBreadcrumbs: !0,
            shouldUseManaModal: !0,
        });
    }
    (0, z.b)(o, j, p, a, !0, eM);
    let eD = (0, X.Y)({
        paymentModalArgs: P,
        initialStep: eu.pn.PAYMENT_TYPE,
        prependSteps: [eu.pn.PROMOTION_INFO],
        appendSteps: [eu.pn.REVIEW, eu.pn.CONFIRM],
        breadcrumpSteps: h,
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
            return eb({
                body: (0, l.jsx)(eg, { promotion: I, code: i, isDirectFulfillment: T }),
                footer: (0, l.jsx)(ed.Ay, {
                    primaryCTA: ed.Ay.CTAType.CONTINUE,
                    primaryText: eS.intl.string(eS.t.PDTjLN),
                    onPrimary: () => ej(eu.pn.REVIEW),
                    primaryDisabled: null != eN,
                }),
            });
        case eu.pn.ADD_PAYMENT_STEPS:
            return eD;
        case eu.pn.AWAITING_AUTHENTICATION:
            return (0, l.jsx)(A.p, { steps: h, currentStep: o, paymentError: P.paymentError });
        case eu.pn.REVIEW: {
            let e = (0, eE.W)(R, x),
                n = null;
            null == e ? (n = eS.intl.string(eS.t.L7jbQV)) : eC || (n = eS.intl.string(eS.t.XdvBLS));
            let r = {
                primaryCTA: ed.Ay.CTAType.PURCHASE,
                primaryType: "submit",
                primaryText: eS.intl.formatToPlainString(eS.t.BQPav6, { planPremiumType: ei.Ay.getDisplayName(t.id) }),
                primarySubmitting: J,
                primaryTooltip: n,
                primaryDisabled: null == e || !e.canRedeemTrial() || ee || !eC,
                onPrimary: function () {
                    if (null != e && eC) return eU();
                },
                onBack: () => ej(eu.pn.PROMOTION_INFO),
            };
            return eb({
                body: (0, l.jsx)(ey, {
                    paymentSources: R,
                    plan: t,
                    paymentSourceId: x,
                    setPaymentSourceId: W,
                    handlePaymentSourceAdd: () => ej(eu.pn.ADD_PAYMENT_STEPS),
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
            let ew = (0, eE.g)(R, x);
            return eb({
                body: (0, l.jsx)(Q.Ay, { hideClose: !0, planId: t.id, onClose: n, paymentSourceType: ew }),
                footer: T
                    ? (0, l.jsx)(d.H, {
                          actions: [{ text: eS.intl.string(eS.t.UQvCf7), variant: "primary", onClick: n, size: "md" }],
                      })
                    : null,
            });
        default:
            throw new M.v({ message: `Unexpected step: ${o}`, extraSentryInformation: { step: o } });
    }
}
function eO(e) {
    let { code: t, onClose: n, transitionState: i } = e,
        a = (0, R.Hp)(),
        o = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        u = (0, m.bG)([et.A], () => et.A.getMostRecentPremiumTypeSubscription()),
        c = (0, m.bG)([et.A], () => et.A.hasFetchedMostRecentPremiumTypeSubscription()),
        [d, C] = r.useState(!1),
        [p, h] = r.useState(null),
        [_, S] = r.useState(null),
        [f, N] = r.useState(!1);
    r.useEffect(() => {
        d ||
            (0, el.GM)(t, !1, !0)
                .then((e) => {
                    let t = $.A.createFromServer(e);
                    h(t), C(!0), N(t.promotion?.promotionType === W.pt.THIRD_PARTY_DIRECT_FULFILLMENT);
                })
                .catch((e) => {
                    S(e), C(!0);
                }),
            c || (0, P.I8)();
    }, [t, c, d]);
    let A = p?.subscriptionPlan,
        y = p?.promotion,
        T = p?.subscriptionTrial,
        g = (() => {
            if (null != o && !o.verified)
                return {
                    title: eS.intl.string(eS.t.ARIsMA),
                    body: eS.intl.string(eS.t.oDWkjN),
                    showUser: !0,
                    errorCode: eh.JR.USER_NOT_VERIFIED,
                };
            if (null != _ && _.code === ep.t02.INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED)
                return {
                    title: eS.intl.string(eS.t.BHxy59),
                    body: eS.intl.string(eS.t["1wokFq"]),
                    errorCode: eh.JR.PREVIOUS_SUBSCRIBER,
                };
            if (null == p)
                return {
                    title: eS.intl.string(eS.t.ARIsMA),
                    body:
                        null != _ && _.code === ep.t02.INVALID_GIFT_REDEMPTION_INCORRECT_USER
                            ? eS.intl.string(eS.t.S8TNKh)
                            : eS.intl.string(eS.t["1AceQR"]),
                    errorCode: eh.JR.NO_CODE_BODY,
                };
            if (null != _ || null == y || null == T || null == A)
                return {
                    title: eS.intl.string(eS.t.ARIsMA),
                    body: eS.intl.string(eS.t["3u+6q7"]),
                    errorCode: eh.JR.NO_PROMOTION,
                };
            if (p.isClaimed)
                return {
                    title: eS.intl.string(eS.t.ARIsMA),
                    body: eS.intl.string(eS.t.u9IQuM),
                    errorCode: eh.JR.CODE_CLAIMED,
                };
            if (null == u) return null;
            let e = (0, ei.EL)(u)?.planId;
            return null != e && u.status === ep.Dmq.ACTIVE && ei.Ay.getPremiumType(e) === eh.PremiumTypes.TIER_2
                ? {
                      title: eS.intl.string(eS.t.BHxy59),
                      body: eS.intl.formatToPlainString(eS.t.wpwuoV, {
                          months: T.intervalCount,
                          planName: (0, ei.RH)(A.id),
                      }),
                      errorCode: eh.JR.EXISTING_SUBSCRIBER,
                  }
                : null;
        })();
    r.useEffect(() => {
        c &&
            d &&
            en.default.track(ep.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == g && !a,
                error_code: null != g ? g.errorCode : a ? eh.JR.BLOCKED_PAYMENT : null,
                promotion_id: p?.promotion?.id,
            });
    }, [c, d, g, a, p]);
    let [x, O] = r.useState(ec.h.WAITING),
        [v, L] = r.useState(eu.pn.PROMOTION_INFO),
        M = r.useCallback(() => {
            null != n && n(x === ec.h.COMPLETED);
        }, [n, x]),
        U = (() => {
            if (!d || !c) return (0, l.jsx)(E.y, { className: eI.wG });
            if (null != g)
                return (0, l.jsx)(eP, {
                    title: g.title,
                    bodyText: g.body,
                    helpCenterLink: y?.inboundHelpCenterLink ?? "",
                    showUser: g.showUser,
                    handleClose: M,
                    user: o,
                    code: t,
                });
            if ((s()(null != A && null != p && null != T && null != y, "Missing required objects"), a))
                return (0, l.jsx)(j.oO, {});
            let e = (0, F.uO)({ skuId: A.skuId, headerBadgePreset: v === eu.pn.REVIEW ? "trial" : void 0, step: v }),
                n = eR.has(v)
                    ? (0, l.jsx)(G.s3, { ...e })
                    : (0, l.jsx)(Z.A, {
                          enablePremiumBrandRefresh: !0,
                          forceBrandRefreshHeader: !0,
                          premiumType: A.premiumSubscriptionType ?? eh.PremiumTypes.TIER_2,
                          className: eI.X9,
                          currentStep: v,
                          purchaseState: x,
                          hideCloseButton: !0,
                          onClose: M,
                      });
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    n,
                    (0, l.jsx)("form", {
                        className: eI.FG,
                        onSubmit: (e) => e.preventDefault(),
                        children: (0, l.jsx)(ex, {
                            plan: A,
                            handleClose: M,
                            code: p.code,
                            step: v,
                            setStep: L,
                            steps: eN,
                            purchaseState: x,
                            setPurchaseState: O,
                            trial: T,
                            promotion: y,
                            isDirectFulfillment: f,
                        }),
                    }),
                ],
            });
        })(),
        b = r.useCallback(async () => {
            await M();
        }, [M]);
    return (0, l.jsx)(I.b, {
        className: eI.Xn,
        isShaking: x === ec.h.PURCHASING,
        intensity: 2,
        children: (0, l.jsx)(G.Jg, { transitionState: i, size: "md", onClose: b, children: U }),
    });
}
