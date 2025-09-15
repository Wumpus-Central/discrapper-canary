n.d(t, { Z: () => V }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(722770),
    l = n(442837),
    c = n(481060),
    u = n(355467),
    d = n(254854),
    f = n(100527),
    _ = n(906732),
    p = n(377171),
    h = n(878596),
    m = n(313201),
    g = n(674180),
    E = n(565138),
    b = n(374649),
    y = n(908951),
    O = n(703656),
    v = n(313789),
    I = n(342386),
    T = n(518596),
    S = n(853872),
    A = n(245950),
    C = n(404203),
    N = n(330181),
    R = n(954821),
    P = n(980864),
    w = n(981631),
    D = n(176505),
    x = n(526761),
    L = n(388032),
    j = n(602589);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = (e) => {
        let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: a } = e;
        return (0, r.jsxs)("div", {
            className: j.infoCard,
            children: [
                (0, r.jsxs)("div", {
                    className: j.infoCardLabelContainer,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: "heading-deprecated-12/semibold",
                            className: j.infoCardLabel,
                            children: t,
                        }),
                        i &&
                            (0, r.jsx)(c.ua7, {
                                clickableOnMobile: !0,
                                text: a,
                                children: (e) =>
                                    (0, r.jsx)(
                                        c.d3s,
                                        G(
                                            k(
                                                {
                                                    size: "xs",
                                                    color: "currentColor",
                                                },
                                                e,
                                            ),
                                            { className: j.infoCardIcon },
                                        ),
                                    ),
                            }),
                    ],
                }),
                (0, r.jsx)(c.X6q, {
                    variant: "heading-xl/semibold",
                    className: j.infoCardValue,
                    children: n,
                }),
            ],
        });
    },
    Z = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, _.ZP)(),
            [i] = (0, b.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: f.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            a = (0, l.e7)([S.Z], () => S.Z.hasFetchedPaymentSources);
        return null != i && a
            ? (0, r.jsx)(y.Z, {
                  subscription: t,
                  currentInvoicePreview: i,
                  dropdownClassName: j.paymentSourceDropdown,
              })
            : (0, r.jsx)(c.$jN, {});
    },
    F = (e) => {
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
                      (0, r.jsx)(c.vwX, { children: L.intl.string(L.t["4neDMz"]) }),
                      (0, r.jsx)("div", {
                          className: j.__invalid_rowButtons,
                          children: n
                              ? (0, r.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: L.intl.string(L.t.y3mAEx),
                                    onClick: s,
                                    loading: i,
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        !t &&
                                            !a &&
                                            (0, r.jsx)(h.Z, {
                                                label: L.intl.string(L.t.FRbWR0),
                                                onClick: l,
                                            }),
                                        (0, r.jsx)(h.Z, {
                                            label: L.intl.string(L.t.Dx0lFx),
                                            onClick: o,
                                        }),
                                    ],
                                }),
                      }),
                  ],
              });
    },
    V = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: a,
                guild: l,
                expanded: f,
                handleToggleExpanded: h,
                subscriptionInfo: b,
            } = (0, A.Z)(t),
            [y, S] = i.useState(!1),
            M = (0, m.Dt)(),
            { analyticsLocations: U } = (0, _.ZP)(),
            { shouldHideGuildPurchaseEntryPoints: V } = (0, g.uP)(null == l ? void 0 : l.id),
            H = (null == t ? void 0 : t.paymentGateway) === w.gg$.APPLE_PARTNER;
        if (null == a || null == n || null == b) return null;
        let Y = () => {
                null != l &&
                    ((0, O.uL)(w.Z5c.CHANNEL(l.id, D.oC.ROLE_SUBSCRIPTIONS)),
                    (0, I.default)(),
                    d.Z.show(w.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, L.intl.string(L.t.DvbaMz), () =>
                        (0, T.openUserSettings)(v.n.SUBSCRIPTIONS_PANEL, {
                            section: w.oAB.SUBSCRIPTIONS,
                            subsection: x.cP,
                        }),
                    ));
            },
            W = () => {
                null != l &&
                    (0, R.h)({
                        groupListing: a,
                        listing: n,
                        subscription: t,
                    });
            },
            K = async () => {
                try {
                    S(!0), await u.pl(t, U), (0, P.h)();
                } finally {
                    S(!1);
                }
            },
            {
                isCancelled: z,
                isPastDue: q,
                subscriptionPrice: X,
                memberSince: Q,
                nextRenewalDate: J,
                nextRenewalLabel: $,
                isTrial: ee,
            } = b,
            et = n.soft_deleted || null == l || H,
            en = () =>
                f
                    ? (0, r.jsxs)("div", {
                          id: M,
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
                                      (0, r.jsx)(B, {
                                          label: $,
                                          value: J,
                                      }),
                                      (0, r.jsx)(B, {
                                          label: L.intl.string(L.t.dltUMD),
                                          value: X,
                                          showInfoIcon: ee,
                                          infoIconTooltipText: ee ? L.intl.string(L.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, r.jsx)(B, {
                                          label: L.intl.string(L.t.AOcwWF),
                                          value: Q,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(c.LZC, { size: 16 }),
                              !z &&
                                  !H &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(c.vwX, { children: L.intl.string(L.t.wmMFvL) }),
                                          (0, r.jsx)(Z, { subscription: t }),
                                      ],
                                  }),
                              !et &&
                                  (0, r.jsx)(F, {
                                      isTrial: ee,
                                      isCancelled: z,
                                      isResubscribing: y,
                                      shouldHideRoleSubscriptionEntryPoints: V,
                                      onCancelSubscriptionClick: W,
                                      onChangePlanClick: Y,
                                      onResubscribeClick: K,
                                  }),
                          ],
                      })
                    : null,
            er = () =>
                z
                    ? (0, r.jsx)(c.IGR, { text: L.intl.string(L.t["7uFZGh"]) })
                    : ee
                      ? (0, r.jsx)(c.IGR, {
                            text: L.intl.string(L.t["6antoq"]),
                            color: s.Z.BRAND_500,
                        })
                      : q
                        ? (0, r.jsx)(c.ua7, {
                              text: L.intl.string(L.t.eSuJEx),
                              children: (e) =>
                                  (0, r.jsx)(
                                      "div",
                                      G(k({}, e), {
                                          children: (0, r.jsx)(c.IGR, {
                                              className: j.paymentDueBadge,
                                              text: L.intl.string(L.t.NrRwIi),
                                              color: s.Z.YELLOW_300,
                                          }),
                                      }),
                                  ),
                          })
                        : null,
            ei = () =>
                H
                    ? (0, r.jsx)(c.ua7, {
                          text: L.intl.string(L.t.nv1IqK),
                          children: (e) =>
                              (0, r.jsx)(
                                  "div",
                                  G(k({}, e), {
                                      children: (0, r.jsx)(c.IGR, {
                                          text: L.intl.string(L.t.sBl3X1),
                                          color: p.Z.INTERACTIVE_MUTED,
                                      }),
                                  }),
                              ),
                      })
                    : null;
        return (0, r.jsxs)("div", {
            className: j.container,
            children: [
                (0, r.jsx)(C.Z, {
                    onClick: h,
                    className: j.headerContainer,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: i } = e;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                null != l &&
                                    (0, r.jsx)(E.Z, {
                                        guild: l,
                                        active: !0,
                                        size: E.Z.Sizes.MEDIUM,
                                    }),
                                (0, r.jsxs)("div", {
                                    className: j.headerTextContainer,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/medium",
                                            className: j.guildName,
                                            children: null != l ? l.name : L.intl.string(L.t["He+cmZ"]),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: j.headerSubtitleContainer,
                                            children: [
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    className: j.tierName,
                                                    children: n.name,
                                                }),
                                                er(),
                                                ei(),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.P3F, {
                                    onClick: i(h),
                                    "aria-label": L.intl.string(L.t.e5eQOz),
                                    "aria-controls": M,
                                    "aria-expanded": f,
                                    focusProps: { ringTarget: t },
                                    children: (0, r.jsx)(c.CJ0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: o()(j.arrowIcon, { [j.arrowIconExpanded]: f }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                en(),
            ],
        });
    };
