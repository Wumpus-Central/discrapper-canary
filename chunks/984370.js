n.d(t, {
    O: () => Z,
    Z: () => F
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(873546),
    s = n(442837),
    o = n(475179),
    c = n(100527),
    u = n(906732),
    E = n(174556),
    d = n(358221),
    _ = n(185935),
    I = n(320007),
    T = n(540059),
    N = n(141321),
    A = n(2818),
    S = n(954551),
    R = n(208450),
    C = n(975146),
    O = n(979651),
    P = n(358085),
    D = n(998502),
    m = n(665149),
    p = n(300986),
    h = n(314451),
    U = n(35583),
    M = n(981631),
    g = n(176505),
    k = n(256501);
async function Z() {
    if ((0, P.isMac)() && P.isPlatformEmbedded) {
        var e, t, n;
        let i = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === i ? D.ZP.minimize() : 'Maximize' === i && D.ZP.maximize();
    }
}
function f(e) {
    let { children: t, className: n, channelId: l, channelType: r, guildId: c, innerClassname: u, transparent: P = !1, toolbar: D, mobileToolbar: f, 'aria-label': L, 'aria-labelledby': V, scrollable: F, role: x, hideSearch: v, showDivider: y } = e,
        G = null == l || (0, g.AB)(l) ? null : l,
        j = (0, s.e7)([O.Z], () => O.Z.isInChannel(G) || !1),
        b = (0, s.e7)([d.Z], () => null != G && d.Z.getParticipantsListOpen(G)),
        { hasBugReporterAccess: B } = E.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: w, inInbox: z } = A.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: Y } = (0, _.Z)({ location: 'HeaderBar' }),
        W = (0, T.Q3)('HeaderBar');
    return (0, i.jsx)(m.ZP, {
        className: n,
        innerClassName: u,
        toolbar: (function () {
            if (null == D) return null;
            let e = null != l && !v;
            return a.tq
                ? f
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          D,
                          e ? (0, i.jsx)(R.Z, { className: k.search }, null != c ? c : l) : null,
                          y && (0, i.jsx)(m.ZP.Divider, {}),
                          !W && (0, i.jsx)(U.Z, {}),
                          !W && (0, i.jsx)(I.Z, { canShowReminder: !0 }),
                          !W && (0, i.jsx)(N.Z, {}),
                          w && !z ? (0, i.jsx)(S.Z, {}) : null,
                          !W && (B ? (0, i.jsx)(h.Z, {}) : (0, i.jsx)(p.Z, {})),
                          Y &&
                              j &&
                              null != G &&
                              !b &&
                              r === M.d4z.GROUP_DM &&
                              (0, i.jsxs)('div', {
                                  className: k.controlButtonWrapper,
                                  children: [(0, i.jsx)(m.ZP.Divider, {}), (0, i.jsx)(C.Z, { onClick: () => o.Z.toggleParticipantsList(G, !b) })]
                              })
                      ]
                  });
        })(),
        transparent: P,
        onDoubleClick: Z,
        'aria-label': L,
        'aria-labelledby': V,
        role: x,
        scrollable: F,
        children: t
    });
}
function L(e) {
    let { children: t, className: n, 'aria-label': l, 'aria-labelledby': r, role: a } = e;
    return (0, i.jsx)(m.ZP, {
        className: n,
        onDoubleClick: Z,
        'aria-label': l,
        'aria-labelledby': r,
        role: a,
        children: t
    });
}
function V(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: l } = (0, u.ZP)(c.Z.HEADER_BAR),
        a = r()(n.className, { [k.forumOrHome]: (null != n.channelType && M.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === g.oC.GUILD_HOME });
    return (0, i.jsx)(u.Gt, {
        value: l,
        children: t
            ? (0, i.jsx)(f, {
                  ...n,
                  className: a
              })
            : (0, i.jsx)(L, {
                  ...n,
                  className: a
              })
    });
}
(V.Title = m.ZP.Title), (V.Icon = m.ZP.Icon), (V.Divider = m.ZP.Divider), (V.Caret = m.ZP.Caret);
let F = V;
