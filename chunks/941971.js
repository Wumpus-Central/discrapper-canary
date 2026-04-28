"use strict";
n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(123924),
    r = n(866323),
    o = n(568858);
let c = Object.freeze({ tension: 400, friction: 30 }),
    u = Object.freeze({ opacity: 0, height: 8, transform: "translateX(-4px) translateZ(0)" });
function d(e) {
    let { selected: t = !1, hovered: n = !1, unread: i = !1, disabled: d = !1, className: h } = e;
    (t = !d && t), (n = !d && n), (i = !d && i);
    let m = { opacity: 1, height: t ? 40 : n ? 20 : 8, transform: "translateX(0) translateZ(0)" },
        p = (0, r.p)(
            t || n || i,
            {
                config: c,
                keys: (e) => (e ? "pill" : "empty"),
                initial: t || n || i ? m : null,
                from: u,
                leave: u,
                enter: m,
                update: m,
            },
            n || document.hasFocus() ? "animate-always" : "animate-never",
        );
    return (0, l.jsx)("div", {
        className: s()(h, o.i),
        "aria-hidden": !0,
        children: p((e, t) => t && (0, l.jsx)(a.animated.span, { className: o.A, style: e })),
    });
}
