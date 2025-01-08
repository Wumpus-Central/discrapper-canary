n.d(t, {
    MM: function () {
        return V;
    },
    Yn: function () {
        return H;
    },
    ZP: function () {
        return z;
    },
    eS: function () {
        return Y;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    h = n(481060),
    g = n(230711),
    p = n(100527),
    x = n(906732),
    S = n(17894),
    T = n(975298),
    E = n(600164),
    C = n(925329),
    _ = n(963249),
    f = n(301766),
    I = n(594174),
    N = n(626135),
    A = n(63063),
    b = n(74538),
    v = n(212895),
    j = n(374649),
    O = n(160913),
    R = n(987997),
    P = n(393411),
    D = n(908951),
    y = n(592889),
    B = n(981631),
    L = n(388032),
    Z = n(112841);
function F(e) {
    let t,
        { subscription: n, renewalInvoicePreview: s, fromStandaloneBillingPage: r = !0, className: a } = e,
        c = (0, u.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return o()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e;
        });
    if (0 === (0, b.uV)(n.additionalPlans)) return null;
    let { status: d } = n,
        m = (0, b.v6)(n);
    if (m) t = Z.guildBoostingSubscriptionRowCanceled;
    else
        switch (d) {
            case B.O0b.PAST_DUE:
            case B.O0b.ACCOUNT_HOLD:
            case B.O0b.BILLING_RETRY:
                t = Z.guildBoostingSubscriptionRowFailedPayment;
                break;
            case B.O0b.PAUSE_PENDING:
            case B.O0b.PAUSED:
                t = Z.guildBoostingSubscriptionRowPaused;
                break;
            default:
                t = Z.guildBoostingSubscriptionRowActive;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: l()(t, a),
                children: [
                    (0, i.jsx)('div', { className: Z.guildBoostingSubscriptionRowBackground }),
                    (0, i.jsx)('div', { className: Z.guildBoostingImage }),
                    (0, i.jsxs)('div', {
                        className: Z.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, i.jsx)('div', { className: l()(Z.guildBoostingWordmark, { [Z.canceled]: m }) }),
                            (0, i.jsx)('div', {
                                children: (0, b.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: s,
                                    user: c
                                })
                            })
                        ]
                    }),
                    r &&
                        (0, i.jsx)(R.Z, {
                            color: h.Button.Colors.BRAND,
                            onClick: () => g.Z.open(B.oAB.GUILD_BOOSTING),
                            children: L.intl.string(L.t['NQ5g/f'])
                        })
                ]
            }),
            !r &&
                (0, i.jsx)(h.Text, {
                    className: Z.boostingDesktopAppBlurb,
                    variant: 'text-sm/normal',
                    children: L.intl.format(L.t.k6haR0, { openAppHook: () => (0, S.Z)('app') })
                })
        ]
    });
}
function M() {
    return (
        s.useEffect(() => {
            N.default.track(B.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_missing_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: Z.paymentBanner,
            children: [
                (0, i.jsx)(h.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: Z.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(h.Text, {
                    className: Z.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: L.intl.string(L.t.xFHEMT)
                })
            ]
        })
    );
}
function k() {
    return (
        s.useEffect(() => {
            N.default.track(B.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: Z.paymentBanner,
            children: [
                (0, i.jsx)(h.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: Z.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(h.Text, {
                    className: Z.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: L.intl.string(L.t['j+nuQU'])
                })
            ]
        })
    );
}
function w(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: r } = e,
        { analyticsLocations: l } = (0, x.ZP)(p.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        s.useEffect(() => {
            N.default.track(B.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: Z.paymentBanner,
            children: [
                (0, i.jsx)(h.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: Z.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(h.Text, {
                    className: Z.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: L.intl.format(L.t['0nbf/P'], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, _.Z)({
                                initialPlanId: n.planIdFromItems,
                                openInvoiceId: r,
                                analyticsLocations: l
                            });
                        }
                    })
                })
            ]
        })
    );
}
function U(e) {
    let { subscription: t, renewalInvoicePreview: n, className: s, fractionalPremiumInfo: r } = e;
    return (0, i.jsxs)('div', {
        className: l()(Z.billingInformation, s),
        children: [
            (0, i.jsx)(h.FormTitle, {
                tag: 'h3',
                className: Z.detailBlockHeader,
                children: L.intl.string(L.t.KXQjfX)
            }),
            (0, i.jsx)('div', { children: b.ZP.getBillingInformationString(t, n, !1, r) })
        ]
    });
}
function V() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(h.FormTitle, {
                className: Z.sectionTitle,
                tag: 'h1',
                children: L.intl.string(L.t['/gs+Pz'])
            }),
            (0, i.jsx)('p', {
                className: Z.sectionDescription,
                children: L.intl.string(L.t.D8UpUl)
            }),
            (0, i.jsx)(h.Card, {
                className: Z.noItemsCard,
                type: h.Card.Types.CUSTOM,
                children: (0, i.jsxs)(E.Z, {
                    align: E.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(C.Z, {
                            game: null,
                            size: C.Z.Sizes.SMALL,
                            className: Z.noItemsIcon
                        }),
                        (0, i.jsx)('span', {
                            className: Z.cardText,
                            children: L.intl.string(L.t.xCRgr6)
                        })
                    ]
                })
            })
        ]
    });
}
function G(e) {
    let { subscription: t, analyticsLocation: n, paymentSource: s, busy: r, fromStandaloneBillingPage: a, showInvalidPaymentMethod: o, showNoPaymentMethod: c, fetchedCurrentInvoicePreview: d, fetchedRenewalInvoicePreview: u } = e,
        { analyticsLocations: m } = (0, x.ZP)(p.Z.SUBSCRIPTION_DETAILS),
        g =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [S] = (0, j.ED)(g);
    S = null != d ? d : S;
    let E =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [C] = (0, j.ED)(E);
    C = null != u ? u : C;
    let _ = (0, T.Z)();
    return null == S || null == C
        ? (0, i.jsx)(h.Spinner, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: Z.subscriptionRows,
                      children: [
                          (0, i.jsx)(P.Z, {
                              subscription: t,
                              renewalInvoicePreview: S,
                              paymentSource: s,
                              busy: r,
                              analyticsLocation: n
                          }),
                          (0, i.jsx)(F, {
                              subscription: t,
                              renewalInvoicePreview: S,
                              fromStandaloneBillingPage: a,
                              className: Z.guildSubscriptionRow
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)(h.HeadingLevel, {
                          component: (0, i.jsx)(h.FormTitle, {
                              tag: 'h5',
                              children: L.intl.string(L.t.Sb6wIy)
                          }),
                          children: (0, i.jsxs)('div', {
                              className: Z.details,
                              children: [
                                  (0, i.jsx)(U, {
                                      subscription: t,
                                      renewalInvoicePreview: C,
                                      className: Z.detailsBlock,
                                      fractionalPremiumInfo: _
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: l()(Z.detailsBlock, { [Z.redBorder]: o }),
                                      children: [
                                          (0, i.jsx)(h.FormTitle, {
                                              tag: 'h3',
                                              className: Z.detailBlockHeader,
                                              children: t.isPurchasedExternally && null != t.paymentGateway ? L.intl.formatToPlainString(L.t.rTk9v7, { paymentGatewayName: B.Vzj[t.paymentGateway] }) : L.intl.string(L.t.iRzXKS)
                                          }),
                                          (0, i.jsx)(D.Z, {
                                              subscription: t,
                                              onPaymentSourceAdded: v.i1,
                                              highlightAddPaymentMethodButton: c || o,
                                              analyticsLocation: n,
                                              currentInvoicePreview: S,
                                              dropdownClassName: Z.paymentDropdown
                                          })
                                      ]
                                  })
                              ]
                          })
                      })
                  })
              ]
          });
}
let Y = new Set([B.O0b.ACTIVE, B.O0b.PAST_DUE, B.O0b.CANCELED, B.O0b.PAUSE_PENDING, B.O0b.PAUSED]);
function H() {
    return (
        s.useEffect(() => {
            N.default.track(B.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_duplicate_subscriptions' });
        }, []),
        (0, i.jsxs)('div', {
            className: Z.duplicateSubscriptionsBanner,
            children: [
                (0, i.jsx)(h.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(h.Text, {
                    className: Z.duplicateSubscriptionsBannerText,
                    variant: 'text-sm/normal',
                    children: L.intl.format(L.t['6eXiiI'], { helpCenterLink: A.Z.getArticleURL(B.BhN.NITRO) })
                })
            ]
        })
    );
}
function z(e) {
    var t;
    let n,
        { subscription: s, subscriptions: r, paymentSource: l, busy: a, fromStandaloneBillingPage: o = !0, analyticsLocation: c } = e;
    null != r && null != r[0] && (s = r[0]);
    let { analyticsLocations: m } = (0, x.ZP)(p.Z.SUBSCRIPTION_DETAILS),
        g = null != r ? r.slice(1) : [],
        [S] = (0, j.ED)({
            subscriptionId: s.id,
            renewal: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        [T] = (0, j.ED)({
            subscriptionId: s.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        E = null == l ? void 0 : l.invalid,
        C = (0, u.e7)([I.default], () => {
            var e;
            return null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium();
        }),
        _ = d()(s.currentPeriodEnd),
        N = null != s.paymentSourceId,
        A = null !== (t = null == T ? void 0 : T.total) && void 0 !== t ? t : 0,
        b = !N && A > 0 && (7 >= _.diff(d()(), 'days') || s.status === B.O0b.PAST_DUE) && !C && !s.isPurchasedExternally,
        v = E && s.status === B.O0b.PAST_DUE && !C && !s.isPurchasedExternally,
        R = (0, O.U)(),
        P = !C && R,
        D = (null == s ? void 0 : s.status) === B.O0b.PAST_DUE ? d()().diff(d()(s.currentPeriodStart), 'days') : 0,
        [F] = (0, j.Ox)({
            subscriptionId: s.id,
            preventFetch: !P
        });
    return null == S || null == T
        ? (0, i.jsx)(h.Spinner, {})
        : (null != s.renewalMutations &&
              ((s.renewalMutations.planId !== s.planId && !(0, f.Q0)(s.renewalMutations.planId)) || s.hasExternalPlanChange) &&
              (n = (0, i.jsx)(y.Z, {
                  subscription: s,
                  renewalMutations: s.renewalMutations,
                  className: Z.renewalMutationNotice,
                  analyticsLocation: c
              })),
          (0, i.jsx)('div', {
              children: (0, i.jsxs)(h.HeadingLevel, {
                  component: (0, i.jsx)(h.FormTitle, {
                      className: Z.sectionTitle,
                      tag: 'h1',
                      children: L.intl.string(L.t['/gs+Pz'])
                  }),
                  children: [
                      b ? (0, i.jsx)(M, {}) : null,
                      v ? (0, i.jsx)(k, {}) : null,
                      P && null != F
                          ? (0, i.jsx)(w, {
                                daysPastDue: D,
                                subscription: s,
                                openInvoiceId: F.id
                            })
                          : null,
                      n,
                      (0, i.jsx)('div', {
                          children: (0, i.jsx)('p', {
                              className: Z.sectionDescription,
                              children: L.intl.string(L.t.D8UpUl)
                          })
                      }),
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)('div', {
                                  className: g.length > 0 ? Z.dupSubscriptionRow : Z.__invalid_singleSubscription,
                                  children: (0, i.jsx)(G, {
                                      subscription: s,
                                      analyticsLocation: c,
                                      paymentSource: l,
                                      busy: a,
                                      fromStandaloneBillingPage: o,
                                      showNoPaymentMethod: b,
                                      showInvalidPaymentMethod: v,
                                      fetchedCurrentInvoicePreview: S,
                                      fetchedRenewalInvoicePreview: T
                                  })
                              }),
                              g.map((e, t) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: Z.dupSubscriptionRow,
                                          children: [
                                              (0, i.jsx)(h.FormTitle, {
                                                  tag: 'h2',
                                                  className: Z.duplicateHeader,
                                                  children: 'Duplicate Subscriptions'
                                              }),
                                              (0, i.jsx)(G, {
                                                  subscription: e,
                                                  analyticsLocation: c,
                                                  paymentSource: l,
                                                  busy: a,
                                                  fromStandaloneBillingPage: o,
                                                  showNoPaymentMethod: b,
                                                  showInvalidPaymentMethod: v,
                                                  fetchedCurrentInvoicePreview: null,
                                                  fetchedRenewalInvoicePreview: null
                                              })
                                          ]
                                      },
                                      t
                                  )
                              )
                          ]
                      })
                  ]
              })
          }));
}
