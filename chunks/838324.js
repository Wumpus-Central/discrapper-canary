n.d(t, { Z: () => p }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(692547),
    a = n(481060),
    l = n(45966),
    o = n(637853),
    c = n(889369),
    d = n(974513),
    u = n(290511),
    m = n(388032),
    g = n(974283);
function p(e) {
    let { guildId: t, scrollToQuestions: n } = e,
        p = (0, i.e7)([l.Z], () => l.Z.isAdvancedMode(t)),
        h = (0, i.e7)([c.Z], () => c.Z.editedDefaultChannelIds),
        [f, b] = (0, o.VF)(t, h),
        [x, j] = (0, d.OA)(t, [...h]),
        N = p ? j.length : b.length,
        _ = p ? x.length : f.length,
        v = N < u.md,
        C = _ >= u.X,
        O = j.length - b.length,
        y = (0, r.jsx)(a.owK, {
            size: 'sm',
            color: s.Z.unsafe_rawColors.BRAND_500.css,
            secondaryColor: s.Z.unsafe_rawColors.WHITE_100.css,
            className: g.icon
        }),
        I = (0, r.jsx)(a.k$p, {
            size: 'sm',
            className: g.icon,
            color: s.Z.colors.WHITE.css,
            secondaryColor: s.Z.colors.BACKGROUND_ACCENT.css
        }),
        E = [(Math.min(u.X, _) / u.md) * 100, (Math.min(u.md, N) / u.md) * 100],
        S = !v && C ? [s.Z.colors.TEXT_POSITIVE.css, s.Z.colors.TEXT_POSITIVE.css] : [s.Z.colors.TEXT_BRAND.css, s.Z.colors.TEXT_MUTED.css];
    return (0, r.jsxs)('div', {
        className: g.container,
        children: [
            (0, r.jsxs)('div', {
                className: g.header,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/bold',
                        color: 'text-brand',
                        children: m.NW.format(m.t.kvroKC, { count: _ })
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        children: m.NW.format(m.t['0MjxJy'], { count: N })
                    })
                ]
            }),
            (0, r.jsx)(a.yGy, {
                foregroundColors: S,
                percents: E,
                size: a.yGy.Sizes.XSMALL
            }),
            (0, r.jsxs)('div', {
                className: g.requiredItem,
                children: [
                    v ? I : y,
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: m.NW.format(m.t.k0COZW, { count: u.md })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: g.requiredItem,
                children: [
                    C ? y : I,
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: m.NW.format(m.t.PwXgS0, { count: u.X })
                    })
                ]
            }),
            p &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: g.requiredItem,
                            children: [
                                (0, r.jsx)(a.d3s, {
                                    size: 'sm',
                                    color: s.Z.colors.WHITE.css,
                                    secondaryColor: s.Z.colors.BACKGROUND_ACCENT.css,
                                    className: g.icon
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: m.NW.string(m.t.AyvkOD)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: g.requiredItem,
                            children: [
                                (0, r.jsx)(a.d3s, {
                                    size: 'sm',
                                    color: s.Z.colors.WHITE.css,
                                    secondaryColor: s.Z.colors.BACKGROUND_ACCENT.css,
                                    className: g.icon
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: m.NW.format(m.t['8Geut7'], {
                                        count: O,
                                        prejoinHook: (e) =>
                                            (0, r.jsx)(a.eee, {
                                                onClick: n,
                                                children: (0, r.jsx)(a.Text, {
                                                    tag: 'span',
                                                    variant: 'text-xs/normal',
                                                    color: 'text-link',
                                                    children: e
                                                })
                                            })
                                    })
                                })
                            ]
                        })
                    ]
                })
        ]
    });
}
