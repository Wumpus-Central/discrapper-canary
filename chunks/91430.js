n.d(t, {
    MM: () => q,
    Yn: () => Q,
    ZP: () => $,
    eS: () => J,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    p = n(755721),
    g = n(481060),
    h = n(230711),
    f = n(100527),
    b = n(906732),
    x = n(17894),
    _ = n(975298),
    j = n(600164),
    E = n(925329),
    C = n(963249),
    O = n(301766),
    v = n(594174),
    S = n(626135),
    T = n(63063),
    N = n(74538),
    I = n(212895),
    y = n(374649),
    A = n(140465),
    P = n(160913),
    R = n(331972),
    D = n(757861),
    Z = n(385251),
    w = n(987997),
    k = n(393411),
    L = n(908951),
    B = n(592889),
    M = n(474936),
    U = n(981631),
    V = n(362786),
    G = n(388032),
    F = n(903163);
function H(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: r,
            fractionalPremiumInfo: s,
            fromStandaloneBillingPage: l = !0,
            className: c,
        } = e,
        d = (0, u.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        });
    if (0 === (0, N.uV)(n.additionalPlans)) return null;
    let { status: m } = n,
        f = (0, N.v6)(n);
    if (f) t = F.guildBoostingSubscriptionRowCanceled;
    else
        switch (m) {
            case U.O0b.PAST_DUE:
            case U.O0b.ACCOUNT_HOLD:
            case U.O0b.BILLING_RETRY:
                t = F.guildBoostingSubscriptionRowFailedPayment;
                break;
            case U.O0b.PAUSE_PENDING:
            case U.O0b.PAUSED:
                t =
                    n.pauseReason !== V.Id.FRACTIONAL_PREMIUM
                        ? F.guildBoostingSubscriptionRowPaused
                        : F.guildBoostingSubscriptionRowActive;
                break;
            default:
                t = F.guildBoostingSubscriptionRowActive;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(t, c),
                children: [
                    (0, i.jsx)("div", { className: F.guildBoostingSubscriptionRowBackground }),
                    (0, i.jsx)("div", { className: F.guildBoostingImage }),
                    (0, i.jsxs)("div", {
                        className: F.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, i.jsx)("div", { className: a()(F.guildBoostingWordmark, { [F.canceled]: f }) }),
                            (0, i.jsx)("div", {
                                children: (0, N.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: r,
                                    user: d,
                                    fractionalPremiumInfo: s,
                                }),
                            }),
                        ],
                    }),
                    l &&
                        (0, i.jsx)(w.Z, {
                            color: p.zx.Colors.BRAND,
                            onClick: () => h.Z.open(U.oAB.GUILD_BOOSTING),
                            children: G.intl.string(G.t["NQ5g/f"]),
                        }),
                ],
            }),
            !l &&
                (0, i.jsx)(g.Text, {
                    className: F.boostingDesktopAppBlurb,
                    variant: "text-sm/normal",
                    children: G.intl.format(G.t.k6haR0, { openAppHook: () => (0, x.Z)("app") }),
                }),
        ],
    });
}
function z() {
    return (
        r.useEffect(() => {
            S.default.track(U.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: F.paymentBanner,
            children: [
                (0, i.jsx)(g.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: F.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.Text, {
                    className: F.paymentBannerText,
                    variant: "text-sm/normal",
                    children: G.intl.string(G.t.xFHEMT),
                }),
            ],
        })
    );
}
function W() {
    return (
        r.useEffect(() => {
            S.default.track(U.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: F.paymentBanner,
            children: [
                (0, i.jsx)(g.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: F.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(g.Text, {
                    className: F.paymentBannerText,
                    variant: "text-sm/normal",
                    children: G.intl.string(G.t["j+nuQU"]),
                }),
            ],
        })
    );
}
function Y(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: a } = (0, b.ZP)(f.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        r.useEffect(() => {
            S.default.track(U.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: F.paymentBanner,
            children: [
                (0, i.jsx)(g.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: F.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.Text, {
                    className: F.paymentBannerText,
                    variant: "text-sm/normal",
                    children: G.intl.format(G.t["0nbf/P"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, C.Z)({
                                initialPlanId: n.planIdFromItems,
                                openInvoiceId: s,
                                analyticsLocations: a,
                            });
                        },
                    }),
                }),
            ],
        })
    );
}
function K(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: r, className: s, fractionalPremiumInfo: l } = e;
    return (0, i.jsxs)("div", {
        className: a()(F.billingInformation, s),
        children: [
            (0, i.jsx)(g.vwX, {
                tag: "h3",
                className: F.detailBlockHeader,
                children: G.intl.string(G.t.KXQjfX),
            }),
            (0, i.jsx)("div", { children: N.ZP.getBillingInformationString(t, n, r, !1, l) }),
        ],
    });
}
function q() {
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(g.vwX, {
                className: F.sectionTitle,
                tag: "h1",
                children: G.intl.string(G.t["/gs+Pz"]),
            }),
            (0, i.jsx)("p", {
                className: F.sectionDescription,
                children: G.intl.string(G.t.D8UpUl),
            }),
            (0, i.jsx)(g.Zbd, {
                className: F.noItemsCard,
                type: g.Zbd.Types.CUSTOM,
                children: (0, i.jsxs)(j.Z, {
                    align: j.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(E.Z, {
                            game: null,
                            size: E.Z.Sizes.SMALL,
                            className: F.noItemsIcon,
                        }),
                        (0, i.jsx)("span", {
                            className: F.cardText,
                            children: G.intl.string(G.t.xCRgr6),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function X(e) {
    let {
            subscription: t,
            analyticsLocation: n,
            paymentSource: r,
            busy: s,
            fromStandaloneBillingPage: l,
            showInvalidPaymentMethod: o,
            showNoPaymentMethod: c,
            fetchedCurrentInvoicePreview: d,
            fetchedRenewalInvoicePreview: u,
            fetchedOpenInvoice: m,
        } = e,
        { analyticsLocations: p } = (0, b.ZP)(f.Z.SUBSCRIPTION_DETAILS),
        h =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: p,
                      analyticsLocation: n,
                  },
        [x] = (0, y.ED)(h);
    x = null != d ? d : x;
    let j =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: p,
                      analyticsLocation: n,
                  },
        [E] = (0, y.ED)(j);
    E = null != u ? u : E;
    let C = (0, _.Z)(),
        O = (0, R.$)(),
        v = (0, A.lr)(),
        S = N.ZP.isBaseSubscriptionCanceled(t),
        T = (0, D.P)(t, r);
    if (null == x || null == E) return (0, i.jsx)(g.$jN, {});
    let P = T ? (0, A.Yi)(E) : null,
        w = null != P || (null != v && (v.discountId === M.dT || v.discountId === M.dB)),
        B = T && ((S && null != O) || (!S && w));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: F.subscriptionRows,
                children: [
                    B
                        ? (0, i.jsx)(Z.Z, {
                              subscription: t,
                              currentInvoicePreview: x,
                              renewalInvoicePreview: E,
                              paymentSource: r,
                              discountOffer: O,
                              renewalChurnDiscountInfo: P,
                              discountInfo: v,
                              isLoading: s,
                              analyticsLocation: n,
                          })
                        : (0, i.jsx)(k.Z, {
                              subscription: t,
                              renewalInvoicePreview: x,
                              paymentSource: r,
                              busy: s,
                              analyticsLocation: n,
                          }),
                    (0, i.jsx)(H, {
                        subscription: t,
                        renewalInvoicePreview: x,
                        fromStandaloneBillingPage: l,
                        className: F.guildSubscriptionRow,
                        fractionalPremiumInfo: C,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(g.y5t, {
                    component: (0, i.jsx)(g.vwX, {
                        tag: "h5",
                        children: G.intl.string(G.t.Sb6wIy),
                    }),
                    children: (0, i.jsxs)("div", {
                        className: F.details,
                        children: [
                            (0, i.jsx)(K, {
                                subscription: t,
                                renewalInvoicePreview: E,
                                className: F.detailsBlock,
                                fractionalPremiumInfo: C,
                                openInvoice: m,
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(F.detailsBlock, { [F.redBorder]: o }),
                                children: [
                                    (0, i.jsx)(g.vwX, {
                                        tag: "h3",
                                        className: F.detailBlockHeader,
                                        children:
                                            t.isPurchasedExternally && null != t.paymentGateway
                                                ? G.intl.formatToPlainString(G.t.rTk9v7, {
                                                      paymentGatewayName: U.Vzj[t.paymentGateway],
                                                  })
                                                : G.intl.string(G.t.iRzXKS),
                                    }),
                                    (0, i.jsx)(L.Z, {
                                        subscription: t,
                                        onPaymentSourceAdded: I.i1,
                                        highlightAddPaymentMethodButton: c || o,
                                        analyticsLocation: n,
                                        currentInvoicePreview: x,
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
let J = new Set([U.O0b.ACTIVE, U.O0b.PAST_DUE, U.O0b.CANCELED, U.O0b.PAUSE_PENDING, U.O0b.PAUSED]);
function Q() {
    return (
        r.useEffect(() => {
            S.default.track(U.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, i.jsxs)("div", {
            className: F.duplicateSubscriptionsBanner,
            children: [
                (0, i.jsx)(g.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: m.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(g.Text, {
                    className: F.duplicateSubscriptionsBannerText,
                    variant: "text-sm/normal",
                    children: G.intl.format(G.t["6eXiiI"], { helpCenterLink: T.Z.getArticleURL(U.BhN.NITRO) }),
                }),
            ],
        })
    );
}
function $(e) {
    var t;
    let n,
        {
            subscription: r,
            subscriptions: s,
            paymentSource: a,
            busy: l,
            fromStandaloneBillingPage: o = !0,
            analyticsLocation: c,
        } = e;
    null != s && null != s[0] && (r = s[0]);
    let { analyticsLocations: m } = (0, b.ZP)(f.Z.SUBSCRIPTION_DETAILS),
        p = (0, R.$)(),
        h = null != s ? s.slice(1) : [],
        [x] = (0, y.ED)({
            subscriptionId: r.id,
            renewal: !0,
            analyticsLocations: m,
            analyticsLocation: c,
        }),
        [_] = (0, y.ED)({
            subscriptionId: r.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: c,
            userDiscountOfferId: null == p ? void 0 : p.id,
        }),
        j = null == a ? void 0 : a.invalid,
        E = (0, u.e7)([v.default], () => {
            var e;
            return null == (e = v.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        C = d()(r.currentPeriodEnd),
        S = null != r.paymentSourceId,
        T = null != (t = null == _ ? void 0 : _.total) ? t : 0,
        N =
            !S &&
            T > 0 &&
            (7 >= C.diff(d()(), "days") || r.status === U.O0b.PAST_DUE) &&
            !E &&
            !r.isPurchasedExternally,
        I = j && r.status === U.O0b.PAST_DUE && !E && !r.isPurchasedExternally,
        A = (0, P.U)(),
        D = !E && A,
        Z = (null == r ? void 0 : r.status) === U.O0b.PAST_DUE,
        w = Z ? d()().diff(d()(r.currentPeriodStart), "days") : 0,
        [k] = (0, y.Ox)({
            subscriptionId: r.id,
            preventFetch: !(D || Z),
        });
    return null == x || null == _
        ? (0, i.jsx)(g.$jN, {})
        : (null != r.renewalMutations &&
              ((r.renewalMutations.planId !== r.planId && !(0, O.Q0)(r.renewalMutations.planId)) ||
                  r.hasExternalPlanChange) &&
              (n = (0, i.jsx)(B.Z, {
                  subscription: r,
                  renewalMutations: r.renewalMutations,
                  className: F.renewalMutationNotice,
                  analyticsLocation: c,
              })),
          (0, i.jsx)("div", {
              children: (0, i.jsxs)(g.y5t, {
                  component: (0, i.jsx)(g.vwX, {
                      className: F.sectionTitle,
                      tag: "h1",
                      children: G.intl.string(G.t["/gs+Pz"]),
                  }),
                  children: [
                      N ? (0, i.jsx)(z, {}) : null,
                      I ? (0, i.jsx)(W, {}) : null,
                      D && null != k
                          ? (0, i.jsx)(Y, {
                                daysPastDue: w,
                                subscription: r,
                                openInvoiceId: k.id,
                            })
                          : null,
                      n,
                      (0, i.jsx)("div", {
                          children: (0, i.jsx)("p", {
                              className: F.sectionDescription,
                              children: G.intl.string(G.t.D8UpUl),
                          }),
                      }),
                      (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)("div", {
                                  className: h.length > 0 ? F.dupSubscriptionRow : F.__invalid_singleSubscription,
                                  children: (0, i.jsx)(X, {
                                      subscription: r,
                                      analyticsLocation: c,
                                      paymentSource: a,
                                      busy: l,
                                      fromStandaloneBillingPage: o,
                                      showNoPaymentMethod: N,
                                      showInvalidPaymentMethod: I,
                                      fetchedCurrentInvoicePreview: x,
                                      fetchedRenewalInvoicePreview: _,
                                      fetchedOpenInvoice: k,
                                  }),
                              }),
                              h.map((e, t) =>
                                  (0, i.jsxs)(
                                      "div",
                                      {
                                          className: F.dupSubscriptionRow,
                                          children: [
                                              (0, i.jsx)(g.vwX, {
                                                  tag: "h2",
                                                  className: F.duplicateHeader,
                                                  children: "Duplicate Subscriptions",
                                              }),
                                              (0, i.jsx)(X, {
                                                  subscription: e,
                                                  analyticsLocation: c,
                                                  paymentSource: a,
                                                  busy: l,
                                                  fromStandaloneBillingPage: o,
                                                  showNoPaymentMethod: N,
                                                  showInvalidPaymentMethod: I,
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
