"use strict";
n.d(t, { Ay: () => _ });
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
function d(e, t) {
    return Array.from((t.current ?? document).querySelectorAll(`[${a.eM}^="${e}"]`));
}
function _(e) {
    let {
            id: t,
            defaultFocused: n,
            isEnabled: _,
            scrollToStart: u,
            scrollToEnd: c,
            onNavigatePreviousAtStart: E,
            onNavigateNextAtEnd: h,
            setFocus: m,
            setFocusOnList: f,
            preserveFocusPosition: g = !0,
            useVirtualFocus: p = !1,
            wrap: A = !1,
            orientation: I = l.Gl.VERTICAL,
            disableClickOnSpace: T = !1,
        } = e,
        S = i.useRef(n ? (0, a.t$)(t, n) : null),
        N = i.useRef(!1),
        C = i.useRef(null),
        R = i.useRef(_);
    function O(e) {
        return (C.current ?? document).querySelector(e);
    }
    function y(e) {
        O(e)?.focus();
    }
    i.useLayoutEffect(() => {
        R.current = _;
    }, [_]);
    let v = i.useCallback(
            (e, t) => {
                R.current && (m ?? y)(e, t);
            },
            [m],
        ),
        D = i.useCallback(
            (e) => {
                R.current && (f ?? y)(e);
            },
            [f],
        ),
        L = i.useCallback(
            (e) => {
                if (((S.current = e), null == e)) return void (0, s.T)(t, null, g);
                let n = (0, a.Mz)(e),
                    i = (0, a.HP)(e);
                v(n, i), (0, s.T)(t, i, g);
            },
            [t, g, v],
        ),
        b = i.useMemo(
            () =>
                (0, r.C)({
                    getFocusableElements: () => d(t, C),
                    getActiveElement: () => C.current?.ownerDocument.activeElement,
                    scrollToStart: u,
                    scrollToEnd: c,
                }),
            [t, u, c],
        ),
        [w, P] = i.useState(!1),
        k = i.useRef(w);
    i.useLayoutEffect(() => {
        k.current = w;
    }, [w]),
        i.useLayoutEffect(() => {
            let e = C.current;
            if (null != e && _)
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
                P(!0);
            }
            function i(e) {
                e.currentTarget.contains(e.relatedTarget) ||
                    (P(!1),
                    requestAnimationFrame(() => {
                        let e = S.current;
                        null !== e && null == O((0, a.Mz)(e)) && D((0, a.Mz)(t, a.KE));
                    }));
            }
            async function r() {
                let e = C.current;
                if (k.current || null == e) return;
                let n = S.current;
                if (g && null !== n) {
                    let t = (0, a.Mz)(n),
                        i = O(t);
                    if (null != i) {
                        if (!0 !== N.current) return v(t, (0, a.HP)(n));
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
                            return v(t, (0, a.HP)(n));
                    }
                }
                let i = await o(e, d(t, C));
                null !== i && L(i);
            }
            function s() {
                N.current = !0;
            }
        }, [_, t, g, v, f, D, L]);
    let M = i.useMemo(
            () => ({
                wrap: A,
                get from() {
                    if (!p) return;
                    let e = S.current;
                    if (null != e) return O((0, a.Mz)(e)) ?? void 0;
                    return;
                },
            }),
            [p, A],
        ),
        U = i.useCallback(async () => {
            let e = await b.getNextFocusableElement(M),
                t = e?.getAttribute(a.eM);
            null != t ? L(t) : null == e && null != h && h();
        }, [b, M, h, L]),
        x = i.useCallback(async () => {
            let e = await b.getPreviousFocusableElement(M),
                t = e?.getAttribute(a.eM);
            null != t ? L(t) : null == e && null != E && E();
        }, [b, M, E, L]),
        G = i.useCallback(
            (e) => {
                if (!R.current || (!p && !k.current)) return;
                let n = I === l.Gl.HORIZONTAL ? l.D$.RIGHT : l.D$.DOWN,
                    i = I === l.Gl.HORIZONTAL ? l.D$.LEFT : l.D$.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), U();
                        return;
                    case i:
                        e.stopPropagation(), e.preventDefault(), x();
                        return;
                    case l.D$.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            u().then(() => {
                                let e = d(t, C),
                                    n = e[0]?.getAttribute(a.eM);
                                null != n && L(n);
                            });
                        return;
                    case l.D$.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            c().then(() => {
                                let e = d(t, C),
                                    n = e[e.length - 1]?.getAttribute(a.eM);
                                null != n && L(n);
                            });
                        return;
                    case l.D$.SPACE:
                    case l.D$.ENTER: {
                        if ((e.key === l.D$.SPACE && T) || e.repeat) return;
                        let t = S.current;
                        if (null != t) {
                            let n = O((0, a.Mz)(t)),
                                i = n?.ownerDocument ?? document,
                                r = p || n === i.activeElement;
                            null != n && r && (e.preventDefault(), e.stopPropagation(), n?.click());
                        }
                    }
                }
            },
            [U, x, t, I, c, u, L, p],
        ),
        V = i.useCallback(
            (e) => {
                (S.current = null != e ? (0, a.t$)(t, e) : null), (0, s.T)(t, e, g);
            },
            [t, g],
        );
    return i.useMemo(
        () => ({
            id: t,
            containerProps: { onKeyDown: G, ref: C, tabIndex: w && g ? -1 : 0 },
            orientation: I,
            setFocus: V,
            async focusLastVisibleItem() {
                var e, n;
                let i = await ((e = C.current ?? document.body),
                (n = d(t, C)),
                new Promise((t) => {
                    let i = new IntersectionObserver(
                        (e) => {
                            let n = 0,
                                r = null;
                            for (let s = e.length - 1; s >= 0; s--) {
                                let { isIntersecting: o, intersectionRatio: l, target: d } = e[s];
                                if (o && 1 === l) {
                                    i.disconnect();
                                    let e = d.getAttribute(a.eM);
                                    if (null != e) return t(e);
                                }
                                l > n && ((n = l), (r = d.getAttribute(a.eM)));
                            }
                            i.disconnect(), t(r);
                        },
                        { root: e },
                    );
                    for (let e of n) i.observe(e);
                }));
                null !== i && L(i);
            },
            async focusFirstVisibleItem() {
                let e = await o(C.current ?? document.body, d(t, C));
                null !== e && L(e);
            },
            focusPreviousItem: x,
            focusNextItem: U,
            focusedItemId() {
                let e = S.current;
                return e ? (0, a.HP)(e) : null;
            },
        }),
        [t, G, I, w, g, V, x, U, L],
    );
}
