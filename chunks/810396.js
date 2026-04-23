t.d(n, { A: () => j });
var l = t(627968);
t(64700);
var r = t(503698),
    i = t.n(r),
    a = t(990078),
    s = t(939249),
    o = t(834730),
    d = t(140735),
    u = t(297413),
    c = t(296948),
    m = t(709066),
    p = t(609425),
    f = t(922301),
    g = t(750112),
    h = t(534400),
    x = t(518477),
    A = t(985018),
    E = t(312663);
function j(e) {
    let {
            user: n,
            guildId: t,
            usernameIcon: r,
            tags: j,
            nickname: v,
            nicknameIcons: C,
            pendingDisplayNameStyles: b,
            pronouns: R,
            primaryGuild: _,
            className: y,
            tagClassName: k,
            onOpenProfile: N,
            onClose: I,
            nicknameVariant: S = "heading-lg/bold",
        } = e,
        T = (e) => (null == N ? e : (0, l.jsx)(s.D, { onClick: N, className: E.pt, children: e })),
        D = null != R && R.length > 0,
        O = (0, c.r)(n),
        w = (0, p.A)({ userId: n.id, guildId: t, pendingDisplayNameStyles: b }),
        B = null != w,
        G = null != O ? (0, l.jsx)(m.A, { type: O, verified: n.isVerifiedBot(), className: E.AO }) : null;
    return (0, l.jsxs)("div", {
        className: i()(E.kL, { [E.Od]: null != O }, y),
        children: [
            (0, l.jsxs)("div", {
                className: E.Fj,
                children: [
                    T(
                        B
                            ? (0, l.jsx)(o.E, {
                                  variant: S,
                                  children: (0, l.jsx)(g.A, {
                                      userName: v,
                                      displayNameStyles: w,
                                      effectDisplayType: f.G.ANIMATED,
                                      textClassName: E.iA,
                                      shouldWrap: !0,
                                      loop: !0,
                                      inProfile: !0,
                                      shouldUnderlineOnHover: null != N,
                                      appendedInlineContent:
                                          null != G ? (0, l.jsxs)(l.Fragment, { children: [" ", G] }) : null,
                                  }),
                              })
                            : (0, l.jsxs)(o.E, { className: E.$R, variant: S, children: [v, " ", G] }),
                    ),
                    null != C && (0, l.jsx)("div", { className: E.t4, children: C }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(E._A, { [E.hI]: D, [E.Od]: null != O }),
                children: [
                    !n.isProvisional &&
                        T(
                            (0, l.jsx)(u.A, {
                                user: n,
                                usernameIcon: r,
                                forceUsername: !0,
                                className: i()(E.a1, k),
                                usernameClass: E.eb,
                                discriminatorClass: E.sw,
                                hideBotTag: !0,
                            }),
                        ),
                    D &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", { "aria-hidden": "true", className: E.SC }),
                                (0, l.jsx)(a.m, {
                                    asContainer: !0,
                                    text: A.intl.string(A.t.GI2A8C),
                                    delay: x.In,
                                    ariaHidden: !0,
                                    children: (0, l.jsxs)(o.E, {
                                        className: i()(E.kc, k),
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: [
                                            (0, l.jsx)(d.A, {
                                                tag: "span",
                                                children: A.intl.formatToPlainString(A.t["DRI+T7"], { pronouns: R }),
                                            }),
                                            (0, l.jsx)("span", { "aria-hidden": "true", children: R }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    (0, l.jsx)(h.Ay, {
                        primaryGuild: _,
                        userId: n.id,
                        onClose: I,
                        containerClassName: E.L4,
                        className: E.Mp,
                    }),
                    j,
                ],
            }),
        ],
    });
}
