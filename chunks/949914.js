n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(722770),
    o = n(442837),
    c = n(481060),
    d = n(355467),
    u = n(37234),
    m = n(254854),
    g = n(230711),
    h = n(100527),
    p = n(906732),
    x = n(377171),
    f = n(878596),
    _ = n(313201),
    E = n(674180),
    C = n(565138),
    T = n(374649),
    S = n(908951),
    b = n(703656),
    I = n(853872),
    N = n(245950),
    v = n(404203),
    A = n(330181),
    j = n(954821),
    R = n(980864),
    O = n(981631),
    P = n(176505),
    y = n(526761),
    D = n(388032),
    B = n(675616);
let Z = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: r } = e;
        return (0, i.jsxs)('div', {
            className: B.infoCard,
            children: [
                (0, i.jsxs)('div', {
                    className: B.infoCardLabelContainer,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: 'heading-deprecated-12/semibold',
                            className: B.infoCardLabel,
                            children: t
                        }),
                        s &&
                            (0, i.jsx)(c.Tooltip, {
                                clickableOnMobile: !0,
                                text: r,
                                children: (e) =>
                                    (0, i.jsx)(c.CircleInformationIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        ...e,
                                        className: B.infoCardIcon
                                    })
                            })
                    ]
                }),
                (0, i.jsx)(c.Heading, {
                    variant: 'heading-xl/semibold',
                    className: B.infoCardValue,
                    children: n
                })
            ]
        });
    },
    L = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, p.ZP)(),
            [s] = (0, T.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: h.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            }),
            r = (0, o.e7)([I.Z], () => I.Z.hasFetchedPaymentSources);
        return null != s && r
            ? (0, i.jsx)(S.Z, {
                  subscription: t,
                  currentInvoicePreview: s,
                  dropdownClassName: B.paymentSourceDropdown
              })
            : (0, i.jsx)(c.Spinner, {});
    },
    M = (e) => {
        let { isTrial: t, isCancelled: n, isResubscribing: s, shouldHideRoleSubscriptionEntryPoints: r, onCancelSubscriptionClick: a, onResubscribeClick: l, onChangePlanClick: o } = e;
        return n && (t || r)
            ? null
            : (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(c.FormTitle, { children: D.intl.string(D.t['4neDMz']) }),
                      (0, i.jsx)('div', {
                          className: B.__invalid_rowButtons,
                          children: n
                              ? (0, i.jsx)(c.Button, {
                                    onClick: l,
                                    submitting: s,
                                    children: D.intl.string(D.t.y3mAEx)
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        !t &&
                                            !r &&
                                            (0, i.jsx)(f.Z, {
                                                label: D.intl.string(D.t.FRbWR0),
                                                onClick: o
                                            }),
                                        (0, i.jsx)(f.Z, {
                                            label: D.intl.string(D.t.Dx0lFx),
                                            onClick: a
                                        })
                                    ]
                                })
                      })
                  ]
              });
    };
t.Z = (e) => {
    let { subscription: t } = e,
        { listing: n, groupListing: r, guild: o, expanded: h, handleToggleExpanded: f, subscriptionInfo: T } = (0, N.Z)(t),
        [S, I] = s.useState(!1),
        k = (0, _.Dt)(),
        { analyticsLocations: w } = (0, p.ZP)(),
        { shouldHideGuildPurchaseEntryPoints: F } = (0, E.uP)(null == o ? void 0 : o.id),
        U = (null == t ? void 0 : t.paymentGateway) === O.gg$.APPLE_PARTNER;
    if (null == r || null == n || null == T) return null;
    let V = () => {
            null != o && ((0, b.uL)(O.Z5c.CHANNEL(o.id, P.oC.ROLE_SUBSCRIPTIONS)), (0, u.xf)(), m.Z.show(O.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, D.intl.string(D.t.DvbaMz), () => g.Z.open(O.oAB.SUBSCRIPTIONS, y.cP)));
        },
        G = () => {
            null != o &&
                (0, j.h)({
                    guildId: o.id,
                    groupListing: r,
                    listing: n,
                    subscription: t
                });
        },
        H = async () => {
            try {
                I(!0), await d.pl(t, w), (0, R.h)();
            } finally {
                I(!1);
            }
        },
        { isCancelled: Y, isPastDue: W, subscriptionPrice: z, memberSince: K, nextRenewalDate: q, nextRenewalLabel: Q, isTrial: X } = T,
        J = n.soft_deleted || null == o || U,
        $ = () => {
            if (Y) return (0, i.jsx)(c.TextBadge, { text: D.intl.string(D.t['7uFZGh']) });
            if (X)
                return (0, i.jsx)(c.TextBadge, {
                    text: D.intl.string(D.t['6antoq']),
                    color: l.Z.BRAND_500
                });
            if (W)
                return (0, i.jsx)(c.Tooltip, {
                    text: D.intl.string(D.t.eSuJEx),
                    children: (e) =>
                        (0, i.jsx)('div', {
                            ...e,
                            children: (0, i.jsx)(c.TextBadge, {
                                className: B.paymentDueBadge,
                                text: D.intl.string(D.t.NrRwIi),
                                color: l.Z.YELLOW_300
                            })
                        })
                });
            else return null;
        },
        ee = () =>
            U
                ? (0, i.jsx)(c.Tooltip, {
                      text: D.intl.string(D.t.nv1IqK),
                      children: (e) =>
                          (0, i.jsx)('div', {
                              ...e,
                              children: (0, i.jsx)(c.TextBadge, {
                                  text: D.intl.string(D.t.sBl3X1),
                                  color: x.Z.INTERACTIVE_MUTED
                              })
                          })
                  })
                : null;
    return (0, i.jsxs)('div', {
        className: B.container,
        children: [
            (0, i.jsx)(v.Z, {
                onClick: f,
                className: B.headerContainer,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: s } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != o &&
                                (0, i.jsx)(C.Z, {
                                    guild: o,
                                    active: !0,
                                    size: C.Z.Sizes.MEDIUM
                                }),
                            (0, i.jsxs)('div', {
                                className: B.headerTextContainer,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        className: B.guildName,
                                        children: null != o ? o.name : D.intl.string(D.t['He+cmZ'])
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: B.headerSubtitleContainer,
                                        children: [
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                className: B.tierName,
                                                children: n.name
                                            }),
                                            $(),
                                            ee()
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(c.Clickable, {
                                onClick: s(f),
                                'aria-label': D.intl.string(D.t.e5eQOz),
                                'aria-controls': k,
                                'aria-expanded': h,
                                focusProps: { ringTarget: t },
                                children: (0, i.jsx)(c.ChevronSmallDownIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(B.arrowIcon, { [B.arrowIconExpanded]: h })
                                })
                            })
                        ]
                    });
                }
            }),
            h
                ? (0, i.jsxs)('div', {
                      id: k,
                      children: [
                          (0, i.jsx)('div', { className: B.divider }),
                          (0, i.jsx)(A.Z, {
                              groupListingId: r.id,
                              subscription: t,
                              className: B.changePlanNotice
                          }),
                          (0, i.jsxs)('div', {
                              className: B.subscriptionInfoCards,
                              children: [
                                  (0, i.jsx)(Z, {
                                      label: Q,
                                      value: q
                                  }),
                                  (0, i.jsx)(Z, {
                                      label: D.intl.string(D.t.dltUMD),
                                      value: z,
                                      showInfoIcon: X,
                                      infoIconTooltipText: X ? D.intl.string(D.t['/q6fpa']) : void 0
                                  }),
                                  (0, i.jsx)(Z, {
                                      label: D.intl.string(D.t.AOcwWF),
                                      value: K
                                  })
                              ]
                          }),
                          (0, i.jsx)(c.Spacer, { size: 16 }),
                          !Y &&
                              !U &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [(0, i.jsx)(c.FormTitle, { children: D.intl.string(D.t.wmMFvL) }), (0, i.jsx)(L, { subscription: t })]
                              }),
                          !J &&
                              (0, i.jsx)(M, {
                                  isTrial: X,
                                  isCancelled: Y,
                                  isResubscribing: S,
                                  shouldHideRoleSubscriptionEntryPoints: F,
                                  onCancelSubscriptionClick: G,
                                  onChangePlanClick: V,
                                  onResubscribeClick: H
                              })
                      ]
                  })
                : null
        ]
    });
};
