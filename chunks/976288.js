n.d(t, { d: () => D }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(345074),
    s = n(442837),
    a = n(481060),
    o = n(558324),
    c = n(456268),
    d = n(681460),
    u = n(345861),
    m = n(650774),
    g = n(434404),
    p = n(999382),
    f = n(490597),
    h = n(983858),
    x = n(832321),
    b = n(718157),
    j = n(450474),
    v = n(557359),
    _ = n(386885),
    O = n(203377),
    y = n(929834),
    C = n(388032),
    N = n(912440);
function E() {
    return (0, r.jsx)(a.Text, {
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
            g.Z.updateGuild({ discoverySplash: e });
        }, []),
        d = i.useCallback(() => {
            g.Z.updateGuild({ discoverySplash: null });
        }, []),
        p = i.useCallback((e) => {
            g.Z.updateGuild({ description: e });
        }, []),
        { memberCount: f, onlineCount: x } = (0, s.cj)([m.Z], () => ({
            memberCount: m.Z.getMemberCount(n.id),
            onlineCount: m.Z.getOnlineCount(n.id),
        }));
    return (0, r.jsxs)("div", {
        className: N.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                className: N.sectionContainer,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: N.header,
                                children: C.intl.string(C.t.LYju5O),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: C.intl.string(C.t["53LhIy"]),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: N.subHeader,
                                children: C.intl.string(C.t.JaecVF),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: C.intl.string(C.t.VJMq8f),
                            }),
                            (0, r.jsxs)("div", {
                                className: N.buttonList,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: N.editableSection,
                                        children: (0, r.jsx)(u.Z, {
                                            onChange: c,
                                            text: C.intl.string(C.t["3UB9aW"]),
                                            size: "sm",
                                            variant: "secondary",
                                        }),
                                    }),
                                    null != n.discoverySplash
                                        ? (0, r.jsx)("div", {
                                              "data-button-hoisted-classname-wrapper": !0,
                                              className: N.editableSection,
                                              children: (0, r.jsx)(a.zxk, {
                                                  variant: "critical-secondary",
                                                  size: "sm",
                                                  text: C.intl.string(C.t.N86XcH),
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
                            (0, r.jsxs)(a.X6q, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: N.subHeader,
                                children: [C.intl.string(C.t["1Ts7QE"]), o ? (0, r.jsx)(E, {}) : null],
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: C.intl.string(C.t["6Y9q8f"]),
                            }),
                            (0, r.jsx)("div", {
                                className: N.editableSection,
                                children: (0, r.jsx)(a.Kx8, {
                                    value: null != (t = n.description) ? t : "",
                                    placeholder: C.intl.string(C.t.Nvfows),
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
                presenceCount: x,
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
                    (0, r.jsx)(a.X6q, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: N.header,
                        children: C.intl.string(C.t["5b4VCQ"]),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: C.intl.string(C.t.MMEJFB),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)(a.X6q, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: N.subHeader,
                        children: [C.intl.string(C.t.Rv9An5), i ? (0, r.jsx)(E, {}) : null],
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: C.intl.string(C.t.CE5Gyc),
                    }),
                    (0, r.jsx)("div", {
                        className: N.editableSection,
                        children: (0, r.jsx)(b.E, {
                            guildId: t.id,
                            guildMetadata: n,
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: N.subHeader,
                        children: C.intl.string(C.t.oOPlPD),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: C.intl.string(C.t["4jnzlZ"]),
                    }),
                    (0, r.jsx)("div", {
                        className: N.editableSection,
                        children: (0, r.jsx)(j.Z, {
                            guild: t,
                            guildMetadata: n,
                        }),
                    }),
                    null != l
                        ? (0, r.jsx)(a.Text, {
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
    let { guildId: t, guildMetadata: n, requireTag: l, error: s } = e,
        [u, m] = i.useState(null),
        g = i.useCallback(
            (e) => {
                let r = Array.from(e),
                    i = [...n.keywords].filter((e) => !r.includes(e));
                m(null), (0, c.zH)(t, i);
            },
            [t, n],
        ),
        p = i.useCallback(
            (e) => {
                let { keywords: r } = n;
                !(r.length >= O.G7) && (r.includes(e) || (m(null), (0, c.zH)(t, [...r, e])));
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
                            tooltipText: t ? C.intl.string(C.t.Xx7XeH) : void 0,
                        };
                    }),
            [n.keywords, n.primaryCategoryId, p],
        ),
        x = null != s ? s : u,
        b = i.useMemo(
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
                        label: C.intl.string(C.t["0PJZXl"]),
                        description: C.intl.string(C.t.ztiTDA),
                        tagsLabel: C.intl.string(C.t["0PJZXl"]),
                        tags: b,
                        onRemoveTag: g,
                        onAddTag: p,
                        onAddTagError: m,
                        maxTags: O.G7,
                        maxTaxLength: O._0,
                        placeholder: n.keywords.length < 1 ? C.intl.string(C.t.EL4Lho) : void 0,
                    }),
                    null != x
                        ? (0, r.jsx)(a.Text, {
                              color: "text-danger",
                              variant: "text-sm/normal",
                              className: N.error,
                              children: x,
                          })
                        : null,
                ],
            }),
            h.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(a.X6q, {
                              variant: "text-xs/bold",
                              color: "text-muted",
                              className: N.subHeader,
                              children: C.intl.string(C.t.sF28Oj),
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
        s = t.id,
        o = i.useCallback(() => {
            (0, c.J9)(s, !l);
        }, [s, l]);
    return (0, r.jsxs)("div", {
        className: N.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: N.header,
                        children: C.intl.string(C.t.DhJ8ur),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: C.intl.string(C.t["/RSSlZ"]),
                    }),
                    (0, r.jsx)("div", {
                        className: N.editableSection,
                        children: (0, r.jsx)(a.zxk, {
                            size: "sm",
                            variant: l ? "secondary" : "active",
                            text: l ? C.intl.string(C.t.XnrNLi) : C.intl.string(C.t.bHbZLC),
                            onClick: o,
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
function w(e) {
    let { preferredLocale: t } = e,
        n = i.useMemo(() => (0, y.jb)(), []),
        l = i.useCallback((e) => {
            g.Z.updateGuild({ preferredLocale: e });
        }, []);
    return (0, r.jsxs)("div", {
        className: N.twoColumns,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: N.header,
                        children: C.intl.string(C.t.pO60f3),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: C.intl.string(C.t["SF/GRk"]),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: N.localeSelect,
                children: (0, r.jsx)(a.q4e, {
                    value: t,
                    options: n,
                    onChange: l,
                }),
            }),
        ],
    });
}
function R() {
    return (0, r.jsx)("div", { className: N.divider });
}
function D(e) {
    let { requireTerms: t, rules: n, settingsView: i } = e,
        {
            errors: l,
            guildMetadata: a,
            guild: o,
        } = (0, s.cj)([p.Z], () => {
            let { errors: e, guildMetadata: t, guild: n } = p.Z.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n,
            };
        });
    if (null == o) return null;
    let c = i === _.U.ELIGIBLE_DISABLED;
    return (0, r.jsxs)("div", {
        className: N.settings,
        children: [
            (0, r.jsx)(I, {
                guild: o,
                requireDescription: c,
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(S, {
                guild: o,
                guildMetadata: a,
                requirePrimaryCategory: c,
                error: l.discovery_splash,
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(T, {
                guildId: o.id,
                guildMetadata: a,
                requireTag: c,
                error: l.keywords,
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(P, {
                guild: o,
                guildMetadata: a,
            }),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(w, { preferredLocale: o.preferredLocale }),
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
