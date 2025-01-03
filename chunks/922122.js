t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(47120),
    t(724458);
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(21260),
    s = t(780384),
    c = t(481060),
    d = t(410030),
    u = t(540059),
    m = t(889711),
    p = t(79707),
    _ = t(388032),
    g = t(333078);
function v(e) {
    let { onTabSelect: n, tabs: t, selectedTab: r } = e,
        o = (0, d.ZP)(),
        m = (0, s.wj)(o),
        v = (0, u.Q3)('GlobalDiscoveryHeaderMoreTab'),
        f = i.useMemo(
            () =>
                null !=
                t.find((e) => {
                    let { id: n } = e;
                    return n === r;
                }),
            [r, t]
        ),
        [C, x] = i.useState(!1),
        h = (function (e) {
            let { selected: n, isVisualRefreshEnabled: t, isDarkTheme: a, isHovered: i } = e;
            if (t) return i ? 'text-primary' : n ? 'text-brand' : 'text-normal';
            return !n && i ? 'interactive-hover' : n ? 'header-primary' : a ? 'interactive-normal' : 'header-primary';
        })({
            selected: f,
            isVisualRefreshEnabled: v,
            isDarkTheme: m,
            isHovered: C
        }),
        b = (function (e) {
            let { selected: n, isVisualRefreshEnabled: t, isDarkTheme: a, isHovered: i } = e;
            if (t) return i ? c.tokens.colors.TEXT_PRIMARY : n ? c.tokens.colors.TEXT_BRAND : c.tokens.colors.INTERACTIVE_NORMAL;
            return !n && i ? c.tokens.colors.INTERACTIVE_HOVER : n ? c.tokens.colors.HEADER_PRIMARY : a ? c.tokens.colors.TEXT_MUTED : c.tokens.colors.HEADER_PRIMARY;
        })({
            selected: f,
            isVisualRefreshEnabled: v,
            isDarkTheme: m,
            isHovered: C
        }),
        I = i.useCallback(() => x(!0), []),
        j = i.useCallback(() => x(!1), []);
    return (0, a.jsx)(c.Popout, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, a.jsx)(p.Z, {
                selectedTab: r,
                onClose: i,
                tabs: t,
                onTabSelect: n
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, a.jsx)(c.TabBar.Item, {
                ...e,
                id: 'more',
                look: 'brand',
                selectedItem: v && f ? 'more' : void 0,
                className: l()(g.tab, { [g.selected]: !v && f }),
                'aria-label': _.intl.string(_.t.UKOtz8),
                children: (0, a.jsxs)('div', {
                    className: g.more,
                    onMouseEnter: I,
                    onMouseLeave: j,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: v ? 'text-sm/semibold' : 'text-md/medium',
                            color: h,
                            children: _.intl.string(_.t.UKOtz8)
                        }),
                        t
                            ? (0, a.jsx)(c.ChevronSmallUpIcon, {
                                  size: 'xs',
                                  color: b
                              })
                            : (0, a.jsx)(c.ChevronSmallDownIcon, {
                                  size: 'xs',
                                  color: b
                              })
                    ]
                })
            });
        }
    });
}
function f(e) {
    let { className: n, selectedTab: t, tabs: r, onTabSelect: s, onAvailableWidthChange: d } = e,
        [p, _] = i.useState(0),
        f = i.useRef(p),
        {
            lastVisibleIndex: C,
            onItemLayout: x,
            overflowItemsRef: h,
            itemWidthsRef: b
        } = (0, o.zP)({
            items: r,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: p
        }),
        I = i.useMemo(() => r.slice(0, C + 1), [C, r]),
        j = i.useMemo(() => r.slice(C + 1), [C, r]),
        S = i.useRef(null),
        N = i.useCallback(() => {
            var e;
            let n = null === (e = S.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == n || f.current === n.width) return;
            _(n.width), (f.current = n.width);
            let t = b.current.reduce((e, n, t) => e + n + (0 === t ? 0 : 20)),
                a = n.width - t;
            null == d || d(a);
        }, [b, d]);
    i.useEffect(() => {
        let e = (0, m.pP)(N);
        return (0, m.YP)(e, document.body), () => (0, m.UC)(e, document.body);
    }, [N]);
    let E = 0 !== p,
        y = (0, u.Q3)('GlobalDiscoveryHeaderTabs');
    return (0, a.jsxs)('div', {
        className: l()(g.container, n),
        ref: S,
        children: [
            (0, a.jsxs)('div', {
                className: g.measurements,
                children: [
                    r.map((e, n) =>
                        (0, a.jsx)(
                            o.AJ,
                            {
                                index: n,
                                onItemLayout: x,
                                children: (0, a.jsx)(c.TabBar.Item, {
                                    id: e.id,
                                    'aria-label': e.label,
                                    className: g.tab,
                                    children: (0, a.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: e.label
                                    })
                                })
                            },
                            e.id
                        )
                    ),
                    (0, a.jsx)('div', {
                        ref: h,
                        children: (0, a.jsx)(v, {
                            tabs: j,
                            onTabSelect: s,
                            selectedTab: t
                        })
                    })
                ]
            }),
            E &&
                (0, a.jsxs)(c.TabBar, {
                    type: 'top',
                    look: 'brand',
                    selectedItem: t,
                    onItemSelect: s,
                    className: g.tabs,
                    children: [
                        I.map((e) =>
                            (0, a.jsx)(
                                c.TabBar.Item,
                                {
                                    id: e.id,
                                    look: 'brand',
                                    'aria-label': e.label,
                                    className: l()(g.tab, { [g.selected]: !y && t === e.id }),
                                    children: e.label
                                },
                                e.id
                            )
                        ),
                        0 !== j.length
                            ? (0, a.jsx)(v, {
                                  tabs: j,
                                  onTabSelect: s,
                                  selectedTab: t
                              })
                            : null
                    ]
                })
        ]
    });
}
