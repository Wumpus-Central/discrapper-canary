"use strict";
n.d(t, { $: () => m }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(656470),
    l = n.n(o),
    u = n(426333),
    c = n(842867),
    d = n(219293);
function _(e) {
    let t = i.useRef(e);
    return (
        i.useEffect(() => {
            t.current = e;
        }, [e]),
        i.useCallback(() => t.current, [])
    );
}
function f(e) {
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
function p(e) {
    let {
            renderSection: t,
            renderRow: n,
            renderFooter: a,
            renderListHeader: s,
            stickyListHeader: o,
            wrapSection: u,
            items: c,
            spacerTop: d,
        } = e,
        _ = [(0, r.jsx)("div", { "aria-hidden": !0, style: { height: d } }, "---list-spacer-top")],
        f = [],
        p = 0;
    return (
        !0 === o && null != s && _.push((0, r.jsx)(i.Fragment, { children: s() }, "---sticky-header")),
        c.forEach((e) => {
            switch (
                (e.section !== p && f.length > 0 && (_.push(u?.(p, f) ?? f), (f = [])), (p = e.section ?? 0), e.type)
            ) {
                case "section":
                    null != t && f.push(t(e));
                    break;
                case "row":
                    f.push(n(e));
                    break;
                case "footer":
                    null != a && f.push(a(e));
                    break;
                case "header":
                    null != s && !0 !== o && f.push(s());
            }
        }),
        f.length > 0 && _.push(u?.(p, f) ?? f),
        l()(_)
    );
}
function h(e) {
    let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: r, isListVisible: i } = e;
    return null == n || null == t ? null : t(i, r);
}
function m(e, t, n, a) {
    let o = (0, c.dG)(e),
        l = new Map(),
        m = new a((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                l.get(t)?.(e);
            });
        });
    return i.forwardRef(function (a, g) {
        let {
                className: E,
                onScroll: A,
                onResize: I = null,
                onContentResize: T = null,
                dir: y = "ltr",
                sections: S,
                sectionHeight: v,
                rowHeight: C,
                footerHeight: b = 0,
                sidebarHeight: N,
                listHeaderHeight: R = 0,
                renderSection: O,
                renderRow: D,
                renderFooter: L,
                renderSidebar: w,
                renderListHeader: x,
                stickyListHeader: P,
                wrapSection: M,
                getAnchorId: k,
                paddingTop: U,
                paddingBottom: G,
                fade: V = !1,
                customTheme: F = !1,
                chunkSize: B,
                style: j,
                innerId: H,
                innerRole: Y,
                innerAriaLabel: W,
                innerAriaMultiselectable: K,
                innerAriaOrientation: z,
                innerClassName: $,
                innerTag: q = "div",
                ...Z
            } = a,
            Q = i.useRef(null),
            X = i.useRef(null),
            [J, ee] = i.useState(!1),
            { scrollerRef: et, scrollerState: en, getScrollerState: er } = (0, c.F6)();
        (0, c._I)({ scrollerRef: et, className: E, specs: o, orientation: "vertical", dir: y });
        let {
                spacerTop: ei,
                totalHeight: ea,
                items: es,
                isSidebarVisible: eo,
                listComputer: el,
                forceUpdateOnChunkChange: eu,
                anchor: ec,
            } = (0, c.mh)({
                sections: S,
                sectionHeight: v,
                rowHeight: C,
                footerHeight: b,
                sidebarHeight: N,
                listHeaderHeight: R,
                paddingTop: U,
                paddingBottom: G,
                chunkSize: B,
                getScrollerState: er,
                getAnchorId: k,
            }),
            ed = (0, c.kR)(et),
            e_ = i.useRef(I),
            ef = i.useRef(T);
        i.useLayoutEffect(() => {
            (e_.current = I), (ef.current = T);
        });
        let ep = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > en.current.dirty && (en.current.dirty = e), 2 === e && e_.current?.(), eu(e);
                },
                [eu, en],
            ),
            eh = i.useCallback(() => ep(), [ep]);
        (0, c.Bb)({ ref: et, onUpdate: eh, key: "container", resizeObserver: m, listenerMap: l }),
            (0, c.Bb)({ ref: X, onUpdate: () => ef.current?.(), key: "content", resizeObserver: m, listenerMap: l });
        let em = _(es),
            eg = f(S);
        i.useImperativeHandle(
            g,
            () => ({
                getScrollerNode: () => et.current,
                getScrollerState: er,
                getItems: em,
                getSectionRowFromIndex: eg,
                ...(0, c.sT)(et, er, el, ed),
            }),
            [et, er, eg, em, el, ed],
        );
        let eE = i.useCallback(
            (e) => {
                ep(1),
                    null == Q.current ? ee(!0) : clearTimeout(Q.current),
                    (Q.current = setTimeout(() => {
                        (Q.current = null), ee(!1);
                    }, 200)),
                    null != A && A(e);
            },
            [A, ep],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== en.current.dirty && (en.current.dirty = 2);
            }, [O, D, L, M, ea, ei, en]),
            (0, c.gh)({
                scrollerRef: et,
                anchor: ec,
                getScrollerState: er,
                listComputer: el,
                getAnchorId: k,
                totalHeight: ea,
            }),
            (0, r.jsxs)("div", {
                ref: et,
                onScroll: eE,
                className: s()(E, { [e]: !0, [t]: V, [n]: F, [d.qw]: J }),
                style: (0, c.Ze)(j),
                ...Z,
                children: [
                    i.useMemo(
                        () =>
                            (0, r.jsx)(q, {
                                id: H,
                                role: Y,
                                "aria-label": W,
                                "aria-multiselectable": K,
                                "aria-orientation": z,
                                style: { height: ea },
                                className: s()(d.Qs, $),
                                ref: X,
                                children: (0, r.jsx)(u.xp, {
                                    containerRef: X,
                                    children: p({
                                        items: es,
                                        renderListHeader: x,
                                        stickyListHeader: P,
                                        renderSection: O,
                                        renderRow: D,
                                        renderFooter: L,
                                        wrapSection: M,
                                        spacerTop: ei,
                                    }),
                                }),
                            }),
                        [q, H, Y, W, K, z, ea, $, es, x, P, O, D, L, M, ei],
                    ),
                    i.useMemo(
                        () =>
                            h({
                                isSidebarVisible: eo,
                                renderSidebar: w,
                                sidebarHeight: N,
                                isListVisible: 0 !== es.length,
                            }),
                        [eo, w, N, es.length],
                    ),
                ],
            })
        );
    });
}
