n.d(t, { A: () => S });
var i,
    a = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(473193),
    o = n(397927),
    c = n(775602),
    d = n(497566),
    u = n(881635),
    _ = n(567771),
    m = n(168350),
    A = n(649963),
    E = n(763754),
    I = n(652215),
    T = n(985018),
    f = n(942066),
    N = n(810309),
    C = n(274993),
    g = n(218924);
function h() {
    let e = (0, r.bG)([c.A], () => c.A.useReducedMotion),
        t = (i || (i = n.t(l, 2))).useContext(s.C)?.animate ?? !1;
    return !e && t;
}
function p(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        l = h(),
        r = (0, E.Ay)(t),
        s = i(r),
        c = (0, _.A)(t);
    return (0, a.jsxs)("div", {
        className: f.kL,
        children: [
            (0, a.jsx)(m.A, { className: f.Tp, forceReducedMotion: !l }),
            (0, a.jsxs)("div", {
                className: f.rc,
                children: [
                    (0, a.jsx)("img", { className: f.iQ, src: N.A, alt: "", "aria-hidden": !0 }),
                    (0, a.jsx)("img", { className: f.CC, src: l ? C.A : g.A, alt: "", "aria-hidden": !0 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: f.Qs,
                children: [
                    (0, a.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        className: f.DD,
                        children: T.intl.format(T.t["7t1Ecm"], {
                            username: r.nick,
                            usernameHook: s,
                            numSubscriptions: c,
                        }),
                    }),
                    (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: f.rf,
                        children: T.intl.string(T.t.nybLqy),
                    }),
                ],
            }),
            null != n &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.A, { className: f.WM, guildId: n.id }),
                        (0, a.jsx)("div", {
                            className: f.qr,
                            children: (0, a.jsx)(u.A, {
                                guild: n,
                                analyticsLocation: {
                                    page: I.liQ.GUILD_CHANNEL,
                                    section: I.JJy.CHANNEL_TEXT_AREA,
                                    object: I.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                                },
                            }),
                        }),
                    ],
                }),
        ],
    });
}
let R = { id: null, name: "❤️", animated: !1 };
function x(e) {
    let { message: t, guild: n, usernameHook: i } = e,
        r = h(),
        s = (0, E.Ay)(t),
        c = i(s),
        d = l.useCallback(() => {
            (0, A.BB)(t.channel_id, t.id, R, A.qN.MESSAGE);
        }, [t.channel_id, t.id]);
    return (0, a.jsxs)("div", {
        className: f.kL,
        children: [
            (0, a.jsx)(m.A, { className: f.Tp, forceReducedMotion: !r }),
            (0, a.jsx)("div", {
                className: f.VA,
                children: (0, a.jsx)("img", { className: f.V_, src: r ? C.A : g.A, alt: "", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: f.sf,
                children: [
                    (0, a.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        className: f.DD,
                        children: T.intl.format(T.t["/1IQGD"], { username: s.nick, usernameHook: c }),
                    }),
                    (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: f.rf,
                        children: T.intl.string(T.t.nIEjuk),
                    }),
                ],
            }),
            null != n &&
                (0, a.jsxs)("div", {
                    className: f.qr,
                    children: [
                        (0, a.jsx)(u.A, {
                            guild: n,
                            analyticsLocation: {
                                page: I.liQ.GUILD_CHANNEL,
                                section: I.JJy.CHANNEL_TEXT_AREA,
                                object: I.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                            },
                        }),
                        (0, a.jsx)(o.vN3, {
                            children: (0, a.jsx)("button", {
                                className: f.Zf,
                                onClick: d,
                                "aria-label": T.intl.string(T.t.eaRpLR),
                                children: (0, a.jsx)("span", { role: "img", "aria-hidden": "true", children: "❤️" }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function S(e) {
    let { message: t, guild: n, usernameHook: i } = e;
    return t.hasFlag(I.pr7.IS_FIRST_BOOSTER)
        ? (0, a.jsx)(x, { message: t, guild: n, usernameHook: i })
        : (0, a.jsx)(p, { message: t, guild: n, usernameHook: i });
}
