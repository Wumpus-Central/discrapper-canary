(n.d(t, {
    MM: () => H,
    Yn: () => Y,
    ZP: () => K,
    eS: () => z
}),
    n(388685));
var i = n(255367),
    r = n(73800),
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
    I = n(74538),
    N = n(212895),
    y = n(374649),
    A = n(160913),
    P = n(987997),
    R = n(393411),
    D = n(908951),
    Z = n(592889),
    w = n(981631),
    k = n(362786),
    L = n(388032),
    B = n(772526);
function M(e) {
    let t,
        { subscription: n, renewalInvoicePreview: r, fractionalPremiumInfo: s, fromStandaloneBillingPage: l = !0, className: c } = e,
        d = (0, u.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return (o()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e);
        });
    if (0 === (0, I.uV)(n.additionalPlans)) return null;
    let { status: m } = n,
        f = (0, I.v6)(n);
    if (f) t = B.guildBoostingSubscriptionRowCanceled;
    else
        switch (m) {
            case w.O0b.PAST_DUE:
            case w.O0b.ACCOUNT_HOLD:
            case w.O0b.BILLING_RETRY:
                t = B.guildBoostingSubscriptionRowFailedPayment;
                break;
            case w.O0b.PAUSE_PENDING:
            case w.O0b.PAUSED:
                t = n.pauseReason !== k.Id.FRACTIONAL_PREMIUM ? B.guildBoostingSubscriptionRowPaused : B.guildBoostingSubscriptionRowActive;
                break;
            default:
                t = B.guildBoostingSubscriptionRowActive;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: a()(t, c),
                children: [
                    (0, i.jsx)('div', { className: B.guildBoostingSubscriptionRowBackground }),
                    (0, i.jsx)('div', { className: B.guildBoostingImage }),
                    (0, i.jsxs)('div', {
                        className: B.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, i.jsx)('div', { className: a()(B.guildBoostingWordmark, { [B.canceled]: f }) }),
                            (0, i.jsx)('div', {
                                children: (0, I.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: r,
                                    user: d,
                                    fractionalPremiumInfo: s
                                })
                            })
                        ]
                    }),
                    l &&
                        (0, i.jsx)(P.Z, {
                            color: p.zx.Colors.BRAND,
                            onClick: () => h.Z.open(w.oAB.GUILD_BOOSTING),
                            children: L.intl.string(L.t['NQ5g/f'])
                        })
                ]
            }),
            !l &&
                (0, i.jsx)(g.Text, {
                    className: B.boostingDesktopAppBlurb,
                    variant: 'text-sm/normal',
                    children: L.intl.format(L.t.k6haR0, { openAppHook: () => (0, x.Z)('app') })
                })
        ]
    });
}
function U() {
    return (
        r.useEffect(() => {
            S.default.track(w.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_missing_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: B.paymentBanner,
            children: [
                (0, i.jsx)(g.Mgn, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: B.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(g.Text, {
                    className: B.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: L.intl.string(L.t.xFHEMT)
                })
            ]
        })
    );
}
function V() {
    return (
        r.useEffect(() => {
            S.default.track(w.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: B.paymentBanner,
            children: [
                (0, i.jsx)(g.Mgn, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: B.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(g.Text, {
                    className: B.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: L.intl.string(L.t['j+nuQU'])
                })
            ]
        })
    );
}
function G(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: a } = (0, b.ZP)(f.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        r.useEffect(() => {
            S.default.track(w.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: B.paymentBanner,
            children: [
                (0, i.jsx)(g.Mgn, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: B.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(g.Text, {
                    className: B.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: L.intl.format(L.t['0nbf/P'], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, C.Z)({
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
function F(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: r, className: s, fractionalPremiumInfo: l } = e;
    return (0, i.jsxs)('div', {
        className: a()(B.billingInformation, s),
        children: [
            (0, i.jsx)(g.vwX, {
                tag: 'h3',
                className: B.detailBlockHeader,
                children: L.intl.string(L.t.KXQjfX)
            }),
            (0, i.jsx)('div', { children: I.ZP.getBillingInformationString(t, n, r, !1, l) })
        ]
    });
}
function H() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.vwX, {
                className: B.sectionTitle,
                tag: 'h1',
                children: L.intl.string(L.t['/gs+Pz'])
            }),
            (0, i.jsx)('p', {
                className: B.sectionDescription,
                children: L.intl.string(L.t.D8UpUl)
            }),
            (0, i.jsx)(g.Zbd, {
                className: B.noItemsCard,
                type: g.Zbd.Types.CUSTOM,
                children: (0, i.jsxs)(j.Z, {
                    align: j.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(E.Z, {
                            game: null,
                            size: E.Z.Sizes.SMALL,
                            className: B.noItemsIcon
                        }),
                        (0, i.jsx)('span', {
                            className: B.cardText,
                            children: L.intl.string(L.t.xCRgr6)
                        })
                    ]
                })
            })
        ]
    });
}
function W(e) {
    let { subscription: t, analyticsLocation: n, paymentSource: r, busy: s, fromStandaloneBillingPage: l, showInvalidPaymentMethod: o, showNoPaymentMethod: c, fetchedCurrentInvoicePreview: d, fetchedRenewalInvoicePreview: u, fetchedOpenInvoice: m } = e,
        { analyticsLocations: p } = (0, b.ZP)(f.Z.SUBSCRIPTION_DETAILS),
        h =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: p,
                      analyticsLocation: n
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
                      analyticsLocation: n
                  },
        [E] = (0, y.ED)(j);
    E = null != u ? u : E;
    let C = (0, _.Z)();
    return null == x || null == E
        ? (0, i.jsx)(g.$jN, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: B.subscriptionRows,
                      children: [
                          (0, i.jsx)(R.Z, {
                              subscription: t,
                              renewalInvoicePreview: x,
                              paymentSource: r,
                              busy: s,
                              analyticsLocation: n
                          }),
                          (0, i.jsx)(M, {
                              subscription: t,
                              renewalInvoicePreview: x,
                              fromStandaloneBillingPage: l,
                              className: B.guildSubscriptionRow,
                              fractionalPremiumInfo: C
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)(g.y5t, {
                          component: (0, i.jsx)(g.vwX, {
                              tag: 'h5',
                              children: L.intl.string(L.t.Sb6wIy)
                          }),
                          children: (0, i.jsxs)('div', {
                              className: B.details,
                              children: [
                                  (0, i.jsx)(F, {
                                      subscription: t,
                                      renewalInvoicePreview: E,
                                      className: B.detailsBlock,
                                      fractionalPremiumInfo: C,
                                      openInvoice: m
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: a()(B.detailsBlock, { [B.redBorder]: o }),
                                      children: [
                                          (0, i.jsx)(g.vwX, {
                                              tag: 'h3',
                                              className: B.detailBlockHeader,
                                              children: t.isPurchasedExternally && null != t.paymentGateway ? L.intl.formatToPlainString(L.t.rTk9v7, { paymentGatewayName: w.Vzj[t.paymentGateway] }) : L.intl.string(L.t.iRzXKS)
                                          }),
                                          (0, i.jsx)(D.Z, {
                                              subscription: t,
                                              onPaymentSourceAdded: N.i1,
                                              highlightAddPaymentMethodButton: c || o,
                                              analyticsLocation: n,
                                              currentInvoicePreview: x,
                                              dropdownClassName: B.paymentDropdown
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
let z = new Set([w.O0b.ACTIVE, w.O0b.PAST_DUE, w.O0b.CANCELED, w.O0b.PAUSE_PENDING, w.O0b.PAUSED]);
function Y() {
    return (
        r.useEffect(() => {
            S.default.track(w.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_duplicate_subscriptions' });
        }, []),
        (0, i.jsxs)('div', {
            className: B.duplicateSubscriptionsBanner,
            children: [
                (0, i.jsx)(g.Mgn, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(g.Text, {
                    className: B.duplicateSubscriptionsBannerText,
                    variant: 'text-sm/normal',
                    children: L.intl.format(L.t['6eXiiI'], { helpCenterLink: T.Z.getArticleURL(w.BhN.NITRO) })
                })
            ]
        })
    );
}
function K(e) {
    var t;
    let n,
        { subscription: r, subscriptions: s, paymentSource: a, busy: l, fromStandaloneBillingPage: o = !0, analyticsLocation: c } = e;
    null != s && null != s[0] && (r = s[0]);
    let { analyticsLocations: m } = (0, b.ZP)(f.Z.SUBSCRIPTION_DETAILS),
        p = null != s ? s.slice(1) : [],
        [h] = (0, y.ED)({
            subscriptionId: r.id,
            renewal: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        [x] = (0, y.ED)({
            subscriptionId: r.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        _ = null == a ? void 0 : a.invalid,
        j = (0, u.e7)([v.default], () => {
            var e;
            return null == (e = v.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        E = d()(r.currentPeriodEnd),
        C = null != r.paymentSourceId,
        S = null != (t = null == x ? void 0 : x.total) ? t : 0,
        T = !C && S > 0 && (7 >= E.diff(d()(), 'days') || r.status === w.O0b.PAST_DUE) && !j && !r.isPurchasedExternally,
        I = _ && r.status === w.O0b.PAST_DUE && !j && !r.isPurchasedExternally,
        N = (0, A.U)(),
        P = !j && N,
        R = (null == r ? void 0 : r.status) === w.O0b.PAST_DUE,
        D = R ? d()().diff(d()(r.currentPeriodStart), 'days') : 0,
        [k] = (0, y.Ox)({
            subscriptionId: r.id,
            preventFetch: !(P || R)
        });
    return null == h || null == x
        ? (0, i.jsx)(g.$jN, {})
        : (null != r.renewalMutations &&
              ((r.renewalMutations.planId !== r.planId && !(0, O.Q0)(r.renewalMutations.planId)) || r.hasExternalPlanChange) &&
              (n = (0, i.jsx)(Z.Z, {
                  subscription: r,
                  renewalMutations: r.renewalMutations,
                  className: B.renewalMutationNotice,
                  analyticsLocation: c
              })),
          (0, i.jsx)('div', {
              children: (0, i.jsxs)(g.y5t, {
                  component: (0, i.jsx)(g.vwX, {
                      className: B.sectionTitle,
                      tag: 'h1',
                      children: L.intl.string(L.t['/gs+Pz'])
                  }),
                  children: [
                      T ? (0, i.jsx)(U, {}) : null,
                      I ? (0, i.jsx)(V, {}) : null,
                      P && null != k
                          ? (0, i.jsx)(G, {
                                daysPastDue: D,
                                subscription: r,
                                openInvoiceId: k.id
                            })
                          : null,
                      n,
                      (0, i.jsx)('div', {
                          children: (0, i.jsx)('p', {
                              className: B.sectionDescription,
                              children: L.intl.string(L.t.D8UpUl)
                          })
                      }),
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)('div', {
                                  className: p.length > 0 ? B.dupSubscriptionRow : B.__invalid_singleSubscription,
                                  children: (0, i.jsx)(W, {
                                      subscription: r,
                                      analyticsLocation: c,
                                      paymentSource: a,
                                      busy: l,
                                      fromStandaloneBillingPage: o,
                                      showNoPaymentMethod: T,
                                      showInvalidPaymentMethod: I,
                                      fetchedCurrentInvoicePreview: h,
                                      fetchedRenewalInvoicePreview: x,
                                      fetchedOpenInvoice: k
                                  })
                              }),
                              p.map((e, t) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: B.dupSubscriptionRow,
                                          children: [
                                              (0, i.jsx)(g.vwX, {
                                                  tag: 'h2',
                                                  className: B.duplicateHeader,
                                                  children: 'Duplicate Subscriptions'
                                              }),
                                              (0, i.jsx)(W, {
                                                  subscription: e,
                                                  analyticsLocation: c,
                                                  paymentSource: a,
                                                  busy: l,
                                                  fromStandaloneBillingPage: o,
                                                  showNoPaymentMethod: T,
                                                  showInvalidPaymentMethod: I,
                                                  fetchedCurrentInvoicePreview: null,
                                                  fetchedRenewalInvoicePreview: null,
                                                  fetchedOpenInvoice: null
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
