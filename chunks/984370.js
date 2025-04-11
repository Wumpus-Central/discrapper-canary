n.d(t, {
    O: () => L,
    Z: () => v
}),
    n(35282);
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
    I = n(320007),
    N = n(540059),
    O = n(141321),
    T = n(2818),
    S = n(954551),
    p = n(208450),
    R = n(975146),
    A = n(979651),
    P = n(358085),
    f = n(998502),
    C = n(665149),
    D = n(300986),
    g = n(314451),
    m = n(35583),
    y = n(981631),
    h = n(176505),
    U = n(220705);
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
async function L() {
    if ((0, P.isMac)() && P.isPlatformEmbedded) {
        var e, t, n;
        let r = null != (n = await (null == (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : e.call(t))) ? n : 'Maximize';
        'Minimize' === r ? f.ZP.minimize() : 'Maximize' === r && f.ZP.maximize();
    }
}
function Z(e) {
    let { children: t, className: n, channelId: i, channelType: l, guildId: c, innerClassname: u, transparent: P = !1, toolbar: f, mobileToolbar: b, 'aria-label': M, 'aria-labelledby': Z, scrollable: k, role: j, hideSearch: v, showDivider: F } = e,
        x = null == i || (0, h.AB)(i) ? null : i,
        V = (0, a.e7)([A.Z], () => A.Z.isInChannel(x) || !1),
        G = (0, a.e7)([d.Z], () => null != x && d.Z.getParticipantsListOpen(x)),
        { hasBugReporterAccess: w } = E.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: W, inInbox: B } = T.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: z } = (0, _.Z)({ location: 'HeaderBar' }),
        H = (0, N.Q3)('HeaderBar');
    return (0, r.jsx)(C.ZP, {
        className: n,
        innerClassName: u,
        toolbar: (function () {
            if (null == f) return null;
            let e = null != i && !v;
            return o.tq
                ? b
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          f,
                          e ? (0, r.jsx)(p.Z, { className: U.search }, null != c ? c : i) : null,
                          F && (0, r.jsx)(C.ZP.Divider, {}),
                          !H && (0, r.jsx)(m.Z, {}),
                          !H && (0, r.jsx)(I.Z, { canShowReminder: !0 }),
                          !H && (0, r.jsx)(O.Z, {}),
                          W && !B ? (0, r.jsx)(S.Z, {}) : null,
                          !H && (w ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(D.Z, {})),
                          z &&
                              V &&
                              null != x &&
                              !G &&
                              l === y.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: U.controlButtonWrapper,
                                  children: [(0, r.jsx)(C.ZP.Divider, {}), (0, r.jsx)(R.Z, { onClick: () => s.Z.toggleParticipantsList(x, !G) })]
                              })
                      ]
                  });
        })(),
        transparent: P,
        onDoubleClick: L,
        'aria-label': M,
        'aria-labelledby': Z,
        role: j,
        scrollable: k,
        children: t
    });
}
function k(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: o } = e;
    return (0, r.jsx)(C.ZP, {
        className: n,
        onDoubleClick: L,
        'aria-label': i,
        'aria-labelledby': l,
        role: o,
        children: t
    });
}
function j(e) {
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
        o = l()(n.className, { [U.forumOrHome]: (null != n.channelType && y.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === h.oC.GUILD_HOME });
    return (0, r.jsx)(u.Gt, {
        value: i,
        children: t ? (0, r.jsx)(Z, M(b({}, n), { className: o })) : (0, r.jsx)(k, M(b({}, n), { className: o }))
    });
}
(j.Title = C.ZP.Title), (j.Icon = C.ZP.Icon), (j.Divider = C.ZP.Divider), (j.Caret = C.ZP.Caret);
let v = j;
