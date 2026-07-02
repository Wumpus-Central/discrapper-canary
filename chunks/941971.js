"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(580929),
    o = n(866323),
    l = n(568858);
let u = Object.freeze({ tension: 400, friction: 30 }),
    d = Object.freeze({ opacity: 0, height: 8, transform: "translateX(-4px) translateZ(0)" });
function c(e) {
    let { selected: t = !1, hovered: n = !1, unread: r = !1, disabled: c = !1, className: _, overlay: h = !1 } = e;
    (t = !c && t), (n = !c && n), (r = !c && r);
    let f = { opacity: 1, height: t ? 40 : n ? 20 : 8, transform: "translateX(0) translateZ(0)" },
        E = (0, o.p)(
            t || n || r,
            {
                config: u,
                keys: (e) => (e ? "pill" : "empty"),
                initial: t || n || r ? f : null,
                from: d,
                leave: d,
                enter: f,
                update: f,
            },
            n || document.hasFocus() ? "animate-always" : "animate-never",
        );
    return (0, i.jsx)("div", {
        className: s()(_, l.iE, { [l.Lw]: h }),
        "aria-hidden": !0,
        children: E((e, t) => t && (0, i.jsx)(a.animated.span, { className: l.AS, style: e })),
    });
}
