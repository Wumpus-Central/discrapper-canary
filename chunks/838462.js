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
    p = t(964486),
    m = t(841702),
    E = t(367727),
    g = t(810498),
    f = t(173834),
    P = t(412260),
    j = t(380083),
    h = t(954571),
    _ = t(203982),
    x = t(45938),
    T = t(615396),
    A = t(937008),
    O = t(156312),
    S = t(491057),
    I = t(482132),
    b = t(877156),
    y = t(216641),
    v = t(921925),
    R = t(652215),
    C = t(49999);

function M(e) {
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
            onSubscriptionConfirmation: k,
            renderPurchaseConfirmation: w,
            postSuccessGuild: D,
            followupSKUInfo: U,
            continueSessionToInitialStep: L,
        } = e,
        {
            activeSubscription: G,
            paymentSources: H,
            paymentSourceId: F,
            selectedPlan: B,
            selectedSkuId: W,
            step: K,
            updatedSubscription: V,
            startingPremiumSubscriptionPlanIdRef: Y,
            startingFractionalPremiumEndsAtRef: z,
            isPremiumGroupPurchase: q,
        } = (0, O.P5)(),
        {
            isGift: Z,
            giftRecipient: Q,
            giftCode: J,
            hasSentMessage: X,
            isSendingMessage: $,
            sendGiftMessage: ee,
            claimableRewards: en,
            selectedGiftingPromotionReward: et,
        } = (0, A.Pv)(),
        { confirmationFooter: el } = (0, S.cG)(),
        er = (0, g.px)(B, Z, en),
        ei = (0, g.Mq)(B),
        es = (0, m.Mv)(et, !1),
        ea = (0, u.bG)([P.A], () => {
            let e = P.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        eo = (0, y.g)(H, F),
        eu = Z && null != et && null != es && ei;
    s()(null != B, "Expected plan to selected"),
        s()(null != W, "Expected selectedSkuId"),
        s()(null != K, "Step should be set");
    let ec = r.useCallback(() => {
        i(), null == k || k();
    }, [i, k]);
    (0, p.Ay)(() => {
        if (q) {
            var e;
            h.default.track(R.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != V,
                has_any_premium_group: null != (e = null == V ? void 0 : V.hasAnyPremiumGroup) && e,
                subscription_id: null == V ? void 0 : V.id,
            });
        }
    }),
        r.useEffect(() => {
            function e() {
                if (q)
                    if (null != V && V.hasAnyPremiumGroup) {
                        h.default.track(R.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                            subscription_id: V.id,
                        });
                        let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
                        (0, d.mMO)(
                            async () => {
                                let { default: e } = await Promise.all([t.e("73987"), t.e("6593")]).then(
                                    t.bind(t, 773486),
                                );
                                return (n) => {
                                    var t, r;
                                    return (0, l.jsx)(
                                        e,
                                        ((t = M({}, n)),
                                        (r = r =
                                            {
                                                subscription: V,
                                                isFromPurchaseFlow: !0,
                                                onClose: async () => {
                                                    _._.dispatch(R.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
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
                                    _._.dispatch(R.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, d.OoC)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else {
                        var e;
                        h.default.track(R.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != V,
                            has_any_premium_group: null != (e = null == V ? void 0 : V.hasAnyPremiumGroup) && e,
                        }),
                            _._.dispatch(R.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
                    }
            }
            return (
                _._.subscribe(R.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    _._.unsubscribe(R.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [q, V]),
        r.useEffect(() => {
            !Z ||
                null == Q ||
                null == J ||
                X ||
                $ ||
                (0, x.Ik)(Q) ||
                ee({
                    onSubscriptionConfirmation: k,
                });
        }, [ee, Z, Q, J, X, $, k]),
        r.useEffect(() => {
            er &&
                null != ea &&
                (0, E.$l)(c.M.GIFTING_PROMOTION_REMINDER, (0, f.p)(), {
                    dismissAction: C.i.INDIRECT_ACTION,
                });
        }, [ea, er]);
    let ed = null != L ? j.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != w) n = w(B, ec, V);
    else if (Z)
        n = (0, l.jsx)(j.fw, {
            planId: B.id,
            onClose: ec,
        });
    else {
        let e =
            Y.current === B.id
                ? {
                      postSuccessGuild: D,
                  }
                : {
                      followupSKUInfo: U,
                      startingPremiumSubscriptionPlanId: Y.current,
                      isDowngrade: null != G && (0, T.vT)(G, B.id, N),
                  };
        n = (0, l.jsx)(
            j.Ay,
            M(
                {
                    planId: B.id,
                    onClose: ec,
                    paymentSourceType: eo,
                    hideClose: null != el,
                    startingFractionalPremiumEndsAt: z.current,
                    customCTAType: ed,
                },
                e,
            ),
        );
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(I.dZ, {
                children: [(0, l.jsx)(v.A, {}), n],
            }),
            null != el && el,
            eu &&
                null != et &&
                (0, l.jsx)(b.A, {
                    rewardSkuId: et,
                    onClose: ec,
                }),
        ],
    });
}
