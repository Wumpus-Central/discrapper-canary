n.d(t, { Z: () => M }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(722770),
    o = n(442837),
    c = n(481060),
    d = n(355467),
    u = n(37234),
    m = n(254854),
    h = n(230711),
    g = n(100527),
    _ = n(906732),
    x = n(377171),
    p = n(878596),
    E = n(313201),
    C = n(674180),
    f = n(565138),
    T = n(374649),
    N = n(908951),
    I = n(703656),
    S = n(853872),
    b = n(245950),
    v = n(404203),
    j = n(330181),
    A = n(954821),
    O = n(980864),
    R = n(981631),
    P = n(176505),
    D = n(526761),
    y = n(388032),
    Z = n(675616);
let k = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: r } = e;
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
                                text: r,
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
    L = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, _.ZP)(),
            [s] = (0, T.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: g.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            }),
            r = (0, o.e7)([S.Z], () => S.Z.hasFetchedPaymentSources);
        return null != s && r
            ? (0, i.jsx)(N.Z, {
                  subscription: t,
                  currentInvoicePreview: s,
                  dropdownClassName: Z.paymentSourceDropdown
              })
            : (0, i.jsx)(c.$jN, {});
    },
    B = (e) => {
        let { isTrial: t, isCancelled: n, isResubscribing: s, shouldHideRoleSubscriptionEntryPoints: r, onCancelSubscriptionClick: l, onResubscribeClick: a, onChangePlanClick: o } = e;
        return n && (t || r)
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
                                            !r &&
                                            (0, i.jsx)(p.Z, {
                                                label: y.intl.string(y.t.FRbWR0),
                                                onClick: o
                                            }),
                                        (0, i.jsx)(p.Z, {
                                            label: y.intl.string(y.t.Dx0lFx),
                                            onClick: l
                                        })
                                    ]
                                })
                      })
                  ]
              });
    },
    M = (e) => {
        let { subscription: t } = e,
            { listing: n, groupListing: r, guild: o, expanded: g, handleToggleExpanded: p, subscriptionInfo: T } = (0, b.Z)(t),
            [N, S] = s.useState(!1),
            M = (0, E.Dt)(),
            { analyticsLocations: w } = (0, _.ZP)(),
            { shouldHideGuildPurchaseEntryPoints: V } = (0, C.uP)(null == o ? void 0 : o.id),
            U = (null == t ? void 0 : t.paymentGateway) === R.gg$.APPLE_PARTNER;
        if (null == r || null == n || null == T) return null;
        let G = async () => {
                try {
                    S(!0), await d.pl(t, w), (0, O.h)();
                } finally {
                    S(!1);
                }
            },
            { isCancelled: F, isPastDue: H, subscriptionPrice: z, memberSince: Y, nextRenewalDate: W, nextRenewalLabel: K, isTrial: X } = T,
            q = n.soft_deleted || null == o || U,
            Q = () =>
                F
                    ? (0, i.jsx)(c.IGR, { text: y.intl.string(y.t['7uFZGh']) })
                    : X
                      ? (0, i.jsx)(c.IGR, {
                            text: y.intl.string(y.t['6antoq']),
                            color: a.Z.BRAND_500
                        })
                      : H
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
            J = () =>
                U
                    ? (0, i.jsx)(c.ua7, {
                          text: y.intl.string(y.t.nv1IqK),
                          children: (e) =>
                              (0, i.jsx)('div', {
                                  ...e,
                                  children: (0, i.jsx)(c.IGR, {
                                      text: y.intl.string(y.t.sBl3X1),
                                      color: x.Z.INTERACTIVE_MUTED
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
                                    (0, i.jsx)(f.Z, {
                                        guild: o,
                                        active: !0,
                                        size: f.Z.Sizes.MEDIUM
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
                                                Q(),
                                                J()
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
                                        className: l()(Z.arrowIcon, { [Z.arrowIconExpanded]: g })
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
                              (0, i.jsx)(j.Z, {
                                  groupListingId: r.id,
                                  subscription: t,
                                  className: Z.changePlanNotice
                              }),
                              (0, i.jsxs)('div', {
                                  className: Z.subscriptionInfoCards,
                                  children: [
                                      (0, i.jsx)(k, {
                                          label: K,
                                          value: W
                                      }),
                                      (0, i.jsx)(k, {
                                          label: y.intl.string(y.t.dltUMD),
                                          value: z,
                                          showInfoIcon: X,
                                          infoIconTooltipText: X ? y.intl.string(y.t['/q6fpa']) : void 0
                                      }),
                                      (0, i.jsx)(k, {
                                          label: y.intl.string(y.t.AOcwWF),
                                          value: Y
                                      })
                                  ]
                              }),
                              (0, i.jsx)(c.LZC, { size: 16 }),
                              !F &&
                                  !U &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(c.vwX, { children: y.intl.string(y.t.wmMFvL) }), (0, i.jsx)(L, { subscription: t })]
                                  }),
                              !q &&
                                  (0, i.jsx)(B, {
                                      isTrial: X,
                                      isCancelled: F,
                                      isResubscribing: N,
                                      shouldHideRoleSubscriptionEntryPoints: V,
                                      onCancelSubscriptionClick: () => {
                                          null != o &&
                                              (0, A.h)({
                                                  guildId: o.id,
                                                  groupListing: r,
                                                  listing: n,
                                                  subscription: t
                                              });
                                      },
                                      onChangePlanClick: () => {
                                          null != o && ((0, I.uL)(R.Z5c.CHANNEL(o.id, P.oC.ROLE_SUBSCRIPTIONS)), (0, u.xf)(), m.Z.show(R.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, y.intl.string(y.t.DvbaMz), () => h.Z.open(R.oAB.SUBSCRIPTIONS, D.cP)));
                                      },
                                      onResubscribeClick: G
                                  })
                          ]
                      })
                    : null
            ]
        });
    };
