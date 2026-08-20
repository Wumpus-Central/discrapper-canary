l.d(n, { A: () => _ });
var t = l(477900),
    i = l(582128),
    s = l(702841),
    r = l(273875),
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
    p = l(994500),
    C = l(287809),
    T = l(427262),
    b = l(742589),
    I = l(375708),
    v = l(999900);
function _(e) {
    let n = e.channel.getRecipientId(),
        l = e.channel.isSystemDM(),
        _ = (0, s.bG)([C.default], () => C.default.getUser(n)),
        D = (0, s.bG)([f.A], () => f.A.getStatus(n)),
        M = (0, s.bG)([f.A], () => f.A.isMobileOnline(n)),
        U = (0, s.bG)([f.A], () => f.A.isVROnline(n)),
        L = (0, s.bG)([p.A], () => p.A.getNickname(n)),
        S = T.Ay.useUserTag(_),
        R = (0, j.a)({ displayNameStyles: _?.displayNameStyles }),
        G = (0, E.bG)({ channelId: e.channel.id }),
        y = i.useRef(null),
        [k, O] = i.useState(!1),
        F = i.useRef(void 0),
        P = i.useCallback(() => {
            clearTimeout(F.current), O(!0);
        }, []),
        V = i.useCallback(() => {
            F.current = setTimeout(() => {
                O(!1);
            }, 250);
        }, []);
    i.useEffect(() => () => clearTimeout(F.current), []);
    let z = (0, s.cf)([N.Ay], () => N.Ay.getNicknameGuildsMapping(n), [n]),
        B = i.useMemo(
            () =>
                Object.entries(z)
                    .filter((e) => {
                        let [n] = e;
                        return n !== _?.globalName;
                    })
                    .map((e) => {
                        let [n, l] = e;
                        return { nickname: n, guildIds: l };
                    }),
            [z, _?.globalName],
        ),
        H = B.length > 0,
        w = H && null != _ && !l,
        X = L ?? T.Ay.getName(_),
        Q =
            null != _ &&
            (0, t.jsx)(c.eu, {
                status: D,
                isMobile: M,
                isVR: U,
                size: o._3.SIZE_20,
                "aria-label": T.Ay.getName(_),
                src: _.getAvatarURL(void 0, 20),
            });
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(d.A, { children: I.intl.string(I.t.EJRzg7) }),
            null != _ &&
                !l &&
                (0, t.jsxs)("div", {
                    className: v.my,
                    children: [
                        (0, t.jsx)("div", {
                            ref: y,
                            children:
                                null != e.handleClick
                                    ? (0, t.jsx)(u.D, {
                                          tag: "div",
                                          onClick: e.handleClick,
                                          onContextMenu: e.handleContextMenu,
                                          onMouseEnter: w ? P : void 0,
                                          onMouseLeave: w ? V : void 0,
                                          className: v.or,
                                          "aria-hidden": !0,
                                          tabIndex: -1,
                                          children: Q,
                                      })
                                    : Q,
                        }),
                        w &&
                            (0, t.jsxs)(r.x, {
                                targetElementRef: y,
                                shouldShow: k,
                                onRequestClose: () => O(!1),
                                position: "bottom",
                                caretConfig: { align: "start" },
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: v.y$,
                                        onMouseEnter: P,
                                        onMouseLeave: V,
                                        children: [
                                            (0, t.jsxs)("div", {
                                                className: v.qc,
                                                children: [
                                                    (0, t.jsx)(h.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: v.rX,
                                                        children: S,
                                                    }),
                                                    (0, t.jsx)(h.E, {
                                                        variant: "text-xs/semibold",
                                                        color: "text-muted",
                                                        className: v.FQ,
                                                        children: I.intl.string(I.t.l1QVfj),
                                                    }),
                                                ],
                                            }),
                                            (0, t.jsx)("div", { className: v.sA }),
                                            (0, t.jsx)("div", {
                                                className: v.cC,
                                                children: B.map((e) => {
                                                    let { nickname: n, guildIds: l } = e;
                                                    return (0, t.jsxs)(
                                                        "div",
                                                        {
                                                            className: v.BZ,
                                                            children: [
                                                                (0, t.jsx)(h.E, {
                                                                    variant: "text-sm/medium",
                                                                    className: v.Vk,
                                                                    children: n,
                                                                }),
                                                                (0, t.jsx)("div", {
                                                                    className: v.Js,
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
            (0, t.jsx)(b.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                onMouseEnter: w ? P : void 0,
                onMouseLeave: w ? V : void 0,
                onFocus: w ? P : void 0,
                onBlur: w ? V : void 0,
                className: null != e.handleClick ? v.or : null,
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        H
                            ? (0, t.jsx)("span", { className: R, children: X })
                            : (0, t.jsx)(x.m, {
                                  text: S,
                                  position: "bottom",
                                  children: (0, t.jsx)("span", { className: R, children: X }),
                              }),
                        G &&
                            (0, t.jsx)(x.m, {
                                text: I.intl.string(I.t.QyZ4Td),
                                children: (0, t.jsx)(m.m, {
                                    size: "xs",
                                    "aria-label": I.intl.string(I.t.VHXh8a),
                                    color: A.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                    className: v.vW,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
