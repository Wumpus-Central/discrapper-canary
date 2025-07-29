(n.d(t, {
    O: () => R,
    Z: () => b
}),
    n(35282));
var r = n(255367);
n(73800);
var i = n(873546),
    l = n(442837),
    a = n(475179),
    o = n(100527),
    c = n(906732),
    s = n(358221),
    u = n(185935),
    d = n(2818),
    _ = n(954551),
    E = n(208450),
    O = n(975146),
    I = n(979651),
    p = n(358085),
    T = n(998502),
    S = n(665149),
    N = n(981631),
    f = n(176505),
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
function A(e, t) {
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
    if (!e && (0, p.isMac)() && p.isPlatformEmbedded) {
        var t, n, r;
        let e = null != (r = await (null == (t = (n = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : t.call(n))) ? r : 'Maximize';
        'Minimize' === e ? T.ZP.minimize() : 'Maximize' === e && T.ZP.maximize();
    }
}
function P(e) {
    let { children: t, className: n, channelId: o, channelType: c, guildId: p, innerClassname: T, transparent: g = !1, showToolbar: A = !0, toolbar: P, mobileToolbar: C, 'aria-label': y, 'aria-labelledby': b, scrollable: D, role: h, hideSearch: U, showDivider: M, disableDoubleClick: v } = e,
        Z = null == o || (0, f.AB)(o) ? null : o,
        j = (0, l.e7)([I.Z], () => I.Z.isInChannel(Z) || !1),
        L = (0, l.e7)([s.Z], () => null != Z && s.Z.getParticipantsListOpen(Z)),
        { enabled: k, inInbox: x } = d.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: F } = (0, u.Z)({ location: 'HeaderBar' });
    return (0, r.jsx)(S.ZP, {
        className: n,
        innerClassName: T,
        toolbar: (function () {
            if (null == P) return null;
            let e = null != o && !U;
            return i.tq
                ? C
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          P,
                          e && !(0, f.AB)(o)
                              ? (0, r.jsx)(
                                    E.Z,
                                    {
                                        guildId: p,
                                        channelId: o,
                                        className: m.search
                                    },
                                    null != p ? p : o
                                )
                              : null,
                          M && (0, r.jsx)(S.ZP.Divider, {}),
                          k && !x ? (0, r.jsx)(_.Z, {}) : null,
                          F &&
                              j &&
                              null != Z &&
                              !L &&
                              c === N.d4z.GROUP_DM &&
                              (0, r.jsxs)('div', {
                                  className: m.controlButtonWrapper,
                                  children: [(0, r.jsx)(S.ZP.Divider, {}), (0, r.jsx)(O.Z, { onClick: () => a.Z.toggleParticipantsList(Z, !L) })]
                              })
                      ]
                  });
        })(),
        transparent: g,
        showToolbar: A,
        onDoubleClick: () => R(v),
        'aria-label': y,
        'aria-labelledby': b,
        role: h,
        scrollable: D,
        children: t
    });
}
function C(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: a, disableDoubleClick: o } = e;
    return (0, r.jsx)(S.ZP, {
        className: n,
        onDoubleClick: () => R(o),
        'aria-label': i,
        'aria-labelledby': l,
        role: a,
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
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['isAuthenticated']);
    let { analyticsLocations: i } = (0, c.ZP)(o.Z.HEADER_BAR);
    return (0, r.jsx)(c.Gt, {
        value: i,
        children: t ? (0, r.jsx)(P, A(g({}, n), { className: n.className })) : (0, r.jsx)(C, A(g({}, n), { className: n.className }))
    });
}
((y.Title = S.ZP.Title), (y.Icon = S.ZP.Icon), (y.ChannelIcon = S.ZP.ChannelIcon), (y.Divider = S.ZP.Divider), (y.Caret = S.ZP.Caret));
let b = y;
