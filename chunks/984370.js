n.d(t, {
    O: function () {
        return P;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(873546),
    o = n(442837),
    s = n(475179),
    c = n(100527),
    u = n(906732),
    d = n(174556),
    m = n(358221),
    h = n(185935),
    f = n(320007),
    p = n(540059),
    _ = n(141321),
    g = n(2818),
    E = n(954551),
    C = n(159738),
    I = n(975146),
    x = n(979651),
    N = n(358085),
    v = n(998502),
    T = n(665149),
    S = n(300986),
    A = n(314451),
    b = n(35583),
    j = n(981631),
    R = n(176505),
    Z = n(681714);
async function P() {
    if ((0, N.isMac)() && N.isPlatformEmbedded) {
        var e, t, n;
        let i = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === i ? v.ZP.minimize() : 'Maximize' === i && v.ZP.maximize();
    }
}
function L(e) {
    let { children: t, className: n, channelId: r, channelType: l, guildId: c, innerClassname: u, transparent: N = !1, toolbar: v, mobileToolbar: L, 'aria-label': y, 'aria-labelledby': O, scrollable: M, role: k, hideSearch: D, showDivider: B } = e,
        U = null == r || (0, R.AB)(r) ? null : r,
        w = (0, o.e7)([x.Z], () => x.Z.isInChannel(U) || !1),
        F = (0, o.e7)([m.Z], () => null != U && m.Z.getParticipantsListOpen(U)),
        { hasBugReporterAccess: G } = d.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: V, inInbox: H } = g.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: z } = (0, h.Z)({ location: 'HeaderBar' }),
        W = (0, p.Q3)('HeaderBar');
    return (0, i.jsx)(T.ZP, {
        className: n,
        innerClassName: u,
        toolbar: (function () {
            if (null == v) return null;
            let e = null != r && !D;
            return a.tq
                ? L
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          v,
                          e ? (0, i.jsx)(C.Z, { className: Z.search }, null != c ? c : r) : null,
                          B && (0, i.jsx)(T.ZP.Divider, {}),
                          !W && (0, i.jsx)(b.Z, {}),
                          !W && (0, i.jsx)(f.Z, { canShowReminder: !0 }),
                          !W && (0, i.jsx)(_.Z, {}),
                          V && !H ? (0, i.jsx)(E.Z, {}) : null,
                          !W && (G ? (0, i.jsx)(A.Z, {}) : (0, i.jsx)(S.Z, {})),
                          z &&
                              w &&
                              null != U &&
                              !F &&
                              l === j.d4z.GROUP_DM &&
                              (0, i.jsxs)('div', {
                                  className: Z.controlButtonWrapper,
                                  children: [(0, i.jsx)(T.ZP.Divider, {}), (0, i.jsx)(I.Z, { onClick: () => s.Z.toggleParticipantsList(U, !F) })]
                              })
                      ]
                  });
        })(),
        transparent: N,
        onDoubleClick: P,
        'aria-label': y,
        'aria-labelledby': O,
        role: k,
        scrollable: M,
        children: t
    });
}
function y(e) {
    let { children: t, className: n, 'aria-label': r, 'aria-labelledby': l, role: a } = e;
    return (0, i.jsx)(T.ZP, {
        className: n,
        onDoubleClick: P,
        'aria-label': r,
        'aria-labelledby': l,
        role: a,
        children: t
    });
}
function O(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: r } = (0, u.ZP)(c.Z.HEADER_BAR),
        a = l()(n.className, { [Z.forumOrHome]: (null != n.channelType && j.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === R.oC.GUILD_HOME });
    return (0, i.jsx)(u.Gt, {
        value: r,
        children: t
            ? (0, i.jsx)(L, {
                  ...n,
                  className: a
              })
            : (0, i.jsx)(y, {
                  ...n,
                  className: a
              })
    });
}
(O.Title = T.ZP.Title), (O.Icon = T.ZP.Icon), (O.Divider = T.ZP.Divider), (O.Caret = T.ZP.Caret), (t.Z = O);
