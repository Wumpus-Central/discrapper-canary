n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(92674),
    s = n(397927),
    l = n(94095);
let c = Object.freeze({
        tension: 400,
        friction: 30,
    }),
    u = Object.freeze({
        opacity: 0,
        height: 8,
        transform: "translateX(-4px) translateZ(0)",
    });

function d(e) {
    let { selected: t = !1, hovered: n = !1, unread: i = !1, disabled: d = !1, className: f } = e;
    (t = !d && t), (n = !d && n), (i = !d && i);
    let p = {
            opacity: 1,
            height: t ? 40 : n ? 20 : 8,
            transform: "translateX(0) translateZ(0)",
        },
        _ = (0, s.pnh)(
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
    return (0, r.jsx)("div", {
        className: a()(f, l.i),
        "aria-hidden": !0,
        children: _(
            (e, t) =>
                t &&
                (0, r.jsx)(o.animated.span, {
                    className: l.A,
                    style: e,
                }),
        ),
    });
}
