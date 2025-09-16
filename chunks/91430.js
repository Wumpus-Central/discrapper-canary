n.d(t, {
    MM: () => $,
    Yn: () => en,
    ZP: () => er,
    eS: () => et,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(873546),
    f = n(442837),
    _ = n(692547),
    p = n(755721),
    h = n(481060),
    m = n(570140),
    g = n(100527),
    E = n(906732),
    b = n(17894),
    y = n(975298),
    O = n(600164),
    v = n(925329),
    I = n(963249),
    T = n(313789),
    S = n(518596),
    A = n(301766),
    C = n(594174),
    N = n(626135),
    R = n(63063),
    P = n(74538),
    w = n(212895),
    D = n(374649),
    x = n(140465),
    L = n(160913),
    j = n(331972),
    M = n(757861),
    k = n(385251),
    U = n(987997),
    G = n(393411),
    B = n(908951),
    Z = n(592889),
    F = n(474936),
    V = n(981631),
    H = n(362786),
    Y = n(388032),
    W = n(903163);
let K = "app";
function z(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: a,
            fromStandaloneBillingPage: s = !0,
            className: c,
        } = e,
        u = (0, f.e7)([C.default], () => {
            let e = C.default.getCurrentUser();
            return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        });
    if (0 === (0, P.uV)(n.additionalPlans)) return null;
    let { status: _ } = n,
        m = (0, P.v6)(n);
    if (m) t = W.guildBoostingSubscriptionRowCanceled;
    else
        switch (_) {
            case V.O0b.PAST_DUE:
            case V.O0b.ACCOUNT_HOLD:
            case V.O0b.BILLING_RETRY:
                t = W.guildBoostingSubscriptionRowFailedPayment;
                break;
            case V.O0b.PAUSE_PENDING:
            case V.O0b.PAUSED:
                t =
                    n.pauseReason !== H.Id.FRACTIONAL_PREMIUM
                        ? W.guildBoostingSubscriptionRowPaused
                        : W.guildBoostingSubscriptionRowActive;
                break;
            default:
                t = W.guildBoostingSubscriptionRowActive;
        }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(t, c),
                children: [
                    (0, r.jsx)("div", { className: W.guildBoostingSubscriptionRowBackground }),
                    (0, r.jsx)("div", { className: W.guildBoostingImage }),
                    (0, r.jsxs)("div", {
                        className: W.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, r.jsx)("div", { className: o()(W.guildBoostingWordmark, { [W.canceled]: m }) }),
                            (0, r.jsx)("div", {
                                children: (0, P.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: i,
                                    user: u,
                                    fractionalPremiumInfo: a,
                                }),
                            }),
                        ],
                    }),
                    s &&
                        (0, r.jsx)(U.Z, {
                            color: p.zx.Colors.BRAND,
                            onClick: () =>
                                (0, S.openUserSettings)(T.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                    section: V.oAB.GUILD_BOOSTING,
                                }),
                            children: Y.intl.string(Y.t["NQ5g/f"]),
                        }),
                ],
            }),
            !s &&
                (0, r.jsx)(h.Text, {
                    className: W.boostingDesktopAppBlurb,
                    variant: "text-sm/normal",
                    children: Y.intl.format(d.tq ? Y.t.uxYBER : Y.t.k6haR0, { openAppHook: () => (0, b.Z)(K) }),
                }),
        ],
    });
}
function q() {
    return (
        i.useEffect(() => {
            N.default.track(V.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: W.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: W.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: W.paymentBannerText,
                    variant: "text-sm/normal",
                    children: Y.intl.string(Y.t.xFHEMT),
                }),
            ],
        })
    );
}
function X() {
    return (
        i.useEffect(() => {
            N.default.track(V.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: W.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: W.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: W.paymentBannerText,
                    variant: "text-sm/normal",
                    children: Y.intl.string(Y.t["j+nuQU"]),
                }),
            ],
        })
    );
}
function Q(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: a } = e,
        { analyticsLocations: o } = (0, E.ZP)(g.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            N.default.track(V.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: W.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: W.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: W.paymentBannerText,
                    variant: "text-sm/normal",
                    children: Y.intl.format(Y.t["0nbf/P"], {
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
function J(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: i, className: a, fractionalPremiumInfo: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(W.billingInformation, a),
        children: [
            (0, r.jsx)(h.vwX, {
                tag: "h3",
                className: W.detailBlockHeader,
                children: Y.intl.string(Y.t.KXQjfX),
            }),
            (0, r.jsx)("div", { children: P.ZP.getBillingInformationString(t, n, i, !1, s) }),
        ],
    });
}
function $() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(h.vwX, {
                className: W.sectionTitle,
                tag: "h1",
                children: Y.intl.string(Y.t["/gs+Pz"]),
            }),
            (0, r.jsx)("p", {
                className: W.sectionDescription,
                children: Y.intl.string(Y.t.D8UpUl),
            }),
            (0, r.jsx)(h.Zbd, {
                className: W.noItemsCard,
                type: h.Zbd.Types.CUSTOM,
                children: (0, r.jsxs)(O.Z, {
                    align: O.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(v.Z, {
                            game: null,
                            size: v.A.SMALL,
                            className: W.noItemsIcon,
                        }),
                        (0, r.jsx)("span", {
                            className: W.cardText,
                            children: Y.intl.string(Y.t.xCRgr6),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function ee(e) {
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
        } = e,
        { analyticsLocations: _ } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS),
        p =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: _,
                      analyticsLocation: n,
                  },
        [m] = (0, D.ED)(p);
    m = null != u ? u : m;
    let b =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: _,
                      analyticsLocation: n,
                  },
        [O] = (0, D.ED)(b);
    O = null != d ? d : O;
    let v = (0, y.Z)(),
        I = (0, j.$)("subscription_details"),
        T = (0, x.lr)(),
        S = P.ZP.isBaseSubscriptionCanceled(t),
        A = (0, M.P)(t, i);
    if (null == m || null == O) return (0, r.jsx)(h.$jN, {});
    let C = A ? (0, x.Yi)(O) : null,
        N = null != C || (null != T && (T.discountId === F.dT || T.discountId === F.dB)),
        R = A && ((S && null != I) || (!S && N));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: W.subscriptionRows,
                children: [
                    R
                        ? (0, r.jsx)(k.Z, {
                              subscription: t,
                              invoicePreview: O,
                              paymentSource: i,
                              discountOffer: I,
                              renewalChurnDiscountInfo: C,
                              discountInfo: T,
                              isLoading: a,
                              analyticsLocation: n,
                          })
                        : (0, r.jsx)(G.Z, {
                              subscription: t,
                              renewalInvoicePreview: m,
                              paymentSource: i,
                              busy: a,
                              analyticsLocation: n,
                          }),
                    (0, r.jsx)(z, {
                        subscription: t,
                        renewalInvoicePreview: m,
                        fromStandaloneBillingPage: s,
                        className: W.guildSubscriptionRow,
                        fractionalPremiumInfo: v,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(h.y5t, {
                    component: (0, r.jsx)(h.vwX, {
                        tag: "h5",
                        children: Y.intl.string(Y.t.Sb6wIy),
                    }),
                    children: (0, r.jsxs)("div", {
                        className: W.details,
                        children: [
                            (0, r.jsx)(J, {
                                subscription: t,
                                renewalInvoicePreview: O,
                                className: W.detailsBlock,
                                fractionalPremiumInfo: v,
                                openInvoice: f,
                            }),
                            (0, r.jsxs)("div", {
                                className: o()(W.detailsBlock, { [W.redBorder]: l }),
                                children: [
                                    (0, r.jsx)(h.vwX, {
                                        tag: "h3",
                                        className: W.detailBlockHeader,
                                        children:
                                            t.isPurchasedExternally && null != t.paymentGateway
                                                ? Y.intl.formatToPlainString(Y.t.rTk9v7, {
                                                      paymentGatewayName: V.Vzj[t.paymentGateway],
                                                  })
                                                : Y.intl.string(Y.t.iRzXKS),
                                    }),
                                    (0, r.jsx)(B.Z, {
                                        subscription: t,
                                        onPaymentSourceAdded: w.i1,
                                        highlightAddPaymentMethodButton: c || l,
                                        analyticsLocation: n,
                                        currentInvoicePreview: m,
                                        dropdownClassName: W.paymentDropdown,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
let et = new Set([V.O0b.ACTIVE, V.O0b.PAST_DUE, V.O0b.CANCELED, V.O0b.PAUSE_PENDING, V.O0b.PAUSED]);
function en() {
    return (
        i.useEffect(() => {
            N.default.track(V.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, r.jsxs)("div", {
            className: W.duplicateSubscriptionsBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: W.duplicateSubscriptionsBannerText,
                    variant: "text-sm/normal",
                    children: Y.intl.format(Y.t["6eXiiI"], { helpCenterLink: R.Z.getArticleURL(V.BhN.NITRO) }),
                }),
            ],
        })
    );
}
function er(e) {
    var t;
    let n,
        {
            subscription: a,
            subscriptions: o,
            paymentSource: s,
            busy: l,
            fromStandaloneBillingPage: c = !0,
            analyticsLocation: d,
            shouldRefetchInvoicesOnSubscriptionUpdate: _,
        } = e;
    null != o && null != o[0] && (a = o[0]);
    let { analyticsLocations: p } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS),
        b = (0, j.$)("subscription_details"),
        y = null != o ? o.slice(1) : [],
        [O, v] = i.useState(0);
    i.useEffect(() => {
        if (!_) return;
        let e = (e) => {
            e.subscription.id === a.id && v((e) => e + 1);
        };
        return (
            m.Z.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                m.Z.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [a.id, _]);
    let [I] = (0, D.ED)({
            subscriptionId: a.id,
            renewal: !0,
            analyticsLocations: p,
            analyticsLocation: d,
            fetchKey: O,
        }),
        [T] = (0, D.ED)({
            subscriptionId: a.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: p,
            analyticsLocation: d,
            userDiscountOfferId: null == b ? void 0 : b.id,
            fetchKey: O,
        }),
        S = null == s ? void 0 : s.invalid,
        N = (0, f.e7)([C.default], () => {
            var e;
            return null == (e = C.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        R = u()(a.currentPeriodEnd),
        P = null != a.paymentSourceId,
        w = null != (t = null == T ? void 0 : T.total) ? t : 0,
        x =
            !P &&
            w > 0 &&
            (7 >= R.diff(u()(), "days") || a.status === V.O0b.PAST_DUE) &&
            !N &&
            !a.isPurchasedExternally,
        M = S && a.status === V.O0b.PAST_DUE && !N && !a.isPurchasedExternally,
        k = (0, L.U)(),
        U = !N && k,
        G = (null == a ? void 0 : a.status) === V.O0b.PAST_DUE,
        B = G ? u()().diff(u()(a.currentPeriodStart), "days") : 0,
        [F] = (0, D.Ox)({
            subscriptionId: a.id,
            preventFetch: !(U || G),
        });
    return null == I || null == T
        ? (0, r.jsx)(h.$jN, {})
        : (null != a.renewalMutations &&
              ((a.renewalMutations.planId !== a.planId && !(0, A.Q0)(a.renewalMutations.planId)) ||
                  a.hasExternalPlanChange) &&
              (n = (0, r.jsx)(Z.Z, {
                  subscription: a,
                  renewalMutations: a.renewalMutations,
                  className: W.renewalMutationNotice,
                  analyticsLocation: d,
              })),
          (0, r.jsx)("div", {
              children: (0, r.jsxs)(h.y5t, {
                  component: (0, r.jsx)(h.vwX, {
                      className: W.sectionTitle,
                      tag: "h1",
                      children: Y.intl.string(Y.t["/gs+Pz"]),
                  }),
                  children: [
                      x ? (0, r.jsx)(q, {}) : null,
                      M ? (0, r.jsx)(X, {}) : null,
                      U && null != F
                          ? (0, r.jsx)(Q, {
                                daysPastDue: B,
                                subscription: a,
                                openInvoiceId: F.id,
                            })
                          : null,
                      n,
                      (0, r.jsx)("div", {
                          children: (0, r.jsx)("p", {
                              className: W.sectionDescription,
                              children: Y.intl.string(Y.t.D8UpUl),
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)("div", {
                                  className: y.length > 0 ? W.dupSubscriptionRow : W.__invalid_singleSubscription,
                                  children: (0, r.jsx)(ee, {
                                      subscription: a,
                                      analyticsLocation: d,
                                      paymentSource: s,
                                      busy: l,
                                      fromStandaloneBillingPage: c,
                                      showNoPaymentMethod: x,
                                      showInvalidPaymentMethod: M,
                                      fetchedCurrentInvoicePreview: I,
                                      fetchedRenewalInvoicePreview: T,
                                      fetchedOpenInvoice: F,
                                  }),
                              }),
                              y.map((e, t) =>
                                  (0, r.jsxs)(
                                      "div",
                                      {
                                          className: W.dupSubscriptionRow,
                                          children: [
                                              (0, r.jsx)(h.vwX, {
                                                  tag: "h2",
                                                  className: W.duplicateHeader,
                                                  children: "Duplicate Subscriptions",
                                              }),
                                              (0, r.jsx)(ee, {
                                                  subscription: e,
                                                  analyticsLocation: d,
                                                  paymentSource: s,
                                                  busy: l,
                                                  fromStandaloneBillingPage: c,
                                                  showNoPaymentMethod: x,
                                                  showInvalidPaymentMethod: M,
                                                  fetchedCurrentInvoicePreview: null,
                                                  fetchedRenewalInvoicePreview: null,
                                                  fetchedOpenInvoice: null,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          ],
                      }),
                  ],
              }),
          }));
}
