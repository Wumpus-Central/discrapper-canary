r.d(n, {
    v: function () {
        return v;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(952639),
    d = r.n(c),
    f = r(84735),
    p = r(562701),
    h = r(448304);
function _(e) {
    let n = s.useRef(e);
    return s.useEffect(() => void (n.current = e), [e]), s.useCallback(() => n.current, []);
}
function m(e) {
    let n = s.useRef(e);
    return (
        s.useEffect(() => void (n.current = e), [e]),
        s.useCallback((e) => {
            let { current: r } = n,
                i = 0;
            for (let n = 0; n < r.length; n++) {
                let a = r[n];
                if (i <= e && i + a >= e) return [n, e - i];
                i += a;
            }
            return [0, 0];
        }, [])
    );
}
function g(e) {
    let { renderSection: n, renderRow: r, renderFooter: i, renderListHeader: a, stickyListHeader: l, wrapSection: u, items: c, spacerTop: f } = e,
        p = [
            (0, o.jsx)(
                'div',
                {
                    'aria-hidden': !0,
                    style: { height: f }
                },
                '---list-spacer-top'
            )
        ],
        h = [],
        _ = 0;
    if (
        (!0 === l && null != a && p.push((0, o.jsx)(s.Fragment, { children: a() }, '---sticky-header')),
        c.forEach((e) => {
            var o;
            switch ((e.section !== _ && h.length > 0 && (p.push(null != u ? u(_, h) : h), (h = [])), (_ = null !== (o = e.section) && void 0 !== o ? o : 0), e.type)) {
                case 'section':
                    null != n && h.push(n(e));
                    break;
                case 'row':
                    h.push(r(e));
                    break;
                case 'footer':
                    null != i && h.push(i(e));
                    break;
                case 'header':
                    null != a && !0 !== l && h.push(a());
            }
        }),
        h.length > 0)
    ) {
        var m;
        p.push(null !== (m = null == u ? void 0 : u(_, h)) && void 0 !== m ? m : h);
    }
    return d()(p);
}
function E(e) {
    let { renderSidebar: n, sidebarHeight: r, isSidebarVisible: i, isListVisible: a } = e;
    return null == r || null == n ? null : n(a, i);
}
function v(e, n, r, i) {
    let a = (0, p.G6)(e),
        l = new Map(),
        c = new i((e) => {
            e.forEach((e) => {
                var n;
                let { target: r } = e;
                null === (n = l.get(r)) || void 0 === n || n(e);
            });
        });
    return s.forwardRef(function (i, d) {
        let { className: v, onScroll: y, onResize: b = null, onContentResize: I = null, dir: T = 'ltr', sections: S, sectionHeight: A, rowHeight: C, footerHeight: N = 0, sidebarHeight: R, listHeaderHeight: O = 0, renderSection: D, renderRow: x, renderFooter: L, renderSidebar: w, renderListHeader: P, stickyListHeader: M, wrapSection: k, getAnchorId: U, paddingTop: B, paddingBottom: G, fade: Z = !1, customTheme: F = !1, chunkSize: V, style: j, innerId: H, innerRole: Y, innerAriaLabel: W, innerAriaMultiselectable: K, innerAriaOrientation: z, innerClassName: q, innerTag: Q = 'div', ...X } = i,
            J = s.useRef(null),
            $ = s.useRef(null),
            [ee, et] = s.useState(!1),
            { scrollerRef: en, scrollerState: er, getScrollerState: ei } = (0, p.T4)();
        (0, p.tT)({
            scrollerRef: en,
            className: v,
            specs: a,
            orientation: 'vertical',
            dir: T
        });
        let {
                spacerTop: ea,
                totalHeight: eo,
                items: es,
                isSidebarVisible: el,
                listComputer: eu,
                forceUpdateOnChunkChange: ec,
                anchor: ed
            } = (0, p.aU)({
                sections: S,
                sectionHeight: A,
                rowHeight: C,
                footerHeight: N,
                sidebarHeight: R,
                listHeaderHeight: O,
                paddingTop: B,
                paddingBottom: G,
                chunkSize: V,
                getScrollerState: ei,
                getAnchorId: U
            }),
            ef = (0, p.t2)(en),
            ep = s.useRef(b),
            eh = s.useRef(I);
        s.useLayoutEffect(() => {
            (ep.current = b), (eh.current = I);
        });
        let e_ = s.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if ((e > er.current.dirty && (er.current.dirty = e), 2 === e)) {
                        var n;
                        null === (n = ep.current) || void 0 === n || n.call(ep);
                    }
                    ec(e);
                },
                [ec, er]
            ),
            em = s.useCallback(() => e_(), [e_]);
        (0, p.zn)({
            ref: en,
            onUpdate: em,
            key: 'container',
            resizeObserver: c,
            listenerMap: l
        }),
            (0, p.zn)({
                ref: $,
                onUpdate: () => {
                    var e;
                    return null === (e = eh.current) || void 0 === e ? void 0 : e.call(eh);
                },
                key: 'content',
                resizeObserver: c,
                listenerMap: l
            });
        let eg = _(es),
            eE = m(S);
        s.useImperativeHandle(
            d,
            () => ({
                getScrollerNode: () => en.current,
                getScrollerState: ei,
                getItems: eg,
                getSectionRowFromIndex: eE,
                ...(0, p.rH)(en, ei, eu, ef)
            }),
            [en, ei, eE, eg, eu, ef]
        );
        let ev = s.useCallback(
            (e) => {
                e_(1),
                    null == J.current ? et(!0) : clearTimeout(J.current),
                    (J.current = setTimeout(() => {
                        (J.current = null), et(!1);
                    }, 200)),
                    null != y && y(e);
            },
            [y, e_]
        );
        return (
            s.useLayoutEffect(() => {
                2 !== er.current.dirty && (er.current.dirty = 2);
            }, [es, D, x, L, k, eo, ea, er]),
            (0, p.rS)({
                scrollerRef: en,
                anchor: ed,
                getScrollerState: ei,
                listComputer: eu,
                getAnchorId: U,
                totalHeight: eo
            }),
            (0, o.jsxs)('div', {
                ref: en,
                onScroll: ev,
                className: u()(v, {
                    [e]: !0,
                    [n]: Z,
                    [r]: F,
                    [h.scrolling]: ee
                }),
                style: (0, p.uT)(j),
                ...X,
                children: [
                    s.useMemo(
                        () =>
                            (0, o.jsx)(Q, {
                                id: H,
                                role: Y,
                                'aria-label': W,
                                'aria-multiselectable': K,
                                'aria-orientation': z,
                                style: { height: eo },
                                className: u()(h.content, q),
                                ref: $,
                                children: (0, o.jsx)(f.J, {
                                    containerRef: $,
                                    children: g({
                                        items: es,
                                        renderListHeader: P,
                                        stickyListHeader: M,
                                        renderSection: D,
                                        renderRow: x,
                                        renderFooter: L,
                                        wrapSection: k,
                                        spacerTop: ea
                                    })
                                })
                            }),
                        [Q, H, Y, W, K, z, eo, q, es, P, M, D, x, L, k, ea]
                    ),
                    s.useMemo(
                        () =>
                            E({
                                isSidebarVisible: el,
                                renderSidebar: w,
                                sidebarHeight: R,
                                isListVisible: 0 !== es.length
                            }),
                        [el, w, R, es.length]
                    )
                ]
            })
        );
    });
}
