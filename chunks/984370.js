n.d(t, {
    O: () => v,
    Z: () => j
}),
    n(35282);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(873546),
    a = n(442837),
    c = n(475179),
    s = n(100527),
    u = n(906732),
    d = n(174556),
    _ = n(358221),
    E = n(185935),
    I = n(320007),
    O = n(540059),
    T = n(141321),
    p = n(2818),
    N = n(954551),
    S = n(208450),
    f = n(975146),
    A = n(979651),
    R = n(358085),
    m = n(998502),
    C = n(665149),
    g = n(300986),
    P = n(314451),
    y = n(35583),
    D = n(981631),
    b = n(176505),
    h = n(806411);
function U(e) {
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
function M(e, t) {
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
async function v() {
    if ((0, R.isMac)() && R.isPlatformEmbedded) {
        var e, t, n;
        let r = null != (n = await (null == (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : e.call(t))) ? n : 'Maximize';
        'Minimize' === r ? m.ZP.minimize() : 'Maximize' === r && m.ZP.maximize();
    }
}
function k(e) {
    let { children: t, className: n, channelId: i, channelType: l, guildId: s, innerClassname: u, transparent: R = !1, toolbar: m, mobileToolbar: U, 'aria-label': M, 'aria-labelledby': k, scrollable: L, role: Z, hideSearch: j, showDivider: x } = e,
        F = null == i || (0, b.AB)(i) ? null : i,
        G = (0, a.e7)([A.Z], () => A.Z.isInChannel(F) || !1),
        V = (0, a.e7)([_.Z], () => null != F && _.Z.getParticipantsListOpen(F)),
        { hasBugReporterAccess: w } = d.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: B, inInbox: W } = p.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: z } = (0, E.Z)({ location: 'HeaderBar' }),
        H = (0, O.Q3)('HeaderBar');
    return (0, r.jsx)(C.ZP, {
        className: n,
        innerClassName: u,
        toolbar: (function () {
            if (null == m) return null;
            let e = null != i && !j;
            return o.tq
                ? U
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          m,
                          e ? (0, r.jsx)(S.Z, { className: h.search }, null != s ? s : i) : null,
                          x && (0, r.jsx)(C.ZP.Divider, {}),
                          !H && (0, r.jsx)(y.Z, {}),
                          !H && (0, r.jsx)(I.Z, { canShowReminder: !0 }),
                          !H && (0, r.jsx)(T.Z, {}),
                          B && !W ? (0, r.jsx)(N.Z, {}) : null,
                          !H && (w ? (0, r.jsx)(P.Z, {}) : (0, r.jsx)(g.Z, {})),
                          z &&
                              G &&
                              null != F &&
                              !V &&
                              l === D.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: h.controlButtonWrapper,
                                  children: [(0, r.jsx)(C.ZP.Divider, {}), (0, r.jsx)(f.Z, { onClick: () => c.Z.toggleParticipantsList(F, !V) })]
                              })
                      ]
                  });
        })(),
        transparent: R,
        onDoubleClick: v,
        'aria-label': M,
        'aria-labelledby': k,
        role: Z,
        scrollable: L,
        children: t
    });
}
function L(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: o } = e;
    return (0, r.jsx)(C.ZP, {
        className: n,
        onDoubleClick: v,
        'aria-label': i,
        'aria-labelledby': l,
        role: o,
        children: t
    });
}
function Z(e) {
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
    let { analyticsLocations: i } = (0, u.ZP)(s.Z.HEADER_BAR),
        o = l()(n.className, { [h.forumOrHome]: (null != n.channelType && D.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === b.oC.GUILD_HOME });
    return (0, r.jsx)(u.Gt, {
        value: i,
        children: t ? (0, r.jsx)(k, M(U({}, n), { className: o })) : (0, r.jsx)(L, M(U({}, n), { className: o }))
    });
}
(Z.Title = C.ZP.Title), (Z.Icon = C.ZP.Icon), (Z.Divider = C.ZP.Divider), (Z.Caret = C.ZP.Caret);
let j = Z;
