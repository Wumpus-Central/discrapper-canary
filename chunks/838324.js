n.d(t, { Z: () => g }), n(47120);
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
    p = n(21294);
function g(e) {
    let { guildId: t, scrollToQuestions: n } = e,
        g = (0, i.e7)([l.Z], () => l.Z.isAdvancedMode(t)),
        h = (0, i.e7)([c.Z], () => c.Z.editedDefaultChannelIds),
        [f, b] = (0, o.VF)(t, h),
        [x, j] = (0, d.OA)(t, [...h]),
        N = g ? j.length : b.length,
        v = g ? x.length : f.length,
        _ = N < u.md,
        O = v >= u.X,
        y = j.length - b.length,
        C = (0, r.jsx)(a.owK, {
            size: 'sm',
            color: s.Z.unsafe_rawColors.BRAND_500.css,
            secondaryColor: s.Z.unsafe_rawColors.WHITE_100.css,
            className: p.icon
        }),
        I = (0, r.jsx)(a.k$p, {
            size: 'sm',
            className: p.icon,
            color: s.Z.colors.WHITE.css,
            secondaryColor: s.Z.colors.BACKGROUND_ACCENT.css
        }),
        E = [(Math.min(u.X, v) / u.md) * 100, (Math.min(u.md, N) / u.md) * 100],
        S = !_ && O ? [s.Z.colors.TEXT_POSITIVE.css, s.Z.colors.TEXT_POSITIVE.css] : [s.Z.colors.TEXT_BRAND.css, s.Z.colors.TEXT_MUTED.css];
    return (0, r.jsxs)('div', {
        className: p.container,
        children: [
            (0, r.jsxs)('div', {
                className: p.header,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/bold',
                        color: 'text-brand',
                        children: m.NW.format(m.t.kvroKC, { count: v })
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
                className: p.requiredItem,
                children: [
                    _ ? I : C,
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: m.NW.format(m.t.k0COZW, { count: u.md })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: p.requiredItem,
                children: [
                    O ? C : I,
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: m.NW.format(m.t.PwXgS0, { count: u.X })
                    })
                ]
            }),
            g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: p.requiredItem,
                            children: [
                                (0, r.jsx)(a.d3s, {
                                    size: 'sm',
                                    color: s.Z.colors.WHITE.css,
                                    secondaryColor: s.Z.colors.BACKGROUND_ACCENT.css,
                                    className: p.icon
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: m.NW.string(m.t.AyvkOD)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: p.requiredItem,
                            children: [
                                (0, r.jsx)(a.d3s, {
                                    size: 'sm',
                                    color: s.Z.colors.WHITE.css,
                                    secondaryColor: s.Z.colors.BACKGROUND_ACCENT.css,
                                    className: p.icon
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: m.NW.format(m.t['8Geut7'], {
                                        count: y,
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
