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
    p = n(481060),
    h = n(570140),
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
    L = n(160913),
    x = n(331972),
    M = n(757861),
    j = n(385251),
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
        h = (0, R.v6)(n);
    if (h) t = Y.guildBoostingSubscriptionRowCanceled;
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
                            (0, r.jsx)("div", { className: o()(Y.guildBoostingWordmark, { [Y.canceled]: h }) }),
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
                            onClick: () =>
                                (0, T.openUserSettings)(I.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                    section: F.oAB.GUILD_BOOSTING,
                                }),
                            text: H.intl.string(H.t["NQ5g/f"]),
                        }),
                ],
            }),
            !s &&
                (0, r.jsx)(p.Text, {
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
                (0, r.jsx)(p.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Y.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(p.Text, {
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
                (0, r.jsx)(p.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Y.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(p.Text, {
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
                (0, r.jsx)(p.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Y.paymentBannerIcon,
                    color: _.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(p.Text, {
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
            (0, r.jsx)(p.Heading, {
                variant: "heading-md/semibold",
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
            (0, r.jsx)(p.Heading, {
                variant: "heading-lg/semibold",
                className: Y.sectionTitle,
                children: H.intl.string(H.t["/gs+Pz"]),
            }),
            (0, r.jsx)("p", {
                className: Y.sectionDescription,
                children: H.intl.string(H.t.D8UpUl),
            }),
            (0, r.jsx)(p.Zbd, {
                className: Y.noItemsCard,
                type: p.Zbd.Types.CUSTOM,
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
        h =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: _,
                      analyticsLocation: n,
                  },
        [E] = (0, w.ED)(h);
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
        I = (0, x.$)(),
        T = (0, D.lr)(),
        S = R.ZP.isBaseSubscriptionCanceled(t),
        A = (0, M.P)(t, i);
    if (null == E || null == O) return (0, r.jsx)(p.$jN, {});
    let C = A ? (0, D.Yi)(O) : null,
        N = null != C || (null != T && (T.discountId === Z.dT || T.discountId === Z.dB)),
        L = A && ((S && null != I) || (!S && N));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: Y.subscriptionRows,
                children: [
                    L
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
                children: (0, r.jsx)(p.C3N, {
                    label: H.intl.string(H.t.Sb6wIy),
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
                            (0, r.jsx)("div", {
                                className: o()(Y.detailsBlock, { [Y.redBorder]: l }),
                                children: (0, r.jsx)(p.gNt, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? H.intl.formatToPlainString(H.t.rTk9v7, {
                                                  paymentGatewayName: F.Vzj[t.paymentGateway],
                                              })
                                            : H.intl.string(H.t.iRzXKS),
                                    children: (0, r.jsx)(G.Z, {
                                        subscription: t,
                                        onPaymentSourceAdded: P.i1,
                                        highlightAddPaymentMethodButton: c || l,
                                        analyticsLocation: n,
                                        currentInvoicePreview: E,
                                        dropdownClassName: Y.paymentDropdown,
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
let ee = new Set([F.O0b.ACTIVE, F.O0b.PAST_DUE, F.O0b.CANCELED, F.O0b.PAUSE_PENDING, F.O0b.PAUSED]);
function et() {
    return (
        i.useEffect(() => {
            C.default.track(F.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, r.jsxs)("div", {
            className: Y.duplicateSubscriptionsBanner,
            children: [
                (0, r.jsx)(p.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(p.Text, {
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
            subscription: a,
            subscriptions: o,
            paymentSource: s,
            busy: l,
            fromStandaloneBillingPage: c = !0,
            analyticsLocation: d,
            shouldRefetchInvoicesOnSubscriptionUpdate: _,
        } = e;
    null != o && null != o[0] && (a = o[0]);
    let { analyticsLocations: E } = (0, g.ZP)(m.Z.SUBSCRIPTION_DETAILS),
        b = (0, x.$)(),
        y = null != o ? o.slice(1) : [],
        [O, v] = i.useState(0);
    i.useEffect(() => {
        if (!_) return;
        let e = (e) => {
            e.subscription.id === a.id && v((e) => e + 1);
        };
        return (
            h.Z.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                h.Z.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [a.id, _]);
    let [I] = (0, w.ED)({
            subscriptionId: a.id,
            renewal: !0,
            analyticsLocations: E,
            analyticsLocation: d,
            fetchKey: O,
        }),
        [T] = (0, w.ED)({
            subscriptionId: a.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: E,
            analyticsLocation: d,
            userDiscountOfferId: null == b ? void 0 : b.id,
            fetchKey: O,
        }),
        C = null == s ? void 0 : s.invalid,
        N = (0, f.e7)([A.default], () => {
            var e;
            return null == (e = A.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        R = u()(a.currentPeriodEnd),
        P = null != a.paymentSourceId,
        D = null != (t = null == T ? void 0 : T.total) ? t : 0,
        M =
            !P &&
            D > 0 &&
            (7 >= R.diff(u()(), "days") || a.status === F.O0b.PAST_DUE) &&
            !N &&
            !a.isPurchasedExternally,
        j = C && a.status === F.O0b.PAST_DUE && !N && !a.isPurchasedExternally,
        k = (0, L.U)(),
        U = !N && k,
        G = (null == a ? void 0 : a.status) === F.O0b.PAST_DUE,
        Z = G ? u()().diff(u()(a.currentPeriodStart), "days") : 0,
        [V] = (0, w.Ox)({
            subscriptionId: a.id,
            preventFetch: !(U || G),
        });
    return null == I || null == T
        ? (0, r.jsx)(p.$jN, {})
        : (null != a.renewalMutations &&
              ((a.renewalMutations.planId !== a.planId && !(0, S.Q0)(a.renewalMutations.planId)) ||
                  a.hasExternalPlanChange) &&
              (n = (0, r.jsx)(B.Z, {
                  subscription: a,
                  renewalMutations: a.renewalMutations,
                  className: Y.renewalMutationNotice,
                  analyticsLocation: d,
              })),
          (0, r.jsxs)(p.C3N, {
              label: H.intl.string(H.t["/gs+Pz"]),
              description: H.intl.string(H.t.D8UpUl),
              children: [
                  M ? (0, r.jsx)(z, {}) : null,
                  j ? (0, r.jsx)(q, {}) : null,
                  U && null != V
                      ? (0, r.jsx)(X, {
                            daysPastDue: Z,
                            subscription: a,
                            openInvoiceId: V.id,
                        })
                      : null,
                  n,
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)("div", {
                              className: y.length > 0 ? Y.dupSubscriptionRow : Y.__invalid_singleSubscription,
                              children: (0, r.jsx)($, {
                                  subscription: a,
                                  analyticsLocation: d,
                                  paymentSource: s,
                                  busy: l,
                                  fromStandaloneBillingPage: c,
                                  showNoPaymentMethod: M,
                                  showInvalidPaymentMethod: j,
                                  fetchedCurrentInvoicePreview: I,
                                  fetchedRenewalInvoicePreview: T,
                                  fetchedOpenInvoice: V,
                              }),
                          }),
                          y.map((e, t) =>
                              (0, r.jsxs)(
                                  "div",
                                  {
                                      className: Y.dupSubscriptionRow,
                                      children: [
                                          (0, r.jsx)(p.Heading, {
                                              variant: "heading-md/semibold",
                                              className: Y.duplicateHeader,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, r.jsx)($, {
                                              subscription: e,
                                              analyticsLocation: d,
                                              paymentSource: s,
                                              busy: l,
                                              fromStandaloneBillingPage: c,
                                              showNoPaymentMethod: M,
                                              showInvalidPaymentMethod: j,
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
          }));
}
