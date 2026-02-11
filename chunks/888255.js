"use strict";
n.d(t, { $: () => g }), n(321073);
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
function h(e) {
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
        h = 0;
    return (
        !0 === o && null != s && _.push((0, r.jsx)(i.Fragment, { children: s() }, "---sticky-header")),
        c.forEach((e) => {
            switch (
                (e.section !== h && f.length > 0 && (_.push(u?.(h, f) ?? f), (f = [])), (h = e.section ?? 0), e.type)
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
        f.length > 0 && _.push(u?.(h, f) ?? f),
        l()(_)
    );
}
function p(e) {
    let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: r, isListVisible: i } = e;
    return null == n || null == t ? null : t(i, r);
}
function g(e, t, n, a) {
    let o = (0, c.dG)(e),
        l = new Map(),
        g = new a((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                l.get(t)?.(e);
            });
        });
    return i.forwardRef(function (a, E) {
        let {
                className: A,
                onScroll: I,
                onResize: T = null,
                onContentResize: y = null,
                dir: S = "ltr",
                sections: v,
                sectionHeight: C,
                rowHeight: b,
                footerHeight: N = 0,
                sidebarHeight: R,
                listHeaderHeight: O = 0,
                renderSection: D,
                renderRow: L,
                renderFooter: w,
                renderSidebar: x,
                renderListHeader: P,
                stickyListHeader: M,
                wrapSection: k,
                getAnchorId: U,
                paddingTop: G,
                paddingBottom: F,
                fade: V = !1,
                customTheme: B = !1,
                chunkSize: j,
                style: H,
                innerId: Y,
                innerRole: W,
                innerAriaLabel: K,
                innerAriaMultiselectable: $,
                innerAriaOrientation: z,
                innerClassName: q,
                innerTag: X = "div",
                ...Z
            } = a,
            Q = i.useRef(null),
            J = i.useRef(null),
            [ee, et] = i.useState(!1),
            { scrollerRef: en, scrollerState: er, getScrollerState: ei } = (0, c.F6)();
        (0, c._I)({ scrollerRef: en, className: A, specs: o, orientation: "vertical", dir: S });
        let {
                spacerTop: ea,
                totalHeight: es,
                items: eo,
                isSidebarVisible: el,
                listComputer: eu,
                forceUpdateOnChunkChange: ec,
                anchor: ed,
            } = (0, c.mh)({
                sections: v,
                sectionHeight: C,
                rowHeight: b,
                footerHeight: N,
                sidebarHeight: R,
                listHeaderHeight: O,
                paddingTop: G,
                paddingBottom: F,
                chunkSize: j,
                getScrollerState: ei,
                getAnchorId: U,
            }),
            e_ = (0, c.kR)(en),
            ef = i.useRef(T),
            eh = i.useRef(y);
        i.useLayoutEffect(() => {
            (ef.current = T), (eh.current = y);
        });
        let ep = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > er.current.dirty && (er.current.dirty = e), 2 === e && ef.current?.(), ec(e);
                },
                [ec, er],
            ),
            em = i.useCallback(() => ep(), [ep]);
        (0, c.Bb)({ ref: en, onUpdate: em, key: "container", resizeObserver: g, listenerMap: l }),
            (0, c.Bb)({ ref: J, onUpdate: () => eh.current?.(), key: "content", resizeObserver: g, listenerMap: l });
        let eg = _(eo),
            eE = f(v);
        i.useImperativeHandle(
            E,
            () => ({
                getScrollerNode: () => en.current,
                getScrollerState: ei,
                getItems: eg,
                getSectionRowFromIndex: eE,
                ...(0, c.sT)(en, ei, eu, e_),
            }),
            [en, ei, eE, eg, eu, e_],
        );
        let eA = i.useCallback(
            (e) => {
                ep(1),
                    null == Q.current ? et(!0) : clearTimeout(Q.current),
                    (Q.current = setTimeout(() => {
                        (Q.current = null), et(!1);
                    }, 200)),
                    null != I && I(e);
            },
            [I, ep],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== er.current.dirty && (er.current.dirty = 2);
            }, [D, L, w, k, es, ea, er]),
            (0, c.gh)({
                scrollerRef: en,
                anchor: ed,
                getScrollerState: ei,
                listComputer: eu,
                getAnchorId: U,
                totalHeight: es,
            }),
            (0, r.jsxs)("div", {
                ref: en,
                onScroll: eA,
                className: s()(A, { [e]: !0, [t]: V, [n]: B, [d.qw]: ee }),
                style: (0, c.Ze)(H),
                ...Z,
                children: [
                    i.useMemo(
                        () =>
                            (0, r.jsx)(X, {
                                id: Y,
                                role: W,
                                "aria-label": K,
                                "aria-multiselectable": $,
                                "aria-orientation": z,
                                style: { height: es },
                                className: s()(d.Qs, q),
                                ref: J,
                                children: (0, r.jsx)(u.xp, {
                                    containerRef: J,
                                    children: h({
                                        items: eo,
                                        renderListHeader: P,
                                        stickyListHeader: M,
                                        renderSection: D,
                                        renderRow: L,
                                        renderFooter: w,
                                        wrapSection: k,
                                        spacerTop: ea,
                                    }),
                                }),
                            }),
                        [X, Y, W, K, $, z, es, q, eo, P, M, D, L, w, k, ea],
                    ),
                    i.useMemo(
                        () =>
                            p({
                                isSidebarVisible: el,
                                renderSidebar: x,
                                sidebarHeight: R,
                                isListVisible: 0 !== eo.length,
                            }),
                        [el, x, R, eo.length],
                    ),
                ],
            })
        );
    });
}
