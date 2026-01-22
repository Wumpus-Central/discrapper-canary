n.d(t, {
    A: () => m,
}),
    n(896048);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(3666),
    c = n(397927),
    o = n(770178),
    d = n(124589),
    u = n(985018),
    p = n(55092);

function h(e) {
    let { onTabSelect: t, tabs: n, selectedTab: r } = e,
        s = a.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === r;
                }),
            [r, n],
        ),
        [o, h] = a.useState(!1),
        m = (function (e) {
            let { selected: t, isHovered: n } = e;
            return n ? "text-strong" : t ? "text-brand" : "text-default";
        })({
            selected: s,
            isHovered: o,
        }),
        b = (function (e) {
            let { selected: t, isHovered: n } = e;
            return n ? c.LU0.colors.TEXT_STRONG : t ? c.LU0.colors.TEXT_BRAND : c.LU0.colors.INTERACTIVE_TEXT_DEFAULT;
        })({
            selected: s,
            isHovered: o,
        }),
        f = a.useCallback(() => h(!0), []),
        g = a.useCallback(() => h(!1), []),
        x = a.useRef(null);
    return (0, l.jsx)(c.YNO, {
        targetElementRef: x,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, l.jsx)(d.A, {
                selectedTab: r,
                onClose: a,
                tabs: n,
                onTabSelect: t,
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            var n, a;
            let { isShown: r } = t;
            return (0, l.jsx)(
                c.VQ0.Item,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, e)),
                (a = a =
                    {
                        id: "more",
                        look: "brand",
                        selectedItem: s ? "more" : void 0,
                        className: i()(p.Mf, {
                            [p.wH]: !1,
                        }),
                        clickableRef: (e) => {
                            null != e && null != e.ref && (x.current = e.ref);
                        },
                        "aria-label": u.intl.string(u.t["UKOtz+"]),
                        children: (0, l.jsxs)("div", {
                            className: p.OS,
                            onMouseEnter: f,
                            onMouseLeave: g,
                            children: [
                                (0, l.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    color: m,
                                    children: u.intl.string(u.t["UKOtz+"]),
                                }),
                                r
                                    ? (0, l.jsx)(c.tN5, {
                                          size: "xs",
                                          color: b,
                                      })
                                    : (0, l.jsx)(c.abt, {
                                          size: "xs",
                                          color: b,
                                      }),
                            ],
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                n),
            );
        },
    });
}

function m(e) {
    let { className: t, selectedTab: n, tabs: r, onTabSelect: d, onAvailableWidthChange: u } = e,
        [m, b] = a.useState(0),
        f = a.useRef(m),
        {
            lastVisibleIndex: g,
            onItemLayout: x,
            overflowItemsRef: v,
            itemWidthsRef: j,
        } = (0, s.Wv)({
            items: r,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: m,
        }),
        A = a.useMemo(() => r.slice(0, g + 1), [g, r]),
        _ = a.useMemo(() => r.slice(g + 1), [g, r]),
        y = a.useRef(null),
        O = a.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || f.current === t) return;
                b(t), (f.current = t);
                let n = j.current.reduce((e, t, n) => e + t + 20 * (0 !== n));
                null == u || u(t - n);
            },
            [j, u],
        );
    (0, o.g)(y, O);
    let S = 0 !== m;
    return (0, l.jsxs)("div", {
        className: i()(p.kL, t),
        ref: y,
        children: [
            (0, l.jsxs)("div", {
                className: p.Kk,
                children: [
                    r.map((e, t) =>
                        (0, l.jsx)(
                            s.Ae,
                            {
                                index: t,
                                onItemLayout: x,
                                children: (0, l.jsx)(c.VQ0.Item, {
                                    id: e.id,
                                    "aria-label": e.label,
                                    className: p.Mf,
                                    children: (0, l.jsx)(c.Text, {
                                        variant: "text-md/medium",
                                        children: e.label,
                                    }),
                                }),
                            },
                            e.id,
                        ),
                    ),
                    (0, l.jsx)("div", {
                        ref: v,
                        children: (0, l.jsx)(h, {
                            tabs: _,
                            onTabSelect: d,
                            selectedTab: n,
                        }),
                    }),
                ],
            }),
            S &&
                (0, l.jsxs)(c.VQ0, {
                    type: "top",
                    look: "brand",
                    selectedItem: n,
                    onItemSelect: d,
                    className: p.vR,
                    children: [
                        A.map((e) =>
                            (0, l.jsx)(
                                c.VQ0.Item,
                                {
                                    id: e.id,
                                    look: "brand",
                                    "aria-label": e.label,
                                    className: p.Mf,
                                    children: e.label,
                                },
                                e.id,
                            ),
                        ),
                        0 !== _.length
                            ? (0, l.jsx)(h, {
                                  tabs: _,
                                  onTabSelect: d,
                                  selectedTab: n,
                              })
                            : null,
                    ],
                }),
        ],
    });
}
