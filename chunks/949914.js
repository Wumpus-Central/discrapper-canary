n.d(t, { Z: () => M }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(722770),
    o = n(442837),
    c = n(481060),
    d = n(355467),
    u = n(37234),
    h = n(254854),
    m = n(230711),
    g = n(100527),
    x = n(906732),
    _ = n(377171),
    p = n(878596),
    E = n(313201),
    C = n(674180),
    N = n(565138),
    f = n(374649),
    I = n(908951),
    T = n(703656),
    S = n(853872),
    j = n(245950),
    v = n(404203),
    b = n(330181),
    A = n(954821),
    O = n(980864),
    R = n(981631),
    D = n(176505),
    P = n(526761),
    y = n(388032),
    Z = n(411369);
let L = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: l } = e;
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
                        s &&
                            (0, i.jsx)(c.ua7, {
                                clickableOnMobile: !0,
                                text: l,
                                children: (e) =>
                                    (0, i.jsx)(c.d3s, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        ...e,
                                        className: Z.infoCardIcon
                                    })
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
    k = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, x.ZP)(),
            [s] = (0, f.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: g.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            }),
            l = (0, o.e7)([S.Z], () => S.Z.hasFetchedPaymentSources);
        return null != s && l
            ? (0, i.jsx)(I.Z, {
                  subscription: t,
                  currentInvoicePreview: s,
                  dropdownClassName: Z.paymentSourceDropdown
              })
            : (0, i.jsx)(c.$jN, {});
    },
    B = (e) => {
        let { isTrial: t, isCancelled: n, isResubscribing: s, shouldHideRoleSubscriptionEntryPoints: l, onCancelSubscriptionClick: r, onResubscribeClick: a, onChangePlanClick: o } = e;
        return n && (t || l)
            ? null
            : (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(c.vwX, { children: y.intl.string(y.t['4neDMz']) }),
                      (0, i.jsx)('div', {
                          className: Z.__invalid_rowButtons,
                          children: n
                              ? (0, i.jsx)(c.zxk, {
                                    onClick: a,
                                    submitting: s,
                                    children: y.intl.string(y.t.y3mAEx)
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        !t &&
                                            !l &&
                                            (0, i.jsx)(p.Z, {
                                                label: y.intl.string(y.t.FRbWR0),
                                                onClick: o
                                            }),
                                        (0, i.jsx)(p.Z, {
                                            label: y.intl.string(y.t.Dx0lFx),
                                            onClick: r
                                        })
                                    ]
                                })
                      })
                  ]
              });
    },
    M = (e) => {
        let { subscription: t } = e,
            { listing: n, groupListing: l, guild: o, expanded: g, handleToggleExpanded: p, subscriptionInfo: f } = (0, j.Z)(t),
            [I, S] = s.useState(!1),
            M = (0, E.Dt)(),
            { analyticsLocations: V } = (0, x.ZP)(),
            { shouldHideGuildPurchaseEntryPoints: w } = (0, C.uP)(null == o ? void 0 : o.id),
            U = (null == t ? void 0 : t.paymentGateway) === R.gg$.APPLE_PARTNER;
        if (null == l || null == n || null == f) return null;
        let G = async () => {
                try {
                    S(!0), await d.pl(t, V), (0, O.h)();
                } finally {
                    S(!1);
                }
            },
            { isCancelled: F, isPastDue: z, subscriptionPrice: Y, memberSince: H, nextRenewalDate: W, nextRenewalLabel: K, isTrial: X } = f,
            q = n.soft_deleted || null == o || U,
            J = () =>
                F
                    ? (0, i.jsx)(c.IGR, { text: y.intl.string(y.t['7uFZGh']) })
                    : X
                      ? (0, i.jsx)(c.IGR, {
                            text: y.intl.string(y.t['6antoq']),
                            color: a.Z.BRAND_500
                        })
                      : z
                        ? (0, i.jsx)(c.ua7, {
                              text: y.intl.string(y.t.eSuJEx),
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      ...e,
                                      children: (0, i.jsx)(c.IGR, {
                                          className: Z.paymentDueBadge,
                                          text: y.intl.string(y.t.NrRwIi),
                                          color: a.Z.YELLOW_300
                                      })
                                  })
                          })
                        : null,
            Q = () =>
                U
                    ? (0, i.jsx)(c.ua7, {
                          text: y.intl.string(y.t.nv1IqK),
                          children: (e) =>
                              (0, i.jsx)('div', {
                                  ...e,
                                  children: (0, i.jsx)(c.IGR, {
                                      text: y.intl.string(y.t.sBl3X1),
                                      color: _.Z.INTERACTIVE_MUTED
                                  })
                              })
                      })
                    : null;
        return (0, i.jsxs)('div', {
            className: Z.container,
            children: [
                (0, i.jsx)(v.Z, {
                    onClick: p,
                    className: Z.headerContainer,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: s } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != o &&
                                    (0, i.jsx)(N.Z, {
                                        guild: o,
                                        active: !0,
                                        size: N.Z.Sizes.MEDIUM
                                    }),
                                (0, i.jsxs)('div', {
                                    className: Z.headerTextContainer,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            className: Z.guildName,
                                            children: null != o ? o.name : y.intl.string(y.t['He+cmZ'])
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: Z.headerSubtitleContainer,
                                            children: [
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'text-sm/normal',
                                                    className: Z.tierName,
                                                    children: n.name
                                                }),
                                                J(),
                                                Q()
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(c.P3F, {
                                    onClick: s(p),
                                    'aria-label': y.intl.string(y.t.e5eQOz),
                                    'aria-controls': M,
                                    'aria-expanded': g,
                                    focusProps: { ringTarget: t },
                                    children: (0, i.jsx)(c.CJ0, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: r()(Z.arrowIcon, { [Z.arrowIconExpanded]: g })
                                    })
                                })
                            ]
                        });
                    }
                }),
                g
                    ? (0, i.jsxs)('div', {
                          id: M,
                          children: [
                              (0, i.jsx)('div', { className: Z.divider }),
                              (0, i.jsx)(b.Z, {
                                  groupListingId: l.id,
                                  subscription: t,
                                  className: Z.changePlanNotice
                              }),
                              (0, i.jsxs)('div', {
                                  className: Z.subscriptionInfoCards,
                                  children: [
                                      (0, i.jsx)(L, {
                                          label: K,
                                          value: W
                                      }),
                                      (0, i.jsx)(L, {
                                          label: y.intl.string(y.t.dltUMD),
                                          value: Y,
                                          showInfoIcon: X,
                                          infoIconTooltipText: X ? y.intl.string(y.t['/q6fpa']) : void 0
                                      }),
                                      (0, i.jsx)(L, {
                                          label: y.intl.string(y.t.AOcwWF),
                                          value: H
                                      })
                                  ]
                              }),
                              (0, i.jsx)(c.LZC, { size: 16 }),
                              !F &&
                                  !U &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(c.vwX, { children: y.intl.string(y.t.wmMFvL) }), (0, i.jsx)(k, { subscription: t })]
                                  }),
                              !q &&
                                  (0, i.jsx)(B, {
                                      isTrial: X,
                                      isCancelled: F,
                                      isResubscribing: I,
                                      shouldHideRoleSubscriptionEntryPoints: w,
                                      onCancelSubscriptionClick: () => {
                                          null != o &&
                                              (0, A.h)({
                                                  guildId: o.id,
                                                  groupListing: l,
                                                  listing: n,
                                                  subscription: t
                                              });
                                      },
                                      onChangePlanClick: () => {
                                          null != o && ((0, T.uL)(R.Z5c.CHANNEL(o.id, D.oC.ROLE_SUBSCRIPTIONS)), (0, u.xf)(), h.Z.show(R.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, y.intl.string(y.t.DvbaMz), () => m.Z.open(R.oAB.SUBSCRIPTIONS, P.cP)));
                                      },
                                      onResubscribeClick: G
                                  })
                          ]
                      })
                    : null
            ]
        });
    };
