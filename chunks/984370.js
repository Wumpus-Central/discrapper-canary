(n.d(t, {
    O: () => R,
    Z: () => C
}),
    n(35282));
var r = n(255367);
n(73800);
var i = n(873546),
    l = n(442837),
    a = n(475179),
    o = n(100527),
    s = n(906732),
    c = n(358221),
    u = n(185935),
    d = n(2818),
    _ = n(954551),
    E = n(208450),
    p = n(975146),
    O = n(979651),
    f = n(358085),
    I = n(998502),
    h = n(665149),
    T = n(981631),
    S = n(176505),
    m = n(220705);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function N(e, t) {
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
async function R(e) {
    if (!e && (0, f.isMac)() && f.isPlatformEmbedded) {
        var t, n, r;
        let e = null != (r = await (null == (t = (n = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : t.call(n))) ? r : 'Maximize';
        'Minimize' === e ? I.ZP.minimize() : 'Maximize' === e && I.ZP.maximize();
    }
}
function b(e) {
    let { children: t, className: n, channelId: o, channelType: s, guildId: f, innerClassname: I, transparent: g = !1, showToolbar: N = !0, toolbar: b, mobileToolbar: y, 'aria-label': A, 'aria-labelledby': C, scrollable: P, role: D, hideSearch: M, showDivider: j, disableDoubleClick: x } = e,
        k = null == o || (0, S.AB)(o) ? null : o,
        v = (0, l.e7)([O.Z], () => O.Z.isInChannel(k) || !1),
        L = (0, l.e7)([c.Z], () => null != k && c.Z.getParticipantsListOpen(k)),
        { enabled: U, inInbox: Z } = d.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: F } = (0, u.Z)({ location: 'HeaderBar' });
    return (0, r.jsx)(h.ZP, {
        className: n,
        innerClassName: I,
        toolbar: (function () {
            if (null == b) return null;
            let e = null != o && !M;
            return i.tq
                ? y
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          b,
                          e && !(0, S.AB)(o)
                              ? (0, r.jsx)(
                                    E.Z,
                                    {
                                        guildId: f,
                                        channelId: o,
                                        className: m.search
                                    },
                                    null != f ? f : o
                                )
                              : null,
                          j && (0, r.jsx)(h.ZP.Divider, {}),
                          U && !Z ? (0, r.jsx)(_.Z, {}) : null,
                          F &&
                              v &&
                              null != k &&
                              !L &&
                              s === T.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: m.controlButtonWrapper,
                                  children: [(0, r.jsx)(h.ZP.Divider, {}), (0, r.jsx)(p.Z, { onClick: () => a.Z.toggleParticipantsList(k, !L) })]
                              })
                      ]
                  });
        })(),
        transparent: g,
        showToolbar: N,
        onDoubleClick: () => R(x),
        'aria-label': A,
        'aria-labelledby': C,
        role: D,
        scrollable: P,
        children: t
    });
}
function y(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: a, disableDoubleClick: o } = e;
    return (0, r.jsx)(h.ZP, {
        className: n,
        onDoubleClick: () => R(o),
        'aria-label': i,
        'aria-labelledby': l,
        role: a,
        children: t
    });
}
function A(e) {
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
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['isAuthenticated']);
    let { analyticsLocations: i } = (0, s.ZP)(o.Z.HEADER_BAR);
    return (0, r.jsx)(s.Gt, {
        value: i,
        children: t ? (0, r.jsx)(b, N(g({}, n), { className: n.className })) : (0, r.jsx)(y, N(g({}, n), { className: n.className }))
    });
}
((A.Title = h.ZP.Title), (A.Icon = h.ZP.Icon), (A.ChannelIcon = h.ZP.ChannelIcon), (A.Divider = h.ZP.Divider), (A.Caret = h.ZP.Caret));
let C = A;
