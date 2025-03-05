n.d(t, { d: () => R }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(558324),
    o = n(456268),
    c = n(681460),
    d = n(345861),
    u = n(650774),
    m = n(434404),
    g = n(999382),
    p = n(718157),
    h = n(450474),
    f = n(166184),
    b = n(936735),
    x = n(654351),
    j = n(557359),
    N = n(386885),
    v = n(203377),
    _ = n(929834),
    O = n(388032),
    y = n(422653);
function C() {
    return (0, r.jsx)(a.Text, {
        tag: 'span',
        variant: 'text-xs/bold',
        color: 'text-danger',
        className: y.required,
        children: '*'
    });
}
function I(e) {
    var t;
    let { guild: n, requireDescription: l } = e,
        o = i.useCallback((e) => {
            m.Z.updateGuild({ discoverySplash: e });
        }, []),
        c = i.useCallback(() => {
            m.Z.updateGuild({ discoverySplash: null });
        }, []),
        g = i.useCallback((e) => {
            m.Z.updateGuild({ description: e });
        }, []),
        { memberCount: p, onlineCount: h } = (0, s.cj)([u.Z], () => ({
            memberCount: u.Z.getMemberCount(n.id),
            onlineCount: u.Z.getOnlineCount(n.id)
        }));
    return (0, r.jsxs)('div', {
        className: y.twoColumns,
        children: [
            (0, r.jsxs)('div', {
                className: y.sectionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: y.header,
                                children: O.NW.string(O.t.LYju5O)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: O.NW.string(O.t['53LhIy'])
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: y.subHeader,
                                children: O.NW.string(O.t.JaecVF)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: O.NW.string(O.t.VJMq8f)
                            }),
                            (0, r.jsxs)('div', {
                                className: y.buttonList,
                                children: [
                                    (0, r.jsx)(d.Z, {
                                        size: a.zxk.Sizes.SMALL,
                                        color: a.zxk.Colors.PRIMARY,
                                        className: y.editableSection,
                                        buttonCTA: O.NW.string(O.t['3UB9aW']),
                                        onChange: o
                                    }),
                                    null != n.discoverySplash
                                        ? (0, r.jsx)(a.zxk, {
                                              size: a.zxk.Sizes.SMALL,
                                              color: a.zxk.Colors.RED,
                                              look: a.zxk.Looks.LINK,
                                              className: y.editableSection,
                                              onClick: c,
                                              children: O.NW.string(O.t.N86XcH)
                                          })
                                        : null
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(a.X6q, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: y.subHeader,
                                children: [O.NW.string(O.t['1Ts7QE']), l ? (0, r.jsx)(C, {}) : null]
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: O.NW.string(O.t['6Y9q8f'])
                            }),
                            (0, r.jsx)(a.Kx8, {
                                className: y.editableSection,
                                value: null !== (t = n.description) && void 0 !== t ? t : '',
                                placeholder: O.NW.string(O.t.Nvfows),
                                onChange: g,
                                maxLength: 120
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(f.Z, {
                className: y.preview,
                guild: n,
                memberCount: p,
                presenceCount: h
            })
        ]
    });
}
function E(e) {
    let { guild: t, guildMetadata: n, requirePrimaryCategory: i, error: s } = e;
    return (0, r.jsxs)('div', {
        className: y.sectionContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: y.header,
                        children: O.NW.string(O.t['5b4VCQ'])
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: O.NW.string(O.t.MMEJFB)
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)(a.X6q, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: y.subHeader,
                        children: [O.NW.string(O.t.Rv9An5), i ? (0, r.jsx)(C, {}) : null]
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: O.NW.string(O.t.CE5Gyc)
                    }),
                    (0, r.jsx)('div', {
                        className: y.editableSection,
                        children: (0, r.jsx)(p.E, {
                            guildId: t.id,
                            guildMetadata: n
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: y.subHeader,
                        children: O.NW.string(O.t.oOPlPD)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: O.NW.string(O.t['4jnzlZ'])
                    }),
                    (0, r.jsx)('div', {
                        className: y.editableSection,
                        children: (0, r.jsx)(h.Z, {
                            guild: t,
                            guildMetadata: n
                        })
                    }),
                    null != s
                        ? (0, r.jsx)(a.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: y.error,
                              children: s
                          })
                        : null
                ]
            })
        ]
    });
}
function S(e) {
    let { guildId: t, guildMetadata: n, requireTag: s, error: d } = e,
        [u, m] = i.useState(null),
        g = i.useCallback(
            (e) => {
                let r = [...n.keywords];
                r.splice(e, 1), m(null), (0, o.zH)(t, r);
            },
            [t, n]
        ),
        p = i.useCallback(
            (e) => {
                let { keywords: r } = n;
                r.length >= v.G7 || (m(null), (0, o.zH)(t, [...r, e]));
            },
            [t, n]
        ),
        h = i.useMemo(
            () =>
                (0, x.P5)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => {
                        let t = n.keywords.length >= v.G7;
                        return {
                            text: e,
                            onClick: () => p(e),
                            disabled: t,
                            tooltipText: t ? O.NW.string(O.t.Xx7XeH) : void 0
                        };
                    }),
            [n.keywords, n.primaryCategoryId, p]
        ),
        f = null != d ? d : u;
    return (0, r.jsxs)('div', {
        className: y.sectionContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: y.header,
                        children: [O.NW.string(O.t['0PJZXl']), s ? (0, r.jsx)(C, {}) : null]
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: O.NW.string(O.t.ztiTDA)
                    }),
                    (0, r.jsx)(l.Z, {
                        className: y.editableSection,
                        tags: n.keywords,
                        onRemoveTag: g,
                        onAddTag: p,
                        onAddTagError: m,
                        maxTags: v.G7,
                        maxTaxLength: v._0,
                        placeholder: n.keywords.length < 1 ? O.NW.string(O.t.EL4Lho) : void 0
                    }),
                    null != f
                        ? (0, r.jsx)(a.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: y.error,
                              children: f
                          })
                        : null
                ]
            }),
            h.length > 0
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(a.X6q, {
                              variant: 'text-xs/bold',
                              color: 'text-muted',
                              className: y.subHeader,
                              children: O.NW.string(O.t.sF28Oj)
                          }),
                          (0, r.jsx)('div', {
                              className: y.editableSection,
                              children: (0, r.jsx)(c.j, { pills: h })
                          })
                      ]
                  })
                : null
        ]
    });
}
function T(e) {
    let { guild: t, guildMetadata: n } = e,
        { emojiDiscoverabilityEnabled: s } = n,
        l = t.id,
        c = i.useCallback(() => {
            (0, o.J9)(l, !s);
        }, [l, s]);
    return (0, r.jsxs)('div', {
        className: y.twoColumns,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: y.header,
                        children: O.NW.string(O.t.DhJ8ur)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: O.NW.string(O.t['/RSSlZ'])
                    }),
                    (0, r.jsx)(a.zxk, {
                        className: y.editableSection,
                        size: a.zxk.Sizes.SMALL,
                        color: s ? a.zxk.Colors.PRIMARY : a.zxk.Colors.GREEN,
                        onClick: c,
                        children: s ? O.NW.string(O.t.XnrNLi) : O.NW.string(O.t.bHbZLC)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(b.k, {
                    guild: t,
                    discoverableGuild: null
                })
            })
        ]
    });
}
function P(e) {
    let { preferredLocale: t } = e,
        n = i.useMemo(() => (0, _.jb)(), []),
        s = i.useCallback((e) => {
            m.Z.updateGuild({ preferredLocale: e });
        }, []);
    return (0, r.jsxs)('div', {
        className: y.twoColumns,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: y.header,
                        children: O.NW.string(O.t.pO60f3)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: O.NW.string(O.t['SF/GRk'])
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: y.localeSelect,
                children: (0, r.jsx)(a.q4e, {
                    value: t,
                    options: n,
                    onChange: s
                })
            })
        ]
    });
}
function w() {
    return (0, r.jsx)('div', { className: y.divider });
}
function R(e) {
    let { requireTerms: t, rules: n, settingsView: i } = e,
        {
            errors: a,
            guildMetadata: l,
            guild: o
        } = (0, s.cj)([g.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = g.Z.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n
            };
        });
    if (null == o) return null;
    let c = i === N.U.ELIGIBLE_DISABLED;
    return (0, r.jsxs)('div', {
        className: y.settings,
        children: [
            (0, r.jsx)(I, {
                guild: o,
                requireDescription: c
            }),
            (0, r.jsx)(w, {}),
            (0, r.jsx)(E, {
                guild: o,
                guildMetadata: l,
                requirePrimaryCategory: c,
                error: a.discovery_splash
            }),
            (0, r.jsx)(w, {}),
            (0, r.jsx)(S, {
                guildId: o.id,
                guildMetadata: l,
                requireTag: c,
                error: a.keywords
            }),
            (0, r.jsx)(w, {}),
            (0, r.jsx)(T, {
                guild: o,
                guildMetadata: l
            }),
            (0, r.jsx)(w, {}),
            (0, r.jsx)(P, { preferredLocale: o.preferredLocale }),
            (0, r.jsx)(w, {}),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(j.A, {
                    requireTerms: t,
                    rules: n
                })
            })
        ]
    });
}
