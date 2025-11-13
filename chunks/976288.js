n.d(t, { d: () => R }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(345074),
    a = n(442837),
    s = n(481060),
    o = n(558324),
    c = n(456268),
    d = n(681460),
    u = n(345861),
    g = n(650774),
    m = n(434404),
    p = n(999382),
    f = n(490597),
    h = n(983858),
    b = n(832321),
    x = n(718157),
    j = n(450474),
    _ = n(557359),
    v = n(386885),
    O = n(203377),
    C = n(929834),
    y = n(388032),
    N = n(912440);
function E() {
    return (0, r.jsx)(s.Text, {
        tag: "span",
        variant: "text-xs/bold",
        color: "text-danger",
        className: N.required,
        children: "*",
    });
}
function I(e) {
    var t;
    let { guild: n, requireDescription: o } = e,
        c = i.useCallback((e) => {
            m.Z.updateGuild({ discoverySplash: e });
        }, []),
        d = i.useCallback(() => {
            m.Z.updateGuild({ discoverySplash: null });
        }, []),
        p = i.useCallback((e) => {
            m.Z.updateGuild({ description: e });
        }, []),
        { memberCount: f, onlineCount: b } = (0, a.cj)([g.Z], () => ({
            memberCount: g.Z.getMemberCount(n.id),
            onlineCount: g.Z.getOnlineCount(n.id),
        }));
    return (0, r.jsxs)("div", {
        className: N.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                className: N.sectionContainer,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: N.header,
                                children: y.intl.string(y.t.LYju5J),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: y.intl.string(y.t["53LhI6"]),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: N.subHeader,
                                children: y.intl.string(y.t.JaecVH),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: y.intl.string(y.t.VJMq8R),
                            }),
                            (0, r.jsxs)("div", {
                                className: N.buttonList,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: N.editableSection,
                                        children: (0, r.jsx)(u.Z, {
                                            onChange: c,
                                            text: y.intl.string(y.t["3UB9ad"]),
                                            size: "sm",
                                            variant: "secondary",
                                        }),
                                    }),
                                    null != n.discoverySplash
                                        ? (0, r.jsx)("div", {
                                              "data-button-hoisted-classname-wrapper": !0,
                                              className: N.editableSection,
                                              children: (0, r.jsx)(s.Button, {
                                                  variant: "critical-secondary",
                                                  size: "sm",
                                                  text: y.intl.string(y.t.N86XcP),
                                                  onClick: d,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(s.Heading, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: N.subHeader,
                                children: [y.intl.string(y.t["1Ts7QP"]), o ? (0, r.jsx)(E, {}) : null],
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: y.intl.string(y.t["6Y9q8d"]),
                            }),
                            (0, r.jsx)("div", {
                                className: N.editableSection,
                                children: (0, r.jsx)(s.Kx8, {
                                    value: null != (t = n.description) ? t : "",
                                    placeholder: y.intl.string(y.t.Nvfowl),
                                    onChange: p,
                                    maxLength: l.Us,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(h.Z, {
                className: N.preview,
                guild: n,
                memberCount: f,
                presenceCount: b,
            }),
        ],
    });
}
function S(e) {
    let { guild: t, guildMetadata: n, requirePrimaryCategory: i, error: l } = e;
    return (0, r.jsxs)("div", {
        className: N.sectionContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: N.header,
                        children: y.intl.string(y.t["5b4VCV"]),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: y.intl.string(y.t.MMEJFB),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)(s.Heading, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: N.subHeader,
                        children: [y.intl.string(y.t.Rv9Anz), i ? (0, r.jsx)(E, {}) : null],
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: y.intl.string(y.t.CE5Gya),
                    }),
                    (0, r.jsx)("div", {
                        className: N.editableSection,
                        children: (0, r.jsx)(x.E, {
                            guildId: t.id,
                            guildMetadata: n,
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: N.subHeader,
                        children: y.intl.string(y.t.oOPlPA),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: y.intl.string(y.t["4jnzla"]),
                    }),
                    (0, r.jsx)("div", {
                        className: N.editableSection,
                        children: (0, r.jsx)(j.Z, {
                            guild: t,
                            guildMetadata: n,
                        }),
                    }),
                    null != l
                        ? (0, r.jsx)(s.Text, {
                              color: "text-danger",
                              variant: "text-sm/normal",
                              className: N.error,
                              children: l,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function T(e) {
    let { guildId: t, guildMetadata: n, requireTag: l, error: a } = e,
        [u, g] = i.useState(null),
        m = i.useCallback(
            (e) => {
                let r = Array.from(e),
                    i = [...n.keywords].filter((e) => !r.includes(e));
                g(null), (0, c.zH)(t, i);
            },
            [t, n],
        ),
        p = i.useCallback(
            (e) => {
                let { keywords: r } = n;
                !(r.length >= O.G7) && (r.includes(e) || (g(null), (0, c.zH)(t, [...r, e])));
            },
            [t, n],
        ),
        h = i.useMemo(
            () =>
                (0, f.P5)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => {
                        let t = n.keywords.length >= O.G7;
                        return {
                            text: e,
                            onClick: () => p(e),
                            disabled: t,
                            tooltipText: t ? y.intl.string(y.t.Xx7XeB) : void 0,
                        };
                    }),
            [n.keywords, n.primaryCategoryId, p],
        ),
        b = null != a ? a : u,
        x = i.useMemo(
            () =>
                n.keywords.map((e) => ({
                    id: e,
                    label: e,
                })),
            [n.keywords],
        );
    return (0, r.jsxs)("div", {
        className: N.sectionContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(o.Z, {
                        required: l,
                        label: y.intl.string(y.t["0PJZXj"]),
                        description: y.intl.string(y.t.ztiTDH),
                        tagsLabel: y.intl.string(y.t["0PJZXj"]),
                        tags: x,
                        onRemoveTag: m,
                        onAddTag: p,
                        onAddTagError: g,
                        maxTags: O.G7,
                        maxTaxLength: O._0,
                        placeholder: n.keywords.length < 1 ? y.intl.string(y.t.EL4Lhs) : void 0,
                    }),
                    null != b
                        ? (0, r.jsx)(s.Text, {
                              color: "text-danger",
                              variant: "text-sm/normal",
                              className: N.error,
                              children: b,
                          })
                        : null,
                ],
            }),
            h.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(s.Heading, {
                              variant: "text-xs/bold",
                              color: "text-muted",
                              className: N.subHeader,
                              children: y.intl.string(y.t.sF28Ou),
                          }),
                          (0, r.jsx)("div", {
                              className: N.editableSection,
                              children: (0, r.jsx)(d.j, { pills: h }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function P(e) {
    let { guild: t, guildMetadata: n } = e,
        { emojiDiscoverabilityEnabled: l } = n,
        a = t.id,
        o = i.useCallback(() => {
            (0, c.J9)(a, !l);
        }, [a, l]);
    return (0, r.jsxs)("div", {
        className: N.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: N.header,
                        children: y.intl.string(y.t.DhJ8ur),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: y.intl.string(y.t["/RSSlV"]),
                    }),
                    (0, r.jsx)("div", {
                        className: N.editableSection,
                        children: (0, r.jsx)(s.Button, {
                            size: "sm",
                            variant: l ? "secondary" : "active",
                            text: l ? y.intl.string(y.t.XnrNLi) : y.intl.string(y.t.bHbZLP),
                            onClick: o,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(b.k, {
                    guild: t,
                    discoverableGuild: null,
                }),
            }),
        ],
    });
}
function w(e) {
    let { preferredLocale: t } = e,
        n = i.useMemo(() => (0, C.jb)(), []),
        l = i.useCallback((e) => {
            m.Z.updateGuild({ preferredLocale: e });
        }, []);
    return (0, r.jsxs)("div", {
        className: N.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: N.header,
                        children: y.intl.string(y.t.pO60fy),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: y.intl.string(y.t["SF/GRh"]),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: N.localeSelect,
                children: (0, r.jsx)(s.q4e, {
                    value: t,
                    options: n,
                    onChange: l,
                }),
            }),
        ],
    });
}
function Z() {
    return (0, r.jsx)("div", { className: N.divider });
}
function R(e) {
    let { requireTerms: t, rules: n, settingsView: i } = e,
        {
            errors: l,
            guildMetadata: s,
            guild: o,
        } = (0, a.cj)([p.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = p.Z.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n,
            };
        });
    if (null == o) return null;
    let c = i === v.U.ELIGIBLE_DISABLED;
    return (0, r.jsxs)("div", {
        className: N.settings,
        children: [
            (0, r.jsx)(I, {
                guild: o,
                requireDescription: c,
            }),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)(S, {
                guild: o,
                guildMetadata: s,
                requirePrimaryCategory: c,
                error: l.discovery_splash,
            }),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)(T, {
                guildId: o.id,
                guildMetadata: s,
                requireTag: c,
                error: l.keywords,
            }),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)(P, {
                guild: o,
                guildMetadata: s,
            }),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)(w, { preferredLocale: o.preferredLocale }),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(_.A, {
                    requireTerms: t,
                    rules: n,
                }),
            }),
        ],
    });
}
