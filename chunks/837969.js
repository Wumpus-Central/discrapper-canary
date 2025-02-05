n.d(t, { ZP: () => u }), n(47120);
var i = n(192379),
    l = n(714319),
    a = n(536895),
    r = n(260866);
let s = [a.R8.TAB, a.R8.UP, a.R8.DOWN];
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
    let { navId: t, itemCount: n, focusedIndex: u = 0, onSelect: h, setFocus: p, getNewFocusIndex: m, maintainFocusPosition: f = !0, includeSetSizes: g = !0, focusOnMount: _ = !0, enabled: C = !0, onDispatch: x } = e,
        v = i.useCallback(
            (e, t) => {
                let n = (0, l.Z)(e, t);
                return null != x && x(e, n, t), n;
            },
            [x]
        ),
        [E, I] = i.useReducer(v, {
            focusedIndex: u,
            itemCount: n
        }),
        { itemCount: b, focusedIndex: Z } = E,
        [N] = i.useState(() => (0, r.P2)(I, 16));
    return (
        i.useEffect(() => {
            I({
                type: l.G.UPDATE_ITEM_COUNT,
                itemCount: n
            });
        }, [n]),
        (function (e) {
            let { navId: t, itemCount: n, focusedIndex: u, onSelect: h, setFocus: p = d, getNewFocusIndex: m, dispatch: f, maintainFocusPosition: g, includeSetSizes: _, focusOnMount: C, enabled: x, makeId: v = r.qR, getIndexFromId: E } = e,
                I = i.useRef(n),
                b = i.useRef(E);
            (b.current = E), (I.current = n);
            let Z = i.useRef();
            i.useEffect(() => {
                Z.current = x;
            }, [x]);
            let [N, T] = i.useState(!1),
                [S] = i.useState(
                    () =>
                        new r.$o((e) => () => {
                            let t = null != b.current && 'string' == typeof e ? b.current(e) : e;
                            'number' != typeof t ||
                                t < 0 ||
                                f({
                                    type: l.G.SET_FOCUSED_INDEX,
                                    index: t
                                });
                        })
                );
            i.useEffect(() => () => S.clean(), [S]);
            let j = i.useCallback(
                    (e, t) => {
                        Z.current && p(e, t);
                    },
                    [p]
                ),
                [y, A] = i.useState(!0);
            i.useEffect(() => {
                if (y && !C) {
                    A(!1);
                    return;
                }
                j(v(t, u), u);
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
                            e && j(v(t, n), n);
                    },
                    [v, u, m, f, t, j]
                ),
                R = i.useCallback(
                    (e) => {
                        if (!Z.current) return;
                        if (s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), P();
                            return;
                        }
                        let n = (function (e) {
                            switch (e.key) {
                                case a.R8.ENTER:
                                case a.R8.SPACE:
                                    return a.Us.SELECT_FOCUSED_ITEM;
                                case a.R8.UP:
                                    return a.Us.NAVIGATE_UP;
                                case a.R8.DOWN:
                                    return a.Us.NAVIGATE_DOWN;
                                case a.R8.HOME:
                                    return a.Us.NAVIGATE_START;
                                case a.R8.END:
                                    return a.Us.NAVIGATE_END;
                            }
                        })(e);
                        switch (n) {
                            case a.Us.NAVIGATE_UP:
                            case a.Us.NAVIGATE_DOWN:
                            case a.Us.NAVIGATE_START:
                            case a.Us.NAVIGATE_END:
                                e.preventDefault(), e.stopPropagation(), f({ type: n });
                                return;
                            case a.Us.SELECT_FOCUSED_ITEM:
                                let i = c(o(v, t, u));
                                if ((null == i ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), f({ type: n }), null != h)) {
                                    h(u);
                                    return;
                                }
                                null == i || i.click();
                        }
                    },
                    [v, t, f, u, P, h]
                ),
                M = i.useCallback(() => {
                    N || T(!0);
                }, [N]),
                L = i.useCallback(() => {
                    !N && (g ? j(v(t, u), u) : P(!0));
                }, [v, t, j, g, N, u, P]),
                k = i.useCallback(
                    (e) => {
                        !e.currentTarget.contains(e.relatedTarget) &&
                            requestAnimationFrame(() => {
                                if (null == c(o(v, t, u))) {
                                    j(t);
                                    return;
                                }
                                T(!1);
                            });
                    },
                    [v, t, u, j]
                ),
                O = i.useRef(null);
            i.useLayoutEffect(() => {
                let e = O.current;
                if (null != e)
                    return (
                        e.addEventListener('focusin', M),
                        e.addEventListener('focus', L),
                        e.addEventListener('focusout', k),
                        () => {
                            e.removeEventListener('focusin', M), e.removeEventListener('focus', L), e.removeEventListener('focusout', k);
                        }
                    );
            }, [L, M, k]);
            let D = i.useCallback(
                    () => ({
                        role: 'list',
                        tabIndex: N && g ? -1 : 0,
                        id: t,
                        onKeyDown: R,
                        ref: O
                    }),
                    [t, N, R, g]
                ),
                w = i.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: 'listitem',
                            'aria-setsize': _ ? I.current : void 0,
                            'aria-posinset': _ ? n + 1 : void 0,
                            id: v(t, n),
                            tabIndex: g && n === u ? 0 : -1,
                            onFocus: S.get(null != b.current ? v(t, n) : n)
                        };
                    },
                    [v, t, u, g, S, _]
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
            dispatch: N,
            onSelect: h,
            setFocus: p,
            getNewFocusIndex: m,
            maintainFocusPosition: f,
            includeSetSizes: g,
            focusOnMount: _,
            enabled: C
        })
    );
}
