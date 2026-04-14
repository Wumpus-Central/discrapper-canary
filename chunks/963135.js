a.d(t, { A: () => l });
var n = a(627968),
    i = a(64700),
    r = a(397927),
    o = a(342296),
    c = a(2398);
function l(e) {
    let { user: t, guildId: a } = e,
        l = i.useRef(null);
    return (0, n.jsx)(o.A, {
        targetElementRef: l,
        shouldPreload: !0,
        user: t,
        guildId: a,
        position: "bottom",
        children: (e) =>
            (0, n.jsx)(r.DUT, {
                ...e,
                innerRef: l,
                className: c.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, n.jsx)(r.euF, { src: t.getAvatarURL(a, 24), size: r._3J.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
