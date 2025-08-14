n.d(t, { ZP: () => E }), n(388685);
var r = n(73800),
    l = n(714319),
    i = n(536895),
    s = n(260866);
let a = [i.R8.TAB, i.R8.UP, i.R8.DOWN];
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
            onDispatch: N,
        } = e,
        h = r.useCallback(
            (e, t) => {
                let n = (0, l.Z)(e, t);
                return null != N && N(e, n, t), n;
            },
            [N],
        ),
        [f, O] = r.useReducer(h, {
            focusedIndex: E,
            itemCount: n,
        }),
        { itemCount: p, focusedIndex: R } = f,
        [S] = r.useState(() => (0, s.P2)(O, 16));
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
                    enabled: N,
                    makeId: h = s.qR,
                    getIndexFromId: f,
                } = e,
                O = r.useRef(n),
                p = r.useRef(f);
            (p.current = f), (O.current = n);
            let R = r.useRef(N);
            r.useEffect(() => {
                R.current = N;
            }, [N]);
            let [S, C] = r.useState(!1),
                [D] = r.useState(
                    () =>
                        new s.$o((e) => () => {
                            let t = null != p.current && "string" == typeof e ? p.current(e) : e;
                            "number" != typeof t ||
                                t < 0 ||
                                T({
                                    type: l.G.SET_FOCUSED_INDEX,
                                    index: t,
                                });
                        }),
                );
            r.useEffect(() => () => D.clean(), [D]);
            let L = r.useCallback(
                    (e, t) => {
                        R.current && _(e, t);
                    },
                    [_],
                ),
                [U, M] = r.useState(!0);
            r.useEffect(() => {
                if (U && !g) return void M(!1);
                L(h(t, E), E);
            }, [E]);
            let v = r.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != A ? A(E) : E;
                        n !== E &&
                            T({
                                type: l.G.SET_FOCUSED_INDEX,
                                index: n,
                            }),
                            e && L(h(t, n), n);
                    },
                    [h, E, A, T, t, L],
                ),
                b = r.useCallback(
                    (e) => {
                        if (!R.current) return;
                        if (
                            a.includes(e.key) &&
                            !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                            e.currentTarget === e.target
                        ) {
                            e.preventDefault(), e.stopPropagation(), v();
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
                                let r = u(o(h, t, E));
                                if ((null == r ? void 0 : r.ownerDocument.activeElement) !== r || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), T({ type: n }), null != d))
                                    return void d(E);
                                null == r || r.click();
                        }
                    },
                    [h, t, T, E, v, d],
                ),
                x = r.useCallback(() => {
                    S || C(!0);
                }, [S]),
                P = r.useCallback(() => {
                    S || (m ? L(h(t, E), E) : v(!0));
                }, [h, t, L, m, S, E, v]),
                j = r.useCallback(
                    (e) => {
                        e.currentTarget.contains(e.relatedTarget) ||
                            requestAnimationFrame(() => {
                                if (null == u(o(h, t, E))) return void L(t);
                                C(!1);
                            });
                    },
                    [h, t, E, L],
                ),
                y = r.useRef(null);
            r.useLayoutEffect(() => {
                let e = y.current;
                if (null != e)
                    return (
                        e.addEventListener("focusin", x),
                        e.addEventListener("focus", P),
                        e.addEventListener("focusout", j),
                        () => {
                            e.removeEventListener("focusin", x),
                                e.removeEventListener("focus", P),
                                e.removeEventListener("focusout", j);
                        }
                    );
            }, [P, x, j]);
            let w = r.useCallback(
                    () => ({
                        role: "list",
                        tabIndex: S && m ? -1 : 0,
                        id: t,
                        onKeyDown: b,
                        ref: y,
                    }),
                    [t, S, b, m],
                ),
                G = r.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: "listitem",
                            "aria-setsize": I ? O.current : void 0,
                            "aria-posinset": I ? n + 1 : void 0,
                            id: h(t, n),
                            tabIndex: m && n === E ? 0 : -1,
                            onFocus: D.get(null != p.current ? h(t, n) : n),
                        };
                    },
                    [h, t, E, m, D, I],
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
