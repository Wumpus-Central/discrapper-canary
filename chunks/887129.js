n.d(t, { Ay: () => c });
var i = n(582128),
    r = n(52724),
    a = n(461771),
    s = n(602034);
function l(e, t) {
    return new Promise((n) => {
        let i = new IntersectionObserver(
            (e) => {
                let t = 0,
                    r = null;
                for (let { isIntersecting: a, intersectionRatio: l, target: o } of e) {
                    if (a && 1 === l) {
                        i.disconnect();
                        let e = o.getAttribute(s.eM);
                        if (null != e) return n(e);
                    }
                    l > t && ((t = l), (r = o.getAttribute(s.eM)));
                }
                i.disconnect(), n(r);
            },
            { root: e },
        );
        for (let e of t) i.observe(e);
    });
}
var o = n(741918);
function d(e, t) {
    return Array.from((t.current ?? document).querySelectorAll(`[${s.eM}^="${e}"]`));
}
function c(e) {
    let {
            id: t,
            defaultFocused: n,
            isEnabled: c,
            scrollToStart: u,
            scrollToEnd: _,
            onNavigatePreviousAtStart: E,
            onNavigateNextAtEnd: A,
            setFocus: h,
            setFocusOnList: I,
            preserveFocusPosition: f = !0,
            useVirtualFocus: p = !1,
            wrap: T = !1,
            orientation: m = o.Gl.VERTICAL,
            disableClickOnSpace: g = !1,
        } = e,
        S = i.useRef(n ? (0, s.t$)(t, n) : null),
        N = i.useRef(!1),
        C = i.useRef(null);
    i.useEffect(() => {
        null == S.current && null != n && (S.current = (0, s.t$)(t, n));
    }, [n, t]);
    let O = i.useRef(c);
    function R(e) {
        return (C.current ?? document).querySelector(e);
    }
    function L(e) {
        R(e)?.focus();
    }
    i.useLayoutEffect(() => {
        O.current = c;
    }, [c]);
    let y = i.useCallback(
            (e, t) => {
                O.current && (h ?? L)(e, t);
            },
            [h],
        ),
        D = i.useCallback(
            (e) => {
                O.current && (I ?? L)(e);
            },
            [I],
        ),
        v = i.useCallback(
            (e) => {
                if (((S.current = e), null == e)) return void (0, a.T)(t, null, f);
                let n = (0, s.Mz)(e),
                    i = (0, s.HP)(e);
                y(n, i), (0, a.T)(t, i, f);
            },
            [t, f, y],
        ),
        b = i.useMemo(
            () =>
                (0, r.C)({
                    getFocusableElements: () => d(t, C),
                    getActiveElement: () => C.current?.ownerDocument.activeElement,
                    scrollToStart: u,
                    scrollToEnd: _,
                }),
            [t, u, _],
        ),
        [M, P] = i.useState(!1),
        U = i.useRef(M);
    i.useLayoutEffect(() => {
        U.current = M;
    }, [M]),
        i.useLayoutEffect(() => {
            let e = C.current;
            if (null != e && c)
                return (
                    e.addEventListener("focusin", n),
                    e.addEventListener("focusout", i),
                    e.addEventListener("focus", r),
                    e.addEventListener("scroll", a, { passive: !0 }),
                    () => {
                        e.removeEventListener("focusin", n),
                            e.removeEventListener("focusout", i),
                            e.removeEventListener("focus", r),
                            e.removeEventListener("scroll", a);
                    }
                );
            function n() {
                P(!0);
            }
            function i(e) {
                e.currentTarget.contains(e.relatedTarget) ||
                    (P(!1),
                    requestAnimationFrame(() => {
                        let e = S.current;
                        null !== e && null == R((0, s.Mz)(e)) && D((0, s.Mz)(t, s.KE));
                    }));
            }
            async function r() {
                let e = C.current;
                if (U.current || null == e) return;
                let n = S.current;
                if (f && null !== n) {
                    let t = (0, s.Mz)(n),
                        i = R(t);
                    if (null != i) {
                        if (!0 !== N.current) return y(t, (0, s.HP)(n));
                        else if (
                            await (function (e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.5;
                                return new Promise((i) => {
                                    let r = new IntersectionObserver(
                                        (e) => {
                                            let t = e[0];
                                            r.disconnect(), i(t.intersectionRatio >= n);
                                        },
                                        { root: e },
                                    );
                                    r.observe(t);
                                });
                            })(e, i)
                        )
                            return y(t, (0, s.HP)(n));
                    }
                }
                let i = await l(e, d(t, C));
                null !== i && v(i);
            }
            function a() {
                N.current = !0;
            }
        }, [c, t, f, y, I, D, v]);
    let w = i.useMemo(
            () => ({
                wrap: T,
                get from() {
                    if (!p) return;
                    let e = S.current;
                    if (null != e) return R((0, s.Mz)(e)) ?? void 0;
                    return;
                },
            }),
            [p, T],
        ),
        G = i.useCallback(async () => {
            let e = await b.getNextFocusableElement(w),
                t = e?.getAttribute(s.eM);
            null != t ? v(t) : null == e && null != A && A();
        }, [b, w, A, v]),
        x = i.useCallback(async () => {
            let e = await b.getPreviousFocusableElement(w),
                t = e?.getAttribute(s.eM);
            null != t ? v(t) : null == e && null != E && E();
        }, [b, w, E, v]),
        k = i.useCallback(
            (e) => {
                if (!O.current || (!p && !U.current)) return;
                let n = m === o.Gl.HORIZONTAL ? o.D$.RIGHT : o.D$.DOWN,
                    i = m === o.Gl.HORIZONTAL ? o.D$.LEFT : o.D$.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), G();
                        return;
                    case i:
                        e.stopPropagation(), e.preventDefault(), x();
                        return;
                    case o.D$.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            u().then(() => {
                                let e = d(t, C),
                                    n = e[0]?.getAttribute(s.eM);
                                null != n && v(n);
                            });
                        return;
                    case o.D$.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            _().then(() => {
                                let e = d(t, C),
                                    n = e[e.length - 1]?.getAttribute(s.eM);
                                null != n && v(n);
                            });
                        return;
                    case o.D$.SPACE:
                    case o.D$.ENTER: {
                        if ((e.key === o.D$.SPACE && g) || e.repeat) return;
                        let t = S.current;
                        if (null != t) {
                            let n = R((0, s.Mz)(t)),
                                i = n?.ownerDocument ?? document,
                                r = p || n === i.activeElement;
                            null != n && r && (e.preventDefault(), e.stopPropagation(), n?.click());
                        }
                    }
                }
            },
            [G, x, t, m, _, u, v, p],
        ),
        F = i.useCallback(
            (e) => {
                (S.current = null != e ? (0, s.t$)(t, e) : null), (0, a.T)(t, e, f);
            },
            [t, f],
        );
    return i.useMemo(
        () => ({
            id: t,
            containerProps: { onKeyDown: k, ref: C, tabIndex: M && f ? -1 : 0 },
            orientation: m,
            setFocus: F,
            async focusLastVisibleItem() {
                var e, n;
                let i = await ((e = C.current ?? document.body),
                (n = d(t, C)),
                new Promise((t) => {
                    let i = new IntersectionObserver(
                        (e) => {
                            let n = 0,
                                r = null;
                            for (let a = e.length - 1; a >= 0; a--) {
                                let { isIntersecting: l, intersectionRatio: o, target: d } = e[a];
                                if (l && 1 === o) {
                                    i.disconnect();
                                    let e = d.getAttribute(s.eM);
                                    if (null != e) return t(e);
                                }
                                o > n && ((n = o), (r = d.getAttribute(s.eM)));
                            }
                            i.disconnect(), t(r);
                        },
                        { root: e },
                    );
                    for (let e of n) i.observe(e);
                }));
                null !== i && v(i);
            },
            async focusFirstVisibleItem() {
                let e = await l(C.current ?? document.body, d(t, C));
                null !== e && v(e);
            },
            focusPreviousItem: x,
            focusNextItem: G,
            focusedItemId() {
                let e = S.current;
                return e ? (0, s.HP)(e) : null;
            },
        }),
        [t, k, m, M, f, F, x, G, v],
    );
}
