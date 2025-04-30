n.d(e, { N: () => w }), n(953529), n(388685);
var s = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    l = n(442837),
    c = n(481060),
    o = n(259580),
    d = n(499033),
    u = n(626135),
    m = n(709054),
    h = n(531441),
    x = n(236289),
    g = n(788080),
    j = n(467432),
    p = n(451284),
    v = n(613734),
    f = n(800530),
    N = n(981631),
    S = n(388032),
    b = n(202719);
function T(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            s = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            s.forEach(function (e) {
                var s;
                (s = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = s);
            });
    }
    return t;
}
let E = (t) => {
        let { status: e, onClick: n, opened: i, count: a } = t;
        return (0, s.jsxs)(c.P3F, {
            className: b.header,
            onClick: n,
            children: [
                (0, s.jsx)('div', {
                    className: b.headerIconWrapper,
                    children: (0, s.jsx)(c.aNP, {
                        size: 'md',
                        color: 'active' === e ? c.TVs.colors.INTERACTIVE_ACTIVE : c.TVs.colors.INTERACTIVE_MUTED
                    })
                }),
                (0, s.jsxs)('div', {
                    className: b.title,
                    children: [
                        (0, s.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            color: 'text-normal',
                            children: 'active' === e ? S.intl.formatToPlainString(S.t.IeV2oa, { count: a.toString() }) : S.intl.formatToPlainString(S.t.fZAHBQ, { count: a.toString() })
                        }),
                        (0, s.jsx)(c.X6q, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: 'active' === e ? S.intl.string(S.t.XJ2YVV) : S.intl.string(S.t.SzGV0t)
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: b.caret,
                    children: (0, s.jsx)(o.Z, {
                        width: 18,
                        height: 18,
                        direction: i ? o.Z.Directions.UP : o.Z.Directions.DOWN
                    })
                })
            ]
        });
    },
    O = () =>
        (0, s.jsxs)('div', {
            className: b.emptyState,
            children: [
                (0, s.jsxs)('div', {
                    className: b.iconContainer,
                    children: [
                        (0, s.jsx)('div', {
                            className: b.iconBackground,
                            children: (0, s.jsx)(c.rm8, {
                                size: 'md',
                                color: 'currentColor',
                                className: b.icon
                            })
                        }),
                        (0, s.jsx)(d.Z, { className: b.stars })
                    ]
                }),
                (0, s.jsx)(c.X6q, {
                    variant: 'heading-md/bold',
                    className: b.emptyStateText,
                    children: S.intl.string(S.t.reLFaW)
                }),
                (0, s.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    className: b.emptyStateSubtext,
                    children: S.intl.string(S.t.ERdH1t)
                })
            ]
        }),
    y = () =>
        (0, s.jsx)('div', {
            className: b.emptyState,
            children: (0, s.jsx)(c.Text, {
                variant: 'text-xs/normal',
                className: b.emptyStateSubtext,
                children: S.intl.string(S.t.RV3AXV)
            })
        }),
    I = (t) => {
        let { timestamp: e } = t;
        return (0, s.jsx)(c.Text, {
            variant: 'text-xs/normal',
            className: b.timestamp,
            children: (0, g.XX)(e)
        });
    },
    _ = () =>
        (0, s.jsx)(c.Text, {
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
                var t, n, i, a, r;
                let o = {
                    description: l,
                    descriptionHook: (t) =>
                        (0, s.jsx)(c.Text, {
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
                              (r = r = { guildName: null == e || null == (n = e.guild_metadata) ? void 0 : n.name }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
                                  : (function (t, e) {
                                        var n = Object.keys(t);
                                        if (Object.getOwnPropertySymbols) {
                                            var s = Object.getOwnPropertySymbols(t);
                                            n.push.apply(n, s);
                                        }
                                        return n;
                                    })(Object(r)).forEach(function (t) {
                                        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(r, t));
                                    }),
                              a)
                          )
                    : S.intl.format(S.t.QY4g5u, o);
            }, [e, l]);
        return (0, s.jsx)(
            c.P3F,
            {
                onClick: () => {
                    (0, c.ZDy)(async () => {
                        let { default: t } = await Promise.all([n.e('25292'), n.e('95477'), n.e('22878'), n.e('91245'), n.e('46097'), n.e('25183'), n.e('18831'), n.e('21607')]).then(n.bind(n, 41164));
                        return (e) =>
                            (0, s.jsx)(
                                t,
                                T(
                                    {
                                        classificationId: a,
                                        source: f.s.StandingTab
                                    },
                                    e
                                )
                            );
                    });
                },
                className: r()(b.itemDetail, { [b.itemDetailNew]: d }),
                children: (0, s.jsxs)('div', {
                    className: b.descriptionContainer,
                    children: [
                        d ? (0, s.jsx)(_, {}) : (0, s.jsx)(I, { timestamp: o }),
                        (0, s.jsx)(c.X6q, {
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
        let { status: e, classifications: n } = t,
            [a, r] = i.useState(!1),
            [o, d] = i.useState(3),
            m = (0, p.P)(),
            h = (0, l.e7)([x.Z], () => x.Z.getIsDsaEligible()),
            g = i.useMemo(() => n.slice(0, o), [n, o]);
        i.useEffect(() => {
            a &&
                u.default.track(N.rMx.SAFETY_HUB_ACTION, {
                    action: f.n0.ViewViolationsDropdown,
                    account_standing: m.state,
                    classification_ids: g.map((t) => Number(t.id)),
                    source: f.s.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: h
                });
        }, [a, m.state, g, h]);
        let j = n.length - g.length > 3 ? 3 : n.length - g.length;
        return (0, s.jsxs)('div', {
            className: b.dropdown,
            children: [
                (0, s.jsx)(E, {
                    status: e,
                    onClick: () => r((t) => !t),
                    opened: a,
                    count: n.length
                }),
                a &&
                    (0, s.jsxs)('div', {
                        className: b.items,
                        children: [
                            (0, s.jsx)(c.njP.Separator, {
                                style: {
                                    height: '1px',
                                    width: '100%'
                                }
                            }),
                            g.length > 0 && g.map((t) => (0, s.jsx)(D, { classification: t }, t.id)),
                            g.length < n.length &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)(c.njP.Separator, {
                                            style: {
                                                height: '1px',
                                                width: '100%'
                                            }
                                        }),
                                        (0, s.jsx)('button', {
                                            className: b.paginationButton,
                                            onClick: () => d((t) => t + j),
                                            children: S.intl.format(S.t['9Ml56O'], { nextPageSize: j })
                                        })
                                    ]
                                }),
                            0 === g.length && 'active' === e && (0, s.jsx)(O, {}),
                            0 === g.length && 'expired' === e && (0, s.jsx)(y, {})
                        ]
                    })
            ]
        });
    },
    w = () => {
        let t = (0, v.y9)(),
            e = (0, v.KM)();
        return 0 === t.length && 0 === e.length
            ? null
            : (0, s.jsxs)('div', {
                  children: [
                      (0, s.jsx)(P, {
                          status: 'active',
                          classifications: t
                      }),
                      (0, s.jsx)(P, {
                          status: 'expired',
                          classifications: e
                      })
                  ]
              });
    };
