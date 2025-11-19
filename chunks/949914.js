n.d(t, { Z: () => B }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(722770),
    l = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(355467),
    f = n(254854),
    _ = n(100527),
    p = n(906732),
    h = n(377171),
    m = n(878596),
    g = n(313201),
    E = n(674180),
    b = n(565138),
    y = n(374649),
    O = n(908951),
    v = n(703656),
    I = n(313789),
    T = n(342386),
    S = n(518596),
    A = n(853872),
    C = n(245950),
    N = n(404203),
    R = n(330181),
    P = n(954821),
    D = n(980864),
    w = n(981631),
    L = n(176505),
    x = n(526761),
    M = n(388032),
    k = n(816730);
let j = (e) => {
        let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: a } = e;
        return (0, r.jsxs)("div", {
            className: k.infoCard,
            children: [
                (0, r.jsxs)("div", {
                    className: k.infoCardLabelContainer,
                    children: [
                        (0, r.jsx)(u.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: k.infoCardLabel,
                            children: t,
                        }),
                        i &&
                            (0, r.jsx)(c.u, {
                                text: a,
                                children: (0, r.jsx)(u.d3s, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: k.infoCardIcon,
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(u.Heading, {
                    variant: "heading-xl/semibold",
                    className: k.infoCardValue,
                    children: n,
                }),
            ],
        });
    },
    U = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, p.ZP)(),
            [i] = (0, y.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: _.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            a = (0, l.e7)([A.Z], () => A.Z.hasFetchedPaymentSources);
        return null != i && a
            ? (0, r.jsx)(O.Z, {
                  subscription: t,
                  currentInvoicePreview: i,
                  dropdownClassName: k.paymentSourceDropdown,
              })
            : (0, r.jsx)(u.$jN, {});
    },
    G = (e) => {
        let {
            isTrial: t,
            isCancelled: n,
            isResubscribing: i,
            shouldHideRoleSubscriptionEntryPoints: a,
            onCancelSubscriptionClick: o,
            onResubscribeClick: s,
            onChangePlanClick: l,
        } = e;
        return n && (t || a)
            ? null
            : (0, r.jsx)(u.gNt, {
                  label: M.intl.string(M.t["4neDM+"]),
                  children: (0, r.jsx)("div", {
                      className: k.__invalid_rowButtons,
                      children: n
                          ? (0, r.jsx)(u.Button, {
                                variant: "primary",
                                text: M.intl.string(M.t.y3mAE4),
                                onClick: s,
                                loading: i,
                            })
                          : (0, r.jsxs)(r.Fragment, {
                                children: [
                                    !t &&
                                        !a &&
                                        (0, r.jsx)(m.Z, {
                                            label: M.intl.string(M.t.FRbWR8),
                                            onClick: l,
                                        }),
                                    (0, r.jsx)(m.Z, {
                                        label: M.intl.string(M.t.Dx0lF7),
                                        onClick: o,
                                    }),
                                ],
                            }),
                  }),
              });
    },
    B = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: a,
                guild: l,
                expanded: _,
                handleToggleExpanded: m,
                subscriptionInfo: y,
            } = (0, C.Z)(t),
            [O, A] = i.useState(!1),
            B = (0, g.Dt)(),
            { analyticsLocations: Z } = (0, p.ZP)(),
            { shouldHideGuildPurchaseEntryPoints: F } = (0, E.uP)(null == l ? void 0 : l.id),
            V = (null == t ? void 0 : t.paymentGateway) === w.gg$.APPLE_PARTNER;
        if (null == a || null == n || null == y) return null;
        let H = () => {
                null != l &&
                    ((0, v.uL)(w.Z5c.CHANNEL(l.id, L.oC.ROLE_SUBSCRIPTIONS)),
                    (0, T.default)(),
                    f.Z.show(w.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, M.intl.string(M.t.DvbaM4), () =>
                        (0, S.openUserSettings)(I.n.SUBSCRIPTIONS_PANEL, {
                            section: w.oAB.SUBSCRIPTIONS,
                            subsection: x.cP,
                        }),
                    ));
            },
            Y = () => {
                null != l &&
                    (0, P.h)({
                        groupListing: a,
                        listing: n,
                        subscription: t,
                    });
            },
            W = async () => {
                try {
                    A(!0), await d.pl(t, Z), (0, D.h)();
                } finally {
                    A(!1);
                }
            },
            {
                isCancelled: K,
                isPastDue: z,
                subscriptionPrice: q,
                memberSince: X,
                nextRenewalDate: Q,
                nextRenewalLabel: J,
                isTrial: $,
            } = y,
            ee = n.soft_deleted || null == l || V,
            et = () =>
                _
                    ? (0, r.jsxs)("div", {
                          id: B,
                          children: [
                              (0, r.jsx)("div", { className: k.divider }),
                              (0, r.jsx)(R.Z, {
                                  groupListingId: a.id,
                                  subscription: t,
                                  className: k.changePlanNotice,
                              }),
                              (0, r.jsxs)("div", {
                                  className: k.subscriptionInfoCards,
                                  children: [
                                      (0, r.jsx)(j, {
                                          label: J,
                                          value: Q,
                                      }),
                                      (0, r.jsx)(j, {
                                          label: M.intl.string(M.t.dltUMH),
                                          value: q,
                                          showInfoIcon: $,
                                          infoIconTooltipText: $ ? M.intl.string(M.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, r.jsx)(j, {
                                          label: M.intl.string(M.t.AOcwWB),
                                          value: X,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(u.LZC, { size: 16 }),
                              !K &&
                                  !V &&
                                  (0, r.jsx)(u.gNt, {
                                      label: M.intl.string(M.t.wmMFvA),
                                      children: (0, r.jsx)(U, { subscription: t }),
                                  }),
                              !ee &&
                                  (0, r.jsx)(G, {
                                      isTrial: $,
                                      isCancelled: K,
                                      isResubscribing: O,
                                      shouldHideRoleSubscriptionEntryPoints: F,
                                      onCancelSubscriptionClick: Y,
                                      onChangePlanClick: H,
                                      onResubscribeClick: W,
                                  }),
                          ],
                      })
                    : null,
            en = () =>
                K
                    ? (0, r.jsx)(u.IGR, { text: M.intl.string(M.t["7uFZGt"]) })
                    : $
                      ? (0, r.jsx)(u.IGR, {
                            text: M.intl.string(M.t["6anton"]),
                            color: s.Z.BRAND_500,
                        })
                      : z
                        ? (0, r.jsx)(c.u, {
                              text: M.intl.string(M.t.eSuJE2),
                              children: (0, r.jsx)("div", {
                                  children: (0, r.jsx)(u.IGR, {
                                      className: k.paymentDueBadge,
                                      text: M.intl.string(M.t.NrRwIl),
                                      color: s.Z.YELLOW_300,
                                  }),
                              }),
                          })
                        : null,
            er = () =>
                V
                    ? (0, r.jsx)(c.u, {
                          text: M.intl.string(M.t.nv1IqK),
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(u.IGR, {
                                  text: M.intl.string(M.t["sBl3X/"]),
                                  color: h.Z.INTERACTIVE_MUTED,
                              }),
                          }),
                      })
                    : null;
        return (0, r.jsxs)("div", {
            className: k.container,
            children: [
                (0, r.jsx)(N.Z, {
                    onClick: m,
                    className: k.headerContainer,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: i } = e;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                null != l &&
                                    (0, r.jsx)(b.Z, {
                                        guild: l,
                                        active: !0,
                                        size: b.Z.Sizes.MEDIUM,
                                    }),
                                (0, r.jsxs)("div", {
                                    className: k.headerTextContainer,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/medium",
                                            className: k.guildName,
                                            children: null != l ? l.name : M.intl.string(M.t["He+cmd"]),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: k.headerSubtitleContainer,
                                            children: [
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    className: k.tierName,
                                                    children: n.name,
                                                }),
                                                en(),
                                                er(),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.P3F, {
                                    onClick: i(m),
                                    "aria-label": M.intl.string(M.t.e5eQOy),
                                    "aria-controls": B,
                                    "aria-expanded": _,
                                    focusProps: { ringTarget: t },
                                    children: (0, r.jsx)(u.CJ0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: o()(k.arrowIcon, { [k.arrowIconExpanded]: _ }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                et(),
            ],
        });
    };
