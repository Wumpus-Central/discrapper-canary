n.d(t, { A: () => U });
var i,
    a = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(311907),
    c = n(473193),
    d = n(397927),
    u = n(775602),
    _ = n(497566),
    m = n(881635),
    A = n(567771),
    E = n(168350),
    I = n(649963),
    T = n(763754),
    f = n(652215),
    N = n(985018),
    g = n(625780),
    C = n(810309),
    h = n(274993),
    p = n(218924);
let R = { id: null, name: "❤️", animated: !1 };
function x() {
    let e = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        t = (i || (i = n.t(l, 2))).useContext(c.C)?.animate ?? !1;
    return !e && t;
}
function S(e) {
    let { className: t, showProgressBar: n } = e,
        i = x();
    return (0, a.jsxs)("div", {
        className: t,
        children: [
            n && (0, a.jsx)("img", { className: g.iQ, src: C.A, alt: "", "aria-hidden": !0 }),
            (0, a.jsx)("img", { className: n ? g.yt : g.V_, src: i ? h.A : p.A, alt: "", "aria-hidden": !0 }),
        ],
    });
}
function O(e) {
    let { className: t, title: n, body: i } = e;
    return (0, a.jsxs)("div", {
        className: s()(g.Qs, t),
        children: [
            (0, a.jsx)(d.Text, { variant: "text-md/semibold", className: g.DD, children: n }),
            (0, a.jsx)(d.Text, { variant: "text-md/normal", className: g.rf, children: i }),
        ],
    });
}
function M(e) {
    let { guild: t, message: n, canReact: i = !1 } = e,
        r = l.useCallback(() => {
            (0, I.BB)(n.channel_id, n.id, R, I.qN.MESSAGE);
        }, [n.channel_id, n.id]);
    return (0, a.jsxs)("div", {
        className: g.qr,
        children: [
            (0, a.jsx)(m.A, {
                guild: t,
                analyticsLocation: {
                    page: f.liQ.GUILD_CHANNEL,
                    section: f.JJy.CHANNEL_TEXT_AREA,
                    object: f.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                },
            }),
            i &&
                (0, a.jsx)(d.vN3, {
                    children: (0, a.jsx)("button", {
                        className: g.Zf,
                        onClick: r,
                        "aria-label": N.intl.string(N.t.eaRpLR),
                        children: (0, a.jsx)("span", { role: "img", "aria-hidden": "true", children: "❤️" }),
                    }),
                }),
        ],
    });
}
function D(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        l = x(),
        r = (0, T.Ay)(t),
        s = i(r),
        o = (0, A.A)(t);
    return (0, a.jsxs)("div", {
        className: g.kL,
        children: [
            (0, a.jsx)(E.A, { className: g.Tp, forceReducedMotion: !l }),
            (0, a.jsx)(S, { className: g.rc, showProgressBar: !0 }),
            (0, a.jsx)(O, {
                title: N.intl.format(N.t["7t1Ecm"], { username: r.nick, usernameHook: s, numSubscriptions: o }),
                body: N.intl.string(N.t.nybLqy),
            }),
            null != n &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(_.A, { className: g.WM, guildId: n.id }),
                        (0, a.jsx)(M, { guild: n, message: t }),
                    ],
                }),
        ],
    });
}
function P(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        l = x(),
        r = (0, T.Ay)(t),
        s = i(r);
    return (0, a.jsxs)("div", {
        className: g.kL,
        children: [
            (0, a.jsx)(E.A, { className: g.Tp, forceReducedMotion: !l }),
            (0, a.jsx)(S, { className: g.VA }),
            (0, a.jsx)(O, {
                className: g.sf,
                title: N.intl.format(N.t["/1IQGD"], { username: r.nick, usernameHook: s }),
                body: N.intl.string(N.t.nIEjuk),
            }),
            null != n && (0, a.jsx)(M, { guild: n, message: t, canReact: !0 }),
        ],
    });
}
function U(e) {
    let { message: t, guild: n, usernameHook: i } = e;
    return t.hasFlag(f.pr7.IS_FIRST_BOOSTER)
        ? (0, a.jsx)(P, { message: t, guild: n, usernameHook: i })
        : (0, a.jsx)(D, { message: t, guild: n, usernameHook: i });
}
