n.d(t, { Z: () => v }), n(653041), n(47120);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(21260),
    s = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(984370),
    m = n(785195),
    x = n(889711),
    h = n(246364),
    _ = n(388032),
    p = n(172427);
let f = (e) => {
        let { tabs: t, selectedTab: n, onTabSelect: i, onClose: r } = e;
        return (0, a.jsx)(c.v2r, {
            navId: 'member-applications-tabs-overflow-menu',
            'aria-label': _.intl.string(_.t.riPnr6),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, a.jsx)(
                c.kSQ,
                {
                    children: t.map((e) => {
                        let { id: t, label: r } = e;
                        return (0, a.jsx)(
                            c.sNh,
                            {
                                id: t,
                                label: r,
                                icon: t === n ? c.owK : void 0,
                                action: () => i(t)
                            },
                            t
                        );
                    })
                },
                'applications-overflow-tabs'
            )
        });
    },
    C = (e, t, n) => {
        let a = [];
        return (
            e &&
                a.push({
                    id: 'REVIEW_APPLICATION',
                    label: _.intl.string(_.t.fSGLR0)
                }),
            t &&
                (a.push({
                    id: h.wB.SUBMITTED,
                    label: 0 === n ? _.intl.string(_.t['4eQVBA']) : _.intl.formatToPlainString(_.t['Wo+zLy'], { count: n })
                }),
                a.push({
                    id: h.wB.APPROVED,
                    label: _.intl.string(_.t.aURgY2)
                }),
                a.push({
                    id: h.wB.REJECTED,
                    label: _.intl.string(_.t.bSZklZ)
                })),
            a
        );
    };
function j(e) {
    let { onTabSelect: t, tabs: n, selectedTab: r } = e,
        o = (0, d.ZP)(),
        u = (0, s.wj)(o),
        m = i.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === r;
                }),
            [r, n]
        ),
        x = m ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        h = m ? c.TVs.colors.HEADER_PRIMARY : u ? c.TVs.colors.TEXT_MUTED : c.TVs.colors.HEADER_PRIMARY;
    return (0, a.jsx)(c.yRy, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, a.jsx)(f, {
                selectedTab: r,
                onClose: i,
                tabs: n,
                onTabSelect: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsxs)(c.njP.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: l()(p.more, { [p.selected]: m }),
                'aria-label': _.intl.string(_.t.UKOtz8),
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: x,
                        children: _.intl.string(_.t.UKOtz8)
                    }),
                    n
                        ? (0, a.jsx)(c.u04, {
                              size: 'sm',
                              color: h
                          })
                        : (0, a.jsx)(c.CJ0, {
                              size: 'sm',
                              color: h
                          })
                ]
            });
        }
    });
}
let v = function (e) {
    let { pendingGuildJoinRequestsTotal: t, currentTab: n, onTabItemSelect: r, showSetupTab: l, canActionJoinRequests: s, isSidebarOpen: d } = e,
        [h, f] = i.useState(0),
        v = i.useRef(null),
        b = i.useRef(h),
        g = C(l, s, t),
        {
            lastVisibleIndex: T,
            onItemLayout: I,
            overflowItemsRef: R
        } = (0, o.zP)({
            items: g,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: h - 400
        }),
        N = i.useMemo(() => g.slice(0, T + 1), [T, g]),
        E = i.useMemo(() => g.slice(T + 1), [T, g]),
        w = i.useCallback(() => {
            var e;
            let t = null === (e = v.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != t && b.current !== t.width && (f(t.width), (b.current = t.width));
        }, []);
    return (
        i.useEffect(() => {
            let e = (0, x.pP)(w);
            return (0, x.YP)(e, document.body), () => (0, x.UC)(e, document.body);
        }, [w]),
        i.useEffect(() => {
            w();
        }, [w, d]),
        (0, a.jsx)('div', {
            ref: v,
            children: (0, a.jsxs)(u.Z, {
                hideSearch: !0,
                toolbar: (0, a.jsx)('div', {}),
                children: [
                    (0, a.jsx)(u.Z.Icon, {
                        icon: (0, c.GSL)(m.Z),
                        disabled: !0,
                        'aria-label': _.intl.string(_.t.tcvVXF)
                    }),
                    (0, a.jsx)(u.Z.Title, {
                        className: p.title,
                        children: _.intl.string(_.t.tcvVXF)
                    }),
                    (0, a.jsx)(u.Z.Divider, { className: p.divider }),
                    (0, a.jsxs)('div', {
                        className: p.container,
                        children: [
                            (0, a.jsxs)('div', {
                                className: p.measurements,
                                children: [
                                    g.map((e, t) =>
                                        (0, a.jsx)(
                                            o.AJ,
                                            {
                                                index: t,
                                                onItemLayout: I,
                                                children: (0, a.jsx)(c.njP.Item, {
                                                    id: e.id,
                                                    'aria-label': e.label,
                                                    children: e.label
                                                })
                                            },
                                            e.id
                                        )
                                    ),
                                    (0, a.jsx)('div', {
                                        ref: R,
                                        children: (0, a.jsx)(j, {
                                            tabs: E,
                                            onTabSelect: r,
                                            selectedTab: n
                                        })
                                    })
                                ]
                            }),
                            (0, a.jsxs)(c.njP, {
                                'aria-label': _.intl.string(_.t.TdEu5e),
                                selectedItem: n,
                                type: 'top-pill',
                                onItemSelect: r,
                                children: [
                                    N.map((e) =>
                                        (0, a.jsx)(
                                            c.njP.Item,
                                            {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            },
                                            e.id
                                        )
                                    ),
                                    0 !== E.length
                                        ? (0, a.jsx)(j, {
                                              tabs: E,
                                              onTabSelect: r,
                                              selectedTab: n
                                          })
                                        : null
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    );
};
