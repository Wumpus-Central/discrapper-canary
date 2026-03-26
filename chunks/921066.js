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
    g = n(649963),
    C = n(763754),
    h = n(652215),
    p = n(985018),
    x = n(272435),
    R = n(810309),
    S = n(274993),
    O = n(218924);
let M = { id: null, name: "❤️", animated: !1 };
function D() {
    let e = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        t = (i || (i = n.t(l, 2))).useContext(c.C)?.animate ?? !1;
    return !e && t;
}
function P(e) {
    let { className: t, showProgressBar: n, animate: i } = e;
    return (0, a.jsxs)("div", {
        className: t,
        children: [
            n && (0, a.jsx)("img", { className: x.iQ, src: R.A, alt: "", "aria-hidden": !0 }),
            (0, a.jsx)("img", { className: n ? x.yt : x.V_, src: i ? S.A : O.A, alt: "", "aria-hidden": !0 }),
        ],
    });
}
function U(e) {
    let { className: t, title: n, body: i } = e;
    return (0, a.jsxs)("div", {
        className: s()(x.Qs, t),
        children: [
            (0, a.jsx)(d.Text, { variant: "text-md/semibold", className: x.DD, children: n }),
            (0, a.jsx)(d.Text, { variant: "text-md/normal", className: x.rf, children: i }),
        ],
    });
}
function v(e) {
    let { guild: t, message: n, canReact: i = !1 } = e,
        r = l.useCallback(() => {
            (0, g.BB)(n.channel_id, n.id, M, g.qN.MESSAGE);
        }, [n.channel_id, n.id]);
    return (0, a.jsxs)("div", {
        className: x.qr,
        children: [
            (0, a.jsx)(E.A, {
                guild: t,
                analyticsLocation: {
                    page: h.liQ.GUILD_CHANNEL,
                    section: h.JJy.CHANNEL_TEXT_AREA,
                    object: h.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                },
            }),
            i &&
                (0, a.jsx)(d.vN3, {
                    children: (0, a.jsx)("button", {
                        className: x.Zf,
                        onClick: r,
                        "aria-label": p.intl.string(p.t.eaRpLR),
                        children: (0, a.jsx)("span", { role: "img", "aria-hidden": "true", children: "❤️" }),
                    }),
                }),
        ],
    });
}
function L(e) {
    let { title: t, body: n } = e;
    return (0, a.jsxs)("div", {
        className: x.fi,
        children: [
            (0, a.jsx)(d.Text, { variant: "text-md/semibold", className: x.DD, children: t }),
            (0, a.jsx)(d.Text, { variant: "text-sm/medium", className: x.rf, children: n }),
        ],
    });
}
function j(e) {
    let { guild: t } = e;
    return (0, a.jsx)("div", {
        className: x.nx,
        children: (0, a.jsx)(E.A, {
            guild: t,
            variant: "secondary",
            analyticsLocation: {
                page: h.liQ.GUILD_CHANNEL,
                section: h.JJy.CHANNEL_TEXT_AREA,
                object: h.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
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
        onClick: () => {
            null != t &&
                (i
                    ? (0, f.A)(t.id, _.A.GUILD_BOOSTING_SYSTEM_MESSAGE)
                    : (0, m.K4)({
                          guildId: t.id,
                          location: { section: h.JJy.CHANNEL_TEXT_AREA, object: h.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                      }));
        },
        children: n,
    });
}
function b(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        l = D(),
        r = (0, C.Ay)(t),
        s = i(r),
        o = t.hasFlag(h.pr7.IS_FIRST_BOOSTER);
    return (0, a.jsxs)("div", {
        className: x.ds,
        children: [
            (0, a.jsx)(N.A, { className: x.M_, forceReducedMotion: !l }),
            (0, a.jsx)(P, { className: x.S8, showProgressBar: !o, animate: l }),
            (0, a.jsx)(L, {
                title: o
                    ? p.intl.format(p.t["/1IQGD"], { username: r.nick, usernameHook: s })
                    : p.intl.format(p.t.SbSWvY, { username: r.nick, usernameHook: s, numSubscriptions: (0, I.A)(t) }),
                body: p.intl.format(p.t.dWm8Iu, { learnMoreHook: (e) => (0, a.jsx)(y, { guild: n, children: e }) }),
            }),
            null != n && (0, a.jsx)(j, { guild: n }),
        ],
    });
}
function k(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        l = D(),
        r = (0, C.Ay)(t),
        s = i(r),
        o = (0, I.A)(t);
    return (0, a.jsxs)("div", {
        className: x.kL,
        children: [
            (0, a.jsx)(N.A, { className: x.Tp, forceReducedMotion: !l }),
            (0, a.jsx)(P, { className: x.rc, showProgressBar: !0, animate: l }),
            (0, a.jsx)(U, {
                title: p.intl.format(p.t["7t1Ecm"], { username: r.nick, usernameHook: s, numSubscriptions: o }),
                body: p.intl.string(p.t.nybLqy),
            }),
            null != n &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(A.A, { className: x.WM, guildId: n.id }),
                        (0, a.jsx)(v, { guild: n, message: t }),
                    ],
                }),
        ],
    });
}
function G(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        l = D(),
        r = (0, C.Ay)(t),
        s = i(r);
    return (0, a.jsxs)("div", {
        className: x.kL,
        children: [
            (0, a.jsx)(N.A, { className: x.Tp, forceReducedMotion: !l }),
            (0, a.jsx)(P, { className: x.VA, animate: l }),
            (0, a.jsx)(U, {
                className: x.sf,
                title: p.intl.format(p.t["/1IQGD"], { username: r.nick, usernameHook: s }),
                body: p.intl.string(p.t.nIEjuk),
            }),
            null != n && (0, a.jsx)(v, { guild: n, message: t, canReact: !0 }),
        ],
    });
}
function F(e) {
    let { message: t, guild: n, usernameHook: i, compact: l } = e;
    return l
        ? (0, a.jsx)(b, { message: t, guild: n, usernameHook: i })
        : t.hasFlag(h.pr7.IS_FIRST_BOOSTER)
          ? (0, a.jsx)(G, { message: t, guild: n, usernameHook: i })
          : (0, a.jsx)(k, { message: t, guild: n, usernameHook: i });
}
