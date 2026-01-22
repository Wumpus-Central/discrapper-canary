n.d(t, { s: () => w }), n(228524), n(896048);
var r = n(627968),
    i = n(64700);
n(516773);
var l = n(311907),
    s = n(397927),
    a = n(513521),
    c = n(460760),
    o = n(596484),
    d = n(405810),
    u = n(498642),
    f = n(997509),
    g = n(555337),
    b = n(310345),
    m = n(764548),
    p = n(268075),
    x = n(458907),
    h = n(719175),
    j = n(366846),
    O = n(716610),
    y = n(927573),
    v = n(814758),
    A = n(985018),
    E = n(409203);
function N() {
    return (0, r.jsx)(s.Text, {
        tag: "span",
        variant: "text-xs/bold",
        color: "text-feedback-critical",
        className: E.mw,
        children: "*",
    });
}
function _(e) {
    var t;
    let { guild: n, requireDescription: a } = e,
        c = i.useCallback((e) => {
            f.A.updateGuild({ discoverySplash: e });
        }, []),
        o = i.useCallback(() => {
            f.A.updateGuild({ discoverySplash: null });
        }, []),
        g = i.useCallback((e) => {
            f.A.updateGuild({ description: e });
        }, []),
        { memberCount: b, onlineCount: p } = (0, l.cf)([u.A], () => ({
            memberCount: u.A.getMemberCount(n.id),
            onlineCount: u.A.getOnlineCount(n.id),
        }));
    return (0, r.jsxs)("div", {
        className: E.cL,
        children: [
            (0, r.jsxs)("div", {
                className: E.hd,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: E.wx,
                                children: A.intl.string(A.t.LYju5J),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: A.intl.string(A.t["53LhI6"]),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: E.uI,
                                children: A.intl.string(A.t.JaecVH),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: A.intl.string(A.t.VJMq8R),
                            }),
                            (0, r.jsxs)("div", {
                                className: E.Ll,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: E.wF,
                                        children: (0, r.jsx)(d.A, {
                                            onChange: c,
                                            text: A.intl.string(A.t["3UB9ad"]),
                                            size: "sm",
                                            variant: "secondary",
                                        }),
                                    }),
                                    null != n.discoverySplash
                                        ? (0, r.jsx)("div", {
                                              "data-button-hoisted-classname-wrapper": !0,
                                              className: E.wF,
                                              children: (0, r.jsx)(s.Button, {
                                                  variant: "critical-secondary",
                                                  size: "sm",
                                                  text: A.intl.string(A.t.N86XcP),
                                                  onClick: o,
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
                                className: E.uI,
                                children: [A.intl.string(A.t["1Ts7QP"]), a ? (0, r.jsx)(N, {}) : null],
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: A.intl.string(A.t["6Y9q8d"]),
                            }),
                            (0, r.jsx)("div", {
                                className: E.wF,
                                children: (0, r.jsx)(s.fs1, {
                                    value: null != (t = n.description) ? t : "",
                                    placeholder: A.intl.string(A.t.Nvfowl),
                                    onChange: g,
                                    maxLength: 300,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(m.A, {
                className: E.VH,
                guild: n,
                memberCount: b,
                presenceCount: p,
            }),
        ],
    });
}
function S(e) {
    let { guild: t, guildMetadata: n, requirePrimaryCategory: i, error: l } = e;
    return (0, r.jsxs)("div", {
        className: E.hd,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: E.wx,
                        children: A.intl.string(A.t["5b4VCV"]),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: A.intl.string(A.t.MMEJFB),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)(s.Heading, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: E.uI,
                        children: [A.intl.string(A.t.Rv9Anz), i ? (0, r.jsx)(N, {}) : null],
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: A.intl.string(A.t.CE5Gya),
                    }),
                    (0, r.jsx)("div", {
                        className: E.wF,
                        children: (0, r.jsx)(x.T, {
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
                        className: E.uI,
                        children: A.intl.string(A.t.oOPlPA),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: A.intl.string(A.t["4jnzla"]),
                    }),
                    (0, r.jsx)("div", {
                        className: E.wF,
                        children: (0, r.jsx)(h.A, {
                            guild: t,
                            guildMetadata: n,
                        }),
                    }),
                    null != l
                        ? (0, r.jsx)(s.Text, {
                              color: "text-feedback-critical",
                              variant: "text-sm/normal",
                              className: E.z3,
                              children: l,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function T(e) {
    let { guildId: t, guildMetadata: n, requireTag: l, error: d } = e,
        [u, f] = i.useState(null),
        g = i.useCallback(
            (e) => {
                let r = Array.from(e),
                    i = [...n.keywords].filter((e) => !r.includes(e));
                f(null), (0, c.ZH)(t, i);
            },
            [t, n],
        ),
        m = i.useCallback(
            (e) => {
                let { keywords: r } = n;
                r.length >= y.Qy || r.includes(e) || (f(null), (0, c.ZH)(t, [...r, e]));
            },
            [t, n],
        ),
        p = i.useMemo(
            () =>
                (0, b.hV)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => {
                        let t = n.keywords.length >= y.Qy;
                        return {
                            text: e,
                            onClick: () => m(e),
                            disabled: t,
                            tooltipText: t ? A.intl.string(A.t.Xx7XeB) : void 0,
                        };
                    }),
            [n.keywords, n.primaryCategoryId, m],
        ),
        x = null != d ? d : u,
        h = i.useMemo(
            () =>
                n.keywords.map((e) => ({
                    id: e,
                    label: e,
                })),
            [n.keywords],
        );
    return (0, r.jsxs)("div", {
        className: E.hd,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(a.A, {
                        required: l,
                        label: A.intl.string(A.t["0PJZXj"]),
                        description: A.intl.string(A.t.ztiTDH),
                        tagsLabel: A.intl.string(A.t["0PJZXj"]),
                        tags: h,
                        onRemoveTag: g,
                        onAddTag: m,
                        onAddTagError: f,
                        maxTags: y.Qy,
                        maxTaxLength: y.Ug,
                        placeholder: n.keywords.length < 1 ? A.intl.string(A.t.EL4Lhs) : void 0,
                    }),
                    null != x
                        ? (0, r.jsx)(s.Text, {
                              color: "text-feedback-critical",
                              variant: "text-sm/normal",
                              className: E.z3,
                              children: x,
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
                              className: E.uI,
                              children: A.intl.string(A.t.sF28Ou),
                          }),
                          (0, r.jsx)("div", {
                              className: E.wF,
                              children: (0, r.jsx)(o.z, { pills: p }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function I(e) {
    let { guild: t, guildMetadata: n } = e,
        { emojiDiscoverabilityEnabled: l } = n,
        a = t.id,
        o = i.useCallback(() => {
            (0, c.r8)(a, !l);
        }, [a, l]);
    return (0, r.jsxs)("div", {
        className: E.cL,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: E.wx,
                        children: A.intl.string(A.t.DhJ8ur),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: A.intl.string(A.t["/RSSlV"]),
                    }),
                    (0, r.jsx)("div", {
                        className: E.wF,
                        children: (0, r.jsx)(s.Button, {
                            size: "sm",
                            variant: l ? "secondary" : "active",
                            text: l ? A.intl.string(A.t.XnrNLi) : A.intl.string(A.t.bHbZLP),
                            onClick: o,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(p.k, {
                    guild: t,
                    discoverableGuild: null,
                }),
            }),
        ],
    });
}
function C(e) {
    let { preferredLocale: t } = e,
        n = i.useMemo(() => (0, v.fr)(), []),
        l = i.useCallback((e) => {
            f.A.updateGuild({ preferredLocale: e });
        }, []);
    return (0, r.jsx)(s.l6P, {
        layout: "horizontal-responsive",
        label: A.intl.string(A.t.pO60fy),
        description: A.intl.string(A.t["SF/GRh"]),
        value: t,
        options: n,
        onSelectionChange: l,
        selectionMode: "single",
        fullWidth: !0,
    });
}
function P() {
    return (0, r.jsx)("div", { className: E.yF });
}
function w(e) {
    let { requireTerms: t, rules: n, settingsView: i } = e,
        {
            errors: s,
            guildMetadata: a,
            guild: c,
        } = (0, l.cf)([g.A], () => {
            let { errors: e, guildMetadata: t, guild: n } = g.A.getProps();
            return {
                errors: e,
                guildMetadata: t,
                guild: n,
            };
        });
    if (null == c) return null;
    let o = i === O.v.ELIGIBLE_DISABLED;
    return (0, r.jsxs)("div", {
        className: E.W0,
        children: [
            (0, r.jsx)(_, {
                guild: c,
                requireDescription: o,
            }),
            (0, r.jsx)(P, {}),
            (0, r.jsx)(S, {
                guild: c,
                guildMetadata: a,
                requirePrimaryCategory: o,
                error: s.discovery_splash,
            }),
            (0, r.jsx)(P, {}),
            (0, r.jsx)(T, {
                guildId: c.id,
                guildMetadata: a,
                requireTag: o,
                error: s.keywords,
            }),
            (0, r.jsx)(P, {}),
            (0, r.jsx)(I, {
                guild: c,
                guildMetadata: a,
            }),
            (0, r.jsx)(P, {}),
            (0, r.jsx)(C, { preferredLocale: c.preferredLocale }),
            (0, r.jsx)(P, {}),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(j.D, {
                    requireTerms: t,
                    rules: n,
                }),
            }),
        ],
    });
}
