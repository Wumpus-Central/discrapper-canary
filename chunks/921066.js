n.d(t, { A: () => B });
var i,
    l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(311907),
    c = n(473193),
    d = n(397927),
    u = n(775602),
    _ = n(793574),
    A = n(509536),
    m = n(497566),
    E = n(881635),
    T = n(567771),
    I = n(363487),
    N = n(828162),
    g = n(168350),
    f = n(649963),
    C = n(734057),
    h = n(763754),
    p = n(467073),
    S = n(888675),
    x = n(652215),
    R = n(985018),
    O = n(272435),
    M = n(274993),
    D = n(218924);
let L = { id: null, name: "❤️", animated: !1 };
function U() {
    let e = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        t = (i || (i = n.t(a, 2))).useContext(c.C)?.animate ?? !1;
    return !e && t;
}
function P(e) {
    let { className: t, imageClassName: n, animate: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)("img", { className: n ?? O.V_, src: i ? M.A : D.A, alt: "", "aria-hidden": !0 }),
    });
}
function v(e) {
    let { className: t, title: n, body: i } = e;
    return (0, l.jsxs)("div", {
        className: s()(O.Qs, t),
        children: [
            (0, l.jsx)(d.Text, {
                variant: "text-md/semibold",
                scaleFontToUserSetting: !0,
                className: O.DD,
                children: n,
            }),
            (0, l.jsx)(d.Text, { variant: "text-md/normal", scaleFontToUserSetting: !0, className: O.rf, children: i }),
        ],
    });
}
function j(e) {
    let { guild: t, message: n, firstBooster: i = !1 } = e,
        r = (0, o.bG)([C.A], () => C.A.getChannel(n.channel_id), [n.channel_id]),
        { disableReactionCreates: s } = (0, p.A)(r),
        c = a.useCallback(() => {
            (0, f.BB)(n.channel_id, n.id, L, f.qN.MESSAGE);
        }, [n.channel_id, n.id]);
    return (0, l.jsxs)("div", {
        className: O.qr,
        children: [
            (0, l.jsx)(E.A, {
                guild: t,
                analyticsLocation: {
                    page: x.liQ.GUILD_CHANNEL,
                    section: x.JJy.CHANNEL_TEXT_AREA,
                    object: x.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                },
                analyticsLocations: [
                    i
                        ? _.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE_FIRST_TIME_BOOSTER
                        : _.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE,
                ],
            }),
            i &&
                !s &&
                (0, l.jsx)(d.vN3, {
                    children: (0, l.jsx)("button", {
                        className: O.Zf,
                        onClick: c,
                        "aria-label": R.intl.string(R.t.eaRpLR),
                        children: (0, l.jsx)("span", { role: "img", "aria-hidden": "true", children: "❤️" }),
                    }),
                }),
        ],
    });
}
function y(e) {
    let { title: t, body: n } = e;
    return (0, l.jsxs)("div", {
        className: O.fi,
        children: [
            (0, l.jsx)(d.Text, {
                variant: "text-md/semibold",
                scaleFontToUserSetting: !0,
                className: O.DD,
                children: t,
            }),
            (0, l.jsx)(d.Text, { variant: "text-sm/medium", scaleFontToUserSetting: !0, className: O.rf, children: n }),
        ],
    });
}
function k(e) {
    let { guild: t, firstBooster: n } = e;
    return (0, l.jsx)("div", {
        className: O.nx,
        children: (0, l.jsx)(E.A, {
            guild: t,
            variant: "secondary",
            analyticsLocation: {
                page: x.liQ.GUILD_CHANNEL,
                section: x.JJy.CHANNEL_TEXT_AREA,
                object: x.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
            },
            analyticsLocations: [
                n
                    ? _.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE_FIRST_TIME_BOOSTER
                    : _.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE,
            ],
        }),
    });
}
function b(e) {
    let { guild: t, children: n } = e,
        i = (0, I.A)(t?.id);
    return (0, l.jsx)(d.DUT, {
        tag: "a",
        role: "link",
        className: O.oT,
        onClick: () => {
            null != t &&
                (i
                    ? (0, N.A)(t.id, _.A.GUILD_BOOSTING_SYSTEM_MESSAGE)
                    : (0, A.K4)({
                          guildId: t.id,
                          location: { section: x.JJy.CHANNEL_TEXT_AREA, object: x.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                      }));
        },
        children: n,
    });
}
function G(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        a = U(),
        r = (0, h.Ay)(t),
        s = i(r),
        o = t.hasFlag(x.pr7.IS_FIRST_BOOSTER);
    return (0, l.jsxs)("div", {
        className: O.ds,
        children: [
            (0, l.jsx)(P, { className: O.S8, imageClassName: O.ar, animate: a }),
            (0, l.jsx)(y, {
                title: o
                    ? R.intl.format(R.t["/1IQGD"], { username: r.nick, usernameHook: s })
                    : R.intl.format(R.t.SbSWvY, { username: r.nick, usernameHook: s, numSubscriptions: (0, T.A)(t) }),
                body: R.intl.format(R.t.dWm8Iu, { learnMoreHook: (e) => (0, l.jsx)(b, { guild: n, children: e }) }),
            }),
            null != n && (0, l.jsx)(k, { guild: n, firstBooster: o }),
        ],
    });
}
function H(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        a = U(),
        r = (0, h.Ay)(t),
        s = i(r),
        o = (0, T.A)(t);
    return (0, l.jsxs)("div", {
        className: O.kL,
        children: [
            (0, l.jsx)(g.A, { className: O.Tp, forceReducedMotion: !a }),
            (0, l.jsx)(P, { className: O.rc, animate: a }),
            (0, l.jsx)(v, {
                title: R.intl.format(R.t["7t1Ecm"], { username: r.nick, usernameHook: s, numSubscriptions: o }),
                body: R.intl.string(R.t.nybLqy),
            }),
            null != n &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(m.A, { className: O.WM, guildId: n.id }),
                        (0, l.jsx)(j, { guild: n, message: t }),
                    ],
                }),
        ],
    });
}
function F(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        a = U(),
        r = (0, h.Ay)(t),
        s = i(r);
    return (0, l.jsxs)("div", {
        className: O.kL,
        children: [
            (0, l.jsx)(g.A, { className: O.Tp, forceReducedMotion: !a }),
            (0, l.jsx)(P, { className: O.VA, animate: a }),
            (0, l.jsx)(v, {
                className: O.sf,
                title: R.intl.format(R.t["/1IQGD"], { username: r.nick, usernameHook: s }),
                body: R.intl.string(R.t.nIEjuk),
            }),
            null != n && (0, l.jsx)(j, { guild: n, message: t, firstBooster: !0 }),
        ],
    });
}
function B(e) {
    let t,
        { message: n, guild: i, usernameHook: a, compact: r } = e;
    t = r
        ? (0, l.jsx)(G, { message: n, guild: i, usernameHook: a })
        : n.hasFlag(x.pr7.IS_FIRST_BOOSTER)
          ? (0, l.jsx)(F, { message: n, guild: i, usernameHook: a })
          : (0, l.jsx)(H, { message: n, guild: i, usernameHook: a });
    let s = (0, l.jsx)(d._Jp, { className: O.Kk });
    return (0, l.jsx)(S.A, { contentClassName: O.$O, iconNode: s, iconContainerClassName: O.zc, children: t });
}
