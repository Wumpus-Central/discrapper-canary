"use strict";
n.d(t, { A: () => A });
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
    h = n(534400),
    p = n(518477),
    g = n(985018),
    E = n(47202);
function A(e) {
    let {
            user: t,
            guildId: n,
            usernameIcon: i,
            tags: A,
            nickname: I,
            nicknameIcons: T,
            pendingDisplayNameStyles: y,
            pronouns: S,
            primaryGuild: v,
            className: C,
            tagClassName: b,
            onOpenProfile: N,
            onClose: R,
            nicknameVariant: O = "heading-lg/bold",
        } = e,
        D = (e) => (null == N ? e : (0, r.jsx)(o.DUT, { onClick: N, className: E.pt, children: e })),
        L = null != S && S.length > 0,
        w = (0, u.r)(t),
        x = (0, d.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: y }),
        P = null != x;
    return (0, r.jsxs)("div", {
        className: a()(E.kL, { [E.Od]: null != w }, C),
        children: [
            (0, r.jsxs)("div", {
                className: E.Fj,
                children: [
                    D(
                        P
                            ? (0, r.jsx)(o.Text, {
                                  variant: O,
                                  children: (0, r.jsx)(f.A, {
                                      userName: I,
                                      displayNameStyles: x,
                                      effectDisplayType: _.G.ANIMATED,
                                      textClassName: E.iA,
                                      shouldWrap: !0,
                                      loop: !0,
                                      inProfile: !0,
                                      shouldUnderlineOnHover: null != N,
                                  }),
                              })
                            : (0, r.jsx)(o.Text, { className: E.$R, variant: O, children: I }),
                    ),
                    null != w && (0, r.jsx)(c.A, { type: w, verified: t.isVerifiedBot() }),
                    null != T && (0, r.jsx)("div", { className: E.t4, children: T }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()(E._A, { [E.hI]: L, [E.Od]: null != w }),
                children: [
                    !t.isProvisional &&
                        D(
                            (0, r.jsx)(l.A, {
                                user: t,
                                usernameIcon: i,
                                forceUsername: !0,
                                className: a()(E.a1, b),
                                usernameClass: E.eb,
                                discriminatorClass: E.sw,
                                hideBotTag: !0,
                            }),
                        ),
                    L &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { "aria-hidden": "true", className: E.SC }),
                                (0, r.jsx)(s.m, {
                                    asContainer: !0,
                                    text: g.intl.string(g.t.GI2A8C),
                                    delay: p.In,
                                    ariaHidden: !0,
                                    children: (0, r.jsxs)(o.Text, {
                                        className: a()(E.kc, b),
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: [
                                            (0, r.jsx)(o.AC4, {
                                                tag: "span",
                                                children: g.intl.formatToPlainString(g.t["DRI+T7"], { pronouns: S }),
                                            }),
                                            (0, r.jsx)("span", { "aria-hidden": "true", children: S }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(h.Ay, {
                        primaryGuild: v,
                        userId: t.id,
                        onClose: R,
                        containerClassName: E.L4,
                        className: E.Mp,
                    }),
                    A,
                ],
            }),
        ],
    });
}
