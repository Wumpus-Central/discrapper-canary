n.d(t, {
    O: () => g,
    Z: () => b
}),
    n(35282);
var r = n(255367);
n(73800);
var i = n(873546),
    l = n(442837),
    o = n(475179),
    a = n(100527),
    c = n(906732),
    s = n(358221),
    u = n(185935),
    d = n(2818),
    _ = n(954551),
    E = n(208450),
    I = n(975146),
    O = n(979651),
    T = n(358085),
    p = n(998502),
    N = n(665149),
    S = n(981631),
    f = n(176505),
    m = n(220705);
function A(e) {
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
function R(e, t) {
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
async function g() {
    if ((0, T.isMac)() && T.isPlatformEmbedded) {
        var e, t, n;
        let r = null != (n = await (null == (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : e.call(t))) ? n : 'Maximize';
        'Minimize' === r ? p.ZP.minimize() : 'Maximize' === r && p.ZP.maximize();
    }
}
function P(e) {
    let { children: t, className: n, channelId: a, channelType: c, guildId: T, innerClassname: p, transparent: A = !1, toolbar: R, mobileToolbar: P, 'aria-label': C, 'aria-labelledby': y, scrollable: b, role: D, hideSearch: h, showDivider: U } = e,
        M = null == a || (0, f.AB)(a) ? null : a,
        v = (0, l.e7)([O.Z], () => O.Z.isInChannel(M) || !1),
        k = (0, l.e7)([s.Z], () => null != M && s.Z.getParticipantsListOpen(M)),
        { enabled: L, inInbox: Z } = d.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: j } = (0, u.Z)({ location: 'HeaderBar' });
    return (0, r.jsx)(N.ZP, {
        className: n,
        innerClassName: p,
        toolbar: (function () {
            if (null == R) return null;
            let e = null != a && !h;
            return i.tq
                ? P
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          R,
                          e ? (0, r.jsx)(E.Z, { className: m.search }, null != T ? T : a) : null,
                          U && (0, r.jsx)(N.ZP.Divider, {}),
                          L && !Z ? (0, r.jsx)(_.Z, {}) : null,
                          j &&
                              v &&
                              null != M &&
                              !k &&
                              c === S.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: m.controlButtonWrapper,
                                  children: [(0, r.jsx)(N.ZP.Divider, {}), (0, r.jsx)(I.Z, { onClick: () => o.Z.toggleParticipantsList(M, !k) })]
                              })
                      ]
                  });
        })(),
        transparent: A,
        onDoubleClick: g,
        'aria-label': C,
        'aria-labelledby': y,
        role: D,
        scrollable: b,
        children: t
    });
}
function C(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: o } = e;
    return (0, r.jsx)(N.ZP, {
        className: n,
        onDoubleClick: g,
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
    let { analyticsLocations: i } = (0, c.ZP)(a.Z.HEADER_BAR);
    return (0, r.jsx)(c.Gt, {
        value: i,
        children: t ? (0, r.jsx)(P, R(A({}, n), { className: n.className })) : (0, r.jsx)(C, R(A({}, n), { className: n.className }))
    });
}
(y.Title = N.ZP.Title), (y.Icon = N.ZP.Icon), (y.Divider = N.ZP.Divider), (y.Caret = N.ZP.Caret);
let b = y;
