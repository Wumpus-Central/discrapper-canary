n.d(t, { ZP: () => E }), n(388685);
var r = n(647438),
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
            includeSetSizes: I = !0,
            focusOnMount: m = !0,
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
        [O, f] = r.useReducer(h, {
            focusedIndex: E,
            itemCount: n,
        }),
        { itemCount: R, focusedIndex: S } = O,
        [C] = r.useState(() => (0, s.P2)(f, 16));
    return (
        r.useEffect(() => {
            f({
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
                    focusOnMount: g,
                    enabled: N,
                    makeId: h = s.qR,
                    getIndexFromId: O,
                } = e,
                f = r.useRef(n),
                R = r.useRef(O);
            (R.current = O), (f.current = n);
            let S = r.useRef(N);
            r.useEffect(() => {
                S.current = N;
            }, [N]);
            let [C, p] = r.useState(!1),
                [D] = r.useState(
                    () =>
                        new s.$o((e) => () => {
                            let t = null != R.current && "string" == typeof e ? R.current(e) : e;
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
                        S.current && _(e, t);
                    },
                    [_],
                ),
                [U, M] = r.useState(!0);
            r.useEffect(() => {
                if (U && !g) return void M(!1);
                L(h(t, E), E);
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
                            e && L(h(t, n), n);
                    },
                    [h, E, A, T, t, L],
                ),
                v = r.useCallback(
                    (e) => {
                        if (!S.current) return;
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
                    [h, t, T, E, x, d],
                ),
                b = r.useCallback(() => {
                    C || p(!0);
                }, [C]),
                P = r.useCallback(() => {
                    C || (I ? L(h(t, E), E) : x(!0));
                }, [h, t, L, I, C, E, x]),
                j = r.useCallback(
                    (e) => {
                        e.currentTarget.contains(e.relatedTarget) ||
                            requestAnimationFrame(() => {
                                if (null == u(o(h, t, E))) return void L(t);
                                p(!1);
                            });
                    },
                    [h, t, E, L],
                ),
                y = r.useRef(null);
            r.useLayoutEffect(() => {
                let e = y.current;
                if (null != e)
                    return (
                        e.addEventListener("focusin", b),
                        e.addEventListener("focus", P),
                        e.addEventListener("focusout", j),
                        () => {
                            e.removeEventListener("focusin", b),
                                e.removeEventListener("focus", P),
                                e.removeEventListener("focusout", j);
                        }
                    );
            }, [P, b, j]);
            let G = r.useCallback(
                    () => ({
                        role: "list",
                        tabIndex: C && I ? -1 : 0,
                        id: t,
                        onKeyDown: v,
                        ref: y,
                    }),
                    [t, C, v, I],
                ),
                k = r.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: "listitem",
                            "aria-setsize": m ? f.current : void 0,
                            "aria-posinset": m ? n + 1 : void 0,
                            id: h(t, n),
                            tabIndex: I && n === E ? 0 : -1,
                            onFocus: D.get(null != R.current ? h(t, n) : n),
                        };
                    },
                    [h, t, E, I, D, m],
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
            dispatch: C,
            onSelect: d,
            setFocus: _,
            getNewFocusIndex: A,
            maintainFocusPosition: T,
            includeSetSizes: I,
            focusOnMount: m,
            enabled: g,
        })
    );
}
