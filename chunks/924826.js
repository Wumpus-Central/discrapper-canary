r.d(n, {
    ZP: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(372817),
    o = r(25441),
    l = r(585627),
    u = r(536895),
    c = r(260866);
function d(e, n) {
    var r;
    return Array.from((null !== (r = n.current) && void 0 !== r ? r : document).querySelectorAll('['.concat(c.ie, '^="').concat(e, '"]')));
}
function f(e) {
    let { id: n, defaultFocused: r, isEnabled: i, scrollToStart: f, scrollToEnd: _, onNavigatePreviousAtStart: h, onNavigateNextAtEnd: p, setFocus: m, setFocusOnList: g, preserveFocusPosition: E = !0, useVirtualFocus: v = !1, wrap: I = !1, orientation: T = u.hy.VERTICAL, disableClickOnSpace: b = !1 } = e,
        y = a.useRef(r ? (0, c.jb)(n, r) : null),
        S = a.useRef(!1),
        A = a.useRef(null),
        N = a.useRef(i);
    function C(e) {
        var n;
        return (null !== (n = A.current) && void 0 !== n ? n : document).querySelector(e);
    }
    function R(e) {
        var n;
        null === (n = C(e)) || void 0 === n || n.focus();
    }
    a.useLayoutEffect(() => {
        N.current = i;
    }, [i]);
    let O = a.useCallback(
            (e, n) => {
                N.current && (null != m ? m : R)(e, n);
            },
            [m]
        ),
        D = a.useCallback(
            (e) => {
                N.current && (null != g ? g : R)(e);
            },
            [g]
        ),
        L = a.useCallback(
            (e) => {
                if (((y.current = e), null == e)) {
                    (0, o.h)(n, null, E);
                    return;
                }
                let r = (0, c.P1)(e),
                    i = (0, c.x3)(e);
                O(r, i), (0, o.h)(n, i, E);
            },
            [n, E, O]
        ),
        x = a.useMemo(
            () =>
                (0, s.E)({
                    getFocusableElements: () => d(n, A),
                    getActiveElement() {
                        var e;
                        return null === (e = A.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
                    },
                    scrollToStart: f,
                    scrollToEnd: _
                }),
            [n, f, _]
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
                    e.addEventListener('focus', s),
                    e.addEventListener('scroll', o, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', r), e.removeEventListener('focusout', a), e.removeEventListener('focus', s), e.removeEventListener('scroll', o);
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
                            let e = y.current;
                            null !== e && null == C((0, c.P1)(e)) && D((0, c.P1)(n, c.kn));
                        });
            }
            async function s() {
                let e = A.current;
                if (M.current || null == e) return;
                let r = y.current;
                if (E && null !== r) {
                    let n = (0, c.P1)(r),
                        i = C(n);
                    if (null != i) {
                        if (!0 !== S.current) return O(n, (0, c.x3)(r));
                        if (await (0, l.JJ)(e, i)) return O(n, (0, c.x3)(r));
                    }
                }
                let i = await (0, l.KG)(e, d(n, A));
                null !== i && L(i);
            }
            function o() {
                S.current = !0;
            }
        }, [i, n, E, O, g, D, L]);
    let k = a.useMemo(
            () => ({
                wrap: I,
                get from() {
                    if (!v) return;
                    let n = y.current;
                    if (null != n) {
                        var e;
                        return null !== (e = C((0, c.P1)(n))) && void 0 !== e ? e : void 0;
                    }
                    return;
                }
            }),
            [v, I]
        ),
        U = a.useCallback(async () => {
            let e = await x.getNextFocusableElement(k),
                n = null == e ? void 0 : e.getAttribute(c.ie);
            null != n ? L(n) : null == e && null != p && p();
        }, [x, k, p, L]),
        B = a.useCallback(async () => {
            let e = await x.getPreviousFocusableElement(k),
                n = null == e ? void 0 : e.getAttribute(c.ie);
            null != n ? L(n) : null == e && null != h && h();
        }, [x, k, h, L]),
        G = a.useCallback(
            (e) => {
                if (!N.current || (!v && !M.current)) return;
                let r = T === u.hy.HORIZONTAL ? u.R8.RIGHT : u.R8.DOWN,
                    i = T === u.hy.HORIZONTAL ? u.R8.LEFT : u.R8.UP;
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
                                null != r && L(r);
                            });
                        return;
                    case u.R8.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            _().then(() => {
                                var e;
                                let r = d(n, A),
                                    i = null === (e = r[r.length - 1]) || void 0 === e ? void 0 : e.getAttribute(c.ie);
                                null != i && L(i);
                            });
                        return;
                    case u.R8.SPACE:
                    case u.R8.ENTER: {
                        if ((e.key === u.R8.SPACE && b) || e.repeat) return;
                        let n = y.current;
                        if (null != n) {
                            var a;
                            let r = C((0, c.P1)(n)),
                                i = null !== (a = null == r ? void 0 : r.ownerDocument) && void 0 !== a ? a : document,
                                s = v || r === i.activeElement;
                            null != r && s && (e.preventDefault(), e.stopPropagation(), null == r || r.click());
                        }
                    }
                }
            },
            [U, B, n, T, _, f, L, v]
        ),
        Z = a.useCallback(
            (e) => {
                let r = null != e ? (0, c.jb)(n, e) : null;
                (y.current = r), (0, o.h)(n, e, E);
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
            orientation: T,
            setFocus: Z,
            async focusLastVisibleItem() {
                var e;
                let r = await (0, l.jo)(null !== (e = A.current) && void 0 !== e ? e : document.body, d(n, A));
                null !== r && L(r);
            },
            async focusFirstVisibleItem() {
                var e;
                let r = await (0, l.KG)(null !== (e = A.current) && void 0 !== e ? e : document.body, d(n, A));
                null !== r && L(r);
            },
            focusPreviousItem: B,
            focusNextItem: U,
            focusedItemId() {
                let e = y.current;
                return e ? (0, c.x3)(e) : null;
            }
        }),
        [n, G, T, w, E, Z, B, U, L]
    );
}
