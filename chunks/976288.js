(n.d(t, { d: () => D }), n(953529), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(345074),
    a = n(442837),
    s = n(755721),
    o = n(481060),
    c = n(558324),
    d = n(456268),
    u = n(681460),
    m = n(345861),
    g = n(650774),
    p = n(434404),
    h = n(999382),
    f = n(718157),
    x = n(450474),
    b = n(166184),
    j = n(936735),
    v = n(654351),
    _ = n(557359),
    O = n(386885),
    y = n(203377),
    C = n(929834),
    N = n(388032),
    I = n(356941);
function E() {
    return (0, r.jsx)(o.Text, {
        tag: 'span',
        variant: 'text-xs/bold',
        color: 'text-danger',
        className: I.required,
        children: '*'
    });
}
function S(e) {
    var t;
    let { guild: n, requireDescription: c } = e,
        d = i.useCallback((e) => {
            p.Z.updateGuild({ discoverySplash: e });
        }, []),
        u = i.useCallback(() => {
            p.Z.updateGuild({ discoverySplash: null });
        }, []),
        h = i.useCallback((e) => {
            p.Z.updateGuild({ description: e });
        }, []),
        { memberCount: f, onlineCount: x } = (0, a.cj)([g.Z], () => ({
            memberCount: g.Z.getMemberCount(n.id),
            onlineCount: g.Z.getOnlineCount(n.id)
        }));
    return (0, r.jsxs)('div', {
        className: I.twoColumns,
        children: [
            (0, r.jsxs)('div', {
                className: I.sectionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: I.header,
                                children: N.intl.string(N.t.LYju5O)
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: N.intl.string(N.t['53LhIy'])
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: I.subHeader,
                                children: N.intl.string(N.t.JaecVF)
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: N.intl.string(N.t.VJMq8f)
                            }),
                            (0, r.jsxs)('div', {
                                className: I.buttonList,
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        size: s.zx.Sizes.SMALL,
                                        color: s.zx.Colors.PRIMARY,
                                        className: I.editableSection,
                                        buttonCTA: N.intl.string(N.t['3UB9aW']),
                                        onChange: d
                                    }),
                                    null != n.discoverySplash
                                        ? (0, r.jsx)('div', {
                                              'data-button-hoisted-classname-wrapper': !0,
                                              className: I.editableSection,
                                              children: (0, r.jsx)(o.zxk, {
                                                  variant: 'critical-secondary',
                                                  size: 'sm',
                                                  text: N.intl.string(N.t.N86XcH),
                                                  onClick: u
                                              })
                                          })
                                        : null
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(o.X6q, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: I.subHeader,
                                children: [N.intl.string(N.t['1Ts7QE']), c ? (0, r.jsx)(E, {}) : null]
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: N.intl.string(N.t['6Y9q8f'])
                            }),
                            (0, r.jsx)(s.iS, {
                                className: I.editableSection,
                                value: null != (t = n.description) ? t : '',
                                placeholder: N.intl.string(N.t.Nvfows),
                                onChange: h,
                                maxLength: l.Us
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(b.Z, {
                className: I.preview,
                guild: n,
                memberCount: f,
                presenceCount: x
            })
        ]
    });
}
function T(e) {
    let { guild: t, guildMetadata: n, requirePrimaryCategory: i, error: l } = e;
    return (0, r.jsxs)('div', {
        className: I.sectionContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: I.header,
                        children: N.intl.string(N.t['5b4VCQ'])
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: N.intl.string(N.t.MMEJFB)
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)(o.X6q, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: I.subHeader,
                        children: [N.intl.string(N.t.Rv9An5), i ? (0, r.jsx)(E, {}) : null]
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: N.intl.string(N.t.CE5Gyc)
                    }),
                    (0, r.jsx)('div', {
                        className: I.editableSection,
                        children: (0, r.jsx)(f.E, {
                            guildId: t.id,
                            guildMetadata: n
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: I.subHeader,
                        children: N.intl.string(N.t.oOPlPD)
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: N.intl.string(N.t['4jnzlZ'])
                    }),
                    (0, r.jsx)('div', {
                        className: I.editableSection,
                        children: (0, r.jsx)(x.Z, {
                            guild: t,
                            guildMetadata: n
                        })
                    }),
                    null != l
                        ? (0, r.jsx)(o.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: I.error,
                              children: l
                          })
                        : null
                ]
            })
        ]
    });
}
function P(e) {
    let { guildId: t, guildMetadata: n, requireTag: l, error: a } = e,
        [s, m] = i.useState(null),
        g = i.useCallback(
            (e) => {
                let r = [...n.keywords];
                (r.splice(e, 1), m(null), (0, d.zH)(t, r));
            },
            [t, n]
        ),
        p = i.useCallback(
            (e) => {
                let { keywords: r } = n;
                r.length >= y.G7 || (m(null), (0, d.zH)(t, [...r, e]));
            },
            [t, n]
        ),
        h = i.useMemo(
            () =>
                (0, v.P5)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => {
                        let t = n.keywords.length >= y.G7;
                        return {
                            text: e,
                            onClick: () => p(e),
                            disabled: t,
                            tooltipText: t ? N.intl.string(N.t.Xx7XeH) : void 0
                        };
                    }),
            [n.keywords, n.primaryCategoryId, p]
        ),
        f = null != a ? a : s;
    return (0, r.jsxs)('div', {
        className: I.sectionContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)(o.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: I.header,
                        children: [N.intl.string(N.t['0PJZXl']), l ? (0, r.jsx)(E, {}) : null]
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: N.intl.string(N.t.ztiTDA)
                    }),
                    (0, r.jsx)(c.Z, {
                        className: I.editableSection,
                        tags: n.keywords,
                        onRemoveTag: g,
                        onAddTag: p,
                        onAddTagError: m,
                        maxTags: y.G7,
                        maxTaxLength: y._0,
                        placeholder: n.keywords.length < 1 ? N.intl.string(N.t.EL4Lho) : void 0
                    }),
                    null != f
                        ? (0, r.jsx)(o.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: I.error,
                              children: f
                          })
                        : null
                ]
            }),
            h.length > 0
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(o.X6q, {
                              variant: 'text-xs/bold',
                              color: 'text-muted',
                              className: I.subHeader,
                              children: N.intl.string(N.t.sF28Oj)
                          }),
                          (0, r.jsx)('div', {
                              className: I.editableSection,
                              children: (0, r.jsx)(u.j, { pills: h })
                          })
                      ]
                  })
                : null
        ]
    });
}
function w(e) {
    let { guild: t, guildMetadata: n } = e,
        { emojiDiscoverabilityEnabled: l } = n,
        a = t.id,
        c = i.useCallback(() => {
            (0, d.J9)(a, !l);
        }, [a, l]);
    return (0, r.jsxs)('div', {
        className: I.twoColumns,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: I.header,
                        children: N.intl.string(N.t.DhJ8ur)
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: N.intl.string(N.t['/RSSlZ'])
                    }),
                    (0, r.jsx)(s.zx, {
                        className: I.editableSection,
                        size: s.zx.Sizes.SMALL,
                        color: l ? s.zx.Colors.PRIMARY : s.zx.Colors.GREEN,
                        onClick: c,
                        children: l ? N.intl.string(N.t.XnrNLi) : N.intl.string(N.t.bHbZLC)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(j.k, {
                    guild: t,
                    discoverableGuild: null
                })
            })
        ]
    });
}
function R(e) {
    let { preferredLocale: t } = e,
        n = i.useMemo(() => (0, C.jb)(), []),
        l = i.useCallback((e) => {
            p.Z.updateGuild({ preferredLocale: e });
        }, []);
    return (0, r.jsxs)('div', {
        className: I.twoColumns,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: I.header,
                        children: N.intl.string(N.t.pO60f3)
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: N.intl.string(N.t['SF/GRk'])
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: I.localeSelect,
                children: (0, r.jsx)(o.q4e, {
                    value: t,
                    options: n,
                    onChange: l
                })
            })
        ]
    });
}
function Z() {
    return (0, r.jsx)('div', { className: I.divider });
}
function D(e) {
    let { requireTerms: t, rules: n, settingsView: i } = e,
        {
            errors: l,
            guildMetadata: s,
            guild: o
        } = (0, a.cj)([h.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = h.Z.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n
            };
        });
    if (null == o) return null;
    let c = i === O.U.ELIGIBLE_DISABLED;
    return (0, r.jsxs)('div', {
        className: I.settings,
        children: [
            (0, r.jsx)(S, {
                guild: o,
                requireDescription: c
            }),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)(T, {
                guild: o,
                guildMetadata: s,
                requirePrimaryCategory: c,
                error: l.discovery_splash
            }),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)(P, {
                guildId: o.id,
                guildMetadata: s,
                requireTag: c,
                error: l.keywords
            }),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)(w, {
                guild: o,
                guildMetadata: s
            }),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)(R, { preferredLocale: o.preferredLocale }),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(_.A, {
                    requireTerms: t,
                    rules: n
                })
            })
        ]
    });
}
