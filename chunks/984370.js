n.d(t, {
    O: () => b,
    Z: () => j
}),
    n(35282);
var r = n(255367);
n(73800);
var i = n(873546),
    l = n(442837),
    o = n(475179),
    a = n(100527),
    s = n(906732),
    c = n(174556),
    u = n(358221),
    E = n(185935),
    d = n(320007),
    _ = n(540059),
    I = n(141321),
    O = n(2818),
    T = n(954551),
    N = n(208450),
    S = n(975146),
    R = n(979651),
    A = n(358085),
    p = n(998502),
    P = n(665149),
    C = n(300986),
    D = n(314451),
    f = n(35583),
    m = n(981631),
    g = n(176505),
    y = n(220705);
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
function h(e, t) {
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
async function b() {
    if ((0, A.isMac)() && A.isPlatformEmbedded) {
        var e, t, n;
        let r = null != (n = await (null == (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : e.call(t))) ? n : 'Maximize';
        'Minimize' === r ? p.ZP.minimize() : 'Maximize' === r && p.ZP.maximize();
    }
}
function M(e) {
    let { children: t, className: n, channelId: a, channelType: s, guildId: A, innerClassname: p, transparent: U = !1, toolbar: h, mobileToolbar: M, 'aria-label': k, 'aria-labelledby': Z, scrollable: j, role: L, hideSearch: v, showDivider: F } = e,
        V = null == a || (0, g.AB)(a) ? null : a,
        x = (0, l.e7)([R.Z], () => R.Z.isInChannel(V) || !1),
        G = (0, l.e7)([u.Z], () => null != V && u.Z.getParticipantsListOpen(V)),
        { hasBugReporterAccess: w } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: B, inInbox: z } = O.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: W } = (0, E.Z)({ location: 'HeaderBar' }),
        Y = (0, _.Q3)('HeaderBar');
    return (0, r.jsx)(P.ZP, {
        className: n,
        innerClassName: p,
        toolbar: (function () {
            if (null == h) return null;
            let e = null != a && !v;
            return i.tq
                ? M
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          h,
                          e ? (0, r.jsx)(N.Z, { className: y.search }, null != A ? A : a) : null,
                          F && (0, r.jsx)(P.ZP.Divider, {}),
                          !Y && (0, r.jsx)(f.Z, {}),
                          !Y && (0, r.jsx)(d.Z, { canShowReminder: !0 }),
                          !Y && (0, r.jsx)(I.Z, {}),
                          B && !z ? (0, r.jsx)(T.Z, {}) : null,
                          !Y && (w ? (0, r.jsx)(D.Z, {}) : (0, r.jsx)(C.Z, {})),
                          W &&
                              x &&
                              null != V &&
                              !G &&
                              s === m.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: y.controlButtonWrapper,
                                  children: [(0, r.jsx)(P.ZP.Divider, {}), (0, r.jsx)(S.Z, { onClick: () => o.Z.toggleParticipantsList(V, !G) })]
                              })
                      ]
                  });
        })(),
        transparent: U,
        onDoubleClick: b,
        'aria-label': k,
        'aria-labelledby': Z,
        role: L,
        scrollable: j,
        children: t
    });
}
function k(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: o } = e;
    return (0, r.jsx)(P.ZP, {
        className: n,
        onDoubleClick: b,
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
    let { analyticsLocations: i } = (0, s.ZP)(a.Z.HEADER_BAR);
    return (0, r.jsx)(s.Gt, {
        value: i,
        children: t ? (0, r.jsx)(M, h(U({}, n), { className: n.className })) : (0, r.jsx)(k, h(U({}, n), { className: n.className }))
    });
}
(Z.Title = P.ZP.Title), (Z.Icon = P.ZP.Icon), (Z.Divider = P.ZP.Divider), (Z.Caret = P.ZP.Caret);
let j = Z;
