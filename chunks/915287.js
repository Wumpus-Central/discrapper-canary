r.d(n, {
    v: function () {
        return v;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(952639),
    d = r.n(c),
    f = r(84735),
    _ = r(562701),
    h = r(448304);
function p(e) {
    let n = o.useRef(e);
    return o.useEffect(() => void (n.current = e), [e]), o.useCallback(() => n.current, []);
}
function m(e) {
    let n = o.useRef(e);
    return (
        o.useEffect(() => void (n.current = e), [e]),
        o.useCallback((e) => {
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
        _ = [
            (0, s.jsx)(
                'div',
                {
                    'aria-hidden': !0,
                    style: { height: f }
                },
                '---list-spacer-top'
            )
        ],
        h = [],
        p = 0;
    if (
        (!0 === l && null != a && _.push((0, s.jsx)(o.Fragment, { children: a() }, '---sticky-header')),
        c.forEach((e) => {
            var s;
            switch ((e.section !== p && h.length > 0 && (_.push(null != u ? u(p, h) : h), (h = [])), (p = null !== (s = e.section) && void 0 !== s ? s : 0), e.type)) {
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
        _.push(null !== (m = null == u ? void 0 : u(p, h)) && void 0 !== m ? m : h);
    }
    return d()(_);
}
function E(e) {
    let { renderSidebar: n, sidebarHeight: r, isSidebarVisible: i, isListVisible: a } = e;
    return null == r || null == n ? null : n(a, i);
}
function v(e, n, r, i) {
    let a = (0, _.G6)(e),
        l = new Map(),
        c = new i((e) => {
            e.forEach((e) => {
                var n;
                let { target: r } = e;
                null === (n = l.get(r)) || void 0 === n || n(e);
            });
        });
    return o.forwardRef(function (i, d) {
        let { className: v, onScroll: I, onResize: T = null, onContentResize: b = null, dir: y = 'ltr', sections: S, sectionHeight: A, rowHeight: N, footerHeight: C = 0, sidebarHeight: R, listHeaderHeight: O = 0, renderSection: D, renderRow: L, renderFooter: x, renderSidebar: w, renderListHeader: P, stickyListHeader: M, wrapSection: k, getAnchorId: U, paddingTop: B, paddingBottom: G, fade: Z = !1, customTheme: F = !1, chunkSize: V, style: j, innerId: H, innerRole: Y, innerAriaLabel: W, innerAriaMultiselectable: K, innerAriaOrientation: z, innerClassName: q, innerTag: Q = 'div', ...X } = i,
            J = o.useRef(null),
            $ = o.useRef(null),
            [ee, et] = o.useState(!1),
            { scrollerRef: en, scrollerState: er, getScrollerState: ei } = (0, _.T4)();
        (0, _.tT)({
            scrollerRef: en,
            className: v,
            specs: a,
            orientation: 'vertical',
            dir: y
        });
        let {
                spacerTop: ea,
                totalHeight: es,
                items: eo,
                isSidebarVisible: el,
                listComputer: eu,
                forceUpdateOnChunkChange: ec,
                anchor: ed
            } = (0, _.aU)({
                sections: S,
                sectionHeight: A,
                rowHeight: N,
                footerHeight: C,
                sidebarHeight: R,
                listHeaderHeight: O,
                paddingTop: B,
                paddingBottom: G,
                chunkSize: V,
                getScrollerState: ei,
                getAnchorId: U
            }),
            ef = (0, _.t2)(en),
            e_ = o.useRef(T),
            eh = o.useRef(b);
        o.useLayoutEffect(() => {
            (e_.current = T), (eh.current = b);
        });
        let ep = o.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if ((e > er.current.dirty && (er.current.dirty = e), 2 === e)) {
                        var n;
                        null === (n = e_.current) || void 0 === n || n.call(e_);
                    }
                    ec(e);
                },
                [ec, er]
            ),
            em = o.useCallback(() => ep(), [ep]);
        (0, _.zn)({
            ref: en,
            onUpdate: em,
            key: 'container',
            resizeObserver: c,
            listenerMap: l
        }),
            (0, _.zn)({
                ref: $,
                onUpdate: () => {
                    var e;
                    return null === (e = eh.current) || void 0 === e ? void 0 : e.call(eh);
                },
                key: 'content',
                resizeObserver: c,
                listenerMap: l
            });
        let eg = p(eo),
            eE = m(S);
        o.useImperativeHandle(
            d,
            () => ({
                getScrollerNode: () => en.current,
                getScrollerState: ei,
                getItems: eg,
                getSectionRowFromIndex: eE,
                ...(0, _.rH)(en, ei, eu, ef)
            }),
            [en, ei, eE, eg, eu, ef]
        );
        let ev = o.useCallback(
            (e) => {
                ep(1),
                    null == J.current ? et(!0) : clearTimeout(J.current),
                    (J.current = setTimeout(() => {
                        (J.current = null), et(!1);
                    }, 200)),
                    null != I && I(e);
            },
            [I, ep]
        );
        return (
            o.useLayoutEffect(() => {
                2 !== er.current.dirty && (er.current.dirty = 2);
            }, [eo, D, L, x, k, es, ea, er]),
            (0, _.rS)({
                scrollerRef: en,
                anchor: ed,
                getScrollerState: ei,
                listComputer: eu,
                getAnchorId: U,
                totalHeight: es
            }),
            (0, s.jsxs)('div', {
                ref: en,
                onScroll: ev,
                className: u()(v, {
                    [e]: !0,
                    [n]: Z,
                    [r]: F,
                    [h.scrolling]: ee
                }),
                style: (0, _.uT)(j),
                ...X,
                children: [
                    o.useMemo(
                        () =>
                            (0, s.jsx)(Q, {
                                id: H,
                                role: Y,
                                'aria-label': W,
                                'aria-multiselectable': K,
                                'aria-orientation': z,
                                style: { height: es },
                                className: u()(h.content, q),
                                ref: $,
                                children: (0, s.jsx)(f.J, {
                                    containerRef: $,
                                    children: g({
                                        items: eo,
                                        renderListHeader: P,
                                        stickyListHeader: M,
                                        renderSection: D,
                                        renderRow: L,
                                        renderFooter: x,
                                        wrapSection: k,
                                        spacerTop: ea
                                    })
                                })
                            }),
                        [Q, H, Y, W, K, z, es, q, eo, P, M, D, L, x, k, ea]
                    ),
                    o.useMemo(
                        () =>
                            E({
                                isSidebarVisible: el,
                                renderSidebar: w,
                                sidebarHeight: R,
                                isListVisible: 0 !== eo.length
                            }),
                        [el, w, R, eo.length]
                    )
                ]
            })
        );
    });
}
