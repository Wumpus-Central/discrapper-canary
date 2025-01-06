n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(692547),
    a = n(481060),
    s = n(45966),
    o = n(637853),
    c = n(889369),
    d = n(974513),
    u = n(290511),
    m = n(388032),
    h = n(127087);
function g(e) {
    let { guildId: t, scrollToQuestions: n } = e,
        g = (0, r.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        x = (0, r.e7)([c.Z], () => c.Z.editedDefaultChannelIds),
        [p, f] = (0, o.VF)(t, x),
        [C, v] = (0, d.OA)(t, [...x]),
        _ = g ? v.length : f.length,
        I = g ? C.length : p.length,
        N = _ < u.md,
        T = I >= u.X,
        j = v.length - f.length,
        b = (0, i.jsx)(a.CircleCheckIcon, {
            size: 'sm',
            color: l.Z.unsafe_rawColors.BRAND_500.css,
            secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css,
            className: h.icon
        }),
        S = (0, i.jsx)(a.CircleXIcon, {
            size: 'sm',
            className: h.icon,
            color: l.Z.colors.WHITE.css,
            secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css
        }),
        E = [(Math.min(u.X, I) / u.md) * 100, (Math.min(u.md, _) / u.md) * 100],
        R = !N && T ? [l.Z.colors.TEXT_POSITIVE.css, l.Z.colors.TEXT_POSITIVE.css] : [l.Z.colors.TEXT_BRAND.css, l.Z.colors.TEXT_MUTED.css];
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsxs)('div', {
                className: h.header,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/bold',
                        color: 'text-brand',
                        children: m.intl.format(m.t.kvroKC, { count: I })
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        children: m.intl.format(m.t['0MjxJy'], { count: _ })
                    })
                ]
            }),
            (0, i.jsx)(a.StackedProgress, {
                foregroundColors: R,
                percents: E,
                size: a.StackedProgress.Sizes.XSMALL
            }),
            (0, i.jsxs)('div', {
                className: h.requiredItem,
                children: [
                    N ? S : b,
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: m.intl.format(m.t.k0COZW, { count: u.md })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: h.requiredItem,
                children: [
                    T ? b : S,
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: m.intl.format(m.t.PwXgS0, { count: u.X })
                    })
                ]
            }),
            g &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.requiredItem,
                            children: [
                                (0, i.jsx)(a.CircleInformationIcon, {
                                    size: 'sm',
                                    color: l.Z.colors.WHITE.css,
                                    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
                                    className: h.icon
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: m.intl.string(m.t.AyvkOD)
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: h.requiredItem,
                            children: [
                                (0, i.jsx)(a.CircleInformationIcon, {
                                    size: 'sm',
                                    color: l.Z.colors.WHITE.css,
                                    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
                                    className: h.icon
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: m.intl.format(m.t['8Geut7'], {
                                        count: j,
                                        prejoinHook: (e) =>
                                            (0, i.jsx)(a.Anchor, {
                                                onClick: n,
                                                children: (0, i.jsx)(a.Text, {
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
