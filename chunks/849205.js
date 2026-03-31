n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(990078),
    a = n(397927),
    r = n(73392),
    o = n(665691),
    c = n(290863),
    d = n(994500),
    u = n(287809),
    h = n(427262),
    A = n(742589),
    _ = n(985018),
    m = n(358943);
function g(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        g = (0, l.bG)([u.default], () => u.default.getUser(t)),
        p = (0, l.bG)([c.A], () => c.A.getStatus(t)),
        f = (0, l.bG)([c.A], () => c.A.isMobileOnline(t)),
        x = (0, l.bG)([c.A], () => c.A.isVROnline(t)),
        E = (0, l.bG)([d.A], () => d.A.getNickname(t)),
        I = h.Ay.useUserTag(g),
        C = (0, r.a)({ displayNameStyles: g?.displayNameStyles }),
        N = (0, o.bG)({ channelId: e.channel.id });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.AC4, { children: _.intl.string(_.t.EJRzg7) }),
            null != g &&
                !n &&
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(a.euF, {
                        status: p,
                        isMobile: f,
                        isVR: x,
                        className: m.my,
                        size: a._3J.SIZE_20,
                        "aria-label": h.Ay.getName(g),
                        src: g.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, i.jsx)(A.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? m.or : null,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.m, {
                            text: I,
                            position: "bottom",
                            children: (0, i.jsx)("span", { className: C, children: E ?? h.Ay.getName(g) }),
                        }),
                        N &&
                            (0, i.jsx)(s.m, {
                                text: _.intl.string(_.t.QyZ4Td),
                                children: (0, i.jsx)(a.m5V, {
                                    size: "xs",
                                    "aria-label": _.intl.string(_.t.VHXh8a),
                                    color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                    className: m.vW,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
