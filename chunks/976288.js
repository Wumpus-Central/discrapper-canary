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
    f = n(650774),
    m = n(434404),
    b = n(999382),
    p = n(492064),
    h = n(983858),
    x = n(832321),
    j = n(718157),
    v = n(450474),
    O = n(557359),
    C = n(386885),
    y = n(203377),
    N = n(929834),
    E = n(388032),
    I = n(196637);
function S() {
    return (0, r.jsx)(o.Text, {
        tag: "span",
        variant: "text-xs/bold",
        color: "text-feedback-critical",
        className: I.required,
        children: "*",
    });
}
function _(e) {
    var t;
    let { guild: n, requireDescription: s } = e,
        c = i.useCallback((e) => {
            m.Z.updateGuild({ discoverySplash: e });
        }, []),
        d = i.useCallback(() => {
            m.Z.updateGuild({ discoverySplash: null });
        }, []),
        u = i.useCallback((e) => {
            m.Z.updateGuild({ description: e });
        }, []),
        { memberCount: b, onlineCount: p } = (0, a.cj)([f.Z], () => ({
            memberCount: f.Z.getMemberCount(n.id),
            onlineCount: f.Z.getOnlineCount(n.id),
        }));
    return (0, r.jsxs)("div", {
        className: I.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                className: I.sectionContainer,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: I.header,
                                children: E.intl.string(E.t.LYju5J),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: E.intl.string(E.t["53LhI6"]),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: I.subHeader,
                                children: E.intl.string(E.t.JaecVH),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: E.intl.string(E.t.VJMq8R),
                            }),
                            (0, r.jsxs)("div", {
                                className: I.buttonList,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: I.editableSection,
                                        children: (0, r.jsx)(g.Z, {
                                            onChange: c,
                                            text: E.intl.string(E.t["3UB9ad"]),
                                            size: "sm",
                                            variant: "secondary",
                                        }),
                                    }),
                                    null != n.discoverySplash
                                        ? (0, r.jsx)("div", {
                                              "data-button-hoisted-classname-wrapper": !0,
                                              className: I.editableSection,
                                              children: (0, r.jsx)(o.Button, {
                                                  variant: "critical-secondary",
                                                  size: "sm",
                                                  text: E.intl.string(E.t.N86XcP),
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
                                className: I.subHeader,
                                children: [E.intl.string(E.t["1Ts7QP"]), s ? (0, r.jsx)(S, {}) : null],
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: E.intl.string(E.t["6Y9q8d"]),
                            }),
                            (0, r.jsx)("div", {
                                className: I.editableSection,
                                children: (0, r.jsx)(o.Kx8, {
                                    value: null != (t = n.description) ? t : "",
                                    placeholder: E.intl.string(E.t.Nvfowl),
                                    onChange: u,
                                    maxLength: l.Us,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(h.Z, {
                className: I.preview,
                guild: n,
                memberCount: b,
                presenceCount: p,
            }),
        ],
    });
}
function T(e) {
    let { guild: t, guildMetadata: n, requirePrimaryCategory: i, error: l } = e;
    return (0, r.jsxs)("div", {
        className: I.sectionContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: I.header,
                        children: E.intl.string(E.t["5b4VCV"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: E.intl.string(E.t.MMEJFB),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)(o.Heading, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: I.subHeader,
                        children: [E.intl.string(E.t.Rv9Anz), i ? (0, r.jsx)(S, {}) : null],
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: E.intl.string(E.t.CE5Gya),
                    }),
                    (0, r.jsx)("div", {
                        className: I.editableSection,
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
                        className: I.subHeader,
                        children: E.intl.string(E.t.oOPlPA),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: E.intl.string(E.t["4jnzla"]),
                    }),
                    (0, r.jsx)("div", {
                        className: I.editableSection,
                        children: (0, r.jsx)(v.Z, {
                            guild: t,
                            guildMetadata: n,
                        }),
                    }),
                    null != l
                        ? (0, r.jsx)(o.Text, {
                              color: "text-feedback-critical",
                              variant: "text-sm/normal",
                              className: I.error,
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
        f = i.useCallback(
            (e) => {
                let r = Array.from(e),
                    i = [...n.keywords].filter((e) => !r.includes(e));
                g(null), (0, d.zH)(t, i);
            },
            [t, n],
        ),
        m = i.useCallback(
            (e) => {
                let { keywords: r } = n;
                !(r.length >= y.G7) && (r.includes(e) || (g(null), (0, d.zH)(t, [...r, e])));
            },
            [t, n],
        ),
        b = i.useMemo(
            () =>
                (0, p.P5)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => {
                        let t = n.keywords.length >= y.G7;
                        return {
                            text: e,
                            onClick: () => m(e),
                            disabled: t,
                            tooltipText: t ? E.intl.string(E.t.Xx7XeB) : void 0,
                        };
                    }),
            [n.keywords, n.primaryCategoryId, m],
        ),
        h = null != a ? a : s,
        x = i.useMemo(
            () =>
                n.keywords.map((e) => ({
                    id: e,
                    label: e,
                })),
            [n.keywords],
        );
    return (0, r.jsxs)("div", {
        className: I.sectionContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Z, {
                        required: l,
                        label: E.intl.string(E.t["0PJZXj"]),
                        description: E.intl.string(E.t.ztiTDH),
                        tagsLabel: E.intl.string(E.t["0PJZXj"]),
                        tags: x,
                        onRemoveTag: f,
                        onAddTag: m,
                        onAddTagError: g,
                        maxTags: y.G7,
                        maxTaxLength: y._0,
                        placeholder: n.keywords.length < 1 ? E.intl.string(E.t.EL4Lhs) : void 0,
                    }),
                    null != h
                        ? (0, r.jsx)(o.Text, {
                              color: "text-feedback-critical",
                              variant: "text-sm/normal",
                              className: I.error,
                              children: h,
                          })
                        : null,
                ],
            }),
            b.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(o.Heading, {
                              variant: "text-xs/bold",
                              color: "text-muted",
                              className: I.subHeader,
                              children: E.intl.string(E.t.sF28Ou),
                          }),
                          (0, r.jsx)("div", {
                              className: I.editableSection,
                              children: (0, r.jsx)(u.j, { pills: b }),
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
        className: I.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: I.header,
                        children: E.intl.string(E.t.DhJ8ur),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: E.intl.string(E.t["/RSSlV"]),
                    }),
                    (0, r.jsx)("div", {
                        className: I.editableSection,
                        children: (0, r.jsx)(o.Button, {
                            size: "sm",
                            variant: l ? "secondary" : "active",
                            text: l ? E.intl.string(E.t.XnrNLi) : E.intl.string(E.t.bHbZLP),
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
        n = i.useMemo(() => (0, N.jb)(), []),
        l = i.useCallback((e) => {
            m.Z.updateGuild({ preferredLocale: e });
        }, []);
    return (0, r.jsxs)("div", {
        className: I.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: I.header,
                        children: E.intl.string(E.t.pO60fy),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: E.intl.string(E.t["SF/GRh"]),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: I.localeSelect,
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
    return (0, r.jsx)("div", { className: I.divider });
}
function D(e) {
    let { requireTerms: t, rules: n, settingsView: i } = e,
        {
            errors: l,
            guildMetadata: s,
            guild: o,
        } = (0, a.cj)([b.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = b.Z.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n,
            };
        });
    if (null == o) return null;
    let c = i === C.U.ELIGIBLE_DISABLED;
    return (0, r.jsxs)("div", {
        className: I.settings,
        children: [
            (0, r.jsx)(_, {
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
                children: (0, r.jsx)(O.A, {
                    requireTerms: t,
                    rules: n,
                }),
            }),
        ],
    });
}
