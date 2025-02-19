n.d(t, {
    O: () => M,
    Z: () => j
}),
    n(301563);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(873546),
    a = n(442837),
    s = n(475179),
    c = n(100527),
    u = n(906732),
    E = n(174556),
    d = n(358221),
    _ = n(185935),
    N = n(320007),
    I = n(540059),
    T = n(141321),
    O = n(2818),
    S = n(954551),
    P = n(208450),
    p = n(975146),
    A = n(979651),
    R = n(358085),
    C = n(998502),
    f = n(665149),
    D = n(300986),
    m = n(314451),
    g = n(35583),
    h = n(981631),
    y = n(176505),
    U = n(110390);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function M() {
    if ((0, R.isMac)() && R.isPlatformEmbedded) {
        var e, t, n;
        let r = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === r ? C.ZP.minimize() : 'Maximize' === r && C.ZP.maximize();
    }
}
function v(e) {
    let { children: t, className: n, channelId: i, channelType: l, guildId: c, innerClassname: u, transparent: R = !1, toolbar: C, mobileToolbar: b, 'aria-label': k, 'aria-labelledby': v, scrollable: Z, role: L, hideSearch: j, showDivider: x } = e,
        V = null == i || (0, y.AB)(i) ? null : i,
        F = (0, a.e7)([A.Z], () => A.Z.isInChannel(V) || !1),
        G = (0, a.e7)([d.Z], () => null != V && d.Z.getParticipantsListOpen(V)),
        { hasBugReporterAccess: w } = E.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: B, inInbox: W } = O.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: z } = (0, _.Z)({ location: 'HeaderBar' }),
        Y = (0, I.Q3)('HeaderBar');
    return (0, r.jsx)(f.ZP, {
        className: n,
        innerClassName: u,
        toolbar: (function () {
            if (null == C) return null;
            let e = null != i && !j;
            return o.tq
                ? b
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          C,
                          e ? (0, r.jsx)(P.Z, { className: U.search }, null != c ? c : i) : null,
                          x && (0, r.jsx)(f.ZP.Divider, {}),
                          !Y && (0, r.jsx)(g.Z, {}),
                          !Y && (0, r.jsx)(N.Z, { canShowReminder: !0 }),
                          !Y && (0, r.jsx)(T.Z, {}),
                          B && !W ? (0, r.jsx)(S.Z, {}) : null,
                          !Y && (w ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(D.Z, {})),
                          z &&
                              F &&
                              null != V &&
                              !G &&
                              l === h.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: U.controlButtonWrapper,
                                  children: [(0, r.jsx)(f.ZP.Divider, {}), (0, r.jsx)(p.Z, { onClick: () => s.Z.toggleParticipantsList(V, !G) })]
                              })
                      ]
                  });
        })(),
        transparent: R,
        onDoubleClick: M,
        'aria-label': k,
        'aria-labelledby': v,
        role: L,
        scrollable: Z,
        children: t
    });
}
function Z(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: o } = e;
    return (0, r.jsx)(f.ZP, {
        className: n,
        onDoubleClick: M,
        'aria-label': i,
        'aria-labelledby': l,
        role: o,
        children: t
    });
}
function L(e) {
    var { isAuthenticated: t = !0 } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['isAuthenticated']);
    let { analyticsLocations: i } = (0, u.ZP)(c.Z.HEADER_BAR),
        o = l()(n.className, { [U.forumOrHome]: (null != n.channelType && h.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === y.oC.GUILD_HOME });
    return (0, r.jsx)(u.Gt, {
        value: i,
        children: t ? (0, r.jsx)(v, k(b({}, n), { className: o })) : (0, r.jsx)(Z, k(b({}, n), { className: o }))
    });
}
(L.Title = f.ZP.Title), (L.Icon = f.ZP.Icon), (L.Divider = f.ZP.Divider), (L.Caret = f.ZP.Caret);
let j = L;
