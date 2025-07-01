(n.d(t, { ZP: () => d }), n(388685));
var r = n(73800),
    l = n(714319),
    i = n(536895),
    s = n(260866);
let a = [i.R8.TAB, i.R8.UP, i.R8.DOWN];
function o(e, t, n) {
    return null != n ? '#'.concat(e(t, n)) : '#'.concat(t);
}
function u(e) {
    return document.querySelector(e);
}
function c(e) {
    var t;
    null == (t = document.getElementById(e)) || t.focus();
}
function d(e) {
    let { navId: t, itemCount: n, focusedIndex: d = 0, onSelect: E, setFocus: _, getNewFocusIndex: A, maintainFocusPosition: m = !0, includeSetSizes: T = !0, focusOnMount: f = !0, enabled: g = !0, onDispatch: I } = e,
        h = r.useCallback(
            (e, t) => {
                let n = (0, l.Z)(e, t);
                return (null != I && I(e, n, t), n);
            },
            [I]
        ),
        [O, N] = r.useReducer(h, {
            focusedIndex: d,
            itemCount: n
        }),
        { itemCount: p, focusedIndex: R } = O,
        [S] = r.useState(() => (0, s.P2)(N, 16));
    return (
        r.useEffect(() => {
            N({
                type: l.G.UPDATE_ITEM_COUNT,
                itemCount: n
            });
        }, [n]),
        (function (e) {
            let { navId: t, itemCount: n, focusedIndex: d, onSelect: E, setFocus: _ = c, getNewFocusIndex: A, dispatch: m, maintainFocusPosition: T, includeSetSizes: f, focusOnMount: g, enabled: I, makeId: h = s.qR, getIndexFromId: O } = e,
                N = r.useRef(n),
                p = r.useRef(O);
            ((p.current = O), (N.current = n));
            let R = r.useRef(I);
            r.useEffect(() => {
                R.current = I;
            }, [I]);
            let [S, C] = r.useState(!1),
                [b] = r.useState(
                    () =>
                        new s.$o((e) => () => {
                            let t = null != p.current && 'string' == typeof e ? p.current(e) : e;
                            'number' != typeof t ||
                                t < 0 ||
                                m({
                                    type: l.G.SET_FOCUSED_INDEX,
                                    index: t
                                });
                        })
                );
            r.useEffect(() => () => b.clean(), [b]);
            let v = r.useCallback(
                    (e, t) => {
                        R.current && _(e, t);
                    },
                    [_]
                ),
                [D, x] = r.useState(!0);
            r.useEffect(() => {
                if (D && !g) return void x(!1);
                v(h(t, d), d);
            }, [d]);
            let M = r.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != A ? A(d) : d;
                        (n !== d &&
                            m({
                                type: l.G.SET_FOCUSED_INDEX,
                                index: n
                            }),
                            e && v(h(t, n), n));
                    },
                    [h, d, A, m, t, v]
                ),
                L = r.useCallback(
                    (e) => {
                        if (!R.current) return;
                        if (a.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            (e.preventDefault(), e.stopPropagation(), M());
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
                                (e.preventDefault(), e.stopPropagation(), m({ type: n }));
                                return;
                            case i.Us.SELECT_FOCUSED_ITEM:
                                let r = u(o(h, t, d));
                                if ((null == r ? void 0 : r.ownerDocument.activeElement) !== r || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), m({ type: n }), null != E)) return void E(d);
                                null == r || r.click();
                        }
                    },
                    [h, t, m, d, M, E]
                ),
                U = r.useCallback(() => {
                    S || C(!0);
                }, [S]),
                P = r.useCallback(() => {
                    S || (T ? v(h(t, d), d) : M(!0));
                }, [h, t, v, T, S, d, M]),
                j = r.useCallback(
                    (e) => {
                        e.currentTarget.contains(e.relatedTarget) ||
                            requestAnimationFrame(() => {
                                if (null == u(o(h, t, d))) return void v(t);
                                C(!1);
                            });
                    },
                    [h, t, d, v]
                ),
                y = r.useRef(null);
            r.useLayoutEffect(() => {
                let e = y.current;
                if (null != e)
                    return (
                        e.addEventListener('focusin', U),
                        e.addEventListener('focus', P),
                        e.addEventListener('focusout', j),
                        () => {
                            (e.removeEventListener('focusin', U), e.removeEventListener('focus', P), e.removeEventListener('focusout', j));
                        }
                    );
            }, [P, U, j]);
            let w = r.useCallback(
                    () => ({
                        role: 'list',
                        tabIndex: S && T ? -1 : 0,
                        id: t,
                        onKeyDown: L,
                        ref: y
                    }),
                    [t, S, L, T]
                ),
                G = r.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: 'listitem',
                            'aria-setsize': f ? N.current : void 0,
                            'aria-posinset': f ? n + 1 : void 0,
                            id: h(t, n),
                            tabIndex: T && n === d ? 0 : -1,
                            onFocus: b.get(null != p.current ? h(t, n) : n)
                        };
                    },
                    [h, t, d, T, b, f]
                );
            return r.useMemo(
                () => ({
                    dispatch: m,
                    getContainerProps: w,
                    getItemProps: G
                }),
                [m, w, G]
            );
        })({
            navId: t,
            itemCount: p,
            focusedIndex: R,
            dispatch: S,
            onSelect: E,
            setFocus: _,
            getNewFocusIndex: A,
            maintainFocusPosition: m,
            includeSetSizes: T,
            focusOnMount: f,
            enabled: g
        })
    );
}
