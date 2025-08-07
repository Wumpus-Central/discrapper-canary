n.d(t, { ZP: () => E }), n(388685);
var r = n(73800),
    l = n(714319),
    s = n(536895),
    i = n(260866);
let a = [s.R8.TAB, s.R8.UP, s.R8.DOWN];
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
            includeSetSizes: m = !0,
            focusOnMount: I = !0,
            enabled: g = !0,
            onDispatch: f,
        } = e,
        N = r.useCallback(
            (e, t) => {
                let n = (0, l.Z)(e, t);
                return null != f && f(e, n, t), n;
            },
            [f],
        ),
        [h, O] = r.useReducer(N, {
            focusedIndex: E,
            itemCount: n,
        }),
        { itemCount: p, focusedIndex: R } = h,
        [S] = r.useState(() => (0, i.P2)(O, 16));
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
                    maintainFocusPosition: m,
                    includeSetSizes: I,
                    focusOnMount: g,
                    enabled: f,
                    makeId: N = i.qR,
                    getIndexFromId: h,
                } = e,
                O = r.useRef(n),
                p = r.useRef(h);
            (p.current = h), (O.current = n);
            let R = r.useRef(f);
            r.useEffect(() => {
                R.current = f;
            }, [f]);
            let [S, C] = r.useState(!1),
                [v] = r.useState(
                    () =>
                        new i.$o((e) => () => {
                            let t = null != p.current && "string" == typeof e ? p.current(e) : e;
                            "number" != typeof t ||
                                t < 0 ||
                                T({
                                    type: l.G.SET_FOCUSED_INDEX,
                                    index: t,
                                });
                        }),
                );
            r.useEffect(() => () => v.clean(), [v]);
            let D = r.useCallback(
                    (e, t) => {
                        R.current && _(e, t);
                    },
                    [_],
                ),
                [b, L] = r.useState(!0);
            r.useEffect(() => {
                if (b && !g) return void L(!1);
                D(N(t, E), E);
            }, [E]);
            let x = r.useCallback(
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
                U = r.useCallback(
                    (e) => {
                        if (!R.current) return;
                        if (
                            a.includes(e.key) &&
                            !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                            e.currentTarget === e.target
                        ) {
                            e.preventDefault(), e.stopPropagation(), x();
                            return;
                        }
                        let n = (function (e) {
                            switch (e.key) {
                                case s.R8.ENTER:
                                case s.R8.SPACE:
                                    return s.Us.SELECT_FOCUSED_ITEM;
                                case s.R8.UP:
                                    return s.Us.NAVIGATE_UP;
                                case s.R8.DOWN:
                                    return s.Us.NAVIGATE_DOWN;
                                case s.R8.HOME:
                                    return s.Us.NAVIGATE_START;
                                case s.R8.END:
                                    return s.Us.NAVIGATE_END;
                            }
                        })(e);
                        switch (n) {
                            case s.Us.NAVIGATE_UP:
                            case s.Us.NAVIGATE_DOWN:
                            case s.Us.NAVIGATE_START:
                            case s.Us.NAVIGATE_END:
                                e.preventDefault(), e.stopPropagation(), T({ type: n });
                                return;
                            case s.Us.SELECT_FOCUSED_ITEM:
                                let r = u(o(N, t, E));
                                if ((null == r ? void 0 : r.ownerDocument.activeElement) !== r || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), T({ type: n }), null != d))
                                    return void d(E);
                                null == r || r.click();
                        }
                    },
                    [N, t, T, E, x, d],
                ),
                M = r.useCallback(() => {
                    S || C(!0);
                }, [S]),
                P = r.useCallback(() => {
                    S || (m ? D(N(t, E), E) : x(!0));
                }, [N, t, D, m, S, E, x]),
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
                        e.addEventListener("focusin", M),
                        e.addEventListener("focus", P),
                        e.addEventListener("focusout", j),
                        () => {
                            e.removeEventListener("focusin", M),
                                e.removeEventListener("focus", P),
                                e.removeEventListener("focusout", j);
                        }
                    );
            }, [P, M, j]);
            let w = r.useCallback(
                    () => ({
                        role: "list",
                        tabIndex: S && m ? -1 : 0,
                        id: t,
                        onKeyDown: U,
                        ref: y,
                    }),
                    [t, S, U, m],
                ),
                G = r.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: "listitem",
                            "aria-setsize": I ? O.current : void 0,
                            "aria-posinset": I ? n + 1 : void 0,
                            id: N(t, n),
                            tabIndex: m && n === E ? 0 : -1,
                            onFocus: v.get(null != p.current ? N(t, n) : n),
                        };
                    },
                    [N, t, E, m, v, I],
                );
            return r.useMemo(
                () => ({
                    dispatch: T,
                    getContainerProps: w,
                    getItemProps: G,
                }),
                [T, w, G],
            );
        })({
            navId: t,
            itemCount: p,
            focusedIndex: R,
            dispatch: S,
            onSelect: d,
            setFocus: _,
            getNewFocusIndex: A,
            maintainFocusPosition: T,
            includeSetSizes: m,
            focusOnMount: I,
            enabled: g,
        })
    );
}
