"use strict";
n.d(t, { A: () => P });
var i,
    r = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(473193),
    o = n(834730),
    c = n(939249),
    u = n(104510),
    d = n(775602),
    _ = n(793574),
    E = n(509536),
    A = n(881635),
    m = n(567771),
    I = n(363487),
    T = n(828162),
    N = n(763754),
    g = n(888675),
    p = n(652215),
    C = n(985018),
    f = n(448643),
    h = n(274993),
    R = n(218924);
function S(e) {
    let t = (0, I.A)(e);
    return l.useCallback(() => {
        null != e &&
            (t
                ? (0, T.A)(e, _.A.GUILD_BOOSTING_SYSTEM_MESSAGE)
                : (0, E.K4)({
                      guildId: e,
                      location: { section: p.JJy.CHANNEL_TEXT_AREA, object: p.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                  }));
    }, [e, t]);
}
function O(e) {
    let { className: t, animate: n } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)("img", { className: f.fj, src: n ? h.A : R.A, alt: "", "aria-hidden": !0 }),
    });
}
function x(e) {
    let { title: t, body: n } = e;
    return (0, r.jsxs)("div", {
        className: f.Qs,
        children: [
            (0, r.jsx)(o.E, { variant: "text-md/semibold", scaleFontToUserSetting: !0, className: f.DD, children: t }),
            (0, r.jsx)(o.E, { variant: "text-sm/medium", scaleFontToUserSetting: !0, className: f.rf, children: n }),
        ],
    });
}
function M(e) {
    let { guild: t, firstBooster: n } = e;
    return (0, r.jsx)("div", {
        className: f.o1,
        children: (0, r.jsx)(A.A, {
            guild: t,
            variant: "secondary",
            analyticsLocation: {
                page: p.liQ.GUILD_CHANNEL,
                section: p.JJy.CHANNEL_TEXT_AREA,
                object: p.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
            },
            analyticsLocations: [
                n
                    ? _.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE_FIRST_TIME_BOOSTER
                    : _.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE,
            ],
        }),
    });
}
function D(e) {
    let { guild: t, children: n } = e,
        i = S(t?.id);
    return (0, r.jsx)(c.D, { tag: "a", role: "link", className: f.oT, onClick: i, children: n });
}
function P(e) {
    let t,
        o,
        { message: _, guild: E, usernameHook: A, showCta: I } = e,
        T =
            ((t = (0, s.bG)([d.A], () => d.A.useReducedMotion)),
            (o = (i || (i = n.t(l, 2))).useContext(a.C)?.animate ?? !1),
            !t && o),
        h = (0, N.Ay)(_),
        R = A(h),
        P = _.hasFlag(p.pr7.IS_FIRST_BOOSTER),
        U = S(E?.id),
        y = P
            ? C.intl.format(C.t["/1IQGD"], { username: h.nick, usernameHook: R })
            : C.intl.format(C.t.SbSWvY, { username: h.nick, usernameHook: R, numSubscriptions: (0, m.A)(_) }),
        L = I
            ? C.intl.format(C.t.dWm8Iu, { learnMoreHook: (e) => (0, r.jsx)(D, { guild: E, children: e }) })
            : C.intl.string(C.t["0Mdw0t"]),
        v = (0, r.jsxs)("div", {
            className: f.kL,
            children: [
                (0, r.jsx)(O, { className: f.rc, animate: T }),
                (0, r.jsx)(x, { title: y, body: L }),
                I && null != E && (0, r.jsx)(M, { guild: E, firstBooster: P }),
            ],
        }),
        j = (0, r.jsx)(u._, { className: f.Kk });
    return (0, r.jsx)(g.A, {
        contentClassName: f.$O,
        iconNode: j,
        iconContainerClassName: f.zc,
        children: I ? v : (0, r.jsx)(c.D, { className: f.w8, onClick: U, children: v }),
    });
}
