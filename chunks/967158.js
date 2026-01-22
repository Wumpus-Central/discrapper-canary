n.d(t, { M: () => f });
var r = n(114099),
    i = n(297987),
    a = n(241827),
    s = n(64700);
let o = !1,
    l = 0;
function c() {
    (o = !0),
        setTimeout(() => {
            o = !1;
        }, 50);
}
function u(e) {
    "touch" === e.pointerType && c();
}
function d() {
    if ("u" > typeof document)
        return (
            0 === l && "u" > typeof PointerEvent && document.addEventListener("pointerup", u),
            l++,
            () => {
                !(--l > 0) && "u" > typeof PointerEvent && document.removeEventListener("pointerup", u);
            }
        );
}
function f(e) {
    let { onHoverStart: t, onHoverChange: n, onHoverEnd: l, isDisabled: c } = e,
        [u, f] = (0, s.useState)(!1),
        p = (0, s.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
        }).current;
    (0, s.useEffect)(d, []);
    let { addGlobalListener: _, removeAllGlobalListeners: h } = (0, r.A)(),
        { hoverProps: m, triggerHoverEnd: g } = (0, s.useMemo)(() => {
            let e = (e, s) => {
                    if (((p.pointerType = s), c || "touch" === s || p.isHovered || !e.currentTarget.contains(e.target)))
                        return;
                    p.isHovered = !0;
                    let o = e.currentTarget;
                    (p.target = o),
                        _(
                            (0, i.TW)(e.target),
                            "pointerover",
                            (e) => {
                                p.isHovered && p.target && !(0, a.sD)(p.target, e.target) && r(e, e.pointerType);
                            },
                            { capture: !0 },
                        ),
                        t &&
                            t({
                                type: "hoverstart",
                                target: o,
                                pointerType: s,
                            }),
                        n && n(!0),
                        f(!0);
                },
                r = (e, t) => {
                    let r = p.target;
                    (p.pointerType = ""),
                        (p.target = null),
                        "touch" !== t &&
                            p.isHovered &&
                            r &&
                            ((p.isHovered = !1),
                            h(),
                            l &&
                                l({
                                    type: "hoverend",
                                    target: r,
                                    pointerType: t,
                                }),
                            n && n(!1),
                            f(!1));
                },
                s = {};
            return (
                "u" > typeof PointerEvent &&
                    ((s.onPointerEnter = (t) => {
                        (o && "mouse" === t.pointerType) || e(t, t.pointerType);
                    }),
                    (s.onPointerLeave = (e) => {
                        !c && e.currentTarget.contains(e.target) && r(e, e.pointerType);
                    })),
                {
                    hoverProps: s,
                    triggerHoverEnd: r,
                }
            );
        }, [t, n, l, c, p, _, h]);
    return (
        (0, s.useEffect)(() => {
            c && g({ currentTarget: p.target }, p.pointerType);
        }, [c]),
        {
            hoverProps: m,
            isHovered: u,
        }
    );
}
