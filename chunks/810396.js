n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(297413),
    c = n(296948),
    u = n(709066),
    d = n(609425),
    f = n(922301),
    p = n(750112),
    _ = n(534400),
    h = n(518477),
    m = n(985018),
    g = n(47202);

function E(e) {
    let {
            user: t,
            guildId: n,
            usernameIcon: i,
            tags: E,
            nickname: b,
            nicknameIcons: y,
            pendingDisplayNameStyles: O,
            pronouns: A,
            primaryGuild: v,
            className: S,
            tagClassName: I,
            isTryItOut: T,
            onOpenProfile: C,
            onClose: N,
            nicknameVariant: R = "heading-lg/bold",
        } = e,
        w = (e) =>
            null == C
                ? e
                : (0, r.jsx)(o.sqX, {
                      onClick: C,
                      className: g.pt,
                      "aria-label": m.intl.string(m.t["+Xp3hq"]),
                      children: e,
                  }),
        P = null != A && A.length > 0,
        D = (0, c.r)(t),
        x = (0, d.A)({
            userId: t.id,
            guildId: n,
            pendingDisplayNameStyles: O,
        }),
        L = null != x;
    return (0, r.jsxs)("div", {
        className: a()(
            g.kL,
            {
                [g.Od]: null != D,
            },
            S,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: g.Fj,
                children: [
                    w(
                        L
                            ? (0, r.jsx)(o.Text, {
                                  variant: R,
                                  children: (0, r.jsx)(p.A, {
                                      userName: b,
                                      displayNameStyles: x,
                                      effectDisplayType: f.G.ANIMATED,
                                      textClassName: g.iA,
                                      shouldWrap: !0,
                                      loop: !0,
                                      inProfile: !0,
                                      shouldUnderlineOnHover: null != C,
                                  }),
                              })
                            : (0, r.jsx)(o.Text, {
                                  className: g.$R,
                                  variant: R,
                                  children: b,
                              }),
                    ),
                    null != D &&
                        (0, r.jsx)(u.A, {
                            type: D,
                            verified: t.isVerifiedBot(),
                        }),
                    null != y &&
                        (0, r.jsx)("div", {
                            className: g.t4,
                            children: y,
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()(g._A, {
                    [g.hI]: P,
                    [g.Od]: null != D,
                }),
                children: [
                    !t.isProvisional &&
                        w(
                            (0, r.jsx)(l.A, {
                                user: t,
                                usernameIcon: i,
                                forceUsername: !0,
                                forcePomelo: T,
                                className: a()(g.a1, I),
                                usernameClass: g.eb,
                                discriminatorClass: g.sw,
                                hideBotTag: !0,
                            }),
                        ),
                    P &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    "aria-hidden": "true",
                                    className: g.SC,
                                }),
                                (0, r.jsx)(s.m, {
                                    asContainer: !0,
                                    text: m.intl.string(m.t.GI2A8C),
                                    delay: h.In,
                                    children: (0, r.jsx)(o.Text, {
                                        className: a()(g.kc, I),
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: A,
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(_.Ay, {
                        primaryGuild: v,
                        userId: t.id,
                        onClose: N,
                        containerClassName: g.L4,
                        className: g.Mp,
                    }),
                    E,
                ],
            }),
        ],
    });
}
