"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(990078),
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
    E = n(862552);
function g(e) {
    let {
            user: t,
            guildId: n,
            usernameIcon: i,
            tags: g,
            nickname: A,
            nicknameIcons: I,
            pendingDisplayNameStyles: T,
            pronouns: S,
            primaryGuild: y,
            className: v,
            tagClassName: N,
            onOpenProfile: C,
            onClose: R,
            nicknameVariant: O = "heading-lg/bold",
        } = e,
        b = (e) => (null == C ? e : (0, r.jsx)(o.DUT, { onClick: C, className: E.pt, children: e })),
        D = null != S && S.length > 0,
        L = (0, u.r)(t),
        w = (0, d.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: T }),
        M = null != w,
        x = null != L && (0, r.jsx)(c.A, { type: L, verified: t.isVerifiedBot(), className: E.AO });
    return (0, r.jsxs)("div", {
        className: s()(E.kL, { [E.Od]: null != L }, v),
        children: [
            (0, r.jsxs)("div", {
                className: E.Fj,
                children: [
                    b(
                        M
                            ? (0, r.jsx)(o.Text, {
                                  variant: O,
                                  children: (0, r.jsx)(f.A, {
                                      userName: A,
                                      displayNameStyles: w,
                                      effectDisplayType: _.G.ANIMATED,
                                      textClassName: E.iA,
                                      shouldWrap: !0,
                                      loop: !0,
                                      inProfile: !0,
                                      shouldUnderlineOnHover: null != C,
                                      appendedInlineContent:
                                          null != x ? (0, r.jsxs)(r.Fragment, { children: [" ", x] }) : null,
                                  }),
                              })
                            : (0, r.jsxs)(o.Text, { className: E.$R, variant: O, children: [A, " ", x] }),
                    ),
                    null != I && (0, r.jsx)("div", { className: E.t4, children: I }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s()(E._A, { [E.hI]: D, [E.Od]: null != L }),
                children: [
                    !t.isProvisional &&
                        b(
                            (0, r.jsx)(l.A, {
                                user: t,
                                usernameIcon: i,
                                forceUsername: !0,
                                className: s()(E.a1, N),
                                usernameClass: E.eb,
                                discriminatorClass: E.sw,
                                hideBotTag: !0,
                            }),
                        ),
                    D &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { "aria-hidden": "true", className: E.SC }),
                                (0, r.jsx)(a.m, {
                                    asContainer: !0,
                                    text: m.intl.string(m.t.GI2A8C),
                                    delay: h.In,
                                    ariaHidden: !0,
                                    children: (0, r.jsxs)(o.Text, {
                                        className: s()(E.kc, N),
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: [
                                            (0, r.jsx)(o.AC4, {
                                                tag: "span",
                                                children: m.intl.formatToPlainString(m.t["DRI+T7"], { pronouns: S }),
                                            }),
                                            (0, r.jsx)("span", { "aria-hidden": "true", children: S }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(p.Ay, {
                        primaryGuild: y,
                        userId: t.id,
                        onClose: R,
                        containerClassName: E.L4,
                        className: E.Mp,
                    }),
                    g,
                ],
            }),
        ],
    });
}
