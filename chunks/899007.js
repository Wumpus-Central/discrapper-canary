n.d(t, { Z: () => P }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(420660),
    u = n(100527),
    d = n(906732),
    f = n(140701),
    _ = n(158776),
    p = n(74538),
    h = n(998502),
    m = n(785717),
    g = n(369566),
    E = n(518950),
    b = n(652853),
    y = n(228168),
    O = n(981631),
    v = n(474936),
    I = n(671955),
    T = n(66856);
function S(e, t, n) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = h.ZP.getEnableHardwareAcceleration() ? l.Xo$ : l.qEK;
function P(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: a,
            channelId: h,
            themeType: S,
            animateOnHover: C,
            onOpenProfile: P,
            className: D,
            previewStatus: w,
        } = e,
        { theme: L } = (0, b.z)(),
        { analyticsLocations: x } = (0, d.ZP)(u.Z.AVATAR),
        { trackUserProfileAction: M } = (0, m.KZ)(),
        k = p.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, v.PremiumTypes.TIER_2),
        j = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, h), [t, h]),
        { live: U } = (0, g.Z)(t.id),
        [G] = U,
        { status: B, isMobileOnline: Z } = (0, s.cj)([_.Z], () => ({
            status: (0, c.Z)(G) ? O.Skl.STREAMING : _.Z.getStatus(t.id),
            isMobileOnline: _.Z.isMobileOnline(t.id),
        })),
        F = void 0 !== w ? w : B,
        V = [I.l.MODAL, I.l.MODAL_V2].includes(S) ? l.EFr.SIZE_120 : l.EFr.SIZE_80,
        H = o()(T.avatar, D),
        {
            avatarDecorationSrc: Y,
            avatarSrc: W,
            eventHandlers: K,
        } = (0, E.Z)({
            userId: t.id,
            guildId: null != n ? n.guildId : a,
            size: V,
            animateOnHover: C,
        }),
        z = (0, r.jsx)(R, {
            src: W,
            avatarDecoration: Y,
            size: V,
            "aria-label": t.username,
            imageClassName: null != P ? T.overlay : void 0,
            status: j ? O.Skl.UNKNOWN : F,
            statusBackdropColor: k && !j ? (0, l.QFD)(L) : void 0,
            isMobile: Z,
            statusTooltip: !0,
            statusTooltipDelay: y.vB,
        });
    return null == P
        ? (0, r.jsx)(
              "div",
              N(A({}, K), {
                  className: H,
                  children: z,
              }),
          )
        : (0, r.jsx)(
              l.P3F,
              N(A({}, K), {
                  className: o()(H, T.clickable),
                  focusProps: { ringClassName: T.focusRing },
                  onClick: () => {
                      M({
                          action: "PRESS_VIEW_PROFILE",
                          analyticsLocations: x,
                      }),
                          null == P || P();
                  },
                  children: z,
              }),
          );
}
