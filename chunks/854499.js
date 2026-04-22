"use strict";
n.d(t, { H: () => d });
var r = n(8321),
    i = n(114099),
    s = n(297987),
    a = n(401705),
    o = n(807177),
    l = n(803082),
    u = n(64700);
function d(e) {
    let {
            isDisabled: t,
            onLongPressStart: n,
            onLongPressEnd: d,
            onLongPress: c,
            threshold: _ = 500,
            accessibilityDescription: f,
        } = e,
        E = (0, u.useRef)(void 0),
        { addGlobalListener: h, removeGlobalListener: p } = (0, i.A)(),
        { pressProps: m } = (0, r.d)({
            isDisabled: t,
            onPressStart(e) {
                if (
                    (e.continuePropagation(),
                    ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                        (n && n({ ...e, type: "longpressstart" }),
                        (E.current = setTimeout(() => {
                            e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })),
                                (0, s.TW)(e.target).activeElement !== e.target && (0, a.e)(e.target),
                                c && c({ ...e, type: "longpress" }),
                                (E.current = void 0);
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
                                    p(e.target, "contextmenu", t);
                                }, 30);
                            },
                            { once: !0 },
                        );
                }
            },
            onPressEnd(e) {
                E.current && clearTimeout(E.current),
                    d && ("mouse" === e.pointerType || "touch" === e.pointerType) && d({ ...e, type: "longpressend" });
            },
        }),
        g = (0, o.I)(c && !t ? f : void 0);
    return { longPressProps: (0, l.v)(m, g) };
}
