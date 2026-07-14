n.d(t, { c$: () => x, Ay: () => j, Ce: () => I, n2: () => v });
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(990078),
    i = n(834730),
    d = n(939249),
    o = n(140735),
    c = n(297413),
    u = n(705751);
function f(e) {
    let t;
    return e.isSystemUser() ? (t = u.nu.SYSTEM_DM) : e.bot && (t = u.nu.BOT), t;
}
var E = n(709066),
    m = n(609425),
    g = n(922301),
    p = n(660184),
    b = n(534400),
    _ = n(518477),
    h = n(375708),
    A = n(874644);
let R = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function x(e) {
    let {
            user: t,
            guildId: n,
            displayName: l,
            size: s = "sm",
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: o = !1,
            displayNameTrailing: c,
            className: u,
        } = e,
        f = (0, m.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: d }),
        E = R[s];
    return null != f
        ? (0, a.jsx)(i.E, {
              variant: E,
              className: u,
              children: (0, a.jsx)(p.A, {
                  userName: l,
                  displayNameStyles: f,
                  effectDisplayType: g.G.ANIMATED,
                  textClassName: A.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: o,
                  appendedInlineContent: null != c ? (0, a.jsxs)(a.Fragment, { children: [" ", c] }) : null,
              }),
          })
        : (0, a.jsxs)(i.E, { className: r()(A.QC, A.O2, u), variant: E, children: [l, " ", c] });
}
function N(e) {
    let {
            user: t,
            guildId: n,
            displayName: l,
            trailing: s,
            size: i = "sm",
            pendingDisplayNameStyles: o,
            onClickDisplayName: c,
        } = e,
        u = f(t),
        m = null != u ? (0, a.jsx)(E.A, { type: u, verified: t.isVerifiedBot(), className: A.AO }) : null,
        g = (0, a.jsx)(x, {
            user: t,
            guildId: n,
            displayName: l,
            size: i,
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: null != c,
            displayNameTrailing: m,
        });
    return (0, a.jsxs)("div", {
        className: r()(A.K$, "lg" === i && A.lg),
        children: [
            null != c ? (0, a.jsx)(d.D, { onClick: c, className: A.vk, children: g }) : g,
            null != s && !1 !== s && (0, a.jsx)("div", { className: A.MU, children: s }),
        ],
    });
}
function v(e) {
    let { pronouns: t, className: n } = e;
    return (0, a.jsxs)(i.E, {
        className: r()(A.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, a.jsx)(o.A, { tag: "span", children: h.intl.formatToPlainString(h.t["DRI+T7"], { pronouns: t }) }),
            (0, a.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function I() {
    return (0, a.jsx)("div", { "aria-hidden": "true", className: A.SC });
}
function T(e) {
    let { user: t, usernameIcon: n, onClickUsername: l, pronouns: i, primaryGuild: o, trailing: u, onClose: E } = e,
        m = null != i && i.length > 0,
        g = f(t),
        p = t.isProvisional
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
        className: r()(A.AK, { [A.j6]: m, [A.w2]: null != g }),
        children: [
            null != p && null != l ? (0, a.jsx)(d.D, { onClick: l, className: A.vk, children: p }) : p,
            m &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(I, {}),
                        (0, a.jsx)(s.m, {
                            text: h.intl.string(h.t.GI2A8C),
                            delay: _.In,
                            ariaHidden: !0,
                            children: (0, a.jsx)("span", { className: A.Ez, children: (0, a.jsx)(v, { pronouns: i }) }),
                        }),
                    ],
                }),
            (0, a.jsx)(b.Ay, { primaryGuild: o, userId: t.id, onClose: E, containerClassName: A.L4, className: A.Mp }),
            u,
        ],
    });
}
function j(e) {
    let {
        user: t,
        guildId: n,
        className: l,
        onClickName: r,
        displayName: s,
        displayNameSize: i,
        pendingDisplayNameStyles: d,
        displayNameTrailing: o,
        usernameIcon: c,
        pronouns: u,
        primaryGuild: f,
        trailing: E,
        onClose: m,
    } = e;
    return (0, a.jsxs)("div", {
        className: l,
        children: [
            (0, a.jsx)(N, {
                user: t,
                guildId: n,
                displayName: s,
                size: i,
                pendingDisplayNameStyles: d,
                onClickDisplayName: r,
                trailing: o,
            }),
            (0, a.jsx)(T, {
                user: t,
                usernameIcon: c,
                pronouns: u,
                primaryGuild: f,
                onClickUsername: r,
                onClose: m,
                trailing: E,
            }),
        ],
    });
}
