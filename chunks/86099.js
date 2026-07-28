n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(4798),
    o = n(621466),
    c = n(982147),
    d = n(922016),
    u = n(821609),
    h = n(82495),
    p = n(324932);
let m = { north: 0, east: 90, south: 180, west: 270 },
    A = { tension: 280, friction: 30 },
    f = { tension: 140, friction: 30, clamp: !0 },
    x = l.createContext(null);
function g() {
    let e = l.useContext(x);
    if (null == e) throw Error("GuildRoomRadialMenu compound components must be rendered within <GuildRoomRadialMenu>");
    return e;
}
function C(e) {
    let { children: t, onExited: n, ariaLabel: a, dismissable: o = !1 } = e,
        { isOpen: d, setOpen: u, triggerRef: m, menuId: x, spacing: C, startAngleDeg: y, centerSingleItem: j } = g(),
        v = l.useCallback(() => {
            o && u(!1);
        }, [o, u]),
        E = (0, h.A)(null, v, m),
        N = l.useCallback(
            (e) => {
                o && "Escape" === e.key && u(!1);
            },
            [o, u],
        ),
        I = l.Children.toArray(t).filter(l.isValidElement),
        T = I.length,
        b = j && 1 === T,
        _ = l.useRef(d),
        R = l.useRef(n);
    l.useEffect(() => {
        _.current = d;
    }, [d]),
        l.useEffect(() => {
            R.current = n;
        }, [n]);
    let S = l.useRef([]),
        [P, L] = l.useState([]);
    l.useLayoutEffect(() => {
        let e = S.current.slice(0, T);
        function t() {
            L((t) => {
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
    }, [T]);
    let [O, w] = l.useState(0);
    l.useLayoutEffect(() => {
        let e = m.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = Math.max(e.offsetWidth, e.offsetHeight) / 2;
            w((e) => (e === t ? e : t));
        }
        t();
        let n = new ResizeObserver(t);
        return n.observe(e), () => n.disconnect();
    }, [m]);
    let M = O + C,
        [D] = (0, c.m)(
            T,
            (e) => {
                var t, n;
                let i,
                    l,
                    a,
                    s,
                    r = P[e] ?? { width: 0, height: 0 },
                    o = b
                        ? { x: 0, y: 0 }
                        : ((l = Math.sin((i = ((y + (360 / T) * e) * Math.PI) / 180))),
                          {
                              x:
                                  (s =
                                      M +
                                      ((a = -Math.cos(i)),
                                      (t = r.width / 2),
                                      (n = r.height / 2),
                                      Math.min(0 === l ? 1 / 0 : t / Math.abs(l), 0 === a ? 1 / 0 : n / Math.abs(a)))) *
                                  l,
                              y: s * a,
                          });
                return {
                    from: { x: 0, y: 0, opacityProgress: 0, scale: 0.5 },
                    to: d
                        ? { x: o.x, y: o.y, opacityProgress: 1, scale: 1 }
                        : { x: 0, y: 0, opacityProgress: 0, scale: 0.5 },
                    config: d ? A : f,
                    onRest: (t) => {
                        !0 !== t.finished || _.current || 0 !== e || R.current();
                    },
                };
            },
            "respect-motion-settings",
            [d, T, M, y, b, P],
        );
    return (
        l.useEffect(() => {
            E.current?.focus({ preventScroll: !0 });
        }, [E]),
        l.useEffect(() => {
            d || 0 !== T || R.current();
        }, [d, T]),
        (0, i.jsx)("div", {
            ref: E,
            id: x,
            role: "menu",
            "aria-label": a,
            tabIndex: -1,
            className: p.EQ,
            onKeyDown: N,
            children: I.map((e, t) => {
                let n = D[t];
                return (0, i.jsx)(
                    r.animated.div,
                    {
                        ref: (e) => {
                            S.current[t] = e;
                        },
                        className: s()(p.D5, { [p.bB]: !d }),
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
let y = Object.assign(
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
            f = A ? t : h,
            g = l.useCallback(
                (e) => {
                    A || p(e), n?.(e);
                },
                [A, n],
            ),
            C = l.useMemo(
                () => ({
                    isOpen: f,
                    setOpen: g,
                    triggerRef: d,
                    menuId: u,
                    spacing: s,
                    startAngleDeg: m[r],
                    centerSingleItem: o,
                }),
                [f, g, u, s, r, o],
            );
        return (0, i.jsx)(x.Provider, { value: C, children: c });
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
                { setOpen: o } = g();
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
