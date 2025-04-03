n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(399606),
    a = n(780384),
    l = n(481060),
    o = n(210887),
    c = n(430824),
    d = n(999382),
    u = n(8426),
    m = n(969632),
    g = n(998164),
    p = n(340189),
    h = n(507317),
    f = n(399614),
    b = n(387960),
    x = n(806742),
    j = n(388032),
    N = n(773100),
    _ = n(91716),
    v = n(470264),
    C = n(710043),
    O = n(847950);
function y(e) {
    let { guild: t, saveOnClose: n } = e,
        [c, d] = i.useState('new'),
        y = i.useMemo(
            () => [
                {
                    value: 'new',
                    name: j.NW.string(j.t['4e5u3t'])
                },
                {
                    value: 'existing',
                    name: j.NW.string(j.t.cmkOsb)
                }
            ],
            []
        ),
        I = (0, s.e7)([o.Z], () => o.Z.theme);
    i.useEffect(
        () => () => {
            let e = m.Z.getSettings();
            (0, u.oo)(t.id, e);
        },
        [n, t.id]
    );
    let E = i.useMemo(() => ((0, a.ap)(I) ? ('existing' === c ? v : O) : 'existing' === c ? _ : C), [c, I]);
    return (0, r.jsxs)('div', {
        className: N.page,
        children: [
            (0, r.jsxs)('div', {
                className: N.leftColumn,
                children: [
                    (0, r.jsx)(l.X6q, {
                        className: N.header,
                        variant: 'heading-lg/extrabold',
                        children: j.NW.string(j.t.tbUZVl)
                    }),
                    (0, r.jsx)('div', {
                        className: N.descriptionSection,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: j.NW.string(j.t.DvHCq6)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: N.section,
                        children: (0, r.jsx)(x.Z, { guildId: t.id })
                    }),
                    (0, r.jsx)('div', { className: N.sectionSeparator }),
                    (0, r.jsx)(l.X6q, {
                        className: N.header,
                        variant: 'heading-lg/extrabold',
                        children: j.NW.string(j.t['roY/ws'])
                    }),
                    (0, r.jsx)('div', {
                        className: N.descriptionSection,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: j.NW.format(j.t['/lWYYW'], {})
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: N.section,
                        children: (0, r.jsx)(p.Z, {})
                    }),
                    (0, r.jsx)(g.Z, { guildId: t.id }),
                    (0, r.jsx)('div', { className: N.sectionSeparator }),
                    (0, r.jsx)(l.X6q, {
                        className: N.header,
                        variant: 'heading-lg/extrabold',
                        children: j.NW.string(j.t.hEjHyM)
                    }),
                    (0, r.jsxs)('div', {
                        className: N.descriptionSection,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: j.NW.string(j.t.YnvKVF)
                            }),
                            (0, r.jsxs)('ul', {
                                className: N.bulletList,
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(l.Text, {
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: j.NW.string(j.t['6jEvRU'])
                                        })
                                    }),
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(l.Text, {
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: j.NW.string(j.t['Fq+UsL'])
                                        })
                                    }),
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(l.Text, {
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: j.NW.string(j.t.LeEPoK)
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: N.section,
                        children: [(0, r.jsx)(b.Z, { guildId: t.id }), (0, r.jsx)(f.Z, { guildId: t.id })]
                    }),
                    (0, r.jsx)('div', { className: N.sectionSeparator }),
                    (0, r.jsx)(h.Z, { guild: t })
                ]
            }),
            (0, r.jsxs)('div', {
                className: N.rightColumn,
                children: [
                    (0, r.jsx)('div', {
                        className: N.centeredSection,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: j.NW.string(j.t.EVV6ub)
                        })
                    }),
                    (0, r.jsx)('img', {
                        className: N.previewImage,
                        src: E,
                        alt: j.NW.string(j.t.ST4UOz)
                    }),
                    (0, r.jsx)(l.sY7, {
                        options: y,
                        value: c,
                        onChange: (e) => d(e.value),
                        look: 'pill'
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { saveOnClose: t } = e,
        n = (0, s.e7)([d.Z, c.Z], () => {
            let e = d.Z.getGuildId();
            return c.Z.getGuild(e);
        });
    return null == n
        ? null
        : (0, r.jsx)(y, {
              guild: n,
              saveOnClose: t
          });
}
