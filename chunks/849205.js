n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(990078),
    a = n(397927),
    s = n(73392),
    o = n(665691),
    c = n(290863),
    u = n(994500),
    d = n(287809),
    f = n(427262),
    p = n(742589),
    h = n(985018),
    b = n(638990);

function g(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        g = (0, l.bG)([d.default], () => d.default.getUser(t)),
        m = (0, l.bG)([c.A], () => c.A.getStatus(t)),
        A = (0, l.bG)([c.A], () => c.A.isMobileOnline(t)),
        y = (0, l.bG)([u.A], () => u.A.getNickname(t)),
        O = f.Ay.useUserTag(g),
        j = (0, s.a)({
            displayNameStyles: null == g ? void 0 : g.displayNameStyles,
        }),
        v = (0, o.bG)({
            channelId: e.channel.id,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.AC4, {
                children: h.intl.string(h.t.EJRzg7),
            }),
            null != g &&
                !n &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.euF, {
                        status: m,
                        isMobile: A,
                        className: b.my,
                        size: a._3J.SIZE_20,
                        "aria-label": f.Ay.getName(g),
                        src: g.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, r.jsx)(p.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? b.or : null,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(i.m, {
                            text: O,
                            position: "bottom",
                            children: (0, r.jsx)("span", {
                                className: j,
                                children: null != y ? y : f.Ay.getName(g),
                            }),
                        }),
                        v &&
                            (0, r.jsx)(i.m, {
                                text: h.intl.string(h.t.QyZ4Td),
                                children: (0, r.jsx)(a.m5V, {
                                    size: "xs",
                                    "aria-label": h.intl.string(h.t.VHXh8a),
                                    color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                    className: b.vW,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
