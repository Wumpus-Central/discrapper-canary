n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(481060),
    c = n(442837),
    d = n(314897),
    u = n(353093),
    m = n(214715),
    h = n(18100),
    g = n(308083),
    x = n(388032),
    p = n(248425),
    _ = n(212617);
let C = (e) => {
    let { guildId: t, handleUpdate: n, progress: l, error: C } = e,
        { interests: f } = l,
        [v, N] = r.useState(''),
        [j, I] = r.useState(0),
        E = (0, c.e7)([d.default], () => d.default.getId()),
        b = r.useMemo(() => (0, a.chunk)((0, u.XV)(g.i6, E), 9), [E]),
        T = [...b[j], ...b[(j + 1) % b.length]],
        S = r.useMemo(() => Array.from(f), [f]),
        R = r.useMemo(() => S.filter((e) => !g.WZ.has(e) && !g.gh.has(e)), [S]),
        Z = (e) => {
            let t = new Set(f);
            t.delete(e), n({ interests: t });
        },
        y = r.useCallback(
            (e) => {
                if (f.size === g.c4) return;
                let t = null != e ? e : v.trim();
                if (0 === t.length) return;
                let i = new Set(f);
                i.add(t), n({ interests: i }), N('');
            },
            [n, v, f]
        ),
        A = r.useCallback(
            (e) => {
                switch (e.key) {
                    case 'Enter':
                    case 'Tab':
                        e.preventDefault(), e.stopPropagation(), y();
                }
            },
            [y]
        ),
        L = r.useCallback(() => {
            I((e) => (e + 1) % b.length);
        }, [I, b]);
    return (0, i.jsxs)('div', {
        className: _.slideContent,
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-xxl/medium',
                className: _.title,
                children: x.intl.string(x.t.V69HzM)
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: _.subtitle,
                children: x.intl.format(x.t['BAK+ND'], {})
            }),
            null != C &&
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'status-danger',
                    className: _.errorText,
                    children: C
                }),
            (0, i.jsxs)('div', {
                className: _.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.mainPanelContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: _.inputContainer,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/semibold',
                                        color: 'text-muted',
                                        className: _.contentLabel,
                                        children: x.intl.string(x.t.qMh4Oj)
                                    }),
                                    (0, i.jsx)(o.oil, {
                                        autoFocus: !0,
                                        inputClassName: _.input,
                                        value: v,
                                        onKeyDown: A,
                                        onChange: N,
                                        placeholder: x.intl.string(x.t.axCpsL),
                                        maxLength: g.Sq,
                                        disabled: f.size === g.c4
                                    }),
                                    v.length > 0 &&
                                        (0, i.jsx)(o.P3F, {
                                            onClick: () => y(v.trim()),
                                            className: s()(_.plusIcon, _.clickable),
                                            children: (0, i.jsx)(o.qJs, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: _.icon
                                            })
                                        }),
                                    v.length > 0 &&
                                        (0, i.jsx)(o.Text, {
                                            color: 'text-muted',
                                            variant: 'text-xs/normal',
                                            className: _.enterToSearchText,
                                            children: x.intl.string(x.t.ZGkhJS)
                                        })
                                ]
                            }),
                            (0, i.jsx)(o.Text, {
                                className: _.interestsCategoryTitle,
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: x.intl.string(x.t.P793o6)
                            }),
                            (0, i.jsx)(o.Epb, {
                                items: T,
                                renderItem: (e) =>
                                    (0, i.jsx)(
                                        m.Z,
                                        {
                                            variant: 'text-xs/semibold',
                                            color: 'interactive-normal',
                                            text: e,
                                            selected: f.has(e),
                                            onClick: f.has(e) ? Z : y
                                        },
                                        e
                                    ),
                                maxLines: 2,
                                className: _.interestsCategory,
                                itemGapPx: 8,
                                renderOverflow: () => null
                            }),
                            (0, i.jsx)('div', {
                                children: (0, i.jsxs)(o.zxk, {
                                    color: o.Ttl.PRIMARY,
                                    onClick: L,
                                    className: p.rerollButton,
                                    innerClassName: p.innerRerollButton,
                                    children: [
                                        (0, i.jsx)(o.$2U, {
                                            size: 'sm',
                                            color: 'currentColor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'none',
                                            children: x.intl.string(x.t.ldYCQ0)
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: _.fixedWidthSidebar,
                        children:
                            S.length > 0 &&
                            (0, i.jsx)(h.Z, {
                                guildId: t,
                                progress: l,
                                traitsToHighlight: R,
                                maskDescription: !0,
                                onTraitClick: Z
                            })
                    })
                ]
            })
        ]
    });
};
