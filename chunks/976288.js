n.d(t, {
    d: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(558324),
    o = n(285888),
    c = n(456268),
    d = n(526429),
    u = n(681460),
    m = n(813197),
    h = n(650774),
    g = n(434404),
    x = n(999382),
    p = n(450474),
    f = n(166184),
    C = n(936735),
    v = n(654351),
    I = n(557359),
    N = n(386885),
    _ = n(203377),
    T = n(929834),
    j = n(128449),
    b = n(388032),
    E = n(725163);
function S() {
    return (0, i.jsx)(s.Text, {
        tag: 'span',
        variant: 'text-xs/bold',
        color: 'text-danger',
        className: E.required,
        children: '*'
    });
}
function R(e) {
    var t;
    let { guild: n, requireDescription: a } = e,
        o = r.useCallback((e) => {
            g.Z.updateGuild({ discoverySplash: e });
        }, []),
        c = r.useCallback((e) => {
            g.Z.updateGuild({ description: e });
        }, []),
        { memberCount: d, onlineCount: u } = (0, l.cj)([h.Z], () => ({
            memberCount: h.Z.getMemberCount(n.id),
            onlineCount: h.Z.getOnlineCount(n.id)
        }));
    return (0, i.jsxs)('div', {
        className: E.twoColumns,
        children: [
            (0, i.jsxs)('div', {
                className: E.sectionContainer,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: E.header,
                                children: b.intl.string(b.t.LYju5O)
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: b.intl.string(b.t['53LhIy'])
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: E.subHeader,
                                children: b.intl.string(b.t.JaecVF)
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: b.intl.string(b.t.VJMq8f)
                            }),
                            (0, i.jsxs)(s.Button, {
                                size: s.Button.Sizes.SMALL,
                                color: s.Button.Colors.PRIMARY,
                                className: E.editableSection,
                                children: [b.intl.string(b.t.yG2pUl), (0, i.jsx)(m.ZP, { onChange: o })]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(s.Heading, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: E.subHeader,
                                children: [b.intl.string(b.t['1Ts7QE']), a ? (0, i.jsx)(S, {}) : null]
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: b.intl.string(b.t['6Y9q8f'])
                            }),
                            (0, i.jsx)(s.TextArea, {
                                className: E.editableSection,
                                value: null !== (t = n.description) && void 0 !== t ? t : '',
                                placeholder: b.intl.string(b.t.Nvfows),
                                onChange: c,
                                maxLength: 120
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(f.Z, {
                className: E.preview,
                guild: n,
                memberCount: d,
                presenceCount: u
            })
        ]
    });
}
function y(e) {
    let { guild: t, guildMetadata: n, requirePrimaryCategory: a, error: u } = e,
        m = (0, l.Wu)([d.Z], () => d.Z.getPrimaryCategories()),
        h = r.useCallback(
            (e) => {
                var n;
                (0, c.TA)(t.id, null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : j.o3);
            },
            [t]
        ),
        g = r.useMemo(
            () =>
                m.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        value: t,
                        label: n
                    };
                }),
            [m]
        );
    return (0, i.jsxs)('div', {
        className: E.sectionContainer,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: E.header,
                        children: b.intl.string(b.t['5b4VCQ'])
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: b.intl.string(b.t.MMEJFB)
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)(s.Heading, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: E.subHeader,
                        children: [b.intl.string(b.t.Rv9An5), a ? (0, i.jsx)(S, {}) : null]
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: b.intl.string(b.t.CE5Gyc)
                    }),
                    (0, i.jsx)(o.Z, {
                        className: E.editableSection,
                        value: n.primaryCategoryId === j.o3 ? null : n.primaryCategoryId,
                        placeholder: b.intl.string(b.t.XqMe3N),
                        options: g,
                        onChange: h,
                        searchable: !0,
                        clearable: !0
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: E.subHeader,
                        children: b.intl.string(b.t.oOPlPD)
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: b.intl.string(b.t['4jnzlZ'])
                    }),
                    (0, i.jsx)('div', {
                        className: E.editableSection,
                        children: (0, i.jsx)(p.Z, {
                            guild: t,
                            guildMetadata: n
                        })
                    }),
                    null != u
                        ? (0, i.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: E.error,
                              children: u
                          })
                        : null
                ]
            })
        ]
    });
}
function A(e) {
    let { guildId: t, guildMetadata: n, requireTag: l, error: o } = e,
        d = r.useCallback(
            (e) => {
                let i = [...n.keywords];
                i.splice(e, 1), (0, c.zH)(t, i);
            },
            [t, n]
        ),
        m = r.useCallback(
            (e) => {
                let { keywords: i } = n;
                !(i.length >= _.G7) && (0, c.zH)(t, [...i, e]);
            },
            [t, n]
        ),
        h = r.useMemo(
            () =>
                (0, v.P5)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => ({
                        text: e,
                        onClick: () => m(e)
                    })),
            [n.keywords, n.primaryCategoryId, m]
        );
    return (0, i.jsxs)('div', {
        className: E.sectionContainer,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)(s.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: E.header,
                        children: [b.intl.string(b.t['0PJZXl']), l ? (0, i.jsx)(S, {}) : null]
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: b.intl.string(b.t.ztiTDA)
                    }),
                    (0, i.jsx)(a.Z, {
                        className: E.editableSection,
                        tags: n.keywords,
                        onRemoveTag: d,
                        onAddTag: m,
                        maxTags: _.G7,
                        maxTaxLength: _._0,
                        placeholder: n.keywords.length < 1 ? b.intl.string(b.t.EL4Lho) : void 0
                    }),
                    null != o
                        ? (0, i.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: E.error,
                              children: o
                          })
                        : null
                ]
            }),
            h.length > 0
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(s.Heading, {
                              variant: 'text-xs/bold',
                              color: 'text-muted',
                              className: E.subHeader,
                              children: b.intl.string(b.t.sF28Oj)
                          }),
                          (0, i.jsx)('div', {
                              className: E.editableSection,
                              children: (0, i.jsx)(u.j, { pills: h })
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
        o = r.useCallback(() => {
            (0, c.J9)(a, !l);
        }, [a, l]);
    return (0, i.jsxs)('div', {
        className: E.twoColumns,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: E.header,
                        children: b.intl.string(b.t.DhJ8ur)
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: b.intl.string(b.t['/RSSlZ'])
                    }),
                    (0, i.jsx)(s.Button, {
                        className: E.editableSection,
                        size: s.Button.Sizes.SMALL,
                        color: l ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                        onClick: o,
                        children: l ? b.intl.string(b.t.XnrNLi) : b.intl.string(b.t.bHbZLC)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(C.k, {
                    guild: t,
                    discoverableGuild: null
                })
            })
        ]
    });
}
function L(e) {
    let { preferredLocale: t } = e,
        n = r.useMemo(() => (0, T.jb)(), []),
        l = r.useCallback((e) => {
            g.Z.updateGuild({ preferredLocale: e });
        }, []);
    return (0, i.jsxs)('div', {
        className: E.twoColumns,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: E.header,
                        children: b.intl.string(b.t.pO60f3)
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: b.intl.string(b.t['SF/GRk'])
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: E.localeSelect,
                children: (0, i.jsx)(s.SingleSelect, {
                    value: t,
                    options: n,
                    onChange: l
                })
            })
        ]
    });
}
function D() {
    return (0, i.jsx)('div', { className: E.divider });
}
function O(e) {
    let { requireTerms: t, rules: n, settingsView: r } = e,
        {
            errors: s,
            guildMetadata: a,
            guild: o
        } = (0, l.cj)([x.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = x.Z.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n
            };
        });
    if (null == o) return null;
    let c = r === N.U.ELIGIBLE_DISABLED;
    return (0, i.jsxs)('div', {
        className: E.settings,
        children: [
            (0, i.jsx)(R, {
                guild: o,
                requireDescription: c
            }),
            (0, i.jsx)(D, {}),
            (0, i.jsx)(y, {
                guild: o,
                guildMetadata: a,
                requirePrimaryCategory: c,
                error: s.discovery_splash
            }),
            (0, i.jsx)(D, {}),
            (0, i.jsx)(A, {
                guildId: o.id,
                guildMetadata: a,
                requireTag: c,
                error: s.keywords
            }),
            (0, i.jsx)(D, {}),
            (0, i.jsx)(Z, {
                guild: o,
                guildMetadata: a
            }),
            (0, i.jsx)(D, {}),
            (0, i.jsx)(L, { preferredLocale: o.preferredLocale }),
            (0, i.jsx)(D, {}),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(I.A, {
                    requireTerms: t,
                    rules: n
                })
            })
        ]
    });
}
