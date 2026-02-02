n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(990078),
    s = n(397927),
    a = n(73392),
    o = n(665691),
    c = n(290863),
    u = n(994500),
    d = n(287809),
    p = n(427262),
    h = n(742589),
    g = n(985018),
    f = n(638990);

function m(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        m = (0, l.bG)([d.default], () => d.default.getUser(t)),
        b = (0, l.bG)([c.A], () => c.A.getStatus(t)),
        A = (0, l.bG)([c.A], () => c.A.isMobileOnline(t)),
        y = (0, l.bG)([c.A], () => c.A.isVROnline(t)),
        O = (0, l.bG)([u.A], () => u.A.getNickname(t)),
        j = p.Ay.useUserTag(m),
        x = (0, a.a)({
            displayNameStyles: null == m ? void 0 : m.displayNameStyles,
        }),
        _ = (0, o.bG)({
            channelId: e.channel.id,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.AC4, {
                children: g.intl.string(g.t.EJRzg7),
            }),
            null != m &&
                !n &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.euF, {
                        status: b,
                        isMobile: A,
                        isVR: y,
                        className: f.my,
                        size: s._3J.SIZE_20,
                        "aria-label": p.Ay.getName(m),
                        src: m.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, r.jsx)(h.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? f.or : null,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(i.m, {
                            text: j,
                            position: "bottom",
                            children: (0, r.jsx)("span", {
                                className: x,
                                children: null != O ? O : p.Ay.getName(m),
                            }),
                        }),
                        _ &&
                            (0, r.jsx)(i.m, {
                                text: g.intl.string(g.t.QyZ4Td),
                                children: (0, r.jsx)(s.m5V, {
                                    size: "xs",
                                    "aria-label": g.intl.string(g.t.VHXh8a),
                                    color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                    className: f.vW,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
