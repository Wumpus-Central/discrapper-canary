"use strict";
n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(990078),
    o = n(939249),
    l = n(834730),
    u = n(140735),
    c = n(297413),
    d = n(296948),
    _ = n(709066),
    f = n(609425),
    p = n(922301),
    h = n(750112),
    E = n(534400),
    m = n(518477),
    g = n(985018),
    A = n(312663);
function I(e) {
    let {
            user: t,
            guildId: n,
            usernameIcon: i,
            tags: I,
            nickname: T,
            nicknameIcons: S,
            pendingDisplayNameStyles: y,
            pronouns: N,
            primaryGuild: v,
            className: C,
            tagClassName: O,
            onOpenProfile: R,
            onClose: b,
            nicknameVariant: D = "heading-lg/bold",
        } = e,
        L = (e) => (null == R ? e : (0, r.jsx)(o.D, { onClick: R, className: A.pt, children: e })),
        w = null != N && N.length > 0,
        M = (0, d.r)(t),
        P = (0, f.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: y }),
        x = null != P,
        k = null != M ? (0, r.jsx)(_.A, { type: M, verified: t.isVerifiedBot(), className: A.AO }) : null;
    return (0, r.jsxs)("div", {
        className: s()(A.kL, { [A.Od]: null != M }, C),
        children: [
            (0, r.jsxs)("div", {
                className: A.Fj,
                children: [
                    L(
                        x
                            ? (0, r.jsx)(l.E, {
                                  variant: D,
                                  children: (0, r.jsx)(h.A, {
                                      userName: T,
                                      displayNameStyles: P,
                                      effectDisplayType: p.G.ANIMATED,
                                      textClassName: A.iA,
                                      shouldWrap: !0,
                                      loop: !0,
                                      inProfile: !0,
                                      shouldUnderlineOnHover: null != R,
                                      appendedInlineContent:
                                          null != k ? (0, r.jsxs)(r.Fragment, { children: [" ", k] }) : null,
                                  }),
                              })
                            : (0, r.jsxs)(l.E, { className: A.$R, variant: D, children: [T, " ", k] }),
                    ),
                    null != S && (0, r.jsx)("div", { className: A.t4, children: S }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s()(A._A, { [A.hI]: w, [A.Od]: null != M }),
                children: [
                    !t.isProvisional &&
                        L(
                            (0, r.jsx)(c.A, {
                                user: t,
                                usernameIcon: i,
                                forceUsername: !0,
                                className: s()(A.a1, O),
                                usernameClass: A.eb,
                                discriminatorClass: A.sw,
                                hideBotTag: !0,
                            }),
                        ),
                    w &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { "aria-hidden": "true", className: A.SC }),
                                (0, r.jsx)(a.m, {
                                    asContainer: !0,
                                    text: g.intl.string(g.t.GI2A8C),
                                    delay: m.In,
                                    ariaHidden: !0,
                                    children: (0, r.jsxs)(l.E, {
                                        className: s()(A.kc, O),
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: [
                                            (0, r.jsx)(u.A, {
                                                tag: "span",
                                                children: g.intl.formatToPlainString(g.t["DRI+T7"], { pronouns: N }),
                                            }),
                                            (0, r.jsx)("span", { "aria-hidden": "true", children: N }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(E.Ay, {
                        primaryGuild: v,
                        userId: t.id,
                        onClose: b,
                        containerClassName: A.L4,
                        className: A.Mp,
                    }),
                    I,
                ],
            }),
        ],
    });
}
