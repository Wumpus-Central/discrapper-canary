n.d(t, { d: () => Z }), n(953529), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(345074),
    s = n(442837),
    a = n(481060),
    o = n(558324),
    c = n(456268),
    u = n(681460),
    d = n(345861),
    m = n(650774),
    g = n(434404),
    p = n(999382),
    f = n(718157),
    h = n(450474),
    x = n(166184),
    b = n(936735),
    j = n(654351),
    _ = n(557359),
    v = n(386885),
    O = n(203377),
    C = n(929834),
    y = n(388032),
    N = n(356941);
function I() {
    return (0, r.jsx)(a.Text, {
        tag: 'span',
        variant: 'text-xs/bold',
        color: 'text-danger',
        className: N.required,
        children: '*'
    });
}
function E(e) {
    var t;
    let { guild: n, requireDescription: o } = e,
        c = i.useCallback((e) => {
            g.Z.updateGuild({ discoverySplash: e });
        }, []),
        u = i.useCallback(() => {
            g.Z.updateGuild({ discoverySplash: null });
        }, []),
        p = i.useCallback((e) => {
            g.Z.updateGuild({ description: e });
        }, []),
        { memberCount: f, onlineCount: h } = (0, s.cj)([m.Z], () => ({
            memberCount: m.Z.getMemberCount(n.id),
            onlineCount: m.Z.getOnlineCount(n.id)
        }));
    return (0, r.jsxs)('div', {
        className: N.twoColumns,
        children: [
            (0, r.jsxs)('div', {
                className: N.sectionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: N.header,
                                children: y.intl.string(y.t.LYju5O)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: y.intl.string(y.t['53LhIy'])
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: N.subHeader,
                                children: y.intl.string(y.t.JaecVF)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: y.intl.string(y.t.VJMq8f)
                            }),
                            (0, r.jsxs)('div', {
                                className: N.buttonList,
                                children: [
                                    (0, r.jsx)(d.Z, {
                                        size: a.zxk.Sizes.SMALL,
                                        color: a.zxk.Colors.PRIMARY,
                                        className: N.editableSection,
                                        buttonCTA: y.intl.string(y.t['3UB9aW']),
                                        onChange: c
                                    }),
                                    null != n.discoverySplash
                                        ? (0, r.jsx)(a.zxk, {
                                              size: a.zxk.Sizes.SMALL,
                                              color: a.zxk.Colors.RED,
                                              look: a.zxk.Looks.LINK,
                                              className: N.editableSection,
                                              onClick: u,
                                              children: y.intl.string(y.t.N86XcH)
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
                                className: N.subHeader,
                                children: [y.intl.string(y.t['1Ts7QE']), o ? (0, r.jsx)(I, {}) : null]
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: y.intl.string(y.t['6Y9q8f'])
                            }),
                            (0, r.jsx)(a.Kx8, {
                                className: N.editableSection,
                                value: null != (t = n.description) ? t : '',
                                placeholder: y.intl.string(y.t.Nvfows),
                                onChange: p,
                                maxLength: l.Us
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(x.Z, {
                className: N.preview,
                guild: n,
                memberCount: f,
                presenceCount: h
            })
        ]
    });
}
function S(e) {
    let { guild: t, guildMetadata: n, requirePrimaryCategory: i, error: l } = e;
    return (0, r.jsxs)('div', {
        className: N.sectionContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: N.header,
                        children: y.intl.string(y.t['5b4VCQ'])
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: y.intl.string(y.t.MMEJFB)
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)(a.X6q, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: N.subHeader,
                        children: [y.intl.string(y.t.Rv9An5), i ? (0, r.jsx)(I, {}) : null]
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: y.intl.string(y.t.CE5Gyc)
                    }),
                    (0, r.jsx)('div', {
                        className: N.editableSection,
                        children: (0, r.jsx)(f.E, {
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
                        className: N.subHeader,
                        children: y.intl.string(y.t.oOPlPD)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: y.intl.string(y.t['4jnzlZ'])
                    }),
                    (0, r.jsx)('div', {
                        className: N.editableSection,
                        children: (0, r.jsx)(h.Z, {
                            guild: t,
                            guildMetadata: n
                        })
                    }),
                    null != l
                        ? (0, r.jsx)(a.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: N.error,
                              children: l
                          })
                        : null
                ]
            })
        ]
    });
}
function T(e) {
    let { guildId: t, guildMetadata: n, requireTag: l, error: s } = e,
        [d, m] = i.useState(null),
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
                r.length >= O.G7 || (m(null), (0, c.zH)(t, [...r, e]));
            },
            [t, n]
        ),
        f = i.useMemo(
            () =>
                (0, j.P5)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => {
                        let t = n.keywords.length >= O.G7;
                        return {
                            text: e,
                            onClick: () => p(e),
                            disabled: t,
                            tooltipText: t ? y.intl.string(y.t.Xx7XeH) : void 0
                        };
                    }),
            [n.keywords, n.primaryCategoryId, p]
        ),
        h = null != s ? s : d;
    return (0, r.jsxs)('div', {
        className: N.sectionContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: N.header,
                        children: [y.intl.string(y.t['0PJZXl']), l ? (0, r.jsx)(I, {}) : null]
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: y.intl.string(y.t.ztiTDA)
                    }),
                    (0, r.jsx)(o.Z, {
                        className: N.editableSection,
                        tags: n.keywords,
                        onRemoveTag: g,
                        onAddTag: p,
                        onAddTagError: m,
                        maxTags: O.G7,
                        maxTaxLength: O._0,
                        placeholder: n.keywords.length < 1 ? y.intl.string(y.t.EL4Lho) : void 0
                    }),
                    null != h
                        ? (0, r.jsx)(a.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: N.error,
                              children: h
                          })
                        : null
                ]
            }),
            f.length > 0
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(a.X6q, {
                              variant: 'text-xs/bold',
                              color: 'text-muted',
                              className: N.subHeader,
                              children: y.intl.string(y.t.sF28Oj)
                          }),
                          (0, r.jsx)('div', {
                              className: N.editableSection,
                              children: (0, r.jsx)(u.j, { pills: f })
                          })
                      ]
                  })
                : null
        ]
    });
}
function P(e) {
    let { guild: t, guildMetadata: n } = e,
        { emojiDiscoverabilityEnabled: l } = n,
        s = t.id,
        o = i.useCallback(() => {
            (0, c.J9)(s, !l);
        }, [s, l]);
    return (0, r.jsxs)('div', {
        className: N.twoColumns,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: N.header,
                        children: y.intl.string(y.t.DhJ8ur)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: y.intl.string(y.t['/RSSlZ'])
                    }),
                    (0, r.jsx)(a.zxk, {
                        className: N.editableSection,
                        size: a.zxk.Sizes.SMALL,
                        color: l ? a.zxk.Colors.PRIMARY : a.zxk.Colors.GREEN,
                        onClick: o,
                        children: l ? y.intl.string(y.t.XnrNLi) : y.intl.string(y.t.bHbZLC)
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
        n = i.useMemo(() => (0, C.jb)(), []),
        l = i.useCallback((e) => {
            g.Z.updateGuild({ preferredLocale: e });
        }, []);
    return (0, r.jsxs)('div', {
        className: N.twoColumns,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: N.header,
                        children: y.intl.string(y.t.pO60f3)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: y.intl.string(y.t['SF/GRk'])
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: N.localeSelect,
                children: (0, r.jsx)(a.q4e, {
                    value: t,
                    options: n,
                    onChange: l
                })
            })
        ]
    });
}
function R() {
    return (0, r.jsx)('div', { className: N.divider });
}
function Z(e) {
    let { requireTerms: t, rules: n, settingsView: i } = e,
        {
            errors: l,
            guildMetadata: a,
            guild: o
        } = (0, s.cj)([p.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = p.Z.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n
            };
        });
    if (null == o) return null;
    let c = i === v.U.ELIGIBLE_DISABLED;
    return (0, r.jsxs)('div', {
        className: N.settings,
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
                error: l.discovery_splash
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(T, {
                guildId: o.id,
                guildMetadata: a,
                requireTag: c,
                error: l.keywords
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
                children: (0, r.jsx)(_.A, {
                    requireTerms: t,
                    rules: n
                })
            })
        ]
    });
}
