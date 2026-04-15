n.d(l, { A: () => p });
var t = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    r = n(837921),
    o = n(718019),
    d = n(985018),
    c = n(321386),
    u = n(968965);
let m = r.Ay.getEnableHardwareAcceleration() ? a.JsQ : a.euF;
function p(e) {
    let { avatarProps: l, eventHandlers: n } = (0, o.V)(e),
        i = () => {};
    return (0, t.jsxs)("div", {
        onClick: i,
        className: s()(c.my, c.vk, u.kL),
        ...n,
        children: [
            (0, t.jsx)(m, { ...l, imageClassName: s()(c.Lw, u.HU) }),
            (0, t.jsx)("div", {
                className: u.r9,
                children: (0, t.jsx)(a.K0, {
                    variant: "overlay-secondary",
                    size: "sm",
                    icon: a.R2l,
                    "aria-label": d.intl.string(d.t["Z19/zE"]),
                    onClick: (e) => {
                        e.stopPropagation(), i();
                    },
                }),
            }),
        ],
    });
}
