a.d(t, { A: () => p });
var n = a(627968),
    r = a(64700),
    o = a(311907),
    i = a(397927),
    c = a(421773),
    l = a(657331),
    _ = a(342296),
    s = a(589022),
    d = a(287809),
    u = a(2398);
let p = function (e) {
    let { user: t, guildId: a } = e,
        p = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        m = r.useRef(null),
        { isHovered: b, onMouseEnter: f, onMouseLeave: C, setIsHovered: g } = (0, c.A)(0, 150),
        h = r.useCallback(
            (e) => {
                e.stopPropagation(), g(!1), (0, l.openUserProfileModal)({ userId: t.id, guildId: a });
            },
            [t.id, a, g],
        ),
        v = r.useCallback(
            (e) =>
                null == p
                    ? null
                    : (0, n.jsx)("div", {
                          onMouseEnter: f,
                          onMouseLeave: C,
                          children: (0, n.jsx)(s.A, {
                              ...e,
                              user: t,
                              currentUser: p,
                              guildId: a,
                              closePopout: () => {
                                  e.closePopout(), g(!1);
                              },
                          }),
                      }),
            [t, p, a, f, C, g],
        );
    return (0, n.jsx)(_.A, {
        targetElementRef: m,
        user: t,
        guildId: a,
        position: "bottom",
        shouldShow: b,
        renderPopout: v,
        onRequestClose: () => g(!1),
        children: (e) => {
            let { onClick: r, ...o } = e;
            return (0, n.jsx)(i.DUT, {
                ...o,
                innerRef: m,
                className: u.RB,
                onMouseEnter: f,
                onMouseLeave: C,
                onClick: h,
                "aria-label": t.username,
                children: (0, n.jsx)(i.euF, { src: t.getAvatarURL(a, 24), size: i._3J.SIZE_24, "aria-hidden": !0 }),
            });
        },
    });
};
