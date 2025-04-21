n.d(t, { Z: () => p }), n(388685);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(692547),
    s = n(481060),
    a = n(45966),
    o = n(637853),
    c = n(889369),
    d = n(974513),
    u = n(290511),
    m = n(388032),
    g = n(974283);
function p(e) {
    let { guildId: t, scrollToQuestions: n } = e,
        p = (0, i.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        h = (0, i.e7)([c.Z], () => c.Z.editedDefaultChannelIds),
        [f, x] = (0, o.VF)(t, h),
        [b, j] = (0, d.OA)(t, [...h]),
        _ = p ? j.length : x.length,
        v = p ? b.length : f.length,
        O = _ < u.md,
        C = v >= u.X,
        y = j.length - x.length,
        N = (0, r.jsx)(s.owK, {
            size: 'sm',
            color: l.Z.unsafe_rawColors.BRAND_500.css,
            secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css,
            className: g.icon
        }),
        I = (0, r.jsx)(s.k$p, {
            size: 'sm',
            className: g.icon,
            color: l.Z.colors.WHITE.css,
            secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css
        }),
        E = [(Math.min(u.X, v) / u.md) * 100, (Math.min(u.md, _) / u.md) * 100],
        S = !O && C ? [l.Z.colors.TEXT_POSITIVE.css, l.Z.colors.TEXT_POSITIVE.css] : [l.Z.colors.TEXT_BRAND.css, l.Z.colors.TEXT_MUTED.css];
    return (0, r.jsxs)('div', {
        className: g.container,
        children: [
            (0, r.jsxs)('div', {
                className: g.header,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/bold',
                        color: 'text-brand',
                        children: m.intl.format(m.t.kvroKC, { count: v })
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        children: m.intl.format(m.t['0MjxJy'], { count: _ })
                    })
                ]
            }),
            (0, r.jsx)(s.yGy, {
                foregroundColors: S,
                percents: E,
                size: s.yGy.Sizes.XSMALL
            }),
            (0, r.jsxs)('div', {
                className: g.requiredItem,
                children: [
                    O ? I : N,
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: m.intl.format(m.t.k0COZW, { count: u.md })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: g.requiredItem,
                children: [
                    C ? N : I,
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: m.intl.format(m.t.PwXgS0, { count: u.X })
                    })
                ]
            }),
            p &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: g.requiredItem,
                            children: [
                                (0, r.jsx)(s.d3s, {
                                    size: 'sm',
                                    color: l.Z.colors.WHITE.css,
                                    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
                                    className: g.icon
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: m.intl.string(m.t.AyvkOD)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: g.requiredItem,
                            children: [
                                (0, r.jsx)(s.d3s, {
                                    size: 'sm',
                                    color: l.Z.colors.WHITE.css,
                                    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
                                    className: g.icon
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: m.intl.format(m.t['8Geut7'], {
                                        count: y,
                                        prejoinHook: (e) =>
                                            (0, r.jsx)(s.eee, {
                                                onClick: n,
                                                children: (0, r.jsx)(s.Text, {
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
