n.d(t, { A: () => C });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(221877),
    o = n(508382),
    c = n(866323),
    d = n(717421),
    u = n(821609),
    h = n(789645),
    p = n(119762);
let m = { tension: 350, friction: 24 },
    A = { duration: 120 },
    f = l.createContext(null);
function x() {
    let e = l.useContext(f);
    if (null == e) throw Error("GuildRoomMenu compound components must be rendered within <GuildRoomMenu>");
    return e;
}
function g(e) {
    let { children: t, menuId: n, ariaLabel: a, side: o, visible: u, onExited: h } = e,
        f = l.Children.toArray(t).filter(l.isValidElement),
        x = "left" === o,
        g = x ? 16 : -16,
        C = (0, c.p)(f, {
            keys: f.map((e, t) => t),
            from: { progress: 0 },
            enter: { progress: 1 },
            trail: 35,
            config: m,
        }),
        y = (0, d.z)({
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
        className: s()(p.MK, { [p.Up]: x, [p.mL]: !u }),
        children: C((e, t, n, l) => {
            let a = 20 * l;
            return (0, i.jsx)(r.animated.div, {
                style: {
                    marginLeft: x ? void 0 : a,
                    marginRight: x ? a : void 0,
                    "--custom-menu-item-opacity": (0, r.to)([e.progress, y.opacity], (e, t) => e * t),
                    transform: e.progress.to((e) => `translateX(${(1 - e) * g}px)`),
                },
                children: t,
            });
        }),
    });
}
let C = Object.assign(
    function (e) {
        let { isOpen: t, onOpenChange: n, defaultOpen: a = !1, placement: s = "right", children: r } = e,
            [o, c] = l.useState(null),
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
            x = l.useMemo(
                () => ({ isOpen: m, setOpen: A, triggerElement: o, setTriggerElement: c, menuId: d, placement: s }),
                [m, A, o, d, s],
            );
        return (0, i.jsx)(f.Provider, { value: x, children: r });
    },
    {
        Trigger: function (e) {
            let { children: t } = e,
                { isOpen: n, setOpen: i, setTriggerElement: l, menuId: a } = x();
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
                { isOpen: a, setOpen: s, triggerElement: r, menuId: c, placement: d } = x(),
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
                placement: d,
                spacing: -16,
                autoUpdate: !0,
                renderLayer: (e) => {
                    let { placement: l } = e;
                    return (0, i.jsx)(g, {
                        menuId: c,
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
            let { className: t, closeOnClick: n = !0, selected: a, onClick: r, clearButtonAriaLabel: o, ...c } = e,
                { isOpen: d, setOpen: m } = x(),
                [A, f] = l.useState(a),
                [g, C] = l.useState(d);
            d !== g && (C(d), d && f(a));
            let y = (e) => {
                r?.(e), n && m(!1);
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
                            ...c,
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
