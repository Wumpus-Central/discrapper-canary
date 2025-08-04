(a.d(t, { Z: () => I }), a(388685), a(642613));
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
    p = a(74538),
    h = a(604776),
    b = a(246992),
    f = a(232867),
    v = a(981631),
    g = a(474936),
    j = a(546147),
    _ = a(616257);
let y = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: v.ANM.USER_OFFER_IDS,
                rejectWithError: !0
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
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await (0, d.T)();
        }
    },
    O = async (e, t) => {
        try {
            await s.tn.del({
                url: v.ANM.UPDATE_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await (0, d.T)();
        }
    },
    T = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: v.ANM.USER_OFFERS,
                rejectWithError: !0
            });
            return e;
        } catch (e) {
            return {
                trial: [],
                discount: []
            };
        }
    },
    N = async () => {
        try {
            await s.tn.del({
                url: v.ANM.USER_OFFERS,
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            (await m.Z.forceReset(), await (0, d.T)());
        }
    },
    E = async (e) => {
        await s.tn.post({
            url: v.ANM.CREATE_REVERSE_TRIAL,
            body: { ends_at: e },
            rejectWithError: !0
        });
    };
function S(e) {
    var t, a, l, o, u;
    let { offer: m, offerOptions: h, forceRefetch: b } = e,
        [f, _] = r.useState(!1),
        [y, C] = r.useState(!1),
        [T, N] = r.useState(!1),
        [E, S] = r.useState(!1);
    r.useEffect(() => {
        T && S(!0);
        let e = setTimeout(() => {
            S(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [T]);
    let { id: P, expires_at: I, redeemed_at: w, trial_id: R, subscription_trial: k, referrer: A } = m,
        Z =
            null !=
            (a =
                null ==
                (t = h.find((e) => {
                    let { value: t } = e;
                    return t === R;
                }))
                    ? void 0
                    : t.label)
                ? a
                : 'Unknown';
    null != A && (Z = ''.concat(Z, ' from @').concat(A.username));
    let D = null != I,
        L = null != I && new Date(I).getTime() < Date.now(),
        M = (null == k ? void 0 : k.sku_id) === g.Si.TIER_0,
        U = async () => {
            (N(!0), D ? await F({ expiresAt: null }) : await (0, d.a)(m), b(), N(!1));
        },
        F = async (e) => {
            N(!0);
            try {
                await s.tn.patch({
                    url: v.ANM.UPDATE_USER_OFFER(P, 'trial'),
                    body: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    ((n = a[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n));
                                }));
                        }
                        return e;
                    })({}, 'expiresAt' in e && { expires_at: e.expiresAt }, 'referrerId' in e && { referrer_id: e.referrerId }),
                    rejectWithError: !0
                });
            } finally {
                (b(), N(!1));
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
    let B = 'Active';
    return (
        D && (B = 'Acked'),
        L && (B = 'Expired'),
        (0, n.jsxs)('div', {
            className: i()(j.card, M ? j.gradientWrapperTier0 : j.gradientWrapperTier2),
            children: [
                (0, n.jsx)('div', {
                    className: i()(j.row, j.nameRow),
                    children: (0, n.jsx)(c.X6q, {
                        variant: 'heading-lg/semibold',
                        color: 'always-white',
                        children: Z
                    })
                }),
                (0, n.jsxs)(c.P3F, {
                    className: i()(j.row, j.idRow),
                    onClick: () => {
                        (0, x.JG)(P, () => _(!0));
                    },
                    children: [
                        (0, n.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', P]
                        }),
                        f
                            ? (0, n.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: j.icon
                              })
                            : (0, n.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: j.icon
                              })
                    ]
                }),
                (0, n.jsxs)(c.P3F, {
                    className: i()(j.row, j.idRow),
                    onClick: () => {
                        (0, x.JG)(R, () => C(!0));
                    },
                    children: [
                        (0, n.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', R]
                        }),
                        y
                            ? (0, n.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: j.icon
                              })
                            : (0, n.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: j.icon
                              })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: j.row,
                    children: (0, n.jsxs)(c.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: [
                            'Trial Length:',
                            ' ',
                            (0, p.if)({
                                intervalType: null != (l = null == k ? void 0 : k.interval) ? l : g.rV.MONTH,
                                intervalCount: null != (o = null == k ? void 0 : k.interval_count) ? o : 1,
                                capitalize: !1
                            })
                        ]
                    })
                }),
                (0, n.jsxs)('div', {
                    className: j.row,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: 'Expires:'
                        }),
                        (0, n.jsx)('input', {
                            type: 'date',
                            value: null != I ? I.substring(0, 10) : '',
                            onChange: (e) => F({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: j.row,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: 'Referrer ID:'
                        }),
                        (0, n.jsx)('input', {
                            type: 'text',
                            value: null != (u = null == A ? void 0 : A.id) ? u : '',
                            onChange: (e) => F({ referrerId: e.target.value })
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: j.badgeContainer,
                    children: [
                        (0, n.jsx)(c.P3F, {
                            onClick: U,
                            className: i()(j.badge, j.clickable, {
                                [j.acked]: D,
                                [j.expired]: L
                            }),
                            children: (0, n.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acked' === B ? void 0 : 'always-white',
                                children: B
                            })
                        }),
                        null != w &&
                            (0, n.jsx)('div', {
                                className: i()(j.badge, j.redeemed),
                                children: (0, n.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Redeemed'
                                })
                            })
                    ]
                }),
                (0, n.jsx)(c.P3F, {
                    onClick: async () => {
                        (N(!0), await O(P, 'trial'), b(), N(!1));
                    },
                    children: (0, n.jsx)(c.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: i()(j.icon, j.trashIcon)
                    })
                }),
                (0, n.jsx)('div', {
                    className: i()(j.loadingContainer, { [j.isLoading]: T || E }),
                    children: (0, n.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function P(e) {
    var t, a;
    let { offer: l, offerOptions: o, forceRefetch: u } = e,
        [m, p] = r.useState(!1),
        [h, b] = r.useState(!1),
        [f, g] = r.useState(!1),
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
    let { id: C, expires_at: T, applied_at: N, discount_id: E, discount: S } = l,
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
                : 'Unknown',
        I = null != T,
        w = null != T && new Date(T).getTime() < Date.now(),
        R = async () => {
            (g(!0), I ? await k({ expiresAt: null }) : await (0, d.a)(void 0, l), u(), g(!1));
        },
        k = async (e) => {
            let { expiresAt: t } = e;
            g(!0);
            try {
                await s.tn.patch({
                    url: v.ANM.UPDATE_USER_OFFER(C, 'discount'),
                    body: { expires_at: t },
                    rejectWithError: !0
                });
            } finally {
                (u(), g(!1));
            }
        };
    r.useEffect(() => {
        if (m) {
            let e = setTimeout(() => {
                p(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (h) {
            let e = setTimeout(() => {
                b(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [m, h]);
    let A = 'Active';
    return (
        w && (A = 'Expired'),
        I && (A = 'Acked'),
        (0, n.jsxs)('div', {
            className: i()(j.card, j.discount),
            children: [
                (0, n.jsxs)('div', {
                    className: i()(j.row, j.nameRow),
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'text-default',
                            children: P
                        }),
                        (0, n.jsx)(c.P3F, {
                            onClick: async () => {
                                (g(!0), await O(C, 'discount'), u(), g(!1));
                            },
                            children: (0, n.jsx)(c.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(j.icon, j.trashIcon)
                            })
                        })
                    ]
                }),
                (0, n.jsxs)(c.P3F, {
                    className: i()(j.row, j.idRow),
                    onClick: () => {
                        (0, x.JG)(C, () => p(!0));
                    },
                    children: [
                        (0, n.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-default',
                            children: ['Offer: ', C]
                        }),
                        m
                            ? (0, n.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(j.icon, j.noMargin)
                              })
                            : (0, n.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: j.icon
                              })
                    ]
                }),
                (0, n.jsxs)(c.P3F, {
                    className: i()(j.row, j.idRow),
                    onClick: () => {
                        (0, x.JG)(E, () => b(!0));
                    },
                    children: [
                        (0, n.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-default',
                            children: ['Discount: ', E]
                        }),
                        h
                            ? (0, n.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(j.icon, j.noMargin)
                              })
                            : (0, n.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: j.icon
                              })
                    ]
                }),
                (null == S ? void 0 : S.amount) != null &&
                    (0, n.jsx)('div', {
                        children: (0, n.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-default',
                            children: [S.amount, '% off']
                        })
                    }),
                (0, n.jsxs)('div', {
                    className: j.row,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: 'Expires:'
                        }),
                        (0, n.jsx)('input', {
                            type: 'date',
                            value: null != T ? T.substring(0, 10) : '',
                            onChange: (e) => k({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: j.badgeContainer,
                    children: [
                        (0, n.jsx)(c.P3F, {
                            onClick: R,
                            className: i()(j.badge, j.clickable, {
                                [j.acked]: I,
                                [j.expired]: w
                            }),
                            children: (0, n.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acked' === A ? void 0 : 'always-white',
                                children: A
                            })
                        }),
                        null != N &&
                            (0, n.jsx)('div', {
                                className: i()(j.badge, j.redeemed),
                                children: (0, n.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Applied'
                                })
                            })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: i()(j.loadingContainer, { [j.isLoading]: f || _ }),
                    children: (0, n.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function I() {
    let [e, t] = r.useState([]),
        [a, l] = r.useState([]),
        [i, s] = r.useState(),
        [x, p] = r.useState(),
        [g, O] = r.useState([]),
        [I, w] = r.useState([]),
        [R, k] = r.useState(!0),
        [A, Z] = r.useState(10080),
        [D, L] = r.useState([]),
        { entitlements: M, deleteFractionalPremium: U, refreshEntitlementList: F } = (0, f.m)();
    r.useEffect(() => {
        F();
    }, [F]);
    let B = (e) => e.filter((e) => e.sourceType === v.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date());
    (r.useEffect(() => {
        L(B(M));
    }, [M]),
        r.useEffect(() => {
            (0 === e.length || 0 === a.length || R) &&
                y().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({
                            label: t,
                            value: e.trial[t]
                        })),
                        n = Object.keys(e.discount).map((t) => ({
                            label: t,
                            value: e.discount[t]
                        }));
                    (t(a), l(n), null == i && s(a[0].value), null == x && p(n[0].value));
                });
        }, [e, a, i, x, R]),
        r.useEffect(() => {
            R &&
                (k(!1),
                m.Z.forceReset(),
                (0, d.T)(),
                T().then((e) => {
                    (O(e.trial.sort((e, t) => e.id.localeCompare(t.id))), w(e.discount.sort((e, t) => e.id.localeCompare(t.id))));
                }));
        }, [R]));
    let z = async () => {
            null != i && (await C(i, 'trial'), k(!0));
        },
        G = async () => {
            null != x && (await C(x, 'discount'), k(!0));
        },
        V = async () => {
            (await N(), k(!0));
        },
        H = async () => {
            let e = new Date(Date.now() + 60 * A * 1000).toISOString();
            (await E(e), F());
        };
    return (0, n.jsx)(c.zJl, {
        className: _.panel,
        children: (0, n.jsxs)('div', {
            className: j.panelInner,
            children: [
                (0, n.jsxs)('section', {
                    className: j.section,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Utils'
                        }),
                        (0, n.jsxs)('div', {
                            className: j.buttons,
                            children: [
                                (0, n.jsx)(c.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: 'Clear all User Offers',
                                    onClick: V
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: 'Clear Mobile Trials DismissibleContent',
                                    onClick: () => (0, u.w9)(o.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE)
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: 'Clear Offer Nagbar DismissibleContent',
                                    onClick: () => (0, u.Z1)(o.z.NAGBAR_NOTICE_OFFER_EXPIRING)
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: 'Refresh DevTools',
                                    onClick: () => k(!0)
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsxs)('section', {
                    className: j.section,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Trial Offer'
                        }),
                        (0, n.jsxs)('div', {
                            className: j.inputRow,
                            children: [
                                (0, n.jsx)(c.PhF, {
                                    className: j.input,
                                    options: e,
                                    isSelected: (e) => i === e,
                                    placeholder: 'Trial Type',
                                    serialize: (e) => String(e),
                                    select: (e) => s(e),
                                    popoutLayerContext: b.O$
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Create',
                                    onClick: z
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsxs)('section', {
                    className: j.section,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Discount Offer'
                        }),
                        (0, n.jsxs)('div', {
                            className: j.inputRow,
                            children: [
                                (0, n.jsx)(c.PhF, {
                                    className: j.input,
                                    options: a,
                                    isSelected: (e) => x === e,
                                    placeholder: 'Discount Type',
                                    serialize: (e) => String(e),
                                    select: (e) => p(e),
                                    popoutLayerContext: b.O$
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Create',
                                    onClick: G
                                })
                            ]
                        })
                    ]
                }),
                g.length > 0 &&
                    (0, n.jsxs)('section', {
                        className: j.section,
                        children: [
                            (0, n.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            g.map((t) =>
                                (0, n.jsx)(
                                    S,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => k(!0)
                                    },
                                    t.id
                                )
                            )
                        ]
                    }),
                I.length > 0 &&
                    (0, n.jsxs)('section', {
                        className: j.section,
                        children: [
                            (0, n.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Discount Offers'
                            }),
                            I.map((e) =>
                                (0, n.jsx)(
                                    P,
                                    {
                                        offer: e,
                                        offerOptions: a,
                                        forceRefetch: () => k(!0)
                                    },
                                    e.id
                                )
                            )
                        ]
                    }),
                (0, n.jsxs)('section', {
                    className: j.section,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Reverse Trial Entitlement'
                        }),
                        (0, n.jsxs)('div', {
                            className: j.inputRow,
                            children: [
                                (0, n.jsx)(c.PhF, {
                                    className: j.input,
                                    options: [
                                        {
                                            label: '5 minutes',
                                            value: 5
                                        },
                                        {
                                            label: '1 hour',
                                            value: 60
                                        },
                                        {
                                            label: '1 day',
                                            value: 1440
                                        },
                                        {
                                            label: '1 week',
                                            value: 10080
                                        }
                                    ],
                                    isSelected: (e) => A === e,
                                    placeholder: 'Reverse Trial Length',
                                    serialize: (e) => String(e),
                                    select: (e) => Z(e),
                                    popoutLayerContext: b.O$
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Create',
                                    onClick: H
                                })
                            ]
                        })
                    ]
                }),
                D.length > 0 &&
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)(c.Text, {
                                style: { marginTop: '15px' },
                                variant: 'text-md/bold',
                                children: 'Active reverse trial'
                            }),
                            (0, n.jsx)('div', {
                                children: D.map((e) =>
                                    (0, n.jsx)(
                                        h.D,
                                        {
                                            entitlement: e,
                                            active: !0,
                                            onDelete: () => U(e.id)
                                        },
                                        e.id
                                    )
                                )
                            })
                        ]
                    })
            ]
        })
    });
}
