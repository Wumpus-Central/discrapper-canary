"use strict";
n.d(t, { A: () => g });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(735438),
    c = n(17928),
    o = n(408278),
    d = n(548411),
    u = n(554830),
    m = n(331322),
    f = n(770178),
    h = n(775602),
    _ = n(985018),
    p = n(576998);
let g = (e) => {
    let {
            children: t,
            gap: n = 24,
            edgeFade: l = "xl",
            hideActionsWhenDisabled: g = !0,
            className: x,
            iconButtonSize: b,
            "aria-label": E,
        } = e,
        v = i.useId(),
        A = i.useRef(0),
        I = i.useRef(0),
        N = i.useRef(0),
        S = i.useRef(!1),
        j = i.useRef(!1),
        C = i.useRef(null),
        y = i.useRef(null),
        R = (0, c.bG)([h.A], () => h.A.keyboardModeEnabled),
        T = (0, c.bG)([h.A], () => h.A.useReducedMotion),
        L = i.useMemo(
            () =>
                i.Children.map(t, (e) =>
                    i.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : i.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        ),
        [k, M] = i.useState(!1),
        [O, w] = i.useState(!1),
        [P, G] = i.useState(!0),
        D = () => {
            M(I.current > A.current);
        },
        U = i.useCallback(() => {
            if (j.current) return null;
            let e = B.current;
            if (null == e) return null;
            let t = Math.floor((N.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)),
                n = Math.max(0, Math.min(e.childElementCount - 1, t));
            return (C.current = n), n;
        }, []),
        F = i.useCallback(() => {
            let e = B.current;
            null != e && (w(N.current > 0), G(N.current + e.clientWidth < e.scrollWidth), U());
        }, [U]),
        V = i.useCallback(() => {
            let e = B.current;
            if (null == e) return;
            let t = C.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    R && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [R]),
        W = (0, f.w)((e) => {
            let { contentRect: t } = e;
            (A.current = t.width), null != B.current && (N.current = B.current?.scrollLeft), D(), F(), V();
        }),
        B = i.useRef(null);
    i.useEffect(() => {
        let e = B.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (I.current = e.scrollWidth), e.scrollLeft !== N.current && (e.scrollLeft = N.current), D(), F();
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
            e.addEventListener("scrollend", F),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", F);
            }
        );
    }, [F]);
    let H = i.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = B.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - A.current);
                    (N.current = n),
                        (S.current = !0),
                        e.scrollTo({ left: n, behavior: T ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (S.current = !1), { once: !0 }),
                        F();
                    let a = U();
                    null != a && (y.current = a);
                }, 200),
            [A, F, U, T],
        ),
        Y = i.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = B.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + A.current;
                    (N.current = n),
                        (S.current = !0),
                        e.scrollTo({ left: n, behavior: T ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (S.current = !1), { once: !0 }),
                        F();
                    let a = U();
                    null != a && (y.current = a);
                }, 200),
            [A, F, U, T],
        ),
        z = i.useCallback(() => {
            let e = B.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        X = i.useCallback(() => {
            setTimeout(() => {
                if (!z()) {
                    let e = B.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        V();
                    }
                }
            }, 10);
        }, [z, V]);
    i.useEffect(() => {
        V();
    }, [R, V]);
    let K = { "--custom-edge-fade-width": `var(--space-${l})` };
    return (0, a.jsxs)("div", {
        ref: W,
        role: null != E ? "region" : void 0,
        "aria-label": E,
        style: K,
        className: r()(p.kL, x),
        children: [
            k &&
                (0, a.jsxs)("div", {
                    className: p.o1,
                    role: "group",
                    children: [
                        (0, a.jsx)("div", {
                            className: r()(p.x6, { [p.r9]: !O && g }),
                            children: (0, a.jsx)(o.K, {
                                icon: d.Z,
                                size: b,
                                variant: "overlay-secondary",
                                onClick: H,
                                disabled: !O,
                                "aria-label": _.intl.string(_.t.FQx1Ru),
                                "aria-hidden": !O && g,
                                "aria-controls": v,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: r()(p.x6, { [p.r9]: !P && g }),
                            children: (0, a.jsx)(o.K, {
                                icon: u.K,
                                size: b,
                                variant: "overlay-secondary",
                                onClick: Y,
                                disabled: !P,
                                "aria-label": _.intl.string(_.t.H4hwjn),
                                "aria-hidden": !P && g,
                                "aria-controls": v,
                            }),
                        }),
                    ],
                }),
            (0, a.jsx)(m.B, {
                direction: "horizontal",
                gap: n,
                id: v,
                "aria-label": E,
                ref: B,
                className: r()(p.Y_, { [p.jL]: O, [p.w6]: P, [p.XG]: O && P, [p.DY]: R }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = B.current;
                    if (null != t) {
                        if (
                            (e.preventDefault(),
                            (null == C.current || C.current >= t.childElementCount) && U(),
                            -1 !== t.tabIndex)
                        ) {
                            let e = y.current,
                                n = (null != e && e < t.childElementCount ? e : null) ?? 0,
                                a = t.children[n];
                            null != a && (a.focus(), a.setAttribute("tabIndex", "0"), (C.current = n), V());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), X();
                },
                onKeyDown: (e) => {
                    let t = B.current;
                    if (null == t) return;
                    let n = t.children,
                        a = C.current ?? 0,
                        i = n[a];
                    null != i && i.setAttribute("tabIndex", "-1");
                    let l = ["ArrowLeft"],
                        r = ["ArrowRight"];
                    if ([...l, ...r].includes(e.key))
                        if (
                            (e.preventDefault(),
                            l.includes(e.key) && (a = Math.max(0, a - 1)),
                            r.includes(e.key) && (a = Math.min(t.childElementCount - 1, a + 1)),
                            null != (i = n[a]))
                        ) {
                            i.setAttribute("tabIndex", "0"),
                                t.setAttribute("tabIndex", "-1"),
                                i.focus({ preventScroll: !0 });
                            let e = i.offsetLeft - t.clientWidth / 2 + i.offsetWidth / 2,
                                n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                            (N.current = n),
                                n !== t.scrollLeft &&
                                    ((S.current = !0),
                                    (j.current = !0),
                                    t.scrollTo({ left: n, behavior: T ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (S.current = !1), (j.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (C.current = a),
                                (y.current = a),
                                V();
                        } else t.setAttribute("tabIndex", "0"), U();
                },
                onScroll: (e) => {
                    S.current || ((N.current = e.target.scrollLeft), F());
                },
                children: L,
            }),
        ],
    });
};
