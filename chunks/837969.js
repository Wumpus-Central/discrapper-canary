n.d(t, { ZP: () => E }), n(388685);
var r = n(473749),
    l = n(714319),
    i = n(536895),
    a = n(260866);
let s = [i.R8.TAB, i.R8.UP, i.R8.DOWN];
function o(e, t, n) {
    return null != n ? "#".concat(e(t, n)) : "#".concat(t);
}
function u(e) {
    return document.querySelector(e);
}
function c(e) {
    var t;
    null == (t = document.getElementById(e)) || t.focus();
}
function E(e) {
    let {
            navId: t,
            itemCount: n,
            focusedIndex: E = 0,
            onSelect: d,
            setFocus: _,
            getNewFocusIndex: A,
            maintainFocusPosition: T = !0,
            includeSetSizes: I = !0,
            focusOnMount: m = !0,
            enabled: f = !0,
            onDispatch: g,
        } = e,
        N = r.useCallback(
            (e, t) => {
                let n = (0, l.Z)(e, t);
                return null != g && g(e, n, t), n;
            },
            [g],
        ),
        [h, O] = r.useReducer(N, {
            focusedIndex: E,
            itemCount: n,
        }),
        { itemCount: R, focusedIndex: S } = h,
        [p] = r.useState(() => (0, a.P2)(O, 16));
    return (
        r.useEffect(() => {
            O({
                type: l.G.UPDATE_ITEM_COUNT,
                itemCount: n,
            });
        }, [n]),
        (function (e) {
            let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: E,
                    onSelect: d,
                    setFocus: _ = c,
                    getNewFocusIndex: A,
                    dispatch: T,
                    maintainFocusPosition: I,
                    includeSetSizes: m,
                    focusOnMount: f,
                    enabled: g,
                    makeId: N = a.qR,
                    getIndexFromId: h,
                } = e,
                O = r.useRef(n),
                R = r.useRef(h);
            (R.current = h), (O.current = n);
            let S = r.useRef(g);
            r.useEffect(() => {
                S.current = g;
            }, [g]);
            let [p, C] = r.useState(!1),
                [b] = r.useState(
                    () =>
                        new a.$o((e) => () => {
                            let t = null != R.current && "string" == typeof e ? R.current(e) : e;
                            "number" != typeof t ||
                                t < 0 ||
                                T({
                                    type: l.G.SET_FOCUSED_INDEX,
                                    index: t,
                                });
                        }),
                );
            r.useEffect(() => () => b.clean(), [b]);
            let D = r.useCallback(
                    (e, t) => {
                        S.current && _(e, t);
                    },
                    [_],
                ),
                [U, L] = r.useState(!0);
            r.useEffect(() => {
                if (U && !f) return void L(!1);
                D(N(t, E), E);
            }, [E]);
            let M = r.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != A ? A(E) : E;
                        n !== E &&
                            T({
                                type: l.G.SET_FOCUSED_INDEX,
                                index: n,
                            }),
                            e && D(N(t, n), n);
                    },
                    [N, E, A, T, t, D],
                ),
                x = r.useCallback(
                    (e) => {
                        if (!S.current) return;
                        if (
                            s.includes(e.key) &&
                            !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                            e.currentTarget === e.target
                        ) {
                            e.preventDefault(), e.stopPropagation(), M();
                            return;
                        }
                        let n = (function (e) {
                            switch (e.key) {
                                case i.R8.ENTER:
                                case i.R8.SPACE:
                                    return i.Us.SELECT_FOCUSED_ITEM;
                                case i.R8.UP:
                                    return i.Us.NAVIGATE_UP;
                                case i.R8.DOWN:
                                    return i.Us.NAVIGATE_DOWN;
                                case i.R8.HOME:
                                    return i.Us.NAVIGATE_START;
                                case i.R8.END:
                                    return i.Us.NAVIGATE_END;
                            }
                        })(e);
                        switch (n) {
                            case i.Us.NAVIGATE_UP:
                            case i.Us.NAVIGATE_DOWN:
                            case i.Us.NAVIGATE_START:
                            case i.Us.NAVIGATE_END:
                                e.preventDefault(), e.stopPropagation(), T({ type: n });
                                return;
                            case i.Us.SELECT_FOCUSED_ITEM:
                                let r = u(o(N, t, E));
                                if ((null == r ? void 0 : r.ownerDocument.activeElement) !== r || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), T({ type: n }), null != d))
                                    return void d(E);
                                null == r || r.click();
                        }
                    },
                    [N, t, T, E, M, d],
                ),
                v = r.useCallback(() => {
                    p || C(!0);
                }, [p]),
                P = r.useCallback(() => {
                    p || (I ? D(N(t, E), E) : M(!0));
                }, [N, t, D, I, p, E, M]),
                j = r.useCallback(
                    (e) => {
                        e.currentTarget.contains(e.relatedTarget) ||
                            requestAnimationFrame(() => {
                                if (null == u(o(N, t, E))) return void D(t);
                                C(!1);
                            });
                    },
                    [N, t, E, D],
                ),
                y = r.useRef(null);
            r.useLayoutEffect(() => {
                let e = y.current;
                if (null != e)
                    return (
                        e.addEventListener("focusin", v),
                        e.addEventListener("focus", P),
                        e.addEventListener("focusout", j),
                        () => {
                            e.removeEventListener("focusin", v),
                                e.removeEventListener("focus", P),
                                e.removeEventListener("focusout", j);
                        }
                    );
            }, [P, v, j]);
            let G = r.useCallback(
                    () => ({
                        role: "list",
                        tabIndex: p && I ? -1 : 0,
                        id: t,
                        onKeyDown: x,
                        ref: y,
                    }),
                    [t, p, x, I],
                ),
                k = r.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: "listitem",
                            "aria-setsize": m ? O.current : void 0,
                            "aria-posinset": m ? n + 1 : void 0,
                            id: N(t, n),
                            tabIndex: I && n === E ? 0 : -1,
                            onFocus: b.get(null != R.current ? N(t, n) : n),
                        };
                    },
                    [N, t, E, I, b, m],
                );
            return r.useMemo(
                () => ({
                    dispatch: T,
                    getContainerProps: G,
                    getItemProps: k,
                }),
                [T, G, k],
            );
        })({
            navId: t,
            itemCount: R,
            focusedIndex: S,
            dispatch: p,
            onSelect: d,
            setFocus: _,
            getNewFocusIndex: A,
            maintainFocusPosition: T,
            includeSetSizes: I,
            focusOnMount: m,
            enabled: f,
        })
    );
}
