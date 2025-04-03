n.d(t, { Z: () => M }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(722770),
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
    N = n(313201),
    x = n(674180),
    _ = n(565138),
    E = n(374649),
    j = n(908951),
    O = n(703656),
    C = n(853872),
    S = n(245950),
    v = n(404203),
    T = n(330181),
    I = n(954821),
    y = n(980864),
    A = n(981631),
    P = n(176505),
    R = n(526761),
    D = n(388032),
    Z = n(984569);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let W = (e) => {
        let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
        return (0, r.jsxs)('div', {
            className: Z.infoCard,
            children: [
                (0, r.jsxs)('div', {
                    className: Z.infoCardLabelContainer,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-deprecated-12/semibold',
                            className: Z.infoCardLabel,
                            children: t
                        }),
                        i &&
                            (0, r.jsx)(c.ua7, {
                                clickableOnMobile: !0,
                                text: s,
                                children: (e) =>
                                    (0, r.jsx)(
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
                (0, r.jsx)(c.X6q, {
                    variant: 'heading-xl/semibold',
                    className: Z.infoCardValue,
                    children: n
                })
            ]
        });
    },
    L = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, h.ZP)(),
            [i] = (0, E.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: p.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            }),
            s = (0, o.e7)([C.Z], () => C.Z.hasFetchedPaymentSources);
        return null != i && s
            ? (0, r.jsx)(j.Z, {
                  subscription: t,
                  currentInvoicePreview: i,
                  dropdownClassName: Z.paymentSourceDropdown
              })
            : (0, r.jsx)(c.$jN, {});
    },
    B = (e) => {
        let { isTrial: t, isCancelled: n, isResubscribing: i, shouldHideRoleSubscriptionEntryPoints: s, onCancelSubscriptionClick: a, onResubscribeClick: l, onChangePlanClick: o } = e;
        return n && (t || s)
            ? null
            : (0, r.jsxs)('div', {
                  children: [
                      (0, r.jsx)(c.vwX, { children: D.NW.string(D.t['4neDMz']) }),
                      (0, r.jsx)('div', {
                          className: Z.__invalid_rowButtons,
                          children: n
                              ? (0, r.jsx)(c.zxk, {
                                    onClick: l,
                                    submitting: i,
                                    children: D.NW.string(D.t.y3mAEx)
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        !t &&
                                            !s &&
                                            (0, r.jsx)(b.Z, {
                                                label: D.NW.string(D.t.FRbWR0),
                                                onClick: o
                                            }),
                                        (0, r.jsx)(b.Z, {
                                            label: D.NW.string(D.t.Dx0lFx),
                                            onClick: a
                                        })
                                    ]
                                })
                      })
                  ]
              });
    },
    M = (e) => {
        let { subscription: t } = e,
            { listing: n, groupListing: s, guild: o, expanded: p, handleToggleExpanded: b, subscriptionInfo: E } = (0, S.Z)(t),
            [j, C] = i.useState(!1),
            M = (0, N.Dt)(),
            { analyticsLocations: U } = (0, h.ZP)(),
            { shouldHideGuildPurchaseEntryPoints: V } = (0, x.uP)(null == o ? void 0 : o.id),
            G = (null == t ? void 0 : t.paymentGateway) === A.gg$.APPLE_PARTNER;
        if (null == s || null == n || null == E) return null;
        let F = async () => {
                try {
                    C(!0), await d.pl(t, U), (0, y.h)();
                } finally {
                    C(!1);
                }
            },
            { isCancelled: H, isPastDue: z, subscriptionPrice: Y, memberSince: K, nextRenewalDate: q, nextRenewalLabel: X, isTrial: J } = E,
            Q = n.soft_deleted || null == o || G,
            $ = () =>
                H
                    ? (0, r.jsx)(c.IGR, { text: D.NW.string(D.t['7uFZGh']) })
                    : J
                      ? (0, r.jsx)(c.IGR, {
                            text: D.NW.string(D.t['6antoq']),
                            color: l.Z.BRAND_500
                        })
                      : z
                        ? (0, r.jsx)(c.ua7, {
                              text: D.NW.string(D.t.eSuJEx),
                              children: (e) =>
                                  (0, r.jsx)(
                                      'div',
                                      k(w({}, e), {
                                          children: (0, r.jsx)(c.IGR, {
                                              className: Z.paymentDueBadge,
                                              text: D.NW.string(D.t.NrRwIi),
                                              color: l.Z.YELLOW_300
                                          })
                                      })
                                  )
                          })
                        : null,
            ee = () =>
                G
                    ? (0, r.jsx)(c.ua7, {
                          text: D.NW.string(D.t.nv1IqK),
                          children: (e) =>
                              (0, r.jsx)(
                                  'div',
                                  k(w({}, e), {
                                      children: (0, r.jsx)(c.IGR, {
                                          text: D.NW.string(D.t.sBl3X1),
                                          color: f.Z.INTERACTIVE_MUTED
                                      })
                                  })
                              )
                      })
                    : null;
        return (0, r.jsxs)('div', {
            className: Z.container,
            children: [
                (0, r.jsx)(v.Z, {
                    onClick: b,
                    className: Z.headerContainer,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: i } = e;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                null != o &&
                                    (0, r.jsx)(_.Z, {
                                        guild: o,
                                        active: !0,
                                        size: _.Z.Sizes.MEDIUM
                                    }),
                                (0, r.jsxs)('div', {
                                    className: Z.headerTextContainer,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            className: Z.guildName,
                                            children: null != o ? o.name : D.NW.string(D.t['He+cmZ'])
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: Z.headerSubtitleContainer,
                                            children: [
                                                (0, r.jsx)(c.Text, {
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
                                (0, r.jsx)(c.P3F, {
                                    onClick: i(b),
                                    'aria-label': D.NW.string(D.t.e5eQOz),
                                    'aria-controls': M,
                                    'aria-expanded': p,
                                    focusProps: { ringTarget: t },
                                    children: (0, r.jsx)(c.CJ0, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: a()(Z.arrowIcon, { [Z.arrowIconExpanded]: p })
                                    })
                                })
                            ]
                        });
                    }
                }),
                p
                    ? (0, r.jsxs)('div', {
                          id: M,
                          children: [
                              (0, r.jsx)('div', { className: Z.divider }),
                              (0, r.jsx)(T.Z, {
                                  groupListingId: s.id,
                                  subscription: t,
                                  className: Z.changePlanNotice
                              }),
                              (0, r.jsxs)('div', {
                                  className: Z.subscriptionInfoCards,
                                  children: [
                                      (0, r.jsx)(W, {
                                          label: X,
                                          value: q
                                      }),
                                      (0, r.jsx)(W, {
                                          label: D.NW.string(D.t.dltUMD),
                                          value: Y,
                                          showInfoIcon: J,
                                          infoIconTooltipText: J ? D.NW.string(D.t['/q6fpa']) : void 0
                                      }),
                                      (0, r.jsx)(W, {
                                          label: D.NW.string(D.t.AOcwWF),
                                          value: K
                                      })
                                  ]
                              }),
                              (0, r.jsx)(c.LZC, { size: 16 }),
                              !H &&
                                  !G &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [(0, r.jsx)(c.vwX, { children: D.NW.string(D.t.wmMFvL) }), (0, r.jsx)(L, { subscription: t })]
                                  }),
                              !Q &&
                                  (0, r.jsx)(B, {
                                      isTrial: J,
                                      isCancelled: H,
                                      isResubscribing: j,
                                      shouldHideRoleSubscriptionEntryPoints: V,
                                      onCancelSubscriptionClick: () => {
                                          null != o &&
                                              (0, I.h)({
                                                  guildId: o.id,
                                                  groupListing: s,
                                                  listing: n,
                                                  subscription: t
                                              });
                                      },
                                      onChangePlanClick: () => {
                                          null != o && ((0, O.uL)(A.Z5c.CHANNEL(o.id, P.oC.ROLE_SUBSCRIPTIONS)), (0, u.xf)(), m.Z.show(A.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, D.NW.string(D.t.DvbaMz), () => g.Z.open(A.oAB.SUBSCRIPTIONS, R.cP)));
                                      },
                                      onResubscribeClick: F
                                  })
                          ]
                      })
                    : null
            ]
        });
    };
