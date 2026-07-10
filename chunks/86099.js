n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(580929),
    s = n(621466),
    r = n(982147),
    o = n(922016),
    c = n(170709),
    d = n(573228);
let u = { north: 0, east: 90, south: 180, west: 270 },
    p = { tension: 280, friction: 18 },
    h = { tension: 320, friction: 30, clamp: !0 },
    m = l.createContext(null);
function A() {
    let e = l.useContext(m);
    if (null == e) throw Error("GuildRoomRadialMenu compound components must be rendered within <GuildRoomRadialMenu>");
    return e;
}
function x(e) {
    let { children: t, onExited: n, ariaLabel: s } = e,
        { isOpen: o, menuId: c, radius: u, startAngleDeg: m, centerSingleItem: x } = A(),
        g = l.useRef(null),
        f = l.Children.toArray(t).filter(l.isValidElement),
        C = f.length,
        j = x && 1 === C,
        y = l.useRef(o),
        v = l.useRef(n);
    l.useEffect(() => {
        y.current = o;
    }, [o]),
        l.useEffect(() => {
            v.current = n;
        }, [n]);
    let [E] = (0, r.m)(
        C,
        (e) => {
            let t,
                n = j
                    ? { x: 0, y: 0 }
                    : { x: u * Math.sin((t = ((m + (360 / C) * e) * Math.PI) / 180)), y: -u * Math.cos(t) };
            return {
                from: { x: 0, y: 0, opacity: 0, scale: 0.5 },
                to: o ? { x: n.x, y: n.y, opacity: 1, scale: 1 } : { x: 0, y: 0, opacity: 0, scale: 0.5 },
                config: o ? p : h,
                onRest: (t) => {
                    !0 !== t.finished || y.current || 0 !== e || v.current();
                },
            };
        },
        "respect-motion-settings",
        [o, C, u, m, j],
    );
    return (
        l.useEffect(() => {
            g.current?.focus({ preventScroll: !0 });
        }, []),
        l.useEffect(() => {
            o || 0 !== C || v.current();
        }, [o, C]),
        (0, i.jsx)("div", {
            ref: g,
            id: c,
            role: "menu",
            "aria-label": s,
            tabIndex: -1,
            className: d.E,
            children: f.map((e, t) => {
                let n = E[t];
                return (0, i.jsx)(
                    a.animated.div,
                    {
                        className: d.D,
                        style:
                            null == n
                                ? {}
                                : {
                                      opacity: `${n.opacity}`,
                                      transform: (0, a.to)(
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
let g = Object.assign(
    function (e) {
        let {
                isOpen: t,
                onOpenChange: n,
                defaultOpen: a = !1,
                radius: s = 56,
                startPosition: r = "north",
                centerSingleItem: o = !1,
                children: c,
            } = e,
            d = l.useRef(null),
            p = l.useId(),
            [h, A] = l.useState(a),
            x = void 0 !== t,
            g = x ? t : h,
            f = l.useCallback(
                (e) => {
                    x || A(e), n?.(e);
                },
                [x, n],
            ),
            C = l.useMemo(
                () => ({
                    isOpen: g,
                    setOpen: f,
                    triggerRef: d,
                    menuId: p,
                    radius: s,
                    startAngleDeg: u[r],
                    centerSingleItem: o,
                }),
                [g, f, p, s, r, o],
            );
        return (0, i.jsx)(m.Provider, { value: C, children: c });
    },
    {
        Trigger: function (e) {
            let { children: t } = e,
                { isOpen: n, setOpen: i, triggerRef: l, menuId: a } = A();
            return t({
                ref: l,
                onClick: () => i(!n),
                "aria-haspopup": "menu",
                "aria-expanded": n,
                "aria-controls": n ? a : void 0,
            });
        },
        Popup: function (e) {
            let { children: t, "aria-label": n } = e,
                { isOpen: a, setOpen: r, triggerRef: c } = A(),
                [d, u] = l.useState(a),
                p = l.useRef(a);
            a && !d && u(!0),
                l.useEffect(() => {
                    let e = p.current;
                    if (((p.current = a), e && !a)) {
                        let e = c.current;
                        (0, s.vq)(e, HTMLElement) && e.focus({ preventScroll: !0 });
                    }
                }, [a, c]);
            let h = l.useCallback(() => u(!1), []);
            return (0, i.jsx)(o.Y, {
                targetElementRef: c,
                shouldShow: d,
                position: "center",
                animation: o.Y.Animation.NONE,
                nudgeAlignIntoViewport: !1,
                autoInvert: !1,
                spacing: 0,
                onRequestClose: () => r(!1),
                renderPopout: () => (0, i.jsx)(x, { onExited: h, ariaLabel: n, children: t }),
                children: () => null,
            });
        },
        Item: function (e) {
            let { closeOnClick: t = !0, onClick: n, ...l } = e,
                { setOpen: a } = A();
            return (0, i.jsx)(c.A, {
                ...l,
                role: "menuitem",
                onClick: (e) => {
                    n?.(e), t && a(!1);
                },
            });
        },
    },
);
