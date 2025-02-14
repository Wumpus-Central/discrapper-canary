n.d(t, {
    MM: () => G,
    Yn: () => z,
    ZP: () => Y,
    eS: () => H
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
    g = n(481060),
    h = n(230711),
    x = n(100527),
    _ = n(906732),
    p = n(17894),
    E = n(975298),
    C = n(600164),
    f = n(925329),
    T = n(963249),
    N = n(301766),
    S = n(594174),
    I = n(626135),
    b = n(63063),
    v = n(74538),
    j = n(212895),
    A = n(374649),
    O = n(160913),
    R = n(987997),
    P = n(393411),
    D = n(908951),
    y = n(592889),
    Z = n(981631),
    k = n(388032),
    L = n(49474);
function B(e) {
    let t,
        { subscription: n, renewalInvoicePreview: s, fromStandaloneBillingPage: r = !0, className: a } = e,
        c = (0, u.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return o()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e;
        });
    if (0 === (0, v.uV)(n.additionalPlans)) return null;
    let { status: d } = n,
        m = (0, v.v6)(n);
    if (m) t = L.guildBoostingSubscriptionRowCanceled;
    else
        switch (d) {
            case Z.O0b.PAST_DUE:
            case Z.O0b.ACCOUNT_HOLD:
            case Z.O0b.BILLING_RETRY:
                t = L.guildBoostingSubscriptionRowFailedPayment;
                break;
            case Z.O0b.PAUSE_PENDING:
            case Z.O0b.PAUSED:
                t = L.guildBoostingSubscriptionRowPaused;
                break;
            default:
                t = L.guildBoostingSubscriptionRowActive;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: l()(t, a),
                children: [
                    (0, i.jsx)('div', { className: L.guildBoostingSubscriptionRowBackground }),
                    (0, i.jsx)('div', { className: L.guildBoostingImage }),
                    (0, i.jsxs)('div', {
                        className: L.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, i.jsx)('div', { className: l()(L.guildBoostingWordmark, { [L.canceled]: m }) }),
                            (0, i.jsx)('div', {
                                children: (0, v.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: s,
                                    user: c
                                })
                            })
                        ]
                    }),
                    r &&
                        (0, i.jsx)(R.Z, {
                            color: g.zxk.Colors.BRAND,
                            onClick: () => h.Z.open(Z.oAB.GUILD_BOOSTING),
                            children: k.intl.string(k.t['NQ5g/f'])
                        })
                ]
            }),
            !r &&
                (0, i.jsx)(g.Text, {
                    className: L.boostingDesktopAppBlurb,
                    variant: 'text-sm/normal',
                    children: k.intl.format(k.t.k6haR0, { openAppHook: () => (0, p.Z)('app') })
                })
        ]
    });
}
function M() {
    return (
        s.useEffect(() => {
            I.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_missing_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.paymentBanner,
            children: [
                (0, i.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: L.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(g.Text, {
                    className: L.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: k.intl.string(k.t.xFHEMT)
                })
            ]
        })
    );
}
function w() {
    return (
        s.useEffect(() => {
            I.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.paymentBanner,
            children: [
                (0, i.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: L.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(g.Text, {
                    className: L.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: k.intl.string(k.t['j+nuQU'])
                })
            ]
        })
    );
}
function V(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: r } = e,
        { analyticsLocations: l } = (0, _.ZP)(x.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        s.useEffect(() => {
            I.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.paymentBanner,
            children: [
                (0, i.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: L.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(g.Text, {
                    className: L.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: k.intl.format(k.t['0nbf/P'], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, T.Z)({
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
        className: l()(L.billingInformation, s),
        children: [
            (0, i.jsx)(g.vwX, {
                tag: 'h3',
                className: L.detailBlockHeader,
                children: k.intl.string(k.t.KXQjfX)
            }),
            (0, i.jsx)('div', { children: v.ZP.getBillingInformationString(t, n, !1, r) })
        ]
    });
}
function G() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.vwX, {
                className: L.sectionTitle,
                tag: 'h1',
                children: k.intl.string(k.t['/gs+Pz'])
            }),
            (0, i.jsx)('p', {
                className: L.sectionDescription,
                children: k.intl.string(k.t.D8UpUl)
            }),
            (0, i.jsx)(g.Zbd, {
                className: L.noItemsCard,
                type: g.Zbd.Types.CUSTOM,
                children: (0, i.jsxs)(C.Z, {
                    align: C.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(f.Z, {
                            game: null,
                            size: f.Z.Sizes.SMALL,
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
function F(e) {
    let { subscription: t, analyticsLocation: n, paymentSource: s, busy: r, fromStandaloneBillingPage: a, showInvalidPaymentMethod: o, showNoPaymentMethod: c, fetchedCurrentInvoicePreview: d, fetchedRenewalInvoicePreview: u } = e,
        { analyticsLocations: m } = (0, _.ZP)(x.Z.SUBSCRIPTION_DETAILS),
        h =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [p] = (0, A.ED)(h);
    p = null != d ? d : p;
    let C =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [f] = (0, A.ED)(C);
    f = null != u ? u : f;
    let T = (0, E.Z)();
    return null == p || null == f
        ? (0, i.jsx)(g.$jN, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: L.subscriptionRows,
                      children: [
                          (0, i.jsx)(P.Z, {
                              subscription: t,
                              renewalInvoicePreview: p,
                              paymentSource: s,
                              busy: r,
                              analyticsLocation: n
                          }),
                          (0, i.jsx)(B, {
                              subscription: t,
                              renewalInvoicePreview: p,
                              fromStandaloneBillingPage: a,
                              className: L.guildSubscriptionRow
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)(g.y5t, {
                          component: (0, i.jsx)(g.vwX, {
                              tag: 'h5',
                              children: k.intl.string(k.t.Sb6wIy)
                          }),
                          children: (0, i.jsxs)('div', {
                              className: L.details,
                              children: [
                                  (0, i.jsx)(U, {
                                      subscription: t,
                                      renewalInvoicePreview: f,
                                      className: L.detailsBlock,
                                      fractionalPremiumInfo: T
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: l()(L.detailsBlock, { [L.redBorder]: o }),
                                      children: [
                                          (0, i.jsx)(g.vwX, {
                                              tag: 'h3',
                                              className: L.detailBlockHeader,
                                              children: t.isPurchasedExternally && null != t.paymentGateway ? k.intl.formatToPlainString(k.t.rTk9v7, { paymentGatewayName: Z.Vzj[t.paymentGateway] }) : k.intl.string(k.t.iRzXKS)
                                          }),
                                          (0, i.jsx)(D.Z, {
                                              subscription: t,
                                              onPaymentSourceAdded: j.i1,
                                              highlightAddPaymentMethodButton: c || o,
                                              analyticsLocation: n,
                                              currentInvoicePreview: p,
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
let H = new Set([Z.O0b.ACTIVE, Z.O0b.PAST_DUE, Z.O0b.CANCELED, Z.O0b.PAUSE_PENDING, Z.O0b.PAUSED]);
function z() {
    return (
        s.useEffect(() => {
            I.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_duplicate_subscriptions' });
        }, []),
        (0, i.jsxs)('div', {
            className: L.duplicateSubscriptionsBanner,
            children: [
                (0, i.jsx)(g.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(g.Text, {
                    className: L.duplicateSubscriptionsBannerText,
                    variant: 'text-sm/normal',
                    children: k.intl.format(k.t['6eXiiI'], { helpCenterLink: b.Z.getArticleURL(Z.BhN.NITRO) })
                })
            ]
        })
    );
}
function Y(e) {
    var t;
    let n,
        { subscription: s, subscriptions: r, paymentSource: l, busy: a, fromStandaloneBillingPage: o = !0, analyticsLocation: c } = e;
    null != r && null != r[0] && (s = r[0]);
    let { analyticsLocations: m } = (0, _.ZP)(x.Z.SUBSCRIPTION_DETAILS),
        h = null != r ? r.slice(1) : [],
        [p] = (0, A.ED)({
            subscriptionId: s.id,
            renewal: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        [E] = (0, A.ED)({
            subscriptionId: s.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        C = null == l ? void 0 : l.invalid,
        f = (0, u.e7)([S.default], () => {
            var e;
            return null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium();
        }),
        T = d()(s.currentPeriodEnd),
        I = null != s.paymentSourceId,
        b = null !== (t = null == E ? void 0 : E.total) && void 0 !== t ? t : 0,
        v = !I && b > 0 && (7 >= T.diff(d()(), 'days') || s.status === Z.O0b.PAST_DUE) && !f && !s.isPurchasedExternally,
        j = C && s.status === Z.O0b.PAST_DUE && !f && !s.isPurchasedExternally,
        R = (0, O.U)(),
        P = !f && R,
        D = (null == s ? void 0 : s.status) === Z.O0b.PAST_DUE ? d()().diff(d()(s.currentPeriodStart), 'days') : 0,
        [B] = (0, A.Ox)({
            subscriptionId: s.id,
            preventFetch: !P
        });
    return null == p || null == E
        ? (0, i.jsx)(g.$jN, {})
        : (null != s.renewalMutations &&
              ((s.renewalMutations.planId !== s.planId && !(0, N.Q0)(s.renewalMutations.planId)) || s.hasExternalPlanChange) &&
              (n = (0, i.jsx)(y.Z, {
                  subscription: s,
                  renewalMutations: s.renewalMutations,
                  className: L.renewalMutationNotice,
                  analyticsLocation: c
              })),
          (0, i.jsx)('div', {
              children: (0, i.jsxs)(g.y5t, {
                  component: (0, i.jsx)(g.vwX, {
                      className: L.sectionTitle,
                      tag: 'h1',
                      children: k.intl.string(k.t['/gs+Pz'])
                  }),
                  children: [
                      v ? (0, i.jsx)(M, {}) : null,
                      j ? (0, i.jsx)(w, {}) : null,
                      P && null != B
                          ? (0, i.jsx)(V, {
                                daysPastDue: D,
                                subscription: s,
                                openInvoiceId: B.id
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
                                  className: h.length > 0 ? L.dupSubscriptionRow : L.__invalid_singleSubscription,
                                  children: (0, i.jsx)(F, {
                                      subscription: s,
                                      analyticsLocation: c,
                                      paymentSource: l,
                                      busy: a,
                                      fromStandaloneBillingPage: o,
                                      showNoPaymentMethod: v,
                                      showInvalidPaymentMethod: j,
                                      fetchedCurrentInvoicePreview: p,
                                      fetchedRenewalInvoicePreview: E
                                  })
                              }),
                              h.map((e, t) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: L.dupSubscriptionRow,
                                          children: [
                                              (0, i.jsx)(g.vwX, {
                                                  tag: 'h2',
                                                  className: L.duplicateHeader,
                                                  children: 'Duplicate Subscriptions'
                                              }),
                                              (0, i.jsx)(F, {
                                                  subscription: e,
                                                  analyticsLocation: c,
                                                  paymentSource: l,
                                                  busy: a,
                                                  fromStandaloneBillingPage: o,
                                                  showNoPaymentMethod: v,
                                                  showInvalidPaymentMethod: j,
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
