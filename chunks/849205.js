"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(990078),
    r = n(397927),
    a = n(73392),
    o = n(665691),
    c = n(290863),
    d = n(994500),
    u = n(287809),
    h = n(427262),
    A = n(742589),
    p = n(985018),
    g = n(638990);
function m(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        m = (0, s.bG)([u.default], () => u.default.getUser(t)),
        _ = (0, s.bG)([c.A], () => c.A.getStatus(t)),
        f = (0, s.bG)([c.A], () => c.A.isMobileOnline(t)),
        x = (0, s.bG)([c.A], () => c.A.isVROnline(t)),
        C = (0, s.bG)([d.A], () => d.A.getNickname(t)),
        E = h.Ay.useUserTag(m),
        I = (0, a.a)({ displayNameStyles: m?.displayNameStyles }),
        b = (0, o.bG)({ channelId: e.channel.id });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.AC4, { children: p.intl.string(p.t.EJRzg7) }),
            null != m &&
                !n &&
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.euF, {
                        status: _,
                        isMobile: f,
                        isVR: x,
                        className: g.my,
                        size: r._3J.SIZE_20,
                        "aria-label": h.Ay.getName(m),
                        src: m.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, i.jsx)(A.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? g.or : null,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.m, {
                            text: E,
                            position: "bottom",
                            children: (0, i.jsx)("span", { className: I, children: C ?? h.Ay.getName(m) }),
                        }),
                        b &&
                            (0, i.jsx)(l.m, {
                                text: p.intl.string(p.t.QyZ4Td),
                                children: (0, i.jsx)(r.m5V, {
                                    size: "xs",
                                    "aria-label": p.intl.string(p.t.VHXh8a),
                                    color: r.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                    className: g.vW,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
