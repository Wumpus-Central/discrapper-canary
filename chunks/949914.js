n.d(t, { Z: () => U }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(722770),
    o = n(442837),
    c = n(481060),
    d = n(355467),
    u = n(37234),
    m = n(254854),
    g = n(230711),
    p = n(100527),
    h = n(906732),
    f = n(377171),
    b = n(878596),
    _ = n(313201),
    x = n(674180),
    E = n(565138),
    j = n(374649),
    C = n(908951),
    O = n(703656),
    S = n(853872),
    v = n(245950),
    T = n(404203),
    I = n(330181),
    N = n(954821),
    y = n(980864),
    A = n(981631),
    P = n(176505),
    R = n(526761),
    D = n(388032),
    Z = n(984569);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = (e) => {
        let { label: t, value: n, showInfoIcon: r, infoIconTooltipText: s } = e;
        return (0, i.jsxs)('div', {
            className: Z.infoCard,
            children: [
                (0, i.jsxs)('div', {
                    className: Z.infoCardLabelContainer,
                    children: [
                        (0, i.jsx)(c.X6q, {
                            variant: 'heading-deprecated-12/semibold',
                            className: Z.infoCardLabel,
                            children: t
                        }),
                        r &&
                            (0, i.jsx)(c.ua7, {
                                clickableOnMobile: !0,
                                text: s,
                                children: (e) =>
                                    (0, i.jsx)(
                                        c.d3s,
                                        k(
                                            w(
                                                {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                },
                                                e
                                            ),
                                            { className: Z.infoCardIcon }
                                        )
                                    )
                            })
                    ]
                }),
                (0, i.jsx)(c.X6q, {
                    variant: 'heading-xl/semibold',
                    className: Z.infoCardValue,
                    children: n
                })
            ]
        });
    },
    B = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, h.ZP)(),
            [r] = (0, j.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: p.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            }),
            s = (0, o.e7)([S.Z], () => S.Z.hasFetchedPaymentSources);
        return null != r && s
            ? (0, i.jsx)(C.Z, {
                  subscription: t,
                  currentInvoicePreview: r,
                  dropdownClassName: Z.paymentSourceDropdown
              })
            : (0, i.jsx)(c.$jN, {});
    },
    M = (e) => {
        let { isTrial: t, isCancelled: n, isResubscribing: r, shouldHideRoleSubscriptionEntryPoints: s, onCancelSubscriptionClick: l, onResubscribeClick: a, onChangePlanClick: o } = e;
        return n && (t || s)
            ? null
            : (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(c.vwX, { children: D.intl.string(D.t['4neDMz']) }),
                      (0, i.jsx)('div', {
                          className: Z.__invalid_rowButtons,
                          children: n
                              ? (0, i.jsx)(c.zxk, {
                                    onClick: a,
                                    submitting: r,
                                    children: D.intl.string(D.t.y3mAEx)
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        !t &&
                                            !s &&
                                            (0, i.jsx)(b.Z, {
                                                label: D.intl.string(D.t.FRbWR0),
                                                onClick: o
                                            }),
                                        (0, i.jsx)(b.Z, {
                                            label: D.intl.string(D.t.Dx0lFx),
                                            onClick: l
                                        })
                                    ]
                                })
                      })
                  ]
              });
    },
    U = (e) => {
        let { subscription: t } = e,
            { listing: n, groupListing: s, guild: o, expanded: p, handleToggleExpanded: b, subscriptionInfo: j } = (0, v.Z)(t),
            [C, S] = r.useState(!1),
            U = (0, _.Dt)(),
            { analyticsLocations: V } = (0, h.ZP)(),
            { shouldHideGuildPurchaseEntryPoints: G } = (0, x.uP)(null == o ? void 0 : o.id),
            F = (null == t ? void 0 : t.paymentGateway) === A.gg$.APPLE_PARTNER;
        if (null == s || null == n || null == j) return null;
        let H = async () => {
                try {
                    S(!0), await d.pl(t, V), (0, y.h)();
                } finally {
                    S(!1);
                }
            },
            { isCancelled: z, isPastDue: Y, subscriptionPrice: W, memberSince: K, nextRenewalDate: q, nextRenewalLabel: X, isTrial: Q } = j,
            J = n.soft_deleted || null == o || F,
            $ = () =>
                z
                    ? (0, i.jsx)(c.IGR, { text: D.intl.string(D.t['7uFZGh']) })
                    : Q
                      ? (0, i.jsx)(c.IGR, {
                            text: D.intl.string(D.t['6antoq']),
                            color: a.Z.BRAND_500
                        })
                      : Y
                        ? (0, i.jsx)(c.ua7, {
                              text: D.intl.string(D.t.eSuJEx),
                              children: (e) =>
                                  (0, i.jsx)(
                                      'div',
                                      k(w({}, e), {
                                          children: (0, i.jsx)(c.IGR, {
                                              className: Z.paymentDueBadge,
                                              text: D.intl.string(D.t.NrRwIi),
                                              color: a.Z.YELLOW_300
                                          })
                                      })
                                  )
                          })
                        : null,
            ee = () =>
                F
                    ? (0, i.jsx)(c.ua7, {
                          text: D.intl.string(D.t.nv1IqK),
                          children: (e) =>
                              (0, i.jsx)(
                                  'div',
                                  k(w({}, e), {
                                      children: (0, i.jsx)(c.IGR, {
                                          text: D.intl.string(D.t.sBl3X1),
                                          color: f.Z.INTERACTIVE_MUTED
                                      })
                                  })
                              )
                      })
                    : null;
        return (0, i.jsxs)('div', {
            className: Z.container,
            children: [
                (0, i.jsx)(T.Z, {
                    onClick: b,
                    className: Z.headerContainer,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: r } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != o &&
                                    (0, i.jsx)(E.Z, {
                                        guild: o,
                                        active: !0,
                                        size: E.Z.Sizes.MEDIUM
                                    }),
                                (0, i.jsxs)('div', {
                                    className: Z.headerTextContainer,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            className: Z.guildName,
                                            children: null != o ? o.name : D.intl.string(D.t['He+cmZ'])
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: Z.headerSubtitleContainer,
                                            children: [
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'text-sm/normal',
                                                    className: Z.tierName,
                                                    children: n.name
                                                }),
                                                $(),
                                                ee()
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(c.P3F, {
                                    onClick: r(b),
                                    'aria-label': D.intl.string(D.t.e5eQOz),
                                    'aria-controls': U,
                                    'aria-expanded': p,
                                    focusProps: { ringTarget: t },
                                    children: (0, i.jsx)(c.CJ0, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: l()(Z.arrowIcon, { [Z.arrowIconExpanded]: p })
                                    })
                                })
                            ]
                        });
                    }
                }),
                p
                    ? (0, i.jsxs)('div', {
                          id: U,
                          children: [
                              (0, i.jsx)('div', { className: Z.divider }),
                              (0, i.jsx)(I.Z, {
                                  groupListingId: s.id,
                                  subscription: t,
                                  className: Z.changePlanNotice
                              }),
                              (0, i.jsxs)('div', {
                                  className: Z.subscriptionInfoCards,
                                  children: [
                                      (0, i.jsx)(L, {
                                          label: X,
                                          value: q
                                      }),
                                      (0, i.jsx)(L, {
                                          label: D.intl.string(D.t.dltUMD),
                                          value: W,
                                          showInfoIcon: Q,
                                          infoIconTooltipText: Q ? D.intl.string(D.t['/q6fpa']) : void 0
                                      }),
                                      (0, i.jsx)(L, {
                                          label: D.intl.string(D.t.AOcwWF),
                                          value: K
                                      })
                                  ]
                              }),
                              (0, i.jsx)(c.LZC, { size: 16 }),
                              !z &&
                                  !F &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(c.vwX, { children: D.intl.string(D.t.wmMFvL) }), (0, i.jsx)(B, { subscription: t })]
                                  }),
                              !J &&
                                  (0, i.jsx)(M, {
                                      isTrial: Q,
                                      isCancelled: z,
                                      isResubscribing: C,
                                      shouldHideRoleSubscriptionEntryPoints: G,
                                      onCancelSubscriptionClick: () => {
                                          null != o &&
                                              (0, N.h)({
                                                  guildId: o.id,
                                                  groupListing: s,
                                                  listing: n,
                                                  subscription: t
                                              });
                                      },
                                      onChangePlanClick: () => {
                                          null != o && ((0, O.uL)(A.Z5c.CHANNEL(o.id, P.oC.ROLE_SUBSCRIPTIONS)), (0, u.xf)(), m.Z.show(A.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, D.intl.string(D.t.DvbaMz), () => g.Z.open(A.oAB.SUBSCRIPTIONS, R.cP)));
                                      },
                                      onResubscribeClick: H
                                  })
                          ]
                      })
                    : null
            ]
        });
    };
