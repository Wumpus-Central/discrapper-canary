t.d(n, {
    _: () => N,
});
var r = t(627968),
    l = t(64700),
    i = t(284009),
    s = t.n(i),
    a = t(877624),
    o = t(311907),
    u = t(554146),
    c = t(397927),
    d = t(841702),
    p = t(367727),
    m = t(810498),
    g = t(173834),
    f = t(412260),
    E = t(380083),
    j = t(203982),
    x = t(45938),
    h = t(615396),
    T = t(937008),
    P = t(156312),
    S = t(491057),
    A = t(482132),
    b = t(877156),
    y = t(216641),
    I = t(921925),
    O = t(652215),
    v = t(49999);

function _(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}

function N(e) {
    let n,
        {
            handleClose: i,
            planGroup: N,
            onSubscriptionConfirmation: C,
            renderPurchaseConfirmation: M,
            postSuccessGuild: R,
            followupSKUInfo: k,
            continueSessionToInitialStep: w,
        } = e,
        {
            activeSubscription: D,
            paymentSources: L,
            paymentSourceId: G,
            selectedPlan: U,
            selectedSkuId: H,
            step: B,
            updatedSubscription: F,
            startingPremiumSubscriptionPlanIdRef: W,
            startingFractionalPremiumEndsAtRef: K,
            isPremiumGroupPurchase: V,
        } = (0, P.P5)(),
        {
            isGift: Y,
            giftRecipient: z,
            giftCode: Z,
            hasSentMessage: Q,
            isSendingMessage: q,
            sendGiftMessage: J,
            claimableRewards: X,
            selectedGiftingPromotionReward: $,
        } = (0, T.Pv)(),
        { confirmationFooter: ee } = (0, S.cG)(),
        en = (0, m.px)(U, Y, X),
        et = (0, m.Mq)(U),
        er = (0, d.Mv)($, !1),
        el = (0, o.bG)([f.A], () => {
            let e = f.A.getMarketingComponentByType(a.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        ei = (0, y.g)(L, G),
        es = Y && null != $ && null != er && et;
    s()(null != U, "Expected plan to selected"),
        s()(null != H, "Expected selectedSkuId"),
        s()(null != B, "Step should be set");
    let ea = l.useCallback(() => {
        i(), null == C || C();
    }, [i, C]);
    l.useEffect(() => {
        function e() {
            V &&
                null != F &&
                F.hasAnyPremiumGroup &&
                (0, c.mMO)(async () => {
                    let { default: e } = await Promise.all([t.e("73987"), t.e("6593")]).then(t.bind(t, 773486));
                    return (n) => {
                        var t, l;
                        return (0, r.jsx)(
                            e,
                            ((t = _({}, n)),
                            (l = l =
                                {
                                    subscription: F,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            t),
                        );
                    };
                });
        }
        return (
            j._.subscribe(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                j._.unsubscribe(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [V, F]),
        l.useEffect(() => {
            !Y ||
                null == z ||
                null == Z ||
                Q ||
                q ||
                (0, x.Ik)(z) ||
                J({
                    onSubscriptionConfirmation: C,
                });
        }, [J, Y, z, Z, Q, q, C]),
        l.useEffect(() => {
            en &&
                null != el &&
                (0, p.$l)(u.M.GIFTING_PROMOTION_REMINDER, (0, g.p)(), {
                    dismissAction: v.i.INDIRECT_ACTION,
                });
        }, [el, en]);
    let eo = null != w ? E.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != M) n = M(U, ea, F);
    else if (Y)
        n = (0, r.jsx)(E.fw, {
            planId: U.id,
            onClose: ea,
        });
    else {
        let e =
            W.current === U.id
                ? {
                      postSuccessGuild: R,
                  }
                : {
                      followupSKUInfo: k,
                      startingPremiumSubscriptionPlanId: W.current,
                      isDowngrade: null != D && (0, h.vT)(D, U.id, N),
                  };
        n = (0, r.jsx)(
            E.Ay,
            _(
                {
                    planId: U.id,
                    onClose: ea,
                    paymentSourceType: ei,
                    hideClose: null != ee,
                    startingFractionalPremiumEndsAt: K.current,
                    customCTAType: eo,
                },
                e,
            ),
        );
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(A.dZ, {
                children: [(0, r.jsx)(I.A, {}), n],
            }),
            null != ee && ee,
            es &&
                null != $ &&
                (0, r.jsx)(b.A, {
                    rewardSkuId: $,
                    onClose: ea,
                }),
        ],
    });
}
