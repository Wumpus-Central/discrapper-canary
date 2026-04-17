n.d(t, { A: () => x });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    o = n(311907),
    c = n(732955),
    d = n(770178),
    u = n(775602),
    m = n(985018),
    f = n(576998);
let x = (e) => {
    let {
            children: t,
            gap: n = 24,
            edgeFade: i = "xl",
            hideActionsWhenDisabled: x = !0,
            className: h,
            iconButtonSize: g,
            "aria-label": p,
        } = e,
        _ = l.useId(),
        v = l.useRef(0),
        A = l.useRef(0),
        b = l.useRef(0),
        E = l.useRef(!1),
        j = l.useRef(!1),
        I = l.useRef(null),
        C = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled),
        N = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        S = l.useMemo(
            () =>
                l.Children.map(t, (e) =>
                    l.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : l.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        ),
        [T, y] = l.useState(!1),
        [L, k] = l.useState(!1),
        [R, O] = l.useState(!0),
        M = () => {
            y(A.current > v.current);
        },
        G = l.useCallback(() => {
            if (j.current) return;
            let e = D.current;
            if (null == e) return;
            let t = Math.floor((b.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
            I.current = Math.max(0, Math.min(e.childElementCount - 1, t));
        }, []),
        w = l.useCallback(() => {
            let e = D.current;
            null != e && (k(b.current > 0), O(b.current + e.clientWidth < e.scrollWidth), G());
        }, [G]),
        P = l.useCallback(() => {
            let e = D.current;
            if (null == e) return;
            let t = I.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    C && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [C]),
        V = (0, d.w)((e) => {
            let { contentRect: t } = e;
            (v.current = t.width), null != D.current && (b.current = D.current?.scrollLeft), M(), w(), P();
        }),
        D = l.useRef(null);
    l.useEffect(() => {
        let e = D.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (A.current = e.scrollWidth), e.scrollLeft !== b.current && (e.scrollLeft = b.current), M(), w();
        });
        Array.from(e.children).forEach((e) => {
            t.observe(e);
        });
        let n = new MutationObserver(() => {
            t.disconnect(),
                Array.from(e.children).forEach((e) => {
                    t.observe(e);
                });
        });
        return (
            n.observe(e, { childList: !0 }),
            e.addEventListener("scrollend", w),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", w);
            }
        );
    }, [w]);
    let U = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = D.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - v.current);
                    (b.current = n),
                        (E.current = !0),
                        e.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (E.current = !1), { once: !0 }),
                        w();
                }, 200),
            [v, w, N],
        ),
        W = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = D.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + v.current;
                    (b.current = n),
                        (E.current = !0),
                        e.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (E.current = !1), { once: !0 }),
                        w();
                }, 200),
            [v, w, N],
        ),
        F = l.useCallback(() => {
            let e = D.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        B = l.useCallback(() => {
            setTimeout(() => {
                if (!F()) {
                    let e = D.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        P();
                    }
                }
            }, 10);
        }, [F, P]);
    l.useEffect(() => {
        P();
    }, [C, P]);
    let Y = { "--custom-edge-fade-width": `var(--space-${i})` };
    return (0, a.jsxs)("div", {
        ref: V,
        role: null != p ? "region" : void 0,
        "aria-label": p,
        style: Y,
        className: r()(f.kL, h),
        children: [
            T &&
                (0, a.jsxs)("div", {
                    className: f.o1,
                    role: "group",
                    children: [
                        (0, a.jsx)("div", {
                            className: r()(f.x6, { [f.r9]: !L && x }),
                            children: (0, a.jsx)(c.K0, {
                                icon: c.Zge,
                                size: g,
                                variant: "overlay-secondary",
                                onClick: U,
                                disabled: !L,
                                "aria-label": m.intl.string(m.t.FQx1Ru),
                                "aria-hidden": !L && x,
                                "aria-controls": _,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: r()(f.x6, { [f.r9]: !R && x }),
                            children: (0, a.jsx)(c.K0, {
                                icon: c.KS6,
                                size: g,
                                variant: "overlay-secondary",
                                onClick: W,
                                disabled: !R,
                                "aria-label": m.intl.string(m.t.H4hwjn),
                                "aria-hidden": !R && x,
                                "aria-controls": _,
                            }),
                        }),
                    ],
                }),
            (0, a.jsx)(c.BJc, {
                direction: "horizontal",
                gap: n,
                id: _,
                "aria-label": p,
                ref: D,
                className: r()(f.Y_, { [f.jL]: L, [f.w6]: R, [f.XG]: L && R, [f.DY]: C }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = D.current;
                    if (null != t) {
                        if (
                            (e.preventDefault(),
                            (null == I.current || I.current >= t.childElementCount) && G(),
                            -1 !== t.tabIndex)
                        ) {
                            let e = I?.current ?? 0,
                                n = t.children[e];
                            null != n && (n.focus(), n.setAttribute("tabIndex", "0"), (I.current = e), P());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), B();
                },
                onKeyDown: (e) => {
                    let t = D.current;
                    if (null == t) return;
                    let n = t.children,
                        a = I.current ?? 0,
                        l = n[a];
                    null != l && l.setAttribute("tabIndex", "-1");
                    let i = ["ArrowLeft"],
                        r = ["ArrowRight"];
                    if ([...i, ...r].includes(e.key))
                        if (
                            (e.preventDefault(),
                            i.includes(e.key) && (a = Math.max(0, a - 1)),
                            r.includes(e.key) && (a = Math.min(t.childElementCount - 1, a + 1)),
                            null != (l = n[a]))
                        ) {
                            l.setAttribute("tabIndex", "0"),
                                t.setAttribute("tabIndex", "-1"),
                                l.focus({ preventScroll: !0 });
                            let e = l.offsetLeft - t.clientWidth / 2 + l.offsetWidth / 2,
                                n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                            (b.current = n),
                                n !== t.scrollLeft &&
                                    ((E.current = !0),
                                    (j.current = !0),
                                    t.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (E.current = !1), (j.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (I.current = a),
                                P();
                        } else t.setAttribute("tabIndex", "0"), G();
                },
                onScroll: (e) => {
                    E.current || ((b.current = e.target.scrollLeft), w());
                },
                children: S,
            }),
        ],
    });
};
