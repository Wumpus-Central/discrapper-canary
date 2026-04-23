n.d(t, { s: () => k });
var i = n(627968),
    l = n(64700);
n(516773);
var s = n(311907),
    r = n(834730),
    a = n(534514),
    o = n(821609),
    d = n(260598),
    c = n(691885),
    u = n(513521),
    m = n(460760),
    g = n(596484),
    h = n(405810),
    x = n(498642),
    _ = n(997509),
    p = n(555337),
    A = n(310345),
    E = n(764548),
    f = n(268075),
    j = n(458907),
    N = n(719175),
    I = n(366846),
    C = n(716610),
    b = n(927573),
    v = n(814758),
    S = n(985018),
    T = n(307456);
function y() {
    return (0, i.jsx)(r.E, {
        tag: "span",
        variant: "text-xs/bold",
        color: "text-feedback-critical",
        className: T.mw,
        children: "*",
    });
}
function R(e) {
    let { guild: t, requireDescription: n } = e,
        c = l.useCallback((e) => {
            _.A.updateGuild({ discoverySplash: e });
        }, []),
        u = l.useCallback(() => {
            _.A.updateGuild({ discoverySplash: null });
        }, []),
        m = l.useCallback((e) => {
            _.A.updateGuild({ description: e });
        }, []),
        { memberCount: g, onlineCount: p } = (0, s.cf)([x.A], () => ({
            memberCount: x.A.getMemberCount(t.id),
            onlineCount: x.A.getOnlineCount(t.id),
        }));
    return (0, i.jsxs)("div", {
        className: T.cL,
        children: [
            (0, i.jsxs)("div", {
                className: T.hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(a.D, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: T.wx,
                                children: S.intl.string(S.t.LYju5J),
                            }),
                            (0, i.jsx)(r.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: S.intl.string(S.t["53LhI6"]),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(a.D, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: T.uI,
                                children: S.intl.string(S.t.JaecVH),
                            }),
                            (0, i.jsx)(r.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: S.intl.string(S.t.VJMq8R),
                            }),
                            (0, i.jsxs)("div", {
                                className: T.Ll,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: T.wF,
                                        children: (0, i.jsx)(h.A, {
                                            onChange: c,
                                            text: S.intl.string(S.t["3UB9ad"]),
                                            size: "sm",
                                            variant: "secondary",
                                        }),
                                    }),
                                    null != t.discoverySplash
                                        ? (0, i.jsx)("div", {
                                              "data-button-hoisted-classname-wrapper": !0,
                                              className: T.wF,
                                              children: (0, i.jsx)(o.$, {
                                                  variant: "critical-secondary",
                                                  size: "sm",
                                                  text: S.intl.string(S.t.N86XcP),
                                                  onClick: u,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(a.D, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: T.uI,
                                children: [S.intl.string(S.t["1Ts7QP"]), n ? (0, i.jsx)(y, {}) : null],
                            }),
                            (0, i.jsx)(r.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: S.intl.string(S.t["6Y9q8d"]),
                            }),
                            (0, i.jsx)("div", {
                                className: T.wF,
                                children: (0, i.jsx)(d.f, {
                                    value: t.description ?? "",
                                    placeholder: S.intl.string(S.t.Nvfowl),
                                    onChange: m,
                                    maxLength: 300,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(E.A, { className: T.VH, guild: t, memberCount: g, presenceCount: p }),
        ],
    });
}
function L(e) {
    let { guild: t, guildMetadata: n, requirePrimaryCategory: l, error: s } = e;
    return (0, i.jsxs)("div", {
        className: T.hd,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(a.D, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: T.wx,
                        children: S.intl.string(S.t["5b4VCV"]),
                    }),
                    (0, i.jsx)(r.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: S.intl.string(S.t.MMEJFB),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(a.D, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: T.uI,
                        children: [S.intl.string(S.t.Rv9Anz), l ? (0, i.jsx)(y, {}) : null],
                    }),
                    (0, i.jsx)(r.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: S.intl.string(S.t.CE5Gya),
                    }),
                    (0, i.jsx)("div", {
                        className: T.wF,
                        children: (0, i.jsx)(j.T, { guildId: t.id, guildMetadata: n }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(a.D, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: T.uI,
                        children: S.intl.string(S.t.oOPlPA),
                    }),
                    (0, i.jsx)(r.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: S.intl.string(S.t["4jnzla"]),
                    }),
                    (0, i.jsx)("div", { className: T.wF, children: (0, i.jsx)(N.A, { guild: t, guildMetadata: n }) }),
                    null != s
                        ? (0, i.jsx)(r.E, {
                              color: "text-feedback-critical",
                              variant: "text-sm/normal",
                              className: T.z3,
                              children: s,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function D(e) {
    let { guildId: t, guildMetadata: n, requireTag: s, error: o } = e,
        [d, c] = l.useState(null),
        h = l.useCallback(
            (e) => {
                let i = Array.from(e),
                    l = [...n.keywords].filter((e) => !i.includes(e));
                c(null), (0, m.ZH)(t, l);
            },
            [t, n],
        ),
        x = l.useCallback(
            (e) => {
                let { keywords: i } = n;
                i.length >= b.Qy || i.includes(e) || (c(null), (0, m.ZH)(t, [...i, e]));
            },
            [t, n],
        ),
        _ = l.useMemo(
            () =>
                (0, A.hV)(n.primaryCategoryId)
                    .filter((e) => !n.keywords.includes(e))
                    .map((e) => {
                        let t = n.keywords.length >= b.Qy;
                        return {
                            text: e,
                            onClick: () => x(e),
                            disabled: t,
                            tooltipText: t ? S.intl.string(S.t.Xx7XeB) : void 0,
                        };
                    }),
            [n.keywords, n.primaryCategoryId, x],
        ),
        p = o ?? d,
        E = l.useMemo(() => n.keywords.map((e) => ({ id: e, label: e })), [n.keywords]);
    return (0, i.jsxs)("div", {
        className: T.hd,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(u.A, {
                        required: s,
                        label: S.intl.string(S.t["0PJZXj"]),
                        description: S.intl.string(S.t.ztiTDH),
                        tagsLabel: S.intl.string(S.t["0PJZXj"]),
                        tags: E,
                        onRemoveTag: h,
                        onAddTag: x,
                        onAddTagError: c,
                        maxTags: b.Qy,
                        maxTaxLength: b.Ug,
                        placeholder: n.keywords.length < 1 ? S.intl.string(S.t.EL4Lhs) : void 0,
                    }),
                    null != p
                        ? (0, i.jsx)(r.E, {
                              color: "text-feedback-critical",
                              variant: "text-sm/normal",
                              className: T.z3,
                              children: p,
                          })
                        : null,
                ],
            }),
            _.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(a.D, {
                              variant: "text-xs/bold",
                              color: "text-muted",
                              className: T.uI,
                              children: S.intl.string(S.t.sF28Ou),
                          }),
                          (0, i.jsx)("div", { className: T.wF, children: (0, i.jsx)(g.z, { pills: _ }) }),
                      ],
                  })
                : null,
        ],
    });
}
function O(e) {
    let { guild: t, guildMetadata: n } = e,
        { emojiDiscoverabilityEnabled: s } = n,
        d = t.id,
        c = l.useCallback(() => {
            (0, m.r8)(d, !s);
        }, [d, s]);
    return (0, i.jsxs)("div", {
        className: T.cL,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(a.D, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: T.wx,
                        children: S.intl.string(S.t.DhJ8ur),
                    }),
                    (0, i.jsx)(r.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: S.intl.string(S.t["/RSSlV"]),
                    }),
                    (0, i.jsx)("div", {
                        className: T.wF,
                        children: (0, i.jsx)(o.$, {
                            size: "sm",
                            variant: s ? "secondary" : "active",
                            text: s ? S.intl.string(S.t.XnrNLi) : S.intl.string(S.t.bHbZLP),
                            onClick: c,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", { children: (0, i.jsx)(f.k, { guild: t, discoverableGuild: null }) }),
        ],
    });
}
function G(e) {
    let { preferredLocale: t } = e,
        n = l.useMemo(() => (0, v.fr)(), []),
        s = l.useCallback((e) => {
            _.A.updateGuild({ preferredLocale: e });
        }, []);
    return (0, i.jsx)(c.l, {
        layout: "horizontal-responsive",
        label: S.intl.string(S.t.pO60fy),
        description: S.intl.string(S.t["SF/GRh"]),
        value: t,
        options: n,
        onSelectionChange: s,
        selectionMode: "single",
        fullWidth: !0,
    });
}
function M() {
    return (0, i.jsx)("div", { className: T.yF });
}
function k(e) {
    let { requireTerms: t, rules: n, settingsView: l } = e,
        {
            errors: r,
            guildMetadata: a,
            guild: o,
        } = (0, s.cf)([p.A], () => {
            let { errors: e, guildMetadata: t, guild: n } = p.A.getProps();
            return { errors: e, guildMetadata: t, guild: n };
        });
    if (null == o) return null;
    let d = l === C.v.ELIGIBLE_DISABLED;
    return (0, i.jsxs)("div", {
        className: T.W0,
        children: [
            (0, i.jsx)(R, { guild: o, requireDescription: d }),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(L, { guild: o, guildMetadata: a, requirePrimaryCategory: d, error: r.discovery_splash }),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(D, { guildId: o.id, guildMetadata: a, requireTag: d, error: r.keywords }),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(O, { guild: o, guildMetadata: a }),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(G, { preferredLocale: o.preferredLocale }),
            (0, i.jsx)(M, {}),
            (0, i.jsx)("div", { children: (0, i.jsx)(I.D, { requireTerms: t, rules: n }) }),
        ],
    });
}
