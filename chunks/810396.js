n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(990078),
    s = n(397927),
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
            nickname: y,
            nicknameIcons: b,
            pendingDisplayNameStyles: O,
            pronouns: v,
            primaryGuild: A,
            className: I,
            tagClassName: S,
            isTryItOut: T,
            onOpenProfile: C,
            onClose: N,
            nicknameVariant: w = "heading-lg/bold",
        } = e,
        R = (e) =>
            null == C
                ? e
                : (0, r.jsx)(s.DUT, {
                      onClick: C,
                      className: g.pt,
                      children: e,
                  }),
        P = null != v && v.length > 0,
        D = (0, c.r)(t),
        L = (0, d.A)({
            userId: t.id,
            guildId: n,
            pendingDisplayNameStyles: O,
        }),
        x = null != L;
    return (0, r.jsxs)("div", {
        className: a()(
            g.kL,
            {
                [g.Od]: null != D,
            },
            I,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: g.Fj,
                children: [
                    R(
                        x
                            ? (0, r.jsx)(s.Text, {
                                  variant: w,
                                  children: (0, r.jsx)(p.A, {
                                      userName: y,
                                      displayNameStyles: L,
                                      effectDisplayType: f.G.ANIMATED,
                                      textClassName: g.iA,
                                      shouldWrap: !0,
                                      loop: !0,
                                      inProfile: !0,
                                      shouldUnderlineOnHover: null != C,
                                  }),
                              })
                            : (0, r.jsx)(s.Text, {
                                  className: g.$R,
                                  variant: w,
                                  children: y,
                              }),
                    ),
                    null != D &&
                        (0, r.jsx)(u.A, {
                            type: D,
                            verified: t.isVerifiedBot(),
                        }),
                    null != b &&
                        (0, r.jsx)("div", {
                            className: g.t4,
                            children: b,
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
                        R(
                            (0, r.jsx)(l.A, {
                                user: t,
                                usernameIcon: i,
                                forceUsername: !0,
                                forcePomelo: T,
                                className: a()(g.a1, S),
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
                                (0, r.jsx)(o.m, {
                                    asContainer: !0,
                                    text: m.intl.string(m.t.GI2A8C),
                                    delay: h.In,
                                    ariaHidden: !0,
                                    children: (0, r.jsxs)(s.Text, {
                                        className: a()(g.kc, S),
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: [
                                            (0, r.jsx)(s.AC4, {
                                                tag: "span",
                                                children: m.intl.formatToPlainString(m.t["DRI+T7"], {
                                                    pronouns: v,
                                                }),
                                            }),
                                            (0, r.jsx)("span", {
                                                "aria-hidden": "true",
                                                children: v,
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(_.Ay, {
                        primaryGuild: A,
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
