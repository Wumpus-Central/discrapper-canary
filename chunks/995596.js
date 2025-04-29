n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(21260),
    c = n(780384),
    d = n(481060),
    u = n(393903),
    m = n(448986),
    x = n(410030),
    h = n(328977),
    j = n(571728),
    b = n(984370),
    f = n(433355),
    p = n(384433),
    g = n(388032),
    v = n(86931);
let _ = (e) => [
        {
            id: p.e.ALL_MEMBERS,
            label: g.intl.string(g.t.NOOm1d)
        },
        {
            id: p.e.PENDING,
            label: e > 0 ? g.intl.formatToPlainString(g.t['Wo+zLy'], { count: e }) : g.intl.string(g.t['4eQVBA'])
        },
        {
            id: p.e.REJECTED,
            label: g.intl.string(g.t.bSZklZ)
        },
        {
            id: p.e.APPROVED,
            label: g.intl.string(g.t.aURgY2)
        }
    ],
    C = (e) => {
        let { tabs: t, selectedTab: n, onTabSelect: l, onClose: i } = e;
        return (0, r.jsx)(d.v2r, {
            navId: 'members-tabs-overflow-menu',
            'aria-label': g.intl.string(g.t.riPnr6),
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
function T(e) {
    let { onTabSelect: t, tabs: n, selectedTab: i } = e,
        s = (0, x.ZP)(),
        o = (0, c.wj)(s),
        u = l.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, n]
        ),
        m = u ? 'header-primary' : o ? 'text-muted' : 'header-primary',
        h = u ? d.TVs.colors.HEADER_PRIMARY : o ? d.TVs.colors.TEXT_MUTED : d.TVs.colors.HEADER_PRIMARY;
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
                        className: a()(v.more, { [v.selected]: u }),
                        'aria-label': g.intl.string(g.t.UKOtz8),
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: m,
                                children: g.intl.string(g.t.UKOtz8)
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
function N(e) {
    let { guildId: t, currentTab: n, onTabSelect: i } = e,
        [a, c] = l.useState(0),
        x = l.useRef(null),
        C = l.useRef(a),
        N = (0, j.A)({ guildId: t }),
        E = _(null != N ? N : 0),
        {
            lastVisibleIndex: S,
            onItemLayout: I,
            overflowItemsRef: P
        } = (0, o.zP)({
            items: E,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: a - 200
        }),
        O = (0, s.e7)([f.ZP], () => null != f.ZP.getGuildSidebarState(t), [t]),
        R = (0, h.L)({ guildId: t }),
        y = l.useMemo(() => (n === p.e.ALL_MEMBERS ? O : null != R && null != R.user), [n, O, R]),
        w = l.useMemo(() => E.slice(0, S + 1), [S, E]),
        A = l.useMemo(() => E.slice(S + 1), [S, E]),
        M = (0, m.Z)((e) => {
            let t = e.contentRect.width;
            null != t && C.current !== t && (c(t), (C.current = t));
        });
    return (
        (0, u.s)(x, M, [y]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(b.Z.Divider, { className: v.divider }),
                (0, r.jsxs)('div', {
                    className: v.tabsContainer,
                    ref: x,
                    children: [
                        (0, r.jsxs)('div', {
                            className: v.measurements,
                            children: [
                                E.map((e, t) =>
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
                                    ref: P,
                                    children: (0, r.jsx)(T, {
                                        tabs: A,
                                        onTabSelect: i,
                                        selectedTab: n
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)(d.njP, {
                            'aria-label': g.intl.string(g.t.tcvVXF),
                            selectedItem: n,
                            type: 'top-pill',
                            onItemSelect: i,
                            children: [
                                w.map((e) =>
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
                                0 !== A.length
                                    ? (0, r.jsx)(T, {
                                          tabs: A,
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
