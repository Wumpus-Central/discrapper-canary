"use strict";
n.d(t, { A: () => M });
var i,
    r = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(473193),
    c = n(397927),
    o = n(775602),
    u = n(793574),
    d = n(509536),
    _ = n(881635),
    E = n(567771),
    A = n(363487),
    m = n(828162),
    I = n(763754),
    T = n(888675),
    g = n(652215),
    N = n(985018),
    f = n(272435),
    p = n(274993),
    C = n(218924);
function h(e) {
    let t = (0, A.A)(e);
    return s.useCallback(() => {
        null != e &&
            (t
                ? (0, m.A)(e, u.A.GUILD_BOOSTING_SYSTEM_MESSAGE)
                : (0, d.K4)({
                      guildId: e,
                      location: { section: g.JJy.CHANNEL_TEXT_AREA, object: g.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                  }));
    }, [e, t]);
}
function S(e) {
    let { className: t, animate: n } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)("img", { className: f.fj, src: n ? p.A : C.A, alt: "", "aria-hidden": !0 }),
    });
}
function R(e) {
    let { title: t, body: n } = e;
    return (0, r.jsxs)("div", {
        className: f.Qs,
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-md/semibold",
                scaleFontToUserSetting: !0,
                className: f.DD,
                children: t,
            }),
            (0, r.jsx)(c.Text, { variant: "text-sm/medium", scaleFontToUserSetting: !0, className: f.rf, children: n }),
        ],
    });
}
function x(e) {
    let { guild: t, firstBooster: n } = e;
    return (0, r.jsx)("div", {
        className: f.o1,
        children: (0, r.jsx)(_.A, {
            guild: t,
            variant: "secondary",
            analyticsLocation: {
                page: g.liQ.GUILD_CHANNEL,
                section: g.JJy.CHANNEL_TEXT_AREA,
                object: g.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
            },
            analyticsLocations: [
                n
                    ? u.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE_FIRST_TIME_BOOSTER
                    : u.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE,
            ],
        }),
    });
}
function O(e) {
    let { guild: t, children: n } = e,
        i = h(t?.id);
    return (0, r.jsx)(c.DUT, { tag: "a", role: "link", className: f.oT, onClick: i, children: n });
}
function M(e) {
    let t,
        u,
        { message: d, guild: _, usernameHook: A, showCta: m } = e,
        p =
            ((t = (0, l.bG)([o.A], () => o.A.useReducedMotion)),
            (u = (i || (i = n.t(s, 2))).useContext(a.C)?.animate ?? !1),
            !t && u),
        C = (0, I.Ay)(d),
        M = A(C),
        D = d.hasFlag(g.pr7.IS_FIRST_BOOSTER),
        U = h(_?.id),
        P = D
            ? N.intl.format(N.t["/1IQGD"], { username: C.nick, usernameHook: M })
            : N.intl.format(N.t.SbSWvY, { username: C.nick, usernameHook: M, numSubscriptions: (0, E.A)(d) }),
        L = m
            ? N.intl.format(N.t.dWm8Iu, { learnMoreHook: (e) => (0, r.jsx)(O, { guild: _, children: e }) })
            : N.intl.string(N.t["0Mdw0t"]),
        v = (0, r.jsxs)("div", {
            className: f.kL,
            children: [
                (0, r.jsx)(S, { className: f.rc, animate: p }),
                (0, r.jsx)(R, { title: P, body: L }),
                m && null != _ && (0, r.jsx)(x, { guild: _, firstBooster: D }),
            ],
        }),
        y = (0, r.jsx)(c._Jp, { className: f.Kk });
    return (0, r.jsx)(T.A, {
        contentClassName: f.$O,
        iconNode: y,
        iconContainerClassName: f.zc,
        children: m ? v : (0, r.jsx)(c.DUT, { className: f.w8, onClick: U, children: v }),
    });
}
