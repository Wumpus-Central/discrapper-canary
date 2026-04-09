n.d(t, { A: () => M });
var i,
    l = n(627968),
    a = n(64700),
    r = n(311907),
    s = n(473193),
    o = n(397927),
    c = n(775602),
    u = n(793574),
    d = n(509536),
    _ = n(881635),
    A = n(567771),
    m = n(363487),
    E = n(828162),
    T = n(763754),
    I = n(888675),
    N = n(652215),
    g = n(985018),
    f = n(485986),
    C = n(274993),
    h = n(218924);
function p(e) {
    let t = (0, m.A)(e);
    return a.useCallback(() => {
        null != e &&
            (t
                ? (0, E.A)(e, u.A.GUILD_BOOSTING_SYSTEM_MESSAGE)
                : (0, d.K4)({
                      guildId: e,
                      location: { section: N.JJy.CHANNEL_TEXT_AREA, object: N.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                  }));
    }, [e, t]);
}
function S(e) {
    let { className: t, animate: n } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)("img", { className: f.fj, src: n ? C.A : h.A, alt: "", "aria-hidden": !0 }),
    });
}
function x(e) {
    let { title: t, body: n } = e;
    return (0, l.jsxs)("div", {
        className: f.Qs,
        children: [
            (0, l.jsx)(o.Text, {
                variant: "text-md/semibold",
                scaleFontToUserSetting: !0,
                className: f.DD,
                children: t,
            }),
            (0, l.jsx)(o.Text, { variant: "text-sm/medium", scaleFontToUserSetting: !0, className: f.rf, children: n }),
        ],
    });
}
function R(e) {
    let { guild: t, firstBooster: n } = e;
    return (0, l.jsx)("div", {
        className: f.o1,
        children: (0, l.jsx)(_.A, {
            guild: t,
            variant: "secondary",
            analyticsLocation: {
                page: N.liQ.GUILD_CHANNEL,
                section: N.JJy.CHANNEL_TEXT_AREA,
                object: N.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
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
        i = p(t?.id);
    return (0, l.jsx)(o.DUT, { tag: "a", role: "link", className: f.oT, onClick: i, children: n });
}
function M(e) {
    let t,
        u,
        { message: d, guild: _, usernameHook: m, showCta: E } = e,
        C =
            ((t = (0, r.bG)([c.A], () => c.A.useReducedMotion)),
            (u = (i || (i = n.t(a, 2))).useContext(s.C)?.animate ?? !1),
            !t && u),
        h = (0, T.Ay)(d),
        M = m(h),
        D = d.hasFlag(N.pr7.IS_FIRST_BOOSTER),
        L = p(_?.id),
        U = D
            ? g.intl.format(g.t["/1IQGD"], { username: h.nick, usernameHook: M })
            : g.intl.format(g.t.SbSWvY, { username: h.nick, usernameHook: M, numSubscriptions: (0, A.A)(d) }),
        P = E
            ? g.intl.format(g.t.dWm8Iu, { learnMoreHook: (e) => (0, l.jsx)(O, { guild: _, children: e }) })
            : g.intl.string(g.t["0Mdw0t"]),
        v = (0, l.jsxs)("div", {
            className: f.kL,
            children: [
                (0, l.jsx)(S, { className: f.rc, animate: C }),
                (0, l.jsx)(x, { title: U, body: P }),
                E && null != _ && (0, l.jsx)(R, { guild: _, firstBooster: D }),
            ],
        }),
        y = (0, l.jsx)(o._Jp, { className: f.Kk });
    return (0, l.jsx)(I.A, {
        contentClassName: f.$O,
        iconNode: y,
        iconContainerClassName: f.zc,
        children: E ? v : (0, l.jsx)(o.DUT, { className: f.w8, onClick: L, children: v }),
    });
}
