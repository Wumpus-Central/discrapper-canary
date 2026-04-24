a.d(t, { A: () => _ });
var r = a(627968),
    n = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(735438),
    o = a(17928),
    c = a(408278),
    d = a(548411),
    u = a(554830),
    h = a(331322),
    p = a(770178),
    m = a(775602),
    f = a(985018),
    b = a(576998);
let _ = (e) => {
    let {
            children: t,
            gap: a = 24,
            edgeFade: l = "xl",
            hideActionsWhenDisabled: _ = !0,
            className: g,
            iconButtonSize: x,
            "aria-label": v,
        } = e,
        A = n.useId(),
        y = n.useRef(0),
        E = n.useRef(0),
        I = n.useRef(0),
        S = n.useRef(!1),
        j = n.useRef(!1),
        C = n.useRef(null),
        T = n.useRef(null),
        R = (0, o.bG)([m.A], () => m.A.keyboardModeEnabled),
        w = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        k = n.useMemo(
            () =>
                n.Children.map(t, (e) =>
                    n.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : n.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        ),
        [L, N] = n.useState(!1),
        [O, P] = n.useState(!1),
        [D, M] = n.useState(!0),
        U = () => {
            N(E.current > y.current);
        },
        F = n.useCallback(() => {
            if (j.current) return null;
            let e = H.current;
            if (null == e) return null;
            let t = Math.floor((I.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)),
                a = Math.max(0, Math.min(e.childElementCount - 1, t));
            return (C.current = a), a;
        }, []),
        V = n.useCallback(() => {
            let e = H.current;
            null != e && (P(I.current > 0), M(I.current + e.clientWidth < e.scrollWidth), F());
        }, [F]),
        B = n.useCallback(() => {
            let e = H.current;
            if (null == e) return;
            let t = C.current;
            Array.from(e.children).forEach((e, a) => {
                Array.from(e.children).forEach((e) => {
                    R && a !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [R]),
        G = (0, p.w)((e) => {
            let { contentRect: t } = e;
            (y.current = t.width), null != H.current && (I.current = H.current?.scrollLeft), U(), V(), B();
        }),
        H = n.useRef(null);
    n.useEffect(() => {
        let e = H.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (E.current = e.scrollWidth), e.scrollLeft !== I.current && (e.scrollLeft = I.current), U(), V();
        });
        Array.from(e.children).forEach((e) => {
            t.observe(e);
        });
        let a = new MutationObserver(() => {
            t.disconnect(),
                Array.from(e.children).forEach((e) => {
                    t.observe(e);
                }),
                null != T.current && T.current >= e.childElementCount && (T.current = null);
        });
        return (
            a.observe(e, { childList: !0 }),
            e.addEventListener("scrollend", V),
            () => {
                t.disconnect(), a.disconnect(), e.removeEventListener("scrollend", V);
            }
        );
    }, [V]);
    let W = n.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = H.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        a = Math.max(0, t - y.current);
                    (I.current = a),
                        (S.current = !0),
                        e.scrollTo({ left: a, behavior: w ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (S.current = !1), { once: !0 }),
                        V();
                    let r = F();
                    null != r && (T.current = r);
                }, 200),
            [y, V, F, w],
        ),
        z = n.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = H.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        a = t + y.current;
                    (I.current = a),
                        (S.current = !0),
                        e.scrollTo({ left: a, behavior: w ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (S.current = !1), { once: !0 }),
                        V();
                    let r = F();
                    null != r && (T.current = r);
                }, 200),
            [y, V, F, w],
        ),
        Z = n.useCallback(() => {
            let e = H.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        Y = n.useCallback(() => {
            setTimeout(() => {
                if (!Z()) {
                    let e = H.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        B();
                    }
                }
            }, 10);
        }, [Z, B]);
    n.useEffect(() => {
        B();
    }, [R, B]);
    let K = { "--custom-edge-fade-width": `var(--space-${l})` };
    return (0, r.jsxs)("div", {
        ref: G,
        role: null != v ? "region" : void 0,
        "aria-label": v,
        style: K,
        className: i()(b.kL, g),
        children: [
            L &&
                (0, r.jsxs)("div", {
                    className: b.o1,
                    role: "group",
                    children: [
                        (0, r.jsx)("div", {
                            className: i()(b.x6, { [b.r9]: !O && _ }),
                            children: (0, r.jsx)(c.K, {
                                icon: d.Z,
                                size: x,
                                variant: "overlay-secondary",
                                onClick: W,
                                disabled: !O,
                                "aria-label": f.intl.string(f.t.FQx1Ru),
                                "aria-hidden": !O && _,
                                "aria-controls": A,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: i()(b.x6, { [b.r9]: !D && _ }),
                            children: (0, r.jsx)(c.K, {
                                icon: u.K,
                                size: x,
                                variant: "overlay-secondary",
                                onClick: z,
                                disabled: !D,
                                "aria-label": f.intl.string(f.t.H4hwjn),
                                "aria-hidden": !D && _,
                                "aria-controls": A,
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(h.B, {
                direction: "horizontal",
                gap: a,
                id: A,
                "aria-label": v,
                ref: H,
                className: i()(b.Y_, { [b.jL]: O, [b.w6]: D, [b.XG]: O && D, [b.DY]: R }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = H.current;
                    if (null != t) {
                        if (
                            (e.preventDefault(),
                            (null == C.current || C.current >= t.childElementCount) && F(),
                            -1 !== t.tabIndex)
                        ) {
                            let e = T.current,
                                a = (null != e && e < t.childElementCount ? e : null) ?? 0,
                                r = t.children[a];
                            null != r && (r.focus(), r.setAttribute("tabIndex", "0"), (C.current = a), B());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), Y();
                },
                onKeyDown: (e) => {
                    let t = H.current;
                    if (null == t) return;
                    let a = t.children,
                        r = C.current ?? 0,
                        n = a[r];
                    null != n && n.setAttribute("tabIndex", "-1");
                    let l = ["ArrowLeft"],
                        i = ["ArrowRight"];
                    if ([...l, ...i].includes(e.key))
                        if (
                            (e.preventDefault(),
                            l.includes(e.key) && (r = Math.max(0, r - 1)),
                            i.includes(e.key) && (r = Math.min(t.childElementCount - 1, r + 1)),
                            null != (n = a[r]))
                        ) {
                            n.setAttribute("tabIndex", "0"),
                                t.setAttribute("tabIndex", "-1"),
                                n.focus({ preventScroll: !0 });
                            let e = n.offsetLeft - t.clientWidth / 2 + n.offsetWidth / 2,
                                a = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                            (I.current = a),
                                a !== t.scrollLeft &&
                                    ((S.current = !0),
                                    (j.current = !0),
                                    t.scrollTo({ left: a, behavior: w ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (S.current = !1), (j.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (C.current = r),
                                (T.current = r),
                                B();
                        } else t.setAttribute("tabIndex", "0"), F();
                },
                onScroll: (e) => {
                    S.current || ((I.current = e.target.scrollLeft), V());
                },
                children: k,
            }),
        ],
    });
};
