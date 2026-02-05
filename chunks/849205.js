n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(990078),
    a = n(397927),
    r = n(73392),
    o = n(665691),
    d = n(290863),
    c = n(994500),
    u = n(287809),
    h = n(427262),
    A = n(742589),
    g = n(985018),
    m = n(638990);
function p(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        p = (0, l.bG)([u.default], () => u.default.getUser(t)),
        _ = (0, l.bG)([d.A], () => d.A.getStatus(t)),
        x = (0, l.bG)([d.A], () => d.A.isMobileOnline(t)),
        f = (0, l.bG)([d.A], () => d.A.isVROnline(t)),
        E = (0, l.bG)([c.A], () => c.A.getNickname(t)),
        C = h.Ay.useUserTag(p),
        I = (0, r.a)({ displayNameStyles: p?.displayNameStyles }),
        S = (0, o.bG)({ channelId: e.channel.id });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.AC4, { children: g.intl.string(g.t.EJRzg7) }),
            null != p &&
                !n &&
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(a.euF, {
                        status: _,
                        isMobile: x,
                        isVR: f,
                        className: m.my,
                        size: a._3J.SIZE_20,
                        "aria-label": h.Ay.getName(p),
                        src: p.getAvatarURL(void 0, 20),
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
                            text: C,
                            position: "bottom",
                            children: (0, i.jsx)("span", { className: I, children: E ?? h.Ay.getName(p) }),
                        }),
                        S &&
                            (0, i.jsx)(s.m, {
                                text: g.intl.string(g.t.QyZ4Td),
                                children: (0, i.jsx)(a.m5V, {
                                    size: "xs",
                                    "aria-label": g.intl.string(g.t.VHXh8a),
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
