n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(399606),
    s = n(780384),
    a = n(481060),
    o = n(210887),
    c = n(430824),
    d = n(999382),
    u = n(8426),
    m = n(969632),
    h = n(998164),
    g = n(340189),
    x = n(507317),
    p = n(399614),
    _ = n(387960),
    C = n(806742),
    f = n(388032),
    v = n(934842),
    N = n(91716),
    j = n(470264),
    I = n(710043),
    E = n(847950);
function b(e) {
    let { guild: t, saveOnClose: n } = e,
        [c, d] = r.useState('new'),
        b = r.useMemo(
            () => [
                {
                    value: 'new',
                    name: f.intl.string(f.t['4e5u3t'])
                },
                {
                    value: 'existing',
                    name: f.intl.string(f.t.cmkOsb)
                }
            ],
            []
        ),
        T = (0, l.e7)([o.Z], () => o.Z.theme);
    r.useEffect(
        () => () => {
            let e = m.Z.getSettings();
            (0, u.oo)(t.id, e);
        },
        [n, t.id]
    );
    let S = r.useMemo(() => ((0, s.ap)(T) ? ('existing' === c ? j : E) : 'existing' === c ? N : I), [c, T]);
    return (0, i.jsxs)('div', {
        className: v.page,
        children: [
            (0, i.jsxs)('div', {
                className: v.leftColumn,
                children: [
                    (0, i.jsx)(a.X6q, {
                        className: v.header,
                        variant: 'heading-lg/extrabold',
                        children: f.intl.string(f.t.tbUZVl)
                    }),
                    (0, i.jsx)('div', {
                        className: v.descriptionSection,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: f.intl.string(f.t.DvHCq6)
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: v.section,
                        children: (0, i.jsx)(C.Z, { guildId: t.id })
                    }),
                    (0, i.jsx)('div', { className: v.sectionSeparator }),
                    (0, i.jsx)(a.X6q, {
                        className: v.header,
                        variant: 'heading-lg/extrabold',
                        children: f.intl.string(f.t['roY/ws'])
                    }),
                    (0, i.jsx)('div', {
                        className: v.descriptionSection,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: f.intl.format(f.t['/lWYYW'], {})
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: v.section,
                        children: (0, i.jsx)(g.Z, {})
                    }),
                    (0, i.jsx)(h.Z, { guildId: t.id }),
                    (0, i.jsx)('div', { className: v.sectionSeparator }),
                    (0, i.jsx)(a.X6q, {
                        className: v.header,
                        variant: 'heading-lg/extrabold',
                        children: f.intl.string(f.t.hEjHyM)
                    }),
                    (0, i.jsxs)('div', {
                        className: v.descriptionSection,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: f.intl.string(f.t.YnvKVF)
                            }),
                            (0, i.jsxs)('ul', {
                                className: v.bulletList,
                                children: [
                                    (0, i.jsx)('li', {
                                        children: (0, i.jsx)(a.Text, {
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: f.intl.string(f.t['6jEvRU'])
                                        })
                                    }),
                                    (0, i.jsx)('li', {
                                        children: (0, i.jsx)(a.Text, {
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: f.intl.string(f.t['Fq+UsL'])
                                        })
                                    }),
                                    (0, i.jsx)('li', {
                                        children: (0, i.jsx)(a.Text, {
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: f.intl.string(f.t.LeEPoK)
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: v.section,
                        children: [(0, i.jsx)(_.Z, { guildId: t.id }), (0, i.jsx)(p.Z, { guildId: t.id })]
                    }),
                    (0, i.jsx)('div', { className: v.sectionSeparator }),
                    (0, i.jsx)(x.Z, { guild: t })
                ]
            }),
            (0, i.jsxs)('div', {
                className: v.rightColumn,
                children: [
                    (0, i.jsx)('div', {
                        className: v.centeredSection,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: f.intl.string(f.t.EVV6ub)
                        })
                    }),
                    (0, i.jsx)('img', {
                        className: v.previewImage,
                        src: S,
                        alt: f.intl.string(f.t.ST4UOz)
                    }),
                    (0, i.jsx)(a.sY7, {
                        options: b,
                        value: c,
                        onChange: (e) => d(e.value),
                        look: 'pill'
                    })
                ]
            })
        ]
    });
}
function T(e) {
    let { saveOnClose: t } = e,
        n = (0, l.e7)([d.Z, c.Z], () => {
            let e = d.Z.getGuildId();
            return c.Z.getGuild(e);
        });
    return null == n
        ? null
        : (0, i.jsx)(b, {
              guild: n,
              saveOnClose: t
          });
}
