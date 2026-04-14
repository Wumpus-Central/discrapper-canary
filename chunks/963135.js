"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(421773),
    l = n(657331),
    u = n(287809),
    c = n(2398);
let d = i.lazy(() => Promise.resolve().then(n.bind(n, 342296))),
    _ = i.lazy(() => Promise.resolve().then(n.bind(n, 589022))),
    f = 150;
function h(e) {
    let { user: t, guildId: n } = e;
    return (0, r.jsx)("div", {
        className: c.RB,
        children: (0, r.jsx)(a.euF, { src: t.getAvatarURL(n, 24), size: a._3J.SIZE_24, "aria-hidden": !0 }),
    });
}
let p = function (e) {
    let { user: t, guildId: n } = e,
        p = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        m = i.useRef(null),
        { isHovered: E, onMouseEnter: g, onMouseLeave: A, setIsHovered: I } = (0, o.A)(0, f),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(), I(!1), (0, l.openUserProfileModal)({ userId: t.id, guildId: n });
            },
            [t.id, n, I],
        ),
        S = i.useCallback(
            (e) =>
                null == p
                    ? null
                    : (0, r.jsx)("div", {
                          onMouseEnter: g,
                          onMouseLeave: A,
                          children: (0, r.jsx)(i.Suspense, {
                              fallback: null,
                              children: (0, r.jsx)(_, {
                                  ...e,
                                  user: t,
                                  currentUser: p,
                                  guildId: n,
                                  closePopout: () => {
                                      e.closePopout(), I(!1);
                                  },
                              }),
                          }),
                      }),
            [t, p, n, g, A, I],
        );
    return (0, r.jsx)(i.Suspense, {
        fallback: (0, r.jsx)(h, { user: t, guildId: n }),
        children: (0, r.jsx)(d, {
            targetElementRef: m,
            shouldPreload: !0,
            user: t,
            guildId: n,
            position: "bottom",
            shouldShow: E,
            renderPopout: S,
            onRequestClose: () => I(!1),
            children: (e) => {
                let { onClick: i, ...s } = e;
                return (0, r.jsx)(a.DUT, {
                    ...s,
                    innerRef: m,
                    className: c.RB,
                    onMouseEnter: g,
                    onMouseLeave: A,
                    onClick: T,
                    "aria-label": t.username,
                    children: (0, r.jsx)(a.euF, { src: t.getAvatarURL(n, 24), size: a._3J.SIZE_24, "aria-hidden": !0 }),
                });
            },
        }),
    });
};
