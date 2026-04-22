"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(939249),
    r = n(97808),
    a = n(778712),
    o = n(342296),
    c = n(895054);
function u(e) {
    let { user: t, guildId: n } = e,
        u = l.useRef(null);
    return (0, i.jsx)(o.A, {
        targetElementRef: u,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        children: (e) =>
            (0, i.jsx)(s.D, {
                ...e,
                innerRef: u,
                className: c.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, i.jsx)(r.eu, { src: t.getAvatarURL(n, 24), size: a._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
