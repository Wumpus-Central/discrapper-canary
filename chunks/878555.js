n.d(t, { c$: () => b, Ay: () => j, Ce: () => y, n2: () => C });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(990078),
    s = n(834730),
    o = n(939249),
    d = n(140735),
    u = n(297413),
    c = n(705751);
function g(e) {
    let t;
    return e.isSystemUser() ? (t = c.nu.SYSTEM_DM) : e.bot && (t = c.nu.BOT), t;
}
var m = n(709066),
    p = n(609425),
    f = n(922301),
    _ = n(368919),
    h = n(534400),
    E = n(518477),
    x = n(375708),
    v = n(874644);
let R = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function b(e) {
    let {
            user: t,
            guildId: n,
            displayName: l,
            size: a = "sm",
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: d = !1,
            botTag: u,
            className: c,
        } = e,
        g = (0, p.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: o }),
        m = R[a];
    return null != g
        ? (0, r.jsx)(s.E, {
              variant: m,
              className: c,
              children: (0, r.jsx)(_.A, {
                  userName: l,
                  displayNameStyles: g,
                  effectDisplayType: f.G.ANIMATED,
                  textClassName: v.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: d,
                  appendedInlineContent: null != u ? (0, r.jsxs)(r.Fragment, { children: [" ", u] }) : null,
              }),
          })
        : (0, r.jsxs)(s.E, { className: i()(v.QC, v.O2, c), variant: m, children: [l, " ", u] });
}
function A(e) {
    let {
            user: t,
            guildId: n,
            displayName: l,
            trailing: a,
            size: s = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: u,
        } = e,
        c = g(t),
        p = null != c ? (0, r.jsx)(m.A, { type: c, verified: t.isVerifiedBot(), className: v.AO }) : null,
        f = (0, r.jsx)(b, {
            user: t,
            guildId: n,
            displayName: l,
            size: s,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != u,
            botTag: p,
        });
    return (0, r.jsxs)("div", {
        className: i()(v.K$, "lg" === s && v.lg),
        children: [
            null != u ? (0, r.jsx)(o.D, { onClick: u, className: v.vk, children: f }) : f,
            null != a && !1 !== a && (0, r.jsx)("div", { className: v.MU, children: a }),
        ],
    });
}
function C(e) {
    let { pronouns: t, className: n } = e;
    return (0, r.jsxs)(s.E, {
        className: i()(v.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, r.jsx)(d.A, { tag: "span", children: x.intl.formatToPlainString(x.t["DRI+T7"], { pronouns: t }) }),
            (0, r.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function y() {
    return (0, r.jsx)("div", { "aria-hidden": "true", className: v.SC });
}
function I(e) {
    let {
            user: t,
            usernameIcon: n,
            onClickUsername: l,
            pronouns: s,
            primaryGuild: d,
            trailing: c,
            onClose: m,
            disableGuildProfile: p,
        } = e,
        f = null != s && s.length > 0,
        _ = g(t),
        R = t.isProvisional
            ? null
            : (0, r.jsx)(u.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: v.a1,
                  usernameClass: v.eb,
                  discriminatorClass: v.sw,
                  hideBotTag: !0,
              });
    return (0, r.jsxs)("div", {
        className: i()(v.AK, { [v.j6]: f, [v.w2]: null != _ }),
        children: [
            null != R && null != l ? (0, r.jsx)(o.D, { onClick: l, className: v.vk, children: R }) : R,
            f &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(y, {}),
                        (0, r.jsx)(a.m, {
                            asContainer: !0,
                            text: x.intl.string(x.t.GI2A8C),
                            delay: E.In,
                            ariaHidden: !0,
                            children: (0, r.jsx)(C, { pronouns: s }),
                        }),
                    ],
                }),
            (0, r.jsx)(h.Ay, {
                primaryGuild: d,
                userId: t.id,
                onClose: m,
                containerClassName: v.L4,
                className: v.Mp,
                disableGuildProfile: p,
            }),
            c,
        ],
    });
}
function j(e) {
    let {
        user: t,
        guildId: n,
        className: l,
        onClickName: i,
        displayName: a,
        displayNameSize: s,
        pendingDisplayNameStyles: o,
        displayNameTrailing: d,
        usernameIcon: u,
        pronouns: c,
        primaryGuild: g,
        trailing: m,
        onClose: p,
        disableGuildProfile: f,
    } = e;
    return (0, r.jsxs)("div", {
        className: l,
        children: [
            (0, r.jsx)(A, {
                user: t,
                guildId: n,
                displayName: a,
                size: s,
                pendingDisplayNameStyles: o,
                onClickDisplayName: i,
                trailing: d,
            }),
            (0, r.jsx)(I, {
                user: t,
                usernameIcon: u,
                pronouns: c,
                primaryGuild: g,
                onClickUsername: i,
                onClose: p,
                trailing: m,
                disableGuildProfile: f,
            }),
        ],
    });
}
