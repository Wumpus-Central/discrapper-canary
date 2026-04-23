n.d(t, { A: () => p });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    o = n(17928),
    c = n(408278),
    d = n(548411),
    u = n(554830),
    m = n(331322),
    h = n(770178),
    f = n(775602),
    _ = n(985018),
    g = n(576998);
let p = (e) => {
    let {
            children: t,
            gap: n = 24,
            edgeFade: i = "xl",
            hideActionsWhenDisabled: p = !0,
            className: x,
            iconButtonSize: E,
            "aria-label": v,
        } = e,
        A = a.useId(),
        I = a.useRef(0),
        b = a.useRef(0),
        j = a.useRef(0),
        C = a.useRef(!1),
        N = a.useRef(!1),
        S = a.useRef(null),
        y = a.useRef(null),
        R = (0, o.bG)([f.A], () => f.A.keyboardModeEnabled),
        L = (0, o.bG)([f.A], () => f.A.useReducedMotion),
        T = a.useMemo(
            () =>
                a.Children.map(t, (e) =>
                    a.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : a.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        ),
        [k, w] = a.useState(!1),
        [M, O] = a.useState(!1),
        [G, P] = a.useState(!0),
        D = () => {
            w(b.current > I.current);
        },
        U = a.useCallback(() => {
            if (N.current) return null;
            let e = B.current;
            if (null == e) return null;
            let t = Math.floor((j.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)),
                n = Math.max(0, Math.min(e.childElementCount - 1, t));
            return (S.current = n), n;
        }, []),
        V = a.useCallback(() => {
            let e = B.current;
            null != e && (O(j.current > 0), P(j.current + e.clientWidth < e.scrollWidth), U());
        }, [U]),
        F = a.useCallback(() => {
            let e = B.current;
            if (null == e) return;
            let t = S.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    R && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [R]),
        W = (0, h.w)((e) => {
            let { contentRect: t } = e;
            (I.current = t.width), null != B.current && (j.current = B.current?.scrollLeft), D(), V(), F();
        }),
        B = a.useRef(null);
    a.useEffect(() => {
        let e = B.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (b.current = e.scrollWidth), e.scrollLeft !== j.current && (e.scrollLeft = j.current), D(), V();
        });
        Array.from(e.children).forEach((e) => {
            t.observe(e);
        });
        let n = new MutationObserver(() => {
            t.disconnect(),
                Array.from(e.children).forEach((e) => {
                    t.observe(e);
                }),
                null != y.current && y.current >= e.childElementCount && (y.current = null);
        });
        return (
            n.observe(e, { childList: !0 }),
            e.addEventListener("scrollend", V),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", V);
            }
        );
    }, [V]);
    let H = a.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = B.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - I.current);
                    (j.current = n),
                        (C.current = !0),
                        e.scrollTo({ left: n, behavior: L ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (C.current = !1), { once: !0 }),
                        V();
                    let l = U();
                    null != l && (y.current = l);
                }, 200),
            [I, V, U, L],
        ),
        Y = a.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = B.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + I.current;
                    (j.current = n),
                        (C.current = !0),
                        e.scrollTo({ left: n, behavior: L ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (C.current = !1), { once: !0 }),
                        V();
                    let l = U();
                    null != l && (y.current = l);
                }, 200),
            [I, V, U, L],
        ),
        z = a.useCallback(() => {
            let e = B.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        K = a.useCallback(() => {
            setTimeout(() => {
                if (!z()) {
                    let e = B.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        F();
                    }
                }
            }, 10);
        }, [z, F]);
    a.useEffect(() => {
        F();
    }, [R, F]);
    let Z = { "--custom-edge-fade-width": `var(--space-${i})` };
    return (0, l.jsxs)("div", {
        ref: W,
        role: null != v ? "region" : void 0,
        "aria-label": v,
        style: Z,
        className: r()(g.kL, x),
        children: [
            k &&
                (0, l.jsxs)("div", {
                    className: g.o1,
                    role: "group",
                    children: [
                        (0, l.jsx)("div", {
                            className: r()(g.x6, { [g.r9]: !M && p }),
                            children: (0, l.jsx)(c.K, {
                                icon: d.Z,
                                size: E,
                                variant: "overlay-secondary",
                                onClick: H,
                                disabled: !M,
                                "aria-label": _.intl.string(_.t.FQx1Ru),
                                "aria-hidden": !M && p,
                                "aria-controls": A,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: r()(g.x6, { [g.r9]: !G && p }),
                            children: (0, l.jsx)(c.K, {
                                icon: u.K,
                                size: E,
                                variant: "overlay-secondary",
                                onClick: Y,
                                disabled: !G,
                                "aria-label": _.intl.string(_.t.H4hwjn),
                                "aria-hidden": !G && p,
                                "aria-controls": A,
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)(m.B, {
                direction: "horizontal",
                gap: n,
                id: A,
                "aria-label": v,
                ref: B,
                className: r()(g.Y_, { [g.jL]: M, [g.w6]: G, [g.XG]: M && G, [g.DY]: R }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = B.current;
                    if (null != t) {
                        if (
                            (e.preventDefault(),
                            (null == S.current || S.current >= t.childElementCount) && U(),
                            -1 !== t.tabIndex)
                        ) {
                            let e = y.current,
                                n = (null != e && e < t.childElementCount ? e : null) ?? 0,
                                l = t.children[n];
                            null != l && (l.focus(), l.setAttribute("tabIndex", "0"), (S.current = n), F());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), K();
                },
                onKeyDown: (e) => {
                    let t = B.current;
                    if (null == t) return;
                    let n = t.children,
                        l = S.current ?? 0,
                        a = n[l];
                    null != a && a.setAttribute("tabIndex", "-1");
                    let i = ["ArrowLeft"],
                        r = ["ArrowRight"];
                    if ([...i, ...r].includes(e.key))
                        if (
                            (e.preventDefault(),
                            i.includes(e.key) && (l = Math.max(0, l - 1)),
                            r.includes(e.key) && (l = Math.min(t.childElementCount - 1, l + 1)),
                            null != (a = n[l]))
                        ) {
                            a.setAttribute("tabIndex", "0"),
                                t.setAttribute("tabIndex", "-1"),
                                a.focus({ preventScroll: !0 });
                            let e = a.offsetLeft - t.clientWidth / 2 + a.offsetWidth / 2,
                                n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                            (j.current = n),
                                n !== t.scrollLeft &&
                                    ((C.current = !0),
                                    (N.current = !0),
                                    t.scrollTo({ left: n, behavior: L ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (C.current = !1), (N.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (S.current = l),
                                (y.current = l),
                                F();
                        } else t.setAttribute("tabIndex", "0"), U();
                },
                onScroll: (e) => {
                    C.current || ((j.current = e.target.scrollLeft), V());
                },
                children: T,
            }),
        ],
    });
};
