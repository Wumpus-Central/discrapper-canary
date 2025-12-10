n.d(t, {
    MM: () => er,
    Yn: () => eo,
    ZP: () => es,
    eS: () => ea,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(873546),
    f = n(442837),
    p = n(704215),
    _ = n(692547),
    m = n(481060),
    h = n(570140),
    g = n(100527),
    E = n(906732),
    b = n(17894),
    y = n(975298),
    O = n(600164),
    v = n(266454),
    S = n(925329),
    I = n(963249),
    T = n(313789),
    C = n(518596),
    A = n(301766),
    N = n(594174),
    P = n(626135),
    R = n(63063),
    D = n(74538),
    w = n(212895),
    x = n(374649),
    L = n(140465),
    j = n(160913),
    M = n(331972),
    k = n(146761),
    U = n(757861),
    G = n(385251),
    Z = n(987997),
    B = n(393411),
    F = n(908951),
    V = n(592889),
    H = n(975772),
    Y = n(474936),
    W = n(981631),
    K = n(362786),
    z = n(921944),
    q = n(388032),
    Q = n(903163);
let X = "app";
function J(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: a,
            fromStandaloneBillingPage: s = !0,
            className: c,
        } = e,
        u = (0, f.e7)([N.default], () => {
            let e = N.default.getCurrentUser();
            return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        });
    if (0 === (0, D.uV)(n.additionalPlans)) return null;
    let { status: p } = n,
        _ = (0, D.v6)(n);
    if (_) t = Q.guildBoostingSubscriptionRowCanceled;
    else
        switch (p) {
            case W.O0b.PAST_DUE:
            case W.O0b.ACCOUNT_HOLD:
            case W.O0b.BILLING_RETRY:
                t = Q.guildBoostingSubscriptionRowFailedPayment;
                break;
            case W.O0b.PAUSE_PENDING:
            case W.O0b.PAUSED:
                t =
                    n.pauseReason !== K.Id.FRACTIONAL_PREMIUM
                        ? Q.guildBoostingSubscriptionRowPaused
                        : Q.guildBoostingSubscriptionRowActive;
                break;
            default:
                t = Q.guildBoostingSubscriptionRowActive;
        }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(t, c),
                children: [
                    (0, r.jsx)("div", { className: Q.guildBoostingSubscriptionRowBackground }),
                    (0, r.jsx)("div", { className: Q.guildBoostingImage }),
                    (0, r.jsxs)("div", {
                        className: Q.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, r.jsx)("div", { className: o()(Q.guildBoostingWordmark, { [Q.canceled]: _ }) }),
                            (0, r.jsx)("div", {
                                children: (0, D.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: i,
                                    user: u,
                                    fractionalPremiumInfo: a,
                                }),
                            }),
                        ],
                    }),
                    s &&
                        (0, r.jsx)(Z.Z, {
                            onClick: () =>
                                (0, C.openUserSettings)(T.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                    section: W.oAB.GUILD_BOOSTING,
                                }),
                            text: q.intl.string(q.t["NQ5g/U"]),
                        }),
                ],
            }),
            !s &&
                (0, r.jsx)(m.Text, {
                    className: Q.boostingDesktopAppBlurb,
                    variant: "text-sm/normal",
                    children: q.intl.format(d.tq ? q.t.uxYBEa : q.t.k6haR9, { openAppHook: () => (0, b.Z)(X) }),
                }),
        ],
    });
}
function $() {
    return (
        i.useEffect(() => {
            P.default.track(W.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: Q.paymentBanner,
            children: [
                (0, r.jsx)(m.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Q.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(m.Text, {
                    className: Q.paymentBannerText,
                    variant: "text-sm/normal",
                    children: q.intl.string(q.t.xFHEMa),
                }),
            ],
        })
    );
}
function ee() {
    return (
        i.useEffect(() => {
            P.default.track(W.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: Q.paymentBanner,
            children: [
                (0, r.jsx)(m.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Q.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(m.Text, {
                    className: Q.paymentBannerText,
                    variant: "text-sm/normal",
                    children: q.intl.string(q.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function et(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: a } = e,
        { analyticsLocations: o } = (0, E.ZP)(g.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            P.default.track(W.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: Q.paymentBanner,
            children: [
                (0, r.jsx)(m.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Q.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(m.Text, {
                    className: Q.paymentBannerText,
                    variant: "text-sm/normal",
                    children: q.intl.format(q.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, I.Z)({
                                initialPlanId: n.planIdFromItems,
                                openInvoiceId: a,
                                analyticsLocations: o,
                            });
                        },
                    }),
                }),
            ],
        })
    );
}
function en(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: i, className: a, fractionalPremiumInfo: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(Q.billingInformation, a),
        children: [
            (0, r.jsx)(m.Heading, {
                variant: "heading-md/semibold",
                className: Q.detailBlockHeader,
                children: q.intl.string(q.t.KXQjfc),
            }),
            (0, r.jsx)("div", { children: D.ZP.getBillingInformationString(t, n, i, !1, s) }),
        ],
    });
}
function er() {
    let e = (0, f.e7)([N.default], () => N.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(m.Heading, {
                variant: "heading-lg/semibold",
                className: Q.sectionTitle,
                children: q.intl.string(q.t["/gs+Pz"]),
            }),
            (0, r.jsx)("p", {
                className: Q.sectionDescription,
                children: q.intl.string(q.t.D8UpUo),
            }),
            !t &&
                (0, r.jsx)(m.Zbd, {
                    className: Q.noItemsCard,
                    type: m.Zbd.Types.CUSTOM,
                    children: (0, r.jsxs)(O.Z, {
                        align: O.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(S.Z, {
                                game: null,
                                size: S.A.SMALL,
                                className: Q.noItemsIcon,
                            }),
                            (0, r.jsx)("span", {
                                className: Q.cardText,
                                children: q.intl.string(q.t.xCRgr1),
                            }),
                        ],
                    }),
                }),
            t && (0, r.jsx)(k.d, { currentUser: e }),
        ],
    });
}
function ei(e) {
    let {
            subscription: t,
            analyticsLocation: n,
            paymentSource: i,
            busy: a,
            fromStandaloneBillingPage: s,
            showInvalidPaymentMethod: l,
            showNoPaymentMethod: c,
            fetchedCurrentInvoicePreview: u,
            fetchedRenewalInvoicePreview: d,
            fetchedOpenInvoice: f,
            isPremiumGroup: p,
        } = e,
        { analyticsLocations: _ } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS),
        h =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: _,
                      analyticsLocation: n,
                  },
        [b] = (0, x.ED)(h);
    b = null != u ? u : b;
    let O =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: _,
                      analyticsLocation: n,
                  },
        [v] = (0, x.ED)(O);
    v = null != d ? d : v;
    let S = (0, y.Z)(),
        I = (0, M.$)(),
        T = (0, L.lr)(),
        C = D.ZP.isBaseSubscriptionCanceled(t),
        A = (0, U.P)(t, i);
    if (null == b || null == v) return (0, r.jsx)(m.$jN, {});
    let N = A ? (0, L.Yi)(v) : null,
        P = null != N || (null != T && (T.discountId === Y.dT || T.discountId === Y.dB)),
        R =
            A && ((C && null != I) || (!C && P))
                ? (0, r.jsx)(G.Z, {
                      subscription: t,
                      invoicePreview: v,
                      paymentSource: i,
                      discountOffer: I,
                      renewalChurnDiscountInfo: N,
                      discountInfo: T,
                      isLoading: a,
                      analyticsLocation: n,
                  })
                : (0, r.jsx)(B.Z, {
                      subscription: t,
                      currentInvoicePreview: b,
                      renewalInvoicePreview: v,
                      paymentSource: i,
                      busy: a,
                      analyticsLocation: n,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: Q.subscriptionRows,
                children: [
                    !p && R,
                    (0, r.jsx)(J, {
                        subscription: t,
                        renewalInvoicePreview: b,
                        fromStandaloneBillingPage: s,
                        className: Q.guildSubscriptionRow,
                        fractionalPremiumInfo: S,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(m.C3N, {
                    label: q.intl.string(q.t.Sb6wI1),
                    children: (0, r.jsxs)("div", {
                        className: Q.details,
                        children: [
                            (0, r.jsx)(en, {
                                subscription: t,
                                renewalInvoicePreview: v,
                                className: Q.detailsBlock,
                                fractionalPremiumInfo: S,
                                openInvoice: f,
                            }),
                            (0, r.jsx)("div", {
                                className: o()(Q.detailsBlock, { [Q.redBorder]: l }),
                                children: (0, r.jsx)(m.gNt, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? q.intl.formatToPlainString(q.t["rTk9v/"], {
                                                  paymentGatewayName: W.Vzj[t.paymentGateway],
                                              })
                                            : q.intl.string(q.t.iRzXKd),
                                    children: (0, r.jsx)(F.Z, {
                                        subscription: t,
                                        onPaymentSourceAdded: w.i1,
                                        highlightAddPaymentMethodButton: c || l,
                                        analyticsLocation: n,
                                        currentInvoicePreview: b,
                                        dropdownClassName: Q.paymentDropdown,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
let ea = new Set([W.O0b.ACTIVE, W.O0b.PAST_DUE, W.O0b.CANCELED, W.O0b.PAUSE_PENDING, W.O0b.PAUSED]);
function eo() {
    return (
        i.useEffect(() => {
            P.default.track(W.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, r.jsxs)("div", {
            className: Q.duplicateSubscriptionsBanner,
            children: [
                (0, r.jsx)(m.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(m.Text, {
                    className: Q.duplicateSubscriptionsBannerText,
                    variant: "text-sm/normal",
                    children: q.intl.format(q.t["6eXiiC"], { helpCenterLink: R.Z.getArticleURL(W.BhN.NITRO) }),
                }),
            ],
        })
    );
}
function es(e) {
    var t;
    let n,
        {
            subscription: a,
            subscriptions: o,
            paymentSource: s,
            busy: l,
            fromStandaloneBillingPage: c = !0,
            analyticsLocation: d,
            shouldRefetchInvoicesOnSubscriptionUpdate: b,
        } = e;
    null != o && null != o[0] && (a = o[0]);
    let y = (0, f.e7)([N.default], () => N.default.getCurrentUser()),
        { analyticsLocations: O } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS),
        S = (0, M.$)(),
        I = null != o ? o.slice(1) : [],
        [T, C] = i.useState(0);
    i.useEffect(() => {
        if (!b) return;
        let e = (e) => {
            e.subscription.id === a.id && C((e) => e + 1);
        };
        return (
            h.Z.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                h.Z.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [a.id, b]);
    let [P] = (0, x.ED)({
            subscriptionId: a.id,
            renewal: !0,
            analyticsLocations: O,
            analyticsLocation: d,
            fetchKey: T,
        }),
        [D] = (0, x.ED)({
            subscriptionId: a.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: O,
            analyticsLocation: d,
            userDiscountOfferId: null == S ? void 0 : S.id,
            fetchKey: T,
        }),
        w = (0, H.x)(),
        L = null == s ? void 0 : s.invalid,
        U = (0, f.e7)([N.default], () => {
            var e;
            return null == (e = N.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        G = u()(a.currentPeriodEnd),
        Z = null != a.paymentSourceId,
        B = null != (t = null == D ? void 0 : D.total) ? t : 0,
        F =
            !Z &&
            B > 0 &&
            (7 >= G.diff(u()(), "days") || a.status === W.O0b.PAST_DUE) &&
            !U &&
            !a.isPurchasedExternally,
        Y = L && a.status === W.O0b.PAST_DUE && !U && !a.isPurchasedExternally,
        K = (0, j.U)(),
        X = !U && K,
        J = (null == a ? void 0 : a.status) === W.O0b.PAST_DUE,
        en = J ? u()().diff(u()(a.currentPeriodStart), "days") : 0,
        er = null != y && y.isPremiumGroupPrimary(),
        [ea] = (0, x.Ox)({
            subscriptionId: a.id,
            preventFetch: !(X || J),
        });
    return null == P || null == D
        ? (0, r.jsx)(m.$jN, {})
        : (null != a.renewalMutations &&
              ((a.renewalMutations.planId !== a.planId && !(0, A.Q0)(a.renewalMutations.planId)) ||
                  a.hasExternalPlanChange) &&
              (n = (0, r.jsx)(V.Z, {
                  subscription: a,
                  renewalMutations: a.renewalMutations,
                  className: Q.renewalMutationNotice,
                  analyticsLocation: d,
              })),
          (0, r.jsxs)(m.C3N, {
              label: q.intl.string(q.t["/gs+Pz"]),
              description: q.intl.string(q.t.D8UpUo),
              children: [
                  F ? (0, r.jsx)($, {}) : null,
                  Y ? (0, r.jsx)(ee, {}) : null,
                  X && null != ea
                      ? (0, r.jsx)(et, {
                            daysPastDue: en,
                            subscription: a,
                            openInvoiceId: ea.id,
                        })
                      : null,
                  er &&
                      (0, r.jsx)(k.L, {
                          subscription: a,
                          analyticsLocations: O,
                      }),
                  n,
                  w &&
                      (0, r.jsx)(m.Wn, {
                          messageType: m.QYI.INFO,
                          action: (0, r.jsx)(m.P3F, {
                              onClick: () => {
                                  (0, v.Q3)(p.z.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
                                      dismissAction: z.L.USER_DISMISS,
                                  });
                              },
                              className: Q.helpNoticeDismissIcon,
                              children: (0, r.jsx)(m.Dio, {
                                  size: "sm",
                                  color: _.Z.colors.ICON_STRONG,
                              }),
                          }),
                          children: q.intl.format(q.t.K4QorK, { helpdeskArticle: R.Z.getArticleURL(W.BhN.BILLING) }),
                      }),
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)("div", {
                              className: I.length > 0 ? Q.dupSubscriptionRow : Q.__invalid_singleSubscription,
                              children: (0, r.jsx)(ei, {
                                  subscription: a,
                                  analyticsLocation: d,
                                  paymentSource: s,
                                  busy: l,
                                  fromStandaloneBillingPage: c,
                                  showNoPaymentMethod: F,
                                  showInvalidPaymentMethod: Y,
                                  fetchedCurrentInvoicePreview: P,
                                  fetchedRenewalInvoicePreview: D,
                                  fetchedOpenInvoice: ea,
                                  isPremiumGroup: er,
                              }),
                          }),
                          I.map((e, t) =>
                              (0, r.jsxs)(
                                  "div",
                                  {
                                      className: Q.dupSubscriptionRow,
                                      children: [
                                          (0, r.jsx)(m.Heading, {
                                              variant: "heading-md/semibold",
                                              className: Q.duplicateHeader,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, r.jsx)(ei, {
                                              subscription: e,
                                              analyticsLocation: d,
                                              paymentSource: s,
                                              busy: l,
                                              fromStandaloneBillingPage: c,
                                              showNoPaymentMethod: F,
                                              showInvalidPaymentMethod: Y,
                                              fetchedCurrentInvoicePreview: null,
                                              fetchedRenewalInvoicePreview: null,
                                              fetchedOpenInvoice: null,
                                              isPremiumGroup: !1,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ],
                  }),
              ],
          }));
}
