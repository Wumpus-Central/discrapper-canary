l.d(n, { A: () => f });
var t = l(627968);
l(64700);
var i = l(503698),
    r = l.n(i),
    s = l(97808),
    a = l(408278),
    o = l(22231),
    d = l(837921),
    c = l(718019),
    u = l(985018),
    g = l(106106),
    A = l(338165);
let m = d.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu;
function f(e) {
    let { avatarProps: n, eventHandlers: l } = (0, c.V)(e),
        i = () => {};
    return (0, t.jsxs)("div", {
        onClick: i,
        className: r()(g.my, g.vk, A.kL),
        ...l,
        children: [
            (0, t.jsx)(m, { ...n, imageClassName: r()(g.Lw, A.HU) }),
            (0, t.jsx)("div", {
                className: A.r9,
                children: (0, t.jsx)(a.K, {
                    variant: "overlay-secondary",
                    size: "sm",
                    icon: o.R,
                    "aria-label": u.intl.string(u.t["Z19/zE"]),
                    onClick: (e) => {
                        e.stopPropagation(), i();
                    },
                }),
            }),
        ],
    });
}
