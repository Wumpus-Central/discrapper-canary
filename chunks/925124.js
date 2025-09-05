n.d(t, { Z: () => k }), n(388685), n(642613);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(544891),
    o = n(704215),
    c = n(481060),
    d = n(937579),
    u = n(453591),
    m = n(675478),
    x = n(431),
    h = n(572004),
    p = n(74538),
    f = n(604776),
    v = n(246992),
    b = n(232867),
    g = n(981631),
    j = n(474936),
    _ = n(596533),
    y = n(866403);
let C = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: g.ANM.USER_OFFER_IDS,
                rejectWithError: !0,
            });
            return e;
        } catch (e) {
            return [];
        }
    },
    N = async (e, t) => {
        try {
            await s.tn.post({
                url: g.ANM.CREATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, d.Tf)();
        }
    },
    E = async (e, t) => {
        try {
            await s.tn.del({
                url: g.ANM.UPDATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, d.Tf)();
        }
    },
    T = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: g.ANM.USER_OFFERS,
                rejectWithError: !0,
            });
            return e;
        } catch (e) {
            return {
                trial: [],
                discount: [],
            };
        }
    },
    O = async () => {
        try {
            await s.tn.del({
                url: g.ANM.USER_OFFERS,
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await x.Z.forceReset(), await (0, d.Tf)();
        }
    },
    S = async (e) => {
        await s.tn.post({
            url: g.ANM.CREATE_REVERSE_TRIAL,
            body: { ends_at: e },
            rejectWithError: !0,
        });
    };
function P(e) {
    var t, n, l, o, u;
    let { offer: m, offerOptions: x, forceRefetch: f } = e,
        [v, b] = r.useState(!1),
        [y, C] = r.useState(!1),
        [N, T] = r.useState(!1),
        [O, S] = r.useState(!1);
    r.useEffect(() => {
        N && S(!0);
        let e = setTimeout(() => {
            S(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [N]);
    let { id: P, expires_at: I, redeemed_at: k, trial_id: R, subscription_trial: w, referrer: Z } = m,
        A =
            null !=
            (n =
                null ==
                (t = x.find((e) => {
                    let { value: t } = e;
                    return t === R;
                }))
                    ? void 0
                    : t.label)
                ? n
                : "Unknown";
    null != Z && (A = "".concat(A, " from @").concat(Z.username));
    let D = null != I,
        L = null != I && new Date(I).getTime() < Date.now(),
        M = (null == w ? void 0 : w.sku_id) === j.Si.TIER_0,
        F = async () => {
            T(!0), D ? await U({ expiresAt: null }) : await (0, d.ab)(m), f(), T(!1);
        },
        U = async (e) => {
            T(!0);
            try {
                await s.tn.patch({
                    url: g.ANM.UPDATE_USER_OFFER(P, "trial"),
                    body: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })(
                        {},
                        "expiresAt" in e && { expires_at: e.expiresAt },
                        "referrerId" in e && { referrer_id: e.referrerId },
                    ),
                    rejectWithError: !0,
                });
            } finally {
                f(), T(!1);
            }
        };
    r.useEffect(() => {
        if (v) {
            let e = setTimeout(() => {
                b(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (y) {
            let e = setTimeout(() => {
                C(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [v, y]);
    let z = "Active";
    return (
        D && (z = "Acked"),
        L && (z = "Expired"),
        (0, a.jsxs)("div", {
            className: i()(_.card, M ? _.gradientWrapperTier0 : _.gradientWrapperTier2),
            children: [
                (0, a.jsx)("div", {
                    className: i()(_.row, _.nameRow),
                    children: (0, a.jsx)(c.X6q, {
                        variant: "heading-lg/semibold",
                        color: "always-white",
                        children: A,
                    }),
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(_.row, _.idRow),
                    onClick: () => {
                        (0, h.JG)(P, () => b(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Offer: ", P],
                        }),
                        v
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: _.icon,
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: _.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(_.row, _.idRow),
                    onClick: () => {
                        (0, h.JG)(R, () => C(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial: ", R],
                        }),
                        y
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: _.icon,
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: _.icon,
                              }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: _.row,
                    children: (0, a.jsxs)(c.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, p.if)({
                                intervalType: null != (l = null == w ? void 0 : w.interval) ? l : j.rV.MONTH,
                                intervalCount: null != (o = null == w ? void 0 : w.interval_count) ? o : 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: _.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Expires:",
                        }),
                        (0, a.jsx)("input", {
                            type: "date",
                            value: null != I ? I.substring(0, 10) : "",
                            onChange: (e) => U({ expiresAt: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: _.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Referrer ID:",
                        }),
                        (0, a.jsx)("input", {
                            type: "text",
                            value: null != (u = null == Z ? void 0 : Z.id) ? u : "",
                            onChange: (e) => U({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: _.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: F,
                            className: i()(_.badge, _.clickable, {
                                [_.acked]: D,
                                [_.expired]: L,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === z ? void 0 : "always-white",
                                children: z,
                            }),
                        }),
                        null != k &&
                            (0, a.jsx)("div", {
                                className: i()(_.badge, _.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)(c.P3F, {
                    onClick: async () => {
                        T(!0), await E(P, "trial"), f(), T(!1);
                    },
                    children: (0, a.jsx)(c.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: i()(_.icon, _.trashIcon),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: i()(_.loadingContainer, { [_.isLoading]: N || O }),
                    children: (0, a.jsx)(c.$jN, {}),
                }),
            ],
        })
    );
}
function I(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: u } = e,
        [m, x] = r.useState(!1),
        [p, f] = r.useState(!1),
        [v, b] = r.useState(!1),
        [j, y] = r.useState(!1);
    r.useEffect(() => {
        v && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [v]);
    let { id: C, expires_at: N, applied_at: T, discount_id: O, discount: S } = l,
        P =
            null !=
            (n =
                null ==
                (t = o.find((e) => {
                    let { value: t } = e;
                    return t === O;
                }))
                    ? void 0
                    : t.label)
                ? n
                : "Unknown",
        I = null != N,
        k = null != N && new Date(N).getTime() < Date.now(),
        R = async () => {
            b(!0), I ? await w({ expiresAt: null }) : await (0, d.ab)(void 0, l), u(), b(!1);
        },
        w = async (e) => {
            let { expiresAt: t } = e;
            b(!0);
            try {
                await s.tn.patch({
                    url: g.ANM.UPDATE_USER_OFFER(C, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                u(), b(!1);
            }
        };
    r.useEffect(() => {
        if (m) {
            let e = setTimeout(() => {
                x(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (p) {
            let e = setTimeout(() => {
                f(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [m, p]);
    let Z = "Active";
    return (
        k && (Z = "Expired"),
        I && (Z = "Acked"),
        (0, a.jsxs)("div", {
            className: i()(_.card, _.discount),
            children: [
                (0, a.jsxs)("div", {
                    className: i()(_.row, _.nameRow),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            children: P,
                        }),
                        (0, a.jsx)(c.P3F, {
                            onClick: async () => {
                                b(!0), await E(C, "discount"), u(), b(!1);
                            },
                            children: (0, a.jsx)(c.XHJ, {
                                size: "md",
                                color: "currentColor",
                                className: i()(_.icon, _.trashIcon),
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(_.row, _.idRow),
                    onClick: () => {
                        (0, h.JG)(C, () => x(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Offer: ", C],
                        }),
                        m
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: i()(_.icon, _.noMargin),
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: _.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(_.row, _.idRow),
                    onClick: () => {
                        (0, h.JG)(O, () => f(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Discount: ", O],
                        }),
                        p
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: i()(_.icon, _.noMargin),
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: _.icon,
                              }),
                    ],
                }),
                (null == S ? void 0 : S.amount) != null &&
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [S.amount, "% off"],
                        }),
                    }),
                (0, a.jsxs)("div", {
                    className: _.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Expires:",
                        }),
                        (0, a.jsx)("input", {
                            type: "date",
                            value: null != N ? N.substring(0, 10) : "",
                            onChange: (e) => w({ expiresAt: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: _.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: R,
                            className: i()(_.badge, _.clickable, {
                                [_.acked]: I,
                                [_.expired]: k,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === Z ? void 0 : "always-white",
                                children: Z,
                            }),
                        }),
                        null != T &&
                            (0, a.jsx)("div", {
                                className: i()(_.badge, _.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: i()(_.loadingContainer, { [_.isLoading]: v || j }),
                    children: (0, a.jsx)(c.$jN, {}),
                }),
            ],
        })
    );
}
function k() {
    let [e, t] = r.useState([]),
        [n, l] = r.useState([]),
        [i, s] = r.useState(),
        [h, p] = r.useState(),
        [j, E] = r.useState([]),
        [k, R] = r.useState([]),
        [w, Z] = r.useState(!0),
        [A, D] = r.useState(10080),
        [L, M] = r.useState([]),
        { entitlements: F, deleteFractionalPremium: U, refreshEntitlementList: z } = (0, b.m)();
    r.useEffect(() => {
        z();
    }, [z]),
        r.useEffect(() => {
            M(F.filter((e) => e.sourceType === g.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [F]),
        r.useEffect(() => {
            (0 === e.length || 0 === n.length || w) &&
                C().then((e) => {
                    let n = Object.keys(e.trial).map((t) => ({
                            label: t,
                            value: e.trial[t],
                        })),
                        a = Object.keys(e.discount).map((t) => ({
                            label: t,
                            value: e.discount[t],
                        }));
                    t(n), l(a), null == i && s(n[0].value), null == h && p(a[0].value);
                });
        }, [e, n, i, h, w]),
        r.useEffect(() => {
            w &&
                (Z(!1),
                x.Z.forceReset(),
                (0, d.Tf)(),
                T().then((e) => {
                    E(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        R(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [w]);
    let G = async () => {
            null != i && (await N(i, "trial"), Z(!0));
        },
        B = async () => {
            null != h && (await N(h, "discount"), Z(!0));
        },
        V = async () => {
            await O(), Z(!0);
        },
        H = async () => {
            let e = new Date(Date.now() + 60 * A * 1000).toISOString();
            await S(e), z();
        },
        { redeemReward: W } = (0, u.h)();
    return (0, a.jsx)(c.zJl, {
        className: y.panel,
        children: (0, a.jsxs)("div", {
            className: _.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Utils",
                        }),
                        (0, a.jsxs)("div", {
                            className: _.buttons,
                            children: [
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: V,
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, m.w9)(o.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, m.Z1)(o.z.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Refresh DevTools",
                                    onClick: () => Z(!0),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Trial Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: _.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: _.input,
                                    options: e,
                                    isSelected: (e) => i === e,
                                    placeholder: "Trial Type",
                                    serialize: (e) => String(e),
                                    select: (e) => s(e),
                                    popoutLayerContext: v.O$,
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: G,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Discount Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: _.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: _.input,
                                    options: n,
                                    isSelected: (e) => h === e,
                                    placeholder: "Discount Type",
                                    serialize: (e) => String(e),
                                    select: (e) => p(e),
                                    popoutLayerContext: v.O$,
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: B,
                                }),
                            ],
                        }),
                    ],
                }),
                j.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: _.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: "heading-md/semibold",
                                children: "Existing Trial Offers",
                            }),
                            j.map((t) =>
                                (0, a.jsx)(
                                    P,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => Z(!0),
                                    },
                                    t.id,
                                ),
                            ),
                        ],
                    }),
                k.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: _.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: "heading-md/semibold",
                                children: "Existing Discount Offers",
                            }),
                            k.map((e) =>
                                (0, a.jsx)(
                                    I,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => Z(!0),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                (0, a.jsxs)("section", {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Reverse Trial Entitlement",
                        }),
                        (0, a.jsxs)("div", {
                            className: _.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: _.input,
                                    options: [
                                        {
                                            label: "5 minutes",
                                            value: 5,
                                        },
                                        {
                                            label: "1 hour",
                                            value: 60,
                                        },
                                        {
                                            label: "1 day",
                                            value: 1440,
                                        },
                                        {
                                            label: "1 week",
                                            value: 10080,
                                        },
                                    ],
                                    isSelected: (e) => A === e,
                                    placeholder: "Reverse Trial Length",
                                    serialize: (e) => String(e),
                                    select: (e) => D(e),
                                    popoutLayerContext: v.O$,
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: H,
                                }),
                            ],
                        }),
                    ],
                }),
                L.length > 0 &&
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(c.Text, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, a.jsx)("div", {
                                children: L.map((e) =>
                                    (0, a.jsx)(
                                        f.D,
                                        {
                                            entitlement: e,
                                            active: !0,
                                            onDelete: () => U(e.id),
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                        ],
                    }),
                (0, a.jsx)("div", {
                    children: (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(c.Text, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "September 2025 MM Reward Grant",
                            }),
                            (0, a.jsx)(c.zxk, {
                                variant: "primary",
                                text: "Grant Subscription Reward",
                                onClick: () => {
                                    W();
                                },
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
