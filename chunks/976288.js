n.d(t, {
    d: function () {
        return L;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(558324),
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
    _ = n(557359),
    N = n(203377),
    I = n(929834),
    T = n(128449),
    j = n(388032),
    b = n(725163);
function S(e) {
    var t;
    let { guild: n } = e,
        s = r.useCallback((e) => {
            g.Z.updateGuild({ discoverySplash: e });
        }, []),
        o = r.useCallback((e) => {
            g.Z.updateGuild({ description: e });
        }, []),
        { memberCount: c, onlineCount: d } = (0, l.cj)([h.Z], () => ({
            memberCount: h.Z.getMemberCount(n.id),
            onlineCount: h.Z.getOnlineCount(n.id)
        }));
    return (0, i.jsxs)('div', {
        className: b.twoColumns,
        children: [
            (0, i.jsxs)('div', {
                className: b.sectionContainer,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: b.header,
                                children: j.intl.string(j.t.LYju5O)
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: j.intl.string(j.t['53LhIy'])
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: b.subHeader,
                                children: j.intl.string(j.t.JaecVF)
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: j.intl.string(j.t.VJMq8f)
                            }),
                            (0, i.jsxs)(a.Button, {
                                size: a.Button.Sizes.SMALL,
                                color: a.Button.Colors.PRIMARY,
                                className: b.editableSection,
                                children: [j.intl.string(j.t.yG2pUl), (0, i.jsx)(m.ZP, { onChange: s })]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: b.subHeader,
                                children: j.intl.string(j.t['1Ts7QE'])
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: j.intl.string(j.t['6Y9q8f'])
                            }),
                            (0, i.jsx)(a.TextArea, {
                                className: b.editableSection,
                                value: null !== (t = n.description) && void 0 !== t ? t : '',
                                placeholder: j.intl.string(j.t.Nvfows),
                                onChange: o,
                                maxLength: 120
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(f.Z, {
                className: b.preview,
                guild: n,
                memberCount: c,
                presenceCount: d
            })
        ]
    });
}
function E(e) {
    let { guild: t, guildMetadata: n, error: s } = e,
        u = (0, l.Wu)([d.Z], () => d.Z.getPrimaryCategories()),
        m = r.useCallback(
            (e) => {
                var n;
                (0, c.TA)(t.id, null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : T.o3);
            },
            [t]
        ),
        h = r.useMemo(
            () =>
                u.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        value: t,
                        label: n
                    };
                }),
            [u]
        );
    return (0, i.jsxs)('div', {
        className: b.sectionContainer,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: b.header,
                        children: j.intl.string(j.t['5b4VCQ'])
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: j.intl.string(j.t.MMEJFB)
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: b.subHeader,
                        children: j.intl.string(j.t.Rv9An5)
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: j.intl.string(j.t.CE5Gyc)
                    }),
                    (0, i.jsx)(o.Z, {
                        className: b.editableSection,
                        value: n.primaryCategoryId === T.o3 ? null : n.primaryCategoryId,
                        placeholder: j.intl.string(j.t.XqMe3N),
                        options: h,
                        onChange: m,
                        searchable: !0,
                        clearable: !0
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        className: b.subHeader,
                        children: j.intl.string(j.t.oOPlPD)
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: j.intl.string(j.t['4jnzlZ'])
                    }),
                    (0, i.jsx)('div', {
                        className: b.editableSection,
                        children: (0, i.jsx)(p.Z, {
                            guild: t,
                            guildMetadata: n
                        })
                    }),
                    null != s
                        ? (0, i.jsx)(a.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: b.error,
                              children: s
                          })
                        : null
                ]
            })
        ]
    });
}
function R(e) {
    let { guildId: t, guildMetadata: n, error: l } = e,
        o = r.useCallback(
            (e) => {
                let i = [...n.keywords];
                i.splice(e, 1), (0, c.zH)(t, i);
            },
            [t, n]
        ),
        d = r.useCallback(
            (e) => {
                let { keywords: i } = n;
                !(i.length >= N.G7) && (0, c.zH)(t, [...i, e]);
            },
            [t, n]
        ),
        m = r.useMemo(
            () =>
                (0, v.P5)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => ({
                        text: e,
                        onClick: () => d(e)
                    })),
            [n.keywords, n.primaryCategoryId, d]
        );
    return (0, i.jsxs)('div', {
        className: b.sectionContainer,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: b.header,
                        children: j.intl.string(j.t['0PJZXl'])
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: j.intl.string(j.t.ztiTDA)
                    }),
                    (0, i.jsx)(s.Z, {
                        className: b.editableSection,
                        tags: n.keywords,
                        onRemoveTag: o,
                        onAddTag: d,
                        maxTags: N.G7,
                        maxTaxLength: N._0,
                        placeholder: n.keywords.length < 1 ? j.intl.string(j.t.EL4Lho) : void 0
                    }),
                    null != l
                        ? (0, i.jsx)(a.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              className: b.error,
                              children: l
                          })
                        : null
                ]
            }),
            m.length > 0
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(a.Heading, {
                              variant: 'text-xs/bold',
                              color: 'text-muted',
                              className: b.subHeader,
                              children: j.intl.string(j.t.sF28Oj)
                          }),
                          (0, i.jsx)('div', {
                              className: b.editableSection,
                              children: (0, i.jsx)(u.j, { pills: m })
                          })
                      ]
                  })
                : null
        ]
    });
}
function y(e) {
    let { guild: t, guildMetadata: n } = e,
        { emojiDiscoverabilityEnabled: l } = n,
        s = t.id,
        o = r.useCallback(() => {
            (0, c.J9)(s, !l);
        }, [s, l]);
    return (0, i.jsxs)('div', {
        className: b.twoColumns,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: b.header,
                        children: j.intl.string(j.t.DhJ8ur)
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: j.intl.string(j.t['/RSSlZ'])
                    }),
                    (0, i.jsx)(a.Button, {
                        className: b.editableSection,
                        size: a.Button.Sizes.SMALL,
                        color: l ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                        onClick: o,
                        children: l ? j.intl.string(j.t.XnrNLi) : j.intl.string(j.t.bHbZLC)
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
function A(e) {
    let { preferredLocale: t } = e,
        n = r.useMemo(() => (0, I.jb)(), []),
        l = r.useCallback((e) => {
            g.Z.updateGuild({ preferredLocale: e });
        }, []);
    return (0, i.jsxs)('div', {
        className: b.twoColumns,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: b.header,
                        children: j.intl.string(j.t.pO60f3)
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: j.intl.string(j.t['SF/GRk'])
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: b.localeSelect,
                children: (0, i.jsx)(a.SingleSelect, {
                    value: t,
                    options: n,
                    onChange: l
                })
            })
        ]
    });
}
function Z() {
    return (0, i.jsx)('div', { className: b.divider });
}
function L(e) {
    let { requireTerms: t, rules: n } = e,
        {
            errors: r,
            guildMetadata: a,
            guild: s
        } = (0, l.cj)([x.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = x.Z.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n
            };
        });
    return null == s
        ? null
        : (0, i.jsxs)('div', {
              className: b.settings,
              children: [
                  (0, i.jsx)(S, { guild: s }),
                  (0, i.jsx)(Z, {}),
                  (0, i.jsx)(E, {
                      guild: s,
                      guildMetadata: a,
                      error: r.discovery_splash
                  }),
                  (0, i.jsx)(Z, {}),
                  (0, i.jsx)(R, {
                      guildId: s.id,
                      guildMetadata: a,
                      error: r.keywords
                  }),
                  (0, i.jsx)(Z, {}),
                  (0, i.jsx)(y, {
                      guild: s,
                      guildMetadata: a
                  }),
                  (0, i.jsx)(Z, {}),
                  (0, i.jsx)(A, { preferredLocale: s.preferredLocale }),
                  (0, i.jsx)(Z, {}),
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)(_.A, {
                          requireTerms: t,
                          rules: n
                      })
                  })
              ]
          });
}
