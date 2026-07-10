"use strict";
n.d(t, { c$: () => S, Ay: () => L, Ce: () => R, n2: () => C });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(990078),
    l = n(834730),
    o = n(939249),
    d = n(140735),
    c = n(297413),
    u = n(705751);
function _(e) {
    let t;
    return e.isSystemUser() ? (t = u.nu.SYSTEM_DM) : e.bot && (t = u.nu.BOT), t;
}
var E = n(709066),
    A = n(609425),
    h = n(922301),
    I = n(660184),
    f = n(534400),
    p = n(518477),
    T = n(375708),
    m = n(578004);
let g = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function S(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            size: s = "sm",
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: d = !1,
            displayNameTrailing: c,
            className: u,
        } = e,
        _ = (0, A.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: o }),
        E = g[s];
    return null != _
        ? (0, i.jsx)(l.E, {
              variant: E,
              className: u,
              children: (0, i.jsx)(I.A, {
                  userName: r,
                  displayNameStyles: _,
                  effectDisplayType: h.G.ANIMATED,
                  textClassName: m.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: d,
                  appendedInlineContent: null != c ? (0, i.jsxs)(i.Fragment, { children: [" ", c] }) : null,
              }),
          })
        : (0, i.jsxs)(l.E, { className: a()(m.QC, m.O2, u), variant: E, children: [r, " ", c] });
}
function N(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            trailing: s,
            size: l = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: c,
        } = e,
        u = _(t),
        A = null != u ? (0, i.jsx)(E.A, { type: u, verified: t.isVerifiedBot(), className: m.AO }) : null,
        h = (0, i.jsx)(S, {
            user: t,
            guildId: n,
            displayName: r,
            size: l,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != c,
            displayNameTrailing: A,
        });
    return (0, i.jsxs)("div", {
        className: a()(m.K$, "lg" === l && m.lg),
        children: [
            null != c ? (0, i.jsx)(o.D, { onClick: c, className: m.vk, children: h }) : h,
            null != s && !1 !== s && (0, i.jsx)("div", { className: m.MU, children: s }),
        ],
    });
}
function C(e) {
    let { pronouns: t, className: n } = e;
    return (0, i.jsxs)(l.E, {
        className: a()(m.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, i.jsx)(d.A, { tag: "span", children: T.intl.formatToPlainString(T.t["DRI+T7"], { pronouns: t }) }),
            (0, i.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function R() {
    return (0, i.jsx)("div", { "aria-hidden": "true", className: m.SC });
}
function O(e) {
    let { user: t, usernameIcon: n, onClickUsername: r, pronouns: l, primaryGuild: d, trailing: u, onClose: E } = e,
        A = null != l && l.length > 0,
        h = _(t),
        I = t.isProvisional
            ? null
            : (0, i.jsx)(c.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: m.a1,
                  usernameClass: m.eb,
                  discriminatorClass: m.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        className: a()(m.AK, { [m.j6]: A, [m.w2]: null != h }),
        children: [
            null != I && null != r ? (0, i.jsx)(o.D, { onClick: r, className: m.vk, children: I }) : I,
            A &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(R, {}),
                        (0, i.jsx)(s.m, {
                            text: T.intl.string(T.t.GI2A8C),
                            delay: p.In,
                            ariaHidden: !0,
                            children: (0, i.jsx)("span", { className: m.Ez, children: (0, i.jsx)(C, { pronouns: l }) }),
                        }),
                    ],
                }),
            (0, i.jsx)(f.Ay, { primaryGuild: d, userId: t.id, onClose: E, containerClassName: m.L4, className: m.Mp }),
            u,
        ],
    });
}
function L(e) {
    let {
        user: t,
        guildId: n,
        className: r,
        onClickName: a,
        displayName: s,
        displayNameSize: l,
        pendingDisplayNameStyles: o,
        displayNameTrailing: d,
        usernameIcon: c,
        pronouns: u,
        primaryGuild: _,
        trailing: E,
        onClose: A,
    } = e;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)(N, {
                user: t,
                guildId: n,
                displayName: s,
                size: l,
                pendingDisplayNameStyles: o,
                onClickDisplayName: a,
                trailing: d,
            }),
            (0, i.jsx)(O, {
                user: t,
                usernameIcon: c,
                pronouns: u,
                primaryGuild: _,
                onClickUsername: a,
                onClose: A,
                trailing: E,
            }),
        ],
    });
}
