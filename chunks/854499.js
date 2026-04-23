"use strict";
n.d(t, { H: () => c });
var r = n(8321),
    i = n(114099),
    s = n(297987),
    a = n(401705),
    o = n(807177),
    l = n(803082),
    u = n(64700);
function c(e) {
    let {
            isDisabled: t,
            onLongPressStart: n,
            onLongPressEnd: c,
            onLongPress: d,
            threshold: _ = 500,
            accessibilityDescription: f,
        } = e,
        p = (0, u.useRef)(void 0),
        { addGlobalListener: h, removeGlobalListener: E } = (0, i.A)(),
        { pressProps: m } = (0, r.d)({
            isDisabled: t,
            onPressStart(e) {
                if (
                    (e.continuePropagation(),
                    ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                        (n && n({ ...e, type: "longpressstart" }),
                        (p.current = setTimeout(() => {
                            e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })),
                                (0, s.TW)(e.target).activeElement !== e.target && (0, a.e)(e.target),
                                d && d({ ...e, type: "longpress" }),
                                (p.current = void 0);
                        }, _)),
                        "touch" === e.pointerType))
                ) {
                    let t = (e) => {
                        e.preventDefault();
                    };
                    h(e.target, "contextmenu", t, { once: !0 }),
                        h(
                            window,
                            "pointerup",
                            () => {
                                setTimeout(() => {
                                    E(e.target, "contextmenu", t);
                                }, 30);
                            },
                            { once: !0 },
                        );
                }
            },
            onPressEnd(e) {
                p.current && clearTimeout(p.current),
                    c && ("mouse" === e.pointerType || "touch" === e.pointerType) && c({ ...e, type: "longpressend" });
            },
        }),
        g = (0, o.I)(d && !t ? f : void 0);
    return { longPressProps: (0, l.v)(m, g) };
}
