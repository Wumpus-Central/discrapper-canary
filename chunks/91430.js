n.d(t, {
    MM: () => Q,
    Yn: () => ee,
    ZP: () => et,
    eS: () => $,
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
    m = n(230711),
    g = n(100527),
    E = n(906732),
    b = n(17894),
    y = n(975298),
    O = n(600164),
    v = n(925329),
    I = n(963249),
    T = n(301766),
    S = n(594174),
    A = n(626135),
    C = n(63063),
    N = n(74538),
    R = n(212895),
    P = n(374649),
    w = n(140465),
    D = n(160913),
    x = n(331972),
    L = n(757861),
    j = n(385251),
    k = n(987997),
    M = n(393411),
    U = n(908951),
    G = n(592889),
    B = n(474936),
    Z = n(981631),
    F = n(362786),
    V = n(388032),
    H = n(903163);
let Y = "app";
function W(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: a,
            fromStandaloneBillingPage: s = !0,
            className: c,
        } = e,
        u = (0, f.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        });
    if (0 === (0, N.uV)(n.additionalPlans)) return null;
    let { status: _ } = n,
        g = (0, N.v6)(n);
    if (g) t = H.guildBoostingSubscriptionRowCanceled;
    else
        switch (_) {
            case Z.O0b.PAST_DUE:
            case Z.O0b.ACCOUNT_HOLD:
            case Z.O0b.BILLING_RETRY:
                t = H.guildBoostingSubscriptionRowFailedPayment;
                break;
            case Z.O0b.PAUSE_PENDING:
            case Z.O0b.PAUSED:
                t =
                    n.pauseReason !== F.Id.FRACTIONAL_PREMIUM
                        ? H.guildBoostingSubscriptionRowPaused
                        : H.guildBoostingSubscriptionRowActive;
                break;
            default:
                t = H.guildBoostingSubscriptionRowActive;
        }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(t, c),
                children: [
                    (0, r.jsx)("div", { className: H.guildBoostingSubscriptionRowBackground }),
                    (0, r.jsx)("div", { className: H.guildBoostingImage }),
                    (0, r.jsxs)("div", {
                        className: H.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, r.jsx)("div", { className: o()(H.guildBoostingWordmark, { [H.canceled]: g }) }),
                            (0, r.jsx)("div", {
                                children: (0, N.bt)({
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
                            onClick: () => m.Z.open(Z.oAB.GUILD_BOOSTING),
                            children: V.intl.string(V.t["NQ5g/f"]),
                        }),
                ],
            }),
            !s &&
                (0, r.jsx)(h.Text, {
                    className: H.boostingDesktopAppBlurb,
                    variant: "text-sm/normal",
                    children: V.intl.format(d.tq ? V.t.uxYBER : V.t.k6haR0, { openAppHook: () => (0, b.Z)(Y) }),
                }),
        ],
    });
}
function K() {
    return (
        i.useEffect(() => {
            A.default.track(Z.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: H.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: H.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: H.paymentBannerText,
                    variant: "text-sm/normal",
                    children: V.intl.string(V.t.xFHEMT),
                }),
            ],
        })
    );
}
function z() {
    return (
        i.useEffect(() => {
            A.default.track(Z.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: H.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: H.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: H.paymentBannerText,
                    variant: "text-sm/normal",
                    children: V.intl.string(V.t["j+nuQU"]),
                }),
            ],
        })
    );
}
function q(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: a } = e,
        { analyticsLocations: o } = (0, E.ZP)(g.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            A.default.track(Z.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: H.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: H.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: H.paymentBannerText,
                    variant: "text-sm/normal",
                    children: V.intl.format(V.t["0nbf/P"], {
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
function X(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: i, className: a, fractionalPremiumInfo: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(H.billingInformation, a),
        children: [
            (0, r.jsx)(h.vwX, {
                tag: "h3",
                className: H.detailBlockHeader,
                children: V.intl.string(V.t.KXQjfX),
            }),
            (0, r.jsx)("div", { children: N.ZP.getBillingInformationString(t, n, i, !1, s) }),
        ],
    });
}
function Q() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(h.vwX, {
                className: H.sectionTitle,
                tag: "h1",
                children: V.intl.string(V.t["/gs+Pz"]),
            }),
            (0, r.jsx)("p", {
                className: H.sectionDescription,
                children: V.intl.string(V.t.D8UpUl),
            }),
            (0, r.jsx)(h.Zbd, {
                className: H.noItemsCard,
                type: h.Zbd.Types.CUSTOM,
                children: (0, r.jsxs)(O.Z, {
                    align: O.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(v.Z, {
                            game: null,
                            size: v.A.SMALL,
                            className: H.noItemsIcon,
                        }),
                        (0, r.jsx)("span", {
                            className: H.cardText,
                            children: V.intl.string(V.t.xCRgr6),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function J(e) {
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
        [m] = (0, P.ED)(p);
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
        [O] = (0, P.ED)(b);
    O = null != d ? d : O;
    let v = (0, y.Z)(),
        I = (0, x.$)("subscription_details"),
        T = (0, w.lr)(),
        S = N.ZP.isBaseSubscriptionCanceled(t),
        A = (0, L.P)(t, i);
    if (null == m || null == O) return (0, r.jsx)(h.$jN, {});
    let C = A ? (0, w.Yi)(O) : null,
        D = null != C || (null != T && (T.discountId === B.dT || T.discountId === B.dB)),
        k = A && ((S && null != I) || (!S && D));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: H.subscriptionRows,
                children: [
                    k
                        ? (0, r.jsx)(j.Z, {
                              subscription: t,
                              invoicePreview: O,
                              paymentSource: i,
                              discountOffer: I,
                              renewalChurnDiscountInfo: C,
                              discountInfo: T,
                              isLoading: a,
                              analyticsLocation: n,
                          })
                        : (0, r.jsx)(M.Z, {
                              subscription: t,
                              renewalInvoicePreview: m,
                              paymentSource: i,
                              busy: a,
                              analyticsLocation: n,
                          }),
                    (0, r.jsx)(W, {
                        subscription: t,
                        renewalInvoicePreview: m,
                        fromStandaloneBillingPage: s,
                        className: H.guildSubscriptionRow,
                        fractionalPremiumInfo: v,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(h.y5t, {
                    component: (0, r.jsx)(h.vwX, {
                        tag: "h5",
                        children: V.intl.string(V.t.Sb6wIy),
                    }),
                    children: (0, r.jsxs)("div", {
                        className: H.details,
                        children: [
                            (0, r.jsx)(X, {
                                subscription: t,
                                renewalInvoicePreview: O,
                                className: H.detailsBlock,
                                fractionalPremiumInfo: v,
                                openInvoice: f,
                            }),
                            (0, r.jsxs)("div", {
                                className: o()(H.detailsBlock, { [H.redBorder]: l }),
                                children: [
                                    (0, r.jsx)(h.vwX, {
                                        tag: "h3",
                                        className: H.detailBlockHeader,
                                        children:
                                            t.isPurchasedExternally && null != t.paymentGateway
                                                ? V.intl.formatToPlainString(V.t.rTk9v7, {
                                                      paymentGatewayName: Z.Vzj[t.paymentGateway],
                                                  })
                                                : V.intl.string(V.t.iRzXKS),
                                    }),
                                    (0, r.jsx)(U.Z, {
                                        subscription: t,
                                        onPaymentSourceAdded: R.i1,
                                        highlightAddPaymentMethodButton: c || l,
                                        analyticsLocation: n,
                                        currentInvoicePreview: m,
                                        dropdownClassName: H.paymentDropdown,
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
let $ = new Set([Z.O0b.ACTIVE, Z.O0b.PAST_DUE, Z.O0b.CANCELED, Z.O0b.PAUSE_PENDING, Z.O0b.PAUSED]);
function ee() {
    return (
        i.useEffect(() => {
            A.default.track(Z.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, r.jsxs)("div", {
            className: H.duplicateSubscriptionsBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: H.duplicateSubscriptionsBannerText,
                    variant: "text-sm/normal",
                    children: V.intl.format(V.t["6eXiiI"], { helpCenterLink: C.Z.getArticleURL(Z.BhN.NITRO) }),
                }),
            ],
        })
    );
}
function et(e) {
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
    let { analyticsLocations: d } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS),
        _ = (0, x.$)("subscription_details"),
        p = null != a ? a.slice(1) : [],
        [m] = (0, P.ED)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: d,
            analyticsLocation: c,
        }),
        [b] = (0, P.ED)({
            subscriptionId: i.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: d,
            analyticsLocation: c,
            userDiscountOfferId: null == _ ? void 0 : _.id,
        }),
        y = null == o ? void 0 : o.invalid,
        O = (0, f.e7)([S.default], () => {
            var e;
            return null == (e = S.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        v = u()(i.currentPeriodEnd),
        I = null != i.paymentSourceId,
        A = null != (t = null == b ? void 0 : b.total) ? t : 0,
        C =
            !I &&
            A > 0 &&
            (7 >= v.diff(u()(), "days") || i.status === Z.O0b.PAST_DUE) &&
            !O &&
            !i.isPurchasedExternally,
        N = y && i.status === Z.O0b.PAST_DUE && !O && !i.isPurchasedExternally,
        R = (0, D.U)(),
        w = !O && R,
        L = (null == i ? void 0 : i.status) === Z.O0b.PAST_DUE,
        j = L ? u()().diff(u()(i.currentPeriodStart), "days") : 0,
        [k] = (0, P.Ox)({
            subscriptionId: i.id,
            preventFetch: !(w || L),
        });
    return null == m || null == b
        ? (0, r.jsx)(h.$jN, {})
        : (null != i.renewalMutations &&
              ((i.renewalMutations.planId !== i.planId && !(0, T.Q0)(i.renewalMutations.planId)) ||
                  i.hasExternalPlanChange) &&
              (n = (0, r.jsx)(G.Z, {
                  subscription: i,
                  renewalMutations: i.renewalMutations,
                  className: H.renewalMutationNotice,
                  analyticsLocation: c,
              })),
          (0, r.jsx)("div", {
              children: (0, r.jsxs)(h.y5t, {
                  component: (0, r.jsx)(h.vwX, {
                      className: H.sectionTitle,
                      tag: "h1",
                      children: V.intl.string(V.t["/gs+Pz"]),
                  }),
                  children: [
                      C ? (0, r.jsx)(K, {}) : null,
                      N ? (0, r.jsx)(z, {}) : null,
                      w && null != k
                          ? (0, r.jsx)(q, {
                                daysPastDue: j,
                                subscription: i,
                                openInvoiceId: k.id,
                            })
                          : null,
                      n,
                      (0, r.jsx)("div", {
                          children: (0, r.jsx)("p", {
                              className: H.sectionDescription,
                              children: V.intl.string(V.t.D8UpUl),
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)("div", {
                                  className: p.length > 0 ? H.dupSubscriptionRow : H.__invalid_singleSubscription,
                                  children: (0, r.jsx)(J, {
                                      subscription: i,
                                      analyticsLocation: c,
                                      paymentSource: o,
                                      busy: s,
                                      fromStandaloneBillingPage: l,
                                      showNoPaymentMethod: C,
                                      showInvalidPaymentMethod: N,
                                      fetchedCurrentInvoicePreview: m,
                                      fetchedRenewalInvoicePreview: b,
                                      fetchedOpenInvoice: k,
                                  }),
                              }),
                              p.map((e, t) =>
                                  (0, r.jsxs)(
                                      "div",
                                      {
                                          className: H.dupSubscriptionRow,
                                          children: [
                                              (0, r.jsx)(h.vwX, {
                                                  tag: "h2",
                                                  className: H.duplicateHeader,
                                                  children: "Duplicate Subscriptions",
                                              }),
                                              (0, r.jsx)(J, {
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
