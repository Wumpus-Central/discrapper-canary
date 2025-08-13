n.d(t, {
    O: () => R,
    Z: () => L,
}),
    n(35282);
var r = n(255367);
n(73800);
var i = n(873546),
    o = n(442837),
    a = n(475179),
    s = n(100527),
    l = n(906732),
    c = n(358221),
    u = n(185935),
    d = n(2818),
    f = n(954551),
    _ = n(819439),
    p = n(208450),
    h = n(975146),
    m = n(979651),
    g = n(358085),
    E = n(998502),
    b = n(665149),
    y = n(981631),
    O = n(176505),
    v = n(284896);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
async function R(e) {
    if (!e && (0, g.isMac)() && g.isPlatformEmbedded) {
        var t, n, r;
        let e =
            null !=
            (r = await (null == (t = (n = window.DiscordNative.remoteApp).getDefaultDoubleClickAction)
                ? void 0
                : t.call(n)))
                ? r
                : "Maximize";
        "Minimize" === e ? E.ZP.minimize() : "Maximize" === e && E.ZP.maximize();
    }
}
function P(e) {
    let {
            children: t,
            className: n,
            channelId: s,
            channelType: l,
            guildId: g,
            innerClassname: E,
            transparent: I = !1,
            showToolbar: T = !0,
            toolbar: S,
            mobileToolbar: A,
            "aria-label": N,
            "aria-labelledby": C,
            scrollable: P,
            role: w,
            hideSearch: D,
            showDivider: L,
            disableDoubleClick: x,
        } = e,
        M = null == s || (0, O.AB)(s) ? null : s,
        j = (0, o.e7)([m.Z], () => m.Z.isInChannel(M) || !1),
        k = (0, o.e7)([c.Z], () => null != M && c.Z.getParticipantsListOpen(M)),
        { enabled: U, inInbox: G } = d.Z.useExperiment({ location: "HeaderBar" }),
        { hasParticipantsPanel: B } = (0, u.Z)({ location: "HeaderBar" }),
        Z = (0, _.$)({ location: "HeaderBar" });
    function F() {
        if (null == S) return null;
        let e = null != s && !D && !Z;
        return i.tq
            ? A
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      S,
                      e && !(0, O.AB)(s)
                          ? (0, r.jsx)(
                                p.Z,
                                {
                                    guildId: g,
                                    channelId: s,
                                    className: v.search,
                                },
                                null != g ? g : s,
                            )
                          : null,
                      L && (0, r.jsx)(b.ZP.Divider, {}),
                      U && !G ? (0, r.jsx)(f.Z, {}) : null,
                      B &&
                          j &&
                          null != M &&
                          !k &&
                          l === y.d4z.GROUP_DM &&
                          (0, r.jsxs)("div", {
                              className: v.controlButtonWrapper,
                              children: [
                                  (0, r.jsx)(b.ZP.Divider, {}),
                                  (0, r.jsx)(h.Z, { onClick: () => a.Z.toggleParticipantsList(M, !k) }),
                              ],
                          }),
                  ],
              });
    }
    return (0, r.jsx)(b.ZP, {
        className: n,
        innerClassName: E,
        toolbar: F(),
        transparent: I,
        showToolbar: T,
        onDoubleClick: () => R(x),
        "aria-label": N,
        "aria-labelledby": C,
        role: w,
        scrollable: P,
        children: t,
    });
}
function w(e) {
    let { children: t, className: n, "aria-label": i, "aria-labelledby": o, role: a, disableDoubleClick: s } = e;
    return (0, r.jsx)(b.ZP, {
        className: n,
        onDoubleClick: () => R(s),
        "aria-label": i,
        "aria-labelledby": o,
        role: a,
        children: t,
    });
}
function D(e) {
    var { isAuthenticated: t = !0 } = e,
        n = N(e, ["isAuthenticated"]);
    let { analyticsLocations: i } = (0, l.ZP)(s.Z.HEADER_BAR);
    return (0, r.jsx)(l.Gt, {
        value: i,
        children: t
            ? (0, r.jsx)(P, A(T({}, n), { className: n.className }))
            : (0, r.jsx)(w, A(T({}, n), { className: n.className })),
    });
}
(D.Title = b.ZP.Title),
    (D.Icon = b.ZP.Icon),
    (D.ChannelIcon = b.ZP.ChannelIcon),
    (D.Divider = b.ZP.Divider),
    (D.Caret = b.ZP.Caret);
let L = D;
