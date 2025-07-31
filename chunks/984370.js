(n.d(t, {
    O: () => y,
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
    S = n(979651),
    O = n(358085),
    f = n(998502),
    h = n(665149),
    I = n(981631),
    T = n(176505),
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
async function y(e) {
    if (!e && (0, O.isMac)() && O.isPlatformEmbedded) {
        var t, n, r;
        let e = null != (r = await (null == (t = (n = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : t.call(n))) ? r : 'Maximize';
        'Minimize' === e ? f.ZP.minimize() : 'Maximize' === e && f.ZP.maximize();
    }
}
function R(e) {
    let { children: t, className: n, channelId: o, channelType: s, guildId: O, innerClassname: f, transparent: g = !1, showToolbar: N = !0, toolbar: R, mobileToolbar: A, 'aria-label': b, 'aria-labelledby': C, scrollable: P, role: D, hideSearch: M, showDivider: j, disableDoubleClick: x } = e,
        v = null == o || (0, T.AB)(o) ? null : o,
        k = (0, l.e7)([S.Z], () => S.Z.isInChannel(v) || !1),
        Z = (0, l.e7)([c.Z], () => null != v && c.Z.getParticipantsListOpen(v)),
        { enabled: L, inInbox: U } = d.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: F } = (0, u.Z)({ location: 'HeaderBar' });
    return (0, r.jsx)(h.ZP, {
        className: n,
        innerClassName: f,
        toolbar: (function () {
            if (null == R) return null;
            let e = null != o && !M;
            return i.tq
                ? A
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          R,
                          e && !(0, T.AB)(o)
                              ? (0, r.jsx)(
                                    E.Z,
                                    {
                                        guildId: O,
                                        channelId: o,
                                        className: m.search
                                    },
                                    null != O ? O : o
                                )
                              : null,
                          j && (0, r.jsx)(h.ZP.Divider, {}),
                          L && !U ? (0, r.jsx)(_.Z, {}) : null,
                          F &&
                              k &&
                              null != v &&
                              !Z &&
                              s === I.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: m.controlButtonWrapper,
                                  children: [(0, r.jsx)(h.ZP.Divider, {}), (0, r.jsx)(p.Z, { onClick: () => a.Z.toggleParticipantsList(v, !Z) })]
                              })
                      ]
                  });
        })(),
        transparent: g,
        showToolbar: N,
        onDoubleClick: () => y(x),
        'aria-label': b,
        'aria-labelledby': C,
        role: D,
        scrollable: P,
        children: t
    });
}
function A(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: a, disableDoubleClick: o } = e;
    return (0, r.jsx)(h.ZP, {
        className: n,
        onDoubleClick: () => y(o),
        'aria-label': i,
        'aria-labelledby': l,
        role: a,
        children: t
    });
}
function b(e) {
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
        children: t ? (0, r.jsx)(R, N(g({}, n), { className: n.className })) : (0, r.jsx)(A, N(g({}, n), { className: n.className }))
    });
}
((b.Title = h.ZP.Title), (b.Icon = h.ZP.Icon), (b.ChannelIcon = h.ZP.ChannelIcon), (b.Divider = h.ZP.Divider), (b.Caret = h.ZP.Caret));
let C = b;
