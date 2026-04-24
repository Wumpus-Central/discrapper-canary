t.d(n, { Ay: () => R });
var l = t(627968);
t(64700);
var r = t(503698),
    i = t.n(r),
    a = t(990078),
    s = t(834730),
    o = t(939249),
    d = t(140735),
    u = t(297413),
    c = t(705751);
function m(e) {
    let n;
    return e.isSystemUser() ? (n = c.nu.SYSTEM_DM) : e.bot && (n = c.nu.BOT), n;
}
var f = t(709066),
    p = t(609425),
    g = t(922301),
    h = t(368919),
    x = t(534400),
    j = t(518477),
    v = t(985018),
    C = t(874644);
let E = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function b(e) {
    let {
            user: n,
            guildId: t,
            displayName: r,
            size: a = "sm",
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: d = !1,
            botTag: u,
            className: c,
        } = e,
        m = (0, p.A)({ userId: n.id, guildId: t, pendingDisplayNameStyles: o }),
        f = E[a];
    return null != m
        ? (0, l.jsx)(s.E, {
              variant: f,
              className: c,
              children: (0, l.jsx)(h.A, {
                  userName: r,
                  displayNameStyles: m,
                  effectDisplayType: g.G.ANIMATED,
                  textClassName: C.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: d,
                  appendedInlineContent: null != u ? (0, l.jsxs)(l.Fragment, { children: [" ", u] }) : null,
              }),
          })
        : (0, l.jsxs)(s.E, { className: i()(C.QC, C.O2, c), variant: f, children: [r, " ", u] });
}
function A(e) {
    let {
            user: n,
            guildId: t,
            displayName: r,
            trailing: a,
            size: s = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: u,
        } = e,
        c = m(n),
        p = null != c ? (0, l.jsx)(f.A, { type: c, verified: n.isVerifiedBot(), className: C.AO }) : null,
        g = (0, l.jsx)(b, {
            user: n,
            guildId: t,
            displayName: r,
            size: s,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != u,
            botTag: p,
        });
    return (0, l.jsxs)("div", {
        className: i()(C.K$, "lg" === s && C.lg),
        children: [
            null != u ? (0, l.jsx)(o.D, { onClick: u, className: C.vk, children: g }) : g,
            null != a && !1 !== a && (0, l.jsx)("div", { className: C.MU, children: a }),
        ],
    });
}
function y(e) {
    let { user: n, usernameIcon: t, onClickUsername: r, pronouns: c, primaryGuild: f, trailing: p, onClose: g } = e,
        h = null != c && c.length > 0,
        E = m(n),
        b = n.isProvisional
            ? null
            : (0, l.jsx)(u.A, {
                  user: n,
                  usernameIcon: t,
                  forceUsername: !0,
                  className: C.a1,
                  usernameClass: C.eb,
                  discriminatorClass: C.sw,
                  hideBotTag: !0,
              });
    return (0, l.jsxs)("div", {
        className: i()(C.AK, { [C.j6]: h, [C.w2]: null != E }),
        children: [
            null != b && null != r ? (0, l.jsx)(o.D, { onClick: r, className: C.vk, children: b }) : b,
            h &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("div", { "aria-hidden": "true", className: C.SC }),
                        (0, l.jsx)(a.m, {
                            asContainer: !0,
                            text: v.intl.string(v.t.GI2A8C),
                            delay: j.In,
                            ariaHidden: !0,
                            children: (0, l.jsxs)(s.E, {
                                className: C.hI,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    (0, l.jsx)(d.A, {
                                        tag: "span",
                                        children: v.intl.formatToPlainString(v.t["DRI+T7"], { pronouns: c }),
                                    }),
                                    (0, l.jsx)("span", { "aria-hidden": "true", children: c }),
                                ],
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)(x.Ay, { primaryGuild: f, userId: n.id, onClose: g, containerClassName: C.L4, className: C.Mp }),
            p,
        ],
    });
}
function R(e) {
    let {
        user: n,
        guildId: t,
        className: r,
        onClickName: i,
        displayName: a,
        displayNameSize: s,
        pendingDisplayNameStyles: o,
        displayNameTrailing: d,
        usernameIcon: u,
        pronouns: c,
        primaryGuild: m,
        trailing: f,
        onClose: p,
    } = e;
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsx)(A, {
                user: n,
                guildId: t,
                displayName: a,
                size: s,
                pendingDisplayNameStyles: o,
                onClickDisplayName: i,
                trailing: d,
            }),
            (0, l.jsx)(y, {
                user: n,
                usernameIcon: u,
                pronouns: c,
                primaryGuild: m,
                onClickUsername: i,
                onClose: p,
                trailing: f,
            }),
        ],
    });
}
