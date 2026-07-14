n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(580929),
    o = n(621466),
    c = n(982147),
    d = n(922016),
    u = n(821609),
    h = n(82495),
    p = n(170924);
let m = { north: 0, east: 90, south: 180, west: 270 },
    A = { tension: 280, friction: 30 },
    x = { tension: 320, friction: 30, clamp: !0 },
    g = l.createContext(null);
function f() {
    let e = l.useContext(g);
    if (null == e) throw Error("GuildRoomRadialMenu compound components must be rendered within <GuildRoomRadialMenu>");
    return e;
}
function C(e) {
    let { children: t, onExited: n, ariaLabel: a, dismissable: s = !1 } = e,
        { isOpen: o, setOpen: d, triggerRef: u, menuId: m, spacing: g, startAngleDeg: C, centerSingleItem: j } = f(),
        y = l.useCallback(() => {
            s && d(!1);
        }, [s, d]),
        v = (0, h.A)(null, y, u),
        E = l.useCallback(
            (e) => {
                s && "Escape" === e.key && d(!1);
            },
            [s, d],
        ),
        N = l.Children.toArray(t).filter(l.isValidElement),
        I = N.length,
        T = j && 1 === I,
        b = l.useRef(o),
        _ = l.useRef(n);
    l.useEffect(() => {
        b.current = o;
    }, [o]),
        l.useEffect(() => {
            _.current = n;
        }, [n]);
    let S = l.useRef([]),
        [R, P] = l.useState([]);
    l.useLayoutEffect(() => {
        let e = S.current.slice(0, I),
            t = () => {
                P((t) => {
                    let n = e.map((e) => ({ width: e?.offsetWidth ?? 0, height: e?.offsetHeight ?? 0 }));
                    return t.length === n.length &&
                        n.every((e, n) => t[n]?.width === e.width && t[n]?.height === e.height)
                        ? t
                        : n;
                });
            };
        t();
        let n = new ResizeObserver(t);
        for (let t of e) null != t && n.observe(t);
        return () => n.disconnect();
    }, [I]);
    let [O, L] = l.useState(0);
    l.useLayoutEffect(() => {
        let e = u.current;
        if (null == e) return;
        let t = () => {
            let t = Math.max(e.offsetWidth, e.offsetHeight) / 2;
            L((e) => (e === t ? e : t));
        };
        t();
        let n = new ResizeObserver(t);
        return n.observe(e), () => n.disconnect();
    }, [u]);
    let w = O + g,
        [D] = (0, c.m)(
            I,
            (e) => {
                var t, n;
                let i,
                    l,
                    a,
                    s,
                    r = R[e] ?? { width: 0, height: 0 },
                    c = T
                        ? { x: 0, y: 0 }
                        : ((l = Math.sin((i = ((C + (360 / I) * e) * Math.PI) / 180))),
                          {
                              x:
                                  (s =
                                      w +
                                      ((a = -Math.cos(i)),
                                      (t = r.width / 2),
                                      (n = r.height / 2),
                                      Math.min(0 === l ? 1 / 0 : t / Math.abs(l), 0 === a ? 1 / 0 : n / Math.abs(a)))) *
                                  l,
                              y: s * a,
                          });
                return {
                    from: { x: 0, y: 0, opacityProgress: 0, scale: 0.5 },
                    to: o
                        ? { x: c.x, y: c.y, opacityProgress: 1, scale: 1 }
                        : { x: 0, y: 0, opacityProgress: 0, scale: 0.5 },
                    config: o ? A : x,
                    onRest: (t) => {
                        !0 !== t.finished || b.current || 0 !== e || _.current();
                    },
                };
            },
            "respect-motion-settings",
            [o, I, w, C, T, R],
        );
    return (
        l.useEffect(() => {
            v.current?.focus({ preventScroll: !0 });
        }, [v]),
        l.useEffect(() => {
            o || 0 !== I || _.current();
        }, [o, I]),
        (0, i.jsx)("div", {
            ref: v,
            id: m,
            role: "menu",
            "aria-label": a,
            tabIndex: -1,
            className: p.EQ,
            onKeyDown: E,
            children: N.map((e, t) => {
                let n = D[t];
                return (0, i.jsx)(
                    r.animated.div,
                    {
                        ref: (e) => {
                            S.current[t] = e;
                        },
                        className: p.D5,
                        style:
                            null == n
                                ? {}
                                : {
                                      opacity: n.opacityProgress.to([0, 0.5, 1], [0, 0, 1], "clamp"),
                                      transform: (0, r.to)(
                                          [n.x, n.y, n.scale],
                                          (e, t, n) => `translate(-50%, -50%) translate(${e}px, ${t}px) scale(${n})`,
                                      ),
                                  },
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
                startPosition: r = "north",
                centerSingleItem: o = !1,
                children: c,
            } = e,
            d = l.useRef(null),
            u = l.useId(),
            [h, p] = l.useState(a),
            A = void 0 !== t,
            x = A ? t : h,
            f = l.useCallback(
                (e) => {
                    A || p(e), n?.(e);
                },
                [A, n],
            ),
            C = l.useMemo(
                () => ({
                    isOpen: x,
                    setOpen: f,
                    triggerRef: d,
                    menuId: u,
                    spacing: s,
                    startAngleDeg: m[r],
                    centerSingleItem: o,
                }),
                [x, f, u, s, r, o],
            );
        return (0, i.jsx)(g.Provider, { value: C, children: c });
    },
    {
        Trigger: function (e) {
            let { children: t } = e,
                { isOpen: n, setOpen: i, triggerRef: l, menuId: a } = f();
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
                { isOpen: s, setOpen: r, triggerRef: c } = f(),
                [u, h] = l.useState(s),
                m = l.useRef(s);
            s && !u && h(!0),
                l.useEffect(() => {
                    let e = m.current;
                    if (((m.current = s), e && !s)) {
                        let e = c.current;
                        (0, o.vq)(e, HTMLElement) && e.focus({ preventScroll: !0 });
                    }
                }, [s, c]);
            let A = l.useCallback(() => h(!1), []);
            return "below" === n
                ? u
                    ? (0, i.jsx)("div", {
                          className: p.Fn,
                          children: (0, i.jsx)(C, { onExited: A, ariaLabel: a, dismissable: !0, children: t }),
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
                      renderPopout: () => (0, i.jsx)(C, { onExited: A, ariaLabel: a, children: t }),
                      children: () => null,
                  });
        },
        Item: function (e) {
            let { className: t, closeOnClick: n = !0, selected: l, onClick: a, ...r } = e,
                { setOpen: o } = f();
            return (0, i.jsx)("div", {
                className: s()([p.AS, t]),
                children: (0, i.jsx)(u.$, {
                    variant: l ? "overlay-primary" : "overlay-secondary",
                    size: "sm",
                    onClick: (e) => {
                        a?.(e), n && o(!1);
                    },
                    ...r,
                }),
            });
        },
    },
);
