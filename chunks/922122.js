n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(21260),
    s = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(540059),
    p = n(889711),
    m = n(79707),
    h = n(388032),
    g = n(657124);
function _(e) {
    let { onTabSelect: t, tabs: n, selectedTab: i } = e,
        o = (0, d.ZP)(),
        p = (0, s.wj)(o),
        _ = (0, u.Q3)('GlobalDiscoveryHeaderMoreTab'),
        f = a.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, n]
        ),
        [v, b] = a.useState(!1),
        x = (function (e) {
            let { selected: t, isVisualRefreshEnabled: n, isDarkTheme: r, isHovered: a } = e;
            return n ? (a ? 'text-primary' : t ? 'text-brand' : 'text-normal') : !t && a ? 'interactive-hover' : t ? 'header-primary' : r ? 'interactive-normal' : 'header-primary';
        })({
            selected: f,
            isVisualRefreshEnabled: _,
            isDarkTheme: p,
            isHovered: v
        }),
        C = (function (e) {
            let { selected: t, isVisualRefreshEnabled: n, isDarkTheme: r, isHovered: a } = e;
            return n ? (a ? c.TVs.colors.TEXT_PRIMARY : t ? c.TVs.colors.TEXT_BRAND : c.TVs.colors.INTERACTIVE_NORMAL) : !t && a ? c.TVs.colors.INTERACTIVE_HOVER : t ? c.TVs.colors.HEADER_PRIMARY : r ? c.TVs.colors.TEXT_MUTED : c.TVs.colors.HEADER_PRIMARY;
        })({
            selected: f,
            isVisualRefreshEnabled: _,
            isDarkTheme: p,
            isHovered: v
        }),
        j = a.useCallback(() => b(!0), []),
        y = a.useCallback(() => b(!1), []);
    return (0, r.jsx)(c.yRy, {
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(m.Z, {
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
            return (0, r.jsx)(
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
                        look: 'brand',
                        selectedItem: _ && f ? 'more' : void 0,
                        className: l()(g.tab, { [g.selected]: !_ && f }),
                        'aria-label': h.NW.string(h.t.UKOtz8),
                        children: (0, r.jsxs)('div', {
                            className: g.more,
                            onMouseEnter: j,
                            onMouseLeave: y,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: _ ? 'text-sm/semibold' : 'text-md/medium',
                                    color: x,
                                    children: h.NW.string(h.t.UKOtz8)
                                }),
                                i
                                    ? (0, r.jsx)(c.u04, {
                                          size: 'xs',
                                          color: C
                                      })
                                    : (0, r.jsx)(c.CJ0, {
                                          size: 'xs',
                                          color: C
                                      })
                            ]
                        })
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
function f(e) {
    let { className: t, selectedTab: n, tabs: i, onTabSelect: s, onAvailableWidthChange: d } = e,
        [m, h] = a.useState(0),
        f = a.useRef(m),
        {
            lastVisibleIndex: v,
            onItemLayout: b,
            overflowItemsRef: x,
            itemWidthsRef: C
        } = (0, o.zP)({
            items: i,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: m
        }),
        j = a.useMemo(() => i.slice(0, v + 1), [v, i]),
        y = a.useMemo(() => i.slice(v + 1), [v, i]),
        O = a.useRef(null),
        I = a.useCallback(() => {
            var e;
            let t = null === (e = O.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t || f.current === t.width) return;
            h(t.width), (f.current = t.width);
            let n = C.current.reduce((e, t, n) => e + t + 20 * (0 !== n)),
                r = t.width - n;
            null == d || d(r);
        }, [C, d]);
    a.useEffect(() => {
        let e = (0, p.pP)(I);
        return (0, p.YP)(e, document.body), () => (0, p.UC)(e, document.body);
    }, [I]);
    let N = 0 !== m,
        P = (0, u.Q3)('GlobalDiscoveryHeaderTabs');
    return (0, r.jsxs)('div', {
        className: l()(g.container, t),
        ref: O,
        children: [
            (0, r.jsxs)('div', {
                className: g.measurements,
                children: [
                    i.map((e, t) =>
                        (0, r.jsx)(
                            o.AJ,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, r.jsx)(c.njP.Item, {
                                    id: e.id,
                                    'aria-label': e.label,
                                    className: g.tab,
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: e.label
                                    })
                                })
                            },
                            e.id
                        )
                    ),
                    (0, r.jsx)('div', {
                        ref: x,
                        children: (0, r.jsx)(_, {
                            tabs: y,
                            onTabSelect: s,
                            selectedTab: n
                        })
                    })
                ]
            }),
            N &&
                (0, r.jsxs)(c.njP, {
                    type: 'top',
                    look: 'brand',
                    selectedItem: n,
                    onItemSelect: s,
                    className: g.tabs,
                    children: [
                        j.map((e) =>
                            (0, r.jsx)(
                                c.njP.Item,
                                {
                                    id: e.id,
                                    look: 'brand',
                                    'aria-label': e.label,
                                    className: l()(g.tab, { [g.selected]: !P && n === e.id }),
                                    children: e.label
                                },
                                e.id
                            )
                        ),
                        0 !== y.length
                            ? (0, r.jsx)(_, {
                                  tabs: y,
                                  onTabSelect: s,
                                  selectedTab: n
                              })
                            : null
                    ]
                })
        ]
    });
}
