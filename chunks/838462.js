n.d(t, {
    _: () => A,
});
var l = n(627968),
    r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(554146),
    o = n(397927),
    u = n(841702),
    c = n(367727),
    d = n(552736),
    p = n(810498),
    m = n(173834),
    f = n(380083),
    g = n(203982),
    j = n(45938),
    y = n(615396),
    h = n(937008),
    v = n(156312),
    b = n(491057),
    O = n(482132),
    x = n(877156),
    P = n(216641),
    S = n(921925),
    E = n(652215),
    T = n(49999);

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function A(e) {
    let t,
        {
            handleClose: i,
            planGroup: A,
            onSubscriptionConfirmation: k,
            renderPurchaseConfirmation: w,
            postSuccessGuild: _,
            followupSKUInfo: C,
            continueSessionToInitialStep: M,
        } = e,
        {
            activeSubscription: N,
            paymentSources: R,
            paymentSourceId: D,
            selectedPlan: L,
            selectedSkuId: U,
            step: G,
            updatedSubscription: H,
            startingPremiumSubscriptionPlanIdRef: B,
            startingFractionalPremiumEndsAtRef: F,
            isPremiumGroupPurchase: W,
        } = (0, v.P5)(),
        {
            isGift: z,
            giftRecipient: V,
            giftCode: K,
            hasSentMessage: Y,
            isSendingMessage: Z,
            sendGiftMessage: Q,
            claimableRewards: q,
            selectedGiftingPromotionReward: J,
        } = (0, h.Pv)(),
        { confirmationFooter: X } = (0, b.cG)(),
        $ = (0, p.px)(L, z, q),
        ee = (0, d.A)(),
        et = (0, p.Mq)(L),
        en = (0, u.Mv)(null == J ? void 0 : J.skuId),
        el = (0, P.g)(R, D),
        er = z && null != J && et;
    s()(null != L, "Expected plan to selected"),
        s()(null != U, "Expected selectedSkuId"),
        s()(null != G, "Step should be set");
    let ei = r.useCallback(() => {
        i(), null == k || k();
    }, [i, k]);
    r.useEffect(() => {
        function e() {
            W &&
                null != H &&
                H.hasAnyPremiumGroup &&
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("73987").then(n.bind(n, 773486));
                    return (t) => {
                        var n, r;
                        return (0, l.jsx)(
                            e,
                            ((n = I({}, t)),
                            (r = r =
                                {
                                    subscription: H,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var l = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, l);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n),
                        );
                    };
                });
        }
        return (
            g._.subscribe(E.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                g._.unsubscribe(E.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [W, H]),
        r.useEffect(() => {
            !z ||
                null == V ||
                null == K ||
                Y ||
                Z ||
                (0, j.Ik)(V) ||
                Q({
                    onSubscriptionConfirmation: k,
                });
        }, [Q, z, V, K, Y, Z, k]),
        r.useEffect(() => {
            null != ee &&
                null != ee.reminderNotice &&
                $ &&
                (0, c.$l)(a.M.GIFTING_PROMOTION_REMINDER, (0, m.p)(), {
                    dismissAction: T.i.INDIRECT_ACTION,
                });
        }, [ee, $]);
    let es = null != M ? f.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != w) t = w(L, ei, H);
    else if (z)
        t = (0, l.jsx)(f.fw, {
            planId: L.id,
            onClose: ei,
        });
    else {
        let e =
            B.current === L.id
                ? {
                      postSuccessGuild: _,
                  }
                : {
                      followupSKUInfo: C,
                      startingPremiumSubscriptionPlanId: B.current,
                      isDowngrade: null != N && (0, y.vT)(N, L.id, A),
                  };
        t = (0, l.jsx)(
            f.Ay,
            I(
                {
                    planId: L.id,
                    onClose: ei,
                    paymentSourceType: el,
                    hideClose: null != X,
                    startingFractionalPremiumEndsAt: F.current,
                    customCTAType: es,
                },
                e,
            ),
        );
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(O.dZ, {
                children: [(0, l.jsx)(S.A, {}), t],
            }),
            null != X && X,
            er &&
                null != en &&
                (0, l.jsx)(x.A, {
                    reward: J,
                    purchase: en,
                    onClose: ei,
                }),
        ],
    });
}
