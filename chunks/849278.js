n.d(t, { A: () => C });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(736819),
    o = n(508382),
    d = n(866323),
    c = n(717421),
    u = n(821609),
    h = n(789645),
    p = n(119762);
let m = { tension: 350, friction: 24 },
    A = { duration: 120 },
    f = l.createContext(null);
function g() {
    let e = l.useContext(f);
    if (null == e) throw Error("GuildRoomMenu compound components must be rendered within <GuildRoomMenu>");
    return e;
}
function x(e) {
    let { children: t, menuId: n, ariaLabel: a, side: o, visible: u, onExited: h } = e,
        f = l.Children.toArray(t).filter(l.isValidElement),
        g = "left" === o,
        x = g ? 16 : -16,
        C = (0, d.p)(f, {
            keys: f.map((e, t) => t),
            from: { progress: 0 },
            enter: { progress: 1 },
            trail: 35,
            config: m,
        }),
        y = (0, c.z)({
            opacity: +!!u,
            config: A,
            onRest: (e) => {
                !0 !== e.finished || u || h();
            },
        });
    return (0, i.jsx)("div", {
        id: n,
        role: "menu",
        "aria-label": a,
        tabIndex: -1,
        className: s()(p.MK, { [p.Up]: g, [p.mL]: !u }),
        children: C((e, t, n, l) => {
            let a = 20 * l;
            return (0, i.jsx)(r.animated.div, {
                style: {
                    marginLeft: g ? void 0 : a,
                    marginRight: g ? a : void 0,
                    "--custom-menu-item-opacity": (0, r.to)([e.progress, y.opacity], (e, t) => e * t),
                    transform: e.progress.to((e) => `translateX(${(1 - e) * x}px)`),
                },
                children: t,
            });
        }),
    });
}
let C = Object.assign(
    function (e) {
        let { isOpen: t, onOpenChange: n, defaultOpen: a = !1, placement: s = "right", children: r } = e,
            [o, d] = l.useState(null),
            c = l.useId(),
            [u, h] = l.useState(a),
            p = void 0 !== t,
            m = p ? t : u,
            A = l.useCallback(
                (e) => {
                    (p || h(e), n?.(e));
                },
                [p, n],
            ),
            g = l.useMemo(
                () => ({ isOpen: m, setOpen: A, triggerElement: o, setTriggerElement: d, menuId: c, placement: s }),
                [m, A, o, c, s],
            );
        return (0, i.jsx)(f.Provider, { value: g, children: r });
    },
    {
        Trigger: function (e) {
            let { children: t } = e,
                { isOpen: n, setOpen: i, setTriggerElement: l, menuId: a } = g();
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
                { isOpen: a, setOpen: s, triggerElement: r, menuId: d, placement: c } = g(),
                [u, h] = l.useState(a);
            a && !u && h(!0);
            let p = l.useCallback(() => h(!1), []);
            return (0, i.jsx)(o.Ow, {
                open: u,
                onOpenChange: s,
                reference: r,
                returnFocusElement: r,
                ownerDocument: r?.ownerDocument,
                focus: "non-modal",
                placement: c,
                spacing: -16,
                autoUpdate: !0,
                renderLayer: (e) => {
                    let { placement: l } = e;
                    return (0, i.jsx)(x, {
                        menuId: d,
                        ariaLabel: n,
                        side: l.startsWith("left") ? "left" : "right",
                        visible: a,
                        onExited: p,
                        children: t,
                    });
                },
                children: () => null,
            });
        },
        Item: function (e) {
            let { className: t, closeOnClick: n = !0, selected: a, onClick: r, clearButtonAriaLabel: o, ...d } = e,
                { isOpen: c, setOpen: m } = g(),
                [A, f] = l.useState(a),
                [x, C] = l.useState(c);
            c !== x && (C(c), c && f(a));
            let y = (e) => {
                (r?.(e), n && m(!1));
            };
            return (0, i.jsxs)("div", {
                className: p.z7,
                children: [
                    (0, i.jsx)("div", {
                        className: s()([p.AS, t]),
                        children: (0, i.jsx)(u.$, {
                            variant: A ? "overlay-primary" : "overlay-secondary",
                            size: "md",
                            onClick: y,
                            ...d,
                        }),
                    }),
                    A &&
                        (0, i.jsx)("div", {
                            className: p.AS,
                            children: (0, i.jsx)(u.$, {
                                variant: "overlay-primary",
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
