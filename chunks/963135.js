n.d(t, { A: () => m });
var a = n(627968),
    o = n(64700),
    r = n(311907),
    i = n(397927),
    l = n(421773),
    c = n(657331),
    s = n(287809),
    _ = n(2398);
let d = o.lazy(() => Promise.resolve().then(n.bind(n, 342296))),
    u = o.lazy(() => Promise.resolve().then(n.bind(n, 589022)));
function p(e) {
    let { user: t, guildId: n } = e;
    return (0, a.jsx)("div", {
        className: _.RB,
        children: (0, a.jsx)(i.euF, { src: t.getAvatarURL(n, 24), size: i._3J.SIZE_24, "aria-hidden": !0 }),
    });
}
let m = function (e) {
    let { user: t, guildId: n } = e,
        m = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        b = o.useRef(null),
        { isHovered: h, onMouseEnter: f, onMouseLeave: C, setIsHovered: g } = (0, l.A)(0, 150),
        v = o.useCallback(
            (e) => {
                e.stopPropagation(), g(!1), (0, c.openUserProfileModal)({ userId: t.id, guildId: n });
            },
            [t.id, n, g],
        ),
        x = o.useCallback(
            (e) =>
                null == m
                    ? null
                    : (0, a.jsx)("div", {
                          onMouseEnter: f,
                          onMouseLeave: C,
                          children: (0, a.jsx)(o.Suspense, {
                              fallback: null,
                              children: (0, a.jsx)(u, {
                                  ...e,
                                  user: t,
                                  currentUser: m,
                                  guildId: n,
                                  closePopout: () => {
                                      e.closePopout(), g(!1);
                                  },
                              }),
                          }),
                      }),
            [t, m, n, f, C, g],
        );
    return (0, a.jsx)(o.Suspense, {
        fallback: (0, a.jsx)(p, { user: t, guildId: n }),
        children: (0, a.jsx)(d, {
            targetElementRef: b,
            shouldPreload: !0,
            user: t,
            guildId: n,
            position: "bottom",
            shouldShow: h,
            renderPopout: x,
            onRequestClose: () => g(!1),
            children: (e) => {
                let { onClick: o, ...r } = e;
                return (0, a.jsx)(i.DUT, {
                    ...r,
                    innerRef: b,
                    className: _.RB,
                    onMouseEnter: f,
                    onMouseLeave: C,
                    onClick: v,
                    "aria-label": t.username,
                    children: (0, a.jsx)(i.euF, { src: t.getAvatarURL(n, 24), size: i._3J.SIZE_24, "aria-hidden": !0 }),
                });
            },
        }),
    });
};
