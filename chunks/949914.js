n.d(t, { Z: () => F }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(722770),
    l = n(442837),
    c = n(481060),
    u = n(355467),
    d = n(254854),
    f = n(230711),
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
    I = n(342386),
    T = n(853872),
    S = n(245950),
    A = n(404203),
    C = n(330181),
    N = n(954821),
    R = n(980864),
    P = n(981631),
    w = n(176505),
    D = n(526761),
    x = n(388032),
    L = n(602589);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = (e) => {
        let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: a } = e;
        return (0, r.jsxs)("div", {
            className: L.infoCard,
            children: [
                (0, r.jsxs)("div", {
                    className: L.infoCardLabelContainer,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: "heading-deprecated-12/semibold",
                            className: L.infoCardLabel,
                            children: t,
                        }),
                        i &&
                            (0, r.jsx)(c.ua7, {
                                clickableOnMobile: !0,
                                text: a,
                                children: (e) =>
                                    (0, r.jsx)(
                                        c.d3s,
                                        U(
                                            M(
                                                {
                                                    size: "xs",
                                                    color: "currentColor",
                                                },
                                                e,
                                            ),
                                            { className: L.infoCardIcon },
                                        ),
                                    ),
                            }),
                    ],
                }),
                (0, r.jsx)(c.X6q, {
                    variant: "heading-xl/semibold",
                    className: L.infoCardValue,
                    children: n,
                }),
            ],
        });
    },
    B = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, p.ZP)(),
            [i] = (0, y.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: _.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            a = (0, l.e7)([T.Z], () => T.Z.hasFetchedPaymentSources);
        return null != i && a
            ? (0, r.jsx)(O.Z, {
                  subscription: t,
                  currentInvoicePreview: i,
                  dropdownClassName: L.paymentSourceDropdown,
              })
            : (0, r.jsx)(c.$jN, {});
    },
    Z = (e) => {
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
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(c.vwX, { children: x.intl.string(x.t["4neDMz"]) }),
                      (0, r.jsx)("div", {
                          className: L.__invalid_rowButtons,
                          children: n
                              ? (0, r.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: x.intl.string(x.t.y3mAEx),
                                    onClick: s,
                                    loading: i,
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        !t &&
                                            !a &&
                                            (0, r.jsx)(m.Z, {
                                                label: x.intl.string(x.t.FRbWR0),
                                                onClick: l,
                                            }),
                                        (0, r.jsx)(m.Z, {
                                            label: x.intl.string(x.t.Dx0lFx),
                                            onClick: o,
                                        }),
                                    ],
                                }),
                      }),
                  ],
              });
    },
    F = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: a,
                guild: l,
                expanded: _,
                handleToggleExpanded: m,
                subscriptionInfo: y,
            } = (0, S.Z)(t),
            [O, T] = i.useState(!1),
            j = (0, g.Dt)(),
            { analyticsLocations: k } = (0, p.ZP)(),
            { shouldHideGuildPurchaseEntryPoints: F } = (0, E.uP)(null == l ? void 0 : l.id),
            V = (null == t ? void 0 : t.paymentGateway) === P.gg$.APPLE_PARTNER;
        if (null == a || null == n || null == y) return null;
        let H = () => {
                null != l &&
                    ((0, v.uL)(P.Z5c.CHANNEL(l.id, w.oC.ROLE_SUBSCRIPTIONS)),
                    (0, I.Z)(),
                    d.Z.show(P.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, x.intl.string(x.t.DvbaMz), () =>
                        f.Z.open(P.oAB.SUBSCRIPTIONS, D.cP),
                    ));
            },
            Y = () => {
                null != l &&
                    (0, N.h)({
                        groupListing: a,
                        listing: n,
                        subscription: t,
                    });
            },
            W = async () => {
                try {
                    T(!0), await u.pl(t, k), (0, R.h)();
                } finally {
                    T(!1);
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
                          id: j,
                          children: [
                              (0, r.jsx)("div", { className: L.divider }),
                              (0, r.jsx)(C.Z, {
                                  groupListingId: a.id,
                                  subscription: t,
                                  className: L.changePlanNotice,
                              }),
                              (0, r.jsxs)("div", {
                                  className: L.subscriptionInfoCards,
                                  children: [
                                      (0, r.jsx)(G, {
                                          label: J,
                                          value: Q,
                                      }),
                                      (0, r.jsx)(G, {
                                          label: x.intl.string(x.t.dltUMD),
                                          value: q,
                                          showInfoIcon: $,
                                          infoIconTooltipText: $ ? x.intl.string(x.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, r.jsx)(G, {
                                          label: x.intl.string(x.t.AOcwWF),
                                          value: X,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(c.LZC, { size: 16 }),
                              !K &&
                                  !V &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(c.vwX, { children: x.intl.string(x.t.wmMFvL) }),
                                          (0, r.jsx)(B, { subscription: t }),
                                      ],
                                  }),
                              !ee &&
                                  (0, r.jsx)(Z, {
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
                    ? (0, r.jsx)(c.IGR, { text: x.intl.string(x.t["7uFZGh"]) })
                    : $
                      ? (0, r.jsx)(c.IGR, {
                            text: x.intl.string(x.t["6antoq"]),
                            color: s.Z.BRAND_500,
                        })
                      : z
                        ? (0, r.jsx)(c.ua7, {
                              text: x.intl.string(x.t.eSuJEx),
                              children: (e) =>
                                  (0, r.jsx)(
                                      "div",
                                      U(M({}, e), {
                                          children: (0, r.jsx)(c.IGR, {
                                              className: L.paymentDueBadge,
                                              text: x.intl.string(x.t.NrRwIi),
                                              color: s.Z.YELLOW_300,
                                          }),
                                      }),
                                  ),
                          })
                        : null,
            er = () =>
                V
                    ? (0, r.jsx)(c.ua7, {
                          text: x.intl.string(x.t.nv1IqK),
                          children: (e) =>
                              (0, r.jsx)(
                                  "div",
                                  U(M({}, e), {
                                      children: (0, r.jsx)(c.IGR, {
                                          text: x.intl.string(x.t.sBl3X1),
                                          color: h.Z.INTERACTIVE_MUTED,
                                      }),
                                  }),
                              ),
                      })
                    : null;
        return (0, r.jsxs)("div", {
            className: L.container,
            children: [
                (0, r.jsx)(A.Z, {
                    onClick: m,
                    className: L.headerContainer,
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
                                    className: L.headerTextContainer,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/medium",
                                            className: L.guildName,
                                            children: null != l ? l.name : x.intl.string(x.t["He+cmZ"]),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: L.headerSubtitleContainer,
                                            children: [
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    className: L.tierName,
                                                    children: n.name,
                                                }),
                                                en(),
                                                er(),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.P3F, {
                                    onClick: i(m),
                                    "aria-label": x.intl.string(x.t.e5eQOz),
                                    "aria-controls": j,
                                    "aria-expanded": _,
                                    focusProps: { ringTarget: t },
                                    children: (0, r.jsx)(c.CJ0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: o()(L.arrowIcon, { [L.arrowIconExpanded]: _ }),
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
