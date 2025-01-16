n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(21260),
    c = n(780384),
    s = n(481060),
    d = n(410030),
    u = n(984370),
    m = n(785195),
    f = n(889711),
    x = n(246364),
    b = n(388032),
    h = n(315651);
let p = (e) => {
        let { tabs: t, selectedTab: n, onTabSelect: r, onClose: a } = e;
        return (0, i.jsx)(s.Menu, {
            navId: 'member-applications-tabs-overflow-menu',
            'aria-label': b.intl.string(b.t.riPnr6),
            hideScroller: !0,
            onClose: a,
            onSelect: a,
            children: (0, i.jsx)(
                s.MenuGroup,
                {
                    children: t.map((e) => {
                        let { id: t, label: a } = e;
                        return (0, i.jsx)(
                            s.MenuItem,
                            {
                                id: t,
                                label: a,
                                icon: t === n ? s.CircleCheckIcon : void 0,
                                action: () => r(t)
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
        let i = [];
        return (
            e &&
                i.push({
                    id: 'REVIEW_APPLICATION',
                    label: b.intl.string(b.t.fSGLR0)
                }),
            t &&
                (i.push({
                    id: x.wB.SUBMITTED,
                    label: 0 === n ? b.intl.string(b.t['4eQVBA']) : b.intl.formatToPlainString(b.t['Wo+zLy'], { count: n })
                }),
                i.push({
                    id: x.wB.APPROVED,
                    label: b.intl.string(b.t.aURgY2)
                }),
                i.push({
                    id: x.wB.REJECTED,
                    label: b.intl.string(b.t.bSZklZ)
                })),
            i
        );
    };
function _(e) {
    let { onTabSelect: t, tabs: n, selectedTab: a } = e,
        l = (0, d.ZP)(),
        u = (0, c.wj)(l),
        m = r.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === a;
                }),
            [a, n]
        ),
        f = m ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        x = m ? s.tokens.colors.HEADER_PRIMARY : u ? s.tokens.colors.TEXT_MUTED : s.tokens.colors.HEADER_PRIMARY;
    return (0, i.jsx)(s.Popout, {
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(p, {
                selectedTab: a,
                onClose: r,
                tabs: n,
                onTabSelect: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsxs)(s.TabBar.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: o()(h.more, { [h.selected]: m }),
                'aria-label': b.intl.string(b.t.UKOtz8),
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: f,
                        children: b.intl.string(b.t.UKOtz8)
                    }),
                    n
                        ? (0, i.jsx)(s.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: x
                          })
                        : (0, i.jsx)(s.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: x
                          })
                ]
            });
        }
    });
}
t.Z = function (e) {
    let { pendingGuildJoinRequestsTotal: t, currentTab: n, onTabItemSelect: a, showSetupTab: o, canActionJoinRequests: c, isSidebarOpen: d } = e,
        [x, p] = r.useState(0),
        g = r.useRef(null),
        v = r.useRef(x),
        j = C(o, c, t),
        {
            lastVisibleIndex: I,
            onItemLayout: T,
            overflowItemsRef: R
        } = (0, l.zP)({
            items: j,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: x - 400
        }),
        E = r.useMemo(() => j.slice(0, I + 1), [I, j]),
        S = r.useMemo(() => j.slice(I + 1), [I, j]),
        A = r.useCallback(() => {
            var e;
            let t = null === (e = g.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != t && v.current !== t.width && (p(t.width), (v.current = t.width));
        }, []);
    return (
        r.useEffect(() => {
            let e = (0, f.pP)(A);
            return (0, f.YP)(e, document.body), () => (0, f.UC)(e, document.body);
        }, [A]),
        r.useEffect(() => {
            A();
        }, [A, d]),
        (0, i.jsx)('div', {
            ref: g,
            children: (0, i.jsxs)(u.Z, {
                hideSearch: !0,
                toolbar: (0, i.jsx)('div', {}),
                children: [
                    (0, i.jsx)(u.Z.Icon, {
                        icon: (0, s.makeIconCompat)(m.Z),
                        disabled: !0,
                        'aria-label': b.intl.string(b.t.tcvVXF)
                    }),
                    (0, i.jsx)(u.Z.Title, {
                        className: h.title,
                        children: b.intl.string(b.t.tcvVXF)
                    }),
                    (0, i.jsx)(u.Z.Divider, { className: h.divider }),
                    (0, i.jsxs)('div', {
                        className: h.container,
                        children: [
                            (0, i.jsxs)('div', {
                                className: h.measurements,
                                children: [
                                    j.map((e, t) =>
                                        (0, i.jsx)(
                                            l.AJ,
                                            {
                                                index: t,
                                                onItemLayout: T,
                                                children: (0, i.jsx)(s.TabBar.Item, {
                                                    id: e.id,
                                                    'aria-label': e.label,
                                                    children: e.label
                                                })
                                            },
                                            e.id
                                        )
                                    ),
                                    (0, i.jsx)('div', {
                                        ref: R,
                                        children: (0, i.jsx)(_, {
                                            tabs: S,
                                            onTabSelect: a,
                                            selectedTab: n
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)(s.TabBar, {
                                'aria-label': b.intl.string(b.t.TdEu5e),
                                selectedItem: n,
                                type: 'top-pill',
                                onItemSelect: a,
                                children: [
                                    E.map((e) =>
                                        (0, i.jsx)(
                                            s.TabBar.Item,
                                            {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            },
                                            e.id
                                        )
                                    ),
                                    0 !== S.length
                                        ? (0, i.jsx)(_, {
                                              tabs: S,
                                              onTabSelect: a,
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
