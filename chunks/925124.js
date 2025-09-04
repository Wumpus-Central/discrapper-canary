n.d(t, { Z: () => A }), n(388685), n(642613);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(544891),
    c = n(704215),
    d = n(481060),
    u = n(937579),
    m = n(29920),
    x = n(219333),
    h = n(675478),
    p = n(78839),
    f = n(431),
    v = n(572004),
    b = n(74538),
    j = n(604776),
    g = n(246992),
    _ = n(232867),
    y = n(981631),
    C = n(474936),
    N = n(304426),
    E = n(711322),
    O = n(451429);
let T = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: y.ANM.USER_OFFER_IDS,
                rejectWithError: !0,
            });
            return e;
        } catch (e) {
            return [];
        }
    },
    S = async (e, t) => {
        try {
            await o.tn.post({
                url: y.ANM.CREATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, u.Tf)();
        }
    },
    P = async (e, t) => {
        try {
            await o.tn.del({
                url: y.ANM.UPDATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, u.Tf)();
        }
    },
    w = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: y.ANM.USER_OFFERS,
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
    k = async () => {
        try {
            await o.tn.del({
                url: y.ANM.USER_OFFERS,
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await f.Z.forceReset(), await (0, u.Tf)();
        }
    },
    I = async (e) => {
        await o.tn.post({
            url: y.ANM.CREATE_REVERSE_TRIAL,
            body: { ends_at: e },
            rejectWithError: !0,
        });
    };
function R(e) {
    var t, n, l, s, c;
    let { offer: m, offerOptions: x, forceRefetch: h } = e,
        [p, f] = r.useState(!1),
        [j, g] = r.useState(!1),
        [_, N] = r.useState(!1),
        [O, T] = r.useState(!1);
    r.useEffect(() => {
        _ && T(!0);
        let e = setTimeout(() => {
            T(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [_]);
    let { id: S, expires_at: w, redeemed_at: k, trial_id: I, subscription_trial: R, referrer: Z } = m,
        A =
            null !=
            (n =
                null ==
                (t = x.find((e) => {
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
        M = (null == R ? void 0 : R.sku_id) === C.Si.TIER_0,
        F = async () => {
            N(!0), D ? await U({ expiresAt: null }) : await (0, u.ab)(m), h(), N(!1);
        },
        U = async (e) => {
            N(!0);
            try {
                await o.tn.patch({
                    url: y.ANM.UPDATE_USER_OFFER(S, "trial"),
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
                h(), N(!1);
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
        if (j) {
            let e = setTimeout(() => {
                g(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [p, j]);
    let z = "Active";
    return (
        D && (z = "Acked"),
        L && (z = "Expired"),
        (0, a.jsxs)("div", {
            className: i()(E.card, M ? E.gradientWrapperTier0 : E.gradientWrapperTier2),
            children: [
                (0, a.jsx)("div", {
                    className: i()(E.row, E.nameRow),
                    children: (0, a.jsx)(d.X6q, {
                        variant: "heading-lg/semibold",
                        color: "always-white",
                        children: A,
                    }),
                }),
                (0, a.jsxs)(d.P3F, {
                    className: i()(E.row, E.idRow),
                    onClick: () => {
                        (0, v.JG)(S, () => f(!0));
                    },
                    children: [
                        (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Offer: ", S],
                        }),
                        p
                            ? (0, a.jsx)(d.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: E.icon,
                              })
                            : (0, a.jsx)(d.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: E.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(d.P3F, {
                    className: i()(E.row, E.idRow),
                    onClick: () => {
                        (0, v.JG)(I, () => g(!0));
                    },
                    children: [
                        (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial: ", I],
                        }),
                        j
                            ? (0, a.jsx)(d.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: E.icon,
                              })
                            : (0, a.jsx)(d.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: E.icon,
                              }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: E.row,
                    children: (0, a.jsxs)(d.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, b.if)({
                                intervalType: null != (l = null == R ? void 0 : R.interval) ? l : C.rV.MONTH,
                                intervalCount: null != (s = null == R ? void 0 : R.interval_count) ? s : 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: E.row,
                    children: [
                        (0, a.jsx)(d.Text, {
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
                    className: E.row,
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Referrer ID:",
                        }),
                        (0, a.jsx)("input", {
                            type: "text",
                            value: null != (c = null == Z ? void 0 : Z.id) ? c : "",
                            onChange: (e) => U({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: E.badgeContainer,
                    children: [
                        (0, a.jsx)(d.P3F, {
                            onClick: F,
                            className: i()(E.badge, E.clickable, {
                                [E.acked]: D,
                                [E.expired]: L,
                            }),
                            children: (0, a.jsx)(d.Text, {
                                variant: "eyebrow",
                                color: "Acked" === z ? void 0 : "always-white",
                                children: z,
                            }),
                        }),
                        null != k &&
                            (0, a.jsx)("div", {
                                className: i()(E.badge, E.redeemed),
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
                        N(!0), await P(S, "trial"), h(), N(!1);
                    },
                    children: (0, a.jsx)(d.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: i()(E.icon, E.trashIcon),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: i()(E.loadingContainer, { [E.isLoading]: _ || O }),
                    children: (0, a.jsx)(d.$jN, {}),
                }),
            ],
        })
    );
}
function Z(e) {
    var t, n;
    let { offer: l, offerOptions: s, forceRefetch: c } = e,
        [m, x] = r.useState(!1),
        [h, p] = r.useState(!1),
        [f, b] = r.useState(!1),
        [j, g] = r.useState(!1);
    r.useEffect(() => {
        f && g(!0);
        let e = setTimeout(() => {
            g(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [f]);
    let { id: _, expires_at: C, applied_at: N, discount_id: O, discount: T } = l,
        S =
            null !=
            (n =
                null ==
                (t = s.find((e) => {
                    let { value: t } = e;
                    return t === O;
                }))
                    ? void 0
                    : t.label)
                ? n
                : "Unknown",
        w = null != C,
        k = null != C && new Date(C).getTime() < Date.now(),
        I = async () => {
            b(!0), w ? await R({ expiresAt: null }) : await (0, u.ab)(void 0, l), c(), b(!1);
        },
        R = async (e) => {
            let { expiresAt: t } = e;
            b(!0);
            try {
                await o.tn.patch({
                    url: y.ANM.UPDATE_USER_OFFER(_, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                c(), b(!1);
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
        if (h) {
            let e = setTimeout(() => {
                p(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [m, h]);
    let Z = "Active";
    return (
        k && (Z = "Expired"),
        w && (Z = "Acked"),
        (0, a.jsxs)("div", {
            className: i()(E.card, E.discount),
            children: [
                (0, a.jsxs)("div", {
                    className: i()(E.row, E.nameRow),
                    children: [
                        (0, a.jsx)(d.X6q, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            children: S,
                        }),
                        (0, a.jsx)(d.P3F, {
                            onClick: async () => {
                                b(!0), await P(_, "discount"), c(), b(!1);
                            },
                            children: (0, a.jsx)(d.XHJ, {
                                size: "md",
                                color: "currentColor",
                                className: i()(E.icon, E.trashIcon),
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)(d.P3F, {
                    className: i()(E.row, E.idRow),
                    onClick: () => {
                        (0, v.JG)(_, () => x(!0));
                    },
                    children: [
                        (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Offer: ", _],
                        }),
                        m
                            ? (0, a.jsx)(d.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: i()(E.icon, E.noMargin),
                              })
                            : (0, a.jsx)(d.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: E.icon,
                              }),
                    ],
                }),
                (0, a.jsxs)(d.P3F, {
                    className: i()(E.row, E.idRow),
                    onClick: () => {
                        (0, v.JG)(O, () => p(!0));
                    },
                    children: [
                        (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Discount: ", O],
                        }),
                        h
                            ? (0, a.jsx)(d.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: i()(E.icon, E.noMargin),
                              })
                            : (0, a.jsx)(d.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: E.icon,
                              }),
                    ],
                }),
                (null == T ? void 0 : T.amount) != null &&
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [T.amount, "% off"],
                        }),
                    }),
                (0, a.jsxs)("div", {
                    className: E.row,
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Expires:",
                        }),
                        (0, a.jsx)("input", {
                            type: "date",
                            value: null != C ? C.substring(0, 10) : "",
                            onChange: (e) => R({ expiresAt: e.target.value }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: E.badgeContainer,
                    children: [
                        (0, a.jsx)(d.P3F, {
                            onClick: I,
                            className: i()(E.badge, E.clickable, {
                                [E.acked]: w,
                                [E.expired]: k,
                            }),
                            children: (0, a.jsx)(d.Text, {
                                variant: "eyebrow",
                                color: "Acked" === Z ? void 0 : "always-white",
                                children: Z,
                            }),
                        }),
                        null != N &&
                            (0, a.jsx)("div", {
                                className: i()(E.badge, E.redeemed),
                                children: (0, a.jsx)(d.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: i()(E.loadingContainer, { [E.isLoading]: f || j }),
                    children: (0, a.jsx)(d.$jN, {}),
                }),
            ],
        })
    );
}
function A() {
    let [e, t] = r.useState([]),
        [n, l] = r.useState([]),
        [i, o] = r.useState(),
        [v, b] = r.useState(),
        [C, P] = r.useState([]),
        [A, D] = r.useState([]),
        [L, M] = r.useState(!0),
        [F, U] = r.useState(10080),
        [z, B] = r.useState([]),
        { entitlements: G, deleteFractionalPremium: V, refreshEntitlementList: H } = (0, _.m)();
    r.useEffect(() => {
        H();
    }, [H]),
        r.useEffect(() => {
            B(G.filter((e) => e.sourceType === y.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [G]),
        r.useEffect(() => {
            (0 === e.length || 0 === n.length || L) &&
                T().then((e) => {
                    let n = Object.keys(e.trial).map((t) => ({
                            label: t,
                            value: e.trial[t],
                        })),
                        a = Object.keys(e.discount).map((t) => ({
                            label: t,
                            value: e.discount[t],
                        }));
                    t(n), l(a), null == i && o(n[0].value), null == v && b(a[0].value);
                });
        }, [e, n, i, v, L]),
        r.useEffect(() => {
            L &&
                (M(!1),
                f.Z.forceReset(),
                (0, u.Tf)(),
                w().then((e) => {
                    P(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        D(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [L]);
    let W = async () => {
            null != i && (await S(i, "trial"), M(!0));
        },
        K = async () => {
            null != v && (await S(v, "discount"), M(!0));
        },
        X = async () => {
            await k(), M(!0);
        },
        Y = async () => {
            let e = new Date(Date.now() + 60 * F * 1000).toISOString();
            await I(e), H();
        },
        q = (0, s.e7)([p.Z], () => p.Z.getPremiumSubscription()),
        J = async () => {
            if (!1 === (0, x.W)({ campaignID: N.C })) {
                var e;
                await (0, m.Ul)({ subscriptionId: null != (e = null == q ? void 0 : q.id) ? e : "" });
            }
        };
    return (0, a.jsx)(d.zJl, {
        className: O.panel,
        children: (0, a.jsxs)("div", {
            className: E.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: E.section,
                    children: [
                        (0, a.jsx)(d.X6q, {
                            variant: "heading-md/semibold",
                            children: "Utils",
                        }),
                        (0, a.jsxs)("div", {
                            className: E.buttons,
                            children: [
                                (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: X,
                                }),
                                (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, h.w9)(c.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, h.Z1)(c.z.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Refresh DevTools",
                                    onClick: () => M(!0),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: E.section,
                    children: [
                        (0, a.jsx)(d.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Trial Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: E.inputRow,
                            children: [
                                (0, a.jsx)(d.PhF, {
                                    className: E.input,
                                    options: e,
                                    isSelected: (e) => i === e,
                                    placeholder: "Trial Type",
                                    serialize: (e) => String(e),
                                    select: (e) => o(e),
                                    popoutLayerContext: g.O$,
                                }),
                                (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: W,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: E.section,
                    children: [
                        (0, a.jsx)(d.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Discount Offer",
                        }),
                        (0, a.jsxs)("div", {
                            className: E.inputRow,
                            children: [
                                (0, a.jsx)(d.PhF, {
                                    className: E.input,
                                    options: n,
                                    isSelected: (e) => v === e,
                                    placeholder: "Discount Type",
                                    serialize: (e) => String(e),
                                    select: (e) => b(e),
                                    popoutLayerContext: g.O$,
                                }),
                                (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: K,
                                }),
                            ],
                        }),
                    ],
                }),
                C.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: E.section,
                        children: [
                            (0, a.jsx)(d.X6q, {
                                variant: "heading-md/semibold",
                                children: "Existing Trial Offers",
                            }),
                            C.map((t) =>
                                (0, a.jsx)(
                                    R,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => M(!0),
                                    },
                                    t.id,
                                ),
                            ),
                        ],
                    }),
                A.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: E.section,
                        children: [
                            (0, a.jsx)(d.X6q, {
                                variant: "heading-md/semibold",
                                children: "Existing Discount Offers",
                            }),
                            A.map((e) =>
                                (0, a.jsx)(
                                    Z,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => M(!0),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                (0, a.jsxs)("section", {
                    className: E.section,
                    children: [
                        (0, a.jsx)(d.X6q, {
                            variant: "heading-md/semibold",
                            children: "Create a Reverse Trial Entitlement",
                        }),
                        (0, a.jsxs)("div", {
                            className: E.inputRow,
                            children: [
                                (0, a.jsx)(d.PhF, {
                                    className: E.input,
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
                                    isSelected: (e) => F === e,
                                    placeholder: "Reverse Trial Length",
                                    serialize: (e) => String(e),
                                    select: (e) => U(e),
                                    popoutLayerContext: g.O$,
                                }),
                                (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: Y,
                                }),
                            ],
                        }),
                    ],
                }),
                z.length > 0 &&
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(d.Text, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, a.jsx)("div", {
                                children: z.map((e) =>
                                    (0, a.jsx)(
                                        j.D,
                                        {
                                            entitlement: e,
                                            active: !0,
                                            onDelete: () => V(e.id),
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
                            (0, a.jsx)(d.Text, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "September 2025 MM Reward Grant",
                            }),
                            (0, a.jsx)(d.zxk, {
                                variant: "primary",
                                text: "Grant Subscription Reward",
                                onClick: J,
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
