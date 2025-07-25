(r.d(t, {
    O: () => E,
    Z: () => D
}),
    r(35282));
var n = r(255367);
r(73800);
var l = r(873546),
    a = r(442837),
    i = r(475179),
    c = r(100527),
    o = r(906732),
    s = r(358221),
    u = r(185935),
    b = r(2818),
    f = r(954551),
    p = r(208450),
    d = r(975146),
    O = r(979651),
    y = r(358085),
    g = r(998502),
    m = r(665149),
    j = r(981631),
    P = r(176505),
    h = r(220705);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
async function E(e) {
    if (!e && (0, y.isMac)() && y.isPlatformEmbedded) {
        var t, r, n;
        let e = null != (n = await (null == (t = (r = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : t.call(r))) ? n : 'Maximize';
        'Minimize' === e ? g.ZP.minimize() : 'Maximize' === e && g.ZP.maximize();
    }
}
function S(e) {
    let { children: t, className: r, channelId: c, channelType: o, guildId: y, innerClassname: g, transparent: v = !1, showToolbar: w = !0, toolbar: S, mobileToolbar: Z, 'aria-label': I, 'aria-labelledby': D, scrollable: N, role: x, hideSearch: C, showDivider: R, disableDoubleClick: T } = e,
        k = null == c || (0, P.AB)(c) ? null : c,
        A = (0, a.e7)([O.Z], () => O.Z.isInChannel(k) || !1),
        M = (0, a.e7)([s.Z], () => null != k && s.Z.getParticipantsListOpen(k)),
        { enabled: _, inInbox: L } = b.Z.useExperiment({ location: 'HeaderBar' }),
        { hasParticipantsPanel: G } = (0, u.Z)({ location: 'HeaderBar' });
    return (0, n.jsx)(m.ZP, {
        className: r,
        innerClassName: g,
        toolbar: (function () {
            if (null == S) return null;
            let e = null != c && !C;
            return l.tq
                ? Z
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          S,
                          e ? (0, n.jsx)(p.Z, { className: h.search }, null != y ? y : c) : null,
                          R && (0, n.jsx)(m.ZP.Divider, {}),
                          _ && !L ? (0, n.jsx)(f.Z, {}) : null,
                          G &&
                              A &&
                              null != k &&
                              !M &&
                              o === j.d4z.GROUP_DM &&
                              (0, n.jsxs)('div', {
                                  className: h.controlButtonWrapper,
                                  children: [(0, n.jsx)(m.ZP.Divider, {}), (0, n.jsx)(d.Z, { onClick: () => i.Z.toggleParticipantsList(k, !M) })]
                              })
                      ]
                  });
        })(),
        transparent: v,
        showToolbar: w,
        onDoubleClick: () => E(T),
        'aria-label': I,
        'aria-labelledby': D,
        role: x,
        scrollable: N,
        children: t
    });
}
function Z(e) {
    let { children: t, className: r, 'aria-label': l, 'aria-labelledby': a, role: i, disableDoubleClick: c } = e;
    return (0, n.jsx)(m.ZP, {
        className: r,
        onDoubleClick: () => E(c),
        'aria-label': l,
        'aria-labelledby': a,
        role: i,
        children: t
    });
}
function I(e) {
    var { isAuthenticated: t = !0 } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (l[r] = e[r]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) ((r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]));
            }
            return l;
        })(e, ['isAuthenticated']);
    let { analyticsLocations: l } = (0, o.ZP)(c.Z.HEADER_BAR);
    return (0, n.jsx)(o.Gt, {
        value: l,
        children: t ? (0, n.jsx)(S, w(v({}, r), { className: r.className })) : (0, n.jsx)(Z, w(v({}, r), { className: r.className }))
    });
}
((I.Title = m.ZP.Title), (I.Icon = m.ZP.Icon), (I.ChannelIcon = m.ZP.ChannelIcon), (I.Divider = m.ZP.Divider), (I.Caret = m.ZP.Caret));
let D = I;
