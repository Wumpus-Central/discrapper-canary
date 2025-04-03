n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(21260),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(328977),
    x = n(571728),
    h = n(984370),
    j = n(433355),
    b = n(889711),
    f = n(384433),
    N = n(388032),
    p = n(86931);
let C = (e) => [
        {
            id: f.e.ALL_MEMBERS,
            label: N.NW.string(N.t.NOOm1d)
        },
        {
            id: f.e.PENDING,
            label: e > 0 ? N.NW.formatToPlainString(N.t['Wo+zLy'], { count: e }) : N.NW.string(N.t['4eQVBA'])
        },
        {
            id: f.e.REJECTED,
            label: N.NW.string(N.t.bSZklZ)
        }
    ],
    _ = (e) => {
        let { tabs: t, selectedTab: n, onTabSelect: l, onClose: i } = e;
        return (0, r.jsx)(d.v2r, {
            navId: 'members-tabs-overflow-menu',
            'aria-label': N.NW.string(N.t.riPnr6),
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
function g(e) {
    let { onTabSelect: t, tabs: n, selectedTab: i } = e,
        s = (0, u.ZP)(),
        o = (0, c.wj)(s),
        m = l.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, n]
        ),
        x = m ? 'header-primary' : o ? 'text-muted' : 'header-primary',
        h = m ? d.TVs.colors.HEADER_PRIMARY : o ? d.TVs.colors.TEXT_MUTED : d.TVs.colors.HEADER_PRIMARY;
    return (0, r.jsx)(d.yRy, {
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, r.jsx)(_, {
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
                        className: a()(p.more, { [p.selected]: m }),
                        'aria-label': N.NW.string(N.t.UKOtz8),
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: x,
                                children: N.NW.string(N.t.UKOtz8)
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
        _ = l.useRef(a),
        v = (0, x.A)({ guildId: t }),
        T = C(null != v ? v : 0),
        {
            lastVisibleIndex: E,
            onItemLayout: I,
            overflowItemsRef: S
        } = (0, o.zP)({
            items: T,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: a - 200
        }),
        y = (0, s.e7)([j.ZP], () => null != j.ZP.getGuildSidebarState(t), [t]),
        R = (0, m.L)({ guildId: t }),
        P = l.useMemo(() => (n === f.e.ALL_MEMBERS ? y : null != R && null != R.user), [n, y, R]),
        O = l.useMemo(() => T.slice(0, E + 1), [E, T]),
        w = l.useMemo(() => T.slice(E + 1), [E, T]),
        M = l.useCallback(() => {
            var e;
            let t = null == (e = u.current) ? void 0 : e.getBoundingClientRect();
            null != t && _.current !== t.width && (c(t.width), (_.current = t.width));
        }, []);
    return (
        l.useEffect(() => {
            let e = (0, b.pP)(M);
            return (0, b.YP)(e, document.body), () => (0, b.UC)(e, document.body);
        }, [M]),
        l.useEffect(() => {
            M();
        }, [M, P]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.Z.Divider, { className: p.divider }),
                (0, r.jsxs)('div', {
                    className: p.tabsContainer,
                    ref: u,
                    children: [
                        (0, r.jsxs)('div', {
                            className: p.measurements,
                            children: [
                                T.map((e, t) =>
                                    (0, r.jsx)(
                                        o.AJ,
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
                                    children: (0, r.jsx)(g, {
                                        tabs: w,
                                        onTabSelect: i,
                                        selectedTab: n
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)(d.njP, {
                            'aria-label': N.NW.string(N.t.tcvVXF),
                            selectedItem: n,
                            type: 'top-pill',
                            onItemSelect: i,
                            children: [
                                O.map((e) =>
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
                                    ? (0, r.jsx)(g, {
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
