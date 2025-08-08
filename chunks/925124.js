a.d(t, { Z: () => w }), a(388685), a(642613);
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(544891),
    o = a(704215),
    c = a(481060),
    d = a(937579),
    u = a(675478),
    m = a(431),
    x = a(572004),
    h = a(74538),
    p = a(604776),
    b = a(246992),
    f = a(232867),
    v = a(981631),
    j = a(474936),
    g = a(546147),
    _ = a(616257);
let y = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: v.ANM.USER_OFFER_IDS,
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
                url: v.ANM.CREATE_USER_OFFER(e, t),
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
                url: v.ANM.UPDATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, d.Tf)();
        }
    },
    O = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: v.ANM.USER_OFFERS,
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
    T = async () => {
        try {
            await s.tn.del({
                url: v.ANM.USER_OFFERS,
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await m.Z.forceReset(), await (0, d.Tf)();
        }
    },
    E = async (e) => {
        await s.tn.post({
            url: v.ANM.CREATE_REVERSE_TRIAL,
            body: { ends_at: e },
            rejectWithError: !0,
        });
    };
function S(e) {
    var t, a, l, o, u;
    let { offer: m, offerOptions: p, forceRefetch: b } = e,
        [f, _] = r.useState(!1),
        [y, C] = r.useState(!1),
        [O, T] = r.useState(!1),
        [E, S] = r.useState(!1);
    r.useEffect(() => {
        O && S(!0);
        let e = setTimeout(() => {
            S(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [O]);
    let { id: P, expires_at: w, redeemed_at: I, trial_id: k, subscription_trial: R, referrer: Z } = m,
        A =
            null !=
            (a =
                null ==
                (t = p.find((e) => {
                    let { value: t } = e;
                    return t === k;
                }))
                    ? void 0
                    : t.label)
                ? a
                : "Unknown";
    null != Z && (A = "".concat(A, " from @").concat(Z.username));
    let D = null != w,
        L = null != w && new Date(w).getTime() < Date.now(),
        B = (null == R ? void 0 : R.sku_id) === j.Si.TIER_0,
        M = async () => {
            T(!0), D ? await F({ expiresAt: null }) : await (0, d.ab)(m), b(), T(!1);
        },
        F = async (e) => {
            T(!0);
            try {
                await s.tn.patch({
                    url: v.ANM.UPDATE_USER_OFFER(P, "trial"),
                    body: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = a[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
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
                b(), T(!1);
            }
        };
    r.useEffect(() => {
        if (f) {
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
    }, [f, y]);
    let U = "Active";
    return (
        D && (U = "Acked"),
        L && (U = "Expired"),
        (0, n.jsxs)("div", {
            className: i()(g.card, B ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
            children: [
                (0, n.jsx)("div", {
                    className: i()(g.row, g.nameRow),
                    children: (0, n.jsx)(c.X6q, {
                        variant: "heading-lg/semibold",
                        color: "always-white",
                        children: A,
                    }),
                }),
                (0, n.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(P, () => _(!0));
                    },
                    children: [
                        (0, n.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Offer: ", P],
                        }),
                        f
                            ? (0, n.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: g.icon,
                              })
                            : (0, n.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: g.icon,
                              }),
                    ],
                }),
                (0, n.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(k, () => C(!0));
                    },
                    children: [
                        (0, n.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial: ", k],
                        }),
                        y
                            ? (0, n.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: g.icon,
                              })
                            : (0, n.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: g.icon,
                              }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: g.row,
                    children: (0, n.jsxs)(c.Text, {
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
                (0, n.jsxs)("div", {
                    className: g.row,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Expires:",
                        }),
                        (0, n.jsx)("input", {
                            type: "date",
                            value: null != w ? w.substring(0, 10) : "",
                            onChange: (e) => F({ expiresAt: e.target.value }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: g.row,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Referrer ID:",
                        }),
                        (0, n.jsx)("input", {
                            type: "text",
                            value: null != (u = null == Z ? void 0 : Z.id) ? u : "",
                            onChange: (e) => F({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: g.badgeContainer,
                    children: [
                        (0, n.jsx)(c.P3F, {
                            onClick: M,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: D,
                                [g.expired]: L,
                            }),
                            children: (0, n.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === U ? void 0 : "always-white",
                                children: U,
                            }),
                        }),
                        null != I &&
                            (0, n.jsx)("div", {
                                className: i()(g.badge, g.redeemed),
                                children: (0, n.jsx)(c.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)(c.P3F, {
                    onClick: async () => {
                        T(!0), await N(P, "trial"), b(), T(!1);
                    },
                    children: (0, n.jsx)(c.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: i()(g.icon, g.trashIcon),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: i()(g.loadingContainer, { [g.isLoading]: O || E }),
                    children: (0, n.jsx)(c.$jN, {}),
                }),
            ],
        })
    );
}
function P(e) {
    var t, a;
    let { offer: l, offerOptions: o, forceRefetch: u } = e,
        [m, h] = r.useState(!1),
        [p, b] = r.useState(!1),
        [f, j] = r.useState(!1),
        [_, y] = r.useState(!1);
    r.useEffect(() => {
        f && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [f]);
    let { id: C, expires_at: O, applied_at: T, discount_id: E, discount: S } = l,
        P =
            null !=
            (a =
                null ==
                (t = o.find((e) => {
                    let { value: t } = e;
                    return t === E;
                }))
                    ? void 0
                    : t.label)
                ? a
                : "Unknown",
        w = null != O,
        I = null != O && new Date(O).getTime() < Date.now(),
        k = async () => {
            j(!0), w ? await R({ expiresAt: null }) : await (0, d.ab)(void 0, l), u(), j(!1);
        },
        R = async (e) => {
            let { expiresAt: t } = e;
            j(!0);
            try {
                await s.tn.patch({
                    url: v.ANM.UPDATE_USER_OFFER(C, "discount"),
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
                b(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [m, p]);
    let Z = "Active";
    return (
        I && (Z = "Expired"),
        w && (Z = "Acked"),
        (0, n.jsxs)("div", {
            className: i()(g.card, g.discount),
            children: [
                (0, n.jsxs)("div", {
                    className: i()(g.row, g.nameRow),
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            children: P,
                        }),
                        (0, n.jsx)(c.P3F, {
                            onClick: async () => {
                                j(!0), await N(C, "discount"), u(), j(!1);
                            },
                            children: (0, n.jsx)(c.XHJ, {
                                size: "md",
                                color: "currentColor",
                                className: i()(g.icon, g.trashIcon),
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(C, () => h(!0));
                    },
                    children: [
                        (0, n.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Offer: ", C],
                        }),
                        m
                            ? (0, n.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: i()(g.icon, g.noMargin),
                              })
                            : (0, n.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: g.icon,
                              }),
                    ],
                }),
                (0, n.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(E, () => b(!0));
                    },
                    children: [
                        (0, n.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Discount: ", E],
                        }),
                        p
                            ? (0, n.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: i()(g.icon, g.noMargin),
                              })
                            : (0, n.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: g.icon,
                              }),
                    ],
                }),
                (null == S ? void 0 : S.amount) != null &&
                    (0, n.jsx)("div", {
                        children: (0, n.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [S.amount, "% off"],
                        }),
                    }),
                (0, n.jsxs)("div", {
                    className: g.row,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Expires:",
                        }),
                        (0, n.jsx)("input", {
                            type: "date",
                            value: null != O ? O.substring(0, 10) : "",
                            onChange: (e) => R({ expiresAt: e.target.value }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: g.badgeContainer,
                    children: [
                        (0, n.jsx)(c.P3F, {
                            onClick: k,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: w,
                                [g.expired]: I,
                            }),
                            children: (0, n.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === Z ? void 0 : "always-white",
                                children: Z,
                            }),
                        }),
                        null != T &&
                            (0, n.jsx)("div", {
                                className: i()(g.badge, g.redeemed),
                                children: (0, n.jsx)(c.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: i()(g.loadingContainer, { [g.isLoading]: f || _ }),
                    children: (0, n.jsx)(c.$jN, {}),
                }),
            ],
        })
    );
}
function w() {
    let [e, t] = r.useState([]),
        [a, l] = r.useState([]),
        [i, s] = r.useState(),
        [x, h] = r.useState(),
        [j, N] = r.useState([]),
        [w, I] = r.useState([]),
        [k, R] = r.useState(!0),
        [Z, A] = r.useState(10080),
        [D, L] = r.useState([]),
        { entitlements: B, deleteFractionalPremium: M, refreshEntitlementList: F } = (0, f.m)();
    r.useEffect(() => {
        F();
    }, [F]);
    let U = (e) => e.filter((e) => e.sourceType === v.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date());
    r.useEffect(() => {
        L(U(B));
    }, [B]),
        r.useEffect(() => {
            (0 === e.length || 0 === a.length || k) &&
                y().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({
                            label: t,
                            value: e.trial[t],
                        })),
                        n = Object.keys(e.discount).map((t) => ({
                            label: t,
                            value: e.discount[t],
                        }));
                    t(a), l(n), null == i && s(a[0].value), null == x && h(n[0].value);
                });
        }, [e, a, i, x, k]),
        r.useEffect(() => {
            k &&
                (R(!1),
                m.Z.forceReset(),
                (0, d.Tf)(),
                O().then((e) => {
                    N(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        I(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [k]);
    let z = async () => {
            null != i && (await C(i, "trial"), R(!0));
        },
        G = async () => {
            null != x && (await C(x, "discount"), R(!0));
        },
        V = async () => {
            await T(), R(!0);
        },
        H = async () => {
            let e = new Date(Date.now() + 60 * Z * 1000).toISOString();
            await E(e), F();
        };
    return (0, n.jsx)(c.zJl, {
        className: _.panel,
        children: (0, n.jsxs)("div", {
            className: g.panelInner,
            children: [
                (0, n.jsxs)("section", {
                    className: g.section,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Utils",
                        }),
                        (0, n.jsxs)("div", {
                            className: g.buttons,
                            children: [
                                (0, n.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: V,
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, u.w9)(o.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, u.Z1)(o.z.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Refresh DevTools",
                                    onClick: () => R(!0),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("section", {
                    className: g.section,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Trial Offer",
                        }),
                        (0, n.jsxs)("div", {
                            className: g.inputRow,
                            children: [
                                (0, n.jsx)(c.PhF, {
                                    className: g.input,
                                    options: e,
                                    isSelected: (e) => i === e,
                                    placeholder: "Trial Type",
                                    serialize: (e) => String(e),
                                    select: (e) => s(e),
                                    popoutLayerContext: b.O$,
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: z,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("section", {
                    className: g.section,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Discount Offer",
                        }),
                        (0, n.jsxs)("div", {
                            className: g.inputRow,
                            children: [
                                (0, n.jsx)(c.PhF, {
                                    className: g.input,
                                    options: a,
                                    isSelected: (e) => x === e,
                                    placeholder: "Discount Type",
                                    serialize: (e) => String(e),
                                    select: (e) => h(e),
                                    popoutLayerContext: b.O$,
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: G,
                                }),
                            ],
                        }),
                    ],
                }),
                j.length > 0 &&
                    (0, n.jsxs)("section", {
                        className: g.section,
                        children: [
                            (0, n.jsx)(c.X6q, {
                                variant: "heading-md/semibold",
                                children: "Existing Trial Offers",
                            }),
                            j.map((t) =>
                                (0, n.jsx)(
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
                    (0, n.jsxs)("section", {
                        className: g.section,
                        children: [
                            (0, n.jsx)(c.X6q, {
                                variant: "heading-md/semibold",
                                children: "Existing Discount Offers",
                            }),
                            w.map((e) =>
                                (0, n.jsx)(
                                    P,
                                    {
                                        offer: e,
                                        offerOptions: a,
                                        forceRefetch: () => R(!0),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                (0, n.jsxs)("section", {
                    className: g.section,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Reverse Trial Entitlement",
                        }),
                        (0, n.jsxs)("div", {
                            className: g.inputRow,
                            children: [
                                (0, n.jsx)(c.PhF, {
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
                                    popoutLayerContext: b.O$,
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: H,
                                }),
                            ],
                        }),
                    ],
                }),
                D.length > 0 &&
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(c.Text, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, n.jsx)("div", {
                                children: D.map((e) =>
                                    (0, n.jsx)(
                                        p.D,
                                        {
                                            entitlement: e,
                                            active: !0,
                                            onDelete: () => M(e.id),
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
