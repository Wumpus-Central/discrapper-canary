n.d(t, { Z: () => x }), n(388685), n(781311);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(481060),
    c = n(442837),
    d = n(314897),
    u = n(353093),
    m = n(214715),
    g = n(18100),
    p = n(308083),
    f = n(388032),
    h = n(203514),
    b = n(130116);
let x = (e) => {
    let { guildId: t, handleUpdate: n, progress: s, error: x } = e,
        { interests: j } = s,
        [N, v] = i.useState(''),
        [_, y] = i.useState(0),
        O = (0, c.e7)([d.default], () => d.default.getId()),
        C = i.useMemo(() => (0, l.chunk)((0, u.XV)(p.i6, O), 9), [O]),
        I = [...C[_], ...C[(_ + 1) % C.length]],
        E = i.useMemo(() => Array.from(j), [j]),
        S = i.useMemo(() => E.filter((e) => !p.WZ.has(e) && !p.gh.has(e)), [E]),
        T = (e) => {
            let t = new Set(j);
            t.delete(e), n({ interests: t });
        },
        P = i.useCallback(
            (e) => {
                if (j.size === p.c4) return;
                let t = null != e ? e : N.trim();
                if (0 === t.length) return;
                let r = new Set(j);
                r.add(t), n({ interests: r }), v('');
            },
            [n, N, j]
        ),
        w = i.useCallback(
            (e) => {
                switch (e.key) {
                    case 'Enter':
                    case 'Tab':
                        e.preventDefault(), e.stopPropagation(), P();
                }
            },
            [P]
        ),
        R = i.useCallback(() => {
            y((e) => (e + 1) % C.length);
        }, [y, C]);
    return (0, r.jsxs)('div', {
        className: b.slideContent,
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-xxl/medium',
                className: b.title,
                children: f.NW.string(f.t.V69HzM)
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: b.subtitle,
                children: f.NW.format(f.t['BAK+ND'], {})
            }),
            null != x &&
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'status-danger',
                    className: b.errorText,
                    children: x
                }),
            (0, r.jsxs)('div', {
                className: b.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.mainPanelContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: b.inputContainer,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xs/semibold',
                                        color: 'text-muted',
                                        className: b.contentLabel,
                                        children: f.NW.string(f.t.qMh4Oj)
                                    }),
                                    (0, r.jsx)(o.oil, {
                                        autoFocus: !0,
                                        inputClassName: b.input,
                                        value: N,
                                        onKeyDown: w,
                                        onChange: v,
                                        placeholder: f.NW.string(f.t.axCpsL),
                                        maxLength: p.Sq,
                                        disabled: j.size === p.c4
                                    }),
                                    N.length > 0 &&
                                        (0, r.jsx)(o.P3F, {
                                            onClick: () => P(N.trim()),
                                            className: a()(b.plusIcon, b.clickable),
                                            children: (0, r.jsx)(o.qJs, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: b.icon
                                            })
                                        }),
                                    N.length > 0 &&
                                        (0, r.jsx)(o.Text, {
                                            color: 'text-muted',
                                            variant: 'text-xs/normal',
                                            className: b.enterToSearchText,
                                            children: f.NW.string(f.t.ZGkhJS)
                                        })
                                ]
                            }),
                            (0, r.jsx)(o.Text, {
                                className: b.interestsCategoryTitle,
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: f.NW.string(f.t.P793o6)
                            }),
                            (0, r.jsx)(o.Epb, {
                                items: I,
                                renderItem: (e) =>
                                    (0, r.jsx)(
                                        m.Z,
                                        {
                                            variant: 'text-xs/semibold',
                                            color: 'interactive-normal',
                                            text: e,
                                            selected: j.has(e),
                                            onClick: j.has(e) ? T : P
                                        },
                                        e
                                    ),
                                maxLines: 2,
                                className: b.interestsCategory,
                                itemGapPx: 8,
                                renderOverflow: () => null
                            }),
                            (0, r.jsx)('div', {
                                children: (0, r.jsxs)(o.zxk, {
                                    color: o.Ttl.PRIMARY,
                                    onClick: R,
                                    className: h.rerollButton,
                                    innerClassName: h.innerRerollButton,
                                    children: [
                                        (0, r.jsx)(o.$2U, {
                                            size: 'sm',
                                            color: 'currentColor'
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'none',
                                            children: f.NW.string(f.t.ldYCQ0)
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: b.fixedWidthSidebar,
                        children:
                            E.length > 0 &&
                            (0, r.jsx)(g.Z, {
                                guildId: t,
                                progress: s,
                                traitsToHighlight: S,
                                maskDescription: !0,
                                onTraitClick: T
                            })
                    })
                ]
            })
        ]
    });
};
