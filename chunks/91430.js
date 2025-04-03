n.d(t, {
    MM: () => V,
    Yn: () => H,
    ZP: () => z,
    eS: () => F
}),
    n(47120);
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
    b = n(17894),
    N = n(975298),
    x = n(600164),
    _ = n(925329),
    E = n(963249),
    j = n(301766),
    O = n(594174),
    C = n(626135),
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
    w = n(388032),
    k = n(772526);
function W(e) {
    let t,
        { subscription: n, renewalInvoicePreview: i, fromStandaloneBillingPage: s = !0, className: l } = e,
        c = (0, u.e7)([O.default], () => {
            let e = O.default.getCurrentUser();
            return o()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e;
        });
    if (0 === (0, v.uV)(n.additionalPlans)) return null;
    let { status: d } = n,
        m = (0, v.v6)(n);
    if (m) t = k.guildBoostingSubscriptionRowCanceled;
    else
        switch (d) {
            case Z.O0b.PAST_DUE:
            case Z.O0b.ACCOUNT_HOLD:
            case Z.O0b.BILLING_RETRY:
                t = k.guildBoostingSubscriptionRowFailedPayment;
                break;
            case Z.O0b.PAUSE_PENDING:
            case Z.O0b.PAUSED:
                t = k.guildBoostingSubscriptionRowPaused;
                break;
            default:
                t = k.guildBoostingSubscriptionRowActive;
        }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(t, l),
                children: [
                    (0, r.jsx)('div', { className: k.guildBoostingSubscriptionRowBackground }),
                    (0, r.jsx)('div', { className: k.guildBoostingImage }),
                    (0, r.jsxs)('div', {
                        className: k.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, r.jsx)('div', { className: a()(k.guildBoostingWordmark, { [k.canceled]: m }) }),
                            (0, r.jsx)('div', {
                                children: (0, v.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: i,
                                    user: c
                                })
                            })
                        ]
                    }),
                    s &&
                        (0, r.jsx)(A.Z, {
                            color: g.zxk.Colors.BRAND,
                            onClick: () => p.Z.open(Z.oAB.GUILD_BOOSTING),
                            children: w.NW.string(w.t['NQ5g/f'])
                        })
                ]
            }),
            !s &&
                (0, r.jsx)(g.Text, {
                    className: k.boostingDesktopAppBlurb,
                    variant: 'text-sm/normal',
                    children: w.NW.format(w.t.k6haR0, { openAppHook: () => (0, b.Z)('app') })
                })
        ]
    });
}
function L() {
    return (
        i.useEffect(() => {
            C.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_missing_payment_method' });
        }, []),
        (0, r.jsxs)('div', {
            className: k.paymentBanner,
            children: [
                (0, r.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: k.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, r.jsx)(g.Text, {
                    className: k.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: w.NW.string(w.t.xFHEMT)
                })
            ]
        })
    );
}
function B() {
    return (
        i.useEffect(() => {
            C.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, r.jsxs)('div', {
            className: k.paymentBanner,
            children: [
                (0, r.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: k.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, r.jsx)(g.Text, {
                    className: k.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: w.NW.string(w.t['j+nuQU'])
                })
            ]
        })
    );
}
function M(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: a } = (0, f.ZP)(h.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            C.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, r.jsxs)('div', {
            className: k.paymentBanner,
            children: [
                (0, r.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: k.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, r.jsx)(g.Text, {
                    className: k.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: w.NW.format(w.t['0nbf/P'], {
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
function U(e) {
    let { subscription: t, renewalInvoicePreview: n, className: i, fractionalPremiumInfo: s } = e;
    return (0, r.jsxs)('div', {
        className: a()(k.billingInformation, i),
        children: [
            (0, r.jsx)(g.vwX, {
                tag: 'h3',
                className: k.detailBlockHeader,
                children: w.NW.string(w.t.KXQjfX)
            }),
            (0, r.jsx)('div', { children: v.ZP.getBillingInformationString(t, n, !1, s) })
        ]
    });
}
function V() {
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(g.vwX, {
                className: k.sectionTitle,
                tag: 'h1',
                children: w.NW.string(w.t['/gs+Pz'])
            }),
            (0, r.jsx)('p', {
                className: k.sectionDescription,
                children: w.NW.string(w.t.D8UpUl)
            }),
            (0, r.jsx)(g.Zbd, {
                className: k.noItemsCard,
                type: g.Zbd.Types.CUSTOM,
                children: (0, r.jsxs)(x.Z, {
                    align: x.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(_.Z, {
                            game: null,
                            size: _.Z.Sizes.SMALL,
                            className: k.noItemsIcon
                        }),
                        (0, r.jsx)('span', {
                            className: k.cardText,
                            children: w.NW.string(w.t.xCRgr6)
                        })
                    ]
                })
            })
        ]
    });
}
function G(e) {
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
        [b] = (0, I.ED)(p);
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
        [_] = (0, I.ED)(x);
    _ = null != u ? u : _;
    let E = (0, N.Z)();
    return null == b || null == _
        ? (0, r.jsx)(g.$jN, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: k.subscriptionRows,
                      children: [
                          (0, r.jsx)(P.Z, {
                              subscription: t,
                              renewalInvoicePreview: b,
                              paymentSource: i,
                              busy: s,
                              analyticsLocation: n
                          }),
                          (0, r.jsx)(W, {
                              subscription: t,
                              renewalInvoicePreview: b,
                              fromStandaloneBillingPage: l,
                              className: k.guildSubscriptionRow
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)(g.y5t, {
                          component: (0, r.jsx)(g.vwX, {
                              tag: 'h5',
                              children: w.NW.string(w.t.Sb6wIy)
                          }),
                          children: (0, r.jsxs)('div', {
                              className: k.details,
                              children: [
                                  (0, r.jsx)(U, {
                                      subscription: t,
                                      renewalInvoicePreview: _,
                                      className: k.detailsBlock,
                                      fractionalPremiumInfo: E
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: a()(k.detailsBlock, { [k.redBorder]: o }),
                                      children: [
                                          (0, r.jsx)(g.vwX, {
                                              tag: 'h3',
                                              className: k.detailBlockHeader,
                                              children: t.isPurchasedExternally && null != t.paymentGateway ? w.NW.formatToPlainString(w.t.rTk9v7, { paymentGatewayName: Z.Vzj[t.paymentGateway] }) : w.NW.string(w.t.iRzXKS)
                                          }),
                                          (0, r.jsx)(R.Z, {
                                              subscription: t,
                                              onPaymentSourceAdded: T.i1,
                                              highlightAddPaymentMethodButton: c || o,
                                              analyticsLocation: n,
                                              currentInvoicePreview: b,
                                              dropdownClassName: k.paymentDropdown
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
let F = new Set([Z.O0b.ACTIVE, Z.O0b.PAST_DUE, Z.O0b.CANCELED, Z.O0b.PAUSE_PENDING, Z.O0b.PAUSED]);
function H() {
    return (
        i.useEffect(() => {
            C.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_duplicate_subscriptions' });
        }, []),
        (0, r.jsxs)('div', {
            className: k.duplicateSubscriptionsBanner,
            children: [
                (0, r.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, r.jsx)(g.Text, {
                    className: k.duplicateSubscriptionsBannerText,
                    variant: 'text-sm/normal',
                    children: w.NW.format(w.t['6eXiiI'], { helpCenterLink: S.Z.getArticleURL(Z.BhN.NITRO) })
                })
            ]
        })
    );
}
function z(e) {
    var t;
    let n,
        { subscription: i, subscriptions: s, paymentSource: a, busy: l, fromStandaloneBillingPage: o = !0, analyticsLocation: c } = e;
    null != s && null != s[0] && (i = s[0]);
    let { analyticsLocations: m } = (0, f.ZP)(h.Z.SUBSCRIPTION_DETAILS),
        p = null != s ? s.slice(1) : [],
        [b] = (0, I.ED)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        [N] = (0, I.ED)({
            subscriptionId: i.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        x = null == a ? void 0 : a.invalid,
        _ = (0, u.e7)([O.default], () => {
            var e;
            return null == (e = O.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        E = d()(i.currentPeriodEnd),
        C = null != i.paymentSourceId,
        S = null != (t = null == N ? void 0 : N.total) ? t : 0,
        v = !C && S > 0 && (7 >= E.diff(d()(), 'days') || i.status === Z.O0b.PAST_DUE) && !_ && !i.isPurchasedExternally,
        T = x && i.status === Z.O0b.PAST_DUE && !_ && !i.isPurchasedExternally,
        A = (0, y.U)(),
        P = !_ && A,
        R = (null == i ? void 0 : i.status) === Z.O0b.PAST_DUE ? d()().diff(d()(i.currentPeriodStart), 'days') : 0,
        [W] = (0, I.Ox)({
            subscriptionId: i.id,
            preventFetch: !P
        });
    return null == b || null == N
        ? (0, r.jsx)(g.$jN, {})
        : (null != i.renewalMutations &&
              ((i.renewalMutations.planId !== i.planId && !(0, j.Q0)(i.renewalMutations.planId)) || i.hasExternalPlanChange) &&
              (n = (0, r.jsx)(D.Z, {
                  subscription: i,
                  renewalMutations: i.renewalMutations,
                  className: k.renewalMutationNotice,
                  analyticsLocation: c
              })),
          (0, r.jsx)('div', {
              children: (0, r.jsxs)(g.y5t, {
                  component: (0, r.jsx)(g.vwX, {
                      className: k.sectionTitle,
                      tag: 'h1',
                      children: w.NW.string(w.t['/gs+Pz'])
                  }),
                  children: [
                      v ? (0, r.jsx)(L, {}) : null,
                      T ? (0, r.jsx)(B, {}) : null,
                      P && null != W
                          ? (0, r.jsx)(M, {
                                daysPastDue: R,
                                subscription: i,
                                openInvoiceId: W.id
                            })
                          : null,
                      n,
                      (0, r.jsx)('div', {
                          children: (0, r.jsx)('p', {
                              className: k.sectionDescription,
                              children: w.NW.string(w.t.D8UpUl)
                          })
                      }),
                      (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)('div', {
                                  className: p.length > 0 ? k.dupSubscriptionRow : k.__invalid_singleSubscription,
                                  children: (0, r.jsx)(G, {
                                      subscription: i,
                                      analyticsLocation: c,
                                      paymentSource: a,
                                      busy: l,
                                      fromStandaloneBillingPage: o,
                                      showNoPaymentMethod: v,
                                      showInvalidPaymentMethod: T,
                                      fetchedCurrentInvoicePreview: b,
                                      fetchedRenewalInvoicePreview: N
                                  })
                              }),
                              p.map((e, t) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: k.dupSubscriptionRow,
                                          children: [
                                              (0, r.jsx)(g.vwX, {
                                                  tag: 'h2',
                                                  className: k.duplicateHeader,
                                                  children: 'Duplicate Subscriptions'
                                              }),
                                              (0, r.jsx)(G, {
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
