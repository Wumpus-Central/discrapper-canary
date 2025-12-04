n.d(t, { d: () => D }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(345074),
    a = n(442837),
    s = n(199849),
    o = n(481060),
    c = n(558324),
    d = n(456268),
    u = n(681460),
    g = n(345861),
    m = n(650774),
    p = n(434404),
    f = n(999382),
    h = n(492064),
    b = n(983858),
    x = n(832321),
    j = n(718157),
    _ = n(450474),
    v = n(557359),
    O = n(386885),
    C = n(203377),
    y = n(929834),
    N = n(388032),
    E = n(912440);
function I() {
    return (0, r.jsx)(o.Text, {
        tag: "span",
        variant: "text-xs/bold",
        color: "text-feedback-critical",
        className: E.required,
        children: "*",
    });
}
function S(e) {
    var t;
    let { guild: n, requireDescription: s } = e,
        c = i.useCallback((e) => {
            p.Z.updateGuild({ discoverySplash: e });
        }, []),
        d = i.useCallback(() => {
            p.Z.updateGuild({ discoverySplash: null });
        }, []),
        u = i.useCallback((e) => {
            p.Z.updateGuild({ description: e });
        }, []),
        { memberCount: f, onlineCount: h } = (0, a.cj)([m.Z], () => ({
            memberCount: m.Z.getMemberCount(n.id),
            onlineCount: m.Z.getOnlineCount(n.id),
        }));
    return (0, r.jsxs)("div", {
        className: E.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                className: E.sectionContainer,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: E.header,
                                children: N.intl.string(N.t.LYju5J),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: N.intl.string(N.t["53LhI6"]),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: E.subHeader,
                                children: N.intl.string(N.t.JaecVH),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: N.intl.string(N.t.VJMq8R),
                            }),
                            (0, r.jsxs)("div", {
                                className: E.buttonList,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: E.editableSection,
                                        children: (0, r.jsx)(g.Z, {
                                            onChange: c,
                                            text: N.intl.string(N.t["3UB9ad"]),
                                            size: "sm",
                                            variant: "secondary",
                                        }),
                                    }),
                                    null != n.discoverySplash
                                        ? (0, r.jsx)("div", {
                                              "data-button-hoisted-classname-wrapper": !0,
                                              className: E.editableSection,
                                              children: (0, r.jsx)(o.Button, {
                                                  variant: "critical-secondary",
                                                  size: "sm",
                                                  text: N.intl.string(N.t.N86XcP),
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
                            (0, r.jsxs)(o.Heading, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: E.subHeader,
                                children: [N.intl.string(N.t["1Ts7QP"]), s ? (0, r.jsx)(I, {}) : null],
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: N.intl.string(N.t["6Y9q8d"]),
                            }),
                            (0, r.jsx)("div", {
                                className: E.editableSection,
                                children: (0, r.jsx)(o.Kx8, {
                                    value: null != (t = n.description) ? t : "",
                                    placeholder: N.intl.string(N.t.Nvfowl),
                                    onChange: u,
                                    maxLength: l.Us,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(b.Z, {
                className: E.preview,
                guild: n,
                memberCount: f,
                presenceCount: h,
            }),
        ],
    });
}
function T(e) {
    let { guild: t, guildMetadata: n, requirePrimaryCategory: i, error: l } = e;
    return (0, r.jsxs)("div", {
        className: E.sectionContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: E.header,
                        children: N.intl.string(N.t["5b4VCV"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(N.t.MMEJFB),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)(o.Heading, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: E.subHeader,
                        children: [N.intl.string(N.t.Rv9Anz), i ? (0, r.jsx)(I, {}) : null],
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(N.t.CE5Gya),
                    }),
                    (0, r.jsx)("div", {
                        className: E.editableSection,
                        children: (0, r.jsx)(j.E, {
                            guildId: t.id,
                            guildMetadata: n,
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: E.subHeader,
                        children: N.intl.string(N.t.oOPlPA),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(N.t["4jnzla"]),
                    }),
                    (0, r.jsx)("div", {
                        className: E.editableSection,
                        children: (0, r.jsx)(_.Z, {
                            guild: t,
                            guildMetadata: n,
                        }),
                    }),
                    null != l
                        ? (0, r.jsx)(o.Text, {
                              color: "text-feedback-critical",
                              variant: "text-sm/normal",
                              className: E.error,
                              children: l,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function P(e) {
    let { guildId: t, guildMetadata: n, requireTag: l, error: a } = e,
        [s, g] = i.useState(null),
        m = i.useCallback(
            (e) => {
                let r = Array.from(e),
                    i = [...n.keywords].filter((e) => !r.includes(e));
                g(null), (0, d.zH)(t, i);
            },
            [t, n],
        ),
        p = i.useCallback(
            (e) => {
                let { keywords: r } = n;
                !(r.length >= C.G7) && (r.includes(e) || (g(null), (0, d.zH)(t, [...r, e])));
            },
            [t, n],
        ),
        f = i.useMemo(
            () =>
                (0, h.P5)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => {
                        let t = n.keywords.length >= C.G7;
                        return {
                            text: e,
                            onClick: () => p(e),
                            disabled: t,
                            tooltipText: t ? N.intl.string(N.t.Xx7XeB) : void 0,
                        };
                    }),
            [n.keywords, n.primaryCategoryId, p],
        ),
        b = null != a ? a : s,
        x = i.useMemo(
            () =>
                n.keywords.map((e) => ({
                    id: e,
                    label: e,
                })),
            [n.keywords],
        );
    return (0, r.jsxs)("div", {
        className: E.sectionContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Z, {
                        required: l,
                        label: N.intl.string(N.t["0PJZXj"]),
                        description: N.intl.string(N.t.ztiTDH),
                        tagsLabel: N.intl.string(N.t["0PJZXj"]),
                        tags: x,
                        onRemoveTag: m,
                        onAddTag: p,
                        onAddTagError: g,
                        maxTags: C.G7,
                        maxTaxLength: C._0,
                        placeholder: n.keywords.length < 1 ? N.intl.string(N.t.EL4Lhs) : void 0,
                    }),
                    null != b
                        ? (0, r.jsx)(o.Text, {
                              color: "text-feedback-critical",
                              variant: "text-sm/normal",
                              className: E.error,
                              children: b,
                          })
                        : null,
                ],
            }),
            f.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(o.Heading, {
                              variant: "text-xs/bold",
                              color: "text-muted",
                              className: E.subHeader,
                              children: N.intl.string(N.t.sF28Ou),
                          }),
                          (0, r.jsx)("div", {
                              className: E.editableSection,
                              children: (0, r.jsx)(u.j, { pills: f }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function w(e) {
    let { guild: t, guildMetadata: n } = e,
        { emojiDiscoverabilityEnabled: l } = n,
        a = t.id,
        s = i.useCallback(() => {
            (0, d.J9)(a, !l);
        }, [a, l]);
    return (0, r.jsxs)("div", {
        className: E.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: E.header,
                        children: N.intl.string(N.t.DhJ8ur),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(N.t["/RSSlV"]),
                    }),
                    (0, r.jsx)("div", {
                        className: E.editableSection,
                        children: (0, r.jsx)(o.Button, {
                            size: "sm",
                            variant: l ? "secondary" : "active",
                            text: l ? N.intl.string(N.t.XnrNLi) : N.intl.string(N.t.bHbZLP),
                            onClick: s,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(x.k, {
                    guild: t,
                    discoverableGuild: null,
                }),
            }),
        ],
    });
}
function Z(e) {
    let { preferredLocale: t } = e,
        n = i.useMemo(() => (0, y.jb)(), []),
        l = i.useCallback((e) => {
            p.Z.updateGuild({ preferredLocale: e });
        }, []);
    return (0, r.jsxs)("div", {
        className: E.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: E.header,
                        children: N.intl.string(N.t.pO60fy),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(N.t["SF/GRh"]),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: E.localeSelect,
                children: (0, r.jsx)(s.y6, {
                    value: t,
                    options: n,
                    onChange: l,
                }),
            }),
        ],
    });
}
function R() {
    return (0, r.jsx)("div", { className: E.divider });
}
function D(e) {
    let { requireTerms: t, rules: n, settingsView: i } = e,
        {
            errors: l,
            guildMetadata: s,
            guild: o,
        } = (0, a.cj)([f.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = f.Z.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n,
            };
        });
    if (null == o) return null;
    let c = i === O.U.ELIGIBLE_DISABLED;
    return (0, r.jsxs)("div", {
        className: E.settings,
        children: [
            (0, r.jsx)(S, {
                guild: o,
                requireDescription: c,
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(T, {
                guild: o,
                guildMetadata: s,
                requirePrimaryCategory: c,
                error: l.discovery_splash,
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(P, {
                guildId: o.id,
                guildMetadata: s,
                requireTag: c,
                error: l.keywords,
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(w, {
                guild: o,
                guildMetadata: s,
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(Z, { preferredLocale: o.preferredLocale }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(v.A, {
                    requireTerms: t,
                    rules: n,
                }),
            }),
        ],
    });
}
