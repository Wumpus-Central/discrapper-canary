n.d(t, { d: () => Z }), n(953529), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(345074),
    l = n(442837),
    a = n(481060),
    o = n(558324),
    c = n(456268),
    d = n(681460),
    u = n(345861),
    m = n(650774),
    g = n(434404),
    p = n(999382),
    h = n(718157),
    f = n(450474),
    x = n(166184),
    b = n(936735),
    j = n(654351),
    N = n(557359),
    _ = n(386885),
    v = n(203377),
    O = n(929834),
    C = n(388032),
    y = n(356941);
function I() {
    return (0, r.jsx)(a.Text, {
        tag: 'span',
        variant: 'text-xs/bold',
        color: 'text-danger',
        className: y.required,
        children: '*'
    });
}
function E(e) {
    var t;
    let { guild: n, requireDescription: o } = e,
        c = i.useCallback((e) => {
            g.Z.updateGuild({ discoverySplash: e });
        }, []),
        d = i.useCallback(() => {
            g.Z.updateGuild({ discoverySplash: null });
        }, []),
        p = i.useCallback((e) => {
            g.Z.updateGuild({ description: e });
        }, []),
        { memberCount: h, onlineCount: f } = (0, l.cj)([m.Z], () => ({
            memberCount: m.Z.getMemberCount(n.id),
            onlineCount: m.Z.getOnlineCount(n.id)
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
                                children: C.NW.string(C.t.LYju5O)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: C.NW.string(C.t['53LhIy'])
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: y.subHeader,
                                children: C.NW.string(C.t.JaecVF)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: C.NW.string(C.t.VJMq8f)
                            }),
                            (0, r.jsxs)('div', {
                                className: y.buttonList,
                                children: [
                                    (0, r.jsx)(u.Z, {
                                        size: a.zxk.Sizes.SMALL,
                                        color: a.zxk.Colors.PRIMARY,
                                        className: y.editableSection,
                                        buttonCTA: C.NW.string(C.t['3UB9aW']),
                                        onChange: c
                                    }),
                                    null != n.discoverySplash
                                        ? (0, r.jsx)(a.zxk, {
                                              size: a.zxk.Sizes.SMALL,
                                              color: a.zxk.Colors.RED,
                                              look: a.zxk.Looks.LINK,
                                              className: y.editableSection,
                                              onClick: d,
                                              children: C.NW.string(C.t.N86XcH)
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
                                children: [C.NW.string(C.t['1Ts7QE']), o ? (0, r.jsx)(I, {}) : null]
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: C.NW.string(C.t['6Y9q8f'])
                            }),
                            (0, r.jsx)(a.Kx8, {
                                className: y.editableSection,
                                value: null != (t = n.description) ? t : '',
                                placeholder: C.NW.string(C.t.Nvfows),
                                onChange: p,
                                maxLength: s.Us
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(x.Z, {
                className: y.preview,
                guild: n,
                memberCount: h,
                presenceCount: f
            })
        ]
    });
}
function S(e) {
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
                        children: C.NW.string(C.t['5b4VCQ'])
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: C.NW.string(C.t.MMEJFB)
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)(a.X6q, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: y.subHeader,
                        children: [C.NW.string(C.t.Rv9An5), i ? (0, r.jsx)(I, {}) : null]
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: C.NW.string(C.t.CE5Gyc)
                    }),
                    (0, r.jsx)('div', {
                        className: y.editableSection,
                        children: (0, r.jsx)(h.E, {
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
                        children: C.NW.string(C.t.oOPlPD)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: C.NW.string(C.t['4jnzlZ'])
                    }),
                    (0, r.jsx)('div', {
                        className: y.editableSection,
                        children: (0, r.jsx)(f.Z, {
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
function T(e) {
    let { guildId: t, guildMetadata: n, requireTag: s, error: l } = e,
        [u, m] = i.useState(null),
        g = i.useCallback(
            (e) => {
                let r = [...n.keywords];
                r.splice(e, 1), m(null), (0, c.zH)(t, r);
            },
            [t, n]
        ),
        p = i.useCallback(
            (e) => {
                let { keywords: r } = n;
                r.length >= v.G7 || (m(null), (0, c.zH)(t, [...r, e]));
            },
            [t, n]
        ),
        h = i.useMemo(
            () =>
                (0, j.P5)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => {
                        let t = n.keywords.length >= v.G7;
                        return {
                            text: e,
                            onClick: () => p(e),
                            disabled: t,
                            tooltipText: t ? C.NW.string(C.t.Xx7XeH) : void 0
                        };
                    }),
            [n.keywords, n.primaryCategoryId, p]
        ),
        f = null != l ? l : u;
    return (0, r.jsxs)('div', {
        className: y.sectionContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: y.header,
                        children: [C.NW.string(C.t['0PJZXl']), s ? (0, r.jsx)(I, {}) : null]
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: C.NW.string(C.t.ztiTDA)
                    }),
                    (0, r.jsx)(o.Z, {
                        className: y.editableSection,
                        tags: n.keywords,
                        onRemoveTag: g,
                        onAddTag: p,
                        onAddTagError: m,
                        maxTags: v.G7,
                        maxTaxLength: v._0,
                        placeholder: n.keywords.length < 1 ? C.NW.string(C.t.EL4Lho) : void 0
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
                              children: C.NW.string(C.t.sF28Oj)
                          }),
                          (0, r.jsx)('div', {
                              className: y.editableSection,
                              children: (0, r.jsx)(d.j, { pills: h })
                          })
                      ]
                  })
                : null
        ]
    });
}
function P(e) {
    let { guild: t, guildMetadata: n } = e,
        { emojiDiscoverabilityEnabled: s } = n,
        l = t.id,
        o = i.useCallback(() => {
            (0, c.J9)(l, !s);
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
                        children: C.NW.string(C.t.DhJ8ur)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: C.NW.string(C.t['/RSSlZ'])
                    }),
                    (0, r.jsx)(a.zxk, {
                        className: y.editableSection,
                        size: a.zxk.Sizes.SMALL,
                        color: s ? a.zxk.Colors.PRIMARY : a.zxk.Colors.GREEN,
                        onClick: o,
                        children: s ? C.NW.string(C.t.XnrNLi) : C.NW.string(C.t.bHbZLC)
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
function w(e) {
    let { preferredLocale: t } = e,
        n = i.useMemo(() => (0, O.jb)(), []),
        s = i.useCallback((e) => {
            g.Z.updateGuild({ preferredLocale: e });
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
                        children: C.NW.string(C.t.pO60f3)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: C.NW.string(C.t['SF/GRk'])
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
function R() {
    return (0, r.jsx)('div', { className: y.divider });
}
function Z(e) {
    let { requireTerms: t, rules: n, settingsView: i } = e,
        {
            errors: s,
            guildMetadata: a,
            guild: o
        } = (0, l.cj)([p.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = p.Z.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n
            };
        });
    if (null == o) return null;
    let c = i === _.U.ELIGIBLE_DISABLED;
    return (0, r.jsxs)('div', {
        className: y.settings,
        children: [
            (0, r.jsx)(E, {
                guild: o,
                requireDescription: c
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(S, {
                guild: o,
                guildMetadata: a,
                requirePrimaryCategory: c,
                error: s.discovery_splash
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(T, {
                guildId: o.id,
                guildMetadata: a,
                requireTag: c,
                error: s.keywords
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(P, {
                guild: o,
                guildMetadata: a
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(w, { preferredLocale: o.preferredLocale }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(N.A, {
                    requireTerms: t,
                    rules: n
                })
            })
        ]
    });
}
