n.d(t, { ZP: () => c }), n(47120);
var i = n(192379),
    r = n(372817),
    a = n(25441),
    s = n(585627),
    o = n(536895),
    l = n(260866);
function u(e, t) {
    var n;
    return Array.from((null !== (n = t.current) && void 0 !== n ? n : document).querySelectorAll('['.concat(l.ie, '^="').concat(e, '"]')));
}
function c(e) {
    let { id: t, defaultFocused: n, isEnabled: c, scrollToStart: d, scrollToEnd: f, onNavigatePreviousAtStart: _, onNavigateNextAtEnd: p, setFocus: h, setFocusOnList: m, preserveFocusPosition: g = !0, useVirtualFocus: E = !1, wrap: v = !1, orientation: y = o.hy.VERTICAL, disableClickOnSpace: I = !1 } = e,
        T = i.useRef(n ? (0, l.jb)(t, n) : null),
        b = i.useRef(!1),
        S = i.useRef(null),
        A = i.useRef(c);
    function N(e) {
        var t;
        return (null !== (t = S.current) && void 0 !== t ? t : document).querySelector(e);
    }
    function C(e) {
        var t;
        null === (t = N(e)) || void 0 === t || t.focus();
    }
    i.useLayoutEffect(() => {
        A.current = c;
    }, [c]);
    let R = i.useCallback(
            (e, t) => {
                A.current && (null != h ? h : C)(e, t);
            },
            [h]
        ),
        O = i.useCallback(
            (e) => {
                A.current && (null != m ? m : C)(e);
            },
            [m]
        ),
        D = i.useCallback(
            (e) => {
                if (((T.current = e), null == e)) {
                    (0, a.h)(t, null, g);
                    return;
                }
                let n = (0, l.P1)(e),
                    i = (0, l.x3)(e);
                R(n, i), (0, a.h)(t, i, g);
            },
            [t, g, R]
        ),
        L = i.useMemo(
            () =>
                (0, r.E)({
                    getFocusableElements: () => u(t, S),
                    getActiveElement() {
                        var e;
                        return null === (e = S.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
                    },
                    scrollToStart: d,
                    scrollToEnd: f
                }),
            [t, d, f]
        ),
        [x, P] = i.useState(!1),
        w = i.useRef(x);
    i.useLayoutEffect(() => {
        w.current = x;
    }, [x]),
        i.useLayoutEffect(() => {
            let e = S.current;
            if (null != e) {
                if (!c) return;
                return (
                    e.addEventListener('focusin', n),
                    e.addEventListener('focusout', i),
                    e.addEventListener('focus', r),
                    e.addEventListener('scroll', a, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', i), e.removeEventListener('focus', r), e.removeEventListener('scroll', a);
                    }
                );
            }
            function n() {
                P(!0);
            }
            function i(e) {
                !e.currentTarget.contains(e.relatedTarget) &&
                    (P(!1),
                    requestAnimationFrame(() => {
                        let e = T.current;
                        null !== e && null == N((0, l.P1)(e)) && O((0, l.P1)(t, l.kn));
                    }));
            }
            async function r() {
                let e = S.current;
                if (w.current || null == e) return;
                let n = T.current;
                if (g && null !== n) {
                    let t = (0, l.P1)(n),
                        i = N(t);
                    if (null != i && (!0 !== b.current || (await (0, s.JJ)(e, i)))) return R(t, (0, l.x3)(n));
                }
                let i = await (0, s.KG)(e, u(t, S));
                null !== i && D(i);
            }
            function a() {
                b.current = !0;
            }
        }, [c, t, g, R, m, O, D]);
    let M = i.useMemo(
            () => ({
                wrap: v,
                get from() {
                    if (!E) return;
                    let t = T.current;
                    if (null != t) {
                        var e;
                        return null !== (e = N((0, l.P1)(t))) && void 0 !== e ? e : void 0;
                    }
                    return;
                }
            }),
            [E, v]
        ),
        k = i.useCallback(async () => {
            let e = await L.getNextFocusableElement(M),
                t = null == e ? void 0 : e.getAttribute(l.ie);
            null != t ? D(t) : null == e && null != p && p();
        }, [L, M, p, D]),
        U = i.useCallback(async () => {
            let e = await L.getPreviousFocusableElement(M),
                t = null == e ? void 0 : e.getAttribute(l.ie);
            null != t ? D(t) : null == e && null != _ && _();
        }, [L, M, _, D]),
        G = i.useCallback(
            (e) => {
                if (!A.current || (!E && !w.current)) return;
                let n = y === o.hy.HORIZONTAL ? o.R8.RIGHT : o.R8.DOWN,
                    i = y === o.hy.HORIZONTAL ? o.R8.LEFT : o.R8.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), k();
                        return;
                    case i:
                        e.stopPropagation(), e.preventDefault(), U();
                        return;
                    case o.R8.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            d().then(() => {
                                var e;
                                let n = null === (e = u(t, S)[0]) || void 0 === e ? void 0 : e.getAttribute(l.ie);
                                null != n && D(n);
                            });
                        return;
                    case o.R8.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            f().then(() => {
                                var e;
                                let n = u(t, S),
                                    i = null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.getAttribute(l.ie);
                                null != i && D(i);
                            });
                        return;
                    case o.R8.SPACE:
                    case o.R8.ENTER: {
                        if ((e.key === o.R8.SPACE && I) || e.repeat) return;
                        let t = T.current;
                        if (null != t) {
                            var r;
                            let n = N((0, l.P1)(t)),
                                i = null !== (r = null == n ? void 0 : n.ownerDocument) && void 0 !== r ? r : document,
                                a = E || n === i.activeElement;
                            null != n && a && (e.preventDefault(), e.stopPropagation(), null == n || n.click());
                        }
                    }
                }
            },
            [k, U, t, y, f, d, D, E]
        ),
        B = i.useCallback(
            (e) => {
                let n = null != e ? (0, l.jb)(t, e) : null;
                (T.current = n), (0, a.h)(t, e, g);
            },
            [t, g]
        );
    return i.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: G,
                ref: S,
                tabIndex: x && g ? -1 : 0
            },
            orientation: y,
            setFocus: B,
            async focusLastVisibleItem() {
                var e;
                let n = await (0, s.jo)(null !== (e = S.current) && void 0 !== e ? e : document.body, u(t, S));
                null !== n && D(n);
            },
            async focusFirstVisibleItem() {
                var e;
                let n = await (0, s.KG)(null !== (e = S.current) && void 0 !== e ? e : document.body, u(t, S));
                null !== n && D(n);
            },
            focusPreviousItem: U,
            focusNextItem: k,
            focusedItemId() {
                let e = T.current;
                return e ? (0, l.x3)(e) : null;
            }
        }),
        [t, G, y, x, g, B, U, k, D]
    );
}
