n.d(t, { Z: () => T }), n(388685);
var r = n(200651),
    l = n(192379),
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
    N = n(384433),
    p = n(388032),
    g = n(940471);
let _ = (e) => [
        {
            id: N.e.ALL_MEMBERS,
            label: p.NW.string(p.t.NOOm1d)
        },
        {
            id: N.e.PENDING,
            label: e > 0 ? p.NW.formatToPlainString(p.t['Wo+zLy'], { count: e }) : p.NW.string(p.t['4eQVBA'])
        },
        {
            id: N.e.REJECTED,
            label: p.NW.string(p.t.bSZklZ)
        },
        {
            id: N.e.APPROVED,
            label: p.NW.string(p.t.aURgY2)
        }
    ],
    v = (e) => {
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
function C(e) {
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
            return (0, r.jsx)(v, {
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
                        className: a()(g.more, { [g.selected]: u }),
                        'aria-label': p.NW.string(p.t.UKOtz8),
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: m,
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
function T(e) {
    let { guildId: t, currentTab: n, onTabSelect: i } = e,
        [a, c] = l.useState(0),
        x = l.useRef(null),
        v = l.useRef(a),
        T = (0, j.A)({ guildId: t }),
        E = _(null != T ? T : 0),
        {
            lastVisibleIndex: I,
            onItemLayout: S,
            overflowItemsRef: P
        } = (0, o.zP)({
            items: E,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: a - 200
        }),
        O = (0, s.e7)([f.ZP], () => null != f.ZP.getGuildSidebarState(t), [t]),
        R = (0, h.L)({ guildId: t }),
        y = l.useMemo(() => (n === N.e.ALL_MEMBERS ? O : null != R && null != R.user), [n, O, R]),
        A = l.useMemo(() => E.slice(0, I + 1), [I, E]),
        w = l.useMemo(() => E.slice(I + 1), [I, E]),
        M = (0, m.Z)((e) => {
            let t = e.contentRect.width;
            null != t && v.current !== t && (c(t), (v.current = t));
        });
    return (
        (0, u.s)(x, M, [y]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(b.Z.Divider, { className: g.divider }),
                (0, r.jsxs)('div', {
                    className: g.tabsContainer,
                    ref: x,
                    children: [
                        (0, r.jsxs)('div', {
                            className: g.measurements,
                            children: [
                                E.map((e, t) =>
                                    (0, r.jsx)(
                                        o.AJ,
                                        {
                                            index: t,
                                            onItemLayout: S,
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
                                    children: (0, r.jsx)(C, {
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
                                A.map((e) =>
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
                                    ? (0, r.jsx)(C, {
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
