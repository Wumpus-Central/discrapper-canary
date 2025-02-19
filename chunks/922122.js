n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(21260),
    s = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(540059),
    p = n(889711),
    m = n(79707),
    h = n(388032),
    g = n(657124);
function f(e) {
    let { onTabSelect: t, tabs: n, selectedTab: a } = e,
        o = (0, d.ZP)(),
        p = (0, s.wj)(o),
        f = (0, u.Q3)('GlobalDiscoveryHeaderMoreTab'),
        _ = i.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === a;
                }),
            [a, n]
        ),
        [v, b] = i.useState(!1),
        x = (function (e) {
            let { selected: t, isVisualRefreshEnabled: n, isDarkTheme: r, isHovered: i } = e;
            return n ? (i ? 'text-primary' : t ? 'text-brand' : 'text-normal') : !t && i ? 'interactive-hover' : t ? 'header-primary' : r ? 'interactive-normal' : 'header-primary';
        })({
            selected: _,
            isVisualRefreshEnabled: f,
            isDarkTheme: p,
            isHovered: v
        }),
        C = (function (e) {
            let { selected: t, isVisualRefreshEnabled: n, isDarkTheme: r, isHovered: i } = e;
            return n ? (i ? c.TVs.colors.TEXT_PRIMARY : t ? c.TVs.colors.TEXT_BRAND : c.TVs.colors.INTERACTIVE_NORMAL) : !t && i ? c.TVs.colors.INTERACTIVE_HOVER : t ? c.TVs.colors.HEADER_PRIMARY : r ? c.TVs.colors.TEXT_MUTED : c.TVs.colors.HEADER_PRIMARY;
        })({
            selected: _,
            isVisualRefreshEnabled: f,
            isDarkTheme: p,
            isHovered: v
        }),
        j = i.useCallback(() => b(!0), []),
        y = i.useCallback(() => b(!1), []);
    return (0, r.jsx)(c.yRy, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(m.Z, {
                selectedTab: a,
                onClose: i,
                tabs: n,
                onTabSelect: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            var n, i;
            let { isShown: a } = t;
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
                (i = i =
                    {
                        id: 'more',
                        look: 'brand',
                        selectedItem: f && _ ? 'more' : void 0,
                        className: l()(g.tab, { [g.selected]: !f && _ }),
                        'aria-label': h.NW.string(h.t.UKOtz8),
                        children: (0, r.jsxs)('div', {
                            className: g.more,
                            onMouseEnter: j,
                            onMouseLeave: y,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: f ? 'text-sm/semibold' : 'text-md/medium',
                                    color: x,
                                    children: h.NW.string(h.t.UKOtz8)
                                }),
                                a
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
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n)
            );
        }
    });
}
function _(e) {
    let { className: t, selectedTab: n, tabs: a, onTabSelect: s, onAvailableWidthChange: d } = e,
        [m, h] = i.useState(0),
        _ = i.useRef(m),
        {
            lastVisibleIndex: v,
            onItemLayout: b,
            overflowItemsRef: x,
            itemWidthsRef: C
        } = (0, o.zP)({
            items: a,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: m
        }),
        j = i.useMemo(() => a.slice(0, v + 1), [v, a]),
        y = i.useMemo(() => a.slice(v + 1), [v, a]),
        O = i.useRef(null),
        I = i.useCallback(() => {
            var e;
            let t = null === (e = O.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t || _.current === t.width) return;
            h(t.width), (_.current = t.width);
            let n = C.current.reduce((e, t, n) => e + t + 20 * (0 !== n)),
                r = t.width - n;
            null == d || d(r);
        }, [C, d]);
    i.useEffect(() => {
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
                    a.map((e, t) =>
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
                        children: (0, r.jsx)(f, {
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
                            ? (0, r.jsx)(f, {
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
