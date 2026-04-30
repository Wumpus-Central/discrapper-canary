t.d(n, { A: () => E });
var l = t(627968);
t(64700);
var i = t(702841),
    s = t(990078),
    r = t(140735),
    a = t(97808),
    c = t(778712),
    o = t(254138),
    d = t(661531),
    u = t(252545),
    h = t(665691),
    x = t(290863),
    m = t(994500),
    A = t(287809),
    g = t(427262),
    N = t(742589),
    j = t(375708),
    I = t(964623);
function E(e) {
    let n = e.channel.getRecipientId(),
        t = e.channel.isSystemDM(),
        E = (0, i.bG)([A.default], () => A.default.getUser(n)),
        p = (0, i.bG)([x.A], () => x.A.getStatus(n)),
        C = (0, i.bG)([x.A], () => x.A.isMobileOnline(n)),
        b = (0, i.bG)([x.A], () => x.A.isVROnline(n)),
        T = (0, i.bG)([m.A], () => m.A.getNickname(n)),
        _ = g.Ay.useUserTag(E),
        f = (0, u.a)({ displayNameStyles: E?.displayNameStyles }),
        D = (0, h.bG)({ channelId: e.channel.id });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.A, { children: j.intl.string(j.t.EJRzg7) }),
            null != E &&
                !t &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(a.eu, {
                        status: p,
                        isMobile: C,
                        isVR: b,
                        className: I.my,
                        size: c._3.SIZE_20,
                        "aria-label": g.Ay.getName(E),
                        src: E.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, l.jsx)(N.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? I.or : null,
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(s.m, {
                            text: _,
                            position: "bottom",
                            children: (0, l.jsx)("span", { className: f, children: T ?? g.Ay.getName(E) }),
                        }),
                        D &&
                            (0, l.jsx)(s.m, {
                                text: j.intl.string(j.t.QyZ4Td),
                                children: (0, l.jsx)(o.m, {
                                    size: "xs",
                                    "aria-label": j.intl.string(j.t.VHXh8a),
                                    color: d.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                    className: I.vW,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
