n.d(t, { A: () => D });
var l = n(627968),
    i = n(64700),
    s = n(702841),
    a = n(312640),
    r = n(798618),
    c = n(990078),
    o = n(140735),
    d = n(97808),
    u = n(778712),
    h = n(834730),
    m = n(777666),
    x = n(254138),
    A = n(661531),
    g = n(926418),
    j = n(252545),
    N = n(665691),
    p = n(696451),
    C = n(290863),
    f = n(994500),
    E = n(287809),
    b = n(427262),
    I = n(477554),
    T = n(742589),
    v = n(375708),
    _ = n(964623);
function D(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        D = (0, s.bG)([E.default], () => E.default.getUser(t)),
        U = (0, s.bG)([C.A], () => C.A.getStatus(t)),
        L = (0, s.bG)([C.A], () => C.A.isMobileOnline(t)),
        M = (0, s.bG)([C.A], () => C.A.isVROnline(t)),
        k = (0, s.bG)([f.A], () => f.A.getNickname(t)),
        y = b.Ay.useUserTag(D),
        G = (0, j.a)({ displayNameStyles: D?.displayNameStyles }),
        S = (0, N.bG)({ channelId: e.channel.id }),
        { enabled: R } = I.A.useConfig({ location: "DM Header AKA Popover" }),
        O = i.useRef(null),
        [P, F] = i.useState(!1),
        V = i.useRef(void 0),
        H = i.useCallback(() => {
            clearTimeout(V.current), F(!0);
        }, []),
        z = i.useCallback(() => {
            V.current = setTimeout(() => {
                F(!1);
            }, 250);
        }, []);
    i.useEffect(() => () => clearTimeout(V.current), []);
    let B = (0, s.cf)([p.Ay], () => p.Ay.getNicknameGuildsMapping(t), [t]),
        w = i.useMemo(
            () =>
                Object.entries(B)
                    .filter((e) => {
                        let [t] = e;
                        return t !== D?.globalName;
                    })
                    .map((e) => {
                        let [t, n] = e;
                        return { nickname: t, guildIds: n };
                    }),
            [B, D?.globalName],
        ),
        X = R && w.length > 0,
        Q = k ?? b.Ay.getName(D);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.A, { children: v.intl.string(v.t.EJRzg7) }),
            null != D &&
                !n &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(d.eu, {
                        status: U,
                        isMobile: L,
                        isVR: M,
                        className: _.my,
                        size: u._3.SIZE_20,
                        "aria-label": b.Ay.getName(D),
                        src: D.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, l.jsx)(T.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? _.or : null,
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        X
                            ? (0, l.jsx)("span", {
                                  ref: O,
                                  className: G,
                                  onMouseEnter: H,
                                  onMouseLeave: z,
                                  children: Q,
                              })
                            : (0, l.jsx)(c.m, {
                                  text: y,
                                  position: "bottom",
                                  children: (0, l.jsx)("span", { className: G, children: Q }),
                              }),
                        X &&
                            (0, l.jsxs)(a.x, {
                                targetElementRef: O,
                                shouldShow: P,
                                onRequestClose: () => F(!1),
                                position: "bottom",
                                caretConfig: { align: "center" },
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: _.y$,
                                        onMouseEnter: H,
                                        onMouseLeave: z,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: _.qc,
                                                children: [
                                                    (0, l.jsx)(h.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: _.rX,
                                                        children: y,
                                                    }),
                                                    (0, l.jsx)(m.Lp, {
                                                        text: v.intl.string(v.t.l1QVfj),
                                                        disableColor: !0,
                                                        className: _.qk,
                                                    }),
                                                ],
                                            }),
                                            (0, l.jsx)("div", { className: _.sA }),
                                            (0, l.jsx)("div", {
                                                className: _.cC,
                                                children: w.map((e) => {
                                                    let { nickname: t, guildIds: n } = e;
                                                    return (0, l.jsxs)(
                                                        "div",
                                                        {
                                                            className: _.BZ,
                                                            children: [
                                                                (0, l.jsx)(g.l, { guildIds: n }),
                                                                (0, l.jsx)(h.E, {
                                                                    variant: "text-sm/medium",
                                                                    className: _.Vk,
                                                                    children: t,
                                                                }),
                                                            ],
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(r.F, {}),
                                ],
                            }),
                        S &&
                            (0, l.jsx)(c.m, {
                                text: v.intl.string(v.t.QyZ4Td),
                                children: (0, l.jsx)(x.m, {
                                    size: "xs",
                                    "aria-label": v.intl.string(v.t.VHXh8a),
                                    color: A.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                    className: _.vW,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
