n.d(t, {
    ZP: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    l = n(714319),
    r = n(536895),
    a = n(260866);
let s = [r.R8.TAB, r.R8.UP, r.R8.DOWN];
function o(e, t, n) {
    return null != n ? '#'.concat(e(t, n)) : '#'.concat(t);
}
function c(e) {
    return document.querySelector(e);
}
function d(e) {
    var t;
    null === (t = document.getElementById(e)) || void 0 === t || t.focus();
}
function u(e) {
    let { navId: t, itemCount: n, focusedIndex: u = 0, onSelect: h, setFocus: p, getNewFocusIndex: m, maintainFocusPosition: f = !0, includeSetSizes: g = !0, focusOnMount: C = !0, enabled: x = !0, onDispatch: v } = e,
        _ = i.useCallback(
            (e, t) => {
                let n = (0, l.Z)(e, t);
                return null != v && v(e, n, t), n;
            },
            [v]
        ),
        [I, E] = i.useReducer(_, {
            focusedIndex: u,
            itemCount: n
        }),
        { itemCount: b, focusedIndex: Z } = I,
        [S] = i.useState(() => (0, a.P2)(E, 16));
    return (
        i.useEffect(() => {
            E({
                type: l.G.UPDATE_ITEM_COUNT,
                itemCount: n
            });
        }, [n]),
        (function (e) {
            let { navId: t, itemCount: n, focusedIndex: u, onSelect: h, setFocus: p = d, getNewFocusIndex: m, dispatch: f, maintainFocusPosition: g, includeSetSizes: C, focusOnMount: x, enabled: v, makeId: _ = a.qR, getIndexFromId: I } = e,
                E = i.useRef(n),
                b = i.useRef(I);
            (b.current = I), (E.current = n);
            let Z = i.useRef();
            i.useEffect(() => {
                Z.current = v;
            }, [v]);
            let [S, N] = i.useState(!1),
                [T] = i.useState(
                    () =>
                        new a.$o((e) => () => {
                            let t = null != b.current && 'string' == typeof e ? b.current(e) : e;
                            'number' == typeof t &&
                                !(t < 0) &&
                                f({
                                    type: l.G.SET_FOCUSED_INDEX,
                                    index: t
                                });
                        })
                );
            i.useEffect(() => () => T.clean(), [T]);
            let j = i.useCallback(
                    (e, t) => {
                        Z.current && p(e, t);
                    },
                    [p]
                ),
                [A, y] = i.useState(!0);
            i.useEffect(() => {
                if (A && !x) {
                    y(!1);
                    return;
                }
                j(_(t, u), u);
            }, [u]);
            let P = i.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != m ? m(u) : u;
                        n !== u &&
                            f({
                                type: l.G.SET_FOCUSED_INDEX,
                                index: n
                            }),
                            e && j(_(t, n), n);
                    },
                    [_, u, m, f, t, j]
                ),
                M = i.useCallback(
                    (e) => {
                        if (!Z.current) return;
                        if (s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), P();
                            return;
                        }
                        let n = (function (e) {
                            switch (e.key) {
                                case r.R8.ENTER:
                                case r.R8.SPACE:
                                    return r.Us.SELECT_FOCUSED_ITEM;
                                case r.R8.UP:
                                    return r.Us.NAVIGATE_UP;
                                case r.R8.DOWN:
                                    return r.Us.NAVIGATE_DOWN;
                                case r.R8.HOME:
                                    return r.Us.NAVIGATE_START;
                                case r.R8.END:
                                    return r.Us.NAVIGATE_END;
                            }
                        })(e);
                        switch (n) {
                            case r.Us.NAVIGATE_UP:
                            case r.Us.NAVIGATE_DOWN:
                            case r.Us.NAVIGATE_START:
                            case r.Us.NAVIGATE_END:
                                e.preventDefault(), e.stopPropagation(), f({ type: n });
                                return;
                            case r.Us.SELECT_FOCUSED_ITEM:
                                var i;
                                let l = c(o(_, t, u));
                                if ((null == (i = l) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), f({ type: n }), null != h)) {
                                    h(u);
                                    return;
                                }
                                null == l || l.click();
                        }
                    },
                    [_, t, f, u, P, h]
                ),
                R = i.useCallback(() => {
                    S || N(!0);
                }, [S]),
                L = i.useCallback(() => {
                    if (!S) g ? j(_(t, u), u) : P(!0);
                }, [_, t, j, g, S, u, P]),
                k = i.useCallback(
                    (e) => {
                        if (!e.currentTarget.contains(e.relatedTarget))
                            requestAnimationFrame(() => {
                                if (null == c(o(_, t, u))) {
                                    j(t);
                                    return;
                                }
                                N(!1);
                            });
                    },
                    [_, t, u, j]
                ),
                O = i.useRef(null);
            i.useLayoutEffect(() => {
                let e = O.current;
                if (null != e)
                    return (
                        e.addEventListener('focusin', R),
                        e.addEventListener('focus', L),
                        e.addEventListener('focusout', k),
                        () => {
                            e.removeEventListener('focusin', R), e.removeEventListener('focus', L), e.removeEventListener('focusout', k);
                        }
                    );
            }, [L, R, k]);
            let D = i.useCallback(
                    () => ({
                        role: 'list',
                        tabIndex: S && g ? -1 : 0,
                        id: t,
                        onKeyDown: M,
                        ref: O
                    }),
                    [t, S, M, g]
                ),
                w = i.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: 'listitem',
                            'aria-setsize': C ? E.current : void 0,
                            'aria-posinset': C ? n + 1 : void 0,
                            id: _(t, n),
                            tabIndex: g && n === u ? 0 : -1,
                            onFocus: T.get(null != b.current ? _(t, n) : n)
                        };
                    },
                    [_, t, u, g, T, C]
                );
            return i.useMemo(
                () => ({
                    dispatch: f,
                    getContainerProps: D,
                    getItemProps: w
                }),
                [f, D, w]
            );
        })({
            navId: t,
            itemCount: b,
            focusedIndex: Z,
            dispatch: S,
            onSelect: h,
            setFocus: p,
            getNewFocusIndex: m,
            maintainFocusPosition: f,
            includeSetSizes: g,
            focusOnMount: C,
            enabled: x
        })
    );
}
