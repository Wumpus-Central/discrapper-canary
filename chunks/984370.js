n.d(t, {
    O: () => N,
    Z: () => D,
}),
    n(35282);
var r = n(54381);
n(473749);
var i = n(873546),
    a = n(442837),
    o = n(475179),
    s = n(100527),
    l = n(906732),
    c = n(358221),
    u = n(185935),
    d = n(2818),
    f = n(954551),
    p = n(208450),
    _ = n(975146),
    m = n(979651),
    h = n(358085),
    g = n(998502),
    E = n(665149),
    b = n(981631),
    y = n(176505),
    O = n(979905);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
async function N(e) {
    if (!e && (0, h.isMac)() && h.isPlatformEmbedded) {
        var t, n, r;
        let e =
            null !=
            (r = await (null == (t = (n = window.DiscordNative.remoteApp).getDefaultDoubleClickAction)
                ? void 0
                : t.call(n)))
                ? r
                : "Maximize";
        "Minimize" === e ? g.ZP.minimize() : "Maximize" === e && g.ZP.maximize();
    }
}
function P(e) {
    let {
            children: t,
            className: n,
            channelId: s,
            channelType: l,
            guildId: h,
            innerClassname: g,
            transparent: v = !1,
            hidden: S = !1,
            toolbar: I,
            mobileToolbar: T,
            "aria-label": A,
            "aria-labelledby": C,
            scrollable: P,
            role: R,
            hideSearch: w,
            showDivider: D,
            disableDoubleClick: x,
        } = e,
        L = null == s || (0, y.AB)(s) ? null : s,
        j = (0, a.e7)([m.Z], () => m.Z.isInChannel(L) || !1),
        M = (0, a.e7)([c.Z], () => null != L && c.Z.getParticipantsListOpen(L)),
        { enabled: k, inInbox: U } = d.Z.useExperiment({ location: "HeaderBar" }),
        { hasParticipantsPanel: G } = (0, u.Z)({ location: "HeaderBar" });
    function Z() {
        if (null == I) return null;
        let e = null != s && !w;
        return i.tq
            ? T
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      I,
                      e && !(0, y.AB)(s)
                          ? (0, r.jsx)(
                                p.ZP,
                                {
                                    guildId: h,
                                    channelId: s,
                                    className: O.search,
                                },
                                null != h ? h : s,
                            )
                          : null,
                      D && (0, r.jsx)(E.ZP.Divider, {}),
                      k && !U ? (0, r.jsx)(f.Z, {}) : null,
                      G &&
                          j &&
                          null != L &&
                          !M &&
                          l === b.d4z.GROUP_DM &&
                          (0, r.jsxs)("div", {
                              className: O.controlButtonWrapper,
                              children: [
                                  (0, r.jsx)(E.ZP.Divider, {}),
                                  (0, r.jsx)(_.Z, { onClick: () => o.Z.toggleParticipantsList(L, !M) }),
                              ],
                          }),
                  ],
              });
    }
    return (0, r.jsx)(E.ZP, {
        className: n,
        innerClassName: g,
        toolbar: Z(),
        transparent: v,
        hidden: S,
        onDoubleClick: () => N(x),
        "aria-label": A,
        "aria-labelledby": C,
        role: R,
        scrollable: P,
        children: t,
    });
}
function R(e) {
    let { children: t, className: n, "aria-label": i, "aria-labelledby": a, role: o, disableDoubleClick: s } = e;
    return (0, r.jsx)(E.ZP, {
        className: n,
        onDoubleClick: () => N(s),
        "aria-label": i,
        "aria-labelledby": a,
        role: o,
        children: t,
    });
}
function w(e) {
    var { isAuthenticated: t = !0 } = e,
        n = A(e, ["isAuthenticated"]);
    let { analyticsLocations: i } = (0, l.ZP)(s.Z.HEADER_BAR);
    return (0, r.jsx)(l.Gt, {
        value: i,
        children: t
            ? (0, r.jsx)(P, T(S({}, n), { className: n.className }))
            : (0, r.jsx)(R, T(S({}, n), { className: n.className })),
    });
}
(w.Title = E.ZP.Title),
    (w.Icon = E.ZP.Icon),
    (w.ChannelIcon = E.ZP.ChannelIcon),
    (w.Divider = E.ZP.Divider),
    (w.Caret = E.ZP.Caret);
let D = w;
