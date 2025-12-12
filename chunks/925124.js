n.d(t, { Z: () => R }), n(388685), n(642613);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(544891),
    o = n(704215),
    c = n(199849),
    d = n(481060),
    u = n(105713),
    m = n(937579),
    p = n(675478),
    h = n(431),
    x = n(572004),
    f = n(55935),
    g = n(74538),
    b = n(604776),
    v = n(246992),
    j = n(232867),
    _ = n(981631),
    y = n(474936),
    C = n(711322),
    S = n(451429);
let E = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: _.ANM.USER_OFFER_IDS,
                rejectWithError: !0,
            });
            return e;
        } catch (e) {
            return [];
        }
    },
    O = async (e, t) => {
        try {
            await s.tn.post({
                url: _.ANM.CREATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, m.Tf)();
        }
    },
    T = async (e, t) => {
        try {
            await s.tn.del({
                url: _.ANM.UPDATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, m.Tf)();
        }
    },
    N = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: _.ANM.USER_OFFERS,
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
    P = async () => {
        try {
            await s.tn.del({
                url: _.ANM.USER_OFFERS,
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await h.Z.forceReset(), await (0, m.Tf)();
        }
    },
    w = async (e) => {
        await s.tn.post({
            url: _.ANM.CREATE_REVERSE_TRIAL,
            body: { ends_at: e },
            rejectWithError: !0,
        });
    };
function I(e) {
    var t, n, i, o, c;
    let { offer: p, offerOptions: h, forceRefetch: b } = e,
        [v, j] = r.useState(!1),
        [S, E] = r.useState(!1),
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
    let { id: I, expires_at: k, redeemed_at: R, trial_id: A, subscription_trial: D, referrer: Z } = p,
        L =
            null !=
            (n =
                null ==
                (t = h.find((e) => {
                    let { value: t } = e;
                    return t === A;
                }))
                    ? void 0
                    : t.label)
                ? n
                : "Unknown";
    null != Z && (L = "".concat(L, " from @").concat(Z.username));
    let M = null != k,
        U = null != k && new Date(k).getTime() < Date.now(),
        B = (null == D ? void 0 : D.sku_id) === y.Si.TIER_0,
        F = async () => {
            N(!0), M ? await G({ expiresAt: null }) : await (0, m.ab)(p), b(), N(!1);
        },
        G = async (e) => {
            N(!0);
            try {
                await s.tn.patch({
                    url: _.ANM.UPDATE_USER_OFFER(I, "trial"),
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
                b(), N(!1);
            }
        };
    r.useEffect(() => {
        if (v) {
            let e = setTimeout(() => {
                j(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (S) {
            let e = setTimeout(() => {
                E(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [v, S]);
    let V = "Active";
    return (
        M && (V = "Acked"),
        U && (V = "Expired"),
        (0, a.jsxs)("div", {
            className: l()(C.card, B ? C.gradientWrapperTier0 : C.gradientWrapperTier2),
            children: [
                (0, a.jsx)("div", {
                    className: l()(C.row, C.nameRow),
                    children: (0, a.jsx)(d.Heading, {
                        variant: "heading-lg/semibold",
                        color: "always-white",
                        children: L,
                    }),
                }),
                (0, a.jsxs)(d.P3F, {
                    className: l()(C.row, C.idRow),
                    onClick: () => {
                        (0, x.JG)(I, () => j(!0));
                    },
                    children: [
                        (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Offer: ", I],
                        }),
                        v
                            ? (0, a.jsx)(d.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: C.icon,
                              })
                            : (0, a.jsx)(d.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: C.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(d.P3F, {
                    className: l()(C.row, C.idRow),
                    onClick: () => {
                        (0, x.JG)(A, () => E(!0));
                    },
                    children: [
                        (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial: ", A],
                        }),
                        S
                            ? (0, a.jsx)(d.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: C.icon,
                              })
                            : (0, a.jsx)(d.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: C.icon,
                              }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: C.row,
                    children: (0, a.jsxs)(d.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, g.if)({
                                intervalType: null != (i = null == D ? void 0 : D.interval) ? i : y.rV.MONTH,
                                intervalCount: null != (o = null == D ? void 0 : D.interval_count) ? o : 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: C.row,
                    children: [
                        (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, u.Z)(), "):"],
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
                    className: C.row,
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Referrer ID:",
                        }),
                        (0, a.jsx)("input", {
                            type: "text",
                            value: null != (c = null == Z ? void 0 : Z.id) ? c : "",
                            onChange: (e) => G({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: C.badgeContainer,
                    children: [
                        (0, a.jsx)(d.P3F, {
                            onClick: F,
                            className: l()(C.badge, C.clickable, {
                                [C.acked]: M,
                                [C.expired]: U,
                            }),
                            children: (0, a.jsx)(d.Text, {
                                variant: "eyebrow",
                                color: "Acked" === V ? void 0 : "always-white",
                                children: V,
                            }),
                        }),
                        null != R &&
                            (0, a.jsx)("div", {
                                className: l()(C.badge, C.redeemed),
                                children: (0, a.jsx)(d.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)(d.P3F, {
                    onClick: async () => {
                        N(!0), await T(I, "trial"), b(), N(!1);
                    },
                    children: (0, a.jsx)(d.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: l()(C.icon, C.trashIcon),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: l()(C.loadingContainer, { [C.isLoading]: O || P }),
                    children: (0, a.jsx)(d.$jN, {}),
                }),
            ],
        })
    );
}
function k(e) {
    var t, n;
    let { offer: i, offerOptions: o, forceRefetch: c } = e,
        [p, h] = r.useState(!1),
        [g, b] = r.useState(!1),
        [v, j] = r.useState(!1),
        [y, S] = r.useState(!1);
    r.useEffect(() => {
        v && S(!0);
        let e = setTimeout(() => {
            S(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [v]);
    let { id: E, expires_at: O, applied_at: N, discount_id: P, discount: w } = i,
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
            j(!0), k ? await D({ expiresAt: null }) : await (0, m.ab)(void 0, i), c(), j(!1);
        },
        D = async (e) => {
            let { expiresAt: t } = e;
            j(!0);
            try {
                await s.tn.patch({
                    url: _.ANM.UPDATE_USER_OFFER(E, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                c(), j(!1);
            }
        };
    r.useEffect(() => {
        if (p) {
            let e = setTimeout(() => {
                h(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (g) {
            let e = setTimeout(() => {
                b(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [p, g]);
    let Z = "Active";
    return (
        R && (Z = "Expired"),
        k && (Z = "Acked"),
        (0, a.jsxs)("div", {
            className: l()(C.card, C.discount),
            children: [
                (0, a.jsxs)("div", {
                    className: l()(C.row, C.nameRow),
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            children: I,
                        }),
                        (0, a.jsx)(d.P3F, {
                            onClick: async () => {
                                j(!0), await T(E, "discount"), c(), j(!1);
                            },
                            children: (0, a.jsx)(d.XHJ, {
                                size: "md",
                                color: "currentColor",
                                className: l()(C.icon, C.trashIcon),
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)(d.P3F, {
                    className: l()(C.row, C.idRow),
                    onClick: () => {
                        (0, x.JG)(E, () => h(!0));
                    },
                    children: [
                        (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Offer: ", E],
                        }),
                        p
                            ? (0, a.jsx)(d.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: l()(C.icon, C.noMargin),
                              })
                            : (0, a.jsx)(d.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: C.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(d.P3F, {
                    className: l()(C.row, C.idRow),
                    onClick: () => {
                        (0, x.JG)(P, () => b(!0));
                    },
                    children: [
                        (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Discount: ", P],
                        }),
                        g
                            ? (0, a.jsx)(d.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: l()(C.icon, C.noMargin),
                              })
                            : (0, a.jsx)(d.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: C.icon,
                              }),
                    ],
                }),
                (null == w ? void 0 : w.amount) != null &&
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [w.amount, "% off"],
                        }),
                    }),
                (0, a.jsxs)("div", {
                    className: C.row,
                    children: [
                        (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, u.Z)(), "):"],
                        }),
                        (0, a.jsx)("input", {
                            type: "datetime-local",
                            value: (0, f.mm)(O),
                            onChange: (e) =>
                                D({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: C.badgeContainer,
                    children: [
                        (0, a.jsx)(d.P3F, {
                            onClick: A,
                            className: l()(C.badge, C.clickable, {
                                [C.acked]: k,
                                [C.expired]: R,
                            }),
                            children: (0, a.jsx)(d.Text, {
                                variant: "eyebrow",
                                color: "Acked" === Z ? void 0 : "always-white",
                                children: Z,
                            }),
                        }),
                        null != N &&
                            (0, a.jsx)("div", {
                                className: l()(C.badge, C.redeemed),
                                children: (0, a.jsx)(d.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: l()(C.loadingContainer, { [C.isLoading]: v || y }),
                    children: (0, a.jsx)(d.$jN, {}),
                }),
            ],
        })
    );
}
function R() {
    let [e, t] = r.useState([]),
        [n, i] = r.useState([]),
        [l, s] = r.useState(),
        [u, x] = r.useState(),
        [f, g] = r.useState([]),
        [y, T] = r.useState([]),
        [R, A] = r.useState(!0),
        [D, Z] = r.useState(10080),
        [L, M] = r.useState([]),
        { entitlements: U, deleteFractionalPremium: B, refreshEntitlementList: F } = (0, j.m)();
    r.useEffect(() => {
        F();
    }, [F]),
        r.useEffect(() => {
            M(U.filter((e) => e.sourceType === _.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [U]),
        r.useEffect(() => {
            (0 === e.length || 0 === n.length || R) &&
                E().then((e) => {
                    let n = Object.keys(e.trial).map((t) => ({
                            label: t,
                            value: e.trial[t],
                        })),
                        a = Object.keys(e.discount).map((t) => ({
                            label: t,
                            value: e.discount[t],
                        }));
                    t(n), i(a), null == l && s(n[0].value), null == u && x(a[0].value);
                });
        }, [e, n, l, u, R]),
        r.useEffect(() => {
            R &&
                (A(!1),
                h.Z.forceReset(),
                (0, m.Tf)(),
                N().then((e) => {
                    g(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        T(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [R]);
    let G = async () => {
            null != l && (await O(l, "trial"), A(!0));
        },
        V = async () => {
            null != u && (await O(u, "discount"), A(!0));
        },
        H = async () => {
            await P(), A(!0);
        },
        W = async () => {
            let e = new Date(Date.now() + 60 * D * 1000).toISOString();
            await w(e), F();
        };
    return (0, a.jsx)(d.zJl, {
        className: S.panel,
        children: (0, a.jsxs)("div", {
            className: C.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: C.section,
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: "Utils",
                        }),
                        (0, a.jsxs)("div", {
                            className: C.buttons,
                            children: [
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: H,
                                }),
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, p.w9)(o.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, p.Z1)(o.z.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Refresh DevTools",
                                    onClick: () => A(!0),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: C.section,
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: "Create a Trial Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: C.inputRow,
                            children: [
                                (0, a.jsx)(c.B6, {
                                    className: C.input,
                                    options: e,
                                    isSelected: (e) => l === e,
                                    placeholder: "Trial Type",
                                    serialize: (e) => String(e),
                                    select: (e) => s(e),
                                    popoutLayerContext: v.O$,
                                }),
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: G,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: C.section,
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: "Create a Discount Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: C.inputRow,
                            children: [
                                (0, a.jsx)(c.B6, {
                                    className: C.input,
                                    options: n,
                                    isSelected: (e) => u === e,
                                    placeholder: "Discount Type",
                                    serialize: (e) => String(e),
                                    select: (e) => x(e),
                                    popoutLayerContext: v.O$,
                                }),
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: V,
                                }),
                            ],
                        }),
                    ],
                }),
                f.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: C.section,
                        children: [
                            (0, a.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Trial Offers",
                            }),
                            f.map((t) =>
                                (0, a.jsx)(
                                    I,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => A(!0),
                                    },
                                    t.id,
                                ),
                            ),
                        ],
                    }),
                y.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: C.section,
                        children: [
                            (0, a.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Discount Offers",
                            }),
                            y.map((e) =>
                                (0, a.jsx)(
                                    k,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => A(!0),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                (0, a.jsxs)("section", {
                    className: C.section,
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: "Create a Reverse Trial Entitlement",
                        }),
                        (0, a.jsxs)("div", {
                            className: C.inputRow,
                            children: [
                                (0, a.jsx)(c.B6, {
                                    className: C.input,
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
                                    isSelected: (e) => D === e,
                                    placeholder: "Reverse Trial Length",
                                    serialize: (e) => String(e),
                                    select: (e) => Z(e),
                                    popoutLayerContext: v.O$,
                                }),
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: W,
                                }),
                            ],
                        }),
                    ],
                }),
                L.length > 0 &&
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(d.Text, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, a.jsx)("div", {
                                children: L.map((e) =>
                                    (0, a.jsx)(
                                        b.D,
                                        {
                                            entitlement: e,
                                            active: !0,
                                            onDelete: () => B(e.id),
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
