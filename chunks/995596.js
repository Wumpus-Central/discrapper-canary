t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(442837),
    o = t(21260),
    c = t(780384),
    d = t(481060),
    u = t(410030),
    m = t(328977),
    x = t(571728),
    h = t(984370),
    j = t(433355),
    C = t(889711),
    b = t(384433),
    f = t(388032),
    v = t(51107);
let N = (e) => [
        {
            id: b.e.ALL_MEMBERS,
            label: f.intl.string(f.t.NOOm1d)
        },
        {
            id: b.e.PENDING,
            label: e > 0 ? f.intl.formatToPlainString(f.t['Wo+zLy'], { count: e }) : f.intl.string(f.t['4eQVBA'])
        },
        {
            id: b.e.REJECTED,
            label: f.intl.string(f.t.bSZklZ)
        }
    ],
    g = (e) => {
        let { tabs: n, selectedTab: t, onTabSelect: i, onClose: r } = e;
        return (0, l.jsx)(d.Menu, {
            navId: 'members-tabs-overflow-menu',
            'aria-label': f.intl.string(f.t.riPnr6),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, l.jsx)(
                d.MenuGroup,
                {
                    children: n.map((e) => {
                        let { id: n, label: r } = e;
                        return (0, l.jsx)(
                            d.MenuItem,
                            {
                                id: n,
                                label: r,
                                icon: n === t ? d.CircleCheckIcon : void 0,
                                action: () => i(n)
                            },
                            n
                        );
                    })
                },
                'applications-overflow-tabs'
            )
        });
    };
function I(e) {
    let { onTabSelect: n, tabs: t, selectedTab: r } = e,
        s = (0, u.ZP)(),
        o = (0, c.wj)(s),
        m = i.useMemo(
            () =>
                null !=
                t.find((e) => {
                    let { id: n } = e;
                    return n === r;
                }),
            [r, t]
        ),
        x = m ? 'header-primary' : o ? 'text-muted' : 'header-primary',
        h = m ? d.tokens.colors.HEADER_PRIMARY : o ? d.tokens.colors.TEXT_MUTED : d.tokens.colors.HEADER_PRIMARY;
    return (0, l.jsx)(d.Popout, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(g, {
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
            return (0, l.jsxs)(d.TabBar.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: a()(v.more, { [v.selected]: m }),
                'aria-label': f.intl.string(f.t.UKOtz8),
                children: [
                    (0, l.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        color: x,
                        children: f.intl.string(f.t.UKOtz8)
                    }),
                    t
                        ? (0, l.jsx)(d.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: h
                          })
                        : (0, l.jsx)(d.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: h
                          })
                ]
            });
        }
    });
}
function _(e) {
    let { guildId: n, currentTab: t, onTabSelect: r } = e,
        [a, c] = i.useState(0),
        u = i.useRef(null),
        g = i.useRef(a),
        _ = (0, x.A)({ guildId: n }),
        E = N(null != _ ? _ : 0),
        {
            lastVisibleIndex: T,
            onItemLayout: S,
            overflowItemsRef: p
        } = (0, o.zP)({
            items: E,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: a - 200
        }),
        M = (0, s.e7)([j.ZP], () => null != j.ZP.getGuildSidebarState(n), [n]),
        R = (0, m.L)({ guildId: n }),
        A = i.useMemo(() => (t === b.e.ALL_MEMBERS ? M : null != R && null != R.user), [t, M, R]),
        Z = i.useMemo(() => E.slice(0, T + 1), [T, E]),
        k = i.useMemo(() => E.slice(T + 1), [T, E]),
        L = i.useCallback(() => {
            var e;
            let n = null === (e = u.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != n && g.current !== n.width && (c(n.width), (g.current = n.width));
        }, []);
    return (
        i.useEffect(() => {
            let e = (0, C.pP)(L);
            return (0, C.YP)(e, document.body), () => (0, C.UC)(e, document.body);
        }, [L]),
        i.useEffect(() => {
            L();
        }, [L, A]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(h.Z.Divider, { className: v.divider }),
                (0, l.jsxs)('div', {
                    className: v.tabsContainer,
                    ref: u,
                    children: [
                        (0, l.jsxs)('div', {
                            className: v.measurements,
                            children: [
                                E.map((e, n) =>
                                    (0, l.jsx)(
                                        o.AJ,
                                        {
                                            index: n,
                                            onItemLayout: S,
                                            children: (0, l.jsx)(d.TabBar.Item, {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            })
                                        },
                                        e.id
                                    )
                                ),
                                (0, l.jsx)('div', {
                                    ref: p,
                                    children: (0, l.jsx)(I, {
                                        tabs: k,
                                        onTabSelect: r,
                                        selectedTab: t
                                    })
                                })
                            ]
                        }),
                        (0, l.jsxs)(d.TabBar, {
                            'aria-label': f.intl.string(f.t.tcvVXF),
                            selectedItem: t,
                            type: 'top-pill',
                            onItemSelect: r,
                            children: [
                                Z.map((e) =>
                                    (0, l.jsx)(
                                        d.TabBar.Item,
                                        {
                                            id: e.id,
                                            'aria-label': e.label,
                                            children: e.label
                                        },
                                        e.id
                                    )
                                ),
                                0 !== k.length
                                    ? (0, l.jsx)(I, {
                                          tabs: k,
                                          onTabSelect: r,
                                          selectedTab: t
                                      })
                                    : null
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
