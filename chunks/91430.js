n.d(t, {
    MM: function () {
        return V;
    },
    Yn: function () {
        return Y;
    },
    ZP: function () {
        return W;
    },
    eS: function () {
        return H;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    g = n(481060),
    h = n(230711),
    p = n(100527),
    x = n(906732),
    f = n(17894),
    E = n(975298),
    _ = n(600164),
    C = n(925329),
    T = n(963249),
    S = n(301766),
    b = n(594174),
    I = n(626135),
    N = n(63063),
    v = n(74538),
    A = n(212895),
    j = n(374649),
    O = n(160913),
    R = n(987997),
    P = n(393411),
    D = n(908951),
    y = n(592889),
    B = n(981631),
    Z = n(388032),
    L = n(112841);
function M(e) {
    let t,
        { subscription: n, renewalInvoicePreview: r, fromStandaloneBillingPage: s = !0, className: l } = e,
        c = (0, u.e7)([b.default], () => {
            let e = b.default.getCurrentUser();
            return o()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e;
        });
    if (0 === (0, v.uV)(n.additionalPlans)) return null;
    let { status: d } = n,
        m = (0, v.v6)(n);
    if (m) t = L.guildBoostingSubscriptionRowCanceled;
    else
        switch (d) {
            case B.O0b.PAST_DUE:
            case B.O0b.ACCOUNT_HOLD:
            case B.O0b.BILLING_RETRY:
                t = L.guildBoostingSubscriptionRowFailedPayment;
                break;
            case B.O0b.PAUSE_PENDING:
            case B.O0b.PAUSED:
                t = L.guildBoostingSubscriptionRowPaused;
                break;
            default:
                t = L.guildBoostingSubscriptionRowActive;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: a()(t, l),
                children: [
                    (0, i.jsx)('div', { className: L.guildBoostingSubscriptionRowBackground }),
                    (0, i.jsx)('div', { className: L.guildBoostingImage }),
                    (0, i.jsxs)('div', {
                        className: L.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, i.jsx)('div', { className: a()(L.guildBoostingWordmark, { [L.canceled]: m }) }),
                            (0, i.jsx)('div', {
                                children: (0, v.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: r,
                                    user: c
                                })
                            })
                        ]
                    }),
                    s &&
                        (0, i.jsx)(R.Z, {
                            color: g.Button.Colors.BRAND,
                            onClick: () => h.Z.open(B.oAB.GUILD_BOOSTING),
                            children: Z.intl.string(Z.t['NQ5g/f'])
                        })
                ]
            }),
            !s &&
                (0, i.jsx)(g.Text, {
                    className: L.boostingDesktopAppBlurb,
                    variant: 'text-sm/normal',
                    children: Z.intl.format(Z.t.k6haR0, { openAppHook: () => (0, f.Z)('app') })
                })
        ]
    });
}
function k() {
    return (
        r.useEffect(() => {
            I.default.track(B.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_missing_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.paymentBanner,
            children: [
                (0, i.jsx)(g.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: L.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(g.Text, {
                    className: L.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: Z.intl.string(Z.t.xFHEMT)
                })
            ]
        })
    );
}
function w() {
    return (
        r.useEffect(() => {
            I.default.track(B.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.paymentBanner,
            children: [
                (0, i.jsx)(g.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: L.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(g.Text, {
                    className: L.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: Z.intl.string(Z.t['j+nuQU'])
                })
            ]
        })
    );
}
function F(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: a } = (0, x.ZP)(p.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        r.useEffect(() => {
            I.default.track(B.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.paymentBanner,
            children: [
                (0, i.jsx)(g.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: L.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(g.Text, {
                    className: L.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: Z.intl.format(Z.t['0nbf/P'], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, T.Z)({
                                initialPlanId: n.planIdFromItems,
                                openInvoiceId: s,
                                analyticsLocations: a
                            });
                        }
                    })
                })
            ]
        })
    );
}
function U(e) {
    let { subscription: t, renewalInvoicePreview: n, className: r, fractionalPremiumInfo: s } = e;
    return (0, i.jsxs)('div', {
        className: a()(L.billingInformation, r),
        children: [
            (0, i.jsx)(g.FormTitle, {
                tag: 'h3',
                className: L.detailBlockHeader,
                children: Z.intl.string(Z.t.KXQjfX)
            }),
            (0, i.jsx)('div', { children: v.ZP.getBillingInformationString(t, n, !1, s) })
        ]
    });
}
function V() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.FormTitle, {
                className: L.sectionTitle,
                tag: 'h1',
                children: Z.intl.string(Z.t['/gs+Pz'])
            }),
            (0, i.jsx)('p', {
                className: L.sectionDescription,
                children: Z.intl.string(Z.t.D8UpUl)
            }),
            (0, i.jsx)(g.Card, {
                className: L.noItemsCard,
                type: g.Card.Types.CUSTOM,
                children: (0, i.jsxs)(_.Z, {
                    align: _.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(C.Z, {
                            game: null,
                            size: C.Z.Sizes.SMALL,
                            className: L.noItemsIcon
                        }),
                        (0, i.jsx)('span', {
                            className: L.cardText,
                            children: Z.intl.string(Z.t.xCRgr6)
                        })
                    ]
                })
            })
        ]
    });
}
function G(e) {
    let { subscription: t, analyticsLocation: n, paymentSource: r, busy: s, fromStandaloneBillingPage: l, showInvalidPaymentMethod: o, showNoPaymentMethod: c, fetchedCurrentInvoicePreview: d, fetchedRenewalInvoicePreview: u } = e,
        { analyticsLocations: m } = (0, x.ZP)(p.Z.SUBSCRIPTION_DETAILS),
        h =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [f] = (0, j.ED)(h);
    f = null != d ? d : f;
    let _ =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [C] = (0, j.ED)(_);
    C = null != u ? u : C;
    let T = (0, E.Z)();
    return null == f || null == C
        ? (0, i.jsx)(g.Spinner, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: L.subscriptionRows,
                      children: [
                          (0, i.jsx)(P.Z, {
                              subscription: t,
                              renewalInvoicePreview: f,
                              paymentSource: r,
                              busy: s,
                              analyticsLocation: n
                          }),
                          (0, i.jsx)(M, {
                              subscription: t,
                              renewalInvoicePreview: f,
                              fromStandaloneBillingPage: l,
                              className: L.guildSubscriptionRow
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)(g.HeadingLevel, {
                          component: (0, i.jsx)(g.FormTitle, {
                              tag: 'h5',
                              children: Z.intl.string(Z.t.Sb6wIy)
                          }),
                          children: (0, i.jsxs)('div', {
                              className: L.details,
                              children: [
                                  (0, i.jsx)(U, {
                                      subscription: t,
                                      renewalInvoicePreview: C,
                                      className: L.detailsBlock,
                                      fractionalPremiumInfo: T
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: a()(L.detailsBlock, { [L.redBorder]: o }),
                                      children: [
                                          (0, i.jsx)(g.FormTitle, {
                                              tag: 'h3',
                                              className: L.detailBlockHeader,
                                              children: t.isPurchasedExternally && null != t.paymentGateway ? Z.intl.formatToPlainString(Z.t.rTk9v7, { paymentGatewayName: B.Vzj[t.paymentGateway] }) : Z.intl.string(Z.t.iRzXKS)
                                          }),
                                          (0, i.jsx)(D.Z, {
                                              subscription: t,
                                              onPaymentSourceAdded: A.i1,
                                              highlightAddPaymentMethodButton: c || o,
                                              analyticsLocation: n,
                                              currentInvoicePreview: f,
                                              dropdownClassName: L.paymentDropdown
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
let H = new Set([B.O0b.ACTIVE, B.O0b.PAST_DUE, B.O0b.CANCELED, B.O0b.PAUSE_PENDING, B.O0b.PAUSED]);
function Y() {
    return (
        r.useEffect(() => {
            I.default.track(B.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_duplicate_subscriptions' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.duplicateSubscriptionsBanner,
            children: [
                (0, i.jsx)(g.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(g.Text, {
                    className: L.duplicateSubscriptionsBannerText,
                    variant: 'text-sm/normal',
                    children: Z.intl.format(Z.t['6eXiiI'], { helpCenterLink: N.Z.getArticleURL(B.BhN.NITRO) })
                })
            ]
        })
    );
}
function W(e) {
    var t;
    let n,
        { subscription: r, subscriptions: s, paymentSource: a, busy: l, fromStandaloneBillingPage: o = !0, analyticsLocation: c } = e;
    null != s && null != s[0] && (r = s[0]);
    let { analyticsLocations: m } = (0, x.ZP)(p.Z.SUBSCRIPTION_DETAILS),
        h = null != s ? s.slice(1) : [],
        [f] = (0, j.ED)({
            subscriptionId: r.id,
            renewal: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        [E] = (0, j.ED)({
            subscriptionId: r.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        _ = null == a ? void 0 : a.invalid,
        C = (0, u.e7)([b.default], () => {
            var e;
            return null === (e = b.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium();
        }),
        T = d()(r.currentPeriodEnd),
        I = null != r.paymentSourceId,
        N = null !== (t = null == E ? void 0 : E.total) && void 0 !== t ? t : 0,
        v = !I && N > 0 && (7 >= T.diff(d()(), 'days') || r.status === B.O0b.PAST_DUE) && !C && !r.isPurchasedExternally,
        A = _ && r.status === B.O0b.PAST_DUE && !C && !r.isPurchasedExternally,
        R = (0, O.U)(),
        P = !C && R,
        D = (null == r ? void 0 : r.status) === B.O0b.PAST_DUE ? d()().diff(d()(r.currentPeriodStart), 'days') : 0,
        [M] = (0, j.Ox)({
            subscriptionId: r.id,
            preventFetch: !P
        });
    return null == f || null == E
        ? (0, i.jsx)(g.Spinner, {})
        : (null != r.renewalMutations &&
              ((r.renewalMutations.planId !== r.planId && !(0, S.Q0)(r.renewalMutations.planId)) || r.hasExternalPlanChange) &&
              (n = (0, i.jsx)(y.Z, {
                  subscription: r,
                  renewalMutations: r.renewalMutations,
                  className: L.renewalMutationNotice,
                  analyticsLocation: c
              })),
          (0, i.jsx)('div', {
              children: (0, i.jsxs)(g.HeadingLevel, {
                  component: (0, i.jsx)(g.FormTitle, {
                      className: L.sectionTitle,
                      tag: 'h1',
                      children: Z.intl.string(Z.t['/gs+Pz'])
                  }),
                  children: [
                      v ? (0, i.jsx)(k, {}) : null,
                      A ? (0, i.jsx)(w, {}) : null,
                      P && null != M
                          ? (0, i.jsx)(F, {
                                daysPastDue: D,
                                subscription: r,
                                openInvoiceId: M.id
                            })
                          : null,
                      n,
                      (0, i.jsx)('div', {
                          children: (0, i.jsx)('p', {
                              className: L.sectionDescription,
                              children: Z.intl.string(Z.t.D8UpUl)
                          })
                      }),
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)('div', {
                                  className: h.length > 0 ? L.dupSubscriptionRow : L.__invalid_singleSubscription,
                                  children: (0, i.jsx)(G, {
                                      subscription: r,
                                      analyticsLocation: c,
                                      paymentSource: a,
                                      busy: l,
                                      fromStandaloneBillingPage: o,
                                      showNoPaymentMethod: v,
                                      showInvalidPaymentMethod: A,
                                      fetchedCurrentInvoicePreview: f,
                                      fetchedRenewalInvoicePreview: E
                                  })
                              }),
                              h.map((e, t) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: L.dupSubscriptionRow,
                                          children: [
                                              (0, i.jsx)(g.FormTitle, {
                                                  tag: 'h2',
                                                  className: L.duplicateHeader,
                                                  children: 'Duplicate Subscriptions'
                                              }),
                                              (0, i.jsx)(G, {
                                                  subscription: e,
                                                  analyticsLocation: c,
                                                  paymentSource: a,
                                                  busy: l,
                                                  fromStandaloneBillingPage: o,
                                                  showNoPaymentMethod: v,
                                                  showInvalidPaymentMethod: A,
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
