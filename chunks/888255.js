n.d(t, {
    $: () => v,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(656470),
    l = n.n(s),
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

function y(e) {
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
    let {
            renderSection: t,
            renderRow: n,
            renderFooter: a,
            renderListHeader: o,
            stickyListHeader: s,
            wrapSection: c,
            items: u,
            spacerTop: d,
        } = e,
        f = [
            (0, r.jsx)(
                "div",
                {
                    "aria-hidden": !0,
                    style: {
                        height: d,
                    },
                },
                "---list-spacer-top",
            ),
        ],
        p = [],
        _ = 0;
    if (
        (!0 === s &&
            null != o &&
            f.push(
                (0, r.jsx)(
                    i.Fragment,
                    {
                        children: o(),
                    },
                    "---sticky-header",
                ),
            ),
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
                    null != o && !0 !== s && p.push(o());
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

function v(e, t, n, a) {
    let s = (0, u.dG)(e),
        l = new Map(),
        f = new a((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null == (t = l.get(n)) || t(e);
            });
        });
    return i.forwardRef(function (a, _) {
        let [g, ...v] = [a, _],
            {
                className: A,
                onScroll: I,
                onResize: S = null,
                onContentResize: T = null,
                dir: C = "ltr",
                sections: N,
                sectionHeight: w,
                rowHeight: R,
                footerHeight: P = 0,
                sidebarHeight: D,
                listHeaderHeight: L = 0,
                renderSection: x,
                renderRow: M,
                renderFooter: j,
                renderSidebar: k,
                renderListHeader: U,
                stickyListHeader: G,
                wrapSection: F,
                getAnchorId: V,
                paddingTop: B,
                paddingBottom: H,
                fade: Y = !1,
                customTheme: W = !1,
                chunkSize: K,
                style: z,
                innerId: q,
                innerRole: Z,
                innerAriaLabel: Q,
                innerAriaMultiselectable: X,
                innerAriaOrientation: J,
                innerClassName: $,
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
            [en] = v,
            er = i.useRef(null),
            ei = i.useRef(null),
            [ea, eo] = i.useState(!1),
            { scrollerRef: es, scrollerState: el, getScrollerState: ec } = (0, u.F6)();
        (0, u._I)({
            scrollerRef: es,
            className: A,
            specs: s,
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
                sectionHeight: w,
                rowHeight: R,
                footerHeight: P,
                sidebarHeight: D,
                listHeaderHeight: L,
                paddingTop: B,
                paddingBottom: H,
                chunkSize: K,
                getScrollerState: ec,
                getAnchorId: V,
            }),
            eg = (0, u.kR)(es),
            eE = i.useRef(S),
            ey = i.useRef(T);
        i.useLayoutEffect(() => {
            (eE.current = S), (ey.current = T);
        });
        let eb = i.useCallback(
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
            eO = i.useCallback(() => eb(), [eb]);
        (0, u.Bb)({
            ref: es,
            onUpdate: eO,
            key: "container",
            resizeObserver: f,
            listenerMap: l,
        }),
            (0, u.Bb)({
                ref: ei,
                onUpdate: () => {
                    var e;
                    return null == (e = ey.current) ? void 0 : e.call(ey);
                },
                key: "content",
                resizeObserver: f,
                listenerMap: l,
            });
        let ev = E(ef),
            eA = y(N);
        i.useImperativeHandle(
            en,
            () =>
                p(
                    {
                        getScrollerNode: () => es.current,
                        getScrollerState: ec,
                        getItems: ev,
                        getSectionRowFromIndex: eA,
                    },
                    (0, u.sT)(es, ec, e_, eg),
                ),
            [es, ec, eA, ev, e_, eg],
        );
        let eI = i.useCallback(
            (e) => {
                eb(1),
                    null == er.current ? eo(!0) : clearTimeout(er.current),
                    (er.current = setTimeout(() => {
                        (er.current = null), eo(!1);
                    }, 200)),
                    null != I && I(e);
            },
            [I, eb],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== el.current.dirty && (el.current.dirty = 2);
            }, [x, M, j, F, ed, eu, el]),
            (0, u.gh)({
                scrollerRef: es,
                anchor: em,
                getScrollerState: ec,
                listComputer: e_,
                getAnchorId: V,
                totalHeight: ed,
            }),
            (0, r.jsxs)(
                "div",
                h(
                    p(
                        {
                            ref: es,
                            onScroll: eI,
                            className: o()(A, {
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
                                        role: Z,
                                        "aria-label": Q,
                                        "aria-multiselectable": X,
                                        "aria-orientation": J,
                                        style: {
                                            height: ed,
                                        },
                                        className: o()(d.Qs, $),
                                        ref: ei,
                                        children: (0, r.jsx)(c.xp, {
                                            containerRef: ei,
                                            children: b({
                                                items: ef,
                                                renderListHeader: U,
                                                stickyListHeader: G,
                                                renderSection: x,
                                                renderRow: M,
                                                renderFooter: j,
                                                wrapSection: F,
                                                spacerTop: eu,
                                            }),
                                        }),
                                    }),
                                [ee, q, Z, Q, X, J, ed, $, ef, U, G, x, M, j, F, eu],
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
