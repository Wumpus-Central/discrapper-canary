n.d(t, { Z: () => m }), n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(692547),
    a = n(481060),
    s = n(45966),
    o = n(637853),
    c = n(889369),
    d = n(974513),
    u = n(290511),
    g = n(388032),
    f = n(212781);
function m(e) {
    let { guildId: t, scrollToQuestions: n } = e,
        m = (0, i.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        b = (0, i.e7)([c.Z], () => c.Z.editedDefaultChannelIds),
        [p, h] = (0, o.VF)(t, b),
        [x, j] = (0, d.OA)(t, [...b]),
        v = m ? j.length : h.length,
        O = m ? x.length : p.length,
        C = O >= u.X,
        y = j.length - h.length,
        N = (0, r.jsx)(a.owK, {
            size: "sm",
            color: l.Z.unsafe_rawColors.BRAND_500.css,
            secondaryColor: l.Z.unsafe_rawColors.WHITE.css,
            className: f.icon,
        }),
        E = (0, r.jsx)(a.k$p, {
            size: "sm",
            className: f.icon,
            color: l.Z.colors.WHITE.css,
            secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
        }),
        I = [(Math.min(u.X, O) / u.X) * 100],
        S = C ? [l.Z.colors.TEXT_FEEDBACK_POSITIVE.css] : [l.Z.colors.TEXT_BRAND.css];
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsxs)("div", {
                className: f.header,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/bold",
                        color: "text-brand",
                        children: g.intl.format(g.t.kvroKO, { count: O }),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        children: g.intl.format(g.t["0MjxJ5"], { count: v }),
                    }),
                ],
            }),
            (0, r.jsx)(a.yGy, {
                foregroundColors: S,
                percents: I,
                size: a.yGy.Sizes.XSMALL,
            }),
            (0, r.jsxs)("div", {
                className: f.requiredItem,
                children: [
                    C ? N : E,
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: g.intl.format(g.t.PwXgSy, { count: u.X }),
                    }),
                ],
            }),
            m &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: f.requiredItem,
                            children: [
                                (0, r.jsx)(a.d3s, {
                                    size: "sm",
                                    color: l.Z.colors.WHITE.css,
                                    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
                                    className: f.icon,
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: g.intl.string(g.t.AyvkOK),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: f.requiredItem,
                            children: [
                                (0, r.jsx)(a.d3s, {
                                    size: "sm",
                                    color: l.Z.colors.WHITE.css,
                                    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
                                    className: f.icon,
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: g.intl.format(g.t["8Geut3"], {
                                        count: y,
                                        prejoinHook: (e) =>
                                            (0, r.jsx)(a.eee, {
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
