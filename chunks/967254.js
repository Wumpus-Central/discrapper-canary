n.d(e, {
    N: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    c = n(481060),
    o = n(259580),
    d = n(499033),
    u = n(626135),
    m = n(709054),
    x = n(531441),
    h = n(236289),
    g = n(788080),
    v = n(467432),
    j = n(451284),
    N = n(613734),
    f = n(800530),
    p = n(981631),
    S = n(388032),
    T = n(849963);
let I = (t) => {
        let { status: e, onClick: n, opened: a, count: s } = t;
        return (0, i.jsxs)(c.Clickable, {
            className: T.header,
            onClick: n,
            children: [
                (0, i.jsx)('div', {
                    className: T.headerIconWrapper,
                    children: (0, i.jsx)(c.WarningIcon, {
                        size: 'md',
                        color: 'active' === e ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_MUTED
                    })
                }),
                (0, i.jsxs)('div', {
                    className: T.title,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: 'heading-md/semibold',
                            color: 'text-normal',
                            children: 'active' === e ? S.intl.formatToPlainString(S.t.IeV2oa, { count: s.toString() }) : S.intl.formatToPlainString(S.t.fZAHBQ, { count: s.toString() })
                        }),
                        (0, i.jsx)(c.Heading, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: 'active' === e ? S.intl.string(S.t.XJ2YVV) : S.intl.string(S.t.SzGV0t)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: T.caret,
                    children: (0, i.jsx)(o.Z, {
                        width: 18,
                        height: 18,
                        direction: a ? o.Z.Directions.UP : o.Z.Directions.DOWN
                    })
                })
            ]
        });
    },
    E = () =>
        (0, i.jsxs)('div', {
            className: T.emptyState,
            children: [
                (0, i.jsxs)('div', {
                    className: T.iconContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: T.iconBackground,
                            children: (0, i.jsx)(c.TrophyIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: T.icon
                            })
                        }),
                        (0, i.jsx)(d.Z, { className: T.stars })
                    ]
                }),
                (0, i.jsx)(c.Heading, {
                    variant: 'heading-md/bold',
                    className: T.emptyStateText,
                    children: S.intl.string(S.t.reLFaW)
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    className: T.emptyStateSubtext,
                    children: S.intl.string(S.t.ERdH1t)
                })
            ]
        }),
    _ = () =>
        (0, i.jsx)('div', {
            className: T.emptyState,
            children: (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                className: T.emptyStateSubtext,
                children: S.intl.string(S.t.RV3AXV)
            })
        }),
    b = (t) => {
        let { timestamp: e } = t;
        return (0, i.jsx)(c.Text, {
            variant: 'text-xs/normal',
            className: T.timestamp,
            children: (0, g.XX)(e)
        });
    },
    C = () =>
        (0, i.jsx)(c.Text, {
            variant: 'text-xs/bold',
            className: T.newBadge,
            children: S.intl.string(S.t.QKMRCw)
        }),
    k = (t) => {
        let { classification: e } = t,
            { id: s, description: r } = e,
            o = m.default.extractTimestamp(s),
            d = (0, v.e)(e),
            u = a.useMemo(() => {
                var t, n, a;
                let s = {
                    description: r,
                    descriptionHook: (t) =>
                        (0, i.jsx)(c.Text, {
                            tag: 'span',
                            variant: 'heading-lg/bold',
                            children: t
                        })
                };
                if (!(0, g.FB)(e)) return S.intl.format(S.t.QY4g5u, s);
                return (null == e ? void 0 : null === (t = e.guild_metadata) || void 0 === t ? void 0 : t.member_type) === x.wO.OWNER
                    ? S.intl.format(S.t.Lb0HVl, {
                          ...s,
                          guildName: null == e ? void 0 : null === (n = e.guild_metadata) || void 0 === n ? void 0 : n.name
                      })
                    : S.intl.format(S.t.rmpEPD, {
                          guildName: null == e ? void 0 : null === (a = e.guild_metadata) || void 0 === a ? void 0 : a.name,
                          classification_type: s.description,
                          classificationHook: s.descriptionHook
                      });
            }, [e, r]);
        return (0, i.jsx)(
            c.Clickable,
            {
                onClick: () => {
                    (0, c.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e('72181'), n.e('46097'), n.e('25183'), n.e('18831'), n.e('56827')]).then(n.bind(n, 41164));
                        return (e) =>
                            (0, i.jsx)(t, {
                                classificationId: s,
                                source: f.s.StandingTab,
                                ...e
                            });
                    });
                },
                className: l()(T.itemDetail, { [T.itemDetailNew]: d }),
                children: (0, i.jsxs)('div', {
                    className: T.descriptionContainer,
                    children: [
                        d ? (0, i.jsx)(C, {}) : (0, i.jsx)(b, { timestamp: o }),
                        (0, i.jsx)(c.Heading, {
                            variant: 'heading-lg/normal',
                            children: u
                        })
                    ]
                })
            },
            s
        );
    },
    D = (t) => {
        let { status: e, classifications: n } = t,
            [s, l] = a.useState(!1),
            [o, d] = a.useState(3),
            m = (0, j.P)(),
            x = (0, r.e7)([h.Z], () => h.Z.getIsDsaEligible()),
            g = a.useMemo(() => n.slice(0, o), [n, o]);
        a.useEffect(() => {
            s &&
                u.default.track(p.rMx.SAFETY_HUB_ACTION, {
                    action: f.n0.ViewViolationsDropdown,
                    account_standing: m.state,
                    classification_ids: g.map((t) => Number(t.id)),
                    source: f.s.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: x
                });
        }, [s, m.state, g, x]);
        let v = n.length - g.length > 3 ? 3 : n.length - g.length;
        return (0, i.jsxs)('div', {
            className: T.dropdown,
            children: [
                (0, i.jsx)(I, {
                    status: e,
                    onClick: () => l((t) => !t),
                    opened: s,
                    count: n.length
                }),
                s &&
                    (0, i.jsxs)('div', {
                        className: T.items,
                        children: [
                            (0, i.jsx)(c.TabBar.Separator, {
                                style: {
                                    height: '1px',
                                    width: '100%'
                                }
                            }),
                            g.length > 0 && g.map((t) => (0, i.jsx)(k, { classification: t }, t.id)),
                            g.length < n.length &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(c.TabBar.Separator, {
                                            style: {
                                                height: '1px',
                                                width: '100%'
                                            }
                                        }),
                                        (0, i.jsx)('button', {
                                            className: T.paginationButton,
                                            onClick: () => d((t) => t + v),
                                            children: S.intl.format(S.t['9Ml56O'], { nextPageSize: v })
                                        })
                                    ]
                                }),
                            0 === g.length && 'active' === e && (0, i.jsx)(E, {}),
                            0 === g.length && 'expired' === e && (0, i.jsx)(_, {})
                        ]
                    })
            ]
        });
    },
    A = () => {
        let t = (0, N.y9)(),
            e = (0, N.KM)();
        return 0 === t.length && 0 === e.length
            ? null
            : (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(D, {
                          status: 'active',
                          classifications: t
                      }),
                      (0, i.jsx)(D, {
                          status: 'expired',
                          classifications: e
                      })
                  ]
              });
    };
