n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(990078),
    a = n(140735),
    r = n(97808),
    o = n(778712),
    d = n(254138),
    c = n(827734),
    u = n(73392),
    h = n(665691),
    A = n(290863),
    _ = n(994500),
    m = n(287809),
    g = n(427262),
    p = n(742589),
    f = n(985018),
    E = n(964623);
function x(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        x = (0, l.bG)([m.default], () => m.default.getUser(t)),
        I = (0, l.bG)([A.A], () => A.A.getStatus(t)),
        C = (0, l.bG)([A.A], () => A.A.isMobileOnline(t)),
        b = (0, l.bG)([A.A], () => A.A.isVROnline(t)),
        N = (0, l.bG)([_.A], () => _.A.getNickname(t)),
        S = g.Ay.useUserTag(x),
        v = (0, u.a)({ displayNameStyles: x?.displayNameStyles }),
        T = (0, h.bG)({ channelId: e.channel.id });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.A, { children: f.intl.string(f.t.EJRzg7) }),
            null != x &&
                !n &&
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.eu, {
                        status: I,
                        isMobile: C,
                        isVR: b,
                        className: E.my,
                        size: o._3.SIZE_20,
                        "aria-label": g.Ay.getName(x),
                        src: x.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, i.jsx)(p.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? E.or : null,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.m, {
                            text: S,
                            position: "bottom",
                            children: (0, i.jsx)("span", { className: v, children: N ?? g.Ay.getName(x) }),
                        }),
                        T &&
                            (0, i.jsx)(s.m, {
                                text: f.intl.string(f.t.QyZ4Td),
                                children: (0, i.jsx)(d.m, {
                                    size: "xs",
                                    "aria-label": f.intl.string(f.t.VHXh8a),
                                    color: c.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                    className: E.vW,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
