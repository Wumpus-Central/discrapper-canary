n.d(t, { v: () => m }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(952639),
    l = n.n(o),
    u = n(84735),
    c = n(562701),
    d = n(248529);
function f(e) {
    let t = r.useRef(e);
    return (
        r.useEffect(() => {
            t.current = e;
        }, [e]),
        r.useCallback(() => t.current, [])
    );
}
function _(e) {
    let t = r.useRef(e);
    return (
        r.useEffect(() => {
            t.current = e;
        }, [e]),
        r.useCallback((e) => {
            let { current: n } = t,
                i = 0;
            for (let t = 0; t < n.length; t++) {
                let r = n[t];
                if (i <= e && i + r >= e) return [t, e - i];
                i += r;
            }
            return [0, 0];
        }, [])
    );
}
function p(e) {
    let { renderSection: t, renderRow: n, renderFooter: a, renderListHeader: s, stickyListHeader: o, wrapSection: u, items: c, spacerTop: d } = e,
        f = [
            (0, i.jsx)(
                'div',
                {
                    'aria-hidden': !0,
                    style: { height: d }
                },
                '---list-spacer-top'
            )
        ],
        _ = [],
        p = 0;
    if (
        (!0 === o && null != s && f.push((0, i.jsx)(r.Fragment, { children: s() }, '---sticky-header')),
        c.forEach((e) => {
            var i;
            switch ((e.section !== p && _.length > 0 && (f.push(null != u ? u(p, _) : _), (_ = [])), (p = null !== (i = e.section) && void 0 !== i ? i : 0), e.type)) {
                case 'section':
                    null != t && _.push(t(e));
                    break;
                case 'row':
                    _.push(n(e));
                    break;
                case 'footer':
                    null != a && _.push(a(e));
                    break;
                case 'header':
                    null != s && !0 !== o && _.push(s());
            }
        }),
        _.length > 0)
    ) {
        var h;
        f.push(null !== (h = null == u ? void 0 : u(p, _)) && void 0 !== h ? h : _);
    }
    return l()(f);
}
function h(e) {
    let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: i, isListVisible: r } = e;
    return null == n || null == t ? null : t(r, i);
}
function m(e, t, n, a) {
    let o = (0, c.G6)(e),
        l = new Map(),
        m = new a((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null === (t = l.get(n)) || void 0 === t || t(e);
            });
        });
    return r.forwardRef(function (a, g) {
        let { className: E, onScroll: v, onResize: y = null, onContentResize: I = null, dir: T = 'ltr', sections: b, sectionHeight: S, rowHeight: A, footerHeight: N = 0, sidebarHeight: C, listHeaderHeight: R = 0, renderSection: O, renderRow: D, renderFooter: L, renderSidebar: x, renderListHeader: P, stickyListHeader: w, wrapSection: M, getAnchorId: k, paddingTop: U, paddingBottom: G, fade: B = !1, customTheme: Z = !1, chunkSize: F, style: V, innerId: j, innerRole: H, innerAriaLabel: Y, innerAriaMultiselectable: W, innerAriaOrientation: K, innerClassName: z, innerTag: q = 'div', ...Q } = a,
            X = r.useRef(null),
            J = r.useRef(null),
            [$, ee] = r.useState(!1),
            { scrollerRef: et, scrollerState: en, getScrollerState: ei } = (0, c.T4)();
        (0, c.tT)({
            scrollerRef: et,
            className: E,
            specs: o,
            orientation: 'vertical',
            dir: T
        });
        let {
                spacerTop: er,
                totalHeight: ea,
                items: es,
                isSidebarVisible: eo,
                listComputer: el,
                forceUpdateOnChunkChange: eu,
                anchor: ec
            } = (0, c.aU)({
                sections: b,
                sectionHeight: S,
                rowHeight: A,
                footerHeight: N,
                sidebarHeight: C,
                listHeaderHeight: R,
                paddingTop: U,
                paddingBottom: G,
                chunkSize: F,
                getScrollerState: ei,
                getAnchorId: k
            }),
            ed = (0, c.t2)(et),
            ef = r.useRef(y),
            e_ = r.useRef(I);
        r.useLayoutEffect(() => {
            (ef.current = y), (e_.current = I);
        });
        let ep = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if ((e > en.current.dirty && (en.current.dirty = e), 2 === e)) {
                        var t;
                        null === (t = ef.current) || void 0 === t || t.call(ef);
                    }
                    eu(e);
                },
                [eu, en]
            ),
            eh = r.useCallback(() => ep(), [ep]);
        (0, c.zn)({
            ref: et,
            onUpdate: eh,
            key: 'container',
            resizeObserver: m,
            listenerMap: l
        }),
            (0, c.zn)({
                ref: J,
                onUpdate: () => {
                    var e;
                    return null === (e = e_.current) || void 0 === e ? void 0 : e.call(e_);
                },
                key: 'content',
                resizeObserver: m,
                listenerMap: l
            });
        let em = f(es),
            eg = _(b);
        r.useImperativeHandle(
            g,
            () => ({
                getScrollerNode: () => et.current,
                getScrollerState: ei,
                getItems: em,
                getSectionRowFromIndex: eg,
                ...(0, c.rH)(et, ei, el, ed)
            }),
            [et, ei, eg, em, el, ed]
        );
        let eE = r.useCallback(
            (e) => {
                ep(1),
                    null == X.current ? ee(!0) : clearTimeout(X.current),
                    (X.current = setTimeout(() => {
                        (X.current = null), ee(!1);
                    }, 200)),
                    null != v && v(e);
            },
            [v, ep]
        );
        return (
            r.useLayoutEffect(() => {
                2 !== en.current.dirty && (en.current.dirty = 2);
            }, [es, O, D, L, M, ea, er, en]),
            (0, c.rS)({
                scrollerRef: et,
                anchor: ec,
                getScrollerState: ei,
                listComputer: el,
                getAnchorId: k,
                totalHeight: ea
            }),
            (0, i.jsxs)('div', {
                ref: et,
                onScroll: eE,
                className: s()(E, {
                    [e]: !0,
                    [t]: B,
                    [n]: Z,
                    [d.scrolling]: $
                }),
                style: (0, c.uT)(V),
                ...Q,
                children: [
                    r.useMemo(
                        () =>
                            (0, i.jsx)(q, {
                                id: j,
                                role: H,
                                'aria-label': Y,
                                'aria-multiselectable': W,
                                'aria-orientation': K,
                                style: { height: ea },
                                className: s()(d.content, z),
                                ref: J,
                                children: (0, i.jsx)(u.J, {
                                    containerRef: J,
                                    children: p({
                                        items: es,
                                        renderListHeader: P,
                                        stickyListHeader: w,
                                        renderSection: O,
                                        renderRow: D,
                                        renderFooter: L,
                                        wrapSection: M,
                                        spacerTop: er
                                    })
                                })
                            }),
                        [q, j, H, Y, W, K, ea, z, es, P, w, O, D, L, M, er]
                    ),
                    r.useMemo(
                        () =>
                            h({
                                isSidebarVisible: eo,
                                renderSidebar: x,
                                sidebarHeight: C,
                                isListVisible: 0 !== es.length
                            }),
                        [eo, x, C, es.length]
                    )
                ]
            })
        );
    });
}
