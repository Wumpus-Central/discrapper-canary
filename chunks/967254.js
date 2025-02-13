s.d(e, { N: () => R }), s(47120);
var i = s(200651),
    a = s(192379),
    n = s(120356),
    l = s.n(n),
    r = s(442837),
    c = s(481060),
    o = s(259580),
    d = s(499033),
    m = s(626135),
    u = s(709054),
    x = s(531441),
    h = s(236289),
    g = s(788080),
    j = s(467432),
    v = s(451284),
    N = s(613734),
    p = s(800530),
    f = s(981631),
    T = s(388032),
    S = s(979565);
let E = (t) => {
        let { status: e, onClick: s, opened: a, count: n } = t;
        return (0, i.jsxs)(c.P3F, {
            className: S.header,
            onClick: s,
            children: [
                (0, i.jsx)('div', {
                    className: S.headerIconWrapper,
                    children: (0, i.jsx)(c.aNP, {
                        size: 'md',
                        color: 'active' === e ? c.TVs.colors.INTERACTIVE_ACTIVE : c.TVs.colors.INTERACTIVE_MUTED
                    })
                }),
                (0, i.jsxs)('div', {
                    className: S.title,
                    children: [
                        (0, i.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            color: 'text-normal',
                            children: 'active' === e ? T.intl.formatToPlainString(T.t.IeV2oa, { count: n.toString() }) : T.intl.formatToPlainString(T.t.fZAHBQ, { count: n.toString() })
                        }),
                        (0, i.jsx)(c.X6q, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: 'active' === e ? T.intl.string(T.t.XJ2YVV) : T.intl.string(T.t.SzGV0t)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: S.caret,
                    children: (0, i.jsx)(o.Z, {
                        width: 18,
                        height: 18,
                        direction: a ? o.Z.Directions.UP : o.Z.Directions.DOWN
                    })
                })
            ]
        });
    },
    I = () =>
        (0, i.jsxs)('div', {
            className: S.emptyState,
            children: [
                (0, i.jsxs)('div', {
                    className: S.iconContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: S.iconBackground,
                            children: (0, i.jsx)(c.rm8, {
                                size: 'md',
                                color: 'currentColor',
                                className: S.icon
                            })
                        }),
                        (0, i.jsx)(d.Z, { className: S.stars })
                    ]
                }),
                (0, i.jsx)(c.X6q, {
                    variant: 'heading-md/bold',
                    className: S.emptyStateText,
                    children: T.intl.string(T.t.reLFaW)
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    className: S.emptyStateSubtext,
                    children: T.intl.string(T.t.ERdH1t)
                })
            ]
        }),
    _ = () =>
        (0, i.jsx)('div', {
            className: S.emptyState,
            children: (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                className: S.emptyStateSubtext,
                children: T.intl.string(T.t.RV3AXV)
            })
        }),
    b = (t) => {
        let { timestamp: e } = t;
        return (0, i.jsx)(c.Text, {
            variant: 'text-xs/normal',
            className: S.timestamp,
            children: (0, g.XX)(e)
        });
    },
    D = () =>
        (0, i.jsx)(c.Text, {
            variant: 'text-xs/bold',
            className: S.newBadge,
            children: T.intl.string(T.t.QKMRCw)
        }),
    k = (t) => {
        let { classification: e } = t,
            { id: n, description: r } = e,
            o = u.default.extractTimestamp(n),
            d = (0, j.e)(e),
            m = a.useMemo(() => {
                var t, s, a;
                let n = {
                    description: r,
                    descriptionHook: (t) =>
                        (0, i.jsx)(c.Text, {
                            tag: 'span',
                            variant: 'heading-lg/bold',
                            children: t
                        })
                };
                return (0, g.FB)(e)
                    ? (null == e ? void 0 : null === (t = e.guild_metadata) || void 0 === t ? void 0 : t.member_type) === x.wO.OWNER
                        ? T.intl.format(T.t.Lb0HVl, {
                              ...n,
                              guildName: null == e ? void 0 : null === (s = e.guild_metadata) || void 0 === s ? void 0 : s.name
                          })
                        : T.intl.format(T.t.rmpEPD, {
                              guildName: null == e ? void 0 : null === (a = e.guild_metadata) || void 0 === a ? void 0 : a.name,
                              classification_type: n.description,
                              classificationHook: n.descriptionHook
                          })
                    : T.intl.format(T.t.QY4g5u, n);
            }, [e, r]);
        return (0, i.jsx)(
            c.P3F,
            {
                onClick: () => {
                    (0, c.ZDy)(async () => {
                        let { default: t } = await Promise.all([s.e('25292'), s.e('22878'), s.e('95477'), s.e('11212'), s.e('40190'), s.e('46097'), s.e('25183'), s.e('18831'), s.e('87896')]).then(s.bind(s, 41164));
                        return (e) =>
                            (0, i.jsx)(t, {
                                classificationId: n,
                                source: p.s.StandingTab,
                                ...e
                            });
                    });
                },
                className: l()(S.itemDetail, { [S.itemDetailNew]: d }),
                children: (0, i.jsxs)('div', {
                    className: S.descriptionContainer,
                    children: [
                        d ? (0, i.jsx)(D, {}) : (0, i.jsx)(b, { timestamp: o }),
                        (0, i.jsx)(c.X6q, {
                            variant: 'heading-lg/normal',
                            children: m
                        })
                    ]
                })
            },
            n
        );
    },
    Z = (t) => {
        let { status: e, classifications: s } = t,
            [n, l] = a.useState(!1),
            [o, d] = a.useState(3),
            u = (0, v.P)(),
            x = (0, r.e7)([h.Z], () => h.Z.getIsDsaEligible()),
            g = a.useMemo(() => s.slice(0, o), [s, o]);
        a.useEffect(() => {
            n &&
                m.default.track(f.rMx.SAFETY_HUB_ACTION, {
                    action: p.n0.ViewViolationsDropdown,
                    account_standing: u.state,
                    classification_ids: g.map((t) => Number(t.id)),
                    source: p.s.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: x
                });
        }, [n, u.state, g, x]);
        let j = s.length - g.length > 3 ? 3 : s.length - g.length;
        return (0, i.jsxs)('div', {
            className: S.dropdown,
            children: [
                (0, i.jsx)(E, {
                    status: e,
                    onClick: () => l((t) => !t),
                    opened: n,
                    count: s.length
                }),
                n &&
                    (0, i.jsxs)('div', {
                        className: S.items,
                        children: [
                            (0, i.jsx)(c.njP.Separator, {
                                style: {
                                    height: '1px',
                                    width: '100%'
                                }
                            }),
                            g.length > 0 && g.map((t) => (0, i.jsx)(k, { classification: t }, t.id)),
                            g.length < s.length &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(c.njP.Separator, {
                                            style: {
                                                height: '1px',
                                                width: '100%'
                                            }
                                        }),
                                        (0, i.jsx)('button', {
                                            className: S.paginationButton,
                                            onClick: () => d((t) => t + j),
                                            children: T.intl.format(T.t['9Ml56O'], { nextPageSize: j })
                                        })
                                    ]
                                }),
                            0 === g.length && 'active' === e && (0, i.jsx)(I, {}),
                            0 === g.length && 'expired' === e && (0, i.jsx)(_, {})
                        ]
                    })
            ]
        });
    },
    R = () => {
        let t = (0, N.y9)(),
            e = (0, N.KM)();
        return 0 === t.length && 0 === e.length
            ? null
            : (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(Z, {
                          status: 'active',
                          classifications: t
                      }),
                      (0, i.jsx)(Z, {
                          status: 'expired',
                          classifications: e
                      })
                  ]
              });
    };
