n.d(t, {
    MM: () => G,
    Yn: () => z,
    ZP: () => Y,
    eS: () => H
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    g = n(481060),
    p = n(230711),
    h = n(100527),
    f = n(906732),
    _ = n(17894),
    b = n(975298),
    N = n(600164),
    x = n(925329),
    E = n(963249),
    j = n(301766),
    C = n(594174),
    O = n(626135),
    S = n(63063),
    v = n(74538),
    T = n(212895),
    I = n(374649),
    y = n(160913),
    A = n(987997),
    P = n(393411),
    R = n(908951),
    D = n(592889),
    Z = n(981631),
    w = n(362786),
    k = n(388032),
    W = n(772526);
function L(e) {
    let t,
        { subscription: n, renewalInvoicePreview: i, fractionalPremiumInfo: s, fromStandaloneBillingPage: l = !0, className: c } = e,
        d = (0, u.e7)([C.default], () => {
            let e = C.default.getCurrentUser();
            return o()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e;
        });
    if (0 === (0, v.uV)(n.additionalPlans)) return null;
    let { status: m } = n,
        h = (0, v.v6)(n);
    if (h) t = W.guildBoostingSubscriptionRowCanceled;
    else
        switch (m) {
            case Z.O0b.PAST_DUE:
            case Z.O0b.ACCOUNT_HOLD:
            case Z.O0b.BILLING_RETRY:
                t = W.guildBoostingSubscriptionRowFailedPayment;
                break;
            case Z.O0b.PAUSE_PENDING:
            case Z.O0b.PAUSED:
                t = n.pauseReason !== w.Id.FRACTIONAL_PREMIUM ? W.guildBoostingSubscriptionRowPaused : W.guildBoostingSubscriptionRowActive;
                break;
            default:
                t = W.guildBoostingSubscriptionRowActive;
        }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(t, c),
                children: [
                    (0, r.jsx)('div', { className: W.guildBoostingSubscriptionRowBackground }),
                    (0, r.jsx)('div', { className: W.guildBoostingImage }),
                    (0, r.jsxs)('div', {
                        className: W.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, r.jsx)('div', { className: a()(W.guildBoostingWordmark, { [W.canceled]: h }) }),
                            (0, r.jsx)('div', {
                                children: (0, v.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: i,
                                    user: d,
                                    fractionalPremiumInfo: s
                                })
                            })
                        ]
                    }),
                    l &&
                        (0, r.jsx)(A.Z, {
                            color: g.zxk.Colors.BRAND,
                            onClick: () => p.Z.open(Z.oAB.GUILD_BOOSTING),
                            children: k.NW.string(k.t['NQ5g/f'])
                        })
                ]
            }),
            !l &&
                (0, r.jsx)(g.Text, {
                    className: W.boostingDesktopAppBlurb,
                    variant: 'text-sm/normal',
                    children: k.NW.format(k.t.k6haR0, { openAppHook: () => (0, _.Z)('app') })
                })
        ]
    });
}
function B() {
    return (
        i.useEffect(() => {
            O.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_missing_payment_method' });
        }, []),
        (0, r.jsxs)('div', {
            className: W.paymentBanner,
            children: [
                (0, r.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: W.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, r.jsx)(g.Text, {
                    className: W.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: k.NW.string(k.t.xFHEMT)
                })
            ]
        })
    );
}
function M() {
    return (
        i.useEffect(() => {
            O.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, r.jsxs)('div', {
            className: W.paymentBanner,
            children: [
                (0, r.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: W.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, r.jsx)(g.Text, {
                    className: W.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: k.NW.string(k.t['j+nuQU'])
                })
            ]
        })
    );
}
function U(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: a } = (0, f.ZP)(h.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            O.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, r.jsxs)('div', {
            className: W.paymentBanner,
            children: [
                (0, r.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: W.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, r.jsx)(g.Text, {
                    className: W.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: k.NW.format(k.t['0nbf/P'], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, E.Z)({
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
function V(e) {
    let { subscription: t, renewalInvoicePreview: n, className: i, fractionalPremiumInfo: s } = e;
    return (0, r.jsxs)('div', {
        className: a()(W.billingInformation, i),
        children: [
            (0, r.jsx)(g.vwX, {
                tag: 'h3',
                className: W.detailBlockHeader,
                children: k.NW.string(k.t.KXQjfX)
            }),
            (0, r.jsx)('div', { children: v.ZP.getBillingInformationString(t, n, !1, s) })
        ]
    });
}
function G() {
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(g.vwX, {
                className: W.sectionTitle,
                tag: 'h1',
                children: k.NW.string(k.t['/gs+Pz'])
            }),
            (0, r.jsx)('p', {
                className: W.sectionDescription,
                children: k.NW.string(k.t.D8UpUl)
            }),
            (0, r.jsx)(g.Zbd, {
                className: W.noItemsCard,
                type: g.Zbd.Types.CUSTOM,
                children: (0, r.jsxs)(N.Z, {
                    align: N.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(x.Z, {
                            game: null,
                            size: x.Z.Sizes.SMALL,
                            className: W.noItemsIcon
                        }),
                        (0, r.jsx)('span', {
                            className: W.cardText,
                            children: k.NW.string(k.t.xCRgr6)
                        })
                    ]
                })
            })
        ]
    });
}
function F(e) {
    let { subscription: t, analyticsLocation: n, paymentSource: i, busy: s, fromStandaloneBillingPage: l, showInvalidPaymentMethod: o, showNoPaymentMethod: c, fetchedCurrentInvoicePreview: d, fetchedRenewalInvoicePreview: u } = e,
        { analyticsLocations: m } = (0, f.ZP)(h.Z.SUBSCRIPTION_DETAILS),
        p =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [_] = (0, I.ED)(p);
    _ = null != d ? d : _;
    let N =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [x] = (0, I.ED)(N);
    x = null != u ? u : x;
    let E = (0, b.Z)();
    return null == _ || null == x
        ? (0, r.jsx)(g.$jN, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: W.subscriptionRows,
                      children: [
                          (0, r.jsx)(P.Z, {
                              subscription: t,
                              renewalInvoicePreview: _,
                              paymentSource: i,
                              busy: s,
                              analyticsLocation: n
                          }),
                          (0, r.jsx)(L, {
                              subscription: t,
                              renewalInvoicePreview: _,
                              fromStandaloneBillingPage: l,
                              className: W.guildSubscriptionRow,
                              fractionalPremiumInfo: E
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)(g.y5t, {
                          component: (0, r.jsx)(g.vwX, {
                              tag: 'h5',
                              children: k.NW.string(k.t.Sb6wIy)
                          }),
                          children: (0, r.jsxs)('div', {
                              className: W.details,
                              children: [
                                  (0, r.jsx)(V, {
                                      subscription: t,
                                      renewalInvoicePreview: x,
                                      className: W.detailsBlock,
                                      fractionalPremiumInfo: E
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: a()(W.detailsBlock, { [W.redBorder]: o }),
                                      children: [
                                          (0, r.jsx)(g.vwX, {
                                              tag: 'h3',
                                              className: W.detailBlockHeader,
                                              children: t.isPurchasedExternally && null != t.paymentGateway ? k.NW.formatToPlainString(k.t.rTk9v7, { paymentGatewayName: Z.Vzj[t.paymentGateway] }) : k.NW.string(k.t.iRzXKS)
                                          }),
                                          (0, r.jsx)(R.Z, {
                                              subscription: t,
                                              onPaymentSourceAdded: T.i1,
                                              highlightAddPaymentMethodButton: c || o,
                                              analyticsLocation: n,
                                              currentInvoicePreview: _,
                                              dropdownClassName: W.paymentDropdown
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
let H = new Set([Z.O0b.ACTIVE, Z.O0b.PAST_DUE, Z.O0b.CANCELED, Z.O0b.PAUSE_PENDING, Z.O0b.PAUSED]);
function z() {
    return (
        i.useEffect(() => {
            O.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_duplicate_subscriptions' });
        }, []),
        (0, r.jsxs)('div', {
            className: W.duplicateSubscriptionsBanner,
            children: [
                (0, r.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, r.jsx)(g.Text, {
                    className: W.duplicateSubscriptionsBannerText,
                    variant: 'text-sm/normal',
                    children: k.NW.format(k.t['6eXiiI'], { helpCenterLink: S.Z.getArticleURL(Z.BhN.NITRO) })
                })
            ]
        })
    );
}
function Y(e) {
    var t;
    let n,
        { subscription: i, subscriptions: s, paymentSource: a, busy: l, fromStandaloneBillingPage: o = !0, analyticsLocation: c } = e;
    null != s && null != s[0] && (i = s[0]);
    let { analyticsLocations: m } = (0, f.ZP)(h.Z.SUBSCRIPTION_DETAILS),
        p = null != s ? s.slice(1) : [],
        [_] = (0, I.ED)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        [b] = (0, I.ED)({
            subscriptionId: i.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        N = null == a ? void 0 : a.invalid,
        x = (0, u.e7)([C.default], () => {
            var e;
            return null == (e = C.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        E = d()(i.currentPeriodEnd),
        O = null != i.paymentSourceId,
        S = null != (t = null == b ? void 0 : b.total) ? t : 0,
        v = !O && S > 0 && (7 >= E.diff(d()(), 'days') || i.status === Z.O0b.PAST_DUE) && !x && !i.isPurchasedExternally,
        T = N && i.status === Z.O0b.PAST_DUE && !x && !i.isPurchasedExternally,
        A = (0, y.U)(),
        P = !x && A,
        R = (null == i ? void 0 : i.status) === Z.O0b.PAST_DUE ? d()().diff(d()(i.currentPeriodStart), 'days') : 0,
        [w] = (0, I.Ox)({
            subscriptionId: i.id,
            preventFetch: !P
        });
    return null == _ || null == b
        ? (0, r.jsx)(g.$jN, {})
        : (null != i.renewalMutations &&
              ((i.renewalMutations.planId !== i.planId && !(0, j.Q0)(i.renewalMutations.planId)) || i.hasExternalPlanChange) &&
              (n = (0, r.jsx)(D.Z, {
                  subscription: i,
                  renewalMutations: i.renewalMutations,
                  className: W.renewalMutationNotice,
                  analyticsLocation: c
              })),
          (0, r.jsx)('div', {
              children: (0, r.jsxs)(g.y5t, {
                  component: (0, r.jsx)(g.vwX, {
                      className: W.sectionTitle,
                      tag: 'h1',
                      children: k.NW.string(k.t['/gs+Pz'])
                  }),
                  children: [
                      v ? (0, r.jsx)(B, {}) : null,
                      T ? (0, r.jsx)(M, {}) : null,
                      P && null != w
                          ? (0, r.jsx)(U, {
                                daysPastDue: R,
                                subscription: i,
                                openInvoiceId: w.id
                            })
                          : null,
                      n,
                      (0, r.jsx)('div', {
                          children: (0, r.jsx)('p', {
                              className: W.sectionDescription,
                              children: k.NW.string(k.t.D8UpUl)
                          })
                      }),
                      (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)('div', {
                                  className: p.length > 0 ? W.dupSubscriptionRow : W.__invalid_singleSubscription,
                                  children: (0, r.jsx)(F, {
                                      subscription: i,
                                      analyticsLocation: c,
                                      paymentSource: a,
                                      busy: l,
                                      fromStandaloneBillingPage: o,
                                      showNoPaymentMethod: v,
                                      showInvalidPaymentMethod: T,
                                      fetchedCurrentInvoicePreview: _,
                                      fetchedRenewalInvoicePreview: b
                                  })
                              }),
                              p.map((e, t) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: W.dupSubscriptionRow,
                                          children: [
                                              (0, r.jsx)(g.vwX, {
                                                  tag: 'h2',
                                                  className: W.duplicateHeader,
                                                  children: 'Duplicate Subscriptions'
                                              }),
                                              (0, r.jsx)(F, {
                                                  subscription: e,
                                                  analyticsLocation: c,
                                                  paymentSource: a,
                                                  busy: l,
                                                  fromStandaloneBillingPage: o,
                                                  showNoPaymentMethod: v,
                                                  showInvalidPaymentMethod: T,
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
