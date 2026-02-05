"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(297413),
    u = n(296948),
    c = n(709066),
    d = n(609425),
    _ = n(922301),
    f = n(750112),
    p = n(534400),
    h = n(518477),
    m = n(985018),
    g = n(47202);
function E(e) {
    let {
            user: t,
            guildId: n,
            usernameIcon: i,
            tags: E,
            nickname: A,
            nicknameIcons: I,
            pendingDisplayNameStyles: T,
            pronouns: y,
            primaryGuild: S,
            className: v,
            tagClassName: C,
            isTryItOut: b,
            onOpenProfile: N,
            onClose: R,
            nicknameVariant: O = "heading-lg/bold",
        } = e,
        D = (e) => (null == N ? e : (0, r.jsx)(o.DUT, { onClick: N, className: g.pt, children: e })),
        L = null != y && y.length > 0,
        w = (0, u.r)(t),
        x = (0, d.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: T }),
        P = null != x;
    return (0, r.jsxs)("div", {
        className: a()(g.kL, { [g.Od]: null != w }, v),
        children: [
            (0, r.jsxs)("div", {
                className: g.Fj,
                children: [
                    D(
                        P
                            ? (0, r.jsx)(o.Text, {
                                  variant: O,
                                  children: (0, r.jsx)(f.A, {
                                      userName: A,
                                      displayNameStyles: x,
                                      effectDisplayType: _.G.ANIMATED,
                                      textClassName: g.iA,
                                      shouldWrap: !0,
                                      loop: !0,
                                      inProfile: !0,
                                      shouldUnderlineOnHover: null != N,
                                  }),
                              })
                            : (0, r.jsx)(o.Text, { className: g.$R, variant: O, children: A }),
                    ),
                    null != w && (0, r.jsx)(c.A, { type: w, verified: t.isVerifiedBot() }),
                    null != I && (0, r.jsx)("div", { className: g.t4, children: I }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()(g._A, { [g.hI]: L, [g.Od]: null != w }),
                children: [
                    !t.isProvisional &&
                        D(
                            (0, r.jsx)(l.A, {
                                user: t,
                                usernameIcon: i,
                                forceUsername: !0,
                                forcePomelo: b,
                                className: a()(g.a1, C),
                                usernameClass: g.eb,
                                discriminatorClass: g.sw,
                                hideBotTag: !0,
                            }),
                        ),
                    L &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { "aria-hidden": "true", className: g.SC }),
                                (0, r.jsx)(s.m, {
                                    asContainer: !0,
                                    text: m.intl.string(m.t.GI2A8C),
                                    delay: h.In,
                                    ariaHidden: !0,
                                    children: (0, r.jsxs)(o.Text, {
                                        className: a()(g.kc, C),
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: [
                                            (0, r.jsx)(o.AC4, {
                                                tag: "span",
                                                children: m.intl.formatToPlainString(m.t["DRI+T7"], { pronouns: y }),
                                            }),
                                            (0, r.jsx)("span", { "aria-hidden": "true", children: y }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(p.Ay, {
                        primaryGuild: S,
                        userId: t.id,
                        onClose: R,
                        containerClassName: g.L4,
                        className: g.Mp,
                    }),
                    E,
                ],
            }),
        ],
    });
}
