n.d(t, { Z: () => w }), n(388685), n(642613);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(544891),
    o = n(704215),
    c = n(481060),
    d = n(937579),
    u = n(675478),
    m = n(431),
    x = n(572004),
    h = n(74538),
    p = n(604776),
    f = n(246992),
    v = n(232867),
    b = n(981631),
    j = n(474936),
    g = n(711322),
    _ = n(451429);
let y = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: b.ANM.USER_OFFER_IDS,
                rejectWithError: !0,
            });
            return e;
        } catch (e) {
            return [];
        }
    },
    C = async (e, t) => {
        try {
            await s.tn.post({
                url: b.ANM.CREATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, d.Tf)();
        }
    },
    N = async (e, t) => {
        try {
            await s.tn.del({
                url: b.ANM.UPDATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, d.Tf)();
        }
    },
    E = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: b.ANM.USER_OFFERS,
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
                url: b.ANM.USER_OFFERS,
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await m.Z.forceReset(), await (0, d.Tf)();
        }
    },
    T = async (e) => {
        await s.tn.post({
            url: b.ANM.CREATE_REVERSE_TRIAL,
            body: { ends_at: e },
            rejectWithError: !0,
        });
    };
function S(e) {
    var t, n, l, o, u;
    let { offer: m, offerOptions: p, forceRefetch: f } = e,
        [v, _] = r.useState(!1),
        [y, C] = r.useState(!1),
        [E, O] = r.useState(!1),
        [T, S] = r.useState(!1);
    r.useEffect(() => {
        E && S(!0);
        let e = setTimeout(() => {
            S(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [E]);
    let { id: P, expires_at: w, redeemed_at: k, trial_id: I, subscription_trial: R, referrer: Z } = m,
        A =
            null !=
            (n =
                null ==
                (t = p.find((e) => {
                    let { value: t } = e;
                    return t === I;
                }))
                    ? void 0
                    : t.label)
                ? n
                : "Unknown";
    null != Z && (A = "".concat(A, " from @").concat(Z.username));
    let D = null != w,
        L = null != w && new Date(w).getTime() < Date.now(),
        M = (null == R ? void 0 : R.sku_id) === j.Si.TIER_0,
        F = async () => {
            O(!0), D ? await U({ expiresAt: null }) : await (0, d.ab)(m), f(), O(!1);
        },
        U = async (e) => {
            O(!0);
            try {
                await s.tn.patch({
                    url: b.ANM.UPDATE_USER_OFFER(P, "trial"),
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
                f(), O(!1);
            }
        };
    r.useEffect(() => {
        if (v) {
            let e = setTimeout(() => {
                _(!1);
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
            className: i()(g.card, M ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
            children: [
                (0, a.jsx)("div", {
                    className: i()(g.row, g.nameRow),
                    children: (0, a.jsx)(c.X6q, {
                        variant: "heading-lg/semibold",
                        color: "always-white",
                        children: A,
                    }),
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(P, () => _(!0));
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
                                  className: g.icon,
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: g.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(I, () => C(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial: ", I],
                        }),
                        y
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: g.icon,
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: g.icon,
                              }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: g.row,
                    children: (0, a.jsxs)(c.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, h.if)({
                                intervalType: null != (l = null == R ? void 0 : R.interval) ? l : j.rV.MONTH,
                                intervalCount: null != (o = null == R ? void 0 : R.interval_count) ? o : 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: g.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Expires:",
                        }),
                        (0, a.jsx)("input", {
                            type: "date",
                            value: null != w ? w.substring(0, 10) : "",
                            onChange: (e) => U({ expiresAt: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: g.row,
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
                    className: g.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: F,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: D,
                                [g.expired]: L,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === z ? void 0 : "always-white",
                                children: z,
                            }),
                        }),
                        null != k &&
                            (0, a.jsx)("div", {
                                className: i()(g.badge, g.redeemed),
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
                        O(!0), await N(P, "trial"), f(), O(!1);
                    },
                    children: (0, a.jsx)(c.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: i()(g.icon, g.trashIcon),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: i()(g.loadingContainer, { [g.isLoading]: E || T }),
                    children: (0, a.jsx)(c.$jN, {}),
                }),
            ],
        })
    );
}
function P(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: u } = e,
        [m, h] = r.useState(!1),
        [p, f] = r.useState(!1),
        [v, j] = r.useState(!1),
        [_, y] = r.useState(!1);
    r.useEffect(() => {
        v && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [v]);
    let { id: C, expires_at: E, applied_at: O, discount_id: T, discount: S } = l,
        P =
            null !=
            (n =
                null ==
                (t = o.find((e) => {
                    let { value: t } = e;
                    return t === T;
                }))
                    ? void 0
                    : t.label)
                ? n
                : "Unknown",
        w = null != E,
        k = null != E && new Date(E).getTime() < Date.now(),
        I = async () => {
            j(!0), w ? await R({ expiresAt: null }) : await (0, d.ab)(void 0, l), u(), j(!1);
        },
        R = async (e) => {
            let { expiresAt: t } = e;
            j(!0);
            try {
                await s.tn.patch({
                    url: b.ANM.UPDATE_USER_OFFER(C, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                u(), j(!1);
            }
        };
    r.useEffect(() => {
        if (m) {
            let e = setTimeout(() => {
                h(!1);
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
        w && (Z = "Acked"),
        (0, a.jsxs)("div", {
            className: i()(g.card, g.discount),
            children: [
                (0, a.jsxs)("div", {
                    className: i()(g.row, g.nameRow),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            children: P,
                        }),
                        (0, a.jsx)(c.P3F, {
                            onClick: async () => {
                                j(!0), await N(C, "discount"), u(), j(!1);
                            },
                            children: (0, a.jsx)(c.XHJ, {
                                size: "md",
                                color: "currentColor",
                                className: i()(g.icon, g.trashIcon),
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(C, () => h(!0));
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
                                  className: i()(g.icon, g.noMargin),
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: g.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(T, () => f(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Discount: ", T],
                        }),
                        p
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: i()(g.icon, g.noMargin),
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: g.icon,
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
                    className: g.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Expires:",
                        }),
                        (0, a.jsx)("input", {
                            type: "date",
                            value: null != E ? E.substring(0, 10) : "",
                            onChange: (e) => R({ expiresAt: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: g.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: I,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: w,
                                [g.expired]: k,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === Z ? void 0 : "always-white",
                                children: Z,
                            }),
                        }),
                        null != O &&
                            (0, a.jsx)("div", {
                                className: i()(g.badge, g.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: i()(g.loadingContainer, { [g.isLoading]: v || _ }),
                    children: (0, a.jsx)(c.$jN, {}),
                }),
            ],
        })
    );
}
function w() {
    let [e, t] = r.useState([]),
        [n, l] = r.useState([]),
        [i, s] = r.useState(),
        [x, h] = r.useState(),
        [j, N] = r.useState([]),
        [w, k] = r.useState([]),
        [I, R] = r.useState(!0),
        [Z, A] = r.useState(10080),
        [D, L] = r.useState([]),
        { entitlements: M, deleteFractionalPremium: F, refreshEntitlementList: U } = (0, v.m)();
    r.useEffect(() => {
        U();
    }, [U]),
        r.useEffect(() => {
            L(M.filter((e) => e.sourceType === b.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [M]),
        r.useEffect(() => {
            (0 === e.length || 0 === n.length || I) &&
                y().then((e) => {
                    let n = Object.keys(e.trial).map((t) => ({
                            label: t,
                            value: e.trial[t],
                        })),
                        a = Object.keys(e.discount).map((t) => ({
                            label: t,
                            value: e.discount[t],
                        }));
                    t(n), l(a), null == i && s(n[0].value), null == x && h(a[0].value);
                });
        }, [e, n, i, x, I]),
        r.useEffect(() => {
            I &&
                (R(!1),
                m.Z.forceReset(),
                (0, d.Tf)(),
                E().then((e) => {
                    N(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        k(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [I]);
    let z = async () => {
            null != i && (await C(i, "trial"), R(!0));
        },
        B = async () => {
            null != x && (await C(x, "discount"), R(!0));
        },
        G = async () => {
            await O(), R(!0);
        },
        V = async () => {
            let e = new Date(Date.now() + 60 * Z * 1000).toISOString();
            await T(e), U();
        };
    return (0, a.jsx)(c.zJl, {
        className: _.panel,
        children: (0, a.jsxs)("div", {
            className: g.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: g.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Utils",
                        }),
                        (0, a.jsxs)("div", {
                            className: g.buttons,
                            children: [
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: G,
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, u.w9)(o.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, u.Z1)(o.z.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Refresh DevTools",
                                    onClick: () => R(!0),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: g.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Trial Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: g.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: g.input,
                                    options: e,
                                    isSelected: (e) => i === e,
                                    placeholder: "Trial Type",
                                    serialize: (e) => String(e),
                                    select: (e) => s(e),
                                    popoutLayerContext: f.O$,
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: z,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: g.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Discount Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: g.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: g.input,
                                    options: n,
                                    isSelected: (e) => x === e,
                                    placeholder: "Discount Type",
                                    serialize: (e) => String(e),
                                    select: (e) => h(e),
                                    popoutLayerContext: f.O$,
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
                        className: g.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: "heading-md/semibold",
                                children: "Existing Trial Offers",
                            }),
                            j.map((t) =>
                                (0, a.jsx)(
                                    S,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => R(!0),
                                    },
                                    t.id,
                                ),
                            ),
                        ],
                    }),
                w.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: g.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: "heading-md/semibold",
                                children: "Existing Discount Offers",
                            }),
                            w.map((e) =>
                                (0, a.jsx)(
                                    P,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => R(!0),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                (0, a.jsxs)("section", {
                    className: g.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Reverse Trial Entitlement",
                        }),
                        (0, a.jsxs)("div", {
                            className: g.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: g.input,
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
                                    isSelected: (e) => Z === e,
                                    placeholder: "Reverse Trial Length",
                                    serialize: (e) => String(e),
                                    select: (e) => A(e),
                                    popoutLayerContext: f.O$,
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: V,
                                }),
                            ],
                        }),
                    ],
                }),
                D.length > 0 &&
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(c.Text, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, a.jsx)("div", {
                                children: D.map((e) =>
                                    (0, a.jsx)(
                                        p.D,
                                        {
                                            entitlement: e,
                                            active: !0,
                                            onDelete: () => F(e.id),
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
