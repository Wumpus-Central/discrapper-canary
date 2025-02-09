t.d(n, { Z: () => T }), t(47120);
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
    _ = t(384433),
    f = t(388032),
    v = t(108652);
let b = (e) => [
        {
            id: _.e.ALL_MEMBERS,
            label: f.intl.string(f.t.NOOm1d)
        },
        {
            id: _.e.PENDING,
            label: e > 0 ? f.intl.formatToPlainString(f.t['Wo+zLy'], { count: e }) : f.intl.string(f.t['4eQVBA'])
        },
        {
            id: _.e.REJECTED,
            label: f.intl.string(f.t.bSZklZ)
        }
    ],
    N = (e) => {
        let { tabs: n, selectedTab: t, onTabSelect: i, onClose: r } = e;
        return (0, l.jsx)(d.v2r, {
            navId: 'members-tabs-overflow-menu',
            'aria-label': f.intl.string(f.t.riPnr6),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, l.jsx)(
                d.kSQ,
                {
                    children: n.map((e) => {
                        let { id: n, label: r } = e;
                        return (0, l.jsx)(
                            d.sNh,
                            {
                                id: n,
                                label: r,
                                icon: n === t ? d.owK : void 0,
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
function g(e) {
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
        h = m ? d.TVs.colors.HEADER_PRIMARY : o ? d.TVs.colors.TEXT_MUTED : d.TVs.colors.HEADER_PRIMARY;
    return (0, l.jsx)(d.yRy, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(N, {
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
            return (0, l.jsxs)(d.njP.Item, {
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
                        ? (0, l.jsx)(d.u04, {
                              size: 'sm',
                              color: h
                          })
                        : (0, l.jsx)(d.CJ0, {
                              size: 'sm',
                              color: h
                          })
                ]
            });
        }
    });
}
function T(e) {
    let { guildId: n, currentTab: t, onTabSelect: r } = e,
        [a, c] = i.useState(0),
        u = i.useRef(null),
        N = i.useRef(a),
        T = (0, x.A)({ guildId: n }),
        I = b(null != T ? T : 0),
        {
            lastVisibleIndex: p,
            onItemLayout: E,
            overflowItemsRef: S
        } = (0, o.zP)({
            items: I,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: a - 200
        }),
        R = (0, s.e7)([j.ZP], () => null != j.ZP.getGuildSidebarState(n), [n]),
        M = (0, m.L)({ guildId: n }),
        A = i.useMemo(() => (t === _.e.ALL_MEMBERS ? R : null != M && null != M.user), [t, R, M]),
        k = i.useMemo(() => I.slice(0, p + 1), [p, I]),
        Z = i.useMemo(() => I.slice(p + 1), [p, I]),
        P = i.useCallback(() => {
            var e;
            let n = null === (e = u.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != n && N.current !== n.width && (c(n.width), (N.current = n.width));
        }, []);
    return (
        i.useEffect(() => {
            let e = (0, C.pP)(P);
            return (0, C.YP)(e, document.body), () => (0, C.UC)(e, document.body);
        }, [P]),
        i.useEffect(() => {
            P();
        }, [P, A]),
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
                                I.map((e, n) =>
                                    (0, l.jsx)(
                                        o.AJ,
                                        {
                                            index: n,
                                            onItemLayout: E,
                                            children: (0, l.jsx)(d.njP.Item, {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            })
                                        },
                                        e.id
                                    )
                                ),
                                (0, l.jsx)('div', {
                                    ref: S,
                                    children: (0, l.jsx)(g, {
                                        tabs: Z,
                                        onTabSelect: r,
                                        selectedTab: t
                                    })
                                })
                            ]
                        }),
                        (0, l.jsxs)(d.njP, {
                            'aria-label': f.intl.string(f.t.tcvVXF),
                            selectedItem: t,
                            type: 'top-pill',
                            onItemSelect: r,
                            children: [
                                k.map((e) =>
                                    (0, l.jsx)(
                                        d.njP.Item,
                                        {
                                            id: e.id,
                                            'aria-label': e.label,
                                            children: e.label
                                        },
                                        e.id
                                    )
                                ),
                                0 !== Z.length
                                    ? (0, l.jsx)(g, {
                                          tabs: Z,
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
