n.d(t, {
    O: () => Z,
    Z: () => j
}),
    n(35282);
var r = n(255367);
n(73800);
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
    O = n(320007),
    I = n(540059),
    T = n(141321),
    N = n(2818),
    S = n(954551),
    p = n(208450),
    R = n(975146),
    A = n(979651),
    f = n(358085),
    P = n(998502),
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
async function Z() {
    if ((0, f.isMac)() && f.isPlatformEmbedded) {
        var e, t, n;
        let r = null != (n = await (null == (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : e.call(t))) ? n : 'Maximize';
        'Minimize' === r ? P.ZP.minimize() : 'Maximize' === r && P.ZP.maximize();
    }
}
function L(e) {
    let { children: t, className: n, channelId: i, channelType: l, guildId: c, innerClassname: u, transparent: f = !1, toolbar: P, mobileToolbar: U, 'aria-label': M, 'aria-labelledby': L, scrollable: v, role: k, hideSearch: j, showDivider: F } = e,
        x = null == i || (0, h.AB)(i) ? null : i,
        V = (0, a.e7)([A.Z], () => A.Z.isInChannel(x) || !1),
        G = (0, a.e7)([E.Z], () => null != x && E.Z.getParticipantsListOpen(x)),
        { hasBugReporterAccess: w } = d.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: B, inInbox: W } = N.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: Y } = (0, _.Z)({ location: 'HeaderBar' }),
        z = (0, I.Q3)('HeaderBar');
    return (0, r.jsx)(C.ZP, {
        className: n,
        innerClassName: u,
        toolbar: (function () {
            if (null == P) return null;
            let e = null != i && !j;
            return o.tq
                ? U
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          P,
                          e ? (0, r.jsx)(p.Z, { className: b.search }, null != c ? c : i) : null,
                          F && (0, r.jsx)(C.ZP.Divider, {}),
                          !z && (0, r.jsx)(y.Z, {}),
                          !z && (0, r.jsx)(O.Z, { canShowReminder: !0 }),
                          !z && (0, r.jsx)(T.Z, {}),
                          B && !W ? (0, r.jsx)(S.Z, {}) : null,
                          !z && (w ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(D.Z, {})),
                          Y &&
                              V &&
                              null != x &&
                              !G &&
                              l === m.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: b.controlButtonWrapper,
                                  children: [(0, r.jsx)(C.ZP.Divider, {}), (0, r.jsx)(R.Z, { onClick: () => s.Z.toggleParticipantsList(x, !G) })]
                              })
                      ]
                  });
        })(),
        transparent: f,
        onDoubleClick: Z,
        'aria-label': M,
        'aria-labelledby': L,
        role: k,
        scrollable: v,
        children: t
    });
}
function v(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: o } = e;
    return (0, r.jsx)(C.ZP, {
        className: n,
        onDoubleClick: Z,
        'aria-label': i,
        'aria-labelledby': l,
        role: o,
        children: t
    });
}
function k(e) {
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
        children: t ? (0, r.jsx)(L, M(U({}, n), { className: o })) : (0, r.jsx)(v, M(U({}, n), { className: o }))
    });
}
(k.Title = C.ZP.Title), (k.Icon = C.ZP.Icon), (k.Divider = C.ZP.Divider), (k.Caret = C.ZP.Caret);
let j = k;
