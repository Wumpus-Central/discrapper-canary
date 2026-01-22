n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(827734),
    s = n(397927),
    a = n(591552),
    c = n(961973),
    o = n(863694),
    d = n(259866),
    u = n(539916),
    f = n(985018),
    g = n(821683);

function b(e) {
    let { guildId: t, scrollToQuestions: n } = e,
        b = (0, i.bG)([a.A], () => a.A.isAdvancedMode(t)),
        m = (0, i.bG)([o.A], () => o.A.editedDefaultChannelIds),
        [p, x] = (0, c.tb)(t, m),
        [h, j] = (0, d.tB)(t, [...m]),
        O = b ? j.length : x.length,
        y = b ? h.length : p.length,
        v = y >= u.Kd,
        A = j.length - x.length,
        E = (0, r.jsx)(s.yr3, {
            size: "sm",
            color: l.A.unsafe_rawColors.BRAND_500.css,
            secondaryColor: l.A.unsafe_rawColors.WHITE.css,
            className: g.Kk,
        }),
        N = (0, r.jsx)(s.aXh, {
            size: "sm",
            className: g.Kk,
            color: l.A.colors.WHITE.css,
            secondaryColor: l.A.colors.BACKGROUND_MOD_MUTED.css,
        }),
        _ = [(Math.min(u.Kd, y) / u.Kd) * 100],
        S = v ? [l.A.colors.TEXT_FEEDBACK_POSITIVE.css] : [l.A.colors.TEXT_BRAND.css];
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [
            (0, r.jsxs)("div", {
                className: g.wx,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/bold",
                        color: "text-brand",
                        children: f.intl.format(f.t.kvroKO, {
                            count: y,
                        }),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        children: f.intl.format(f.t["0MjxJ5"], {
                            count: O,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(s.LvI, {
                foregroundColors: S,
                percents: _,
                size: s.LvI.Sizes.XSMALL,
            }),
            (0, r.jsxs)("div", {
                className: g.n,
                children: [
                    v ? E : N,
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: f.intl.format(f.t.PwXgSy, {
                            count: u.Kd,
                        }),
                    }),
                ],
            }),
            b &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: g.n,
                            children: [
                                (0, r.jsx)(s.mir, {
                                    size: "sm",
                                    color: l.A.colors.WHITE.css,
                                    secondaryColor: l.A.colors.BACKGROUND_MOD_MUTED.css,
                                    className: g.Kk,
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: f.intl.string(f.t.AyvkOK),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: g.n,
                            children: [
                                (0, r.jsx)(s.mir, {
                                    size: "sm",
                                    color: l.A.colors.WHITE.css,
                                    secondaryColor: l.A.colors.BACKGROUND_MOD_MUTED.css,
                                    className: g.Kk,
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: f.intl.format(f.t["8Geut3"], {
                                        count: A,
                                        prejoinHook: (e) =>
                                            (0, r.jsx)(s.MzZ, {
                                                onClick: n,
                                                children: (0, r.jsx)(s.Text, {
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
