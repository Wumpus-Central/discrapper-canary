"use strict";
n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(519244),
    r = n(866323),
    o = n(568858);
let c = Object.freeze({ tension: 400, friction: 30 }),
    u = Object.freeze({ opacity: 0, height: 8, transform: "translateX(-4px) translateZ(0)" });
function d(e) {
    let { selected: t = !1, hovered: n = !1, unread: i = !1, disabled: d = !1, className: h, overlay: m = !1 } = e;
    (t = !d && t), (n = !d && n), (i = !d && i);
    let p = { opacity: 1, height: t ? 40 : n ? 20 : 8, transform: "translateX(0) translateZ(0)" },
        f = (0, r.p)(
            t || n || i,
            {
                config: c,
                keys: (e) => (e ? "pill" : "empty"),
                initial: t || n || i ? p : null,
                from: u,
                leave: u,
                enter: p,
                update: p,
            },
            n || document.hasFocus() ? "animate-always" : "animate-never",
        );
    return (0, l.jsx)("div", {
        className: s()(h, o.iE, { [o.Lw]: m }),
        "aria-hidden": !0,
        children: f((e, t) => t && (0, l.jsx)(a.animated.span, { className: o.AS, style: e })),
    });
}
