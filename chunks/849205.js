l.d(n, { A: () => D });
var t = l(477900),
    i = l(582128),
    s = l(702841),
    r = l(273875),
    a = l(798618),
    c = l(97808),
    o = l(778712),
    u = l(140735),
    d = l(939249),
    h = l(834730),
    x = l(866665),
    m = l(254138),
    A = l(661531),
    g = l(926418),
    j = l(73392),
    E = l(665691),
    b = l(696451),
    N = l(290863),
    C = l(994500),
    f = l(287809),
    p = l(427262),
    I = l(742589),
    T = l(375708),
    _ = l(999900);
function D(e) {
    let n = e.channel.getRecipientId(),
        l = e.channel.isSystemDM(),
        D = (0, s.bG)([f.default], () => f.default.getUser(n)),
        v = (0, s.bG)([N.A], () => N.A.getStatus(n)),
        U = (0, s.bG)([N.A], () => N.A.isMobileOnline(n)),
        M = (0, s.bG)([N.A], () => N.A.isVROnline(n)),
        L = (0, s.bG)([C.A], () => C.A.getNickname(n)),
        S = p.Ay.useUserTag(D),
        R = (0, j.a)({ displayNameStyles: D?.displayNameStyles }),
        G = (0, E.bG)({ channelId: e.channel.id }),
        O = i.useRef(null),
        [y, k] = i.useState(!1),
        P = i.useRef(void 0),
        F = i.useCallback(() => {
            clearTimeout(P.current), k(!0);
        }, []),
        V = i.useCallback(() => {
            P.current = setTimeout(() => {
                k(!1);
            }, 250);
        }, []);
    i.useEffect(() => () => clearTimeout(P.current), []);
    let B = (0, s.cf)([b.Ay], () => b.Ay.getNicknameGuildsMapping(n), [n]),
        H = i.useMemo(
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
        z = H.length > 0,
        w = z && null != D && !l,
        X = L ?? p.Ay.getName(D),
        Q =
            null != D &&
            (0, t.jsx)(c.eu, {
                status: v,
                isMobile: U,
                isVR: M,
                size: o._3.SIZE_20,
                "aria-label": p.Ay.getName(D),
                src: D.getAvatarURL(void 0, 20),
            });
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(u.A, { children: T.intl.string(T.t.EJRzg7) }),
            null != D &&
                !l &&
                (0, t.jsxs)("div", {
                    className: _.my,
                    children: [
                        (0, t.jsx)("div", {
                            ref: O,
                            children:
                                null != e.handleClick
                                    ? (0, t.jsx)(d.D, {
                                          tag: "div",
                                          onClick: e.handleClick,
                                          onContextMenu: e.handleContextMenu,
                                          onMouseEnter: w ? F : void 0,
                                          onMouseLeave: w ? V : void 0,
                                          className: _.or,
                                          "aria-hidden": !0,
                                          tabIndex: -1,
                                          children: Q,
                                      })
                                    : Q,
                        }),
                        w &&
                            (0, t.jsxs)(r.x, {
                                targetElementRef: O,
                                shouldShow: y,
                                onRequestClose: () => k(!1),
                                position: "bottom",
                                caretConfig: { align: "start" },
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: _.y$,
                                        onMouseEnter: F,
                                        onMouseLeave: V,
                                        children: [
                                            (0, t.jsxs)("div", {
                                                className: _.qc,
                                                children: [
                                                    (0, t.jsx)(h.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: _.rX,
                                                        children: S,
                                                    }),
                                                    (0, t.jsx)(h.E, {
                                                        variant: "text-xs/semibold",
                                                        color: "text-muted",
                                                        className: _.FQ,
                                                        children: T.intl.string(T.t.l1QVfj),
                                                    }),
                                                ],
                                            }),
                                            (0, t.jsx)("div", { className: _.sA }),
                                            (0, t.jsx)("div", {
                                                className: _.cC,
                                                children: H.map((e) => {
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
            (0, t.jsx)(I.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                onMouseEnter: w ? F : void 0,
                onMouseLeave: w ? V : void 0,
                onFocus: w ? F : void 0,
                onBlur: w ? V : void 0,
                className: null != e.handleClick ? _.or : null,
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        z
                            ? (0, t.jsx)("span", { className: R, children: X })
                            : (0, t.jsx)(x.m, {
                                  text: S,
                                  position: "bottom",
                                  children: (0, t.jsx)("span", { className: R, children: X }),
                              }),
                        G &&
                            (0, t.jsx)(x.m, {
                                text: T.intl.string(T.t.QyZ4Td),
                                children: (0, t.jsx)(m.m, {
                                    size: "xs",
                                    "aria-label": T.intl.string(T.t.VHXh8a),
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
