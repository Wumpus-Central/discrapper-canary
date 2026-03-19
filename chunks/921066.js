n.d(t, { A: () => g });
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
    A = n(763754),
    E = n(652215),
    I = n(985018),
    T = n(942066),
    f = n(810309),
    N = n(274993),
    C = n(218924);
function g(e) {
    let { message: t, guild: g, usernameHook: p } = e,
        h = (0, r.bG)([c.A], () => c.A.useReducedMotion),
        R = (i || (i = n.t(l, 2))).useContext(s.C)?.animate ?? !1,
        x = !h && R,
        S = (0, A.Ay)(t),
        O = p(S),
        M = (0, _.A)(t);
    return (0, a.jsxs)("div", {
        className: T.kL,
        children: [
            (0, a.jsx)(m.A, { className: T.Tp, forceReducedMotion: !x }),
            (0, a.jsxs)("div", {
                className: T.rc,
                children: [
                    (0, a.jsx)("img", { className: T.iQ, src: f.A, alt: "", "aria-hidden": !0 }),
                    (0, a.jsx)("img", { className: T.CC, src: x ? N.A : C.A, alt: "", "aria-hidden": !0 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: T.Qs,
                children: [
                    (0, a.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        className: T.DD,
                        children: I.intl.format(I.t["7t1Ecm"], {
                            username: S.nick,
                            usernameHook: O,
                            numSubscriptions: M,
                        }),
                    }),
                    (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: T.rf,
                        children: I.intl.string(I.t.nybLqy),
                    }),
                ],
            }),
            null != g &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.A, { className: T.WM, guildId: g.id }),
                        (0, a.jsx)("div", {
                            className: T.qr,
                            children: (0, a.jsx)(u.A, {
                                guild: g,
                                analyticsLocation: {
                                    page: E.liQ.GUILD_CHANNEL,
                                    section: E.JJy.CHANNEL_TEXT_AREA,
                                    object: E.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                                },
                            }),
                        }),
                    ],
                }),
        ],
    });
}
