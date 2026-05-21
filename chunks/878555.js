"use strict";
n.d(t, { c$: () => S, Ay: () => O, Ce: () => C, n2: () => y });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(834730),
    l = n(939249),
    u = n(140735),
    c = n(297413),
    d = n(705751);
function _(e) {
    let t;
    return e.isSystemUser() ? (t = d.nu.SYSTEM_DM) : e.bot && (t = d.nu.BOT), t;
}
var f = n(709066),
    h = n(609425),
    p = n(922301),
    E = n(368919),
    m = n(534400),
    g = n(518477),
    A = n(375708),
    I = n(874644);
let T = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function S(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            size: a = "sm",
            pendingDisplayNameStyles: l,
            shouldUnderlineOnHover: u = !1,
            botTag: c,
            className: d,
        } = e,
        _ = (0, h.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: l }),
        f = T[a];
    return null != _
        ? (0, i.jsx)(o.E, {
              variant: f,
              className: d,
              children: (0, i.jsx)(E.A, {
                  userName: r,
                  displayNameStyles: _,
                  effectDisplayType: p.G.ANIMATED,
                  textClassName: I.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: u,
                  appendedInlineContent: null != c ? (0, i.jsxs)(i.Fragment, { children: [" ", c] }) : null,
              }),
          })
        : (0, i.jsxs)(o.E, { className: s()(I.QC, I.O2, d), variant: f, children: [r, " ", c] });
}
function N(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            trailing: a,
            size: o = "sm",
            pendingDisplayNameStyles: u,
            onClickDisplayName: c,
        } = e,
        d = _(t),
        h = null != d ? (0, i.jsx)(f.A, { type: d, verified: t.isVerifiedBot(), className: I.AO }) : null,
        p = (0, i.jsx)(S, {
            user: t,
            guildId: n,
            displayName: r,
            size: o,
            pendingDisplayNameStyles: u,
            shouldUnderlineOnHover: null != c,
            botTag: h,
        });
    return (0, i.jsxs)("div", {
        className: s()(I.K$, "lg" === o && I.lg),
        children: [
            null != c ? (0, i.jsx)(l.D, { onClick: c, className: I.vk, children: p }) : p,
            null != a && !1 !== a && (0, i.jsx)("div", { className: I.MU, children: a }),
        ],
    });
}
function y(e) {
    let { pronouns: t, className: n } = e;
    return (0, i.jsxs)(o.E, {
        className: s()(I.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, i.jsx)(u.A, { tag: "span", children: A.intl.formatToPlainString(A.t["DRI+T7"], { pronouns: t }) }),
            (0, i.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function C() {
    return (0, i.jsx)("div", { "aria-hidden": "true", className: I.SC });
}
function v(e) {
    let {
            user: t,
            usernameIcon: n,
            onClickUsername: r,
            pronouns: o,
            primaryGuild: u,
            trailing: d,
            onClose: f,
            disableGuildProfile: h,
        } = e,
        p = null != o && o.length > 0,
        E = _(t),
        T = t.isProvisional
            ? null
            : (0, i.jsx)(c.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: I.a1,
                  usernameClass: I.eb,
                  discriminatorClass: I.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        className: s()(I.AK, { [I.j6]: p, [I.w2]: null != E }),
        children: [
            null != T && null != r ? (0, i.jsx)(l.D, { onClick: r, className: I.vk, children: T }) : T,
            p &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(C, {}),
                        (0, i.jsx)(a.m, {
                            asContainer: !0,
                            text: A.intl.string(A.t.GI2A8C),
                            delay: g.In,
                            ariaHidden: !0,
                            children: (0, i.jsx)(y, { pronouns: o }),
                        }),
                    ],
                }),
            (0, i.jsx)(m.Ay, {
                primaryGuild: u,
                userId: t.id,
                onClose: f,
                containerClassName: I.L4,
                className: I.Mp,
                disableGuildProfile: h,
            }),
            d,
        ],
    });
}
function O(e) {
    let {
        user: t,
        guildId: n,
        className: r,
        onClickName: s,
        displayName: a,
        displayNameSize: o,
        pendingDisplayNameStyles: l,
        displayNameTrailing: u,
        usernameIcon: c,
        pronouns: d,
        primaryGuild: _,
        trailing: f,
        onClose: h,
        disableGuildProfile: p,
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
                trailing: u,
            }),
            (0, i.jsx)(v, {
                user: t,
                usernameIcon: c,
                pronouns: d,
                primaryGuild: _,
                onClickUsername: s,
                onClose: h,
                trailing: f,
                disableGuildProfile: p,
            }),
        ],
    });
}
