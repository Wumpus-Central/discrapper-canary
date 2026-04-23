"use strict";
n.d(t, { Ay: () => c });
var r = n(64700),
    i = n(52724),
    s = n(461771),
    a = n(963400),
    o = n(741918),
    l = n(602034);
function u(e, t) {
    return Array.from((t.current ?? document).querySelectorAll(`[${l.eM}^="${e}"]`));
}
function c(e) {
    let {
            id: t,
            defaultFocused: n,
            isEnabled: c,
            scrollToStart: d,
            scrollToEnd: _,
            onNavigatePreviousAtStart: f,
            onNavigateNextAtEnd: p,
            setFocus: h,
            setFocusOnList: E,
            preserveFocusPosition: m = !0,
            useVirtualFocus: g = !1,
            wrap: A = !1,
            orientation: I = o.Gl.VERTICAL,
            disableClickOnSpace: T = !1,
        } = e,
        S = r.useRef(n ? (0, l.t$)(t, n) : null),
        y = r.useRef(!1),
        N = r.useRef(null),
        v = r.useRef(c);
    function C(e) {
        return (N.current ?? document).querySelector(e);
    }
    function O(e) {
        C(e)?.focus();
    }
    r.useLayoutEffect(() => {
        v.current = c;
    }, [c]);
    let R = r.useCallback(
            (e, t) => {
                v.current && (h ?? O)(e, t);
            },
            [h],
        ),
        b = r.useCallback(
            (e) => {
                v.current && (E ?? O)(e);
            },
            [E],
        ),
        D = r.useCallback(
            (e) => {
                if (((S.current = e), null == e)) return void (0, s.T)(t, null, m);
                let n = (0, l.Mz)(e),
                    r = (0, l.HP)(e);
                R(n, r), (0, s.T)(t, r, m);
            },
            [t, m, R],
        ),
        L = r.useMemo(
            () =>
                (0, i.C)({
                    getFocusableElements: () => u(t, N),
                    getActiveElement: () => N.current?.ownerDocument.activeElement,
                    scrollToStart: d,
                    scrollToEnd: _,
                }),
            [t, d, _],
        ),
        [w, M] = r.useState(!1),
        P = r.useRef(w);
    r.useLayoutEffect(() => {
        P.current = w;
    }, [w]),
        r.useLayoutEffect(() => {
            let e = N.current;
            if (null != e && c)
                return (
                    e.addEventListener("focusin", n),
                    e.addEventListener("focusout", r),
                    e.addEventListener("focus", i),
                    e.addEventListener("scroll", s, { passive: !0 }),
                    () => {
                        e.removeEventListener("focusin", n),
                            e.removeEventListener("focusout", r),
                            e.removeEventListener("focus", i),
                            e.removeEventListener("scroll", s);
                    }
                );
            function n() {
                M(!0);
            }
            function r(e) {
                e.currentTarget.contains(e.relatedTarget) ||
                    (M(!1),
                    requestAnimationFrame(() => {
                        let e = S.current;
                        null !== e && null == C((0, l.Mz)(e)) && b((0, l.Mz)(t, l.KE));
                    }));
            }
            async function i() {
                let e = N.current;
                if (P.current || null == e) return;
                let n = S.current;
                if (m && null !== n) {
                    let t = (0, l.Mz)(n),
                        r = C(t);
                    if (null != r) {
                        if (!0 !== y.current) return R(t, (0, l.HP)(n));
                        else if (await (0, a.UN)(e, r)) return R(t, (0, l.HP)(n));
                    }
                }
                let r = await (0, a.$b)(e, u(t, N));
                null !== r && D(r);
            }
            function s() {
                y.current = !0;
            }
        }, [c, t, m, R, E, b, D]);
    let x = r.useMemo(
            () => ({
                wrap: A,
                get from() {
                    if (!g) return;
                    let e = S.current;
                    if (null != e) return C((0, l.Mz)(e)) ?? void 0;
                    return;
                },
            }),
            [g, A],
        ),
        k = r.useCallback(async () => {
            let e = await L.getNextFocusableElement(x),
                t = e?.getAttribute(l.eM);
            null != t ? D(t) : null == e && null != p && p();
        }, [L, x, p, D]),
        U = r.useCallback(async () => {
            let e = await L.getPreviousFocusableElement(x),
                t = e?.getAttribute(l.eM);
            null != t ? D(t) : null == e && null != f && f();
        }, [L, x, f, D]),
        G = r.useCallback(
            (e) => {
                if (!v.current || (!g && !P.current)) return;
                let n = I === o.Gl.HORIZONTAL ? o.D$.RIGHT : o.D$.DOWN,
                    r = I === o.Gl.HORIZONTAL ? o.D$.LEFT : o.D$.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), k();
                        return;
                    case r:
                        e.stopPropagation(), e.preventDefault(), U();
                        return;
                    case o.D$.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            d().then(() => {
                                let e = u(t, N),
                                    n = e[0]?.getAttribute(l.eM);
                                null != n && D(n);
                            });
                        return;
                    case o.D$.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            _().then(() => {
                                let e = u(t, N),
                                    n = e[e.length - 1]?.getAttribute(l.eM);
                                null != n && D(n);
                            });
                        return;
                    case o.D$.SPACE:
                    case o.D$.ENTER: {
                        if ((e.key === o.D$.SPACE && T) || e.repeat) return;
                        let t = S.current;
                        if (null != t) {
                            let n = C((0, l.Mz)(t)),
                                r = n?.ownerDocument ?? document,
                                i = g || n === r.activeElement;
                            null != n && i && (e.preventDefault(), e.stopPropagation(), n?.click());
                        }
                    }
                }
            },
            [k, U, t, I, _, d, D, g],
        ),
        F = r.useCallback(
            (e) => {
                (S.current = null != e ? (0, l.t$)(t, e) : null), (0, s.T)(t, e, m);
            },
            [t, m],
        );
    return r.useMemo(
        () => ({
            id: t,
            containerProps: { onKeyDown: G, ref: N, tabIndex: w && m ? -1 : 0 },
            orientation: I,
            setFocus: F,
            async focusLastVisibleItem() {
                let e = await (0, a.FT)(N.current ?? document.body, u(t, N));
                null !== e && D(e);
            },
            async focusFirstVisibleItem() {
                let e = await (0, a.$b)(N.current ?? document.body, u(t, N));
                null !== e && D(e);
            },
            focusPreviousItem: U,
            focusNextItem: k,
            focusedItemId() {
                let e = S.current;
                return e ? (0, l.HP)(e) : null;
            },
        }),
        [t, G, I, w, m, F, U, k, D],
    );
}
