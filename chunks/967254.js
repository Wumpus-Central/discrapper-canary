s.d(t, { N: () => w }), s(266796), s(47120);
var a = s(200651),
    n = s(192379),
    i = s(120356),
    r = s.n(i),
    l = s(442837),
    c = s(481060),
    o = s(259580),
    d = s(499033),
    u = s(626135),
    m = s(709054),
    h = s(531441),
    x = s(236289),
    g = s(788080),
    j = s(467432),
    N = s(451284),
    p = s(613734),
    v = s(800530),
    f = s(981631),
    S = s(388032),
    b = s(202719);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = s[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
let E = (e) => {
        let { status: t, onClick: s, opened: n, count: i } = e;
        return (0, a.jsxs)(c.P3F, {
            className: b.header,
            onClick: s,
            children: [
                (0, a.jsx)('div', {
                    className: b.headerIconWrapper,
                    children: (0, a.jsx)(c.aNP, {
                        size: 'md',
                        color: 'active' === t ? c.TVs.colors.INTERACTIVE_ACTIVE : c.TVs.colors.INTERACTIVE_MUTED
                    })
                }),
                (0, a.jsxs)('div', {
                    className: b.title,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            color: 'text-normal',
                            children: 'active' === t ? S.NW.formatToPlainString(S.t.IeV2oa, { count: i.toString() }) : S.NW.formatToPlainString(S.t.fZAHBQ, { count: i.toString() })
                        }),
                        (0, a.jsx)(c.X6q, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: 'active' === t ? S.NW.string(S.t.XJ2YVV) : S.NW.string(S.t.SzGV0t)
                        })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: b.caret,
                    children: (0, a.jsx)(o.Z, {
                        width: 18,
                        height: 18,
                        direction: n ? o.Z.Directions.UP : o.Z.Directions.DOWN
                    })
                })
            ]
        });
    },
    O = () =>
        (0, a.jsxs)('div', {
            className: b.emptyState,
            children: [
                (0, a.jsxs)('div', {
                    className: b.iconContainer,
                    children: [
                        (0, a.jsx)('div', {
                            className: b.iconBackground,
                            children: (0, a.jsx)(c.rm8, {
                                size: 'md',
                                color: 'currentColor',
                                className: b.icon
                            })
                        }),
                        (0, a.jsx)(d.Z, { className: b.stars })
                    ]
                }),
                (0, a.jsx)(c.X6q, {
                    variant: 'heading-md/bold',
                    className: b.emptyStateText,
                    children: S.NW.string(S.t.reLFaW)
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    className: b.emptyStateSubtext,
                    children: S.NW.string(S.t.ERdH1t)
                })
            ]
        }),
    y = () =>
        (0, a.jsx)('div', {
            className: b.emptyState,
            children: (0, a.jsx)(c.Text, {
                variant: 'text-xs/normal',
                className: b.emptyStateSubtext,
                children: S.NW.string(S.t.RV3AXV)
            })
        }),
    I = (e) => {
        let { timestamp: t } = e;
        return (0, a.jsx)(c.Text, {
            variant: 'text-xs/normal',
            className: b.timestamp,
            children: (0, g.XX)(t)
        });
    },
    _ = () =>
        (0, a.jsx)(c.Text, {
            variant: 'text-xs/bold',
            className: b.newBadge,
            children: S.NW.string(S.t.QKMRCw)
        }),
    D = (e) => {
        let { classification: t } = e,
            { id: i, description: l } = t,
            o = m.default.extractTimestamp(i),
            d = (0, j.e)(t),
            u = n.useMemo(() => {
                var e, s, n, i, r;
                let o = {
                    description: l,
                    descriptionHook: (e) =>
                        (0, a.jsx)(c.Text, {
                            tag: 'span',
                            variant: 'heading-lg/bold',
                            children: e
                        })
                };
                return (0, g.FB)(t)
                    ? (null == t || null == (e = t.guild_metadata) ? void 0 : e.member_type) !== h.wO.OWNER
                        ? S.NW.format(S.t.rmpEPD, {
                              guildName: null == t || null == (n = t.guild_metadata) ? void 0 : n.name,
                              classification_type: o.description,
                              classificationHook: o.descriptionHook
                          })
                        : S.NW.format(
                              S.t.Lb0HVl,
                              ((i = T({}, o)),
                              (r = r = { guildName: null == t || null == (s = t.guild_metadata) ? void 0 : s.name }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
                                  : (function (e, t) {
                                        var s = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var a = Object.getOwnPropertySymbols(e);
                                            s.push.apply(s, a);
                                        }
                                        return s;
                                    })(Object(r)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e));
                                    }),
                              i)
                          )
                    : S.NW.format(S.t.QY4g5u, o);
            }, [t, l]);
        return (0, a.jsx)(
            c.P3F,
            {
                onClick: () => {
                    (0, c.ZDy)(async () => {
                        let { default: e } = await Promise.all([s.e('25292'), s.e('95477'), s.e('11212'), s.e('22878'), s.e('35397'), s.e('46097'), s.e('25183'), s.e('18831'), s.e('74096')]).then(s.bind(s, 41164));
                        return (t) =>
                            (0, a.jsx)(
                                e,
                                T(
                                    {
                                        classificationId: i,
                                        source: v.s.StandingTab
                                    },
                                    t
                                )
                            );
                    });
                },
                className: r()(b.itemDetail, { [b.itemDetailNew]: d }),
                children: (0, a.jsxs)('div', {
                    className: b.descriptionContainer,
                    children: [
                        d ? (0, a.jsx)(_, {}) : (0, a.jsx)(I, { timestamp: o }),
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-lg/normal',
                            children: u
                        })
                    ]
                })
            },
            i
        );
    },
    P = (e) => {
        let { status: t, classifications: s } = e,
            [i, r] = n.useState(!1),
            [o, d] = n.useState(3),
            m = (0, N.P)(),
            h = (0, l.e7)([x.Z], () => x.Z.getIsDsaEligible()),
            g = n.useMemo(() => s.slice(0, o), [s, o]);
        n.useEffect(() => {
            i &&
                u.default.track(f.rMx.SAFETY_HUB_ACTION, {
                    action: v.n0.ViewViolationsDropdown,
                    account_standing: m.state,
                    classification_ids: g.map((e) => Number(e.id)),
                    source: v.s.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: h
                });
        }, [i, m.state, g, h]);
        let j = s.length - g.length > 3 ? 3 : s.length - g.length;
        return (0, a.jsxs)('div', {
            className: b.dropdown,
            children: [
                (0, a.jsx)(E, {
                    status: t,
                    onClick: () => r((e) => !e),
                    opened: i,
                    count: s.length
                }),
                i &&
                    (0, a.jsxs)('div', {
                        className: b.items,
                        children: [
                            (0, a.jsx)(c.njP.Separator, {
                                style: {
                                    height: '1px',
                                    width: '100%'
                                }
                            }),
                            g.length > 0 && g.map((e) => (0, a.jsx)(D, { classification: e }, e.id)),
                            g.length < s.length &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(c.njP.Separator, {
                                            style: {
                                                height: '1px',
                                                width: '100%'
                                            }
                                        }),
                                        (0, a.jsx)('button', {
                                            className: b.paginationButton,
                                            onClick: () => d((e) => e + j),
                                            children: S.NW.format(S.t['9Ml56O'], { nextPageSize: j })
                                        })
                                    ]
                                }),
                            0 === g.length && 'active' === t && (0, a.jsx)(O, {}),
                            0 === g.length && 'expired' === t && (0, a.jsx)(y, {})
                        ]
                    })
            ]
        });
    },
    w = () => {
        let e = (0, p.y9)(),
            t = (0, p.KM)();
        return 0 === e.length && 0 === t.length
            ? null
            : (0, a.jsxs)('div', {
                  children: [
                      (0, a.jsx)(P, {
                          status: 'active',
                          classifications: e
                      }),
                      (0, a.jsx)(P, {
                          status: 'expired',
                          classifications: t
                      })
                  ]
              });
    };
