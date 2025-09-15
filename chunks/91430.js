n.d(t, {
    MM: () => J,
    Yn: () => et,
    ZP: () => en,
    eS: () => ee,
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
    m = n(100527),
    g = n(906732),
    E = n(17894),
    b = n(975298),
    y = n(600164),
    O = n(925329),
    v = n(963249),
    I = n(313789),
    T = n(518596),
    S = n(301766),
    A = n(594174),
    C = n(626135),
    N = n(63063),
    R = n(74538),
    P = n(212895),
    w = n(374649),
    D = n(140465),
    x = n(160913),
    L = n(331972),
    j = n(757861),
    M = n(385251),
    k = n(987997),
    U = n(393411),
    G = n(908951),
    B = n(592889),
    Z = n(474936),
    F = n(981631),
    V = n(362786),
    H = n(388032),
    Y = n(903163);
let W = "app";
function K(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: a,
            fromStandaloneBillingPage: s = !0,
            className: c,
        } = e,
        u = (0, f.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        });
    if (0 === (0, R.uV)(n.additionalPlans)) return null;
    let { status: _ } = n,
        m = (0, R.v6)(n);
    if (m) t = Y.guildBoostingSubscriptionRowCanceled;
    else
        switch (_) {
            case F.O0b.PAST_DUE:
            case F.O0b.ACCOUNT_HOLD:
            case F.O0b.BILLING_RETRY:
                t = Y.guildBoostingSubscriptionRowFailedPayment;
                break;
            case F.O0b.PAUSE_PENDING:
            case F.O0b.PAUSED:
                t =
                    n.pauseReason !== V.Id.FRACTIONAL_PREMIUM
                        ? Y.guildBoostingSubscriptionRowPaused
                        : Y.guildBoostingSubscriptionRowActive;
                break;
            default:
                t = Y.guildBoostingSubscriptionRowActive;
        }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(t, c),
                children: [
                    (0, r.jsx)("div", { className: Y.guildBoostingSubscriptionRowBackground }),
                    (0, r.jsx)("div", { className: Y.guildBoostingImage }),
                    (0, r.jsxs)("div", {
                        className: Y.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, r.jsx)("div", { className: o()(Y.guildBoostingWordmark, { [Y.canceled]: m }) }),
                            (0, r.jsx)("div", {
                                children: (0, R.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: i,
                                    user: u,
                                    fractionalPremiumInfo: a,
                                }),
                            }),
                        ],
                    }),
                    s &&
                        (0, r.jsx)(k.Z, {
                            color: p.zx.Colors.BRAND,
                            onClick: () =>
                                (0, T.openUserSettings)(I.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                    section: F.oAB.GUILD_BOOSTING,
                                }),
                            children: H.intl.string(H.t["NQ5g/f"]),
                        }),
                ],
            }),
            !s &&
                (0, r.jsx)(h.Text, {
                    className: Y.boostingDesktopAppBlurb,
                    variant: "text-sm/normal",
                    children: H.intl.format(d.tq ? H.t.uxYBER : H.t.k6haR0, { openAppHook: () => (0, E.Z)(W) }),
                }),
        ],
    });
}
function z() {
    return (
        i.useEffect(() => {
            C.default.track(F.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: Y.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Y.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: Y.paymentBannerText,
                    variant: "text-sm/normal",
                    children: H.intl.string(H.t.xFHEMT),
                }),
            ],
        })
    );
}
function q() {
    return (
        i.useEffect(() => {
            C.default.track(F.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: Y.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Y.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: Y.paymentBannerText,
                    variant: "text-sm/normal",
                    children: H.intl.string(H.t["j+nuQU"]),
                }),
            ],
        })
    );
}
function X(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: a } = e,
        { analyticsLocations: o } = (0, g.ZP)(m.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            C.default.track(F.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: Y.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Y.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: Y.paymentBannerText,
                    variant: "text-sm/normal",
                    children: H.intl.format(H.t["0nbf/P"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, v.Z)({
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
function Q(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: i, className: a, fractionalPremiumInfo: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(Y.billingInformation, a),
        children: [
            (0, r.jsx)(h.vwX, {
                tag: "h3",
                className: Y.detailBlockHeader,
                children: H.intl.string(H.t.KXQjfX),
            }),
            (0, r.jsx)("div", { children: R.ZP.getBillingInformationString(t, n, i, !1, s) }),
        ],
    });
}
function J() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(h.vwX, {
                className: Y.sectionTitle,
                tag: "h1",
                children: H.intl.string(H.t["/gs+Pz"]),
            }),
            (0, r.jsx)("p", {
                className: Y.sectionDescription,
                children: H.intl.string(H.t.D8UpUl),
            }),
            (0, r.jsx)(h.Zbd, {
                className: Y.noItemsCard,
                type: h.Zbd.Types.CUSTOM,
                children: (0, r.jsxs)(y.Z, {
                    align: y.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(O.Z, {
                            game: null,
                            size: O.A.SMALL,
                            className: Y.noItemsIcon,
                        }),
                        (0, r.jsx)("span", {
                            className: Y.cardText,
                            children: H.intl.string(H.t.xCRgr6),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function $(e) {
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
        { analyticsLocations: _ } = (0, g.ZP)(m.Z.SUBSCRIPTION_DETAILS),
        p =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: _,
                      analyticsLocation: n,
                  },
        [E] = (0, w.ED)(p);
    E = null != u ? u : E;
    let y =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: _,
                      analyticsLocation: n,
                  },
        [O] = (0, w.ED)(y);
    O = null != d ? d : O;
    let v = (0, b.Z)(),
        I = (0, L.$)("subscription_details"),
        T = (0, D.lr)(),
        S = R.ZP.isBaseSubscriptionCanceled(t),
        A = (0, j.P)(t, i);
    if (null == E || null == O) return (0, r.jsx)(h.$jN, {});
    let C = A ? (0, D.Yi)(O) : null,
        N = null != C || (null != T && (T.discountId === Z.dT || T.discountId === Z.dB)),
        x = A && ((S && null != I) || (!S && N));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: Y.subscriptionRows,
                children: [
                    x
                        ? (0, r.jsx)(M.Z, {
                              subscription: t,
                              invoicePreview: O,
                              paymentSource: i,
                              discountOffer: I,
                              renewalChurnDiscountInfo: C,
                              discountInfo: T,
                              isLoading: a,
                              analyticsLocation: n,
                          })
                        : (0, r.jsx)(U.Z, {
                              subscription: t,
                              renewalInvoicePreview: E,
                              paymentSource: i,
                              busy: a,
                              analyticsLocation: n,
                          }),
                    (0, r.jsx)(K, {
                        subscription: t,
                        renewalInvoicePreview: E,
                        fromStandaloneBillingPage: s,
                        className: Y.guildSubscriptionRow,
                        fractionalPremiumInfo: v,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(h.y5t, {
                    component: (0, r.jsx)(h.vwX, {
                        tag: "h5",
                        children: H.intl.string(H.t.Sb6wIy),
                    }),
                    children: (0, r.jsxs)("div", {
                        className: Y.details,
                        children: [
                            (0, r.jsx)(Q, {
                                subscription: t,
                                renewalInvoicePreview: O,
                                className: Y.detailsBlock,
                                fractionalPremiumInfo: v,
                                openInvoice: f,
                            }),
                            (0, r.jsxs)("div", {
                                className: o()(Y.detailsBlock, { [Y.redBorder]: l }),
                                children: [
                                    (0, r.jsx)(h.vwX, {
                                        tag: "h3",
                                        className: Y.detailBlockHeader,
                                        children:
                                            t.isPurchasedExternally && null != t.paymentGateway
                                                ? H.intl.formatToPlainString(H.t.rTk9v7, {
                                                      paymentGatewayName: F.Vzj[t.paymentGateway],
                                                  })
                                                : H.intl.string(H.t.iRzXKS),
                                    }),
                                    (0, r.jsx)(G.Z, {
                                        subscription: t,
                                        onPaymentSourceAdded: P.i1,
                                        highlightAddPaymentMethodButton: c || l,
                                        analyticsLocation: n,
                                        currentInvoicePreview: E,
                                        dropdownClassName: Y.paymentDropdown,
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
let ee = new Set([F.O0b.ACTIVE, F.O0b.PAST_DUE, F.O0b.CANCELED, F.O0b.PAUSE_PENDING, F.O0b.PAUSED]);
function et() {
    return (
        i.useEffect(() => {
            C.default.track(F.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, r.jsxs)("div", {
            className: Y.duplicateSubscriptionsBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: Y.duplicateSubscriptionsBannerText,
                    variant: "text-sm/normal",
                    children: H.intl.format(H.t["6eXiiI"], { helpCenterLink: N.Z.getArticleURL(F.BhN.NITRO) }),
                }),
            ],
        })
    );
}
function en(e) {
    var t;
    let n,
        {
            subscription: i,
            subscriptions: a,
            paymentSource: o,
            busy: s,
            fromStandaloneBillingPage: l = !0,
            analyticsLocation: c,
        } = e;
    null != a && null != a[0] && (i = a[0]);
    let { analyticsLocations: d } = (0, g.ZP)(m.Z.SUBSCRIPTION_DETAILS),
        _ = (0, L.$)("subscription_details"),
        p = null != a ? a.slice(1) : [],
        [E] = (0, w.ED)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: d,
            analyticsLocation: c,
        }),
        [b] = (0, w.ED)({
            subscriptionId: i.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: d,
            analyticsLocation: c,
            userDiscountOfferId: null == _ ? void 0 : _.id,
        }),
        y = null == o ? void 0 : o.invalid,
        O = (0, f.e7)([A.default], () => {
            var e;
            return null == (e = A.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        v = u()(i.currentPeriodEnd),
        I = null != i.paymentSourceId,
        T = null != (t = null == b ? void 0 : b.total) ? t : 0,
        C =
            !I &&
            T > 0 &&
            (7 >= v.diff(u()(), "days") || i.status === F.O0b.PAST_DUE) &&
            !O &&
            !i.isPurchasedExternally,
        N = y && i.status === F.O0b.PAST_DUE && !O && !i.isPurchasedExternally,
        R = (0, x.U)(),
        P = !O && R,
        D = (null == i ? void 0 : i.status) === F.O0b.PAST_DUE,
        j = D ? u()().diff(u()(i.currentPeriodStart), "days") : 0,
        [M] = (0, w.Ox)({
            subscriptionId: i.id,
            preventFetch: !(P || D),
        });
    return null == E || null == b
        ? (0, r.jsx)(h.$jN, {})
        : (null != i.renewalMutations &&
              ((i.renewalMutations.planId !== i.planId && !(0, S.Q0)(i.renewalMutations.planId)) ||
                  i.hasExternalPlanChange) &&
              (n = (0, r.jsx)(B.Z, {
                  subscription: i,
                  renewalMutations: i.renewalMutations,
                  className: Y.renewalMutationNotice,
                  analyticsLocation: c,
              })),
          (0, r.jsx)("div", {
              children: (0, r.jsxs)(h.y5t, {
                  component: (0, r.jsx)(h.vwX, {
                      className: Y.sectionTitle,
                      tag: "h1",
                      children: H.intl.string(H.t["/gs+Pz"]),
                  }),
                  children: [
                      C ? (0, r.jsx)(z, {}) : null,
                      N ? (0, r.jsx)(q, {}) : null,
                      P && null != M
                          ? (0, r.jsx)(X, {
                                daysPastDue: j,
                                subscription: i,
                                openInvoiceId: M.id,
                            })
                          : null,
                      n,
                      (0, r.jsx)("div", {
                          children: (0, r.jsx)("p", {
                              className: Y.sectionDescription,
                              children: H.intl.string(H.t.D8UpUl),
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)("div", {
                                  className: p.length > 0 ? Y.dupSubscriptionRow : Y.__invalid_singleSubscription,
                                  children: (0, r.jsx)($, {
                                      subscription: i,
                                      analyticsLocation: c,
                                      paymentSource: o,
                                      busy: s,
                                      fromStandaloneBillingPage: l,
                                      showNoPaymentMethod: C,
                                      showInvalidPaymentMethod: N,
                                      fetchedCurrentInvoicePreview: E,
                                      fetchedRenewalInvoicePreview: b,
                                      fetchedOpenInvoice: M,
                                  }),
                              }),
                              p.map((e, t) =>
                                  (0, r.jsxs)(
                                      "div",
                                      {
                                          className: Y.dupSubscriptionRow,
                                          children: [
                                              (0, r.jsx)(h.vwX, {
                                                  tag: "h2",
                                                  className: Y.duplicateHeader,
                                                  children: "Duplicate Subscriptions",
                                              }),
                                              (0, r.jsx)($, {
                                                  subscription: e,
                                                  analyticsLocation: c,
                                                  paymentSource: o,
                                                  busy: s,
                                                  fromStandaloneBillingPage: l,
                                                  showNoPaymentMethod: C,
                                                  showInvalidPaymentMethod: N,
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
