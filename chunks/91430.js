n.d(t, {
    MM: () => X,
    Yn: () => $,
    ZP: () => ee,
    eS: () => J,
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
    d = n(442837),
    f = n(692547),
    _ = n(755721),
    p = n(481060),
    h = n(230711),
    m = n(100527),
    g = n(906732),
    E = n(17894),
    b = n(975298),
    y = n(600164),
    O = n(925329),
    v = n(963249),
    I = n(301766),
    T = n(594174),
    S = n(626135),
    A = n(63063),
    C = n(74538),
    N = n(212895),
    R = n(374649),
    P = n(140465),
    w = n(160913),
    D = n(331972),
    x = n(757861),
    L = n(385251),
    j = n(987997),
    M = n(393411),
    k = n(908951),
    U = n(592889),
    G = n(474936),
    B = n(981631),
    Z = n(362786),
    V = n(388032),
    F = n(903163);
let H = "app";
function Y(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: a,
            fromStandaloneBillingPage: s = !0,
            className: c,
        } = e,
        u = (0, d.e7)([T.default], () => {
            let e = T.default.getCurrentUser();
            return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        });
    if (0 === (0, C.uV)(n.additionalPlans)) return null;
    let { status: f } = n,
        m = (0, C.v6)(n);
    if (m) t = F.guildBoostingSubscriptionRowCanceled;
    else
        switch (f) {
            case B.O0b.PAST_DUE:
            case B.O0b.ACCOUNT_HOLD:
            case B.O0b.BILLING_RETRY:
                t = F.guildBoostingSubscriptionRowFailedPayment;
                break;
            case B.O0b.PAUSE_PENDING:
            case B.O0b.PAUSED:
                t =
                    n.pauseReason !== Z.Id.FRACTIONAL_PREMIUM
                        ? F.guildBoostingSubscriptionRowPaused
                        : F.guildBoostingSubscriptionRowActive;
                break;
            default:
                t = F.guildBoostingSubscriptionRowActive;
        }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(t, c),
                children: [
                    (0, r.jsx)("div", { className: F.guildBoostingSubscriptionRowBackground }),
                    (0, r.jsx)("div", { className: F.guildBoostingImage }),
                    (0, r.jsxs)("div", {
                        className: F.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, r.jsx)("div", { className: o()(F.guildBoostingWordmark, { [F.canceled]: m }) }),
                            (0, r.jsx)("div", {
                                children: (0, C.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: i,
                                    user: u,
                                    fractionalPremiumInfo: a,
                                }),
                            }),
                        ],
                    }),
                    s &&
                        (0, r.jsx)(j.Z, {
                            color: _.zx.Colors.BRAND,
                            onClick: () => h.Z.open(B.oAB.GUILD_BOOSTING),
                            children: V.intl.string(V.t["NQ5g/f"]),
                        }),
                ],
            }),
            !s &&
                (0, r.jsx)(p.Text, {
                    className: F.boostingDesktopAppBlurb,
                    variant: "text-sm/normal",
                    children: V.intl.format(V.t.k6haR0, { openAppHook: () => (0, E.Z)(H) }),
                }),
        ],
    });
}
function W() {
    return (
        i.useEffect(() => {
            S.default.track(B.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: F.paymentBanner,
            children: [
                (0, r.jsx)(p.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: F.paymentBannerIcon,
                    color: f.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(p.Text, {
                    className: F.paymentBannerText,
                    variant: "text-sm/normal",
                    children: V.intl.string(V.t.xFHEMT),
                }),
            ],
        })
    );
}
function K() {
    return (
        i.useEffect(() => {
            S.default.track(B.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: F.paymentBanner,
            children: [
                (0, r.jsx)(p.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: F.paymentBannerIcon,
                    color: f.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(p.Text, {
                    className: F.paymentBannerText,
                    variant: "text-sm/normal",
                    children: V.intl.string(V.t["j+nuQU"]),
                }),
            ],
        })
    );
}
function z(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: a } = e,
        { analyticsLocations: o } = (0, g.ZP)(m.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            S.default.track(B.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: F.paymentBanner,
            children: [
                (0, r.jsx)(p.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: F.paymentBannerIcon,
                    color: f.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(p.Text, {
                    className: F.paymentBannerText,
                    variant: "text-sm/normal",
                    children: V.intl.format(V.t["0nbf/P"], {
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
function q(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: i, className: a, fractionalPremiumInfo: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(F.billingInformation, a),
        children: [
            (0, r.jsx)(p.vwX, {
                tag: "h3",
                className: F.detailBlockHeader,
                children: V.intl.string(V.t.KXQjfX),
            }),
            (0, r.jsx)("div", { children: C.ZP.getBillingInformationString(t, n, i, !1, s) }),
        ],
    });
}
function X() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(p.vwX, {
                className: F.sectionTitle,
                tag: "h1",
                children: V.intl.string(V.t["/gs+Pz"]),
            }),
            (0, r.jsx)("p", {
                className: F.sectionDescription,
                children: V.intl.string(V.t.D8UpUl),
            }),
            (0, r.jsx)(p.Zbd, {
                className: F.noItemsCard,
                type: p.Zbd.Types.CUSTOM,
                children: (0, r.jsxs)(y.Z, {
                    align: y.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(O.Z, {
                            game: null,
                            size: O.Z.Sizes.SMALL,
                            className: F.noItemsIcon,
                        }),
                        (0, r.jsx)("span", {
                            className: F.cardText,
                            children: V.intl.string(V.t.xCRgr6),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function Q(e) {
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
        h =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: _,
                      analyticsLocation: n,
                  },
        [E] = (0, R.ED)(h);
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
        [O] = (0, R.ED)(y);
    O = null != d ? d : O;
    let v = (0, b.Z)(),
        I = (0, D.$)(),
        T = (0, P.lr)(),
        S = C.ZP.isBaseSubscriptionCanceled(t),
        A = (0, x.P)(t, i);
    if (null == E || null == O) return (0, r.jsx)(p.$jN, {});
    let w = A ? (0, P.Yi)(O) : null,
        j = null != w || (null != T && (T.discountId === G.dT || T.discountId === G.dB)),
        U = A && ((S && null != I) || (!S && j));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: F.subscriptionRows,
                children: [
                    U
                        ? (0, r.jsx)(L.Z, {
                              subscription: t,
                              currentInvoicePreview: E,
                              renewalInvoicePreview: O,
                              paymentSource: i,
                              discountOffer: I,
                              renewalChurnDiscountInfo: w,
                              discountInfo: T,
                              isLoading: a,
                              analyticsLocation: n,
                          })
                        : (0, r.jsx)(M.Z, {
                              subscription: t,
                              renewalInvoicePreview: E,
                              paymentSource: i,
                              busy: a,
                              analyticsLocation: n,
                          }),
                    (0, r.jsx)(Y, {
                        subscription: t,
                        renewalInvoicePreview: E,
                        fromStandaloneBillingPage: s,
                        className: F.guildSubscriptionRow,
                        fractionalPremiumInfo: v,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(p.y5t, {
                    component: (0, r.jsx)(p.vwX, {
                        tag: "h5",
                        children: V.intl.string(V.t.Sb6wIy),
                    }),
                    children: (0, r.jsxs)("div", {
                        className: F.details,
                        children: [
                            (0, r.jsx)(q, {
                                subscription: t,
                                renewalInvoicePreview: O,
                                className: F.detailsBlock,
                                fractionalPremiumInfo: v,
                                openInvoice: f,
                            }),
                            (0, r.jsxs)("div", {
                                className: o()(F.detailsBlock, { [F.redBorder]: l }),
                                children: [
                                    (0, r.jsx)(p.vwX, {
                                        tag: "h3",
                                        className: F.detailBlockHeader,
                                        children:
                                            t.isPurchasedExternally && null != t.paymentGateway
                                                ? V.intl.formatToPlainString(V.t.rTk9v7, {
                                                      paymentGatewayName: B.Vzj[t.paymentGateway],
                                                  })
                                                : V.intl.string(V.t.iRzXKS),
                                    }),
                                    (0, r.jsx)(k.Z, {
                                        subscription: t,
                                        onPaymentSourceAdded: N.i1,
                                        highlightAddPaymentMethodButton: c || l,
                                        analyticsLocation: n,
                                        currentInvoicePreview: E,
                                        dropdownClassName: F.paymentDropdown,
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
let J = new Set([B.O0b.ACTIVE, B.O0b.PAST_DUE, B.O0b.CANCELED, B.O0b.PAUSE_PENDING, B.O0b.PAUSED]);
function $() {
    return (
        i.useEffect(() => {
            S.default.track(B.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, r.jsxs)("div", {
            className: F.duplicateSubscriptionsBanner,
            children: [
                (0, r.jsx)(p.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: f.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(p.Text, {
                    className: F.duplicateSubscriptionsBannerText,
                    variant: "text-sm/normal",
                    children: V.intl.format(V.t["6eXiiI"], { helpCenterLink: A.Z.getArticleURL(B.BhN.NITRO) }),
                }),
            ],
        })
    );
}
function ee(e) {
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
    let { analyticsLocations: f } = (0, g.ZP)(m.Z.SUBSCRIPTION_DETAILS),
        _ = (0, D.$)(),
        h = null != a ? a.slice(1) : [],
        [E] = (0, R.ED)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: f,
            analyticsLocation: c,
        }),
        [b] = (0, R.ED)({
            subscriptionId: i.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: f,
            analyticsLocation: c,
            userDiscountOfferId: null == _ ? void 0 : _.id,
        }),
        y = null == o ? void 0 : o.invalid,
        O = (0, d.e7)([T.default], () => {
            var e;
            return null == (e = T.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        v = u()(i.currentPeriodEnd),
        S = null != i.paymentSourceId,
        A = null != (t = null == b ? void 0 : b.total) ? t : 0,
        C =
            !S &&
            A > 0 &&
            (7 >= v.diff(u()(), "days") || i.status === B.O0b.PAST_DUE) &&
            !O &&
            !i.isPurchasedExternally,
        N = y && i.status === B.O0b.PAST_DUE && !O && !i.isPurchasedExternally,
        P = (0, w.U)(),
        x = !O && P,
        L = (null == i ? void 0 : i.status) === B.O0b.PAST_DUE,
        j = L ? u()().diff(u()(i.currentPeriodStart), "days") : 0,
        [M] = (0, R.Ox)({
            subscriptionId: i.id,
            preventFetch: !(x || L),
        });
    return null == E || null == b
        ? (0, r.jsx)(p.$jN, {})
        : (null != i.renewalMutations &&
              ((i.renewalMutations.planId !== i.planId && !(0, I.Q0)(i.renewalMutations.planId)) ||
                  i.hasExternalPlanChange) &&
              (n = (0, r.jsx)(U.Z, {
                  subscription: i,
                  renewalMutations: i.renewalMutations,
                  className: F.renewalMutationNotice,
                  analyticsLocation: c,
              })),
          (0, r.jsx)("div", {
              children: (0, r.jsxs)(p.y5t, {
                  component: (0, r.jsx)(p.vwX, {
                      className: F.sectionTitle,
                      tag: "h1",
                      children: V.intl.string(V.t["/gs+Pz"]),
                  }),
                  children: [
                      C ? (0, r.jsx)(W, {}) : null,
                      N ? (0, r.jsx)(K, {}) : null,
                      x && null != M
                          ? (0, r.jsx)(z, {
                                daysPastDue: j,
                                subscription: i,
                                openInvoiceId: M.id,
                            })
                          : null,
                      n,
                      (0, r.jsx)("div", {
                          children: (0, r.jsx)("p", {
                              className: F.sectionDescription,
                              children: V.intl.string(V.t.D8UpUl),
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)("div", {
                                  className: h.length > 0 ? F.dupSubscriptionRow : F.__invalid_singleSubscription,
                                  children: (0, r.jsx)(Q, {
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
                              h.map((e, t) =>
                                  (0, r.jsxs)(
                                      "div",
                                      {
                                          className: F.dupSubscriptionRow,
                                          children: [
                                              (0, r.jsx)(p.vwX, {
                                                  tag: "h2",
                                                  className: F.duplicateHeader,
                                                  children: "Duplicate Subscriptions",
                                              }),
                                              (0, r.jsx)(Q, {
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
