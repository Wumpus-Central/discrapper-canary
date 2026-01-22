n.d(t, { Ay: () => u }), n(896048);
var r = n(64700),
    i = n(52724),
    a = n(461771),
    s = n(963400),
    o = n(741918),
    l = n(602034);
function c(e, t) {
    var n;
    return Array.from(
        (null != (n = t.current) ? n : document).querySelectorAll("[".concat(l.eM, '^="').concat(e, '"]')),
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
            setFocus: h,
            setFocusOnList: m,
            preserveFocusPosition: g = !0,
            useVirtualFocus: E = !1,
            wrap: b = !1,
            orientation: y = o.Gl.VERTICAL,
            disableClickOnSpace: O = !1,
        } = e,
        A = r.useRef(n ? (0, l.t$)(t, n) : null),
        v = r.useRef(!1),
        S = r.useRef(null),
        I = r.useRef(u);
    function T(e) {
        var t;
        return (null != (t = S.current) ? t : document).querySelector(e);
    }
    function C(e) {
        var t;
        null == (t = T(e)) || t.focus();
    }
    r.useLayoutEffect(() => {
        I.current = u;
    }, [u]);
    let N = r.useCallback(
            (e, t) => {
                I.current && (null != h ? h : C)(e, t);
            },
            [h],
        ),
        R = r.useCallback(
            (e) => {
                I.current && (null != m ? m : C)(e);
            },
            [m],
        ),
        w = r.useCallback(
            (e) => {
                if (((A.current = e), null == e)) return void (0, a.T)(t, null, g);
                let n = (0, l.Mz)(e),
                    r = (0, l.HP)(e);
                N(n, r), (0, a.T)(t, r, g);
            },
            [t, g, N],
        ),
        P = r.useMemo(
            () =>
                (0, i.C)({
                    getFocusableElements: () => c(t, S),
                    getActiveElement() {
                        var e;
                        return null == (e = S.current) ? void 0 : e.ownerDocument.activeElement;
                    },
                    scrollToStart: d,
                    scrollToEnd: f,
                }),
            [t, d, f],
        ),
        [D, x] = r.useState(!1),
        L = r.useRef(D);
    r.useLayoutEffect(() => {
        L.current = D;
    }, [D]),
        r.useLayoutEffect(() => {
            let e = S.current;
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
                        let e = A.current;
                        null !== e && null == T((0, l.Mz)(e)) && R((0, l.Mz)(t, l.KE));
                    }));
            }
            async function i() {
                let e = S.current;
                if (L.current || null == e) return;
                let n = A.current;
                if (g && null !== n) {
                    let t = (0, l.Mz)(n),
                        r = T(t);
                    if (null != r) {
                        if (!0 !== v.current) return N(t, (0, l.HP)(n));
                        else if (await (0, s.UN)(e, r)) return N(t, (0, l.HP)(n));
                    }
                }
                let r = await (0, s.$b)(e, c(t, S));
                null !== r && w(r);
            }
            function a() {
                v.current = !0;
            }
        }, [u, t, g, N, m, R, w]);
    let j = r.useMemo(
            () => ({
                wrap: b,
                get from() {
                    if (!E) return;
                    let t = A.current;
                    if (null != t) {
                        var e;
                        return null != (e = T((0, l.Mz)(t))) ? e : void 0;
                    }
                    return;
                },
            }),
            [E, b],
        ),
        M = r.useCallback(async () => {
            let e = await P.getNextFocusableElement(j),
                t = null == e ? void 0 : e.getAttribute(l.eM);
            null != t ? w(t) : null == e && null != _ && _();
        }, [P, j, _, w]),
        k = r.useCallback(async () => {
            let e = await P.getPreviousFocusableElement(j),
                t = null == e ? void 0 : e.getAttribute(l.eM);
            null != t ? w(t) : null == e && null != p && p();
        }, [P, j, p, w]),
        U = r.useCallback(
            (e) => {
                if (!I.current || (!E && !L.current)) return;
                let n = y === o.Gl.HORIZONTAL ? o.D$.RIGHT : o.D$.DOWN,
                    r = y === o.Gl.HORIZONTAL ? o.D$.LEFT : o.D$.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), M();
                        return;
                    case r:
                        e.stopPropagation(), e.preventDefault(), k();
                        return;
                    case o.D$.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            d().then(() => {
                                var e;
                                let n = null == (e = c(t, S)[0]) ? void 0 : e.getAttribute(l.eM);
                                null != n && w(n);
                            });
                        return;
                    case o.D$.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            f().then(() => {
                                var e;
                                let n = c(t, S),
                                    r = null == (e = n[n.length - 1]) ? void 0 : e.getAttribute(l.eM);
                                null != r && w(r);
                            });
                        return;
                    case o.D$.SPACE:
                    case o.D$.ENTER: {
                        if ((e.key === o.D$.SPACE && O) || e.repeat) return;
                        let t = A.current;
                        if (null != t) {
                            var i;
                            let n = T((0, l.Mz)(t)),
                                r = null != (i = null == n ? void 0 : n.ownerDocument) ? i : document,
                                a = E || n === r.activeElement;
                            null != n && a && (e.preventDefault(), e.stopPropagation(), null == n || n.click());
                        }
                    }
                }
            },
            [M, k, t, y, f, d, w, E],
        ),
        G = r.useCallback(
            (e) => {
                (A.current = null != e ? (0, l.t$)(t, e) : null), (0, a.T)(t, e, g);
            },
            [t, g],
        );
    return r.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: U,
                ref: S,
                tabIndex: D && g ? -1 : 0,
            },
            orientation: y,
            setFocus: G,
            async focusLastVisibleItem() {
                var e;
                let n = await (0, s.FT)(null != (e = S.current) ? e : document.body, c(t, S));
                null !== n && w(n);
            },
            async focusFirstVisibleItem() {
                var e;
                let n = await (0, s.$b)(null != (e = S.current) ? e : document.body, c(t, S));
                null !== n && w(n);
            },
            focusPreviousItem: k,
            focusNextItem: M,
            focusedItemId() {
                let e = A.current;
                return e ? (0, l.HP)(e) : null;
            },
        }),
        [t, U, y, D, g, G, k, M, w],
    );
}
