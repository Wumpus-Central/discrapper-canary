"use strict";
n.d(t, { Ay: () => c });
var i = n(64700),
    r = n(52724),
    s = n(461771),
    a = n(602034);
function o(e, t) {
    return new Promise((n) => {
        let i = new IntersectionObserver(
            (e) => {
                let t = 0,
                    r = null;
                for (let { isIntersecting: s, intersectionRatio: o, target: l } of e) {
                    if (s && 1 === o) {
                        i.disconnect();
                        let e = l.getAttribute(a.eM);
                        if (null != e) return n(e);
                    }
                    o > t && ((t = o), (r = l.getAttribute(a.eM)));
                }
                i.disconnect(), n(r);
            },
            { root: e },
        );
        for (let e of t) i.observe(e);
    });
}
var l = n(741918);
function u(e, t) {
    return Array.from((t.current ?? document).querySelectorAll(`[${a.eM}^="${e}"]`));
}
function c(e) {
    let {
            id: t,
            defaultFocused: n,
            isEnabled: c,
            scrollToStart: d,
            scrollToEnd: _,
            onNavigatePreviousAtStart: h,
            onNavigateNextAtEnd: f,
            setFocus: p,
            setFocusOnList: E,
            preserveFocusPosition: m = !0,
            useVirtualFocus: g = !1,
            wrap: A = !1,
            orientation: I = l.Gl.VERTICAL,
            disableClickOnSpace: T = !1,
        } = e,
        S = i.useRef(n ? (0, a.t$)(t, n) : null),
        y = i.useRef(!1),
        N = i.useRef(null),
        v = i.useRef(c);
    function C(e) {
        return (N.current ?? document).querySelector(e);
    }
    function R(e) {
        C(e)?.focus();
    }
    i.useLayoutEffect(() => {
        v.current = c;
    }, [c]);
    let O = i.useCallback(
            (e, t) => {
                v.current && (p ?? R)(e, t);
            },
            [p],
        ),
        b = i.useCallback(
            (e) => {
                v.current && (E ?? R)(e);
            },
            [E],
        ),
        D = i.useCallback(
            (e) => {
                if (((S.current = e), null == e)) return void (0, s.T)(t, null, m);
                let n = (0, a.Mz)(e),
                    i = (0, a.HP)(e);
                O(n, i), (0, s.T)(t, i, m);
            },
            [t, m, O],
        ),
        L = i.useMemo(
            () =>
                (0, r.C)({
                    getFocusableElements: () => u(t, N),
                    getActiveElement: () => N.current?.ownerDocument.activeElement,
                    scrollToStart: d,
                    scrollToEnd: _,
                }),
            [t, d, _],
        ),
        [w, M] = i.useState(!1),
        P = i.useRef(w);
    i.useLayoutEffect(() => {
        P.current = w;
    }, [w]),
        i.useLayoutEffect(() => {
            let e = N.current;
            if (null != e && c)
                return (
                    e.addEventListener("focusin", n),
                    e.addEventListener("focusout", i),
                    e.addEventListener("focus", r),
                    e.addEventListener("scroll", s, { passive: !0 }),
                    () => {
                        e.removeEventListener("focusin", n),
                            e.removeEventListener("focusout", i),
                            e.removeEventListener("focus", r),
                            e.removeEventListener("scroll", s);
                    }
                );
            function n() {
                M(!0);
            }
            function i(e) {
                e.currentTarget.contains(e.relatedTarget) ||
                    (M(!1),
                    requestAnimationFrame(() => {
                        let e = S.current;
                        null !== e && null == C((0, a.Mz)(e)) && b((0, a.Mz)(t, a.KE));
                    }));
            }
            async function r() {
                let e = N.current;
                if (P.current || null == e) return;
                let n = S.current;
                if (m && null !== n) {
                    let t = (0, a.Mz)(n),
                        i = C(t);
                    if (null != i) {
                        if (!0 !== y.current) return O(t, (0, a.HP)(n));
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
                            return O(t, (0, a.HP)(n));
                    }
                }
                let i = await o(e, u(t, N));
                null !== i && D(i);
            }
            function s() {
                y.current = !0;
            }
        }, [c, t, m, O, E, b, D]);
    let x = i.useMemo(
            () => ({
                wrap: A,
                get from() {
                    if (!g) return;
                    let e = S.current;
                    if (null != e) return C((0, a.Mz)(e)) ?? void 0;
                    return;
                },
            }),
            [g, A],
        ),
        k = i.useCallback(async () => {
            let e = await L.getNextFocusableElement(x),
                t = e?.getAttribute(a.eM);
            null != t ? D(t) : null == e && null != f && f();
        }, [L, x, f, D]),
        U = i.useCallback(async () => {
            let e = await L.getPreviousFocusableElement(x),
                t = e?.getAttribute(a.eM);
            null != t ? D(t) : null == e && null != h && h();
        }, [L, x, h, D]),
        G = i.useCallback(
            (e) => {
                if (!v.current || (!g && !P.current)) return;
                let n = I === l.Gl.HORIZONTAL ? l.D$.RIGHT : l.D$.DOWN,
                    i = I === l.Gl.HORIZONTAL ? l.D$.LEFT : l.D$.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), k();
                        return;
                    case i:
                        e.stopPropagation(), e.preventDefault(), U();
                        return;
                    case l.D$.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            d().then(() => {
                                let e = u(t, N),
                                    n = e[0]?.getAttribute(a.eM);
                                null != n && D(n);
                            });
                        return;
                    case l.D$.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            _().then(() => {
                                let e = u(t, N),
                                    n = e[e.length - 1]?.getAttribute(a.eM);
                                null != n && D(n);
                            });
                        return;
                    case l.D$.SPACE:
                    case l.D$.ENTER: {
                        if ((e.key === l.D$.SPACE && T) || e.repeat) return;
                        let t = S.current;
                        if (null != t) {
                            let n = C((0, a.Mz)(t)),
                                i = n?.ownerDocument ?? document,
                                r = g || n === i.activeElement;
                            null != n && r && (e.preventDefault(), e.stopPropagation(), n?.click());
                        }
                    }
                }
            },
            [k, U, t, I, _, d, D, g],
        ),
        F = i.useCallback(
            (e) => {
                (S.current = null != e ? (0, a.t$)(t, e) : null), (0, s.T)(t, e, m);
            },
            [t, m],
        );
    return i.useMemo(
        () => ({
            id: t,
            containerProps: { onKeyDown: G, ref: N, tabIndex: w && m ? -1 : 0 },
            orientation: I,
            setFocus: F,
            async focusLastVisibleItem() {
                var e, n;
                let i = await ((e = N.current ?? document.body),
                (n = u(t, N)),
                new Promise((t) => {
                    let i = new IntersectionObserver(
                        (e) => {
                            let n = 0,
                                r = null;
                            for (let s = e.length - 1; s >= 0; s--) {
                                let { isIntersecting: o, intersectionRatio: l, target: u } = e[s];
                                if (o && 1 === l) {
                                    i.disconnect();
                                    let e = u.getAttribute(a.eM);
                                    if (null != e) return t(e);
                                }
                                l > n && ((n = l), (r = u.getAttribute(a.eM)));
                            }
                            i.disconnect(), t(r);
                        },
                        { root: e },
                    );
                    for (let e of n) i.observe(e);
                }));
                null !== i && D(i);
            },
            async focusFirstVisibleItem() {
                let e = await o(N.current ?? document.body, u(t, N));
                null !== e && D(e);
            },
            focusPreviousItem: U,
            focusNextItem: k,
            focusedItemId() {
                let e = S.current;
                return e ? (0, a.HP)(e) : null;
            },
        }),
        [t, G, I, w, m, F, U, k, D],
    );
}
