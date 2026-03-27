"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(382222),
    o = n(397927),
    l = n(206826);
let u = Object.freeze({ tension: 400, friction: 30 }),
    c = Object.freeze({ opacity: 0, height: 8, transform: "translateX(-4px) translateZ(0)" });
function d(e) {
    let { selected: t = !1, hovered: n = !1, unread: i = !1, disabled: d = !1, className: _ } = e;
    (t = !d && t), (n = !d && n), (i = !d && i);
    let f = { opacity: 1, height: t ? 40 : n ? 20 : 8, transform: "translateX(0) translateZ(0)" },
        p = (0, o.pnh)(
            t || n || i,
            {
                config: u,
                keys: (e) => (e ? "pill" : "empty"),
                initial: t || n || i ? f : null,
                from: c,
                leave: c,
                enter: f,
                update: f,
            },
            n || document.hasFocus() ? "animate-always" : "animate-never",
        );
    return (0, r.jsx)("div", {
        className: s()(_, l.i),
        "aria-hidden": !0,
        children: p((e, t) => t && (0, r.jsx)(a.animated.span, { className: l.A, style: e })),
    });
}
