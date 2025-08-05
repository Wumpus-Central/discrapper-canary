(n.d(t, { ZP: () => p }), n(388685));
var r = n(73800),
    i = n(714319),
    a = n(536895),
    o = n(260866);
let s = [a.R8.TAB, a.R8.UP, a.R8.DOWN];
function l(e) {
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
}
function c(e, t, n) {
    return null != n ? '#'.concat(e(t, n)) : '#'.concat(t);
}
function u(e) {
    return document.querySelector(e);
}
function d(e) {
    return (null == e ? void 0 : e.ownerDocument.activeElement) === e;
}
function f(e) {
    var t;
    null == (t = document.getElementById(e)) || t.focus();
}
function _(e) {
    let { navId: t, itemCount: n, focusedIndex: _, onSelect: p, setFocus: h = f, getNewFocusIndex: m, dispatch: g, maintainFocusPosition: E, includeSetSizes: b, focusOnMount: y, enabled: O, makeId: v = o.qR, getIndexFromId: I } = e,
        T = r.useRef(n),
        S = r.useRef(I);
    ((S.current = I), (T.current = n));
    let A = r.useRef(O);
    r.useEffect(() => {
        A.current = O;
    }, [O]);
    let [N, C] = r.useState(!1),
        [w] = r.useState(
            () =>
                new o.$o((e) => () => {
                    let t = null != S.current && 'string' == typeof e ? S.current(e) : e;
                    'number' != typeof t ||
                        t < 0 ||
                        g({
                            type: i.G.SET_FOCUSED_INDEX,
                            index: t
                        });
                })
        );
    r.useEffect(() => () => w.clean(), [w]);
    let R = r.useCallback(
            (e, t) => {
                A.current && h(e, t);
            },
            [h]
        ),
        [P, D] = r.useState(!0);
    r.useEffect(() => {
        if (P && !y) return void D(!1);
        R(v(t, _), _);
    }, [_]);
    let L = r.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    n = null != m ? m(_) : _;
                (n !== _ &&
                    g({
                        type: i.G.SET_FOCUSED_INDEX,
                        index: n
                    }),
                    e && R(v(t, n), n));
            },
            [v, _, m, g, t, R]
        ),
        x = r.useCallback(
            (e) => {
                if (!A.current) return;
                if (s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                    (e.preventDefault(), e.stopPropagation(), L());
                    return;
                }
                let n = l(e);
                switch (n) {
                    case a.Us.NAVIGATE_UP:
                    case a.Us.NAVIGATE_DOWN:
                    case a.Us.NAVIGATE_START:
                    case a.Us.NAVIGATE_END:
                        (e.preventDefault(), e.stopPropagation(), g({ type: n }));
                        return;
                    case a.Us.SELECT_FOCUSED_ITEM:
                        let r = u(c(v, t, _));
                        if (!d(r) || e.repeat) return;
                        if ((e.preventDefault(), e.stopPropagation(), g({ type: n }), null != p)) return void p(_);
                        null == r || r.click();
                }
            },
            [v, t, g, _, L, p]
        ),
        k = r.useCallback(() => {
            N || C(!0);
        }, [N]),
        j = r.useCallback(() => {
            N || (E ? R(v(t, _), _) : L(!0));
        }, [v, t, R, E, N, _, L]),
        M = r.useCallback(
            (e) => {
                e.currentTarget.contains(e.relatedTarget) ||
                    requestAnimationFrame(() => {
                        if (null == u(c(v, t, _))) return void R(t);
                        C(!1);
                    });
            },
            [v, t, _, R]
        ),
        U = r.useRef(null);
    r.useLayoutEffect(() => {
        let e = U.current;
        if (null != e)
            return (
                e.addEventListener('focusin', k),
                e.addEventListener('focus', j),
                e.addEventListener('focusout', M),
                () => {
                    (e.removeEventListener('focusin', k), e.removeEventListener('focus', j), e.removeEventListener('focusout', M));
                }
            );
    }, [j, k, M]);
    let G = r.useCallback(
            () => ({
                role: 'list',
                tabIndex: N && E ? -1 : 0,
                id: t,
                onKeyDown: x,
                ref: U
            }),
            [t, N, x, E]
        ),
        B = r.useCallback(
            (e) => {
                let { index: n } = e;
                return {
                    role: 'listitem',
                    'aria-setsize': b ? T.current : void 0,
                    'aria-posinset': b ? n + 1 : void 0,
                    id: v(t, n),
                    tabIndex: E && n === _ ? 0 : -1,
                    onFocus: w.get(null != S.current ? v(t, n) : n)
                };
            },
            [v, t, _, E, w, b]
        );
    return r.useMemo(
        () => ({
            dispatch: g,
            getContainerProps: G,
            getItemProps: B
        }),
        [g, G, B]
    );
}
function p(e) {
    let { navId: t, itemCount: n, focusedIndex: a = 0, onSelect: s, setFocus: l, getNewFocusIndex: c, maintainFocusPosition: u = !0, includeSetSizes: d = !0, focusOnMount: f = !0, enabled: p = !0, onDispatch: h } = e,
        m = r.useCallback(
            (e, t) => {
                let n = (0, i.Z)(e, t);
                return (null != h && h(e, n, t), n);
            },
            [h]
        ),
        [g, E] = r.useReducer(m, {
            focusedIndex: a,
            itemCount: n
        }),
        { itemCount: b, focusedIndex: y } = g,
        [O] = r.useState(() => (0, o.P2)(E, 16));
    return (
        r.useEffect(() => {
            E({
                type: i.G.UPDATE_ITEM_COUNT,
                itemCount: n
            });
        }, [n]),
        _({
            navId: t,
            itemCount: b,
            focusedIndex: y,
            dispatch: O,
            onSelect: s,
            setFocus: l,
            getNewFocusIndex: c,
            maintainFocusPosition: u,
            includeSetSizes: d,
            focusOnMount: f,
            enabled: p
        })
    );
}
