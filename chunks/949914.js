n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
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
    O = n(980864),
    R = n(981631),
    P = n(176505),
    D = n(526761),
    y = n(388032),
    B = n(675616);
let Z = (e) => {
        let { label: t, value: n, showInfoIcon: r, infoIconTooltipText: s } = e;
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
                        r &&
                            (0, i.jsx)(c.Tooltip, {
                                clickableOnMobile: !0,
                                text: s,
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
            [r] = (0, T.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: h.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            }),
            s = (0, o.e7)([I.Z], () => I.Z.hasFetchedPaymentSources);
        return null != r && s
            ? (0, i.jsx)(S.Z, {
                  subscription: t,
                  currentInvoicePreview: r,
                  dropdownClassName: B.paymentSourceDropdown
              })
            : (0, i.jsx)(c.Spinner, {});
    },
    M = (e) => {
        let { isTrial: t, isCancelled: n, isResubscribing: r, shouldHideRoleSubscriptionEntryPoints: s, onCancelSubscriptionClick: a, onResubscribeClick: l, onChangePlanClick: o } = e;
        return n && (t || s)
            ? null
            : (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(c.FormTitle, { children: y.intl.string(y.t['4neDMz']) }),
                      (0, i.jsx)('div', {
                          className: B.__invalid_rowButtons,
                          children: n
                              ? (0, i.jsx)(c.Button, {
                                    onClick: l,
                                    submitting: r,
                                    children: y.intl.string(y.t.y3mAEx)
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        !t &&
                                            !s &&
                                            (0, i.jsx)(f.Z, {
                                                label: y.intl.string(y.t.FRbWR0),
                                                onClick: o
                                            }),
                                        (0, i.jsx)(f.Z, {
                                            label: y.intl.string(y.t.Dx0lFx),
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
        { listing: n, groupListing: s, guild: o, expanded: h, handleToggleExpanded: f, subscriptionInfo: T } = (0, N.Z)(t),
        [S, I] = r.useState(!1),
        k = (0, _.Dt)(),
        { analyticsLocations: w } = (0, p.ZP)(),
        { shouldHideGuildPurchaseEntryPoints: F } = (0, E.uP)(null == o ? void 0 : o.id),
        U = (null == t ? void 0 : t.paymentGateway) === R.gg$.APPLE_PARTNER;
    if (null == s || null == n || null == T) return null;
    let V = () => {
            null != o && ((0, b.uL)(R.Z5c.CHANNEL(o.id, P.oC.ROLE_SUBSCRIPTIONS)), (0, u.xf)(), m.Z.show(R.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, y.intl.string(y.t.DvbaMz), () => g.Z.open(R.oAB.SUBSCRIPTIONS, D.cP)));
        },
        G = () => {
            null != o &&
                (0, j.h)({
                    guildId: o.id,
                    groupListing: s,
                    listing: n,
                    subscription: t
                });
        },
        H = async () => {
            try {
                I(!0), await d.pl(t, w), (0, O.h)();
            } finally {
                I(!1);
            }
        },
        { isCancelled: Y, isPastDue: W, subscriptionPrice: z, memberSince: K, nextRenewalDate: q, nextRenewalLabel: Q, isTrial: X } = T,
        J = n.soft_deleted || null == o || U,
        $ = () => {
            if (Y) return (0, i.jsx)(c.TextBadge, { text: y.intl.string(y.t['7uFZGh']) });
            if (X)
                return (0, i.jsx)(c.TextBadge, {
                    text: y.intl.string(y.t['6antoq']),
                    color: l.Z.BRAND_500
                });
            if (W)
                return (0, i.jsx)(c.Tooltip, {
                    text: y.intl.string(y.t.eSuJEx),
                    children: (e) =>
                        (0, i.jsx)('div', {
                            ...e,
                            children: (0, i.jsx)(c.TextBadge, {
                                className: B.paymentDueBadge,
                                text: y.intl.string(y.t.NrRwIi),
                                color: l.Z.YELLOW_300
                            })
                        })
                });
            else return null;
        },
        ee = () =>
            U
                ? (0, i.jsx)(c.Tooltip, {
                      text: y.intl.string(y.t.nv1IqK),
                      children: (e) =>
                          (0, i.jsx)('div', {
                              ...e,
                              children: (0, i.jsx)(c.TextBadge, {
                                  text: y.intl.string(y.t.sBl3X1),
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
                    let { areaRef: t, handleStopPropagation: r } = e;
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
                                        children: null != o ? o.name : y.intl.string(y.t['He+cmZ'])
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
                                onClick: r(f),
                                'aria-label': y.intl.string(y.t.e5eQOz),
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
                              groupListingId: s.id,
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
                                      label: y.intl.string(y.t.dltUMD),
                                      value: z,
                                      showInfoIcon: X,
                                      infoIconTooltipText: X ? y.intl.string(y.t['/q6fpa']) : void 0
                                  }),
                                  (0, i.jsx)(Z, {
                                      label: y.intl.string(y.t.AOcwWF),
                                      value: K
                                  })
                              ]
                          }),
                          (0, i.jsx)(c.Spacer, { size: 16 }),
                          !Y &&
                              !U &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [(0, i.jsx)(c.FormTitle, { children: y.intl.string(y.t.wmMFvL) }), (0, i.jsx)(L, { subscription: t })]
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
