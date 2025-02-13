n.d(t, { Z: () => x }), n(47120), n(724458);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(21260),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(540059),
    m = n(889711),
    h = n(79707),
    p = n(388032),
    g = n(40814);
function _(e) {
    let { onTabSelect: t, tabs: n, selectedTab: r } = e,
        s = (0, d.ZP)(),
        m = (0, o.wj)(s),
        _ = (0, u.Q3)('GlobalDiscoveryHeaderMoreTab'),
        x = a.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === r;
                }),
            [r, n]
        ),
        [C, v] = a.useState(!1),
        f = (function (e) {
            let { selected: t, isVisualRefreshEnabled: n, isDarkTheme: i, isHovered: a } = e;
            return n ? (a ? 'text-primary' : t ? 'text-brand' : 'text-normal') : !t && a ? 'interactive-hover' : t ? 'header-primary' : i ? 'interactive-normal' : 'header-primary';
        })({
            selected: x,
            isVisualRefreshEnabled: _,
            isDarkTheme: m,
            isHovered: C
        }),
        I = (function (e) {
            let { selected: t, isVisualRefreshEnabled: n, isDarkTheme: i, isHovered: a } = e;
            return n ? (a ? c.TVs.colors.TEXT_PRIMARY : t ? c.TVs.colors.TEXT_BRAND : c.TVs.colors.INTERACTIVE_NORMAL) : !t && a ? c.TVs.colors.INTERACTIVE_HOVER : t ? c.TVs.colors.HEADER_PRIMARY : i ? c.TVs.colors.TEXT_MUTED : c.TVs.colors.HEADER_PRIMARY;
        })({
            selected: x,
            isVisualRefreshEnabled: _,
            isDarkTheme: m,
            isHovered: C
        }),
        b = a.useCallback(() => v(!0), []),
        j = a.useCallback(() => v(!1), []);
    return (0, i.jsx)(c.yRy, {
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, i.jsx)(h.Z, {
                selectedTab: r,
                onClose: a,
                tabs: n,
                onTabSelect: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(c.njP.Item, {
                ...e,
                id: 'more',
                look: 'brand',
                selectedItem: _ && x ? 'more' : void 0,
                className: l()(g.tab, { [g.selected]: !_ && x }),
                'aria-label': p.intl.string(p.t.UKOtz8),
                children: (0, i.jsxs)('div', {
                    className: g.more,
                    onMouseEnter: b,
                    onMouseLeave: j,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: _ ? 'text-sm/semibold' : 'text-md/medium',
                            color: f,
                            children: p.intl.string(p.t.UKOtz8)
                        }),
                        n
                            ? (0, i.jsx)(c.u04, {
                                  size: 'xs',
                                  color: I
                              })
                            : (0, i.jsx)(c.CJ0, {
                                  size: 'xs',
                                  color: I
                              })
                    ]
                })
            });
        }
    });
}
function x(e) {
    let { className: t, selectedTab: n, tabs: r, onTabSelect: o, onAvailableWidthChange: d } = e,
        [h, p] = a.useState(0),
        x = a.useRef(h),
        {
            lastVisibleIndex: C,
            onItemLayout: v,
            overflowItemsRef: f,
            itemWidthsRef: I
        } = (0, s.zP)({
            items: r,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: h
        }),
        b = a.useMemo(() => r.slice(0, C + 1), [C, r]),
        j = a.useMemo(() => r.slice(C + 1), [C, r]),
        S = a.useRef(null),
        N = a.useCallback(() => {
            var e;
            let t = null === (e = S.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t || x.current === t.width) return;
            p(t.width), (x.current = t.width);
            let n = I.current.reduce((e, t, n) => e + t + (0 === n ? 0 : 20)),
                i = t.width - n;
            null == d || d(i);
        }, [I, d]);
    a.useEffect(() => {
        let e = (0, m.pP)(N);
        return (0, m.YP)(e, document.body), () => (0, m.UC)(e, document.body);
    }, [N]);
    let E = 0 !== h,
        y = (0, u.Q3)('GlobalDiscoveryHeaderTabs');
    return (0, i.jsxs)('div', {
        className: l()(g.container, t),
        ref: S,
        children: [
            (0, i.jsxs)('div', {
                className: g.measurements,
                children: [
                    r.map((e, t) =>
                        (0, i.jsx)(
                            s.AJ,
                            {
                                index: t,
                                onItemLayout: v,
                                children: (0, i.jsx)(c.njP.Item, {
                                    id: e.id,
                                    'aria-label': e.label,
                                    className: g.tab,
                                    children: (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: e.label
                                    })
                                })
                            },
                            e.id
                        )
                    ),
                    (0, i.jsx)('div', {
                        ref: f,
                        children: (0, i.jsx)(_, {
                            tabs: j,
                            onTabSelect: o,
                            selectedTab: n
                        })
                    })
                ]
            }),
            E &&
                (0, i.jsxs)(c.njP, {
                    type: 'top',
                    look: 'brand',
                    selectedItem: n,
                    onItemSelect: o,
                    className: g.tabs,
                    children: [
                        b.map((e) =>
                            (0, i.jsx)(
                                c.njP.Item,
                                {
                                    id: e.id,
                                    look: 'brand',
                                    'aria-label': e.label,
                                    className: l()(g.tab, { [g.selected]: !y && n === e.id }),
                                    children: e.label
                                },
                                e.id
                            )
                        ),
                        0 !== j.length
                            ? (0, i.jsx)(_, {
                                  tabs: j,
                                  onTabSelect: o,
                                  selectedTab: n
                              })
                            : null
                    ]
                })
        ]
    });
}
