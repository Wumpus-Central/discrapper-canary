n.d(t, { Z: () => k }), n(388685), n(642613);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(544891),
    s = n(704215),
    c = n(481060),
    d = n(105713),
    u = n(937579),
    m = n(675478),
    p = n(431),
    h = n(572004),
    x = n(55935),
    f = n(74538),
    b = n(604776),
    g = n(246992),
    v = n(232867),
    j = n(981631),
    _ = n(474936),
    y = n(711322),
    C = n(451429);
let S = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: j.ANM.USER_OFFER_IDS,
                rejectWithError: !0,
            });
            return e;
        } catch (e) {
            return [];
        }
    },
    E = async (e, t) => {
        try {
            await o.tn.post({
                url: j.ANM.CREATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, u.Tf)();
        }
    },
    T = async (e, t) => {
        try {
            await o.tn.del({
                url: j.ANM.UPDATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, u.Tf)();
        }
    },
    O = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: j.ANM.USER_OFFERS,
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
    N = async () => {
        try {
            await o.tn.del({
                url: j.ANM.USER_OFFERS,
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await p.Z.forceReset(), await (0, u.Tf)();
        }
    },
    P = async (e) => {
        await o.tn.post({
            url: j.ANM.CREATE_REVERSE_TRIAL,
            body: { ends_at: e },
            rejectWithError: !0,
        });
    };
function I(e) {
    var t, n, l, s, m;
    let { offer: p, offerOptions: b, forceRefetch: g } = e,
        [v, C] = r.useState(!1),
        [S, E] = r.useState(!1),
        [O, N] = r.useState(!1),
        [P, I] = r.useState(!1);
    r.useEffect(() => {
        O && I(!0);
        let e = setTimeout(() => {
            I(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [O]);
    let { id: w, expires_at: k, redeemed_at: R, trial_id: A, subscription_trial: D, referrer: Z } = p,
        M =
            null !=
            (n =
                null ==
                (t = b.find((e) => {
                    let { value: t } = e;
                    return t === A;
                }))
                    ? void 0
                    : t.label)
                ? n
                : "Unknown";
    null != Z && (M = "".concat(M, " from @").concat(Z.username));
    let L = null != k,
        U = null != k && new Date(k).getTime() < Date.now(),
        F = (null == D ? void 0 : D.sku_id) === _.Si.TIER_0,
        B = async () => {
            N(!0), L ? await G({ expiresAt: null }) : await (0, u.ab)(p), g(), N(!1);
        },
        G = async (e) => {
            N(!0);
            try {
                await o.tn.patch({
                    url: j.ANM.UPDATE_USER_OFFER(w, "trial"),
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
        if (v) {
            let e = setTimeout(() => {
                C(!1);
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
    let z = "Active";
    return (
        L && (z = "Acked"),
        U && (z = "Expired"),
        (0, a.jsxs)("div", {
            className: i()(y.card, F ? y.gradientWrapperTier0 : y.gradientWrapperTier2),
            children: [
                (0, a.jsx)("div", {
                    className: i()(y.row, y.nameRow),
                    children: (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/semibold",
                        color: "always-white",
                        children: M,
                    }),
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(y.row, y.idRow),
                    onClick: () => {
                        (0, h.JG)(w, () => C(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Offer: ", w],
                        }),
                        v
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
                    className: i()(y.row, y.idRow),
                    onClick: () => {
                        (0, h.JG)(A, () => E(!0));
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
                            (0, f.if)({
                                intervalType: null != (l = null == D ? void 0 : D.interval) ? l : _.rV.MONTH,
                                intervalCount: null != (s = null == D ? void 0 : D.interval_count) ? s : 1,
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
                            value: (0, x.mm)(k),
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
                            value: null != (m = null == Z ? void 0 : Z.id) ? m : "",
                            onChange: (e) => G({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: B,
                            className: i()(y.badge, y.clickable, {
                                [y.acked]: L,
                                [y.expired]: U,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === z ? void 0 : "always-white",
                                children: z,
                            }),
                        }),
                        null != R &&
                            (0, a.jsx)("div", {
                                className: i()(y.badge, y.redeemed),
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
                        N(!0), await T(w, "trial"), g(), N(!1);
                    },
                    children: (0, a.jsx)(c.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: i()(y.icon, y.trashIcon),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: i()(y.loadingContainer, { [y.isLoading]: O || P }),
                    children: (0, a.jsx)(c.$jN, {}),
                }),
            ],
        })
    );
}
function w(e) {
    var t, n;
    let { offer: l, offerOptions: s, forceRefetch: m } = e,
        [p, f] = r.useState(!1),
        [b, g] = r.useState(!1),
        [v, _] = r.useState(!1),
        [C, S] = r.useState(!1);
    r.useEffect(() => {
        v && S(!0);
        let e = setTimeout(() => {
            S(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [v]);
    let { id: E, expires_at: O, applied_at: N, discount_id: P, discount: I } = l,
        w =
            null !=
            (n =
                null ==
                (t = s.find((e) => {
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
            _(!0), k ? await D({ expiresAt: null }) : await (0, u.ab)(void 0, l), m(), _(!1);
        },
        D = async (e) => {
            let { expiresAt: t } = e;
            _(!0);
            try {
                await o.tn.patch({
                    url: j.ANM.UPDATE_USER_OFFER(E, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                m(), _(!1);
            }
        };
    r.useEffect(() => {
        if (p) {
            let e = setTimeout(() => {
                f(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (b) {
            let e = setTimeout(() => {
                g(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [p, b]);
    let Z = "Active";
    return (
        R && (Z = "Expired"),
        k && (Z = "Acked"),
        (0, a.jsxs)("div", {
            className: i()(y.card, y.discount),
            children: [
                (0, a.jsxs)("div", {
                    className: i()(y.row, y.nameRow),
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            children: w,
                        }),
                        (0, a.jsx)(c.P3F, {
                            onClick: async () => {
                                _(!0), await T(E, "discount"), m(), _(!1);
                            },
                            children: (0, a.jsx)(c.XHJ, {
                                size: "md",
                                color: "currentColor",
                                className: i()(y.icon, y.trashIcon),
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(y.row, y.idRow),
                    onClick: () => {
                        (0, h.JG)(E, () => f(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Offer: ", E],
                        }),
                        p
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: i()(y.icon, y.noMargin),
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: y.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(y.row, y.idRow),
                    onClick: () => {
                        (0, h.JG)(P, () => g(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Discount: ", P],
                        }),
                        b
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: i()(y.icon, y.noMargin),
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: y.icon,
                              }),
                    ],
                }),
                (null == I ? void 0 : I.amount) != null &&
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [I.amount, "% off"],
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
                            value: (0, x.mm)(O),
                            onChange: (e) =>
                                D({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: A,
                            className: i()(y.badge, y.clickable, {
                                [y.acked]: k,
                                [y.expired]: R,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === Z ? void 0 : "always-white",
                                children: Z,
                            }),
                        }),
                        null != N &&
                            (0, a.jsx)("div", {
                                className: i()(y.badge, y.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: i()(y.loadingContainer, { [y.isLoading]: v || C }),
                    children: (0, a.jsx)(c.$jN, {}),
                }),
            ],
        })
    );
}
function k() {
    let [e, t] = r.useState([]),
        [n, l] = r.useState([]),
        [i, o] = r.useState(),
        [d, h] = r.useState(),
        [x, f] = r.useState([]),
        [_, T] = r.useState([]),
        [k, R] = r.useState(!0),
        [A, D] = r.useState(10080),
        [Z, M] = r.useState([]),
        { entitlements: L, deleteFractionalPremium: U, refreshEntitlementList: F } = (0, v.m)();
    r.useEffect(() => {
        F();
    }, [F]),
        r.useEffect(() => {
            M(L.filter((e) => e.sourceType === j.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [L]),
        r.useEffect(() => {
            (0 === e.length || 0 === n.length || k) &&
                S().then((e) => {
                    let n = Object.keys(e.trial).map((t) => ({
                            label: t,
                            value: e.trial[t],
                        })),
                        a = Object.keys(e.discount).map((t) => ({
                            label: t,
                            value: e.discount[t],
                        }));
                    t(n), l(a), null == i && o(n[0].value), null == d && h(a[0].value);
                });
        }, [e, n, i, d, k]),
        r.useEffect(() => {
            k &&
                (R(!1),
                p.Z.forceReset(),
                (0, u.Tf)(),
                O().then((e) => {
                    f(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        T(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [k]);
    let B = async () => {
            null != i && (await E(i, "trial"), R(!0));
        },
        G = async () => {
            null != d && (await E(d, "discount"), R(!0));
        },
        z = async () => {
            await N(), R(!0);
        },
        V = async () => {
            let e = new Date(Date.now() + 60 * A * 1000).toISOString();
            await P(e), F();
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
                                    onClick: z,
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, m.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, m.Z1)(s.z.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, a.jsx)(c.Button, {
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
                    className: y.section,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            children: "Create a Trial Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: y.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: y.input,
                                    options: e,
                                    isSelected: (e) => i === e,
                                    placeholder: "Trial Type",
                                    serialize: (e) => String(e),
                                    select: (e) => o(e),
                                    popoutLayerContext: g.O$,
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: B,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: y.section,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            children: "Create a Discount Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: y.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: y.input,
                                    options: n,
                                    isSelected: (e) => d === e,
                                    placeholder: "Discount Type",
                                    serialize: (e) => String(e),
                                    select: (e) => h(e),
                                    popoutLayerContext: g.O$,
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: G,
                                }),
                            ],
                        }),
                    ],
                }),
                x.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: y.section,
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Trial Offers",
                            }),
                            x.map((t) =>
                                (0, a.jsx)(
                                    I,
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
                _.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: y.section,
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Discount Offers",
                            }),
                            _.map((e) =>
                                (0, a.jsx)(
                                    w,
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
                    className: y.section,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            children: "Create a Reverse Trial Entitlement",
                        }),
                        (0, a.jsxs)("div", {
                            className: y.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: y.input,
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
                                    popoutLayerContext: g.O$,
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: V,
                                }),
                            ],
                        }),
                    ],
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
                                        b.D,
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
            ],
        }),
    });
}
