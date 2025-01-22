n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(724458);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(21260),
    s = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(540059),
    m = n(889711),
    p = n(79707),
    h = n(388032),
    g = n(333078);
function C(e) {
    let { onTabSelect: t, tabs: n, selectedTab: r } = e,
        o = (0, d.ZP)(),
        m = (0, s.wj)(o),
        C = (0, u.Q3)('GlobalDiscoveryHeaderMoreTab'),
        x = a.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === r;
                }),
            [r, n]
        ),
        [v, _] = a.useState(!1),
        f = (function (e) {
            let { selected: t, isVisualRefreshEnabled: n, isDarkTheme: i, isHovered: a } = e;
            if (n) return a ? 'text-primary' : t ? 'text-brand' : 'text-normal';
            return !t && a ? 'interactive-hover' : t ? 'header-primary' : i ? 'interactive-normal' : 'header-primary';
        })({
            selected: x,
            isVisualRefreshEnabled: C,
            isDarkTheme: m,
            isHovered: v
        }),
        b = (function (e) {
            let { selected: t, isVisualRefreshEnabled: n, isDarkTheme: i, isHovered: a } = e;
            if (n) return a ? c.tokens.colors.TEXT_PRIMARY : t ? c.tokens.colors.TEXT_BRAND : c.tokens.colors.INTERACTIVE_NORMAL;
            return !t && a ? c.tokens.colors.INTERACTIVE_HOVER : t ? c.tokens.colors.HEADER_PRIMARY : i ? c.tokens.colors.TEXT_MUTED : c.tokens.colors.HEADER_PRIMARY;
        })({
            selected: x,
            isVisualRefreshEnabled: C,
            isDarkTheme: m,
            isHovered: v
        }),
        I = a.useCallback(() => _(!0), []),
        S = a.useCallback(() => _(!1), []);
    return (0, i.jsx)(c.Popout, {
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, i.jsx)(p.Z, {
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
            return (0, i.jsx)(c.TabBar.Item, {
                ...e,
                id: 'more',
                look: 'brand',
                selectedItem: C && x ? 'more' : void 0,
                className: l()(g.tab, { [g.selected]: !C && x }),
                'aria-label': h.intl.string(h.t.UKOtz8),
                children: (0, i.jsxs)('div', {
                    className: g.more,
                    onMouseEnter: I,
                    onMouseLeave: S,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: C ? 'text-sm/semibold' : 'text-md/medium',
                            color: f,
                            children: h.intl.string(h.t.UKOtz8)
                        }),
                        n
                            ? (0, i.jsx)(c.ChevronSmallUpIcon, {
                                  size: 'xs',
                                  color: b
                              })
                            : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                  size: 'xs',
                                  color: b
                              })
                    ]
                })
            });
        }
    });
}
function x(e) {
    let { className: t, selectedTab: n, tabs: r, onTabSelect: s, onAvailableWidthChange: d } = e,
        [p, h] = a.useState(0),
        x = a.useRef(p),
        {
            lastVisibleIndex: v,
            onItemLayout: _,
            overflowItemsRef: f,
            itemWidthsRef: b
        } = (0, o.zP)({
            items: r,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: p
        }),
        I = a.useMemo(() => r.slice(0, v + 1), [v, r]),
        S = a.useMemo(() => r.slice(v + 1), [v, r]),
        j = a.useRef(null),
        N = a.useCallback(() => {
            var e;
            let t = null === (e = j.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t || x.current === t.width) return;
            h(t.width), (x.current = t.width);
            let n = b.current.reduce((e, t, n) => e + t + (0 === n ? 0 : 20)),
                i = t.width - n;
            null == d || d(i);
        }, [b, d]);
    a.useEffect(() => {
        let e = (0, m.pP)(N);
        return (0, m.YP)(e, document.body), () => (0, m.UC)(e, document.body);
    }, [N]);
    let E = 0 !== p,
        y = (0, u.Q3)('GlobalDiscoveryHeaderTabs');
    return (0, i.jsxs)('div', {
        className: l()(g.container, t),
        ref: j,
        children: [
            (0, i.jsxs)('div', {
                className: g.measurements,
                children: [
                    r.map((e, t) =>
                        (0, i.jsx)(
                            o.AJ,
                            {
                                index: t,
                                onItemLayout: _,
                                children: (0, i.jsx)(c.TabBar.Item, {
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
                        children: (0, i.jsx)(C, {
                            tabs: S,
                            onTabSelect: s,
                            selectedTab: n
                        })
                    })
                ]
            }),
            E &&
                (0, i.jsxs)(c.TabBar, {
                    type: 'top',
                    look: 'brand',
                    selectedItem: n,
                    onItemSelect: s,
                    className: g.tabs,
                    children: [
                        I.map((e) =>
                            (0, i.jsx)(
                                c.TabBar.Item,
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
                        0 !== S.length
                            ? (0, i.jsx)(C, {
                                  tabs: S,
                                  onTabSelect: s,
                                  selectedTab: n
                              })
                            : null
                    ]
                })
        ]
    });
}
