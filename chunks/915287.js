n.d(t, { v: () => O }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(952639),
    l = n.n(s),
    c = n(84735),
    u = n(562701),
    d = n(676793);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    let t = i.useRef(e);
    return (
        i.useEffect(() => {
            t.current = e;
        }, [e]),
        i.useCallback(() => t.current, [])
    );
}
function v(e) {
    let t = i.useRef(e);
    return (
        i.useEffect(() => {
            t.current = e;
        }, [e]),
        i.useCallback((e) => {
            let { current: n } = t,
                r = 0;
            for (let t = 0; t < n.length; t++) {
                let i = n[t];
                if (r <= e && r + i >= e) return [t, e - r];
                r += i;
            }
            return [0, 0];
        }, [])
    );
}
function b(e) {
    let { renderSection: t, renderRow: n, renderFooter: o, renderListHeader: a, stickyListHeader: s, wrapSection: c, items: u, spacerTop: d } = e,
        f = [
            (0, r.jsx)(
                'div',
                {
                    'aria-hidden': !0,
                    style: { height: d }
                },
                '---list-spacer-top'
            )
        ],
        p = [],
        _ = 0;
    if (
        (!0 === s && null != a && f.push((0, r.jsx)(i.Fragment, { children: a() }, '---sticky-header')),
        u.forEach((e) => {
            var r;
            switch ((e.section !== _ && p.length > 0 && (f.push(null != c ? c(_, p) : p), (p = [])), (_ = null !== (r = e.section) && void 0 !== r ? r : 0), e.type)) {
                case 'section':
                    null != t && p.push(t(e));
                    break;
                case 'row':
                    p.push(n(e));
                    break;
                case 'footer':
                    null != o && p.push(o(e));
                    break;
                case 'header':
                    null != a && !0 !== s && p.push(a());
            }
        }),
        p.length > 0)
    ) {
        var h;
        f.push(null !== (h = null == c ? void 0 : c(_, p)) && void 0 !== h ? h : p);
    }
    return l()(f);
}
function y(e) {
    let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: r, isListVisible: i } = e;
    return null == n || null == t ? null : t(i, r);
}
function O(e, t, n, o) {
    let s = (0, u.G6)(e),
        l = new Map(),
        f = new o((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null === (t = l.get(n)) || void 0 === t || t(e);
            });
        });
    return i.forwardRef(function (o, _) {
        var { className: g, onScroll: O, onResize: S = null, onContentResize: I = null, dir: T = 'ltr', sections: N, sectionHeight: A, rowHeight: C, footerHeight: R = 0, sidebarHeight: P, listHeaderHeight: w = 0, renderSection: D, renderRow: x, renderFooter: L, renderSidebar: M, renderListHeader: k, stickyListHeader: j, wrapSection: U, getAnchorId: G, paddingTop: B, paddingBottom: Z, fade: F = !1, customTheme: V = !1, chunkSize: H, style: W, innerId: Y, innerRole: K, innerAriaLabel: z, innerAriaMultiselectable: q, innerAriaOrientation: Q, innerClassName: X, innerTag: J = 'div' } = o,
            $ = m(o, ['className', 'onScroll', 'onResize', 'onContentResize', 'dir', 'sections', 'sectionHeight', 'rowHeight', 'footerHeight', 'sidebarHeight', 'listHeaderHeight', 'renderSection', 'renderRow', 'renderFooter', 'renderSidebar', 'renderListHeader', 'stickyListHeader', 'wrapSection', 'getAnchorId', 'paddingTop', 'paddingBottom', 'fade', 'customTheme', 'chunkSize', 'style', 'innerId', 'innerRole', 'innerAriaLabel', 'innerAriaMultiselectable', 'innerAriaOrientation', 'innerClassName', 'innerTag']);
        let ee = i.useRef(null),
            et = i.useRef(null),
            [en, er] = i.useState(!1),
            { scrollerRef: ei, scrollerState: eo, getScrollerState: ea } = (0, u.T4)();
        (0, u.tT)({
            scrollerRef: ei,
            className: g,
            specs: s,
            orientation: 'vertical',
            dir: T
        });
        let {
                spacerTop: es,
                totalHeight: el,
                items: ec,
                isSidebarVisible: eu,
                listComputer: ed,
                forceUpdateOnChunkChange: ef,
                anchor: ep
            } = (0, u.aU)({
                sections: N,
                sectionHeight: A,
                rowHeight: C,
                footerHeight: R,
                sidebarHeight: P,
                listHeaderHeight: w,
                paddingTop: B,
                paddingBottom: Z,
                chunkSize: H,
                getScrollerState: ea,
                getAnchorId: G
            }),
            e_ = (0, u.t2)(ei),
            eh = i.useRef(S),
            em = i.useRef(I);
        i.useLayoutEffect(() => {
            (eh.current = S), (em.current = I);
        });
        let eg = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if ((e > eo.current.dirty && (eo.current.dirty = e), 2 === e)) {
                        var t;
                        null === (t = eh.current) || void 0 === t || t.call(eh);
                    }
                    ef(e);
                },
                [ef, eo]
            ),
            eE = i.useCallback(() => eg(), [eg]);
        (0, u.zn)({
            ref: ei,
            onUpdate: eE,
            key: 'container',
            resizeObserver: f,
            listenerMap: l
        }),
            (0, u.zn)({
                ref: et,
                onUpdate: () => {
                    var e;
                    return null === (e = em.current) || void 0 === e ? void 0 : e.call(em);
                },
                key: 'content',
                resizeObserver: f,
                listenerMap: l
            });
        let ev = E(ec),
            eb = v(N);
        i.useImperativeHandle(
            _,
            () =>
                p(
                    {
                        getScrollerNode: () => ei.current,
                        getScrollerState: ea,
                        getItems: ev,
                        getSectionRowFromIndex: eb
                    },
                    (0, u.rH)(ei, ea, ed, e_)
                ),
            [ei, ea, eb, ev, ed, e_]
        );
        let ey = i.useCallback(
            (e) => {
                eg(1),
                    null == ee.current ? er(!0) : clearTimeout(ee.current),
                    (ee.current = setTimeout(() => {
                        (ee.current = null), er(!1);
                    }, 200)),
                    null != O && O(e);
            },
            [O, eg]
        );
        return (
            i.useLayoutEffect(() => {
                2 !== eo.current.dirty && (eo.current.dirty = 2);
            }, [ec, D, x, L, U, el, es, eo]),
            (0, u.rS)({
                scrollerRef: ei,
                anchor: ep,
                getScrollerState: ea,
                listComputer: ed,
                getAnchorId: G,
                totalHeight: el
            }),
            (0, r.jsxs)(
                'div',
                h(
                    p(
                        {
                            ref: ei,
                            onScroll: ey,
                            className: a()(g, {
                                [e]: !0,
                                [t]: F,
                                [n]: V,
                                [d.scrolling]: en
                            }),
                            style: (0, u.uT)(W)
                        },
                        $
                    ),
                    {
                        children: [
                            i.useMemo(
                                () =>
                                    (0, r.jsx)(J, {
                                        id: Y,
                                        role: K,
                                        'aria-label': z,
                                        'aria-multiselectable': q,
                                        'aria-orientation': Q,
                                        style: { height: el },
                                        className: a()(d.content, X),
                                        ref: et,
                                        children: (0, r.jsx)(c.J, {
                                            containerRef: et,
                                            children: b({
                                                items: ec,
                                                renderListHeader: k,
                                                stickyListHeader: j,
                                                renderSection: D,
                                                renderRow: x,
                                                renderFooter: L,
                                                wrapSection: U,
                                                spacerTop: es
                                            })
                                        })
                                    }),
                                [J, Y, K, z, q, Q, el, X, ec, k, j, D, x, L, U, es]
                            ),
                            i.useMemo(
                                () =>
                                    y({
                                        isSidebarVisible: eu,
                                        renderSidebar: M,
                                        sidebarHeight: P,
                                        isListVisible: 0 !== ec.length
                                    }),
                                [eu, M, P, ec.length]
                            )
                        ]
                    }
                )
            )
        );
    });
}
