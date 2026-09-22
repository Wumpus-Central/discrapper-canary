n.d(t, { Ay: () => te, Sb: () => e9, TC: () => e4, Hy: () => e7 });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(536637),
    o = n.n(a),
    u = n(17928),
    d = n(661531),
    c = n(695366),
    g = n(834730),
    m = n(297264),
    A = n(993077),
    E = n(289873),
    h = n(270003),
    S = n(452027),
    T = n(228366),
    p = n(964486),
    x = n(793574),
    f = n(688810),
    I = n(531260),
    N = n(235986),
    _ = n(769015),
    C = n(75678),
    b = n(832946),
    y = n(287809),
    v = n(174459),
    j = n(975571),
    O = n(158045),
    L = n(83617),
    D = n(543767),
    R = n(526292),
    P = n(155984),
    G = n(131168),
    M = n(331322),
    U = n(508770),
    V = n(192308),
    k = n(315629),
    w = n(821609),
    F = n(158032),
    B = n(580630),
    z = n(427262),
    X = n(795269),
    Y = n(59784),
    H = n(233317),
    K = n(622017),
    W = n(113090),
    Z = n(778712),
    q = n(97808),
    Q = n(123292),
    J = n(950305),
    $ = n(854627),
    ee = n(148155),
    et = n(375708),
    en = n(443543);
function ei(e) {
    let { user: t, isOwnUser: n, label: s, removeButton: a, isFaded: o } = e,
        { avatarSrc: u, eventHandlers: d } = (0, $.A)({ userId: t?.id, size: Z._3.SIZE_24 }),
        c = (0, z.$3)(t),
        [m, A] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: r()(en.kL, { [en.RE]: null != a }),
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1),
        children: [
            (0, i.jsxs)("div", {
                className: r()(en.TT, { [en.zj]: o }),
                children: [
                    (0, i.jsx)(q.eu, { className: en.my, src: u, "aria-label": c, size: Z._3.SIZE_24, ...d }),
                    (0, i.jsxs)(g.E, {
                        className: en.Xh,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: [c, !!n && ` (${et.intl.string(et.t.LuZzxn)})`],
                    }),
                    null != s &&
                        (0, i.jsxs)(g.E, {
                            className: en.Pf,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: [(0, i.jsx)("span", { className: en.me, children: "\xb7" }), s],
                        }),
                ],
            }),
            null != a &&
                m &&
                (0, i.jsx)("div", {
                    className: en.dM,
                    children: (0, i.jsx)(Q.Q, {
                        textVariant: "text-sm/medium",
                        variant: "secondary",
                        text: a.label,
                        onClick: a.onRemove,
                    }),
                }),
        ],
    });
}
function el(e) {
    let { user: t, isOwnUser: n } = e;
    return (0, i.jsx)(ei, { user: t, isOwnUser: n, label: et.intl.string(ee.default.vc2xys) });
}
function es(e) {
    let { user: t, onRemove: n } = e;
    return (0, i.jsx)(ei, {
        user: t,
        label: et.intl.string(ee.default.mnt50A),
        removeButton: { onRemove: n, label: et.intl.string(et.t.N86XcP) },
    });
}
function er(e) {
    let { user: t, isOwnUser: n } = e;
    return (0, i.jsx)(ei, { user: t, isOwnUser: n, label: et.intl.string(ee.default.mnt50A) });
}
function ea(e) {
    let { user: t, onRemove: n } = e;
    return (0, i.jsx)(ei, {
        user: t,
        label: et.intl.string(ee.default["1RH5t9"]),
        isFaded: !0,
        removeButton: { onRemove: n, label: et.intl.string(ee.default["2blqtw"]) },
    });
}
function eo(e) {
    let { onInvite: t, canInvite: n } = e,
        [s, a] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: r()(en.kL, { [en.RE]: n }),
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, i.jsxs)("div", {
                className: en.TT,
                children: [
                    (0, i.jsx)("div", {
                        className: r()(en.vG, en.my),
                        children: (0, i.jsx)(J.UserIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                    }),
                    (0, i.jsx)(g.E, {
                        className: en.Xh,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: et.intl.string(ee.default["/x7DVG"]),
                    }),
                ],
            }),
            s &&
                n &&
                (0, i.jsx)("div", {
                    className: en.dM,
                    children: (0, i.jsx)(Q.Q, {
                        textVariant: "text-sm/medium",
                        variant: "secondary",
                        text: et.intl.string(ee.default.O15JWp),
                        onClick: t,
                    }),
                }),
        ],
    });
}
var eu = n(202541),
    ed = n(88001),
    ec = n(652215),
    eg = n(285613);
function em(e) {
    let { discountApplied: t = !1 } = e;
    return (0, i.jsxs)(M.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 10,
        padding: { top: 12, bottom: 12 },
        className: eg.wx,
        children: [
            (0, i.jsxs)(M.B, {
                direction: "horizontal",
                align: "center",
                gap: 10,
                children: [
                    (0, i.jsx)(m.D, { variant: "nitro-xs", className: eg.Nd, children: (0, ed.DP)() }),
                    (0, i.jsx)(U.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            t && (0, i.jsx)(X.R, { text: et.intl.string(et.t.EyjDRE) }),
        ],
    });
}
function eA(e) {
    let { title: t, discountDescription: n, description: l, button: s } = e;
    return (0, i.jsxs)("div", {
        className: eg.bh,
        children: [
            (0, i.jsxs)(M.B, {
                direction: "vertical",
                gap: 8,
                className: eg.iQ,
                children: [
                    (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: t }),
                    null != n
                        ? (0, i.jsx)(g.E, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              className: eg.eY,
                              children: n,
                          })
                        : null,
                    (0, i.jsx)(g.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                ],
            }),
            (0, i.jsx)("div", { className: eg.UD, children: s }),
        ],
    });
}
function eE(e) {
    let { currentUser: t } = e,
        { premiumGroupMembership: l, isLoading: s } = (0, W.A)(),
        { premiumGroupMembers: r, isLoading: a } = (0, K.A)(l?.subscriptionId ?? null);
    if (a || null == r || s || null == l) return (0, i.jsx)(E.y, {});
    let o = l.subscriptionId,
        u = l.currentPeriodEnd,
        { primary: d, members: c } = r,
        { title: g, description: A } = (function () {
            if (null == l) return { title: "", description: "" };
            switch (l.subscriptionStatus) {
                case ec.Dmq.CANCELED:
                    return {
                        title: et.intl.string(ee.default.mCwdPj),
                        description: et.intl.format(ee.default.wH9NYG, { endDate: u }),
                    };
                case ec.Dmq.PAUSED:
                    return {
                        title: et.intl.string(ee.default.IDyd1e),
                        description: et.intl.format(ee.default["8MfYhr"], {
                            premiumGroupProductName: (0, ed.DP)(),
                            helpCenterLink: ed.TE,
                        }),
                    };
                case ec.Dmq.PAST_DUE:
                case ec.Dmq.ACCOUNT_HOLD:
                case ec.Dmq.BILLING_RETRY:
                    return {
                        title: et.intl.string(ee.default.Duq8zp),
                        description: et.intl.format(ee.default["MHn/D6"], {
                            endDate: u,
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                    };
                default:
                    return {
                        title: et.intl.formatToPlainString(ee.default.xiUjMF, {
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                        description: et.intl.format(ee.default["2HEyqG"], {
                            primaryName: (0, z.$3)(d),
                            premiumGroupProductName: (0, ed.DP)(),
                            helpCenterLink: ed.TE,
                        }),
                    };
            }
        })();
    return (0, i.jsxs)(k.h, {
        className: eg.kL,
        color: "nitro-pink",
        children: [
            (0, i.jsx)(em, {}),
            (0, i.jsxs)("div", {
                className: eg.wS,
                children: [
                    (0, i.jsx)(eA, {
                        title: g,
                        description: A,
                        button: (0, i.jsx)(w.$, {
                            variant: "secondary",
                            text: et.intl.string(ee.default.NCu2JD),
                            onClick: function () {
                                (0, V.openModalLazy)(async () => {
                                    let { default: e } = await n.e("392796").then(n.bind(n, 205463));
                                    return (n) =>
                                        (0, i.jsx)(e, { ...n, premiumGroupSubscriptionId: o, currentUser: t });
                                });
                            },
                        }),
                    }),
                    (0, i.jsxs)(M.B, {
                        direction: "vertical",
                        padding: { left: 32, bottom: 12 },
                        gap: 0,
                        children: [
                            (0, i.jsx)(m.D, {
                                variant: "heading-sm/medium",
                                color: "text-strong",
                                className: eg.Or,
                                children: et.intl.string(ee.default["oqw/KW"]),
                            }),
                            (0, i.jsx)(el, { user: d, isOwnUser: !1 }),
                            c.map((e) => (0, i.jsx)(er, { user: e, isOwnUser: e.id === t?.id }, e.id)),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let {
        premiumGroupMembers: t,
        isLoadingPremiumGroupMembers: n,
        canInvite: l,
        onInvite: s,
        onRemoveMember: r,
        onRemoveInvitedUser: a,
        numTotalSeats: o,
        numUsedSeats: u,
        numAvailableInvites: d,
    } = e;
    if (n || null == t) return (0, i.jsx)(E.y, {});
    let { primary: c, members: A, invitedUsers: h } = t;
    return (0, i.jsxs)(M.B, {
        direction: "vertical",
        padding: { left: 32, bottom: 12 },
        gap: 0,
        children: [
            (0, i.jsxs)(M.B, {
                direction: "vertical",
                gap: 4,
                padding: { top: 12, left: 4, right: 4, bottom: 10 },
                children: [
                    (0, i.jsx)(m.D, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        children: et.intl.string(ee.default["oqw/KW"]),
                    }),
                    (0, i.jsx)(g.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: et.intl.format(ee.default["/a/UoP"], { usedSeats: u, totalSeats: o }),
                    }),
                ],
            }),
            (0, i.jsx)(el, { user: c, isOwnUser: !0 }),
            A.map((e) => (0, i.jsx)(es, { user: e, onRemove: () => r(e) }, e.id)),
            h.map((e) => (0, i.jsx)(ea, { user: e, onRemove: () => a(e) }, e.id)),
            Array.from({ length: d }).map((e, t) =>
                (0, i.jsx)(eo, { onInvite: s, canInvite: l }, `seat-available-${t}`),
            ),
        ],
    });
}
function eS(e) {
    let { subscription: t, analyticsLocations: s } = e,
        { premiumGroupMembers: r, isLoading: a } = (0, K.A)(t.id),
        {
            numAvailableInvites: o,
            numTotalSeats: d,
            numUsedSeats: c,
        } = (0, u.cf)([H.A], () => ({
            numAvailableInvites: H.A.getNumAvailableInvites(),
            numTotalSeats: H.A.getNumTotalSeats(),
            numUsedSeats: H.A.getNumUsedSeats(),
        })),
        [g, m] = l.useState(!1),
        { status: A } = t,
        E = (0, R.nf)(),
        h = (0, R.k5)() && E?.discountId === eu.xH,
        S = l.useCallback(() => {
            (0, V.openModalLazy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                    n.e("489361"),
                    n.e("216806"),
                    n.e("310734"),
                    n.e("384820"),
                    n.e("594161"),
                    n.e("435432"),
                    n.e("80347"),
                    n.e("680166"),
                ]).then(n.bind(n, 293061));
                return (n) => (0, i.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: s });
            });
        }, [t, s]),
        T = l.useCallback(async () => {
            (m(!0), await (0, F.Ir)(t, s), m(!1));
        }, [t, s]);
    function p() {
        (v.default.track(ec.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
            (0, V.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("76283"),
                    n.e("634508"),
                    n.e("174630"),
                    n.e("448948"),
                    n.e("485579"),
                ]).then(n.bind(n, 785606));
                return (n) => (0, i.jsx)(e, { ...n, subscription: t });
            }));
    }
    let x = l.useMemo(() => !ed.BE.includes(t.status) && o > 0, [t.status, o]),
        {
            title: f,
            description: I,
            discountDescription: N,
        } = (function () {
            switch (A) {
                case ec.Dmq.CANCELED:
                    return {
                        title: et.intl.string(ee.default.KME8Q6),
                        description: et.intl.format(ee.default["1sNA+Y"], {
                            endDate: t.currentPeriodEnd,
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                    };
                case ec.Dmq.PAUSED:
                    return {
                        title: et.intl.string(ee.default["4flKoC"]),
                        description: et.intl.format(ee.default["Q++BmO"], { premiumGroupProductName: (0, ed.DP)() }),
                    };
                case ec.Dmq.PAST_DUE:
                case ec.Dmq.ACCOUNT_HOLD:
                case ec.Dmq.BILLING_RETRY:
                    return {
                        title: et.intl.string(ee.default.cfeFEt),
                        description: et.intl.format(ee.default["5+LPUW"], {
                            endDate: t.currentPeriodEnd,
                            helpCenterLink: ed.TE,
                        }),
                    };
                default: {
                    let e = null;
                    if (h && t.metadata?.active_discount_expires_at != null) {
                        let n = (0, O.y8)(eu.gD.PREMIUM_GROUP_MONTH, !1, !1, {
                            currency: t.currency,
                            paymentSourceId: t.paymentSourceId ?? void 0,
                        });
                        e = et.intl.format(ee.default.FwjZzr, {
                            percent: E?.percentage ?? 0,
                            discountEndDate: new Date(t.metadata.active_discount_expires_at),
                            regularPrice: (0, B.$g)(n.amount, n.currency),
                        });
                    }
                    return {
                        title: et.intl.formatToPlainString(ee.default.NRCfnQ, {
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                        description: et.intl.format(ee.default.lvnrnb, {
                            totalSeats: ed.LM,
                            premiumGroupProductName: (0, ed.DP)(),
                            helpCenterLink: ed.TE,
                        }),
                        ...(null != e ? { discountDescription: e } : null),
                    };
                }
            }
        })();
    return (0, i.jsxs)(k.h, {
        className: eg.kL,
        color: "nitro-pink",
        children: [
            (0, i.jsx)(em, { discountApplied: h }),
            (0, i.jsxs)("div", {
                className: eg.wS,
                children: [
                    (0, i.jsx)(eA, {
                        title: f,
                        description: I,
                        discountDescription: N,
                        button: (0, O.ki)(t)
                            ? (0, i.jsx)(w.$, {
                                  variant: "expressive",
                                  size: "md",
                                  text: et.intl.string(ee.default.EFTJMQ),
                                  onClick: T,
                                  loading: g,
                              })
                            : (0, i.jsxs)(M.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      (0, i.jsx)(w.$, {
                                          variant: "primary",
                                          size: "md",
                                          fullWidth: !0,
                                          text: et.intl.string(ee.default.Tcmclj),
                                          onClick: p,
                                          disabled: !x,
                                      }),
                                      (0, i.jsx)(w.$, {
                                          variant: "secondary",
                                          size: "md",
                                          fullWidth: !0,
                                          text: et.intl.string(ee.default.oO0EYw),
                                          onClick: S,
                                      }),
                                  ],
                              }),
                    }),
                    (0, i.jsx)(eh, {
                        premiumGroupMembers: r,
                        isLoadingPremiumGroupMembers: a,
                        canInvite: x,
                        onInvite: p,
                        onRemoveMember: function (e) {
                            (v.default.track(ec.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                subscription_id: t.id,
                                member_user_id: e.id,
                            }),
                                (0, V.openModalLazy)(async () => {
                                    let { default: l } = await n.e("521305").then(n.bind(n, 391040));
                                    return (n) => (0, i.jsx)(l, { ...n, subscriptionId: t.id, member: e });
                                }));
                        },
                        onRemoveInvitedUser: function (e) {
                            v.default.track(ec.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                subscription_id: t.id,
                                invited_user_id: e.id,
                            });
                            let l = Y.A.getInviteByUserId(e.id)?.invite;
                            (0, V.openModalLazy)(async () => {
                                let { default: s } = await n.e("815554").then(n.bind(n, 115225));
                                return (n) =>
                                    (0, i.jsx)(s, {
                                        ...n,
                                        subscriptionId: t.id,
                                        invitedUser: e,
                                        subscriptionGroupMemberId: l?.id,
                                    });
                            });
                        },
                        numTotalSeats: d,
                        numUsedSeats: c,
                        numAvailableInvites: o,
                    }),
                ],
            }),
        ],
    });
}
var eT = n(866665),
    ep = n(392943),
    ex = n(267023);
let ef = { page: ec.liQ.USER_SETTINGS, section: ec.JJy.SETTINGS_PREMIUM, object: ec.ZSU.CARD };
function eI(e) {
    let { premiumSubscription: t, discountInfo: n } = e;
    if (null == n.duration || null == n.percentage) return null;
    let l = (0, O.y8)(eu.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        s = (0, B.$g)(l.amount, l.currency),
        r = Math.round(l.amount * (1 - n.percentage / 100)),
        a = (0, B.$g)(r, l.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: et.intl.string(et.t["53BCd6"]),
            }),
            (0, i.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: et.intl.format(et.t.N43FMx, {
                    numMonths: n.duration,
                    discountedPrice: a,
                    billingPeriod: et.intl.string(et.t.FPybU7),
                    fullPrice: s,
                }),
            }),
        ],
    });
}
let eN = function (e) {
    var t;
    let { subscription: l, invoicePreview: s, isLoading: r, discountInfo: a, analyticsLocation: o } = e,
        { analyticsLocations: u } = (0, f.Ay)(x.A.REFERRAL_INCENTIVE_DISCOUNT_SUBSCRIPTION_HEADER),
        d = O.Ay.getPlanIdFromInvoice(l, s);
    if ((0, b.m1)(d)) return null;
    let c = O.Ay.isSwitchingPlansDisabled(l),
        m = O.Ay.getSwitchingPlansDisabledMessage(l),
        A =
            null == (t = l.metadata?.active_discount_expires_at)
                ? null
                : et.intl.formatToPlainString(et.t.u8bQ1q, { expiryDate: new Date(t) });
    return (0, i.jsx)("div", {
        className: ex.b8,
        children: (0, i.jsx)(k.h, {
            color: "nitro-pink",
            className: ex.YL,
            children: (0, i.jsxs)("div", {
                className: ex.vK,
                children: [
                    (0, i.jsxs)("div", {
                        className: ex.Gp,
                        children: [
                            (0, i.jsx)(ep.A, {
                                color: "currentcolor",
                                className: ex.Ss,
                                "aria-label": et.intl.string(et.t.lpNrPu),
                            }),
                            (0, i.jsx)(g.E, {
                                className: ex.Sd,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: A,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ex.yF }),
                    (0, i.jsxs)("div", {
                        className: ex.IH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ex.Tm,
                                children: [
                                    (0, i.jsx)(eI, { premiumSubscription: l, discountInfo: a }),
                                    (0, i.jsx)("div", {
                                        className: ex.Xc,
                                        children: (0, i.jsxs)("div", {
                                            className: ex.qK,
                                            children: [
                                                (0, i.jsx)(eT.m, {
                                                    text: m,
                                                    shouldShow: c && null != m,
                                                    asContainer: !0,
                                                    children: (0, i.jsx)(w.$, {
                                                        variant: "expressive",
                                                        disabled: c,
                                                        text: et.intl.string(et.t["dylp/7"]),
                                                        size: "md",
                                                        onClick: () => {
                                                            (0, C.A)({
                                                                analyticsLocations: u,
                                                                analyticsLocation: o,
                                                                analyticsObject: ef,
                                                                subscription: l,
                                                            });
                                                        },
                                                    }),
                                                }),
                                                (0, i.jsx)(w.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    text: et.intl.string(et.t["ETE/oC"]),
                                                    loading: r,
                                                    onClick: function () {
                                                        l.status !== ec.Dmq.CANCELED &&
                                                            (0, V.openModalLazy)(async () => {
                                                                let {
                                                                    PremiumBrandRefreshSubscriptionCancellationModal: e,
                                                                } = await Promise.all([
                                                                    n.e("489361"),
                                                                    n.e("216806"),
                                                                    n.e("310734"),
                                                                    n.e("384820"),
                                                                    n.e("594161"),
                                                                    n.e("435432"),
                                                                    n.e("80347"),
                                                                    n.e("680166"),
                                                                ]).then(n.bind(n, 293061));
                                                                return (t) =>
                                                                    (0, i.jsx)(e, {
                                                                        ...t,
                                                                        premiumSubscription: l,
                                                                        analyticsLocation: o,
                                                                        analyticsLocations: u,
                                                                        initialStep: void 0,
                                                                    });
                                                            });
                                                    },
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)("img", {
                                className: ex._e,
                                src: "https://cdn.discordapp.com/assets/content/a049ba02a320347da76cabc59784a03df55c86b8d1baf507fda1c4400c4d9282.svg",
                                alt: "",
                                draggable: !1,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var e_ = n(97352),
    eC = n(403581),
    eb = n(511484),
    ey = n(811611),
    ev = n(473702),
    ej = n(858432),
    eO = n(398932);
let eL = { page: ec.liQ.USER_SETTINGS, section: ec.JJy.SETTINGS_PREMIUM, object: ec.ZSU.CARD };
function eD(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: l, isDiscountActive: s } = e,
        r = O.Ay.getPlanIdFromInvoice(t, l),
        a = e_.A.get(r);
    if (null == a || null == l || null == n || null == n.duration || null == n.percentage) return null;
    let o = l.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === a.id;
    });
    if (null == o) return null;
    let u = (0, B.$g)(o.amount, l.currency),
        d = (0, O.y8)(eu.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        c = (0, B.$g)(d.amount, d.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: et.intl.format(et.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: s
                    ? et.intl.format(et.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: c })
                    : et.intl.format(et.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: u,
                          billingPeriod: et.intl.string(et.t.FPybU7),
                          fullPrice: c,
                      }),
            }),
        ],
    });
}
function eR(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        l = (0, eb.tQ)(n, eu.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: et.intl.format(et.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: et.intl.format(et.t["PH7Q+R"], {
                    numMonths: t.discount.intervalCount,
                    discountedPrice: l,
                    billingPeriod: (0, O.Ke)(t.discount.intervalType),
                }),
            }),
        ],
    });
}
let eP = function (e) {
    let {
            subscription: t,
            invoicePreview: l,
            isLoading: s,
            analyticsLocation: r,
            discountInfo: a,
            renewalChurnDiscountInfo: o,
            discountOffer: u,
        } = e,
        { analyticsLocations: d } = (0, f.Ay)(x.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER);
    function c() {
        t.status !== ec.Dmq.CANCELED && m();
    }
    function m(e) {
        (0, V.openModalLazy)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: l } = await Promise.all([
                n.e("489361"),
                n.e("216806"),
                n.e("310734"),
                n.e("384820"),
                n.e("594161"),
                n.e("435432"),
                n.e("80347"),
                n.e("680166"),
            ]).then(n.bind(n, 293061));
            return (n) =>
                (0, i.jsx)(l, {
                    ...n,
                    premiumSubscription: t,
                    analyticsLocation: r,
                    analyticsLocations: d,
                    initialStep: e,
                });
        });
    }
    let A = O.Ay.getPlanIdFromInvoice(t, l),
        E = (0, ey.ux)(u?.expiresAt?.toISOString());
    return (0, b.m1)(A)
        ? null
        : (0, i.jsx)("div", {
              className: ej.S6,
              children: (0, i.jsx)(k.h, {
                  color: "nitro-pink",
                  className: ej.YL,
                  children: (0, i.jsxs)("div", {
                      className: ej.mK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: ej.Gp,
                              children: [
                                  (0, i.jsx)(ep.A, {
                                      color: "currentcolor",
                                      className: ej.fJ,
                                      "aria-label": et.intl.string(et.t.lpNrPu),
                                  }),
                                  (0, i.jsx)(g.E, {
                                      className: ej.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != u && E,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: ej.T }),
                          (0, i.jsxs)("div", {
                              className: ej.ly,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: ej.Yc,
                                      children: [
                                          null != u
                                              ? (0, i.jsx)(eR, { discountOffer: u, premiumSubscription: t })
                                              : (0, i.jsx)(eD, {
                                                    premiumSubscription: t,
                                                    discountInfo: a ?? o,
                                                    invoicePreview: l,
                                                    isDiscountActive: null != a,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: ej.e_,
                                              children: (function () {
                                                  let e = O.Ay.isSwitchingPlansDisabled(t),
                                                      n = O.Ay.getSwitchingPlansDisabledMessage(t);
                                                  if (!O.Ay.isBaseSubscriptionCanceled(t))
                                                      return (0, i.jsxs)("div", {
                                                          className: ej.qK,
                                                          children: [
                                                              (0, i.jsx)(eT.m, {
                                                                  text: n,
                                                                  shouldShow: e && null != n,
                                                                  asContainer: !0,
                                                                  children: (0, i.jsx)(w.$, {
                                                                      variant: "overlay-primary",
                                                                      disabled: e,
                                                                      text: et.intl.string(et.t["dylp/7"]),
                                                                      size: "md",
                                                                      onClick: () => {
                                                                          (0, C.A)({
                                                                              analyticsLocations: d,
                                                                              analyticsLocation: r,
                                                                              analyticsObject: eL,
                                                                              subscription: t,
                                                                          });
                                                                      },
                                                                  }),
                                                              }),
                                                              (0, i.jsx)(w.$, {
                                                                  variant: "secondary",
                                                                  size: "md",
                                                                  text: et.intl.string(et.t["ETE/oC"]),
                                                                  loading: s,
                                                                  onClick: c,
                                                              }),
                                                          ],
                                                      });
                                                  {
                                                      let e =
                                                          null != u
                                                              ? et.intl.format(et.t.XIVblY, {
                                                                    percent: u.discount.amount,
                                                                })
                                                              : et.intl.string(et.t.zrCzVB);
                                                      return (0, i.jsx)(w.$, {
                                                          variant: "expressive",
                                                          icon: eC.t,
                                                          size: "md",
                                                          text: e,
                                                          loading: s,
                                                          onClick: () => m(ev.g.CONFIRM_DISCOUNT),
                                                      });
                                                  }
                                              })(),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", { className: ej.Hp, src: eO.A, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
var eG = n(284009),
    eM = n.n(eG),
    eU = n(607399),
    eV = n(189213),
    ek = n(683071),
    ew = n(701273),
    eF = n(277984),
    eB = n(780964),
    ez = n(766075),
    eX = n(327479),
    eY = n(601107),
    eH = n(583690);
let eK = [ec.Dmq.PAST_DUE, ec.Dmq.ACCOUNT_HOLD, ec.Dmq.BILLING_RETRY],
    eW = (e) => {
        let { transitionState: t, onClose: n, subscription: s, analyticsLocations: r, analyticsLocation: a } = e,
            [o, u] = l.useState(!1),
            [d, c] = l.useState(!1);
        async function g() {
            (u(!0), c(!1));
            try {
                (await (0, eF.M2)(s.id, r, a),
                    v.default.track(ec.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                        subscription_id: s.id,
                        location_stack: r,
                    }),
                    (0, eF.hP)(),
                    n());
            } catch (e) {
                (c(!0), u(!1));
            }
        }
        l.useEffect(() => {
            v.default.track(ec.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: s.id,
                location_stack: r,
            });
        }, []);
        let m = [
            { text: et.intl.string(et.t.oEAioF), onClick: () => n(), variant: "secondary" },
            {
                text: et.intl.string(et.t["cY+Oob"]),
                onClick: () => g(),
                disabled: o,
                variant: "critical-primary",
                loading: o,
            },
        ];
        return (0, i.jsx)(eV.Modal, {
            size: "md",
            transitionState: t,
            title: et.intl.string(et.t.LZunzZ),
            subtitle: et.intl.string(et.t.FClXh9),
            actions: m,
            onClose: async () => n(),
            children: d ? (0, i.jsx)(ek.w, { type: "critical", children: et.intl.string(et.t["5mlOCW"]) }) : null,
        });
    };
function eZ(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: l,
            fractionalPremiumInfo: s,
            fromStandaloneBillingPage: a = !0,
            analyticsLocation: o,
        } = e,
        d = (0, u.bG)([y.default], () => {
            let e = y.default.getCurrentUser();
            return (eM()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e);
        }),
        { analyticsLocations: c } = (0, f.Ay)(x.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER);
    if (0 === (0, O.bx)(n.additionalPlans)) return null;
    let { status: m } = n,
        A = (0, O.$k)(n),
        E = !A && n.isBoostOnly && eK.includes(n.status);
    if (A) t = eH.v2;
    else
        switch (m) {
            case ec.Dmq.PAST_DUE:
            case ec.Dmq.ACCOUNT_HOLD:
            case ec.Dmq.BILLING_RETRY:
                t = eH.P7;
                break;
            case ec.Dmq.PAUSE_PENDING:
            case ec.Dmq.PAUSED:
                t = n.pauseReason !== eY.qf.FRACTIONAL_PREMIUM ? eH.C7 : eH.wG;
                break;
            default:
                t = eH.wG;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r()(t, eH.Qn),
                children: [
                    (0, i.jsx)("div", { className: eH.Kq }),
                    (0, i.jsx)("div", { className: eH.OL }),
                    (0, i.jsxs)("div", {
                        className: eH.eC,
                        children: [
                            (0, i.jsx)("div", { className: r()(eH.Ab, { [eH.aD]: A }) }),
                            (0, i.jsx)("div", {
                                children: (0, O.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: l,
                                    user: d,
                                    fractionalPremiumInfo: s,
                                }),
                            }),
                        ],
                    }),
                    a &&
                        (0, i.jsxs)("div", {
                            className: eH.BQ,
                            children: [
                                E &&
                                    (0, i.jsx)("div", {
                                        className: eH.x7,
                                        children: (0, i.jsx)(Q.Q, {
                                            variant: "always-white",
                                            onClick: function () {
                                                eK.includes(n.status) &&
                                                    (0, V.openModalLazy)(
                                                        async () => (e) =>
                                                            (0, i.jsx)(eW, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: c,
                                                                analyticsLocation: o,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: et.intl.string(et.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(eX.A, {
                                    onClick: () => (0, ez.openUserSettings)(eB.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: et.intl.string(et.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !a &&
                (0, i.jsx)(g.E, {
                    className: eH.yW,
                    variant: "text-sm/normal",
                    children: et.intl.format(eU.Fr ? et.t.uxYBEa : et.t.k6haR9, {
                        openAppHook: () => (0, ew.A)("app"),
                    }),
                }),
        ],
    });
}
var eq = n(983048),
    eQ = n(951555),
    eJ = n(28863),
    e$ = n(109681);
function e0(e) {
    let { subscription: t, renewalMutations: l, className: s, analyticsLocation: a } = e,
        o = (0, I.A)(),
        u = t.currentPeriodEnd;
    return (
        o.fractionalState === eu.xc.FP_SUB_PAUSED && (u = o.endsAt.toDate()),
        (0, i.jsxs)("div", {
            className: r()(e$.zr, s),
            children: [
                (0, i.jsx)(c.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: e$.G }),
                (0, i.jsx)("div", {
                    className: e$.Qq,
                    children: et.intl.format(et.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, O.OU)(l) : O.Ay.getDisplayName(l.planId),
                        date: u,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsx)(eJ.Anchor, {
                          onClick: (e) => {
                              (e.preventDefault(),
                                  (0, V.openModalLazy)(async () => {
                                      let { default: e } = await n.e("865975").then(n.bind(n, 702698));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              subscription: t,
                                              renewalMutations: l,
                                              analyticsLocation: a,
                                          });
                                  }));
                          },
                          className: e$.Lu,
                          children: et.intl.string(et.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
var e1 = n(72536);
function e2() {
    return (
        l.useEffect(() => {
            v.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e1.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e1.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, { className: e1.Cy, variant: "text-sm/normal", children: et.intl.string(et.t.xFHEMa) }),
            ],
        })
    );
}
function e3() {
    return (
        l.useEffect(() => {
            v.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e1.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e1.Sh,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(g.E, {
                    className: e1.Cy,
                    variant: "text-sm/normal",
                    children: et.intl.string(et.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function e6(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: r } = (0, f.Ay)(x.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        l.useEffect(() => {
            v.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e1.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e1.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, {
                    className: e1.Cy,
                    variant: "text-sm/normal",
                    children: et.intl.format(et.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, C.A)({ initialPlanId: n.planIdFromItems, openInvoiceId: s, analyticsLocations: r });
                        },
                    }),
                }),
            ],
        })
    );
}
function e5(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: l, className: s, fractionalPremiumInfo: a } = e;
    return (0, i.jsxs)("div", {
        className: r()(e1.KF, s),
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-md/semibold",
                className: e1.QL,
                children: et.intl.string(et.t.KXQjfc),
            }),
            (0, i.jsx)("div", { children: O.Ay.getBillingInformationString(t, n, l, !1, a) }),
        ],
    });
}
function e4() {
    let e = (0, u.bG)([y.default], () => y.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-lg/semibold",
                className: e1.Gf,
                children: et.intl.string(et.t["/gs+Pz"]),
            }),
            (0, i.jsx)("p", { className: e1.yV, children: et.intl.string(et.t.D8UpUo) }),
            !t &&
                (0, i.jsx)(A.Z, {
                    className: e1.wb,
                    type: A.Z.Types.CUSTOM,
                    children: (0, i.jsxs)(N.A, {
                        align: N.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(_.A, { game: null, size: _.M.SMALL, className: e1.pV }),
                            (0, i.jsx)("span", { className: e1.O, children: et.intl.string(et.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, i.jsx)(eE, { currentUser: e }),
        ],
    });
}
function e8(e) {
    let t,
        {
            subscription: n,
            analyticsLocation: l,
            paymentSource: s,
            busy: a,
            fromStandaloneBillingPage: o,
            showInvalidPaymentMethod: u,
            showNoPaymentMethod: d,
            fetchedCurrentInvoicePreview: c,
            fetchedRenewalInvoicePreview: g,
            fetchedOpenInvoice: m,
            isPremiumGroup: A,
        } = e,
        { analyticsLocations: T } = (0, f.Ay)(x.A.SUBSCRIPTION_DETAILS),
        p = null != c ? {} : { subscriptionId: n.id, renewal: !0, analyticsLocations: T, analyticsLocation: l },
        [N] = (0, D.YV)(p);
    N = c ?? N;
    let _ =
            null != g
                ? {}
                : {
                      subscriptionId: n.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: T,
                      analyticsLocation: l,
                  },
        [C] = (0, D.YV)(_);
    C = g ?? C;
    let b = (0, I.A)(),
        y = (0, G.p)(),
        v = (0, R.nf)(),
        j = O.Ay.isBaseSubscriptionCanceled(n),
        P = (function (e, t) {
            let n = e_.A.get(e.premiumPlanIdFromItems ?? "");
            if (null != n) {
                let i = (0, L._w)(n, t?.id, !1),
                    l = i.length > 0 ? i[0] : e.currency;
                if (1 === i.length && t?.id === e.paymentSourceId && (0, L.jJ)(n.id, l, t?.id)) return !0;
            }
            return !1;
        })(n, s);
    if (null == N || null == C) return (0, i.jsx)(E.y, {});
    let M = P ? (0, R.Bv)(C) : null,
        U = null != M || (null != v && (v.discountId === eu.q || v.discountId === eu.EG)),
        V = !j && null != v && v.discountId === eu.sC,
        k = P && ((j && null != y) || (!j && U));
    return (
        (t =
            V && null != v
                ? (0, i.jsx)(eN, {
                      subscription: n,
                      invoicePreview: C,
                      paymentSource: s,
                      discountInfo: v,
                      isLoading: a,
                      analyticsLocation: l,
                  })
                : k
                  ? (0, i.jsx)(eP, {
                        subscription: n,
                        invoicePreview: C,
                        paymentSource: s,
                        discountOffer: y,
                        renewalChurnDiscountInfo: M,
                        discountInfo: v,
                        isLoading: a,
                        analyticsLocation: l,
                    })
                  : (0, i.jsx)(eq.A, {
                        subscription: n,
                        currentInvoicePreview: N,
                        renewalInvoicePreview: C,
                        paymentSource: s,
                        busy: a,
                        analyticsLocation: l,
                    })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e1.fj,
                    children: [
                        !A && t,
                        (0, i.jsx)(eZ, {
                            subscription: n,
                            renewalInvoicePreview: N,
                            fromStandaloneBillingPage: o,
                            fractionalPremiumInfo: b,
                            analyticsLocation: l,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.n, {
                        label: et.intl.string(et.t.Sb6wI1),
                        children: (0, i.jsxs)("div", {
                            className: e1.zH,
                            children: [
                                (0, i.jsx)(e5, {
                                    subscription: n,
                                    renewalInvoicePreview: C,
                                    className: e1.g4,
                                    fractionalPremiumInfo: b,
                                    openInvoice: m,
                                }),
                                (0, i.jsx)("div", {
                                    className: r()(e1.g4, { [e1.sE]: u }),
                                    children: (0, i.jsx)(S.D, {
                                        label:
                                            n.isPurchasedExternally && null != n.paymentGateway
                                                ? et.intl.formatToPlainString(et.t["rTk9v/"], {
                                                      paymentGatewayName: ec.qmC[n.paymentGateway],
                                                  })
                                                : et.intl.string(et.t.iRzXKd),
                                        children: (0, i.jsx)(eQ.A, {
                                            subscription: n,
                                            onPaymentSourceAdded: L.c_,
                                            highlightAddPaymentMethodButton: d || u,
                                            analyticsLocation: l,
                                            currentInvoicePreview: N,
                                            openInvoice: m,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        })
    );
}
let e7 = new Set([ec.Dmq.ACTIVE, ec.Dmq.PAST_DUE, ec.Dmq.CANCELED, ec.Dmq.PAUSE_PENDING, ec.Dmq.PAUSED]);
function e9() {
    return (
        l.useEffect(() => {
            v.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, i.jsxs)("div", {
            className: e1.oU,
            children: [
                (0, i.jsx)(c.E, { size: "custom", width: 20, height: 20, color: d.A.unsafe_rawColors.RED_360.css }),
                (0, i.jsx)(g.E, {
                    className: e1.dk,
                    variant: "text-sm/normal",
                    children: et.intl.format(et.t["6eXiiC"], { helpCenterLink: j.A.getArticleURL(ec.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function te(e) {
    let t,
        {
            subscription: n,
            subscriptions: s,
            paymentSource: r,
            busy: a,
            fromStandaloneBillingPage: d = !0,
            analyticsLocation: c,
            shouldRefetchInvoicesOnSubscriptionUpdate: g,
        } = e;
    null != s && null != s[0] && (n = s[0]);
    let A = (0, u.bG)([y.default], () => y.default.getCurrentUser()),
        { analyticsLocations: S } = (0, f.Ay)(x.A.SUBSCRIPTION_DETAILS),
        I = (0, G.p)(),
        N = null != s ? s.slice(1) : [],
        [_, C] = l.useState(0);
    (l.useEffect(() => {
        if (g)
            return (
                T.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
                () => {
                    T.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
                }
            );
        function e(e) {
            e.subscription.id === n.id && C((e) => e + 1);
        }
    }, [n.id, g]),
        (0, p.Ay)(() => {
            function e() {
                return C((e) => e + 1);
            }
            return (
                T.h.subscribe("BILLING_USER_OFFER_REDEEMED", e),
                () => {
                    T.h.unsubscribe("BILLING_USER_OFFER_REDEEMED", e);
                }
            );
        }));
    let [v] = (0, D.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: S,
            analyticsLocation: c,
            fetchKey: _,
        }),
        [j] = (0, D.YV)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: S,
            analyticsLocation: c,
            userDiscountOfferId: I?.id,
            fetchKey: _,
        }),
        O = r?.invalid,
        L = (0, u.bG)([y.default], () => y.default.getCurrentUser()?.hasFreePremium()),
        R = o()(n.currentPeriodEnd),
        M = null != n.paymentSourceId,
        U = j?.total ?? 0,
        V =
            !M &&
            U > 0 &&
            (7 >= R.diff(o()(), "days") || n.status === ec.Dmq.PAST_DUE) &&
            !L &&
            !n.isPurchasedExternally,
        k = O && n.status === ec.Dmq.PAST_DUE && !L && !n.isPurchasedExternally,
        w = (0, P.l)(),
        F = !L && w,
        B = n?.status === ec.Dmq.PAST_DUE,
        z = B ? o()().diff(o()(n.currentPeriodStart), "days") : 0,
        X = null != A && A.isPremiumGroupPrimary(),
        Y = n.hasAnyPremiumGroup,
        [H] = (0, D.C8)({ subscriptionId: n.id, preventFetch: !(F || B) });
    return null == v || null == j
        ? (0, i.jsx)(E.y, {})
        : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId && !(0, b.m1)(n.renewalMutations.planId)) ||
                  n.hasExternalPlanChange) &&
              (t = (0, i.jsx)(e0, {
                  subscription: n,
                  renewalMutations: n.renewalMutations,
                  className: e1.Il,
                  analyticsLocation: c,
              })),
          (0, i.jsxs)(h.n, {
              label: et.intl.string(et.t["/gs+Pz"]),
              description: et.intl.string(et.t.D8UpUo),
              children: [
                  V ? (0, i.jsx)(e2, {}) : null,
                  k ? (0, i.jsx)(e3, {}) : null,
                  F && null != H ? (0, i.jsx)(e6, { daysPastDue: z, subscription: n, openInvoiceId: H.id }) : null,
                  X && Y && (0, i.jsx)(eS, { subscription: n, analyticsLocations: S }),
                  t,
                  (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)("div", {
                              className: N.length > 0 ? e1.HZ : e1.__invalid_singleSubscription,
                              children: (0, i.jsx)(e8, {
                                  subscription: n,
                                  analyticsLocation: c,
                                  paymentSource: r,
                                  busy: a,
                                  fromStandaloneBillingPage: d,
                                  showNoPaymentMethod: V,
                                  showInvalidPaymentMethod: k,
                                  fetchedCurrentInvoicePreview: v,
                                  fetchedRenewalInvoicePreview: j,
                                  fetchedOpenInvoice: H,
                                  isPremiumGroup: X,
                              }),
                          }),
                          N.map((e, t) =>
                              (0, i.jsxs)(
                                  "div",
                                  {
                                      className: e1.HZ,
                                      children: [
                                          (0, i.jsx)(m.D, {
                                              variant: "heading-md/semibold",
                                              className: e1.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, i.jsx)(e8, {
                                              subscription: e,
                                              analyticsLocation: c,
                                              paymentSource: r,
                                              busy: a,
                                              fromStandaloneBillingPage: d,
                                              showNoPaymentMethod: V,
                                              showInvalidPaymentMethod: k,
                                              fetchedCurrentInvoicePreview: null,
                                              fetchedRenewalInvoicePreview: null,
                                              fetchedOpenInvoice: null,
                                              isPremiumGroup: !1,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ],
                  }),
              ],
          }));
}
