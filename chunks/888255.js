"use strict";
n.d(t, { $: () => m }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(656470),
    l = n.n(o),
    u = n(426333),
    c = n(842867),
    d = n(45596);
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
            renderFooter: s,
            renderListHeader: a,
            stickyListHeader: o,
            wrapSection: u,
            items: c,
            spacerTop: d,
        } = e,
        _ = [(0, r.jsx)("div", { "aria-hidden": !0, style: { height: d } }, "---list-spacer-top")],
        f = [],
        p = 0;
    return (
        !0 === o && null != a && _.push((0, r.jsx)(i.Fragment, { children: a() }, "---sticky-header")),
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
                    null != s && f.push(s(e));
                    break;
                case "header":
                    null != a && !0 !== o && f.push(a());
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
function m(e, t, n, s) {
    let o = (0, c.dG)(e),
        l = new Map(),
        m = new s((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                l.get(t)?.(e);
            });
        });
    return i.forwardRef(function (s, E) {
        let {
                className: g,
                onScroll: A,
                onResize: I = null,
                onContentResize: T = null,
                dir: S = "ltr",
                sections: y,
                sectionHeight: v,
                rowHeight: N,
                footerHeight: C = 0,
                sidebarHeight: R,
                listHeaderHeight: O = 0,
                renderSection: b,
                renderRow: D,
                renderFooter: L,
                renderSidebar: w,
                renderListHeader: M,
                stickyListHeader: P,
                wrapSection: x,
                getAnchorId: k,
                paddingTop: U,
                paddingBottom: G,
                fade: F = !1,
                customTheme: V = !1,
                chunkSize: B,
                style: H,
                innerId: j,
                innerRole: Y,
                innerAriaLabel: W,
                innerAriaMultiselectable: K,
                innerAriaOrientation: $,
                innerClassName: z,
                innerTag: q = "div",
                ...Z
            } = s,
            X = i.useRef(null),
            Q = i.useRef(null),
            [J, ee] = i.useState(!1),
            { scrollerRef: et, scrollerState: en, getScrollerState: er } = (0, c.F6)();
        (0, c._I)({ scrollerRef: et, className: g, specs: o, orientation: "vertical", dir: S });
        let {
                spacerTop: ei,
                totalHeight: es,
                items: ea,
                isSidebarVisible: eo,
                listComputer: el,
                forceUpdateOnChunkChange: eu,
                anchor: ec,
            } = (0, c.mh)({
                sections: y,
                sectionHeight: v,
                rowHeight: N,
                footerHeight: C,
                sidebarHeight: R,
                listHeaderHeight: O,
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
            (0, c.Bb)({ ref: Q, onUpdate: () => ef.current?.(), key: "content", resizeObserver: m, listenerMap: l });
        let em = _(ea),
            eE = f(y);
        i.useImperativeHandle(
            E,
            () => ({
                getScrollerNode: () => et.current,
                getScrollerState: er,
                getItems: em,
                getSectionRowFromIndex: eE,
                ...(0, c.sT)(et, er, el, ed),
            }),
            [et, er, eE, em, el, ed],
        );
        let eg = i.useCallback(
            (e) => {
                ep(1),
                    null == X.current ? ee(!0) : clearTimeout(X.current),
                    (X.current = setTimeout(() => {
                        (X.current = null), ee(!1);
                    }, 200)),
                    null != A && A(e);
            },
            [A, ep],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== en.current.dirty && (en.current.dirty = 2);
            }, [b, D, L, x, es, ei, en]),
            (0, c.gh)({
                scrollerRef: et,
                anchor: ec,
                getScrollerState: er,
                listComputer: el,
                getAnchorId: k,
                totalHeight: es,
            }),
            (0, r.jsxs)("div", {
                ref: et,
                onScroll: eg,
                className: a()(g, { [e]: !0, [t]: F, [n]: V, [d.qw]: J }),
                style: (0, c.Ze)(H),
                ...Z,
                children: [
                    i.useMemo(
                        () =>
                            (0, r.jsx)(q, {
                                id: j,
                                role: Y,
                                "aria-label": W,
                                "aria-multiselectable": K,
                                "aria-orientation": $,
                                style: { height: es },
                                className: a()(d.Qs, z),
                                ref: Q,
                                children: (0, r.jsx)(u.xp, {
                                    containerRef: Q,
                                    children: p({
                                        items: ea,
                                        renderListHeader: M,
                                        stickyListHeader: P,
                                        renderSection: b,
                                        renderRow: D,
                                        renderFooter: L,
                                        wrapSection: x,
                                        spacerTop: ei,
                                    }),
                                }),
                            }),
                        [q, j, Y, W, K, $, es, z, ea, M, P, b, D, L, x, ei],
                    ),
                    i.useMemo(
                        () =>
                            h({
                                isSidebarVisible: eo,
                                renderSidebar: w,
                                sidebarHeight: R,
                                isListVisible: 0 !== ea.length,
                            }),
                        [eo, w, R, ea.length],
                    ),
                ],
            })
        );
    });
}
