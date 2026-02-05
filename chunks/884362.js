"use strict";
n.d(t, { Ay: () => c });
var r = n(64700),
    i = n(52724),
    a = n(461771),
    s = n(963400),
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
            setFocusOnList: m,
            preserveFocusPosition: g = !0,
            useVirtualFocus: E = !1,
            wrap: A = !1,
            orientation: I = o.Gl.VERTICAL,
            disableClickOnSpace: T = !1,
        } = e,
        y = r.useRef(n ? (0, l.t$)(t, n) : null),
        S = r.useRef(!1),
        v = r.useRef(null),
        C = r.useRef(c);
    function b(e) {
        return (v.current ?? document).querySelector(e);
    }
    function N(e) {
        b(e)?.focus();
    }
    r.useLayoutEffect(() => {
        C.current = c;
    }, [c]);
    let R = r.useCallback(
            (e, t) => {
                C.current && (h ?? N)(e, t);
            },
            [h],
        ),
        O = r.useCallback(
            (e) => {
                C.current && (m ?? N)(e);
            },
            [m],
        ),
        D = r.useCallback(
            (e) => {
                if (((y.current = e), null == e)) return void (0, a.T)(t, null, g);
                let n = (0, l.Mz)(e),
                    r = (0, l.HP)(e);
                R(n, r), (0, a.T)(t, r, g);
            },
            [t, g, R],
        ),
        L = r.useMemo(
            () =>
                (0, i.C)({
                    getFocusableElements: () => u(t, v),
                    getActiveElement: () => v.current?.ownerDocument.activeElement,
                    scrollToStart: d,
                    scrollToEnd: _,
                }),
            [t, d, _],
        ),
        [w, x] = r.useState(!1),
        P = r.useRef(w);
    r.useLayoutEffect(() => {
        P.current = w;
    }, [w]),
        r.useLayoutEffect(() => {
            let e = v.current;
            if (null != e && c)
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
                        let e = y.current;
                        null !== e && null == b((0, l.Mz)(e)) && O((0, l.Mz)(t, l.KE));
                    }));
            }
            async function i() {
                let e = v.current;
                if (P.current || null == e) return;
                let n = y.current;
                if (g && null !== n) {
                    let t = (0, l.Mz)(n),
                        r = b(t);
                    if (null != r) {
                        if (!0 !== S.current) return R(t, (0, l.HP)(n));
                        else if (await (0, s.UN)(e, r)) return R(t, (0, l.HP)(n));
                    }
                }
                let r = await (0, s.$b)(e, u(t, v));
                null !== r && D(r);
            }
            function a() {
                S.current = !0;
            }
        }, [c, t, g, R, m, O, D]);
    let M = r.useMemo(
            () => ({
                wrap: A,
                get from() {
                    if (!E) return;
                    let e = y.current;
                    if (null != e) return b((0, l.Mz)(e)) ?? void 0;
                    return;
                },
            }),
            [E, A],
        ),
        k = r.useCallback(async () => {
            let e = await L.getNextFocusableElement(M),
                t = e?.getAttribute(l.eM);
            null != t ? D(t) : null == e && null != p && p();
        }, [L, M, p, D]),
        U = r.useCallback(async () => {
            let e = await L.getPreviousFocusableElement(M),
                t = e?.getAttribute(l.eM);
            null != t ? D(t) : null == e && null != f && f();
        }, [L, M, f, D]),
        G = r.useCallback(
            (e) => {
                if (!C.current || (!E && !P.current)) return;
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
                                let e = u(t, v),
                                    n = e[0]?.getAttribute(l.eM);
                                null != n && D(n);
                            });
                        return;
                    case o.D$.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            _().then(() => {
                                let e = u(t, v),
                                    n = e[e.length - 1]?.getAttribute(l.eM);
                                null != n && D(n);
                            });
                        return;
                    case o.D$.SPACE:
                    case o.D$.ENTER: {
                        if ((e.key === o.D$.SPACE && T) || e.repeat) return;
                        let t = y.current;
                        if (null != t) {
                            let n = b((0, l.Mz)(t)),
                                r = n?.ownerDocument ?? document,
                                i = E || n === r.activeElement;
                            null != n && i && (e.preventDefault(), e.stopPropagation(), n?.click());
                        }
                    }
                }
            },
            [k, U, t, I, _, d, D, E],
        ),
        V = r.useCallback(
            (e) => {
                (y.current = null != e ? (0, l.t$)(t, e) : null), (0, a.T)(t, e, g);
            },
            [t, g],
        );
    return r.useMemo(
        () => ({
            id: t,
            containerProps: { onKeyDown: G, ref: v, tabIndex: w && g ? -1 : 0 },
            orientation: I,
            setFocus: V,
            async focusLastVisibleItem() {
                let e = await (0, s.FT)(v.current ?? document.body, u(t, v));
                null !== e && D(e);
            },
            async focusFirstVisibleItem() {
                let e = await (0, s.$b)(v.current ?? document.body, u(t, v));
                null !== e && D(e);
            },
            focusPreviousItem: U,
            focusNextItem: k,
            focusedItemId() {
                let e = y.current;
                return e ? (0, l.HP)(e) : null;
            },
        }),
        [t, G, I, w, g, V, U, k, D],
    );
}
