n.d(t, {
    O: () => L,
    Z: () => j
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
    d = n(174556),
    E = n(358221),
    _ = n(185935),
    I = n(320007),
    O = n(540059),
    N = n(141321),
    T = n(2818),
    S = n(954551),
    p = n(208450),
    A = n(975146),
    R = n(979651),
    P = n(358085),
    f = n(998502),
    C = n(665149),
    D = n(300986),
    g = n(314451),
    y = n(35583),
    m = n(981631),
    h = n(176505),
    b = n(220705);
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
async function L() {
    if ((0, P.isMac)() && P.isPlatformEmbedded) {
        var e, t, n;
        let r = null != (n = await (null == (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : e.call(t))) ? n : 'Maximize';
        'Minimize' === r ? f.ZP.minimize() : 'Maximize' === r && f.ZP.maximize();
    }
}
function Z(e) {
    let { children: t, className: n, channelId: i, channelType: l, guildId: c, innerClassname: u, transparent: P = !1, toolbar: f, mobileToolbar: U, 'aria-label': M, 'aria-labelledby': Z, scrollable: k, role: v, hideSearch: j, showDivider: F } = e,
        x = null == i || (0, h.AB)(i) ? null : i,
        V = (0, a.e7)([R.Z], () => R.Z.isInChannel(x) || !1),
        G = (0, a.e7)([E.Z], () => null != x && E.Z.getParticipantsListOpen(x)),
        { hasBugReporterAccess: w } = d.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: W, inInbox: B } = T.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: Y } = (0, _.Z)({ location: 'HeaderBar' }),
        z = (0, O.Q3)('HeaderBar');
    return (0, r.jsx)(C.ZP, {
        className: n,
        innerClassName: u,
        toolbar: (function () {
            if (null == f) return null;
            let e = null != i && !j;
            return o.tq
                ? U
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          f,
                          e ? (0, r.jsx)(p.Z, { className: b.search }, null != c ? c : i) : null,
                          F && (0, r.jsx)(C.ZP.Divider, {}),
                          !z && (0, r.jsx)(y.Z, {}),
                          !z && (0, r.jsx)(I.Z, { canShowReminder: !0 }),
                          !z && (0, r.jsx)(N.Z, {}),
                          W && !B ? (0, r.jsx)(S.Z, {}) : null,
                          !z && (w ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(D.Z, {})),
                          Y &&
                              V &&
                              null != x &&
                              !G &&
                              l === m.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: b.controlButtonWrapper,
                                  children: [(0, r.jsx)(C.ZP.Divider, {}), (0, r.jsx)(A.Z, { onClick: () => s.Z.toggleParticipantsList(x, !G) })]
                              })
                      ]
                  });
        })(),
        transparent: P,
        onDoubleClick: L,
        'aria-label': M,
        'aria-labelledby': Z,
        role: v,
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
function v(e) {
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
        o = l()(n.className, { [b.forumOrHome]: (null != n.channelType && m.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === h.oC.GUILD_HOME });
    return (0, r.jsx)(u.Gt, {
        value: i,
        children: t ? (0, r.jsx)(Z, M(U({}, n), { className: o })) : (0, r.jsx)(k, M(U({}, n), { className: o }))
    });
}
(v.Title = C.ZP.Title), (v.Icon = C.ZP.Icon), (v.Divider = C.ZP.Divider), (v.Caret = C.ZP.Caret);
let j = v;
