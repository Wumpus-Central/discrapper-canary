"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(342296),
    o = n(2398);
function l(e) {
    let { user: t, guildId: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)(a.A, {
        targetElementRef: l,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        children: (e) =>
            (0, r.jsx)(s.DUT, {
                ...e,
                innerRef: l,
                className: o.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, r.jsx)(s.euF, { src: t.getAvatarURL(n, 24), size: s._3J.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
