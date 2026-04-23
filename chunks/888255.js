"use strict";
n.d(t, { $: () => A }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(656470),
    l = n.n(o),
    u = n(187322),
    c = n(936005),
    d = n(154327),
    _ = n(518898),
    f = n(687972),
    p = n(662246),
    h = n(448539),
    E = n(468260),
    m = n(751591),
    g = n(45596);
function A(e, t, n, s) {
    let o = (0, c.A)(e),
        A = new Map(),
        I = new s((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                A.get(t)?.(e);
            });
        });
    return i.forwardRef(function (s, c) {
        let T,
            S,
            {
                className: y,
                onScroll: N,
                onResize: v = null,
                onContentResize: C = null,
                dir: O = "ltr",
                sections: R,
                sectionHeight: b,
                rowHeight: D,
                footerHeight: L = 0,
                sidebarHeight: w,
                listHeaderHeight: M = 0,
                renderSection: P,
                renderRow: x,
                renderFooter: k,
                renderSidebar: U,
                renderListHeader: G,
                stickyListHeader: F,
                wrapSection: V,
                getAnchorId: B,
                paddingTop: H,
                paddingBottom: j,
                fade: Y = !1,
                customTheme: W = !1,
                chunkSize: K,
                style: $,
                innerId: z,
                innerRole: q,
                innerAriaLabel: X,
                innerAriaMultiselectable: Q,
                innerAriaOrientation: Z,
                innerClassName: J,
                innerTag: ee = "div",
                ...et
            } = s,
            en = i.useRef(null),
            er = i.useRef(null),
            [ei, es] = i.useState(!1),
            { scrollerRef: ea, scrollerState: eo, getScrollerState: el } = (0, d.A)();
        (0, _.A)({ scrollerRef: ea, className: y, specs: o, orientation: "vertical", dir: O });
        let {
                spacerTop: eu,
                totalHeight: ec,
                items: ed,
                isSidebarVisible: e_,
                listComputer: ef,
                forceUpdateOnChunkChange: ep,
                anchor: eh,
            } = (0, f.A)({
                sections: R,
                sectionHeight: b,
                rowHeight: D,
                footerHeight: L,
                sidebarHeight: w,
                listHeaderHeight: M,
                paddingTop: H,
                paddingBottom: j,
                chunkSize: K,
                getScrollerState: el,
                getAnchorId: B,
            }),
            eE = (0, p.A)(ea),
            em = i.useRef(v),
            eg = i.useRef(C);
        i.useLayoutEffect(() => {
            (em.current = v), (eg.current = C);
        });
        let eA = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > eo.current.dirty && (eo.current.dirty = e), 2 === e && em.current?.(), ep(e);
                },
                [ep, eo],
            ),
            eI = i.useCallback(() => eA(), [eA]);
        (0, h.A)({ ref: ea, onUpdate: eI, key: "container", resizeObserver: I, listenerMap: A }),
            (0, h.A)({ ref: er, onUpdate: () => eg.current?.(), key: "content", resizeObserver: I, listenerMap: A });
        let eT =
                ((T = i.useRef(ed)),
                i.useEffect(() => {
                    T.current = ed;
                }, [ed]),
                i.useCallback(() => T.current, [])),
            eS =
                ((S = i.useRef(R)),
                i.useEffect(() => {
                    S.current = R;
                }, [R]),
                i.useCallback((e) => {
                    let { current: t } = S,
                        n = 0;
                    for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        if (n <= e && n + i >= e) return [r, e - n];
                        n += i;
                    }
                    return [0, 0];
                }, []));
        i.useImperativeHandle(
            c,
            () => ({
                getScrollerNode: () => ea.current,
                getScrollerState: el,
                getItems: eT,
                getSectionRowFromIndex: eS,
                ...(0, E.A)(ea, el, ef, eE),
            }),
            [ea, el, eS, eT, ef, eE],
        );
        let ey = i.useCallback(
            (e) => {
                eA(1),
                    null == en.current ? es(!0) : clearTimeout(en.current),
                    (en.current = setTimeout(() => {
                        (en.current = null), es(!1);
                    }, 200)),
                    null != N && N(e);
            },
            [N, eA],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== eo.current.dirty && (eo.current.dirty = 2);
            }, [P, x, k, V, ec, eu, eo]),
            (0, f.g)({
                scrollerRef: ea,
                anchor: eh,
                getScrollerState: el,
                listComputer: ef,
                getAnchorId: B,
                totalHeight: ec,
            }),
            (0, r.jsxs)("div", {
                ref: ea,
                onScroll: ey,
                className: a()(y, { [e]: !0, [t]: Y, [n]: W, [g.qw]: ei }),
                style: (0, m.Ay)($),
                ...et,
                children: [
                    i.useMemo(
                        () =>
                            (0, r.jsx)(ee, {
                                id: z,
                                role: q,
                                "aria-label": X,
                                "aria-multiselectable": Q,
                                "aria-orientation": Z,
                                style: { height: ec },
                                className: a()(g.Qs, J),
                                ref: er,
                                children: (0, r.jsx)(u.xp, {
                                    containerRef: er,
                                    children: (function (e) {
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
                                            _ = [
                                                (0, r.jsx)(
                                                    "div",
                                                    { "aria-hidden": !0, style: { height: d } },
                                                    "---list-spacer-top",
                                                ),
                                            ],
                                            f = [],
                                            p = 0;
                                        return (
                                            !0 === o &&
                                                null != a &&
                                                _.push((0, r.jsx)(i.Fragment, { children: a() }, "---sticky-header")),
                                            c.forEach((e) => {
                                                switch (
                                                    (e.section !== p &&
                                                        f.length > 0 &&
                                                        (_.push(u?.(p, f) ?? f), (f = [])),
                                                    (p = e.section ?? 0),
                                                    e.type)
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
                                    })({
                                        items: ed,
                                        renderListHeader: G,
                                        stickyListHeader: F,
                                        renderSection: P,
                                        renderRow: x,
                                        renderFooter: k,
                                        wrapSection: V,
                                        spacerTop: eu,
                                    }),
                                }),
                            }),
                        [ee, z, q, X, Q, Z, ec, J, ed, G, F, P, x, k, V, eu],
                    ),
                    i.useMemo(
                        () =>
                            (function (e) {
                                let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: r, isListVisible: i } = e;
                                return null == n || null == t ? null : t(i, r);
                            })({
                                isSidebarVisible: e_,
                                renderSidebar: U,
                                sidebarHeight: w,
                                isListVisible: 0 !== ed.length,
                            }),
                        [e_, U, w, ed.length],
                    ),
                ],
            })
        );
    });
}
