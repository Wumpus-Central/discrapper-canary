"use strict";
a.d(t, { A: () => g });
var r = a(627968),
    l = a(64700),
    n = a(503698),
    i = a.n(n),
    s = a(735438),
    o = a(311907),
    d = a(408278),
    c = a(548411),
    u = a(554830),
    h = a(331322),
    p = a(770178),
    _ = a(775602),
    m = a(985018),
    b = a(576998);
let g = (e) => {
    let {
            children: t,
            gap: a = 24,
            edgeFade: n = "xl",
            hideActionsWhenDisabled: g = !0,
            className: f,
            iconButtonSize: x,
            "aria-label": v,
        } = e,
        A = l.useId(),
        E = l.useRef(0),
        y = l.useRef(0),
        j = l.useRef(0),
        I = l.useRef(!1),
        S = l.useRef(!1),
        C = l.useRef(null),
        T = l.useRef(null),
        w = (0, o.bG)([_.A], () => _.A.keyboardModeEnabled),
        R = (0, o.bG)([_.A], () => _.A.useReducedMotion),
        k = l.useMemo(
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
        [N, L] = l.useState(!1),
        [O, P] = l.useState(!1),
        [M, V] = l.useState(!0),
        U = () => {
            L(y.current > E.current);
        },
        D = l.useCallback(() => {
            if (S.current) return null;
            let e = H.current;
            if (null == e) return null;
            let t = Math.floor((j.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)),
                a = Math.max(0, Math.min(e.childElementCount - 1, t));
            return (C.current = a), a;
        }, []),
        B = l.useCallback(() => {
            let e = H.current;
            null != e && (P(j.current > 0), V(j.current + e.clientWidth < e.scrollWidth), D());
        }, [D]),
        F = l.useCallback(() => {
            let e = H.current;
            if (null == e) return;
            let t = C.current;
            Array.from(e.children).forEach((e, a) => {
                Array.from(e.children).forEach((e) => {
                    w && a !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [w]),
        G = (0, p.w)((e) => {
            let { contentRect: t } = e;
            (E.current = t.width), null != H.current && (j.current = H.current?.scrollLeft), U(), B(), F();
        }),
        H = l.useRef(null);
    l.useEffect(() => {
        let e = H.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (y.current = e.scrollWidth), e.scrollLeft !== j.current && (e.scrollLeft = j.current), U(), B();
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
            e.addEventListener("scrollend", B),
            () => {
                t.disconnect(), a.disconnect(), e.removeEventListener("scrollend", B);
            }
        );
    }, [B]);
    let W = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = H.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        a = Math.max(0, t - E.current);
                    (j.current = a),
                        (I.current = !0),
                        e.scrollTo({ left: a, behavior: R ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (I.current = !1), { once: !0 }),
                        B();
                    let r = D();
                    null != r && (T.current = r);
                }, 200),
            [E, B, D, R],
        ),
        z = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = H.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        a = t + E.current;
                    (j.current = a),
                        (I.current = !0),
                        e.scrollTo({ left: a, behavior: R ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (I.current = !1), { once: !0 }),
                        B();
                    let r = D();
                    null != r && (T.current = r);
                }, 200),
            [E, B, D, R],
        ),
        Z = l.useCallback(() => {
            let e = H.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        Y = l.useCallback(() => {
            setTimeout(() => {
                if (!Z()) {
                    let e = H.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        F();
                    }
                }
            }, 10);
        }, [Z, F]);
    l.useEffect(() => {
        F();
    }, [w, F]);
    let K = { "--custom-edge-fade-width": `var(--space-${n})` };
    return (0, r.jsxs)("div", {
        ref: G,
        role: null != v ? "region" : void 0,
        "aria-label": v,
        style: K,
        className: i()(b.kL, f),
        children: [
            N &&
                (0, r.jsxs)("div", {
                    className: b.o1,
                    role: "group",
                    children: [
                        (0, r.jsx)("div", {
                            className: i()(b.x6, { [b.r9]: !O && g }),
                            children: (0, r.jsx)(d.K, {
                                icon: c.Z,
                                size: x,
                                variant: "overlay-secondary",
                                onClick: W,
                                disabled: !O,
                                "aria-label": m.intl.string(m.t.FQx1Ru),
                                "aria-hidden": !O && g,
                                "aria-controls": A,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: i()(b.x6, { [b.r9]: !M && g }),
                            children: (0, r.jsx)(d.K, {
                                icon: u.K,
                                size: x,
                                variant: "overlay-secondary",
                                onClick: z,
                                disabled: !M,
                                "aria-label": m.intl.string(m.t.H4hwjn),
                                "aria-hidden": !M && g,
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
                className: i()(b.Y_, { [b.jL]: O, [b.w6]: M, [b.XG]: O && M, [b.DY]: w }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = H.current;
                    if (null != t) {
                        if (
                            (e.preventDefault(),
                            (null == C.current || C.current >= t.childElementCount) && D(),
                            -1 !== t.tabIndex)
                        ) {
                            let e = T.current,
                                a = (null != e && e < t.childElementCount ? e : null) ?? 0,
                                r = t.children[a];
                            null != r && (r.focus(), r.setAttribute("tabIndex", "0"), (C.current = a), F());
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
                        l = a[r];
                    null != l && l.setAttribute("tabIndex", "-1");
                    let n = ["ArrowLeft"],
                        i = ["ArrowRight"];
                    if ([...n, ...i].includes(e.key))
                        if (
                            (e.preventDefault(),
                            n.includes(e.key) && (r = Math.max(0, r - 1)),
                            i.includes(e.key) && (r = Math.min(t.childElementCount - 1, r + 1)),
                            null != (l = a[r]))
                        ) {
                            l.setAttribute("tabIndex", "0"),
                                t.setAttribute("tabIndex", "-1"),
                                l.focus({ preventScroll: !0 });
                            let e = l.offsetLeft - t.clientWidth / 2 + l.offsetWidth / 2,
                                a = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                            (j.current = a),
                                a !== t.scrollLeft &&
                                    ((I.current = !0),
                                    (S.current = !0),
                                    t.scrollTo({ left: a, behavior: R ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (I.current = !1), (S.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (C.current = r),
                                (T.current = r),
                                F();
                        } else t.setAttribute("tabIndex", "0"), D();
                },
                onScroll: (e) => {
                    I.current || ((j.current = e.target.scrollLeft), B());
                },
                children: k,
            }),
        ],
    });
};
