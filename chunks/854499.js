"use strict";
n.d(t, { H: () => d });
var r = n(8321),
    i = n(114099),
    a = n(297987),
    s = n(401705),
    o = n(807177),
    l = n(803082),
    u = n(64700);
let c = 500;
function d(e) {
    let {
            isDisabled: t,
            onLongPressStart: n,
            onLongPressEnd: d,
            onLongPress: _,
            threshold: f = c,
            accessibilityDescription: p,
        } = e,
        h = (0, u.useRef)(void 0),
        { addGlobalListener: m, removeGlobalListener: g } = (0, i.A)(),
        { pressProps: E } = (0, r.d)({
            isDisabled: t,
            onPressStart(e) {
                if (
                    (e.continuePropagation(),
                    ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                        (n && n({ ...e, type: "longpressstart" }),
                        (h.current = setTimeout(() => {
                            e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })),
                                (0, a.TW)(e.target).activeElement !== e.target && (0, s.e)(e.target),
                                _ && _({ ...e, type: "longpress" }),
                                (h.current = void 0);
                        }, f)),
                        "touch" === e.pointerType))
                ) {
                    let t = (e) => {
                        e.preventDefault();
                    };
                    m(e.target, "contextmenu", t, { once: !0 }),
                        m(
                            window,
                            "pointerup",
                            () => {
                                setTimeout(() => {
                                    g(e.target, "contextmenu", t);
                                }, 30);
                            },
                            { once: !0 },
                        );
                }
            },
            onPressEnd(e) {
                h.current && clearTimeout(h.current),
                    d && ("mouse" === e.pointerType || "touch" === e.pointerType) && d({ ...e, type: "longpressend" });
            },
        }),
        A = (0, o.I)(_ && !t ? p : void 0);
    return { longPressProps: (0, l.v)(E, A) };
}
