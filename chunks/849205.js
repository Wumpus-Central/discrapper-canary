l.d(n, { A: () => D });
var t = l(627968),
    i = l(64700),
    s = l(702841),
    r = l(312640),
    a = l(798618),
    c = l(97808),
    o = l(778712),
    d = l(140735),
    u = l(939249),
    h = l(834730),
    x = l(866665),
    m = l(254138),
    A = l(661531),
    g = l(926418),
    j = l(73392),
    E = l(665691),
    N = l(696451),
    f = l(290863),
    C = l(994500),
    p = l(287809),
    b = l(427262),
    T = l(477554),
    v = l(742589),
    I = l(375708),
    _ = l(964623);
function D(e) {
    let n = e.channel.getRecipientId(),
        l = e.channel.isSystemDM(),
        D = (0, s.bG)([p.default], () => p.default.getUser(n)),
        M = (0, s.bG)([f.A], () => f.A.getStatus(n)),
        U = (0, s.bG)([f.A], () => f.A.isMobileOnline(n)),
        L = (0, s.bG)([f.A], () => f.A.isVROnline(n)),
        S = (0, s.bG)([C.A], () => C.A.getNickname(n)),
        R = b.Ay.useUserTag(D),
        y = (0, j.a)({ displayNameStyles: D?.displayNameStyles }),
        G = (0, E.bG)({ channelId: e.channel.id }),
        { enabled: k } = T.A.useConfig({ location: "DM Header AKA Popover" }),
        O = i.useRef(null),
        [F, P] = i.useState(!1),
        V = i.useRef(void 0),
        H = i.useCallback(() => {
            clearTimeout(V.current), P(!0);
        }, []),
        z = i.useCallback(() => {
            V.current = setTimeout(() => {
                P(!1);
            }, 250);
        }, []);
    i.useEffect(() => () => clearTimeout(V.current), []);
    let B = (0, s.cf)([N.Ay], () => N.Ay.getNicknameGuildsMapping(n), [n]),
        w = i.useMemo(
            () =>
                Object.entries(B)
                    .filter((e) => {
                        let [n] = e;
                        return n !== D?.globalName;
                    })
                    .map((e) => {
                        let [n, l] = e;
                        return { nickname: n, guildIds: l };
                    }),
            [B, D?.globalName],
        ),
        X = k && w.length > 0,
        Q = X && null != D && !l,
        Y = S ?? b.Ay.getName(D),
        Z =
            null != D &&
            (0, t.jsx)(c.eu, {
                status: M,
                isMobile: U,
                isVR: L,
                size: o._3.SIZE_20,
                "aria-label": b.Ay.getName(D),
                src: D.getAvatarURL(void 0, 20),
            });
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(d.A, { children: I.intl.string(I.t.EJRzg7) }),
            null != D &&
                !l &&
                (0, t.jsxs)("div", {
                    className: _.my,
                    children: [
                        (0, t.jsx)("div", {
                            ref: O,
                            children:
                                null != e.handleClick
                                    ? (0, t.jsx)(u.D, {
                                          tag: "div",
                                          onClick: e.handleClick,
                                          onContextMenu: e.handleContextMenu,
                                          onMouseEnter: Q ? H : void 0,
                                          onMouseLeave: Q ? z : void 0,
                                          className: _.or,
                                          "aria-hidden": !0,
                                          tabIndex: -1,
                                          children: Z,
                                      })
                                    : Z,
                        }),
                        Q &&
                            (0, t.jsxs)(r.x, {
                                targetElementRef: O,
                                shouldShow: F,
                                onRequestClose: () => P(!1),
                                position: "bottom",
                                caretConfig: { align: "start" },
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: _.y$,
                                        onMouseEnter: H,
                                        onMouseLeave: z,
                                        children: [
                                            (0, t.jsxs)("div", {
                                                className: _.qc,
                                                children: [
                                                    (0, t.jsx)(h.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: _.rX,
                                                        children: R,
                                                    }),
                                                    (0, t.jsx)(h.E, {
                                                        variant: "text-xs/semibold",
                                                        color: "text-muted",
                                                        className: _.FQ,
                                                        children: I.intl.string(I.t.l1QVfj),
                                                    }),
                                                ],
                                            }),
                                            (0, t.jsx)("div", { className: _.sA }),
                                            (0, t.jsx)("div", {
                                                className: _.cC,
                                                children: w.map((e) => {
                                                    let { nickname: n, guildIds: l } = e;
                                                    return (0, t.jsxs)(
                                                        "div",
                                                        {
                                                            className: _.BZ,
                                                            children: [
                                                                (0, t.jsx)(h.E, {
                                                                    variant: "text-sm/medium",
                                                                    className: _.Vk,
                                                                    children: n,
                                                                }),
                                                                (0, t.jsx)("div", {
                                                                    className: _.Js,
                                                                    children: (0, t.jsx)(g.l, { guildIds: l }),
                                                                }),
                                                            ],
                                                        },
                                                        n,
                                                    );
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(a.F, {}),
                                ],
                            }),
                    ],
                }),
            (0, t.jsx)(v.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                onMouseEnter: Q ? H : void 0,
                onMouseLeave: Q ? z : void 0,
                onFocus: Q ? H : void 0,
                onBlur: Q ? z : void 0,
                className: null != e.handleClick ? _.or : null,
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        X
                            ? (0, t.jsx)("span", { className: y, children: Y })
                            : (0, t.jsx)(x.m, {
                                  text: R,
                                  position: "bottom",
                                  children: (0, t.jsx)("span", { className: y, children: Y }),
                              }),
                        G &&
                            (0, t.jsx)(x.m, {
                                text: I.intl.string(I.t.QyZ4Td),
                                children: (0, t.jsx)(m.m, {
                                    size: "xs",
                                    "aria-label": I.intl.string(I.t.VHXh8a),
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
