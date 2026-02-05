"use strict";
n.d(t, { M: () => _ });
var r = n(114099),
    i = n(297987),
    a = n(241827),
    s = n(64700);
let o = !1,
    l = 0;
function u() {
    (o = !0),
        setTimeout(() => {
            o = !1;
        }, 50);
}
function c(e) {
    "touch" === e.pointerType && u();
}
function d() {
    if ("u" > typeof document)
        return (
            0 === l && "u" > typeof PointerEvent && document.addEventListener("pointerup", c),
            l++,
            () => {
                !(--l > 0) && "u" > typeof PointerEvent && document.removeEventListener("pointerup", c);
            }
        );
}
function _(e) {
    let { onHoverStart: t, onHoverChange: n, onHoverEnd: l, isDisabled: u } = e,
        [c, _] = (0, s.useState)(!1),
        f = (0, s.useRef)({ isHovered: !1, ignoreEmulatedMouseEvents: !1, pointerType: "", target: null }).current;
    (0, s.useEffect)(d, []);
    let { addGlobalListener: p, removeAllGlobalListeners: h } = (0, r.A)(),
        { hoverProps: m, triggerHoverEnd: g } = (0, s.useMemo)(() => {
            let e = (e, s) => {
                    if (((f.pointerType = s), u || "touch" === s || f.isHovered || !e.currentTarget.contains(e.target)))
                        return;
                    f.isHovered = !0;
                    let o = e.currentTarget;
                    (f.target = o),
                        p(
                            (0, i.TW)(e.target),
                            "pointerover",
                            (e) => {
                                f.isHovered && f.target && !(0, a.sD)(f.target, e.target) && r(e, e.pointerType);
                            },
                            { capture: !0 },
                        ),
                        t && t({ type: "hoverstart", target: o, pointerType: s }),
                        n && n(!0),
                        _(!0);
                },
                r = (e, t) => {
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
                s = {};
            return (
                "u" > typeof PointerEvent &&
                    ((s.onPointerEnter = (t) => {
                        (o && "mouse" === t.pointerType) || e(t, t.pointerType);
                    }),
                    (s.onPointerLeave = (e) => {
                        !u && e.currentTarget.contains(e.target) && r(e, e.pointerType);
                    })),
                { hoverProps: s, triggerHoverEnd: r }
            );
        }, [t, n, l, u, f, p, h]);
    return (
        (0, s.useEffect)(() => {
            u && g({ currentTarget: f.target }, f.pointerType);
        }, [u]),
        { hoverProps: m, isHovered: c }
    );
}
