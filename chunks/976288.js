n.d(t, { d: () => R }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(345074),
    a = n(442837),
    s = n(481060),
    o = n(558324),
    c = n(456268),
    d = n(681460),
    u = n(345861),
    g = n(650774),
    f = n(434404),
    m = n(999382),
    b = n(492064),
    p = n(983858),
    h = n(832321),
    x = n(718157),
    j = n(450474),
    v = n(557359),
    O = n(386885),
    y = n(203377),
    C = n(929834),
    N = n(388032),
    E = n(196637);
function I() {
    return (0, r.jsx)(s.Text, {
        tag: "span",
        variant: "text-xs/bold",
        color: "text-feedback-critical",
        className: E.required,
        children: "*",
    });
}
function S(e) {
    var t;
    let { guild: n, requireDescription: o } = e,
        c = i.useCallback((e) => {
            f.Z.updateGuild({ discoverySplash: e });
        }, []),
        d = i.useCallback(() => {
            f.Z.updateGuild({ discoverySplash: null });
        }, []),
        m = i.useCallback((e) => {
            f.Z.updateGuild({ description: e });
        }, []),
        { memberCount: b, onlineCount: h } = (0, a.cj)([g.Z], () => ({
            memberCount: g.Z.getMemberCount(n.id),
            onlineCount: g.Z.getOnlineCount(n.id),
        }));
    return (0, r.jsxs)("div", {
        className: E.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                className: E.sectionContainer,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: E.header,
                                children: N.intl.string(N.t.LYju5J),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: N.intl.string(N.t["53LhI6"]),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: E.subHeader,
                                children: N.intl.string(N.t.JaecVH),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: N.intl.string(N.t.VJMq8R),
                            }),
                            (0, r.jsxs)("div", {
                                className: E.buttonList,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: E.editableSection,
                                        children: (0, r.jsx)(u.Z, {
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
                                              children: (0, r.jsx)(s.Button, {
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
                            (0, r.jsxs)(s.Heading, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: E.subHeader,
                                children: [N.intl.string(N.t["1Ts7QP"]), o ? (0, r.jsx)(I, {}) : null],
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: N.intl.string(N.t["6Y9q8d"]),
                            }),
                            (0, r.jsx)("div", {
                                className: E.editableSection,
                                children: (0, r.jsx)(s.Kx8, {
                                    value: null != (t = n.description) ? t : "",
                                    placeholder: N.intl.string(N.t.Nvfowl),
                                    onChange: m,
                                    maxLength: l.Us,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(p.Z, {
                className: E.preview,
                guild: n,
                memberCount: b,
                presenceCount: h,
            }),
        ],
    });
}
function _(e) {
    let { guild: t, guildMetadata: n, requirePrimaryCategory: i, error: l } = e;
    return (0, r.jsxs)("div", {
        className: E.sectionContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: E.header,
                        children: N.intl.string(N.t["5b4VCV"]),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(N.t.MMEJFB),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)(s.Heading, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: E.subHeader,
                        children: [N.intl.string(N.t.Rv9Anz), i ? (0, r.jsx)(I, {}) : null],
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(N.t.CE5Gya),
                    }),
                    (0, r.jsx)("div", {
                        className: E.editableSection,
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
                        className: E.subHeader,
                        children: N.intl.string(N.t.oOPlPA),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(N.t["4jnzla"]),
                    }),
                    (0, r.jsx)("div", {
                        className: E.editableSection,
                        children: (0, r.jsx)(j.Z, {
                            guild: t,
                            guildMetadata: n,
                        }),
                    }),
                    null != l
                        ? (0, r.jsx)(s.Text, {
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
function T(e) {
    let { guildId: t, guildMetadata: n, requireTag: l, error: a } = e,
        [u, g] = i.useState(null),
        f = i.useCallback(
            (e) => {
                let r = Array.from(e),
                    i = [...n.keywords].filter((e) => !r.includes(e));
                g(null), (0, c.zH)(t, i);
            },
            [t, n],
        ),
        m = i.useCallback(
            (e) => {
                let { keywords: r } = n;
                !(r.length >= y.G7) && (r.includes(e) || (g(null), (0, c.zH)(t, [...r, e])));
            },
            [t, n],
        ),
        p = i.useMemo(
            () =>
                (0, b.P5)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => {
                        let t = n.keywords.length >= y.G7;
                        return {
                            text: e,
                            onClick: () => m(e),
                            disabled: t,
                            tooltipText: t ? N.intl.string(N.t.Xx7XeB) : void 0,
                        };
                    }),
            [n.keywords, n.primaryCategoryId, m],
        ),
        h = null != a ? a : u,
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
                    (0, r.jsx)(o.Z, {
                        required: l,
                        label: N.intl.string(N.t["0PJZXj"]),
                        description: N.intl.string(N.t.ztiTDH),
                        tagsLabel: N.intl.string(N.t["0PJZXj"]),
                        tags: x,
                        onRemoveTag: f,
                        onAddTag: m,
                        onAddTagError: g,
                        maxTags: y.G7,
                        maxTaxLength: y._0,
                        placeholder: n.keywords.length < 1 ? N.intl.string(N.t.EL4Lhs) : void 0,
                    }),
                    null != h
                        ? (0, r.jsx)(s.Text, {
                              color: "text-feedback-critical",
                              variant: "text-sm/normal",
                              className: E.error,
                              children: h,
                          })
                        : null,
                ],
            }),
            p.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(s.Heading, {
                              variant: "text-xs/bold",
                              color: "text-muted",
                              className: E.subHeader,
                              children: N.intl.string(N.t.sF28Ou),
                          }),
                          (0, r.jsx)("div", {
                              className: E.editableSection,
                              children: (0, r.jsx)(d.j, { pills: p }),
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
        className: E.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: E.header,
                        children: N.intl.string(N.t.DhJ8ur),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(N.t["/RSSlV"]),
                    }),
                    (0, r.jsx)("div", {
                        className: E.editableSection,
                        children: (0, r.jsx)(s.Button, {
                            size: "sm",
                            variant: l ? "secondary" : "active",
                            text: l ? N.intl.string(N.t.XnrNLi) : N.intl.string(N.t.bHbZLP),
                            onClick: o,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(h.k, {
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
            f.Z.updateGuild({ preferredLocale: e });
        }, []);
    return (0, r.jsx)(s.PhF, {
        layout: "horizontal-responsive",
        label: N.intl.string(N.t.pO60fy),
        description: N.intl.string(N.t["SF/GRh"]),
        value: t,
        options: n,
        onSelectionChange: l,
        selectionMode: "single",
        fullWidth: !0,
    });
}
function Z() {
    return (0, r.jsx)("div", { className: E.divider });
}
function R(e) {
    let { requireTerms: t, rules: n, settingsView: i } = e,
        {
            errors: l,
            guildMetadata: s,
            guild: o,
        } = (0, a.cj)([m.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = m.Z.getProps();
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
            (0, r.jsx)(Z, {}),
            (0, r.jsx)(_, {
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
                children: (0, r.jsx)(v.A, {
                    requireTerms: t,
                    rules: n,
                }),
            }),
        ],
    });
}
