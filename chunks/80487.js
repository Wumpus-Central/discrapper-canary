n.d(t, { Z: () => C }), n(653041), n(47120);
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
    _ = n(889711),
    x = n(246364),
    f = n(388032),
    h = n(315651);
let p = (e) => {
        let { tabs: t, selectedTab: n, onTabSelect: i, onClose: r } = e;
        return (0, a.jsx)(c.v2r, {
            navId: 'member-applications-tabs-overflow-menu',
            'aria-label': f.intl.string(f.t.riPnr6),
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
    b = (e, t, n) => {
        let a = [];
        return (
            e &&
                a.push({
                    id: 'REVIEW_APPLICATION',
                    label: f.intl.string(f.t.fSGLR0)
                }),
            t &&
                (a.push({
                    id: x.wB.SUBMITTED,
                    label: 0 === n ? f.intl.string(f.t['4eQVBA']) : f.intl.formatToPlainString(f.t['Wo+zLy'], { count: n })
                }),
                a.push({
                    id: x.wB.APPROVED,
                    label: f.intl.string(f.t.aURgY2)
                }),
                a.push({
                    id: x.wB.REJECTED,
                    label: f.intl.string(f.t.bSZklZ)
                })),
            a
        );
    };
function g(e) {
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
        _ = m ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        x = m ? c.TVs.colors.HEADER_PRIMARY : u ? c.TVs.colors.TEXT_MUTED : c.TVs.colors.HEADER_PRIMARY;
    return (0, a.jsx)(c.yRy, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, a.jsx)(p, {
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
                className: l()(h.more, { [h.selected]: m }),
                'aria-label': f.intl.string(f.t.UKOtz8),
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: _,
                        children: f.intl.string(f.t.UKOtz8)
                    }),
                    n
                        ? (0, a.jsx)(c.u04, {
                              size: 'sm',
                              color: x
                          })
                        : (0, a.jsx)(c.CJ0, {
                              size: 'sm',
                              color: x
                          })
                ]
            });
        }
    });
}
let C = function (e) {
    let { pendingGuildJoinRequestsTotal: t, currentTab: n, onTabItemSelect: r, showSetupTab: l, canActionJoinRequests: s, isSidebarOpen: d } = e,
        [x, p] = i.useState(0),
        C = i.useRef(null),
        v = i.useRef(x),
        j = b(l, s, t),
        {
            lastVisibleIndex: I,
            onItemLayout: T,
            overflowItemsRef: R
        } = (0, o.zP)({
            items: j,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: x - 400
        }),
        E = i.useMemo(() => j.slice(0, I + 1), [I, j]),
        P = i.useMemo(() => j.slice(I + 1), [I, j]),
        w = i.useCallback(() => {
            var e;
            let t = null === (e = C.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != t && v.current !== t.width && (p(t.width), (v.current = t.width));
        }, []);
    return (
        i.useEffect(() => {
            let e = (0, _.pP)(w);
            return (0, _.YP)(e, document.body), () => (0, _.UC)(e, document.body);
        }, [w]),
        i.useEffect(() => {
            w();
        }, [w, d]),
        (0, a.jsx)('div', {
            ref: C,
            children: (0, a.jsxs)(u.Z, {
                hideSearch: !0,
                toolbar: (0, a.jsx)('div', {}),
                children: [
                    (0, a.jsx)(u.Z.Icon, {
                        icon: (0, c.GSL)(m.Z),
                        disabled: !0,
                        'aria-label': f.intl.string(f.t.tcvVXF)
                    }),
                    (0, a.jsx)(u.Z.Title, {
                        className: h.title,
                        children: f.intl.string(f.t.tcvVXF)
                    }),
                    (0, a.jsx)(u.Z.Divider, { className: h.divider }),
                    (0, a.jsxs)('div', {
                        className: h.container,
                        children: [
                            (0, a.jsxs)('div', {
                                className: h.measurements,
                                children: [
                                    j.map((e, t) =>
                                        (0, a.jsx)(
                                            o.AJ,
                                            {
                                                index: t,
                                                onItemLayout: T,
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
                                        children: (0, a.jsx)(g, {
                                            tabs: P,
                                            onTabSelect: r,
                                            selectedTab: n
                                        })
                                    })
                                ]
                            }),
                            (0, a.jsxs)(c.njP, {
                                'aria-label': f.intl.string(f.t.TdEu5e),
                                selectedItem: n,
                                type: 'top-pill',
                                onItemSelect: r,
                                children: [
                                    E.map((e) =>
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
                                    0 !== P.length
                                        ? (0, a.jsx)(g, {
                                              tabs: P,
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
