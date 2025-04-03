n.d(t, { Z: () => g }), n(653041), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(21260),
    s = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(984370),
    m = n(785195),
    p = n(889711),
    f = n(246364),
    x = n(388032),
    h = n(350907);
let b = (e) => {
        let { tabs: t, selectedTab: n, onTabSelect: a, onClose: i } = e;
        return (0, r.jsx)(c.v2r, {
            navId: 'member-applications-tabs-overflow-menu',
            'aria-label': x.NW.string(x.t.riPnr6),
            hideScroller: !0,
            onClose: i,
            onSelect: i,
            children: (0, r.jsx)(
                c.kSQ,
                {
                    children: t.map((e) => {
                        let { id: t, label: i } = e;
                        return (0, r.jsx)(
                            c.sNh,
                            {
                                id: t,
                                label: i,
                                icon: t === n ? c.owK : void 0,
                                action: () => a(t)
                            },
                            t
                        );
                    })
                },
                'applications-overflow-tabs'
            )
        });
    },
    j = (e, t, n) => {
        let r = [];
        return (
            e &&
                r.push({
                    id: 'REVIEW_APPLICATION',
                    label: x.NW.string(x.t.fSGLR0)
                }),
            t &&
                (r.push({
                    id: f.wB.SUBMITTED,
                    label: 0 === n ? x.NW.string(x.t['4eQVBA']) : x.NW.formatToPlainString(x.t['Wo+zLy'], { count: n })
                }),
                r.push({
                    id: f.wB.APPROVED,
                    label: x.NW.string(x.t.aURgY2)
                }),
                r.push({
                    id: f.wB.REJECTED,
                    label: x.NW.string(x.t.bSZklZ)
                })),
            r
        );
    };
function _(e) {
    let { onTabSelect: t, tabs: n, selectedTab: i } = e,
        l = (0, d.ZP)(),
        u = (0, s.wj)(l),
        m = a.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, n]
        ),
        p = m ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        f = m ? c.TVs.colors.HEADER_PRIMARY : u ? c.TVs.colors.TEXT_MUTED : c.TVs.colors.HEADER_PRIMARY;
    return (0, r.jsx)(c.yRy, {
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(b, {
                selectedTab: i,
                onClose: a,
                tabs: n,
                onTabSelect: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            var n, a;
            let { isShown: i } = t;
            return (0, r.jsxs)(
                c.njP.Item,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (a = a =
                    {
                        id: 'more',
                        color: 'text-muted',
                        className: o()(h.more, { [h.selected]: m }),
                        'aria-label': x.NW.string(x.t.UKOtz8),
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: p,
                                children: x.NW.string(x.t.UKOtz8)
                            }),
                            i
                                ? (0, r.jsx)(c.u04, {
                                      size: 'sm',
                                      color: f
                                  })
                                : (0, r.jsx)(c.CJ0, {
                                      size: 'sm',
                                      color: f
                                  })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                n)
            );
        }
    });
}
let g = function (e) {
    let { pendingGuildJoinRequestsTotal: t, currentTab: n, onTabItemSelect: i, showSetupTab: o, canActionJoinRequests: s, isSidebarOpen: d } = e,
        [f, b] = a.useState(0),
        g = a.useRef(null),
        v = a.useRef(f),
        C = j(o, s, t),
        {
            lastVisibleIndex: y,
            onItemLayout: N,
            overflowItemsRef: T
        } = (0, l.zP)({
            items: C,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: f - 400
        }),
        I = a.useMemo(() => C.slice(0, y + 1), [y, C]),
        w = a.useMemo(() => C.slice(y + 1), [y, C]),
        O = a.useCallback(() => {
            var e;
            let t = null == (e = g.current) ? void 0 : e.getBoundingClientRect();
            null != t && v.current !== t.width && (b(t.width), (v.current = t.width));
        }, []);
    return (
        a.useEffect(() => {
            let e = (0, p.pP)(O);
            return (0, p.YP)(e, document.body), () => (0, p.UC)(e, document.body);
        }, [O]),
        a.useEffect(() => {
            O();
        }, [O, d]),
        (0, r.jsx)('div', {
            ref: g,
            children: (0, r.jsxs)(u.Z, {
                hideSearch: !0,
                toolbar: (0, r.jsx)('div', {}),
                children: [
                    (0, r.jsx)(u.Z.Icon, {
                        icon: (0, c.GSL)(m.Z),
                        disabled: !0,
                        'aria-label': x.NW.string(x.t.tcvVXF)
                    }),
                    (0, r.jsx)(u.Z.Title, {
                        className: h.title,
                        children: x.NW.string(x.t.tcvVXF)
                    }),
                    (0, r.jsx)(u.Z.Divider, { className: h.divider }),
                    (0, r.jsxs)('div', {
                        className: h.container,
                        children: [
                            (0, r.jsxs)('div', {
                                className: h.measurements,
                                children: [
                                    C.map((e, t) =>
                                        (0, r.jsx)(
                                            l.AJ,
                                            {
                                                index: t,
                                                onItemLayout: N,
                                                children: (0, r.jsx)(c.njP.Item, {
                                                    id: e.id,
                                                    'aria-label': e.label,
                                                    children: e.label
                                                })
                                            },
                                            e.id
                                        )
                                    ),
                                    (0, r.jsx)('div', {
                                        ref: T,
                                        children: (0, r.jsx)(_, {
                                            tabs: w,
                                            onTabSelect: i,
                                            selectedTab: n
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsxs)(c.njP, {
                                'aria-label': x.NW.string(x.t.TdEu5e),
                                selectedItem: n,
                                type: 'top-pill',
                                onItemSelect: i,
                                children: [
                                    I.map((e) =>
                                        (0, r.jsx)(
                                            c.njP.Item,
                                            {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            },
                                            e.id
                                        )
                                    ),
                                    0 !== w.length
                                        ? (0, r.jsx)(_, {
                                              tabs: w,
                                              onTabSelect: i,
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
