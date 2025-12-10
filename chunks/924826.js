n.d(t, { ZP: () => u }), n(388685);
var r = n(473749),
    i = n(372817),
    a = n(25441),
    o = n(585627),
    s = n(536895),
    l = n(260866);
function c(e, t) {
    var n;
    return Array.from(
        (null != (n = t.current) ? n : document).querySelectorAll("[".concat(l.ie, '^="').concat(e, '"]')),
    );
}
function u(e) {
    let {
            id: t,
            defaultFocused: n,
            isEnabled: u,
            scrollToStart: d,
            scrollToEnd: f,
            onNavigatePreviousAtStart: p,
            onNavigateNextAtEnd: _,
            setFocus: m,
            setFocusOnList: h,
            preserveFocusPosition: g = !0,
            useVirtualFocus: E = !1,
            wrap: b = !1,
            orientation: y = s.hy.VERTICAL,
            disableClickOnSpace: O = !1,
        } = e,
        v = r.useRef(n ? (0, l.jb)(t, n) : null),
        S = r.useRef(!1),
        I = r.useRef(null),
        T = r.useRef(u);
    function C(e) {
        var t;
        return (null != (t = I.current) ? t : document).querySelector(e);
    }
    function A(e) {
        var t;
        null == (t = C(e)) || t.focus();
    }
    r.useLayoutEffect(() => {
        T.current = u;
    }, [u]);
    let N = r.useCallback(
            (e, t) => {
                T.current && (null != m ? m : A)(e, t);
            },
            [m],
        ),
        P = r.useCallback(
            (e) => {
                T.current && (null != h ? h : A)(e);
            },
            [h],
        ),
        R = r.useCallback(
            (e) => {
                if (((v.current = e), null == e)) return void (0, a.h)(t, null, g);
                let n = (0, l.P1)(e),
                    r = (0, l.x3)(e);
                N(n, r), (0, a.h)(t, r, g);
            },
            [t, g, N],
        ),
        D = r.useMemo(
            () =>
                (0, i.E)({
                    getFocusableElements: () => c(t, I),
                    getActiveElement() {
                        var e;
                        return null == (e = I.current) ? void 0 : e.ownerDocument.activeElement;
                    },
                    scrollToStart: d,
                    scrollToEnd: f,
                }),
            [t, d, f],
        ),
        [w, x] = r.useState(!1),
        L = r.useRef(w);
    r.useLayoutEffect(() => {
        L.current = w;
    }, [w]),
        r.useLayoutEffect(() => {
            let e = I.current;
            if (null != e && u)
                return (
                    e.addEventListener("focusin", n),
                    e.addEventListener("focusout", r),
                    e.addEventListener("focus", i),
                    e.addEventListener("scroll", a, { passive: !0 }),
                    () => {
                        e.removeEventListener("focusin", n),
                            e.removeEventListener("focusout", r),
                            e.removeEventListener("focus", i),
                            e.removeEventListener("scroll", a);
                    }
                );
            function n() {
                x(!0);
            }
            function r(e) {
                e.currentTarget.contains(e.relatedTarget) ||
                    (x(!1),
                    requestAnimationFrame(() => {
                        let e = v.current;
                        null !== e && null == C((0, l.P1)(e)) && P((0, l.P1)(t, l.kn));
                    }));
            }
            async function i() {
                let e = I.current;
                if (L.current || null == e) return;
                let n = v.current;
                if (g && null !== n) {
                    let t = (0, l.P1)(n),
                        r = C(t);
                    if (null != r) {
                        if (!0 !== S.current) return N(t, (0, l.x3)(n));
                        else if (await (0, o.JJ)(e, r)) return N(t, (0, l.x3)(n));
                    }
                }
                let r = await (0, o.KG)(e, c(t, I));
                null !== r && R(r);
            }
            function a() {
                S.current = !0;
            }
        }, [u, t, g, N, h, P, R]);
    let j = r.useMemo(
            () => ({
                wrap: b,
                get from() {
                    if (!E) return;
                    let t = v.current;
                    if (null != t) {
                        var e;
                        return null != (e = C((0, l.P1)(t))) ? e : void 0;
                    }
                    return;
                },
            }),
            [E, b],
        ),
        M = r.useCallback(async () => {
            let e = await D.getNextFocusableElement(j),
                t = null == e ? void 0 : e.getAttribute(l.ie);
            null != t ? R(t) : null == e && null != _ && _();
        }, [D, j, _, R]),
        k = r.useCallback(async () => {
            let e = await D.getPreviousFocusableElement(j),
                t = null == e ? void 0 : e.getAttribute(l.ie);
            null != t ? R(t) : null == e && null != p && p();
        }, [D, j, p, R]),
        U = r.useCallback(
            (e) => {
                if (!T.current || (!E && !L.current)) return;
                let n = y === s.hy.HORIZONTAL ? s.R8.RIGHT : s.R8.DOWN,
                    r = y === s.hy.HORIZONTAL ? s.R8.LEFT : s.R8.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), M();
                        return;
                    case r:
                        e.stopPropagation(), e.preventDefault(), k();
                        return;
                    case s.R8.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            d().then(() => {
                                var e;
                                let n = null == (e = c(t, I)[0]) ? void 0 : e.getAttribute(l.ie);
                                null != n && R(n);
                            });
                        return;
                    case s.R8.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            f().then(() => {
                                var e;
                                let n = c(t, I),
                                    r = null == (e = n[n.length - 1]) ? void 0 : e.getAttribute(l.ie);
                                null != r && R(r);
                            });
                        return;
                    case s.R8.SPACE:
                    case s.R8.ENTER: {
                        if ((e.key === s.R8.SPACE && O) || e.repeat) return;
                        let t = v.current;
                        if (null != t) {
                            var i;
                            let n = C((0, l.P1)(t)),
                                r = null != (i = null == n ? void 0 : n.ownerDocument) ? i : document,
                                a = E || n === r.activeElement;
                            null != n && a && (e.preventDefault(), e.stopPropagation(), null == n || n.click());
                        }
                    }
                }
            },
            [M, k, t, y, f, d, R, E],
        ),
        G = r.useCallback(
            (e) => {
                (v.current = null != e ? (0, l.jb)(t, e) : null), (0, a.h)(t, e, g);
            },
            [t, g],
        );
    return r.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: U,
                ref: I,
                tabIndex: w && g ? -1 : 0,
            },
            orientation: y,
            setFocus: G,
            async focusLastVisibleItem() {
                var e;
                let n = await (0, o.jo)(null != (e = I.current) ? e : document.body, c(t, I));
                null !== n && R(n);
            },
            async focusFirstVisibleItem() {
                var e;
                let n = await (0, o.KG)(null != (e = I.current) ? e : document.body, c(t, I));
                null !== n && R(n);
            },
            focusPreviousItem: k,
            focusNextItem: M,
            focusedItemId() {
                let e = v.current;
                return e ? (0, l.x3)(e) : null;
            },
        }),
        [t, U, y, w, g, G, k, M, R],
    );
}
