"use strict";
n.d(t, { Ay: () => R });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(834730),
    l = n(939249),
    d = n(140735),
    _ = n(297413),
    u = n(705751);
function c(e) {
    let t;
    return e.isSystemUser() ? (t = u.nu.SYSTEM_DM) : e.bot && (t = u.nu.BOT), t;
}
var E = n(709066),
    h = n(609425),
    m = n(922301),
    f = n(368919),
    g = n(534400),
    p = n(518477),
    A = n(985018),
    I = n(874644);
let T = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function S(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            size: a = "sm",
            pendingDisplayNameStyles: l,
            shouldUnderlineOnHover: d = !1,
            botTag: _,
            className: u,
        } = e,
        c = (0, h.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: l }),
        E = T[a];
    return null != c
        ? (0, i.jsx)(o.E, {
              variant: E,
              className: u,
              children: (0, i.jsx)(f.A, {
                  userName: r,
                  displayNameStyles: c,
                  effectDisplayType: m.G.ANIMATED,
                  textClassName: I.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: d,
                  appendedInlineContent: null != _ ? (0, i.jsxs)(i.Fragment, { children: [" ", _] }) : null,
              }),
          })
        : (0, i.jsxs)(o.E, { className: s()(I.QC, I.O2, u), variant: E, children: [r, " ", _] });
}
function N(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            trailing: a,
            size: o = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: _,
        } = e,
        u = c(t),
        h = null != u ? (0, i.jsx)(E.A, { type: u, verified: t.isVerifiedBot(), className: I.AO }) : null,
        m = (0, i.jsx)(S, {
            user: t,
            guildId: n,
            displayName: r,
            size: o,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != _,
            botTag: h,
        });
    return (0, i.jsxs)("div", {
        className: s()(I.K$, "lg" === o && I.lg),
        children: [
            null != _ ? (0, i.jsx)(l.D, { onClick: _, className: I.vk, children: m }) : m,
            null != a && !1 !== a && (0, i.jsx)("div", { className: I.MU, children: a }),
        ],
    });
}
function C(e) {
    let { user: t, usernameIcon: n, onClickUsername: r, pronouns: u, primaryGuild: E, trailing: h, onClose: m } = e,
        f = null != u && u.length > 0,
        T = c(t),
        S = t.isProvisional
            ? null
            : (0, i.jsx)(_.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: I.a1,
                  usernameClass: I.eb,
                  discriminatorClass: I.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        className: s()(I.AK, { [I.j6]: f, [I.w2]: null != T }),
        children: [
            null != S && null != r ? (0, i.jsx)(l.D, { onClick: r, className: I.vk, children: S }) : S,
            f &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", { "aria-hidden": "true", className: I.SC }),
                        (0, i.jsx)(a.m, {
                            asContainer: !0,
                            text: A.intl.string(A.t.GI2A8C),
                            delay: p.In,
                            ariaHidden: !0,
                            children: (0, i.jsxs)(o.E, {
                                className: I.hI,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    (0, i.jsx)(d.A, {
                                        tag: "span",
                                        children: A.intl.formatToPlainString(A.t["DRI+T7"], { pronouns: u }),
                                    }),
                                    (0, i.jsx)("span", { "aria-hidden": "true", children: u }),
                                ],
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)(g.Ay, { primaryGuild: E, userId: t.id, onClose: m, containerClassName: I.L4, className: I.Mp }),
            h,
        ],
    });
}
function R(e) {
    let {
        user: t,
        guildId: n,
        className: r,
        onClickName: s,
        displayName: a,
        displayNameSize: o,
        pendingDisplayNameStyles: l,
        displayNameTrailing: d,
        usernameIcon: _,
        pronouns: u,
        primaryGuild: c,
        trailing: E,
        onClose: h,
    } = e;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)(N, {
                user: t,
                guildId: n,
                displayName: a,
                size: o,
                pendingDisplayNameStyles: l,
                onClickDisplayName: s,
                trailing: d,
            }),
            (0, i.jsx)(C, {
                user: t,
                usernameIcon: _,
                pronouns: u,
                primaryGuild: c,
                onClickUsername: s,
                onClose: h,
                trailing: E,
            }),
        ],
    });
}
