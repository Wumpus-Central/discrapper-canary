n.d(t, { Z: () => I }), n(388685), n(642613);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(544891),
    o = n(704215),
    c = n(481060),
    d = n(937579),
    u = n(675478),
    m = n(431),
    p = n(572004),
    h = n(74538),
    x = n(604776),
    f = n(246992),
    b = n(232867),
    g = n(981631),
    v = n(474936),
    j = n(596533),
    _ = n(866403);
let y = async () => {
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
    C = async (e, t) => {
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
    N = async () => {
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
    S = async () => {
        try {
            await s.tn.del({
                url: g.ANM.USER_OFFERS,
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await m.Z.forceReset(), await (0, d.Tf)();
        }
    },
    T = async (e) => {
        await s.tn.post({
            url: g.ANM.CREATE_REVERSE_TRIAL,
            body: { ends_at: e },
            rejectWithError: !0,
        });
    };
function O(e) {
    var t, n, i, o, u;
    let { offer: m, offerOptions: x, forceRefetch: f } = e,
        [b, _] = r.useState(!1),
        [y, C] = r.useState(!1),
        [N, S] = r.useState(!1),
        [T, O] = r.useState(!1);
    r.useEffect(() => {
        N && O(!0);
        let e = setTimeout(() => {
            O(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [N]);
    let { id: P, expires_at: I, redeemed_at: k, trial_id: w, subscription_trial: R, referrer: A } = m,
        Z =
            null !=
            (n =
                null ==
                (t = x.find((e) => {
                    let { value: t } = e;
                    return t === w;
                }))
                    ? void 0
                    : t.label)
                ? n
                : "Unknown";
    null != A && (Z = "".concat(Z, " from @").concat(A.username));
    let D = null != I,
        L = null != I && new Date(I).getTime() < Date.now(),
        M = (null == R ? void 0 : R.sku_id) === v.Si.TIER_0,
        U = async () => {
            S(!0), D ? await F({ expiresAt: null }) : await (0, d.ab)(m), f(), S(!1);
        },
        F = async (e) => {
            S(!0);
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
                f(), S(!1);
            }
        };
    r.useEffect(() => {
        if (b) {
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
    }, [b, y]);
    let B = "Active";
    return (
        D && (B = "Acked"),
        L && (B = "Expired"),
        (0, a.jsxs)("div", {
            className: l()(j.card, M ? j.gradientWrapperTier0 : j.gradientWrapperTier2),
            children: [
                (0, a.jsx)("div", {
                    className: l()(j.row, j.nameRow),
                    children: (0, a.jsx)(c.X6q, {
                        variant: "heading-lg/semibold",
                        color: "always-white",
                        children: Z,
                    }),
                }),
                (0, a.jsxs)(c.P3F, {
                    className: l()(j.row, j.idRow),
                    onClick: () => {
                        (0, p.JG)(P, () => _(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Offer: ", P],
                        }),
                        b
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: j.icon,
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: j.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: l()(j.row, j.idRow),
                    onClick: () => {
                        (0, p.JG)(w, () => C(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial: ", w],
                        }),
                        y
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: j.icon,
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: j.icon,
                              }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: j.row,
                    children: (0, a.jsxs)(c.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, h.if)({
                                intervalType: null != (i = null == R ? void 0 : R.interval) ? i : v.rV.MONTH,
                                intervalCount: null != (o = null == R ? void 0 : R.interval_count) ? o : 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: j.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Expires:",
                        }),
                        (0, a.jsx)("input", {
                            type: "date",
                            value: null != I ? I.substring(0, 10) : "",
                            onChange: (e) => F({ expiresAt: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: j.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Referrer ID:",
                        }),
                        (0, a.jsx)("input", {
                            type: "text",
                            value: null != (u = null == A ? void 0 : A.id) ? u : "",
                            onChange: (e) => F({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: j.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: U,
                            className: l()(j.badge, j.clickable, {
                                [j.acked]: D,
                                [j.expired]: L,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === B ? void 0 : "always-white",
                                children: B,
                            }),
                        }),
                        null != k &&
                            (0, a.jsx)("div", {
                                className: l()(j.badge, j.redeemed),
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
                        S(!0), await E(P, "trial"), f(), S(!1);
                    },
                    children: (0, a.jsx)(c.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: l()(j.icon, j.trashIcon),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: l()(j.loadingContainer, { [j.isLoading]: N || T }),
                    children: (0, a.jsx)(c.$jN, {}),
                }),
            ],
        })
    );
}
function P(e) {
    var t, n;
    let { offer: i, offerOptions: o, forceRefetch: u } = e,
        [m, h] = r.useState(!1),
        [x, f] = r.useState(!1),
        [b, v] = r.useState(!1),
        [_, y] = r.useState(!1);
    r.useEffect(() => {
        b && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [b]);
    let { id: C, expires_at: N, applied_at: S, discount_id: T, discount: O } = i,
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
        I = null != N,
        k = null != N && new Date(N).getTime() < Date.now(),
        w = async () => {
            v(!0), I ? await R({ expiresAt: null }) : await (0, d.ab)(void 0, i), u(), v(!1);
        },
        R = async (e) => {
            let { expiresAt: t } = e;
            v(!0);
            try {
                await s.tn.patch({
                    url: g.ANM.UPDATE_USER_OFFER(C, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                u(), v(!1);
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
        if (x) {
            let e = setTimeout(() => {
                f(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [m, x]);
    let A = "Active";
    return (
        k && (A = "Expired"),
        I && (A = "Acked"),
        (0, a.jsxs)("div", {
            className: l()(j.card, j.discount),
            children: [
                (0, a.jsxs)("div", {
                    className: l()(j.row, j.nameRow),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            children: P,
                        }),
                        (0, a.jsx)(c.P3F, {
                            onClick: async () => {
                                v(!0), await E(C, "discount"), u(), v(!1);
                            },
                            children: (0, a.jsx)(c.XHJ, {
                                size: "md",
                                color: "currentColor",
                                className: l()(j.icon, j.trashIcon),
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: l()(j.row, j.idRow),
                    onClick: () => {
                        (0, p.JG)(C, () => h(!0));
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
                                  className: l()(j.icon, j.noMargin),
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: j.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(c.P3F, {
                    className: l()(j.row, j.idRow),
                    onClick: () => {
                        (0, p.JG)(T, () => f(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Discount: ", T],
                        }),
                        x
                            ? (0, a.jsx)(c.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: l()(j.icon, j.noMargin),
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: j.icon,
                              }),
                    ],
                }),
                (null == O ? void 0 : O.amount) != null &&
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [O.amount, "% off"],
                        }),
                    }),
                (0, a.jsxs)("div", {
                    className: j.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Expires:",
                        }),
                        (0, a.jsx)("input", {
                            type: "date",
                            value: null != N ? N.substring(0, 10) : "",
                            onChange: (e) => R({ expiresAt: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: j.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: w,
                            className: l()(j.badge, j.clickable, {
                                [j.acked]: I,
                                [j.expired]: k,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === A ? void 0 : "always-white",
                                children: A,
                            }),
                        }),
                        null != S &&
                            (0, a.jsx)("div", {
                                className: l()(j.badge, j.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: l()(j.loadingContainer, { [j.isLoading]: b || _ }),
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
        [p, h] = r.useState(),
        [v, E] = r.useState([]),
        [I, k] = r.useState([]),
        [w, R] = r.useState(!0),
        [A, Z] = r.useState(10080),
        [D, L] = r.useState([]),
        { entitlements: M, deleteFractionalPremium: U, refreshEntitlementList: F } = (0, b.m)();
    r.useEffect(() => {
        F();
    }, [F]),
        r.useEffect(() => {
            L(M.filter((e) => e.sourceType === g.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [M]),
        r.useEffect(() => {
            (0 === e.length || 0 === n.length || w) &&
                y().then((e) => {
                    let n = Object.keys(e.trial).map((t) => ({
                            label: t,
                            value: e.trial[t],
                        })),
                        a = Object.keys(e.discount).map((t) => ({
                            label: t,
                            value: e.discount[t],
                        }));
                    t(n), i(a), null == l && s(n[0].value), null == p && h(a[0].value);
                });
        }, [e, n, l, p, w]),
        r.useEffect(() => {
            w &&
                (R(!1),
                m.Z.forceReset(),
                (0, d.Tf)(),
                N().then((e) => {
                    E(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        k(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [w]);
    let B = async () => {
            null != l && (await C(l, "trial"), R(!0));
        },
        G = async () => {
            null != p && (await C(p, "discount"), R(!0));
        },
        z = async () => {
            await S(), R(!0);
        },
        V = async () => {
            let e = new Date(Date.now() + 60 * A * 1000).toISOString();
            await T(e), F();
        };
    return (0, a.jsx)(c.zJl, {
        className: _.panel,
        children: (0, a.jsxs)("div", {
            className: j.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: j.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Utils",
                        }),
                        (0, a.jsxs)("div", {
                            className: j.buttons,
                            children: [
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: z,
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
                    className: j.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Trial Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: j.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: j.input,
                                    options: e,
                                    isSelected: (e) => l === e,
                                    placeholder: "Trial Type",
                                    serialize: (e) => String(e),
                                    select: (e) => s(e),
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
                (0, a.jsxs)("section", {
                    className: j.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Discount Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: j.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: j.input,
                                    options: n,
                                    isSelected: (e) => p === e,
                                    placeholder: "Discount Type",
                                    serialize: (e) => String(e),
                                    select: (e) => h(e),
                                    popoutLayerContext: f.O$,
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
                v.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: j.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: "heading-md/semibold",
                                children: "Existing Trial Offers",
                            }),
                            v.map((t) =>
                                (0, a.jsx)(
                                    O,
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
                I.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: j.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: "heading-md/semibold",
                                children: "Existing Discount Offers",
                            }),
                            I.map((e) =>
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
                    className: j.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Reverse Trial Entitlement",
                        }),
                        (0, a.jsxs)("div", {
                            className: j.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: j.input,
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
                                    select: (e) => Z(e),
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
                                        x.D,
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
