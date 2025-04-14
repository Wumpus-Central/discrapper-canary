n.d(t, { Z: () => v }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(21260),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(328977),
    x = n(571728),
    h = n(984370),
    j = n(433355),
    b = n(889711),
    f = n(384433),
    p = n(388032),
    N = n(86931);
let g = (e) => [
        {
            id: f.e.ALL_MEMBERS,
            label: p.NW.string(p.t.NOOm1d)
        },
        {
            id: f.e.PENDING,
            label: e > 0 ? p.NW.formatToPlainString(p.t['Wo+zLy'], { count: e }) : p.NW.string(p.t['4eQVBA'])
        },
        {
            id: f.e.REJECTED,
            label: p.NW.string(p.t.bSZklZ)
        }
    ],
    C = (e) => {
        let { tabs: t, selectedTab: n, onTabSelect: l, onClose: i } = e;
        return (0, r.jsx)(d.v2r, {
            navId: 'members-tabs-overflow-menu',
            'aria-label': p.NW.string(p.t.riPnr6),
            hideScroller: !0,
            onClose: i,
            onSelect: i,
            children: (0, r.jsx)(
                d.kSQ,
                {
                    children: t.map((e) => {
                        let { id: t, label: i } = e;
                        return (0, r.jsx)(
                            d.sNh,
                            {
                                id: t,
                                label: i,
                                icon: t === n ? d.owK : void 0,
                                action: () => l(t)
                            },
                            t
                        );
                    })
                },
                'applications-overflow-tabs'
            )
        });
    };
function _(e) {
    let { onTabSelect: t, tabs: n, selectedTab: i } = e,
        o = (0, u.ZP)(),
        s = (0, c.wj)(o),
        m = l.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, n]
        ),
        x = m ? 'header-primary' : s ? 'text-muted' : 'header-primary',
        h = m ? d.TVs.colors.HEADER_PRIMARY : s ? d.TVs.colors.TEXT_MUTED : d.TVs.colors.HEADER_PRIMARY;
    return (0, r.jsx)(d.yRy, {
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, r.jsx)(C, {
                selectedTab: i,
                onClose: l,
                tabs: n,
                onTabSelect: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            var n, l;
            let { isShown: i } = t;
            return (0, r.jsxs)(
                d.njP.Item,
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
                (l = l =
                    {
                        id: 'more',
                        color: 'text-muted',
                        className: a()(N.more, { [N.selected]: m }),
                        'aria-label': p.NW.string(p.t.UKOtz8),
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: x,
                                children: p.NW.string(p.t.UKOtz8)
                            }),
                            i
                                ? (0, r.jsx)(d.u04, {
                                      size: 'sm',
                                      color: h
                                  })
                                : (0, r.jsx)(d.CJ0, {
                                      size: 'sm',
                                      color: h
                                  })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                n)
            );
        }
    });
}
function v(e) {
    let { guildId: t, currentTab: n, onTabSelect: i } = e,
        [a, c] = l.useState(0),
        u = l.useRef(null),
        C = l.useRef(a),
        v = (0, x.A)({ guildId: t }),
        E = g(null != v ? v : 0),
        {
            lastVisibleIndex: T,
            onItemLayout: I,
            overflowItemsRef: S
        } = (0, s.zP)({
            items: E,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: a - 200
        }),
        y = (0, o.e7)([j.ZP], () => null != j.ZP.getGuildSidebarState(t), [t]),
        R = (0, m.L)({ guildId: t }),
        O = l.useMemo(() => (n === f.e.ALL_MEMBERS ? y : null != R && null != R.user), [n, y, R]),
        P = l.useMemo(() => E.slice(0, T + 1), [T, E]),
        w = l.useMemo(() => E.slice(T + 1), [T, E]),
        M = l.useCallback(() => {
            var e;
            let t = null == (e = u.current) ? void 0 : e.getBoundingClientRect();
            null != t && C.current !== t.width && (c(t.width), (C.current = t.width));
        }, []);
    return (
        l.useEffect(() => {
            let e = (0, b.pP)(M);
            return (0, b.YP)(e, document.body), () => (0, b.UC)(e, document.body);
        }, [M]),
        l.useEffect(() => {
            M();
        }, [M, O]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.Z.Divider, { className: N.divider }),
                (0, r.jsxs)('div', {
                    className: N.tabsContainer,
                    ref: u,
                    children: [
                        (0, r.jsxs)('div', {
                            className: N.measurements,
                            children: [
                                E.map((e, t) =>
                                    (0, r.jsx)(
                                        s.AJ,
                                        {
                                            index: t,
                                            onItemLayout: I,
                                            children: (0, r.jsx)(d.njP.Item, {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            })
                                        },
                                        e.id
                                    )
                                ),
                                (0, r.jsx)('div', {
                                    ref: S,
                                    children: (0, r.jsx)(_, {
                                        tabs: w,
                                        onTabSelect: i,
                                        selectedTab: n
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)(d.njP, {
                            'aria-label': p.NW.string(p.t.tcvVXF),
                            selectedItem: n,
                            type: 'top-pill',
                            onItemSelect: i,
                            children: [
                                P.map((e) =>
                                    (0, r.jsx)(
                                        d.njP.Item,
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
    );
}
