n.d(t, { c$: () => v, Ay: () => j, Ce: () => N, n2: () => I });
var a = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    i = n(990078),
    s = n(834730),
    d = n(939249),
    o = n(140735),
    c = n(297413),
    u = n(705751);
function f(e) {
    let t;
    return e.isSystemUser() ? (t = u.nu.SYSTEM_DM) : e.bot && (t = u.nu.BOT), t;
}
var m = n(709066),
    E = n(609425),
    _ = n(922301),
    g = n(660184),
    p = n(534400),
    b = n(518477),
    h = n(375708),
    A = n(578004);
let R = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function v(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            size: i = "sm",
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: o = !1,
            displayNameTrailing: c,
            className: u,
        } = e,
        f = (0, E.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: d }),
        m = R[i];
    return null != f
        ? (0, a.jsx)(s.E, {
              variant: m,
              className: u,
              children: (0, a.jsx)(g.A, {
                  userName: r,
                  displayNameStyles: f,
                  effectDisplayType: _.G.ANIMATED,
                  textClassName: A.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: o,
                  appendedInlineContent: null != c ? (0, a.jsxs)(a.Fragment, { children: [" ", c] }) : null,
              }),
          })
        : (0, a.jsxs)(s.E, { className: l()(A.QC, A.O2, u), variant: m, children: [r, " ", c] });
}
function x(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            trailing: i,
            size: s = "sm",
            pendingDisplayNameStyles: o,
            onClickDisplayName: c,
        } = e,
        u = f(t),
        E = null != u ? (0, a.jsx)(m.A, { type: u, verified: t.isVerifiedBot(), className: A.AO }) : null,
        _ = (0, a.jsx)(v, {
            user: t,
            guildId: n,
            displayName: r,
            size: s,
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: null != c,
            displayNameTrailing: E,
        });
    return (0, a.jsxs)("div", {
        className: l()(A.K$, "lg" === s && A.lg),
        children: [
            null != c ? (0, a.jsx)(d.D, { onClick: c, className: A.vk, children: _ }) : _,
            null != i && !1 !== i && (0, a.jsx)("div", { className: A.MU, children: i }),
        ],
    });
}
function I(e) {
    let { pronouns: t, className: n } = e;
    return (0, a.jsxs)(s.E, {
        className: l()(A.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, a.jsx)(o.A, { tag: "span", children: h.intl.formatToPlainString(h.t["DRI+T7"], { pronouns: t }) }),
            (0, a.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function N() {
    return (0, a.jsx)("div", { "aria-hidden": "true", className: A.SC });
}
function T(e) {
    let { user: t, usernameIcon: n, onClickUsername: r, pronouns: s, primaryGuild: o, trailing: u, onClose: m } = e,
        E = null != s && s.length > 0,
        _ = f(t),
        g = t.isProvisional
            ? null
            : (0, a.jsx)(c.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: A.a1,
                  usernameClass: A.eb,
                  discriminatorClass: A.sw,
                  hideBotTag: !0,
              });
    return (0, a.jsxs)("div", {
        className: l()(A.AK, { [A.j6]: E, [A.w2]: null != _ }),
        children: [
            null != g && null != r ? (0, a.jsx)(d.D, { onClick: r, className: A.vk, children: g }) : g,
            E &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(N, {}),
                        (0, a.jsx)(i.m, {
                            text: h.intl.string(h.t.GI2A8C),
                            delay: b.In,
                            ariaHidden: !0,
                            children: (0, a.jsx)("span", { className: A.Ez, children: (0, a.jsx)(I, { pronouns: s }) }),
                        }),
                    ],
                }),
            (0, a.jsx)(p.Ay, { primaryGuild: o, userId: t.id, onClose: m, containerClassName: A.L4, className: A.Mp }),
            u,
        ],
    });
}
function j(e) {
    let {
        user: t,
        guildId: n,
        className: r,
        onClickName: l,
        displayName: i,
        displayNameSize: s,
        pendingDisplayNameStyles: d,
        displayNameTrailing: o,
        usernameIcon: c,
        pronouns: u,
        primaryGuild: f,
        trailing: m,
        onClose: E,
    } = e;
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsx)(x, {
                user: t,
                guildId: n,
                displayName: i,
                size: s,
                pendingDisplayNameStyles: d,
                onClickDisplayName: l,
                trailing: o,
            }),
            (0, a.jsx)(T, {
                user: t,
                usernameIcon: c,
                pronouns: u,
                primaryGuild: f,
                onClickUsername: l,
                onClose: E,
                trailing: m,
            }),
        ],
    });
}
