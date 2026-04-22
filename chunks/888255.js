"use strict";
n.d(t, { $: () => A }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(656470),
    l = n.n(o),
    u = n(187322),
    d = n(936005),
    c = n(154327),
    _ = n(518898),
    f = n(687972),
    E = n(662246),
    h = n(448539),
    p = n(468260),
    m = n(751591),
    g = n(45596);
function A(e, t, n, s) {
    let o = (0, d.A)(e),
        A = new Map(),
        I = new s((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                A.get(t)?.(e);
            });
        });
    return i.forwardRef(function (s, d) {
        let T,
            S,
            {
                className: y,
                onScroll: N,
                onResize: O = null,
                onContentResize: R = null,
                dir: v = "ltr",
                sections: C,
                sectionHeight: b,
                rowHeight: D,
                footerHeight: L = 0,
                sidebarHeight: w,
                listHeaderHeight: M = 0,
                renderSection: P,
                renderRow: U,
                renderFooter: k,
                renderSidebar: x,
                renderListHeader: G,
                stickyListHeader: V,
                wrapSection: F,
                getAnchorId: B,
                paddingTop: H,
                paddingBottom: Y,
                fade: W = !1,
                customTheme: j = !1,
                chunkSize: K,
                style: $,
                innerId: z,
                innerRole: q,
                innerAriaLabel: X,
                innerAriaMultiselectable: Q,
                innerAriaOrientation: J,
                innerClassName: Z,
                innerTag: ee = "div",
                ...et
            } = s,
            en = i.useRef(null),
            er = i.useRef(null),
            [ei, es] = i.useState(!1),
            { scrollerRef: ea, scrollerState: eo, getScrollerState: el } = (0, c.A)();
        (0, _.A)({ scrollerRef: ea, className: y, specs: o, orientation: "vertical", dir: v });
        let {
                spacerTop: eu,
                totalHeight: ed,
                items: ec,
                isSidebarVisible: e_,
                listComputer: ef,
                forceUpdateOnChunkChange: eE,
                anchor: eh,
            } = (0, f.A)({
                sections: C,
                sectionHeight: b,
                rowHeight: D,
                footerHeight: L,
                sidebarHeight: w,
                listHeaderHeight: M,
                paddingTop: H,
                paddingBottom: Y,
                chunkSize: K,
                getScrollerState: el,
                getAnchorId: B,
            }),
            ep = (0, E.A)(ea),
            em = i.useRef(O),
            eg = i.useRef(R);
        i.useLayoutEffect(() => {
            (em.current = O), (eg.current = R);
        });
        let eA = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > eo.current.dirty && (eo.current.dirty = e), 2 === e && em.current?.(), eE(e);
                },
                [eE, eo],
            ),
            eI = i.useCallback(() => eA(), [eA]);
        (0, h.A)({ ref: ea, onUpdate: eI, key: "container", resizeObserver: I, listenerMap: A }),
            (0, h.A)({ ref: er, onUpdate: () => eg.current?.(), key: "content", resizeObserver: I, listenerMap: A });
        let eT =
                ((T = i.useRef(ec)),
                i.useEffect(() => {
                    T.current = ec;
                }, [ec]),
                i.useCallback(() => T.current, [])),
            eS =
                ((S = i.useRef(C)),
                i.useEffect(() => {
                    S.current = C;
                }, [C]),
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
            d,
            () => ({
                getScrollerNode: () => ea.current,
                getScrollerState: el,
                getItems: eT,
                getSectionRowFromIndex: eS,
                ...(0, p.A)(ea, el, ef, ep),
            }),
            [ea, el, eS, eT, ef, ep],
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
            }, [P, U, k, F, ed, eu, eo]),
            (0, f.g)({
                scrollerRef: ea,
                anchor: eh,
                getScrollerState: el,
                listComputer: ef,
                getAnchorId: B,
                totalHeight: ed,
            }),
            (0, r.jsxs)("div", {
                ref: ea,
                onScroll: ey,
                className: a()(y, { [e]: !0, [t]: W, [n]: j, [g.qw]: ei }),
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
                                "aria-orientation": J,
                                style: { height: ed },
                                className: a()(g.Qs, Z),
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
                                                items: d,
                                                spacerTop: c,
                                            } = e,
                                            _ = [
                                                (0, r.jsx)(
                                                    "div",
                                                    { "aria-hidden": !0, style: { height: c } },
                                                    "---list-spacer-top",
                                                ),
                                            ],
                                            f = [],
                                            E = 0;
                                        return (
                                            !0 === o &&
                                                null != a &&
                                                _.push((0, r.jsx)(i.Fragment, { children: a() }, "---sticky-header")),
                                            d.forEach((e) => {
                                                switch (
                                                    (e.section !== E &&
                                                        f.length > 0 &&
                                                        (_.push(u?.(E, f) ?? f), (f = [])),
                                                    (E = e.section ?? 0),
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
                                            f.length > 0 && _.push(u?.(E, f) ?? f),
                                            l()(_)
                                        );
                                    })({
                                        items: ec,
                                        renderListHeader: G,
                                        stickyListHeader: V,
                                        renderSection: P,
                                        renderRow: U,
                                        renderFooter: k,
                                        wrapSection: F,
                                        spacerTop: eu,
                                    }),
                                }),
                            }),
                        [ee, z, q, X, Q, J, ed, Z, ec, G, V, P, U, k, F, eu],
                    ),
                    i.useMemo(
                        () =>
                            (function (e) {
                                let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: r, isListVisible: i } = e;
                                return null == n || null == t ? null : t(i, r);
                            })({
                                isSidebarVisible: e_,
                                renderSidebar: x,
                                sidebarHeight: w,
                                isListVisible: 0 !== ec.length,
                            }),
                        [e_, x, w, ec.length],
                    ),
                ],
            })
        );
    });
}
