n.d(t, {
    MM: () => en,
    Yn: () => ea,
    ZP: () => eo,
    eS: () => ei,
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
    _ = n(704215),
    p = n(692547),
    h = n(481060),
    m = n(570140),
    g = n(100527),
    E = n(906732),
    b = n(17894),
    y = n(975298),
    O = n(600164),
    v = n(266454),
    I = n(925329),
    T = n(963249),
    S = n(313789),
    A = n(518596),
    C = n(301766),
    N = n(594174),
    R = n(626135),
    P = n(63063),
    D = n(74538),
    w = n(212895),
    L = n(374649),
    x = n(140465),
    M = n(160913),
    k = n(331972),
    j = n(757861),
    U = n(385251),
    G = n(987997),
    B = n(393411),
    Z = n(908951),
    F = n(592889),
    V = n(975772),
    H = n(474936),
    Y = n(981631),
    W = n(362786),
    K = n(921944),
    z = n(388032),
    q = n(336763);
let X = "app";
function Q(e) {
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
    let { status: _ } = n,
        p = (0, D.v6)(n);
    if (p) t = q.guildBoostingSubscriptionRowCanceled;
    else
        switch (_) {
            case Y.O0b.PAST_DUE:
            case Y.O0b.ACCOUNT_HOLD:
            case Y.O0b.BILLING_RETRY:
                t = q.guildBoostingSubscriptionRowFailedPayment;
                break;
            case Y.O0b.PAUSE_PENDING:
            case Y.O0b.PAUSED:
                t =
                    n.pauseReason !== W.Id.FRACTIONAL_PREMIUM
                        ? q.guildBoostingSubscriptionRowPaused
                        : q.guildBoostingSubscriptionRowActive;
                break;
            default:
                t = q.guildBoostingSubscriptionRowActive;
        }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(t, c),
                children: [
                    (0, r.jsx)("div", { className: q.guildBoostingSubscriptionRowBackground }),
                    (0, r.jsx)("div", { className: q.guildBoostingImage }),
                    (0, r.jsxs)("div", {
                        className: q.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, r.jsx)("div", { className: o()(q.guildBoostingWordmark, { [q.canceled]: p }) }),
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
                        (0, r.jsx)(G.Z, {
                            onClick: () =>
                                (0, A.openUserSettings)(S.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                    section: Y.oAB.GUILD_BOOSTING,
                                }),
                            text: z.intl.string(z.t["NQ5g/U"]),
                        }),
                ],
            }),
            !s &&
                (0, r.jsx)(h.Text, {
                    className: q.boostingDesktopAppBlurb,
                    variant: "text-sm/normal",
                    children: z.intl.format(d.tq ? z.t.uxYBEa : z.t.k6haR9, { openAppHook: () => (0, b.Z)(X) }),
                }),
        ],
    });
}
function J() {
    return (
        i.useEffect(() => {
            R.default.track(Y.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: q.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: q.paymentBannerIcon,
                    color: p.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: q.paymentBannerText,
                    variant: "text-sm/normal",
                    children: z.intl.string(z.t.xFHEMa),
                }),
            ],
        })
    );
}
function $() {
    return (
        i.useEffect(() => {
            R.default.track(Y.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: q.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: q.paymentBannerIcon,
                    color: p.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: q.paymentBannerText,
                    variant: "text-sm/normal",
                    children: z.intl.string(z.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function ee(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: a } = e,
        { analyticsLocations: o } = (0, E.ZP)(g.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            R.default.track(Y.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, r.jsxs)("div", {
            className: q.paymentBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: q.paymentBannerIcon,
                    color: p.Z.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: q.paymentBannerText,
                    variant: "text-sm/normal",
                    children: z.intl.format(z.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, T.Z)({
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
function et(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: i, className: a, fractionalPremiumInfo: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(q.billingInformation, a),
        children: [
            (0, r.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                className: q.detailBlockHeader,
                children: z.intl.string(z.t.KXQjfc),
            }),
            (0, r.jsx)("div", { children: D.ZP.getBillingInformationString(t, n, i, !1, s) }),
        ],
    });
}
function en() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(h.Heading, {
                variant: "heading-lg/semibold",
                className: q.sectionTitle,
                children: z.intl.string(z.t["/gs+Pz"]),
            }),
            (0, r.jsx)("p", {
                className: q.sectionDescription,
                children: z.intl.string(z.t.D8UpUo),
            }),
            (0, r.jsx)(h.Zbd, {
                className: q.noItemsCard,
                type: h.Zbd.Types.CUSTOM,
                children: (0, r.jsxs)(O.Z, {
                    align: O.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(I.Z, {
                            game: null,
                            size: I.A.SMALL,
                            className: q.noItemsIcon,
                        }),
                        (0, r.jsx)("span", {
                            className: q.cardText,
                            children: z.intl.string(z.t.xCRgr1),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function er(e) {
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
        [m] = (0, L.ED)(p);
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
        [O] = (0, L.ED)(b);
    O = null != d ? d : O;
    let v = (0, y.Z)(),
        I = (0, k.$)(),
        T = (0, x.lr)(),
        S = D.ZP.isBaseSubscriptionCanceled(t),
        A = (0, j.P)(t, i);
    if (null == m || null == O) return (0, r.jsx)(h.$jN, {});
    let C = A ? (0, x.Yi)(O) : null,
        N = null != C || (null != T && (T.discountId === H.dT || T.discountId === H.dB)),
        R = A && ((S && null != I) || (!S && N));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: q.subscriptionRows,
                children: [
                    R
                        ? (0, r.jsx)(U.Z, {
                              subscription: t,
                              invoicePreview: O,
                              paymentSource: i,
                              discountOffer: I,
                              renewalChurnDiscountInfo: C,
                              discountInfo: T,
                              isLoading: a,
                              analyticsLocation: n,
                          })
                        : (0, r.jsx)(B.Z, {
                              subscription: t,
                              renewalInvoicePreview: m,
                              paymentSource: i,
                              busy: a,
                              analyticsLocation: n,
                          }),
                    (0, r.jsx)(Q, {
                        subscription: t,
                        renewalInvoicePreview: m,
                        fromStandaloneBillingPage: s,
                        className: q.guildSubscriptionRow,
                        fractionalPremiumInfo: v,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(h.C3N, {
                    label: z.intl.string(z.t.Sb6wI1),
                    children: (0, r.jsxs)("div", {
                        className: q.details,
                        children: [
                            (0, r.jsx)(et, {
                                subscription: t,
                                renewalInvoicePreview: O,
                                className: q.detailsBlock,
                                fractionalPremiumInfo: v,
                                openInvoice: f,
                            }),
                            (0, r.jsx)("div", {
                                className: o()(q.detailsBlock, { [q.redBorder]: l }),
                                children: (0, r.jsx)(h.gNt, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? z.intl.formatToPlainString(z.t["rTk9v/"], {
                                                  paymentGatewayName: Y.Vzj[t.paymentGateway],
                                              })
                                            : z.intl.string(z.t.iRzXKd),
                                    children: (0, r.jsx)(Z.Z, {
                                        subscription: t,
                                        onPaymentSourceAdded: w.i1,
                                        highlightAddPaymentMethodButton: c || l,
                                        analyticsLocation: n,
                                        currentInvoicePreview: m,
                                        dropdownClassName: q.paymentDropdown,
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
let ei = new Set([Y.O0b.ACTIVE, Y.O0b.PAST_DUE, Y.O0b.CANCELED, Y.O0b.PAUSE_PENDING, Y.O0b.PAUSED]);
function ea() {
    return (
        i.useEffect(() => {
            R.default.track(Y.rMx.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, r.jsxs)("div", {
            className: q.duplicateSubscriptionsBanner,
            children: [
                (0, r.jsx)(h.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: p.Z.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: q.duplicateSubscriptionsBannerText,
                    variant: "text-sm/normal",
                    children: z.intl.format(z.t["6eXiiC"], { helpCenterLink: P.Z.getArticleURL(Y.BhN.NITRO) }),
                }),
            ],
        })
    );
}
function eo(e) {
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
    let { analyticsLocations: y } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS),
        O = (0, k.$)(),
        I = null != o ? o.slice(1) : [],
        [T, S] = i.useState(0);
    i.useEffect(() => {
        if (!b) return;
        let e = (e) => {
            e.subscription.id === a.id && S((e) => e + 1);
        };
        return (
            m.Z.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                m.Z.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [a.id, b]);
    let [A] = (0, L.ED)({
            subscriptionId: a.id,
            renewal: !0,
            analyticsLocations: y,
            analyticsLocation: d,
            fetchKey: T,
        }),
        [R] = (0, L.ED)({
            subscriptionId: a.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: y,
            analyticsLocation: d,
            userDiscountOfferId: null == O ? void 0 : O.id,
            fetchKey: T,
        }),
        D = (0, V.x)(),
        w = null == s ? void 0 : s.invalid,
        x = (0, f.e7)([N.default], () => {
            var e;
            return null == (e = N.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        j = u()(a.currentPeriodEnd),
        U = null != a.paymentSourceId,
        G = null != (t = null == R ? void 0 : R.total) ? t : 0,
        B =
            !U &&
            G > 0 &&
            (7 >= j.diff(u()(), "days") || a.status === Y.O0b.PAST_DUE) &&
            !x &&
            !a.isPurchasedExternally,
        Z = w && a.status === Y.O0b.PAST_DUE && !x && !a.isPurchasedExternally,
        H = (0, M.U)(),
        W = !x && H,
        X = (null == a ? void 0 : a.status) === Y.O0b.PAST_DUE,
        Q = X ? u()().diff(u()(a.currentPeriodStart), "days") : 0,
        [et] = (0, L.Ox)({
            subscriptionId: a.id,
            preventFetch: !(W || X),
        });
    return null == A || null == R
        ? (0, r.jsx)(h.$jN, {})
        : (null != a.renewalMutations &&
              ((a.renewalMutations.planId !== a.planId && !(0, C.Q0)(a.renewalMutations.planId)) ||
                  a.hasExternalPlanChange) &&
              (n = (0, r.jsx)(F.Z, {
                  subscription: a,
                  renewalMutations: a.renewalMutations,
                  className: q.renewalMutationNotice,
                  analyticsLocation: d,
              })),
          (0, r.jsxs)(h.C3N, {
              label: z.intl.string(z.t["/gs+Pz"]),
              description: z.intl.string(z.t.D8UpUo),
              children: [
                  B ? (0, r.jsx)(J, {}) : null,
                  Z ? (0, r.jsx)($, {}) : null,
                  W && null != et
                      ? (0, r.jsx)(ee, {
                            daysPastDue: Q,
                            subscription: a,
                            openInvoiceId: et.id,
                        })
                      : null,
                  n,
                  D &&
                      (0, r.jsx)(h.Wn, {
                          messageType: h.QYI.INFO,
                          action: (0, r.jsx)(h.P3F, {
                              onClick: () => {
                                  (0, v.Q3)(_.z.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
                                      dismissAction: K.L.USER_DISMISS,
                                  });
                              },
                              className: q.helpNoticeDismissIcon,
                              children: (0, r.jsx)(h.Dio, {
                                  size: "sm",
                                  color: p.Z.colors.ICON_PRIMARY,
                              }),
                          }),
                          children: z.intl.format(z.t.K4QorK, { helpdeskArticle: P.Z.getArticleURL(Y.BhN.BILLING) }),
                      }),
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)("div", {
                              className: I.length > 0 ? q.dupSubscriptionRow : q.__invalid_singleSubscription,
                              children: (0, r.jsx)(er, {
                                  subscription: a,
                                  analyticsLocation: d,
                                  paymentSource: s,
                                  busy: l,
                                  fromStandaloneBillingPage: c,
                                  showNoPaymentMethod: B,
                                  showInvalidPaymentMethod: Z,
                                  fetchedCurrentInvoicePreview: A,
                                  fetchedRenewalInvoicePreview: R,
                                  fetchedOpenInvoice: et,
                              }),
                          }),
                          I.map((e, t) =>
                              (0, r.jsxs)(
                                  "div",
                                  {
                                      className: q.dupSubscriptionRow,
                                      children: [
                                          (0, r.jsx)(h.Heading, {
                                              variant: "heading-md/semibold",
                                              className: q.duplicateHeader,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, r.jsx)(er, {
                                              subscription: e,
                                              analyticsLocation: d,
                                              paymentSource: s,
                                              busy: l,
                                              fromStandaloneBillingPage: c,
                                              showNoPaymentMethod: B,
                                              showInvalidPaymentMethod: Z,
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
