n.d(t, { A: () => h });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    o = n(311907),
    c = n(732955),
    d = n(770178),
    u = n(775602),
    m = n(985018),
    f = n(576998);
let h = (e) => {
    let {
            children: t,
            gap: n = 24,
            edgeFade: i = "xl",
            hideActionsWhenDisabled: h = !0,
            className: x,
            iconButtonSize: g,
            "aria-label": p,
        } = e,
        _ = a.useId(),
        v = a.useRef(0),
        A = a.useRef(0),
        b = a.useRef(0),
        E = a.useRef(!1),
        j = a.useRef(!1),
        I = a.useRef(null),
        C = a.useRef(null),
        N = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled),
        S = (0, o.bG)([u.A], () => u.A.useReducedMotion),
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
        [y, L] = a.useState(!1),
        [k, R] = a.useState(!1),
        [O, M] = a.useState(!0),
        G = () => {
            L(A.current > v.current);
        },
        w = a.useCallback(() => {
            if (j.current) return null;
            let e = U.current;
            if (null == e) return null;
            let t = Math.floor((b.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)),
                n = Math.max(0, Math.min(e.childElementCount - 1, t));
            return (I.current = n), n;
        }, []),
        P = a.useCallback(() => {
            let e = U.current;
            null != e && (R(b.current > 0), M(b.current + e.clientWidth < e.scrollWidth), w());
        }, [w]),
        V = a.useCallback(() => {
            let e = U.current;
            if (null == e) return;
            let t = I.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    N && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [N]),
        D = (0, d.w)((e) => {
            let { contentRect: t } = e;
            (v.current = t.width), null != U.current && (b.current = U.current?.scrollLeft), G(), P(), V();
        }),
        U = a.useRef(null);
    a.useEffect(() => {
        let e = U.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (A.current = e.scrollWidth), e.scrollLeft !== b.current && (e.scrollLeft = b.current), G(), P();
        });
        Array.from(e.children).forEach((e) => {
            t.observe(e);
        });
        let n = new MutationObserver(() => {
            t.disconnect(),
                Array.from(e.children).forEach((e) => {
                    t.observe(e);
                }),
                null != C.current && C.current >= e.childElementCount && (C.current = null);
        });
        return (
            n.observe(e, { childList: !0 }),
            e.addEventListener("scrollend", P),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", P);
            }
        );
    }, [P]);
    let W = a.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = U.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - v.current);
                    (b.current = n),
                        (E.current = !0),
                        e.scrollTo({ left: n, behavior: S ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (E.current = !1), { once: !0 }),
                        P();
                    let l = w();
                    null != l && (C.current = l);
                }, 200),
            [v, P, w, S],
        ),
        F = a.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = U.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + v.current;
                    (b.current = n),
                        (E.current = !0),
                        e.scrollTo({ left: n, behavior: S ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (E.current = !1), { once: !0 }),
                        P();
                    let l = w();
                    null != l && (C.current = l);
                }, 200),
            [v, P, w, S],
        ),
        B = a.useCallback(() => {
            let e = U.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        Y = a.useCallback(() => {
            setTimeout(() => {
                if (!B()) {
                    let e = U.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        V();
                    }
                }
            }, 10);
        }, [B, V]);
    a.useEffect(() => {
        V();
    }, [N, V]);
    let H = { "--custom-edge-fade-width": `var(--space-${i})` };
    return (0, l.jsxs)("div", {
        ref: D,
        role: null != p ? "region" : void 0,
        "aria-label": p,
        style: H,
        className: r()(f.kL, x),
        children: [
            y &&
                (0, l.jsxs)("div", {
                    className: f.o1,
                    role: "group",
                    children: [
                        (0, l.jsx)("div", {
                            className: r()(f.x6, { [f.r9]: !k && h }),
                            children: (0, l.jsx)(c.K0, {
                                icon: c.Zge,
                                size: g,
                                variant: "overlay-secondary",
                                onClick: W,
                                disabled: !k,
                                "aria-label": m.intl.string(m.t.FQx1Ru),
                                "aria-hidden": !k && h,
                                "aria-controls": _,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: r()(f.x6, { [f.r9]: !O && h }),
                            children: (0, l.jsx)(c.K0, {
                                icon: c.KS6,
                                size: g,
                                variant: "overlay-secondary",
                                onClick: F,
                                disabled: !O,
                                "aria-label": m.intl.string(m.t.H4hwjn),
                                "aria-hidden": !O && h,
                                "aria-controls": _,
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)(c.BJc, {
                direction: "horizontal",
                gap: n,
                id: _,
                "aria-label": p,
                ref: U,
                className: r()(f.Y_, { [f.jL]: k, [f.w6]: O, [f.XG]: k && O, [f.DY]: N }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = U.current;
                    if (null != t) {
                        if (
                            (e.preventDefault(),
                            (null == I.current || I.current >= t.childElementCount) && w(),
                            -1 !== t.tabIndex)
                        ) {
                            let e = C.current,
                                n = (null != e && e < t.childElementCount ? e : null) ?? 0,
                                l = t.children[n];
                            null != l && (l.focus(), l.setAttribute("tabIndex", "0"), (I.current = n), V());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), Y();
                },
                onKeyDown: (e) => {
                    let t = U.current;
                    if (null == t) return;
                    let n = t.children,
                        l = I.current ?? 0,
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
                            (b.current = n),
                                n !== t.scrollLeft &&
                                    ((E.current = !0),
                                    (j.current = !0),
                                    t.scrollTo({ left: n, behavior: S ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (E.current = !1), (j.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (I.current = l),
                                (C.current = l),
                                V();
                        } else t.setAttribute("tabIndex", "0"), w();
                },
                onScroll: (e) => {
                    E.current || ((b.current = e.target.scrollLeft), P());
                },
                children: T,
            }),
        ],
    });
};
