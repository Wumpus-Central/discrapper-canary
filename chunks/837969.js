t.d(e, { ZP: () => c }), t(388685);
var n = t(647438),
    r = t(714319),
    l = t(536895),
    i = t(260866);
let a = [l.R8.TAB, l.R8.UP, l.R8.DOWN];
function s(A, e, t) {
    return null != t ? "#".concat(A(e, t)) : "#".concat(e);
}
function o(A) {
    return document.querySelector(A);
}
function g(A) {
    var e;
    null == (e = document.getElementById(A)) || e.focus();
}
function c(A) {
    let {
            navId: e,
            itemCount: t,
            focusedIndex: c = 0,
            onSelect: f,
            setFocus: v,
            getNewFocusIndex: u,
            maintainFocusPosition: h = !0,
            includeSetSizes: d = !0,
            focusOnMount: E = !0,
            enabled: C = !0,
            onDispatch: B,
        } = A,
        w = n.useCallback(
            (A, e) => {
                let t = (0, r.Z)(A, e);
                return null != B && B(A, t, e), t;
            },
            [B],
        ),
        [D, M] = n.useReducer(w, {
            focusedIndex: c,
            itemCount: t,
        }),
        { itemCount: p, focusedIndex: I } = D,
        [H] = n.useState(() => (0, i.P2)(M, 16));
    return (
        n.useEffect(() => {
            M({
                type: r.G.UPDATE_ITEM_COUNT,
                itemCount: t,
            });
        }, [t]),
        (function (A) {
            let {
                    navId: e,
                    itemCount: t,
                    focusedIndex: c,
                    onSelect: f,
                    setFocus: v = g,
                    getNewFocusIndex: u,
                    dispatch: h,
                    maintainFocusPosition: d,
                    includeSetSizes: E,
                    focusOnMount: C,
                    enabled: B,
                    makeId: w = i.qR,
                    getIndexFromId: D,
                } = A,
                M = n.useRef(t),
                p = n.useRef(D);
            (p.current = D), (M.current = t);
            let I = n.useRef(B);
            n.useEffect(() => {
                I.current = B;
            }, [B]);
            let [H, b] = n.useState(!1),
                [O] = n.useState(
                    () =>
                        new i.$o((A) => () => {
                            let e = null != p.current && "string" == typeof A ? p.current(A) : A;
                            "number" != typeof e ||
                                e < 0 ||
                                h({
                                    type: r.G.SET_FOCUSED_INDEX,
                                    index: e,
                                });
                        }),
                );
            n.useEffect(() => () => O.clean(), [O]);
            let Q = n.useCallback(
                    (A, e) => {
                        I.current && v(A, e);
                    },
                    [v],
                ),
                [P, j] = n.useState(!0);
            n.useEffect(() => {
                if (P && !C) return void j(!1);
                Q(w(e, c), c);
            }, [c]);
            let V = n.useCallback(
                    function () {
                        let A = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            t = null != u ? u(c) : c;
                        t !== c &&
                            h({
                                type: r.G.SET_FOCUSED_INDEX,
                                index: t,
                            }),
                            A && Q(w(e, t), t);
                    },
                    [w, c, u, h, e, Q],
                ),
                m = n.useCallback(
                    (A) => {
                        if (!I.current) return;
                        if (
                            a.includes(A.key) &&
                            !(A.shiftKey || A.altKey || A.metaKey || A.ctrlKey) &&
                            A.currentTarget === A.target
                        ) {
                            A.preventDefault(), A.stopPropagation(), V();
                            return;
                        }
                        let t = (function (A) {
                            switch (A.key) {
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
                        })(A);
                        switch (t) {
                            case l.Us.NAVIGATE_UP:
                            case l.Us.NAVIGATE_DOWN:
                            case l.Us.NAVIGATE_START:
                            case l.Us.NAVIGATE_END:
                                A.preventDefault(), A.stopPropagation(), h({ type: t });
                                return;
                            case l.Us.SELECT_FOCUSED_ITEM:
                                let n = o(s(w, e, c));
                                if ((null == n ? void 0 : n.ownerDocument.activeElement) !== n || A.repeat) return;
                                if ((A.preventDefault(), A.stopPropagation(), h({ type: t }), null != f))
                                    return void f(c);
                                null == n || n.click();
                        }
                    },
                    [w, e, h, c, V, f],
                ),
                T = n.useCallback(() => {
                    H || b(!0);
                }, [H]),
                y = n.useCallback(() => {
                    H || (d ? Q(w(e, c), c) : V(!0));
                }, [w, e, Q, d, H, c, V]),
                L = n.useCallback(
                    (A) => {
                        A.currentTarget.contains(A.relatedTarget) ||
                            requestAnimationFrame(() => {
                                if (null == o(s(w, e, c))) return void Q(e);
                                b(!1);
                            });
                    },
                    [w, e, c, Q],
                ),
                x = n.useRef(null);
            n.useLayoutEffect(() => {
                let A = x.current;
                if (null != A)
                    return (
                        A.addEventListener("focusin", T),
                        A.addEventListener("focus", y),
                        A.addEventListener("focusout", L),
                        () => {
                            A.removeEventListener("focusin", T),
                                A.removeEventListener("focus", y),
                                A.removeEventListener("focusout", L);
                        }
                    );
            }, [y, T, L]);
            let N = n.useCallback(
                    () => ({
                        role: "list",
                        tabIndex: H && d ? -1 : 0,
                        id: e,
                        onKeyDown: m,
                        ref: x,
                    }),
                    [e, H, m, d],
                ),
                Z = n.useCallback(
                    (A) => {
                        let { index: t } = A;
                        return {
                            role: "listitem",
                            "aria-setsize": E ? M.current : void 0,
                            "aria-posinset": E ? t + 1 : void 0,
                            id: w(e, t),
                            tabIndex: d && t === c ? 0 : -1,
                            onFocus: O.get(null != p.current ? w(e, t) : t),
                        };
                    },
                    [w, e, c, d, O, E],
                );
            return n.useMemo(
                () => ({
                    dispatch: h,
                    getContainerProps: N,
                    getItemProps: Z,
                }),
                [h, N, Z],
            );
        })({
            navId: e,
            itemCount: p,
            focusedIndex: I,
            dispatch: H,
            onSelect: f,
            setFocus: v,
            getNewFocusIndex: u,
            maintainFocusPosition: h,
            includeSetSizes: d,
            focusOnMount: E,
            enabled: C,
        })
    );
}
