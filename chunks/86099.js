n.d(t, { A: () => y });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(534740),
    o = n(621466),
    c = n(717421),
    d = n(922016),
    u = n(821609),
    h = n(82495),
    p = n(324932);
let m = { north: 0, east: 90, south: 180, west: 270 },
    A = { tension: 350, friction: 30 },
    f = { tension: 350, friction: 30, clamp: !0 },
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
        b = I.length,
        T = j && 1 === b,
        _ = l.useRef(n);
    l.useEffect(() => {
        _.current = n;
    }, [n]);
    let R = l.useRef([]),
        [S, P] = l.useState([]);
    l.useLayoutEffect(() => {
        let e = R.current.slice(0, b);
        function t() {
            P((t) => {
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
    }, [b]);
    let [L, w] = l.useState(0);
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
    let O = L + C,
        [M] = (0, c.z)(
            () => ({
                from: { progress: 0 },
                to: { progress: +!!d },
                config: d ? A : f,
                onRest: (e) => {
                    !0 !== e.finished || d || _.current();
                },
            }),
            "respect-motion-settings",
            [d],
        );
    return (
        l.useEffect(() => {
            E.current?.focus({ preventScroll: !0 });
        }, [E]),
        (0, i.jsx)(r.animated.div, {
            ref: E,
            id: x,
            role: "menu",
            "aria-label": a,
            tabIndex: -1,
            className: s()(p.EQ, { [p.U4]: !d }),
            style: {
                "--custom-radial-opacity": M.progress,
                transform: M.progress.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`),
            },
            onKeyDown: N,
            children: I.map((e, t) => {
                var n, l;
                let a,
                    s,
                    r,
                    o,
                    c = S[t] ?? { width: 0, height: 0 },
                    d = T
                        ? { x: 0, y: 0 }
                        : ((s = Math.sin((a = ((y + (360 / b) * t) * Math.PI) / 180))),
                          {
                              x:
                                  (o =
                                      O +
                                      ((r = -Math.cos(a)),
                                      (n = c.width / 2),
                                      (l = c.height / 2),
                                      Math.min(0 === s ? 1 / 0 : n / Math.abs(s), 0 === r ? 1 / 0 : l / Math.abs(r)))) *
                                  s,
                              y: o * r,
                          });
                return (0, i.jsx)(
                    "div",
                    {
                        ref: (e) => {
                            R.current[t] = e;
                        },
                        className: p.D5,
                        style: { transform: `translate(-50%, -50%) translate(${d.x}px, ${d.y}px)` },
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
