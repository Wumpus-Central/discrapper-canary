n.d(t, { $: () => A }), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(656470),
    l = n.n(o),
    c = n(426333),
    u = n(842867),
    d = n(219293);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
function b(e) {
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
function y(e) {
    let {
            renderSection: t,
            renderRow: n,
            renderFooter: a,
            renderListHeader: s,
            stickyListHeader: o,
            wrapSection: c,
            items: u,
            spacerTop: d,
        } = e,
        f = [
            (0, r.jsx)(
                "div",
                {
                    "aria-hidden": !0,
                    style: { height: d },
                },
                "---list-spacer-top",
            ),
        ],
        p = [],
        _ = 0;
    if (
        (!0 === o && null != s && f.push((0, r.jsx)(i.Fragment, { children: s() }, "---sticky-header")),
        u.forEach((e) => {
            var r, i;
            switch (
                (e.section !== _ &&
                    p.length > 0 &&
                    (f.push(null != (i = null == c ? void 0 : c(_, p)) ? i : p), (p = [])),
                (_ = null != (r = e.section) ? r : 0),
                e.type)
            ) {
                case "section":
                    null != t && p.push(t(e));
                    break;
                case "row":
                    p.push(n(e));
                    break;
                case "footer":
                    null != a && p.push(a(e));
                    break;
                case "header":
                    null != s && !0 !== o && p.push(s());
            }
        }),
        p.length > 0)
    ) {
        var h;
        f.push(null != (h = null == c ? void 0 : c(_, p)) ? h : p);
    }
    return l()(f);
}
function O(e) {
    let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: r, isListVisible: i } = e;
    return null == n || null == t ? null : t(i, r);
}
function A(e, t, n, a) {
    let o = (0, u.dG)(e),
        l = new Map(),
        f = new a((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null == (t = l.get(n)) || t(e);
            });
        });
    return i.forwardRef(function (a, _) {
        let [g, ...A] = [a, _],
            {
                className: v,
                onScroll: S,
                onResize: I = null,
                onContentResize: T = null,
                dir: C = "ltr",
                sections: N,
                sectionHeight: R,
                rowHeight: w,
                footerHeight: P = 0,
                sidebarHeight: D,
                listHeaderHeight: x = 0,
                renderSection: L,
                renderRow: j,
                renderFooter: M,
                renderSidebar: k,
                renderListHeader: U,
                stickyListHeader: G,
                wrapSection: V,
                getAnchorId: F,
                paddingTop: B,
                paddingBottom: H,
                fade: Y = !1,
                customTheme: W = !1,
                chunkSize: K,
                style: z,
                innerId: q,
                innerRole: X,
                innerAriaLabel: Z,
                innerAriaMultiselectable: Q,
                innerAriaOrientation: $,
                innerClassName: J,
                innerTag: ee = "div",
            } = g,
            et = m(g, [
                "className",
                "onScroll",
                "onResize",
                "onContentResize",
                "dir",
                "sections",
                "sectionHeight",
                "rowHeight",
                "footerHeight",
                "sidebarHeight",
                "listHeaderHeight",
                "renderSection",
                "renderRow",
                "renderFooter",
                "renderSidebar",
                "renderListHeader",
                "stickyListHeader",
                "wrapSection",
                "getAnchorId",
                "paddingTop",
                "paddingBottom",
                "fade",
                "customTheme",
                "chunkSize",
                "style",
                "innerId",
                "innerRole",
                "innerAriaLabel",
                "innerAriaMultiselectable",
                "innerAriaOrientation",
                "innerClassName",
                "innerTag",
            ]),
            [en] = A,
            er = i.useRef(null),
            ei = i.useRef(null),
            [ea, es] = i.useState(!1),
            { scrollerRef: eo, scrollerState: el, getScrollerState: ec } = (0, u.F6)();
        (0, u._I)({
            scrollerRef: eo,
            className: v,
            specs: o,
            orientation: "vertical",
            dir: C,
        });
        let {
                spacerTop: eu,
                totalHeight: ed,
                items: ef,
                isSidebarVisible: ep,
                listComputer: e_,
                forceUpdateOnChunkChange: eh,
                anchor: em,
            } = (0, u.mh)({
                sections: N,
                sectionHeight: R,
                rowHeight: w,
                footerHeight: P,
                sidebarHeight: D,
                listHeaderHeight: x,
                paddingTop: B,
                paddingBottom: H,
                chunkSize: K,
                getScrollerState: ec,
                getAnchorId: F,
            }),
            eg = (0, u.kR)(eo),
            eE = i.useRef(I),
            eb = i.useRef(T);
        i.useLayoutEffect(() => {
            (eE.current = I), (eb.current = T);
        });
        let ey = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if ((e > el.current.dirty && (el.current.dirty = e), 2 === e)) {
                        var t;
                        null == (t = eE.current) || t.call(eE);
                    }
                    eh(e);
                },
                [eh, el],
            ),
            eO = i.useCallback(() => ey(), [ey]);
        (0, u.Bb)({
            ref: eo,
            onUpdate: eO,
            key: "container",
            resizeObserver: f,
            listenerMap: l,
        }),
            (0, u.Bb)({
                ref: ei,
                onUpdate: () => {
                    var e;
                    return null == (e = eb.current) ? void 0 : e.call(eb);
                },
                key: "content",
                resizeObserver: f,
                listenerMap: l,
            });
        let eA = E(ef),
            ev = b(N);
        i.useImperativeHandle(
            en,
            () =>
                p(
                    {
                        getScrollerNode: () => eo.current,
                        getScrollerState: ec,
                        getItems: eA,
                        getSectionRowFromIndex: ev,
                    },
                    (0, u.sT)(eo, ec, e_, eg),
                ),
            [eo, ec, ev, eA, e_, eg],
        );
        let eS = i.useCallback(
            (e) => {
                ey(1),
                    null == er.current ? es(!0) : clearTimeout(er.current),
                    (er.current = setTimeout(() => {
                        (er.current = null), es(!1);
                    }, 200)),
                    null != S && S(e);
            },
            [S, ey],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== el.current.dirty && (el.current.dirty = 2);
            }, [ef, L, j, M, V, ed, eu, el]),
            (0, u.gh)({
                scrollerRef: eo,
                anchor: em,
                getScrollerState: ec,
                listComputer: e_,
                getAnchorId: F,
                totalHeight: ed,
            }),
            (0, r.jsxs)(
                "div",
                h(
                    p(
                        {
                            ref: eo,
                            onScroll: eS,
                            className: s()(v, {
                                [e]: !0,
                                [t]: Y,
                                [n]: W,
                                [d.qw]: ea,
                            }),
                            style: (0, u.Ze)(z),
                        },
                        et,
                    ),
                    {
                        children: [
                            i.useMemo(
                                () =>
                                    (0, r.jsx)(ee, {
                                        id: q,
                                        role: X,
                                        "aria-label": Z,
                                        "aria-multiselectable": Q,
                                        "aria-orientation": $,
                                        style: { height: ed },
                                        className: s()(d.Qs, J),
                                        ref: ei,
                                        children: (0, r.jsx)(c.xp, {
                                            containerRef: ei,
                                            children: y({
                                                items: ef,
                                                renderListHeader: U,
                                                stickyListHeader: G,
                                                renderSection: L,
                                                renderRow: j,
                                                renderFooter: M,
                                                wrapSection: V,
                                                spacerTop: eu,
                                            }),
                                        }),
                                    }),
                                [ee, q, X, Z, Q, $, ed, J, ef, U, G, L, j, M, V, eu],
                            ),
                            i.useMemo(
                                () =>
                                    O({
                                        isSidebarVisible: ep,
                                        renderSidebar: k,
                                        sidebarHeight: D,
                                        isListVisible: 0 !== ef.length,
                                    }),
                                [ep, k, D, ef.length],
                            ),
                        ],
                    },
                ),
            )
        );
    });
}
