n.d(t, { Z: () => I }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(399606),
    s = n(780384),
    a = n(481060),
    o = n(210887),
    c = n(430824),
    u = n(999382),
    d = n(8426),
    m = n(969632),
    g = n(998164),
    p = n(340189),
    h = n(507317),
    f = n(399614),
    x = n(387960),
    b = n(806742),
    j = n(388032),
    _ = n(773100),
    v = n(91716),
    O = n(470264),
    C = n(710043),
    y = n(847950);
function N(e) {
    let { guild: t, saveOnClose: n } = e,
        [c, u] = i.useState('new'),
        N = i.useMemo(
            () => [
                {
                    value: 'new',
                    name: j.intl.string(j.t['4e5u3t'])
                },
                {
                    value: 'existing',
                    name: j.intl.string(j.t.cmkOsb)
                }
            ],
            []
        ),
        I = (0, l.e7)([o.Z], () => o.Z.theme);
    i.useEffect(
        () => () => {
            let e = m.Z.getSettings();
            (0, d.oo)(t.id, e);
        },
        [n, t.id]
    );
    let E = i.useMemo(() => ((0, s.ap)(I) ? ('existing' === c ? O : y) : 'existing' === c ? v : C), [c, I]);
    return (0, r.jsxs)('div', {
        className: _.page,
        children: [
            (0, r.jsxs)('div', {
                className: _.leftColumn,
                children: [
                    (0, r.jsx)(a.X6q, {
                        className: _.header,
                        variant: 'heading-lg/extrabold',
                        children: j.intl.string(j.t.tbUZVl)
                    }),
                    (0, r.jsx)('div', {
                        className: _.descriptionSection,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: j.intl.string(j.t.DvHCq6)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: _.section,
                        children: (0, r.jsx)(b.Z, { guildId: t.id })
                    }),
                    (0, r.jsx)('div', { className: _.sectionSeparator }),
                    (0, r.jsx)(a.X6q, {
                        className: _.header,
                        variant: 'heading-lg/extrabold',
                        children: j.intl.string(j.t['roY/ws'])
                    }),
                    (0, r.jsx)('div', {
                        className: _.descriptionSection,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: j.intl.format(j.t['/lWYYW'], {})
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: _.section,
                        children: (0, r.jsx)(p.Z, {})
                    }),
                    (0, r.jsx)(g.Z, { guildId: t.id }),
                    (0, r.jsx)('div', { className: _.sectionSeparator }),
                    (0, r.jsx)(a.X6q, {
                        className: _.header,
                        variant: 'heading-lg/extrabold',
                        children: j.intl.string(j.t.hEjHyM)
                    }),
                    (0, r.jsxs)('div', {
                        className: _.descriptionSection,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: j.intl.string(j.t.YnvKVF)
                            }),
                            (0, r.jsxs)('ul', {
                                className: _.bulletList,
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(a.Text, {
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: j.intl.string(j.t['6jEvRU'])
                                        })
                                    }),
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(a.Text, {
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: j.intl.string(j.t['Fq+UsL'])
                                        })
                                    }),
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(a.Text, {
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: j.intl.string(j.t.LeEPoK)
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: _.section,
                        children: [(0, r.jsx)(x.Z, { guildId: t.id }), (0, r.jsx)(f.Z, { guildId: t.id })]
                    }),
                    (0, r.jsx)('div', { className: _.sectionSeparator }),
                    (0, r.jsx)(h.Z, { guild: t })
                ]
            }),
            (0, r.jsxs)('div', {
                className: _.rightColumn,
                children: [
                    (0, r.jsx)('div', {
                        className: _.centeredSection,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: j.intl.string(j.t.EVV6ub)
                        })
                    }),
                    (0, r.jsx)('img', {
                        className: _.previewImage,
                        src: E,
                        alt: j.intl.string(j.t.ST4UOz)
                    }),
                    (0, r.jsx)(a.sY7, {
                        options: N,
                        value: c,
                        onChange: (e) => u(e.value),
                        look: 'pill'
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { saveOnClose: t } = e,
        n = (0, l.e7)([u.Z, c.Z], () => {
            let e = u.Z.getGuildId();
            return c.Z.getGuild(e);
        });
    return null == n
        ? null
        : (0, r.jsx)(N, {
              guild: n,
              saveOnClose: t
          });
}
