n.d(t, {
    Ay: () => h,
    E: () => b,
    JR: () => p,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(461771),
    i = n(741918),
    s = n(602034);
let c = "data-grid-item-id",
    o = "data-grid-section",
    d = "data-grid-prev-section-boundary",
    u = new Set([i.D$.UP, i.D$.DOWN, i.D$.LEFT, i.D$.RIGHT]);

function m(e) {
    let { section: t, column: n, row: l } = e,
        r = "[".concat(o, '="').concat(t, '"]'),
        a = "[".concat("aria-colindex", '="').concat(n, '"]'),
        i = "[".concat("aria-rowindex", '="').concat(l, '"]');
    return "".concat(r).concat(a).concat(i);
}

function h(e) {
    let { id: t, isEnabled: n, setFocus: l } = e,
        o = r.useRef(null),
        h = r.useRef(!1),
        f = r.useRef(null),
        g = r.useRef(n);
    r.useLayoutEffect(() => {
        g.current = n;
    }, [n]);
    let x = r.useCallback((e) => {
            var t;
            return (null != (t = f.current) ? t : document).querySelector(e);
        }, []),
        b = r.useCallback(
            (e, t) => {
                g.current && l(e, t);
            },
            [l],
        ),
        p = r.useCallback((e) => {
            if (g.current) {
                var t;
                null == (t = document.querySelector(e)) || t.focus();
            }
        }, []),
        j = r.useCallback(
            (e) => {
                o.current = e;
                let n = (0, s.Mz)(e, c),
                    l = (0, s.HP)(e);
                b(n, l), (0, a.T)(t, l, !0);
            },
            [t, b],
        ),
        [v, y] = r.useState(!1),
        A = r.useRef(v);
    r.useLayoutEffect(() => {
        A.current = v;
    }, [v]),
        r.useLayoutEffect(() => {
            let e = f.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", n),
                    e.addEventListener("focusout", l),
                    e.addEventListener("focus", r),
                    e.addEventListener("scroll", a, {
                        passive: !0,
                    }),
                    () => {
                        e.removeEventListener("focusin", n),
                            e.removeEventListener("focusout", l),
                            e.removeEventListener("focus", r),
                            e.removeEventListener("scroll", a);
                    }
                );

            function n() {
                y(!0);
            }

            function l(e) {
                e.currentTarget.contains(e.relatedTarget) ||
                    (y(!1),
                    requestAnimationFrame(() => {
                        let e = o.current;
                        null !== e && null == x((0, s.Mz)(e, c)) && p((0, s.Mz)(t, "data-grid-id"));
                    }));
            }

            function r() {
                let e = f.current;
                if (A.current || null == e) return;
            }

            function a() {
                h.current = !0;
            }
        }, [t, b, p, j, x]);
    let C = r.useCallback(
            (e) => {
                var t, n;
                if (!g.current) return;
                let l = o.current,
                    r = f.current;
                if (null == l) return;
                let a = (0, s.Mz)(l, c),
                    h = null == r ? void 0 : r.querySelector(a);
                if (null == h) return;
                let b = parseInt(null != (t = h.getAttribute("data-grid-section")) ? t : ""),
                    p = parseInt(h.getAttribute("aria-rowindex")),
                    v = parseInt(h.getAttribute("aria-colindex"));
                switch ((u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                    case i.D$.RIGHT: {
                        let e = x(
                            m({
                                section: b,
                                row: p,
                                column: v + 1,
                            }),
                        );
                        if (null != e) {
                            let t = e.getAttribute(c);
                            null != t && j(t);
                        }
                        return;
                    }
                    case i.D$.LEFT: {
                        let e = x(
                            m({
                                section: b,
                                row: p,
                                column: v - 1,
                            }),
                        );
                        if (null != e) {
                            let t = e.getAttribute(c);
                            null != t && j(t);
                        }
                        return;
                    }
                    case i.D$.DOWN: {
                        let e = x(
                            m({
                                section: b,
                                row: p + 1,
                                column: v,
                            }),
                        );
                        if (
                            (null == e &&
                                (e = x(
                                    m({
                                        section: b + 1,
                                        row: 0,
                                        column: v,
                                    }),
                                )),
                            null != e)
                        ) {
                            let t = e.getAttribute(c);
                            null != t && j(t);
                        }
                        return;
                    }
                    case i.D$.UP: {
                        let e;
                        if (0 === p) {
                            let t = parseInt(h.getAttribute(d));
                            null ==
                                (e = x(
                                    m({
                                        section: b - 1,
                                        row: t,
                                        column: v,
                                    }),
                                )) &&
                                (e = x(
                                    m({
                                        section: b - 1,
                                        row: t - 1,
                                        column: v,
                                    }),
                                ));
                        } else
                            e = x(
                                m({
                                    section: b,
                                    row: p - 1,
                                    column: v,
                                }),
                            );
                        if (null != e) {
                            let t = e.getAttribute(c);
                            null != t && j(t);
                        }
                        return;
                    }
                    case i.D$.SPACE:
                    case i.D$.ENTER: {
                        if (e.repeat) return;
                        let t = o.current;
                        if (null != t) {
                            let l = x((0, s.Mz)(t, c)),
                                r = null != (n = null == l ? void 0 : l.ownerDocument) ? n : document,
                                a = l === r.activeElement;
                            null != l && a && (e.preventDefault(), e.stopPropagation(), null == l || l.click());
                        }
                    }
                }
            },
            [x, j],
        ),
        O = r.useCallback(
            (e) => {
                o.current = null != e ? (0, s.t$)(t, e) : null;
            },
            [t],
        );
    return r.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: C,
                ref: f,
            },
            setFocus: O,
        }),
        [t, C, O],
    );
}
let f = {
        id: "NO_LIST",
        onKeyDown() {},
        ref: r.createRef(),
    },
    g = r.createContext({
        id: "NO_LIST",
        setFocus() {},
    }),
    x = r.createContext(f);

function b(e) {
    let { id: t, section: n, row: l, column: i, boundaries: u } = e,
        [m, h] = r.useState(0 === l && 0 === i ? 0 : -1),
        { id: f, setFocus: x } = r.useContext(g),
        b = r.useCallback(() => x(t), [t, x]);
    return (
        r.useLayoutEffect(
            () =>
                (0, a.e)(f, (e) => {
                    h(e === t ? 0 : -1);
                }),
            [t, f],
        ),
        {
            [c]: (0, s.t$)(f, t),
            [o]: n,
            [d]: u[n],
            role: "gridcell",
            "aria-rowindex": l,
            "aria-colindex": i,
            tabIndex: m,
            onFocus: b,
        }
    );
}

function p(e) {
    let { children: t, navigator: n } = e,
        {
            id: a,
            setFocus: i,
            containerProps: { onKeyDown: s, ref: c },
        } = n,
        o = r.useMemo(
            () => ({
                id: a,
                setFocus: i,
            }),
            [a, i],
        ),
        d = r.useMemo(
            () => ({
                onKeyDown: s,
                ref: c,
                id: a,
            }),
            [s, c, a],
        );
    return (0, l.jsx)(x.Provider, {
        value: d,
        children: (0, l.jsx)(g.Provider, {
            value: o,
            children: t,
        }),
    });
}
