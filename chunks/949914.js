n.d(t, { Z: () => G }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(28664),
    u = n(481060),
    d = n(355467),
    f = n(254854),
    p = n(100527),
    _ = n(906732),
    m = n(878596),
    h = n(313201),
    g = n(674180),
    E = n(565138),
    b = n(374649),
    y = n(908951),
    O = n(703656),
    v = n(313789),
    S = n(342386),
    I = n(518596),
    T = n(853872),
    C = n(245950),
    A = n(404203),
    N = n(330181),
    P = n(954821),
    R = n(980864),
    w = n(981631),
    D = n(176505),
    x = n(526761),
    L = n(388032),
    j = n(64435);
let M = (e) => {
        let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: a } = e;
        return (0, r.jsxs)("div", {
            className: j.infoCard,
            children: [
                (0, r.jsxs)("div", {
                    className: j.infoCardLabelContainer,
                    children: [
                        (0, r.jsx)(u.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: j.infoCardLabel,
                            children: t,
                        }),
                        i &&
                            (0, r.jsx)(c.u, {
                                text: a,
                                children: (0, r.jsx)(u.d3s, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: j.infoCardIcon,
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(u.Heading, {
                    variant: "heading-xl/semibold",
                    className: j.infoCardValue,
                    children: n,
                }),
            ],
        });
    },
    k = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, _.ZP)(),
            [i] = (0, b.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: p.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            a = (0, s.e7)([T.Z], () => T.Z.hasFetchedPaymentSources);
        return null != i && a
            ? (0, r.jsx)(y.Z, {
                  subscription: t,
                  currentInvoicePreview: i,
                  dropdownClassName: j.paymentSourceDropdown,
              })
            : (0, r.jsx)(u.$jN, {});
    },
    U = (e) => {
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
                  label: L.intl.string(L.t["4neDM+"]),
                  children: (0, r.jsx)("div", {
                      className: j.__invalid_rowButtons,
                      children: n
                          ? (0, r.jsx)(u.Button, {
                                variant: "primary",
                                text: L.intl.string(L.t.y3mAE4),
                                onClick: s,
                                loading: i,
                            })
                          : (0, r.jsxs)(r.Fragment, {
                                children: [
                                    !t &&
                                        !a &&
                                        (0, r.jsx)(m.Z, {
                                            label: L.intl.string(L.t.FRbWR8),
                                            onClick: l,
                                        }),
                                    (0, r.jsx)(m.Z, {
                                        label: L.intl.string(L.t.Dx0lF7),
                                        onClick: o,
                                    }),
                                ],
                            }),
                  }),
              });
    },
    G = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: a,
                guild: s,
                expanded: p,
                handleToggleExpanded: m,
                subscriptionInfo: b,
            } = (0, C.Z)(t),
            [y, T] = i.useState(!1),
            G = (0, h.Dt)(),
            { analyticsLocations: Z } = (0, _.ZP)(),
            { shouldHideGuildPurchaseEntryPoints: B } = (0, g.uP)(null == s ? void 0 : s.id),
            F = (null == t ? void 0 : t.paymentGateway) === w.gg$.APPLE_PARTNER;
        if (null == a || null == n || null == b) return null;
        let V = () => {
                null != s &&
                    ((0, O.uL)(w.Z5c.CHANNEL(s.id, D.oC.ROLE_SUBSCRIPTIONS)),
                    (0, S.default)(),
                    f.Z.show(w.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, L.intl.string(L.t.DvbaM4), () =>
                        (0, I.openUserSettings)(v.n.SUBSCRIPTIONS_PANEL, {
                            section: w.oAB.SUBSCRIPTIONS,
                            subsection: x.cP,
                        }),
                    ));
            },
            H = () => {
                null != s &&
                    (0, P.h)({
                        groupListing: a,
                        listing: n,
                        subscription: t,
                    });
            },
            Y = async () => {
                try {
                    T(!0), await d.pl(t, Z), (0, R.h)();
                } finally {
                    T(!1);
                }
            },
            {
                isCancelled: W,
                isPastDue: K,
                subscriptionPrice: z,
                memberSince: q,
                nextRenewalDate: Q,
                nextRenewalLabel: X,
                isTrial: J,
            } = b,
            $ = n.soft_deleted || null == s || F,
            ee = () =>
                p
                    ? (0, r.jsxs)("div", {
                          id: G,
                          children: [
                              (0, r.jsx)("div", { className: j.divider }),
                              (0, r.jsx)(N.Z, {
                                  groupListingId: a.id,
                                  subscription: t,
                                  className: j.changePlanNotice,
                              }),
                              (0, r.jsxs)("div", {
                                  className: j.subscriptionInfoCards,
                                  children: [
                                      (0, r.jsx)(M, {
                                          label: X,
                                          value: Q,
                                      }),
                                      (0, r.jsx)(M, {
                                          label: L.intl.string(L.t.dltUMH),
                                          value: z,
                                          showInfoIcon: J,
                                          infoIconTooltipText: J ? L.intl.string(L.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, r.jsx)(M, {
                                          label: L.intl.string(L.t.AOcwWB),
                                          value: q,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(u.LZC, { size: 16 }),
                              !W &&
                                  !F &&
                                  (0, r.jsx)(u.gNt, {
                                      label: L.intl.string(L.t.wmMFvA),
                                      children: (0, r.jsx)(k, { subscription: t }),
                                  }),
                              !$ &&
                                  (0, r.jsx)(U, {
                                      isTrial: J,
                                      isCancelled: W,
                                      isResubscribing: y,
                                      shouldHideRoleSubscriptionEntryPoints: B,
                                      onCancelSubscriptionClick: H,
                                      onChangePlanClick: V,
                                      onResubscribeClick: Y,
                                  }),
                          ],
                      })
                    : null,
            et = () =>
                W
                    ? (0, r.jsx)(u.IGR, { text: L.intl.string(L.t["7uFZGt"]) })
                    : J
                      ? (0, r.jsx)(u.IGR, {
                            text: L.intl.string(L.t["6anton"]),
                            color: l.Z.unsafe_rawColors.BRAND_500.css,
                        })
                      : K
                        ? (0, r.jsx)(c.u, {
                              text: L.intl.string(L.t.eSuJE2),
                              children: (0, r.jsx)("div", {
                                  children: (0, r.jsx)(u.IGR, {
                                      className: j.paymentDueBadge,
                                      text: L.intl.string(L.t.NrRwIl),
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          })
                        : null,
            en = () =>
                F
                    ? (0, r.jsx)(c.u, {
                          text: L.intl.string(L.t.nv1IqK),
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(u.IGR, {
                                  text: L.intl.string(L.t["sBl3X/"]),
                                  color: l.Z.colors.INTERACTIVE_MUTED.css,
                              }),
                          }),
                      })
                    : null;
        return (0, r.jsxs)("div", {
            className: j.container,
            children: [
                (0, r.jsx)(A.Z, {
                    onClick: m,
                    className: j.headerContainer,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: i } = e;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                null != s &&
                                    (0, r.jsx)(E.Z, {
                                        guild: s,
                                        active: !0,
                                        size: E.Z.Sizes.MEDIUM,
                                    }),
                                (0, r.jsxs)("div", {
                                    className: j.headerTextContainer,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/medium",
                                            className: j.guildName,
                                            children: null != s ? s.name : L.intl.string(L.t["He+cmd"]),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: j.headerSubtitleContainer,
                                            children: [
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    className: j.tierName,
                                                    children: n.name,
                                                }),
                                                et(),
                                                en(),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.P3F, {
                                    onClick: i(m),
                                    "aria-label": L.intl.string(L.t.e5eQOy),
                                    "aria-controls": G,
                                    "aria-expanded": p,
                                    focusProps: { ringTarget: t },
                                    children: (0, r.jsx)(u.CJ0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: o()(j.arrowIcon, { [j.arrowIconExpanded]: p }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                ee(),
            ],
        });
    };
