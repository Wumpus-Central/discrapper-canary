n.d(t, { A: () => H });
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
    m = n(509536),
    A = n(497566),
    E = n(881635),
    I = n(567771),
    T = n(363487),
    f = n(828162),
    N = n(168350),
    g = n(649963),
    C = n(734057),
    h = n(763754),
    p = n(467073),
    x = n(888675),
    R = n(652215),
    S = n(985018),
    O = n(272435),
    M = n(274993),
    D = n(218924);
let P = { id: null, name: "❤️", animated: !1 };
function U() {
    let e = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        t = (i || (i = n.t(a, 2))).useContext(c.C)?.animate ?? !1;
    return !e && t;
}
function v(e) {
    let { className: t, animate: n } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)("img", { className: O.V_, src: n ? M.A : D.A, alt: "", "aria-hidden": !0 }),
    });
}
function L(e) {
    let { className: t, title: n, body: i } = e;
    return (0, l.jsxs)("div", {
        className: s()(O.Qs, t),
        children: [
            (0, l.jsx)(d.Text, { variant: "text-md/semibold", className: O.DD, children: n }),
            (0, l.jsx)(d.Text, { variant: "text-md/normal", className: O.rf, children: i }),
        ],
    });
}
function j(e) {
    let { guild: t, message: n, firstBooster: i = !1 } = e,
        r = (0, o.bG)([C.A], () => C.A.getChannel(n.channel_id), [n.channel_id]),
        { disableReactionCreates: s } = (0, p.A)(r),
        c = a.useCallback(() => {
            (0, g.BB)(n.channel_id, n.id, P, g.qN.MESSAGE);
        }, [n.channel_id, n.id]);
    return (0, l.jsxs)("div", {
        className: O.qr,
        children: [
            (0, l.jsx)(E.A, {
                guild: t,
                analyticsLocation: {
                    page: R.liQ.GUILD_CHANNEL,
                    section: R.JJy.CHANNEL_TEXT_AREA,
                    object: R.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                },
            }),
            i &&
                !s &&
                (0, l.jsx)(d.vN3, {
                    children: (0, l.jsx)("button", {
                        className: O.Zf,
                        onClick: c,
                        "aria-label": S.intl.string(S.t.eaRpLR),
                        children: (0, l.jsx)("span", { role: "img", "aria-hidden": "true", children: "❤️" }),
                    }),
                }),
        ],
    });
}
function b(e) {
    let { title: t, body: n } = e;
    return (0, l.jsxs)("div", {
        className: O.fi,
        children: [
            (0, l.jsx)(d.Text, { variant: "text-md/semibold", className: O.DD, children: t }),
            (0, l.jsx)(d.Text, { variant: "text-sm/medium", className: O.rf, children: n }),
        ],
    });
}
function y(e) {
    let { guild: t } = e;
    return (0, l.jsx)("div", {
        className: O.nx,
        children: (0, l.jsx)(E.A, {
            guild: t,
            variant: "secondary",
            analyticsLocation: {
                page: R.liQ.GUILD_CHANNEL,
                section: R.JJy.CHANNEL_TEXT_AREA,
                object: R.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
            },
        }),
    });
}
function k(e) {
    let { guild: t, children: n } = e,
        i = (0, T.A)(t?.id);
    return (0, l.jsx)(d.DUT, {
        tag: "a",
        role: "link",
        className: O.oT,
        onClick: () => {
            null != t &&
                (i
                    ? (0, f.A)(t.id, _.A.GUILD_BOOSTING_SYSTEM_MESSAGE)
                    : (0, m.K4)({
                          guildId: t.id,
                          location: { section: R.JJy.CHANNEL_TEXT_AREA, object: R.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
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
        o = t.hasFlag(R.pr7.IS_FIRST_BOOSTER);
    return (0, l.jsxs)("div", {
        className: O.ds,
        children: [
            (0, l.jsx)(N.A, { className: O.M_, forceReducedMotion: !a }),
            (0, l.jsx)(v, { className: O.S8, animate: a }),
            (0, l.jsx)(b, {
                title: o
                    ? S.intl.format(S.t["/1IQGD"], { username: r.nick, usernameHook: s })
                    : S.intl.format(S.t.SbSWvY, { username: r.nick, usernameHook: s, numSubscriptions: (0, I.A)(t) }),
                body: S.intl.format(S.t.dWm8Iu, { learnMoreHook: (e) => (0, l.jsx)(k, { guild: n, children: e }) }),
            }),
            null != n && (0, l.jsx)(y, { guild: n }),
        ],
    });
}
function F(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        a = U(),
        r = (0, h.Ay)(t),
        s = i(r),
        o = (0, I.A)(t);
    return (0, l.jsxs)("div", {
        className: O.kL,
        children: [
            (0, l.jsx)(N.A, { className: O.Tp, forceReducedMotion: !a }),
            (0, l.jsx)(v, { className: O.rc, animate: a }),
            (0, l.jsx)(L, {
                title: S.intl.format(S.t["7t1Ecm"], { username: r.nick, usernameHook: s, numSubscriptions: o }),
                body: S.intl.string(S.t.nybLqy),
            }),
            null != n &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(A.A, { className: O.WM, guildId: n.id }),
                        (0, l.jsx)(j, { guild: n, message: t }),
                    ],
                }),
        ],
    });
}
function B(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        a = U(),
        r = (0, h.Ay)(t),
        s = i(r);
    return (0, l.jsxs)("div", {
        className: O.kL,
        children: [
            (0, l.jsx)(N.A, { className: O.Tp, forceReducedMotion: !a }),
            (0, l.jsx)(v, { className: O.VA, animate: a }),
            (0, l.jsx)(L, {
                className: O.sf,
                title: S.intl.format(S.t["/1IQGD"], { username: r.nick, usernameHook: s }),
                body: S.intl.string(S.t.nIEjuk),
            }),
            null != n && (0, l.jsx)(j, { guild: n, message: t, firstBooster: !0 }),
        ],
    });
}
function H(e) {
    let t,
        { message: n, guild: i, usernameHook: a, compact: r } = e;
    t = r
        ? (0, l.jsx)(G, { message: n, guild: i, usernameHook: a })
        : n.hasFlag(R.pr7.IS_FIRST_BOOSTER)
          ? (0, l.jsx)(B, { message: n, guild: i, usernameHook: a })
          : (0, l.jsx)(F, { message: n, guild: i, usernameHook: a });
    let s = (0, l.jsx)(d._Jp, { className: O.Kk });
    return (0, l.jsx)(x.A, { iconNode: s, iconContainerClassName: O.zc, children: t });
}
