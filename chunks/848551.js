"use strict";
n.d(t, { Ay: () => h, E: () => p, JR: () => _ });
var l = n(627968),
    i = n(64700),
    s = n(461771),
    a = n(741918),
    r = n(602034);
let o = "data-grid-item-id",
    d = "data-grid-section",
    c = "data-grid-prev-section-boundary",
    u = new Set([a.D$.UP, a.D$.DOWN, a.D$.LEFT, a.D$.RIGHT]);
function m(e) {
    let { section: t, column: n, row: l } = e,
        i = `[${d}="${t}"]`,
        s = `[aria-colindex="${n}"]`,
        a = `[aria-rowindex="${l}"]`;
    return `${i}${s}${a}`;
}
function h(e) {
    let { id: t, isEnabled: n, setFocus: l } = e,
        d = i.useRef(null),
        h = i.useRef(!1),
        x = i.useRef(null),
        g = i.useRef(n);
    i.useLayoutEffect(() => {
        g.current = n;
    }, [n]);
    let f = i.useCallback((e) => (x.current ?? document).querySelector(e), []),
        p = i.useCallback(
            (e, t) => {
                g.current && l(e, t);
            },
            [l],
        ),
        _ = i.useCallback((e) => {
            g.current && document.querySelector(e)?.focus();
        }, []),
        j = i.useCallback(
            (e) => {
                d.current = e;
                let n = (0, r.Mz)(e, o),
                    l = (0, r.HP)(e);
                p(n, l), (0, s.T)(t, l, !0);
            },
            [t, p],
        ),
        [b, v] = i.useState(!1),
        A = i.useRef(b);
    i.useLayoutEffect(() => {
        A.current = b;
    }, [b]),
        i.useLayoutEffect(() => {
            let e = x.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", n),
                    e.addEventListener("focusout", l),
                    e.addEventListener("focus", i),
                    e.addEventListener("scroll", s, { passive: !0 }),
                    () => {
                        e.removeEventListener("focusin", n),
                            e.removeEventListener("focusout", l),
                            e.removeEventListener("focus", i),
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
                        null !== e && null == f((0, r.Mz)(e, o)) && _((0, r.Mz)(t, "data-grid-id"));
                    }));
            }
            function i() {
                let e = x.current;
                if (A.current || null == e) return;
            }
            function s() {
                h.current = !0;
            }
        }, [t, p, _, j, f]);
    let C = i.useCallback(
            (e) => {
                if (!g.current) return;
                let t = d.current,
                    n = x.current;
                if (null == t) return;
                let l = (0, r.Mz)(t, o),
                    i = n?.querySelector(l);
                if (null == i) return;
                let s = parseInt(i.getAttribute("data-grid-section") ?? ""),
                    h = parseInt(i.getAttribute("aria-rowindex")),
                    p = parseInt(i.getAttribute("aria-colindex"));
                switch ((u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                    case a.D$.RIGHT: {
                        let e = f(m({ section: s, row: h, column: p + 1 }));
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case a.D$.LEFT: {
                        let e = f(m({ section: s, row: h, column: p - 1 }));
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case a.D$.DOWN: {
                        let e = f(m({ section: s, row: h + 1, column: p }));
                        if ((null == e && (e = f(m({ section: s + 1, row: 0, column: p }))), null != e)) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case a.D$.UP: {
                        let e;
                        if (0 === h) {
                            let t = parseInt(i.getAttribute(c));
                            null == (e = f(m({ section: s - 1, row: t, column: p }))) &&
                                (e = f(m({ section: s - 1, row: t - 1, column: p })));
                        } else e = f(m({ section: s, row: h - 1, column: p }));
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case a.D$.SPACE:
                    case a.D$.ENTER: {
                        if (e.repeat) return;
                        let t = d.current;
                        if (null != t) {
                            let n = f((0, r.Mz)(t, o)),
                                l = n?.ownerDocument ?? document,
                                i = n === l.activeElement;
                            null != n && i && (e.preventDefault(), e.stopPropagation(), n?.click());
                        }
                    }
                }
            },
            [f, j],
        ),
        T = i.useCallback(
            (e) => {
                d.current = null != e ? (0, r.t$)(t, e) : null;
            },
            [t],
        );
    return i.useMemo(() => ({ id: t, containerProps: { onKeyDown: C, ref: x }, setFocus: T }), [t, C, T]);
}
let x = { id: "NO_LIST", onKeyDown() {}, ref: i.createRef() },
    g = i.createContext({ id: "NO_LIST", setFocus() {} }),
    f = i.createContext(x);
function p(e) {
    let { id: t, section: n, row: l, column: a, boundaries: u } = e,
        [m, h] = i.useState(0 === l && 0 === a ? 0 : -1),
        { id: x, setFocus: f } = i.useContext(g),
        p = i.useCallback(() => f(t), [t, f]);
    return (
        i.useLayoutEffect(
            () =>
                (0, s.e)(x, (e) => {
                    h(e === t ? 0 : -1);
                }),
            [t, x],
        ),
        {
            [o]: (0, r.t$)(x, t),
            [d]: n,
            [c]: u[n],
            role: "gridcell",
            "aria-rowindex": l,
            "aria-colindex": a,
            tabIndex: m,
            onFocus: p,
        }
    );
}
function _(e) {
    let { children: t, navigator: n } = e,
        {
            id: s,
            setFocus: a,
            containerProps: { onKeyDown: r, ref: o },
        } = n,
        d = i.useMemo(() => ({ id: s, setFocus: a }), [s, a]),
        c = i.useMemo(() => ({ onKeyDown: r, ref: o, id: s }), [r, o, s]);
    return (0, l.jsx)(f.Provider, { value: c, children: (0, l.jsx)(g.Provider, { value: d, children: t }) });
}
