"use strict";
n.d(t, { Ay: () => h, E: () => _, JR: () => p });
var l = n(627968),
    a = n(64700),
    s = n(461771),
    i = n(741918),
    r = n(602034);
let o = "data-grid-item-id",
    d = "data-grid-section",
    c = "data-grid-prev-section-boundary",
    u = new Set([i.D$.UP, i.D$.DOWN, i.D$.LEFT, i.D$.RIGHT]);
function m(e) {
    let { section: t, column: n, row: l } = e,
        a = `[${d}="${t}"]`,
        s = `[aria-colindex="${n}"]`,
        i = `[aria-rowindex="${l}"]`;
    return `${a}${s}${i}`;
}
function h(e) {
    let { id: t, isEnabled: n, setFocus: l } = e,
        d = a.useRef(null),
        h = a.useRef(!1),
        g = a.useRef(null),
        x = a.useRef(n);
    a.useLayoutEffect(() => {
        x.current = n;
    }, [n]);
    let f = a.useCallback((e) => (g.current ?? document).querySelector(e), []),
        _ = a.useCallback(
            (e, t) => {
                x.current && l(e, t);
            },
            [l],
        ),
        p = a.useCallback((e) => {
            x.current && document.querySelector(e)?.focus();
        }, []),
        j = a.useCallback(
            (e) => {
                d.current = e;
                let n = (0, r.Mz)(e, o),
                    l = (0, r.HP)(e);
                _(n, l), (0, s.T)(t, l, !0);
            },
            [t, _],
        ),
        [b, v] = a.useState(!1),
        C = a.useRef(b);
    a.useLayoutEffect(() => {
        C.current = b;
    }, [b]),
        a.useLayoutEffect(() => {
            let e = g.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", n),
                    e.addEventListener("focusout", l),
                    e.addEventListener("focus", a),
                    e.addEventListener("scroll", s, { passive: !0 }),
                    () => {
                        e.removeEventListener("focusin", n),
                            e.removeEventListener("focusout", l),
                            e.removeEventListener("focus", a),
                            e.removeEventListener("scroll", s);
                    }
                );
            function n() {
                v(!0);
            }
            function l(e) {
                e.currentTarget.contains(e.relatedTarget) ||
                    (v(!1),
                    requestAnimationFrame(() => {
                        let e = d.current;
                        null !== e && null == f((0, r.Mz)(e, o)) && p((0, r.Mz)(t, "data-grid-id"));
                    }));
            }
            function a() {
                let e = g.current;
                if (C.current || null == e) return;
            }
            function s() {
                h.current = !0;
            }
        }, [t, _, p, j, f]);
    let A = a.useCallback(
            (e) => {
                if (!x.current) return;
                let t = d.current,
                    n = g.current;
                if (null == t) return;
                let l = (0, r.Mz)(t, o),
                    a = n?.querySelector(l);
                if (null == a) return;
                let s = parseInt(a.getAttribute("data-grid-section") ?? ""),
                    h = parseInt(a.getAttribute("aria-rowindex")),
                    _ = parseInt(a.getAttribute("aria-colindex"));
                switch ((u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                    case i.D$.RIGHT: {
                        let e = f(m({ section: s, row: h, column: _ + 1 }));
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case i.D$.LEFT: {
                        let e = f(m({ section: s, row: h, column: _ - 1 }));
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case i.D$.DOWN: {
                        let e = f(m({ section: s, row: h + 1, column: _ }));
                        if ((null == e && (e = f(m({ section: s + 1, row: 0, column: _ }))), null != e)) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case i.D$.UP: {
                        let e;
                        if (0 === h) {
                            let t = parseInt(a.getAttribute(c));
                            null == (e = f(m({ section: s - 1, row: t, column: _ }))) &&
                                (e = f(m({ section: s - 1, row: t - 1, column: _ })));
                        } else e = f(m({ section: s, row: h - 1, column: _ }));
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case i.D$.SPACE:
                    case i.D$.ENTER: {
                        if (e.repeat) return;
                        let t = d.current;
                        if (null != t) {
                            let n = f((0, r.Mz)(t, o)),
                                l = n?.ownerDocument ?? document,
                                a = n === l.activeElement;
                            null != n && a && (e.preventDefault(), e.stopPropagation(), n?.click());
                        }
                    }
                }
            },
            [f, j],
        ),
        N = a.useCallback(
            (e) => {
                d.current = null != e ? (0, r.t$)(t, e) : null;
            },
            [t],
        );
    return a.useMemo(() => ({ id: t, containerProps: { onKeyDown: A, ref: g }, setFocus: N }), [t, A, N]);
}
let g = { id: "NO_LIST", onKeyDown() {}, ref: a.createRef() },
    x = a.createContext({ id: "NO_LIST", setFocus() {} }),
    f = a.createContext(g);
function _(e) {
    let { id: t, section: n, row: l, column: i, boundaries: u } = e,
        [m, h] = a.useState(0 === l && 0 === i ? 0 : -1),
        { id: g, setFocus: f } = a.useContext(x),
        _ = a.useCallback(() => f(t), [t, f]);
    return (
        a.useLayoutEffect(
            () =>
                (0, s.e)(g, (e) => {
                    h(e === t ? 0 : -1);
                }),
            [t, g],
        ),
        {
            [o]: (0, r.t$)(g, t),
            [d]: n,
            [c]: u[n],
            role: "gridcell",
            "aria-rowindex": l,
            "aria-colindex": i,
            tabIndex: m,
            onFocus: _,
        }
    );
}
function p(e) {
    let { children: t, navigator: n } = e,
        {
            id: s,
            setFocus: i,
            containerProps: { onKeyDown: r, ref: o },
        } = n,
        d = a.useMemo(() => ({ id: s, setFocus: i }), [s, i]),
        c = a.useMemo(() => ({ onKeyDown: r, ref: o, id: s }), [r, o, s]);
    return (0, l.jsx)(f.Provider, { value: c, children: (0, l.jsx)(x.Provider, { value: d, children: t }) });
}
