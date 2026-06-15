n.d(t, { c$: () => j, Ay: () => R, Ce: () => C, n2: () => A });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(990078),
    s = n(834730),
    o = n(939249),
    d = n(140735),
    u = n(297413),
    c = n(705751);
function m(e) {
    let t;
    return e.isSystemUser() ? (t = c.nu.SYSTEM_DM) : e.bot && (t = c.nu.BOT), t;
}
var g = n(709066),
    f = n(609425),
    p = n(922301),
    h = n(660184),
    _ = n(534400),
    x = n(518477),
    b = n(375708),
    v = n(874644);
let E = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function j(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            size: a = "sm",
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: d = !1,
            displayNameTrailing: u,
            className: c,
        } = e,
        m = (0, f.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: o }),
        g = E[a];
    return null != m
        ? (0, l.jsx)(s.E, {
              variant: g,
              className: c,
              children: (0, l.jsx)(h.A, {
                  userName: r,
                  displayNameStyles: m,
                  effectDisplayType: p.G.ANIMATED,
                  textClassName: v.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: d,
                  appendedInlineContent: null != u ? (0, l.jsxs)(l.Fragment, { children: [" ", u] }) : null,
              }),
          })
        : (0, l.jsxs)(s.E, { className: i()(v.QC, v.O2, c), variant: g, children: [r, " ", u] });
}
function y(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            trailing: a,
            size: s = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: u,
        } = e,
        c = m(t),
        f = null != c ? (0, l.jsx)(g.A, { type: c, verified: t.isVerifiedBot(), className: v.AO }) : null,
        p = (0, l.jsx)(j, {
            user: t,
            guildId: n,
            displayName: r,
            size: s,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != u,
            displayNameTrailing: f,
        });
    return (0, l.jsxs)("div", {
        className: i()(v.K$, "lg" === s && v.lg),
        children: [
            null != u ? (0, l.jsx)(o.D, { onClick: u, className: v.vk, children: p }) : p,
            null != a && !1 !== a && (0, l.jsx)("div", { className: v.MU, children: a }),
        ],
    });
}
function A(e) {
    let { pronouns: t, className: n } = e;
    return (0, l.jsxs)(s.E, {
        className: i()(v.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, l.jsx)(d.A, { tag: "span", children: b.intl.formatToPlainString(b.t["DRI+T7"], { pronouns: t }) }),
            (0, l.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function C() {
    return (0, l.jsx)("div", { "aria-hidden": "true", className: v.SC });
}
function I(e) {
    let { user: t, usernameIcon: n, onClickUsername: r, pronouns: s, primaryGuild: d, trailing: c, onClose: g } = e,
        f = null != s && s.length > 0,
        p = m(t),
        h = t.isProvisional
            ? null
            : (0, l.jsx)(u.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: v.a1,
                  usernameClass: v.eb,
                  discriminatorClass: v.sw,
                  hideBotTag: !0,
              });
    return (0, l.jsxs)("div", {
        className: i()(v.AK, { [v.j6]: f, [v.w2]: null != p }),
        children: [
            null != h && null != r ? (0, l.jsx)(o.D, { onClick: r, className: v.vk, children: h }) : h,
            f &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(C, {}),
                        (0, l.jsx)(a.m, {
                            text: b.intl.string(b.t.GI2A8C),
                            delay: x.In,
                            ariaHidden: !0,
                            children: (0, l.jsx)("span", { className: v.Ez, children: (0, l.jsx)(A, { pronouns: s }) }),
                        }),
                    ],
                }),
            (0, l.jsx)(_.Ay, { primaryGuild: d, userId: t.id, onClose: g, containerClassName: v.L4, className: v.Mp }),
            c,
        ],
    });
}
function R(e) {
    let {
        user: t,
        guildId: n,
        className: r,
        onClickName: i,
        displayName: a,
        displayNameSize: s,
        pendingDisplayNameStyles: o,
        displayNameTrailing: d,
        usernameIcon: u,
        pronouns: c,
        primaryGuild: m,
        trailing: g,
        onClose: f,
    } = e;
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsx)(y, {
                user: t,
                guildId: n,
                displayName: a,
                size: s,
                pendingDisplayNameStyles: o,
                onClickDisplayName: i,
                trailing: d,
            }),
            (0, l.jsx)(I, {
                user: t,
                usernameIcon: u,
                pronouns: c,
                primaryGuild: m,
                onClickUsername: i,
                onClose: f,
                trailing: g,
            }),
        ],
    });
}
