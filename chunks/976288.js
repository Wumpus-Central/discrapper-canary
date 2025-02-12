n.d(t, { d: () => L }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(558324),
    o = n(456268),
    c = n(681460),
    d = n(813197),
    u = n(650774),
    m = n(434404),
    h = n(999382),
    g = n(718157),
    x = n(450474),
    p = n(166184),
    _ = n(936735),
    C = n(654351),
    f = n(557359),
    v = n(386885),
    N = n(203377),
    j = n(929834),
    I = n(388032),
    E = n(618418);
function b() {
    return (0, i.jsx)(s.Text, {
        tag: 'span',
        variant: 'text-xs/bold',
        color: 'text-danger',
        className: E.required,
        children: '*'
    });
}
function T(e) {
    var t;
    let { guild: n, requireDescription: a } = e,
        o = r.useCallback((e) => {
            m.Z.updateGuild({ discoverySplash: e });
        }, []),
        c = r.useCallback(() => {
            m.Z.updateGuild({ discoverySplash: null });
        }, []),
        h = r.useCallback((e) => {
            m.Z.updateGuild({ description: e });
        }, []),
        { memberCount: g, onlineCount: x } = (0, l.cj)([u.Z], () => ({
            memberCount: u.Z.getMemberCount(n.id),
            onlineCount: u.Z.getOnlineCount(n.id)
        }));
    return (0, i.jsxs)('div', {
        className: E.twoColumns,
        children: [
            (0, i.jsxs)('div', {
                className: E.sectionContainer,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.X6q, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: E.header,
                                children: I.intl.string(I.t.LYju5O)
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: I.intl.string(I.t['53LhIy'])
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.X6q, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: E.subHeader,
                                children: I.intl.string(I.t.JaecVF)
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: I.intl.string(I.t.VJMq8f)
                            }),
                            (0, i.jsxs)('div', {
                                className: E.buttonList,
                                children: [
                                    (0, i.jsxs)(s.zxk, {
                                        size: s.zxk.Sizes.SMALL,
                                        color: s.zxk.Colors.PRIMARY,
                                        className: E.editableSection,
                                        children: [I.intl.string(I.t['3UB9aW']), (0, i.jsx)(d.ZP, { onChange: o })]
                                    }),
                                    null != n.discoverySplash
                                        ? (0, i.jsx)(s.zxk, {
                                              size: s.zxk.Sizes.SMALL,
                                              color: s.zxk.Colors.RED,
                                              look: s.zxk.Looks.LINK,
                                              className: E.editableSection,
                                              onClick: c,
                                              children: I.intl.string(I.t.N86XcH)
                                          })
                                        : null
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(s.X6q, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: E.subHeader,
                                children: [I.intl.string(I.t['1Ts7QE']), a ? (0, i.jsx)(b, {}) : null]
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: I.intl.string(I.t['6Y9q8f'])
                            }),
                            (0, i.jsx)(s.Kx8, {
                                className: E.editableSection,
                                value: null !== (t = n.description) && void 0 !== t ? t : '',
                                placeholder: I.intl.string(I.t.Nvfows),
                                onChange: h,
                                maxLength: 120
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(p.Z, {
                className: E.preview,
                guild: n,
                memberCount: g,
                presenceCount: x
            })
        ]
    });
}
function S(e) {
    let { guild: t, guildMetadata: n, requirePrimaryCategory: r, error: l } = e;
    return (0, i.jsxs)('div', {
        className: E.sectionContainer,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: E.header,
                        children: I.intl.string(I.t['5b4VCQ'])
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: I.intl.string(I.t.MMEJFB)
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)(s.X6q, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: E.subHeader,
                        children: [I.intl.string(I.t.Rv9An5), r ? (0, i.jsx)(b, {}) : null]
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: I.intl.string(I.t.CE5Gyc)
                    }),
                    (0, i.jsx)('div', {
                        className: E.editableSection,
                        children: (0, i.jsx)(g.E, {
                            guildId: t.id,
                            guildMetadata: n
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: E.subHeader,
                        children: I.intl.string(I.t.oOPlPD)
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: I.intl.string(I.t['4jnzlZ'])
                    }),
                    (0, i.jsx)('div', {
                        className: E.editableSection,
                        children: (0, i.jsx)(x.Z, {
                            guild: t,
                            guildMetadata: n
                        })
                    }),
                    null != l
                        ? (0, i.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: E.error,
                              children: l
                          })
                        : null
                ]
            })
        ]
    });
}
function R(e) {
    let { guildId: t, guildMetadata: n, requireTag: l, error: d } = e,
        [u, m] = r.useState(null),
        h = r.useCallback(
            (e) => {
                let i = [...n.keywords];
                i.splice(e, 1), m(null), (0, o.zH)(t, i);
            },
            [t, n]
        ),
        g = r.useCallback(
            (e) => {
                let { keywords: i } = n;
                i.length >= N.G7 || (m(null), (0, o.zH)(t, [...i, e]));
            },
            [t, n]
        ),
        x = r.useMemo(
            () =>
                (0, C.P5)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => {
                        let t = n.keywords.length >= N.G7;
                        return {
                            text: e,
                            onClick: () => g(e),
                            disabled: t,
                            tooltipText: t ? I.intl.string(I.t.Xx7XeH) : void 0
                        };
                    }),
            [n.keywords, n.primaryCategoryId, g]
        ),
        p = null != d ? d : u;
    return (0, i.jsxs)('div', {
        className: E.sectionContainer,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)(s.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: E.header,
                        children: [I.intl.string(I.t['0PJZXl']), l ? (0, i.jsx)(b, {}) : null]
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: I.intl.string(I.t.ztiTDA)
                    }),
                    (0, i.jsx)(a.Z, {
                        className: E.editableSection,
                        tags: n.keywords,
                        onRemoveTag: h,
                        onAddTag: g,
                        onAddTagError: m,
                        maxTags: N.G7,
                        maxTaxLength: N._0,
                        placeholder: n.keywords.length < 1 ? I.intl.string(I.t.EL4Lho) : void 0
                    }),
                    null != p
                        ? (0, i.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: E.error,
                              children: p
                          })
                        : null
                ]
            }),
            x.length > 0
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(s.X6q, {
                              variant: 'text-xs/bold',
                              color: 'text-muted',
                              className: E.subHeader,
                              children: I.intl.string(I.t.sF28Oj)
                          }),
                          (0, i.jsx)('div', {
                              className: E.editableSection,
                              children: (0, i.jsx)(c.j, { pills: x })
                          })
                      ]
                  })
                : null
        ]
    });
}
function Z(e) {
    let { guild: t, guildMetadata: n } = e,
        { emojiDiscoverabilityEnabled: l } = n,
        a = t.id,
        c = r.useCallback(() => {
            (0, o.J9)(a, !l);
        }, [a, l]);
    return (0, i.jsxs)('div', {
        className: E.twoColumns,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: E.header,
                        children: I.intl.string(I.t.DhJ8ur)
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: I.intl.string(I.t['/RSSlZ'])
                    }),
                    (0, i.jsx)(s.zxk, {
                        className: E.editableSection,
                        size: s.zxk.Sizes.SMALL,
                        color: l ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN,
                        onClick: c,
                        children: l ? I.intl.string(I.t.XnrNLi) : I.intl.string(I.t.bHbZLC)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(_.k, {
                    guild: t,
                    discoverableGuild: null
                })
            })
        ]
    });
}
function y(e) {
    let { preferredLocale: t } = e,
        n = r.useMemo(() => (0, j.jb)(), []),
        l = r.useCallback((e) => {
            m.Z.updateGuild({ preferredLocale: e });
        }, []);
    return (0, i.jsxs)('div', {
        className: E.twoColumns,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: E.header,
                        children: I.intl.string(I.t.pO60f3)
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: I.intl.string(I.t['SF/GRk'])
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: E.localeSelect,
                children: (0, i.jsx)(s.q4e, {
                    value: t,
                    options: n,
                    onChange: l
                })
            })
        ]
    });
}
function A() {
    return (0, i.jsx)('div', { className: E.divider });
}
function L(e) {
    let { requireTerms: t, rules: n, settingsView: r } = e,
        {
            errors: s,
            guildMetadata: a,
            guild: o
        } = (0, l.cj)([h.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = h.Z.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n
            };
        });
    if (null == o) return null;
    let c = r === v.U.ELIGIBLE_DISABLED;
    return (0, i.jsxs)('div', {
        className: E.settings,
        children: [
            (0, i.jsx)(T, {
                guild: o,
                requireDescription: c
            }),
            (0, i.jsx)(A, {}),
            (0, i.jsx)(S, {
                guild: o,
                guildMetadata: a,
                requirePrimaryCategory: c,
                error: s.discovery_splash
            }),
            (0, i.jsx)(A, {}),
            (0, i.jsx)(R, {
                guildId: o.id,
                guildMetadata: a,
                requireTag: c,
                error: s.keywords
            }),
            (0, i.jsx)(A, {}),
            (0, i.jsx)(Z, {
                guild: o,
                guildMetadata: a
            }),
            (0, i.jsx)(A, {}),
            (0, i.jsx)(y, { preferredLocale: o.preferredLocale }),
            (0, i.jsx)(A, {}),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(f.A, {
                    requireTerms: t,
                    rules: n
                })
            })
        ]
    });
}
