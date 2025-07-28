(n.d(t, { ZP: () => d }), n(388685));
var r = n(73800),
    i = n(714319),
    l = n(536895),
    a = n(260866);
let o = [l.R8.TAB, l.R8.UP, l.R8.DOWN];
function s(e, t, n) {
    return null != n ? '#'.concat(e(t, n)) : '#'.concat(t);
}
function c(e) {
    return document.querySelector(e);
}
function u(e) {
    var t;
    null == (t = document.getElementById(e)) || t.focus();
}
function d(e) {
    let { navId: t, itemCount: n, focusedIndex: d = 0, onSelect: p, setFocus: m, getNewFocusIndex: f, maintainFocusPosition: g = !0, includeSetSizes: _ = !0, focusOnMount: h = !0, enabled: b = !0, onDispatch: E } = e,
        C = r.useCallback(
            (e, t) => {
                let n = (0, i.Z)(e, t);
                return (null != E && E(e, n, t), n);
            },
            [E]
        ),
        [x, v] = r.useReducer(C, {
            focusedIndex: d,
            itemCount: n
        }),
        { itemCount: y, focusedIndex: O } = x,
        [j] = r.useState(() => (0, a.P2)(v, 16));
    return (
        r.useEffect(() => {
            v({
                type: i.G.UPDATE_ITEM_COUNT,
                itemCount: n
            });
        }, [n]),
        (function (e) {
            let { navId: t, itemCount: n, focusedIndex: d, onSelect: p, setFocus: m = u, getNewFocusIndex: f, dispatch: g, maintainFocusPosition: _, includeSetSizes: h, focusOnMount: b, enabled: E, makeId: C = a.qR, getIndexFromId: x } = e,
                v = r.useRef(n),
                y = r.useRef(x);
            ((y.current = x), (v.current = n));
            let O = r.useRef(E);
            r.useEffect(() => {
                O.current = E;
            }, [E]);
            let [j, I] = r.useState(!1),
                [S] = r.useState(
                    () =>
                        new a.$o((e) => () => {
                            let t = null != y.current && 'string' == typeof e ? y.current(e) : e;
                            'number' != typeof t ||
                                t < 0 ||
                                g({
                                    type: i.G.SET_FOCUSED_INDEX,
                                    index: t
                                });
                        })
                );
            r.useEffect(() => () => S.clean(), [S]);
            let T = r.useCallback(
                    (e, t) => {
                        O.current && m(e, t);
                    },
                    [m]
                ),
                [N, P] = r.useState(!0);
            r.useEffect(() => {
                if (N && !b) return void P(!1);
                T(C(t, d), d);
            }, [d]);
            let A = r.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != f ? f(d) : d;
                        (n !== d &&
                            g({
                                type: i.G.SET_FOCUSED_INDEX,
                                index: n
                            }),
                            e && T(C(t, n), n));
                    },
                    [C, d, f, g, t, T]
                ),
                w = r.useCallback(
                    (e) => {
                        if (!O.current) return;
                        if (o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            (e.preventDefault(), e.stopPropagation(), A());
                            return;
                        }
                        let n = (function (e) {
                            switch (e.key) {
                                case l.R8.ENTER:
                                case l.R8.SPACE:
                                    return l.Us.SELECT_FOCUSED_ITEM;
                                case l.R8.UP:
                                    return l.Us.NAVIGATE_UP;
                                case l.R8.DOWN:
                                    return l.Us.NAVIGATE_DOWN;
                                case l.R8.HOME:
                                    return l.Us.NAVIGATE_START;
                                case l.R8.END:
                                    return l.Us.NAVIGATE_END;
                            }
                        })(e);
                        switch (n) {
                            case l.Us.NAVIGATE_UP:
                            case l.Us.NAVIGATE_DOWN:
                            case l.Us.NAVIGATE_START:
                            case l.Us.NAVIGATE_END:
                                (e.preventDefault(), e.stopPropagation(), g({ type: n }));
                                return;
                            case l.Us.SELECT_FOCUSED_ITEM:
                                let r = c(s(C, t, d));
                                if ((null == r ? void 0 : r.ownerDocument.activeElement) !== r || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), g({ type: n }), null != p)) return void p(d);
                                null == r || r.click();
                        }
                    },
                    [C, t, g, d, A, p]
                ),
                Z = r.useCallback(() => {
                    j || I(!0);
                }, [j]),
                R = r.useCallback(() => {
                    j || (_ ? T(C(t, d), d) : A(!0));
                }, [C, t, T, _, j, d, A]),
                L = r.useCallback(
                    (e) => {
                        e.currentTarget.contains(e.relatedTarget) ||
                            requestAnimationFrame(() => {
                                if (null == c(s(C, t, d))) return void T(t);
                                I(!1);
                            });
                    },
                    [C, t, d, T]
                ),
                D = r.useRef(null);
            r.useLayoutEffect(() => {
                let e = D.current;
                if (null != e)
                    return (
                        e.addEventListener('focusin', Z),
                        e.addEventListener('focus', R),
                        e.addEventListener('focusout', L),
                        () => {
                            (e.removeEventListener('focusin', Z), e.removeEventListener('focus', R), e.removeEventListener('focusout', L));
                        }
                    );
            }, [R, Z, L]);
            let k = r.useCallback(
                    () => ({
                        role: 'list',
                        tabIndex: j && _ ? -1 : 0,
                        id: t,
                        onKeyDown: w,
                        ref: D
                    }),
                    [t, j, w, _]
                ),
                M = r.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: 'listitem',
                            'aria-setsize': h ? v.current : void 0,
                            'aria-posinset': h ? n + 1 : void 0,
                            id: C(t, n),
                            tabIndex: _ && n === d ? 0 : -1,
                            onFocus: S.get(null != y.current ? C(t, n) : n)
                        };
                    },
                    [C, t, d, _, S, h]
                );
            return r.useMemo(
                () => ({
                    dispatch: g,
                    getContainerProps: k,
                    getItemProps: M
                }),
                [g, k, M]
            );
        })({
            navId: t,
            itemCount: y,
            focusedIndex: O,
            dispatch: j,
            onSelect: p,
            setFocus: m,
            getNewFocusIndex: f,
            maintainFocusPosition: g,
            includeSetSizes: _,
            focusOnMount: h,
            enabled: b
        })
    );
}
