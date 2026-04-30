n.d(t, { c$: () => A, Ay: () => C, Ce: () => b, n2: () => I });
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
function E(e) {
    let t;
    return e.isSystemUser() ? (t = c.nu.SYSTEM_DM) : e.bot && (t = c.nu.BOT), t;
}
var _ = n(709066),
    m = n(609425),
    g = n(922301),
    p = n(368919),
    f = n(534400),
    h = n(518477),
    R = n(985018),
    v = n(874644);
let x = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function A(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            size: a = "sm",
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: d = !1,
            botTag: u,
            className: c,
        } = e,
        E = (0, m.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: o }),
        _ = x[a];
    return null != E
        ? (0, l.jsx)(s.E, {
              variant: _,
              className: c,
              children: (0, l.jsx)(p.A, {
                  userName: r,
                  displayNameStyles: E,
                  effectDisplayType: g.G.ANIMATED,
                  textClassName: v.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: d,
                  appendedInlineContent: null != u ? (0, l.jsxs)(l.Fragment, { children: [" ", u] }) : null,
              }),
          })
        : (0, l.jsxs)(s.E, { className: i()(v.QC, v.O2, c), variant: _, children: [r, " ", u] });
}
function O(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            trailing: a,
            size: s = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: u,
        } = e,
        c = E(t),
        m = null != c ? (0, l.jsx)(_.A, { type: c, verified: t.isVerifiedBot(), className: v.AO }) : null,
        g = (0, l.jsx)(A, {
            user: t,
            guildId: n,
            displayName: r,
            size: s,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != u,
            botTag: m,
        });
    return (0, l.jsxs)("div", {
        className: i()(v.K$, "lg" === s && v.lg),
        children: [
            null != u ? (0, l.jsx)(o.D, { onClick: u, className: v.vk, children: g }) : g,
            null != a && !1 !== a && (0, l.jsx)("div", { className: v.MU, children: a }),
        ],
    });
}
function I(e) {
    let { pronouns: t, className: n } = e;
    return (0, l.jsxs)(s.E, {
        className: i()(v.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, l.jsx)(d.A, { tag: "span", children: R.intl.formatToPlainString(R.t["DRI+T7"], { pronouns: t }) }),
            (0, l.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function b() {
    return (0, l.jsx)("div", { "aria-hidden": "true", className: v.SC });
}
function U(e) {
    let { user: t, usernameIcon: n, onClickUsername: r, pronouns: s, primaryGuild: d, trailing: c, onClose: _ } = e,
        m = null != s && s.length > 0,
        g = E(t),
        p = t.isProvisional
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
        className: i()(v.AK, { [v.j6]: m, [v.w2]: null != g }),
        children: [
            null != p && null != r ? (0, l.jsx)(o.D, { onClick: r, className: v.vk, children: p }) : p,
            m &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(b, {}),
                        (0, l.jsx)(a.m, {
                            asContainer: !0,
                            text: R.intl.string(R.t.GI2A8C),
                            delay: h.In,
                            ariaHidden: !0,
                            children: (0, l.jsx)(I, { pronouns: s }),
                        }),
                    ],
                }),
            (0, l.jsx)(f.Ay, { primaryGuild: d, userId: t.id, onClose: _, containerClassName: v.L4, className: v.Mp }),
            c,
        ],
    });
}
function C(e) {
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
        primaryGuild: E,
        trailing: _,
        onClose: m,
    } = e;
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsx)(O, {
                user: t,
                guildId: n,
                displayName: a,
                size: s,
                pendingDisplayNameStyles: o,
                onClickDisplayName: i,
                trailing: d,
            }),
            (0, l.jsx)(U, {
                user: t,
                usernameIcon: u,
                pronouns: c,
                primaryGuild: E,
                onClickUsername: i,
                onClose: m,
                trailing: _,
            }),
        ],
    });
}
