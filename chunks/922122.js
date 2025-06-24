n.d(t, { Z: () => h }), n(388685);
var r = n(255367),
    a = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(21260),
    o = n(481060),
    c = n(393903),
    d = n(79707),
    u = n(388032),
    p = n(602791);
function m(e) {
    let { onTabSelect: t, tabs: n, selectedTab: i } = e,
        s = a.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, n]
        ),
        [c, m] = a.useState(!1),
        h = (function (e) {
            let { selected: t, isHovered: n } = e;
            return n ? 'text-primary' : t ? 'text-brand' : 'text-normal';
        })({
            selected: s,
            isHovered: c
        }),
        g = (function (e) {
            let { selected: t, isHovered: n } = e;
            return n ? o.TVs.colors.TEXT_PRIMARY : t ? o.TVs.colors.TEXT_BRAND : o.TVs.colors.INTERACTIVE_NORMAL;
        })({
            selected: s,
            isHovered: c
        }),
        f = a.useCallback(() => m(!0), []),
        _ = a.useCallback(() => m(!1), []),
        b = a.useRef(null);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: b,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(d.Z, {
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
                o.njP.Item,
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
                        selectedItem: s ? 'more' : void 0,
                        className: l()(p.tab, { [p.selected]: !1 }),
                        clickableRef: (e) => {
                            null != e && null != e.ref && (b.current = e.ref);
                        },
                        'aria-label': u.intl.string(u.t.UKOtz8),
                        children: (0, r.jsxs)('div', {
                            className: p.more,
                            onMouseEnter: f,
                            onMouseLeave: _,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    color: h,
                                    children: u.intl.string(u.t.UKOtz8)
                                }),
                                i
                                    ? (0, r.jsx)(o.u04, {
                                          size: 'xs',
                                          color: g
                                      })
                                    : (0, r.jsx)(o.CJ0, {
                                          size: 'xs',
                                          color: g
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
function h(e) {
    let { className: t, selectedTab: n, tabs: i, onTabSelect: d, onAvailableWidthChange: u } = e,
        [h, g] = a.useState(0),
        f = a.useRef(h),
        {
            lastVisibleIndex: _,
            onItemLayout: b,
            overflowItemsRef: x,
            itemWidthsRef: v
        } = (0, s.zP)({
            items: i,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: h
        }),
        C = a.useMemo(() => i.slice(0, _ + 1), [_, i]),
        j = a.useMemo(() => i.slice(_ + 1), [_, i]),
        y = a.useRef(null),
        I = a.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || f.current === t) return;
                g(t), (f.current = t);
                let n = v.current.reduce((e, t, n) => e + t + 20 * (0 !== n));
                null == u || u(t - n);
            },
            [v, u]
        );
    (0, c.s)(y, I);
    let O = 0 !== h;
    return (0, r.jsxs)('div', {
        className: l()(p.container, t),
        ref: y,
        children: [
            (0, r.jsxs)('div', {
                className: p.measurements,
                children: [
                    i.map((e, t) =>
                        (0, r.jsx)(
                            s.AJ,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, r.jsx)(o.njP.Item, {
                                    id: e.id,
                                    'aria-label': e.label,
                                    className: p.tab,
                                    children: (0, r.jsx)(o.Text, {
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
                        children: (0, r.jsx)(m, {
                            tabs: j,
                            onTabSelect: d,
                            selectedTab: n
                        })
                    })
                ]
            }),
            O &&
                (0, r.jsxs)(o.njP, {
                    type: 'top',
                    look: 'brand',
                    selectedItem: n,
                    onItemSelect: d,
                    className: p.tabs,
                    children: [
                        C.map((e) =>
                            (0, r.jsx)(
                                o.njP.Item,
                                {
                                    id: e.id,
                                    look: 'brand',
                                    'aria-label': e.label,
                                    className: p.tab,
                                    children: e.label
                                },
                                e.id
                            )
                        ),
                        0 !== j.length
                            ? (0, r.jsx)(m, {
                                  tabs: j,
                                  onTabSelect: d,
                                  selectedTab: n
                              })
                            : null
                    ]
                })
        ]
    });
}
