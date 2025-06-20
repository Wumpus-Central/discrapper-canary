n.d(t, {
    O: () => U,
    Z: () => L
}),
    n(35282);
var r = n(255367);
n(73800);
var i = n(873546),
    l = n(442837),
    o = n(475179),
    a = n(100527),
    c = n(906732),
    s = n(174556),
    u = n(358221),
    d = n(185935),
    _ = n(320007),
    E = n(540059),
    I = n(141321),
    O = n(2818),
    T = n(954551),
    p = n(208450),
    N = n(975146),
    S = n(979651),
    A = n(358085),
    f = n(998502),
    R = n(665149),
    m = n(300986),
    C = n(314451),
    g = n(35583),
    P = n(981631),
    y = n(176505),
    D = n(220705);
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
async function U() {
    if ((0, A.isMac)() && A.isPlatformEmbedded) {
        var e, t, n;
        let r = null != (n = await (null == (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : e.call(t))) ? n : 'Maximize';
        'Minimize' === r ? f.ZP.minimize() : 'Maximize' === r && f.ZP.maximize();
    }
}
function M(e) {
    let { children: t, className: n, channelId: a, channelType: c, guildId: A, innerClassname: f, transparent: b = !1, toolbar: h, mobileToolbar: M, 'aria-label': k, 'aria-labelledby': v, scrollable: L, role: Z, hideSearch: j, showDivider: x } = e,
        F = null == a || (0, y.AB)(a) ? null : a,
        G = (0, l.e7)([S.Z], () => S.Z.isInChannel(F) || !1),
        V = (0, l.e7)([u.Z], () => null != F && u.Z.getParticipantsListOpen(F)),
        { hasBugReporterAccess: w } = s.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: B, inInbox: W } = O.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: z } = (0, d.Z)({ location: 'HeaderBar' }),
        Y = (0, E.Q3)('HeaderBar');
    return (0, r.jsx)(R.ZP, {
        className: n,
        innerClassName: f,
        toolbar: (function () {
            if (null == h) return null;
            let e = null != a && !j;
            return i.tq
                ? M
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          h,
                          e ? (0, r.jsx)(p.Z, { className: D.search }, null != A ? A : a) : null,
                          x && (0, r.jsx)(R.ZP.Divider, {}),
                          !Y && (0, r.jsx)(g.Z, {}),
                          !Y && (0, r.jsx)(_.Z, { canShowReminder: !0 }),
                          !Y && (0, r.jsx)(I.Z, {}),
                          B && !W ? (0, r.jsx)(T.Z, {}) : null,
                          !Y && (w ? (0, r.jsx)(C.Z, {}) : (0, r.jsx)(m.Z, {})),
                          z &&
                              G &&
                              null != F &&
                              !V &&
                              c === P.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: D.controlButtonWrapper,
                                  children: [(0, r.jsx)(R.ZP.Divider, {}), (0, r.jsx)(N.Z, { onClick: () => o.Z.toggleParticipantsList(F, !V) })]
                              })
                      ]
                  });
        })(),
        transparent: b,
        onDoubleClick: U,
        'aria-label': k,
        'aria-labelledby': v,
        role: Z,
        scrollable: L,
        children: t
    });
}
function k(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: o } = e;
    return (0, r.jsx)(R.ZP, {
        className: n,
        onDoubleClick: U,
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
    let { analyticsLocations: i } = (0, c.ZP)(a.Z.HEADER_BAR);
    return (0, r.jsx)(c.Gt, {
        value: i,
        children: t ? (0, r.jsx)(M, h(b({}, n), { className: n.className })) : (0, r.jsx)(k, h(b({}, n), { className: n.className }))
    });
}
(v.Title = R.ZP.Title), (v.Icon = R.ZP.Icon), (v.Divider = R.ZP.Divider), (v.Caret = R.ZP.Caret);
let L = v;
