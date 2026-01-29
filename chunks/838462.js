t.d(n, {
    _: () => N,
});
var l = t(627968),
    r = t(64700),
    i = t(284009),
    s = t.n(i),
    a = t(735438),
    o = t(877624),
    u = t(311907),
    c = t(554146),
    d = t(397927),
    p = t(841702),
    m = t(367727),
    g = t(810498),
    E = t(173834),
    f = t(412260),
    j = t(380083),
    h = t(203982),
    x = t(45938),
    P = t(615396),
    T = t(937008),
    S = t(156312),
    A = t(491057),
    O = t(482132),
    b = t(877156),
    y = t(216641),
    I = t(921925),
    _ = t(652215),
    v = t(49999);

function C(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}

function N(e) {
    let n,
        {
            handleClose: i,
            planGroup: N,
            onSubscriptionConfirmation: M,
            renderPurchaseConfirmation: R,
            postSuccessGuild: k,
            followupSKUInfo: w,
            continueSessionToInitialStep: D,
        } = e,
        {
            activeSubscription: L,
            paymentSources: G,
            paymentSourceId: U,
            selectedPlan: H,
            selectedSkuId: F,
            step: B,
            updatedSubscription: W,
            startingPremiumSubscriptionPlanIdRef: K,
            startingFractionalPremiumEndsAtRef: V,
            isPremiumGroupPurchase: Y,
        } = (0, S.P5)(),
        {
            isGift: z,
            giftRecipient: q,
            giftCode: Z,
            hasSentMessage: Q,
            isSendingMessage: J,
            sendGiftMessage: X,
            claimableRewards: $,
            selectedGiftingPromotionReward: ee,
        } = (0, T.Pv)(),
        { confirmationFooter: en } = (0, A.cG)(),
        et = (0, g.px)(H, z, $),
        el = (0, g.Mq)(H),
        er = (0, p.Mv)(ee, !1),
        ei = (0, u.bG)([f.A], () => {
            let e = f.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        es = (0, y.g)(G, U),
        ea = z && null != ee && null != er && el;
    s()(null != H, "Expected plan to selected"),
        s()(null != F, "Expected selectedSkuId"),
        s()(null != B, "Step should be set");
    let eo = r.useCallback(() => {
        i(), null == M || M();
    }, [i, M]);
    r.useEffect(() => {
        function e() {
            if (Y && null != W && W.hasAnyPremiumGroup) {
                let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
                (0, d.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([t.e("73987"), t.e("6593")]).then(t.bind(t, 773486));
                        return (n) => {
                            var t, r;
                            return (0, l.jsx)(
                                e,
                                ((t = C({}, n)),
                                (r = r =
                                    {
                                        subscription: W,
                                        onClose: async () => {
                                            h._.dispatch(_.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await n.onClose();
                                        },
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                    : (function (e, n) {
                                          var t = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              t.push.apply(t, l);
                                          }
                                          return t;
                                      })(Object(r)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                      }),
                                t),
                            );
                        };
                    },
                    {
                        onCloseRequest: () => {
                            h._.dispatch(_.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, d.OoC)(e);
                        },
                        modalKey: e,
                    },
                );
            }
        }
        return (
            h._.subscribe(_.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                h._.unsubscribe(_.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [Y, W]),
        r.useEffect(() => {
            !z ||
                null == q ||
                null == Z ||
                Q ||
                J ||
                (0, x.Ik)(q) ||
                X({
                    onSubscriptionConfirmation: M,
                });
        }, [X, z, q, Z, Q, J, M]),
        r.useEffect(() => {
            et &&
                null != ei &&
                (0, m.$l)(c.M.GIFTING_PROMOTION_REMINDER, (0, E.p)(), {
                    dismissAction: v.i.INDIRECT_ACTION,
                });
        }, [ei, et]);
    let eu = null != D ? j.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != R) n = R(H, eo, W);
    else if (z)
        n = (0, l.jsx)(j.fw, {
            planId: H.id,
            onClose: eo,
        });
    else {
        let e =
            K.current === H.id
                ? {
                      postSuccessGuild: k,
                  }
                : {
                      followupSKUInfo: w,
                      startingPremiumSubscriptionPlanId: K.current,
                      isDowngrade: null != L && (0, P.vT)(L, H.id, N),
                  };
        n = (0, l.jsx)(
            j.Ay,
            C(
                {
                    planId: H.id,
                    onClose: eo,
                    paymentSourceType: es,
                    hideClose: null != en,
                    startingFractionalPremiumEndsAt: V.current,
                    customCTAType: eu,
                },
                e,
            ),
        );
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(O.dZ, {
                children: [(0, l.jsx)(I.A, {}), n],
            }),
            null != en && en,
            ea &&
                null != ee &&
                (0, l.jsx)(b.A, {
                    rewardSkuId: ee,
                    onClose: eo,
                }),
        ],
    });
}
