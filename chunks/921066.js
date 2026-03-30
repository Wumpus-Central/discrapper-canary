n.d(t, { A: () => F });
var i,
    a = n(627968),
    l = n(64700),
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
    C = n(649963),
    g = n(763754),
    h = n(888675),
    p = n(652215),
    x = n(985018),
    R = n(272435),
    S = n(274993),
    O = n(218924);
let M = { id: null, name: "❤️", animated: !1 };
function D() {
    let e = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        t = (i || (i = n.t(l, 2))).useContext(c.C)?.animate ?? !1;
    return !e && t;
}
function P(e) {
    let { className: t, animate: n } = e;
    return (0, a.jsx)("div", {
        className: t,
        children: (0, a.jsx)("img", { className: R.V_, src: n ? S.A : O.A, alt: "", "aria-hidden": !0 }),
    });
}
function U(e) {
    let { className: t, title: n, body: i } = e;
    return (0, a.jsxs)("div", {
        className: s()(R.Qs, t),
        children: [
            (0, a.jsx)(d.Text, { variant: "text-md/semibold", className: R.DD, children: n }),
            (0, a.jsx)(d.Text, { variant: "text-md/normal", className: R.rf, children: i }),
        ],
    });
}
function v(e) {
    let { guild: t, message: n, canReact: i = !1 } = e,
        r = l.useCallback(() => {
            (0, C.BB)(n.channel_id, n.id, M, C.qN.MESSAGE);
        }, [n.channel_id, n.id]);
    return (0, a.jsxs)("div", {
        className: R.qr,
        children: [
            (0, a.jsx)(E.A, {
                guild: t,
                analyticsLocation: {
                    page: p.liQ.GUILD_CHANNEL,
                    section: p.JJy.CHANNEL_TEXT_AREA,
                    object: p.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                },
            }),
            i &&
                (0, a.jsx)(d.vN3, {
                    children: (0, a.jsx)("button", {
                        className: R.Zf,
                        onClick: r,
                        "aria-label": x.intl.string(x.t.eaRpLR),
                        children: (0, a.jsx)("span", { role: "img", "aria-hidden": "true", children: "❤️" }),
                    }),
                }),
        ],
    });
}
function L(e) {
    let { title: t, body: n } = e;
    return (0, a.jsxs)("div", {
        className: R.fi,
        children: [
            (0, a.jsx)(d.Text, { variant: "text-md/semibold", className: R.DD, children: t }),
            (0, a.jsx)(d.Text, { variant: "text-sm/medium", className: R.rf, children: n }),
        ],
    });
}
function j(e) {
    let { guild: t } = e;
    return (0, a.jsx)("div", {
        className: R.nx,
        children: (0, a.jsx)(E.A, {
            guild: t,
            variant: "secondary",
            analyticsLocation: {
                page: p.liQ.GUILD_CHANNEL,
                section: p.JJy.CHANNEL_TEXT_AREA,
                object: p.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
            },
        }),
    });
}
function y(e) {
    let { guild: t, children: n } = e,
        i = (0, T.A)(t?.id);
    return (0, a.jsx)(d.DUT, {
        tag: "a",
        role: "link",
        className: R.oT,
        onClick: () => {
            null != t &&
                (i
                    ? (0, f.A)(t.id, _.A.GUILD_BOOSTING_SYSTEM_MESSAGE)
                    : (0, m.K4)({
                          guildId: t.id,
                          location: { section: p.JJy.CHANNEL_TEXT_AREA, object: p.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                      }));
        },
        children: n,
    });
}
function b(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        l = D(),
        r = (0, g.Ay)(t),
        s = i(r),
        o = t.hasFlag(p.pr7.IS_FIRST_BOOSTER);
    return (0, a.jsxs)("div", {
        className: R.ds,
        children: [
            (0, a.jsx)(N.A, { className: R.M_, forceReducedMotion: !l }),
            (0, a.jsx)(P, { className: R.S8, animate: l }),
            (0, a.jsx)(L, {
                title: o
                    ? x.intl.format(x.t["/1IQGD"], { username: r.nick, usernameHook: s })
                    : x.intl.format(x.t.SbSWvY, { username: r.nick, usernameHook: s, numSubscriptions: (0, I.A)(t) }),
                body: x.intl.format(x.t.dWm8Iu, { learnMoreHook: (e) => (0, a.jsx)(y, { guild: n, children: e }) }),
            }),
            null != n && (0, a.jsx)(j, { guild: n }),
        ],
    });
}
function k(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        l = D(),
        r = (0, g.Ay)(t),
        s = i(r),
        o = (0, I.A)(t);
    return (0, a.jsxs)("div", {
        className: R.kL,
        children: [
            (0, a.jsx)(N.A, { className: R.Tp, forceReducedMotion: !l }),
            (0, a.jsx)(P, { className: R.rc, animate: l }),
            (0, a.jsx)(U, {
                title: x.intl.format(x.t["7t1Ecm"], { username: r.nick, usernameHook: s, numSubscriptions: o }),
                body: x.intl.string(x.t.nybLqy),
            }),
            null != n &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(A.A, { className: R.WM, guildId: n.id }),
                        (0, a.jsx)(v, { guild: n, message: t }),
                    ],
                }),
        ],
    });
}
function G(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        l = D(),
        r = (0, g.Ay)(t),
        s = i(r);
    return (0, a.jsxs)("div", {
        className: R.kL,
        children: [
            (0, a.jsx)(N.A, { className: R.Tp, forceReducedMotion: !l }),
            (0, a.jsx)(P, { className: R.VA, animate: l }),
            (0, a.jsx)(U, {
                className: R.sf,
                title: x.intl.format(x.t["/1IQGD"], { username: r.nick, usernameHook: s }),
                body: x.intl.string(x.t.nIEjuk),
            }),
            null != n && (0, a.jsx)(v, { guild: n, message: t, canReact: !0 }),
        ],
    });
}
function F(e) {
    let t,
        { message: n, guild: i, usernameHook: l, compact: r } = e;
    t = r
        ? (0, a.jsx)(b, { message: n, guild: i, usernameHook: l })
        : n.hasFlag(p.pr7.IS_FIRST_BOOSTER)
          ? (0, a.jsx)(G, { message: n, guild: i, usernameHook: l })
          : (0, a.jsx)(k, { message: n, guild: i, usernameHook: l });
    let s = (0, a.jsx)(d._Jp, { color: d.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK });
    return (0, a.jsx)(h.A, { iconNode: s, iconContainerClassName: R.zc, children: t });
}
