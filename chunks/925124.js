n.d(t, { Z: () => I }), n(388685), n(642613);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(544891),
    o = n(704215),
    c = n(481060),
    d = n(105713),
    u = n(937579),
    m = n(675478),
    p = n(431),
    h = n(572004),
    f = n(55935),
    b = n(74538),
    x = n(604776),
    g = n(232867),
    v = n(981631),
    j = n(474936),
    y = n(68428),
    C = n(663618);
let _ = async () => {
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
    S = async (e, t) => {
        try {
            await s.tn.post({
                url: v.ANM.CREATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, u.Tf)();
        }
    },
    E = async (e, t) => {
        try {
            await s.tn.del({
                url: v.ANM.UPDATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, u.Tf)();
        }
    },
    T = async () => {
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
    O = async () => {
        try {
            await s.tn.del({
                url: v.ANM.USER_OFFERS,
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await p.Z.forceReset(), await (0, u.Tf)();
        }
    },
    N = async (e) => {
        await s.tn.post({
            url: v.ANM.CREATE_REVERSE_TRIAL,
            body: { ends_at: e },
            rejectWithError: !0,
        });
    };
function P(e) {
    var t, n, i, o, m;
    let { offer: p, offerOptions: x, forceRefetch: g } = e,
        [C, _] = r.useState(!1),
        [S, T] = r.useState(!1),
        [O, N] = r.useState(!1),
        [P, w] = r.useState(!1);
    r.useEffect(() => {
        O && w(!0);
        let e = setTimeout(() => {
            w(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [O]);
    let { id: I, expires_at: k, redeemed_at: R, trial_id: A, subscription_trial: Z, referrer: D } = p,
        M =
            null !=
            (n =
                null ==
                (t = x.find((e) => {
                    let { value: t } = e;
                    return t === A;
                }))
                    ? void 0
                    : t.label)
                ? n
                : "Unknown";
    null != D && (M = "".concat(M, " from @").concat(D.username));
    let L = null != k,
        U = null != k && new Date(k).getTime() < Date.now(),
        B = (null == Z ? void 0 : Z.sku_id) === j.Si.TIER_0,
        F = async () => {
            N(!0), L ? await G({ expiresAt: null }) : await (0, u.ab)(p), g(), N(!1);
        },
        G = async (e) => {
            N(!0);
            try {
                await s.tn.patch({
                    url: v.ANM.UPDATE_USER_OFFER(I, "trial"),
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
                g(), N(!1);
            }
        };
    r.useEffect(() => {
        if (C) {
            let e = setTimeout(() => {
                _(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (S) {
            let e = setTimeout(() => {
                T(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [C, S]);
    let V = "Active";
    return (
        L && (V = "Acked"),
        U && (V = "Expired"),
        (0, a.jsxs)("div", {
            className: l()(y.card, B ? y.gradientWrapperTier0 : y.gradientWrapperTier2),
            children: [
                (0, a.jsx)("div", {
                    className: l()(y.row, y.nameRow),
                    children: (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/semibold",
                        color: "always-white",
                        children: M,
                    }),
                }),
                (0, a.jsxs)(c.P3F, {
                    className: l()(y.row, y.idRow),
                    onClick: () => {
                        (0, h.JG)(I, () => _(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Offer: ", I],
                        }),
                        C
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: y.icon,
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: y.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: l()(y.row, y.idRow),
                    onClick: () => {
                        (0, h.JG)(A, () => T(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial: ", A],
                        }),
                        S
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: y.icon,
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: y.icon,
                              }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: y.row,
                    children: (0, a.jsxs)(c.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, b.if)({
                                intervalType: null != (i = null == Z ? void 0 : Z.interval) ? i : j.rV.MONTH,
                                intervalCount: null != (o = null == Z ? void 0 : Z.interval_count) ? o : 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: y.row,
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, d.Z)(), "):"],
                        }),
                        (0, a.jsx)("input", {
                            type: "datetime-local",
                            value: (0, f.mm)(k),
                            onChange: (e) => {
                                G({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Referrer ID:",
                        }),
                        (0, a.jsx)("input", {
                            type: "text",
                            value: null != (m = null == D ? void 0 : D.id) ? m : "",
                            onChange: (e) => G({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: F,
                            className: l()(y.badge, y.clickable, {
                                [y.acked]: L,
                                [y.expired]: U,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === V ? void 0 : "always-white",
                                children: V,
                            }),
                        }),
                        null != R &&
                            (0, a.jsx)("div", {
                                className: l()(y.badge, y.redeemed),
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
                        N(!0), await E(I, "trial"), g(), N(!1);
                    },
                    children: (0, a.jsx)(c.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: l()(y.icon, y.trashIcon),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: l()(y.loadingContainer, { [y.isLoading]: O || P }),
                    children: (0, a.jsx)(c.$jN, {}),
                }),
            ],
        })
    );
}
function w(e) {
    var t, n;
    let { offer: i, offerOptions: o, forceRefetch: m } = e,
        [p, b] = r.useState(!1),
        [x, g] = r.useState(!1),
        [j, C] = r.useState(!1),
        [_, S] = r.useState(!1);
    r.useEffect(() => {
        j && S(!0);
        let e = setTimeout(() => {
            S(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [j]);
    let { id: T, expires_at: O, applied_at: N, discount_id: P, discount: w } = i,
        I =
            null !=
            (n =
                null ==
                (t = o.find((e) => {
                    let { value: t } = e;
                    return t === P;
                }))
                    ? void 0
                    : t.label)
                ? n
                : "Unknown",
        k = null != O,
        R = null != O && new Date(O).getTime() < Date.now(),
        A = async () => {
            C(!0), k ? await Z({ expiresAt: null }) : await (0, u.ab)(void 0, i), m(), C(!1);
        },
        Z = async (e) => {
            let { expiresAt: t } = e;
            C(!0);
            try {
                await s.tn.patch({
                    url: v.ANM.UPDATE_USER_OFFER(T, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                m(), C(!1);
            }
        };
    r.useEffect(() => {
        if (p) {
            let e = setTimeout(() => {
                b(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (x) {
            let e = setTimeout(() => {
                g(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [p, x]);
    let D = "Active";
    return (
        R && (D = "Expired"),
        k && (D = "Acked"),
        (0, a.jsxs)("div", {
            className: l()(y.card, y.discount),
            children: [
                (0, a.jsx)("div", {
                    className: l()(y.row, y.nameRow),
                    children: (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        children: I,
                    }),
                }),
                (0, a.jsxs)(c.P3F, {
                    className: l()(y.row, y.idRow),
                    onClick: () => {
                        (0, h.JG)(T, () => b(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Offer: ", T],
                        }),
                        p
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: l()(y.icon, y.noMargin),
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: y.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: l()(y.row, y.idRow),
                    onClick: () => {
                        (0, h.JG)(P, () => g(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Discount: ", P],
                        }),
                        x
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: l()(y.icon, y.noMargin),
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: y.icon,
                              }),
                    ],
                }),
                (null == w ? void 0 : w.amount) != null &&
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [w.amount, "% off"],
                        }),
                    }),
                (0, a.jsxs)("div", {
                    className: y.row,
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, d.Z)(), "):"],
                        }),
                        (0, a.jsx)("input", {
                            type: "datetime-local",
                            value: (0, f.mm)(O),
                            onChange: (e) =>
                                Z({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: A,
                            className: l()(y.badge, y.clickable, {
                                [y.acked]: k,
                                [y.expired]: R,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === D ? void 0 : "always-white",
                                children: D,
                            }),
                        }),
                        null != N &&
                            (0, a.jsx)("div", {
                                className: l()(y.badge, y.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)(c.P3F, {
                    className: y.deleteRow,
                    onClick: async () => {
                        C(!0), await E(T, "discount"), m(), C(!1);
                    },
                    children: (0, a.jsx)(c.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: l()(y.icon, y.deleteIcon),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: l()(y.loadingContainer, { [y.isLoading]: j || _ }),
                    children: (0, a.jsx)(c.$jN, {}),
                }),
            ],
        })
    );
}
function I() {
    let [e, t] = r.useState([]),
        [n, i] = r.useState([]),
        [l, s] = r.useState(),
        [d, h] = r.useState(),
        [f, b] = r.useState([]),
        [j, E] = r.useState([]),
        [I, k] = r.useState(!0),
        [R, A] = r.useState(10080),
        [Z, D] = r.useState([]),
        { entitlements: M, deleteFractionalPremium: L, refreshEntitlementList: U } = (0, g.m)();
    r.useEffect(() => {
        U();
    }, [U]),
        r.useEffect(() => {
            D(M.filter((e) => e.sourceType === v.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [M]),
        r.useEffect(() => {
            (0 === e.length || 0 === n.length || I) &&
                _().then((e) => {
                    let n = Object.keys(e.trial).map((t) => ({
                            label: t,
                            value: e.trial[t],
                        })),
                        a = Object.keys(e.discount).map((t) => ({
                            label: t,
                            value: e.discount[t],
                        }));
                    t(n), i(a), null == l && s(n[0].value), null == d && h(a[0].value);
                });
        }, [e, n, l, d, I]),
        r.useEffect(() => {
            I &&
                (k(!1),
                p.Z.forceReset(),
                (0, u.Tf)(),
                T().then((e) => {
                    b(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        E(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [I]);
    let B = async () => {
            null != l && (await S(l, "trial"), k(!0));
        },
        F = async () => {
            null != d && (await S(d, "discount"), k(!0));
        },
        G = async () => {
            await O(), k(!0);
        },
        V = async () => {
            let e = new Date(Date.now() + 60 * R * 1000).toISOString();
            await N(e), U();
        };
    return (0, a.jsx)(c.zJl, {
        className: C.panel,
        children: (0, a.jsxs)("div", {
            className: y.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: y.section,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            children: "Utils",
                        }),
                        (0, a.jsxs)("div", {
                            className: y.buttons,
                            children: [
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: G,
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, m.w9)(o.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, m.Z1)(o.z.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Refresh DevTools",
                                    onClick: () => k(!0),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("section", {
                    className: y.section,
                    children: (0, a.jsxs)("div", {
                        className: y.inputRow,
                        children: [
                            (0, a.jsx)(c.PhF, {
                                label: "Create a Trial Offer",
                                options: e,
                                formatOption: (e) => {
                                    let { label: t, value: n } = e;
                                    return {
                                        label: t,
                                        value: n,
                                        id: n,
                                    };
                                },
                                value: l,
                                placeholder: "Trial Type",
                                onSelectionChange: s,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Create",
                                onClick: B,
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)("section", {
                    className: y.section,
                    children: (0, a.jsxs)("div", {
                        className: y.inputRow,
                        children: [
                            (0, a.jsx)(c.PhF, {
                                label: "Create a Discount Offer",
                                options: n,
                                formatOption: (e) => {
                                    let { label: t, value: n } = e;
                                    return {
                                        label: t,
                                        value: n,
                                        id: n,
                                    };
                                },
                                value: d,
                                placeholder: "Discount Type",
                                onSelectionChange: h,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Create",
                                onClick: F,
                            }),
                        ],
                    }),
                }),
                f.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: y.section,
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Trial Offers",
                            }),
                            f.map((t) =>
                                (0, a.jsx)(
                                    P,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => k(!0),
                                    },
                                    t.id,
                                ),
                            ),
                        ],
                    }),
                j.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: y.section,
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Discount Offers",
                            }),
                            j.map((e) =>
                                (0, a.jsx)(
                                    w,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => k(!0),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                (0, a.jsx)("section", {
                    className: y.section,
                    children: (0, a.jsxs)("div", {
                        className: y.inputRow,
                        children: [
                            (0, a.jsx)(c.PhF, {
                                label: "Create a Reverse Trial Entitlement",
                                options: [
                                    {
                                        id: "5min",
                                        label: "5 minutes",
                                        value: 5,
                                    },
                                    {
                                        id: "1hour",
                                        label: "1 hour",
                                        value: 60,
                                    },
                                    {
                                        id: "1day",
                                        label: "1 day",
                                        value: 1440,
                                    },
                                    {
                                        id: "1week",
                                        label: "1 week",
                                        value: 10080,
                                    },
                                ],
                                value: R,
                                placeholder: "Reverse Trial Length",
                                onSelectionChange: A,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Create",
                                onClick: V,
                            }),
                        ],
                    }),
                }),
                Z.length > 0 &&
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(c.Text, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, a.jsx)("div", {
                                children: Z.map((e) =>
                                    (0, a.jsx)(
                                        x.D,
                                        {
                                            entitlement: e,
                                            active: !0,
                                            onDelete: () => L(e.id),
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
