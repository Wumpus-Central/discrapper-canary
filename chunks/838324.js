n.d(t, { Z: () => p }), n(388685);
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(692547),
    a = n(481060),
    s = n(45966),
    o = n(637853),
    c = n(889369),
    d = n(974513),
    u = n(290511),
    g = n(388032),
    m = n(636942);
function p(e) {
    let { guildId: t, scrollToQuestions: n } = e,
        p = (0, i.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        f = (0, i.e7)([c.Z], () => c.Z.editedDefaultChannelIds),
        [h, b] = (0, o.VF)(t, f),
        [x, j] = (0, d.OA)(t, [...f]),
        _ = p ? j.length : b.length,
        v = p ? x.length : h.length,
        O = _ < u.md,
        C = v >= u.X,
        y = j.length - b.length,
        N = (0, r.jsx)(a.owK, {
            size: "sm",
            color: l.Z.unsafe_rawColors.BRAND_500.css,
            secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css,
            className: m.icon,
        }),
        E = (0, r.jsx)(a.k$p, {
            size: "sm",
            className: m.icon,
            color: l.Z.colors.WHITE.css,
            secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
        }),
        I = [(Math.min(u.X, v) / u.md) * 100, (Math.min(u.md, _) / u.md) * 100],
        S =
            !O && C
                ? [l.Z.colors.TEXT_FEEDBACK_POSITIVE.css, l.Z.colors.TEXT_FEEDBACK_POSITIVE.css]
                : [l.Z.colors.TEXT_BRAND.css, l.Z.colors.TEXT_MUTED.css];
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsxs)("div", {
                className: m.header,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/bold",
                        color: "text-brand",
                        children: g.intl.format(g.t.kvroKO, { count: v }),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        children: g.intl.format(g.t["0MjxJ5"], { count: _ }),
                    }),
                ],
            }),
            (0, r.jsx)(a.yGy, {
                foregroundColors: S,
                percents: I,
                size: a.yGy.Sizes.XSMALL,
            }),
            (0, r.jsxs)("div", {
                className: m.requiredItem,
                children: [
                    O ? E : N,
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: g.intl.format(g.t.k0COZY, { count: u.md }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: m.requiredItem,
                children: [
                    C ? N : E,
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: g.intl.format(g.t.PwXgSy, { count: u.X }),
                    }),
                ],
            }),
            p &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: m.requiredItem,
                            children: [
                                (0, r.jsx)(a.d3s, {
                                    size: "sm",
                                    color: l.Z.colors.WHITE.css,
                                    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
                                    className: m.icon,
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: g.intl.string(g.t.AyvkOK),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: m.requiredItem,
                            children: [
                                (0, r.jsx)(a.d3s, {
                                    size: "sm",
                                    color: l.Z.colors.WHITE.css,
                                    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
                                    className: m.icon,
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: g.intl.format(g.t["8Geut3"], {
                                        count: y,
                                        prejoinHook: (e) =>
                                            (0, r.jsx)(a.Anchor, {
                                                onClick: n,
                                                children: (0, r.jsx)(a.Text, {
                                                    tag: "span",
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: e,
                                                }),
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
