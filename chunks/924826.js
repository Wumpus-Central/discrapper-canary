n.d(t, { ZP: () => u }), n(47120);
var r = n(192379),
    i = n(372817),
    o = n(25441),
    a = n(585627),
    s = n(536895),
    l = n(260866);
function c(e, t) {
    var n;
    return Array.from((null != (n = t.current) ? n : document).querySelectorAll('['.concat(l.ie, '^="').concat(e, '"]')));
}
function u(e) {
    let { id: t, defaultFocused: n, isEnabled: u, scrollToStart: d, scrollToEnd: f, onNavigatePreviousAtStart: _, onNavigateNextAtEnd: p, setFocus: h, setFocusOnList: m, preserveFocusPosition: g = !0, useVirtualFocus: E = !1, wrap: b = !1, orientation: y = s.hy.VERTICAL, disableClickOnSpace: v = !1 } = e,
        O = r.useRef(n ? (0, l.jb)(t, n) : null),
        I = r.useRef(!1),
        S = r.useRef(null),
        T = r.useRef(u);
    function N(e) {
        var t;
        return (null != (t = S.current) ? t : document).querySelector(e);
    }
    function A(e) {
        var t;
        null == (t = N(e)) || t.focus();
    }
    r.useLayoutEffect(() => {
        T.current = u;
    }, [u]);
    let C = r.useCallback(
            (e, t) => {
                T.current && (null != h ? h : A)(e, t);
            },
            [h]
        ),
        R = r.useCallback(
            (e) => {
                T.current && (null != m ? m : A)(e);
            },
            [m]
        ),
        P = r.useCallback(
            (e) => {
                if (((O.current = e), null == e)) return void (0, o.h)(t, null, g);
                let n = (0, l.P1)(e),
                    r = (0, l.x3)(e);
                C(n, r), (0, o.h)(t, r, g);
            },
            [t, g, C]
        ),
        w = r.useMemo(
            () =>
                (0, i.E)({
                    getFocusableElements: () => c(t, S),
                    getActiveElement() {
                        var e;
                        return null == (e = S.current) ? void 0 : e.ownerDocument.activeElement;
                    },
                    scrollToStart: d,
                    scrollToEnd: f
                }),
            [t, d, f]
        ),
        [D, L] = r.useState(!1),
        x = r.useRef(D);
    r.useLayoutEffect(() => {
        x.current = D;
    }, [D]),
        r.useLayoutEffect(() => {
            let e = S.current;
            if (null != e && u)
                return (
                    e.addEventListener('focusin', n),
                    e.addEventListener('focusout', r),
                    e.addEventListener('focus', i),
                    e.addEventListener('scroll', o, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', r), e.removeEventListener('focus', i), e.removeEventListener('scroll', o);
                    }
                );
            function n() {
                L(!0);
            }
            function r(e) {
                e.currentTarget.contains(e.relatedTarget) ||
                    (L(!1),
                    requestAnimationFrame(() => {
                        let e = O.current;
                        null !== e && null == N((0, l.P1)(e)) && R((0, l.P1)(t, l.kn));
                    }));
            }
            async function i() {
                let e = S.current;
                if (x.current || null == e) return;
                let n = O.current;
                if (g && null !== n) {
                    let t = (0, l.P1)(n),
                        r = N(t);
                    if (null != r) {
                        if (!0 !== I.current) return C(t, (0, l.x3)(n));
                        else if (await (0, a.JJ)(e, r)) return C(t, (0, l.x3)(n));
                    }
                }
                let r = await (0, a.KG)(e, c(t, S));
                null !== r && P(r);
            }
            function o() {
                I.current = !0;
            }
        }, [u, t, g, C, m, R, P]);
    let M = r.useMemo(
            () => ({
                wrap: b,
                get from() {
                    if (!E) return;
                    let t = O.current;
                    if (null != t) {
                        var e;
                        return null != (e = N((0, l.P1)(t))) ? e : void 0;
                    }
                    return;
                }
            }),
            [E, b]
        ),
        k = r.useCallback(async () => {
            let e = await w.getNextFocusableElement(M),
                t = null == e ? void 0 : e.getAttribute(l.ie);
            null != t ? P(t) : null == e && null != p && p();
        }, [w, M, p, P]),
        j = r.useCallback(async () => {
            let e = await w.getPreviousFocusableElement(M),
                t = null == e ? void 0 : e.getAttribute(l.ie);
            null != t ? P(t) : null == e && null != _ && _();
        }, [w, M, _, P]),
        U = r.useCallback(
            (e) => {
                if (!T.current || (!E && !x.current)) return;
                let n = y === s.hy.HORIZONTAL ? s.R8.RIGHT : s.R8.DOWN,
                    r = y === s.hy.HORIZONTAL ? s.R8.LEFT : s.R8.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), k();
                        return;
                    case r:
                        e.stopPropagation(), e.preventDefault(), j();
                        return;
                    case s.R8.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            d().then(() => {
                                var e;
                                let n = null == (e = c(t, S)[0]) ? void 0 : e.getAttribute(l.ie);
                                null != n && P(n);
                            });
                        return;
                    case s.R8.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            f().then(() => {
                                var e;
                                let n = c(t, S),
                                    r = null == (e = n[n.length - 1]) ? void 0 : e.getAttribute(l.ie);
                                null != r && P(r);
                            });
                        return;
                    case s.R8.SPACE:
                    case s.R8.ENTER: {
                        if ((e.key === s.R8.SPACE && v) || e.repeat) return;
                        let t = O.current;
                        if (null != t) {
                            var i;
                            let n = N((0, l.P1)(t)),
                                r = null != (i = null == n ? void 0 : n.ownerDocument) ? i : document,
                                o = E || n === r.activeElement;
                            null != n && o && (e.preventDefault(), e.stopPropagation(), null == n || n.click());
                        }
                    }
                }
            },
            [k, j, t, y, f, d, P, E]
        ),
        G = r.useCallback(
            (e) => {
                (O.current = null != e ? (0, l.jb)(t, e) : null), (0, o.h)(t, e, g);
            },
            [t, g]
        );
    return r.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: U,
                ref: S,
                tabIndex: D && g ? -1 : 0
            },
            orientation: y,
            setFocus: G,
            async focusLastVisibleItem() {
                var e;
                let n = await (0, a.jo)(null != (e = S.current) ? e : document.body, c(t, S));
                null !== n && P(n);
            },
            async focusFirstVisibleItem() {
                var e;
                let n = await (0, a.KG)(null != (e = S.current) ? e : document.body, c(t, S));
                null !== n && P(n);
            },
            focusPreviousItem: j,
            focusNextItem: k,
            focusedItemId() {
                let e = O.current;
                return e ? (0, l.x3)(e) : null;
            }
        }),
        [t, U, y, D, g, G, j, k, P]
    );
}
