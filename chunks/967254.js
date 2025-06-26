s.d(e, { N: () => w }), s(953529), s(388685);
var n = s(255367),
    i = s(73800),
    a = s(120356),
    r = s.n(a),
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
    p = s(451284),
    f = s(613734),
    v = s(800530),
    N = s(981631),
    S = s(388032),
    b = s(202719);
function T(t) {
    for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(s).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(s, t).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                (n = s[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = n);
            });
    }
    return t;
}
let E = (t) => {
        let { status: e, onClick: s, opened: i, count: a } = t;
        return (0, n.jsxs)(c.P3F, {
            className: b.header,
            onClick: s,
            children: [
                (0, n.jsx)('div', {
                    className: b.headerIconWrapper,
                    children: (0, n.jsx)(c.aNP, {
                        size: 'md',
                        color: 'active' === e ? c.TVs.colors.INTERACTIVE_ACTIVE : c.TVs.colors.INTERACTIVE_MUTED
                    })
                }),
                (0, n.jsxs)('div', {
                    className: b.title,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            color: 'text-default',
                            children: 'active' === e ? S.intl.formatToPlainString(S.t.IeV2oa, { count: a.toString() }) : S.intl.formatToPlainString(S.t.fZAHBQ, { count: a.toString() })
                        }),
                        (0, n.jsx)(c.X6q, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: 'active' === e ? S.intl.string(S.t.XJ2YVV) : S.intl.string(S.t.SzGV0t)
                        })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: b.caret,
                    children: (0, n.jsx)(o.Z, {
                        width: 18,
                        height: 18,
                        direction: i ? o.Z.Directions.UP : o.Z.Directions.DOWN
                    })
                })
            ]
        });
    },
    O = () =>
        (0, n.jsxs)('div', {
            className: b.emptyState,
            children: [
                (0, n.jsxs)('div', {
                    className: b.iconContainer,
                    children: [
                        (0, n.jsx)('div', {
                            className: b.iconBackground,
                            children: (0, n.jsx)(c.rm8, {
                                size: 'md',
                                color: 'currentColor',
                                className: b.icon
                            })
                        }),
                        (0, n.jsx)(d.Z, { className: b.stars })
                    ]
                }),
                (0, n.jsx)(c.X6q, {
                    variant: 'heading-md/bold',
                    className: b.emptyStateText,
                    children: S.intl.string(S.t.reLFaW)
                }),
                (0, n.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    className: b.emptyStateSubtext,
                    children: S.intl.string(S.t.ERdH1t)
                })
            ]
        }),
    y = () =>
        (0, n.jsx)('div', {
            className: b.emptyState,
            children: (0, n.jsx)(c.Text, {
                variant: 'text-xs/normal',
                className: b.emptyStateSubtext,
                children: S.intl.string(S.t.RV3AXV)
            })
        }),
    I = (t) => {
        let { timestamp: e } = t;
        return (0, n.jsx)(c.Text, {
            variant: 'text-xs/normal',
            className: b.timestamp,
            children: (0, g.XX)(e)
        });
    },
    _ = () =>
        (0, n.jsx)(c.Text, {
            variant: 'text-xs/bold',
            className: b.newBadge,
            children: S.intl.string(S.t.QKMRCw)
        }),
    D = (t) => {
        let { classification: e } = t,
            { id: a, description: l } = e,
            o = m.default.extractTimestamp(a),
            d = (0, j.e)(e),
            u = i.useMemo(() => {
                var t, s, i, a, r;
                let o = {
                    description: l,
                    descriptionHook: (t) =>
                        (0, n.jsx)(c.Text, {
                            tag: 'span',
                            variant: 'heading-lg/bold',
                            children: t
                        })
                };
                return (0, g.FB)(e)
                    ? (null == e || null == (t = e.guild_metadata) ? void 0 : t.member_type) !== h.wO.OWNER
                        ? S.intl.format(S.t.rmpEPD, {
                              guildName: null == e || null == (i = e.guild_metadata) ? void 0 : i.name,
                              classification_type: o.description,
                              classificationHook: o.descriptionHook
                          })
                        : S.intl.format(
                              S.t.Lb0HVl,
                              ((a = T({}, o)),
                              (r = r = { guildName: null == e || null == (s = e.guild_metadata) ? void 0 : s.name }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
                                  : (function (t, e) {
                                        var s = Object.keys(t);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(t);
                                            s.push.apply(s, n);
                                        }
                                        return s;
                                    })(Object(r)).forEach(function (t) {
                                        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(r, t));
                                    }),
                              a)
                          )
                    : S.intl.format(S.t.QY4g5u, o);
            }, [e, l]);
        return (0, n.jsx)(
            c.P3F,
            {
                onClick: () => {
                    (0, c.ZDy)(async () => {
                        let { default: t } = await Promise.all([s.e('25292'), s.e('22878'), s.e('31978'), s.e('85372'), s.e('25183'), s.e('40694'), s.e('18831'), s.e('26179')]).then(s.bind(s, 41164));
                        return (e) =>
                            (0, n.jsx)(
                                t,
                                T(
                                    {
                                        classificationId: a,
                                        source: v.s.StandingTab
                                    },
                                    e
                                )
                            );
                    });
                },
                className: r()(b.itemDetail, { [b.itemDetailNew]: d }),
                children: (0, n.jsxs)('div', {
                    className: b.descriptionContainer,
                    children: [
                        d ? (0, n.jsx)(_, {}) : (0, n.jsx)(I, { timestamp: o }),
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-lg/normal',
                            children: u
                        })
                    ]
                })
            },
            a
        );
    },
    P = (t) => {
        let { status: e, classifications: s } = t,
            [a, r] = i.useState(!1),
            [o, d] = i.useState(3),
            m = (0, p.P)(),
            h = (0, l.e7)([x.Z], () => x.Z.getIsDsaEligible()),
            g = i.useMemo(() => s.slice(0, o), [s, o]);
        i.useEffect(() => {
            a &&
                u.default.track(N.rMx.SAFETY_HUB_ACTION, {
                    action: v.n0.ViewViolationsDropdown,
                    account_standing: m.state,
                    classification_ids: g.map((t) => Number(t.id)),
                    source: v.s.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: h
                });
        }, [a, m.state, g, h]);
        let j = s.length - g.length > 3 ? 3 : s.length - g.length;
        return (0, n.jsxs)('div', {
            className: b.dropdown,
            children: [
                (0, n.jsx)(E, {
                    status: e,
                    onClick: () => r((t) => !t),
                    opened: a,
                    count: s.length
                }),
                a &&
                    (0, n.jsxs)('div', {
                        className: b.items,
                        children: [
                            (0, n.jsx)(c.njP.Separator, {
                                style: {
                                    height: '1px',
                                    width: '100%'
                                }
                            }),
                            g.length > 0 && g.map((t) => (0, n.jsx)(D, { classification: t }, t.id)),
                            g.length < s.length &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(c.njP.Separator, {
                                            style: {
                                                height: '1px',
                                                width: '100%'
                                            }
                                        }),
                                        (0, n.jsx)('button', {
                                            className: b.paginationButton,
                                            onClick: () => d((t) => t + j),
                                            children: S.intl.format(S.t['9Ml56O'], { nextPageSize: j })
                                        })
                                    ]
                                }),
                            0 === g.length && 'active' === e && (0, n.jsx)(O, {}),
                            0 === g.length && 'expired' === e && (0, n.jsx)(y, {})
                        ]
                    })
            ]
        });
    },
    w = () => {
        let t = (0, f.y9)(),
            e = (0, f.KM)();
        return 0 === t.length && 0 === e.length
            ? null
            : (0, n.jsxs)('div', {
                  children: [
                      (0, n.jsx)(P, {
                          status: 'active',
                          classifications: t
                      }),
                      (0, n.jsx)(P, {
                          status: 'expired',
                          classifications: e
                      })
                  ]
              });
    };
