t.d(n, { Z: () => g }), t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(442837),
    o = t(21260),
    d = t(780384),
    c = t(481060),
    u = t(410030),
    m = t(328977),
    x = t(571728),
    h = t(984370),
    j = t(433355),
    _ = t(889711),
    C = t(384433),
    f = t(388032),
    v = t(998810);
let N = (e) => [
        {
            id: C.e.ALL_MEMBERS,
            label: f.intl.string(f.t.NOOm1d)
        },
        {
            id: C.e.PENDING,
            label: e > 0 ? f.intl.formatToPlainString(f.t['Wo+zLy'], { count: e }) : f.intl.string(f.t['4eQVBA'])
        },
        {
            id: C.e.REJECTED,
            label: f.intl.string(f.t.bSZklZ)
        }
    ],
    b = (e) => {
        let { tabs: n, selectedTab: t, onTabSelect: i, onClose: r } = e;
        return (0, l.jsx)(c.v2r, {
            navId: 'members-tabs-overflow-menu',
            'aria-label': f.intl.string(f.t.riPnr6),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, l.jsx)(
                c.kSQ,
                {
                    children: n.map((e) => {
                        let { id: n, label: r } = e;
                        return (0, l.jsx)(
                            c.sNh,
                            {
                                id: n,
                                label: r,
                                icon: n === t ? c.owK : void 0,
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
function E(e) {
    let { onTabSelect: n, tabs: t, selectedTab: r } = e,
        s = (0, u.ZP)(),
        o = (0, d.wj)(s),
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
        h = m ? c.TVs.colors.HEADER_PRIMARY : o ? c.TVs.colors.TEXT_MUTED : c.TVs.colors.HEADER_PRIMARY;
    return (0, l.jsx)(c.yRy, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(b, {
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
            return (0, l.jsxs)(c.njP.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: a()(v.more, { [v.selected]: m }),
                'aria-label': f.intl.string(f.t.UKOtz8),
                children: [
                    (0, l.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: x,
                        children: f.intl.string(f.t.UKOtz8)
                    }),
                    t
                        ? (0, l.jsx)(c.u04, {
                              size: 'sm',
                              color: h
                          })
                        : (0, l.jsx)(c.CJ0, {
                              size: 'sm',
                              color: h
                          })
                ]
            });
        }
    });
}
function g(e) {
    let { guildId: n, currentTab: t, onTabSelect: r } = e,
        [a, d] = i.useState(0),
        u = i.useRef(null),
        b = i.useRef(a),
        g = (0, x.A)({ guildId: n }),
        T = N(null != g ? g : 0),
        {
            lastVisibleIndex: I,
            onItemLayout: S,
            overflowItemsRef: p
        } = (0, o.zP)({
            items: T,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: a - 200
        }),
        R = (0, s.e7)([j.ZP], () => null != j.ZP.getGuildSidebarState(n), [n]),
        M = (0, m.L)({ guildId: n }),
        A = i.useMemo(() => (t === C.e.ALL_MEMBERS ? R : null != M && null != M.user), [t, R, M]),
        Z = i.useMemo(() => T.slice(0, I + 1), [I, T]),
        P = i.useMemo(() => T.slice(I + 1), [I, T]),
        k = i.useCallback(() => {
            var e;
            let n = null === (e = u.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != n && b.current !== n.width && (d(n.width), (b.current = n.width));
        }, []);
    return (
        i.useEffect(() => {
            let e = (0, _.pP)(k);
            return (0, _.YP)(e, document.body), () => (0, _.UC)(e, document.body);
        }, [k]),
        i.useEffect(() => {
            k();
        }, [k, A]),
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
                                T.map((e, n) =>
                                    (0, l.jsx)(
                                        o.AJ,
                                        {
                                            index: n,
                                            onItemLayout: S,
                                            children: (0, l.jsx)(c.njP.Item, {
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
                                    children: (0, l.jsx)(E, {
                                        tabs: P,
                                        onTabSelect: r,
                                        selectedTab: t
                                    })
                                })
                            ]
                        }),
                        (0, l.jsxs)(c.njP, {
                            'aria-label': f.intl.string(f.t.tcvVXF),
                            selectedItem: t,
                            type: 'top-pill',
                            onItemSelect: r,
                            children: [
                                Z.map((e) =>
                                    (0, l.jsx)(
                                        c.njP.Item,
                                        {
                                            id: e.id,
                                            'aria-label': e.label,
                                            children: e.label
                                        },
                                        e.id
                                    )
                                ),
                                0 !== P.length
                                    ? (0, l.jsx)(E, {
                                          tabs: P,
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
