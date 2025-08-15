n.d(t, {
    O: () => P,
    Z: () => h,
}),
    n(35282);
var r = n(951288);
n(647438);
var i = n(873546),
    l = n(442837),
    a = n(475179),
    o = n(100527),
    c = n(906732),
    s = n(358221),
    u = n(185935),
    d = n(2818),
    _ = n(954551),
    E = n(819439),
    I = n(208450),
    T = n(975146),
    O = n(979651),
    p = n(358085),
    N = n(998502),
    f = n(665149),
    S = n(981631),
    m = n(176505),
    R = n(979905);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function g(e, t) {
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
async function P(e) {
    if (!e && (0, p.isMac)() && p.isPlatformEmbedded) {
        var t, n, r;
        let e =
            null !=
            (r = await (null == (t = (n = window.DiscordNative.remoteApp).getDefaultDoubleClickAction)
                ? void 0
                : t.call(n)))
                ? r
                : "Maximize";
        "Minimize" === e ? N.ZP.minimize() : "Maximize" === e && N.ZP.maximize();
    }
}
function C(e) {
    let {
            children: t,
            className: n,
            channelId: o,
            channelType: c,
            guildId: p,
            innerClassname: N,
            transparent: A = !1,
            showToolbar: g = !0,
            toolbar: C,
            mobileToolbar: D,
            "aria-label": y,
            "aria-labelledby": h,
            scrollable: b,
            role: U,
            hideSearch: M,
            showDivider: v,
            disableDoubleClick: Z,
        } = e,
        L = null == o || (0, m.AB)(o) ? null : o,
        k = (0, l.e7)([O.Z], () => O.Z.isInChannel(L) || !1),
        j = (0, l.e7)([s.Z], () => null != L && s.Z.getParticipantsListOpen(L)),
        { enabled: x, inInbox: F } = d.Z.useExperiment({ location: "HeaderBar" }),
        { hasParticipantsPanel: G } = (0, u.Z)({ location: "HeaderBar" }),
        V = (0, E.$)({ location: "HeaderBar" });
    return (0, r.jsx)(f.ZP, {
        className: n,
        innerClassName: N,
        toolbar: (function () {
            if (null == C) return null;
            let e = null != o && !M && !V;
            return i.tq
                ? D
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          C,
                          e && !(0, m.AB)(o)
                              ? (0, r.jsx)(
                                    I.Z,
                                    {
                                        guildId: p,
                                        channelId: o,
                                        className: R.search,
                                    },
                                    null != p ? p : o,
                                )
                              : null,
                          v && (0, r.jsx)(f.ZP.Divider, {}),
                          x && !F ? (0, r.jsx)(_.Z, {}) : null,
                          G &&
                              k &&
                              null != L &&
                              !j &&
                              c === S.d4z.GROUP_DM &&
                              (0, r.jsxs)("div", {
                                  className: R.controlButtonWrapper,
                                  children: [
                                      (0, r.jsx)(f.ZP.Divider, {}),
                                      (0, r.jsx)(T.Z, { onClick: () => a.Z.toggleParticipantsList(L, !j) }),
                                  ],
                              }),
                      ],
                  });
        })(),
        transparent: A,
        showToolbar: g,
        onDoubleClick: () => P(Z),
        "aria-label": y,
        "aria-labelledby": h,
        role: U,
        scrollable: b,
        children: t,
    });
}
function D(e) {
    let { children: t, className: n, "aria-label": i, "aria-labelledby": l, role: a, disableDoubleClick: o } = e;
    return (0, r.jsx)(f.ZP, {
        className: n,
        onDoubleClick: () => P(o),
        "aria-label": i,
        "aria-labelledby": l,
        role: a,
        children: t,
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["isAuthenticated"]);
    let { analyticsLocations: i } = (0, c.ZP)(o.Z.HEADER_BAR);
    return (0, r.jsx)(c.Gt, {
        value: i,
        children: t
            ? (0, r.jsx)(C, g(A({}, n), { className: n.className }))
            : (0, r.jsx)(D, g(A({}, n), { className: n.className })),
    });
}
(y.Title = f.ZP.Title),
    (y.Icon = f.ZP.Icon),
    (y.ChannelIcon = f.ZP.ChannelIcon),
    (y.Divider = f.ZP.Divider),
    (y.Caret = f.ZP.Caret);
let h = y;
