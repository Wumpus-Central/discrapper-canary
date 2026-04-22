"use strict";
n.d(t, { M: () => c });
var r = n(114099),
    i = n(297987),
    s = n(241827),
    a = n(64700);
let o = !1,
    l = 0;
function u(e) {
    "touch" === e.pointerType &&
        ((o = !0),
        setTimeout(() => {
            o = !1;
        }, 50));
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
function c(e) {
    let { onHoverStart: t, onHoverChange: n, onHoverEnd: l, isDisabled: u } = e,
        [c, _] = (0, a.useState)(!1),
        f = (0, a.useRef)({ isHovered: !1, ignoreEmulatedMouseEvents: !1, pointerType: "", target: null }).current;
    (0, a.useEffect)(d, []);
    let { addGlobalListener: E, removeAllGlobalListeners: h } = (0, r.A)(),
        { hoverProps: p, triggerHoverEnd: m } = (0, a.useMemo)(() => {
            let e = (e, t) => {
                    let r = f.target;
                    (f.pointerType = ""),
                        (f.target = null),
                        "touch" !== t &&
                            f.isHovered &&
                            r &&
                            ((f.isHovered = !1),
                            h(),
                            l && l({ type: "hoverend", target: r, pointerType: t }),
                            n && n(!1),
                            _(!1));
                },
                r = {};
            return (
                "u" > typeof PointerEvent &&
                    ((r.onPointerEnter = (r) => {
                        (o && "mouse" === r.pointerType) ||
                            ((r, a) => {
                                if (
                                    ((f.pointerType = a),
                                    u || "touch" === a || f.isHovered || !r.currentTarget.contains(r.target))
                                )
                                    return;
                                f.isHovered = !0;
                                let o = r.currentTarget;
                                (f.target = o),
                                    E(
                                        (0, i.TW)(r.target),
                                        "pointerover",
                                        (t) => {
                                            f.isHovered &&
                                                f.target &&
                                                !(0, s.sD)(f.target, t.target) &&
                                                e(t, t.pointerType);
                                        },
                                        { capture: !0 },
                                    ),
                                    t && t({ type: "hoverstart", target: o, pointerType: a }),
                                    n && n(!0),
                                    _(!0);
                            })(r, r.pointerType);
                    }),
                    (r.onPointerLeave = (t) => {
                        !u && t.currentTarget.contains(t.target) && e(t, t.pointerType);
                    })),
                { hoverProps: r, triggerHoverEnd: e }
            );
        }, [t, n, l, u, f, E, h]);
    return (
        (0, a.useEffect)(() => {
            u && m({ currentTarget: f.target }, f.pointerType);
        }, [u]),
        { hoverProps: p, isHovered: c }
    );
}
