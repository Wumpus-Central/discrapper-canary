n.d(t, {
    O: () => D,
    Z: () => g
}),
    n(35282);
var r = n(255367);
n(73800);
var i = n(873546),
    l = n(442837),
    o = n(475179),
    a = n(100527),
    s = n(906732),
    c = n(358221),
    u = n(185935),
    E = n(2818),
    d = n(954551),
    _ = n(208450),
    O = n(975146),
    I = n(979651),
    T = n(358085),
    N = n(998502),
    S = n(665149),
    p = n(981631),
    R = n(176505),
    A = n(220705);
function P(e) {
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
function C(e, t) {
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
async function D() {
    if ((0, T.isMac)() && T.isPlatformEmbedded) {
        var e, t, n;
        let r = null != (n = await (null == (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : e.call(t))) ? n : 'Maximize';
        'Minimize' === r ? N.ZP.minimize() : 'Maximize' === r && N.ZP.maximize();
    }
}
function f(e) {
    let { children: t, className: n, channelId: a, channelType: s, guildId: T, innerClassname: N, transparent: P = !1, toolbar: C, mobileToolbar: f, 'aria-label': m, 'aria-labelledby': y, scrollable: g, role: h, hideSearch: U, showDivider: b } = e,
        M = null == a || (0, R.AB)(a) ? null : a,
        k = (0, l.e7)([I.Z], () => I.Z.isInChannel(M) || !1),
        Z = (0, l.e7)([c.Z], () => null != M && c.Z.getParticipantsListOpen(M)),
        { enabled: j, inInbox: v } = E.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: L } = (0, u.Z)({ location: 'HeaderBar' });
    return (0, r.jsx)(S.ZP, {
        className: n,
        innerClassName: N,
        toolbar: (function () {
            if (null == C) return null;
            let e = null != a && !U;
            return i.tq
                ? f
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          C,
                          e ? (0, r.jsx)(_.Z, { className: A.search }, null != T ? T : a) : null,
                          b && (0, r.jsx)(S.ZP.Divider, {}),
                          j && !v ? (0, r.jsx)(d.Z, {}) : null,
                          L &&
                              k &&
                              null != M &&
                              !Z &&
                              s === p.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: A.controlButtonWrapper,
                                  children: [(0, r.jsx)(S.ZP.Divider, {}), (0, r.jsx)(O.Z, { onClick: () => o.Z.toggleParticipantsList(M, !Z) })]
                              })
                      ]
                  });
        })(),
        transparent: P,
        onDoubleClick: D,
        'aria-label': m,
        'aria-labelledby': y,
        role: h,
        scrollable: g,
        children: t
    });
}
function m(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: o } = e;
    return (0, r.jsx)(S.ZP, {
        className: n,
        onDoubleClick: D,
        'aria-label': i,
        'aria-labelledby': l,
        role: o,
        children: t
    });
}
function y(e) {
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
        children: t ? (0, r.jsx)(f, C(P({}, n), { className: n.className })) : (0, r.jsx)(m, C(P({}, n), { className: n.className }))
    });
}
(y.Title = S.ZP.Title), (y.Icon = S.ZP.Icon), (y.Divider = S.ZP.Divider), (y.Caret = S.ZP.Caret);
let g = y;
