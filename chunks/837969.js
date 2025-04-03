n.d(t, { ZP: () => d }), n(47120);
var r = n(192379),
    i = n(714319),
    l = n(536895),
    o = n(260866);
let a = [l.R8.TAB, l.R8.UP, l.R8.DOWN];
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
    let { navId: t, itemCount: n, focusedIndex: d = 0, onSelect: p, setFocus: h, getNewFocusIndex: f, maintainFocusPosition: m = !0, includeSetSizes: g = !0, focusOnMount: b = !0, enabled: _ = !0, onDispatch: C } = e,
        y = r.useCallback(
            (e, t) => {
                let n = (0, i.Z)(e, t);
                return null != C && C(e, n, t), n;
            },
            [C]
        ),
        [x, v] = r.useReducer(y, {
            focusedIndex: d,
            itemCount: n
        }),
        { itemCount: j, focusedIndex: O } = x,
        [E] = r.useState(() => (0, o.P2)(v, 16));
    return (
        r.useEffect(() => {
            v({
                type: i.G.UPDATE_ITEM_COUNT,
                itemCount: n
            });
        }, [n]),
        (function (e) {
            let { navId: t, itemCount: n, focusedIndex: d, onSelect: p, setFocus: h = u, getNewFocusIndex: f, dispatch: m, maintainFocusPosition: g, includeSetSizes: b, focusOnMount: _, enabled: C, makeId: y = o.qR, getIndexFromId: x } = e,
                v = r.useRef(n),
                j = r.useRef(x);
            (j.current = x), (v.current = n);
            let O = r.useRef(C);
            r.useEffect(() => {
                O.current = C;
            }, [C]);
            let [E, N] = r.useState(!1),
                [I] = r.useState(
                    () =>
                        new o.$o((e) => () => {
                            let t = null != j.current && 'string' == typeof e ? j.current(e) : e;
                            'number' != typeof t ||
                                t < 0 ||
                                m({
                                    type: i.G.SET_FOCUSED_INDEX,
                                    index: t
                                });
                        })
                );
            r.useEffect(() => () => I.clean(), [I]);
            let P = r.useCallback(
                    (e, t) => {
                        O.current && h(e, t);
                    },
                    [h]
                ),
                [S, Z] = r.useState(!0);
            r.useEffect(() => {
                if (S && !_) return void Z(!1);
                P(y(t, d), d);
            }, [d]);
            let T = r.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != f ? f(d) : d;
                        n !== d &&
                            m({
                                type: i.G.SET_FOCUSED_INDEX,
                                index: n
                            }),
                            e && P(y(t, n), n);
                    },
                    [y, d, f, m, t, P]
                ),
                A = r.useCallback(
                    (e) => {
                        if (!O.current) return;
                        if (a.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), T();
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
                                e.preventDefault(), e.stopPropagation(), m({ type: n });
                                return;
                            case l.Us.SELECT_FOCUSED_ITEM:
                                let r = c(s(y, t, d));
                                if ((null == r ? void 0 : r.ownerDocument.activeElement) !== r || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), m({ type: n }), null != p)) return void p(d);
                                null == r || r.click();
                        }
                    },
                    [y, t, m, d, T, p]
                ),
                w = r.useCallback(() => {
                    E || N(!0);
                }, [E]),
                R = r.useCallback(() => {
                    E || (g ? P(y(t, d), d) : T(!0));
                }, [y, t, P, g, E, d, T]),
                M = r.useCallback(
                    (e) => {
                        e.currentTarget.contains(e.relatedTarget) ||
                            requestAnimationFrame(() => {
                                if (null == c(s(y, t, d))) return void P(t);
                                N(!1);
                            });
                    },
                    [y, t, d, P]
                ),
                k = r.useRef(null);
            r.useLayoutEffect(() => {
                let e = k.current;
                if (null != e)
                    return (
                        e.addEventListener('focusin', w),
                        e.addEventListener('focus', R),
                        e.addEventListener('focusout', M),
                        () => {
                            e.removeEventListener('focusin', w), e.removeEventListener('focus', R), e.removeEventListener('focusout', M);
                        }
                    );
            }, [R, w, M]);
            let L = r.useCallback(
                    () => ({
                        role: 'list',
                        tabIndex: E && g ? -1 : 0,
                        id: t,
                        onKeyDown: A,
                        ref: k
                    }),
                    [t, E, A, g]
                ),
                D = r.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: 'listitem',
                            'aria-setsize': b ? v.current : void 0,
                            'aria-posinset': b ? n + 1 : void 0,
                            id: y(t, n),
                            tabIndex: g && n === d ? 0 : -1,
                            onFocus: I.get(null != j.current ? y(t, n) : n)
                        };
                    },
                    [y, t, d, g, I, b]
                );
            return r.useMemo(
                () => ({
                    dispatch: m,
                    getContainerProps: L,
                    getItemProps: D
                }),
                [m, L, D]
            );
        })({
            navId: t,
            itemCount: j,
            focusedIndex: O,
            dispatch: E,
            onSelect: p,
            setFocus: h,
            getNewFocusIndex: f,
            maintainFocusPosition: m,
            includeSetSizes: g,
            focusOnMount: b,
            enabled: _
        })
    );
}
