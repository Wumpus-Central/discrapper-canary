"use strict";
n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(827734),
    r = n(397927),
    a = n(591552),
    o = n(961973),
    d = n(863694),
    c = n(259866),
    u = n(539916),
    m = n(985018),
    g = n(821683);
function x(e) {
    let { guildId: t, scrollToQuestions: n } = e,
        x = (0, s.bG)([a.A], () => a.A.isAdvancedMode(t)),
        h = (0, s.bG)([d.A], () => d.A.editedDefaultChannelIds),
        [_, A] = (0, o.tb)(t, h),
        [p, f] = (0, c.tB)(t, [...h]),
        j = x ? f.length : A.length,
        N = x ? p.length : _.length,
        E = N >= u.Kd,
        b = f.length - A.length,
        T = (0, i.jsx)(r.yr3, {
            size: "sm",
            color: l.A.unsafe_rawColors.BRAND_500.css,
            secondaryColor: l.A.unsafe_rawColors.WHITE.css,
            className: g.Kk,
        }),
        C = (0, i.jsx)(r.aXh, {
            size: "sm",
            className: g.Kk,
            color: l.A.colors.WHITE.css,
            secondaryColor: l.A.colors.BACKGROUND_MOD_MUTED.css,
        }),
        I = [(Math.min(u.Kd, N) / u.Kd) * 100],
        v = E ? [l.A.colors.TEXT_FEEDBACK_POSITIVE.css] : [l.A.colors.TEXT_BRAND.css];
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsxs)("div", {
                className: g.wx,
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: "text-xs/bold",
                        color: "text-brand",
                        children: m.intl.format(m.t.kvroKO, { count: N }),
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        children: m.intl.format(m.t["0MjxJ5"], { count: j }),
                    }),
                ],
            }),
            (0, i.jsx)(r.LvI, { foregroundColors: v, percents: I, size: r.LvI.Sizes.XSMALL }),
            (0, i.jsxs)("div", {
                className: g.n,
                children: [
                    E ? T : C,
                    (0, i.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: m.intl.format(m.t.PwXgSy, { count: u.Kd }),
                    }),
                ],
            }),
            x &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: g.n,
                            children: [
                                (0, i.jsx)(r.mir, {
                                    size: "sm",
                                    color: l.A.colors.WHITE.css,
                                    secondaryColor: l.A.colors.BACKGROUND_MOD_MUTED.css,
                                    className: g.Kk,
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: m.intl.string(m.t.AyvkOK),
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: g.n,
                            children: [
                                (0, i.jsx)(r.mir, {
                                    size: "sm",
                                    color: l.A.colors.WHITE.css,
                                    secondaryColor: l.A.colors.BACKGROUND_MOD_MUTED.css,
                                    className: g.Kk,
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: m.intl.format(m.t["8Geut3"], {
                                        count: b,
                                        prejoinHook: (e) =>
                                            (0, i.jsx)(r.MzZ, {
                                                onClick: n,
                                                children: (0, i.jsx)(r.Text, {
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
