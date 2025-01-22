r.d(n, {
    ZP: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(372817),
    s = r(25441),
    l = r(585627),
    u = r(536895),
    c = r(260866);
function d(e, n) {
    var r;
    return Array.from((null !== (r = n.current) && void 0 !== r ? r : document).querySelectorAll('['.concat(c.ie, '^="').concat(e, '"]')));
}
function f(e) {
    let { id: n, defaultFocused: r, isEnabled: i, scrollToStart: f, scrollToEnd: p, onNavigatePreviousAtStart: h, onNavigateNextAtEnd: _, setFocus: m, setFocusOnList: g, preserveFocusPosition: E = !0, useVirtualFocus: v = !1, wrap: y = !1, orientation: b = u.hy.VERTICAL, disableClickOnSpace: I = !1 } = e,
        T = a.useRef(r ? (0, c.jb)(n, r) : null),
        S = a.useRef(!1),
        A = a.useRef(null),
        C = a.useRef(i);
    function N(e) {
        var n;
        return (null !== (n = A.current) && void 0 !== n ? n : document).querySelector(e);
    }
    function R(e) {
        var n;
        null === (n = N(e)) || void 0 === n || n.focus();
    }
    a.useLayoutEffect(() => {
        C.current = i;
    }, [i]);
    let O = a.useCallback(
            (e, n) => {
                C.current && (null != m ? m : R)(e, n);
            },
            [m]
        ),
        D = a.useCallback(
            (e) => {
                C.current && (null != g ? g : R)(e);
            },
            [g]
        ),
        x = a.useCallback(
            (e) => {
                if (((T.current = e), null == e)) {
                    (0, s.h)(n, null, E);
                    return;
                }
                let r = (0, c.P1)(e),
                    i = (0, c.x3)(e);
                O(r, i), (0, s.h)(n, i, E);
            },
            [n, E, O]
        ),
        L = a.useMemo(
            () =>
                (0, o.E)({
                    getFocusableElements: () => d(n, A),
                    getActiveElement() {
                        var e;
                        return null === (e = A.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
                    },
                    scrollToStart: f,
                    scrollToEnd: p
                }),
            [n, f, p]
        ),
        [w, P] = a.useState(!1),
        M = a.useRef(w);
    a.useLayoutEffect(() => {
        M.current = w;
    }, [w]),
        a.useLayoutEffect(() => {
            let e = A.current;
            if (null != e) {
                if (!i) return;
                return (
                    e.addEventListener('focusin', r),
                    e.addEventListener('focusout', a),
                    e.addEventListener('focus', o),
                    e.addEventListener('scroll', s, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', r), e.removeEventListener('focusout', a), e.removeEventListener('focus', o), e.removeEventListener('scroll', s);
                    }
                );
            }
            function r() {
                P(!0);
            }
            function a(e) {
                if (!e.currentTarget.contains(e.relatedTarget))
                    P(!1),
                        requestAnimationFrame(() => {
                            let e = T.current;
                            null !== e && null == N((0, c.P1)(e)) && D((0, c.P1)(n, c.kn));
                        });
            }
            async function o() {
                let e = A.current;
                if (M.current || null == e) return;
                let r = T.current;
                if (E && null !== r) {
                    let n = (0, c.P1)(r),
                        i = N(n);
                    if (null != i) {
                        if (!0 !== S.current) return O(n, (0, c.x3)(r));
                        if (await (0, l.JJ)(e, i)) return O(n, (0, c.x3)(r));
                    }
                }
                let i = await (0, l.KG)(e, d(n, A));
                null !== i && x(i);
            }
            function s() {
                S.current = !0;
            }
        }, [i, n, E, O, g, D, x]);
    let k = a.useMemo(
            () => ({
                wrap: y,
                get from() {
                    if (!v) return;
                    let n = T.current;
                    if (null != n) {
                        var e;
                        return null !== (e = N((0, c.P1)(n))) && void 0 !== e ? e : void 0;
                    }
                    return;
                }
            }),
            [v, y]
        ),
        U = a.useCallback(async () => {
            let e = await L.getNextFocusableElement(k),
                n = null == e ? void 0 : e.getAttribute(c.ie);
            null != n ? x(n) : null == e && null != _ && _();
        }, [L, k, _, x]),
        B = a.useCallback(async () => {
            let e = await L.getPreviousFocusableElement(k),
                n = null == e ? void 0 : e.getAttribute(c.ie);
            null != n ? x(n) : null == e && null != h && h();
        }, [L, k, h, x]),
        G = a.useCallback(
            (e) => {
                if (!C.current || (!v && !M.current)) return;
                let r = b === u.hy.HORIZONTAL ? u.R8.RIGHT : u.R8.DOWN,
                    i = b === u.hy.HORIZONTAL ? u.R8.LEFT : u.R8.UP;
                switch (e.key) {
                    case r:
                        e.stopPropagation(), e.preventDefault(), U();
                        return;
                    case i:
                        e.stopPropagation(), e.preventDefault(), B();
                        return;
                    case u.R8.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            f().then(() => {
                                var e;
                                let r = null === (e = d(n, A)[0]) || void 0 === e ? void 0 : e.getAttribute(c.ie);
                                null != r && x(r);
                            });
                        return;
                    case u.R8.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            p().then(() => {
                                var e;
                                let r = d(n, A),
                                    i = null === (e = r[r.length - 1]) || void 0 === e ? void 0 : e.getAttribute(c.ie);
                                null != i && x(i);
                            });
                        return;
                    case u.R8.SPACE:
                    case u.R8.ENTER: {
                        if ((e.key === u.R8.SPACE && I) || e.repeat) return;
                        let n = T.current;
                        if (null != n) {
                            var a;
                            let r = N((0, c.P1)(n)),
                                i = null !== (a = null == r ? void 0 : r.ownerDocument) && void 0 !== a ? a : document,
                                o = v || r === i.activeElement;
                            null != r && o && (e.preventDefault(), e.stopPropagation(), null == r || r.click());
                        }
                    }
                }
            },
            [U, B, n, b, p, f, x, v]
        ),
        Z = a.useCallback(
            (e) => {
                let r = null != e ? (0, c.jb)(n, e) : null;
                (T.current = r), (0, s.h)(n, e, E);
            },
            [n, E]
        );
    return a.useMemo(
        () => ({
            id: n,
            containerProps: {
                onKeyDown: G,
                ref: A,
                tabIndex: w && E ? -1 : 0
            },
            orientation: b,
            setFocus: Z,
            async focusLastVisibleItem() {
                var e;
                let r = await (0, l.jo)(null !== (e = A.current) && void 0 !== e ? e : document.body, d(n, A));
                null !== r && x(r);
            },
            async focusFirstVisibleItem() {
                var e;
                let r = await (0, l.KG)(null !== (e = A.current) && void 0 !== e ? e : document.body, d(n, A));
                null !== r && x(r);
            },
            focusPreviousItem: B,
            focusNextItem: U,
            focusedItemId() {
                let e = T.current;
                return e ? (0, c.x3)(e) : null;
            }
        }),
        [n, G, b, w, E, Z, B, U, x]
    );
}
