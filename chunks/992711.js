n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(827734),
    r = n(628284),
    a = n(285796),
    o = n(349288),
    d = n(834730),
    c = n(248530),
    u = n(885574),
    m = n(591552),
    g = n(961973),
    h = n(863694),
    x = n(259866),
    _ = n(539916),
    p = n(985018),
    A = n(276609);
function E(e) {
    let { guildId: t, scrollToQuestions: n } = e,
        E = (0, l.bG)([m.A], () => m.A.isAdvancedMode(t)),
        f = (0, l.bG)([h.A], () => h.A.editedDefaultChannelIds),
        [j, N] = (0, g.tb)(t, f),
        [I, C] = (0, x.tB)(t, [...f]),
        b = E ? C.length : N.length,
        v = E ? I.length : j.length,
        S = v >= _.Kd,
        T = C.length - N.length,
        y = (0, i.jsx)(r.y, {
            size: "sm",
            color: s.A.unsafe_rawColors.BRAND_500.css,
            secondaryColor: s.A.unsafe_rawColors.WHITE.css,
            className: A.Kk,
        }),
        R = (0, i.jsx)(a.a, {
            size: "sm",
            className: A.Kk,
            color: s.A.colors.WHITE.css,
            secondaryColor: s.A.colors.BACKGROUND_MOD_MUTED.css,
        }),
        L = [(Math.min(_.Kd, v) / _.Kd) * 100],
        D = S ? [s.A.colors.TEXT_FEEDBACK_POSITIVE.css] : [s.A.colors.TEXT_BRAND.css];
    return (0, i.jsxs)("div", {
        className: A.kL,
        children: [
            (0, i.jsxs)("div", {
                className: A.wx,
                children: [
                    (0, i.jsx)(d.E, {
                        variant: "text-xs/bold",
                        color: "text-brand",
                        children: p.intl.format(p.t.kvroKO, { count: v }),
                    }),
                    (0, i.jsx)(d.E, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        children: p.intl.format(p.t["0MjxJ5"], { count: b }),
                    }),
                ],
            }),
            (0, i.jsx)(c.L, { foregroundColors: D, percents: L, size: c.L.Sizes.XSMALL }),
            (0, i.jsxs)("div", {
                className: A.n,
                children: [
                    S ? y : R,
                    (0, i.jsx)(d.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: p.intl.format(p.t.PwXgSy, { count: _.Kd }),
                    }),
                ],
            }),
            E &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: A.n,
                            children: [
                                (0, i.jsx)(u.m, {
                                    size: "sm",
                                    color: s.A.colors.WHITE.css,
                                    secondaryColor: s.A.colors.BACKGROUND_MOD_MUTED.css,
                                    className: A.Kk,
                                }),
                                (0, i.jsx)(d.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: p.intl.string(p.t.AyvkOK),
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: A.n,
                            children: [
                                (0, i.jsx)(u.m, {
                                    size: "sm",
                                    color: s.A.colors.WHITE.css,
                                    secondaryColor: s.A.colors.BACKGROUND_MOD_MUTED.css,
                                    className: A.Kk,
                                }),
                                (0, i.jsx)(d.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: p.intl.format(p.t["8Geut3"], {
                                        count: T,
                                        prejoinHook: (e) =>
                                            (0, i.jsx)(o.Anchor, {
                                                onClick: n,
                                                children: (0, i.jsx)(d.E, {
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
