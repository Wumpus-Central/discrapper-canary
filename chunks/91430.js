n.d(t, {
    MM: () => F,
    Yn: () => W,
    ZP: () => Y,
    eS: () => z
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    p = n(481060),
    g = n(230711),
    h = n(100527),
    f = n(906732),
    b = n(17894),
    _ = n(975298),
    x = n(600164),
    E = n(925329),
    C = n(963249),
    j = n(301766),
    O = n(594174),
    S = n(626135),
    v = n(63063),
    T = n(74538),
    I = n(212895),
    N = n(374649),
    y = n(160913),
    A = n(987997),
    P = n(393411),
    R = n(908951),
    D = n(592889),
    Z = n(981631),
    w = n(362786),
    k = n(388032),
    L = n(772526);
function B(e) {
    let t,
        { subscription: n, renewalInvoicePreview: r, fractionalPremiumInfo: s, fromStandaloneBillingPage: a = !0, className: c } = e,
        d = (0, u.e7)([O.default], () => {
            let e = O.default.getCurrentUser();
            return o()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e;
        });
    if (0 === (0, T.uV)(n.additionalPlans)) return null;
    let { status: m } = n,
        h = (0, T.v6)(n);
    if (h) t = L.guildBoostingSubscriptionRowCanceled;
    else
        switch (m) {
            case Z.O0b.PAST_DUE:
            case Z.O0b.ACCOUNT_HOLD:
            case Z.O0b.BILLING_RETRY:
                t = L.guildBoostingSubscriptionRowFailedPayment;
                break;
            case Z.O0b.PAUSE_PENDING:
            case Z.O0b.PAUSED:
                t = n.pauseReason !== w.Id.FRACTIONAL_PREMIUM ? L.guildBoostingSubscriptionRowPaused : L.guildBoostingSubscriptionRowActive;
                break;
            default:
                t = L.guildBoostingSubscriptionRowActive;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: l()(t, c),
                children: [
                    (0, i.jsx)('div', { className: L.guildBoostingSubscriptionRowBackground }),
                    (0, i.jsx)('div', { className: L.guildBoostingImage }),
                    (0, i.jsxs)('div', {
                        className: L.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, i.jsx)('div', { className: l()(L.guildBoostingWordmark, { [L.canceled]: h }) }),
                            (0, i.jsx)('div', {
                                children: (0, T.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: r,
                                    user: d,
                                    fractionalPremiumInfo: s
                                })
                            })
                        ]
                    }),
                    a &&
                        (0, i.jsx)(A.Z, {
                            color: p.zxk.Colors.BRAND,
                            onClick: () => g.Z.open(Z.oAB.GUILD_BOOSTING),
                            children: k.intl.string(k.t['NQ5g/f'])
                        })
                ]
            }),
            !a &&
                (0, i.jsx)(p.Text, {
                    className: L.boostingDesktopAppBlurb,
                    variant: 'text-sm/normal',
                    children: k.intl.format(k.t.k6haR0, { openAppHook: () => (0, b.Z)('app') })
                })
        ]
    });
}
function M() {
    return (
        r.useEffect(() => {
            S.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_missing_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.paymentBanner,
            children: [
                (0, i.jsx)(p.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: L.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(p.Text, {
                    className: L.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: k.intl.string(k.t.xFHEMT)
                })
            ]
        })
    );
}
function U() {
    return (
        r.useEffect(() => {
            S.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.paymentBanner,
            children: [
                (0, i.jsx)(p.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: L.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(p.Text, {
                    className: L.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: k.intl.string(k.t['j+nuQU'])
                })
            ]
        })
    );
}
function V(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: l } = (0, f.ZP)(h.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        r.useEffect(() => {
            S.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.paymentBanner,
            children: [
                (0, i.jsx)(p.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: L.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(p.Text, {
                    className: L.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: k.intl.format(k.t['0nbf/P'], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, C.Z)({
                                initialPlanId: n.planIdFromItems,
                                openInvoiceId: s,
                                analyticsLocations: l
                            });
                        }
                    })
                })
            ]
        })
    );
}
function G(e) {
    let { subscription: t, renewalInvoicePreview: n, className: r, fractionalPremiumInfo: s } = e;
    return (0, i.jsxs)('div', {
        className: l()(L.billingInformation, r),
        children: [
            (0, i.jsx)(p.vwX, {
                tag: 'h3',
                className: L.detailBlockHeader,
                children: k.intl.string(k.t.KXQjfX)
            }),
            (0, i.jsx)('div', { children: T.ZP.getBillingInformationString(t, n, !1, s) })
        ]
    });
}
function F() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(p.vwX, {
                className: L.sectionTitle,
                tag: 'h1',
                children: k.intl.string(k.t['/gs+Pz'])
            }),
            (0, i.jsx)('p', {
                className: L.sectionDescription,
                children: k.intl.string(k.t.D8UpUl)
            }),
            (0, i.jsx)(p.Zbd, {
                className: L.noItemsCard,
                type: p.Zbd.Types.CUSTOM,
                children: (0, i.jsxs)(x.Z, {
                    align: x.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(E.Z, {
                            game: null,
                            size: E.Z.Sizes.SMALL,
                            className: L.noItemsIcon
                        }),
                        (0, i.jsx)('span', {
                            className: L.cardText,
                            children: k.intl.string(k.t.xCRgr6)
                        })
                    ]
                })
            })
        ]
    });
}
function H(e) {
    let { subscription: t, analyticsLocation: n, paymentSource: r, busy: s, fromStandaloneBillingPage: a, showInvalidPaymentMethod: o, showNoPaymentMethod: c, fetchedCurrentInvoicePreview: d, fetchedRenewalInvoicePreview: u } = e,
        { analyticsLocations: m } = (0, f.ZP)(h.Z.SUBSCRIPTION_DETAILS),
        g =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [b] = (0, N.ED)(g);
    b = null != d ? d : b;
    let x =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [E] = (0, N.ED)(x);
    E = null != u ? u : E;
    let C = (0, _.Z)();
    return null == b || null == E
        ? (0, i.jsx)(p.$jN, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: L.subscriptionRows,
                      children: [
                          (0, i.jsx)(P.Z, {
                              subscription: t,
                              renewalInvoicePreview: b,
                              paymentSource: r,
                              busy: s,
                              analyticsLocation: n
                          }),
                          (0, i.jsx)(B, {
                              subscription: t,
                              renewalInvoicePreview: b,
                              fromStandaloneBillingPage: a,
                              className: L.guildSubscriptionRow,
                              fractionalPremiumInfo: C
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)(p.y5t, {
                          component: (0, i.jsx)(p.vwX, {
                              tag: 'h5',
                              children: k.intl.string(k.t.Sb6wIy)
                          }),
                          children: (0, i.jsxs)('div', {
                              className: L.details,
                              children: [
                                  (0, i.jsx)(G, {
                                      subscription: t,
                                      renewalInvoicePreview: E,
                                      className: L.detailsBlock,
                                      fractionalPremiumInfo: C
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: l()(L.detailsBlock, { [L.redBorder]: o }),
                                      children: [
                                          (0, i.jsx)(p.vwX, {
                                              tag: 'h3',
                                              className: L.detailBlockHeader,
                                              children: t.isPurchasedExternally && null != t.paymentGateway ? k.intl.formatToPlainString(k.t.rTk9v7, { paymentGatewayName: Z.Vzj[t.paymentGateway] }) : k.intl.string(k.t.iRzXKS)
                                          }),
                                          (0, i.jsx)(R.Z, {
                                              subscription: t,
                                              onPaymentSourceAdded: I.i1,
                                              highlightAddPaymentMethodButton: c || o,
                                              analyticsLocation: n,
                                              currentInvoicePreview: b,
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
let z = new Set([Z.O0b.ACTIVE, Z.O0b.PAST_DUE, Z.O0b.CANCELED, Z.O0b.PAUSE_PENDING, Z.O0b.PAUSED]);
function W() {
    return (
        r.useEffect(() => {
            S.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_duplicate_subscriptions' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.duplicateSubscriptionsBanner,
            children: [
                (0, i.jsx)(p.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(p.Text, {
                    className: L.duplicateSubscriptionsBannerText,
                    variant: 'text-sm/normal',
                    children: k.intl.format(k.t['6eXiiI'], { helpCenterLink: v.Z.getArticleURL(Z.BhN.NITRO) })
                })
            ]
        })
    );
}
function Y(e) {
    var t;
    let n,
        { subscription: r, subscriptions: s, paymentSource: l, busy: a, fromStandaloneBillingPage: o = !0, analyticsLocation: c } = e;
    null != s && null != s[0] && (r = s[0]);
    let { analyticsLocations: m } = (0, f.ZP)(h.Z.SUBSCRIPTION_DETAILS),
        g = null != s ? s.slice(1) : [],
        [b] = (0, N.ED)({
            subscriptionId: r.id,
            renewal: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        [_] = (0, N.ED)({
            subscriptionId: r.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        x = null == l ? void 0 : l.invalid,
        E = (0, u.e7)([O.default], () => {
            var e;
            return null == (e = O.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        C = d()(r.currentPeriodEnd),
        S = null != r.paymentSourceId,
        v = null != (t = null == _ ? void 0 : _.total) ? t : 0,
        T = !S && v > 0 && (7 >= C.diff(d()(), 'days') || r.status === Z.O0b.PAST_DUE) && !E && !r.isPurchasedExternally,
        I = x && r.status === Z.O0b.PAST_DUE && !E && !r.isPurchasedExternally,
        A = (0, y.U)(),
        P = !E && A,
        R = (null == r ? void 0 : r.status) === Z.O0b.PAST_DUE ? d()().diff(d()(r.currentPeriodStart), 'days') : 0,
        [w] = (0, N.Ox)({
            subscriptionId: r.id,
            preventFetch: !P
        });
    return null == b || null == _
        ? (0, i.jsx)(p.$jN, {})
        : (null != r.renewalMutations &&
              ((r.renewalMutations.planId !== r.planId && !(0, j.Q0)(r.renewalMutations.planId)) || r.hasExternalPlanChange) &&
              (n = (0, i.jsx)(D.Z, {
                  subscription: r,
                  renewalMutations: r.renewalMutations,
                  className: L.renewalMutationNotice,
                  analyticsLocation: c
              })),
          (0, i.jsx)('div', {
              children: (0, i.jsxs)(p.y5t, {
                  component: (0, i.jsx)(p.vwX, {
                      className: L.sectionTitle,
                      tag: 'h1',
                      children: k.intl.string(k.t['/gs+Pz'])
                  }),
                  children: [
                      T ? (0, i.jsx)(M, {}) : null,
                      I ? (0, i.jsx)(U, {}) : null,
                      P && null != w
                          ? (0, i.jsx)(V, {
                                daysPastDue: R,
                                subscription: r,
                                openInvoiceId: w.id
                            })
                          : null,
                      n,
                      (0, i.jsx)('div', {
                          children: (0, i.jsx)('p', {
                              className: L.sectionDescription,
                              children: k.intl.string(k.t.D8UpUl)
                          })
                      }),
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)('div', {
                                  className: g.length > 0 ? L.dupSubscriptionRow : L.__invalid_singleSubscription,
                                  children: (0, i.jsx)(H, {
                                      subscription: r,
                                      analyticsLocation: c,
                                      paymentSource: l,
                                      busy: a,
                                      fromStandaloneBillingPage: o,
                                      showNoPaymentMethod: T,
                                      showInvalidPaymentMethod: I,
                                      fetchedCurrentInvoicePreview: b,
                                      fetchedRenewalInvoicePreview: _
                                  })
                              }),
                              g.map((e, t) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: L.dupSubscriptionRow,
                                          children: [
                                              (0, i.jsx)(p.vwX, {
                                                  tag: 'h2',
                                                  className: L.duplicateHeader,
                                                  children: 'Duplicate Subscriptions'
                                              }),
                                              (0, i.jsx)(H, {
                                                  subscription: e,
                                                  analyticsLocation: c,
                                                  paymentSource: l,
                                                  busy: a,
                                                  fromStandaloneBillingPage: o,
                                                  showNoPaymentMethod: T,
                                                  showInvalidPaymentMethod: I,
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
