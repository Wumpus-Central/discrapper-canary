"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(939249),
    a = n(97808),
    o = n(778712),
    l = n(342296),
    u = n(895054);
function c(e) {
    let { user: t, guildId: n } = e,
        c = i.useRef(null);
    return (0, r.jsx)(l.A, {
        targetElementRef: c,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        children: (e) =>
            (0, r.jsx)(s.D, {
                ...e,
                innerRef: c,
                className: u.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, r.jsx)(a.eu, { src: t.getAvatarURL(n, 24), size: o._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
