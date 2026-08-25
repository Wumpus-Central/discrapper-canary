n.d(t, { A: () => j });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(296704),
    o = n(621466),
    c = n(717421),
    d = n(922016),
    u = n(821609),
    h = n(789645),
    p = n(82495),
    m = n(69361);
let A = { tension: 350, friction: 30 },
    f = { tension: 350, friction: 30, clamp: !0 },
    x = l.createContext(null);
function g() {
    let e = l.useContext(x);
    if (null == e) throw Error("GuildRoomRadialMenu compound components must be rendered within <GuildRoomRadialMenu>");
    return e;
}
function C(e) {
    return Math.max(0, 2 * e - 1);
}
function y(e) {
    var t;
    let n,
        a,
        o,
        d,
        u,
        h,
        x,
        y,
        { children: j, onExited: I, ariaLabel: E, dismissable: N = !1 } = e,
        { isOpen: v, setOpen: b, triggerRef: T, menuId: _, spacing: R, centerSingleItem: S } = g(),
        L = l.useCallback(() => {
            N && b(!1);
        }, [N, b]),
        O = (0, p.A)(null, L, T),
        P = l.useCallback(
            (e) => {
                N && "Escape" === e.key && b(!1);
            },
            [N, b],
        ),
        M = l.Children.toArray(j).filter(l.isValidElement),
        w = M.length,
        D = S && 1 === w,
        U = l.useRef(I);
    l.useEffect(() => {
        U.current = I;
    }, [I]);
    let V = l.useRef([]),
        [k, G] = l.useState([]);
    l.useLayoutEffect(() => {
        let e = V.current.slice(0, w);
        function t() {
            G((t) => {
                let n = e.map((e) => ({ width: e?.offsetWidth ?? 0, height: e?.offsetHeight ?? 0 }));
                return t.length === n.length && n.every((e, n) => t[n]?.width === e.width && t[n]?.height === e.height)
                    ? t
                    : n;
            });
        }
        t();
        let n = new ResizeObserver(t);
        for (let t of e) null != t && n.observe(t);
        return () => n.disconnect();
    }, [w]);
    let [B, F] = l.useState(0);
    l.useLayoutEffect(() => {
        let e = T.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = Math.max(e.offsetWidth, e.offsetHeight) / 2;
            F((e) => (e === t ? e : t));
        }
        t();
        let n = new ResizeObserver(t);
        return n.observe(e), () => n.disconnect();
    }, [T]);
    let H =
            ((t = B + R),
            (a = Math.floor((n = k.length) / 2) + 1),
            (o = n % 2 == 0),
            (u = (d = Array.from({ length: a }, (e, t) => {
                let n = C(t),
                    i = 0 === t || (o && t === a - 1) ? 1 : 2,
                    l = 0;
                for (let e = 0; e < i; e++) l = Math.max(l, k[n + e]?.height ?? 0);
                return l;
            })).reduce((e, t) => e + t, 0)),
            (h = Math.max(0, (2 * (t + (d[0] ?? 0)) - u) / (a - 1), (2 * (t + (d[a - 1] ?? 0)) - u) / (a - 1))),
            (x = 0),
            (y = d.map((e) => {
                let t = (u + (a - 1) * h) / 2 - x - e / 2;
                return (x += e + h), t;
            })),
            l.useMemo(
                () =>
                    k.map((e, n) => {
                        let i = Math.ceil(n / 2),
                            l = 0 === n ? 0 : (n - 1) % 2,
                            s = 0 === i || (o && i === a - 1) ? 1 : 2,
                            r = y[i] ?? 0,
                            c = r - ((d[i] ?? 0) / 2) * Math.sign(r),
                            u = Math.max(Math.sqrt(Math.max(0, t * t - c * c)), h / 2),
                            p = k[C(i) + l]?.width ?? 0;
                        return { x: 1 === s ? 0 : 0 === l ? -u - p / 2 : u + p / 2, y: -r };
                    }),
                [t, k, o, a, y, d, h],
            )),
        [z] = (0, c.z)(
            () => ({
                from: { progress: 0 },
                to: { progress: +!!v },
                config: v ? A : f,
                onRest: (e) => {
                    !0 !== e.finished || v || U.current();
                },
            }),
            "respect-motion-settings",
            [v],
        );
    return (
        l.useEffect(() => {
            O.current?.focus({ preventScroll: !0 });
        }, [O]),
        (0, i.jsx)(r.animated.div, {
            ref: O,
            id: _,
            role: "menu",
            "aria-label": E,
            tabIndex: -1,
            className: s()(m.EQ, { [m.U4]: !v }),
            style: {
                "--custom-radial-opacity": z.progress,
                transform: z.progress.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`),
            },
            onKeyDown: P,
            children: M.map((e, t) => {
                let n = D ? { x: 0, y: 0 } : (H[t] ?? { x: 0, y: 0 });
                return (0, i.jsx)(
                    "div",
                    {
                        ref: (e) => {
                            V.current[t] = e;
                        },
                        className: m.D5,
                        style: { transform: `translate(-50%, -50%) translate(${n.x}px, ${n.y}px)` },
                        children: e,
                    },
                    t,
                );
            }),
        })
    );
}
let j = Object.assign(
    function (e) {
        let {
                isOpen: t,
                onOpenChange: n,
                defaultOpen: a = !1,
                spacing: s = 16,
                centerSingleItem: r = !1,
                children: o,
            } = e,
            c = l.useRef(null),
            d = l.useId(),
            [u, h] = l.useState(a),
            p = void 0 !== t,
            m = p ? t : u,
            A = l.useCallback(
                (e) => {
                    p || h(e), n?.(e);
                },
                [p, n],
            ),
            f = l.useMemo(
                () => ({ isOpen: m, setOpen: A, triggerRef: c, menuId: d, spacing: s, centerSingleItem: r }),
                [m, A, d, s, r],
            );
        return (0, i.jsx)(x.Provider, { value: f, children: o });
    },
    {
        Trigger: function (e) {
            let { children: t } = e,
                { isOpen: n, setOpen: i, triggerRef: l, menuId: a } = g();
            return t({
                ref: l,
                onClick: () => i(!n),
                "aria-haspopup": "menu",
                "aria-expanded": n,
                "aria-controls": n ? a : void 0,
            });
        },
        Popup: function (e) {
            let { children: t, elevation: n = "above", "aria-label": a } = e,
                { isOpen: s, setOpen: r, triggerRef: c } = g(),
                [u, h] = l.useState(s),
                p = l.useRef(s);
            s && !u && h(!0),
                l.useEffect(() => {
                    let e = p.current;
                    if (((p.current = s), e && !s)) {
                        let e = c.current;
                        (0, o.vq)(e, HTMLElement) && e.focus({ preventScroll: !0 });
                    }
                }, [s, c]);
            let A = l.useCallback(() => h(!1), []);
            return "below" === n
                ? u
                    ? (0, i.jsx)("div", {
                          className: m.Fn,
                          children: (0, i.jsx)(y, { onExited: A, ariaLabel: a, dismissable: !0, children: t }),
                      })
                    : null
                : (0, i.jsx)(d.Y, {
                      targetElementRef: c,
                      shouldShow: u,
                      position: "center",
                      animation: d.Y.Animation.NONE,
                      nudgeAlignIntoViewport: !1,
                      autoInvert: !1,
                      spacing: 0,
                      onRequestClose: () => r(!1),
                      renderPopout: () => (0, i.jsx)(y, { onExited: A, ariaLabel: a, children: t }),
                      children: () => null,
                  });
        },
        Item: function (e) {
            let { className: t, closeOnClick: n = !0, selected: a, onClick: r, clearButtonAriaLabel: o, ...c } = e,
                { isOpen: d, setOpen: p } = g(),
                [A, f] = l.useState(a),
                [x, C] = l.useState(d);
            d !== x && (C(d), d && f(a));
            let y = (e) => {
                r?.(e), n && p(!1);
            };
            return (0, i.jsxs)("div", {
                className: m.z7,
                children: [
                    (0, i.jsx)("div", {
                        className: s()([m.AS, t]),
                        children: (0, i.jsx)(u.$, {
                            variant: a ? "overlay-primary" : "overlay-secondary",
                            size: "md",
                            onClick: y,
                            ...c,
                        }),
                    }),
                    A &&
                        (0, i.jsx)("div", {
                            className: m.AS,
                            children: (0, i.jsx)(u.$, {
                                variant: a ? "overlay-primary" : "overlay-secondary",
                                size: "md",
                                icon: h.P,
                                text: void 0,
                                onClick: y,
                                "aria-label": o,
                            }),
                        }),
                ],
            });
        },
    },
);
